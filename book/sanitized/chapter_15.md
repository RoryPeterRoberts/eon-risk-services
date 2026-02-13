# Chapter 15: The Regulatory Landscape

## Show Me Your Regulatory Traceability

At a UK-regulated international banking group in 2023, I sat across the table from a PRA supervisor who opened a thick examination file and asked a single question: "Walk me through how your risk identification process satisfies SS31/15."

The question was simple. The answer, for many institutions, would not have been.

The supervisor was not asking whether we identified risks. Every bank identifies risks. She was asking whether the process that produced those identifications could be traced — requirement by requirement — to the specific provisions of the regulatory framework under which the institution was supervised. Could I point to the section of our process that delivered what SS31/15 required? Could I demonstrate that the output met the standard's expectations for comprehensiveness, for forward-looking identification, for stress testing as an identification tool?

I could. Not because I had prepared for the question, but because the methodology had been designed with regulatory traceability built in from the start. The risk identification process at the second institution mapped every major regulatory requirement to a specific phase and activity within the methodology. When the supervisor asked, I did not need to construct an answer — I needed only to open the regulatory mapping appendix.

Most institutions cannot do this. They have a risk identification process. They have a long list of regulations they are subject to. What they lack is the bridge between the two — a systematic mapping that demonstrates, for each applicable framework, exactly how the process satisfies its requirements.

This gap matters. It matters because the regulatory landscape for bank risk identification is not a single framework. It is sixteen distinct frameworks across multiple jurisdictions — global standards from the Basel Committee, EU directives and EBA guidelines, PRA supervisory statements, US supervisory letters, and FCA conduct guidance — each imposing specific requirements that the identification process must satisfy. For an institution operating across the European Union, the United Kingdom, and the United States, these requirements overlap, sometimes reinforce each other, and occasionally pull in different directions. A methodology that satisfies one framework but ignores another is a methodology that will fail its next regulatory examination.

This chapter maps the sixteen regulatory frameworks that govern bank risk identification, examines what each requires, and demonstrates how the methodology presented in this book satisfies all of them simultaneously. It is the chapter that answers the supervisor's question before she asks it.

## The Sixteen Frameworks

The sixteen frameworks fall into four jurisdictional tiers. The first tier — global standards issued by the Basel Committee on Banking Supervision — sets the baseline that all jurisdictions adopt and extend. The second tier — European Union regulations and EBA guidelines — transposes and elaborates these standards into a prescriptive legal architecture of extraordinary depth. The third tier — United Kingdom PRA supervisory statements and FCA guidance — applies a principles-based but increasingly detailed approach with personal accountability. The fourth tier — US Federal Reserve supervisory letters and OCC guidelines — imposes arguably the most operationally prescriptive requirements through the capital planning process.

| # | Framework | Jurisdiction | Core Risk Identification Requirement |
|---|---|---|---|
| 1 | BCBS Corporate Governance Principles — Principle 7 | Global | Bank-wide, ongoing risk identification |
| 2 | BCBS 239 — Risk Data Aggregation | Global | Data completeness, accuracy, aggregation capability |
| 3 | BCBS PSMOR — Operational Risk | Global | RCSA, KRIs, external loss data, near-miss identification |
| 4 | CRR III / CRD VI — The Banking Package | EU | ICAAP, ESG integration, consolidated identification |
| 5 | EBA Internal Governance (GL/2021/05) | EU | Holistic risk view, M&A identification, AML/CFT integration |
| 6 | ECB SREP Methodology | EU/SSM | Comprehensive risk inventory, materiality determination |
| 7 | DORA (EU 2022/2554) | EU | ICT asset identification, dependency mapping, third-party register |
| 8 | EBA Outsourcing Guidelines (GL/2019/02) | EU | Pre-outsourcing risk assessment, concentration risk |
| 9 | EBA ESG Risk Guidelines (GL/2024/01) | EU | Transmission channels, multi-horizon identification |
| 10 | EBA ICT and Security Risk (GL/2019/04) | EU | ICT risk classification, information asset inventory |
| 11 | EU AMLD6 — Anti-Money Laundering | EU | Enterprise-wide ML/TF risk assessment |
| 12 | PRA SS31/15 — ICAAP | UK | Comprehensive identification, stress testing, reverse stress testing |
| 13 | PRA Step-In Risk (PS5/25) | UK | Non-contractual support obligations identification |
| 14 | Fed SR 15-18 — CCAR | US | Quarterly Material Risk Inventory, capital linkage |
| 15 | OCC Heightened Standards (12 CFR Part 30, App. D) | US | Front-line accountability, independent challenge |
| 16 | FCA Conduct Risk — Five Conduct Questions | UK | Business-led conduct risk identification |

Chapter 2 (The Foundations: Standards and Frameworks) examined the three foundational standards — ISO 31000, ISO 31010, and COSO ERM — that provide the architecture, techniques, and enterprise lens upon which the methodology is built. These sixteen frameworks are the regulatory instruments that mandate how that architecture must be applied in practice. They are the frameworks that mandate, constrain, and shape how institutions identify their risks.

## The Global Baseline: What the Basel Committee Requires

The Basel Committee on Banking Supervision does not directly supervise banks. Its standards are transposed into national legislation — through the CRR in Europe, the PRA Rulebook in the United Kingdom, and the Dodd-Frank Act in the United States. But the definitions and identification requirements set by the BCBS form the genetic code of global risk management. Every jurisdiction starts here.

**BCBS Corporate Governance Principles — Principle 7** states the foundational mandate: "Risks should be identified, monitored and controlled on an ongoing bank-wide and individual entity basis."[^ch15-1] Four words in that sentence do significant work. *Ongoing* means not annual — it requires continuous or at minimum quarterly identification. *Bank-wide* means consolidated, across every legal entity, subsidiary, and branch. *Individual entity basis* means the enterprise view does not excuse the absence of entity-level identification. And *identified* is listed first, before monitoring and controlling, because identification is the prerequisite for everything that follows.

Principle 7 also requires identification of risks arising from mergers and acquisitions, new products, and changes to organisational structure.[^ch15-2] These are the event-driven triggers that Chapter 13 (The Ongoing Cycle: Refresh, Events, and Audit) built into Phase 6. They are not discretionary additions to the methodology — they are regulatory requirements under the global baseline.

**BCBS 239 — Principles for Effective Risk Data Aggregation and Risk Reporting** connects risk identification to data infrastructure. Published in 2013 with a compliance deadline of January 2016 for G-SIBs,[^ch15-3] it remains — a decade later — one of the most frequently cited areas of supervisory concern. The reason is straightforward: if data cannot be aggregated accurately and quickly, risks remain invisible.

Principle 4 (Completeness) requires banks to capture and aggregate risk data across business line, legal entity, asset type, industry, region, and other groupings.[^ch15-4] This means the risk identification process must tag every risk with these metadata attributes — a requirement that Chapter 11 (Documentation: The Living Risk Inventory)'s fourteen-field risk inventory was designed to satisfy. Principle 7 (Accuracy) requires data reliability, which maps directly to Chapter 9 (Assessment — Scoring, Multi-Dimensional Impact, and Data Quality)'s Data Quality Rating system. And the standard's requirement for ad-hoc reporting capability — generating aggregate risk information during stress periods — demands the on-demand identification capability built into Phase 6's event-driven triggers.

**BCBS Principles for the Sound Management of Operational Risk (PSMOR)**, revised in 2021,[^ch15-5] provides the toolkit for operational risk identification. It mandates specific instruments: Risk and Control Self-Assessments (RCSA), Key Risk Indicators (KRIs), external loss data analysis, business process mapping, and event management.[^ch15-6] Critically, the 2021 revision places heavy emphasis on ICT and third-party risk identification, and introduces a **near-miss requirement** — identifying events that did not result in financial loss but exposed a vulnerability.[^ch15-7] This shifts identification from lagging indicators to leading indicators. Chapter 7 (Bottom-Up Identification: Templates, RCSA, and Specialist Processes)'s ten specialist sub-processes — particularly the RCSA, ICT, and third-party outsourcing processes — were designed to deliver exactly what PSMOR requires.

## The European Union: The Layered Architecture

The EU's approach to risk identification regulation is distinctive in its depth and prescriptiveness. Where the Basel Committee sets principles, the EU builds a legislative architecture of layered complexity: directly applicable regulations (CRR), directives requiring national transposition (CRD), and detailed guidelines from the European Banking Authority that supervisors use to assess compliance. For a bank operating under the Single Supervisory Mechanism, these eight frameworks create multiple overlapping layers of identification requirements.

### CRR III / CRD VI

The 2024 Banking Package represents the EU's transposition of the final Basel III reforms.[^ch15-8] For risk identification, two innovations are significant.

First, the **Output Floor** limits how much internal models can reduce capital requirements below the standardised approach, effectively mandating a dual view of risk. Banks must identify risk through their own models and simultaneously through standardised regulatory metrics. Discrepancies between these two views serve as identification signals for model risk or data anomalies — a principle that aligns with the methodology's Data Quality Rating and independent challenge mechanisms.

Second, **CRD VI explicitly mandates that ESG risks be identified not as a standalone category but as drivers of traditional risk types** — credit, market, operational, liquidity.[^ch15-9] This is precisely the approach Chapter 5 (Setting the Context: External, Internal, and Risk Culture) established through the six transmission channels framework: physical risks and transition risks transmitting through existing risk categories rather than existing in isolation.

### EBA Internal Governance Guidelines (GL/2021/05)

These guidelines impose three requirements that directly shape the methodology.[^ch15-10] First, the **holistic view** requirement — Section 17 requires risk identification to aggregate across legal entities and risk types to identify cross-cutting themes.[^ch15-11] This is the enterprise portfolio view of Chapter 8 (Reconciliation and the Enterprise Portfolio View)'s reconciliation process. Second, the detection of **unapproved exposures** — Section 20.4 places a specific duty on the risk management function to identify instances where the business has taken risk outside the agreed appetite.[^ch15-12] This requires the active monitoring capability built into Phase 6's KRI framework. Third, the 2021 revision explicitly integrates **ML/TF risk** into the general risk management framework, requiring financial crime to appear in the enterprise-wide risk inventory — not isolated in a Compliance silo.

The guidelines also mandate risk identification in the context of mergers and acquisitions and new product approvals — requirements that Chapter 13's event-driven triggers and Chapter 7's specialist sub-processes were designed to deliver.

### ECB SREP Methodology

The ECB's Supervisory Review and Evaluation Process assesses the approximately 110 significant institutions under its direct supervision.[^ch15-13] Built on CRR/CRD and EBA guidelines, the SREP is the mechanism through which those requirements are tested. The ECB examines not only what risks have been identified but how the institution determined which are material, what data quality underpins the assessments, and whether the identification process captures all relevant risk categories.

At a European G-SIB, when the London operation was building its risk identification process, we knew that the Swiss entity's supervisor — FINMA — conducted a SREP-equivalent assessment. The methodology had to satisfy that assessment alongside the Fed's CCAR requirements for the US operations and the PRA's expectations for the London branch. The ECB SREP requires a comprehensive risk inventory with explicit materiality determination — the process described in Chapter 9's four-dimensional assessment and materiality framework. Institutions that cannot demonstrate compliance face direct supervisory consequences: increased capital requirements, restrictions on activities, and mandatory remediation programmes.

### DORA — Digital Operational Resilience Act (EU 2022/2554)

DORA entered into force in January 2025[^ch15-14] and represents the most prescriptive regulatory instrument for ICT risk identification. Article 8 requires financial entities to "identify, classify and adequately document all ICT-supported business functions, roles and responsibilities... and identify all ICT assets."[^ch15-15] This is not risk-level identification — it is **asset-level identification**.

DORA requires banks to map the links between ICT assets and Critical or Important Functions, creating a dependency map that exposes single points of failure. And the **Register of Information** requirement — a complete register of all contractual arrangements with ICT third-party service providers — demands that banks identify concentration risks in their technology supply chain. If all core banking systems sit on one cloud provider in one region, that is a concentration risk that DORA requires to be identified. Chapter 7's ICT specialist sub-process, Chapter 14 (Technology: AI, ML, and Data Analytics)'s data management infrastructure requirements, and the enterprise portfolio view's concentration analysis collectively address these requirements.

### EBA Outsourcing Guidelines (GL/2019/02)

The guidelines require a **pre-outsourcing risk assessment** before any contract is signed, including a determination of whether the arrangement involves a critical or important function.[^ch15-16] This classification is itself a risk identification step — it determines the level of ongoing monitoring and the restrictions on the arrangement. The guidelines also require identification of concentration risks at both the individual provider level and at the sector level. Chapter 7's third-party and outsourcing specialist sub-process was designed to deliver these requirements.

### EBA ESG Risk Guidelines (GL/2024/01)

Applicable from 2026/2027,[^ch15-17] these guidelines operationalise the integration of environmental, social, and governance risks into the risk management framework. The core identification requirement is the mapping of **transmission channels**: exactly how physical risks (floods, storms) and transition risks (policy changes, technology shifts, market preferences) impact counterparties' ability to repay or the institution's own operations. This requires new data — geolocation data for flood risk, carbon intensity data for transition risk — and new time horizons. Risk identification must span short-term (1-3 years), medium-term (3-10 years), and long-term (10-30 years) horizons.

Chapter 5's climate and ESG risk identification framework, with its six transmission channels and three time horizons, was built on these requirements and on the earlier **ECB Guide on Climate-Related and Environmental Risks (2020)**,[^ch15-18] which established the supervisory expectations that the EBA guidelines subsequently codified into detailed implementation standards.

### EBA ICT and Security Risk Guidelines (GL/2019/04)

These guidelines preceded DORA and remain relevant for the identification methodology — specifically the requirement that ICT risks be classified using the same taxonomy and scoring methodology applied to all other risk types.[^ch15-19] They mandate an **information asset inventory**, annual ICT risk assessments, and the integration of ICT risk into the enterprise risk framework. Chapter 7's ICT specialist sub-process applies the same four-dimensional assessment, the same Data Quality Rating, and the same reconciliation process to ICT risks as to credit, market, or operational risks. This prevents ICT risk from remaining isolated in a technology silo disconnected from enterprise risk management.

### EU AMLD6

The Sixth Anti-Money Laundering Directive[^ch15-20] mandates an **enterprise-wide ML/TF risk assessment** across four vectors: customers, countries, products, and channels. The identification process must analyse transaction data against national risk assessments published by member state governments. Chapter 7's AML/CFT specialist sub-process addresses this by requiring financial crime risks to be identified within the enterprise risk taxonomy — not confined to a Compliance-only register — and assessed using the same four-dimensional scoring methodology. The AML/CFT sub-process also requires that new product approvals include an explicit ML/TF risk assessment before launch, delivering on the EBA Internal Governance Guidelines' requirement for new product risk identification.

## The United Kingdom: Accountability and Proportionality

The UK's post-Brexit regulatory architecture is principles-based but increasingly detailed, with three characteristics that distinguish it from the EU approach: personal accountability through the Senior Managers regime, a proportionality principle that tailors requirements to firm size and complexity, and a willingness to lead on emerging risk types — particularly model risk, operational resilience, and step-in risk.

**PRA SS31/15** is the supervisory statement that governs the Internal Capital Adequacy Assessment.[^ch15-21] For risk identification, its requirements are the most consequential in the UK framework. The PRA views stress testing not merely as a capital calculation tool but as a **primary method of risk identification**. By subjecting the business model to severe but plausible scenarios, banks identify latent risks invisible in benign conditions. **Reverse stress testing** — identifying the scenarios that would render the business model non-viable — is explicitly expected. The methodology addresses this through Chapter 12 (Integration: Capital Planning, Strategy, and the Board)'s capital planning integration, which links the risk inventory to stress scenario design and includes reverse stress testing drawing on Chapter 10 (Risk Interaction: Bow-Ties, Matrices, and Concentration)'s interaction analysis and cascade pathways.

The consequences of deficient risk identification under SS31/15 are direct and quantifiable. As Chapter 12 described, the PRA can impose **Pillar 2A capital add-ons with scalars up to 40%** of the Pillar 2A requirement for firms whose risk identification is assessed as inadequate. This is not a theoretical penalty. Institutions I have worked with have received supervisory feedback citing specific gaps in their identification process — risks that should have been in the inventory but were not, risk categories that lacked adequate coverage, enterprise-level concentration risks that were identified at entity level but not aggregated. The methodology's enterprise portfolio view, regulatory traceability mapping, and documentation standards were designed to prevent exactly these findings.

**PRA Step-In Risk** — introduced through PS5/25 in 2025[^ch15-22] — requires the explicit identification of financial support obligations that extend beyond contractual requirements. These are the reputational compulsions to support unconsolidated entities — sponsored funds, structured vehicles, affiliated entities — during stress. Identifying these non-contractual obligations is difficult precisely because they do not appear in legal agreements or financial statements. They exist in the relationship between the institution's brand and the entity's investors. Chapter 4 (The Risk Taxonomy)'s risk taxonomy includes step-in risk as a Level 1 category, and Chapter 5's internal context assessment examines the institution's relationship with unconsolidated entities as part of the organisational structure review.

**FCA Conduct Risk — the Five Conduct Questions** represents a fundamentally different approach to risk identification.[^ch15-23] Where prudential frameworks ask "what could go wrong financially?", the FCA asks "what incentives could lead to poor customer outcomes?" The Five Conduct Questions framework requires business-level identification of conduct drivers — sales incentives, power dynamics, conflicts of interest, product design that profits from customer inertia. Product governance rules require identification at the design stage: who is the target market, and what are the risks if the product is sold outside that market? Chapter 7's conduct risk specialist sub-process, with its desk-by-desk granularity, was designed to deliver this requirement.

The FCA's approach is complemented by the **Senior Managers and Certification Regime (SM&CR)**,[^ch15-24] which personalises responsibility for risk identification. Every Senior Manager's Statement of Responsibilities specifies what they are accountable for. If a risk emerges in a business unit that was not identified, the regulator reviews the Statement of Responsibilities to determine who is liable. The defence is proving "reasonable steps" — and a robust, documented risk identification process is the primary evidence of reasonable steps.

## The United States: Capital Planning as Risk Identification

The US regulatory framework imposes arguably the most operationally prescriptive risk identification requirements globally, driven by the capital planning process.

**Fed SR 15-18** governs the Comprehensive Capital Analysis and Review (CCAR) for the largest US banking organisations.[^ch15-25] Its requirements transform risk identification from a periodic exercise into a continuous discipline with direct capital consequences. Unlike many other jurisdictions where annual identification cycles are the norm, SR 15-18 expects a dynamic, quarterly risk identification process that feeds directly into capital planning.

The **Material Risk Inventory** is the centrepiece. For every risk in the inventory, the bank must map it to the stress test: is it captured in the scenario? Is it captured in the P&L model? Or does it require a separate capital add-on? This "map to capital" requirement ensures no identified risk is left unfunded. At Institution A, integrating the risk identification process with CCAR was a defining requirement. The CRO mandated that the Material Risk Inventory be the foundation for stress scenario design — if we identified a risk as material, the scenario had to address it. If the scenario revealed a risk not in the inventory, the inventory had to be updated. This bidirectional linkage between identification and capital planning is what Chapter 12 described as the methodology's integration architecture.

**OCC Heightened Standards (12 CFR Part 30, Appendix D)**[^ch15-26] apply to large national banks and are distinctive in two respects. First, they codify the Three Lines Model with explicit risk identification duties for each line. **Front-line units — the business — are responsible for assessing material risks in their activities.** They cannot delegate identification to the risk function. This is the same principle that underlies the methodology's bottom-up identification track (Chapter 7), where business units actively identify risks in their own operations rather than merely receiving and approving risk lists produced by the centre.

Second, the OCC requires **effective challenge** — Independent Risk Management must identify and assess material aggregate risks independently. If its assessment diverges from the front line's, the divergence must be reported. This dual identification system is structurally equivalent to the methodology's top-down/bottom-up reconciliation (Chapter 8), which was designed to create exactly the productive tension that the OCC requires.

## The Regulatory Traceability Matrix

The purpose of the preceding analysis is not academic. It is to demonstrate that every requirement imposed by these sixteen frameworks maps to a specific phase and activity within the methodology. The following matrix provides this mapping — the regulatory traceability that every supervisor will demand.

| Framework | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Phase 5 | Phase 6 |
|---|---|---|---|---|---|---|
| **BCBS Principle 7** | Bank-wide scope | Entity/portfolio/BU coverage | — | — | Board reporting | Ongoing identification |
| **BCBS 239** | Data infrastructure | — | DQ Rating | 14-field metadata | Aggregated reporting | Ad-hoc capability |
| **BCBS PSMOR** | — | RCSA, KRI design | — | Event management | — | External loss data, near-miss |
| **CRR III / CRD VI** | ESG transmission channels | Dual-track identification | Output Floor comparison | — | ICAAP/ILAAP | — |
| **EBA Internal Governance** | Internal context | M&A trigger | — | AML in inventory | Holistic enterprise view | Forward + backward-looking |
| **ECB SREP** | Context establishment | Comprehensive coverage | Materiality determination | Full documentation | Capital/strategy integration | Supervisory engagement |
| **DORA** | ICT asset identification | ICT sub-process | — | ICT register, dependency map | — | Third-party monitoring |
| **EBA Outsourcing** | — | Third-party sub-process | Concentration assessment | Outsourcing register | — | Contract monitoring |
| **EBA ESG** | Transmission channels, 3 horizons | Climate in workshops | Multi-horizon scoring | — | Risk appetite integration | Scenario updates |
| **EBA ICT** | Information asset inventory | ICT risk assessment | — | Annual ICT documentation | — | Continuous monitoring |
| **EU AMLD6** | — | AML/CFT sub-process | — | EWRA documentation | — | New product approval |
| **PRA SS31/15** | Context for stress testing | Comprehensive identification | Materiality, stress scenarios | — | Capital planning, reverse stress | Ongoing + event-driven |
| **PRA Step-In Risk** | Unconsolidated entity review | Support obligations ID | — | Step-in documentation | Capital treatment | — |
| **Fed SR 15-18** | — | Quarterly re-identification | — | Material Risk Inventory | Map to capital/scenarios | Quarterly cycle |
| **OCC Heightened Standards** | — | Front-line + IRM dual ID | — | — | Effective challenge reporting | Talent risk monitoring |
| **FCA Conduct Risk** | — | Conduct sub-process | Conduct impact scoring | — | — | Product governance |

Chapter 2 established a phase-to-standards traceability table mapping the six phases to ISO 31000, ISO 31010, COSO ERM, and BCBS Corporate Governance Principles. This matrix extends that traceability to all sixteen regulatory frameworks. Together, the two tables demonstrate that the methodology was designed not as a theoretical best-practice framework that happens to overlap with regulation. It was designed to satisfy all applicable frameworks simultaneously — because that is the reality of operating a bank in any major jurisdiction.

The matrix also serves the **regulatory vs economic risk gap analysis** introduced in Chapter 12. The sixteen frameworks define the "regulatory" half of that analysis — what each regulator requires in terms of risk identification, capital treatment, and supervisory reporting. The methodology's four-dimensional assessment defines the "economic" half — the institution's own view of each risk's severity, likelihood, speed, and interconnectedness. Where these two views diverge — a sovereign exposure treated as zero risk weight under Basel but assessed as a material concentration risk through the methodology — the gap analysis escalates to the Board. The regulatory mapping table translates between the two views, and the traceability matrix demonstrates that the methodology covers every requirement the gap analysis must test against.

## The Regulatory Taxonomy Divergence Problem

Chapter 4 introduced a challenge that this chapter must address directly: regulators do not agree on how to categorise risks.

The Basel Committee defines three Pillar 1 risk categories — credit, market, operational — with a broad Pillar 2 requirement to identify additional risks. The EBA uses a more granular categorisation including ICT risk as a distinct category, ESG as a cross-cutting driver, and ML/TF as integrated within operational and compliance risk. The PRA recognises step-in risk as a category that neither the EBA nor the Fed explicitly names. The Fed's CCAR process uses its own risk typology aligned with stress scenario design — credit losses, trading and counterparty losses, operational risk losses, pre-provision net revenue effects — which does not map one-to-one onto any prudential taxonomy. And the FCA's conduct risk framework uses a behavioural lens — drivers of poor customer outcomes — that has no counterpart in any prudential taxonomy.

For an institution operating across these jurisdictions, this divergence creates a practical problem. The internal taxonomy cannot be four different things simultaneously. It must be one coherent classification structure that can be translated into the language of each applicable regulator.

Chapter 4's **regulatory mapping table** is the solution. The institution maintains a separate document — active, not aspirational — that maps every node of the internal taxonomy to the corresponding category used by each regulator. When the PRA asks about step-in risk, the mapping table shows which L1/L2/L3 categories contain those exposures. When the Fed asks about the Material Risk Inventory's coverage of operational risk, the mapping table translates the internal taxonomy's more granular classification into the Fed's categories. When the EBA examiner asks how ICT risks are identified, the mapping table points to the ICT entries in the same enterprise risk inventory that contains credit and market risks.

The Risk Identification Lead is responsible for maintaining the currency of this mapping table. Every time a regulator introduces a new category — as the PRA did with step-in risk in 2025, as the EBA has done with ESG risks — the mapping table must be updated to show how the internal taxonomy captures it. If the internal taxonomy lacks coverage, that gap is itself a risk identification finding requiring taxonomy amendment.

At Institution A, this divergence was acute. The London operation was supervised by the PRA. The Swiss entity by FINMA. The US operations by the Fed. Different divisions maintained different numbers of risk categories — different classifications for the same exposures. The regulatory mapping table was not an optional administrative exercise — it was the mechanism that made multi-jurisdictional compliance possible without maintaining separate risk identification processes for each jurisdiction.

## One Process, Multiple Jurisdictions

Consider the practical reality. A European bank headquartered in the eurozone, with a PRA-regulated subsidiary in London and a Fed-regulated branch in New York. The parent is subject to the ECB SREP, CRR III/CRD VI, EBA guidelines on internal governance, ESG, ICT, outsourcing, and AML/CFT. The London subsidiary is subject to PRA SS31/15, step-in risk requirements, SM&CR, and FCA conduct risk. The New York branch is subject to Fed SR 15-18 and OCC Heightened Standards.

This is not a hypothetical. This is the operating reality for every major European banking group.

The methodology addresses this through three mechanisms.

First, **a single process with jurisdictional overlays**. The six-phase methodology is the same everywhere. Phase 1 establishes context. Phase 2 identifies risks through top-down and bottom-up tracks. Phase 3 assesses. Phase 4 documents. Phase 5 integrates with capital planning and strategy. Phase 6 maintains the ongoing cycle. What varies by jurisdiction is the specific content within each phase — the PRA subsidiary runs reverse stress testing in Phase 5 that the ECB parent may not require in the same form; the US branch runs quarterly re-identification in Phase 6 that the annual EU cycle does not mandate at the same frequency. But the process architecture is identical.

Second, **the regulatory mapping table** translates between taxonomies. The internal taxonomy is the institution's own — designed for the process, not for any single regulator. The mapping table converts this internal taxonomy into the language each regulator expects. One identification process, one taxonomy, multiple regulatory translations.

Third, **the enterprise portfolio view** satisfies the consolidation requirement that every framework shares. BCBS Principle 7 requires bank-wide identification. The ECB SREP requires a comprehensive risk inventory. PRA SS31/15 requires consolidated identification for ICAAP. Fed SR 15-18 requires a Material Risk Inventory. The enterprise portfolio view — Chapter 8's reconciled, consolidated picture of the institution's risk landscape — satisfies all four simultaneously.

The cost of getting multi-jurisdictional risk identification wrong was illustrated by Standard Chartered's experience with sanctions enforcement. Operating across multiple jurisdictions with different regulatory expectations for financial crime risk identification, the institution's failure to maintain consistent identification standards across its global operations contributed to a $667 million fine. The methodology's insistence on one process with jurisdictional overlays — rather than separate processes for each jurisdiction — exists precisely to prevent this kind of fragmentation.[^ch15-27]

## The Consequences of Failure

Regulatory frameworks are not advisory. They carry consequences.

Under **PRA SS31/15**, a supervisory assessment that the risk identification process is inadequate triggers Pillar 2A capital add-ons. As Chapter 12 described, the PRA can apply scalars of up to 40% of the Pillar 2A requirement. For a large UK bank, this can represent billions of pounds in additional capital that must be held — capital that cannot be deployed, distributed, or used for lending. The cost of deficient risk identification is not a fine. It is a permanent drag on the institution's economics until the deficiency is remediated and the supervisor is satisfied.

Under **Fed SR 15-18**, the consequence is the CCAR qualitative objection — a determination that the institution's capital planning process, including its risk identification inputs, is inadequate. A qualitative objection restricts capital distributions: share buybacks and dividend increases are blocked. For a publicly traded US bank, this is a market event.

Under **SM&CR**, the consequence is personal. If a risk materialises in a business unit and the Senior Manager responsible cannot demonstrate reasonable steps to identify it, they face individual enforcement action — fines, prohibition from the industry, and public censure.

These consequences share a common structure. The regulator does not penalise the crystallisation of risk — risk is inherent in banking. The regulator penalises the failure to identify it. An institution that identifies a risk, assesses it accurately, holds appropriate capital, and monitors it through the ongoing cycle has discharged its regulatory obligation — even if the risk eventually materialises. An institution that fails to identify that same risk has not.

The methodology's regulatory traceability matrix is therefore not a compliance artefact. It is evidence. It is the documentation that demonstrates — framework by framework, requirement by requirement — that the institution's risk identification process satisfies what every applicable regulator requires. When the supervisor opens the examination file, the traceability matrix is the answer.

## The Bridge

The sixteen frameworks analysed in this chapter exist for a reason. They were developed — most of them — in response to bank failures. Basel III emerged from the 2008 financial crisis. DORA from the recognition that digital disruption could produce systemic instability. SM&CR from the realisation that no individual was accountable for the failures at HBOS, RBS, and elsewhere.[^ch15-28] The regulations are the codified lessons of institutional catastrophe.

Chapter 16 (Lessons from Bank Failures) examines those catastrophes directly. Drawing on the industry loss database of 179 bank failures spanning six decades and thirty-five countries, it analyses what went wrong, identifies the recurring failure modes, and demonstrates — case by case — what a structured risk identification methodology would have caught. The regulations tell institutions what they must do. The evidence tells them why.

---

[^ch15-1]: Basel Committee on Banking Supervision, *Corporate Governance Principles for Banks* (BCBS 328), Principle 7, paragraph 100, July 2015. The quoted text appears in the risk management guidance section requiring ongoing, bank-wide risk identification.

[^ch15-2]: Basel Committee on Banking Supervision, *Corporate Governance Principles for Banks* (BCBS 328), Principle 7, paragraphs 101-103, July 2015. These paragraphs specify risk identification expectations for M&A activities, new products, and organisational changes.

[^ch15-3]: Basel Committee on Banking Supervision, *Principles for Effective Risk Data Aggregation and Risk Reporting* (BCBS 239), January 2013. The standard set a compliance deadline of January 2016 for global systemically important banks (G-SIBs), with national supervisors encouraged to apply the principles to domestic systemically important banks (D-SIBs) within three years of their designation.

[^ch15-4]: Basel Committee on Banking Supervision, *Principles for Effective Risk Data Aggregation and Risk Reporting* (BCBS 239), Principle 4 (Completeness) and Principle 7 (Accuracy), January 2013. Principle 4 requires that data aggregation capabilities cover all material risk exposures across the banking group, and Principle 7 requires that risk management reports accurately and precisely convey aggregated risk data.

[^ch15-5]: Basel Committee on Banking Supervision, *Revisions to the Principles for the Sound Management of Operational Risk* (BCBS d515), March 2021. This revision replaced the original 2011 version (BCBS 195).

[^ch15-6]: Basel Committee on Banking Supervision, *Revisions to the Principles for the Sound Management of Operational Risk* (BCBS d515), Principles 5-7, March 2021. These principles mandate the use of RCSA, KRIs, external loss data analysis, business process mapping, and internal event management as core operational risk identification tools.

[^ch15-7]: Basel Committee on Banking Supervision, *Revisions to the Principles for the Sound Management of Operational Risk* (BCBS d515), Principle 6, paragraph 6.3, March 2021. The 2021 revision introduced the requirement to identify near-miss events and strengthened expectations for ICT and third-party risk identification.

[^ch15-8]: Regulation (EU) 2024/1623 of the European Parliament and of the Council (CRR III), 31 May 2024, and Directive (EU) 2024/1619 (CRD VI), 31 May 2024. Together these constitute the EU Banking Package implementing the final Basel III reforms, with phased application beginning 1 January 2025.

[^ch15-9]: Directive (EU) 2024/1619 (CRD VI), Article 87a, 31 May 2024. This article requires institutions to identify, measure, manage, and monitor ESG risks as drivers of existing prudential risk categories (credit, market, operational, liquidity, and concentration risk).

[^ch15-10]: European Banking Authority, *Guidelines on Internal Governance* (EBA/GL/2021/05), 2 July 2021, effective 31 December 2021. These guidelines repeal and replace the earlier EBA/GL/2017/11.

[^ch15-11]: European Banking Authority, *Guidelines on Internal Governance* (EBA/GL/2021/05), Section 17 (paragraphs 72-74), 2 July 2021. Section 17 requires institutions to establish a holistic view of risks across legal entities and risk types.

[^ch15-12]: European Banking Authority, *Guidelines on Internal Governance* (EBA/GL/2021/05), Section 20.4 (paragraph 119), 2 July 2021. This paragraph places a duty on the risk management function to detect and report unapproved exposures.

[^ch15-13]: European Central Bank, *SSM Supervisory Priorities 2024-2026*, December 2023. The ECB Banking Supervision directly supervises approximately 110 significant institutions within the Single Supervisory Mechanism (SSM). The precise number fluctuates as institutions are designated or de-designated. See also ECB, *SREP Methodology Booklet — 2023 Edition*.

[^ch15-14]: Regulation (EU) 2022/2554 of the European Parliament and of the Council on Digital Operational Resilience for the Financial Sector (DORA), 14 December 2022. DORA entered into force on 16 January 2023, with the application date of 17 January 2025.

[^ch15-15]: Regulation (EU) 2022/2554 (DORA), Article 8(1), 14 December 2022. The article requires financial entities to identify, classify, and document all ICT-supported business functions, information assets, and ICT assets.

[^ch15-16]: European Banking Authority, *Guidelines on Outsourcing Arrangements* (EBA/GL/2019/02), 25 February 2019, effective 30 September 2019. Section 12 specifies the pre-outsourcing risk assessment requirements, including the classification of functions as critical or important.

[^ch15-17]: European Banking Authority, *Guidelines on the Management of ESG Risks* (EBA/GL/2024/01), 9 January 2025. The guidelines apply to large institutions from 11 January 2026 and to small and non-complex institutions from 11 January 2027.

[^ch15-18]: European Central Bank, *Guide on Climate-Related and Environmental Risks: Supervisory Expectations Relating to Risk Management and Disclosure*, November 2020. This guide set out 13 supervisory expectations for how banks should integrate climate and environmental risks into their business strategy, governance, risk management, and disclosure frameworks.

[^ch15-19]: European Banking Authority, *Guidelines on ICT and Security Risk Management* (EBA/GL/2019/04), 28 November 2019, effective 30 June 2020. These guidelines require institutions to classify ICT risks using the same taxonomy applied to other risk types and to maintain an information asset inventory.

[^ch15-20]: Directive (EU) 2018/1673 of the European Parliament and of the Council on Combating Money Laundering by Criminal Law (AMLD6 / the Sixth Anti-Money Laundering Directive), 23 October 2018, transposition deadline 3 December 2020. The enterprise-wide ML/TF risk assessment requirement is complemented by the EBA's *Guidelines on ML/TF Risk Factors* (EBA/GL/2021/02), revised March 2021.

[^ch15-21]: Prudential Regulation Authority, *Supervisory Statement SS31/15: The Internal Capital Adequacy Assessment Process (ICAAP) and the Supervisory Review and Evaluation Process (SREP)*, originally issued November 2015, most recently updated December 2023. SS31/15 sets out the PRA's expectations for how firms should assess the adequacy of their capital, including through stress testing and reverse stress testing as risk identification tools.

[^ch15-22]: Prudential Regulation Authority, *Policy Statement PS5/25: Step-In Risk*, 2025. This policy statement introduces requirements for the identification of non-contractual financial support obligations to unconsolidated entities, implementing the BCBS framework on step-in risk (BCBS d349, October 2017).

[^ch15-23]: Financial Conduct Authority, *Five Conduct Questions*, introduced as part of the FCA's supervisory approach from 2015. The framework requires firms to assess conduct risk through five questions covering culture, products, governance, remuneration, and treatment of customers. See also FCA, *Business Plan 2023/24*, for the current application of the conduct questions framework.

[^ch15-24]: Financial Conduct Authority and Prudential Regulation Authority, *Senior Managers and Certification Regime (SM&CR)*, implemented for banks and PRA-designated investment firms from 7 March 2016, extended to all FCA solo-regulated firms from 9 December 2019. Established under the Financial Services (Banking Reform) Act 2013, Part 4.

[^ch15-25]: Board of Governors of the Federal Reserve System, *SR 15-18: Federal Reserve Supervisory Assessment of Capital Planning and Positions for LISCC Firms and Large and Complex Firms*, 18 December 2015. This supervisory letter establishes the qualitative and quantitative expectations for capital planning, including the requirement for a comprehensive Material Risk Inventory.

[^ch15-26]: Office of the Comptroller of the Currency, *OCC Guidelines Establishing Heightened Standards for Certain Large Insured National Banks, Insured Federal Savings Associations, and Insured Federal Branches* (12 CFR Part 30, Appendix D), final rule effective 1 January 2014, with amendments. The guidelines establish minimum standards for risk governance, including front-line unit risk identification responsibilities and independent risk management challenge functions.

[^ch15-27]: Standard Chartered Bank was fined a total of approximately $667 million by US and UK authorities in 2012 (US: $340 million OFAC, $100 million Fed, $227 million to New York DFS), with additional enforcement actions in subsequent years relating to sanctions compliance deficiencies. See US Department of the Treasury, OFAC Enforcement Action, 10 December 2012, and New York State Department of Financial Services, Consent Order, 6 August 2012.

[^ch15-28]: Parliamentary Commission on Banking Standards, *Changing Banking for Good* (HL Paper 27-I / HC 175-I), June 2013. The Commission's findings on the failures at HBOS and RBS, and the lack of individual accountability under the then-existing Approved Persons Regime, led directly to the creation of SM&CR under the Financial Services (Banking Reform) Act 2013.
