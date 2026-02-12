# Knowledge Base — RiskID Copilot Agent

This document is the structured methodology reference that the agent uses to generate artifacts. It distils the six-phase methodology into machine-readable format with explicit field definitions, scoring scales, and template structures.

---

## 1. Methodology Overview

The methodology comprises six core phases, two integration layers, and an ongoing cycle:

| Phase | Name | Chapters | Purpose |
|-------|------|----------|---------|
| 1 | Foundation Setting | 2-5 | Establish context, taxonomy, criteria, and starting universe |
| 2 | Dual-Track Identification | 6-7 | Identify risks via top-down workshops and bottom-up assessments |
| 3 | Reconciliation | 8 | Compare, challenge, and merge the two tracks into a single inventory |
| 4 | Assessment | 9 | Score every risk on four dimensions with data quality adjustments |
| 5 | Risk Interaction & Concentration | 10 | Map relationships, cascades, clusters, and concentrations |
| 6 | Documentation | 11 | Maintain the fourteen-field inventory and risk profiles |
| — | Integration | 12 | Feed into ICAAP, ILAAP, CCAR, stress testing, Board reporting |
| — | Ongoing Cycle | 13 | Quarterly workshops, event triggers, calibration, training, audit |

---

## 2. Risk Taxonomy Structure

### Three-Level Hierarchy

- **L1 (Category)**: Broad risk domain — typically 6-10 categories
- **L2 (Sub-category)**: Specific risk type within the domain — typically 3-8 per L1
- **L3 (Risk Element)**: Granular risk manifestation — typically 2-6 per L2

### Standard L1 Categories (adaptable to institution)

| L1 Code | L1 Category | Typical L2 Count |
|---------|-------------|-----------------|
| CR | Credit Risk | 6-8 |
| MR | Market Risk | 4-6 |
| OR | Operational Risk | 6-10 |
| LR | Liquidity Risk | 3-5 |
| SR | Strategic Risk | 4-6 |
| RR | Regulatory & Compliance Risk | 4-6 |
| REP | Reputational Risk | 3-4 |
| MOD | Model Risk | 2-3 |
| GR | Group Risk | 2-4 |
| CON | Conduct Risk | 3-5 |

### Regulatory Mapping

Each L2 node maps to corresponding categories used by:
- **PRA** (UK): Risk categories per SS31/15, SS1/23
- **Fed** (US): Risk categories per SR 15-18, CCAR
- **ECB** (EU): SREP risk categories
- **FINMA** (Switzerland): Risk categories per FINMA Circular 2017/01
- **APRA** (Australia): CPS 220 risk categories

---

## 3. Scoring Framework

### 3.1 Impact Scale (Five-Point, Four Dimensions)

| Score | Financial | Regulatory | Reputational | Customer/Operational |
|-------|-----------|------------|-------------|---------------------|
| 1 — Negligible | <0.5% of capital | Minor finding | Internal only | Localised, hours |
| 2 — Minor | 0.5-2% of capital | Formal warning | Local media | Single business line, days |
| 3 — Moderate | 2-5% of capital | Enforcement investigation | National media | Multiple business lines, weeks |
| 4 — Major | 5-15% of capital | Public censure / fine | International media, sustained | Enterprise-wide, months |
| 5 — Severe | >15% of capital / viability | Licence restriction / revocation | Systemic confidence loss | Existential, recovery plan |

### 3.2 Likelihood Scale

| Score | Descriptor | Probability | Typical Frequency |
|-------|-----------|------------|-------------------|
| 1 | Rare | <1% | Less than once in 20 years |
| 2 | Unlikely | 1-10% | Once in 10-20 years |
| 3 | Possible | 10-50% | Once in 3-10 years |
| 4 | Likely | 50-90% | Once in 1-3 years |
| 5 | Frequent | >90% | Multiple times per year |

### 3.3 Vulnerability Scale

| Score | Descriptor | Meaning |
|-------|-----------|---------|
| 1 | Very Low | Comprehensive, tested controls; strong governance; proven resilience |
| 2 | Low | Established controls with minor gaps; governance adequate |
| 3 | Moderate | Controls exist but untested under stress; some governance gaps |
| 4 | High | Controls incomplete or known to be weak; governance concerns |
| 5 | Very High | No effective controls; governance absent or compromised |

### 3.4 Speed of Onset Scale

| Score | Descriptor | Timeframe |
|-------|-----------|-----------|
| 1 | Gradual | Years — allows strategic response |
| 2 | Slow | Months — allows planned response |
| 3 | Moderate | Weeks — requires rapid response |
| 4 | Fast | Days — requires immediate response |
| 5 | Instantaneous | Hours or less — crisis management only |

### 3.5 Data Quality Rating

| Rating | Basis | Conservatism Adjustment |
|--------|-------|------------------------|
| High | Quantitative models, validated data, multiple sources | None |
| Medium | Some quantitative basis, limited validation | +0.5 on vulnerability |
| Low | Primarily qualitative, expert judgement | +1 on vulnerability |
| Very Low | No reliable data, pure assumption | +1 on vulnerability, +1 on impact |

### 3.6 Materiality Determination

A risk is material if:
- Inherent Impact >= 3 AND Likelihood >= 3, OR
- Residual Impact >= 4 on any dimension, OR
- Identified as material by CRO/Board override with documented rationale

### 3.7 Control Effectiveness Rating

| Score | Descriptor | Evidence |
|-------|-----------|---------|
| 1 | Highly Effective | Tested, validated, no material findings |
| 2 | Effective | Minor findings, addressed promptly |
| 3 | Partially Effective | Material gaps identified, remediation underway |
| 4 | Largely Ineffective | Significant deficiencies, limited remediation |
| 5 | Ineffective / Absent | No effective controls in place |

---

## 4. SWIFT Workshop Structure

### Six-Stage Workshop Design

| Stage | Duration | Purpose |
|-------|----------|---------|
| 1. Context Setting | 20 min | Present PESTLE findings, internal context changes, and prior-period risks |
| 2. Independent Assessment Review | 15 min | Aggregate and present pre-workshop submissions (anonymous) |
| 3. Structured Identification | 60 min | Apply SWIFT guide words systematically across risk categories |
| 4. Emerging Risk Discussion | 20 min | Horizon scanning for risks not yet material |
| 5. Prioritisation | 15 min | Preliminary ranking of identified risks by perceived severity |
| 6. Actions and Ownership | 10 min | Assign owners, document follow-ups, agree timeline |

### SWIFT Guide Words

| Guide Word | Purpose | Example Prompt |
|-----------|---------|---------------|
| What if | Explores hypothetical scenarios | What if interest rates rise 300bp in 6 months? |
| What would happen if | Examines consequences | What would happen if our largest counterparty defaulted? |
| Could someone | Identifies human-factor risks | Could someone bypass the dual-authorisation control? |
| Could something | Identifies systemic/technical risks | Could something cause all three data centres to fail? |
| Has anything changed | Captures environmental shifts | Has anything changed in the regulatory stance on crypto? |
| What are we assuming | Surfaces hidden assumptions | What are we assuming about customer behaviour in a downturn? |
| What don't we know | Acknowledges uncertainty | What don't we know about our exposure to commercial real estate? |

---

## 5. Bottom-Up Template (11 Fields)

Every business unit completes for every risk:

| Field | Description | Format |
|-------|-------------|--------|
| 1. Risk ID | Unique identifier following taxonomy convention | e.g. CR-02-003 |
| 2. Taxonomy Classification | L1/L2/L3 mapping | Dropdown from taxonomy |
| 3. Risk Definition | Clear, specific statement of the risk | Free text, 2-4 sentences |
| 4. Direct Drivers | Immediate causes that could trigger the risk | Structured list |
| 5. Indirect Drivers | Background factors creating conditions for materialisation | Structured list |
| 6. Quantitative Metrics | Measurable exposure indicators | Numeric with units |
| 7. Qualitative Information | Context, trends, expert assessment | Free text |
| 8. Current Controls | Existing controls with type (preventive/detective/corrective) | Structured list |
| 9. Risk Owner | Named individual with authority over this risk | Name, role, business unit |
| 10. Emerging Risk Indicators | Early warning signals | Structured list with thresholds |
| 11. Data Quality Rating | Assessment of evidence reliability | High/Medium/Low/Very Low |

---

## 6. Ten Specialist Sub-Processes

| Sub-Process | Regulatory Basis | Key Outputs |
|------------|-----------------|-------------|
| RCSA | Basel II/III Pillar 1 | Operational risk register with control effectiveness |
| Conduct Risk | FCA Five Conduct Questions | Conduct risk assessment, customer outcome analysis |
| ICT & Cyber | EBA GL/2019/04, DORA | ICT risk register, information asset inventory, threat assessment |
| AML/CFT | EU AMLD6, national frameworks | ML/TF risk assessment across four vectors |
| Model Risk | Fed SR 11-7, PRA SS1/23 | Model inventory, validation findings, risk ratings |
| Third-Party | EBA Outsourcing GL, DORA | Outsourcing register, concentration analysis, pre-outsourcing assessment |
| Traded Risk | FRTB, market risk frameworks | Trading book risk register, desk-level assessments |
| Treasury Risk | ILAAP, BCBS NSFR/LCR | Liquidity risk register, funding concentration analysis |
| Reputational & Sustainability | TCFD, CSRD, ISSB | ESG risk register, transmission channel mapping |
| Threat Scenarios | CBEST, TIBER-EU | Scenario library, impact and probability assessments |

---

## 7. Reconciliation Process

### Three-Step Gap Analysis

1. **Top-Down Gaps**: Risks identified in SWIFT workshop with NO corresponding bottom-up submission
2. **Bottom-Up Gaps**: Risks in business unit submissions NOT surfaced in top-down workshop
3. **Definitional Gaps**: Same risk identified in both tracks but defined differently

### Resolution Mechanisms

| Gap Type | Resolution | Documentation |
|----------|-----------|---------------|
| Top-down only | Assign to business unit for bottom-up assessment | Assignment record |
| Bottom-up only, material | Escalate to senior management for top-down consideration | Escalation assessment |
| Bottom-up only, not material | Retain in comprehensive register, not in principal risk list | Materiality assessment |
| Definitional | Challenge session to agree single definition | Challenge session minutes |

### Enterprise Portfolio View (Four Components)

1. **Common Exposures**: Multiple business units exposed to same underlying driver
2. **Simultaneous Crystallisation**: Single event triggering multiple risks across the institution
3. **Aggregate Position vs Appetite**: Enterprise-level exposure compared to Board-approved appetite
4. **Diversification & Correlation**: True diversification vs correlation under stress

---

## 8. Risk Interaction Analysis

### Interaction Types

| Type | Definition | Symbol |
|------|-----------|--------|
| Trigger | Risk A materialising directly causes Risk B to materialise | T |
| Amplifier | Risk A materialising increases the severity of Risk B | A |
| Correlation | Risks A and B respond to the same underlying driver | C |

### Interaction Matrix Structure

- Square matrix: all material risks on both axes
- Each cell: T, A, C, or blank
- Direction matters: A triggers B is different from B triggers A

### Concentration Types

| Type | Definition | Example |
|------|-----------|---------|
| Single-Name | Excessive exposure to one counterparty, sector, or asset | >10% of credit exposure to one borrower |
| Structural | Inherent features of the business model creating concentration | Reliance on single funding source |
| Systemic | Exposure to system-wide risks shared with peers | Common model assumptions across industry |

---

## 9. Fourteen-Field Risk Inventory

The central register for every risk in the institution:

| Field | Content | Update Frequency |
|-------|---------|-----------------|
| 1. Risk ID | Unique identifier | Set at creation |
| 2. Taxonomy Classification | L1/L2/L3 | Annual review |
| 3. Risk Definition | Precise risk statement | Annual or trigger-driven |
| 4. COSO Objective Category | Strategic/Operations/Reporting/Compliance | Annual review |
| 5. Risk Owner | Named individual | As needed |
| 6. Inherent Score | I/L/V/S four-dimensional score | Quarterly |
| 7. Current Controls | Control description with type and evidence | Quarterly |
| 8. Control Effectiveness | 1-5 rating | Quarterly |
| 9. Residual Score | I/L/V/S adjusted for controls | Quarterly |
| 10. Materiality Classification | Material / Not Material / Watch List | Quarterly |
| 11. Data Quality Rating | H/M/L/VL | Quarterly |
| 12. Interactions | Trigger/Amplifier/Correlation relationships | Quarterly |
| 13. Key Risk Indicators | KRIs with current value and thresholds | Monthly |
| 14. Trend and Review Date | Direction of travel, next scheduled review | Quarterly |

---

## 10. Risk Profile Structure (14 Elements)

For each material risk, a standalone deep-dive document:

1. **Risk Definition**: Precise statement including scope and boundaries
2. **Taxonomy Classification**: L1/L2/L3 with regulatory mapping
3. **COSO Objective Category**: Which COSO objective category is affected
4. **Drivers**: Direct and indirect causes with transmission mechanisms
5. **Exposure Metrics**: Quantitative measures of current exposure
6. **Risk Appetite Position**: Current exposure vs Board-approved appetite
7. **Controls**: Full control inventory with type, owner, and evidence
8. **Cost-Benefit Assessment**: Control investment vs risk reduction
9. **Key Risk Indicators**: KRIs with green/amber/red thresholds
10. **Scenario Linkage**: Mapping to stress test scenarios (ICAAP/ILAAP/CCAR)
11. **Data Quality Assessment**: Rating with basis and conservatism adjustments
12. **Interactions**: Trigger, amplifier, and correlation relationships
13. **Trend and Outlook**: Direction of travel with forward-looking assessment
14. **Risk Owner**: Named individual with accountability statement

---

## 11. Integration Points

### ICAAP/ILAAP Integration

- Every material risk maps to at least one stress scenario
- Four-dimensional scores inform scenario severity calibration
- Data quality ratings drive conservatism in capital/liquidity estimates
- Risk interactions inform scenario narrative (cascade effects)

### Board Reporting — Principal Risk Report (10 Items)

1. Material risks with current four-dimensional scores
2. Dominant impact dimension for each material risk
3. Trend indicators (improving/stable/deteriorating)
4. Risk appetite breaches with remediation plans
5. New risks added since last report
6. Risks removed or reclassified with rationale
7. KRI dashboard with threshold status
8. Data quality distribution across inventory
9. Enterprise portfolio view (concentrations, interactions)
10. Process performance indicators

### Regulatory Framework Coverage

The methodology satisfies requirements from 16 regulatory frameworks:
- ISO 31000:2018, ISO 31010:2019
- COSO ERM (2017)
- BCBS Principles for Corporate Governance (2015)
- PRA SS31/15, SS1/23
- Fed SR 15-18
- ECB SREP methodology
- FINMA Circular 2017/01
- APRA CPS 220
- DORA (EU 2022/2554)
- EBA Guidelines on ICT Risk (GL/2019/04)
- EBA Guidelines on Outsourcing (GL/2019/02)
- EBA Guidelines on ICAAP/ILAAP
- EU AMLD6
- TCFD/ISSB climate disclosure
- FCA Conduct Risk framework
- SM&CR (Senior Managers & Certification Regime)

---

## 12. Ongoing Cycle

### Quarterly Activities

- Focused SWIFT workshop (adapted guide words for changes since prior quarter)
- Scoring review for all material risks
- KRI threshold review
- Enterprise portfolio view update
- Board Principal Risk Report

### Annual Activities

- Full SWIFT workshop with complete PESTLE refresh
- Delphi method for emerging risks
- Scoring calibration exercise
- Taxonomy review and maintenance
- Lessons-learned review
- Internal audit of risk identification process (seven areas)
- Training programme delivery (five levels)

### Event-Driven Triggers (Six Categories)

1. **Material Risk Event**: Internal loss, near-miss, or control failure
2. **Regulatory Change**: New regulation, guidance, or supervisory finding
3. **Market Dislocation**: Significant market event affecting risk profile
4. **Strategic Change**: M&A, new product, market entry/exit
5. **Peer Event**: Material risk event at a comparable institution
6. **Threshold Breach**: KRI moving from green to amber or amber to red

---

## 13. Industry Loss Database Reference

The methodology references a database of 179 bank failure events across 30 countries over six decades, totalling $2.3 trillion in aggregate losses. Key cases used as teaching examples throughout the book include:

- Archegos Capital Management (2021): $5.5B loss at Credit Suisse from concentrated counterparty exposure
- London Whale (2012): $6.2B loss at JPMorgan from synthetic credit derivatives
- Barings Bank (1995): Collapse from unauthorised trading, $1.4B loss
- Northern Rock (2007): Failure from 75% wholesale funding concentration
- Silicon Valley Bank (2023): $209B failure from interest rate risk and deposit concentration
- Wirecard (2020): EUR 1.9B fraud from fabricated revenues
- Wells Fargo (2016): Account-opening fraud from conduct risk failure

These cases are used to illustrate methodology failures, not to generate new loss figures.
