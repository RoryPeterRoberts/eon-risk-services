#!/usr/bin/env python3
"""
EON Risk Sentinel — daily regulator scan.

Fetches recent items from global financial regulator RSS feeds, ranks each
for relevance to frontier finance (fintechs, crypto funds, hedge funds,
AI-native startups) using Claude, and writes sentinel.json for the live
page at eonriskservices.com/sentinel.html.
"""
from __future__ import annotations

import json
import os
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

import feedparser
from anthropic import Anthropic

ROOT = Path(__file__).parent
OUTPUT_JSON = ROOT.parent / "website" / "data" / "sentinel.json"
LOOKBACK_HOURS = 72
MAX_ITEMS_TO_RANK = 40
MODEL = "claude-sonnet-4-6"

SOURCES = [
    ("ECB", "European Central Bank", "https://www.ecb.europa.eu/rss/press.html"),
    ("FED", "US Federal Reserve", "https://www.federalreserve.gov/feeds/press_all.xml"),
    ("SEC", "US Securities and Exchange Commission", "https://www.sec.gov/news/pressreleases.rss"),
    ("BOE", "Bank of England", "https://www.bankofengland.co.uk/rss/news"),
    ("FCA", "UK Financial Conduct Authority", "https://www.fca.org.uk/news/rss.xml"),
    ("EBA", "European Banking Authority", "https://www.eba.europa.eu/rss.xml"),
]

RANKING_PROMPT = """You are a senior risk manager scoring regulator publications for their relevance to frontier-finance firms: fintechs, crypto funds, prop shops, hedge funds, AI-native startups, stablecoin issuers, tokenisation platforms.

You will receive a list of recent regulator publications as JSON. For each item, return a JSON object with:
- "id" (integer, matching input)
- "score" (integer 1-5, where 5 = immediate impact on frontier finance, 1 = not relevant)
- "category" (one of: "market", "credit", "liquidity", "operational", "model", "compliance", "crypto", "ai", "other")
- "summary" (one sentence, max 25 words, describing what the publication says)
- "why_it_matters" (one sentence, max 30 words, explaining why a CRO at a fintech or crypto fund should care — or why they shouldn't)

Return ONLY a JSON array of objects, no markdown fences, no preamble.

Favour items about: new capital requirements, AI model risk, crypto regulation, stablecoin rules, fintech licensing, market stress events, enforcement actions on modern firms, digital operational resilience (DORA), MiCA, SEC crypto cases, Fed balance sheet actions.

Down-rank items about: routine speeches, internal HR announcements, legacy bank-only topics, historical record corrections, holiday closures, generic economic commentary.

Publications to rank:
{items_json}
"""


def load_api_key() -> str:
    key = os.environ.get("ANTHROPIC_API_KEY")
    if key:
        return key
    env_file = ROOT / ".env"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if line.startswith("ANTHROPIC_API_KEY="):
                return line.split("=", 1)[1].strip().strip('"').strip("'")
    raise SystemExit("ANTHROPIC_API_KEY not found. Set env var or add to sentinel/.env")


def fetch_items() -> list[dict]:
    cutoff = datetime.now(timezone.utc) - timedelta(hours=LOOKBACK_HOURS)
    items: list[dict] = []
    for code, name, url in SOURCES:
        try:
            feed = feedparser.parse(url)
            if feed.bozo and not feed.entries:
                print(f"[warn] {code}: feed error, skipping", file=sys.stderr)
                continue
            for entry in feed.entries[:25]:
                published = entry.get("published_parsed") or entry.get("updated_parsed")
                if published:
                    when = datetime(*published[:6], tzinfo=timezone.utc)
                    if when < cutoff:
                        continue
                else:
                    when = datetime.now(timezone.utc)
                items.append({
                    "id": len(items),
                    "source_code": code,
                    "source_name": name,
                    "title": entry.get("title", "").strip(),
                    "link": entry.get("link", "").strip(),
                    "published": when.isoformat(),
                    "summary_raw": (entry.get("summary", "") or "")[:500].strip(),
                })
            print(f"[ok]   {code}: {len([i for i in items if i['source_code']==code])} recent items", file=sys.stderr)
        except Exception as e:
            print(f"[err]  {code}: {e}", file=sys.stderr)
    return items[:MAX_ITEMS_TO_RANK]


def rank_items(client: Anthropic, items: list[dict]) -> list[dict]:
    if not items:
        return []
    ranking_input = [
        {"id": i["id"], "source": i["source_code"], "title": i["title"], "summary": i["summary_raw"]}
        for i in items
    ]
    prompt = RANKING_PROMPT.format(items_json=json.dumps(ranking_input, ensure_ascii=False, indent=2))
    resp = client.messages.create(
        model=MODEL,
        max_tokens=4096,
        messages=[{"role": "user", "content": prompt}],
    )
    text = "".join(block.text for block in resp.content if getattr(block, "type", None) == "text")
    text = text.strip()
    if text.startswith("```"):
        text = text.split("\n", 1)[1] if "\n" in text else text[3:]
        if text.endswith("```"):
            text = text.rsplit("```", 1)[0]
    try:
        rankings = json.loads(text)
    except json.JSONDecodeError as e:
        print(f"[err]  ranker returned non-JSON: {e}\n{text[:500]}", file=sys.stderr)
        return []
    by_id = {r["id"]: r for r in rankings if isinstance(r, dict) and "id" in r}
    enriched: list[dict] = []
    for item in items:
        r = by_id.get(item["id"])
        if not r:
            continue
        enriched.append({
            "source_code": item["source_code"],
            "source_name": item["source_name"],
            "title": item["title"],
            "link": item["link"],
            "published": item["published"],
            "score": int(r.get("score", 0)),
            "category": r.get("category", "other"),
            "summary": r.get("summary", "").strip(),
            "why_it_matters": r.get("why_it_matters", "").strip(),
        })
    enriched.sort(key=lambda x: (-x["score"], x["published"]), reverse=False)
    enriched.sort(key=lambda x: x["score"], reverse=True)
    return enriched


def main() -> int:
    api_key = load_api_key()
    client = Anthropic(api_key=api_key)
    print(f"[run]  scanning {len(SOURCES)} regulators, lookback {LOOKBACK_HOURS}h", file=sys.stderr)
    items = fetch_items()
    print(f"[run]  fetched {len(items)} recent items total", file=sys.stderr)
    ranked = rank_items(client, items) if items else []
    print(f"[run]  ranked {len(ranked)} items", file=sys.stderr)
    output = {
        "scanned_at": datetime.now(timezone.utc).isoformat(),
        "lookback_hours": LOOKBACK_HOURS,
        "sources": [{"code": c, "name": n} for c, n, _ in SOURCES],
        "item_count": len(ranked),
        "items": ranked,
        "model": MODEL,
    }
    OUTPUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_JSON.write_text(json.dumps(output, indent=2, ensure_ascii=False))
    print(f"[done] wrote {OUTPUT_JSON}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
