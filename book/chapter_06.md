# Chapter 6: Top-Down Identification: Workshops, SWIFT, and Delphi

## The Workshop Where Everyone Agreed

My first risk identification workshop at Credit Suisse, in late 2016, followed a pattern I would come to recognise as universal. Twelve senior people sat around a conference table. The facilitator — a well-meaning colleague from the risk function — opened with a question: "What are the key risks facing our business?"

The most senior person in the room spoke first. He identified three risks. They were the same three risks that had appeared at the top of the previous year's risk register: regulatory change, market volatility, and credit deterioration. The next person agreed with all three and added a fourth. The person after that agreed with all four. Within thirty minutes, the room had produced a list of eight risks, each essentially a restatement of the existing register, and the facilitator was already moving to the assessment phase.

No one had mentioned counterparty concentration in prime brokerage. No one had raised the question of whether the bank's exposure to leveraged family offices was adequately visible. No one had asked what would happen if a single client defaulted across multiple desks simultaneously. Four years later, Archegos Capital Management would demonstrate exactly why those questions mattered — at a cost of $5.5 billion to Credit Suisse alone.[^ch6-1]

That workshop was not unusual. It was typical. And it was worse than useless — it was actively dangerous, because it created a documented record showing that senior management had "identified" the institution's risks, when in reality the process had done nothing more than confirm existing assumptions. The risk register looked comprehensive. The governance box was ticked. And the bank remained blind to the exposures that would eventually destroy it.

I walked out of that workshop knowing that the entire approach had to be redesigned. Traditional brainstorming, applied to risk identification in a hierarchical institution, does not identify risks. It identifies consensus. And consensus, in risk management, is the enemy.

## Why Brainstorming Fails

The risk identification literature, and much of industry practice, defaults to brainstorming as the primary workshop technique. ISO 31010 includes brainstorming in its catalogue of thirty-one risk assessment techniques, describing it as suitable for the identification stage.[^ch6-2] On paper, it should work: assemble knowledgeable people, ask them to generate ideas, capture the output.

In practice, brainstorming produces predictable pathologies when applied to risk identification in a banking context. The academic literature on group decision-making has documented these for decades, but the risk management profession has been slow to absorb the implications.

**Authority bias** is the most damaging. In a hierarchical organisation — and every bank is hierarchical — the views expressed by the most senior person in the room anchor the entire discussion. Junior participants self-censor. Middle managers calibrate their contributions to what they believe their superiors want to hear. The risks that get identified are the risks that the most powerful person in the room already knows about. This is not identification. It is ratification.

**Groupthink** compounds the problem. Once an initial set of risks has been articulated, the group converges rapidly. Disagreement carries social cost. Proposing a risk that contradicts the emerging consensus requires the proposer to implicitly suggest that their colleagues have missed something — and in a room with the CRO, the head of the investment bank, and the treasurer, few people are willing to take that position.

**Recall bias** adds a third distortion. Under time pressure, participants default to risks they can most easily retrieve from memory — typically the risks that have materialised recently, the risks that are currently in the news, or the risks that appear in the existing register. Novel risks, emerging risks, and risks that sit in the gaps between established categories are structurally disadvantaged.

**Production blocking** — the constraint that only one person can speak at a time — means that in a two-hour workshop with twelve participants, each person has on average ten minutes of speaking time. Subtract the facilitator's contributions, the introductions, the administrative overhead, and you are left with perhaps five minutes per participant to identify, articulate, and defend the risks they believe matter most. This is not a methodology. It is a lottery.

The result is a workshop that produces an output indistinguishable from what a competent risk analyst could have generated alone in an afternoon by reading last year's register and the morning's Financial Times. The collective intelligence of twelve senior leaders, each with deep institutional knowledge and strategic perspective, has been wasted.

This is the problem that the **Structured What-If Technique** was designed to solve.

## The Dual-Track Rationale

Before describing the top-down techniques in detail, it is important to understand why the methodology requires two parallel identification tracks — top-down and bottom-up — and why neither alone is sufficient.

ISO 31000 Section 5.2 establishes communication and consultation as a continuous parallel activity across all phases of risk management.[^ch6-3] The standard requires that multiple perspectives are sought, that differing perceptions are captured rather than averaged away, and that the risk identification process draws on the knowledge of people at every level of the organisation.

Top-down identification — the subject of this chapter — captures risks that are visible from the strategic vantage point of senior management. These are the risks that arise from the institution's overall business model, its competitive position, the macroeconomic environment, its interconnectedness with counterparties and markets, and its exposure to emerging trends. Senior leaders see these risks because they sit at the intersection of strategy, regulation, and market dynamics.

Bottom-up identification — the subject of Chapter 7 (Bottom-Up Identification: Templates, RCSA, and Specialist Processes) — captures risks that are visible only to the people closest to the business. The trader who knows that the risk system does not capture a particular exposure. The operations manager who knows that the reconciliation process has a gap. The compliance officer who has seen a pattern in customer complaints. These risks are granular, operational, and often invisible to senior management.

As Oliver Wyman observed in their analysis of risk identification practices, the use of parallel top-down and bottom-up processes provides a higher likelihood of identifying an organisation's full suite of risks than either process in isolation. The top-down process captures strategic and emerging risks; the bottom-up process achieves comprehensive, granular coverage. The reconciliation between them — which Chapter 8 (Reconciliation and the Enterprise Portfolio View) will address — is where the methodology creates its most distinctive value.

The straw man risk list, prepared by the Risk Identification Lead during Phase 1, bridges both tracks. It is circulated to workshop participants in advance, providing an evidence-based starting point that prevents blank-page syndrome while being explicitly designed to be challenged, modified, and torn apart. As I learned at Credit Suisse, the framing of this document matters enormously — present it as a "proposed risk list" and participants defer to it; present it as a document to be dismantled and they engage critically.

## Designing the Top-Down Workshop

The workshop is the primary vehicle for top-down identification. Its design determines whether it produces genuine insight or merely ratifies existing assumptions. Every element — from participant selection to the questioning methodology to how outputs are recorded — must be deliberately structured to overcome the pathologies described above.

### Participant Selection

The workshop requires participants who collectively hold the strategic perspective of the institution. At a minimum, this means:

- **CRO or deputy** — owns the process, provides independent challenge
- **Business unit heads** (or their designated senior representatives) — hold the strategic knowledge of each major business
- **Treasury / ALM** — understands the institution's funding and liquidity position
- **Compliance / Legal** — brings the regulatory and legal perspective
- **Finance / CFO office** — understands the financial reporting and capital implications
- **Risk Identification Lead** — facilitates, documents, and challenges

The participant list should be reviewed annually. Permanent membership creates its own form of groupthink — the same people, asking the same questions, producing the same answers. Rotating one or two participants each cycle introduces fresh perspective.

External participants should be considered where the institution faces genuinely novel risks. The Delphi Method, described later in this chapter, provides the structured mechanism for incorporating external expertise.

### Pre-Workshop Independent Assessment

This is the single most important design element. Before the workshop convenes, every participant independently identifies their top ten risks, in writing, submitted to the Risk Identification Lead.

The independent assessment serves three purposes. First, it captures each participant's uncontaminated view before group dynamics take effect — eliminating the authority bias that destroys unstructured brainstorming. Second, it provides the facilitator with a complete map of where participants agree and, more importantly, where they disagree. The facilitator uses this map to design the workshop's questioning strategy, focusing time on the areas of disagreement rather than the areas of consensus. Third, it creates a documented baseline that can be compared to the workshop's final output, providing the audit trail to demonstrate that the process genuinely challenged and refined initial views rather than simply rubber-stamping them.

Each participant receives, alongside the straw man risk list, a **briefing pack** containing:

- The current PESTLE assessment (from Phase 1)
- The internal context and internal environment summaries
- The prior-year principal risk list with trend indicators
- Any relevant regulatory communications or supervisory findings
- Industry loss events from the period since the last identification cycle

The briefing pack ensures that participants arrive with a common factual base. The independent assessment ensures they apply their own judgement to it before the group discussion begins.

### The Workshop Structure

A properly structured top-down workshop follows a defined sequence:

| Stage | Duration | Purpose |
|---|---|---|
| **Opening** | 15 min | Facilitator states objectives, ground rules, and the principle that the straw man is to be challenged |
| **Independent assessment review** | 30 min | Facilitator presents the aggregated results of pre-workshop assessments (anonymised), highlighting areas of disagreement |
| **SWIFT identification rounds** | 90–120 min | Systematic what-if questioning across all strategic objectives and risk categories |
| **Emerging risk session** | 30 min | Forward-looking identification of risks not yet in the taxonomy |
| **Multivoting prioritisation** | 20 min | Each participant allocates votes to the risks they consider most significant |
| **Gap review** | 15 min | Facilitator checks identified risks against taxonomy and PESTLE for completeness |

Total duration: approximately four hours. This is not a meeting that can be compressed into a lunch slot. Institutions that attempt to run risk identification workshops in ninety minutes are signalling that they do not take the process seriously.

## SWIFT: The Structured What-If Technique

**SWIFT** — the Structured What-If Technique — is described in ISO 31010 (Section B.7) as a systematic method for identifying risks using a set of prepared guide words applied to each element of the system under examination.[^ch6-4] Originally developed for the process safety industry, SWIFT has proven highly effective for banking risk identification because it imposes structure on the questioning process without constraining the scope of what can be identified.

The key difference between SWIFT and unstructured brainstorming is that SWIFT uses **prepared prompts** applied systematically. The facilitator does not ask "what are the risks?" — a question that invites recall bias and authority anchoring. Instead, the facilitator works through a structured set of guide words, applying each one to specific elements of the institution's operations, strategy, and environment.

### Guide Words and Prompt Structure

The SWIFT facilitator prepares a prompt matrix before the workshop, combining guide words with the institution's specific context. The standard guide words for banking risk identification include:

| Guide Word | Purpose | Example Prompt |
|---|---|---|
| **What if...** | Explores specific scenarios | "What if wholesale funding markets close for 30 days?" |
| **What would happen if...** | Traces consequences | "What would happen if our largest counterparty defaulted?" |
| **Could someone / something...** | Probes internal vulnerabilities | "Could someone in the CIO function take positions that bypass trading risk limits?" |
| **What has changed since last year that could...** | Identifies emerging and evolving risks | "What has changed in the regulatory environment that could require us to hold additional capital?" |
| **What are we assuming that might not be true?** | Challenges embedded assumptions | "What are we assuming about the correlation between our credit portfolios?" |
| **Where are the gaps between...** | Identifies interface and silo risks | "Where are the gaps between what equities surveillance monitors and what AML monitors?" |

The facilitator applies these guide words systematically to each of the following domains:

1. **Strategic objectives** — risks to each of the institution's stated strategic goals
2. **Business areas** — risks specific to each major business line
3. **Risk categories** — risks within each L1 taxonomy category, with particular attention to cross-category risks
4. **External environment** — risks arising from the PESTLE factors identified in Phase 1
5. **Interconnections** — risks arising from dependencies between business areas, counterparties, or systems

### Why SWIFT Works Where Brainstorming Fails

SWIFT overcomes each of the brainstorming pathologies:

- **Authority bias:** The facilitator controls the questioning. No single participant dominates the direction of discussion. The prompts ensure that every domain is covered regardless of what the most senior person wants to discuss.
- **Groupthink:** The what-if structure invites disagreement by design. When the facilitator asks "what are we assuming that might not be true?", the question itself legitimises challenge. Participants are responding to a prompt, not contradicting a colleague.
- **Recall bias:** The systematic coverage of all strategic objectives, business areas, and risk categories means that the process does not depend on what participants happen to remember. The prompt matrix ensures comprehensive coverage.
- **Production blocking:** While only one person speaks at a time in the main discussion, the pre-workshop independent assessment has already captured every participant's views. The SWIFT session builds on that foundation rather than starting from scratch.

### Facilitation: The Craft That Standards Cannot Teach

ISO 31010 describes SWIFT as a technique. It does not describe how to facilitate it in a room full of senior bankers who would rather be doing something else, who are accustomed to being the most important person in every meeting they attend, and who may have active incentives to suppress certain risks.

The Risk Identification Lead, who facilitates these workshops, requires a specific set of skills that go beyond technical risk expertise:

**Managing dominant voices.** In every workshop, one or two participants will attempt to control the discussion. The facilitator must redirect without confrontation: "Thank you — I want to hear from treasury on this point before we move on." The pre-workshop independent assessment provides the tool: "I note that several participants identified a risk in this area that we haven't discussed yet — let me bring that forward."

**Drawing out dissent.** The most valuable contributions often come from the quietest participants. Structured turn-taking — going around the table systematically rather than relying on voluntary contributions — ensures that every voice is heard. The facilitator should watch for non-verbal disagreement: the head of compliance who frowns but does not speak, the business unit head who shifts uncomfortably when a particular risk is discussed. These signals must be pursued.

**Maintaining challenge culture.** The facilitator must model the behaviour they want to see. When a risk is identified, the facilitator should ask: "Who disagrees? What am I missing? What's the alternative view?" Silence should not be interpreted as agreement. The facilitator should explicitly state: "I'm interpreting silence as agreement — if anyone holds a different view, now is the time."

**Protecting the process from political interference.** The most difficult facilitation challenge occurs when a senior participant attempts to remove a risk from the list or downgrade its significance for reasons that are political rather than analytical. The facilitator must ensure that the risk remains documented, the challenge is recorded, and the final decision reflects genuine analytical judgement rather than political pressure. This requires the structural independence described in Chapter 3 (Governance: Who Owns What) — the Risk Identification Lead must have the mandate and the protection to maintain the integrity of the output.

I learned these skills through practice, not training. No course prepared me for the moment at Credit Suisse when a business unit head told me, in front of twelve colleagues, that a risk I had identified did not exist. The risk existed. It appeared in the final inventory. But the political skill required to navigate that moment — to document the disagreement, to seek supporting evidence from other participants, to escalate through the governance structure when necessary — is the craft that distinguishes a process that works from a process that merely exists on paper.

## Scenario Analysis as an Identification Technique

ISO 31010 includes scenario analysis as a technique applicable to both the identification and analysis stages. Within the methodology, scenario analysis serves a specific identification purpose: it reveals risks that are invisible under normal conditions but become apparent under stress.

The Phase 1 PESTLE assessment produces a set of external factors that could affect the institution. Scenario analysis takes these factors and constructs plausible combinations — not to quantify their impact (that is the assessment function of Phase 3, covered in Chapter 9 (Assessment — Scoring, Multi-Dimensional Impact, and Data Quality)) but to ask: "Under this scenario, what risks would crystallise that we have not yet identified?"

The CCAR framework, as implemented through Fed SR 15-18, provides the most rigorous regulatory application of this approach.[^ch6-5] CCAR requires institutions to develop firm-specific stress scenarios that target their particular vulnerabilities. As the Fed has increasingly emphasised, this requires risk identification that is much more granular than generic categories — institutions must identify specific risk events, their drivers, and the transmission mechanisms through which they affect the balance sheet.

The workshop facilitator uses scenario prompts to drive this identification:

- "Under a scenario of prolonged interest rate inversion, what risks would emerge that are not on our current list?"
- "If our three largest counterparties defaulted simultaneously, what would the second-order effects be?"
- "If a major operational failure disabled our payments system for 48 hours, what risks beyond direct operational loss would materialise?"

Scenario analysis in the identification phase is deliberately forward-looking. It is not about predicting the future. It is about ensuring that the risk inventory is robust to a range of plausible futures rather than calibrated only to the current environment.

## Multivoting: Transparent Prioritisation

After the identification phase of the workshop is complete, the methodology uses **multivoting** to produce an initial, transparent prioritisation. Each participant receives a set number of votes — typically five to ten — and allocates them to the risks they consider most significant. Multiple votes may be placed on a single risk, allowing participants to signal strength of conviction.

Multivoting serves two purposes. First, it produces a prioritisation that is transparent and traceable — the distribution of votes is documented, providing the audit trail for why certain risks were prioritised over others. Second, it eliminates single-voice dominance. In an unstructured prioritisation, the most senior person's view prevails by default. With multivoting, a risk that every participant votes for once outranks a risk that one participant votes for heavily. Collective judgement prevails over individual authority.

The multivoting output is preliminary. The detailed four-dimensional assessment framework described in Chapter 9 (Assessment — Scoring, Multi-Dimensional Impact, and Data Quality) provides the rigorous scoring methodology. But the workshop prioritisation shapes the allocation of analytical effort in the phases that follow.

## The Archegos Failure: What a SWIFT Workshop Would Have Asked

On 26 March 2021, Archegos Capital Management — a family office run by Bill Hwang — collapsed, triggering approximately $10 billion in net losses across its prime brokers as an estimated $20 billion in concentrated positions were unwound.[^ch6-6] Credit Suisse absorbed $5.5 billion of those losses, a blow that contributed materially to the institution's eventual demise.[^ch6-7]

The mechanism was straightforward. Hwang used total return swaps to build massive concentrated positions in a handful of stocks, leveraged at five to eight times, across multiple prime brokers.[^ch6-8] No single prime broker had visibility into his total exposure. Each bank assessed its bilateral exposure to Archegos as manageable. None asked the question that mattered: what is this client's aggregate position across all brokers?

The risk identification failure was not a failure of information — it was a failure of questioning methodology. The information existed within each institution. Margin calls were rising. Position sizes were growing. Concentration in single names was visible on each desk's books. But the workshop process — to the extent one existed — did not include prompts designed to surface this type of cross-counterparty, cross-institution concentration risk.

Consider what a SWIFT workshop would have asked:

- **"What if our largest family office client has equivalent or larger positions with every other prime broker?"** — this prompt, applied to the prime brokerage business, would have immediately raised the question of aggregate leverage visibility.
- **"Where are the gaps between what our prime brokerage desk sees and what other banks' prime brokerage desks see?"** — the gap analysis guide word would have surfaced the information asymmetry.
- **"What are we assuming about the risk of concentrated leverage in family offices that might not be true?"** — the assumption-challenge prompt would have exposed the belief that bilateral exposure management was sufficient.
- **"What has changed in the family office space since last year that could create new risks?"** — the evolution prompt would have flagged the growth in total return swap usage to avoid 13F disclosure requirements.[^ch6-9]

The independent pre-workshop assessment would have added another layer. If the head of prime brokerage, the head of market risk, and the CRO each independently identified their top risks before the workshop, the facilitator would have had visibility into whether anyone had flagged concentrated family office leverage — and, critically, whether the absence of that risk from any participant's list was itself a signal.

None of these questions are difficult. None require information that was unavailable. What they require is a methodology that forces them to be asked — systematically, regardless of what the most senior person in the room wants to discuss.

**What was missing:** A structured workshop methodology that applies systematic prompts across all counterparty types, that challenges assumptions about bilateral versus aggregate exposure, and that uses pre-workshop independent assessments to surface divergent views before group dynamics suppress them. SWIFT, applied to the prime brokerage business with concentration-focused guide words, would have made the Archegos exposure a discussion topic rather than an unasked question.

## The Delphi Method: When Workshops Are Not Enough

SWIFT workshops are effective for identifying risks within the current strategic and operational landscape. They are less effective for a specific category of risk: emerging risks where no historical data exists, where the risk may not yet fit within the established taxonomy, and where the conventional wisdom of the institution may be actively wrong.

For these risks, the methodology uses the **Delphi Method** — a structured, multi-round, anonymous expert consultation process described in ISO 31010 (Section B.4).[^ch6-10]

### How Delphi Works

The Delphi Method operates through a defined sequence:

1. **Panel assembly.** A panel of ten to twenty experts is assembled. The panel should include internal experts from across the institution and, where appropriate, external experts — academics, regulators, industry consultants, or specialists in relevant fields. The diversity of the panel is critical: Delphi's value lies in aggregating perspectives that no single individual holds.

2. **Round 1: Independent identification.** Each panellist independently identifies emerging risks they believe could affect the institution within a three-to-five-year horizon. Responses are submitted anonymously to the Risk Identification Lead, who acts as the **oracle** — the only person who knows which responses came from which panellist.

3. **Aggregation and circulation.** The oracle aggregates and summarises all responses, identifying common themes, areas of agreement, and areas of divergence. This summary is circulated back to the panel without attribution.

4. **Round 2: Revision.** Each panellist reviews the aggregated results, considers perspectives they had not previously encountered, and submits a revised assessment. Panellists may change their views, strengthen their convictions, or add new risks prompted by others' contributions.

5. **Further rounds.** The process repeats for two to three rounds until reasonable convergence emerges. Convergence does not mean unanimity — persistent disagreement is itself a valuable signal, indicating genuine uncertainty about whether a particular risk will materialise.

6. **Output.** A prioritised list of emerging risks with consensus descriptions, dissenting views documented, integrated into the top-down risk list and flagged for taxonomy review.

### Why Anonymity Matters

The anonymity of the Delphi process is not a convenience — it is the mechanism that makes the technique work for precisely the risks where workshops fail.

In a workshop, the social dynamics of the room determine what gets said. A junior analyst who believes that the institution's business model is fundamentally exposed to a particular emerging risk will not say so in front of the CEO. An external consultant who suspects that the bank's exposure to a new asset class is inadequately understood will not challenge the head of trading in a face-to-face setting. A compliance officer who believes the bank's regulatory posture is more fragile than leadership acknowledges will keep that view private.

Delphi eliminates these constraints. The junior analyst's view carries equal weight to the CEO's. The external consultant's challenge is heard without attribution. The compliance officer's concern enters the record without career risk. The oracle ensures that every perspective is represented in the aggregated output, and the iterative rounds allow participants to revise their views in light of perspectives they would never have heard in a workshop setting.

### Delphi's Double Duty

As established in Chapter 4 (The Risk Taxonomy), the Delphi Method serves two purposes within the methodology. Its primary purpose is to identify specific emerging risks that the institution should be monitoring and, where appropriate, including in its risk inventory. Its secondary purpose is to provide intelligence for **taxonomy evolution** — when multiple Delphi panellists independently identify a risk that does not fit within the current taxonomy structure, that is a signal that the taxonomy needs to be updated.

Climate risk provides a historical example. Before climate and environmental risk became an established L1 taxonomy category, institutions that used Delphi-style processes were identifying physical risk to asset portfolios, transition risk from regulatory changes, and stranded asset risk from energy policy shifts. These identifications — emerging from anonymous expert consultation rather than workshop consensus — provided the evidence base for adding climate risk to the taxonomy years before regulatory mandates required it.

The Delphi output feeds into two downstream processes: the risk inventory (for risks that are sufficiently developed to warrant inclusion) and the taxonomy maintenance process (for signals that the classification structure itself needs to evolve).

## Wirecard: When the Identification Ecosystem Inverts

The Wirecard fraud, which finally collapsed in June 2020 with €1.9 billion in fabricated cash balances,[^ch6-11] provides the most extreme illustration of why the Delphi Method's inclusion of external experts is not optional but essential.

Wirecard's internal risk identification processes were captured by the fraud itself. The company fabricated revenues from third-party acquiring partners in Asia, inflated cash balances at Philippine trustee banks, and sustained the deception for years through deliberate intimidation of anyone who questioned the accounts.

The extraordinary feature of the Wirecard case was not merely that internal identification failed — it was that the external identification ecosystem was actively inverted. Short-sellers and investigative journalists at the Financial Times identified the fraud through forensic analysis of publicly available data. They raised specific, documented concerns about fabricated revenues and phantom bank balances. The German financial regulator, BaFin, responded not by investigating Wirecard but by filing criminal complaints against the journalists.[^ch6-12] The regulator defended the fraudster and prosecuted those who identified the risk.

This is the scenario that the Delphi Method is designed to address — not in its extreme form, but in its underlying dynamic. In every institution, there are risks that the internal consensus is actively wrong about. Risks where the prevailing view is not merely incomplete but inverted — where the institution believes it is safe precisely in the area where it is most exposed. Traditional workshops, conducted entirely with internal participants who share the institutional consensus, cannot surface these risks. The consensus itself is the obstacle.

A Delphi panel that included external participants — analysts with no institutional loyalty, academics with no career risk, consultants with cross-industry perspective — would have introduced the dissenting view into the process. The short-sellers' analysis of Wirecard's third-party revenue was available from 2015.[^ch6-13] The FT's investigative reporting began in 2019.[^ch6-14] An external Delphi panellist with access to this analysis would have submitted it anonymously, and the aggregation process would have ensured it reached decision-makers without the political dynamics that allowed Wirecard's management to suppress it through legal threats and regulatory capture.

**What was missing:** A structured mechanism for incorporating external expert perspectives into the risk identification process, protected by anonymity and institutional independence. The Delphi Method, with external panellists and anonymous submission, would have surfaced the dissenting analysis that internal processes were structurally incapable of producing because the fraud had captured the identification function itself.

## Connecting Top-Down Identification to the CCAR Framework

For US banking institutions subject to the Federal Reserve's Comprehensive Capital Analysis and Review, top-down identification has a specific regulatory dimension. Fed SR 15-18 requires that institutions maintain a **Material Risk Inventory** that is updated quarterly — not annually — through a process of active re-identification.[^ch6-15]

The connection between SWIFT workshops and CCAR is direct. The Fed expects institutions to identify risks that may appear only under stress, to understand how scenarios that break historical patterns would affect the balance sheet, and to demonstrate that the risk identification process is forward-looking rather than backward-looking. SWIFT's scenario-based prompts — "what if wholesale funding markets close?", "what would happen if credit spreads widened beyond historical precedent?" — are precisely the questioning methodology that produces the identification outputs CCAR requires.

The quarterly re-identification cycle established in Chapter 3 (Governance: Who Owns What) means that SWIFT workshops are not annual events. The full annual workshop covers all domains comprehensively. Quarterly workshops are more focused — targeting areas where the risk landscape has changed, where new risks have emerged, or where prior identifications need to be revisited in light of new information. The straw man for quarterly workshops draws on the prior quarter's inventory, updated PESTLE factors, and any event-driven triggers that have occurred since the last cycle.

This integration between the identification methodology and the CCAR framework is not incidental. When I built the risk identification process at Credit Suisse, one of the first requirements from the CRO was that the process had to feed directly into the CCAR submission. The Material Risk Inventory produced by the methodology — through SWIFT workshops, Delphi consultations, and the bottom-up processes described in Chapter 7 (Bottom-Up Identification: Templates, RCSA, and Specialist Processes) — became the foundation for scenario design and stress testing. Risk identification was not a standalone exercise. It was the front end of the capital planning process.

## Top-Down Outputs

A properly conducted top-down identification — combining pre-workshop independent assessments, SWIFT workshops, scenario analysis, Delphi consultation, and multivoting — produces a defined set of outputs:

| Output | Description |
|---|---|
| **Principal risk list** | 15–30 risks identified as the institution's most significant, with preliminary descriptions and proposed risk owners |
| **Emerging risk register** | Risks from the Delphi process that are not yet material but require monitoring; flagged for taxonomy review where they do not map to existing categories |
| **Assumption register** | Key assumptions that the workshop identified and challenged — documented for the audit trail and for revisiting in subsequent cycles |
| **Disagreement log** | Areas where participants held materially different views — not averaged away but documented for further analysis |
| **Taxonomy gap list** | Risk types identified in the workshop or Delphi process that do not map cleanly to the current taxonomy — fed into the taxonomy maintenance process |

The disagreement log deserves particular emphasis. In most institutions, disagreement is treated as a problem to be resolved — the workshop must produce a consensus output. The methodology treats disagreement differently. Where two senior participants hold genuinely different views about whether a risk is material, that divergence is itself information. It signals uncertainty, complexity, or genuine analytical disagreement that the assessment phase (Chapter 9 (Assessment — Scoring, Multi-Dimensional Impact, and Data Quality)) must resolve through evidence rather than through the social dynamics of a meeting room.

## The Limits of Top-Down Identification

Top-down identification, however well designed, has structural limitations. Senior leaders see the landscape from altitude. They understand strategic risks, macroeconomic forces, and competitive dynamics. They do not see the trader who has found a way to circumvent a position limit. They do not see the operations process that has a reconciliation gap. They do not see the customer complaint pattern that signals an emerging conduct risk.

These risks — granular, operational, and often invisible to anyone who does not work directly in the affected area — can be just as destructive as the strategic risks identified in workshops. The industry loss database is populated with institutions that failed not because of strategic miscalculation visible to the Board, but because of operational failures visible only to the people closest to the business.

The methodology addresses this through the second identification track: bottom-up identification using standardised templates, Risk and Control Self-Assessments, and specialist sub-processes for specific risk types. Neither track alone captures the full picture. The top-down track identifies the twenty risks that could destroy the institution. The bottom-up track identifies the two hundred risks that collectively define the institution's operational risk profile. The reconciliation between them — the subject of Chapter 8 (Reconciliation and the Enterprise Portfolio View) — is where the methodology produces its enterprise portfolio view.

Chapter 7 (Bottom-Up Identification: Templates, RCSA, and Specialist Processes) describes the bottom-up track: how standardised templates capture granular risks across every business unit, how RCSA and specialist sub-processes feed into the central inventory, and how the Risk Identification Lead ensures that nothing falls through the gaps between specialist functions and the enterprise process.

---

[^ch6-1]: Credit Suisse Group, *Report of the Special Committee of the Board of Directors on the Supply Chain Finance Funds Matter and Related Matters* (prepared by Paul, Weiss, Rifkind, Wharton & Garrison LLP), 29 July 2021. The report documented the $5.5 billion loss from the Archegos default.

[^ch6-2]: ISO 31010:2019, *Risk management — Risk assessment techniques*, International Organization for Standardization. Table A.1 lists 31 techniques and their applicability to the identification, analysis, and evaluation stages.

[^ch6-3]: ISO 31000:2018, *Risk management — Guidelines*, International Organization for Standardization, Section 5.2 ("Communication and consultation").

[^ch6-4]: ISO 31010:2019, *Risk management — Risk assessment techniques*, International Organization for Standardization, Annex B.7 ("Structured 'What if?' Technique (SWIFT)").

[^ch6-5]: Board of Governors of the Federal Reserve System, *SR 15-18: Federal Reserve Supervisory Assessment of Capital Planning and Positions for LISCC Firms and Large and Complex Firms*, 18 December 2015.

[^ch6-6]: Multiple prime brokers disclosed Archegos-related losses in Q1 2021 earnings: Nomura (~$2.9 billion), Morgan Stanley (~$911 million), and others. Aggregate net losses across counterparties were widely reported as approximately $10 billion. See also: U.S. Securities and Exchange Commission, *SEC Charges Archegos Capital Management and its Founder Bill Hwang*, 27 April 2022.

[^ch6-7]: Credit Suisse Group, *Report of the Special Committee of the Board of Directors* (Paul, Weiss), 29 July 2021, p. 4. The report confirmed the $5.5 billion charge from the Archegos default.

[^ch6-8]: Credit Suisse Group, *Report of the Special Committee of the Board of Directors* (Paul, Weiss), 29 July 2021, pp. 10-15. The report detailed Hwang's use of total return swaps and the leverage ratios across prime brokerage counterparties.

[^ch6-9]: Total return swaps were not reportable under SEC Form 13F at the time of the Archegos collapse. The SEC subsequently adopted amendments to Form PF (effective 2023) and proposed amendments to Regulation 13D-G and Form 13F to address this disclosure gap. See SEC Release No. 34-93784 (proposed rule), 15 February 2022.

[^ch6-10]: ISO 31010:2019, *Risk management — Risk assessment techniques*, International Organization for Standardization, Annex B.4 ("Delphi technique").

[^ch6-11]: Wirecard AG filed for insolvency on 25 June 2020 after disclosing that EUR 1.9 billion in cash balances reported in its accounts "probably did not exist." See: *Wirecard AG — Insolvency filing*, Amtsgericht Munich, 25 June 2020; EY Wirecard audit disclaimer, 18 June 2020.

[^ch6-12]: BaFin filed a criminal complaint against *Financial Times* journalists with the Stuttgart public prosecutor's office in February 2019, alleging market manipulation. BaFin also imposed a two-month short-selling ban on Wirecard shares (18 February to 18 April 2019). See: German Parliamentary Inquiry Committee on Wirecard (*Wirecard-Untersuchungsausschuss*), Bundestag, 2021.

[^ch6-13]: Zatarra Research published a short-seller report on Wirecard in February 2016 alleging fraud in the company's Asian operations. Earlier concerns were raised by short sellers as early as 2008 and 2015.

[^ch6-14]: Dan McCrum, *Financial Times*, "House of Wirecard" series, beginning January 2019. McCrum's investigative reporting into Wirecard's third-party acquiring business in Asia ran from early 2019 through the company's collapse in June 2020.

[^ch6-15]: Board of Governors of the Federal Reserve System, *SR 15-18: Federal Reserve Supervisory Assessment of Capital Planning and Positions for LISCC Firms and Large and Complex Firms*, 18 December 2015. The letter requires firms to maintain a comprehensive firm-wide risk identification process that is forward-looking and updated at least quarterly.
