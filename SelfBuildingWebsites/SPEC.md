# BuildMySite — Product Specification

**Status:** APPROVED — Ready for phased build (approved 2 March 2026)
**Owner:** Rory Roberts, EON Risk Services
**Date:** 2 March 2026

---

## 1. What Is This?

An EON-branded interactive wizard that takes a non-technical person from zero to a live, personalised website they fully own. The user creates accounts on free services (Vercel, GitHub), gets an AI API key, connects them via the wizard, and the AI builds their complete website — deployed live, code in their GitHub. They own everything. EON owns nothing.

The wizard IS the product. The AI is invisible — just the engine under the hood. The user never talks to an agent, never sees code, never touches a terminal.

**Parent brand:** EON Risk Services
**Product name:** BuildMySite
**URL:** eonriskservices.com/buildmysite
**Visual identity:** EON brand (navy/gold/teal, Playfair + Inter)
**License:** Open source

---

## 2. Decisions Made

### Product Model
- Free product, revenue from services. The wizard and the resulting website cost nothing.
- Revenue comes from done-for-you (€199), managed (€29/mo), and consulting upsells.
- The product is lead generation. Goal is adoption and word-of-mouth.
- No cost to EON per user. User provides their own AI API key, their own Vercel, their own GitHub.

### User Journey
- User deploys to their own infrastructure. Once deployed, completely off EON's books.
- Interactive wizard validates each step. No room to get lost.
- Wizard collects business info AND builds the site. Output: a live URL + admin panel.
- Zero friction: create accounts, get tokens, paste them in. Wizard does the rest via APIs.

### What Gets Built
- Tier 1: static brochure sites with a working contact form (Vercel serverless + email service).
- AI decides pages based on business description. Generic wizard, smart output.
- Ongoing AI access via admin panel ("What would you like to change?" + build history with undo).
- Two deliverables: the wizard (on eonriskservices.com) and the site kit (on user's Vercel).

### Architecture
- AI agent runs server-side as Vercel serverless function.
- Plain HTML/CSS/JS. No frameworks, no build step.
- GitHub commits trigger Vercel auto-deploy.
- API-driven setup (Vercel + GitHub APIs). No manual steps that go stale.
- Images stored in Vercel Blob (user's account, free tier, CDN-served).
- Build is sequential: agent plans, then writes files one at a time.

### AI Provider
- Top-tier models only: Gemini 3.1 Pro, Claude Opus 4.6, Claude Sonnet 4.6, GPT 5.2.
- Wizard validates API key and model access. Rejects anything not approved.

### Target Audience
- Global from day one, launched from Ireland. Irish founder story is the narrative.
- Generic: one wizard path for all business types. AI tailors the output.

### Launch
- Screen recording demo video (under 2 minutes) — the LinkedIn post, Product Hunt demo, and landing page hero.
- LinkedIn organic is primary channel.
- Open source.

---

## 3. Architecture Overview

### Component 1: The Wizard (lives on eonriskservices.com)

A single page at `/buildmysite` on the EON website. Four steps:

1. **Connect** — User pastes GitHub token, Vercel token, AI API key. Wizard validates each (checks API key against approved model list, tests GitHub/Vercel tokens). Links to provider pages for account creation.

2. **Discover** — User types business name. AI searches the web (Google, social media, directories) and pre-fills: description, address, phone, opening hours, images. The wow moment.

3. **Review & Enrich** — AI presents what it found. User confirms, corrects, adds logo/photos, tweaks description. Free text box for extras ("I also offer catering", "add a testimonials section").

4. **Build** — Wizard uses Vercel API to create project, GitHub API to create repo, pushes the site kit code, sets env vars, then triggers the AI agent to generate the personalised site. Progress shown live. Ends with: live URL + admin panel link.

### Component 2: The Site Kit (deployed to user's Vercel)

The code that lives in the user's GitHub repo and runs on their Vercel:

- **Static pages** — AI-generated HTML/CSS/JS. Home, about, services, contact, plus whatever the AI decides based on the business type.
- **Contact form** — Vercel serverless function (`/api/contact.js`) that sends form submissions via email (Resend free tier).
- **Admin panel** — Single page (`/admin.html`) with:
  - Text input: "What would you like to change?"
  - Build history: list of past AI changes with timestamps
  - Undo button: rolls back the last change (restores previous file versions from GitHub)
- **AI agent** — Vercel serverless function (`/api/agent.js`) that:
  - Receives instructions from the admin panel
  - Reads/writes files via GitHub API
  - Commits changes (triggers Vercel auto-deploy)
  - Tracks build history for rollback
- **Config** — Environment variables on Vercel: AI API key, GitHub token, Vercel token.

### What the AI Agent Can Do (Tools)

| Tool | Purpose |
|------|---------|
| `read_file` | Read a file from the GitHub repo |
| `write_file` | Create/update a file (commits to GitHub, triggers deploy) |
| `delete_file` | Remove a file |
| `list_files` | List all files in the repo |
| `rollback` | Restore a file to its previous version |
| `send_email` | Test the contact form |

### Security

- User's API key stored as Vercel environment variable — never in code, never in client-side JS.
- Admin panel protected by a simple password/token set during wizard setup.
- Agent only accessible via authenticated requests from the admin panel.
- All AI calls happen server-side. Keys never reach the browser.

---

## 4. Build Phases

Each phase is a complete deliverable: spec, build, test, verify. Nothing half-built.

### Phase 1: Project Foundation
- Create project structure in `/home/rory/EONRiskServices/SelfBuildingWebsites/`
- Set up the site kit scaffold: folder structure, base files, package.json, vercel.json
- Create the base HTML/CSS design system for generated sites (responsive, clean, professional)
- No AI, no wizard — just the static foundation that everything builds on
- **Test:** Deploy scaffold to a test Vercel project, confirm it serves a page

### Phase 2: AI Agent (Server-Side)
- Build `/api/agent.js` — the core serverless function
- Implement tools: read_file, write_file, delete_file, list_files
- Multi-provider support (Anthropic, OpenAI, Google) with model validation
- System prompt that generates quality brochure sites
- **Test:** Call the agent API directly with a test prompt, confirm it writes files to GitHub

### Phase 3: Site Builder Logic
- Build the agent's site-generation capability
- Given business info (name, description, type, contact details), agent plans and builds a complete multi-page brochure site
- Sequential build: plan → index.html → about.html → services.html → contact.html → any extras
- Each file uses the design system from Phase 1
- **Test:** Feed the agent 3 different business descriptions, verify it produces 3 distinct, quality sites

### Phase 4: Contact Form
- Build `/api/contact.js` — serverless function that receives form submissions and sends email
- Integrate with Resend (free tier) for transactional email
- Build the contact form HTML that the agent includes in generated sites
- **Test:** Submit a form, confirm email arrives

### Phase 5: Admin Panel
- Build `/admin.html` — the ongoing site management interface
- Text input for change requests
- Build history with timestamps and file changes
- Undo/rollback functionality (restore previous file versions via GitHub API)
- Simple auth (password/token set during initial setup)
- **Test:** Open admin panel, request a change, verify it deploys. Undo it, verify rollback.

### Phase 6: API-Driven Setup
- Build the programmatic setup logic: create GitHub repo via API, create Vercel project via API, link them, set env vars, push initial code
- This is the engine the wizard will call — but tested independently first
- **Test:** Run the setup function with test credentials, confirm a working Vercel deployment appears

### Phase 7: Business Discovery (AI-Assisted)
- Build the AI-powered business search: given a business name, search the web and return structured info (description, address, phone, hours, images)
- This runs in the wizard (on EON's side) using the user's API key
- **Test:** Search for 5 real businesses, verify the AI returns accurate, useful info

### Phase 8: Image Handling
- Build Vercel Blob integration for photo/logo upload
- Wizard uploads images to user's Vercel Blob storage during setup
- Admin panel supports adding/changing images after initial build
- Agent can reference Blob URLs when building/updating pages
- **Test:** Upload images via wizard flow, confirm they appear on the deployed site

### Phase 9: The Wizard (EON Website)
- Build the `/buildmysite` page on eonriskservices.com
- Four-step interactive wizard: Connect → Discover → Review → Build
- Integrates all previous phases: API setup (Phase 6), business discovery (Phase 7), image upload (Phase 8), agent build (Phase 3)
- EON branded, responsive, polished
- Progress indicators, validation, error handling
- **Test:** Full end-to-end: fresh accounts → wizard → live website with admin panel

### Phase 10: Landing Page & CTA
- Build the BuildMySite landing page/hero section on eonriskservices.com
- Clear value proposition, demo video placeholder, "Get Started" → wizard
- "Or let us do it for you" CTA → EON consulting/contact page
- Add BuildMySite to the EON site navigation
- **Test:** Page loads, responsive, CTAs work, links to wizard

### Phase 11: Polish & Hardening
- Error handling across all phases: what happens when GitHub API fails? When the AI produces bad output? When Vercel deployment fails?
- Rate limiting on the agent endpoint
- Loading states, progress feedback, graceful failures in the wizard
- Mobile responsiveness for wizard and admin panel
- **Test:** Break things intentionally — bad tokens, network failures, malformed input. Confirm graceful handling.

### Phase 12: Demo & Launch Prep
- Record the screen recording demo video
- Write the landing page copy
- Prep the GitHub repo for public release (README, LICENSE, contributing guide)
- Draft the first LinkedIn post
- **Test:** Watch the demo video as a first-time viewer. Does it make sense in under 2 minutes?

---

## 5. File Structure (Site Kit)

```
buildmysite/
├── index.html              # Home page (AI-generated)
├── about.html              # About page (AI-generated)
├── services.html           # Services page (AI-generated)
├── contact.html            # Contact page with form (AI-generated)
├── admin.html              # Admin panel (fixed, not AI-generated)
├── css/
│   └── style.css           # Design system (base, AI extends)
├── js/
│   └── main.js             # Shared client-side JS
├── api/
│   ├── agent.js            # AI agent serverless function
│   └── contact.js          # Contact form handler
├── vercel.json             # Vercel config
├── package.json            # Dependencies (minimal)
└── README.md               # Auto-generated site docs
```
