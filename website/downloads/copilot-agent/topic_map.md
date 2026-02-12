# Topic Map — RiskID Copilot Agent

Configuration file for Copilot Studio. Defines all topics (conversation triggers), conversation starters, and the agent's scope boundaries.

---

## Conversation Starters

These appear as clickable suggestions when a user first opens the agent:

1. **"Build a risk taxonomy for my institution"**
2. **"Help me prepare a SWIFT workshop"**
3. **"Score a risk using the four-dimensional framework"**
4. **"Create a bow-tie analysis for a specific risk"**
5. **"Generate a Principal Risk Report template"**
6. **"Map my risks to ICAAP stress scenarios"**

---

## Topics

### Topic 1: Foundation — Risk Taxonomy
- **Trigger phrases**: "risk taxonomy", "L1 L2 L3", "risk categories", "classify risks", "taxonomy structure"
- **Required inputs**: Institution type (retail bank, investment bank, universal bank, insurer), Jurisdiction (UK, US, EU, CH, AU)
- **Outputs**: Three-level taxonomy table with L1 codes, L2 sub-categories, L3 elements, and regulatory mapping
- **Book reference**: Chapter 4

### Topic 2: Foundation — PESTLE Assessment
- **Trigger phrases**: "PESTLE", "external environment", "macro environment", "environmental scan"
- **Required inputs**: Jurisdiction, Industry sector, Assessment date
- **Outputs**: Six-factor PESTLE table with current state, trend, implications for risk profile
- **Book reference**: Chapters 4, 5

### Topic 3: Foundation — Risk Criteria
- **Trigger phrases**: "risk criteria", "scoring scales", "impact scale", "likelihood scale", "materiality threshold"
- **Required inputs**: Institution type, Jurisdiction
- **Outputs**: Complete scoring framework (all four dimensions), materiality threshold definition, data quality scale
- **Book reference**: Chapters 5, 9

### Topic 4: Foundation — Starting Universe
- **Trigger phrases**: "starting universe", "initial risk list", "straw man", "seed risks"
- **Required inputs**: Institution type, Business mix, Jurisdiction
- **Outputs**: Starting universe table seeded from regulatory categories and industry loss data
- **Book reference**: Chapters 4, 5

### Topic 5: Foundation — Internal Context
- **Trigger phrases**: "internal context", "internal environment", "COSO elements", "organisational assessment"
- **Required inputs**: Institution type
- **Outputs**: Seven-element COSO internal environment assessment template
- **Book reference**: Chapter 5

### Topic 6: Top-Down — SWIFT Workshop Design
- **Trigger phrases**: "SWIFT workshop", "workshop design", "top-down identification", "facilitated workshop"
- **Required inputs**: Institution type, Number of participants, Is this annual or quarterly?
- **Outputs**: Six-stage workshop structure, SWIFT prompt matrix, briefing pack outline, pre-workshop assessment form
- **Book reference**: Chapter 6

### Topic 7: Top-Down — Delphi Method
- **Trigger phrases**: "Delphi", "emerging risks", "horizon scanning", "expert consultation"
- **Required inputs**: Number of experts, Risk categories to cover
- **Outputs**: Three-round Delphi design with questionnaires, aggregation rules, convergence criteria
- **Book reference**: Chapters 2, 6

### Topic 8: Bottom-Up — Risk Assessment Template
- **Trigger phrases**: "bottom-up template", "business unit assessment", "11 fields", "risk submission form"
- **Required inputs**: Institution type, Business unit type
- **Outputs**: 11-field risk assessment template with field definitions, dropdown options, and example entries
- **Book reference**: Chapter 7

### Topic 9: Bottom-Up — Specialist Sub-Processes
- **Trigger phrases**: "RCSA", "conduct risk", "ICT risk", "cyber risk", "AML", "model risk", "third-party risk", "outsourcing risk", "traded risk", "treasury risk", "reputational risk", "threat scenario"
- **Required inputs**: Which sub-process, Jurisdiction, Regulatory framework
- **Outputs**: Specialist assessment template with regulatory-specific fields
- **Book reference**: Chapter 7

### Topic 10: Bottom-Up — Technique Selection
- **Trigger phrases**: "FMEA", "HAZOP", "Ishikawa", "fishbone", "which technique", "identification technique"
- **Required inputs**: Context (what risk or process is being assessed)
- **Outputs**: Technique recommendation with rationale, template for selected technique
- **Book reference**: Chapter 7

### Topic 11: Reconciliation — Gap Analysis
- **Trigger phrases**: "reconciliation", "gap analysis", "top-down gaps", "bottom-up gaps", "compare tracks"
- **Required inputs**: Summary of top-down outputs, Summary of bottom-up outputs
- **Outputs**: Gap analysis framework, challenge session agenda, reconciliation iteration log template
- **Book reference**: Chapter 8

### Topic 12: Reconciliation — Enterprise Portfolio View
- **Trigger phrases**: "enterprise portfolio", "aggregate view", "common exposures", "simultaneous crystallisation"
- **Required inputs**: Risk inventory summary
- **Outputs**: Four-component enterprise portfolio view template
- **Book reference**: Chapter 8

### Topic 13: Assessment — Risk Scoring
- **Trigger phrases**: "score a risk", "risk assessment", "four dimensions", "impact likelihood", "inherent score", "residual score"
- **Required inputs**: Risk description, Available data/evidence
- **Outputs**: Four-dimensional scoring worksheet, data quality assessment, materiality determination, control effectiveness rating
- **Book reference**: Chapter 9

### Topic 14: Assessment — Scoring Calibration
- **Trigger phrases**: "calibration", "scoring consistency", "calibration exercise"
- **Required inputs**: Number of assessors, Risk categories to calibrate
- **Outputs**: Calibration exercise design with sample risks, expected score ranges, discussion framework
- **Book reference**: Chapters 9, 13

### Topic 15: Interaction — Risk Interaction Matrix
- **Trigger phrases**: "interaction matrix", "risk interactions", "trigger amplifier", "risk relationships", "cascade"
- **Required inputs**: List of material risks
- **Outputs**: Interaction matrix template, interaction type definitions, instructions for completion
- **Book reference**: Chapter 10

### Topic 16: Interaction — Bow-Tie Analysis
- **Trigger phrases**: "bow-tie", "bow tie", "causal analysis", "barriers", "causes and consequences"
- **Required inputs**: Specific risk to analyse
- **Outputs**: Complete bow-tie diagram structure with causes, preventive barriers, consequences, mitigating barriers, escalation factors, management functions
- **Book reference**: Chapter 10

### Topic 17: Interaction — Concentration Analysis
- **Trigger phrases**: "concentration", "single-name concentration", "structural concentration", "systemic concentration"
- **Required inputs**: Portfolio or risk inventory summary
- **Outputs**: Three-type concentration analysis template with thresholds and examples
- **Book reference**: Chapter 10

### Topic 18: Interaction — Fault Tree Analysis
- **Trigger phrases**: "fault tree", "failure analysis", "AND OR gates", "root cause"
- **Required inputs**: Top-level failure event to analyse
- **Outputs**: Fault tree structure with AND/OR gate logic, minimal cut sets
- **Book reference**: Chapter 10

### Topic 19: Documentation — Risk Inventory
- **Trigger phrases**: "risk inventory", "fourteen fields", "risk register", "central register"
- **Required inputs**: Institution type, Number of material risks
- **Outputs**: Fourteen-field risk inventory template with field definitions and example entries
- **Book reference**: Chapter 11

### Topic 20: Documentation — Risk Profile
- **Trigger phrases**: "risk profile", "deep dive", "14 elements", "material risk profile"
- **Required inputs**: Specific risk to profile
- **Outputs**: 14-element risk profile template populated with illustrative content
- **Book reference**: Chapter 11

### Topic 21: Documentation — KRI Design
- **Trigger phrases**: "KRI", "key risk indicator", "risk indicators", "thresholds", "early warning"
- **Required inputs**: Risk to design KRIs for
- **Outputs**: KRI specification with metric definition, data source, frequency, green/amber/red thresholds, escalation procedure
- **Book reference**: Chapters 11, 13

### Topic 22: Integration — Stress Scenario Mapping
- **Trigger phrases**: "stress test", "ICAAP", "ILAAP", "CCAR", "stress scenario", "capital planning"
- **Required inputs**: Jurisdiction, Material risks to map
- **Outputs**: Risk-to-scenario mapping table, severity calibration framework, management judgement overlay template
- **Book reference**: Chapter 12

### Topic 23: Integration — Reverse Stress Testing
- **Trigger phrases**: "reverse stress test", "point of non-viability", "PONV"
- **Required inputs**: Institution type, Business model summary
- **Outputs**: Reverse stress test scenario design using interaction matrix and cascade pathways
- **Book reference**: Chapter 12

### Topic 24: Integration — Principal Risk Report
- **Trigger phrases**: "principal risk report", "board report", "board reporting", "CRO report"
- **Required inputs**: Material risk summary, Reporting period
- **Outputs**: 10-item Principal Risk Report template with section guidance
- **Book reference**: Chapters 3, 12

### Topic 25: Integration — New Product Assessment
- **Trigger phrases**: "new product", "NPAP", "product approval", "new market"
- **Required inputs**: Product/market description
- **Outputs**: New product risk assessment template using taxonomy, scoring, and portfolio view
- **Book reference**: Chapter 12

### Topic 26: Integration — M&A Due Diligence
- **Trigger phrases**: "M&A", "acquisition", "due diligence", "merger"
- **Required inputs**: Target institution description
- **Outputs**: M&A risk assessment template with combined portfolio view
- **Book reference**: Chapter 12

### Topic 27: Ongoing Cycle — Quarterly Workshop
- **Trigger phrases**: "quarterly workshop", "quarterly review", "focused workshop"
- **Required inputs**: Quarter, Changes since last quarter
- **Outputs**: Quarterly workshop agenda with adapted SWIFT guide words
- **Book reference**: Chapter 13

### Topic 28: Ongoing Cycle — Event-Driven Trigger
- **Trigger phrases**: "event trigger", "trigger assessment", "risk event", "incident response"
- **Required inputs**: Description of the triggering event
- **Outputs**: Event classification, root cause analysis template, forward-looking assessment, inventory update recommendations
- **Book reference**: Chapter 13

### Topic 29: Ongoing Cycle — Training Programme
- **Trigger phrases**: "training", "training programme", "risk training", "capability building"
- **Required inputs**: Target audience, Current maturity level
- **Outputs**: Five-level training programme with content, frequency, and delivery method for each level
- **Book reference**: Chapter 13

### Topic 30: Ongoing Cycle — Internal Audit Programme
- **Trigger phrases**: "internal audit", "audit programme", "assurance", "seven areas"
- **Required inputs**: Current audit cycle stage
- **Outputs**: Seven-area audit programme with scope, procedures, and expected evidence for each area
- **Book reference**: Chapter 13

### Topic 31: Regulatory — Traceability Matrix
- **Trigger phrases**: "regulatory traceability", "compliance mapping", "regulatory requirements", "demonstrate compliance"
- **Required inputs**: Jurisdiction, Applicable regulations
- **Outputs**: Regulatory traceability matrix mapping 16 frameworks to 6 methodology phases
- **Book reference**: Chapter 15

### Topic 32: Regulatory — DORA Framework
- **Trigger phrases**: "DORA", "digital operational resilience", "ICT framework"
- **Required inputs**: Institution type, ICT landscape summary
- **Outputs**: DORA-compliant ICT risk framework with dependency map and register of information
- **Book reference**: Chapters 7, 15

### Topic 33: Diagnostic — Taxonomy Gap Test
- **Trigger phrases**: "taxonomy test", "gap test", "historical losses", "taxonomy validation"
- **Required inputs**: Current taxonomy, Jurisdiction
- **Outputs**: Retrospective taxonomy test mapping historical losses to current taxonomy, identifying gaps
- **Book reference**: Chapter 16

### Topic 34: Diagnostic — Maturity Assessment
- **Trigger phrases**: "maturity assessment", "methodology maturity", "process assessment", "how good is our process"
- **Required inputs**: Description of current risk identification process
- **Outputs**: Maturity assessment across six phases with gap identification and remediation recommendations
- **Book reference**: Chapter 16

---

## Scope Boundaries

### In Scope
- Generating any of the 133 artifacts described in the book
- Explaining methodology concepts and regulatory requirements
- Customising templates to institution type and jurisdiction
- Providing regulatory references and framework mappings
- Designing workshops, training programmes, and audit programmes

### Out of Scope
- Providing actual risk scores or assessments for real institutions
- Generating loss figures or financial projections
- Giving regulatory advice (the agent explains requirements, not legal interpretation)
- Accessing or processing confidential institutional data
- Replacing professional judgement on materiality or risk appetite decisions
- Investment advice or market predictions

### Escalation
If a user asks a question outside the methodology's scope, the agent should:
1. Acknowledge the question
2. Explain why it falls outside the methodology
3. Suggest which professional (legal counsel, external auditor, regulator) would be appropriate
4. Offer to help with the nearest in-scope topic
