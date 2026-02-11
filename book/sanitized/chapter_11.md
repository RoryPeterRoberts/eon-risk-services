# Chapter 11: Documentation: The Living Risk Inventory

## The Risk Register That Nobody Read

In 2018, when Denmark's largest financial scandal finally became undeniable, investigators at Danske Bank confronted a familiar paradox. The bank had a risk inventory. It had risk policies. It had documented governance frameworks and named risk owners across its operations. Yet approximately €200 billion in suspicious transactions had flowed through its Estonian branch over nearly a decade, processed by non-resident customers — primarily from Russia and former Soviet states — through a small peripheral operation that represented a fraction of the group's balance sheet.

The Estonian branch had its own risk documentation. Group-level compliance had its own risk documentation. The problem was not that risks were undocumented. The problem was that the documentation existed in fragments that no one had assembled into a single, coherent picture. The branch's non-resident portfolio was documented locally as a profitable niche business. At group level, the Estonian operation appeared as a small but high-performing subsidiary. Nowhere in Danske Bank's risk inventory did a single entry read: *concentrated high-risk AML exposure in a peripheral branch operating under disconnected compliance oversight, generating returns inconsistent with legitimate transaction volumes.* The risk was identified in pieces. It was documented in pieces. And because the documentation never forced those pieces into a single inventory with enterprise-level fields, the institution processed €200 billion in suspicious flows before the outside world forced a reckoning. The CEO resigned. Fines exceeded €2 billion. The Estonian licence was withdrawn. The stock price halved.

Danske Bank did not lack documentation. It lacked a **living risk inventory** — a single, structured, enterprise-wide register that imposes enough discipline on documentation that risks identified in one part of the institution cannot be invisible to the people responsible for the whole.

This chapter describes what that inventory looks like, how it is built, and — most importantly — how it is maintained so that it remains a decision tool rather than a compliance artefact.

---

## Phase 4 in Context

The methodology's first three phases have now completed their work. Phase 1 (Chapter 5) established the context — external environment, internal context, risk culture, risk criteria, starting universe, and straw man risk list. Phase 2 (Chapters 6–8) identified risks through the dual-track process — top-down workshops using SWIFT and Delphi, bottom-up templates and specialist sub-processes, reconciliation, and the enterprise portfolio view. Phase 3 (Chapters 9–10) assessed those risks — four-dimensional scoring, data quality ratings, materiality determination, risk interaction analysis, bow-ties, and concentration analysis.

Phase 4 is where all of that work is captured in a structured, auditable, and — critically — maintainable form. Documentation is not an administrative afterthought. It is the mechanism through which identification becomes institutional knowledge. Without it, the work of Phases 1 through 3 exists only in the minds of the people who did it, and institutional memory in banking has a half-life measured in bonus cycles.

ISO 31010 requires a "structured record not just of risks identified but also of information used, assumptions made, and limitations." That transparency requirement is the standards basis for everything in this chapter. The risk inventory is how you deliver it.

---

## The Risk Inventory: Fourteen Fields

The risk inventory is the central register of all identified risks. It is a living document, not a point-in-time snapshot. Every risk that survives the identification and assessment process — whether surfaced through the top-down workshops, the bottom-up templates, the specialist sub-processes, or the reconciliation — enters the inventory with a complete set of structured fields.

I specify fourteen fields. This is not arbitrary. Each field exists because its absence has, in documented cases, contributed to a failure of risk identification or risk management. Some of these fields were established in Chapter 7's standardised risk assessment template (eleven fields for bottom-up submissions) and Chapter 9's assessment record (seven fields). The inventory integrates and extends both, creating a single authoritative record for each risk.

### The Fourteen Fields

| # | Field | Description | Source Phase |
|---|---|---|---|
| 1 | **Risk ID** | Unique identifier, persistent across cycles | Phase 2 |
| 2 | **Taxonomy Classification** | L1 / L2 / L3 classification per institutional taxonomy | Phase 2 |
| 3 | **Risk Definition** | Plain-language description of the risk, its nature, and scope | Phase 2 |
| 4 | **COSO Objective Category** | Strategic / Operations / Reporting / Compliance | Phase 1 |
| 5 | **Risk Owner** | Named individual — not a committee, not a function | Phase 2 |
| 6 | **Inherent Risk Score** | Four-dimensional: Impact (with dominant dimension noted), Likelihood, Vulnerability, Speed of Onset | Phase 3 |
| 7 | **Control Summary** | Key controls with type (preventive/detective/corrective) and assessed effectiveness (1–5 scale) | Phase 2–3 |
| 8 | **Residual Risk Score** | Four-dimensional score after control effectiveness applied | Phase 3 |
| 9 | **Material (Y/N)** | Whether the risk exceeds the materiality threshold defined in Phase 1 | Phase 3 |
| 10 | **Data Quality Rating** | High / Medium / Low / Very Low — with implications for conservatism adjustments | Phase 3 |
| 11 | **Risk Interaction Summary** | Cross-references to correlated, triggering, or amplifying risks from the interaction matrix | Phase 3 |
| 12 | **Key Risk Indicators** | KRIs with current values and thresholds (green / amber / red) | Phase 2–3 |
| 13 | **Trend Indicator** | Increasing / Stable / Decreasing — direction of travel since last assessment | Phase 3 |
| 14 | **Date of Last Review** | When this risk was most recently assessed, with next scheduled review date | Ongoing |

Every field serves a purpose. Remove any one and you create a gap that, under pressure, becomes the path of least resistance for the institution to ignore what it has found.

### Why Each Field Matters

**Risk ID** provides persistence. When a risk is re-assessed in the quarterly cycle (Chapter 13), the Risk ID connects the current assessment to its history. Without it, the same risk can appear as "new" each cycle, losing trend data and making it impossible to track whether the institution's exposure is growing or shrinking.

**Taxonomy Classification** ensures the risk is findable. If an analyst searches the inventory for all L1 Credit Risks, every credit risk must appear. If a risk is misclassified — or worse, unclassified — it falls outside the enterprise portfolio view. The JPMorgan London Whale failure, where the CIO's positions were classified as hedging rather than proprietary trading, demonstrates what happens when classification determines oversight.

**Risk Definition** forces clarity. A risk defined as "market conditions" tells the reader nothing. A risk defined as "a sustained increase in credit spreads on the institution's senior unsecured debt funding, triggered by rating agency action or counterparty confidence loss, increasing wholesale funding costs beyond the level assumed in the treasury plan" tells the reader exactly what is at stake, what drives it, and why it matters. The definition must be specific enough that two independent analysts would agree on whether a given event constitutes a materialisation of this risk.

**COSO Objective Category** (Strategic, Operations, Reporting, Compliance) prevents the institution from identifying only financial risks while ignoring strategic, reporting, and compliance exposures. Chapter 4 established the COSO cube as a completeness check. The inventory encodes that check at the individual risk level.

**Risk Owner** means a named individual. Chapter 3 established this principle: "committee ownership dilutes accountability." The inventory enforces it. When a risk materialises, the Board must be able to identify who was accountable for monitoring it. When an owner changes role, the inventory must be updated within the same cycle — orphaned risks are invisible risks.

**Inherent Risk Score** captures the four-dimensional assessment from Chapter 9: Impact (with the dominant dimension — financial, regulatory, reputational, or customer/operational — noted), Likelihood, Vulnerability, and Speed of Onset. Recording all four dimensions, not just a single composite score, preserves the analytical richness that the assessment methodology was designed to produce. A risk scored Moderate on financial impact but Extreme on regulatory impact tells a different story from a composite "High."

**Control Summary** records not just what controls exist but what type they are (preventive, detective, corrective) and how effective they are (the 1–5 scale from Chapter 9). Chapter 7 identified that one of the three most common bottom-up submission failures is controls "defaulting to effective without evidence." The inventory field demands specificity.

**Residual Risk Score** is the four-dimensional score after controls. The gap between inherent and residual scores reveals control dependency — how much the institution is relying on controls to manage this risk. A large gap with a control effectiveness rating of 3 or below is a signal that warrants attention.

**Material (Y/N)** is the gatekeeper. Material risks — typically twenty to sixty in a large institution — receive the full treatment: dedicated risk profiles, bow-tie diagrams, assigned KRIs, capital planning integration, and Board reporting. The materiality threshold was defined in Phase 1 (Chapter 5) and applied in Phase 3 (Chapter 9). The inventory records the outcome.

**Data Quality Rating** is one of the most important fields in the inventory, precisely because it is the one institutions most want to ignore. A rating of "Very Low" attached to a risk scored as non-material creates discomfort — it means the institution has classified something as unimportant based on evidence it does not trust. Chapter 9 established three operational consequences for low data quality: conservatism adjustments, sensitivity testing, and Board transparency. The inventory is where those consequences become visible.

**Risk Interaction Summary** captures the output of Chapter 10's interaction matrix — which other risks this risk can trigger, amplify, or be triggered by. Without this field, the inventory is a list of independent items. With it, the inventory becomes a map of the institution's interconnected risk landscape. The Lehman Brothers cascade — credit triggering market triggering liquidity triggering operational triggering reputational — was invisible precisely because no documentation connected individually assessed risks into causal chains.

**Key Risk Indicators** with current values and traffic-light thresholds transform the inventory from a periodic assessment document into a continuous monitoring tool. A KRI in amber is an early warning. A KRI in red demands immediate investigation. Without KRIs attached to specific risks in the inventory, monitoring becomes a separate activity disconnected from identification — and the gap between identification and action widens.

**Trend Indicator** answers the question the Board asks most often: "Is this getting better or worse?" An Increasing trend on a material risk with amber KRIs and a Data Quality Rating of Low is a combination that should trigger immediate escalation. No single field in isolation produces that signal. The inventory structure produces it by placing all relevant information in one record.

**Date of Last Review** creates accountability for currency. A risk last reviewed fourteen months ago in an institution with quarterly cycles has been missed. The field makes that failure visible to anyone who opens the inventory — including Internal Audit, which Chapter 3 established as providing independent assurance over the process itself.

---

## The Compliance Artefact Problem

If the fourteen fields sound like a bureaucratic exercise, consider what happens without them.

Chapter 7 described **compliance theatre** — the appearance of risk identification without the substance. Bottom-up submissions that roll forward prior year without genuine analysis. Risk definitions copied verbatim from one cycle to the next. Control effectiveness ratings that never change. The inventory equivalent of compliance theatre is a risk register with the right number of columns but the wrong kind of content: generic definitions, stale assessments, no interaction data, no KRI values, and review dates that tell you the register was updated on the same day by the same person for every risk in the book.

This occurs in practice. Reconciliation documentation from a given cycle may consist of a merged spreadsheet with colour-coding but no gap analysis, no challenge sessions, and no enterprise portfolio view. The institution has two identification tracks but no reconciliation. And the documentation — which should make the absence of reconciliation visible — instead conceals it, because the spreadsheet looks complete to anyone who does not know what to look for.

The fourteen-field structure is designed to make the absence of substance visible. An empty Risk Interaction Summary field is a gap you can see. A Data Quality Rating of "Medium" applied to every risk in the inventory is a pattern that Internal Audit can challenge. A Trend Indicator that has been "Stable" for twelve consecutive quarters on a risk whose external environment has materially changed is a flag. The structure creates the conditions for accountability.

---

## Risk Profiles: The Material Risk Deep Dive

The fourteen-field inventory captures every identified risk. For the twenty to sixty risks classified as material, the inventory entry alone is not sufficient. Each material risk requires a **risk profile** — a structured narrative that provides the depth of analysis necessary for Board-level decision-making, capital planning integration, and regulatory engagement.

The risk profile contains fourteen elements:

1. **Risk definition** — the same plain-language description as the inventory, expanded where necessary to capture nuance that a single field cannot convey
2. **Taxonomy classification** — L1 / L2 / L3
3. **COSO objective category** — Strategic / Operations / Reporting / Compliance
4. **Underlying drivers** — direct and indirect causes, using Ishikawa analysis where appropriate; this is where the driver fields from the bottom-up template (Chapter 7) are synthesised with the top-down analysis from workshops
5. **Current exposure** — quantitative metrics where available; dollar exposure, notional amounts, portfolio concentrations, customer counts
6. **Risk appetite** — the Board-approved appetite for this risk and the current position against it; breaches highlighted
7. **Key controls** — expanded from the inventory's Control Summary; includes control type, effectiveness rating, evidence basis for the rating, and any control gaps identified in bow-tie analysis (Chapter 10)
8. **Cost-benefit assessment** — for risks where new controls have been proposed or existing controls are being reconsidered, the proportionality assessment from Chapter 10
9. **Key Risk Indicators** — leading indicators with thresholds, current values, and trend; expanded from the inventory's KRI field to include data source, refresh frequency, and escalation protocol
10. **Scenario linkage** — which stress scenarios (ICAAP, ILAAP, CCAR) map to this risk; how the risk's assessment scores inform scenario severity; this is the bridge between risk identification and capital planning that Chapter 12 will describe
11. **Data quality rating** — the confidence level of the assessment, what evidence supports it, and specifically what additional data or analysis would improve it
12. **Enterprise interactions** — the full interaction analysis from Chapter 10: which other risks this risk can trigger, amplify, or be triggered by; bow-tie diagram reference; concentration analysis findings
13. **Trend and outlook** — direction of travel with forward-looking assessment; not just "Increasing" but why it is increasing, what would reverse the trend, and what the risk owner is doing about it
14. **Risk owner** — the named individual accountable, with escalation path to CRO and Board Risk Committee

The risk profile is not a form to be filled in. It is a structured analysis. When risk profiles are first introduced, initial submissions from business units are often precisely the kind of compliance theatre described above — boilerplate definitions, controls listed as "effective" without evidence, and outlook sections that read like reassurance rather than analysis. The first cycle typically requires significant push-back from the Risk Identification Lead. By the second cycle, business units understand that risk profiles with thin content will be challenged and returned. By the third cycle, quality improves materially — not because people have become better risk analysts overnight, but because the structure and the challenge process create accountability for substance.

### Risk Profiles as Board Communication

The risk profile serves dual purposes. It is a practitioner tool — detailed enough for the risk owner and the Risk Identification Lead to manage the risk actively. It is also a Board communication tool. The principal risk report, which Chapter 3 defined with ten specific contents, draws directly from these profiles. When the Board Risk Committee asks "What is our current position on cyber risk?" — the risk profile provides the answer: the definition, the exposure, the appetite position, the controls, the KRIs, the trend, and the interactions with other risks.

A Board member reading a well-constructed risk profile should understand within five minutes: what the risk is, how bad it could get, what is being done about it, how confident the institution is in its assessment, and what has changed since the last report. If the profile cannot deliver that in a structured one-to-two-page document, it needs to be rewritten.

A practitioner should be under no illusion that a sound methodology guarantees sound outcomes — institutional culture and commercial pressure can undermine even well-designed processes. The risk profile provides transparency and accountability, but it cannot substitute for the Board's judgment and willingness to act on what the profile reveals.

### Bow-Tie Integration

For the most critical material risks — typically the five to ten risks that the interaction matrix identified as propagation nodes or that received Extreme ratings on any dimension — the risk profile includes or references a full bow-tie diagram. Chapter 10 described bow-tie analysis in detail: causes on the left, preventive barriers, escalation factors, the precisely defined risk event at the centre, consequences mapped to the four-dimensional framework on the right, mitigating barriers, and recovery controls.

The bow-tie diagram is referenced in the risk profile rather than reproduced in full, because bow-ties are living documents that are updated as controls change. The profile records the date of the most recent bow-tie review, the key findings, and any escalation factors or barrier weaknesses that have been identified. This ensures the profile remains current without duplicating the bow-tie's content.

---

## The Audit Trail: Every Change Documented

The risk inventory is not a static document that is produced once and filed. It is updated through every quarterly re-identification cycle (Chapter 13), every event-driven update, and every time a KRI breaches a threshold. Each of those updates creates a change to the inventory — a risk score revised upward, a new risk added, an existing risk reclassified, a risk owner changed, a control assessment modified.

Every change must be documented with three elements:

1. **Date** — when the change was made
2. **Author** — who made the change (and under what authority — Risk ID Lead, risk owner, CRO approval)
3. **Reason** — why the change was made, with reference to the evidence that prompted it

This is not bureaucracy. It is the mechanism through which the inventory becomes auditable. When Internal Audit reviews the risk identification process — as Chapter 3 established it should — the audit trail is the evidence base. Can the auditor trace a risk from its first identification through every subsequent assessment, seeing how the score changed, who changed it, and why? If yes, the process has integrity. If no, the inventory is a document with no provenance.

The audit trail also creates institutional memory. When a new CRO arrives and asks "Why was this risk downgraded two quarters ago?" — the trail provides the answer. When a regulator asks "When did you first identify this risk, and how has your assessment evolved?" — the trail provides the answer. Without it, the institution is relying on the memory of individuals who may no longer be there.

### The Disagreement Log and Assumption Register

Two outputs from earlier phases require specific documentation treatment in the inventory.

The **disagreement log**, introduced in Chapter 6 and referenced in the challenge sessions of Chapter 8, records instances where senior participants held materially different views about a risk's nature, severity, or even existence. Chapter 9 described how the four-dimensional framework often resolves disagreement — participants may agree on different dimensions — but where disagreement persists, it must be preserved in the inventory. The minority view, the evidence basis for both positions, and the data quality ratings are all documented. The Board receives both views.

Disagreement is information. A risk where the CRO and the head of the investment bank genuinely disagree on severity after structured analysis is disproportionately likely to be one of the risks the institution most needs to understand. Averaging their views destroys that signal. The inventory preserves it.

The **assumption register**, also introduced in Chapter 6, records key assumptions that were identified and challenged during workshops. Assumptions about correlations, about the effectiveness of hedging strategies, about the stability of funding markets, about the behaviour of counterparties under stress. Each assumption is linked to the risks it underpins. When the assumption is revisited in a subsequent cycle — as Chapter 13's ongoing process requires — the inventory provides the reference point.

---

## The Inventory as Enterprise Infrastructure

The fourteen-field structure and the risk profile format are not just documentation standards. They are the infrastructure through which the risk identification process connects to the institution's management processes. Every downstream use of risk identification outputs depends on the inventory being complete, current, and structured.

### Feeding the Principal Risk Report

Chapter 3 defined the principal risk report with ten specific items: material risks with scores, consequence dimensions, trends, appetite breaches, new or emerging risks, reclassified risks, KRI dashboard, data quality distribution, enterprise portfolio view, and process performance indicators. Every one of those items is drawn from the inventory. The principal risk report is not a separate analytical exercise. It is a presentation layer over the inventory. If the inventory is incomplete, the Board report is incomplete. If the inventory is stale, the Board is making decisions on outdated information.

### Feeding Capital Planning

Chapter 12 will describe how the inventory integrates with ICAAP, ILAAP, and CCAR capital planning. The connection is direct: each material risk in the inventory maps to one or more stress scenarios. The inventory's four-dimensional scores inform scenario severity. The Data Quality Rating informs the level of conservatism applied to management judgement overlays. The scenario linkage field in the risk profile is where identification meets capital adequacy.

### Feeding Regulatory Reporting

The regulatory mapping table, introduced in Chapter 4, translates the institution's internal taxonomy into each regulator's categories. The inventory is what gets translated. When the PRA examines the ICAAP, it assesses the quality and comprehensiveness of the risk inventory. When the Fed reviews the CCAR Material Risk Inventory, it evaluates whether the quarterly re-identification has been substantive. The inventory is the artefact that regulators examine.

### Feeding the Ongoing Cycle

Chapter 13 will describe the quarterly re-identification cycle, the annual full re-identification, and event-driven updates. Each of these processes takes the current inventory as its starting point — the prior quarter's inventory is the baseline against which new identification is compared. Risks that were in the inventory but no longer appear must be explicitly retired, with documented reasons. New risks must be explicitly added, with documented sources. Changed assessments must show what changed and why. The inventory is the continuity mechanism that prevents each cycle from starting with a blank page.

---

## What Good Looks Like — and What Bad Looks Like

### Signs of a Living Inventory

A living inventory has observable characteristics:

- **Risk definitions vary in specificity and language** — they were written by different people at different times about genuinely different risks, not copied from a template
- **Scores change between quarters** — the external environment changes, controls are strengthened or weakened, new information emerges; a stable inventory in a changing world is a sign that nobody is looking
- **Data Quality Ratings are distributed** — some risks have High ratings (good data, validated models, extensive history) and some have Very Low (emerging risk, limited data, high uncertainty); an inventory where everything is rated Medium is an inventory where nobody has made a judgement
- **Interaction summaries are populated** — risks reference other risks; the inventory reads as a network, not a list
- **Review dates are staggered** — different risks were reviewed at different times, reflecting the quarterly cycle, event-driven updates, and the natural rhythm of an active process
- **The disagreement log has entries** — if no one has ever disagreed about any risk in the inventory, the institution is not challenging hard enough

### Signs of a Compliance Artefact

A compliance artefact also has observable characteristics:

- **All definitions use the same sentence structure** — "the risk that [X] could [Y]" repeated two hundred times suggests a template-filling exercise, not genuine analysis
- **All scores are clustered in the middle of the scale** — Moderate impact, Possible likelihood, Medium data quality — the path of least resistance for a risk assessor who does not want to draw attention
- **No risk has an Extreme rating on any dimension** — the institution has identified nothing that could threaten its viability, which is either a remarkable achievement or a remarkable failure of candour
- **Control effectiveness is uniformly high** — every control is effective, which contradicts the operational experience of every institution that has ever existed
- **The Risk Interaction Summary field is blank** — risks exist in isolation, which they do not
- **Every risk was last reviewed on the same date** — the entire inventory was updated in a single batch, probably in the week before the Board Risk Committee meeting, probably by one person

Both patterns occur in practice. The difference is not the structure — both may have fourteen fields. The difference is whether the structure is enforced through the challenge process (the Risk Identification Lead sending back non-compliant submissions, as Chapter 7 described), the governance framework (the Board Risk Committee asking substantive questions, as Chapter 3 described), and the audit process (Internal Audit testing quality, not just existence).

---

## Documentation Failures in Practice

The Danske Bank case that opened this chapter illustrates documentation failure at the enterprise level — a fragmented inventory that never forced the institution to see its aggregate AML exposure. Two further cases illustrate different dimensions of the same problem.

### AMP: When Complaints Data Is Not a Risk Indicator

AMP, one of Australia's largest financial services companies, systematically charged financial advice fees to customers who received no service — including deceased customers — over a prolonged period. The failures were eventually exposed through the Australian Royal Commission into Misconduct in the Banking, Superannuation and Financial Services Industry in 2018.

AMP had risk identification frameworks. It had a risk register. What it did not have was an inventory that aggregated customer complaints as a risk indicator. Complaints data existed — customers had complained about being charged for services they did not receive. But the complaints were categorised as individual customer service issues, handled through operational channels, and never aggregated or escalated into the risk identification process. The risk register contained entries for conduct risk in generic terms. It did not contain an entry that said: *systemic pattern of fee charging without service delivery, evidenced by complaint volumes across multiple advice channels, representing regulatory, reputational, and customer detriment exposure.*

The inventory structure matters here. If AMP's risk inventory had required KRIs with thresholds attached to its conduct risk entries — and if one of those KRIs had been complaint volumes by category — the systemic pattern would have become visible as a red indicator long before the Royal Commission made it front-page news. If the Data Quality Rating had forced the institution to declare the evidence basis for its conduct risk assessment, the absence of aggregated complaints data would have been flagged as a gap. The CEO resigned. Remediation exceeded AUD 600 million. The share price halved.

**What was missing:** An inventory structure that required granular KRIs attached to conduct risk entries, that aggregated complaints data as a risk indicator rather than treating individual complaints as operational noise, and that forced a Data Quality Rating disclosure on the evidence basis for conduct risk assessment.

### SNS Reaal: When the Subsidiary Reports Separately

SNS Reaal, a Dutch banking and insurance group, was nationalised in February 2013 at a cost of €3.7 billion to the Dutch taxpayer. The cause was its property finance subsidiary, SNS Property Finance, which had accumulated €7.4 billion in commercial real estate loans that became severely impaired in the Dutch property downturn.

The documentation failure was structural. SNS Property Finance operated with significant autonomy from the parent bank's risk framework. It managed its own risk identification. It reported its own risk inventory. The concentration risk it created relative to group capital was not identified at the enterprise level because the subsidiary's growth was managed and reported separately. The parent bank's inventory did not contain an entry that aggregated the subsidiary's property exposure against the group's capital base. The subsidiary's inventory did not contextualise its own exposure against the group's capacity to absorb losses.

This is a documentation architecture problem. If the group had maintained a single enterprise-wide inventory — or, at minimum, an inventory with explicit consolidation rules that required subsidiary exposures to be surfaced at group level — the concentration would have been visible. The fourteen-field structure addresses this directly: the Risk Interaction Summary field requires cross-references to correlated risks, and the enterprise portfolio view (Chapter 8) requires aggregation across all entity levels. The documentation was the gap between identification and action.

**What was missing:** An enterprise-level inventory that consolidated subsidiary risk exposures against group capital, with interaction summaries linking property concentration in the subsidiary to credit risk and capital adequacy at the parent level.

---

## Inventory Governance

The inventory requires its own governance. Who can create a new entry? Who can modify an existing one? Who can retire a risk?

### Creation

New risks enter the inventory through one of four routes:

1. **Top-down workshops** — risks identified through SWIFT and scenario analysis in the annual or quarterly cycle
2. **Bottom-up submissions** — risks identified through business unit templates, RCSA, and specialist sub-processes
3. **Reconciliation** — risks identified through the gap analysis between top-down and bottom-up tracks
4. **Event-driven updates** — risks surfaced by material events between scheduled cycles

In every case, the Risk Identification Lead is responsible for ensuring the new entry meets the fourteen-field standard before it enters the inventory. Incomplete entries are not accepted. A risk without a named owner, without a taxonomy classification, or without an initial assessment does not enter the inventory — it enters the Risk ID Lead's queue for completion.

### Modification

Risk owners can propose modifications to their entries — updated scores, revised control summaries, new KRI values. All modifications require the Risk ID Lead's review before they become effective. This is not a bottleneck; it is quality assurance. The Risk ID Lead confirms that the modification is supported by evidence, that cross-references remain consistent, and that any change to a material risk is flagged for CRO attention.

Material changes — a risk moving from non-material to material, a score increasing by more than one level on any dimension, a Data Quality Rating being downgraded — require CRO approval and are reported to the Board Risk Committee in the next principal risk report.

### Retirement

Risks do not simply disappear from the inventory. Retirement requires a documented justification: the exposure no longer exists (a business line has been exited, a counterparty relationship has been terminated), or the risk has been absorbed into another inventory entry through reclassification. The retirement reason is recorded, the retirement is approved by the Risk ID Lead (or CRO for material risks), and the retired entry remains in the inventory archive — visible for audit purposes and for trend analysis across cycles.

An inventory that shrinks without documented retirements should be treated with the same suspicion as a clean reconciliation with no gaps. Risks do not resolve themselves. If the inventory is getting smaller, either the institution is genuinely reducing its risk profile, or the process is losing track of risks it previously identified.

---

## Technology and the Inventory

The fourteen-field structure can be implemented in a spreadsheet. Experience shows that the initial inventory can be built in a structured spreadsheet before the institution invests in dedicated GRC (governance, risk, and compliance) technology. A well-structured spreadsheet with defined fields, data validation, change tracking, and version control can serve as a functional inventory for the early cycles of a risk identification programme.

But a spreadsheet has limitations that become material as the inventory matures. It does not enforce referential integrity — if a risk owner leaves and the name is updated in the inventory but not in the risk profile, there is no automatic check. It does not support the kind of network queries that the Risk Interaction Summary field demands — "show me all risks that are triggered by a liquidity event" requires either manual searching or custom formulae. It does not provide role-based access control — anyone with file access can modify any entry.

Chapter 14 will address technology in detail. For the purposes of this chapter, the principle is: **the inventory structure must be designed independently of the technology that will host it.** Define the fourteen fields, the risk profile elements, the audit trail requirements, and the governance rules first. Then select or build the technology to deliver them. Institutions that start with the technology and let the tool define the structure end up with inventories shaped by software capabilities rather than risk management requirements.

---

## The Living Document Standard

The title of this chapter uses the word "living" deliberately. A living document changes. It responds to new information. It reflects the institution's current understanding, not its understanding six months ago. The mechanisms that keep the inventory alive are the subject of Chapter 13 — the quarterly re-identification cycle, the annual full re-identification, event-driven updates, and the internal audit assurance process. But the inventory's design must anticipate those mechanisms.

Every field in the fourteen-field structure is designed to change. The Trend Indicator changes quarterly. The KRI values change as data is refreshed. The Data Quality Rating changes as evidence improves or deteriorates. The Risk Interaction Summary changes as the interaction matrix is updated. The inherent and residual scores change as the external environment evolves and controls are strengthened or weakened. A field that never changes is a field that is not being maintained.

The difference between a living inventory and a compliance artefact is not structural. It is cultural. It is whether the institution treats the inventory as its best current understanding of its risk landscape — updated, challenged, used — or as a document that satisfies a governance requirement with minimum effort. The methodology provides the structure. The governance framework (Chapter 3) provides the accountability. The ongoing cycle (Chapter 13) provides the rhythm. But the commitment must come from the institution itself.

Danske Bank had documentation. AMP had a risk register. SNS Reaal had subsidiary risk reporting. What none of them had was a living inventory — a structured, enterprise-wide, continuously maintained register that forced the institution to confront what it had found, connect what it had found to what it already knew, and act on the result.

Phase 4 is complete. The risk inventory now contains every identified risk with fourteen structured fields, every material risk with a detailed risk profile, and an audit trail that records every change. The next chapter turns to the question that gives all of this work its purpose: how the inventory integrates with the institution's capital planning, strategic planning, regulatory reporting, and Board governance — the mechanisms through which risk identification becomes institutional action.
