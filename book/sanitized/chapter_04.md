# Chapter 4: The Risk Taxonomy

## The Meeting Where Nobody Agreed

Early in my experience building risk identification processes, I convened a meeting to reconcile risk registers across business units. What I expected was a straightforward alignment exercise. What I got was a two-hour argument about what things were called.

The investment bank classified certain derivative exposures as market risk. The risk function classified the same exposures as counterparty credit risk. Treasury called a subset of them liquidity risk. Each was correct within its own framework. None was wrong. But when I tried to aggregate these into an enterprise view — to answer the basic question of "what are the top risks facing this institution?" — the numbers did not add up. The same underlying exposure appeared in three different categories in three different registers, counted three different ways.

This was not an analytical failure. It was a language failure. The institution did not have a common vocabulary for risk.

The problem extended beyond classification. When I asked business units to assess their risks against standardised criteria, the responses were incomparable because each unit had built its own taxonomy. The investment bank had nearly fifty risk categories. The Swiss universal bank had just over twenty. Private banking had around thirty. Some categories overlapped. Others had no equivalent in other divisions. "Conduct risk" existed in one division's taxonomy and was entirely absent from another's — not because the division faced no conduct risk, but because nobody had thought to include it.

Without a common taxonomy, reconciliation between top-down and bottom-up identification was impossible. Without reconciliation, the enterprise portfolio view was meaningless. Without an enterprise view, the Board was receiving a collection of divisional reports rather than a coherent picture of institutional risk. The entire methodology — from identification through to capital planning — depended on something that did not yet exist: a shared language.

Building that language was the first operational priority. Before we could identify risks, we had to agree on what we meant by them.

## Why Taxonomy Matters

A **risk taxonomy** is the hierarchical classification structure that defines how an institution categorises its risks. It is, in the most literal sense, the common language of risk identification.

This is not an administrative convenience. It is a structural prerequisite. Every subsequent step in the methodology depends on the taxonomy being in place and consistently applied:

- **Identification** requires categories to identify against. If the taxonomy does not include a risk type, that risk type will not be systematically looked for.
- **Assessment** requires like-for-like comparison. A risk scored in one business unit must mean the same thing as the same risk scored in another.
- **Reconciliation** — the process of aligning top-down and bottom-up outputs — is impossible without a common classification. You cannot reconcile what you cannot compare.
- **The enterprise portfolio view** depends on aggregation. If business units classify the same underlying exposure differently, aggregation produces noise, not signal.
- **Regulatory reporting** requires mapping internal risk categories to the specific taxonomies used by each regulator. Without a coherent internal taxonomy, every regulatory submission becomes a manual translation exercise.
- **Risk ownership** — the assignment of named individuals to each risk — requires a classification structure that defines what each person owns. As established in the governance framework, risk owners are named individuals, not committees. The taxonomy tells them what they own.

When I describe the taxonomy as a "common language," I mean it operationally. Every participant in the risk identification process — from the Board Risk Committee approving the principal risk report to the front-line employee completing a risk self-assessment — must be classifying risks in the same way. If they are not, the process produces an illusion of comprehensiveness while the real risks hide in the gaps between definitions.

## The Three-Level Structure

The taxonomy is structured in three levels of increasing granularity:

**Level 1 (L1)** defines the broad risk categories. These are the top-level classifications that correspond to the major risk types a bank faces. A typical banking institution's L1 taxonomy includes:

| L1 Category | Scope |
|---|---|
| Credit Risk | Risk of loss from borrower or counterparty failure to meet obligations |
| Market Risk | Risk of loss from movements in market prices, rates, or volatilities |
| Operational Risk | Risk of loss from inadequate or failed processes, people, systems, or external events (including ICT and cyber risk) |
| Liquidity Risk | Risk that the institution cannot meet obligations as they fall due |
| Strategic Risk | Risk to achieving strategic objectives from adverse business decisions or failure to adapt |
| Compliance and Regulatory Risk | Risk of non-compliance with laws, regulations, or supervisory requirements |
| Reputational Risk | Risk of damage to the institution's standing with stakeholders |
| Model Risk | Risk from errors in models used for pricing, measurement, or decision-making |
| Conduct Risk | Risk of harm to customers, markets, or competition from firm or staff behaviour |
| Third-Party and Outsourcing Risk | Risk from dependence on external providers for critical services |
| Step-in Risk | Risk of financial support to entities beyond contractual obligations |
| Climate and Environmental Risk | Risk from physical and transition climate impacts across all transmission channels |
| Emerging and Systemic Risk | Risks not yet fully understood or categorised, including novel and interconnected threats |

These thirteen categories are not arbitrary. They correspond to the risk types that banking regulators across jurisdictions require institutions to identify and manage. The scope section of the methodology lists all thirteen, and the taxonomy must accommodate every one.

**Level 2 (L2)** breaks each L1 category into sub-categories. For example:

| L1 | L2 Sub-Categories |
|---|---|
| Credit Risk | Counterparty Credit Risk, Credit Concentration Risk, Country and Transfer Risk, Settlement Risk, Sovereign Risk |
| Market Risk | Interest Rate Risk, Foreign Exchange Risk, Equity Risk, Commodity Risk, Credit Spread Risk, Basis Risk |
| Operational Risk | Internal Fraud, External Fraud, Employment Practices, Clients/Products/Business Practices, Physical Asset Damage, Business Disruption/System Failure, Execution/Delivery/Process Management |
| Conduct Risk | Product Mis-selling, Market Manipulation, Information Misuse, Unfair Treatment, Conflicts of Interest |

L2 is where the taxonomy begins to have operational specificity. A risk assessor completing a bottom-up template maps each identified risk to an L1/L2 node. A SWIFT workshop facilitator uses L2 categories as prompts. The specialist sub-processes — RCSA, conduct risk assessment, ICT risk assessment, AML/CFT assessment — all feed their outputs into the central inventory using L1/L2 classification.

**Level 3 (L3)** provides granular risk types within each L2. For example, Counterparty Credit Risk at L2 might include Wrong-Way Risk, Cross-Default Risk, and Margin Call Risk at L3. Credit Concentration Risk at L2 might include Single-Name Concentration, Sector Concentration, and Geographic Concentration at L3.

L3 is where the taxonomy meets the institution's specific business model. Two banks with identical L1 and similar L2 structures will have very different L3 entries depending on their products, markets, and geographic footprint. A bank with a large derivatives book needs detailed L3 entries under Counterparty Credit Risk. A bank with a pure retail mortgage business may need a single L3 entry there but extensive granularity under Credit Concentration Risk.

The three-level structure serves a specific design purpose. L1 provides the language for Board reporting and strategic discussion. L2 provides the working categories for risk identification and assessment. L3 provides the precision for specialist analysis and regulatory mapping. The Board Risk Committee discusses credit risk and market risk. The Risk Identification Lead works at the L2 level when facilitating workshops and reconciling inputs. The credit risk function works at L3 when assessing counterparty exposures. All three levels must be consistent and traceable.

## The MECE Principle

The taxonomy must satisfy two properties simultaneously:

**Mutually Exclusive** — each identified risk maps to one and only one taxonomy node. A risk cannot simultaneously be classified as credit risk and market risk. If an exposure has characteristics of both, the taxonomy must define rules for primary classification. The risk inventory can record secondary classifications and cross-references, but every risk needs a single primary home.

**Collectively Exhaustive** — no material risk should fall outside the taxonomy. If a risk exists that does not fit any existing category, the taxonomy is incomplete and must be updated.

These two properties — universally known as **MECE** — are the structural test of taxonomy quality. A taxonomy that fails the mutually exclusive test produces double-counting and reconciliation chaos. A taxonomy that fails the collectively exhaustive test produces blind spots.

The collectively exhaustive requirement is the more dangerous to violate, because the failure is invisible. If a risk falls outside the taxonomy, no one is looking for it. No template captures it. No workshop prompt surfaces it. No specialist sub-process owns it. The risk exists in the institution's actual exposure but not in its risk inventory.

This is precisely what happened at JPMorgan Chase in 2012.

## When Classification Determines Oversight: JPMorgan and the London Whale

JPMorgan's Chief Investment Office in London built massive synthetic credit positions through credit default swaps. By early 2012, trader Bruno Iksil — nicknamed the "London Whale" for the size of his positions — had accumulated exposures large enough to move the market.

The positions were classified as portfolio hedges. This was the critical decision. The CIO was designated as a hedging function, not a proprietary trading desk. That classification determined everything that followed.

Because the CIO was classified as hedging, its positions were exempt from the bank's proprietary trading risk limits. They were exempt from the VaR monitoring applied to trading desks. They were subject to a different, less stringent set of controls. The hedge designation was never independently challenged. Nobody asked the fundamental question: if these positions are hedges, what specifically are they hedging, and does the hedge relationship actually hold?

The positions were not hedges. They were directional bets on credit indices. When the market moved against them, JPMorgan lost $6.2 billion.

The risk identification failure was not analytical. JPMorgan had one of the most sophisticated risk management infrastructures in global banking. The failure was taxonomic. The organisational classification of the activity — hedging versus trading — determined the level of oversight applied to it. The risk existed in the institution's actual exposure. It did not exist in the category structure that governed how that exposure was monitored.

In the language of this methodology: the taxonomy was not collectively exhaustive. It did not account for the possibility that a function designated as hedging could be engaging in proprietary risk-taking. The L2 category structure under Market Risk distinguished between trading book and banking book risk, but the CIO's activities fell into a classification grey zone that neither set of controls adequately covered.

**What was missing:** A taxonomy that classifies by the nature of the risk, not by the organisational unit that generates it. The methodology requires that every risk maps to an L1/L2/L3 node based on what the risk *is* — its characteristics, drivers, and potential consequences — not on where it sits in the org chart. An independent challenge process — built into the reconciliation phase — would have required someone to ask whether the CIO's positions actually behaved like hedges or like proprietary trades. The enterprise portfolio view would have flagged the sheer size of the positions against the institution's aggregate risk appetite, regardless of what they were called.

## When Risk Falls Between Categories: Deutsche Bank and Mirror Trading

The JPMorgan case involved misclassification within the taxonomy. Deutsche Bank's mirror-trading scandal illustrates the opposite problem: risk that falls between categories entirely.

Between 2011 and 2015, Deutsche Bank's Moscow office processed approximately $10 billion in suspicious transactions through a mirror-trading scheme. The mechanism was straightforward: a client would buy Russian equities in Moscow using roubles, and a related entity would simultaneously sell the identical equities in London for dollars. The net effect was rouble-to-dollar conversion — money laundering on an industrial scale.

Two separate surveillance functions had partial visibility. Equities trading surveillance saw the matched trades but classified them as routine — matched trades are normal in equities markets. AML monitoring tracked cash flows but did not correlate them with the equities trading patterns. Neither function identified that the combined pattern constituted a massive money-laundering mechanism.

The taxonomy created a structural gap. The equities surveillance function looked at its risk categories and saw nothing unusual within them. The AML function looked at its risk categories and saw nothing unusual within them. The risk existed in the space between the two — in the interaction between a trading pattern and a cash flow pattern that, taken together, constituted something neither function was mandated to find.

The combined UK and US fines totalled $630 million, and the scandal contributed to years of regulatory scrutiny that reshaped Deutsche Bank's entire strategic direction.

**What was missing:** A taxonomy designed to force cross-category analysis. The methodology addresses this through two mechanisms. First, the enterprise portfolio view in the reconciliation phase requires explicit identification of common exposures across business units — where multiple functions share exposure to the same underlying driver. Second, risk interaction analysis maps which risks can trigger, amplify, or be triggered by other risks. The mirror-trading pattern was an interaction between market risk (equities trading) and compliance risk (AML) that neither function would catch in isolation. A taxonomy that includes cross-references between L2 categories — combined with a reconciliation process that actively looks for gaps between specialist sub-processes — would have surfaced the question even if no individual function had the answer.

## When the Taxonomy Does Not Include the Risk: Lloyds and PPI

Sometimes the failure is not misclassification or inter-category gaps. Sometimes the taxonomy simply does not contain the relevant risk type.

The Payment Protection Insurance scandal — ultimately costing the UK banking industry over £50 billion in redress, with Lloyds Banking Group paying approximately £22 billion — was a conduct risk event. Banks systematically sold PPI policies alongside loans and credit cards to customers who did not need them, could not claim on them, or were unaware they were paying for them.

The risk identification failure was taxonomic at its core. PPI sales were classified as a profitable cross-selling activity within normal business operations. The risk identification frameworks in use at the time did not include "customer suitability" as a material risk category. Conduct risk, as a distinct taxonomy entry, did not exist in most institutions' risk classifications. Sales incentive structures that rewarded PPI attachment rates were visible to everyone — they were a feature of the business model, not a bug — but because the taxonomy did not include a category for "harm arising from the institution's own sales practices," no one was mandated to assess whether the practice was creating risk.

The risk was there. The information was there. But the taxonomy did not contain a node for it, so no identification process looked for it.

This is the collectively exhaustive requirement in its most consequential form. If a risk type does not exist in the taxonomy, the institution is structurally incapable of identifying it — no matter how sophisticated its workshops, how rigorous its bottom-up templates, or how capable its people. The taxonomy defines the universe of what can be found.

**What was missing:** A taxonomy maintenance process that evolves ahead of loss events, not after them. The methodology requires annual Board-approved taxonomy review, but more importantly, it requires the Delphi Method and horizon scanning to identify emerging risk types before they crystallise. "Conduct risk" should have entered institutional taxonomies before the PPI scandal, not after it. The taxonomy maintenance process — with CRO amendment authority to propose new categories at any time — exists precisely to close these gaps before the collectively exhaustive test fails in practice.

## Building the Taxonomy in Practice

Constructing a risk taxonomy is not an exercise in academic classification. It is a practical design problem with real constraints.

### Start With Regulatory Requirements

The first input is what regulators require. Basel frameworks define risk categories for capital purposes. The PRA, ECB, Fed, and OCC each publish their own risk categorisations. The institution's L1 taxonomy must, at minimum, include every risk category its regulators expect to see assessed and reported.

This sounds straightforward but is immediately complicated by the fact that regulators do not agree with each other. Basel defines operational risk in one way. The EBA's reporting frameworks use overlapping but non-identical categories. The PRA's ICAAP requirements emphasise risk types — like step-in risk and pension obligation risk — that other regulators treat differently. A bank operating across multiple jurisdictions must satisfy all of them simultaneously.

The practical solution is to build the internal taxonomy at a level of granularity sufficient to accommodate all regulatory mappings. The L1 and L2 structure must be detailed enough that every regulatory category can be mapped to an internal node without forcing artificial combinations or losing internal coherence. The institution then maintains a regulatory mapping table — a separate document that shows, for each regulator, which internal taxonomy nodes correspond to which regulatory categories.

This mapping is not optional. It is the mechanism by which the institution demonstrates to each supervisor that its risk identification process covers their requirements. When a PRA examiner asks "how do you identify step-in risk?" the answer must trace from the regulatory requirement to a specific L1/L2/L3 node to the identification activities performed against it.

### Use COSO Objective Categories as a Completeness Check

As established in Chapter 2, the COSO ERM framework defines four objective categories against which risks must be identified: **Strategic**, **Operations**, **Reporting**, and **Compliance**. Every risk in the taxonomy should be assessable against at least one of these categories.

In practice, the COSO three-dimensional model — the cube of eight components, four objectives, and entity levels — can be used as a completeness check against the taxonomy. Mapping every L2 risk category against the four objective categories and looking for empty cells reveals gaps. If a risk category has no plausible impact on any objective category, it is probably misclassified. If an objective category has no risks mapped to it for a particular entity, something has probably been missed.

The exercise sounds mechanical but it surfaces real gaps. Most banks' taxonomies are heavily weighted toward Strategic and Operations risks. Reporting risk — the risk that financial and non-financial reporting is unreliable — is often underdeveloped. Compliance risk, in many institutions, consists of a single L2 entry ("regulatory compliance") with no further granularity. The COSO mapping forces the taxonomy to be genuinely comprehensive across all four dimensions.

### Ground the Taxonomy in Evidence

The third input is empirical. The industry loss database — 179 events across 30 countries and six decades — provides a factual record of what has actually gone wrong in banking. Every L2 risk sub-category in the enrichment data represents a risk type that has caused material loss to at least one institution.

This is not about populating the taxonomy with historical events. It is about ensuring that the taxonomy contains every risk type that has demonstrably caused harm. If the loss database contains entries for "mirror-trading money laundering" and your taxonomy has no node that would capture this, the taxonomy is incomplete.

The starting universe for identification — built in Phase 1 from regulatory categories, industry loss data, and internal incident history — serves the same purpose for the taxonomy itself. If the evidence says a risk type exists, the taxonomy must contain it.

### Design for the Process, Not for the Org Chart

The JPMorgan London Whale case illustrates the cardinal error in taxonomy design: classifying risks by where they originate rather than by what they are.

The taxonomy must classify by risk characteristics. A credit exposure arising from the investment bank, the retail bank, and the treasury function are all credit risk. The fact that three different organisational units generate them does not change what the risk is. The business unit dimension is captured elsewhere — in the risk inventory, in the risk owner field, in the bottom-up template — but the taxonomy itself must be independent of organisational structure.

This has practical implications. When a business unit is reorganised, the taxonomy should not change. When a product moves from one division to another, the risks it generates should still map to the same taxonomy nodes. If they do not, the taxonomy is not classifying risk — it is classifying business units.

## ISO Guide 73 and Definitional Consistency

Chapter 2 established that ISO 31000 deliberately does not specify risk taxonomies — it provides the architecture, not the vocabulary. That vocabulary comes from **ISO Guide 73: Risk Management — Vocabulary**, which provides standardised definitions for risk management terms.

Definitional consistency matters because taxonomy is fundamentally about shared meaning. If "credit risk" means one thing to the credit risk function and something slightly different to the operational risk function, the taxonomy fails its purpose even if the category names are identical.

The taxonomy should reference ISO Guide 73 definitions as the baseline, adapting them where necessary for the institution's specific context but maintaining consistency with the standard's intent. Where the institution's definition diverges from ISO Guide 73, the divergence should be documented and justified.

This applies particularly to terms that cross category boundaries. "Counterparty credit risk" has a specific meaning in the Basel framework (linked to derivatives and securities financing transactions) that differs from the broader sense in which some institutions use the term. "Operational risk" under Basel includes legal risk but excludes strategic and reputational risk — a narrower definition than many institutions' internal usage. The taxonomy must be explicit about which definition applies, and the regulatory mapping table must reconcile any differences.

## The Regulatory Taxonomy Divergence Problem

No common regulatory risk taxonomy currently exists across jurisdictions. Basel, the EBA, PRA, ECB, Fed, and OCC each use overlapping but non-identical risk categorisations. The EBA has made progress toward standardisation through its reporting frameworks, but full harmonisation does not exist and is unlikely to arrive soon.

This creates a practical challenge for any institution operating across multiple regulatory perimeters. Consider a simple example: a European bank supervised by the ECB, with a UK subsidiary supervised by the PRA, and a US branch supervised by the Fed.

- The ECB expects risk identification against EBA risk categories, including ESG risk with specific transmission channel mapping.
- The PRA expects ICAAP risk identification with emphasis on step-in risk, pension obligation risk, and reverse stress testing.
- The Fed expects a Material Risk Inventory updated quarterly under SR 15-18, with risk categories aligned to CCAR stress scenario design.

All three regulators expect to see credit risk, market risk, operational risk, and liquidity risk — but the boundaries, sub-categories, and reporting granularity differ. A risk that the ECB classifies under one heading may need to appear under a different heading for the PRA.

The institution's taxonomy must be the single internal source of truth. Every risk has one L1/L2/L3 classification. The regulatory mapping table — maintained separately — translates the internal taxonomy into each regulator's language. When the PRA asks about step-in risk, the mapping table points to the specific L1/L2 node where step-in risk lives in the internal taxonomy. When the Fed asks for the Material Risk Inventory, the same underlying data is presented in the categories the Fed expects to see.

This mapping must be active, not aspirational. It must be maintained as regulations change, as the institution enters new jurisdictions, and as regulators revise their own categorisations. The Risk Identification Lead is responsible for ensuring the mapping remains current.

## Taxonomy Maintenance

A taxonomy is not a static document. It is a living structure that must evolve as the institution's risk landscape changes.

The governance arrangements for taxonomy maintenance are established in the governance framework from Chapter 3:

- **Annual review and approval** by the Board Risk Committee. The full taxonomy is reviewed at least annually as part of the annual full re-identification cycle. The Board does not need to approve every L3 entry, but it must approve the L1 structure and any material changes to L2.
- **CRO amendment authority.** The CRO can propose amendments to the taxonomy at any time — this is essential for responding to emerging risks that cannot wait for the annual cycle. If a new risk type emerges (as conduct risk did, or as climate risk did more recently), the CRO must be able to add it to the taxonomy promptly so that identification processes can begin capturing it.
- **Event-driven updates.** When a material loss event or near-miss reveals a risk type not currently in the taxonomy, the taxonomy must be updated as part of the event-driven response. The London Whale case, the mirror-trading scheme, the PPI scandal — each would have triggered a taxonomy review if the maintenance process had been functioning.
- **Regulatory-driven updates.** When a regulator introduces a new risk category or revises an existing one, the taxonomy must be updated to ensure the regulatory mapping remains valid.

The maintenance process must be documented and auditable. Internal Audit, as part of its annual assurance over the risk identification process, tests whether the taxonomy is current, whether maintenance actions have been completed, and whether new risk types have been appropriately incorporated.

### The Emerging Risk Challenge

The hardest taxonomy maintenance problem is adding risk types that do not yet have a name.

Climate risk did not exist as a distinct taxonomy entry in most banks before 2015. Cyber risk was buried inside "IT risk" or "operational risk — systems" until regulators began requiring dedicated assessment. Conduct risk was invisible until a series of scandals made it impossible to ignore.

In each case, the risk existed long before the taxonomy recognised it. Institutions that added the category early — because their horizon scanning or Delphi processes identified the emerging threat — were better positioned to identify specific exposures before they crystallised. Institutions that waited for regulatory mandate or industry loss events were, by definition, late.

The Delphi Method, described as part of the top-down identification process in Phase 2, serves double duty. It identifies specific emerging risks for the current cycle, and it provides intelligence for taxonomy evolution. When Delphi panellists consistently identify a risk type that does not fit neatly into any existing L2 category, that is a signal that the taxonomy needs a new node.

## How the Taxonomy Enables the Methodology

The taxonomy is not a standalone deliverable. It is the infrastructure on which every phase of the methodology operates.

**Phase 1 — Foundation Setting:** The starting universe is built by mapping regulatory categories and industry loss data to taxonomy nodes. The straw man risk list is organised by L1/L2 classification. The external context assessment (PESTLE) identifies threats that must be mappable to the taxonomy. If a PESTLE finding cannot be mapped, the taxonomy may need extension.

**Phase 2 — Dual-Track Identification:** Top-down SWIFT workshops use L2 categories as systematic prompts — the facilitator works through each L2 node, applying "what if" questions to ensure comprehensive coverage. Bottom-up templates require every identified risk to be mapped to L1/L2/L3. All specialist sub-processes — RCSA, conduct risk, ICT risk, AML/CFT, third-party risk, traded risk, treasury risk — must use the common taxonomy. Without this, the reconciliation between top-down and bottom-up outputs is impossible.

**Phase 3 — Assessment:** Risk scoring is performed within taxonomy categories. The materiality threshold is applied consistently across categories because the taxonomy ensures like-for-like comparison. The risk interaction matrix maps cross-category dependencies using the taxonomy as the structural backbone.

**Phase 4 — Documentation:** The risk inventory records every risk with its L1/L2/L3 classification. The COSO objective category mapping uses the taxonomy as its row dimension. Risk profiles reference the taxonomy classification as a primary identifier.

**Phase 5 — Integration:** Capital planning maps material risks to stress scenarios using taxonomy categories. Regulatory reporting translates internal taxonomy to regulatory categories using the mapping table. Board reporting presents the principal risk landscape organised by L1.

**Phase 6 — Ongoing Cycle:** Quarterly re-identification uses the taxonomy to check coverage systematically. Annual taxonomy review refreshes the structure. Event-driven updates may trigger taxonomy amendments.

The taxonomy is the thread that runs through all six phases. Remove it, and the methodology fragments into disconnected activities. This is why building the common language is a foundational priority. Everything else depends on it.

## The Taxonomy Test

There is a simple test for whether a taxonomy is fit for purpose. Take any risk that has caused a material loss to any bank in the last thirty years. Map it to the taxonomy. If it maps cleanly to a single L1/L2 node, the taxonomy passes for that risk. If it maps to two categories simultaneously, the taxonomy fails the mutually exclusive test. If it maps to no category, the taxonomy fails the collectively exhaustive test. If it maps to a gap between two categories — where both have partial relevance but neither fully covers it — the taxonomy fails both tests.

Run this test against the industry loss database. Run it against your own institution's incident history. Run it against the emerging risks your Delphi panel has identified. Every failure represents a risk that your identification process cannot systematically find.

The taxonomy is not perfect and never will be. Risk is dynamic, and any static classification will eventually lag behind reality. The question is not whether the taxonomy has gaps — it always will — but whether the institution has a process for finding and closing them before those gaps produce losses.

That process is taxonomy maintenance, supported by evidence from loss data, intelligence from horizon scanning, and governance that allows the CRO to act without waiting for the annual cycle. The Board approves the structure. The CRO maintains it. The Risk Identification Lead uses it. Internal Audit tests it. The entire governance framework described in the previous chapter exists in part to ensure that this foundation — the common language — remains sound.

The taxonomy is where the methodology begins. Without it, risk identification is a conversation where no one is speaking the same language. With it, every participant — from Board to front line — can identify, classify, and communicate risk in a way that aggregates into an enterprise view.

In the next chapter, we turn to what that enterprise view requires before identification can begin: the systematic assessment of the external environment, the internal context, and the risk culture that will either enable or undermine every step that follows.
