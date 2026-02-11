# Chapter 7: Bottom-Up Identification: Templates, RCSA, and Specialist Processes

## The Risk Assessment That Had Not Changed in Three Years

When bottom-up risk assessments first arrive from business units, comparing them against prior-year submissions reveals whether genuine identification has occurred. Opening the first submission and comparing it against the previous year's output reveals a troubling pattern: identical content. Not similar. Identical. The same risks, in the same order, with the same scores, the same control descriptions, the same owner names — one of whom has left the firm months earlier. The dates have been updated. Nothing else has.

The second submission shows the same pattern. A third. Same. The business units have treated the bottom-up risk identification exercise as an administrative burden — a form to be completed and returned, not an analytical process to be performed. They have taken last year's spreadsheet, changed the date in the header, and sent it back. In practice, what arrives is often a compilation of the top RCSA findings and the most prominent compliance risks, gathered into a single document. It looks like identification. It is not. It is assembly.

This is **compliance theatre**: the appearance of risk identification without the substance. And it is the single most common failure mode in bottom-up processes. The template exists. The governance requires its completion. The business unit complies. But no one actually identifies anything.

There is a reason for this beyond laziness. Identifying a new risk carries consequences. By its very nature, naming a risk that has not been named before creates an obligation to act on it — to assess it, to assign ownership, to determine whether controls are adequate, to report it upward. This takes time, resources, and political capital. It is far easier to compile the existing risks — the ones that already have owners, that already have controls documented against them, that already appear in the register — than to identify new ones that will require all of that work to be done from nothing. The institutional incentive, unless the process explicitly counteracts it, is to confirm the existing inventory rather than to challenge it.

The methodology counteracts it in three ways. First, the standardised template described in this chapter requires driver fields that force the assessor to explain *why* each risk exists and *what has changed* — fields that cannot be completed by copying last year's entry if the environment has shifted. Second, a minimum threshold — requiring every business unit to identify at least three new or materially changed risks each cycle — makes it structurally impossible to submit an unchanged list. Third, the data quality ratings introduced in Chapter 9 expose thin assessments: a risk with no updated evidence, no current control testing, and no change narrative will receive a data quality score that flags it for challenge. Together, these mechanisms shift the burden of proof — from the practitioner who identifies a new risk to the business unit that claims nothing has changed.

The problem is not that bottom-up identification is unnecessary. It is essential. The top-down workshops described in Chapter 6 identify the twenty risks that could destroy the institution — the strategic, emerging, and cross-cutting risks visible from senior management's vantage point. But those workshops cannot see the two hundred operational risks that collectively define the institution's risk profile: the process failures, the control weaknesses, the technology vulnerabilities, the third-party dependencies, the conduct risks embedded in incentive structures. Only the people closest to the business can see those. The bottom-up track exists to capture what the top-down track structurally cannot.

The challenge is making it work. A bottom-up process that produces compliance theatre is worse than no process at all, because it creates a documented record suggesting that identification has occurred when it has not. The institution believes it has a comprehensive risk inventory. It does not. It has last year's inventory with this year's date.

This chapter describes how to design a bottom-up identification process that produces genuine, granular risk identification — through standardised templates, structured techniques, specialist sub-processes, and an integration discipline that ensures nothing falls through the gaps.

---

## The Standardised Risk Assessment Template

The foundation of bottom-up identification is a **Standardised Risk Assessment Template** that every business unit completes for every risk it faces. Standardisation is not bureaucracy. It is the mechanism that makes aggregation, comparison, and reconciliation possible. If each business unit submits risk information in its own format, with its own definitions, using its own scales, the Risk Identification Lead cannot produce an enterprise view. The template enforces a common language.

The template captures eleven fields:

| Field | Description |
|---|---|
| **Risk ID** | Unique identifier assigned by the central function, ensuring traceability across cycles |
| **Taxonomy Classification** | L1 / L2 / L3 mapping from the institution's risk taxonomy (Chapter 4) |
| **Risk Definition** | Plain-language description of the risk event — what could happen, not what category it belongs to |
| **Underlying Drivers — Direct** | Factors that directly cause or trigger the risk |
| **Underlying Drivers — Indirect** | Factors that amplify or enable the risk without directly causing it |
| **Quantitative Metrics** | Measurable indicators with current values and limits, where available |
| **Qualitative Information** | Narrative assessment where quantification is not possible or meaningful |
| **Current Controls** | Existing mitigants, their type (prevent / detect / correct), and assessed effectiveness |
| **Risk Owner** | Named individual — not a committee, not a function (Chapter 3) |
| **Emerging Risk Indicators** | Early warning signals that this risk may be increasing |
| **Data Quality Rating** | Assessment of confidence in the underlying data (High / Medium / Low / Very Low) |

Three of these fields deserve particular attention because they are where most bottom-up submissions fail.

**Underlying Drivers** — both direct and indirect — force the business unit to think about causation, not just classification. A risk definition that says "operational loss from technology failure" is a taxonomy label, not an identification. The driver fields require the assessor to specify *what* could fail, *why* it might fail, and *what conditions* would make failure more likely. This is where identification actually happens. In practice, risk definitions are often adequate while driver fields are empty or contain single-word entries. The business units have classified their risks but have not identified them.

**Current Controls** must specify the control type — preventive, detective, or corrective — and an honest assessment of effectiveness. The natural tendency is to list controls as "effective" because admitting a control weakness feels like admitting a management failure. The template must explicitly require an effectiveness rating with supporting evidence, not just a binary effective/ineffective judgement. A control that exists on paper but is routinely overridden, bypassed, or under-resourced is not an effective control. The assessment must reflect operational reality, not design intent.

**Data Quality Rating** is the field most likely to be overlooked and most important for downstream assessment. A risk scored as "high impact, low likelihood" based on expert judgement alone carries fundamentally different information from the same score based on ten years of loss data. The four-level rating (High, Medium, Low, Very Low) creates transparency about the evidential basis for each assessment. Chapter 9 will describe how this rating feeds into the four-dimensional assessment framework. For now, the critical point is that the rating must be assigned honestly. In practice, business units default to "Medium" for everything. The Risk Identification Lead must challenge this — a risk with no quantitative data and no historical precedent is not "Medium" quality. It is "Low" or "Very Low," and that information matters.

---

## Techniques for Bottom-Up Identification

A template is a capture mechanism, not an identification technique. Handing a business unit a blank template and asking them to fill it in is an invitation to produce compliance theatre. The template must be supported by structured identification techniques that guide the assessor through a systematic process.

Chapter 2 mapped the ISO 31010 techniques to their primary chapters in this methodology. For bottom-up identification, four techniques are recommended.

### Structured Interviews

**Structured interviews** use a predetermined set of questions applied consistently across interviewees to elicit risk information that might not surface in workshops or self-assessment. Unlike the top-down SWIFT workshops described in Chapter 6, which bring senior management together in a group setting, structured interviews are conducted one-on-one with individuals across different levels and functions within a business unit.

The value of structured interviews in bottom-up identification is threefold. First, they capture perspectives from individuals who would never speak in a workshop — the mid-level operations manager who knows the reconciliation process breaks every month-end, the compliance officer who has raised concerns three times without response, the technology specialist who knows the disaster recovery plan has never been tested. Second, the one-on-one setting removes the authority bias and groupthink that Chapter 6 identified as brainstorming pathologies. Third, the structured format ensures consistency — the same questions asked of the head of settlements and the junior operations analyst produce comparable outputs.

The Risk Identification Lead should develop interview protocols that cover: what risks the interviewee sees in their area, what has changed since the last assessment, what controls they rely on and whether those controls actually work, what they would worry about if they were responsible for the whole business unit, and what risks they believe are not being captured by existing processes. That last question — what is being missed — is often the most productive.

### Checklists

**Checklists** drawn from the risk taxonomy, regulatory requirements, and the industry loss database provide a systematic prompt for identification. They prevent the assessor from relying solely on recall — which, as Chapter 6 established, defaults to recent and familiar risks at the expense of systemic or slow-moving ones.

For bottom-up identification, the checklist should be organised by L2 taxonomy category and supplemented with specific prompts drawn from the starting universe built in Phase 1 (Chapter 5). The assessor works through each category, asking: does this risk exist in our business unit? If yes, what form does it take? What drives it? What controls it?

The checklist is a prompt, not a constraint. If the assessor identifies a risk not on the checklist, that risk must be captured — and the gap reported to the Risk Identification Lead for potential taxonomy update. The checklist ensures coverage. The template captures the output.

### Cause-and-Effect Diagrams

**Cause-and-effect diagrams** (also called **Ishikawa** or fishbone diagrams) are particularly valuable for operational risk identification. The technique starts with a known or potential risk event and works backwards to identify all contributing causes, organised into categories such as people, process, technology, data, and external factors.

Where the standard template asks for direct and indirect drivers, Ishikawa analysis provides a structured method for discovering them. A business unit that writes "technology failure" as a driver has not completed the analysis. An Ishikawa diagram forces the question: *which* technology? *What kind* of failure? Caused by *what*? Enabled by *what*? The output is a visual map of causal chains that populates the driver fields with genuine analytical content.

### FMEA and HAZOP for Process Risks

**Failure Mode and Effects Analysis (FMEA)** examines each step in a business process, identifies the ways each step can fail, assesses the consequences of each failure mode, and evaluates the controls in place. For process-intensive operations — payments, settlements, trade booking, client onboarding, regulatory reporting — FMEA is the most thorough bottom-up identification technique available.

**HAZOP (Hazard and Operability Study)**, like SWIFT, originated in process safety engineering. Applied to banking operations, HAZOP uses guide words (no, more, less, reverse, other than) applied to process parameters (flow, timing, sequence, composition) to identify deviations from intended operation. Where SWIFT asks "what if?" about strategic risks, HAZOP asks "what if?" about process steps. A HAZOP analysis of a payments process might ask: what if the payment is sent to the wrong counterparty (*other than*)? What if the payment is duplicated (*more*)? What if the authorisation step is skipped (*no*)? What if the payment is processed in the wrong sequence (*reverse*)?

FMEA and HAZOP are resource-intensive. They are not appropriate for every risk in every business unit. But for critical processes — those where failure would produce material financial loss, regulatory breach, or customer harm — they produce a level of granularity that no other technique matches.

The choice of technique depends on the risk type, the available resources, and the complexity of the business unit's operations. The Risk Identification Lead should provide guidance on which techniques are appropriate for which contexts, drawing on the Technique Selection Guide. The critical principle is that some structured technique must be used. A business unit that completes the template without applying any identification technique has not performed identification. It has performed data entry.

---

## The Ten Specialist Sub-Processes

Certain risk types cannot be adequately identified through a general-purpose template process. They require dedicated expertise, specialised data sources, regulatory-specific methodologies, and practitioners who understand the technical domain. These are the **specialist risk identification sub-processes** — ten in total — that operate alongside the standardised template process and feed their outputs into the bottom-up track.

Each specialist sub-process is owned by the relevant specialist function. Each must use the institution's common risk taxonomy, apply the same four-dimensional scoring methodology, submit identified risks to the central inventory via the standardised template, and participate in the reconciliation process described in Chapter 8. These integration requirements are non-negotiable. A specialist sub-process that operates in isolation — with its own taxonomy, its own scales, its own reporting format — creates precisely the silos that the enterprise methodology is designed to eliminate.

### 1. RCSA (Risk and Control Self-Assessment)

**RCSA** is the most widely deployed operational risk identification tool in banking, and the one most frequently reduced to compliance theatre. A well-designed RCSA is a collaborative process where business units and risk functions jointly identify operational risks and assess the effectiveness of controls. A poorly designed RCSA is a spreadsheet that gets rolled forward every quarter.

The methodology requires RCSA to incorporate the full **BIS Principles for the Sound Management of Operational Risk (PSMOR)** toolbox: the self-assessment itself, key risk indicators (KRIs), external loss data from industry databases, business process mapping, and event management. Internal and external loss data must be used as inputs to identification — not just as validation after the fact. Event management provides the critical feedback loop: when an operational risk materialises, that event must feed back into the RCSA to update the identification and control assessment.

The difference between effective and ineffective RCSA is whether the business unit treats it as an analytical exercise or a filing exercise. Effective RCSA involves structured workshops within the business unit, uses Ishikawa diagrams to map control weaknesses, challenges existing control effectiveness ratings against actual incident data, and produces genuinely new risk identifications each cycle. Ineffective RCSA involves one person updating a spreadsheet.

### 2. TSRA (Threat Scenario-led Risk Assessment)

**TSRA** constructs hypothetical adverse event scenarios to evaluate the institution's preparedness and resilience. Unlike the scenario analysis described in Chapter 6 — which operates at a strategic level in the top-down workshops — TSRA develops detailed scenarios at the operational level: a major counterparty default coinciding with a systems outage, a cyber attack during a regulatory reporting deadline, a pandemic affecting a critical outsourcing location.

TSRA is owned by the Risk Identification Lead or CRO function. Its value lies in identifying risks that exist only in combination — risks that no individual business unit would identify because each component sits in a different function. TSRA scenarios are designed to stress the interactions between risk types, making it a natural complement to the risk interaction analysis described in Chapter 10.

### 3. RSR (Reputational and Sustainability Risk Assessment)

**RSR** identifies risks affecting public perception and long-term viability, including ESG factors. Reputational risk is unusual in the taxonomy because it rarely materialises independently — it is almost always a consequence of another risk crystallising. A conduct failure becomes a reputational crisis. An environmental incident becomes a reputational crisis. A cyber breach becomes a reputational crisis.

RSR must therefore look across all other risk categories and ask: if this risk materialises, what is the reputational consequence? This cross-cutting nature means RSR cannot be conducted in isolation. It requires inputs from conduct risk, compliance, operations, and the external context assessment (Chapter 5). The ESG dimension — environmental, social, and governance factors — maps to the climate risk transmission channels established in Chapter 5 and the sustainability taxonomy categories from Chapter 4.

### 4. Conduct Risk Assessment

**Conduct risk** identifies risks arising from behaviours by the firm or its staff that result in poor outcomes for customers, market integrity, or competition. The FCA's **five Conduct Questions** framework provides the regulatory basis:

1. What could cause harm to customers or markets?
2. What could undermine market integrity?
3. What could affect competition?
4. How could the firm's culture contribute to poor outcomes?
5. What are the inherent conduct risks in the firm's business model?

Conduct risk identification must be **business-led at desk-by-desk granularity** — not a central function exercise applied generically. It should be **reverse-engineered from potential customer harm and market integrity impact**, not limited to regulatory breach. The PPI scandal described in Chapter 4 demonstrated what happens when conduct risk is absent from the taxonomy entirely. Even where the taxonomy includes conduct risk, identification frequently fails because it looks backward at past regulatory actions rather than forward at embedded business model risks.

Incentive structures are the single most important input to conduct risk identification. Where compensation rewards volume without reference to customer outcomes, conduct risk is structural, not behavioural. The identification must examine: what are salespeople incentivised to do? What happens when those incentives conflict with customer interest? What controls exist to detect the conflict?

### 5. Model Risk Assessment

**Model risk** arises from inaccuracy, misuse, or inappropriate application of financial models. In an industry that runs on models — for pricing, risk measurement, capital calculation, stress testing, and regulatory reporting — model risk identification must cover the full lifecycle: development assumptions, data inputs, calibration methodology, validation process, and the governance around model use and override.

The model risk assessment must identify not just the risk that a model is wrong, but the risk that a model is *used for the wrong purpose*. The JPMorgan London Whale case described in Chapter 4 was partly a model risk failure: the CIO's VaR model was changed to reduce reported risk, and the change was not independently challenged. Model risk identification must examine: which models are used for decisions that could produce material loss? How are model limitations documented and communicated? Where are models being used outside their validated scope?

### 6. ICT and Cyber Security Assessment

ICT risk identification must be consistent with **EBA GL/2019/04** (Guidelines on ICT and Security Risk Management). The institution must classify and maintain an inventory of all information assets and ICT systems, conduct annual ICT risk assessments, and identify risks arising from ICT change management, data integrity, and business continuity of ICT services.

Cyber risk identification has a characteristic that distinguishes it from most other risk types: the threat landscape changes continuously and adversarially. Unlike credit risk, where the drivers are economic conditions and borrower behaviour, cyber risk is driven by intelligent adversaries who actively seek and exploit vulnerabilities. This means the identification process must incorporate external threat intelligence — not just internal vulnerability assessment — and must be refreshed more frequently than the annual cycle. ICT risk identification should connect to the event-driven update triggers defined in Chapter 3: a material cyber incident anywhere in the industry should prompt reassessment of the institution's own exposure.

### 7. AML/CFT and Financial Crimes Assessment

Anti-money laundering and counter-terrorist financing risk identification follows **EU AMLD6** and local AML/CFT regulations. The institution must conduct entity-level ML/TF risk identification and assessment aligned with national risk assessments. Critically, AML/CFT risks must be identified for all new products, services, and delivery channels **before launch** — not retrospectively.

Financial crimes assessment covers money laundering, terrorist financing, sanctions evasion, fraud, bribery, and corruption. The identification challenge is that these risks are deliberately concealed by the actors creating them. Unlike operational risk, where failures are usually visible after the fact, financial crime risks may persist for years before detection — as Deutsche Bank's mirror-trading scheme, described in Chapter 4, demonstrated. The specialist function must therefore look for structural indicators: product features that facilitate anonymity, delivery channels that reduce oversight, customer segments with inherently higher ML/TF risk, and geographic exposures to high-risk jurisdictions.

### 8. Third-Party and Outsourcing Risk Assessment

Per the **EBA Outsourcing Guidelines**, the institution must maintain a comprehensive outsourcing register, identify risks associated with each material outsourcing arrangement — including sub-outsourcing and fourth-party dependencies — and assess concentration risk where multiple critical services depend on the same provider or geographic location.

Third-party risk identification has become materially more important as banks outsource critical functions to a decreasing number of cloud providers, technology vendors, and service companies. The concentration dimension is critical: if five critical functions depend on a single cloud provider, the failure of that provider is not five independent operational risks — it is one systemic risk. The identification must look through the bilateral relationship to the aggregate dependency.

### 9. Traded Risk Assessment

Traded risk covers market, credit, and operational risks arising from trading activities. This sub-process is owned by the Market Risk or Trading Risk function and must identify risks specific to the trading book: position concentration, liquidity risk in held instruments, counterparty credit risk in OTC derivatives, basis risk between hedges and underlying positions, and the operational risks embedded in trade execution, booking, and settlement.

Traded risk identification interfaces directly with the front office and must incorporate trader input — not just risk function analysis. The traders themselves are often the earliest identifiers of market dislocations, liquidity deterioration, or counterparty stress. The identification process must create channels for that information to flow into the formal inventory.

### 10. Treasury Risk Assessment

Treasury risk covers risks to liquidity, funding, and capital structure. The Treasury or Asset-Liability Management (ALM) function owns this sub-process and must identify: funding concentration risk (the Northern Rock failure described in Chapter 5), interest rate risk in the banking book, intraday liquidity risk, contingent liquidity demands from off-balance-sheet commitments, and currency mismatch risk.

Treasury risk identification has a structural challenge: many of the risks it must identify are created by the commercial activities of other business units. Loan growth creates funding requirements. Derivative positions create contingent collateral demands. International expansion creates currency mismatches. The treasury sub-process must therefore receive inputs from all business units — not just identify risks within its own operations — and must assess aggregate institutional exposure, not just treasury-specific risk.

---

## When Bottom-Up Identification Fails: AIB and John Rusnak

In February 2002, Allied Irish Banks disclosed that a foreign exchange trader named John Rusnak at its US subsidiary, Allfirst Financial, had concealed $691 million in losses through fictitious option trades. The losses had accumulated over several years. Rusnak was sentenced to seven and a half years in prison. AIB absorbed the full loss. Allfirst was subsequently sold to M&T Bank.

The Rusnak case is a textbook failure of bottom-up identification across geographic boundaries. Allfirst operated with significant autonomy from AIB's Dublin headquarters. The subsidiary had its own risk management function, its own reporting lines, and its own operational processes. AIB's central risk function relied on local management assurances that risks were being properly identified and controlled.

Rusnak exploited weak back-office confirmation processes for FX options. He created fictitious option trades that offset his real positions, making his portfolio appear hedged when it was massively exposed. The back-office processes that should have independently confirmed these trades with counterparties were inadequate — confirmations were not obtained, or were fabricated by Rusnak himself.

Every element of this failure maps to a bottom-up identification deficiency:

- **No standardised template:** Allfirst's risk reporting to AIB used locally developed formats that did not capture the granular driver and control information a standardised template would require. The parent bank received summary data, not analytical detail.
- **No structured technique applied:** No one had performed an FMEA on the FX options booking and confirmation process. A systematic examination of each process step would have identified that the confirmation process depended on a single point of failure — the same trader whose positions were being confirmed.
- **No independent control effectiveness assessment:** The current controls field — had it existed in a standardised template — would have required someone to assess whether the back-office confirmation process actually worked. In Allfirst, the answer was that it did not, but no one was required to ask the question.
- **Geographic separation:** The specialist traded risk assessment for the FX desk was conducted locally, with no integration into AIB's central risk identification process. The Risk Identification Lead — had one existed with the mandate described in Chapter 3 — would have been responsible for ensuring that the subsidiary's risk assessment met the same standards as every other business unit.

**What was missing:** A standardised bottom-up process requiring Allfirst to complete the same risk assessment template as every other AIB business unit, using the same taxonomy, the same scoring methodology, and the same control effectiveness assessment — with the outputs submitted to a central function that could identify gaps, challenge local assurances, and reconcile subsidiary risks against the enterprise view.

---

## The Same Failure, Repeated: UBS and Kweku Adoboli

Nine years after Rusnak, in September 2011, UBS disclosed that a trader named Kweku Adoboli on its London Delta One desk had concealed $2 billion in losses from unauthorised ETF trading by creating fictitious hedging positions. Adoboli exploited gaps between the bank's trading and settlement systems — he booked fictitious trades that offset his real positions, and the reconciliation processes that should have detected the discrepancies were insufficiently automated. He was sentenced to seven years.

The UBS case is remarkable because it occurred *after* the global financial crisis, *after* UBS had suffered $37 billion in losses from structured credit exposures, *after* the Swiss National Bank had created a special purpose vehicle to absorb $39 billion in toxic assets, and *after* UBS had undertaken a comprehensive risk management overhaul. Despite all of this, the bottom-up identification process still contained the same fundamental gap: fictitious trades booked against genuine positions were not independently verified.

The RCSA for the Delta One desk — which UBS undoubtedly conducted, given the regulatory requirements — had not identified that the control framework assumed trade authenticity rather than testing it. The control assessment said reconciliation processes existed. It did not ask whether those processes could detect deliberately fabricated trades. The FSA fined UBS 29.7 million for systems and controls failures. The incident accelerated UBS's strategic exit from large parts of investment banking.

The Adoboli case, following Kerviel at Societe Generale in 2008 and Rusnak at AIB in 2002, demonstrates that rogue trading is not an unpredictable individual event. It is a recurring operational risk with identifiable structural preconditions: a trader who understands the control chain, inadequate independent verification of trade authenticity, and an RCSA process that assesses controls against design specification rather than against determined circumvention.

**What was missing:** An RCSA process that incorporated external loss data — Kerviel and Rusnak were both available as inputs — to challenge the assumption that existing controls were adequate. A traded risk assessment that examined not just whether controls existed, but whether they could withstand deliberate exploitation. And a bottom-up template that required the business unit to assess control effectiveness against specific failure scenarios drawn from the industry loss database.

---

## The Integration Challenge

Ten specialist sub-processes, each owned by a different function, each with its own expertise and regulatory requirements, each producing risk identification outputs that must feed into a single unified inventory. This is the integration challenge, and it is where the Risk Identification Lead earns their title.

The failure mode is predictable: each specialist function develops its own methodology, its own templates, its own scoring scales, and its own reporting cadence. The conduct risk assessment uses a five-point likelihood scale while the ICT assessment uses a three-point scale. The RCSA classifies risks using Basel operational risk categories while the AML/CFT assessment uses FATF risk categories. The third-party risk assessment tracks 200 outsourcing arrangements while the treasury risk assessment has no visibility into which of those arrangements affect its liquidity contingency plans.

The result is not a risk inventory. It is ten separate inventories with no common language and no means of aggregation.

The four integration requirements from the methodology are designed to prevent this:

1. **Common taxonomy.** Every specialist sub-process must classify its risks using the institution's L1/L2/L3 taxonomy. The RCSA does not get to use Basel categories as a substitute. The conduct risk assessment does not get to use FCA categories as a substitute. The institution's taxonomy — mapped to regulatory categories through the regulatory mapping table described in Chapter 4 — is the single classification standard.

2. **Same four-dimensional scoring methodology.** Every risk, regardless of which sub-process identified it, must be scored using the same impact dimensions (financial, reputational, regulatory, customer, operational) and the same likelihood scales. Detailed scoring methodology is described in Chapter 9. The principle here is uniformity: a "high impact" conduct risk and a "high impact" ICT risk must mean the same thing.

3. **Standardised template submission.** Every specialist sub-process must submit its identified risks via the eleven-field template. This forces each function to express its specialist analysis in common terms — taxonomy classification, drivers, controls, data quality rating — that the Risk Identification Lead can aggregate and compare.

4. **Participation in reconciliation.** Every specialist function must participate in the reconciliation process described in Chapter 8, where top-down and bottom-up outputs are compared, gaps identified, and coverage confirmed. This is where the Risk Identification Lead challenges: has the RCSA captured the same operational risks that the top-down workshop identified? Has the traded risk assessment captured the risks that the treasury assessment's liquidity scenarios depend on? Are there gaps between specialist functions where risks could fall?

The Risk Identification Lead is responsible for ensuring that these four requirements are met. This is not a coordination role. It is a quality assurance role with challenge authority. When a specialist function submits risks classified using its own taxonomy rather than the institution's, the Risk Identification Lead sends it back. When an RCSA produces the same risk list as last year with no reference to recent loss events, the Risk Identification Lead challenges it. When the third-party risk assessment does not include an assessment of concentration across providers, the Risk Identification Lead escalates the gap.

---

## From Compliance Theatre to Genuine Identification

The difference between a bottom-up process that works and one that produces compliance theatre comes down to three things.

**First, the techniques must be applied.** A template without a technique is a data entry exercise. Every business unit must use at least one structured identification technique — checklists for comprehensive coverage, Ishikawa for causal analysis, FMEA for critical processes, structured interviews for capturing distributed knowledge. The Risk Identification Lead should specify minimum technique requirements based on the risk profile and complexity of each business unit.

**Second, the inputs must be current.** The starting universe built in Phase 1 (Chapter 5), the PESTLE assessment, the internal context analysis, and the industry loss database must all feed into the bottom-up process — not just the top-down workshops. Business units completing their self-assessments must receive the same briefing materials that workshop participants receive. If a peer institution has suffered a material loss in the past quarter, every relevant business unit should be prompted to assess whether the same risk exists in their operations.

**Third, the output must be challenged.** The Risk Identification Lead reviews every submission against three tests: Has the risk list changed since the last cycle? If not, why not — has genuinely nothing changed, or has the assessor simply rolled forward? Are the driver fields populated with specific, analytical content, or with generic descriptions? Are the control effectiveness ratings supported by evidence, or by assumption?

A useful discipline is requiring every business unit to identify at least three *new* risks or *materially changed* risks each annual cycle. Not because three is a magic number, but because the external environment, the business model, the regulatory landscape, and the technology infrastructure all change continuously. An honest assessment will always find something new. If it does not, the assessor has not looked.

---

## The Output

A well-functioning bottom-up process produces a **comprehensive risk register of 100 to 500 risks** across all business units, incorporating outputs from all ten specialist sub-processes. The register is organised by the institution's risk taxonomy, scored using the common methodology, documented in standardised templates, and accompanied by data quality ratings that create transparency about the evidential basis for each assessment.

This register is not the final risk inventory. It is one of two inputs — alongside the top-down outputs described in Chapter 6 — into the reconciliation process that produces the enterprise portfolio view. The bottom-up register provides granular coverage. The top-down outputs provide strategic coverage. Neither alone is sufficient.

The register must be designed for reconciliation. Every risk must carry its taxonomy classification, enabling comparison with the top-down principal risk list. Every risk must identify its business unit of origin, enabling the Risk Identification Lead to check coverage across all units. Every specialist sub-process output must be traceable to its source function, enabling the reconciliation to verify that all ten sub-processes have contributed.

---

## The Bridge to Reconciliation

The bottom-up track has now produced its output: hundreds of granular risks, identified through structured techniques, captured in standardised templates, submitted by business units and specialist functions across the institution. The top-down track, described in Chapter 6, has produced its output: a principal risk list of fifteen to thirty strategic risks, an emerging risk register, an assumption register, a disagreement log, and a taxonomy gap list.

These two outputs must now be brought together. The next chapter describes the reconciliation process — the iterative comparison between top-down and bottom-up that identifies gaps, resolves conflicts, escalates bottom-up risks of strategic significance, assigns top-down risks to business unit owners, and ultimately produces the enterprise portfolio view that gives the Board and CRO a single, integrated picture of the institution's risk landscape. It is in reconciliation that most banks fail. They perform either top-down or bottom-up, but not both — and they almost never iterate between them. The methodology requires both tracks precisely because the reconciliation between them is where the most valuable risk identification occurs.
