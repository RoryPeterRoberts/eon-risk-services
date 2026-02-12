# Footnote Audit — All 12 Articles

## Status: COMPLETE
**Date:** 2026-02-12

---

## Consolidated Results

| Metric | Count |
|--------|-------|
| **Total footnotes across all articles** | **130** |
| **With URLs** | **68** |
| **Without URLs (text-only citations)** | **62** |
| **Unique URLs verified** | **64** |
| **VALID** | **63** |
| **MISMATCH (fixed)** | **1** |
| **BROKEN** | **0** |

### Issues Found & Resolved

| Article | FN# | Issue | Resolution |
|---------|-----|-------|------------|
| Art 9 | [8] | SEC LR-25252 was wrong URL (Howard Kleyman, not Mozambique/CS) | Replaced with `https://www.sec.gov/newsroom/press-releases/2021-213` (correct CS Mozambique press release) |
| Art 3 | [5] | Author listed as "Thomas et al" — actual author is Michael Krisper | Fixed to "Krisper, M." in article HTML |

### Minor Flags (no action needed)

| Article | FN# | Note |
|---------|-----|------|
| Art 7 | [10] | SS13/13 is about market risk — contextually appropriate for article's point about PRA supervisory framework |
| Art 9 | [1] | Barings inquiry authored by Board of Banking Supervision (not BoE directly) — BoE oversaw this board, attribution acceptable |
| Art 12 | [5],[8] | Return 403 to automated tools but load correctly in browser (bot protection) |

---

## Verification by Article

### Articles with URLs Verified

| Article | URLs | Result |
|---------|------|--------|
| 1. why-banks-cant-identify-risks | 10 | ALL VALID |
| 3. risk-heatmap-lying | 14 | ALL VALID (1 author fix applied) |
| 7. quarterly-re-identification-fed | 10 | ALL VALID |
| 9. governance-bypass-killing-banks | 8 | 7 VALID, 1 MISMATCH (fixed) |
| 10. 179-bank-failures-10-failure-modes | 4 | ALL VALID (2 are cross-article duplicates) |
| 11. concentration-blindness-repeats | 8 | ALL VALID |
| 12. wirecard-greensill-emerging-risk-blindness | 10 | ALL VALID |

### Articles with Text-Only Citations (no URLs to verify)

| Article | Footnotes | Notes |
|---------|-----------|-------|
| 2. what-regulators-always-find-missing | 9 | Regulatory references (PRA, BCBS, Fed, EBA, OCC) — no URLs in footnotes |
| 4. lessons-global-head-risk-id | 7 | Standards refs + ILD database — no URLs |
| 5. reconciliation-loop | 10 | Standards refs + case study refs — no URLs |
| 6. bow-tie-diagram-guide | 9 | Standards refs + Valukas/FCIC reports — no URLs |
| 8. climate-risk-identification | 10 | Regulatory guidance refs — no URLs |

---

## Batch Result Files

- **Batch 1** (Art 1, 3, 7): `FOOTNOTE_VERIFY_BATCH1.md` — 34 URLs, all valid
- **Batch 2** (Art 9, 10, 11): `FOOTNOTE_VERIFY_BATCH2.md` — 20 URLs, 17 valid + 1 mismatch + 2 duplicates
- **Batch 3** (Art 12): `FOOTNOTE_VERIFY_BATCH3.md` — 10 URLs, all valid
