# Implementation Plan — Publishability Audit Remediation

Following the professional publishability and factual-accuracy audit, this plan addresses all outstanding items: database alignment, citation apparatus, and structural improvements.

---

## Phase 1: Align Industry Loss Database with Corrected Book Facts

**Priority: HIGH — blocks everything else**

The database (`reference/Procedures/Industry_Loss_Database.csv` + `.xlsx` + `_Summary.md`) was built before the four rounds of fact-checking. Several entries now contradict the corrected text in the chapters. The source of truth is the book (which has been verified against primary sources); the database must be updated to match.

### 1.1 Database entries requiring correction

| # | Institution | Field | Current (DB) | Corrected (Book) | Source chapter |
|---|-------------|-------|-------------|-----------------|----------------|
| 1 | Deutsche Bank | Root Cause | "$150B in suspicious transactions" | "$10 billion in suspicious transactions" | Ch 4 |
| 2 | Deutsche Bank | Estimated Loss | "$150 million" | "$630 million (combined UK/US fines)" | Ch 4 |
| 3 | Deutsche Bank | Standardized USD | $150,000,000 | $630,000,000 | Ch 4 |
| 4 | Deutsche Bank | Loss Bucket | "< $1B" | "< $1B" (stays same) | — |
| 5 | Alpha Bank | Estimated Loss | "€10.9 billion" | "~€4 billion" | Ch 9, CHANGELOG Round 2 |
| 6 | Alpha Bank | Standardized USD | $12,862,000,000 | ~$4,720,000,000 | — |
| 7 | Alpha Bank | Loss Bucket | "$10-50B" | "$1-10B" | — |
| 8 | UBS (Adoboli 2011) | Root Cause | "concealed $2B in losses" | "concealed $2.3B in losses" | Ch 7 |
| 9 | UBS (Adoboli 2011) | Estimated Loss | "$2 billion" | "$2.3 billion" | Ch 7 |
| 10 | UBS (Adoboli 2011) | Standardized USD | $2,000,000,000 | $2,300,000,000 | — |
| 11 | AIG (both entries) | Root Cause narrative | "$440B notional in CDS contracts" | "$527 billion in notional CDS exposure" | Ch 9, Ch 16 |
| 12 | AIG (US) 2008 | Estimated Loss | "$85 billion" | Clarify: $85B was the bailout; total govt support was $182B; CDS notional was $527B; actual losses ~$78B | Ch 9 |
| 13 | AIG (second entry) | Outcome | "$182B total government support" | Confirmed correct — keep | — |
| 14 | Wells Fargo (if present) | Any "fake accounts" language | "fake accounts" | "potentially unauthorised accounts" | Ch 1, Ch 3 |
| 15 | Archegos | Estimated Loss narrative | "$20 billion in losses" | Clarify: "approximately $10 billion in net losses across prime brokers as an estimated $20 billion in concentrated positions were unwound" | Ch 6 |
| 16 | Merrill Lynch | Root Cause | "over $40B" super-senior | "$32 billion in super-senior CDO tranches" (corrected from $40B) | Ch 9, CHANGELOG Round 3 |
| 17 | Wachovia | Estimated Loss / Outcome | "$25 billion" undifferentiated | Decompose: "$25 billion — primarily from the Golden West option ARM portfolio" | Ch 9, CHANGELOG Round 3 |
| 18 | Lehman Brothers | Root Cause | "$85B in MBS" | "$85 billion in mortgage-related assets (including $55B in subprime MBS)" with Repo 105 context preserved | Ch 9, CHANGELOG Round 3 |
| 19 | Equifax | Outcome | "$1.38B settlement with FTC" | Decompose: "$1.38 billion — comprising up to $425M consumer restitution fund, $175M state penalties, and the remainder in compliance and security spending" | Ch 16, CHANGELOG Round 3 |
| 20 | Knight Capital | Narrative | "$460M in losses" | Distinguish: "$440 million in market losses during the event; $460 million total including remediation" | Ch 14, CHANGELOG Round 3 |
| 21 | Northern Rock | Outcome | "First UK bank run in 150 years" | "First UK bank run since 1866" (not "150 years") | CHANGELOG Round 2 |
| 22 | UBS French fine | Outcome | "€4.5B fine by French court (later reduced to €1.8B on appeal)" | Confirmed correct — keep | — |
| 23 | CS Mozambique | Outcome | "$475M SEC/DOJ settlement" | Clarify: "$475 million in SEC/DOJ settlements — with the DOJ settlement attributed to Credit Suisse Group AG, not solely to the bankers involved" | CHANGELOG Round 2 |

### 1.2 Implementation approach

**Option A (recommended): Edit `enrichment_data.py` + rebuild**

The narratives live in `reference/Procedures/enrichment_data.py` (indexed by position in the PDF parse order). The loss amounts come from the PDF source text parsed by `build_loss_database.py`.

Steps:
1. Read `enrichment_data.py` to find the index positions for each affected entry
2. Update the narrative fields (root_cause, risk_id_failure, outcome) in `enrichment_data.py`
3. For loss amount corrections: either (a) edit the source PDF and re-parse, or (b) add a post-parse correction step in `build_loss_database.py` that overrides specific entries
4. Re-run `python build_loss_database.py` to regenerate `.xlsx`, `.csv`, and `_Summary.md`
5. Verify the `_Summary.md` aggregate ($2.3 trillion) still holds after corrections (it will change slightly — the aggregate needs to be recalculated honestly, then the book's "$2.3 trillion" claim adjusted if necessary)

**Option B: Direct CSV/Excel edit**

Manually edit the CSV and Excel. Faster but brittle — any re-run of the build script would overwrite.

### 1.3 Aggregate recalculation

After correcting individual entries, recalculate:
- Total aggregate USD losses (currently claimed as "$2.3 trillion" in the book)
- If the new total differs materially, update the book text in Ch 1 (line 37), Ch 5 (line 195), Ch 16 (lines 5, 113)
- The $2.3 trillion figure is a headline claim — it must be defensible

---

## Phase 2: Citation Spine

**Priority: HIGH — required for professional publication**

Add a bibliography and footnote/endnote system throughout all 16 chapters.

### 2.1 Bibliography structure

Create `book/bibliography.md` containing all cited sources, organised by type:

**Categories:**
- **Regulatory documents** — Fed SR letters, BCBS principles, PRA/FCA supervisory statements, OCC guidelines, EU directives
- **Standards** — ISO 31000:2018, ISO 31010:2019, COSO ERM 2004/2017, IIA Three Lines Model
- **Government/official sources** — FDIC, Government.nl, EUR-Lex, Treasury reports, parliamentary inquiries
- **Enforcement actions** — NYDFS orders, FCA final notices, DOJ press releases, SEC settlements
- **Case study sources** — regulator post-mortem reports, public inquiry documents
- **Academic/industry** — BIS working papers, FSB reports, peer-reviewed articles

### 2.2 Footnote format

Use markdown footnote syntax throughout chapters:

```markdown
LTCM's value-at-risk model told them their maximum expected daily loss was $35 million.[^ch1-1]

[^ch1-1]: Lowenstein, R. *When Genius Failed*. Random House, 2000. The $35M figure is the fund's model-estimated maximum daily loss, as reported in the Federal Reserve Bank of Richmond's reprint.
```

### 2.3 Implementation approach

For each chapter:
1. Identify every objective claim (quantified amount, dated event, regulatory reference, enforcement action)
2. Find the primary source (regulator report, government document, court filing)
3. Add footnote at first occurrence
4. Collect all footnotes into the bibliography

**Estimated scope:** ~200-300 footnotes across 16 chapters. The 19 priority case studies in the database each need 2-3 citations minimum.

### 2.4 Priority order

1. **Ch 16** (Lessons from Bank Failures) — highest density of checkable claims
2. **Ch 1** (Why Banks Fail) — establishes credibility; loss figures must be sourced
3. **Ch 2** (Standards) — regulatory document citations must be precise
4. **Ch 15** (Regulatory Landscape) — 16 frameworks each need full citations
5. **Ch 3** (Governance) — case studies need sourcing
6. Remaining chapters in order

---

## Phase 3: Industry Loss Database Methodology Appendix

**Priority: HIGH — the audit flagged the ILD as "unverifiable"**

Create `book/appendix_ild_methodology.md`:

### Contents:
1. **Purpose** — What the database is, what it is not (not a statistically rigorous sample; a curated forensic tool)
2. **Inclusion criteria** — What qualifies as an "event" (material loss, regulatory action, institutional failure, fraud, systemic event)
3. **Exclusion criteria** — What was left out and why (operational losses below threshold, non-bank financial institutions except where relevant, ongoing litigation)
4. **Data sources** — List of source types used (regulator reports, government publications, court filings, annual reports, credible financial press)
5. **Loss definition** — How "loss" is defined for each event type:
   - Direct financial loss (write-downs, settlements, fines)
   - Government support / bailout cost
   - Market capitalisation destruction (where appropriate)
   - Note: some events have multiple valid loss measures
6. **USD standardisation** — FX rates used are approximate and indicative; the rates table from `build_loss_database.py` published for transparency
7. **Limitations** — Survivorship bias, geographic bias toward US/Europe, loss figures from different time periods not inflation-adjusted, some amounts are estimates
8. **Full event list** — Table of all 179 entries: Institution, Country, Year, Risk Event, Estimated Loss, Source

This appendix makes the "$2.3 trillion across 179 events" claim auditable.

---

## Phase 4: Case Study Methodology Note

**Priority: MEDIUM**

Add a short section (1-2 paragraphs) to Chapter 1 or Chapter 16 explaining:
- How the 19 priority case studies were selected from the 179
- Selection criteria: geographic diversity, temporal spread, risk type coverage, severity, data availability
- That the analysis is forensic (what went wrong) not statistical (what percentage of banks fail)
- That each case study's factual claims are sourced to primary/authoritative documents

---

## Phase 5: Cross-Jurisdiction Clarity

**Priority: MEDIUM**

### 5.1 Jurisdictional appendix

Create `book/appendix_jurisdictions.md` mapping:

| Jurisdiction | Primary regulators | Key frameworks referenced | Chapters |
|---|---|---|---|
| **United States** | Fed (SR 15-18), OCC (Heightened Standards), FDIC | CCAR, DFAST, Dodd-Frank | 2, 3, 12, 15 |
| **United Kingdom** | PRA (SS31/15), FCA | ICAAP, ILAAP, SM&CR | 2, 3, 15 |
| **European Union** | ECB/SSM, EBA | CRD IV/V, SREP | 2, 15 |
| **International** | BCBS, FSB | Corporate Governance Principles, BCBS 239 | 2, 3, 15 |
| **Standards bodies** | ISO, COSO, IIA | ISO 31000, ISO 31010, COSO ERM, Three Lines Model | 2 |

### 5.2 In-chapter caveats

Add brief jurisdictional notes where the chapter discusses a specific regulatory requirement, e.g.:
> "SR 15-18 applies to US LISCC firms and large, complex firms. UK-regulated firms face comparable expectations under PRA SS31/15."

---

## Phase 6: Copyright Clearance Plan

**Priority: MEDIUM — blocks final publication**

### 6.1 Audit of reproduced content

Review all chapters for:
- Verbatim quotations from ISO standards (ISO 31000, ISO 31010) — paraphrase where possible; short quotations under fair use/fair dealing
- COSO framework diagrams or tables — the eight-component table and cube description may need permission or must be original descriptions
- Regulatory document quotations — generally safe (government publications) but confirm
- IIA Three Lines Model — check IIA's copyright/permission policy

### 6.2 Actions

| Source | Risk | Action |
|---|---|---|
| ISO 31000:2018 | HIGH — ISO vigorously enforces copyright | Paraphrase all references; cite without reproducing standard text; no tables from the standard |
| ISO 31010:2019 | HIGH | Same as above; technique descriptions must be in author's own words |
| COSO ERM 2004 | MEDIUM | Eight components are widely known; cube description should be original; check COSO's permission policy |
| BCBS documents | LOW | BIS publications are generally freely available and quotable with attribution |
| Fed SR letters | LOW | US government documents; freely quotable |
| FCA/PRA documents | LOW | UK regulator publications; freely quotable with attribution |

---

## Phase 7: Compile and Verify

**Priority: follows all above**

1. Re-run `build_loss_database.py` after corrections
2. Verify new aggregate figure; update book if changed
3. Add bibliography and appendices to `compile_pdf.py` chapter list
4. Recompile PDF
5. Final spot-check: verify 5 corrected database entries appear correctly in PDF
6. Commit with full change log

---

## Execution Order

```
Phase 1 (database alignment)     ← DO FIRST — may change aggregate figure
  ↓
Phase 3 (ILD methodology appendix) ← depends on corrected database
  ↓
Phase 2 (citation spine)          ← largest effort; can be parallelised by chapter
  ↓
Phase 4 (case study methodology)  ← short; can be done alongside Phase 2
Phase 5 (jurisdictional appendix) ← standalone
Phase 6 (copyright clearance)     ← review pass; may require ISO paraphrasing edits
  ↓
Phase 7 (compile and verify)      ← final
```

## Estimated Scope

| Phase | Files touched | Effort |
|---|---|---|
| 1. Database alignment | `enrichment_data.py`, `build_loss_database.py`, 4-5 chapter `.md` files | 23 corrections + rebuild + aggregate check |
| 2. Citation spine | All 16 `chapter_*.md` + new `bibliography.md` | ~200-300 footnotes |
| 3. ILD methodology appendix | New `appendix_ild_methodology.md` | 1 new file |
| 4. Case study methodology | 1-2 paragraphs in Ch 1 or Ch 16 | Minor edit |
| 5. Jurisdictional appendix | New `appendix_jurisdictions.md` + minor chapter edits | 1 new file + ~10 in-chapter caveats |
| 6. Copyright clearance | Ch 2 primarily (ISO/COSO references) | Review + possible paraphrasing |
| 7. Compile and verify | `compile_pdf.py` + final PDF | Mechanical |
