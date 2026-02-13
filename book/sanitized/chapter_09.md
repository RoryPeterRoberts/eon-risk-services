# Chapter 9: Assessment — Scoring, Multi-Dimensional Impact, and Data Quality

## The Risk That Was Assessed at Near-Zero

In 2005, AIG Financial Products was the most profitable division of the largest insurance company in the world. Its primary revenue engine was the sale of credit default swaps — insurance contracts that paid out if mortgage-linked CDOs defaulted. By the peak, AIG had sold protection on a CDS portfolio with $527 billion in notional exposure[^ch9-1] — of which the lethal concentration was approximately $78 billion in multi-sector CDO protection,[^ch9-2] the tranche most directly tied to subprime mortgage performance.

The risk assessment was straightforward. The CDOs AIG insured were rated AAA by every major agency. The historical default rate on AAA-rated securities was near zero. AIG's internal models, calibrated to that historical data, assigned negligible probability to a scenario in which the insured tranches would suffer losses. The financial impact, assessed on a single dimension, appeared minimal. Likelihood, assessed against historical defaults, was vanishingly small.

What the assessment did not capture was everything else.

It did not assess the regulatory consequence of a ratings downgrade triggering tens of billions in collateral calls that AIG could not meet. It did not assess the reputational destruction of the world's largest insurer requiring emergency government intervention. It did not assess the customer and operational impact of a counterparty failure that would cascade through every major bank that had purchased AIG's protection. And it did not assess the quality of the data underlying the entire analysis — models calibrated to a period in which nationwide housing prices had never declined, using correlation assumptions that had never been tested under stress.

The $85 billion Federal Reserve bailout[^ch9-3] that followed was not a failure of risk identification. AIG knew it was selling CDS. The counterparties were documented. The notional exposure was calculable. The failure was in how that exposure was assessed — a single-dimensional scoring methodology, calibrated to benign historical data of questionable relevance, that produced a near-zero risk rating for what turned out to be the single largest risk event in the history of insurance.

Phase 3 of the methodology exists to prevent that outcome. Every risk that has survived the identification and reconciliation process of Phases 1 and 2 must now be scored, assessed for data quality, evaluated on both an inherent and residual basis, and tested against a materiality threshold. The four-dimensional assessment framework that Chapter 5 (Setting the Context: External, Internal, and Risk Culture) introduced and Chapter 8 (Reconciliation and the Enterprise Portfolio View)'s enterprise portfolio view requires is the subject of this chapter.

## Why Assessment Is Not Measurement

Before examining the scoring methodology, a distinction must be drawn. Assessment, as used in this methodology, is the structured evaluation of identified risks using defined scales and criteria. It is not quantitative risk measurement. It does not replace the bank's credit risk models, market risk VaR engines, operational risk capital calculations, or stress testing programmes. Those are measurement tools that serve different purposes — capital adequacy, regulatory reporting, limit-setting.

Assessment serves the risk identification process. Its purpose is threefold: to prioritise the risk inventory so that material risks receive appropriate attention, to enable comparison across fundamentally different risk types using a common language, and to provide the Board Risk Committee with an enterprise view of the institution's risk profile that is neither so granular as to be unusable nor so aggregated as to be meaningless.

The multivoting exercise in the top-down workshop (Chapter 6 (Top-Down Identification: Workshops, SWIFT, and Delphi)) produced a preliminary prioritisation based on collective senior judgement. That prioritisation was useful for structuring the workshop's outputs, but it was not rigorous. It did not use defined scales, it did not assess non-financial consequences, it did not account for data quality, and it did not distinguish inherent from residual risk. Phase 3 replaces that preliminary view with a structured assessment that can withstand regulatory scrutiny and Board challenge.

ISO 31000 Section 5.4.3 requires that risk analysis consider consequences and their likelihood, the nature and magnitude of those consequences, complexity and connectivity, time-related factors, and the effectiveness of existing controls.[^ch9-15] ISO 31010 provides the technique framework. The four-dimensional scoring methodology that follows is the practitioner implementation of those requirements.

## The Four-Dimensional Impact Framework

The single most important design decision in the assessment framework is that impact is not assessed on one dimension. A risk that produces a modest financial loss but triggers licence revocation is not a moderate risk. A risk that costs nothing in direct financial terms but destroys client confidence and generates sustained international press coverage is not an incidental risk. A risk that causes no immediate financial impact but results in total service failure affecting millions of customers is not a minor risk.

The methodology assesses impact across four consequence dimensions. The highest-scoring dimension determines the overall impact rating. This design principle — **the dominant dimension rule** — ensures that risks with severe non-financial consequences are never understated by a benign financial assessment.

### Financial Impact

Financial impact is anchored to CET1 capital, providing a consistent denominator that scales with institutional size.

| Score | Rating | Description |
|---|---|---|
| 1 | Incidental | Less than 0.1% of CET1 capital |
| 2 | Minor | 0.1–1% of CET1 capital |
| 3 | Moderate | 1–5% of CET1 capital |
| 4 | Major | 5–15% of CET1 capital |
| 5 | Extreme | Greater than 15% of CET1 capital; threatens viability |

The CET1 anchor achieves two things. First, it makes the scale objective and auditable — a dispute about whether a risk is "moderate" or "major" can be resolved by reference to the institution's published capital position. Second, it prevents the common failure where a fixed monetary threshold (say, $100 million) is applied identically to institutions of vastly different sizes, making the scale meaningless at either end.

### Regulatory and Legal Impact

| Score | Rating | Description |
|---|---|---|
| 1 | Incidental | No regulatory impact |
| 2 | Minor | Informal supervisory feedback, minor findings |
| 3 | Moderate | Formal regulatory investigation or enforcement warning |
| 4 | Major | Formal enforcement action, significant fines, restrictions on activities |
| 5 | Extreme | Licence revocation, criminal prosecution, forced restructuring |

This dimension captures what financial impact alone cannot. Standard Chartered's $667 million sanctions fine[^ch9-4] (Chapter 3 (Governance: Who Owns What)) was a financial event, but the regulatory dimension — formal enforcement, activity restrictions, sustained supervisory scrutiny — constrained the institution's strategic options for years beyond the fine itself. Deutsche Bank's $630 million combined UK/US fines for mirror-trading[^ch9-5] (Chapter 4 (The Risk Taxonomy)) carried a regulatory impact that extended well beyond the payment: enhanced monitoring requirements, consent orders, and reputational damage with supervisors that affected every subsequent regulatory interaction.

### Reputational Impact

| Score | Rating | Description |
|---|---|---|
| 1 | Incidental | No external coverage |
| 2 | Minor | Limited trade or local press, quickly contained |
| 3 | Moderate | National press coverage, sustained for days |
| 4 | Major | International press, sustained coverage, loss of key client relationships |
| 5 | Extreme | Total loss of market confidence, Board or CEO departure, sustained international coverage |

Reputational impact is the dimension most frequently omitted from assessment frameworks and most frequently decisive in determining whether a risk event threatens institutional survival. Wells Fargo's unauthorised accounts scandal (Chapter 3) cost $3 billion in direct financial terms[^ch9-6] — large, but manageable for an institution of that size. The reputational destruction — CEO departure, Fed asset cap, sustained Congressional scrutiny, customer attrition — was the existential dimension. A single-dimensional financial assessment would have rated it as serious but manageable. The reputational score places it at the extreme end of the scale.

### Customer and Operational Impact

| Score | Rating | Description |
|---|---|---|
| 1 | Incidental | Negligible operational disruption, no customer impact |
| 2 | Minor | Limited operational disruption, minimal customer impact |
| 3 | Moderate | Significant operational disruption, noticeable customer service degradation |
| 4 | Major | Major service disruption, large-scale customer impact, material complaints |
| 5 | Extreme | Total service failure, mass customer harm, systemic operational breakdown |

This dimension captures the operational and customer consequences that may precede, accompany, or exist independently of financial loss. The PPI scandal (Chapter 4) was a customer impact event before it was a financial event — millions of customers were sold unsuitable insurance products over years before the redress programme began. An assessment framework that waited for financial crystallisation would have missed the customer harm dimension entirely.

### Applying the Dominant Dimension Rule

Consider a cyber attack that exfiltrates customer data but causes no direct financial loss, attracts moderate press attention, and triggers a formal regulatory investigation. Scored individually: Financial = 1 (Incidental), Regulatory = 3 (Moderate), Reputational = 3 (Moderate), Customer/Operational = 4 (Major — large-scale customer impact). The overall impact score is 4. Without the four-dimensional framework, a single financial impact assessment would rate this risk at 1.

The dominant dimension rule is the mechanism that prevents the AIG failure from recurring. AIG's CDS exposure, assessed on financial impact alone using benign historical assumptions, appeared incidental. Assessed across four dimensions — with the regulatory consequence of collateral calls, the reputational destruction of government bailout, and the customer/operational impact of counterparty failure cascading through the financial system — the risk would have scored at the extreme end of the scale on at least three of the four dimensions.

## Likelihood

| Score | Rating | Description |
|---|---|---|
| 1 | Rare | Less than 1% probability within the assessment horizon |
| 2 | Unlikely | 1–10% probability |
| 3 | Possible | 10–50% probability |
| 4 | Likely | 50–90% probability |
| 5 | Frequent | Greater than 90% probability, or has already occurred |

The probability ranges provide guidance, not false precision. Expert judgement is required to place each risk on the scale, and the data quality rating (below) discloses how much confidence should be placed in that judgement.

Three common failures in likelihood assessment deserve explicit attention.

**Anchoring to recent experience.** If a risk has not materialised in the assessor's tenure, it defaults to "Rare." This is the complacency failure mode from Chapter 1 (Why Banks Fail at Risk Identification). LTCM's models were calibrated to a period in which correlations between global fixed income markets had remained moderate. The 1998 Russian crisis caused correlations to spike to one across all markets simultaneously[^ch9-7] — an event the models assigned near-zero probability because it had not occurred in the calibration window. The methodology's response to this failure is twofold: the Data Quality Rating (below) forces disclosure of the evidence basis, and the scenario analysis outputs from the top-down workshop (Chapter 6) provide structured challenge to likelihood assumptions by constructing plausible scenarios that differ from recent experience.

**Conflating likelihood with perceived controllability.** Assessors rate a risk as unlikely because controls exist. But likelihood in this framework is assessed at the inherent level first — before controls are applied. A risk with high inherent likelihood and strong controls has high inherent risk and (potentially) lower residual risk. Collapsing both into a single "unlikely" rating conceals the degree to which the institution depends on controls that may themselves fail.

**Treating independence as default.** Multiple risks are each rated as individually unlikely, but the scenario in which they crystallise simultaneously is not assessed. Simultaneous crystallisation belongs to the enterprise portfolio view (Chapter 8) and risk interaction analysis (Chapter 10 (Risk Interaction: Bow-Ties, Matrices, and Concentration)), but likelihood assessors must be aware that their individual ratings will be used in aggregate analyses where independence assumptions matter.

## Vulnerability

Impact and likelihood are the traditional two dimensions of risk assessment. The methodology adds two more. The first is vulnerability.

| Score | Rating | Description |
|---|---|---|
| 1 | Very Low | Robust controls, strong resilience, proven under stress |
| 2 | Low | Adequate controls, minor gaps identified |
| 3 | Medium | Controls exist but with known weaknesses or untested elements |
| 4 | High | Material control gaps, limited resilience |
| 5 | Very High | No effective controls, fully exposed |

Vulnerability captures the institution's preparedness independently of whether the risk event occurs. Two institutions may face the same risk with the same likelihood and the same potential impact, but one has tested controls, proven resilience, and documented recovery procedures while the other has untested controls and no recovery capability. They are not in the same position, and their assessment scores should reflect that difference.

Vulnerability scoring draws on the control effectiveness information captured in the standardised risk assessment template (Chapter 7 (Bottom-Up Identification: Templates, RCSA, and Specialist Processes)), which requires assessors to specify control type (preventive, detective, corrective) and provide evidence-based effectiveness ratings. The vulnerability score is not a repetition of the control assessment — it is an institutional-level judgement about the degree to which the institution is exposed if the risk materialises.

The critical distinction is between controls that have been tested and controls that are assumed to work. UBS's internal shareholder report following its $37.4 billion in structured credit write-downs[^ch9-8] identified that the risk function had relied on the same models and assumptions as the front office, providing no independent challenge. VaR limits were repeatedly increased at traders' requests. The controls existed on paper. The vulnerability was extreme because no independent challenge mechanism had ever tested whether those controls would function under stress. A vulnerability rating of 1 (Very Low) requires controls that are not merely documented but **proven under stress** — a standard that most institutions cannot honestly claim for most of their risk exposures.

## Speed of Onset

The fourth dimension captures how quickly a risk can move from latent to crystallised.

| Score | Rating | Description |
|---|---|---|
| 1 | Very Slow | Years — ample time to respond |
| 2 | Slow | Quarters — time to plan and act |
| 3 | Moderate | Months — urgent but manageable |
| 4 | Fast | Weeks — limited response window |
| 5 | Immediate | Days or less — no time to respond |

Speed of onset determines whether the institution will have time to implement risk responses when a risk begins to crystallise. A risk rated "Major" on impact and "Possible" on likelihood presents a fundamentally different management challenge depending on whether onset is measured in years or days.

Bear Stearns illustrates the operational significance of speed of onset. Its concentrated MBS exposure was a known risk that materialised not through gradual credit deterioration but through a sudden loss of counterparty confidence in March 2008. The institution went from operational to acquired in a matter of days.[^ch9-14] No risk response plan designed for a "Slow" onset would have been adequate. A speed-of-onset rating of 5 (Immediate) for a counterparty confidence scenario would have flagged the need for pre-positioned liquidity and contingency arrangements — not as a response to the risk crystallising, but as a standing requirement for a risk that, when it moves, moves too fast for real-time intervention.

Climate risk provides the contrasting example. Physical risk from chronic sea-level rise affecting property portfolios may score "Major" on impact but "Very Slow" on speed of onset — the institution has years to adjust exposures. Transition risk from sudden regulatory policy change (carbon tax, stranded asset rules) may score the same impact but "Fast" on speed of onset — the policy announcement creates immediate mark-to-market consequences and strategic constraints.

The four dimensions together — Impact, Likelihood, Vulnerability, Speed of Onset — constitute the **four-dimensional risk score**. Every risk in the inventory carries all four scores for both its inherent and residual assessment.

## Data Quality and Confidence Rating

The four-dimensional score is only as reliable as the evidence underlying it. A risk rated "Major impact, Possible likelihood" based on five years of validated internal loss data is a fundamentally different proposition from the same rating based on a single expert's opinion with no supporting data. Both may be the best assessment available, but the degree of confidence the Board should place in each is entirely different.

Every risk assessment must include a **Data Quality Rating** that discloses the reliability of the evidence underlying the scores. This is not optional. It is a methodological requirement grounded in ISO 31010, Section 4.3, which requires transparent recording of the basis for risk assessments.

| Rating | Description | Typical Basis |
|---|---|---|
| **High** | Based on robust quantitative data, validated models, or extensive historical evidence | Internal loss data, market data, regulatory capital models |
| **Medium** | Based on limited quantitative data supplemented by structured expert judgement | Partial loss history, industry benchmarks, scenario analysis |
| **Low** | Based primarily on expert judgement with limited or no historical data | Workshops, interviews, peer institution experience |
| **Very Low** | Speculative — no relevant data, precedent, or experience | Emerging risks, novel exposures, unprecedented scenarios |

Chapter 7 identified the Data Quality Rating as one of the three fields where bottom-up submissions most commonly fail — business units default to "Medium" for everything, avoiding both the uncomfortable admission that evidence is weak and the analytical effort required to justify a "High" rating. The Risk Identification Lead must challenge these defaults. A submission that rates data quality as "Medium" must demonstrate that it has the limited quantitative data and structured expert judgement the definition requires. If the only basis is a single person's opinion, the rating is "Low."

### How Data Quality Affects the Assessment

The Data Quality Rating is not a standalone curiosity reported alongside the score. It has three operational consequences.

**Conservatism adjustment.** Where data quality is Low or Very Low, the methodology applies a conservatism principle: uncertainty about a risk should not reduce the attention it receives. In practice, this means that risks with low data quality are not permitted to carry low impact or likelihood ratings without explicit CRO approval. If the evidence basis is too weak to support a firm assessment, the default assumption is that the risk is more severe than the limited evidence suggests — not less. This directly addresses the AIG pattern, where a risk scored as near-zero was based on historical data that had never included the relevant stress scenario.

**Sensitivity testing.** Risks with Low or Very Low data quality ratings are flagged for sensitivity analysis: how would the overall assessment change if the impact were one level higher? If the likelihood were one level higher? If the sensitivity analysis moves the risk across the materiality threshold, it is treated as potentially material regardless of the base assessment. This is not a quantitative exercise requiring Monte Carlo simulation. It is a structured what-if: the same SWIFT questioning discipline applied in the top-down workshop (Chapter 6), now applied to individual risk scores.

**Board transparency.** The Board Risk Report includes a summary of data quality distribution across the material risk portfolio. If thirty per cent of material risks carry Low or Very Low data quality ratings, the Board needs to know that. It changes how the Board should interpret the risk profile, it identifies where the institution needs to invest in better data, and it prevents the false precision that arises when a risk heatmap presents all risks as if they were assessed with equal confidence.

### The Data Quality Problem at Wachovia

Wachovia's 2008 collapse illustrates the data quality failure in its purest form. The bank's acquisition of Golden West Financial in 2006 brought $122 billion in option ARMs[^ch9-9] — adjustable-rate mortgages where borrowers could choose to pay less than the interest accruing, with the difference added to the loan principal. The acquisition due diligence accepted Golden West's internal assessment of credit quality: the loans had performed well historically in California, with low default rates and strong recovery values.

That assessment deserved a Data Quality Rating of Very Low. The evidence basis was a historical track record that did not include a single period of nationwide housing price decline. The option ARM product was relatively new, meaning even the California-specific track record was short. And the portfolio was about to be deployed into a fundamentally different economic environment — from a rising housing market with loose lending standards to whatever came next.

Had the assessment carried a Very Low data quality rating, the conservatism principle would have required higher assumed losses. The sensitivity analysis would have tested what happened if default rates exceeded anything in the historical record. The Board would have seen that the single largest acquisition in the institution's history was supported by the weakest possible evidence base. Instead, the historical performance data was taken at face value, the assessment methodology did not require disclosure of data limitations, and Wachovia absorbed approximately $25 billion in losses — reflecting the convergence of quarterly operating losses, goodwill impairment on the Golden West acquisition, and option ARM portfolio writedowns — before its emergency sale to Wells Fargo.[^ch9-10]

## Inherent and Residual Risk

Each risk is scored twice across all four dimensions.

**Inherent risk** is the risk level assuming no controls are in place. It answers the question: how exposed is the institution to this risk in the absence of any mitigating action? This is not a hypothetical exercise. It establishes the magnitude of the risk that the control environment must contain.

**Residual risk** is the risk level after accounting for current controls. This is the risk the institution is actually running. The difference between inherent and residual risk reflects the institution's dependence on its control environment — and by implication, the consequence if those controls fail or are circumvented.

Between the two sits **control effectiveness** — an assessment rated 1 to 5 (highly effective to ineffective) that draws on the control information captured in the bottom-up template (Chapter 7). The control assessment must specify the type of each control (preventive, detective, corrective) and provide evidence for the effectiveness rating.

The dual assessment matters for three reasons.

**It reveals control dependency.** A risk with inherent impact of 5 and residual impact of 2 tells the Board that the institution depends heavily on the controls reducing that risk by three levels. If those controls are untested, recently changed, or dependent on a single system or individual, the Board may conclude that the residual assessment is optimistic. The vulnerability dimension captures this concern, but the inherent-residual gap makes it visible.

**It identifies where controls mask exposure.** One of the most productive exercises in assessment is mapping inherent-residual gaps against control effectiveness evidence. Risks where the gap is large but the control evidence is weak — effectiveness ratings based on design documentation rather than operational testing — should be systematically flagged for deeper review. These frequently turn out to be risks where the institution is running significantly more exposure than the residual score suggests.

**It prevents assessment gaming.** Without the inherent-residual separation, assessors can produce moderate residual scores by implicitly assuming that controls work, without ever being required to assess the underlying risk magnitude. The dual assessment forces transparency: state the inherent risk, state the controls and their evidence, derive the residual risk. Each step is auditable.

### The Independent Challenge Requirement

Chapter 1 identified Model Overreliance as one of the ten failure modes — the pattern where institutions substitute model outputs for independent analytical judgement, treating quantitative models as facts rather than as one input to assessment. The methodology's response is explicit: **models are an input to assessment, not a substitute for it.**

Where quantitative models inform the risk score — credit risk models, VaR, LGD models, operational risk capital models — the assessment must include an independent challenge of the model's assumptions and limitations. This challenge is documented in the risk inventory alongside the score.

Independent challenge means three things in practice. First, the model's key assumptions are stated explicitly — not buried in technical documentation but visible in the assessment record. Second, the scenarios in which the model's assumptions break down are identified. Third, management judgement about the model's applicability to the current environment is recorded. UBS's post-crisis shareholder report found that its risk function relied on the same models and assumptions as the front office, providing no independent challenge — VaR limits were repeatedly increased at traders' requests. The methodology requires that risk assessment exists independently of the models the front office uses to manage its positions.

This is not a prohibition on using models. It is a prohibition on using models uncritically. A credit risk model's output is valuable evidence for the financial impact dimension. But the model's output must be accompanied by: What does the model assume? Under what conditions do those assumptions fail? What is the Data Quality Rating applicable to the model's inputs? A model calibrated to benign historical conditions, using data rated Very Low for relevance to current conditions, should not produce an assessment score that the Board treats with the same confidence as a model validated against the specific stress scenario the institution faces.

## Resolving the Disagreement Log

Chapter 6 introduced the disagreement log — a record of materially different views expressed during the top-down workshop that could not be reconciled through discussion. Chapter 6 stated that the assessment phase must resolve these disagreements through evidence, not social dynamics. This is where that resolution occurs.

The four-dimensional scoring framework provides the structured basis for resolution. When two senior participants disagree about the severity of a risk, the assessment forces specificity: on which dimension do you disagree? Financial impact? Regulatory consequence? Likelihood? What evidence supports each position? What is the Data Quality Rating applicable to that evidence?

In many cases, the disagreement dissolves once the dimensions are separated. A CRO and a business unit head may both be correct — the CRO assessing severe regulatory impact while the business head assesses manageable financial impact. Under a single-dimension framework, one must "win." Under the four-dimensional framework, both assessments are captured and the dominant dimension rule determines the overall score.

Where genuine analytical disagreement persists after dimensional separation, the methodology preserves it. The minority view is recorded in the risk inventory alongside the consensus score, with the evidence basis for each position documented. This is not a compromise — it is transparency. The Board Risk Committee receives the consensus assessment and the dissenting view, with the data quality ratings applicable to each. The Board decides how much weight to place on the minority position. Risks where senior participants genuinely disagree after structured analysis are disproportionately likely to be the risks the institution most needs to understand.

## Materiality Determination

Not all risks require the same level of attention. A bank with two hundred risks in its inventory cannot — and should not — subject each to full risk profiling, dedicated KRIs, and integration into capital and strategic planning. Materiality determination is the governance mechanism that focuses resources on what matters.

The process is straightforward:

1. Plot all risks on an **Impact x Likelihood matrix** — the risk heatmap — using the inherent scores and the residual scores separately
2. Apply the **materiality threshold** defined in Phase 1 (Chapter 5) — calibrated to the institution's risk appetite and approved by the CRO
3. Risks above the threshold are classified as **material**
4. Material risks receive full risk profiles (Chapter 11 (Documentation: The Living Risk Inventory)), dedicated KRIs (Chapter 13 (The Ongoing Cycle: Refresh, Events, and Audit)), and integration into capital and strategic planning (Chapter 12 (Integration: Capital Planning, Strategy, and the Board))
5. Non-material risks remain in the inventory and are monitored for changes through the ongoing cycle (Chapter 13)

Typically, 20–60 risks out of the full inventory are classified as material. This range reflects institutional size and complexity — a large universal bank with global operations will have more material risks than a regional commercial bank, because it faces a broader range of risk types at a scale that exceeds materiality thresholds.

The materiality threshold is not a line on a heatmap and nothing more. It incorporates three factors from the four-dimensional framework:

**The dominant dimension.** A risk that scores below threshold on financial impact but above threshold on regulatory impact is material. The four dimensions are assessed independently and the highest determines materiality.

**Aggregation.** Individual risks below threshold may be material when aggregated with related risks. The enterprise portfolio view (Chapter 8) identifies common exposures and correlated clusters. If three individually sub-material risks share a common driver and would crystallise simultaneously, their aggregate position is assessed against the materiality threshold. This is the mechanism that catches the Citigroup pattern — SIV exposures distributed across divisions, each individually within limits, collectively catastrophic.

**Data quality adjustment.** A risk assessed as sub-material based on a Very Low data quality rating — meaning the evidence basis is speculative — is flagged for CRO review rather than automatically excluded from the material risk portfolio. The sensitivity testing described above is specifically designed to prevent risks from falling below the materiality threshold simply because the institution lacks the data to assess them properly.

### What the Heatmap Does Not Show

The risk heatmap — the Impact x Likelihood matrix — is the most widely used output of risk assessment in banking. It is also the most frequently misused.

A heatmap plots individual risks as points on a two-dimensional grid. It does not show vulnerability or speed of onset. It does not show data quality. It does not show inherent-residual gaps. It does not show correlations or common exposures. A heatmap with forty risks evenly distributed across the grid looks reassuring. The same forty risks, annotated with their vulnerability ratings, speed-of-onset scores, data quality ratings, and correlation clusters, may present a fundamentally different picture.

The heatmap is a screening tool. It is the starting point for materiality determination, not the conclusion. Material risks identified through the heatmap proceed to full risk profiling (Chapter 11), risk interaction analysis (Chapter 10), and integration into capital planning and strategy (Chapter 12). The heatmap alone does not tell the Board what it needs to know. It tells the Risk Identification Lead where to direct the deeper analysis that will.

## Merrill Lynch and the AAA Assumption

Merrill Lynch accumulated approximately $40 billion in gross subprime exposure, of which some $32 billion consisted of super-senior CDO tranches retained on its balance sheet[^ch9-11] — the most senior positions in the CDO structure, designed to suffer losses only after every junior tranche had been wiped out. These tranches carried AAA ratings from every major agency. Merrill's risk assessment treated the AAA rating as equivalent to independent analysis: if the rating was AAA, the financial impact of loss was negligible, and the position did not appear as material in internal risk reports.

The assessment failure was multi-dimensional. Financially, the $51.8 billion in eventual write-downs[^ch9-12] made the super-senior retention one of the largest single-risk losses in banking history. But the regulatory dimension was equally severe — the forced emergency sale to Bank of America at half the peak share price, negotiated over a weekend under intense regulatory pressure.[^ch9-13] The reputational dimension produced the departure of CEO Stan O'Neal and years of franchise damage. A four-dimensional assessment that independently scored each consequence dimension — rather than relying on the AAA rating as a proxy for all of them — would have produced a very different risk profile.

The Data Quality Rating is equally revealing. What was the evidence basis for Merrill's assessment? External ratings produced by agencies whose revenue depended on the CDO issuance business. Internal models that had not been validated against a nationwide housing price decline because no such decline existed in the data. The appropriate Data Quality Rating was Low at best — expert judgement supplemented by models of unproven relevance. Under the methodology's conservatism principle, that data quality rating would have prevented the near-zero risk assessment that allowed $40 billion in concentrated exposure to accumulate without triggering materiality thresholds.

## Putting It Together: The Assessment Record

When Phase 3 is complete, every risk in the inventory carries a structured assessment record:

| Field | Content |
|---|---|
| **Inherent Risk Score** | Impact (with dominant dimension noted), Likelihood, Vulnerability, Speed of Onset |
| **Control Effectiveness** | Rating (1–5), control types (preventive/detective/corrective), evidence basis |
| **Residual Risk Score** | Impact, Likelihood, Vulnerability, Speed of Onset |
| **Data Quality Rating** | High / Medium / Low / Very Low, with evidence basis stated |
| **Materiality Classification** | Material / Non-material, with basis for determination |
| **Model Dependency** | Where models inform the score: key assumptions, limitations, independent challenge documented |
| **Disagreement Record** | Where applicable: minority view, evidence basis, dimensional breakdown |

This record integrates with the standardised risk assessment template fields established in Chapter 7. The taxonomy classification, risk definition, underlying drivers, current controls, risk owner, and emerging risk indicators from the bottom-up process are now supplemented with the structured assessment from Phase 3. Together, they form the basis for the risk inventory that Chapter 11 will describe.

## How This Could Have Changed AIG

Return to the opening case. Apply the methodology to AIG's CDS portfolio as of 2006.

**Four-dimensional impact.** Financial: the notional exposure was enormous, but the perceived loss was near-zero based on default assumptions. Under the four-dimensional framework, the assessor must also score the regulatory, reputational, and customer/operational dimensions. The regulatory dimension alone — collateral call triggers upon ratings downgrade, potential for government intervention — would have scored at least Major (4). The reputational dimension of the world's largest insurer requiring emergency bailout would have scored Extreme (5). The dominant dimension rule produces an overall impact score of 5, regardless of the financial impact assumption.

**Likelihood.** Under AIG's models, the likelihood of AAA tranches defaulting was assessed at Rare (1). The Data Quality Rating for that assessment was, at best, Low — models calibrated to a period without the relevant stress scenario. Under the conservatism principle, a Rare likelihood rating based on Low data quality requires CRO approval and sensitivity testing. The sensitivity test — "what if the likelihood is one level higher?" — would have moved the risk to Unlikely (2) with Extreme (5) impact. That combination exceeds any reasonable materiality threshold.

**Vulnerability.** AIG's controls against a systemic CDS crystallisation scenario were effectively non-existent. There was no hedging programme for the written CDS, no collateral reserve adequate for a mass downgrade, and no pre-positioned liquidity for collateral calls at scale. Vulnerability: Very High (5).

**Speed of onset.** The collateral call mechanism meant that onset would be Immediate (5) — triggered by ratings action, not by actual defaults.

The four-dimensional assessment produces: Impact 5, Likelihood 1 (disputed — Low data quality), Vulnerability 5, Speed of Onset 5. With Data Quality at Low or Very Low, the conservatism adjustment applies. The sensitivity test moves likelihood to 2, placing the risk firmly in the material category. The risk profile that would follow (Chapter 11) would document the collateral call mechanism, the concentration in mortgage-linked CDOs, and the absence of hedging. The Board would have seen it. The CRO would have been required to explain why the institution was writing $527 billion in notional unhedged protection — including $78 billion in the most toxic multi-sector CDO tranche — on a single risk factor with Extreme impact, Very High vulnerability, Immediate speed of onset, and evidence quality that deserved no confidence.

The $85 billion bailout was not inevitable. It was the consequence of a single-dimensional assessment methodology applied to a risk that required four.

## The Bridge to Risk Interaction

Phase 3 has now scored every risk in the inventory on four dimensions, overlaid each score with a data quality rating, separated inherent from residual assessment, and applied a materiality threshold to focus resources. But each risk has been assessed individually. The enterprise portfolio view in Chapter 8 identified correlated clusters and common exposures. The next step is to analyse those interactions systematically — using bow-tie analysis to map causal chains, risk interaction matrices to identify which risks amplify each other, and concentration analysis to determine where the institution's aggregate exposure exceeds what any individual risk score would suggest. That analysis — risk interaction — is the subject of Chapter 10.

---

[^ch9-1]: AIG, Form 10-K for fiscal year ended 31 December 2007, filed with the U.S. Securities and Exchange Commission, pp. 122–127. The filing reports AIGFP's credit default swap portfolio at a notional amount of approximately $527 billion as of year-end 2007.

[^ch9-2]: AIG, Form 10-K, fiscal year 2007, pp. 122–127. Of the total CDS portfolio, approximately $78 billion was referenced to multi-sector CDOs, including subprime residential mortgage-backed securities. See also FCIC, *The Financial Crisis Inquiry Report* (January 2011), pp. 265–270.

[^ch9-3]: Board of Governors of the Federal Reserve System, press release, 16 September 2008. The Federal Reserve Bank of New York authorised a secured credit facility of up to $85 billion to AIG to prevent the company's disorderly failure. The facility was subsequently restructured multiple times; total government support ultimately exceeded $180 billion across all programmes.

[^ch9-4]: Standard Chartered Bank, Deferred Prosecution Agreement with the New York County District Attorney's Office and consent orders with the New York State Department of Financial Services (NYDFS), 2012–2014. The combined penalties across multiple settlements totalled approximately $667 million for violations of U.S. sanctions laws.

[^ch9-5]: U.K. Financial Conduct Authority, Final Notice to Deutsche Bank AG, 31 January 2017 (£163 million penalty); New York State Department of Financial Services, Consent Order, 30 January 2017 ($425 million penalty). The combined UK/US fines related to mirror-trading schemes that moved approximately $10 billion out of Russia.

[^ch9-6]: U.S. Department of Justice, press release, 21 February 2020. Wells Fargo agreed to pay $3 billion to resolve criminal and civil investigations into the bank's practice of opening millions of unauthorised accounts. The settlement covered conduct from 2002 to 2016.

[^ch9-7]: President's Working Group on Financial Markets, *Hedge Funds, Leverage, and the Lessons of Long-Term Capital Management* (Washington, DC: U.S. Department of the Treasury, April 1999). The report documents how the August 1998 Russian default triggered simultaneous liquidity crises across previously uncorrelated markets, causing LTCM's portfolio losses to exceed what its models predicted as possible.

[^ch9-8]: UBS AG, *Shareholder Report on UBS's Write-Downs* (Zurich: UBS, 18 April 2008), pp. 13–14, 30–32. The report documents $37.4 billion in write-downs on subprime-related positions and identifies the failure of independent risk challenge as a root cause, noting that the risk function relied on the same models and assumptions as the front office.

[^ch9-9]: FCIC, *The Financial Crisis Inquiry Report* (January 2011), pp. 137–138. The report documents Wachovia's 2006 acquisition of Golden West Financial Corporation for approximately $25.5 billion, acquiring its $122 billion portfolio of option adjustable-rate mortgages. See also Golden West Financial Corporation, Form 10-K for fiscal year ended 31 December 2005.

[^ch9-10]: FDIC, press release, 29 September 2008, and subsequent regulatory filings. Wachovia's losses reflect the combination of quarterly operating losses from the option ARM portfolio, a $18.7 billion goodwill impairment charge related to the Golden West acquisition (Q4 2007 through Q3 2008), and continued mortgage portfolio writedowns. The FDIC facilitated Wachovia's emergency acquisition by Wells Fargo in October 2008.

[^ch9-11]: FCIC, *The Financial Crisis Inquiry Report* (January 2011), pp. 255–261. The report documents Merrill Lynch's accumulation of CDO exposure, including approximately $40 billion in gross subprime exposure and approximately $32 billion in super-senior CDO tranches retained on balance sheet. See also Merrill Lynch & Co., Inc., Form 10-K for fiscal year ended 28 December 2007.

[^ch9-12]: Merrill Lynch & Co., Inc., SEC filings, 2007–2008. Cumulative write-downs on CDO and subprime-related positions totalled approximately $51.8 billion across multiple quarters. See also FCIC, *The Financial Crisis Inquiry Report* (January 2011), pp. 255–261.

[^ch9-13]: FCIC, *The Financial Crisis Inquiry Report* (January 2011), pp. 380–386. The report details the emergency negotiations over the weekend of 13–14 September 2008 that resulted in Bank of America's acquisition of Merrill Lynch at $29 per share, approximately half Merrill's peak share price.

[^ch9-14]: FCIC, *The Financial Crisis Inquiry Report* (January 2011), pp. 280–291. Bear Stearns experienced a rapid loss of counterparty confidence in March 2008; by 14 March its liquidity pool had effectively been depleted. The Federal Reserve facilitated JPMorgan Chase's acquisition, announced on 16 March 2008 at $2 per share (later revised to $10 per share). See also SEC, Office of Inspector General, *SEC's Oversight of Bear Stearns and Related Entities*, Report No. 446-A, 25 September 2008.

[^ch9-15]: International Organization for Standardization, *ISO 31000:2018 — Risk Management: Guidelines*, Section 6.4.3 (renumbered from 5.4.3 in the 2009 edition). See also ISO, *IEC 31010:2019 — Risk Management: Risk Assessment Techniques*, Section 4.3, which requires transparent recording of the basis for risk assessments.
