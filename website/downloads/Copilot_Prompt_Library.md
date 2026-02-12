# Copilot Prompt Library — Bank Risk Identification

**For use with Microsoft 365 Copilot, Azure OpenAI, or any enterprise-approved AI assistant.**

Each prompt generates a customised artifact from the methodology described in *Bank Risk Identification: The Complete Methodology*. Copy the prompt, replace the `[PLACEHOLDER]` values with your institution's details, and paste into your AI assistant.

**Variables used throughout** — replace these once and reuse across prompts:

| Variable | Replace With |
|----------|-------------|
| `[INSTITUTION]` | Your institution's name |
| `[JURISDICTION]` | Primary regulatory jurisdiction (e.g., UK/PRA, US/Fed, EU/ECB) |
| `[BUSINESS_MIX]` | Your business lines (e.g., retail banking, corporate lending, wealth management) |
| `[YEAR]` | Current year |
| `[QUARTER]` | Current quarter |

---

## Phase 1 — Foundation Setting

### Prompt 1: Risk Taxonomy Builder
**Artifact:** Three-level risk taxonomy (L1/L2/L3)
**Book Reference:** Chapter 4

```
You are a bank risk identification specialist. Build a three-level risk taxonomy for [INSTITUTION], a [BUSINESS_MIX] bank regulated by [JURISDICTION].

The taxonomy must have:
- Level 1: Major risk categories (typically 8-12)
- Level 2: Sub-categories within each L1 (typically 2-5 per L1)
- Level 3: Granular risk types (typically 2-4 per L2)

For each L3 risk, provide:
- A one-sentence definition
- The COSO ERM objective category (Strategic / Operations / Reporting / Compliance)
- The corresponding regulatory risk category used by [JURISDICTION]

Present as a structured table. Ensure coverage of: credit, market, operational, liquidity, strategic, conduct, compliance, technology/cyber, climate/ESG, and model risk at minimum.
```

### Prompt 2: Regulatory Mapping Table
**Artifact:** Maps taxonomy to regulator categories
**Book Reference:** Chapter 4, 15

```
Create a regulatory mapping table for [INSTITUTION]. For each L1 and L2 category in our risk taxonomy, map the corresponding risk category used by each of the following regulators:

- [JURISDICTION primary regulator]
- [JURISDICTION secondary regulator if applicable]
- BCBS (Basel Committee)

Format as a table with columns: L1 Category | L2 Sub-Category | [Regulator 1] Category | [Regulator 2] Category | BCBS Reference | Notes

Include the specific regulatory reference (article, section, or guideline number) where each mapping is defined.
```

### Prompt 3: PESTLE Assessment
**Artifact:** External environment assessment
**Book Reference:** Chapter 5

```
Conduct a PESTLE assessment for [INSTITUTION] as of [QUARTER] [YEAR]. For each of the six dimensions (Political, Economic, Social, Technological, Legal, Environmental):

1. Identify 3-5 key developments or trends relevant to a [BUSINESS_MIX] bank in [JURISDICTION]
2. For each finding, assess:
   - Significance (1-5 scale, where 5 = critical)
   - Trend (Increasing / Stable / Decreasing)
   - Which risk taxonomy categories are affected
   - Source or evidence basis

Focus on factors that could create new risks, change the severity of existing risks, or invalidate current assumptions. Present as a structured table grouped by PESTLE dimension.
```

### Prompt 4: Internal Environment Assessment
**Artifact:** Seven COSO ERM element assessment
**Book Reference:** Chapter 5

```
Generate an internal environment assessment template based on the seven COSO ERM internal environment elements for [INSTITUTION]. For each element, provide:

1. Risk Management Philosophy — 3 assessment questions about how risk appetite is communicated and whether risk-taking is rewarded or penalised
2. Board Risk Oversight — 3 questions about Board challenge quality and independent expertise
3. Integrity and Ethical Values — 3 questions about conduct history and whistleblowing culture
4. Commitment to Competence — 3 questions about risk function staffing and training
5. Organisational Structure — 3 questions about independence of risk functions
6. Assignment of Authority — 3 questions about risk ownership clarity
7. Human Resource Standards — 3 questions about compensation incentives and key-person risk

For each question, suggest what "Strong", "Adequate", and "Weak" responses would look like. Format as a structured assessment form.
```

### Prompt 5: Risk Criteria Definition
**Artifact:** Four-dimensional scoring scales
**Book Reference:** Chapter 5, 9

```
Define a complete set of risk criteria for [INSTITUTION], a [BUSINESS_MIX] bank with approximately [CET1_AMOUNT] in CET1 capital. Create four scoring scales (1-5 each):

1. IMPACT SCALE with four dimensions:
   - Financial: anchor to CET1 capital (basis points)
   - Regulatory: from informal feedback to licence revocation
   - Reputational: from no awareness to total loss of confidence
   - Customer/Operational: from negligible to total service failure

2. LIKELIHOOD SCALE: from Rare (<1% annual) to Frequent (>90%)

3. VULNERABILITY SCALE: from Very Low (robust controls, tested) to Very High (no controls)

4. SPEED OF ONSET SCALE: from Very Slow (>2 years) to Immediate (<1 week)

Also define:
- Data Quality Rating (High / Medium / Low / Very Low) with typical evidence basis for each
- Conservatism adjustment rules for Low and Very Low data quality
- Materiality threshold (the combined score at which a risk becomes "material")

Present each scale as a table with Score, Rating, Description, and Examples columns.
```

### Prompt 6: Climate Risk Transmission Channels
**Artifact:** Climate/ESG risk mapping framework
**Book Reference:** Chapter 5, 15

```
Build a climate risk transmission channels framework for [INSTITUTION]. Map how physical and transition climate risks transmit into traditional risk categories through six channels:

1. Physical Acute (extreme weather events)
2. Physical Chronic (long-term climate shifts)
3. Transition — Policy (carbon pricing, regulation)
4. Transition — Technology (stranded assets, new tech)
5. Transition — Market (changing demand, repricing)
6. Transition — Reputation (stakeholder activism, greenwashing)

For each channel, provide:
- Description of the transmission mechanism
- Which L1/L2 risk taxonomy categories are affected
- Example scenario relevant to [BUSINESS_MIX]
- Time horizon (short/medium/long-term)
- Current data quality assessment

Format as a structured table. Include both counterparty-level and portfolio-level transmission pathways.
```

---

## Phase 2 — Top-Down Identification

### Prompt 7: SWIFT Prompt Matrix
**Artifact:** Customised workshop prompts
**Book Reference:** Chapter 6

```
Create a SWIFT (Structured What If Technique) prompt matrix for a risk identification workshop at [INSTITUTION], a [BUSINESS_MIX] bank.

Use these guide words as columns:
- What if...
- What would happen if...
- Could someone...
- Could something...
- Has anyone considered...
- What is the worst...
- How would we know if...
- What changed since...

Use the institution's L1 risk categories as rows:
[LIST YOUR L1 CATEGORIES OR USE: Credit, Market, Operational, Liquidity, Strategic, Conduct, Compliance, Technology/Cyber, Climate/ESG, Model Risk]

For each cell, write a specific, provocative prompt tailored to a [BUSINESS_MIX] bank in [JURISDICTION]. Each prompt should be concrete enough to generate discussion, not generic. Reference current market conditions where relevant.

Present as a matrix table.
```

### Prompt 8: Workshop Briefing Pack Outline
**Artifact:** Pre-workshop materials
**Book Reference:** Chapter 6

```
Create a briefing pack outline for [INSTITUTION]'s [QUARTER] [YEAR] risk identification workshop. The pack should contain sections for:

1. PESTLE Summary — key external developments since last workshop
2. Internal Environment Update — changes to strategy, structure, or culture
3. Prior Period Principal Risk List — current risks with trend indicators
4. Regulatory Communications — recent supervisory letters, findings, or expectations
5. Industry Loss Events — recent failures or losses at peer institutions relevant to [BUSINESS_MIX]
6. Emerging Risk Candidates — risks flagged in prior Delphi round or horizon scanning
7. Data for Discussion — KRI dashboard showing any amber/red indicators

For each section, specify:
- What information should be included
- Who is responsible for providing it
- Maximum length (pages)
- Key questions the section should help participants answer
```

### Prompt 9: Delphi Panel Design
**Artifact:** Three-round Delphi method for emerging risks
**Book Reference:** Chapter 6

```
Design a three-round Delphi process for identifying emerging risks at [INSTITUTION]. Specify:

ROUND 1 — Open Identification:
- The exact question to pose to panellists
- Panel composition (roles, seniority, internal vs external, target size)
- Response format and anonymity requirements
- Timeline

ROUND 2 — Convergence:
- How Round 1 responses are synthesised and fed back
- The scoring criteria panellists use (e.g., likelihood, time horizon, potential impact)
- Format for structured ranking

ROUND 3 — Final Assessment:
- How divergent views are handled
- Output format (emerging risk register entries)
- Criteria for escalation to main risk inventory vs monitoring list

Include specific emerging risk categories relevant to [BUSINESS_MIX] in [YEAR] as seed topics for Round 1.
```

### Prompt 10: Pre-Workshop Independent Assessment Form
**Artifact:** Individual risk submission form
**Book Reference:** Chapter 6

```
Create a pre-workshop independent assessment form for risk identification workshop participants at [INSTITUTION]. Each participant completes this independently before the workshop.

The form should capture:
- Participant name, role, and business line
- Their top 10 risks (ranked), each with:
  - Risk description (1-2 sentences)
  - Taxonomy category (L1/L2)
  - Why this risk is significant now (current trigger)
  - Confidence level (High/Medium/Low)
  - Whether this is new, changed, or unchanged from prior assessment

Include clear instructions emphasising:
- Independence (no discussion with other participants)
- Evidence basis (not just gut feel)
- Coverage (think across all risk categories, not just your own area)

Format as a form that could be completed in Word or SharePoint.
```

---

## Phase 2 — Bottom-Up Identification

### Prompt 11: Bottom-Up Risk Assessment Template
**Artifact:** 11-field standardised template
**Book Reference:** Chapter 7

```
Create a standardised bottom-up risk assessment template for business units at [INSTITUTION]. The template must contain these eleven fields per risk:

1. Risk ID (format: [BU code]-[sequence])
2. Taxonomy Classification (L1/L2/L3)
3. Risk Definition (plain language, what could go wrong)
4. Direct Drivers (immediate causes)
5. Indirect Drivers (underlying or systemic causes)
6. Quantitative Metrics (exposure amounts, volumes, concentrations)
7. Qualitative Information (context, trends, expert judgement)
8. Current Controls (preventive and detective, with effectiveness assessment)
9. Risk Owner (named individual, not a committee)
10. Emerging Risk Indicators (early warning signals to monitor)
11. Data Quality Rating (High/Medium/Low/Very Low with justification)

Include:
- Completion instructions for each field
- Common mistakes to avoid
- An example completed entry for a [BUSINESS_MIX]-relevant risk
- Quality checks the central risk function will apply

Format as a template that could be distributed to business unit risk leads.
```

### Prompt 12: RCSA Template
**Artifact:** Risk and Control Self-Assessment
**Book Reference:** Chapter 7

```
Design a Risk and Control Self-Assessment (RCSA) template for [INSTITUTION]'s operational risk identification. The template should cover:

For each process area:
1. Process Name and Owner
2. Key Risks (mapped to L2/L3 operational risk taxonomy)
3. Risk Description
4. Inherent Risk Rating (Impact 1-5 × Likelihood 1-5)
5. Controls:
   - Control description
   - Control type (Preventive / Detective / Corrective)
   - Control effectiveness (Effective / Partially Effective / Ineffective)
   - Evidence of effectiveness
   - Last testing date
6. Residual Risk Rating
7. Control Gaps Identified
8. Action Plans for gaps (owner, deadline, status)

Provide a completed example for [one process relevant to BUSINESS_MIX, e.g., "Client Onboarding" or "Trade Execution"]. Include 5-6 risks with associated controls.
```

### Prompt 13: Specialist Assessment — Conduct Risk
**Artifact:** FCA Five Conduct Questions framework
**Book Reference:** Chapter 7

```
Create a conduct risk assessment template for [INSTITUTION] based on the FCA's Five Conduct Questions framework:

1. What could cause harm to our customers?
2. What could undermine market integrity?
3. What could distort competition?
4. How does our culture contribute to conduct risk?
5. What inherent risks does our business model create?

For each question, provide:
- 5-7 specific sub-questions tailored to [BUSINESS_MIX]
- Assessment criteria
- Evidence sources to review
- Red flags that indicate elevated conduct risk
- Linkage to risk taxonomy categories

Include a scoring methodology and a template for documenting findings. The output should be suitable for discussion with the FCA during supervisory review.
```

### Prompt 14: Specialist Assessment — ICT and Cyber
**Artifact:** ICT risk assessment per EBA/DORA
**Book Reference:** Chapter 7, 15

```
Create an ICT and cyber security risk assessment template for [INSTITUTION] consistent with EBA GL/2019/04 and DORA (Digital Operational Resilience Act) requirements. Cover:

1. Information Asset Classification — categories and criticality levels
2. ICT Systems Inventory — critical systems, dependencies, recovery objectives
3. Threat Landscape Assessment — current threats to [BUSINESS_MIX] institutions
4. Vulnerability Assessment — known weaknesses in current controls
5. ICT Change Management Risk — risks from system changes and deployments
6. Data Integrity Risk — risks to accuracy, completeness, and timeliness of data
7. Business Continuity / Disaster Recovery — assessment of resilience
8. Third-Party ICT Risk — critical ICT service provider dependencies
9. ICT Concentration Risk — single points of failure

For each area, provide assessment questions, rating criteria, and regulatory references. Include DORA-specific requirements for the Register of Information and Critical or Important Function mapping.
```

---

## Phase 3 — Reconciliation

### Prompt 15: Gap Analysis Framework
**Artifact:** Top-down vs bottom-up reconciliation
**Book Reference:** Chapter 8

```
Create a reconciliation framework for [INSTITUTION]'s risk identification process. The framework must address:

TOP-DOWN GAPS (risks identified in senior management workshop but missing from business unit submissions):
- Template for documenting each gap
- Root cause categories (business unit didn't recognise it, risk spans multiple BUs, strategic risk without operational owner, new/emerging risk)
- Resolution options (assign to BU, create cross-cutting risk owner, escalate to CRO)
- Escalation criteria

BOTTOM-UP GAPS (risks identified by business units but not surfaced in top-down workshop):
- Template for documenting each gap
- Materiality assessment criteria (does it breach appetite? does it affect multiple BUs?)
- Escalation triggers for promoting to principal risk list
- Resolution documentation

CHALLENGE SESSION STRUCTURE:
- Agenda for reconciliation challenge sessions
- Roles (facilitator, business unit presenters, CRO function challengers)
- Evidence requirements for resolving each gap
- Documentation standards

Include a reconciliation iteration log template showing how gaps narrow across iterations until CRO sign-off.
```

### Prompt 16: Enterprise Portfolio View
**Artifact:** Aggregated institutional risk picture
**Book Reference:** Chapter 8, 12

```
Design an enterprise portfolio view template for [INSTITUTION]. The view must present four analytical dimensions:

1. COMMON EXPOSURES — identify where multiple business units share exposure to the same underlying driver. Create a matrix of risks vs underlying drivers showing which risks would be simultaneously affected.

2. SIMULTANEOUS CRYSTALLISATION — for the top 10 risk clusters from the interaction matrix, describe the scenario where multiple risks crystallise together. Include estimated combined impact vs individual impacts.

3. AGGREGATE POSITION AGAINST APPETITE — for each L1 risk category, show:
   - Aggregated residual score across all constituent risks
   - Board-approved appetite level
   - Current position (within / approaching / exceeding)
   - Trend direction

4. DIVERSIFICATION AND CORRELATION — assess whether apparent diversification across risk categories holds under stress. Identify where correlations increase in stress conditions.

Format as a board-ready summary with tables and suggested visualisations.
```

---

## Phase 4 — Assessment

### Prompt 17: Risk Scoring Guide
**Artifact:** Four-dimensional scoring methodology
**Book Reference:** Chapter 9

```
Create a practical risk scoring guide for assessors at [INSTITUTION]. For each of the four dimensions (Impact, Likelihood, Vulnerability, Speed of Onset):

1. Define what the dimension measures
2. Provide the 1-5 scale with descriptions
3. Give three worked examples of how to score a real risk on this dimension
4. List common scoring errors and how to avoid them:
   - Anchoring bias (scoring based on recent events)
   - Optimism bias (underscoring familiar risks)
   - Precision bias (false accuracy on low-quality data)
   - Herding (following the most senior person's score)

Then explain:
- How to derive the inherent score (four dimensions, no controls)
- How to assess control effectiveness (1-5)
- How to derive the residual score
- How data quality ratings drive conservatism adjustments
- How to determine materiality from the combined score

Include a fully worked example scoring [a risk relevant to BUSINESS_MIX] through all steps.
```

---

## Phase 5 — Risk Interaction

### Prompt 18: Risk Interaction Matrix
**Artifact:** Cross-risk relationship mapping
**Book Reference:** Chapter 10

```
For [INSTITUTION]'s principal risk list of [N] material risks, build a risk interaction matrix. For each pair of risks, assess whether a relationship exists:

- T (Trigger): crystallisation of Risk A directly causes Risk B to crystallise
- A (Amplifier): crystallisation of Risk A worsens the severity of Risk B
- C (Correlation): Risk A and Risk B share common drivers and tend to move together

Use these material risks: [LIST YOUR PRINCIPAL RISKS]

Present as a square matrix. Then provide:
1. The top 5 propagation nodes (risks with the most outgoing T or A relationships)
2. The top 5 vulnerable nodes (risks with the most incoming T or A relationships)
3. The 3 most dangerous cascade pathways (chains of 3+ linked risks)
4. Risk clusters that could crystallise simultaneously

Explain the implications for capital planning and stress testing.
```

### Prompt 19: Bow-Tie Analysis
**Artifact:** Causal analysis for a specific risk
**Book Reference:** Chapter 10

```
Conduct a bow-tie analysis for the following risk at [INSTITUTION]:

Risk: [RISK NAME AND DEFINITION]

LEFT SIDE (Causes → Risk Event):
- Identify 5-8 potential causes
- For each cause, identify the preventive barrier (control) that should stop it
- For each barrier, identify 1-2 escalation factors that could cause the barrier to fail
- For each escalation factor, identify the escalation control

RIGHT SIDE (Risk Event → Consequences):
- Identify 4-6 potential consequences if the risk crystallises
- For each consequence, identify the mitigating barrier that limits severity
- Identify recovery controls for restoring normal operations

MANAGEMENT FUNCTION LAYER:
- What training, testing, inspection, and maintenance activities support each barrier?

Present in a structured table format (since we cannot draw diagrams). Include an assessment of which barriers are weakest and which escalation factors are most likely.
```

---

## Phase 6 — Documentation

### Prompt 20: Risk Profile
**Artifact:** 14-element deep dive for a material risk
**Book Reference:** Chapter 11

```
Write a complete risk profile for the following material risk at [INSTITUTION]:

Risk: [RISK NAME]
Risk ID: [ID]
Taxonomy: [L1/L2/L3]

Complete all 14 elements:
1. Risk Definition — clear, plain-language description
2. Taxonomy Classification — L1/L2/L3 with rationale
3. COSO Objective Category — Strategic/Operations/Reporting/Compliance
4. Underlying Drivers — direct and indirect, using cause-and-effect analysis
5. Current Exposure Metrics — quantitative measures of current exposure
6. Risk Appetite Position — appetite level and current position against it
7. Key Controls — preventive and detective controls with effectiveness ratings
8. Cost-Benefit Assessment — are current controls proportionate?
9. Key Risk Indicators — 3-5 leading indicators with green/amber/red thresholds
10. Scenario Linkage — which ICAAP/ILAAP/CCAR scenarios map to this risk
11. Data Quality Assessment — rating with evidence basis
12. Risk Interactions — which other risks does this trigger, amplify, or correlate with
13. Trend and Outlook — current direction and 12-month forward view
14. Risk Owner — named individual with accountability description

Format as a structured document suitable for inclusion in the risk inventory.
```

### Prompt 21: KRI Design
**Artifact:** Key Risk Indicators with thresholds
**Book Reference:** Chapter 11, 13

```
Design Key Risk Indicators (KRIs) for [INSTITUTION]'s top [N] material risks. For each risk, provide 2-3 KRIs with:

1. KRI Name and Description
2. Data Source (where the metric comes from)
3. Measurement Frequency (daily/weekly/monthly/quarterly)
4. Green Threshold (within normal operating range)
5. Amber Threshold (approaching risk appetite, requires monitoring)
6. Red Threshold (exceeding appetite, requires escalation)
7. Escalation Action (what happens when amber/red is breached)
8. Lead Time (how far in advance of risk crystallisation does this indicator move)

Prioritise leading indicators over lagging indicators. Each KRI should be:
- Measurable with available data
- Sensitive enough to provide early warning
- Specific to the risk (not a general market indicator)

Risks to cover: [LIST YOUR TOP MATERIAL RISKS]
```

---

## Integration

### Prompt 22: Stress Scenario Mapping
**Artifact:** Links risks to capital planning scenarios
**Book Reference:** Chapter 12

```
Map [INSTITUTION]'s material risk inventory to stress testing scenarios for [ICAAP/ILAAP/CCAR — choose applicable framework].

For each material risk:
1. Identify which stress scenario(s) it maps to
2. Explain the transmission mechanism (how does the scenario affect this risk)
3. Calibrate severity using the four-dimensional score
4. Identify whether the risk is captured in quantitative models or requires management judgement overlay
5. If management judgement is required, document the basis and conservatism adjustment for data quality

Also identify:
- Risks that are NOT captured by any existing stress scenario (coverage gaps)
- Reverse stress test scenarios: which combinations of risk crystallisation would render the institution non-viable

Material risks: [LIST RISKS]
Available stress scenarios: [LIST SCENARIOS]
```

### Prompt 23: Board Report Draft
**Artifact:** Principal Risk Report (10 items)
**Book Reference:** Chapter 12

```
Draft a Principal Risk Report for [INSTITUTION]'s Board Risk Committee for [QUARTER] [YEAR]. The report must contain all ten required elements:

1. Material risks with four-dimensional scores (table)
2. Dominant consequence dimension for each risk
3. Trend direction (Increasing/Stable/Decreasing) with commentary on changes
4. Appetite breach summary (which risks exceed or approach appetite)
5. New or emerging risks identified this cycle
6. Risks removed or reclassified since last report (with rationale)
7. KRI dashboard (traffic-light summary of all material risk KRIs)
8. Data quality distribution (% of material risks at each quality level)
9. Enterprise portfolio view summary (aggregate position vs appetite)
10. Process performance indicators (completion rates, timeliness, audit findings)

Use a professional, concise tone suitable for non-executive Board members. Each section should be 1-2 paragraphs maximum with supporting tables.

Current risk data: [PROVIDE SUMMARY OR SAY "Use illustrative data for a [BUSINESS_MIX] bank"]
```

---

## Ongoing Cycle

### Prompt 24: Quarterly Workshop Agenda
**Artifact:** Focused quarterly SWIFT workshop
**Book Reference:** Chapter 13

```
Create an agenda for [INSTITUTION]'s [QUARTER] [YEAR] quarterly risk identification workshop. This is a focused update workshop (not the annual full workshop). Structure:

1. Opening (15 min): Changes since [PREVIOUS QUARTER] — key events, regulatory developments, market movements
2. PESTLE Delta Review (20 min): What has changed in the external environment
3. Focused SWIFT Walk-Through (60 min): Apply "What changed since..." guide word to each L1 category
4. KRI Review (20 min): Review amber/red KRI breaches and implications
5. Emerging Risk Update (20 min): Delphi panel feedback, new horizon risks
6. Scoring Recalibration (20 min): Re-score any risks where conditions have materially changed
7. Actions and Close (15 min): Assign follow-ups, document assumption changes

For the SWIFT walk-through, provide 2-3 specific prompts per L1 category tailored to current conditions in [QUARTER] [YEAR].

Total duration: ~3 hours. Participants: [CRO, business unit heads, relevant specialists].
```

### Prompt 25: Event-Driven Trigger Assessment
**Artifact:** Rapid response to material events
**Book Reference:** Chapter 13, 16

```
A [DESCRIBE EVENT] has occurred. Conduct an event-driven trigger assessment for [INSTITUTION]:

1. EVENT CLASSIFICATION — which of the six trigger categories does this fall under:
   - Market dislocation
   - Regulatory change
   - Peer institution event
   - Internal incident
   - Strategic change
   - External environment shift

2. IMMEDIATE IMPACT ASSESSMENT:
   - Which risks in our inventory are directly affected?
   - Do any risk scores need immediate revision?
   - Are any KRI thresholds breached?
   - Does this event create any NEW risks not currently in the inventory?

3. INTERACTION ANALYSIS:
   - Could this event trigger cascade effects through the interaction matrix?
   - Which risk clusters are potentially activated?

4. APPETITE CHECK:
   - Does the revised risk position breach any appetite boundaries?
   - Is Board escalation required?

5. RECOMMENDED ACTIONS:
   - Immediate (24-48 hours)
   - Short-term (1-2 weeks)
   - Inventory update cycle

Format as a structured rapid assessment suitable for CRO briefing.
```

### Prompt 26: Scoring Calibration Exercise
**Artifact:** Annual consistency exercise
**Book Reference:** Chapter 13

```
Design a scoring calibration exercise for [INSTITUTION]'s risk assessors. Create 5 hypothetical risk scenarios that all assessors will independently score, allowing comparison of results across business units.

For each scenario, provide:
- A realistic risk description relevant to [BUSINESS_MIX]
- Sufficient context for scoring (exposure data, control information, market context)
- The four dimensions to score (Impact, Likelihood, Vulnerability, Speed of Onset)
- Data quality information

Include scenarios that test:
1. A clear-cut high-severity risk (should produce consistent high scores)
2. A clear-cut low-severity risk (should produce consistent low scores)
3. A risk with ambiguous likelihood (tests calibration on probability)
4. A risk with strong controls but high inherent impact (tests inherent vs residual)
5. A risk with low data quality (tests conservatism adjustment)

After scoring, provide the "model answers" with rationale for each score, highlighting common errors. Include acceptable scoring ranges (±0.5 on each dimension).
```

---

## Regulatory

### Prompt 27: Regulatory Traceability Narrative
**Artifact:** Compliance demonstration
**Book Reference:** Chapter 15

```
Write a regulatory traceability narrative for [INSTITUTION] demonstrating how our risk identification methodology complies with [SPECIFIC REGULATION, e.g., PRA SS31/15 / Fed SR 15-18 / ECB Guide to ICAAP].

For each requirement in the regulation:
1. Quote or paraphrase the specific requirement
2. Describe which phase of our methodology addresses it (Phase 1-6)
3. Identify the specific artifact or process that demonstrates compliance
4. Note any gaps or areas requiring additional work

Structure the narrative so it could be presented to a [PRA/Fed/ECB] supervisor during a review. Use a professional, evidence-based tone. Reference specific section numbers from the regulation.
```

### Prompt 28: DORA ICT Risk Framework
**Artifact:** Digital Operational Resilience compliance
**Book Reference:** Chapter 15

```
Create a DORA (Digital Operational Resilience Act) compliance framework for [INSTITUTION]'s risk identification process. Map our methodology to DORA requirements:

1. ICT Risk Management Framework (Art. 5-16):
   - How our risk identification captures ICT risks
   - The ICT asset inventory and its integration with the risk inventory

2. ICT Incident Reporting (Art. 17-23):
   - How incidents feed back into risk identification as event-driven triggers

3. Digital Operational Resilience Testing (Art. 24-27):
   - How testing results inform risk scoring and control effectiveness

4. ICT Third-Party Risk Management (Art. 28-44):
   - The Register of Information
   - Concentration risk from ICT providers
   - Dependency mapping to Critical or Important Functions

5. Information Sharing (Art. 45):
   - How threat intelligence feeds into PESTLE and emerging risk assessment

For each area, specify the artifact from our methodology that addresses it and any additional work required for full DORA compliance.
```

---

## Diagnostic / Ad Hoc

### Prompt 29: Taxonomy Gap Test
**Artifact:** Retrospective test against historical losses
**Book Reference:** Chapter 16

```
Test [INSTITUTION]'s risk taxonomy against historical bank failures. Take the following major bank losses and map each to our taxonomy:

[LIST LOSSES, OR USE: Archegos ($5.5B), London Whale ($6.2B), Wirecard (€1.9B), SVB ($209B failure), Barings ($1.4B), LTCM ($3.6B bailout), Wells Fargo (account fraud), Standard Chartered ($667M sanctions), CBA (AUD 700M AML), Bankia (€22.4B bailout)]

For each loss event:
1. Which L1/L2/L3 taxonomy categories would have captured it?
2. Would our bottom-up template fields have surfaced the key risk drivers?
3. Would our SWIFT guide words have prompted this risk in a workshop?
4. Are there any aspects of this failure that our taxonomy does NOT cover?

Identify taxonomy gaps — risk types that appear in historical losses but have no clear home in our classification. Recommend taxonomy additions.
```

### Prompt 30: New Product Risk Assessment
**Artifact:** Pre-launch risk identification
**Book Reference:** Chapter 12, 16

```
Conduct a risk identification assessment for a proposed new product/activity at [INSTITUTION]:

Product/Activity: [DESCRIBE]
Target Market: [DESCRIBE]
Expected Volume: [DESCRIBE]

Using the full methodology:
1. Map all risks to the existing taxonomy (L1/L2/L3)
2. Score each risk on four dimensions (Impact, Likelihood, Vulnerability, Speed of Onset)
3. Identify any new risk types not currently in the taxonomy
4. Assess interaction effects — how do new risks interact with existing portfolio risks
5. Update the enterprise portfolio view — does this product change the aggregate position against appetite
6. Identify required controls and KRIs
7. Assess regulatory implications

Present as a structured risk assessment suitable for the New Product Approval Committee.
```

---

**Total: 30 prompts covering all six methodology phases plus integration, ongoing cycle, regulatory, and diagnostic applications.**

Each prompt is designed to be:
- **Self-contained** — copy, customise placeholders, paste
- **Enterprise-safe** — no sensitive data leaves the institution when using with on-premise AI
- **Methodology-aligned** — produces artifacts consistent with the book's framework
- **Audit-ready** — outputs are structured for regulatory scrutiny

*Companion to: Bank Risk Identification: The Complete Methodology*
*EON Risk Services Ltd — www.eonriskservices.com*
