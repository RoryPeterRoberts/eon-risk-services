# Chapter 1: Why Banks Fail at Risk Identification

---

## The Question No One Can Answer

In 2016, I was appointed Global Head of Risk Identification at Credit Suisse. My mandate was to build a bank-wide risk identification process from scratch — one that could withstand regulatory scrutiny from the PRA, FINMA, the Fed, and every other supervisor with jurisdiction over a global systemically important bank.

On my first day, I asked what I thought was a simple question: *How does Credit Suisse currently identify its risks?*

The answer was silence. Not hostile silence — confused silence. People looked at each other. Someone mentioned the risk register. Someone else pointed to the annual ICAAP process. A third person described a workshop they had run two years ago. But no one could describe a coherent, end-to-end process for how the bank identified, catalogued, and validated the risks it was exposed to. There was no methodology. No documented process. No named owner. No audit trail showing how the risk register had been built or why certain risks were on it and others were not.

Credit Suisse was, at the time, one of the largest banks in the world. And it could not explain how it identified its risks.

I wish I could say this was unusual. It was not. When I moved to Standard Chartered in 2023 as Risk Identification Lead in the Enterprise Risk Management department, the situation was better — there were elements of a process — but the same fundamental gaps existed. When I speak to CROs, risk leads, and consultants across the industry, the story is almost always the same. Most banks have a risk register. Very few have a risk identification *process*. And the difference between those two things is the difference between surviving a regulatory review and failing one.

This book exists because, after 20 years of doing this work at six institutions, I became convinced of two things. First, that risk identification is the most important and least understood step in the entire risk management cycle. And second, that there was no comprehensive methodology available anywhere — no book, no standard, no framework — that told a practitioner exactly how to build one.

This is that methodology.

---

## The Gap in the Risk Management Cycle

Every risk management framework — ISO 31000, COSO ERM, the BCBS Corporate Governance Principles — begins with the same step: *identify the risks*. It is the foundation upon which everything else is built. Assessment, mitigation, monitoring, reporting, capital allocation — all of it depends on having first identified what you are exposed to.

And yet, if you look at where banks invest their time, talent, and technology, risk identification barely registers. The measurement functions are well-resourced: credit risk modelling teams with dozens of quants, market risk systems running millions of simulations per day, operational risk databases painstakingly cataloguing loss events. Capital calculation engines are sophisticated. Reporting frameworks are elaborate. Stress testing programmes consume thousands of person-hours per year.

But the question that precedes all of this — *What are the risks?* — is typically addressed in a two-day workshop once a year, run by someone who has never been trained in facilitation techniques, using a brainstorming methodology that produces groupthink rather than genuine risk intelligence. The output is a spreadsheet. The spreadsheet becomes the risk register. The risk register is updated annually — which in practice means it is updated when someone remembers to do it, or when a regulator asks.

This is the gap. Banks have invested billions in measuring and managing risks, but almost nothing in *finding* them in the first place. It is as if a hospital had the world's best surgeons and diagnostic equipment but no process for examining patients. The treatments are excellent. The diagnosis is guesswork.

---

## What the Evidence Shows

To understand how serious this gap is, I studied every major bank failure I could find — from the savings and loan crisis of the 1980s through the Global Financial Crisis, the post-crisis conduct era, and into the 2020s. I built a database of 179 bank loss events, covering institutions across 30 countries and six decades, with aggregate losses exceeding $2.3 trillion.[^ch1-1]

For each entry, I asked the same question: *Was the risk identifiable before the loss materialised?*

The answer, in every single case, was yes.

The risks that destroyed Barings, LTCM, Enron, Northern Rock, Lehman Brothers, and dozens of other institutions were not unknowable. They were not black swans. They were identifiable — often glaringly so — using information that was available at the time. In many cases, the risks had been explicitly flagged by internal audit, by individual employees, by external analysts, or by the institutions' own risk functions. The problem was not that the risks could not be identified. The problem was that the *process* for identifying them was absent, inadequate, or actively undermined.

The database reveals ten recurring failure modes — patterns that appear again and again across different institutions, different decades, and different geographies. Understanding these failure modes is the starting point for building a methodology that prevents them.

---

## The Ten Failure Modes

### 1. Concentration Blindness

The most common failure mode in the database. Institutions fail to identify that their exposure to a single sector, counterparty, asset class, or geography has reached a level where it poses an existential threat. The concentration is often masked by a narrative of diversification — the portfolio *looks* diversified at the instrument level, but the underlying risk factors are correlated.

**The pattern:** Fannie Mae and Freddie Mac, Countrywide, Northern Rock, the Icelandic banks, Washington Mutual, Anglo Irish Bank, and dozens of others all shared the same fundamental problem — extreme concentration in property-related credit risk, disguised by the apparent diversification of having many individual loans. When the housing market turned, the diversification disappeared because every loan was exposed to the same macro factor.

**What was missing:** An enterprise portfolio view that aggregated exposures across business lines and looked for common underlying risk factors, not just instrument-level diversification. A process that asked: *What single scenario would impair the largest number of our assets simultaneously?*

### 2. Model Overreliance

Institutions place excessive trust in quantitative models — Value at Risk, credit ratings, internal models — that fail to capture tail risks, correlation breakdowns, or regime changes. The model becomes a substitute for judgement rather than an input to it.

**The pattern:** Long-Term Capital Management's Nobel Prize-winning founders built a $125 billion portfolio on models calibrated to normal market conditions. When the Russian crisis caused correlations to spike across all markets simultaneously, the models were useless. LTCM's value-at-risk model told them their maximum expected daily loss was $35 million. On 21 August 1998, they lost $553 million in a single day.[^ch1-2]

Merrill Lynch, Citigroup, and Bear Stearns all treated AAA credit ratings on CDO tranches as definitive assessments of risk, substituting an external agency's opinion for independent risk analysis. When the ratings proved wrong, the losses were catastrophic.

**What was missing:** A risk identification process that treated models as one input among many, not as the final word. A culture that asked: *What does this model NOT capture?* And a governance framework that required independent challenge of model assumptions.

### 3. Governance Bypass

Risk identification frameworks exist on paper but are circumvented by dominant individuals, commercial pressure, or cultural inertia. Risks are identified at the working level but never reach the people who can act on them — or they reach those people and are ignored.

**The pattern:** At Barings, internal audit identified the segregation-of-duties violation in Nick Leeson's Singapore operation. Management did not act.[^ch1-3] At Standard Chartered, the compliance function identified the sanctions risk in the Iranian business. Senior management overruled the concerns because the business was commercially important. At Lehman Brothers, the Chief Risk Officer raised increasingly urgent warnings about leverage and mortgage exposure. She was first marginalised and then replaced.

**What was missing:** A governance structure with clear escalation paths, where risk identification findings cannot be unilaterally overruled by the business, and where the Board receives risk information that has not been filtered through the very management responsible for generating the risk.

### 4. Silo Thinking

Risk identification is conducted within individual business lines or risk types without aggregation across the enterprise. Each silo sees its own piece of the picture but no one assembles the whole.

**The pattern:** At JPMorgan, the Chief Investment Office's "London Whale" trades were classified as hedging rather than proprietary trading. Because of this classification, the CIO was exempted from the bank's trading risk limits and VaR monitoring. The organisational silo determined the level of risk oversight, and the hedge designation was never independently challenged.[^ch1-4]

At Citigroup, off-balance-sheet SIV exposures were excluded from the bank's risk aggregation framework because the liquidity puts were considered remote contingencies. No one asked what would happen if *all* the contingent exposures crystallised simultaneously.

**What was missing:** A reconciliation process that brings together top-down and bottom-up risk views and explicitly asks: *What risks are we missing because of the way we are organised?* An enterprise portfolio view that aggregates across silos.

### 5. Cultural Suppression

The institutional culture discourages challenge, dissent, or escalation of risk concerns. People who identify risks are treated as obstacles to the business rather than as performing an essential function.

**The pattern:** At Wells Fargo, an estimated 3.5 million potentially unauthorised accounts were opened to meet cross-selling targets.[^ch1-5] Whistleblower complaints were filed — and treated as HR issues, not risk events. The sales culture was so dominant that the risk function could not challenge it. At Lehman Brothers, internal critics of the leverage strategy were marginalised. At Credit Suisse, the risk culture that allowed Archegos to accumulate $20 billion in exposure through total return swaps[^ch1-6] was described by regulators as one where commercial considerations consistently overrode risk management.

**What was missing:** A risk identification process that includes anonymous reporting channels, formal protection for risk identifiers, and Board-level visibility into whether the risk culture enables or suppresses the identification of uncomfortable truths.

### 6. Emerging Risk Blindness

Institutions fail to identify new risk types that fall outside their existing taxonomy or historical experience. The risk is novel, and because no one has lost money on it before, no one recognises it as a risk.

**The pattern:** Before the PPI scandal, no UK bank had "product mis-selling" as a named risk in its risk register. Before Wirecard, "fintech fraud" was not a standard risk category. Before the GFC, "securitisation market closure" was not a scenario that banks modelled. In each case, the risk was identifiable — the warning signals existed — but the institutions' risk taxonomies and identification processes did not have a category for it.

**What was missing:** A structured horizon-scanning process — such as the Delphi Method — that systematically asks: *What risks could emerge in the next three to five years that are not currently in our taxonomy?*

### 7. Control Environment Failure

Weak internal controls allow fraud, unauthorised trading, or accounting manipulation to go undetected for extended periods. The risk identification process assumes a functioning control environment that does not actually exist.

**The pattern:** At Enron, shareholders lost $74 billion in value after accounting fraud — concealed through off-balance-sheet special purpose entities — was exposed.[^ch1-7] At WorldCom, $180 billion in shareholder value was destroyed by systematic capitalisation of operating expenses.[^ch1-8] At Wirecard, €1.9 billion in cash balances simply did not exist.[^ch1-9] In each case, the basic controls that should have prevented or detected the fraud — reconciliations, segregation of duties, independent verification — were absent or overridden.

**What was missing:** A risk identification process that includes assessment of the internal control environment as a precondition — recognising that if the control environment is compromised, all other risk assessments built on top of it are unreliable.

### 8. Information Asymmetry

Key risk information is held by the front office, individual traders, or senior management and is not shared with the risk function or the Board. The people who need the information to identify risks do not have it.

**The pattern:** At Bear Stearns, the collapse of two hedge funds in June 2007 was treated as an isolated subsidiary event rather than identified as an early warning signal of the same concentration risk in the parent bank's own balance sheet.[^ch1-10] At Lehman, the Repo 105 programme — used to temporarily remove assets from the balance sheet at reporting dates — was known to a small group of executives but not to the risk function or the Board in a way that allowed them to assess its implications.[^ch1-11]

**What was missing:** A risk identification process that actively seeks out information from across the institution rather than waiting for it to be volunteered. Bottom-up templates that require front-line disclosure. Top-down workshops that include people with direct operational knowledge, not just senior management.

### 9. Regulatory Arbitrage Masking

Complex financial structures designed to optimise capital or accounting treatment simultaneously obscure the true risk profile. The structure is legal but the risk is hidden.

**The pattern:** Citigroup's SIVs, Lehman's Repo 105, the entire shadow banking system's use of off-balance-sheet vehicles — all of these were structures that reduced reported risk while increasing actual risk. The regulatory capital framework said the risk was low. The economic reality was that the risk was enormous.

**What was missing:** A risk identification process that asks: *Where is there a material gap between our regulatory risk profile and our economic risk profile?* And a culture that treats regulatory arbitrage as a risk to be identified, not a benefit to be celebrated.

### 10. Complacency

Extended periods of low losses breed overconfidence and reduced vigilance. The absence of recent failures is interpreted as evidence that risks do not exist, rather than as a period during which risks are accumulating.

**The pattern:** Northern Rock's business model had worked for years. LTCM had a track record of exceptional returns. The US housing market had not experienced a nationwide decline in living memory. In each case, the recent track record was used as evidence that the risk was low, when in fact the absence of losses was a lagging indicator that said nothing about the risks currently being accumulated.

**What was missing:** A risk identification process that explicitly challenges the "it's always worked before" assumption. Scenario analysis that asks: *What would have to happen for this to go badly wrong?* — regardless of whether it has happened recently.

---

## The Common Thread

These ten failure modes are different in their specifics but identical in their root cause: **the institution did not have a process designed to find the risks it was exposed to.** In some cases, there was no process at all. In others, the process existed but was structurally incapable of catching the risks that mattered — because it was top-down only, or annual only, or disconnected from the business, or run without a structured methodology, or undermined by a culture that did not want to hear the answers.

The losses that resulted were not inevitable. They were preventable. Every one of the 179 failures in the database could have been mitigated — not necessarily prevented entirely, but identified early enough to reduce the exposure before it became existential. The risk was there. The information was there. What was missing was the process.

---

## What This Book Is For

This book provides that process.

It is not a textbook on risk management theory. It is not an academic survey of risk identification techniques. It is a practitioner's methodology — a complete, end-to-end process for identifying risks in a banking institution, designed to be implemented by real practitioners in real banks under real regulatory scrutiny.

The methodology is built on three foundations:

**Standards.** The process is grounded in ISO 31000 (Risk Management Principles and Guidelines), ISO 31010 (Risk Assessment Techniques), and the COSO Enterprise Risk Management Integrated Framework. These are the international standards that regulators reference and against which processes are assessed. Every element of the methodology traces back to a specific provision of these standards.

**Regulation.** The process maps to 16 regulatory frameworks across the BCBS, PRA, EBA, ECB, Fed, OCC, and FCA. Every regulatory requirement for risk identification is traceable to a specific section of the methodology. This is not an academic framework — it is a process designed to pass regulatory examination.

**Evidence.** The process is informed by the Industry Loss Database — the 179 bank failures, the ten failure modes, and the $2.3 trillion in losses that demonstrate what goes wrong when risk identification fails. Every phase of the methodology exists because history showed what happens without it.

The book is organised around a six-phase process:

- **Phase 1: Foundation Setting** — establishing the external and internal context, defining risk criteria and appetite, and building the starting universe of risks to investigate
- **Phase 2: Dual-Track Identification** — a structured top-down and bottom-up identification process with mandatory reconciliation
- **Phase 3: Assessment and Prioritisation** — four-dimensional scoring, multi-dimensional impact analysis, data quality ratings, and bow-tie analysis
- **Phase 4: Documentation** — the living risk inventory and risk profiles
- **Phase 5: Integration** — linking identification outputs to capital planning, strategic planning, and Board reporting
- **Phase 6: Ongoing Cycle** — quarterly re-identification, event-driven updates, and internal audit assurance

Before diving into the phases, Chapter 2 (The Foundations: Standards and Frameworks) establishes the standards and frameworks that underpin the entire methodology. After that, we move to governance — because without clear ownership and accountability, even the best-designed process will fail.

The methodology is comprehensive. It is detailed. And it works. I have built it twice — at Credit Suisse and at Standard Chartered — and refined it through years of practice, regulatory challenge, and the kind of learning that only comes from doing it wrong before you learn to do it right.

The banks that failed did not lack smart people. They lacked a process. This book gives you the process.

---

*In Chapter 2 (The Foundations: Standards and Frameworks), we examine the international standards and regulatory frameworks that provide the foundation for the methodology — ISO 31000, ISO 31010, COSO ERM, and the BCBS Corporate Governance Principles — and explain how they relate to each other and to the practical work of identifying risks in a bank.*

---

[^ch1-1]: Industry Loss Database, EON Risk Services. See Appendix A: Industry Loss Database Methodology for inclusion criteria, data sources, loss definitions, and the full event list.

[^ch1-2]: Lowenstein, R. *When Genius Failed: The Rise and Fall of Long-Term Capital Management*. Random House, 2000. The $125 billion balance sheet figure and $35 million VaR estimate are from Lowenstein and from the President's Working Group on Financial Markets, *Hedge Funds, Leverage, and the Lessons of Long-Term Capital Management*, April 1999. The $553 million single-day loss on 21 August 1998 is from the same source.

[^ch1-3]: Board of Banking Supervision, Bank of England, *Report of the Board of Banking Supervision Inquiry into the Circumstances of the Collapse of Barings*, HC 673, July 1995. Internal audit had identified the lack of segregation between Leeson's trading and settlement functions in 1994.

[^ch1-4]: US Senate Permanent Subcommittee on Investigations, *JPMorgan Chase Whale Trades: A Case History of Derivatives Risks and Abuses*, 15 March 2013. The CIO was exempted from the bank's standard trading risk limits and VaR monitoring framework.

[^ch1-5]: Wells Fargo, independent directors' Sales Practices Investigation Report, April 2017; CFPB Consent Order No. 2016-CFPB-0015, 8 September 2016. The figure of 3.5 million accounts is from Wells Fargo's own expanded remediation analysis.

[^ch1-6]: Credit Suisse Group, *Report on Archegos Capital Management*, prepared by Paul, Weiss, Rifkind, Wharton & Garrison LLP, 29 July 2021. The $20 billion figure refers to Archegos's concentrated equity positions unwound during March 2021.

[^ch1-7]: Enron Corp., SEC filings; US Senate Permanent Subcommittee on Investigations, *The Role of the Board of Directors in Enron's Collapse*, 8 July 2002. The $74 billion figure represents the peak-to-trough decline in Enron's market capitalisation.

[^ch1-8]: US Securities and Exchange Commission, Litigation Release No. 17588, 26 June 2002; SEC v. WorldCom Inc. The $180 billion figure represents the destruction of shareholder value following disclosure of the accounting fraud.

[^ch1-9]: EY Special Audit of Wirecard AG, 2020; Wirecard AG insolvency filing, Amtsgericht München, 25 June 2020. The €1.9 billion referred to cash balances that Wirecard claimed were held in trustee accounts in the Philippines but which could not be verified.

[^ch1-10]: Financial Crisis Inquiry Commission, *The Financial Crisis Inquiry Report*, January 2011, pp. 238-242. The Bear Stearns High-Grade Structured Credit Fund and Enhanced Leverage Fund collapsed in June-July 2007.

[^ch1-11]: Report of the Examiner in the Chapter 11 proceedings of Lehman Brothers Holdings Inc., Anton R. Valukas, Examiner, 11 March 2010. The Repo 105 programme is examined in Sections III.A.4 and III.A.5 of the Examiner's report.
