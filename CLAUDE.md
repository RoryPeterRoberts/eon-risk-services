# EON Risk Services — Claude Code Project Instructions

## What This Business Is

EON Risk Services (eonriskservices.com) is an **AI-as-a-Service consultancy for Irish SMEs**, founded by Rory Roberts. The business has two product lines:

1. **AIaaS Consulting** — Custom AI solutions for SMEs (€500–€15,000 per engagement)
2. **Meitheal** — A self-building website product (new, launching March 2026)

## What Meitheal Is

Meitheal (pronounced "meh-hal") is an open-source website kit that builds itself. A user downloads the code, plugs in an API key, follows a setup wizard, and then describes what they want in plain English. An AI agent writes the code, commits it to their GitHub, and Vercel deploys it live.

**The tagline:** "Download it. Plug in your API key. Tell it what you want. It builds itself."

**The working prototype already exists** at `/home/rory/Meitheal_Test_Setup/Blackwater/` — a community platform that was the proof-of-concept. It uses:
- Plain HTML/CSS/JS (no frameworks, no build step)
- Supabase (database + auth)
- Vercel (hosting + serverless functions)
- GitHub (code storage, auto-deploy on commit)
- AI agent with tool-use (writes files, runs SQL, commits to GitHub)

## Pricing Tiers (Decided)

| Tier | Price | What They Get |
|------|-------|---------------|
| **Free** (Open Source) | €0 | Full Meitheal engine. Deploy yourself. |
| **Starter** (Template Packs) | €49 one-time | Pre-built site archetypes (Restaurant, Trades, B&B, Club, Portfolio) |
| **Done-For-You** (Setup Service) | €199 one-time | We deploy, configure, brand, and hand over on a video call |
| **Managed** (Hosted & Maintained) | €29/month | We host it, monitor it, maintain it. 20 AI features/month included |

## Launch Constraints

- **Budget:** Under €200 total
- **No investors** — bootstrapped, straight to market
- **Timeline:** 3 weeks (build → polish → launch)
- **Marketing:** LinkedIn organic + Product Hunt + Hacker News + Reddit
- **All infrastructure runs on free tiers** (Vercel, Supabase, GitHub)

## What Has Been Done

- [x] Business plan written and exported to PDF (`/home/rory/EONRiskServices/Meitheal-Business-Plan.pdf`)
- [x] Business plan HTML source (`/home/rory/EONRiskServices/meitheal-business-plan.html`)
- [x] Pricing tiers decided (Free / €49 / €199 / €29mo)
- [x] Viral LinkedIn launch strategy planned (5-post sequence in the business plan)
- [x] 17-agent product roadmap defined
- [x] Meitheal engine built and working (at `/home/rory/Meitheal_Test_Setup/Blackwater/`)
- [x] EON website live at eonriskservices.com (source: `/home/rory/EONRiskServices/website/`)

## What Needs Building Next

### Week 1 — Templates & Landing Page
1. **Create 3 template packs** — each is a Meitheal deployment pre-configured for a specific business type:
   - Restaurant / Café
   - Tradesperson / Contractor
   - Club / Community Group
   Each template needs: branded theme, sample pages, pre-configured AI prompts in AGENT.md
2. **Build a Meitheal product page** on eonriskservices.com (`website/meitheal.html`)
3. **Add Stripe checkout** for €49 template pack purchases
4. **Record a 90-second demo video** (screen recording of building a site from scratch)

### Week 2 — Polish & Launch Prep
5. **Clean up Meitheal GitHub repo** for public open-source release
6. **Write 5 LinkedIn posts** (staggered for launch week — see business plan page 6 for the exact sequence)
7. **Prep Product Hunt listing**
8. **Test full flow end-to-end** with 3 beta users

### Week 3 — Launch
9. LinkedIn post #1 goes live + Product Hunt + GitHub goes public
10. Daily LinkedIn posts for 5 days
11. Offer free setups to first 10 businesses who comment

## Key File Locations

| What | Where |
|------|-------|
| EON website source | `/home/rory/EONRiskServices/website/` |
| EON website CSS/design system | `/home/rory/EONRiskServices/website/css/style.css` |
| EON website deployed | `https://eonriskservices.com` |
| Meitheal engine (working prototype) | `/home/rory/Meitheal_Test_Setup/Blackwater/` |
| Meitheal CLAUDE.md (agent instructions) | `/home/rory/Meitheal_Test_Setup/Blackwater/CLAUDE.md` |
| Meitheal agent code | `/home/rory/Meitheal_Test_Setup/Blackwater/api/agent.js` |
| Meitheal setup wizard | `/home/rory/Meitheal_Test_Setup/Blackwater/setup.html` |
| Meitheal theme | `/home/rory/Meitheal_Test_Setup/Blackwater/theme.css` |
| Business plan PDF | `/home/rory/EONRiskServices/Meitheal-Business-Plan.pdf` |
| Business plan HTML | `/home/rory/EONRiskServices/meitheal-business-plan.html` |
| Book (Risk Identification) | `/home/rory/EONRiskServices/book/` |

## Tech Stack

- **Frontend:** Plain HTML/CSS/JS — no frameworks, no build step
- **Hosting:** Vercel (static files + serverless functions in `api/`)
- **Database:** Supabase (Postgres + Auth + Row Level Security)
- **Payments:** Stripe (for template purchases)
- **AI Providers:** Anthropic Claude (primary), OpenAI, Groq, Ollama (alternatives)
- **Deployment:** Vercel auto-deploys on GitHub push
- **Design tokens:** CSS variables in `style.css` — navy (#1B2A4A), gold (#C5A55A), teal (#2A7F7F), offwhite (#F8F7F4)
- **Fonts:** Playfair Display (headings), Inter (body)

## EON Branding Rules

- Navy + gold + teal colour palette — always use CSS variables
- Playfair Display for headings, Inter for body text
- Tone: Professional but accessible. "Enterprise AI. Local Price."
- No emojis in professional content
- Irish-market focused — reference LEO grants, Irish SME stats where relevant

## Hard Rules

- **No frameworks.** Plain HTML/CSS/JS only.
- **Every page is self-contained** — one `.html` file with inline `<style>` or linked CSS.
- **Never hardcode colours** — use `var(--navy)`, `var(--gold)`, etc.
- **The Meitheal agent's system prompt and tools are protected** — never modify `api/agent.js` without explicit discussion.
- **All infrastructure must work on free tiers** until revenue justifies upgrades.
- **Customer owns everything** — code in their GitHub, data in their Supabase. Zero vendor lock-in. This is a core selling point, not a nice-to-have.
