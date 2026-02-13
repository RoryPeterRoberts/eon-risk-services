# Chapter 10: Risk Interaction: Bow-Ties, Matrices, and Concentration

## The Bank That Was Destroyed by Five Risks at Once

Lehman Brothers did not fail because of credit risk. It did not fail because of liquidity risk, or market risk, or operational risk, or reputational risk. It failed because all five crystallised simultaneously, each amplifying the others in a chain reaction that no individual risk assessment had captured.

By early 2008, Lehman held approximately $85 billion in residential mortgage-backed securities — the largest component of a $111 billion total real estate portfolio[^ch10-1] — on a balance sheet leveraged at roughly 30:1.[^ch10-2] That was a credit concentration problem. But it was also a market risk problem — those positions were marked to market, and falling valuations eroded the capital buffer. The capital erosion triggered a liquidity problem, as counterparties demanded additional collateral and prime brokerage clients began withdrawing funds. The liquidity pressure created an operational problem, as the firm struggled to unwind illiquid positions in a market with no buyers. And the visible distress created a reputational problem, as confidence evaporated among the counterparties, clients, and creditors whose continued engagement Lehman needed to survive. Each risk fed the next. The credit losses drove the market losses. The market losses drove the liquidity crisis. The liquidity crisis drove the operational paralysis. The operational paralysis drove the reputational collapse. And the reputational collapse drove further counterparty withdrawals, accelerating the liquidity crisis back into the credit losses. The entire chain took less than six months from the Bear Stearns rescue in March to Lehman's bankruptcy filing on 15 September 2008 — $639 billion in assets, the largest bankruptcy in American history.[^ch10-3]

Lehman's risk function had assessed each of these risks. Mortgage-backed securities were in the credit risk inventory. Leverage was monitored. Liquidity was reported. Counterparty exposure was tracked. But each was assessed individually, in its own silo, using its own models, reported to its own committee. No one had mapped the causal chains between them. No one had asked: if credit losses reach a threshold, what does that trigger in market risk? If market risk drives margin calls, what does that trigger in liquidity? If liquidity forces asset sales, what does that do to credit valuations? The interaction between the risks — the amplification, the feedback loops, the cascade — was invisible because the methodology did not look for it.

Chapter 9 (Assessment — Scoring, Multi-Dimensional Impact, and Data Quality) established the four-dimensional assessment framework for scoring individual risks. But a risk inventory where every risk is assessed in isolation — however sophisticated the scoring methodology — remains fundamentally incomplete. The heatmap produced by individual assessment does not show correlations. It does not show common exposures. It does not show which risks amplify each other under stress. ISO 31000 requires examination of "knock-on effects of particular consequences, including cascade and cumulative effects."[^ch10-4] That requirement is the standards basis for everything in this chapter.

Risk interaction analysis is the systematic examination of how risks relate to each other — which risks trigger other risks, which risks amplify the impact of other risks, and where the institution's aggregate exposure exceeds what any individual risk score would suggest. It operates through three complementary tools: the **risk interaction matrix**, which maps relationships across the entire material risk portfolio; **bow-tie analysis**, which traces causal chains for the most critical individual risks; and **concentration analysis**, which identifies where multiple risks share common drivers, exposures, or dependencies. Together, they transform the individually assessed risk inventory from Chapter 9 (Assessment — Scoring, Multi-Dimensional Impact, and Data Quality) into the interconnected risk landscape that the Board and regulators actually need to see.

## The Risk Interaction Matrix

The risk interaction matrix is a square matrix with the institution's material risks listed on both axes. For each pair of risks, the matrix records whether a directional relationship exists: does Risk A trigger, amplify, or have no effect on Risk B? The matrix is not symmetric. Credit risk may trigger liquidity risk, but liquidity risk may not trigger credit risk — or it may, through a different mechanism. Both directions must be assessed independently.

The matrix serves three purposes. First, it identifies **risk clusters** — groups of risks that are connected through trigger or amplification relationships and could therefore crystallise together. Second, it reveals **cascade pathways** — chains where one risk triggers a second, which triggers a third, potentially reaching risks that appear unrelated to the original event. Third, it highlights **amplification mechanisms** — relationships where the crystallisation of one risk does not just trigger but actively worsens another.

In practice, for an institution with 30 material risks, the matrix contains 870 directional pairs (30 x 29). This is not a theoretical exercise run from a spreadsheet. It requires structured facilitation — the Risk Identification Lead works through the matrix with risk owners, CRO, and relevant specialists in dedicated sessions. The question for each cell is specific: "If Risk A materialises at its assessed impact level, does it trigger or amplify Risk B? Through what mechanism? With what time lag?"

Three categories of relationship are recorded:

| Relationship | Definition | Example |
|---|---|---|
| **Triggers** | Crystallisation of Risk A directly causes Risk B to materialise | Credit losses on concentrated portfolio trigger counterparty confidence withdrawal (liquidity risk) |
| **Amplifies** | Crystallisation of Risk A increases the impact or likelihood of Risk B | Market volatility amplifies funding cost risk through collateral calls |
| **Correlated** | Risks A and B share a common driver and would crystallise simultaneously under the same conditions | Interest rate shock affecting both trading book positions and pension fund obligations |

The completed matrix produces a network map of the institution's risk landscape. Risks with many outgoing trigger relationships are **propagation nodes** — their crystallisation cascades across the portfolio. Risks with many incoming relationships are **vulnerable nodes** — they are exposed to crystallisation from multiple sources. Both warrant additional analysis and more conservative assessment.

At Credit Suisse, building the first interaction matrix revealed that counterparty credit risk was connected — through trigger or amplification relationships — to eleven other material risks. Market risk connected to nine. These were not surprises to experienced practitioners. What was new was making the connections explicit, documented, and traceable. The interaction matrix turned intuition into auditable methodology.

The interaction matrix also connects directly to the **thematic stress and risk assessment** (TSRA) described in Chapter 7 (Bottom-Up Identification: Templates, RCSA, and Specialist Processes) as a complement to this chapter's analysis. Where the TSRA constructs hypothetical adverse scenarios at the operational level and traces which risks activate together, the interaction matrix provides the structural map of those activation pathways. The TSRA tests the matrix under stress; the matrix explains why the TSRA scenarios produce the cascades they do.

The matrix also directly informs the enterprise portfolio view established in Chapter 8 (Reconciliation and the Enterprise Portfolio View). The simultaneous crystallisation assessment described there — which risks would activate together under plausible stress scenarios — now has a structured analytical basis rather than relying solely on workshop judgement. The interaction matrix provides the mechanism mapping; the SWIFT scenarios from Chapter 6 (Top-Down Identification: Workshops, SWIFT, and Delphi) provide the triggering events; together they produce a rigorous assessment of correlated risk clusters.

## Bow-Tie Analysis: Mapping the Causal Chain

For the institution's five to ten most critical risks — as determined by the materiality assessment in Chapter 9 (Assessment — Scoring, Multi-Dimensional Impact, and Data Quality) — the risk interaction matrix provides the landscape, but a more granular tool is needed to map the full causal architecture of each individual risk. That tool is **bow-tie analysis**, catalogued in ISO 31010 Section B.21.[^ch10-5]

A bow-tie diagram is a visual representation of the pathways from causes to consequences for a single risk event, with the controls that interrupt those pathways explicitly mapped at each stage. The diagram takes its name from its shape: causes fan out on the left, consequences fan out on the right, and the risk event sits at the centre — the knot of the bow tie.

### The Left Side: Causes and Prevention

On the left side, every identified cause of the risk event is listed. For each cause, the mechanism by which it leads to the risk event is described — not just "market downturn" but the specific transmission: "market downturn reduces asset valuations below margin thresholds, triggering collateral calls that exceed available liquid assets."

**Preventive barriers** are shown as vertical bars across each causal pathway. These are the controls that prevent the cause from leading to the risk event. For a counterparty credit risk bow-tie, preventive barriers might include: credit limits, collateral requirements, netting agreements, portfolio concentration limits, independent credit assessment.

Critically, the bow-tie then identifies **escalation factors** — conditions that could cause a preventive barrier to fail. A credit limit is a preventive barrier, but if the limit can be overridden by a single individual without independent approval, that override authority is an escalation factor. A collateral requirement is a preventive barrier, but if the collateral is correlated with the underlying exposure (as it was in many GFC-era structured products), that correlation is an escalation factor.

**Escalation controls** are then mapped against each escalation factor — the additional controls that prevent escalation factors from degrading barriers. Four-eyes approval for limit overrides. Independent collateral valuation. Correlation analysis for collateral-exposure relationships.

This layered structure — cause, preventive barrier, escalation factor, escalation control — is what distinguishes bow-tie analysis from a simple risk-and-control register. It forces the institution to examine not just whether controls exist, but whether the conditions under which those controls would fail have been identified and addressed.

### The Centre: The Risk Event

The risk event itself sits at the centre of the diagram. It should be defined precisely — not "credit risk" but "counterparty default on OTC derivative portfolio exceeding $500 million net exposure." Precision matters because the causes and consequences change depending on how the event is specified.

### The Right Side: Consequences and Mitigation

On the right side, all potential consequences of the risk event are listed — and this is where the four-dimensional framework from Chapter 9 (Assessment — Scoring, Multi-Dimensional Impact, and Data Quality) directly applies. A major counterparty default has financial consequences (direct loss), regulatory consequences (reporting obligations, supervisory attention, potential enforcement action), reputational consequences (market confidence, counterparty willingness to trade), and customer/operational consequences (service disruption if the counterparty provides critical services).

**Mitigating barriers** are shown as vertical bars across each consequence pathway. These are the controls that reduce the severity of consequences after the risk event has occurred. For counterparty default: close-out netting, collateral liquidation, credit insurance, business continuity plans for operational dependencies.

**Recovery controls** are separately identified — controls that support recovery after the event. Insurance claims processes, legal recovery proceedings, replacement counterparty sourcing, regulatory communication protocols.

### The Supporting Layer

Beneath the bow-tie sits the **management function layer** — the training, inspection, maintenance, and testing activities that support the effectiveness of each barrier. A preventive barrier is only as reliable as the management system that maintains it. If credit limits are reviewed annually but market conditions change quarterly, the management function (review frequency) is inadequate for the barrier (credit limit) it supports.

### Why Bow-Ties Work for Board Communication

Bow-tie diagrams serve a dual purpose. For risk practitioners, they provide the granular causal analysis that informs control design and testing. For the Board and senior management, they provide a visual summary that communicates the full risk architecture in a single page. A Board member looking at a bow-tie for the institution's most critical risk can immediately see: what could cause this? What stops it? What could make those stops fail? If it happens, what are the consequences? What limits the damage?

This is why the methodology requires bow-ties for the top five to ten risks specifically — not for the full inventory. Bow-tie analysis is resource-intensive. Each diagram requires facilitated sessions with risk owners, control owners, and relevant specialists. But for the risks that could threaten the institution's viability, the investment is essential.

The diagrams are drawn directly from facilitated sessions — not from desk-based analysis. The Risk Identification Lead facilitates, but the content comes from the people who understand the risk: traders, operations managers, technology specialists, compliance officers, and risk analysts. The facilitation approach mirrors the SWIFT methodology from Chapter 6 (Top-Down Identification: Workshops, SWIFT, and Delphi) — structured prompts, systematic coverage, challenge and dissent encouraged.

### Lehman Brothers Through the Bow-Tie Lens

Consider what a bow-tie analysis of Lehman's credit concentration risk would have revealed. On the left side, the causes would include: mortgage market deterioration, mark-to-market accounting requirements on illiquid positions, leverage ratio creating thin capital buffer. The preventive barriers would include: position limits, VaR monitoring, stress testing, capital adequacy reporting. The escalation factors would include: Repo 105 transactions temporarily removing $50 billion in assets from the balance sheet at each quarter-end[^ch10-6] — a mechanism that actively undermined the capital adequacy barrier by concealing the true leverage ratio. The escalation control — independent verification of reported leverage — was absent.

On the right side, the consequences would cascade across every dimension: financial (direct losses), regulatory (capital adequacy breach, supervisory intervention), reputational (counterparty confidence loss), and operational (inability to roll short-term funding). The mitigating barriers — access to Federal Reserve facilities, potential acquisition by a stronger institution — would have been assessed as uncertain at best. The bow-tie would have made visible what individual risk assessments concealed: the causal chain from credit concentration through leverage to liquidity to institutional collapse was not a remote scenario. It was a mapped pathway with identified control gaps.

## Fault Tree Analysis: Working Backwards from Failure

Where bow-tie analysis maps from causes through the risk event to consequences, **fault tree analysis** works backwards from a defined failure event to identify all the combinations of conditions that could produce it. ISO 31010 catalogues it alongside bow-tie analysis, and for complex risks with multiple potential failure modes, it provides a complementary perspective.

A fault tree uses Boolean logic — AND gates and OR gates — to decompose a top-level failure into its constituent conditions. An OR gate means any one of several conditions can cause the failure. An AND gate means multiple conditions must be present simultaneously.

The practical application in risk identification is for risks where the failure requires a combination of factors. Rogue trading, for example, is an AND-gate failure: it requires a trader with knowledge of the control chain AND inadequate independent verification AND RCSA that assesses controls against design specification rather than determined circumvention (the three structural preconditions established in Chapter 7 (Bottom-Up Identification: Templates, RCSA, and Specialist Processes)). A fault tree makes explicit that the risk materialises only when all three conditions coexist — which means that addressing any one condition breaks the chain.

Fault trees are more analytical than bow-ties and less intuitive for Board communication. They are most valuable for operational risks with complex failure modes — technology failures, process breakdowns, fraud scenarios — where understanding the logical structure of the failure helps prioritise control investment. The methodology does not require fault trees for all material risks, but the Risk Identification Lead should deploy them where the logical structure of a risk warrants it.

## Concentration Analysis: The Risks Between the Risks

Chapter 8 (Reconciliation and the Enterprise Portfolio View) established the enterprise portfolio view with its four assessments: common exposures, simultaneous crystallisation, aggregate position against appetite, and diversification and correlation. Concentration analysis in Chapter 10 (Risk Interaction: Bow-Ties, Matrices, and Concentration) provides the systematic analytical method for the first of those four — identifying where multiple risks share common drivers, exposures, or dependencies.

Concentration takes three forms, each requiring a different analytical approach:

**Single-name concentration** is the most visible: excessive exposure to a single counterparty, sector, geography, or asset class. The interaction matrix often reveals single-name concentration that individual risk assessments missed, because the exposure appears in different taxonomy categories. A bank may have credit exposure to a major technology firm, market risk from equity positions in the same firm, operational dependency on the firm's cloud infrastructure, and conduct risk from the firm's role as a distribution partner. Four risks, four taxonomy categories, one underlying concentration. The interaction matrix, cross-referenced with the enterprise portfolio view, makes this visible.

**Structural concentration** is less visible but often more dangerous. This is concentration not in a single name but in a structural assumption — a funding model, a correlation assumption, a regulatory interpretation, a technology platform. Fortis provides a defining example. In 2007, Fortis led the consortium that acquired ABN AMRO for €71 billion — the largest banking acquisition in history at that point.[^ch10-7] The acquisition was funded by leverage, reducing Fortis's capital buffers. Simultaneously, Fortis held subprime exposure across both its legacy portfolio and the acquired ABN AMRO assets. Risk identification had assessed the acquisition risk and the subprime risk separately. What it had not identified was the **interaction**: the acquisition reduced the capital buffer at precisely the moment subprime losses required that capital. Each risk was individually manageable. Together, they created a compounding spiral. Fortis required an €11.2 billion government rescue and was broken up — the largest corporate failure in Benelux history.[^ch10-8] The two risks were not merely correlated. They amplified each other through a direct mechanism: the acquisition consumed the capital that the subprime losses subsequently demanded.

**Systemic concentration** extends beyond the institution to the system in which it operates. The Icelandic banking collapse of October 2008 is the most extreme illustration. Kaupthing, Landsbanki, and Glitnir collectively grew to ten times Iceland's GDP through aggressive international expansion funded by wholesale markets.[^ch10-9] Each bank's risk assessment focused on its individual balance sheet. Each assessed its own liquidity, its own credit quality, its own capital adequacy. What no individual bank's risk function identified was the systemic concentration: the entire banking system had grown beyond the fiscal capacity of the sovereign to backstop. There was no credible lender of last resort at the scale required. When wholesale funding markets froze globally, all three banks failed within a single week. Iceland imposed capital controls, the currency collapsed, and the country required an IMF bailout.[^ch10-10]

The Icelandic failure is particularly instructive because the concentration was not in any individual institution's risk inventory. It existed at the system level — between the banking system's size and the sovereign's fiscal capacity. Neither the banks nor the regulator had identified it. The Central Bank of Iceland's financial stability reports assessed individual bank metrics without aggregating to the system-level question: can this country backstop its banking system? Concentration analysis within the methodology requires asking not just "where are our internal concentrations?" but "what system-level concentrations is our institution embedded within?" This connects directly to the PESTLE assessment from Chapter 5 (Setting the Context: External, Internal, and Risk Culture) — the external context assessment should identify system-level vulnerabilities that individual risk assessments cannot see.

### Identifying Hidden Concentration

The most dangerous concentrations are those disguised by apparent diversification. HSH Nordbank, referenced briefly in Chapter 8 (Reconciliation and the Enterprise Portfolio View), believed it was diversified because its portfolio combined shipping finance — where it was the world's largest lender — with US subprime structured products. Two different asset classes, two different geographies, two different risk categories. But both were correlated to global economic activity. When global trade collapsed, shipping values fell. When the US housing market collapsed, structured product values fell. Both happened simultaneously because both were driven by the same underlying factor: the global economic contraction of 2008-2009. The €10 billion state guarantee that followed demonstrated the cost of false diversification.[^ch10-11]

Concentration analysis must therefore go beyond taxonomy-level aggregation. It requires identifying the **underlying drivers** — the economic, market, political, and operational factors that connect risks across taxonomy categories. The driver fields in the standardised template from Chapter 7 (Bottom-Up Identification: Templates, RCSA, and Specialist Processes) are the raw material. When the same driver appears across multiple risks in different taxonomy categories, that is a concentration signal regardless of the apparent diversification of the portfolio.

## Cost-Benefit Assessment and the ALARP Principle

Risk interaction analysis identifies how risks relate to each other. It does not, by itself, determine what to do about them. For material risks where new controls or mitigants are being considered — particularly where the interaction analysis has revealed cascade pathways or amplification mechanisms requiring additional barriers — the methodology requires a **cost-benefit assessment** of proposed risk responses.

ISO 31010 Section B.30 provides the framework.[^ch10-12] The approach is straightforward in principle:

1. **Quantify the cost** of the proposed control or mitigant — both implementation and ongoing operation
2. **Estimate the risk reduction** achieved — expressed as change in residual risk score and, where possible, reduction in expected loss
3. **Where quantification is possible**, express the comparison as a net present value or benefit-cost ratio
4. **Where quantification is not feasible** — and for many operational, reputational, and conduct risks it is not — produce a qualitative trade-off table comparing costs, benefits, and residual uncertainties

The cost-benefit assessment is not a decision rule. It is an input to decision-making. A negative NPV does not automatically mean the control should not be implemented — regulatory requirements, reputational considerations, and Board risk appetite may all override a purely financial calculation. But without the assessment, the institution is making control investment decisions without evidence.

The assessment is governed by the **ALARP principle** — As Low As Reasonably Practicable — borrowed from safety engineering and well-established in operational risk management:

- **Above the upper threshold:** the risk is intolerable. It must be reduced regardless of cost, unless reduction is genuinely impracticable. For a bank, risks above the upper threshold are those that threaten viability, breach regulatory requirements, or exceed Board-approved appetite boundaries.
- **Within the ALARP region:** the risk should be reduced if the cost of reduction is not grossly disproportionate to the benefit. This is where cost-benefit analysis does its work. "Grossly disproportionate" sets a deliberately high bar — the cost must substantially exceed the benefit, not merely exceed it marginally.
- **Below the lower threshold:** the risk is broadly acceptable and need only be monitored to ensure it remains at this level. The risk criteria established in Phase 1 (Chapter 5 (Setting the Context: External, Internal, and Risk Culture)) define this threshold.

ALARP prevents two opposite errors. It prevents the institution from tolerating risks that should be reduced because the cost of reduction appears high. And it prevents the institution from investing disproportionately in reducing risks that are already at acceptable levels — resources that could be deployed more effectively against the risks that the interaction analysis has identified as cascade nodes or amplification points.

The cost-benefit assessment is documented in the risk profile for each material risk and reviewed as part of the quarterly refresh cycle described in Chapter 13 (The Ongoing Cycle: Refresh, Events, and Audit). This ensures that the assessment evolves as conditions change — a control that was cost-effective when market conditions were stable may become essential when the interaction matrix reveals new cascade pathways under changed circumstances.

## Bringing Interaction Analysis Together

The three tools — risk interaction matrix, bow-tie analysis, and concentration analysis — are complementary, not alternative. The interaction matrix maps the landscape of relationships across the full material portfolio. Bow-tie analysis provides granular causal architecture for the most critical individual risks. Concentration analysis identifies where multiple risks share common drivers or dependencies that taxonomy-level assessment would miss.

Together with the cost-benefit assessment, they complete the second half of Phase 3. Every material risk now carries not just its individual four-dimensional score from Chapter 9 (Assessment — Scoring, Multi-Dimensional Impact, and Data Quality), but a documented set of interaction relationships, causal chain mapping for the most critical risks, identified concentrations, and evidence-based assessment of control proportionality.

The outputs feed directly into the documentation and inventory that Chapter 11 (Documentation: The Living Risk Inventory) will describe. The risk interaction matrix becomes a standing document, updated with each quarterly refresh. Bow-tie diagrams for the top risks are maintained as living documents, with barriers and escalation factors reassessed as controls change. Concentration analysis informs both the enterprise portfolio view (Chapter 8 (Reconciliation and the Enterprise Portfolio View)) and the Board's principal risk report (Chapter 3 (Governance: Who Owns What)). And the cost-benefit assessments provide the evidence base for risk response decisions that the Board must approve.

Consider, finally, what these tools would have revealed at Lehman Brothers. The risk interaction matrix would have shown credit risk triggering market risk through mark-to-market, market risk triggering liquidity risk through collateral calls, liquidity risk triggering operational risk through forced asset sales, and reputational risk amplifying liquidity risk through counterparty withdrawal — a documented cascade chain. The bow-tie for credit concentration would have identified Repo 105 as an escalation factor undermining the capital adequacy barrier. Concentration analysis would have flagged the single-sector, single-asset-class exposure across mortgage-backed securities. And the ALARP assessment would have identified the leverage ratio as above the upper threshold — intolerable regardless of cost of reduction.

None of this required information that was unavailable. The mortgage positions were known. The leverage was reported. The Repo 105 transactions were documented — they were even reviewed by external auditors. What was missing was the systematic methodology to connect the individually known facts into a coherent picture of interacting risks. That is what risk interaction analysis provides.

## What Comes Next

Phase 3 is now complete. Every risk in the material inventory has been scored across four dimensions, overlaid with data quality ratings, separated into inherent and residual assessments, tested for materiality, and analysed for interactions, concentrations, and causal chains. The analytical work of risk identification — from the foundation setting of Phase 1 through the dual-track identification of Phase 2 to the assessment and interaction analysis of Phase 3 — has produced a comprehensive, interconnected risk landscape.

But analysis without documentation is ephemeral. The risk inventory must be captured in a living document that preserves the full analytical record — not just the scores, but the evidence, the judgements, the disagreements, the interaction relationships, and the control assessments that produced them. That documentation is the subject of Chapter 11 (Documentation: The Living Risk Inventory): the fourteen-field risk inventory, the risk profiles for material risks, and the standards that ensure the inventory remains a decision tool rather than a compliance artefact.

---

[^ch10-1]: Report of Anton R. Valukas, Examiner, *In re Lehman Brothers Holdings Inc.*, United States Bankruptcy Court, Southern District of New York, 11 March 2010, Volume 1, Section III.A.1, pp. 2–3. The Examiner documented Lehman's residential mortgage-backed securities holdings at approximately $85 billion within a total real estate portfolio of $111 billion as of late 2007.

[^ch10-2]: Valukas Examiner's Report, Volume 1, Section III.A.4, pp. 46–59. Lehman's net leverage ratio was approximately 16:1 by its own reported metrics, but the gross leverage ratio — before netting — exceeded 30:1. See also Financial Crisis Inquiry Commission, *The Financial Crisis Inquiry Report*, U.S. Government Printing Office, January 2011, pp. 177–178.

[^ch10-3]: Lehman Brothers Holdings Inc. filed for Chapter 11 bankruptcy protection on 15 September 2008 in the United States Bankruptcy Court, Southern District of New York (Case No. 08-13555). Total assets of $639 billion were listed in the filing, making it the largest bankruptcy in U.S. history. See FCIC Report, January 2011, p. 339.

[^ch10-4]: ISO 31000:2018, *Risk management — Guidelines*, Section 6.4.3 (Risk analysis), which requires consideration of "knock-on effects of particular consequences, including cascade and cumulative effects."

[^ch10-5]: ISO 31010:2019, *Risk management — Risk assessment techniques*, Section B.21 (Bow tie analysis), pp. 81–84.

[^ch10-6]: Valukas Examiner's Report, Volume 3, Section III.A.4 (Repo 105), pp. 732–1027. The Examiner found that Lehman used Repo 105 transactions to temporarily remove approximately $50 billion in assets from its balance sheet at the end of the first and second quarters of 2008, reducing reported net leverage. Ernst & Young, Lehman's external auditor, was aware of the Repo 105 programme.

[^ch10-7]: The Royal Bank of Scotland-led consortium (RBS, Fortis, and Santander) completed the acquisition of ABN AMRO on 10 October 2007 for approximately €71 billion ($98 billion), the largest banking takeover in history at that time. Fortis's share was approximately €24 billion. See FCIC Report, January 2011, p. 157; see also Dutch Parliamentary Commission on the Financial System (De Wit Commission), *Final Report*, April 2010.

[^ch10-8]: On 28 September 2008, the governments of Belgium, the Netherlands, and Luxembourg injected €11.2 billion into Fortis to prevent collapse. Fortis was subsequently broken up, with the Dutch banking and insurance operations nationalised and the Belgian banking operations sold to BNP Paribas. See De Wit Commission Final Report, April 2010.

[^ch10-9]: Special Investigation Commission (SIC) of the Icelandic Parliament (*Althingi*), *Report of the Special Investigation Commission*, 12 April 2010, Chapter 2 (The Growth of the Banks). Combined assets of Kaupthing, Landsbanki, and Glitnir reached approximately ten times Iceland's GDP by end-2007.

[^ch10-10]: All three Icelandic banks were placed into receivership in the first week of October 2008: Glitnir (29 September), Landsbanki (7 October), and Kaupthing (9 October). Iceland imposed emergency capital controls on 28 November 2008 and entered into a Stand-By Arrangement with the International Monetary Fund on 19 November 2008 ($2.1 billion programme). See SIC Report, Chapter 17; IMF Country Report No. 08/362, November 2008.

[^ch10-11]: HSH Nordbank received a €10 billion guarantee from the German states of Hamburg and Schleswig-Holstein in 2009, plus a €3 billion capital injection from the Financial Market Stabilization Fund (*SoFFin*). HSH Nordbank was the world's largest shipping finance lender. See European Commission State Aid Decision SA.29338, 20 September 2011.

[^ch10-12]: ISO 31010:2019, *Risk management — Risk assessment techniques*, Section B.30 (Cost/benefit analysis), pp. 107–109.
