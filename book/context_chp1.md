# Book Project Context — Master Reference

**IMPORTANT: This is the single source of truth for book continuity. Read this file at the start of every session. Do NOT re-read chapter files — everything you need is here.**

**Project:** "Bank Risk Identification: The Complete Methodology" by Rory Roberts, FRM
**Publisher:** Self-published (Amazon paperback + PDF)
**Target length:** ~65,000–80,000 words (16 chapters + appendices)
**Output directory:** `/home/rory/EONRiskServices/book/`
**Chapter file pattern:** `chapter_XX.md`

---

## Writing Style Guide

- **Person:** First person ("I") for Rory's direct experience; third person for institutional examples
- **Tone:** Practitioner speaking to practitioners. Authoritative but not pompous. Direct. No hedging. "This is what works" not "one might consider"
- **Length:** Target 4,000–6,000 words per chapter. Chapter 1 was ~3,000 (shorter because it's the hook). Later chapters will be longer as they contain methodology detail.
- **Structure:** Each chapter opens with a contextual hook (often a real example or practitioner scenario), then delivers the methodology content, then closes with a 1-paragraph bridge to the next chapter
- **Case studies:** Named institutions, specific mechanisms, actual loss figures. Not anonymised. Not generic.
- **Regulatory references:** Cite specific frameworks by name (e.g. "Fed SR 15-18", "PRA SS31/15") — readers are professionals who know these
- **Formatting:** Markdown. H1 = chapter title. H2 = major sections. H3 = subsections. Tables where they aid clarity. Bold for key terms on first use.
- **"What was missing" pattern:** When describing a failure, always end with what the methodology would have caught — this is the core IP linking.

---

## Rory's Background (for voice authenticity)

- **Credit Suisse (2016-2017):** SVP, Global Head of Risk Identification. Team of 7 across London/Zurich/India. Built the process from scratch. Integrated with CCAR.
- **Standard Chartered (2023-2024):** Risk Identification Lead, ERM dept. ICAAP/ILAAP integration.
- **Zurich Insurance (2008-2016):** Solvency II Project Manager (~5yr), then Front Office Dealer (FX, MM, derivatives).
- **AIB (2004-2007, 2020):** Quant Risk Analyst, Basel II derivatives pricing team lead. Later Senior Risk Manager.
- **Hypo Real Estate (2007-2008):** Financial Risk Manager, CDO/MBS pricing. (Note: Hypo Real Estate is IN the loss database — personal connection to GFC.)
- **Earlier:** ACCBank (market risk/VaR), Cognotec, Frontier Software.
- **Education:** B.Sc Mathematical Physics, UCD. FRM (GARP). ACI Dealing Certificate.

---

## Key Reference Files

| File | What it contains | Used for |
|---|---|---|
| `reference/Procedures/Bank_Risk_Identification_Process_Draft3.md` | Methodology process doc (944 lines, 12 sections + 10 appendices) | Chapters 2–13 primary source |
| `reference/Procedures/Industry_Loss_Database_Summary.md` | Database stats, 19 priority example narratives, 10 failure modes | Chapters 1 & 16 primary source |
| `reference/Procedures/enrichment_data.py` | 179 entries: risk_l2, coso_category, root_cause, risk_id_failure, outcome | Case studies throughout |
| `reference/regulations/` | 16 regulatory source PDFs + text extracts | Chapter 15 primary source |
| `reference/Books on Risk identification/` | ISO 31000, ISO 31010, ISO Guide 73, COSO ERM PDFs | Chapter 2 primary source |
| `reference/Methods of Risk Identification/` | Oliver Wyman report, COSO practice paper, CCAR perspectives | Supplementary |

All paths relative to `/home/rory/EONRiskServices/`.

### Draft 3 Section Map (for chapter sourcing)
```
§1  Purpose                          → Ch 2
§2  Scope                            → Ch 2
§3  Cross-Cutting Principles         → Ch 14 (Tech), woven through others
  §3.1  Communication & Consultation → Ch 3 (Governance)
  §3.2  Technology and Data Analytics→ Ch 14
  §3.3  Training and Awareness       → Ch 13
  §3.5  Framework Monitoring         → Ch 13
§4  Governance                       → Ch 3
  §4.1  Roles and Responsibilities   → Ch 3
  §4.2  Process Frequency            → Ch 3, Ch 13
§5  Risk Taxonomy                    → Ch 4
  §5.1  Structure                    → Ch 4
  §5.2  Taxonomy Maintenance         → Ch 4
§6  Phase 1 — Foundation Setting     → Ch 5
  §6.1  External Context (PESTLE)    → Ch 5
  §6.2  Internal Context             → Ch 5
  §6.3  Internal Environment (7 COSO)→ Ch 5
  §6.4  Define Risk Criteria         → Ch 5
  §6.5  Build Starting Universe      → Ch 5
  §6.6  Prepare Straw Man Risk List  → Ch 5, Ch 6
§7  Phase 2 — Dual-Track ID         → Ch 6, 7, 8
  §7.1  Top-Down (SWIFT)             → Ch 6
  §7.2  Delphi Method                → Ch 6
  §7.3  Bottom-Up (10 sub-processes) → Ch 7
  §7.4  Reconciliation               → Ch 8
  §7.5  Enterprise Portfolio View    → Ch 8
§8  Phase 3 — Assessment             → Ch 9, 10
  §8.1  Risk Scoring (4D)            → Ch 9
  §8.2  Data Quality Rating          → Ch 9
  §8.3  Inherent/Residual Risk       → Ch 9
  §8.4  Materiality Determination    → Ch 9
  §8.5  Risk Interaction Analysis    → Ch 10
  §8.6  Cost-Benefit / ALARP         → Ch 10
§9  Phase 4 — Documentation          → Ch 11
  §9.1  Risk Inventory (14 fields)   → Ch 11
  §9.2  Risk Profiles                → Ch 11
§10 Phase 5 — Integration            → Ch 12
  §10.1 COSO ERM Alignment           → Ch 12
  §10.2 Capital Planning             → Ch 12
  §10.3 Strategic Planning           → Ch 12
  §10.4 Regulatory Reporting         → Ch 12
  §10.5 Board Reporting              → Ch 12
§11 Phase 6 — Ongoing Cycle          → Ch 13
  §11.1 Quarterly Re-ID              → Ch 13
  §11.2 Annual Full Re-ID            → Ch 13
  §11.3 Event-Driven Updates         → Ch 13
  §11.4 Internal Audit Assurance     → Ch 13
§12 What Distinguishes This Process  → Already used in Ch 1
Appendices A–J                       → Book Appendices
```

---

## Book Table of Contents & Status

| Ch | Title | Status | Word Count |
|---|---|---|---|
| 1 | Why Banks Fail at Risk Identification | **WRITTEN** | ~3,000 |
| 2 | The Foundations: Standards and Frameworks | **WRITTEN** | ~4,800 |
| 3 | Governance: Who Owns What | **WRITTEN** | ~4,500 |
| 4 | The Risk Taxonomy | **WRITTEN** | ~5,100 |
| 5 | Setting the Context: External, Internal, and Risk Culture | **WRITTEN** | ~5,700 |
| 6 | Top-Down Identification: Workshops, SWIFT, and Delphi | **WRITTEN** | ~5,700 |
| 7 | Bottom-Up Identification: Templates, RCSA, and Specialist Processes | **WRITTEN** | ~5,600 |
| 8 | Reconciliation and the Enterprise Portfolio View | **WRITTEN** | ~4,500 |
| 9 | Assessment: Scoring, Multi-Dimensional Impact, and Data Quality | **WRITTEN** | ~5,970 |
| 10 | Risk Interaction: Bow-Ties, Matrices, and Concentration | **WRITTEN** | ~4,260 |
| 11 | Documentation: The Living Risk Inventory | **WRITTEN** | ~5,920 |
| 12 | Integration: Capital Planning, Strategy, and the Board | **WRITTEN** | ~5,160 |
| 13 | The Ongoing Cycle: Refresh, Events, and Audit | **WRITTEN** | ~4,700 |
| 14 | Technology: AI, ML, and Data Analytics | **WRITTEN** | ~4,950 |
| 15 | The Regulatory Landscape | **WRITTEN** | ~5,380 |
| 16 | Lessons from Bank Failures | **WRITTEN** | ~4,100 |

---

## Case Study Usage Tracker

Tracks which institutions have been used as examples in which chapters, to avoid repetition and ensure variety. Each institution should have ONE primary chapter where it's explored in depth. Brief mentions/callbacks in other chapters are fine but should not repeat the same detail.

| Institution | Ch 1 | Ch 2 | Ch 3 | Ch 4 | Ch 5 | Ch 6 | Ch 7 | Ch 8 | Ch 9 | Ch 10 | Ch 11 | Ch 12 | Ch 13 | Ch 14 | Ch 15 | Ch 16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AIG | brief | | | | | | | | **PRIMARY** ($500B+ CDS notional, single-dimensional assessment at near-zero, no multi-dimensional impact, $85B bailout, 4D methodology applied retrospectively) | | | | | | | brief (callback — $500B CDS, single-dimensional assessment, multi-dimensional impact scales would have caught) |
| Barings | **PRIMARY** (governance bypass) | | | | | | | | | | | | | | | |
| Bear Stearns | brief (info asymmetry) | | | | | | | | brief (speed of onset — counterparty confidence loss in days, institutional collapse) | | | | | | | **PRIMARY** (June 2007 hedge fund collapse treated as isolated subsidiary event, not processed as event-driven trigger for parent balance sheet, same concentration risk destroyed parent 9 months later, complacency failure mode illustration) |
| Citigroup | brief (silos, SIVs, model) | | | | | | | **PRIMARY** (SIVs off-balance-sheet, liquidity puts as remote contingencies, $50B+ SIV assets back on balance sheet, $45B TARP, no enterprise aggregation of subprime exposure across on/off balance sheet) | brief (callback — aggregation catches Citigroup pattern, individually sub-material risks collectively catastrophic) | | | | | | | brief (callback — SIV pattern as concentration and silo thinking example) |
| Countrywide | brief (concentration) | | | | | | | | | | | | | | | **PRIMARY** (originate-to-distribute illusion, America's largest mortgage originator, subprime/Alt-A expansion, securitisation transferred asset not risk, retained tranches/warehouse lines/reps-and-warranties, $4B acquisition cost BofA $40B+, assumption register would have captured securitisation assumption) |
| Credit Suisse (Archegos) | brief (cultural suppression) | | | | | **PRIMARY** (family office total return swaps, 5-8x leverage across multiple prime brokers, no aggregate visibility, $20B total losses, CS $5.5B, SWIFT would have asked the right questions) | | brief (callback — $5.5B, cross-counterparty cross-product concentration, same structural gap reconciliation was designed to catch) | | | | | | | | brief (callback — cross-counterparty concentration, SWIFT would have surfaced) |
| Credit Suisse (building process) | | brief (standards architecture, COSO cube) | brief (Risk ID Lead role, mandate from CRO) | brief (taxonomy reconciliation across BUs, COSO cube completeness check) | brief (straw man framing lesson — "proposed risk list" vs "what is wrong with it") | brief (opening hook: first workshop groupthink, redesigning around SWIFT, straw man callback, CCAR integration, facilitation confrontation with BU head, political skill) | brief (opening hook: compliance theatre — identical bottom-up submissions, driver fields empty, redesigned process with 3-new-risks-per-cycle rule) | brief (opening hook: first reconciliation cycle, 23 top-down vs 187 bottom-up, 12 top-down gaps/47 bottom-up gaps, cross-counterparty concentration discovery, challenge sessions, model risk validation example) | brief (inherent-residual gap mapping exercise, disagreement resolution experience) | brief (first interaction matrix — counterparty credit risk connected to 11 other risks, market risk to 9, turning intuition into auditable methodology) | brief (initial inventory built in spreadsheet before GRC technology, risk profile quality improvement over three cycles through challenge process) | brief (CCAR integration callback — CRO required process to feed CCAR submission, Material Risk Inventory as scenario foundation) | brief (CCAR quarterly re-identification callback, CRO required process to feed CCAR, compliance theatre callback from Ch 7 bottom-up submissions) | brief (callback — inventory built in spreadsheet, three cycles before GRC platform, methodology before technology principle) | brief (ECB SREP — FINMA SREP-equivalent alongside Fed CCAR and PRA; CCAR integration — CRO mandated bidirectional linkage; taxonomy divergence — IB 47 categories, Swiss 23, PB 31, regulatory mapping table as multi-jurisdiction solution) | |
| Credit Suisse (Mozambique) | — | | | | | | | | | | | | | | | **PRIMARY** ($2B hidden loans to Mozambican state entities, military borrowers, kickbacks, secrecy, sovereign lending risk ID focused on credit not corruption risk, $475M SEC/DOJ settlement, new-product approval process would have surfaced red flags, event-driven trigger for new business structures, contributed to CS eventual demise) |
| Enron | brief (control failure) | | | | | | | | | | | | | | | |
| Fannie Mae / Freddie Mac | brief (concentration) | | | | | | | | | | | | | | | |
| Icelandic Banks | brief (concentration) | | | | | | | | | supporting (systemic concentration — Kaupthing/Landsbanki/Glitnir collectively 10x GDP, no credible lender of last resort, all three failed in one week, IMF bailout, concentration beyond individual institution) | | | | | | brief (callback — 10x GDP systemic concentration) |
| JPMorgan (London Whale) | brief (silo thinking) | | | **PRIMARY** (CIO classified as hedging not trading, $6.2B loss, taxonomy misclassification) | | | brief (model risk callback — VaR model changed without independent challenge) | | | | brief (callback — taxonomy classification determining oversight, misclassification leads to invisible risk) | | | | | |
| Lehman Brothers | brief (governance, info asym, complacency) | | | | | | | | | **PRIMARY** ($85B MBS, 30:1 leverage, five risk types crystallising simultaneously — credit→market→liquidity→operational→reputational cascade chain, Repo 105 as escalation factor concealing leverage, $639B bankruptcy, bow-tie retrospective) | brief (callback — cascade invisible because no documentation connected individually assessed risks into causal chains) | | | | | brief (callback — causal chains, Risk Interaction Summary would have connected individually assessed risks) |
| LTCM | brief (model overreliance, complacency) | | | | | | | | brief (likelihood anchoring — VaR calibrated to normal conditions, correlations went to one, $3.6B bailout) | | | | | | | **PRIMARY** (Nobel Prize founders, 25:1 leverage, VaR models assumed stable correlations and available liquidity, Russian crisis 1998 caused correlations to spike to one, positions VaR showed as diversified were single bet on market normality, $3.6B Fed-brokered bailout, structural inability to capture regime shift, scenario analysis and speed-of-onset would have identified) |
| Merrill Lynch | brief (model overreliance) | | | | | | | | supporting ($40B+ super-senior CDO retention, AAA rating as substitute for analysis, $51.8B write-downs, Data Quality failure, emergency sale to BofA) | | | | | | | **PRIMARY** (AAA rating as substitute for independent analysis, $40B+ super-senior CDO tranches, "near-risk-free" based on external rating not independent analysis, $51.8B write-downs, emergency sale to BofA, external credit rating is not a risk assessment — single input to one, Data Quality Rating would have flagged benign-condition calibration) |
| Northern Rock | brief (concentration, complacency) | | | | **PRIMARY** (75% wholesale-funded, business model was the unidentified risk, first UK bank run, £2B taxpayer cost) | | brief (funding concentration callback in treasury risk sub-process) | | | | | | | | | brief (callback — 75% wholesale funding dependence as concentration) |
| PPI / Lloyds | brief (emerging risk blindness) | | | brief (taxonomy didn't include conduct risk, £22B+ redress, collectively exhaustive failure) | brief (social context changes producing tens of billions in losses) | | brief (conduct risk callback — absent taxonomy) | | brief (customer impact dimension — mass unsuitable sales preceded financial crystallisation) | | | | | | | **PRIMARY** (£22B industry-wide redress, Lloyds £12B largest share, PPI as profitable cross-selling, sales incentive structures not identified as conduct risk drivers, customer suitability not in taxonomy, detriment accumulated for years because taxonomy had no place to look, Taxonomy Test applied retrospectively reveals structural gap) |
| Standard Chartered (sanctions) | brief (governance bypass) | | brief (independence overridden, $667M fine) | | | | | brief (2023 reconciliation documentation deficiency — merged spreadsheet with colour-coding, no gap analysis, no challenge sessions, no enterprise portfolio view) | brief (callback — $667M fine illustrating regulatory dimension beyond financial impact) | | brief (callback — 2023 reconciliation documentation deficiency, spreadsheet that concealed absence of reconciliation, compliance artefact illustration) | brief (ICAAP regulatory vs economic gap analysis — Pillar 1 mapping, Pillar 2A gap closure) | | | brief (opening hook — PRA examination scenario at StanChart 2023; multi-jurisdictional $667M sanctions fine callback illustrating cost of fragmented risk ID across jurisdictions) | **PRIMARY** (governance bypass in purest form — compliance identified sanctions risk, $250B Iranian transactions flagged, senior management overruled, risk was identified but governance failed to protect identification output, $667M fine, three forms of independence and principal risk report would have addressed) |
| Wells Fargo | brief (cultural suppression) | | brief (front-line complaints as HR matters, 3.5M fake accounts) | | | | | | brief (callback — reputational dimension vs financial, $3B direct cost but existential reputational impact) | | | | | | | brief (callback — front-line knowledge of fraudulent practices, bottom-up templates would have captured) |
| Wirecard | brief (emerging risk, control) | | | | | **PRIMARY** (€1.9B fabricated cash, FT/short-sellers identified fraud externally, BaFin prosecuted journalists instead of investigating, identification ecosystem inverted, Delphi with external panellists would have surfaced dissenting analysis) | | | | | | | | brief (callback — opening hook, NLP scanning of financial media would have surfaced FT reporting from 2015, €1.9B fabricated cash) | | brief (callback — FT/short-sellers identified fraud, BaFin could not see, Delphi incorporates external dissent) |
| WorldCom | brief (control failure) | | | | | | | | | | | | | | | |
| Zurich Insurance | | brief (Solvency II standards implementation) | | | | | | | | | | | | | | |
| HBOS (Paul Moore) | | | **PRIMARY** (Head of Risk fired, £10B+ losses, governance failure) | | | | | | | | | | | | | brief (callback — governance compromise, internal environment assessment would have surfaced) |
| Société Générale (Kerviel) | | | brief (€50B hidden positions, €4.9B loss, segregation of duties) | | | | brief (rogue trading pattern — back-office knowledge, RCSA failure, alongside Rusnak and Adoboli) | | | | | | | | | |
| Cooperative Bank | | | brief (unqualified chairman, £1.5B rescue, board competence) | | | | | | | | | | | | | |
| Banca Monte dei Paschi di Siena | | | brief (senior mgmt complicit, compromised escalation) | | | | | | | | | | | | | |
| Deutsche Bank (mirror-trading) | | | | brief ($150B suspicious transactions, gap between equities surveillance and AML, $630M fines) | | | brief (AML/CFT sub-process callback — concealed financial crime risks) | | brief (callback — $630M fines, regulatory dimension extending beyond financial penalty) | | | | | | | |
| Hypo Real Estate | | | | | **PRIMARY** (Rory worked there 2007-2008, Depfa acquisition, €400B maturity mismatch, €102B government guarantee, external context failure) | | | | | | | | | | | |
| Anglo Irish Bank | | | | | **PRIMARY** (Sean FitzPatrick, culture of deference, €87M hidden loans, CRE concentration, €29.3B bailout, internal environment failure) | | | | | | | | | | | brief (callback — cultural dysfunction, internal environment assessment would have surfaced) |
| Capital One | | | | | brief (2019 data breach, AWS misconfigured firewall, 100M+ records, technology context) | | | | | | | | | | | |
| Oliver Wyman (report) | | | | | | brief (cited: parallel top-down/bottom-up provides higher likelihood of identifying full suite of risks) | | | | | | | | | | |
| AIB / Allfirst (John Rusnak) | | | | | | | **PRIMARY** ($691M FX losses, US subsidiary Allfirst, geographic separation, weak back-office confirmation, reliance on local management assurances, no standardised template, no FMEA on confirmation process, bottom-up identification failure) | | | | | | | | | brief (callback — bottom-up templates would have captured inadequate trade confirmation) |
| UBS (Kweku Adoboli) | | | | | | | **PRIMARY** ($2B unauthorised ETF trading, Delta One desk, fictitious hedging positions, gaps between trading and settlement systems, RCSA assessed controls against design spec not determined circumvention, post-crisis reforms still failed, FSA £29.7M fine) | | | | | | | | | |
| HSH Nordbank | | | | | | | | brief (false diversification — world's largest shipping lender + US subprime structured products, both correlated to global economic activity, €10B state guarantee, restructured as Hamburg Commercial Bank, privatised 2018) | | brief (callback — hidden concentration disguised by apparent diversification, same underlying driver) | | | | | | |
| UBS (2008 structured credit) | | | | | | | | | supporting (risk function relied on same models as front office, no independent challenge, VaR limits repeatedly increased, $37.4B write-downs, vulnerability illustration) | | | | | | | brief (callback — self-referencing model reliance, independent challenge would have prevented) |
| Wachovia / Golden West | | | | | | | | | supporting ($122B option ARM portfolio, historical CA data accepted without stress testing, Data Quality Very Low, $25B losses, emergency sale to Wells Fargo) | | | | | | | |
| Danske Bank | | | | | | | | | | | **PRIMARY** (€200B suspicious transactions through Estonian branch, fragmented risk documentation across group/branch, non-resident portfolio documented locally as profitable niche, no enterprise-level inventory entry for aggregate AML exposure, CEO resigned, €2B+ fines, Estonian licence withdrawn) | | | | | brief (callback — AML exposure aggregation, enterprise inventory would have caught) |
| AMP (Australia) | | | | | | | | | | | **PRIMARY** (fees for no service including deceased customers, complaints data not aggregated as risk indicator, conduct risk entry generic, no KRIs on complaint volumes, Royal Commission exposed, CEO resigned, AUD 600M remediation, share price halved) | | | | | brief (callback — complaints data aggregation, enterprise inventory would have caught) |
| SNS Reaal | | | | | | | | | | | **PRIMARY** (€7.4B CRE in property finance subsidiary, subsidiary reported separately from parent risk framework, concentration vs group capital not identified at enterprise level, nationalised Feb 2013, €3.7B Dutch taxpayer cost, rebranded de Volksbank) | | | | | brief (callback — subsidiary concentration, enterprise inventory would have aggregated) |
| Fortis | | | | | | | | | | supporting (ABN AMRO acquisition €71B + subprime exposure = compounding spiral, acquisition consumed capital that subprime losses demanded, €11.2B rescue, broken up, largest Benelux failure, structural concentration) | | | | | | |
| Dexia | | | | | | | | | | | | **PRIMARY** (rescued twice — 2008 €6.4B + €150B guarantees, 2011 broken up; sovereign debt concentration + wholesale funding maturity mismatch; risk identification existed after first rescue but not integrated with capital planning; sovereign debt treated as risk-free despite own experience; integration failure archetype) | | | | brief (callback — capital planning integration would have linked risk ID to capital adequacy) |
| Washington Mutual | | | | | | | | | | | | **PRIMARY** ($307B assets, largest US bank failure; subprime/option ARM origination, "power of yes" culture; risk identification outputs existed but severed from capital planning; CERO marginalised, appetite limits repeatedly raised; seized by OTS September 2008, sold to JPMorgan Chase for $1.9B) | | | | brief (callback — capital planning integration would have linked risk ID to capital adequacy) |
| Bankia | | | | | | | | | | | | **PRIMARY** (merger of 7 struggling Spanish cajas 2010; aggregated concentrated property exposures without recapitalisation; no enterprise portfolio view of combined exposure; IPO 2011 with misrepresented financials; €22.4B government bailout — Spain's largest; chairman Rodrigo Rato convicted of fraud; merged with CaixaBank 2021; strategic decision without risk identification integration) | brief (callback — M&A event-driven trigger, aggregated exposures without enterprise portfolio view) | | | brief (callback — €22.4B, strategic planning integration would have subjected merger to enterprise portfolio view) |
| Silicon Valley Bank | | | | | | | | | | | | | **PRIMARY** ($209B assets, failed March 2023, largest US bank failure since WaMu; IRRBB not re-identified as Fed raised rates 500bps; $91B HTM portfolio, $15B+ unrealised losses exceeding equity; CRO vacant April 2022–January 2023; deposit concentration in VC-backed tech firms; $42B withdrawn in one day; ongoing cycle degradation — quarterly re-ID, event-driven triggers, monthly KRI all failed; full retrospective methodology application; Complacency failure mode illustration) | | | brief (callback — failed to re-identify IRRBB across 500bps rate increases over 18 months, CRO vacant 8 months, quarterly re-identification would have caught) |
| Signature Bank | | | | | | | | | | | | | supporting ($110B assets, failed 12 March 2023, two days after SVB; crypto deposit concentration; TerraUSD/Celsius/FTX collapses as missed event-driven triggers; quarterly cycle should have shown concentration shifting from advantage to vulnerability; third-largest US bank failure) | | | brief (callback — three missed event-driven triggers in six months: TerraUSD May, Celsius June, FTX November 2022) |
| NAB (Australia) | | | | | | | | | | | | | supporting (failed to learn from CBA's AUD 700M AUSTRAC fine 2018; analogous AML monitoring gaps; AUSTRAC proceedings 2020; peer institution failure as missed event-driven trigger) | | | brief (callback — peer institution event as missed event-driven trigger, CBA fine should have forced internal re-identification) |
| CBA (Australia) | | | | | | | | | | | | | brief (AUD 700M AUSTRAC fine 2018, 53,000+ unreported suspicious transactions through intelligent deposit machines; referenced as event-driven trigger that NAB should have processed) | | | brief (callback — AUD 700M fine as event-driven trigger NAB failed to process) |
| Knight Capital | | | | | | | | | | | | | | **PRIMARY** ($460M loss in 45 minutes, software deployment error activated dormant legacy code, no automated kill-switch, technology simultaneously enabler and source of risk, 4D assessment would have scored speed of onset as Immediate, acquired by Getco 2013) | | |
| Punjab National Bank (PNB) | | | | | | | | | | | | | | supporting ($2B SWIFT/CBS disconnect fraud, Letters of Undertaking issued via SWIFT without CBS entries, seven-year fraud, Nirav Modi, data integration failure, RBI mandated SWIFT-CBS integration across Indian banking, largest Indian banking fraud) | | |
| Equifax | | | | | | | | | | | | | | supporting ($1.38B settlement, unpatched Apache Struts vulnerability, 147M consumer records, CEO/CIO/CISO departed, software patching treated as routine IT not critical risk, data management infrastructure failure) | | |
| Alpha Bank (Greece) | | | | | | | | | | | | | | | | **PRIMARY** (eurozone sovereign debt concentration, zero risk weight masked concentration risk, €12.9B recapitalisation via Hellenic Financial Stability Fund, regulatory vs economic risk gap analysis would have caught, CRR zero risk weight as regulatory assumption not independent assessment) |
| Bank of Cyprus | | | | | | | | | | | | | | | | brief (47.5% bail-in on uninsured deposits, largest European bail-in, same sovereign blind spot as Alpha Bank) |
| Lloyd's of London (WTC) | | | | | | | | | | | | | | | | **PRIMARY** ($5.6B claims after September 11, individual syndicates covered property/liability/aviation/business interruption separately, no market-level aggregate exposure identification, catastrophe models excluded coordinated terrorist attack scenario, insurance equivalent of Citigroup SIV pattern, enterprise portfolio view addresses) |
| UBS (tax evasion) | | | | | | | | | | | | | | | | **PRIMARY** (€4.5B French fine — largest tax evasion penalty in French history, Swiss-based RMs systematically solicited undeclared accounts in France, cross-border wealth management model treated as normal distribution strategy, conduct risk in helping clients maintain offshore accounts not identified, emerging risk blindness — profitable practice reclassified as misconduct) |
| American Savings & Loan | | | | | | | | | | | | | | | | **PRIMARY** (1980/1982 deregulation acts, aggressive high-risk mortgage origination, risk ID failure treated deregulation as opportunity not risk, interest rate liberalisation altered asset-liability profile, seized FSLIC 1988, $5.4B losses, complacency bred by structural change) |
| ICBC (China) | | | | | | | | | | | | | | | | **PRIMARY** (world's largest bank by assets, NPL accumulation through policy-directed lending to SOEs and LGFVs, credit decisions directed by state industrial policy, risk function structurally unable to challenge, NPL recognition delayed by regulatory forbearance and evergreening, dual role of state banks as commercial and policy instruments, BCBS Principle 7 independence fundamentally compromised) |
| Credit Suisse (building process) Ch 16 | | | | | | | | | | | | | | | | brief (callback — "built it twice at Credit Suisse and Standard Chartered") |

**Guidance:** Chapter 16 will do deep dives on all 19 priority examples. Chapters 2–15 should use 1–3 examples per chapter as opening hooks or illustrative cases, choosing ones that connect naturally to that chapter's topic. Reserve fresh detail for Chapter 16.

---

## Commitments & Claims Made (for cross-chapter consistency)

These are specific statements made in written chapters that later chapters must honour:

### From Chapter 1:
- "179 bank failures" / "$2.3 trillion" / "30 countries" / "six decades" — these stats must be consistent everywhere
- "Ten recurring failure modes" — the list is: Concentration Blindness, Model Overreliance, Governance Bypass, Silo Thinking, Cultural Suppression, Emerging Risk Blindness, Control Environment Failure, Information Asymmetry, Regulatory Arbitrage Masking, Complacency
- "The methodology is built on three foundations: Standards, Regulation, Evidence" — this framing should be referenced in later chapters
- "16 regulatory frameworks" — must match the actual count in Chapter 15
- "Six-phase process" — Phases 1-6 as listed must be consistent with the chapter structure
- Stated the book has "16 chapters"
- Said "the next chapter examines ISO 31000, ISO 31010, COSO ERM, and BCBS Corporate Governance Principles" — Chapter 2 must cover all four
- Hospital metaphor: "world's best surgeons and diagnostic equipment but no process for examining patients" — can be called back but don't overuse
- Rory "built this process twice — at Credit Suisse and at Standard Chartered"
- Rory worked at Hypo Real Estate during GFC (personal connection — can be used in later chapters)
- Each failure mode section ended with "What was missing" — a specific methodology feature. These create implicit promises:
  - Concentration Blindness → enterprise portfolio view (Ch 8)
  - Model Overreliance → models as one input, independent challenge (Ch 9)
  - Governance Bypass → escalation paths, Board gets unfiltered info (Ch 3)
  - Silo Thinking → reconciliation process, enterprise portfolio view (Ch 8)
  - Cultural Suppression → anonymous reporting, Board visibility into risk culture (Ch 3, Ch 5)
  - Emerging Risk Blindness → Delphi Method, horizon scanning (Ch 6)
  - Control Environment Failure → internal environment assessment as Phase 1 (Ch 5)
  - Information Asymmetry → bottom-up templates, workshop inclusion (Ch 6, Ch 7)
  - Regulatory Arbitrage Masking → regulatory vs economic risk gap analysis (Ch 12)
  - Complacency → scenario analysis, quarterly re-identification (Ch 9, Ch 13)

### From Chapter 2:
- ISO 31000 described as "three-layer architecture: Principles, Framework, Process" — use this terminology consistently
- 11 ISO 31000 principles labelled a–k; 8 highlighted as most relevant to risk ID (a, b, c, d, e, f, h, j)
- ISO 31000 Section 5.4.2 is "the provision most directly relevant to this book" — risk identification
- ISO 31000 Section 5.3 (Establishing the Context) is the standards basis for Phase 1 (Foundation Setting)
- ISO 31000 Section 5.2 (Communication and Consultation) is the standards basis for dual-track identification
- ISO 31000 requires examination of "knock-on effects of particular consequences, including cascade and cumulative effects" — this is the standards basis for risk interaction analysis (Ch 10)
- ISO 31010 catalogues "31 risk assessment techniques" with Table A.1 applicability matrix
- Technique-to-chapter mapping table created: Brainstorming→Ch 6, Structured interviews→Ch 7, Delphi→Ch 6, Checklists→Ch 5, SWIFT→Ch 6, HAZOP→Ch 7, Scenario analysis→Ch 6/9, Bow-tie→Ch 10, Fault tree→Ch 10
- ISO 31010 Section 6.2 identifies three technique selection factors: resources/expertise, nature/degree of uncertainty, complexity
- ISO 31010 requires "structured record not just of risks identified but also of information used, assumptions made, and limitations" — transparency requirement
- COSO ERM described with 8 components: Internal Environment, Objective Setting, Event Identification, Risk Assessment, Risk Response, Control Activities, Information & Communication, Monitoring
- COSO ERM "four objective categories": Strategic, Operations, Reporting, Compliance — methodology requires identification against ALL four
- COSO "three-dimensional model" (cube): 8 components × 4 objectives × entity levels — used as completeness check at Credit Suisse
- Treadway Commission established 1985; COSO Internal Control Framework 1992; ERM Framework 2004; Sarbanes-Oxley 2002
- BCBS Corporate Governance Principles 2015, Principle 7: risk identification on "ongoing bank-wide and individual entity basis"
- BCBS requires: bank-wide identification, ongoing (not annual) frequency, keeping pace with change, Board responsibility, risk function independence
- BCBS Principles 1 (Board duties), 8 (risk communication), 9 (compliance) also relevant
- Phase-to-standards traceability table: Phase 1→ISO 5.3/COSO 1-2/BCBS bank-wide; Phase 2→ISO 31010 techniques/COSO 3/BCBS coverage; Phase 3→ISO 5.4.3-4/COSO 4/ISO 31010; Phase 4→ISO 31010 transparency/COSO 7; Phase 5→ISO Principle b/COSO 7/BCBS Board; Phase 6→ISO Principle j/COSO 8/BCBS ongoing
- Described ISO 31000 as providing "architecture", ISO 31010 as "techniques", COSO ERM as "enterprise lens", BCBS as "banking mandate"
- Said "Standards provide the architecture. They do not provide the craft." — distinction between standards compliance and practitioner methodology
- Bridge to Ch 3: "who owns the risk identification process, who participates in it, who has authority to challenge the business, and how findings reach the Board without being filtered by the people who generated the risk"
- No new loss figures or database statistics introduced

### From Chapter 3:
- Three Lines of Defence model applied specifically to risk identification (first line = business units, second line = CRO + Risk ID Lead, third line = Internal Audit)
- Seven governance roles defined: Board Risk Committee, CRO, Risk Identification Lead, Business Unit Heads, Risk Assessors, Risk Owners, Front-Line Employees
- "Risk owners are named individuals — not committees, not functions" — this must be consistent in later chapters
- Three forms of independence defined: structural, operational, intellectual — use these terms consistently
- CRO reporting line: "report to the CEO with a direct line to the Board Risk Committee, or — preferably — report directly to the Board with administrative reporting to the CEO"
- Risk Identification Lead described as requiring "both technical expertise and political skill"
- Rory's Credit Suisse experience: "first things I had to establish was that the Risk Identification Lead was not there to rubber-stamp what business units wanted to report"
- Principal risk report contents listed (10 items, same as Draft 3 §10.5) — Ch 12 must be consistent
- Four frequencies of risk identification: annual full, quarterly re-identification, monthly KRI monitoring, event-driven updates
- Quarterly re-identification explicitly linked to Fed SR 15-18 (CCAR) — "not merely a re-assessment of existing risks... active re-identification"
- Communication and consultation based on ISO 31000 Section 5.2 — four requirements: stakeholder identification, perception capture, two-way communication, documentation
- "Perception capture" term introduced — differing risk perceptions from different stakeholders actively sought and documented
- OCC Heightened Standards "Three Units" model referenced — front-line units accountable for risk identification in their activities
- HBOS/Paul Moore case: Paul Moore appointed 2004 as Group Head of Regulatory Risk, dismissed 2005, HBOS collapsed 2008, £10B+ losses, Peter Cummings banned by FSA
- Société Générale/Kerviel: €50B hidden positions, exploited back-office knowledge, €4.9B loss — used to illustrate governance gaps in process frequency and role design
- Wells Fargo: 3.5 million unauthorised accounts, $3B settlement, Fed asset cap — front-line complaints treated as HR matters
- Standard Chartered sanctions: $250B in Iranian transactions, compliance overruled by senior management, $667M fine
- Cooperative Bank: unqualified chairman, Britannia acquisition, £1.5B rescue — Board competence as governance prerequisite
- Banca MPS: senior management complicit in concealment via derivative transactions — when escalation path itself is compromised
- "Governance is not self-executing" — closing statement about institutional commitment
- Bridge to Ch 4: "the risk taxonomy — the common language that ensures every participant in the process, from the Board to the front line, is identifying and classifying risks in the same way"
- Ch 3 delivered on Ch 1 promises: escalation paths (structured escalation framework section), Board gets unfiltered info (principal risk report + direct access), anonymous reporting (anonymous reporting channels section), Board visibility into risk culture (front-line risk observation reporting to Board Risk Committee)
- Specialist sub-processes named but not detailed: RCSA, conduct risk, ICT risk, AML/CFT, third-party risk — these will be covered in Ch 7

### From Chapter 4:
- Risk taxonomy defined as "the hierarchical classification structure that defines how an institution categorises its risks" — use this definition consistently
- Three-level structure: L1 (broad categories), L2 (sub-categories), L3 (granular risk types) — use L1/L2/L3 terminology consistently
- Full L1 taxonomy table with 13 categories listed (matching Ch 1's "13 risk types" from Draft 3 §2): Credit Risk, Market Risk, Operational Risk, Liquidity Risk, Strategic Risk, Compliance and Regulatory Risk, Reputational Risk, Model Risk, Conduct Risk, Third-Party and Outsourcing Risk, Step-in Risk, Climate and Environmental Risk, Emerging and Systemic Risk
- L2 examples given for Credit Risk (5 sub-cats), Market Risk (6), Operational Risk (7 Basel categories), Conduct Risk (5) — later chapters must be consistent with these
- **MECE principle** introduced: Mutually Exclusive, Collectively Exhaustive — use this term consistently
- "If a risk falls outside the taxonomy, no one is looking for it" — the collectively exhaustive requirement framed as structurally more dangerous than mutually exclusive
- JPMorgan London Whale: CIO classified as hedging not trading desk; exempt from proprietary trading risk limits and VaR; $6.2B loss; "the organisational classification of the activity determined the level of oversight" — PRIMARY case study, do not repeat at this depth
- Deutsche Bank mirror-trading: $150B suspicious transactions; gap between equities surveillance and AML monitoring; $630M combined UK/US fines — secondary case, can expand in Ch 16
- Lloyds/PPI: £22B+ industry redress; conduct risk not in taxonomy; "customer suitability" not a risk category — brief, used to illustrate collectively exhaustive failure
- **Regulatory mapping table** concept introduced: institution maintains separate document mapping internal taxonomy nodes to each regulator's categories — Ch 12 (integration) and Ch 15 (regulatory landscape) must reference this
- Regulatory taxonomy divergence described: Basel, EBA, PRA, ECB, Fed, OCC each use non-identical categorisations — Ch 15 must address this in detail
- ISO Guide 73 referenced as vocabulary standard for definitional consistency — "counterparty credit risk" and "operational risk" noted as having different scope under Basel vs common usage
- Taxonomy maintenance: annual Board approval of L1 and material L2 changes; CRO can propose amendments at any time; event-driven and regulatory-driven updates
- Delphi Method described as serving "double duty" — identifying specific emerging risks AND providing intelligence for taxonomy evolution — Ch 6 must deliver on Delphi methodology
- **"The Taxonomy Test"** concept: take any historical loss, map it to taxonomy; if it doesn't map cleanly, taxonomy is deficient — can be called back in Ch 16
- "Design for the process, not for the org chart" — taxonomy must classify by risk characteristics, not by organisational unit that generates the risk
- Taxonomy described as "the thread that runs through all six phases" — referenced its enabling role in each phase (1 through 6)
- Bridge to Ch 5: "the systematic assessment of the external environment, the internal context, and the risk culture that will either enable or undermine every step that follows"
- Credit Suisse taxonomy experience: investment bank had 47 risk categories, Swiss universal bank 23, private banking 31; different classifications for same exposures; conduct risk absent from some divisions' taxonomies
- Ch 4 delivered on Ch 3 promise: "the risk taxonomy — the common language that ensures every participant in the process, from the Board to the front line, is identifying and classifying risks in the same way"

### From Chapter 5:
- Phase 1 (Foundation Setting) comprises six activities: establish external context, establish internal context, assess internal environment, define risk criteria, build starting universe, prepare straw man risk list — use this list consistently
- **PESTLE framework** introduced: Political, Economic, Social, Technological, Legal, Environmental — adapted for banking; described as a "checklist" technique from ISO 31010
- PESTLE findings "must be mappable to the risk taxonomy" — discipline requirement that PESTLE outputs connect to taxonomy categories
- **Climate/ESG risk identification framework** with six transmission channels: physical risk (acute, chronic), transition risk (policy, technology, market, reputational) — use these categories consistently
- Climate risks assessed across three **time horizons**: short-term (1-3 years), medium-term (3-10 years), long-term (10-30 years) — use these ranges consistently
- Climate risks "are not a standalone risk category in the taxonomy" — they manifest through existing risk types (credit, market, operational, liquidity, reputational)
- EBA ESG Guidelines and ECB Guide on Climate-Related and Environmental Risks referenced as regulatory basis for climate risk identification
- Internal context six elements: strategic objectives, organisational structure, governance, capabilities and resources, information systems and data flows, risk appetite statement
- **BCBS 239** (Principles for effective risk data aggregation and risk reporting) referenced as regulatory benchmark for data infrastructure assessment — later chapters must be consistent
- Risk appetite statement must be "specific and operational" — "a single paragraph of aspirational language that provided no practical constraint on risk-taking... is not a risk appetite. It is a mission statement with the word 'risk' in it"
- **Internal environment assessment** uses 7 COSO elements: risk management philosophy, Board attitudes, integrity/ethical values, commitment to competence, organisational structure, assignment of authority, human resource standards — use these consistently
- COSO ERM Internal Environment is "the first of its eight components because everything else rests on it"
- Internal environment assessment must be refreshed annually (delivered on Ch 3 commitment)
- Material weaknesses from internal environment assessment escalated to CRO and Board Risk Committee
- **Risk criteria** five components: impact scales, likelihood scales, materiality threshold, risk appetite boundaries, aggregation rules — use these consistently
- Multi-dimensional impact assessment: financial, reputational, regulatory, customer, and operational dimensions — "the highest applicable dimension determines the impact rating" — Ch 9 must be consistent
- COSO practice guidance recommends five-point scales
- Detailed scoring methodology deferred to Chapter 9 — "the four-dimensional assessment framework and the data quality overlay" — Ch 9 must deliver this
- Aggregation rules defined before identification so "the enterprise portfolio view produced in Phase 2 (Chapter 8) rests on a consistent methodology" — Ch 8 must reference this
- **Starting universe** seeded from three sources: regulatory categories, industry loss data, internal incident history — use these three consistently
- Five additional data sources for starting universe: social media/public sentiment, vendor/third-party assessments, technology/system logs, customer data/feedback, peer institution benchmarking (ORX data referenced)
- Starting universe "is not the risk inventory. It is the evidence base from which identification proceeds"
- **Straw man risk list**: prepared by Risk Identification Lead, organised by L1/L2 taxonomy classification, drawn from starting universe + prior-year inventory + current PESTLE/internal context
- Straw man serves three functions: prevents blank-page syndrome, counters recall bias, provides audit trail baseline
- Straw man rules of use: circulated in advance, labelled as discussion prompt, meant to be torn apart, final output must reflect workshop's collective judgement
- Credit Suisse straw man lesson: framing matters — "proposed risk list" produced deference; "what is wrong with it" produced genuine challenge
- Rory at Hypo Real Estate: joined October 2007 as Financial Risk Manager, CDO/MBS pricing; Depfa acquisition had just completed; €400B balance sheet funded short-term wholesale; €102B government guarantee; nationalised 2009
- Northern Rock: funded 75% via securitisation/wholesale; business model was itself the unidentified risk; first UK bank run in 150 years September 2007; nationalised February 2008; £2B taxpayer cost
- Anglo Irish Bank: Sean FitzPatrick chairman; €87M personal loans concealed; CRE concentration; culture of deference; €29.3B taxpayer cost; nationalised 2009; renamed IBRC; liquidated 2013
- Bridge to Ch 6: "the dual-track approach — the top-down workshops using SWIFT and Delphi techniques that bring senior management's strategic perspective to bear on the risk landscape, combined with the bottom-up analysis that captures what only the people closest to the business can see. Neither track alone is sufficient."
- Ch 5 delivered on Ch 1 promises: Control Environment Failure → internal environment assessment (7 COSO elements); Cultural Suppression → internal environment assessment with material weakness escalation
- Ch 5 delivered on Ch 2 promise: ISO 31000 Section 5.3 as standards basis for Phase 1; Checklists → PESTLE
- Ch 5 delivered on Ch 3 promises: internal environment assessment defined; annual refresh described; Risk ID Lead prepares straw man
- Ch 5 delivered on Ch 4 promises: PESTLE mappable to taxonomy; straw man organised by L1/L2; starting universe fully developed

### From Chapter 6:
- **Four brainstorming pathologies** identified and named: authority bias, groupthink, recall bias, production blocking — use these terms consistently; described as "predictable pathologies when applied to risk identification in a banking context"
- "Traditional brainstorming, applied to risk identification in a hierarchical institution, does not identify risks. It identifies consensus. And consensus, in risk management, is the enemy."
- **Dual-track rationale** explained: top-down captures strategic/emerging risks visible from altitude; bottom-up captures granular/operational risks visible only to people closest to the business; "neither track alone is sufficient" — references ISO 31000 §5.2 and Oliver Wyman
- Oliver Wyman cited: "parallel top-down and bottom-up processes provides a higher likelihood of identifying an organisation's full suite of risks than either process in isolation"
- **Workshop participant list** defined: CRO/deputy, BU heads, Treasury/ALM, Compliance/Legal, Finance/CFO, Risk ID Lead; annual review of participant list recommended; rotating 1-2 participants per cycle
- **Pre-workshop independent assessment** described as "the single most important design element" — each participant independently identifies top 10 risks in writing before workshop; three purposes: eliminates authority bias, maps agreement/disagreement, creates audit trail baseline
- **Briefing pack** contents defined: PESTLE assessment, internal context/environment summaries, prior-year principal risk list with trends, regulatory communications, industry loss events since last cycle
- **Workshop structure table** defined: Opening (15min) → Independent assessment review (30min) → SWIFT rounds (90-120min) → Emerging risk session (30min) → Multivoting (20min) → Gap review (15min); total ~4 hours; "institutions that attempt to run risk identification workshops in ninety minutes are signalling that they do not take the process seriously"
- **SWIFT (Structured What-If Technique)** described in detail: ISO 31010 Section B.7; originally from process safety; uses prepared guide words applied systematically; key difference from brainstorming is structured prompts not open questions
- Six SWIFT guide words defined in table: "What if...", "What would happen if...", "Could someone/something...", "What has changed since last year that could...", "What are we assuming that might not be true?", "Where are the gaps between..." — with example banking prompts for each
- SWIFT guide words applied across five domains: strategic objectives, business areas, risk categories (with cross-category attention), external environment (PESTLE), interconnections
- **Facilitation skills** described: managing dominant voices, drawing out dissent (structured turn-taking, watching non-verbal signals), maintaining challenge culture ("silence should not be interpreted as agreement"), protecting process from political interference (requires Ch 3 structural independence)
- Rory's Credit Suisse facilitation experience: BU head told him a risk "did not exist" in front of colleagues; the risk appeared in final inventory; "the political skill required to navigate that moment... is the craft that distinguishes a process that works"
- **Scenario analysis** as identification technique: uses PESTLE factors to construct plausible scenario combinations; purpose is identification not quantification (quantification deferred to Ch 9); CCAR requires firm-specific stress scenarios targeting own vulnerabilities
- Fed SR 15-18 connection to SWIFT: CCAR requires forward-looking identification of risks that appear only under stress; SWIFT scenario prompts produce the identification outputs CCAR requires
- **Multivoting** described: 5-10 votes per participant, can place multiple on one risk; transparent and traceable; eliminates single-voice dominance; output is preliminary — detailed scoring in Ch 9
- **Five top-down outputs** defined in table: principal risk list (15-30 risks), emerging risk register (Delphi output, flagged for taxonomy review), assumption register (challenged assumptions documented), disagreement log (materially different views preserved not averaged), taxonomy gap list (fed into taxonomy maintenance)
- **Disagreement log** concept: divergence between senior participants is "itself information" — signals uncertainty, complexity, or genuine analytical disagreement; assessment phase (Ch 9) must resolve through evidence not social dynamics — Ch 8 (reconciliation) and Ch 11 (documentation) should reference this concept
- **Assumption register** concept: key assumptions identified and challenged in workshop, documented for audit trail and revisiting in subsequent cycles — Ch 13 (ongoing cycle) should reference this
- **Archegos case study (PRIMARY):** Bill Hwang, family office, total return swaps, 5-8x leverage across multiple prime brokers (CS, Nomura, Morgan Stanley), no aggregate visibility across brokers, family office structure meant no 13F filing, each bank's bilateral exposure "manageable" but aggregate catastrophic; collapsed March 2021; $20B total losses; CS absorbed $5.5B "contributing materially to the institution's eventual demise"; Bill Hwang convicted of fraud
- Four specific SWIFT prompts that would have surfaced Archegos risk provided as examples — can be referenced in later chapters
- **What was missing (Archegos):** structured workshop methodology with systematic prompts across counterparty types, assumption challenge on bilateral vs aggregate exposure, pre-workshop independent assessments to surface divergent views
- **Delphi Method** described in full detail: ISO 31010 Section B.4; 10-20 expert panel (internal + external); anonymous submissions to Risk ID Lead who acts as "oracle"; 2-3 iterative rounds; convergence does not mean unanimity; persistent disagreement is itself a signal; 3-5 year horizon
- **Delphi anonymity** is "the mechanism that makes the technique work" — eliminates social dynamics, junior analyst's view carries equal weight to CEO's, external consultant's challenge heard without attribution
- **Delphi's double duty** delivered (honouring Ch 4 commitment): primary = identify specific emerging risks; secondary = intelligence for taxonomy evolution; climate risk cited as historical example where Delphi-style processes identified risks before regulatory mandates; output feeds risk inventory AND taxonomy maintenance process
- **Wirecard case study (PRIMARY):** €1.9B fabricated cash at Philippine trustee banks; fabricated revenues from third-party acquiring partners in Asia; intimidated journalists and regulators; BaFin filed criminal complaints against FT reporters instead of investigating; "the regulator defended the fraudster and prosecuted those who identified the risk"; short-sellers' analysis available from 2015; FT reporting from 2019; CEO Markus Braun arrested; COO Jan Marsalek fled; Germany's largest post-war corporate fraud; filed insolvency June 2020
- **What was missing (Wirecard):** structured mechanism for incorporating external expert perspectives, protected by anonymity and institutional independence; Delphi with external panellists would have surfaced dissenting analysis that internal processes were structurally incapable of producing
- CCAR integration: quarterly re-identification cycle (from Ch 3) means SWIFT workshops are not annual events; quarterly workshops more focused on changes/emerging risks; straw man for quarterly draws on prior quarter inventory + updated PESTLE + event-driven triggers; at Credit Suisse, CRO required process to feed directly into CCAR submission; Material Risk Inventory became foundation for scenario design and stress testing
- **Limits of top-down identification** acknowledged: senior leaders see from altitude but don't see granular operational risks; "top-down track identifies the twenty risks that could destroy the institution. The bottom-up track identifies the two hundred risks that collectively define the institution's operational risk profile"
- Bridge to Ch 7: "how standardised templates capture granular risks across every business unit, how RCSA and specialist sub-processes feed into the central inventory, and how the Risk Identification Lead ensures that nothing falls through the gaps between specialist functions and the enterprise process"
- Ch 6 delivered on Ch 1 promises: Emerging Risk Blindness → Delphi Method with full methodology and Wirecard case; Information Asymmetry → workshop inclusion (pre-workshop independent assessment, structured turn-taking, multivoting)
- Ch 6 delivered on Ch 2 promises: Brainstorming→Ch 6 (described + critiqued), SWIFT→Ch 6 (full methodology), Delphi→Ch 6 (full methodology), Scenario analysis→Ch 6 (identification-focused; quantification deferred to Ch 9); ISO 31000 §5.2 referenced as dual-track basis
- Ch 6 delivered on Ch 4 promise: Delphi "double duty" — emerging risk identification AND taxonomy evolution intelligence
- Ch 6 delivered on Ch 5 promises: straw man as workshop input (circulated with briefing pack), dual-track approach established, Credit Suisse straw man framing lesson called back briefly

### From Chapter 7:
- **Compliance theatre** concept introduced: "the appearance of risk identification without the substance" — bottom-up submissions that roll forward prior year without genuine analysis; "worse than no process at all because it creates a documented record suggesting that identification has occurred when it has not" — can be called back in Ch 13 (ongoing cycle)
- **Standardised Risk Assessment Template** with 11 fields defined: Risk ID, Taxonomy Classification, Risk Definition, Underlying Drivers (Direct), Underlying Drivers (Indirect), Quantitative Metrics, Qualitative Information, Current Controls (type: prevent/detect/correct + effectiveness), Risk Owner, Emerging Risk Indicators, Data Quality Rating (High/Medium/Low/Very Low) — Ch 9 and Ch 11 must reference these fields consistently
- Three "most common failure" fields identified: underlying drivers (empty or single-word), current controls (defaulting to "effective" without evidence), data quality rating (defaulting to "Medium") — these diagnostic insights can be referenced in Ch 13 (quality assurance)
- **Control types** defined: preventive, detective, corrective — use these three terms consistently
- **Data Quality Rating** four-level scale: High, Medium, Low, Very Low — Ch 9 must describe how this feeds into four-dimensional assessment framework
- **Four bottom-up identification techniques** described: structured interviews, checklists, Ishikawa/cause-and-effect diagrams, FMEA — delivered on Ch 2 technique mapping promises (Structured interviews→Ch 7, HAZOP→Ch 7)
- **HAZOP** described for banking operations: guide words (no, more, less, reverse, other than) applied to process parameters (flow, timing, sequence, composition) — originated in process safety like SWIFT; applied to process-level risks as SWIFT applies to strategic risks
- **Structured interviews** protocol: five question areas (risks seen, what changed, controls that work, whole-BU perspective, what's being missed) — "what is being missed" described as most productive question
- **Ten specialist sub-processes** all covered in detail: (1) RCSA, (2) TSRA, (3) RSR, (4) Conduct Risk, (5) Model Risk, (6) ICT/Cyber, (7) AML/CFT, (8) Third-Party/Outsourcing, (9) Traded Risk, (10) Treasury Risk
- RCSA requires full **BIS PSMOR toolbox**: self-assessment, KRIs, external loss data, business process mapping, event management — event management provides feedback loop from materialised risks back into identification
- Conduct risk follows **FCA five Conduct Questions** framework: (1) harm to customers/markets, (2) market integrity, (3) competition, (4) firm culture contribution, (5) inherent business model risks — must be business-led at desk-by-desk granularity, reverse-engineered from customer harm
- Incentive structures described as "single most important input to conduct risk identification"
- ICT/Cyber must be consistent with **EBA GL/2019/04**: information asset inventory, annual ICT risk assessment, ICT change management risks — threat landscape "changes continuously and adversarially", requires external threat intelligence and more frequent refresh than annual cycle
- AML/CFT follows **EU AMLD6**: entity-level ML/TF risk identification; risks must be identified for new products/services/channels **before launch**
- Third-party/outsourcing per **EBA Outsourcing Guidelines**: comprehensive outsourcing register, sub-outsourcing and fourth-party dependencies, concentration risk across providers — "if five critical functions depend on a single cloud provider, the failure of that provider is not five independent operational risks — it is one systemic risk"
- TSRA described as complement to Ch 10 risk interaction analysis — scenarios stress interactions between risk types
- RSR described as cross-cutting — reputational risk rarely materialises independently, almost always consequence of another risk crystallising
- Treasury risk has structural challenge: many risks created by commercial activities of other BUs; must receive inputs from all BUs, assess aggregate institutional exposure
- **Four integration requirements** for specialist sub-processes: (1) common taxonomy (L1/L2/L3), (2) same four-dimensional scoring methodology, (3) standardised template submission, (4) participation in reconciliation — Ch 8, Ch 9, Ch 11 must reference these consistently
- Risk Identification Lead role described as "quality assurance role with challenge authority" — not coordination; sends back non-compliant submissions, challenges unchanged risk lists, escalates gaps
- Credit Suisse bottom-up redesign: introduced requirement that every BU must identify at least three new or materially changed risks each annual cycle
- **Bottom-up output:** comprehensive risk register of 100-500 risks across all BUs, incorporating all 10 specialist sub-processes
- **Rogue trading as recurring operational risk** with identifiable structural preconditions: (1) trader who understands control chain, (2) inadequate independent verification of trade authenticity, (3) RCSA that assesses controls against design specification rather than determined circumvention — established through Rusnak (2002), Kerviel (2008), Adoboli (2011) pattern
- AIB/Rusnak: $691M loss; John Rusnak at Allfirst (US subsidiary); FX options; fictitious offsetting trades; weak back-office confirmation; geographic separation; reliance on local management assurances; sentenced 7.5 years; Allfirst sold to M&T Bank — **PRIMARY** bottom-up identification failure case
- UBS/Adoboli: $2B loss; Kweku Adoboli; Delta One desk London; unauthorised ETF trading; fictitious hedging positions; gaps between trading and settlement systems; occurred after $37B GFC losses and comprehensive risk overhaul; FSA £29.7M fine; sentenced 7 years; accelerated UBS exit from investment banking — **PRIMARY** shows even post-crisis reforms fail without proper RCSA
- Bridge to Ch 8: "the reconciliation process — the iterative comparison between top-down and bottom-up that identifies gaps, resolves conflicts, escalates bottom-up risks of strategic significance, assigns top-down risks to business unit owners, and ultimately produces the enterprise portfolio view"; "most banks fail" at reconciliation; "the methodology requires both tracks precisely because the reconciliation between them is where the most valuable risk identification occurs"
- Ch 7 delivered on Ch 1 promises: Information Asymmetry → bottom-up templates (standardised template capturing distributed knowledge via structured interviews and front-line input)
- Ch 7 delivered on Ch 2 promises: Structured interviews→Ch 7 (full methodology with interview protocol), HAZOP→Ch 7 (guide words applied to banking process parameters)
- Ch 7 delivered on Ch 3 promises: all specialist sub-processes detailed (RCSA, conduct risk, ICT/cyber, AML/CFT, third-party risk plus TSRA, RSR, model risk, traded risk, treasury risk); BU Heads participate in bottom-up; Risk Assessors dual reporting referenced; front-line employees as earliest sensors referenced
- Ch 7 delivered on Ch 4 promises: common taxonomy as integration requirement; all sub-processes must use L1/L2/L3; regulatory mapping table referenced for taxonomy translation
- Ch 7 delivered on Ch 5 promises: starting universe, PESTLE, and industry loss database feed into bottom-up process; briefing materials shared with BUs
- Ch 7 delivered on Ch 6 promises: standardised templates, RCSA, specialist sub-processes, Risk ID Lead integration role all delivered; top-down ~20 / bottom-up ~200 distinction maintained; reconciliation deferred to Ch 8

### From Chapter 8:
- **Five reconciliation steps** defined: (1) gap analysis, (2) escalation, (3) assignment, (4) challenge, (5) iteration — use these terms consistently
- **Compilation vs reconciliation** distinction introduced: compilation = merging lists and removing duplicates; reconciliation = analytical work that identifies what neither track found; "compilation tells you what two tracks have produced. Reconciliation tells you what neither track has found"
- **Gap analysis** produces two types: top-down gaps (risks in workshop not in BU submissions) and bottom-up gaps (risks in BU submissions not in workshop) — each with two sub-categories (genuine failure vs genuinely enterprise-level / genuinely local)
- "A clean reconciliation with no gaps should be treated with suspicion, not satisfaction. The gaps are the signal, not the noise."
- **Escalation threshold:** does the risk, individually or aggregated with related risks across other BUs, potentially exceed materiality threshold or breach appetite boundaries?
- **Assignment hierarchy:** natural BU home → unit with largest exposure share → CRO/Group Risk level for genuinely enterprise-level risks
- Assignment described as "one of the most politically sensitive moments in the entire methodology"
- **Challenge sessions** resolve disagreement log and assumption register through evidence not social dynamics; work both ways (BU challenges top-down; senior management challenges bottom-up)
- CS challenge session example: model risk validation — "effective" control rating based on 2-year-old validation against different market regime; challenge session produced reassessment and revalidation commitment
- **Typical iterations:** 2-3 for annual cycle, 1-2 for quarterly
- **CRO sign-off** represents "governance conclusion of Phase 2"
- **Enterprise portfolio view** defined with four assessments: (1) common exposures, (2) simultaneous crystallisation, (3) aggregate position against appetite, (4) diversification and correlation — use these four consistently
- **Taxonomy-based aggregation** and **cross-taxonomy analysis** described as two levels of common exposure analysis
- Simultaneous crystallisation assessment is "identification, not quantification" — quantification deferred to Ch 9 and stress testing
- Simultaneous crystallisation directly addresses **silo thinking** failure mode (Ch 1)
- Enterprise portfolio view directly addresses **concentration blindness** failure mode (Ch 1)
- Diversification assumptions are themselves a risk — "concentration risk in disguise" if based only on historical correlations in normal markets
- Correlations increase under stress — "diversification benefits that hold in normal conditions evaporate precisely when they are needed most"
- **Enterprise risk map** as output: aggregated risk landscape, correlated clusters, appetite breaches
- Enterprise risk map feeds: principal risk report (Ch 3), CCAR Material Risk Inventory (Ch 6), capital planning/strategy/regulatory reporting (Ch 12), ongoing cycle updates (Ch 13)
- Enterprise risk map "is not static" — updated as ongoing cycle refreshes inventory
- Phase 2 now complete; every risk in inventory has: taxonomy classification, named owner, documented source (top-down/bottom-up/both), position within enterprise portfolio view
- **Citigroup case study (PRIMARY):** SIVs off-balance-sheet, liquidity puts classified as remote contingencies, excluded from risk aggregation, $50B+ SIV assets returned to balance sheet, $45B TARP bailout; "the risk was not hidden. It was distributed"
- **HSH Nordbank case study (supporting):** world's largest shipping lender + US subprime structured products, treated as diversified, both correlated to global economic activity, €10B state guarantee, restructured as Hamburg Commercial Bank, privatised 2018
- Standard Chartered 2023: reconciliation documentation from prior cycle was a merged spreadsheet with colour-coding, no gap analysis, no challenge sessions, no enterprise portfolio view — "the institution had two identification tracks. It did not have reconciliation"
- CS first reconciliation cycle: 23 top-down risks, 187 bottom-up risks, 12 top-down gaps, 47 bottom-up gaps
- Bridge to Ch 9: four-dimensional assessment (financial, regulatory, reputational, customer/operational), data quality overlay, materiality determination — "the four-dimensional assessment framework that Chapter 5 introduced and this chapter's enterprise portfolio view requires"
- Ch 8 delivered on Ch 1 promises: Concentration Blindness → enterprise portfolio view (simultaneous crystallisation assessment, Citigroup case); Silo Thinking → reconciliation process + enterprise portfolio view (explicitly named in simultaneous crystallisation section)
- Ch 8 delivered on Ch 3 promises: challenge sessions as structured challenge (Step 4); principal risk report referenced as output destination
- Ch 8 delivered on Ch 5 promises: aggregation rules referenced as foundation for enterprise portfolio view ("rests on a consistent methodology")
- Ch 8 delivered on Ch 6 promises: disagreement log and assumption register referenced in challenge sessions (Step 4); five top-down outputs referenced; scenario analysis called back for simultaneous crystallisation
- Ch 8 delivered on Ch 7 promises: reconciliation as iterative comparison between top-down and bottom-up; "most banks fail" central thesis delivered; methodology requires both tracks; bottom-up output of 100-500 risks as input; four integration requirements referenced (taxonomy as mapping key); third-party concentration escalation example callbacks

### From Chapter 9:
- **Four-dimensional risk score** terminology introduced: Impact, Likelihood, Vulnerability, Speed of Onset — use these four dimension names consistently
- **Dominant dimension rule** introduced: "the highest-scoring dimension determines the overall impact rating" — use this term consistently
- **Financial impact anchored to CET1 capital** — five-point scale: Incidental (<0.1%), Minor (0.1–1%), Moderate (1–5%), Major (5–15%), Extreme (>15%, threatens viability) — use these consistently
- **Regulatory and legal impact** five-point scale: Incidental → Extreme (licence revocation, criminal prosecution, forced restructuring) — use consistently
- **Reputational impact** five-point scale: Incidental → Extreme (total loss of market confidence, Board/CEO departure) — use consistently
- **Customer and operational impact** five-point scale: Incidental → Extreme (total service failure, mass customer harm) — use consistently
- **Likelihood** five-point scale: Rare (<1%), Unlikely (1–10%), Possible (10–50%), Likely (50–90%), Frequent (>90% or already occurred) — use consistently
- **Vulnerability** five-point scale: Very Low (robust, proven under stress) → Very High (no effective controls, fully exposed) — use consistently
- **Speed of onset** five-point scale: Very Slow (years) → Immediate (days or less) — use consistently
- Three common likelihood failures named: anchoring to recent experience, conflating likelihood with perceived controllability, treating independence as default
- Assessment vs measurement distinction made explicit: "assessment is the structured evaluation of identified risks using defined scales... not quantitative risk measurement" — it does not replace credit risk models, VaR, capital calculations
- Assessment purpose threefold: prioritise inventory, enable cross-risk comparison, provide Board with enterprise view
- **Data Quality Rating** four-level scale (same as Ch 7): High, Medium, Low, Very Low — with three operational consequences:
  1. **Conservatism adjustment:** low data quality = cannot carry low impact/likelihood ratings without CRO approval; "uncertainty about a risk should not reduce the attention it receives"
  2. **Sensitivity testing:** what if impact/likelihood one level higher? If crosses materiality threshold, treated as potentially material
  3. **Board transparency:** Board Risk Report includes data quality distribution across material portfolio
- **Inherent risk** = risk level assuming no controls; **Residual risk** = after controls; **Control effectiveness** rated 1–5 (highly effective to ineffective) — use these definitions consistently
- Inherent-residual separation has three purposes: reveals control dependency, identifies where controls mask exposure, prevents assessment gaming
- **Independent challenge requirement** for models: "models are an input to assessment, not a substitute for it" — three requirements: state assumptions, identify breakdown scenarios, record management judgement on applicability — delivers on Ch 1 Model Overreliance promise
- Scenario analysis from Ch 6 SWIFT workshops provides structured challenge to likelihood assumptions — delivers on Ch 1 Complacency promise
- **Disagreement log resolution:** four-dimensional framework provides structured basis; dimensional separation often dissolves disagreement (CRO and BU head may both be correct on different dimensions); persistent disagreement preserved with minority view, evidence basis, and data quality ratings documented; Board receives both — delivers on Ch 6 promise
- **Materiality determination:** Impact × Likelihood heatmap, materiality threshold from Phase 1 (Ch 5), CRO-approved; typically 20–60 risks classified as material
- Materiality incorporates three factors: dominant dimension, aggregation (catches Citigroup pattern), data quality adjustment (Very Low cannot auto-exclude)
- **Risk heatmap** described as "screening tool" not conclusion — does not show vulnerability, speed of onset, data quality, correlations, or inherent-residual gaps
- Material risks proceed to: full risk profiles (Ch 11), dedicated KRIs (Ch 13), capital and strategic planning integration (Ch 12), risk interaction analysis (Ch 10)
- **Assessment record** seven fields defined: Inherent Risk Score, Control Effectiveness, Residual Risk Score, Data Quality Rating, Materiality Classification, Model Dependency, Disagreement Record — integrates with Ch 7 standardised template
- Assessment record "forms the basis for the risk inventory that Chapter 11 will describe"
- Credit Suisse experience: inherent-residual gap mapping against control evidence was "one of the most productive exercises"; risks with large gaps and weak evidence flagged for deeper review
- Credit Suisse experience: risks where senior participants genuinely disagreed after structured analysis were "disproportionately likely to be the risks the institution most needed to understand"
- AIG: $500B+ CDS notional, $85B bailout, near-zero assessment based on historical default rates of AAA CDOs, single-dimensional scoring, no correlation risk identification — PRIMARY case study; full 4D retrospective application
- Wachovia/Golden West: $122B option ARM portfolio, historical California data accepted without stress testing, Data Quality should have been Very Low, $25B losses, emergency sale to Wells Fargo — supporting case for data quality
- Merrill Lynch: $40B+ super-senior CDO retention, AAA rating as substitute for independent analysis, $51.8B write-downs, CEO Stan O'Neal departed, emergency sale to BofA — supporting case for dominant dimension rule and data quality
- UBS 2008: risk function relied on same models as front office, VaR limits repeatedly increased at traders' requests, $37.4B write-downs — supporting case for independent challenge and vulnerability
- Bear Stearns: speed of onset illustration — counterparty confidence collapse in days, not gradual credit deterioration
- LTCM: likelihood anchoring illustration — VaR calibrated to normal conditions, correlations went to one in 1998 Russian crisis, $3.6B bailout
- ISO 31000 Section 5.4.3 cited as requiring risk analysis to consider consequences, likelihood, nature/magnitude, complexity/connectivity, time-related factors, control effectiveness
- ISO 31010 Section 4.3 cited as requiring transparent recording of evidence basis — foundation for Data Quality Rating
- Bridge to Ch 10: bow-tie analysis for causal chains, risk interaction matrices for risk amplification, concentration analysis for aggregate exposure — "risk interaction is the subject of Chapter 10"
- Ch 9 delivered on Ch 8 bridge promise: four-dimensional assessment framework, data quality overlay, materiality determination — all fully delivered
- Ch 9 delivered on Ch 5 promises: multi-dimensional impact (financial, reputational, regulatory, customer/operational) with dominant dimension rule; five-point scales (COSO practice guidance); detailed scoring methodology fully delivered
- Ch 9 delivered on Ch 7 promises: Data Quality Rating four-level scale with three operational consequences; references standardised template fields consistently
- Ch 9 delivered on Ch 6 promises: multivoting described as preliminary, now replaced by structured 4D scoring; disagreement log resolution through evidence and dimensional separation
- Ch 9 delivered on Ch 1 promises: Model Overreliance → independent challenge requirement ("models are an input, not a substitute"); Complacency → scenario analysis + Data Quality Rating forcing disclosure of evidence basis + sensitivity testing

### From Chapter 10:
- **Risk interaction analysis** defined as "systematic examination of how risks relate to each other — which risks trigger other risks, which risks amplify the impact of other risks, and where the institution's aggregate exposure exceeds what any individual risk score would suggest" — use this definition consistently
- **Three complementary tools** introduced: risk interaction matrix, bow-tie analysis, concentration analysis — use these three consistently
- **Risk interaction matrix** is a square matrix with material risks on both axes; directional (not symmetric); three relationship types: Triggers, Amplifies, Correlated — use these three terms consistently
- **Propagation nodes** (many outgoing trigger relationships) and **vulnerable nodes** (many incoming relationships) — terminology introduced
- **Risk clusters**, **cascade pathways**, **amplification mechanisms** — three purposes of interaction matrix
- Matrix described as "standing document, updated with each quarterly refresh" — Ch 13 must reference this
- TSRA (Ch 7) explicitly connected as complement: "TSRA tests the matrix under stress; the matrix explains why the TSRA scenarios produce the cascades they do"
- Interaction matrix provides structured analytical basis for Ch 8 simultaneous crystallisation assessment
- **Bow-tie analysis** (ISO 31010 Section B.21) described in full detail for 5-10 most critical risks:
  - Left side: causes, preventive barriers, escalation factors, escalation controls
  - Centre: precisely defined risk event
  - Right side: consequences (mapped to Ch 9 four-dimensional framework), mitigating barriers, recovery controls
  - Supporting layer: management functions (training, inspection, maintenance, testing)
  - Dual purpose: granular practitioner analysis AND Board communication tool
  - Drawn from facilitated sessions, not desk-based; mirrors SWIFT methodology from Ch 6
- Bow-tie diagrams described as "living documents, with barriers and escalation factors reassessed as controls change" — Ch 13 must reference this
- **Fault tree analysis** described as complementary to bow-tie; uses Boolean logic (AND/OR gates); most valuable for operational risks with complex failure modes; Ch 7 rogue trading three preconditions referenced as AND-gate example
- **Concentration analysis** — three forms defined:
  - **Single-name concentration:** exposure to same entity across different taxonomy categories
  - **Structural concentration:** concentration in a structural assumption (funding model, correlation assumption, technology platform)
  - **Systemic concentration:** system-level concentration beyond individual institution (banking system vs sovereign capacity)
- Concentration analysis must go beyond taxonomy-level aggregation to identifying **underlying drivers** — Ch 7 driver fields are raw material
- Systemic concentration connects to Ch 5 PESTLE (external context should identify system-level vulnerabilities)
- **Cost-benefit assessment** (ISO 31010 Section B.30) for material risks where new controls considered: quantify cost, estimate risk reduction, NPV/benefit-cost ratio where possible, qualitative trade-off table where not
- Cost-benefit assessment "is not a decision rule. It is an input to decision-making"
- **ALARP principle** (As Low As Reasonably Practicable): three zones — above upper threshold (intolerable, reduce regardless of cost), within ALARP region (reduce if cost not grossly disproportionate), below lower threshold (broadly acceptable, monitor)
- ALARP lower threshold connected to Phase 1 risk criteria (Ch 5)
- Cost-benefit documented in risk profile, "reviewed as part of the quarterly refresh cycle described in Chapter 13" — Ch 13 must reference
- Phase 3 described as complete after Ch 10 — all analytical work of risk identification done
- Bridge to Ch 11: "the fourteen-field risk inventory, the risk profiles for material risks, and the standards that ensure the inventory remains a decision tool rather than a compliance artefact"
- Outputs feed: risk inventory (Ch 11), principal risk report (Ch 3), enterprise portfolio view (Ch 8), Board risk response decisions
- **Lehman Brothers:** $85B MBS, 30:1 leverage, $639B bankruptcy; five risk types crystallised simultaneously (credit→market→liquidity→operational→reputational); Repo 105 removed $50B assets from balance sheet at quarter-ends concealing true leverage; no one mapped causal chains between individually assessed risks; bow-tie retrospective applied showing Repo 105 as escalation factor undermining capital adequacy barrier — PRIMARY case study
- **Fortis:** ABN AMRO acquisition €71B (largest banking acquisition at time) funded by leverage + subprime exposure; risks assessed separately but interaction = acquisition consumed capital that subprime losses demanded; €11.2B rescue; broken up; largest Benelux failure — supporting case for structural concentration
- **Icelandic Banks (Kaupthing, Landsbanki, Glitnir):** collectively 10x Iceland's GDP; wholesale funded; each bank assessed own balance sheet; systemic concentration beyond sovereign fiscal capacity not identified by banks or regulator; all three failed in one week October 2008; IMF bailout — supporting case for systemic concentration
- **HSH Nordbank:** brief callback from Ch 8 — false diversification (shipping + subprime, both correlated to global economic activity, €10B state guarantee); used to illustrate hidden concentration disguised by apparent diversification
- **Credit Suisse (building process):** first interaction matrix revealed counterparty credit risk connected to 11 other risks, market risk to 9; "turned intuition into auditable methodology"
- Ch 10 delivered on Ch 9 bridge promise: bow-tie analysis, risk interaction matrices, concentration analysis — all fully delivered
- Ch 10 delivered on Ch 8 promise: builds on enterprise portfolio view (simultaneous crystallisation now has structured analytical basis via interaction matrix), does not repeat it
- Ch 10 delivered on Ch 2 promises: ISO 31000 "knock-on effects" quoted as standards basis; Bow-tie→Ch 10 (full methodology); Fault tree→Ch 10 (methodology described)
- Ch 10 delivered on Ch 7 promise: TSRA explicitly connected as complement to interaction analysis
- Ch 10 delivered on Ch 9 promise: fills heatmap gaps (correlations, common exposures, interaction relationships)

### From Chapter 11:
- **Fourteen-field risk inventory** defined with all 14 fields: Risk ID, Taxonomy Classification, Risk Definition, COSO Objective Category, Risk Owner, Inherent Risk Score (4D with dominant dimension), Control Summary (type + effectiveness 1-5), Residual Risk Score (4D), Material (Y/N), Data Quality Rating, Risk Interaction Summary, Key Risk Indicators (with green/amber/red thresholds), Trend Indicator (Increasing/Stable/Decreasing), Date of Last Review — use these field names consistently
- Fourteen fields integrate and extend Ch 7's 11-field standardised template and Ch 9's 7-field assessment record — "a single authoritative record for each risk"
- **Risk profile** for material risks (20-60 risks) contains 14 elements: risk definition, taxonomy classification, COSO objective category, underlying drivers, current exposure, risk appetite, key controls (expanded), cost-benefit assessment, KRIs (expanded with data source, refresh frequency, escalation protocol), scenario linkage (ICAAP/ILAAP/CCAR), data quality rating (with improvement path), enterprise interactions (full interaction analysis + bow-tie reference), trend and outlook, risk owner — use these element names consistently
- Risk profile described as "a structured analysis, not a form to be filled in"
- Risk profile serves **dual purpose**: practitioner tool AND Board communication tool — "principal risk report draws directly from these profiles"
- **Bow-tie integration** in profiles: 5-10 most critical risks reference bow-tie diagrams; profile records date of most recent bow-tie review, key findings, barrier weaknesses; bow-ties referenced not reproduced (because they are living documents)
- **Audit trail** requires three elements for every change: Date, Author, Reason — use these consistently
- Audit trail described as "the mechanism through which the inventory becomes auditable" — Internal Audit uses it as evidence base
- **Disagreement log** documented in inventory: minority view, evidence basis for both positions, data quality ratings; Board receives both views; "averaging their views destroys that signal"
- **Assumption register** linked to risks in inventory: assumptions about correlations, hedging, funding, counterparty behaviour; revisited in subsequent cycles per Ch 13
- **Compliance theatre** called back from Ch 7 and extended to inventory context — "a risk register with the right number of columns but the wrong kind of content"
- **"Living inventory" vs "compliance artefact"** distinction established with observable characteristics:
  - Living: definitions vary, scores change, DQ ratings distributed, interaction summaries populated, review dates staggered, disagreement log has entries
  - Artefact: same sentence structure, scores clustered middle, no Extreme ratings, uniform control effectiveness, blank interactions, same review date
- **Inventory governance** defined:
  - **Creation:** four routes (top-down workshops, bottom-up submissions, reconciliation, event-driven updates); Risk ID Lead ensures 14-field standard before entry
  - **Modification:** risk owners propose, Risk ID Lead reviews; material changes (non-material→material, score increase >1 level, DQ downgrade) require CRO approval and Board reporting
  - **Retirement:** requires documented justification, Risk ID Lead approval (CRO for material risks), retired entries remain in archive; "an inventory that shrinks without documented retirements should be treated with suspicion"
- "Orphaned risks are invisible risks" — risk owner changes must be updated within same cycle
- **Technology principle:** "the inventory structure must be designed independently of the technology that will host it" — define fields/profiles/audit trail/governance first, then select technology; Ch 14 will address technology in detail
- Credit Suisse initial inventory built in spreadsheet before GRC technology investment
- Spreadsheet limitations described: no referential integrity, no network queries, no role-based access control
- Inventory feeds four downstream processes: principal risk report (Ch 3), capital planning (Ch 12), regulatory reporting (Ch 4 mapping table), ongoing cycle (Ch 13)
- Principal risk report described as "a presentation layer over the inventory" — not a separate exercise
- Forward references:
  - Ch 12 "will describe how the inventory integrates with ICAAP, ILAAP, and CCAR capital planning"
  - Ch 13 "will describe the quarterly re-identification cycle, the annual full re-identification, and event-driven updates" — inventory is "the continuity mechanism"
  - Ch 14 "will address technology in detail"
- Bridge to Ch 12: "how the inventory integrates with the institution's capital planning, strategic planning, regulatory reporting, and Board governance — the mechanisms through which risk identification becomes institutional action"
- **Danske Bank (PRIMARY):** €200B suspicious transactions through Estonian branch over nearly a decade; non-resident customers primarily Russia/former Soviet states; branch documented locally as profitable niche; group-level compliance had separate documentation; no single inventory entry for aggregate AML exposure; CEO resigned; €2B+ fines; Estonian licence withdrawn; stock price halved; documentation existed in fragments
- **AMP (PRIMARY):** fees for no service including deceased customers; complaints data categorised as individual customer service issues, never aggregated as risk indicator; risk register had generic conduct risk entries; no KRIs on complaint volumes; Royal Commission 2018 exposure; CEO resigned; AUD 600M remediation; share price halved
- **SNS Reaal (PRIMARY):** €7.4B CRE in property finance subsidiary; subsidiary operated with significant autonomy from parent risk framework; managed and reported own risk inventory; concentration vs group capital not identified at enterprise level; nationalised Feb 2013; €3.7B Dutch taxpayer cost; rebranded de Volksbank
- Standard Chartered 2023 callback: reconciliation documentation was merged spreadsheet concealing absence of reconciliation — used as compliance artefact illustration
- JPMorgan London Whale callback: taxonomy classification determining oversight — referenced for inventory classification field importance
- Lehman Brothers callback: cascade invisible because no documentation connected individually assessed risks — referenced for Risk Interaction Summary field importance
- ISO 31010 transparency requirement cited as standards basis for entire chapter: "structured record not just of risks identified but also of information used, assumptions made, and limitations"
- Phase 4 described as complete after Ch 11
- Ch 11 delivered on Ch 10 bridge promise: fourteen-field risk inventory, risk profiles for material risks, standards for inventory as decision tool not compliance artefact — all fully delivered
- Ch 11 delivered on Ch 9 promise: assessment record "forms the basis for the risk inventory" — assessment record fields integrated into 14-field inventory
- Ch 11 delivered on Ch 7 promises: standardised template fields integrated into inventory; compliance theatre concept called back and extended; Risk ID Lead challenge role for inventory quality
- Ch 11 delivered on Ch 6 promises: disagreement log documented in inventory with minority views preserved; assumption register linked to risks for subsequent cycle revisiting
- Ch 11 delivered on Ch 2 promise: ISO 31010 transparency requirement delivered as documentation standard
- Ch 11 delivered on Ch 8 promises: every risk has taxonomy classification, named owner, documented source, position within enterprise portfolio view; Risk Interaction Summary field captures Ch 10 interaction analysis
- Ch 11 delivered on Ch 3 promise: principal risk report feeds from inventory (10 items all derivable from inventory fields and risk profiles)

### From Chapter 12:
- **Five integration points** defined for Phase 5: COSO ERM alignment, capital planning (ICAAP/ILAAP/CCAR), strategic planning, regulatory reporting, Board reporting — use these five consistently
- **COSO ERM 8-component mapping table** provided: Internal Environment→Phase 1, Objective Setting→Phase 1, Event Identification→Phase 2, Risk Assessment→Phase 3, Risk Response→Phase 3, Control Activities→Phase 2/3, Information & Communication→Cross-cutting/Phase 4, Monitoring→Phase 6 — described as "living document" that Risk ID Lead must maintain
- **Six capital planning integration mechanisms** defined: (1) material risk to stress scenario mapping, (2) severity informed by 4D scores, (3) loss estimates tied to inventory, (4) management judgement overlays with DQ-informed conservatism, (5) reverse stress testing, (6) specific risk categories requiring ICAAP/ILAAP attention
- **Pillar 2A capital add-ons** described as supervisory consequence for deficient risk identification under PRA SREP (SS31/15); scalars up to 40% of Pillar 2A — specific regulatory penalty cited
- **Material Risk Inventory** (Fed CCAR/SR 15-18) must be comprehensive and updated quarterly with direct linkage to stress scenario design — callback to Ch 6 CCAR integration
- **Scenario linkage field** in risk profile described as "the bridge between risk identification and capital adequacy" (honouring Ch 11 forward reference)
- **Reverse stress testing** described: working backwards from inventory to identify scenarios rendering institution non-viable; draws on Ch 10 interaction analysis (cascade pathways, propagation nodes, simultaneous crystallisation)
- **Specific ICAAP/ILAAP risk categories** listed: credit concentration, IRRBB, pension obligation, step-in, securitisation, excessive leverage, climate-related financial risk; ILAAP additionally: intraday liquidity, contingent liquidity demands, currency mismatch
- **Regulatory vs economic risk gap analysis** introduced as structured Phase 5 comparison — four steps: (1) identify regulatory capital treatment, (2) identify economic risk assessment from inventory, (3) map the gap, (4) document and escalate — this is the methodology's response to Regulatory Arbitrage Masking failure mode (Ch 1 promise delivered)
- Gap analysis uses Ch 4 regulatory mapping table as translation mechanism; gaps exceeding thresholds require Board acknowledgement and typically Pillar 2A/management buffer capital
- Step-in risk cited as example of risk outside standard regulatory perimeter requiring gap analysis
- Standard Chartered ICAAP: Pillar 1 mapping, Pillar 2A gap closure described from Rory's experience
- **Three strategic planning integration mechanisms:** (1) new product/market approval using same taxonomy/4D scoring/enterprise portfolio view, (2) M&A due diligence with risk identification assessment and recalculated enterprise portfolio view, (3) risk appetite as strategic constraint requiring Board approval if strategy would breach boundaries
- Risk identification should inform strategic planning "not merely validate it" — sequence critique
- **Four regulatory reporting channels:** principal risk disclosures (Annual Report/Pillar 3), ICAAP/ILAAP submissions, recovery plans, supervisory engagement
- **Principal risk report** described as "presentation layer over the inventory" — one risk picture for Board, capital, regulatory, strategy (honouring Ch 3 and Ch 11 descriptions)
- Ten items of principal risk report restated from Ch 3 — consistent
- **Board substantive challenge** enabled by three features: dominant dimension (Ch 9), data quality distribution (Ch 9), enterprise portfolio view (Ch 8) — all through principal risk report
- **Risk appetite governance:** appetite tested against enterprise portfolio view at every reporting cycle; appetite breaches escalated immediately; Board must act (reduce risk, or adjust appetite with documented justification); appetite described as operational not aspirational (honouring Ch 5)
- **Integration standard table** provided: six integration points with regulatory/standards basis and mechanism for each
- Risk Identification Lead responsible for maintaining integration points; CRO ensures functioning; Internal Audit tests substantive vs cosmetic
- "A material risk identified and documented but excluded from the capital assessment is functionally equivalent to a risk that was never identified at all"
- Phase 5 described as complete; not most analytically demanding (Phase 3) or politically challenging (Phase 2 reconciliation), but determines whether preceding work changes outcomes
- Bridge to Ch 13: "the ongoing cycle that keeps the inventory current: the quarterly re-identification, the annual full refresh, event-driven updates, and the internal audit assurance that ensures the process maintains its rigour over time"
- Dexia: €6.4B capital + €150B guarantees (2008); broken up 2011; sovereign debt + wholesale funding maturity mismatch; reconstituted risk framework failed because no integration — PRIMARY case study
- Washington Mutual: $307B assets, largest US bank failure; "power of yes" culture; CERO marginalised; appetite limits repeatedly raised; seized September 2008; sold to JPMorgan Chase for $1.9B — PRIMARY case study
- Bankia: merger of 7 cajas; concentrated property exposure aggregated without recapitalisation; €22.4B bailout; chairman Rodrigo Rato convicted; merged with CaixaBank 2021 — PRIMARY case study
- Ch 12 delivered on Ch 11 bridge promise: inventory integrating with capital planning, strategic planning, regulatory reporting, Board governance — all fully delivered
- Ch 12 delivered on Ch 11 promise: ICAAP/ILAAP/CCAR integration with scenario linkage as bridge; 4D scores informing severity; DQ Rating informing conservatism
- Ch 12 delivered on Ch 9 promise: material risks proceeding to capital and strategic planning integration
- Ch 12 delivered on Ch 3 promise: principal risk report 10 items as Board reporting mechanism — fully described
- Ch 12 delivered on Ch 1 promise: Regulatory Arbitrage Masking → regulatory vs economic risk gap analysis (four-step process fully delivered)
- Ch 12 delivered on Ch 4 promise: regulatory mapping table referenced for regulatory reporting integration and gap analysis translation
- Ch 12 delivered on Ch 2 promise: Phase 5 standards traceability — ISO Principle b, COSO Component 7, BCBS Principle 7 Board reporting
- Ch 12 delivered on Ch 10 promise: cost-benefit/ALARP referenced in strategic planning context
- Ch 12 delivered on Ch 8 promise: enterprise risk map feeding principal risk report, CCAR Material Risk Inventory, capital/strategy/regulatory reporting
- Ch 12 delivered on Ch 5 promise: risk appetite as specific/operational strategic constraint in Board governance

### From Chapter 13:
- Phase 6 comprises **four mechanisms at different frequencies**: quarterly re-identification, annual full re-identification, event-driven updates, internal audit assurance — plus two **cross-cutting enablers**: training and awareness, framework monitoring and continual improvement
- "Without Phase 6, the methodology produces a sophisticated point-in-time exercise. With it, the methodology produces a living risk identification capability."
- **Quarterly re-identification** described with six activities: (1) PESTLE update, (2) straw man preparation, (3) focused SWIFT workshop (2-3 hours, adapted guide words targeting changes), (4) 4D re-assessment of all material risks, (5) Data Quality Rating review with improvement tracking, (6) assumption register revisited — honouring Ch 6 commitment
- "Re-assessment asks whether existing risks have changed. Re-identification asks whether the risk landscape has changed. The first updates a list. The second updates an understanding."
- Quarterly cycle requires 2-3 weeks from PESTLE update to CRO sign-off
- DQ Rating governance: CRO must approve continued acceptance of any Very Low rating beyond two consecutive quarters; Low rating for three consecutive quarters without improvement plan is itself a risk identification failure
- Interaction matrix (Ch 10) confirmed as standing document updated each quarterly refresh; bow-ties for top 5-10 risks revisited quarterly
- Quarterly output feeds Material Risk Inventory for capital planning (Ch 12)
- **Annual full re-identification** requires: taxonomy review/update (Board approval), fresh top-down and bottom-up identification (not rolled forward), recalibrated materiality and appetite, refreshed internal environment assessment (7 COSO elements), full reconciliation, updated enterprise portfolio view including cost-benefit/ALARP (Ch 10)
- Compliance theatre callback from Ch 7: "the appearance of identification without the substance" — applied to annual roll-forward pattern
- Annual cycle as mechanism for preventing Complacency failure mode (Ch 1)
- **Monthly KRI monitoring** described as surveillance (not identification); green/amber/red thresholds; amber triggers investigation, red triggers CRO/Board escalation; generates trend data for quarterly/annual cycles
- **Six event-driven triggers** defined: (1) material loss/near-miss, (2) significant external environment change, (3) new business/product/market entry, (4) M&A/divestiture/restructuring, (5) internal audit material control failure, (6) material outsourcing change
- Event-driven updates require both backward-looking (root cause analysis) and forward-looking (scenario analysis, horizon scanning) tools
- New products must undergo risk assessment **before launch** (AMLD6 basis, extended to all risk types)
- **Peer institution events must be treated as event-driven triggers** — material events at competitors trigger internal re-identification of analogous risks
- **Internal Audit assurance** covers seven areas: (1) completeness against taxonomy/regulations, (2) assessment quality/consistency, (3) reconciliation effectiveness, (4) DQ Rating appropriateness, (5) documentation/audit trail adequacy, (6) capital planning integration, (7) continual improvement loop effectiveness
- Internal Audit findings reported to Board Audit Committee and Board Risk Committee
- **Training programme** at five levels: Board/Risk Committee (annual), CRO/Risk ID Lead (annual+ad hoc), BU Heads/Risk Assessors (annual+before each cycle), Front-Line Employees (annual+onboarding), Internal Audit (annual)
- **Scoring calibration exercises**: annual, sample risks independently scored by all assessors, results compared to identify systematic interpretation differences — "without calibration, 'Major' impact to one BU may equate to 'Moderate' in another"
- **Framework monitoring** — seven process performance indicators (KPIs): BU completion rate (100%), material risks with active owners (100%), risks reclassified per cycle (trend), new risks per cycle (trend), time to inventory (<10 business days), stakeholder satisfaction (trend), improvement actions per cycle (trend)
- **Lessons-learned review** at conclusion of each annual cycle: what worked, what gaps, what changes needed; actions assigned to named owners, tracked to completion before next cycle
- "An institution where no new risks are identified across three consecutive quarterly cycles is either operating in a static environment — unlikely — or running a process that has succumbed to compliance theatre"
- **SVB case study (PRIMARY):** $209B assets, failed 10 March 2023; IRRBB accumulated as Fed raised rates 500bps; $91B HTM portfolio; $15B+ unrealised losses exceeding equity; CRO departed April 2022, not replaced until January 2023 (8 months); deposit concentration in VC-backed tech; $42B withdrawn in one day; full retrospective methodology application showing quarterly re-ID, event-driven updates, monthly KRI, internal environment assessment, Internal Audit all would have caught it; "a $209 billion illustration of the Complacency failure mode"
- **Signature Bank (supporting):** $110B, failed 12 March 2023; crypto deposit concentration; missed event-driven triggers (TerraUSD May, Celsius June, FTX November 2022); third-largest US bank failure
- **NAB Australia (supporting):** Failed to learn from CBA's AUD 700M AUSTRAC fine 2018; analogous AML monitoring gaps; AUSTRAC proceedings 2020; illustrates peer institution events as missed event-driven triggers
- **CBA Australia (brief):** AUD 700M AUSTRAC fine, 53,000+ unreported suspicious transactions; referenced as event-driven trigger NAB should have processed
- Bankia callback: M&A event-driven trigger example from Ch 12
- Bridge to Ch 14: "The next chapter examines how technology — artificial intelligence, machine learning, natural language processing, and data analytics — can enhance the process: automating the surveillance that supports event-driven triggers, identifying patterns in the data that human analysts might miss, and scaling the methodology across complex, multi-entity institutions"
- Ch 13 delivered on Ch 12 bridge promise: quarterly re-identification, annual full refresh, event-driven updates, internal audit assurance — all fully delivered
- Ch 13 delivered on Ch 3 promises: four frequencies (annual, quarterly, monthly KRI, event-driven) all covered; quarterly re-ID linked to Fed SR 15-18; "active re-identification" distinction delivered
- Ch 13 delivered on Ch 1 promise: Complacency → quarterly re-identification (SVB as defining illustration)
- Ch 13 delivered on Ch 6 promises: CCAR quarterly workshops (focused SWIFT with adapted guide words), straw man for quarterly (prior quarter inventory + PESTLE + event triggers), assumption register revisited each quarterly cycle
- Ch 13 delivered on Ch 7 promise: compliance theatre callback for annual roll-forward; three most common failure fields referenced in Internal Audit quality testing
- Ch 13 delivered on Ch 10 promises: interaction matrix as standing quarterly document, bow-ties as living documents revisited quarterly, cost-benefit/ALARP reviewed in annual cycle
- Ch 13 delivered on Ch 11 promises: inventory feeds ongoing cycle (prior quarter as baseline), retirement discipline ("methodology does not permit silent disappearance"), KRIs with green/amber/red, "mechanisms for keeping alive"
- Ch 13 delivered on Ch 2 promise: Phase 6 maps to ISO Principle j (dynamic, iterative, responsive), COSO 8 (Monitoring), BCBS ongoing identification
- Ch 13 delivered on Draft 3 §3.3 (Training and Awareness): full training programme by audience with calibration exercises
- Ch 13 delivered on Draft 3 §3.5 (Framework Monitoring): process performance indicators table, lessons-learned review, continual improvement loop

### From Chapter 14:
- "Technology is a cross-cutting enabler. It is not a seventh phase." — use this framing consistently
- "Technology does not replace judgement — it extends the reach of that judgement" — core principle
- "The inventory structure must be designed independently of the technology that will host it" — restated from Ch 11, reinforced with practical rationale
- Credit Suisse: built inventory in spreadsheet, refined through three cycles before GRC platform vendor engagement — methodology before technology
- **Four core technology applications** defined: (1) NLP, (2) ML/Predictive Algorithms, (3) Anomaly Detection, (4) RPA — use these four consistently
- Each application described with "what it does", "where it adds most value", and "what it does not do" — the limitations are as important as capabilities
- ML limitation explicitly stated: "ML models are, by definition, trained on historical data. They detect patterns that have occurred before. The most dangerous risks... are those that have no historical precedent" — Delphi exists because ML cannot identify novel risks
- **Seven data management components** defined: data governance, data quality controls, data security, data integration, master data management, data lifecycle management, data auditing — use these seven consistently
- BCBS 239 referenced: published 2013, compliance deadline January 2016 for G-SIBs, material compliance gaps persist decade later
- CRO function responsible for data management standards — "not an IT responsibility — it is a risk management responsibility that requires IT capabilities"
- Data management deficiencies "should be recorded as findings in the risk inventory and tracked to remediation"
- **Five spreadsheet limitations** listed: no referential integrity, no network queries, no role-based access control, no concurrent access control, no automated audit trail — expanded from Ch 11's three
- **Seven GRC platform selection criteria** defined: taxonomy flexibility, assessment methodology support (4D + dominant dimension), reconciliation workflow, risk interaction mapping, integration capability, audit trail, regulatory reporting
- **Six-step implementation pathway**: feasibility assessment, data preparation, algorithm selection, pilot testing, full deployment, ongoing monitoring
- "Deploying ML on unreliable data produces unreliable outputs with a veneer of analytical sophistication — the technology equivalent of compliance theatre"
- **Four ethical/regulatory guardrails**: bias testing, transparency/explainability, data privacy (GDPR), model risk — AI/ML models subject to model risk framework from Ch 7
- Black-box models "not acceptable for regulatory-facing risk assessments without appropriate model risk governance"
- Technology mapped across all six phases: Phase 1 (NLP PESTLE scanning, data analytics for starting universe), Phase 2 (automated briefing packs, NLP bottom-up quality analysis), Phase 3 (anomaly detection in scoring, predictive analytics), Phase 4 (automated inventory maintenance), Phase 5 (dashboard reporting), Phase 6 (real-time event-driven monitoring — NLP external scanning, KRI threshold monitoring, peer event detection, transaction anomaly detection)
- Phase 6 described as "where technology delivers its most distinctive value" — continuous monitoring that no human team can sustain
- Knight Capital: $460M in 45 minutes, 1 August 2012, software deployment activated dormant legacy code, 148 stocks, $365M equity wiped out, acquired by Getco 2013 — PRIMARY case study; technology both risk source and enabler; 4D assessment speed of onset = Immediate
- PNB: $2B SWIFT/CBS disconnect fraud, 2011-2018, Nirav Modi, Brady House branch Mumbai, Letters of Undertaking, RBI mandated SWIFT-CBS integration — supporting case for data integration
- Equifax: $1.38B, 2017, Apache Struts, 147M records, CEO/CIO/CISO departed — supporting case for data management infrastructure
- Wirecard callback: NLP scanning would have surfaced FT reporting from 2015
- Bridge to Ch 15: "the sixteen frameworks across jurisdictions that mandate, constrain, and shape how institutions identify their risks" — specifically named Fed SR 15-18, PRA SS31/15, ECB SREP, EBA Guidelines on ICT risk
- "Sixteen frameworks" must be consistent with Ch 1's "16 regulatory frameworks" count
- Ch 14 delivered on Ch 13 bridge promise: automating event-driven trigger surveillance (Phase 6 real-time monitoring), identifying patterns human analysts might miss (ML/anomaly detection), scaling across multi-entity institutions (GRC platforms, data integration)
- Ch 14 delivered on Ch 11 promises: inventory structure designed independently of technology (restated and expanded), spreadsheet limitations detailed, GRC platform as solution
- Ch 14 delivered on Ch 2 promise: technology as cross-cutting enabler mapped across all six phases
- Ch 14 delivered on Draft 3 §3.2: all four AI/ML applications covered (predictive algorithms, NLP, anomaly detection, RPA), implementation requirements (six-step pathway), ethical/regulatory guardrails (bias, privacy, transparency, model risk), data management infrastructure (seven components)
- Ch 14 delivered on Draft 3 §12 "What Distinguishes" entries: AI/ML/NLP/anomaly detection/RPA as cross-cutting enablers, formal data management infrastructure with governance/quality controls/auditing

### From Chapter 15:
- **Sixteen regulatory frameworks** defined and numbered 1-16: (1) BCBS Corporate Governance Principles — Principle 7, (2) BCBS 239 — Risk Data Aggregation, (3) BCBS PSMOR — Operational Risk, (4) CRR III / CRD VI, (5) EBA Internal Governance (GL/2021/05), (6) ECB SREP Methodology, (7) DORA (EU 2022/2554), (8) EBA Outsourcing Guidelines (GL/2019/02), (9) EBA ESG Risk Guidelines (GL/2024/01), (10) EBA ICT and Security Risk (GL/2019/04), (11) EU AMLD6, (12) PRA SS31/15 — ICAAP, (13) PRA Step-In Risk (PS5/25), (14) Fed SR 15-18 — CCAR, (15) OCC Heightened Standards (12 CFR Part 30, App. D), (16) FCA Conduct Risk — Five Conduct Questions
- **"Four jurisdictional tiers"** framing: Global BCBS (3), EU (8), UK (3), US (2) — use this grouping consistently
- Sixteen frameworks are distinct from the three foundational standards (ISO 31000, ISO 31010, COSO ERM) covered in Ch 2
- **Regulatory traceability matrix** — 16×6 table mapping all frameworks to all six phases — this is the "regulatory traceability that every supervisor will demand"
- Ch 2's phase-to-standards traceability table and Ch 15's regulatory traceability matrix described as working "together" to demonstrate comprehensive compliance
- **Regulatory vs economic risk gap analysis** (Ch 12) connected: sixteen frameworks define the "regulatory" half; methodology's 4D assessment defines the "economic" half; gaps escalate to Board
- **Regulatory mapping table** (Ch 4) described as the translation mechanism between internal taxonomy and each regulator's categories; Risk ID Lead responsible for currency
- **Three multi-jurisdictional mechanisms** defined: (1) single process with jurisdictional overlays, (2) regulatory mapping table translating taxonomies, (3) enterprise portfolio view satisfying all consolidation requirements
- Regulatory taxonomy divergence detailed: Basel (3 Pillar 1 categories), EBA (ICT, ESG, ML/TF granularity), PRA (step-in risk unique), Fed (CCAR-aligned typology), FCA (behavioural conduct lens) — all different, none map one-to-one
- Credit Suisse taxonomy divergence restated: IB 47 categories, Swiss universal bank 23, private banking 31 — different classifications for same exposures
- **Consequences of failure** — three specific: PRA Pillar 2A scalars up to 40%, Fed CCAR qualitative objection blocking capital distributions, SM&CR individual enforcement action
- "The regulator does not penalise the crystallisation of risk — risk is inherent in banking. The regulator penalises the failure to identify it." — key framing
- "The traceability matrix is not a compliance artefact. It is evidence." — key statement
- ECB SREP described as assessing ~110 significant institutions under direct supervision
- DORA Article 8 quoted: "identify, classify and adequately document all ICT-supported business functions, roles and responsibilities... and identify all ICT assets"
- DORA described as requiring "asset-level identification" not just "risk-level identification"
- CRR III Output Floor described as mandating "dual view of risk" — internal models vs standardised metrics
- BCBS 239 described as "published 2013, compliance deadline January 2016 for G-SIBs, material gaps persist decade later" — consistent with Ch 14
- PSMOR near-miss requirement described: "identifying events that did not result in financial loss but exposed a vulnerability"
- SM&CR Statement of Responsibilities described: defence is proving "reasonable steps" via documented risk identification process
- Bridge to Ch 16: "Drawing on the industry loss database of 179 bank failures spanning six decades and thirty countries" — Ch 16 must use these exact statistics
- Bridge stated: "The regulations tell institutions what they must do. The evidence tells them why."
- HBOS and RBS mentioned in bridge as motivation for SM&CR — brief, no new detail
- Ch 15 delivered on Ch 14 bridge promise: "the sixteen frameworks across jurisdictions" — all specifically named frameworks covered (Fed SR 15-18, PRA SS31/15, ECB SREP, EBA Guidelines on ICT risk)
- Ch 15 delivered on Ch 1 promise: "16 regulatory frameworks" — exactly 16 covered and numbered
- Ch 15 delivered on Ch 2 promise: phase-to-standards traceability extended to all 16 regulatory frameworks via traceability matrix
- Ch 15 delivered on Ch 4 promises: regulatory mapping table referenced as multi-jurisdictional solution; regulatory taxonomy divergence problem addressed in full section
- Ch 15 delivered on Ch 12 promises: Pillar 2A scalars up to 40% restated; regulatory vs economic risk gap analysis connected to 16 frameworks
- Ch 15 delivered on Ch 5 promises: EBA ESG Guidelines and ECB Guide on Climate-Related and Environmental Risks both referenced
- Ch 15 delivered on Ch 7 promises: EBA GL/2019/04, EU AMLD6, EBA Outsourcing Guidelines all covered as three of the sixteen

### From Chapter 16:
- **No forward references** — this is the final content chapter; no bridge paragraph to next chapter
- Restated Ch 1 statistics exactly: "179 bank failures" / "$2.3 trillion" / "thirty countries" / "six decades"
- Restated Ch 1 ten failure modes by name: Concentration Blindness, Model Overreliance, Governance Bypass, Silo Thinking, Cultural Suppression, Emerging Risk Blindness, Control Environment Failure, Information Asymmetry, Regulatory Arbitrage Masking, Complacency
- Delivered on Ch 15 bridge: "The regulations tell institutions what they must do. The evidence tells them why." — restated verbatim
- Delivered on Ch 4 Taxonomy Test commitment: applied retrospectively to PPI (no conduct risk in taxonomy), UBS tax evasion (sales and marketing not compliance), Lloyd's (no enterprise-level concentration view) — described as revealing "the structural gap that enabled the loss"
- Delivered on Ch 1 "What was missing" pattern: each failure mode section connects to specific methodology phases/tools
- Restated Ch 1's three foundations: "Standards provide the architecture. The regulation provides the mandate. The evidence provides the reason."
- Restated "built it twice — at Credit Suisse and at Standard Chartered"
- Database statistics cited: credit risk 42% / $1.37T; operational risk 43% / $626B; conduct risk 7% / $97B; GFC 63 entries / $1.5T; 2000s 44%; 2010s 47%; Europe 54%; North America 30%; Strategic COSO category 41%
- Stated post-crisis reforms "did not eliminate risk identification failures. They changed the character of the failures" — acknowledges limitations
- COSO category dominance of Strategic (41%) cited as evidence basis for dual-track approach and top-down workshops
- Stated "an external credit rating is not a risk assessment. It is a single input to a risk assessment" — in Merrill Lynch context
- Standard Chartered described as case where "risk was identified but governance failed to protect the identification output" — governance bypass vs identification failure distinction
- ICBC described as case where "the state itself directs the risk-taking" — BCBS Principle 7 and Western regulatory frameworks "fundamentally compromised" by dual state role
- "Absence of loss" equated with "absence of risk" described as the complacency diagnostic
- Ch 13's process performance indicator quoted: "no new risks across three consecutive quarterly cycles" as compliance theatre diagnostic
- Closing statement: "The evidence is clear. The methodology is available. The only remaining question is whether the institution has the will to implement it."
- Ch 16 delivered on Ch 15 bridge promise: evidence chapter drawing on 179 bank failures as validation of methodology
- Ch 16 delivered on Ch 1 promises: all ten failure modes examined through deep-dive evidence cases
- Ch 16 delivered on Ch 4 promise: Taxonomy Test applied retrospectively to historical losses
- Ch 16 delivered on all previous chapter promises for case study deep-dives: institutions that were briefly mentioned in earlier chapters receive fuller analytical treatment organised by failure mode pattern

---

## Chapter 1 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_01.md`
**Word count:** ~3,000

### Section 1: "The Question No One Can Answer"
- Opens 2016, Rory appointed Global Head of Risk ID at Credit Suisse
- Asked "how does CS currently identify its risks?" — confused silence
- Someone mentioned risk register, someone mentioned ICAAP, someone mentioned a workshop from 2 years ago
- No methodology, no documented process, no named owner, no audit trail
- "Credit Suisse was one of the largest banks in the world. And it could not explain how it identified its risks."
- Same at Standard Chartered 2023 — elements existed but fundamental gaps remained
- Universal problem: most banks have a risk register, very few have a risk identification *process*
- Rory convinced of two things: (1) risk ID is most important and least understood step, (2) no comprehensive methodology existed anywhere
- "This is that methodology."

### Section 2: "The Gap in the Risk Management Cycle"
- Every framework (ISO, COSO, BCBS) begins with "identify the risks"
- But banks invest time/talent/technology in measurement not identification
- Credit risk modelling teams with dozens of quants, market risk systems running millions of sims, operational risk databases, capital engines, stress testing programmes
- The identification step: "a two-day workshop once a year, run by someone who has never been trained in facilitation techniques, using a brainstorming methodology that produces groupthink"
- Output: a spreadsheet → becomes the risk register → updated annually (i.e. when someone remembers)
- Hospital metaphor: "world's best surgeons but no process for examining patients"

### Section 3: "What the Evidence Shows"
- Studied every major bank failure — S&L crisis through GFC, conduct era, 2020s
- Built database: 179 events, 30+ countries, 6 decades, $2.3T aggregate
- For each: "Was the risk identifiable before the loss materialised?" → Yes, every time
- Not black swans. Identifiable, often flagged by internal audit / employees / external analysts
- "The problem was not that the risks could not be identified. The problem was that the process for identifying them was absent, inadequate, or actively undermined."
- Ten recurring failure modes introduced

### Section 4: "The Ten Failure Modes" (see case study tracker above for which institutions used)
Each mode has: explanation → "The pattern" (real examples) → "What was missing" (methodology link)

### Section 5: "The Common Thread"
- All ten are "different in their specifics but identical in their root cause"
- "The institution did not have a process designed to find the risks it was exposed to"
- Losses were "not inevitable. They were preventable."
- "The risk was there. The information was there. What was missing was the process."

### Section 6: "What This Book Is For"
- "Not a textbook on risk management theory. Not an academic survey."
- "A practitioner's methodology — complete, end-to-end"
- Three foundations: Standards (ISO 31000, ISO 31010, COSO ERM), Regulation (16 frameworks), Evidence (179 failures)
- Six phases listed with one-line descriptions
- "The methodology is comprehensive. It is detailed. And it works."
- "I have built it twice — at Credit Suisse and at Standard Chartered"
- Bridge: "In the next chapter, we examine the international standards and regulatory frameworks..."

---

## Chapter 2 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_02.md`
**Word count:** ~4,800

### Section 1: "The First Question Every Regulator Asks"
- Opens with practitioner scenario: every regulatory examination starts with "what standards is this built on?"
- PRA, FINMA, Fed, EBA all follow same pattern
- At Credit Suisse (2016), first priority was establishing the standards architecture
- Not because standards tell you exactly how to identify risks, but because regulators assess against them
- If methodology can't trace design decisions to ISO 31000/31010/COSO ERM provisions, fails first supervisory test
- Introduces the four frameworks: ISO 31000, ISO 31010, COSO ERM, BCBS Corporate Governance Principles
- "These are not interchangeable. Each serves a different purpose."

### Section 2: "ISO 31000: The Architecture"
- Three-layer architecture: Principles (Clause 3), Framework (Clause 4), Process (Clause 5)
- **Principles:** 11 principles (a–k), 8 highlighted as most relevant to risk ID
  - Creates value (a), integral part of processes (b), part of decision making (c), addresses uncertainty (d), systematic/structured/timely (e), best available information (f), human/cultural factors (h), dynamic/iterative/responsive (j)
  - Principle h is standards basis for addressing Cultural Suppression failure mode
  - A process that violates these principles will fail regulatory scrutiny
- **Framework (Clause 4):** Mandate & Commitment → Design → Implement → Monitor & Review → Continual Improvement
  - Process must have: named owner, mandate, allocated resources, integration with org processes, communication mechanisms, monitoring cycle
  - "This is where most banks fall down" — methodology on paper but no framework to sustain it
- **Process (Clause 5):** Establish Context (5.3) → Risk Assessment (5.4: ID→Analysis→Evaluation) → Treatment (5.5), with Communication & Consultation (5.2) and Monitoring & Review (5.6) running in parallel
  - Section 5.4.2 (Risk Identification) — identify sources, impacts, events, causes, consequences
  - Cascade and cumulative effects → standards basis for Ch 10 risk interaction analysis
  - Section 5.3 (Establishing the Context) → standards basis for Phase 1 Foundation Setting
  - Section 5.2 (Communication and Consultation) → standards basis for dual-track approach
- **What ISO 31000 Does Not Do:** deliberately generic, doesn't specify techniques, governance structures, regulatory requirements, or risk taxonomies — specificity comes from the other three frameworks

### Section 3: "ISO 31010: The Technique Toolkit"
- Supporting standard to ISO 31000; catalogues 31 risk assessment techniques
- Table A.1 applicability matrix maps techniques to identification/analysis/evaluation stages
- Technique-to-methodology mapping table provided (9 techniques mapped to specific chapters)
- Section 6.2: three factors for technique selection — resources, uncertainty, complexity
- No single technique is sufficient — justification for multi-technique approach
- Section 5.2: requires transparent recording of methods, assumptions, limitations — auditability requirement

### Section 4: "COSO ERM: The Enterprise Lens"
- **Origins:** Treadway Commission (1985) → COSO Internal Control Framework (1992, later in Sarbanes-Oxley 2002) → COSO ERM (2004)
- Internal controls heritage explains two features:
  1. Strong emphasis on **internal environment** (tone at top, risk culture) — first of 8 components
  2. **Four objective categories** (Strategic, Operations, Reporting, Compliance) — forces identification beyond just financial/operational risks
- Table mapping four categories to risk identification implications
- Eight components listed with risk identification relevance for each
- Event Identification (Component 3) is most directly relevant — requires identification of events affecting objectives, both risks and opportunities, plus event interdependencies
- **Three-dimensional model (cube):** 8 components × 4 objectives × entity levels
  - Used at Credit Suisse as completeness check — mapped risks against matrix, looked for empty cells
  - Empty cells = proof we hadn't looked, not proof risks didn't exist

### Section 5: "BCBS Corporate Governance Principles: The Banking Mandate"
- Published 2015; speaks specifically to banks (unlike sector-agnostic ISO/COSO)
- **Principle 7:** risk identification on ongoing bank-wide basis; sophistication must keep pace with changes
  - Bank-wide identification → mandate for enterprise portfolio view (Ch 8) and reconciliation
  - Ongoing → quarterly + event-driven cycles, not annual (Ch 13)
  - Keeping pace with change → must evolve for climate, cyber, geopolitical risks
  - Board responsibility → Board must receive risk ID outputs
- Risk function independence from business lines → structural governance requirement (Ch 3)
- Also relevant: Principle 1 (Board duties), Principle 8 (risk communication), Principle 9 (compliance)

### Section 6: "How the Four Frameworks Fit Together"
- Not competing or redundant — complementary layers
- Summary table: ISO 31000 = architecture, ISO 31010 = techniques, COSO ERM = enterprise lens, BCBS = banking mandate
- Must satisfy all four simultaneously
- Phase-to-standards traceability table mapping all 6 phases to specific provisions across all 4 frameworks
- "That traceability is what distinguishes a defensible methodology from an ad hoc collection of risk workshops"

### Section 7: "Standards Are Necessary But Not Sufficient"
- Standards won't tell you how to run a SWIFT workshop with reluctant senior bankers
- Standards won't handle political dynamics when CRO and business head disagree
- "Standards provide the architecture. They do not provide the craft."
- Zurich Insurance reference: 5 years as Solvency II Project Manager, watched standards implementation across entities
- Institutions that succeeded understood where standards ended and practitioner judgement began
- Bridge to Chapter 3: governance — "who owns the risk identification process, who participates in it, who has authority to challenge the business, and how findings reach the Board"

---

## Chapter 3 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_03.md`
**Word count:** ~4,500

### Section 1: "The Head of Risk Who Was Fired for Doing His Job"
- Opens with HBOS/Paul Moore case as the defining governance failure in risk identification
- Paul Moore appointed Group Head of Regulatory Risk at HBOS 2004
- Identified Peter Cummings' corporate banking division creating dangerous CRE concentrations, bypassing credit processes
- Moore raised the concern, documented it, escalated to the Board — was dismissed 2005
- HBOS collapsed 2008; £10B+ losses; emergency merger with Lloyds TSB; Peter Cummings banned by FSA
- Framing: "not primarily a story about credit risk. It is a story about governance."
- The risk was identified — what failed was escalation, independence, Board information flow, and cultural incentives
- Sets up the chapter's purpose: "ensuring that cannot happen"

### Section 2: "The Three Lines of Defence — Applied to Risk Identification"
- Three Lines model applied specifically to risk identification (not just risk management broadly)
- **First Line:** Business units are active participants, not passive recipients; complete standardised risk self-assessments; front-line employees report risks with dedicated channels not requiring line manager permission; OCC Three Units model referenced
- **Second Line:** CRO owns process end-to-end; must have direct Board access, independence from CEO; Risk Identification Lead executes process — coordination, facilitation, and challenge role; Rory's Credit Suisse experience establishing the role's mandate
- **Third Line:** Internal Audit provides independent assurance over the process itself; does not participate in identification; tests rigour, completeness, reconciliation quality, data quality ratings, documentation

### Section 3: "The Roles That Matter"
- Seven roles defined with clarity; "when everyone is responsible, no one is accountable"
- **Board Risk Committee:** approves taxonomy/appetite/criteria/threshold; receives principal risk report; challenges outputs substantively (not just receiving); ensures independence; BCBS Principle 7 referenced
- **Cooperative Bank case:** unqualified chairman with no financial services background; mutual governance model placed non-experts in oversight; £1.5B rescue — "Board competence in risk matters is a governance prerequisite"
- **CRO:** resourcing, appointing Risk ID Lead, monitoring KPIs (BU completion rate, new risks per cycle, time to inventory), escalating deficiencies; "most important governance function is protection"
- **Risk Identification Lead:** communication plan, SWIFT workshops, Delphi, bottom-up management, reconciliation, inventory maintenance, lessons-learned; requires "technical expertise and political skill"; must integrate specialist sub-processes (RCSA, conduct risk, ICT, AML/CFT, third-party)
- **Business Unit Heads:** participate in bottom-up self-assessment and top-down workshops; dual role bridges both tracks
- **Risk Assessors:** designated individuals at all levels; report to BU head AND Risk ID Lead
- **Risk Owners:** named individuals, never committees — "committee ownership dilutes accountability"
- **Front-Line Employees:** earliest sensors; need clear reporting channels, escalation paths independent of line manager, retaliation protection, training
- **Wells Fargo case:** 3.5M unauthorised accounts; front-line complaints treated as HR matters not risk signals; $3B settlement, Fed asset cap, CEO resignation

### Section 4: "Independence: The Non-Negotiable"
- BCBS Corporate Governance Principles mandate risk function independence — "not a suggestion"
- Three forms of independence defined:
  - **Structural:** CRO/Risk ID Lead must not report to business; CRO reports to CEO with Board line or directly to Board
  - **Operational:** process must function without depending on business unit cooperation for information access
  - **Intellectual:** freedom to reach conclusions business disagrees with; career protections
- **Standard Chartered case:** compliance identified sanctions risk ($250B Iranian transactions); senior management overruled; $667M fine — "risk was identified, governance failed to act"
- **HBOS case revisited:** mirror image — Board removed the identifier rather than act on identification
- **Banca MPS case:** senior management complicit in concealment via derivatives; escalation path compromised by the people who should receive it — requires alternative paths (direct Board access, independent audit, external whistleblowing)
- Methodology's reinforcing mechanisms: CRO Board line, Risk ID Lead mandate, anonymous channels, internal audit, Board receives outputs directly

### Section 5: "Escalation: How Findings Reach the Board"
- "How do findings reach the people who can act on them — without being filtered by the people who generated them?"
- References Governance Bypass failure mode from Ch 1
- Four elements of structured escalation:
  - **Principal risk report:** 10 items listed (material risks with scores, consequence dimensions, trends, appetite breaches, new/emerging risks, reclassified risks, KRI dashboard, data quality distribution, enterprise portfolio view, process performance indicators); drawn directly from inventory, traceable
  - **Direct access:** CRO and Risk ID Lead have standing access to Board Risk Committee without CEO permission; "its existence changes behaviour"
  - **Anonymous reporting:** for all employees (not just front-line); feeds into risk identification process, not just HR/compliance; reviewed by Risk ID Lead; addresses Cultural Suppression directly
  - **Challenge sessions:** formal debate in reconciliation between senior management and BU risk teams; "not consensus-building exercises... structured challenge"

### Section 6: "Process Frequency: Not a Once-a-Year Exercise"
- Annual-only identification is "a filing exercise" not governance
- Four frequencies:
  - **Annual full re-identification:** all six phases, taxonomy review, fresh identification from scratch (not rolled forward), recalibrate materiality and appetite, refresh internal environment assessment
  - **Quarterly re-identification:** Fed SR 15-18 (CCAR) — active re-identification, not just re-assessment; multi-stakeholder input; feeds Material Risk Inventory for capital planning
  - **Monthly KRI monitoring:** against defined thresholds; breaches trigger investigation
  - **Event-driven updates:** immediate on material events (loss/near-miss, external changes, new business/market, M&A, control failure, outsourcing change); both backward-looking and forward-looking tools
- **Société Générale/Kerviel case:** €50B hidden positions by junior trader exploiting back-office knowledge; €4.9B loss; governance failure in role design and control assumptions; "the process did not contemplate a trader who knew both sides of the control chain"

### Section 7: "Communication and Consultation"
- Based on ISO 31000 Section 5.2 — continuous parallel activity across all phases
- Four requirements: stakeholder identification (documented in communication plan), perception capture (differing views sought and documented), two-way communication (stakeholders see and challenge outputs), documentation (all inputs/challenges/decisions recorded for audit trail)
- If a risk concern is excluded, reason must be documented and defensible

### Section 8: "The Governance Test"
- "The real test is what happens when the process produces a finding that someone does not want to hear"
- Recaps HBOS (Board chose revenue over risk), Standard Chartered (management overruled compliance), SocGen (control assumptions wrong)
- Governance arrangements designed to withstand pressures: named ownership, structural independence, direct Board access, anonymous reporting, internal audit, frequency structure
- "Governance is not self-executing. It requires institutional commitment"
- Bridge to Ch 4: "the risk taxonomy — the common language that ensures every participant in the process, from the Board to the front line, is identifying and classifying risks in the same way"

---

## Chapter 4 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_04.md`
**Word count:** ~5,100

### Section 1: "The Meeting Where Nobody Agreed"
- Opens with Rory at Credit Suisse, first month as Global Head of Risk ID, convening a meeting to reconcile risk registers across business units
- Two-hour argument about classification: investment bank called derivative exposures "market risk", risk function called them "counterparty credit risk", treasury called them "liquidity risk"
- Same exposure appeared in three categories in three registers, counted three different ways — a language failure, not an analytical one
- Different BUs had built their own taxonomies: investment bank 47 categories, Swiss universal bank 23, private banking 31
- "Conduct risk" existed in one division's taxonomy, absent from another's
- Without common taxonomy: reconciliation impossible, enterprise portfolio view meaningless, Board receiving divisional reports not institutional picture
- "Building that language was the first operational priority"

### Section 2: "Why Taxonomy Matters"
- Risk taxonomy defined as "hierarchical classification structure that defines how an institution categorises its risks"
- Structural prerequisite, not administrative convenience
- Six dependencies listed: identification, assessment, reconciliation, enterprise portfolio view, regulatory reporting, risk ownership
- "The taxonomy defines the universe of what can be found"

### Section 3: "The Three-Level Structure"
- **L1:** 13 broad risk categories listed in full table (matching Draft 3 §2 scope)
- **L2:** Sub-categories with examples for Credit Risk (5), Market Risk (6), Operational Risk (7 Basel categories), Conduct Risk (5)
- **L3:** Granular risk types; institution-specific; where taxonomy meets business model
- Design purpose: L1 for Board reporting, L2 for working categories in identification/assessment, L3 for specialist analysis and regulatory mapping

### Section 4: "The MECE Principle"
- **Mutually Exclusive:** each risk maps to one and only one taxonomy node; primary classification rules needed
- **Collectively Exhaustive:** no material risk falls outside taxonomy; if it does, taxonomy must be updated
- Collectively exhaustive violation is "more dangerous because the failure is invisible"

### Section 5: "When Classification Determines Oversight: JPMorgan and the London Whale"
- **PRIMARY case study.** JPMorgan CIO in London built massive synthetic credit positions via CDS
- CIO classified as hedging function, not proprietary trading desk — this was the critical decision
- Exempt from proprietary trading risk limits, VaR monitoring; hedge designation never independently challenged
- Positions were directional bets on credit indices, not hedges; $6.2B loss
- "The organisational classification of the activity determined the level of oversight applied to it"
- Taxonomy was not collectively exhaustive — didn't account for hedging function engaging in proprietary risk-taking
- **What was missing:** taxonomy classifying by nature of risk not org unit; independent challenge in reconciliation; enterprise portfolio view flagging position size

### Section 6: "When Risk Falls Between Categories: Deutsche Bank and Mirror Trading"
- Deutsche Bank Moscow office: $150B suspicious transactions through mirror-trading scheme (2011-2015)
- Client buys Russian equities in Moscow (roubles), related entity sells identical equities in London (dollars) — money laundering
- Equities surveillance saw matched trades as routine; AML monitoring tracked cash flows but didn't correlate with trading patterns
- Neither function identified the combined pattern — risk existed in gap between two taxonomy categories
- $630M combined UK/US fines
- **What was missing:** taxonomy with cross-category analysis; enterprise portfolio view identifying common exposures across functions; risk interaction analysis mapping cross-category triggers

### Section 7: "When the Taxonomy Does Not Include the Risk: Lloyds and PPI"
- PPI scandal: £22B+ industry redress, Lloyds £12B+
- PPI sales classified as profitable cross-selling, not a risk; "customer suitability" not a risk category
- Conduct risk as distinct taxonomy entry did not exist in most institutions' classifications
- Sales incentive structures visible to everyone but no taxonomy node mandated assessment
- "If a risk type does not exist in the taxonomy, the institution is structurally incapable of identifying it"
- **What was missing:** taxonomy maintenance that evolves ahead of loss events; Delphi and horizon scanning; CRO amendment authority

### Section 8: "Building the Taxonomy in Practice"
- Four practical inputs for construction:
  1. **Regulatory requirements:** L1 must include every risk category regulators expect; complicated by regulatory non-agreement
  2. **COSO objective categories as completeness check:** map every L2 against Strategic/Operations/Reporting/Compliance; look for empty cells; Reporting and Compliance categories typically underdeveloped
  3. **Evidence from loss database:** 179 events provide factual record of risk types that have caused harm
  4. **Design for process not org chart:** classify by risk characteristics, not by originating business unit
- **Regulatory mapping table** introduced: separate document mapping internal taxonomy to each regulator's categories; active, not aspirational; Risk ID Lead responsible for currency

### Section 9: "ISO Guide 73 and Definitional Consistency"
- ISO Guide 73 provides standardised risk management vocabulary
- Taxonomy should reference ISO Guide 73 definitions as baseline
- Terms crossing boundaries: "counterparty credit risk" narrower under Basel than common usage; "operational risk" under Basel includes legal but excludes strategic/reputational
- Divergences from ISO Guide 73 must be documented and justified
- Regulatory mapping table must reconcile definition differences

### Section 10: "The Regulatory Taxonomy Divergence Problem"
- No common regulatory taxonomy across jurisdictions
- Example: European bank with ECB (EBA categories + ESG), PRA subsidiary (ICAAP + step-in risk), US branch (Fed SR 15-18 quarterly Material Risk Inventory)
- Internal taxonomy = single source of truth; regulatory mapping table translates
- Mapping must be active, maintained as regulations change

### Section 11: "Taxonomy Maintenance"
- Annual Board review and approval (L1 structure + material L2 changes)
- CRO amendment authority at any time for emerging risks
- Event-driven updates when loss events reveal missing risk types
- Regulatory-driven updates when new categories introduced
- Internal Audit tests currency and completeness
- **Emerging risk challenge:** climate risk, cyber risk, conduct risk all existed before taxonomies recognised them; Delphi Method serves double duty — identifies emerging risks AND signals taxonomy evolution needs

### Section 12: "How the Taxonomy Enables the Methodology"
- Phase-by-phase mapping: taxonomy underpins each of the six phases
- "The taxonomy is the thread that runs through all six phases"

### Section 13: "The Taxonomy Test"
- Simple test: take any historical loss, map to taxonomy; clean map = pass; double-map = mutually exclusive failure; no map = collectively exhaustive failure; gap between categories = both fail
- "Run this test against the industry loss database"
- Bridge to Ch 5: "the systematic assessment of the external environment, the internal context, and the risk culture that will either enable or undermine every step that follows"

---

## Chapter 5 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_05.md`
**Word count:** ~5,700

### Section 1: "The Bank That Didn't See the Crisis Coming"
- Opens with Rory at Hypo Real Estate, October 2007, joining as Financial Risk Manager (CDO/MBS pricing)
- Depfa Bank acquisition just completed: €400B balance sheet, lend long to public sector, fund short via wholesale markets
- External environment visibly deteriorating: BNP Paribas fund suspensions August 2007, Northern Rock bank run September 2007, interbank rates spiking
- Information was available but not systematically assessed against institution's specific vulnerabilities
- Hypo Real Estate required €102B government guarantee; nationalised 2009; wound down through FMS Wertmanagement bad bank
- "I was there. I watched it happen from the inside." — personal authority established
- Phase 1 (Foundation Setting) introduced: six activities, everything in Phases 2-6 depends on this

### Section 2: "Why Foundation Setting Comes First"
- ISO 31000 Section 5.3: establishing context precedes risk assessment
- Six activities listed: external context, internal context, internal environment, risk criteria, starting universe, straw man
- Each activity produces documented output with specific inputs and deliverables
- "Phase 1 is not a planning meeting. It is a structured analytical process with an audit trail."

### Section 3: "External Context: The PESTLE Framework"
- PESTLE = Political, Economic, Social, Technological, Legal, Environmental — adapted for banking
- Described as checklist technique from ISO 31010 (honouring Ch 2 technique mapping)
- Findings must be mappable to taxonomy (honouring Ch 4 requirement)
- Each of six PESTLE dimensions explained with banking-specific scope
- PPI referenced briefly under Social (slow-moving social context changes producing tens of billions in losses)
- Capital One 2019 breach referenced under Technological (misconfigured AWS firewall, 100M+ records)
- **Climate/ESG sub-section:** six transmission channels in table (physical acute/chronic, transition policy/technology/market/reputational); three time horizons (short 1-3yr, medium 3-10yr, long 10-30yr); EBA ESG Guidelines and ECB Guide referenced; climate risks manifest through existing risk types not standalone
- PESTLE discipline: documentation requirement, each finding mapped and dated
- **Northern Rock case study (PRIMARY):** 75% wholesale-funded; business model was itself the unidentified risk; external context changing through 2006-2007; no systematic assessment connecting external changes to specific funding vulnerability; first UK bank run in 150 years; nationalised February 2008; £2B taxpayer cost
- "What was missing" pattern applied: PESTLE assessment mapping wholesale funding market conditions to institution's specific structure

### Section 4: "Internal Context"
- ISO 31000 Section 5.3.3 referenced as standards basis
- Six elements assessed: strategic objectives, organisational structure, governance, capabilities/resources, information systems/data flows, risk appetite statement
- Strategy as source of risk: embedded assumptions (continuous market access, sector growth) must be identified
- Structure as source of risk: complex multi-entity structures create information asymmetry
- BCBS 239 referenced for data infrastructure benchmark
- Risk appetite critique: "a single paragraph of aspirational language... is not a risk appetite. It is a mission statement with the word 'risk' in it"

### Section 5: "The Internal Environment Assessment: Where Risk Culture Lives"
- Connects to Ch 1 Control Environment Failure promise — this is the assessment that catches it
- COSO ERM Internal Environment is first of 8 components
- Seven elements in table with assessment questions: risk management philosophy, Board attitudes, integrity/ethical values, commitment to competence, organisational structure, assignment of authority, human resource standards
- Assessment requires interviews, incentive structure review, disciplinary records, escalation pattern analysis, stated vs observed behaviour comparison
- **Anglo Irish Bank case study (PRIMARY):** Sean FitzPatrick chairman; aggressive CRE lending during Celtic Tiger; culture of deference made challenge career-threatening; growth equated with success; FitzPatrick concealed €87M personal loans; board did not independently challenge; nationalised 2009; €29.3B taxpayer cost; renamed IBRC; liquidated 2013
- "What was missing" pattern: formal COSO 7-element assessment would have flagged philosophy subordinated to growth, board not challenging, ethical values compromised by deference, compensation rewarding growth without concentration adjustment, HR penalising dissent
- Annual refresh requirement: delivered on Ch 3 commitment; culture changes through leadership, acquisition, strategy, attrition
- Material weaknesses escalated to CRO and Board Risk Committee

### Section 6: "Defining Risk Criteria"
- Five components: impact scales, likelihood scales, materiality threshold, appetite boundaries, aggregation rules
- Multi-dimensional impact: financial, reputational, regulatory, customer, operational — highest applicable dimension determines rating
- Five-point scales recommended (COSO practice guidance)
- Materiality threshold as governance decision: too high = blind spots, too low = noise
- Appetite boundaries must be specific and measurable, not aspirational
- Aggregation rules needed for enterprise portfolio view (Ch 8)
- CRO approves, Board Risk Committee endorses, before identification cycle begins
- Detailed scoring methodology deferred to Ch 9 ("four-dimensional assessment framework and data quality overlay")

### Section 7: "Building the Starting Universe"
- Three core sources: regulatory categories (from Ch 4 regulatory mapping table), industry loss data (179-event database), internal incident history (including near-misses)
- Five additional sources: social media/sentiment, vendor/third-party assessments, technology/system logs, customer data/feedback, peer benchmarking (ORX data)
- "Starting universe is not the risk inventory. It is the evidence base."
- Counters blank-page problem and recall bias in workshops

### Section 8: "The Straw Man Risk List"
- Prepared by Risk Identification Lead; organised by L1/L2 taxonomy
- Three functions: prevents blank-page syndrome, counters recall bias, provides audit trail baseline
- Rules: circulated in advance, labelled as discussion prompt not draft answer, meant to be torn apart
- Credit Suisse lesson: "proposed risk list" produced deference; "what is wrong with it" produced genuine challenge — framing matters

### Section 9: "How Hypo Real Estate Could Have Been Different"
- Returns to opening hook; applies each Phase 1 element to Hypo Real Estate scenario
- PESTLE → wholesale funding market stress mapped to Liquidity Risk taxonomy
- Internal context → Depfa acquisition changed strategic objectives/risk profile fundamentally
- Internal environment → acquisition due diligence culture examined
- Risk criteria → maturity mismatch would exceed appetite boundaries
- Starting universe → industry loss data for wholesale-funded institutions
- Straw man → wholesale funding seizure risk from evidence base
- "The information was there. The methodology to process it was not."

### Section 10: "The Foundation Is Set"
- Phase 1 produces six documented outputs
- Foundation shapes everything that follows — not neutral
- Formal phase with defined inputs, documented outputs, quality standards, governance requirements
- Bridge to Ch 6: dual-track approach — top-down workshops (SWIFT, Delphi) for strategic perspective + bottom-up analysis for operational perspective; "neither track alone is sufficient"

---

## Chapter 6 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_06.md`
**Word count:** ~5,700

### Section 1: "The Workshop Where Everyone Agreed"
- Opens with Rory at Credit Suisse, late 2016, attending his first risk identification workshop
- Most senior person spoke first; identified three risks identical to last year's register; everyone agreed; eight risks produced in thirty minutes — all restatements of existing register
- No one mentioned counterparty concentration in prime brokerage, leveraged family office exposure, or cross-desk simultaneous default — four years later Archegos would cost CS $5.5B
- Workshop was "worse than useless — it was actively dangerous" because it created documented record of identification that was actually just ratification
- "Traditional brainstorming, applied to risk identification in a hierarchical institution, does not identify risks. It identifies consensus."
- Decision to redesign the entire approach around SWIFT

### Section 2: "Why Brainstorming Fails"
- Four pathologies: authority bias (most senior person anchors discussion), groupthink (social cost of disagreement), recall bias (defaults to recent/known risks), production blocking (five minutes per participant)
- ISO 31010 includes brainstorming but its pathologies documented in academic literature for decades
- Output of brainstorming "indistinguishable from what a competent risk analyst could have generated alone"
- Introduces SWIFT as the solution

### Section 3: "The Dual-Track Rationale"
- ISO 31000 §5.2 as standards basis for requiring multiple perspectives
- Top-down captures strategic/emerging risks from senior management vantage point
- Bottom-up captures granular/operational risks from people closest to business (Ch 7)
- Oliver Wyman cited on parallel processes providing higher identification likelihood
- Reconciliation between tracks (Ch 8) is where methodology creates most distinctive value
- Straw man bridges both tracks — callback to Ch 5 framing lesson

### Section 4: "Designing the Top-Down Workshop"
- **Participant selection:** CRO/deputy, BU heads, Treasury/ALM, Compliance/Legal, Finance/CFO, Risk ID Lead; annual review; rotate 1-2 participants per cycle
- **Pre-workshop independent assessment:** "single most important design element"; each participant independently identifies top 10 risks in writing; eliminates authority bias; maps agreement/disagreement; creates audit trail baseline
- **Briefing pack:** PESTLE assessment, internal context/environment summaries, prior-year risk list with trends, regulatory communications, industry loss events since last cycle
- **Workshop structure table:** Opening 15min → Assessment review 30min → SWIFT rounds 90-120min → Emerging risk session 30min → Multivoting 20min → Gap review 15min; total ~4 hours

### Section 5: "SWIFT: The Structured What-If Technique"
- ISO 31010 Section B.7; originally from process safety; structured prompts not open questions
- **Six guide words** in table with banking example prompts: "What if...", "What would happen if...", "Could someone/something...", "What has changed since last year...", "What are we assuming that might not be true?", "Where are the gaps between..."
- Applied across five domains: strategic objectives, business areas, risk categories, external environment, interconnections
- Overcomes each brainstorming pathology: authority bias (facilitator controls), groupthink (prompts legitimise challenge), recall bias (systematic coverage), production blocking (built on pre-workshop assessment)
- **Facilitation skills:** managing dominant voices, drawing out dissent (structured turn-taking, non-verbal signals), maintaining challenge culture ("silence should not be interpreted as agreement"), protecting process from political interference
- Rory's Credit Suisse facilitation confrontation: BU head denied a risk existed in front of colleagues; risk appeared in final inventory; "the craft that distinguishes a process that works from a process that merely exists on paper"

### Section 6: "Scenario Analysis as an Identification Technique"
- ISO 31010: applicable to both identification and analysis stages
- Uses PESTLE factors to construct plausible scenario combinations; purpose is identification not quantification (Ch 9)
- CCAR/Fed SR 15-18: requires firm-specific stress scenarios targeting vulnerabilities; identification must be more granular than generic categories
- Three example scenario prompts: prolonged rate inversion, simultaneous counterparty defaults, payments system failure

### Section 7: "Multivoting: Transparent Prioritisation"
- 5-10 votes per participant; multiple votes on single risk permitted
- Transparent and traceable; eliminates single-voice dominance; collective judgement over individual authority
- Output is preliminary; detailed scoring in Ch 9

### Section 8: "The Archegos Failure: What a SWIFT Workshop Would Have Asked"
- **PRIMARY case study:** Bill Hwang; total return swaps; 5-8x leverage across multiple prime brokers; no aggregate visibility; family office structure meant no 13F filing; collapsed March 2021; $20B total losses; CS $5.5B
- Failure was questioning methodology not information availability
- Four specific SWIFT prompts that would have surfaced the risk; independent pre-workshop assessment as additional layer
- **What was missing:** structured methodology with systematic prompts across counterparty types; assumption challenge on bilateral vs aggregate; pre-workshop independent assessments

### Section 9: "The Delphi Method: When Workshops Are Not Enough"
- ISO 31010 Section B.4; for emerging risks with no historical data; conventional wisdom may be actively wrong
- **How it works:** 10-20 expert panel (internal + external); anonymous submissions; Risk ID Lead as "oracle"; 2-3 rounds; 3-5 year horizon; convergence ≠ unanimity
- **Why anonymity matters:** eliminates social dynamics; junior analyst = CEO weight; external challenge heard without attribution
- **Delphi's double duty** (honouring Ch 4): primary = emerging risk identification; secondary = taxonomy evolution intelligence; climate risk as historical example; feeds risk inventory AND taxonomy maintenance

### Section 10: "Wirecard: When the Identification Ecosystem Inverts"
- **PRIMARY case study:** €1.9B fabricated cash at Philippine trustee banks; fabricated revenues from Asian third-party acquiring; intimidated journalists/regulators; BaFin prosecuted FT journalists; short-sellers' analysis from 2015; FT reporting from 2019; CEO Braun arrested; COO Marsalek fled; insolvency June 2020; Germany's largest post-war corporate fraud
- Illustrates why Delphi with external experts is essential not optional
- Internal consensus can be actively wrong — "where the institution believes it is safe precisely in the area where it is most exposed"
- **What was missing:** structured mechanism for external expert perspectives, protected by anonymity; Delphi with external panellists would have surfaced dissenting analysis

### Section 11: "Connecting Top-Down Identification to the CCAR Framework"
- Fed SR 15-18: Material Risk Inventory updated quarterly through active re-identification
- SWIFT prompts = precisely the questioning methodology CCAR requires
- Quarterly workshops are focused (changes, emerging risks); annual covers all domains
- At Credit Suisse, CRO required process to feed directly into CCAR; Material Risk Inventory became foundation for scenario design and stress testing

### Section 12: "Top-Down Outputs"
- Five outputs in table: principal risk list (15-30), emerging risk register, assumption register, disagreement log, taxonomy gap list
- Disagreement log: divergence is information, not a problem; preserved for assessment phase (Ch 9)

### Section 13: "The Limits of Top-Down Identification"
- Top-down sees from altitude but not granular operational risks
- "Top-down track identifies the twenty risks that could destroy the institution. The bottom-up track identifies the two hundred."
- Reconciliation (Ch 8) produces enterprise portfolio view
- Bridge to Ch 7: standardised templates, RCSA, specialist sub-processes, Risk ID Lead ensuring nothing falls through gaps

---

## Chapter 7 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_07.md`
**Word count:** ~5,600

### Section 1: "The Risk Assessment That Had Not Changed in Three Years"
- Opens with Rory at Credit Suisse early 2017, receiving first round of bottom-up risk assessments
- Three submissions checked — all identical to prior year: same risks, same order, same scores, same owners (one had left the firm)
- **Compliance theatre** concept introduced: "the appearance of risk identification without the substance" — the most common failure mode in bottom-up processes
- Compliance theatre is "worse than no process at all" because it creates false documentation of identification
- Reaffirms dual-track rationale: top-down identifies ~20 strategic risks; bottom-up identifies ~200 operational risks; neither alone sufficient
- Bottom-up captures: process failures, control weaknesses, technology vulnerabilities, third-party dependencies, conduct risks in incentive structures
- Chapter purpose stated: designing bottom-up process that produces genuine identification through templates, techniques, specialist sub-processes, and integration discipline

### Section 2: "The Standardised Risk Assessment Template"
- Foundation of bottom-up identification: standardisation enables aggregation, comparison, reconciliation
- 11-field template defined in full table: Risk ID, Taxonomy Classification, Risk Definition, Underlying Drivers (Direct), Underlying Drivers (Indirect), Quantitative Metrics, Qualitative Information, Current Controls, Risk Owner, Emerging Risk Indicators, Data Quality Rating
- Three fields where submissions most commonly fail analysed in detail:
  - **Underlying Drivers:** force causal thinking beyond classification; Credit Suisse submissions had adequate definitions but empty driver fields — "classified their risks but had not identified them"
  - **Current Controls:** must specify type (preventive/detective/corrective) and honest effectiveness rating with evidence; natural tendency to default to "effective"
  - **Data Quality Rating:** four levels (High/Medium/Low/Very Low); BUs default to "Medium" for everything; Risk ID Lead must challenge; feeds into Ch 9 four-dimensional assessment
- Risk Owner references Ch 3: "named individual — not a committee, not a function"

### Section 3: "Techniques for Bottom-Up Identification"
- "A template is a capture mechanism, not an identification technique" — template without technique = compliance theatre
- References Ch 2 ISO 31010 technique mapping
- **Structured interviews:** predetermined questions, one-on-one, captures perspectives from people who would never speak in workshops; removes authority bias and groupthink; five interview areas: risks seen, what changed, controls that work, whole-BU perspective, what's being missed
- **Checklists:** organised by L2 taxonomy, supplemented with starting universe prompts (Ch 5); prompt not constraint; gaps reported to Risk ID Lead for taxonomy update
- **Cause-and-effect (Ishikawa) diagrams:** starts with risk event, works backwards; organised by people/process/technology/data/external; populates driver fields with genuine causal analysis
- **FMEA:** examines each process step for failure modes, consequences, controls; most thorough for process-intensive operations (payments, settlements, trade booking, onboarding, regulatory reporting)
- **HAZOP:** guide words (no, more, less, reverse, other than) applied to process parameters (flow, timing, sequence, composition); from process safety like SWIFT; banking examples: wrong counterparty, duplicated payment, skipped authorisation, wrong sequence
- FMEA/HAZOP resource-intensive — appropriate for critical processes only
- Risk ID Lead provides technique guidance; "a business unit that completes the template without applying any identification technique has not performed identification. It has performed data entry."

### Section 4: "The Ten Specialist Sub-Processes"
- Certain risk types require dedicated expertise, specialised data sources, regulatory-specific methodologies
- Four integration requirements stated: common taxonomy (L1/L2/L3), same 4D scoring, standardised template submission, participation in reconciliation — "non-negotiable"
- **1. RCSA:** most widely deployed and most frequently reduced to compliance theatre; requires full BIS PSMOR toolbox (self-assessment, KRIs, external loss data, business process mapping, event management); event management as feedback loop; effective RCSA involves workshops + Ishikawa + incident data challenge; ineffective = one person updating spreadsheet
- **2. TSRA:** hypothetical adverse scenarios at operational level (vs Ch 6 strategic scenarios); owned by Risk ID Lead/CRO; identifies risks existing only in combination; complement to Ch 10 risk interaction analysis
- **3. RSR:** reputational/sustainability/ESG; reputational risk rarely materialises independently; cross-cutting — requires inputs from conduct, compliance, operations, external context (Ch 5); maps to climate transmission channels (Ch 5) and taxonomy (Ch 4)
- **4. Conduct Risk:** FCA five Conduct Questions listed; business-led at desk-by-desk granularity; reverse-engineered from customer harm; PPI callback (Ch 4); incentive structures = "single most important input"
- **5. Model Risk:** full model lifecycle; risk of wrong model AND wrong purpose; JPMorgan London Whale callback (Ch 4) — VaR model changed without challenge
- **6. ICT/Cyber:** EBA GL/2019/04; information asset inventory; annual assessment; threat landscape "changes continuously and adversarially"; requires external threat intelligence; more frequent refresh than annual; connects to Ch 3 event-driven triggers
- **7. AML/CFT:** EU AMLD6; entity-level ML/TF risk identification; new products/services must be assessed **before launch**; Deutsche Bank mirror-trading callback (Ch 4); look for structural indicators (anonymity features, reduced oversight channels, high-risk segments/geographies)
- **8. Third-Party/Outsourcing:** EBA Outsourcing Guidelines; comprehensive register; sub-outsourcing and fourth-party dependencies; concentration risk — single cloud provider failure = one systemic risk not five independent risks
- **9. Traded Risk:** market/credit/operational risks from trading; position concentration, liquidity risk, counterparty credit, basis risk, operational risks in execution/booking/settlement; must incorporate trader input — traders are earliest identifiers of market dislocations
- **10. Treasury Risk:** liquidity, funding, capital structure; Northern Rock callback (Ch 5); IRRBB, intraday liquidity, contingent demands, currency mismatch; structural challenge — risks created by other BUs' activities; must receive inputs from all BUs

### Section 5: "When Bottom-Up Identification Fails: AIB and John Rusnak"
- **PRIMARY case study:** February 2002; John Rusnak at Allfirst Financial (AIB US subsidiary); FX trader; concealed $691M losses through fictitious option trades; losses accumulated over years; sentenced 7.5 years; Allfirst sold to M&T Bank
- Textbook failure of bottom-up identification across geographic boundaries
- Allfirst operated with significant autonomy: own risk management, own reporting lines, own processes; AIB central function relied on local management assurances
- Rusnak exploited weak back-office confirmation processes: created fictitious offsetting options; confirmations not obtained or fabricated by Rusnak himself
- Four deficiency mappings: no standardised template (locally developed formats), no structured technique (no FMEA on confirmation process), no independent control effectiveness assessment, geographic separation (traded risk assessment conducted locally with no central integration)
- **What was missing:** standardised bottom-up process requiring same template, taxonomy, scoring, and control effectiveness assessment across all units — with central function to identify gaps and challenge local assurances

### Section 6: "The Same Failure, Repeated: UBS and Kweku Adoboli"
- **PRIMARY case study:** September 2011; Kweku Adoboli; UBS Delta One desk London; $2B losses from unauthorised ETF trading; fictitious hedging positions; gaps between trading and settlement systems; sentenced 7 years
- Occurred after GFC ($37B structured credit losses), after SNB $39B toxic asset vehicle, after comprehensive risk overhaul — same fundamental gap remained
- RCSA for Delta One had not identified that controls assumed trade authenticity rather than testing it
- FSA fined UBS £29.7M; accelerated strategic exit from investment banking
- Rogue trading pattern established: Rusnak (2002) → Kerviel (2008) → Adoboli (2011) = recurring operational risk with identifiable preconditions
- Three structural preconditions: trader understanding control chain, inadequate independent verification, RCSA assessing against design spec not determined circumvention
- **What was missing:** RCSA incorporating external loss data (Kerviel/Rusnak as inputs); traded risk assessment examining control resilience against deliberate exploitation; template requiring assessment against specific failure scenarios from industry loss database

### Section 7: "The Integration Challenge"
- Ten sub-processes, ten functions, ten potential silos — integration is where Risk ID Lead earns title
- Predictable failure: each function develops own methodology, templates, scales, cadence; result is "ten separate inventories with no common language"
- Four integration requirements detailed: (1) common taxonomy — no substituting Basel/FCA/FATF categories, (2) same 4D scoring — "high impact" must mean same thing across sub-processes, (3) standardised template submission — forces specialist analysis into common terms, (4) reconciliation participation — Ch 8
- Risk ID Lead as quality assurance with challenge authority: sends back non-compliant submissions, challenges unchanged risk lists, escalates gaps

### Section 8: "From Compliance Theatre to Genuine Identification"
- Three requirements: (1) techniques must be applied — template without technique = data entry, (2) inputs must be current — BUs receive same briefing materials as workshop participants, industry loss events prompt reassessment, (3) output must be challenged — Risk ID Lead tests: has list changed? are drivers specific? are control ratings evidenced?
- Credit Suisse redesign: minimum three new or materially changed risks per annual cycle per BU

### Section 9: "The Output"
- Comprehensive risk register of 100-500 risks across all BUs, incorporating all 10 specialist sub-processes
- Organised by taxonomy, scored using common methodology, documented in standardised templates, with data quality ratings
- Not the final inventory — one of two inputs (with top-down) into reconciliation (Ch 8)
- Designed for reconciliation: every risk carries taxonomy classification, BU of origin, source sub-process

### Section 10: "The Bridge to Reconciliation"
- Bottom-up and top-down outputs must now be brought together
- Reconciliation: iterative comparison, gap identification, conflict resolution, escalation of bottom-up risks, assignment of top-down risks, enterprise portfolio view
- "Most banks fail" at reconciliation — perform one track but not both, almost never iterate
- "The methodology requires both tracks precisely because the reconciliation between them is where the most valuable risk identification occurs"

---

## Chapter 8 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_08.md`
**Word count:** ~4,500

### Section 1: "The Risk That Nobody Owned"
- Opens with Rory at Credit Suisse early 2017, first reconciliation cycle: 23 top-down risks vs 187 bottom-up risks
- Top-down SWIFT workshop identified "cross-counterparty concentration in prime brokerage services" — risk visible only from enterprise level
- Cross-referenced against bottom-up: no single BU had captured it; equity financing reported counterparty credit risk, derivatives reported market risk, securities lending reported operational risk — each accurate within scope
- Risk existed between business units, not within them — "who owns this risk?" is the question reconciliation answers
- Archegos callback: $5.5B loss in 2021 from precisely this kind of cross-counterparty, cross-product concentration — "the structural gap that my first reconciliation cycle had identified was the same structural gap that Archegos would later exploit"
- Chapter framing: reconciliation and enterprise portfolio view transform two separate tracks into single consolidated picture

### Section 2: "Where Most Banks Fail"
- Top-down ~20 risks, bottom-up 100-500 risks; most banks fail at reconciliation between them
- What passes for reconciliation is compilation: merging lists, removing duplicates, sending to CRO — "a reconciled risk inventory. It is nothing of the sort"
- Standard Chartered 2023: Rory found prior cycle's reconciliation was merged spreadsheet with colour-coding, no gap analysis, no challenge sessions, no enterprise portfolio view
- Compilation vs reconciliation distinction: "compilation tells you what two tracks have produced. Reconciliation tells you what neither track has found"
- Five categories of question reconciliation poses that compilation doesn't
- Central thesis: "the risks that live between business units — the aggregate concentrations, the correlated exposures, the systemic dependencies — are the risks that have caused the largest losses in banking history"

### Section 3: "The Five Steps of Reconciliation"
- **Step 1 — Gap Analysis:** systematic comparison using common taxonomy as mapping key; top-down gaps (two sub-types: BU identification failure vs genuinely enterprise-level); bottom-up gaps (two sub-types: top-down blind spot vs genuinely local); taxonomy L1/L2 as mapping key (Ch 7 integration requirement); CS first cycle: 12 top-down gaps, 47 bottom-up gaps; "a clean reconciliation with no gaps should be treated with suspicion, not satisfaction"
- **Step 2 — Escalation:** bottom-up risks of strategic significance elevated to principal risk list; threshold = exceeds materiality or breaches appetite when aggregated; third-party concentration example callback from Ch 7 (five critical functions, single cloud provider); Risk ID Lead assesses, CRO approves
- **Step 3 — Assignment:** top-down risks with no BU owner assigned; named individual ownership (Ch 3 callback); hierarchy: natural BU home → unit with largest exposure → CRO/Group Risk; "one of the most politically sensitive moments in the entire methodology"; requires Ch 3 governance mandate
- **Step 4 — Challenge:** Risk ID Lead facilitates structured challenge sessions; not consensus-building; challenge works both ways; disagreement log (Ch 6) informs — resolved through evidence not social dynamics; assumption register (Ch 6) tested against bottom-up evidence; CS experience: BU head discovered own submission contained evidence for risk he'd dismissed; model risk validation example — "effective" rating based on 2-year-old validation, challenge session produced reassessment
- **Step 5 — Iteration:** repeat until CRO satisfied; 2-3 iterations for annual, 1-2 for quarterly; each narrows gaps; fully documented audit trail; CRO sign-off = governance conclusion of Phase 2

### Section 4: "Citigroup and the Forty-Five Billion Dollar Gap"
- **PRIMARY case study.** Citigroup before 2008: multiple divisions (IB, consumer, transaction services, wealth), each with own risk reporting, each within own limits
- Investment banking created SIVs holding subprime CDOs, funded via commercial paper, backed by Citigroup liquidity puts (contractual commitments if CP market closed)
- No enterprise view connecting: CDO warehouse positions (on-balance-sheet), SIV liquidity puts (off-balance-sheet), mortgage origination pipeline, commercial paper funding model
- Liquidity puts classified as "remote contingencies" — excluded from risk aggregation
- All SIV puts triggered simultaneously in crisis; $50B+ SIV assets returned to balance sheet; $45B TARP bailout; US government equity stake
- "The risk was not hidden. It was distributed" — spread across BUs, product types, accounting classifications
- **What was missing:** enterprise portfolio view aggregating all subprime-linked exposures into single consolidated picture; reconciliation would have forced the question: "what is our total exposure — direct, indirect, contingent, on-balance-sheet and off — to a decline in US residential mortgage credit quality?"

### Section 5: "The Enterprise Portfolio View"
- Four assessments defined:
- **Common Exposures:** taxonomy-based aggregation (same L2/L3 across BUs) + cross-taxonomy analysis (different taxonomy nodes, same underlying driver); examples: interest rates, counterparty, shared technology, geographic, regulatory change; CS example: credit risk + market risk + operational risk to same counterparty across three BUs = three L1 categories, one driver
- **Simultaneous Crystallisation:** scenario-based; constructs plausible stress events from PESTLE/SWIFT/loss database; traces which risks activate together; identification not quantification (quantification deferred to Ch 9); directly addresses silo thinking failure mode (Ch 1); "a risk inventory that contains two hundred individually assessed risks without an analysis of which ones would activate simultaneously is not a portfolio view. It is a catalogue."
- **Aggregate Position Against Appetite:** BU within limits ≠ institution within appetite; appetite boundaries from Phase 1 applied to aggregate; breaches escalated immediately to CRO and Board Risk Committee; not discretionary
- **Diversification and Correlation:** where genuine diversification exists vs where risks more correlated than assumed; HSH Nordbank case: world's largest shipping lender + US subprime structured products, treated as diversified, both correlated to global economic activity, €10B state guarantee; diversification assumptions = concentration risk in disguise if based only on historical normal-market correlations; correlations increase under stress

### Section 6: "The Output"
- Enterprise risk map: aggregated landscape, correlated clusters, appetite breaches
- Feeds: principal risk report (Ch 3), CCAR Material Risk Inventory (Ch 6), capital planning/strategy/regulatory reporting (Ch 12)
- Not static — updated as ongoing cycle (Ch 13) refreshes inventory
- Phase 2 complete; every risk has taxonomy classification, named owner, documented source, enterprise portfolio position

### Section 7: "What Comes Next" (Bridge to Ch 9)
- Phase 3: Assessment and Prioritisation
- Ch 9: four-dimensional scoring (financial, regulatory, reputational, customer/operational), data quality overlay, materiality determination
- "The four-dimensional assessment framework that Chapter 5 introduced and this chapter's enterprise portfolio view requires is the subject of what follows"

---

## Chapter 9 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_09.md`
**Word count:** ~5,970

### Section 1: "The Risk That Was Assessed at Near-Zero"
- Opens with AIG Financial Products 2005 — most profitable division, $500B+ CDS notional on mortgage-linked CDOs
- Assessment failure: AAA default rate near-zero historically, internal models assigned negligible probability, single financial dimension
- What assessment did not capture: regulatory consequence (collateral calls on downgrade), reputational destruction (government bailout), customer/operational impact (counterparty failure cascade), data quality (models calibrated to period without relevant stress)
- $85B Federal Reserve bailout — "not a failure of risk identification... the failure was in how that exposure was assessed"
- Phase 3 introduced: scoring, data quality, inherent/residual, materiality threshold
- References Ch 5 (four-dimensional framework introduced) and Ch 8 (enterprise portfolio view requires it)

### Section 2: "Why Assessment Is Not Measurement"
- Assessment distinguished from quantitative risk measurement — does not replace credit models, VaR, capital calculations, stress testing
- Assessment purpose threefold: prioritise inventory, enable cross-risk comparison, provide Board enterprise view
- Ch 6 multivoting described as preliminary, now replaced by structured 4D scoring
- ISO 31000 Section 5.4.3 and ISO 31010 cited as standards basis

### Section 3: "The Four-Dimensional Impact Framework"
- **Dominant dimension rule** introduced: highest-scoring dimension determines overall impact rating
- **Financial Impact** — five-point scale anchored to CET1 capital (Incidental <0.1% through Extreme >15%); CET1 anchor makes scale objective, auditable, and scalable
- **Regulatory and Legal Impact** — five-point scale (Incidental through Extreme = licence revocation); Standard Chartered $667M and Deutsche Bank $630M referenced as callbacks
- **Reputational Impact** — five-point scale (Incidental through Extreme = total loss of market confidence); Wells Fargo fake accounts as illustration — $3B financial but existential reputational
- **Customer and Operational Impact** — five-point scale (Incidental through Extreme = total service failure); PPI as illustration — customer harm preceded financial crystallisation
- Cyber attack example applying all four dimensions (Financial 1, Regulatory 3, Reputational 3, Customer/Operational 4 → overall 4)
- AIG retrospective: would have scored Extreme on at least three of four dimensions

### Section 4: "Likelihood"
- Five-point scale: Rare (<1%) through Frequent (>90% or already occurred)
- Three common failures named and explained:
  1. **Anchoring to recent experience** — complacency failure mode (Ch 1); LTCM cited (VaR calibrated to normal conditions, correlations went to one in 1998 Russian crisis, $3.6B bailout); methodology response: Data Quality Rating + scenario analysis from Ch 6
  2. **Conflating likelihood with perceived controllability** — likelihood assessed at inherent level first, before controls
  3. **Treating independence as default** — simultaneous crystallisation belongs to Ch 8/Ch 10, but assessors must be aware of aggregate use

### Section 5: "Vulnerability"
- Third dimension beyond traditional impact/likelihood; five-point scale: Very Low through Very High
- Captures institutional preparedness independently of whether event occurs
- Draws on Ch 7 control effectiveness information (preventive/detective/corrective types)
- Critical distinction: controls that have been tested vs controls assumed to work
- UBS 2008 structured credit case: risk function relied on same models as front office, VaR limits repeatedly increased, $37.4B write-downs; controls existed on paper, vulnerability was extreme; Very Low rating requires controls "proven under stress"

### Section 6: "Speed of Onset"
- Fourth dimension; five-point scale: Very Slow (years) through Immediate (days or less)
- Determines whether institution has time to implement risk responses
- Bear Stearns: concentrated MBS exposure materialised through sudden counterparty confidence loss in days, not gradual credit deterioration — speed of onset 5 (Immediate) would have flagged need for pre-positioned liquidity
- Climate risk contrast: physical chronic = Very Slow; transition policy = Fast
- Four dimensions together constitute the **four-dimensional risk score** — every risk carries all four for both inherent and residual

### Section 7: "Data Quality and Confidence Rating"
- Every assessment must include Data Quality Rating — ISO 31010 Section 4.3 (transparent recording)
- Four-level scale (same as Ch 7): High, Medium, Low, Very Low — with typical basis for each
- Ch 7 callback: Data Quality one of three most commonly failed fields; BUs default to "Medium"
- **Three operational consequences:**
  1. **Conservatism adjustment:** Low/Very Low data quality = cannot carry low impact/likelihood without CRO approval; "uncertainty should not reduce attention"
  2. **Sensitivity testing:** what if one level higher on impact/likelihood? If crosses materiality threshold → potentially material; structured what-if, not Monte Carlo
  3. **Board transparency:** Board Risk Report includes data quality distribution across material portfolio
- **Wachovia/Golden West case:** $122B option ARMs from acquisition; historical CA data accepted without stress testing; evidence didn't include nationwide decline; product track record short; appropriate rating Very Low; conservatism principle would have required higher assumed losses; $25B losses, emergency sale to Wells Fargo

### Section 8: "Inherent and Residual Risk"
- Inherent = no controls; Residual = after controls; Control effectiveness rated 1–5 (highly effective to ineffective)
- Three reasons for dual assessment: reveals control dependency (inherent 5 / residual 2 = heavy dependence), identifies where controls mask exposure, prevents assessment gaming
- Credit Suisse experience: inherent-residual gap mapping against control evidence was "one of the most productive exercises" — large gaps with weak evidence flagged for deeper review
- **Independent challenge requirement:** "models are an input to assessment, not a substitute for it" — three requirements: state assumptions explicitly, identify breakdown scenarios, record management judgement on applicability
- UBS 2008 callback: risk function relied on same models as front office, no independent challenge
- Not prohibition on models — prohibition on using models uncritically; model output must be accompanied by assumptions, failure conditions, Data Quality Rating of inputs

### Section 9: "Resolving the Disagreement Log"
- Ch 6 disagreement log resolution through evidence, not social dynamics — delivered here
- 4D framework provides structured basis: on which dimension do you disagree?
- Dimensional separation often dissolves disagreement: CRO assessing regulatory impact, BU head assessing financial — both correct under dominant dimension rule
- Persistent disagreement preserved: minority view recorded with evidence basis and data quality ratings; Board receives both
- Credit Suisse experience: risks where senior participants genuinely disagreed after structured analysis were "disproportionately likely to be the risks the institution most needed to understand"

### Section 10: "Materiality Determination"
- Impact × Likelihood heatmap, materiality threshold from Phase 1 (Ch 5), CRO-approved
- Typically 20–60 material risks; material risks get full profiles (Ch 11), KRIs (Ch 13), capital/strategy integration (Ch 12)
- Three factors beyond heatmap line: dominant dimension, aggregation (Citigroup pattern), data quality adjustment (Very Low flagged for CRO review)
- **Heatmap limitations:** does not show vulnerability, speed of onset, data quality, inherent-residual gaps, correlations — "screening tool, not conclusion"

### Section 11: "Merrill Lynch and the AAA Assumption"
- $40B+ super-senior CDO retention; AAA rating treated as equivalent to independent analysis; not material in internal reports
- Assessment failure multi-dimensional: $51.8B write-downs (financial), forced emergency sale to BofA at half peak price (regulatory), CEO Stan O'Neal departure (reputational)
- Data Quality: external ratings from conflicted agencies, models unvalidated against relevant stress; appropriate rating Low at best; conservatism principle would have prevented near-zero assessment

### Section 12: "Putting It Together: The Assessment Record"
- Seven-field assessment record table: Inherent Risk Score, Control Effectiveness, Residual Risk Score, Data Quality Rating, Materiality Classification, Model Dependency, Disagreement Record
- Integrates with Ch 7 standardised template fields — together form basis for risk inventory (Ch 11)

### Section 13: "How This Could Have Changed AIG"
- Full retrospective 4D application to AIG CDS portfolio as of 2006
- Impact 5 (dominant dimension: regulatory/reputational, not financial), Likelihood 1 but disputed (Low data quality → conservatism/sensitivity → 2), Vulnerability 5 (no hedging, no collateral reserves), Speed of Onset 5 (collateral calls immediate on downgrade)
- Sensitivity test crosses materiality threshold; risk profile would document collateral mechanism, concentration, absence of hedging
- "The $85 billion bailout was not inevitable. It was the consequence of a single-dimensional assessment methodology applied to a risk that required four."

### Section 14: "The Bridge to Risk Interaction" (bridge paragraph)
- Phase 3 complete: all risks scored on 4D, data quality overlaid, inherent/residual separated, materiality determined
- But each risk assessed individually — next step is systematic interaction analysis
- Ch 10 will cover: bow-tie analysis (causal chains), risk interaction matrices (which risks amplify each other), concentration analysis (aggregate exposure exceeding individual scores)

---

## Chapter 10 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_10.md`
**Word count:** ~4,260

### Section 1: "The Bank That Was Destroyed by Five Risks at Once"
- Opens with Lehman Brothers September 2008 — not a single risk failure but five risk types crystallising simultaneously
- $85B MBS on 30:1 leveraged balance sheet; credit→market→liquidity→operational→reputational cascade chain described step by step
- Each risk was individually assessed in its own silo; no one mapped the causal chains between them
- Chain took <6 months from Bear Stearns rescue to $639B bankruptcy (largest in US history)
- Repo 105 transactions removed $50B assets from balance sheet at quarter-ends, concealing true leverage — introduced as escalation factor concept preview
- Ch 9 heatmap limitations restated: doesn't show correlations, common exposures, amplification — ISO 31000 "knock-on effects" quoted as standards basis
- **Risk interaction analysis** defined: systematic examination of how risks relate to each other
- Three complementary tools introduced: risk interaction matrix, bow-tie analysis, concentration analysis

### Section 2: "The Risk Interaction Matrix"
- Square matrix, material risks on both axes; directional (not symmetric); each pair assessed independently
- Three purposes: identifies **risk clusters**, reveals **cascade pathways**, highlights **amplification mechanisms**
- 30 material risks = 870 directional pairs; requires structured facilitation with risk owners, CRO, specialists
- Specific question for each cell: "If Risk A materialises, does it trigger or amplify Risk B? Through what mechanism? With what time lag?"
- Three relationship categories in table: **Triggers**, **Amplifies**, **Correlated** — with banking examples
- **Propagation nodes** (many outgoing) and **vulnerable nodes** (many incoming) — warrant more conservative assessment
- Credit Suisse experience: counterparty credit risk connected to 11 other risks, market risk to 9; "turned intuition into auditable methodology"
- **TSRA connection** (Ch 7 callback): TSRA tests the matrix under stress; matrix explains why TSRA scenarios produce cascades
- Matrix informs Ch 8 enterprise portfolio view — simultaneous crystallisation now has structured analytical basis; interaction matrix provides mechanism mapping, SWIFT scenarios (Ch 6) provide triggering events

### Section 3: "Bow-Tie Analysis: Mapping the Causal Chain"
- ISO 31010 Section B.21; for institution's 5-10 most critical risks (materiality from Ch 9)
- Visual representation of pathways from causes to consequences with controls mapped at each stage
- **Left side (causes/prevention):** identified causes with specific transmission mechanisms; **preventive barriers** as vertical bars; **escalation factors** (conditions that could cause barriers to fail); **escalation controls** (prevent escalation factors from degrading barriers)
- **Centre:** precisely defined risk event (not generic categories)
- **Right side (consequences/mitigation):** consequences mapped to Ch 9 four-dimensional framework; **mitigating barriers**; **recovery controls**
- **Supporting layer:** management functions (training, inspection, maintenance, testing) supporting each barrier
- Dual purpose: practitioner causal analysis AND Board communication tool — single page communicates full risk architecture
- Resource-intensive; only top 5-10 risks; each requires facilitated sessions with risk owners, control owners, specialists
- Facilitation mirrors SWIFT methodology from Ch 6
- **Lehman bow-tie retrospective:** causes (mortgage deterioration, mark-to-market, leverage), preventive barriers (position limits, VaR, stress testing, capital adequacy), escalation factor (Repo 105 concealing leverage — independent verification absent), consequences across all four dimensions, mitigating barriers (Fed facilities, acquisition) assessed as uncertain

### Section 4: "Fault Tree Analysis: Working Backwards from Failure"
- Complementary to bow-tie; works backwards from defined failure event
- Boolean logic: AND gates (multiple conditions simultaneously) and OR gates (any single condition)
- Ch 7 rogue trading three preconditions as AND-gate example — addressing any one breaks chain
- More analytical, less intuitive for Board communication; most valuable for operational risks with complex failure modes
- Not required for all material risks; Risk Identification Lead deploys where warranted

### Section 5: "Concentration Analysis: The Risks Between the Risks"
- Builds on Ch 8 enterprise portfolio view (common exposures assessment); provides systematic analytical method
- **Three forms of concentration:**
  - **Single-name:** exposure to same entity across different taxonomy categories (credit + market + operational + conduct = one concentration); interaction matrix cross-referenced with enterprise portfolio view makes this visible
  - **Structural:** concentration in structural assumptions (funding model, correlation assumption, technology platform); **Fortis case:** ABN AMRO acquisition €71B funded by leverage + subprime exposure; assessed separately but acquisition consumed capital that losses demanded; €11.2B rescue; broken up; largest Benelux failure; compounding spiral through direct amplification mechanism
  - **Systemic:** beyond individual institution; **Icelandic Banks case:** Kaupthing/Landsbanki/Glitnir collectively 10x GDP; each assessed own balance sheet; no credible lender of last resort at scale required; all three failed in one week October 2008; IMF bailout; concentration not in any individual institution's risk inventory but at system level; Central Bank of Iceland assessed individual metrics without aggregating system-level question
- Systemic concentration connects to Ch 5 PESTLE — external context should identify system-level vulnerabilities
- **Hidden concentration:** HSH Nordbank callback from Ch 8 — shipping + subprime treated as diversified, both correlated to global economic activity, €10B state guarantee; false diversification
- Must go beyond taxonomy-level aggregation to identify **underlying drivers** — Ch 7 driver fields are raw material; same driver across different taxonomy categories = concentration signal

### Section 6: "Cost-Benefit Assessment and the ALARP Principle"
- ISO 31010 Section B.30; for material risks where new controls/mitigants considered
- Four-step approach: quantify cost, estimate risk reduction, NPV/benefit-cost ratio where possible, qualitative trade-off table where not
- "Not a decision rule. It is an input to decision-making" — regulatory, reputational, appetite considerations may override
- **ALARP principle** (As Low As Reasonably Practicable): three zones — above upper threshold (intolerable, reduce regardless), within ALARP region (reduce if not grossly disproportionate), below lower threshold (broadly acceptable, monitor)
- ALARP lower threshold connected to Ch 5 Phase 1 risk criteria
- ALARP prevents two errors: tolerating reducible risks AND investing disproportionately in already-acceptable risks
- Documented in risk profile, reviewed in quarterly refresh (Ch 13)

### Section 7: "Bringing Interaction Analysis Together"
- Three tools complementary not alternative; together complete second half of Phase 3
- Every material risk now carries: individual 4D score (Ch 9) + interaction relationships + causal chain mapping (top risks) + identified concentrations + evidence-based control proportionality
- Outputs feed: risk inventory (Ch 11), principal risk report (Ch 3), enterprise portfolio view (Ch 8), Board risk response decisions
- Interaction matrix = standing document, updated quarterly; bow-ties = living documents; concentration analysis informs enterprise portfolio view and principal risk report
- **Lehman retrospective reprise:** interaction matrix would have shown cascade chain; bow-tie would have identified Repo 105 as escalation factor; concentration analysis would have flagged single-sector exposure; ALARP would have identified leverage as intolerable
- "What was missing was the systematic methodology to connect the individually known facts into a coherent picture of interacting risks"

### Section 8: "What Comes Next" (bridge paragraph)
- Phase 3 complete; comprehensive interconnected risk landscape produced from Phases 1-3
- Analysis without documentation is ephemeral; Ch 11 = 14-field risk inventory, risk profiles for material risks, standards to ensure inventory remains decision tool not compliance artefact

---

## Chapter 11 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_11.md`
**Word count:** ~5,920

### Section 1: "The Risk Register That Nobody Read"
- Opens with Danske Bank 2018 — €200B suspicious transactions through Estonian branch over nearly a decade
- Branch had its own risk documentation; group had its own; neither assembled a single coherent picture
- Non-resident portfolio documented locally as profitable niche; at group level, small but high-performing subsidiary
- No single inventory entry for aggregate AML exposure; CEO resigned; €2B+ fines; Estonian licence withdrawn; stock halved
- Framing: "Danske Bank did not lack documentation. It lacked a living risk inventory"
- Sets up chapter purpose: what the inventory looks like, how it is built, how it is maintained

### Section 2: "Phase 4 in Context"
- Recaps Phases 1-3: context setting (Ch 5), dual-track identification (Ch 6-8), assessment (Ch 9-10)
- Phase 4 captures all work in structured, auditable, maintainable form
- "Documentation is not an administrative afterthought. It is the mechanism through which identification becomes institutional knowledge"
- "Institutional memory in banking has a half-life measured in bonus cycles"
- ISO 31010 transparency requirement cited as standards basis: "structured record not just of risks identified but also of information used, assumptions made, and limitations"

### Section 3: "The Risk Inventory: Fourteen Fields"
- Central register of all identified risks; living document not point-in-time snapshot
- 14 fields specified; integrates Ch 7's 11-field template and Ch 9's 7-field assessment record
- Full 14-field table with descriptions and source phases provided
- Detailed explanation of WHY each field matters with practitioner examples:
  - Risk ID: persistence across cycles, trend tracking
  - Taxonomy Classification: findability; JPMorgan London Whale callback (classification determines oversight)
  - Risk Definition: must be specific enough that two analysts would agree on materialisation
  - COSO Objective Category: prevents ignoring strategic/reporting/compliance risks
  - Risk Owner: named individual, Ch 3 principle enforced; "orphaned risks are invisible risks"
  - Inherent Risk Score: 4D with dominant dimension noted; preserves analytical richness
  - Control Summary: type + effectiveness; Ch 7 failure of "defaulting to effective" addressed
  - Residual Risk Score: gap between inherent/residual reveals control dependency
  - Material Y/N: gatekeeper for full treatment (profiles, bow-ties, KRIs, capital planning, Board)
  - Data Quality Rating: forces disclosure of evidence quality; Ch 9 three consequences made visible
  - Risk Interaction Summary: Ch 10 interaction matrix output; turns list into network; Lehman cascade callback
  - Key Risk Indicators: transforms inventory from periodic to continuous monitoring
  - Trend Indicator: answers Board's "is this getting better or worse?" question
  - Date of Last Review: creates accountability for currency; makes missed reviews visible to Internal Audit

### Section 4: "The Compliance Artefact Problem"
- Compliance theatre from Ch 7 called back and extended to inventory context
- Risk register with right columns but wrong content: generic definitions, stale assessments, no interaction data
- Standard Chartered 2023 callback: reconciliation documentation concealed absence of reconciliation
- 14-field structure designed to make absence of substance visible — empty fields, uniform ratings, static trends are all challengeable patterns

### Section 5: "Risk Profiles: The Material Risk Deep Dive"
- 14-element risk profile for 20-60 material risks
- All 14 elements listed with descriptions; integrates outputs from Ch 7 (driver fields), Ch 9 (scoring), Ch 10 (interactions, bow-ties, cost-benefit)
- CS experience: initial BU submissions were compliance theatre; first cycle required push-back; quality improved by third cycle through structure + challenge process
- **Dual purpose:** practitioner tool AND Board communication tool; principal risk report draws directly from profiles
- Board member should understand within 5 minutes: what the risk is, how bad it could get, controls, confidence, what changed
- **Bow-tie integration:** 5-10 most critical risks; referenced not reproduced (bow-ties are living documents); profile records review date, findings, barrier weaknesses

### Section 6: "The Audit Trail: Every Change Documented"
- Three elements for every change: Date, Author (with authority), Reason (with evidence reference)
- Mechanism for auditability — Internal Audit tests integrity; regulators examine provenance
- Creates institutional memory — "relying on the memory of individuals who may no longer be there"
- **Disagreement log** in inventory: minority view preserved, evidence basis documented, Board receives both views; "averaging destroys the signal"
- **Assumption register** in inventory: assumptions linked to risks they underpin; revisited in subsequent cycles per Ch 13

### Section 7: "The Inventory as Enterprise Infrastructure"
- 14-field structure is infrastructure connecting risk ID to management processes
- **Feeding principal risk report:** Ch 3's 10 items all drawn from inventory; "presentation layer over the inventory"
- **Feeding capital planning:** deferred to Ch 12; scenario linkage field is bridge; 4D scores inform severity; DQ Rating informs conservatism
- **Feeding regulatory reporting:** Ch 4 regulatory mapping table translates inventory; PRA/Fed examine inventory quality
- **Feeding ongoing cycle:** deferred to Ch 13; prior quarter inventory is baseline; retirements/additions/changes all documented

### Section 8: "What Good Looks Like — and What Bad Looks Like"
- Six observable characteristics of a **living inventory**: varying definitions, changing scores, distributed DQ ratings, populated interactions, staggered review dates, disagreement log with entries
- Six observable characteristics of a **compliance artefact**: uniform sentence structure, clustered middle scores, no Extreme ratings, uniform control effectiveness, blank interactions, same review date
- Difference is not structure but enforcement: challenge process (Ch 7), governance (Ch 3), audit (Ch 3)

### Section 9: "Documentation Failures in Practice"
- **AMP (PRIMARY):** fees for no service; complaints categorised as individual customer service issues; never aggregated as risk indicator; Royal Commission 2018; CEO resigned; AUD 600M; share halved
  - What was missing: KRIs on complaint volumes, aggregated complaints as risk indicator, DQ Rating forcing evidence disclosure
- **SNS Reaal (PRIMARY):** €7.4B CRE in subsidiary; subsidiary operated autonomously; concentration vs group capital not at enterprise level; nationalised Feb 2013; €3.7B; rebranded de Volksbank
  - What was missing: enterprise-level inventory consolidating subsidiary exposures, interaction summaries linking property concentration to group capital adequacy

### Section 10: "Inventory Governance"
- **Creation:** four routes (top-down, bottom-up, reconciliation, event-driven); Risk ID Lead ensures 14-field standard before entry
- **Modification:** risk owners propose, Risk ID Lead reviews; material changes (status change, score >1 level increase, DQ downgrade) require CRO approval + Board reporting
- **Retirement:** documented justification, Risk ID Lead approval (CRO for material), retired entries remain in archive; "an inventory that shrinks without documented retirements should be treated with suspicion"

### Section 11: "Technology and the Inventory"
- CS initial inventory built in spreadsheet — functional for early cycles
- Spreadsheet limitations: no referential integrity, no network queries, no role-based access control
- Technology principle: **design structure independently of technology** — define fields/profiles/audit trail/governance first, then select technology
- Ch 14 will address technology in detail

### Section 12: "The Living Document Standard"
- "Living" = changes, responds to new information, reflects current understanding
- Every field in 14-field structure designed to change — a field that never changes is not being maintained
- Mechanisms for keeping alive are Ch 13's ongoing cycle; governance is Ch 3; commitment must come from institution
- Closing: Danske, AMP, SNS Reaal all had documentation but not a living inventory
- Phase 4 complete
- Bridge to Ch 12: "how the inventory integrates with the institution's capital planning, strategic planning, regulatory reporting, and Board governance — the mechanisms through which risk identification becomes institutional action"

---

## Chapter 12 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_12.md`
**Word count:** ~5,160

### Section 1: "The Bank That Was Rescued Twice"
- Opens with Dexia — rescued 2008 (€6.4B capital + €150B guarantees), reconstituted risk framework, then failed again 2011 (broken up across Belgium/France/Luxembourg, orderly wind-down)
- Second failure: sovereign debt concentration (Greek/peripheral European bonds) + same wholesale funding maturity mismatch as 2008
- Risk identification existed after first rescue — sovereign positions visible, wholesale dependency documented — but outputs not integrated with capital planning, strategy, or Board governance
- "Dexia's reconstituted risk framework identified risks. It did not ensure that identified risks changed institutional behaviour."
- Phase 5 introduced: ensures inventory becomes institutional action through five integration points
- "Without Phase 5, the methodology produces a very sophisticated filing cabinet."

### Section 2: "Why Integration Is the Test of the Methodology"
- Rory's personal experience: institutions where risk ID and capital planning "operated as parallel universes" — one had 37 material risks in inventory but ICAAP addressed only 12
- ISO 31000 Principle b ("integral part of all organisational processes"), COSO Component 7 (Information & Communication), BCBS Principle 7 (outputs reach Board, inform capital) cited as standards basis
- Five integration points named: COSO ERM alignment, capital planning, strategic planning, regulatory reporting, Board reporting

### Section 3: "COSO ERM Framework Alignment"
- 8-component mapping table provided: Internal Environment→Phase 1, Objective Setting→Phase 1, Event Identification→Phase 2, Risk Assessment→Phase 3, Risk Response→Phase 3, Control Activities→Phase 2/3, Information & Communication→Cross-cutting/Phase 4, Monitoring→Phase 6
- Practical purpose: demonstrates framework compliance to regulators; answers both "does it map?" and "is it substantive?"
- Risk Identification Lead must maintain mapping as living document — update when process changes

### Section 4: "Capital Planning: ICAAP, ILAAP, and CCAR"
- Described as "single most consequential integration point"
- **Regulatory imperative:** PRA SREP (SS31/15) — Pillar 2A capital add-ons for deficient risk ID, scalars up to 40%; Fed CCAR (SR 15-18) — quarterly Material Risk Inventory with stress scenario linkage; BCBS Principle 7 — firm-wide identification
- CS callback: CRO required process to feed directly into CCAR submission; Material Risk Inventory became scenario design foundation
- **Six integration mechanisms:** (1) material risk → stress scenario mapping via scenario linkage field, (2) severity informed by 4D scores, (3) loss estimates traceable to inventory, (4) management judgement overlays with DQ-informed conservatism, (5) reverse stress testing (working backwards from inventory using Ch 10 interaction analysis), (6) specific risk categories requiring ICAAP/ILAAP attention (credit concentration, IRRBB, pension obligation, step-in, securitisation, excessive leverage, climate; ILAAP: intraday liquidity, contingent demands, currency mismatch)
- **Washington Mutual PRIMARY case study:** $307B assets, largest US bank failure; subprime/option ARM, "power of yes" culture; CERO marginalised, appetite limits raised to accommodate growth; risk identification outputs existed but severed from capital planning; seized by OTS September 2008, sold to JPMorgan Chase $1.9B
- "What was missing": integration framework with mandatory scenario linkage, DQ-informed conservatism, Board-level reporting of unlinked material risks

### Section 5: "The Regulatory vs Economic Risk Gap"
- Delivers on Ch 1 promise: Regulatory Arbitrage Masking → regulatory vs economic risk gap analysis
- **Four-step structured comparison:** (1) identify regulatory capital treatment (Pillar 1 standardised/internal models/Pillar 2A), (2) identify economic risk assessment from inventory (4D score, DQ, interaction analysis), (3) map the gap, (4) document and escalate to Board
- Ch 4 regulatory mapping table as translation mechanism; gap analysis as analytical output
- Gaps exceeding thresholds require Board acknowledgement + additional capital (Pillar 2A/management buffers)
- Standard Chartered ICAAP: Pillar 1 mapping, Pillar 2A gap closure — Rory's experience
- Step-in risk cited as example of risk outside standard regulatory perimeter requiring gap analysis
- Directly addresses regulatory arbitrage: structures minimising regulatory capital exposed by gap between regulatory treatment and economic assessment

### Section 6: "Strategic Planning: Risk Identification as Strategic Input"
- Critique: most institutions consult risk function late in strategic planning — "this sequence is backwards"
- Risk ID should inform strategy, not merely validate it
- **Three integration mechanisms:** (1) new product/market approval using same taxonomy/4D scoring/DQ/enterprise portfolio view (assessed in context of existing landscape, not isolation), (2) M&A due diligence with risk ID assessment and recalculated enterprise portfolio view, (3) risk appetite as strategic constraint (Ch 5: "specific and operational"; breaching requires Board-approved change)
- Cost-benefit assessment from Ch 10 referenced in strategic context
- **Bankia PRIMARY case study:** 7 struggling Spanish cajas merged 2010; concentrated property exposure aggregated without recapitalisation; no enterprise portfolio view of combined position; IPO 2011 with misrepresented financials; €22.4B bailout; Rodrigo Rato convicted; merged CaixaBank 2021
- "What was missing": M&A due diligence with risk ID framework — mapping target's risk profile, calculating combined enterprise portfolio view, identifying aggregated concentrations

### Section 7: "Regulatory Reporting: The Inventory as Submission Foundation"
- **Four regulatory reporting channels:** (1) principal risk disclosures (Annual Report/Pillar 3 — drawn directly from inventory material risks), (2) ICAAP/ILAAP submissions (risk inventory as foundation, scenario linkage, DQ-informed conservatism), (3) recovery plans (reverse stress testing scenarios from inventory/interaction matrix/enterprise portfolio view), (4) supervisory engagement (inventory grounds day-to-day engagement; regulatory mapping table from Ch 4 translates)
- COSO alignment mapping also serves regulatory function — demonstrates recognised framework compliance

### Section 8: "Board Reporting: The Principal Risk Report"
- Principal risk report = **"presentation layer over the inventory"** — one risk picture, not multiple versions
- Ch 3's 10 items restated consistently
- **Board substantive challenge** enabled by three features: (1) dominant dimension (Ch 9) — tells Board whether risk is financial/regulatory/reputational/customer-operational threat, (2) data quality distribution — confidence level in overall picture, challenge on Low-rated risks, (3) enterprise portfolio view — aggregate position against appetite, single most important item for Board governance
- **Risk appetite governance:** appetite tested against enterprise portfolio view at every reporting cycle; breaches escalated immediately; Board must act (reduce risk or adjust appetite with documented justification); appetite described as operational not aspirational

### Section 9: "Dexia Revisited: How Integration Would Have Changed the Outcome"
- Returns to opening hook; applies three Phase 5 requirements to Dexia:
  1. Mandatory scenario linkage — sovereign + wholesale funding → ICAAP stress scenarios
  2. Regulatory vs economic risk gap — sovereign zero risk weight vs economic concentration risk → Board escalation
  3. Board reporting with enterprise portfolio view — aggregate picture showing institution walking into same trap
- "Dexia's second failure was not a failure of identification. It was a failure of integration."

### Section 10: "The Integration Standard"
- Summary integration table: 6 integration points × regulatory basis × mechanism
- Risk ID Lead maintains integration points; CRO ensures functioning; Internal Audit tests substantive vs cosmetic
- Three closing failure archetypes: Dexia (comprehensive but disconnected from capital), WaMu (exists but overridden by culture), Bankia (strategic decision without risk ID)
- Phase 5 determines whether preceding work changes institutional outcomes or merely populates a register
- Bridge to Ch 13: "the ongoing cycle that keeps the inventory current: the quarterly re-identification, the annual full refresh, event-driven updates, and the internal audit assurance"

---

## Chapter 13 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_13.md`
**Word count:** ~4,700

### Section 1: "The Bank That Stopped Looking"
- Opens with Silicon Valley Bank — $209B assets, failed 10 March 2023, largest US bank failure since WaMu
- IRRBB accumulated as Fed raised rates 500bps in 2022-2023; $91B HTM portfolio; unrealised losses exceeded $15B (more than total equity)
- Deposit concentration in VC-backed tech firms; $42B withdrawn in one day after $1.8B AFS loss disclosure
- CRO departed April 2022, not replaced until January 2023 — 8 months during most consequential monetary policy shift in a generation
- "SVB did not fail because it lacked a risk identification process. It failed because the ongoing cycle... had degraded to the point of irrelevance."
- Framing: methodology produces comprehensive landscape at a point in time; this chapter describes what keeps it current

### Section 2: "Phase 6 in Context"
- Inventory begins to age the moment annual cycle concludes
- Standards basis: ISO 31000 Principle j (dynamic, iterative, responsive), COSO Component 8 (Monitoring), BCBS ongoing identification
- Four mechanisms at different frequencies: quarterly re-ID, annual full re-ID, event-driven updates, internal audit assurance
- Two cross-cutting enablers: training and awareness, framework monitoring
- Metaphor: "the difference between a photograph and a surveillance system"

### Section 3: "Quarterly Re-Identification"
- "The heartbeat of the ongoing process"; area where most institutions fall short
- Active re-identification per Fed SR 15-18, not passive review — Credit Suisse CCAR integration callback
- Six quarterly activities:
  1. PESTLE update (targeted, not full exercise)
  2. Straw man preparation (prior quarter inventory + PESTLE + event triggers + Delphi intelligence)
  3. Focused SWIFT workshop (2-3 hours, adapted guide words targeting changes, pre-workshop independent assessment retained)
  4. Four-dimensional re-assessment of all material risks (interaction matrix updated, bow-ties revisited)
  5. Data Quality Rating review (Low/Very Low improvement tracking, CRO approval for continued Very Low beyond two quarters)
  6. Assumption register revisited (test each assumption against current evidence)
- Output feeds Material Risk Inventory for capital planning; new risks added; reduced risks retained (no silent disappearance); KRI thresholds recalibrated
- Quarterly cycle: 2-3 weeks from PESTLE update to CRO sign-off
- Key distinction: "Re-assessment asks whether existing risks have changed. Re-identification asks whether the risk landscape has changed."

### Section 4: "Annual Full Re-Identification"
- Full methodology re-executed from scratch — all six phases
- Compliance theatre callback from Ch 7: roll-forward is "dangerous because it creates a documented record that identification has occurred"
- Six annual requirements: taxonomy review/update (Board approval), fresh top-down and bottom-up (not rolled forward), recalibrated materiality/appetite, refreshed internal environment (7 COSO elements), full reconciliation (5 steps from Ch 8), updated enterprise portfolio view (including cost-benefit/ALARP from Ch 10)
- Annual cycle as mechanism for preventing Complacency failure mode (Ch 1)

### Section 5: "Monthly KRI Monitoring"
- KRIs from risk inventory (Ch 11) with green/amber/red thresholds
- "KRI monitoring is not identification — it is surveillance"
- Amber → investigation; Red → CRO/Board escalation; multiple amber across related risks → event-driven update warranted
- Generates trend data feeding quarterly and annual cycles; trend indicator (Increasing/Stable/Decreasing) derived from this data

### Section 6: "Event-Driven Updates"
- Six trigger categories: (1) material loss/near-miss, (2) external environment change, (3) new business/product/market, (4) M&A/restructuring, (5) material control failure, (6) material outsourcing change
- Both backward-looking (root cause) and forward-looking (scenario analysis, horizon scanning) required
- New products assessed before launch (AMLD6 basis, extended to all risk types)
- M&A as high-risk trigger — Bankia callback from Ch 12
- **NAB Australia (supporting case):** failed to learn from CBA's AUD 700M AUSTRAC fine 2018; analogous AML gaps; proceedings 2020; peer institution failure as missed event-driven trigger
- **CBA (brief):** AUD 700M, 53,000+ unreported transactions; referenced as trigger NAB should have processed
- Key principle: "material events at peer institutions are treated as event-driven triggers for internal re-identification"

### Section 7: "Internal Audit Assurance"
- Third line of defence over process itself — does not identify, participate, or score
- Seven audit areas: (1) completeness vs taxonomy/regulations, (2) assessment quality/consistency across BUs (Ch 7 three failure fields referenced), (3) reconciliation effectiveness, (4) DQ Rating appropriateness (three consequences applied), (5) documentation/audit trail adequacy, (6) capital planning integration, (7) continual improvement loop
- Findings reported to Board Audit Committee and Board Risk Committee
- "A finding that the risk identification process has degraded is itself a material risk"

### Section 8: "Training and Awareness"
- Training programme at five levels: Board, CRO/Risk ID Lead, BU Heads/Risk Assessors, Front-Line Employees, Internal Audit — content and frequency specified in table
- Scoring calibration exercises: annual, all assessors independently score sample risks, systematic differences identified and resolved
- Awareness activities: industry loss database case studies, post-cycle communications, recognition of high-quality contributions

### Section 9: "Framework Monitoring and Continual Improvement"
- Management's own self-improvement loop (distinct from Internal Audit); ISO 31000 Sections 4.5-4.6
- Seven process performance indicators in table: BU completion (100%), active owners (100%), reclassified per cycle (trend), new risks per cycle (trend), time to inventory (<10 days), satisfaction (trend), improvement actions (trend)
- "No new risks across three consecutive quarterly cycles" = likely compliance theatre
- Lessons-learned review at conclusion of each annual cycle; actions assigned to named owners, tracked to completion

### Section 10: "Silicon Valley Bank: When the Ongoing Cycle Fails"
- Full retrospective methodology application to SVB:
  - Quarterly re-ID would have flagged IRRBB from Q1 2022; each Fed rate increase in PESTLE update; SWIFT prompts targeting changes; 4D showing Impact/Speed/Vulnerability all increasing
  - Event-driven updates triggered by every FOMC rate increase; deposit base shift warranted business model analysis
  - Monthly KRI would have shown unrealised losses drifting green→red throughout 2022
  - Internal environment: CRO vacancy, 7 COSO elements compromised
  - Internal Audit should have identified degraded ongoing cycle
- "A $209 billion illustration of the Complacency failure mode from Chapter 1"
- **Signature Bank (supporting):** $110B, failed 12 March 2023; crypto deposit concentration; TerraUSD/Celsius/FTX collapses as missed event-driven triggers; third-largest US bank failure
- Key principle: "the ongoing cycle is not an administrative afterthought. It is the mechanism that determines whether the methodology continues to protect the institution"

### Section 11: "The Bridge to Technology"
- Ongoing cycle generates enormous data volume
- Ch 14 will examine how AI, ML, NLP, and data analytics enhance the process
- Three technology applications previewed: automating event-driven trigger surveillance, identifying patterns human analysts might miss, scaling across multi-entity institutions

---

## Chapter 14 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_14.md`
**Word count:** ~4,950

### Section 1: "The Question That Should Trouble Every Risk Function"
- Opens with Wirecard callback as thought experiment — NLP scanning of financial media would have surfaced FT's investigative journalism from 2015
- Basic NLP system monitoring curated financial news sources for risk-related keywords would have flagged reporting to risk identification function
- "None of this happened. Not because the technology did not exist... It did not happen because the institutions had not integrated technology into their risk identification methodology."
- Chapter scope defined: how AI, ML, NLP, and data analytics *enhance* the six-phase methodology
- "Technology is a cross-cutting enabler. It is not a seventh phase."
- Three capabilities: extend reach/speed of human analysis, automate surveillance, detect patterns beyond human cognitive capacity, scale across multi-entity institutions

### Section 2: "Why Technology Comes After Methodology, Not Before"
- Ch 11 principle restated: inventory structure designed independently of technology
- Common failure: institutions buy GRC platform, configure vendor defaults, declare they have a process — "They do not. They have a technology platform."
- Credit Suisse callback: built initial inventory in spreadsheet, refined through three complete cycles, then specified technology requirements with full understanding of needs
- Institutions that buy platform first discover "two years and several million dollars later, that they have an expensive repository with no process to fill it"

### Section 3: "Technology Across the Six Phases"
- Phase-by-phase mapping of highest-value technology applications:
  - **Phase 1:** NLP-powered PESTLE scanning (thousands of sources simultaneously); data analytics for starting universe (pattern detection in internal loss/near-miss data, ORX correlation)
  - **Phase 2:** Automated briefing pack generation (regulatory announcement tracking); NLP analysis of bottom-up submissions (quality indicators — driver field emptiness, verbatim copying, default "effective" ratings, identifying compliance theatre patterns)
  - **Phase 3:** Anomaly detection in risk scoring (cross-BU scoring inconsistencies, DQ/control mismatch flags); predictive analytics (historical pattern recognition for emerging risk signals)
  - **Phase 4:** Automated inventory maintenance (audit trails, mandatory field enforcement, trend calculation, review date alerts)
  - **Phase 5:** Dashboard reporting (real-time heatmaps, concentration maps, trend charts, appetite breach alerts)
  - **Phase 6:** Real-time event-driven trigger monitoring — four specific applications: external environment NLP scanning, KRI threshold monitoring with automated escalation, peer institution event detection, transaction anomaly detection
- Phase 6 described as "where technology delivers its most distinctive value" — continuous 24/7 monitoring exceeding human capacity

### Section 4: "The Four Core Technology Applications"
- **NLP:** scanning regulatory publications, news feeds, social media, internal documents; identifies signals not risks — human judgement determines relevance
- **ML/Predictive Algorithms:** pattern detection trained on historical loss data; adds most value for starting universe, KRI monitoring, scoring calibration; limitation: trained on historical data only, "cannot identify risks that fall outside its training data" — Delphi Method exists for this reason
- **Anomaly Detection:** unusual patterns in transaction data, trading activity, system logs; limitation: needs baseline, industry loss database extends detection beyond institution's own experience; PNB case referenced
- **RPA:** automation of data gathering, template population, threshold monitoring, report generation; limitation: "automates tasks, does not perform analysis" — automated template population is data entry not identification, compliance theatre warning from Ch 7 applied

### Section 5: "Data Management Infrastructure: The Foundation Beneath the Technology"
- Without data infrastructure, AI/ML unreliable, anomaly detection generates false positives, NLP surfaces noise
- BCBS 239 referenced: published 2013, January 2016 deadline for G-SIBs, material gaps persist decade later
- Seven data management components defined in table: data governance, data quality controls, data security, data integration, master data management, data lifecycle management, data auditing
- CRO responsible — "not an IT responsibility — it is a risk management responsibility that requires IT capabilities"
- Data management deficiencies recorded as findings in risk inventory, tracked to remediation
- **Equifax (supporting):** 2017, failed to patch known Apache Struts vulnerability for two months, 147M consumer records exposed, $1.38B settlement, CEO/CIO/CISO departed; software patching treated as routine IT not critical risk; data management infrastructure assessment would have identified gap

### Section 6: "GRC Platforms: From Spreadsheets to Systems"
- Credit Suisse spreadsheet callback from Ch 11 — right decision at the time, wrong long-term solution
- Five spreadsheet limitations detailed: no referential integrity (orphaned risk owners), no network queries (interaction analysis impossible), no role-based access control, no concurrent access control, no automated audit trail
- GRC platform described: structured database for risk management workflows — configurable taxonomy, workflow-driven cycles, automated KRI monitoring, interaction mapping, dashboard reporting, role-based access, audit trails
- Seven selection criteria: (1) taxonomy flexibility (L1/L2/L3), (2) assessment methodology support (4D + dominant dimension), (3) reconciliation workflow (five-step from Ch 8), (4) risk interaction mapping (directional matrix from Ch 10), (5) integration capability (source systems to downstream consumers), (6) audit trail (date/author/reason automatic), (7) regulatory reporting (regulatory mapping table from Ch 4)
- "The critical requirement is that the platform is configured to match the methodology — not the other way around"

### Section 7: "When Technology Creates the Risk: Knight Capital and the 45-Minute Catastrophe"
- **Knight Capital (PRIMARY):** 1 August 2012; software deployment activated dormant legacy code; millions of erroneous trades across 148 stocks on NYSE in 45 minutes; $460M losses; firm had $365M equity — lost more than entire capital base
- Root cause: change management failure; no regression testing against dormant code paths; no automated kill-switch for position accumulation at algorithmic speed
- "Technology is simultaneously an enabler of risk identification and a source of the risks being identified"
- Methodology would have required: ICT sub-process (Ch 7) including algorithmic systems in asset inventory; FMEA on deployment process; KRI framework (Ch 13) with real-time position thresholds; 4D assessment scoring speed of onset as "Immediate" — when Immediate and controls untested at that speed, Vulnerability cannot be "Low"
- Acquired by Getco (now Virtu Financial) 2013; firm ceased to exist

### Section 8: "When Systems Cannot Talk to Each Other: Punjab National Bank"
- **PNB (supporting):** 2011-2018; rogue employee at Brady House branch Mumbai; unauthorised Letters of Undertaking via SWIFT system to Nirav Modi companies; $2B contingent liabilities; SWIFT operated independently of Core Banking System (CBS)
- SWIFT messages creating liabilities sent without CBS entries; periodic reconciliations not performed or ineffective; $2B guarantees in one system, invisible in the other; seven-year fraud
- Data integration failure — methodology's master data management and data auditing requirements specifically designed to prevent this
- ICT sub-process question: "are all systems that create financial commitments integrated with the systems that record them?"
- Aftermath: largest Indian banking fraud; Nirav Modi extradited; RBI mandated SWIFT-CBS integration across entire Indian banking system

### Section 9: "Ethical and Regulatory Guardrails"
- Four guardrails: (1) bias testing across portfolios/geographies/segments, (2) transparency/explainability — black-box models not acceptable for regulatory-facing assessments without model risk governance, (3) data privacy (GDPR), (4) model risk — AI/ML models subject to Ch 7 model risk framework, independent validation, performance monitoring, revalidation when conditions change
- "The consequences of a risk identification model producing false reassurance are at least as severe as the consequences of a pricing model producing an incorrect valuation"

### Section 10: "The Implementation Pathway"
- Six-step structured pathway: (1) feasibility assessment, (2) data preparation, (3) algorithm selection, (4) pilot testing, (5) full deployment, (6) ongoing monitoring
- "Deploying ML on unreliable data produces unreliable outputs with a veneer of analytical sophistication — the technology equivalent of compliance theatre"
- Data Quality Ratings from risk inventory (Ch 9) provide honest readiness assessment
- Pilot with single BU or single phase; measure detection effectiveness AND false positive rate
- Ongoing monitoring applies Ch 13 ongoing cycle to technology itself

### Section 11: "What Technology Does Not Replace"
- Technology does not replace: SWIFT workshops, Delphi panels, reconciliation, political dynamics of risk ownership, judgement
- "The most dangerous outcome of technology investment in risk identification is not failure — it is misplaced confidence"
- "The institutions that deploy technology most effectively are those that have a functioning methodology first"
- "The first group uses AI to enhance human judgement. The second group uses AI to avoid exercising it."

### Section 12: "The Bridge"
- Technology operates within a regulatory environment defining minimum standards
- Next chapter maps "the sixteen frameworks across jurisdictions" — specifically named: Fed SR 15-18, PRA SS31/15, ECB SREP, EBA Guidelines on ICT risk
- Ch 15 will examine requirements, map to six phases, provide regulatory traceability

---

## Chapter 15 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_15.md`
**Word count:** ~5,380

### Section 1: "Show Me Your Regulatory Traceability"
- Opens with Rory at Standard Chartered 2023 — PRA supervisor asks "Walk me through how your risk identification process satisfies SS31/15"
- Methodology designed with regulatory traceability built in; "I needed only to open the regulatory mapping appendix"
- Most institutions lack the bridge between their process and regulatory requirements
- Sixteen distinct frameworks across multiple jurisdictions — "overlap, sometimes reinforce each other, and occasionally pull in different directions"
- Chapter delivers the mapping between methodology and all sixteen frameworks
- No PRIMARY case study — opening is Rory's practitioner experience

### Section 2: "The Sixteen Frameworks"
- Four jurisdictional tiers defined: Global BCBS (3), EU (8), UK (3), US (2) = 16
- Full overview table with all 16 frameworks, jurisdiction, and core risk ID requirement
- Three foundational standards (ISO 31000, ISO 31010, COSO ERM) described as covered in Ch 2 — the sixteen are the regulatory instruments mandating how those standards are applied in practice
- "They are the frameworks that mandate, constrain, and shape how institutions identify their risks" — echoes Ch 14 bridge language

### Section 3: "The Global Baseline: What the Basel Committee Requires"
- BCBS Corporate Governance Principles — Principle 7: "Risks should be identified, monitored and controlled on an ongoing bank-wide and individual entity basis" — four key words parsed (ongoing, bank-wide, individual entity, identified)
- M&A, new products, organisational changes = event-driven triggers → Ch 13 Phase 6
- BCBS 239: published 2013, deadline Jan 2016 G-SIBs, material gaps persist decade later; Principle 4 Completeness → Ch 11's 14-field inventory; Principle 7 Accuracy → Ch 9's DQ Rating; ad-hoc capability → Phase 6 event-driven
- BCBS PSMOR (revised 2021): RCSA, KRIs, external loss data, business process mapping, event management; near-miss requirement introduced (lagging → leading); ICT/third-party emphasis → Ch 7 specialist sub-processes

### Section 4: "The European Union: The Layered Architecture"
- Eight EU frameworks described as "layered complexity": CRR (directly applicable), CRD (national transposition), EBA guidelines
- **CRR III / CRD VI** (2024): Output Floor = dual view of risk (internal models vs standardised); CRD VI mandates ESG as drivers of traditional risk types → Ch 5 transmission channels
- **EBA Internal Governance (GL/2021/05)**: holistic view (Section 17) → Ch 8 enterprise portfolio view; unapproved exposures (Section 20.4) → Phase 6 KRI; ML/TF in enterprise risk inventory; M&A and new product identification
- **ECB SREP**: ~110 significant institutions; comprehensive inventory + materiality determination → Ch 9 4D assessment; Credit Suisse callback — FINMA SREP-equivalent alongside Fed CCAR and PRA; supervisory consequences: increased capital, restrictions, remediation
- **DORA (EU 2022/2554)**: January 2025; Article 8 quoted; "asset-level identification" not just risk-level; ICT asset to CIF dependency mapping; Register of Information for ICT third-party providers; concentration risk in cloud supply chain → Ch 7 ICT sub-process + Ch 14 data management + enterprise portfolio view
- **EBA Outsourcing (GL/2019/02)**: pre-outsourcing risk assessment; CIF classification; concentration at provider + sector level → Ch 7 third-party sub-process
- **EBA ESG (GL/2024/01)**: applicable 2026/2027; transmission channels mapping; new data (geolocation, carbon intensity); three time horizons (1-3yr, 3-10yr, 10-30yr) → Ch 5 framework; ECB Guide on Climate-Related and Environmental Risks (2020) referenced as predecessor
- **EBA ICT (GL/2019/04)**: preceded DORA; information asset inventory; annual ICT risk assessment; ICT risks in same taxonomy/scoring as all other risks → Ch 7 ICT sub-process prevents technology silo
- **EU AMLD6**: enterprise-wide ML/TF risk assessment across four vectors (customers, countries, products, channels); transaction data vs national risk assessments → Ch 7 AML/CFT sub-process; new product ML/TF assessment before launch

### Section 5: "The United Kingdom: Accountability and Proportionality"
- Three UK characteristics: personal accountability (SM&CR), proportionality, willingness to lead on emerging risk types
- **PRA SS31/15**: stress testing as primary identification method; reverse stress testing explicitly expected → Ch 12 capital planning + Ch 10 interaction analysis; Pillar 2A scalars up to 40% — "not a theoretical penalty"; Rory's institutions received supervisory feedback citing specific gaps
- **PRA Step-In Risk (PS5/25, 2025)**: non-contractual support obligations to unconsolidated entities; difficult because not in legal agreements → Ch 4 taxonomy (L1 category) + Ch 5 internal context
- **FCA Conduct Risk — Five Conduct Questions**: "what incentives could lead to poor customer outcomes?"; desk-by-desk identification of conduct drivers → Ch 7 conduct risk sub-process; product governance at design stage
- **SM&CR**: personalises responsibility; Statement of Responsibilities; "reasonable steps" defence = documented risk ID process

### Section 6: "The United States: Capital Planning as Risk Identification"
- **Fed SR 15-18**: quarterly (not annual) risk ID feeding capital planning; Material Risk Inventory — every risk mapped to stress test (captured in scenario? in P&L model? capital add-on?); "map to capital" ensures no risk left unfunded; Credit Suisse CCAR callback — CRO mandated bidirectional linkage between inventory and scenarios → Ch 12 integration architecture
- **OCC Heightened Standards (12 CFR Part 30, App. D)**: front-line units responsible for risk assessment in their activities, cannot delegate → Ch 7 bottom-up track; "effective challenge" — IRM independently assesses aggregate risks, divergence must be reported → Ch 8 top-down/bottom-up reconciliation

### Section 7: "The Regulatory Traceability Matrix"
- Full 16×6 table mapping all sixteen frameworks to all six phases — "the regulatory traceability that every supervisor will demand"
- Ch 2's phase-to-standards table + Ch 15's regulatory traceability matrix work "together"
- **Regulatory vs economic risk gap analysis** (Ch 12) connected: sixteen frameworks = "regulatory" half; methodology's 4D assessment = "economic" half; divergences escalate to Board; regulatory mapping table translates between views; sovereign zero risk weight vs economic concentration risk example

### Section 8: "The Regulatory Taxonomy Divergence Problem"
- Regulators categorise risks differently: Basel (3 Pillar 1 + broad Pillar 2), EBA (ICT, ESG, ML/TF granularity), PRA (step-in risk unique), Fed CCAR (stress-scenario-aligned typology), FCA (behavioural conduct lens)
- Internal taxonomy must be one coherent structure translatable to each regulator
- Ch 4 regulatory mapping table as solution: maps every internal L1/L2/L3 node to each regulator's categories
- Risk ID Lead responsible for currency; new regulatory category → mapping table update; gap = taxonomy amendment finding
- Credit Suisse callback: London/PRA, Zurich/FINMA, US/Fed; IB 47 categories, Swiss 23, PB 31; regulatory mapping table enabled multi-jurisdictional compliance without three separate processes

### Section 9: "One Process, Multiple Jurisdictions"
- European bank example: eurozone HQ (ECB SREP, CRR III/CRD VI, all EBA guidelines) + London subsidiary (PRA SS31/15, step-in risk, SM&CR, FCA conduct) + New York branch (Fed SR 15-18, OCC Heightened Standards)
- Three mechanisms: (1) single process with jurisdictional overlays — same six phases, different content within; (2) regulatory mapping table translating taxonomies; (3) enterprise portfolio view satisfying all consolidation requirements simultaneously
- Standard Chartered $667M sanctions callback — fragmented multi-jurisdictional risk ID → "one process with jurisdictional overlays" prevents this

### Section 10: "The Consequences of Failure"
- PRA SS31/15: Pillar 2A capital add-ons, scalars up to 40% — billions of additional capital; "permanent drag on economics until remediated"
- Fed SR 15-18: CCAR qualitative objection — blocks share buybacks and dividend increases; "a market event"
- SM&CR: individual enforcement — fines, prohibition, public censure
- "The regulator does not penalise the crystallisation of risk — risk is inherent in banking. The regulator penalises the failure to identify it."
- Traceability matrix = evidence, not compliance artefact

### Section 11: "The Bridge"
- Sixteen frameworks developed in response to bank failures — Basel III from 2008 crisis, DORA from digital disruption recognition, SM&CR from accountability void at HBOS/RBS
- Ch 16 will examine "179 bank failures spanning six decades and thirty countries" — recurring failure modes and "what a structured risk identification methodology would have caught"
- "The regulations tell institutions what they must do. The evidence tells them why."

---

## Chapter 16 — Detailed Content Summary

**File:** `/home/rory/EONRiskServices/book/chapter_16.md`
**Word count:** ~4,100

### Section 1: "The $2.3 Trillion Evidence Base"
- Opens with the aggregate cost: $2.3 trillion across 179 failures, six decades, thirty countries
- Forensic tool framing: for each entry, asked "was the risk identifiable before the loss materialised?" — answer always yes
- Delivers Ch 15 bridge verbatim: "The regulations tell institutions what they must do. This chapter presents the evidence that tells them why."
- Database statistics: credit risk 42% / $1.37T (largest by dollar); operational risk 43% / $626B (largest by frequency); conduct risk 7% / $97B
- Temporal: 2000s 44% (GFC: 63 entries / $1.5T); 2010s 47%; post-crisis reforms changed character of failures not eliminated them
- Geographic: Europe 54%, North America 30%, spans all regions — structural problem not single-regime problem
- COSO category: Strategic 41%, Operations 22%, Compliance 19%, Reporting 18% — Strategic dominance = evidence basis for dual-track approach and top-down workshops (Ch 6)
- All ten failure modes listed by name as chapter's analytical framework

### Section 2: "The Concentration Trap"
- Concentration Blindness described as "single most destructive failure mode"
- **Alpha Bank (PRIMARY):** eurozone sovereign debt concentration; CRR zero risk weight masked concentration; €12.9B recapitalisation; regulatory vs economic risk gap analysis (Ch 12) would have caught; "transcribing regulatory assumptions" vs identifying risks
- **Bank of Cyprus (brief):** 47.5% bail-in on uninsured deposits; same sovereign blind spot
- **Countrywide (PRIMARY):** originate-to-distribute illusion; securitisation transferred asset not risk; retained tranches/warehouse lines/reps-and-warranties; $4B acquisition cost BofA $40B+; assumption register would have captured securitisation assumption; SWIFT would have asked "what are we assuming about the securitisation market that might not be true?"
- Callbacks: Northern Rock (75% wholesale), AIG ($500B CDS), Citigroup (SIV), Icelandic Banks (10x GDP), Bankia (€22.4B cajas merger)
- Enterprise portfolio view (Ch 8), concentration analysis three forms (Ch 10), PESTLE (Ch 5), assumption register (Ch 6) all referenced as methodology responses

### Section 3: "Models, Ratings, and False Precision"
- Model Overreliance described as producing "most intellectually sophisticated losses" — institutions that fall are often most analytically advanced
- **LTCM (PRIMARY):** Nobel Prize founders; 25:1 leverage; VaR assumed stable correlations and available liquidity; Russian crisis 1998 correlations spiked to one; "single concentrated bet on market normality"; $3.6B Fed-brokered bailout; "not a calculation error — structural inability to capture regime shift"; scenario analysis and speed-of-onset dimension would have caught
- **Merrill Lynch (PRIMARY):** $40B+ super-senior CDO tranches; AAA rating accepted as sufficient; no independent analysis of systemic housing collapse scenario; $51.8B write-downs; emergency sale to BofA; "an external credit rating is not a risk assessment. It is a single input to a risk assessment"
- Independent challenge requirement (Ch 9), 4D assessment framework, Data Quality Rating conservatism adjustment all referenced
- DQ Rating of Low = cannot support low impact/likelihood without CRO approval

### Section 4: "When Governance Fails"
- Governance Bypass, Cultural Suppression, Information Asymmetry grouped — common root: risk was identified/identifiable but institutional mechanisms broken
- **Standard Chartered (PRIMARY):** governance bypass in purest form; compliance identified sanctions risk; $250B Iranian transactions flagged; senior management overruled; "risk was identified. The governance framework failed to protect the identification output"; $667M fine
- Three forms of independence (Ch 3), principal risk report to Board unfiltered, Risk ID Lead authority to record regardless of BU objections all referenced
- **Credit Suisse Mozambique (PRIMARY):** $2B hidden loans to Mozambican state entities; military borrowers; kickbacks; secrecy; sovereign lending risk ID focused on credit not corruption risk; $475M SEC/DOJ settlement; new-product approval process would have surfaced red flags; contributed to CS eventual demise
- Phase 1 internal environment assessment (7 COSO elements), event-driven trigger for new business structures (Ch 13) referenced
- **ICBC (PRIMARY):** world's largest bank by assets; NPL from policy-directed lending to SOEs/LGFVs; state industrial policy overrides risk function; NPL recognition delayed by regulatory forbearance and evergreening; dual role of state banks as commercial and policy instruments; BCBS Principle 7 independence "fundamentally compromised"

### Section 5: "What the Risk Framework Could Not See"
- Silo Thinking and Emerging Risk Blindness grouped — risk exists but falls outside identification process boundaries
- **Lloyd's of London (PRIMARY):** $5.6B September 11 claims; individual syndicates covered property/liability/aviation/business interruption separately; no market-level aggregate exposure; catastrophe models excluded coordinated terrorist attack scenario; "insurance equivalent of the Citigroup SIV pattern"
- Enterprise portfolio view four assessments (Ch 8/10), SWIFT guide word "Where are the gaps between..." referenced
- **UBS tax evasion (PRIMARY):** €4.5B French fine (largest tax evasion penalty in French history); Swiss-based RMs solicited undeclared accounts in France; cross-border model treated as normal strategy; conduct risk not identified as distinct category
- **Lloyds PPI (PRIMARY):** £22B industry-wide redress; Lloyds £12B largest share; PPI as profitable cross-selling; sales incentive structures not identified as conduct risk drivers; customer suitability not in taxonomy; detriment accumulated because "taxonomy did not include a place to look"
- Ch 4 Taxonomy Test applied retrospectively: PPI doesn't map without conduct risk; UBS doesn't map under sales/marketing; Lloyd's doesn't map without enterprise concentration view — "reveals the structural gap that enabled the loss"
- Delphi Method (Ch 6), Wirecard callback (FT/short-sellers, BaFin, €1.9B)

### Section 6: "The Complacency Cycle"
- Complacency and Control Environment Failure grouped — develop over extended periods of apparent success; "quarterly re-identification cycle becomes a roll-forward exercise"
- **Bear Stearns (PRIMARY):** June 2007 hedge fund collapse = direct explicit warning; treated as isolated subsidiary event; parent collapsed from same concentration 9 months later; event-driven trigger framework (Ch 13) — material loss/near-miss is first of six triggers; "not an ambiguous signal"
- **American S&L (PRIMARY):** 1980/1982 deregulation; aggressive growth without identifying altered asset-liability risk profile; seized FSLIC 1988; $5.4B; complacency bred by structural change
- SVB callback: 500bps rate increases over 18 months, CRO vacant 8 months, $91B HTM portfolio
- Signature Bank callback: three missed event-driven triggers in six months (TerraUSD May, Celsius June, FTX November 2022)
- NAB callback: CBA AUD 700M AUSTRAC fine as peer institution event-driven trigger
- Ch 13 process performance indicator quoted as complacency diagnostic

### Section 7: "What the Methodology Catches"
- Maps all six phases to specific failure patterns with institutional illustrations:
  - Phase 1: PESTLE (S&L crisis, eurozone, GFC conditions), internal environment (Anglo Irish, HBOS, CS), multi-dimensional impact (AIG, Merrill)
  - Phase 2: SWIFT (Archegos, Countrywide, Bear Stearns), bottom-up (Wells Fargo, StanChart, AIB/Allfirst), Delphi (Wirecard)
  - Phase 3: 4D scoring (AIG across dimensions), DQ Rating (rating agencies, benign calibration), independent challenge (LTCM, UBS 2008)
  - Phase 4: 14-field inventory (Lehman causal chains), enterprise inventory (Danske, AMP, SNS Reaal), audit trail (compliance theatre)
  - Phase 5: capital planning (WaMu, Dexia), regulatory gap analysis (Greek sovereign zero risk weight), strategic planning (Bankia merger)
  - Phase 6: quarterly re-ID (SVB), event-driven triggers (Bear Stearns, Signature, NAB), internal audit (process degradation detection)

### Section 8: "The Common Thread"
- "The institution did not have a process designed to find the risks it was exposed to."
- Four categories of failure: risk register without methodology, processes undermined by governance, analytical capabilities not applied to identification, processes that degraded over time
- "The losses were not inevitable. They were preventable."
- Book summation: Ch 2 standards architecture, Ch 3-14 six-phase methodology, Ch 15 sixteen regulatory frameworks, Ch 16 evidence validation
- Three foundations restated: standards = architecture, regulation = mandate, evidence = reason
- "built it twice — at Credit Suisse and at Standard Chartered"
- Closing: "The evidence is clear. The methodology is available. The only remaining question is whether the institution has the will to implement it."

---

## Next Step

**ALL 16 CHAPTERS ARE NOW WRITTEN.**

The book's content chapters (1-16) are complete. Next steps for the project:
1. **Appendices** — Draft 3 has Appendices A-J that may need to be adapted for the book
2. **Review pass** — read all 16 chapters sequentially for continuity, tone consistency, and commitment fulfilment
3. **Word count check** — total across all chapters should be ~65,000-80,000 words (current estimated total: ~78,540)
4. **Compile** — assemble chapters into final manuscript format

To start a review pass: read each chapter file sequentially and check against this context file for consistency.

---

## Other Completed Work (non-book)

### Industry Loss Database (COMPLETE)
- Script: `reference/Procedures/build_loss_database.py`
- Enrichment: `reference/Procedures/enrichment_data.py`
- Outputs: `.xlsx`, `.csv`, `_Summary.md` in `reference/Procedures/`
- Stats: 179 entries, 17 fields, $2.3T, 30+ countries, 6 decades, 19 priority, 10 failure modes

### Website (COMPLETE)
- Location: `/home/rory/EONRiskServices/website/`
- All pages updated with loss database content
- Preview: `python3 -m http.server 8787` from website dir
