# Research Extraction: Article 10
# 179 Bank Failures — The 10 Failure Modes That Explain Almost All of Them

## Source
"Bank Risk Identification: The Complete Methodology" by Rory Roberts — all 16 chapters (sanitized version)

---

## PART 1: THE INDUSTRY LOSS DATABASE (ILD) — OVERVIEW AND STATISTICS

### What It Is
The Industry Loss Database (ILD) is an analytical dataset of 179 bank loss events compiled across the book. It spans 30 countries and six decades. Aggregate losses exceed **$2.3 trillion**. The database is not a list of every bank failure ever — it is a curated set of events where the failure mode can be traced to a breakdown in risk identification.

### Aggregate Statistics

**By Risk Type (primary classification):**
| Risk Type | % of Entries | Estimated Loss |
|-----------|-------------|----------------|
| Credit Risk | 42% | $1.37 trillion |
| Operational Risk | 43% | $626 billion |
| Conduct Risk | ~7% | $97 billion |
| Market Risk | ~8% | Remainder |

**By Decade:**
| Period | % of Entries | Notable Detail |
|--------|-------------|----------------|
| Pre-2000 | ~9% | Barings, LTCM, S&L crisis |
| 2000s | 44% | 63 GFC-related events, ~$1.5 trillion |
| 2010s+ | 47% | Regulatory failures, conduct, emerging risks |

**By Geography:**
| Region | % of Entries |
|--------|-------------|
| Europe | 54% |
| North America | 30% |
| Asia-Pacific | ~10% |
| Other | ~6% |

**By COSO Objective Category:**
| COSO Category | % of Entries |
|---------------|-------------|
| Strategic | 41% |
| Operations | 22% |
| Compliance | 19% |
| Reporting | 18% |

### Key Insight for Article
The ILD's most important finding: **most bank failures involve failures in risk identification, not risk measurement.** The risks were either never identified, misclassified, or identified but disconnected from the governance process that should have acted on them. The same 10 failure modes recur across decades, geographies, and institution types.

### The "Risk Was on the Register" Problem
The book's central thesis, stated in Chapter 1 and reinforced in Chapter 16: in case after case, the risk that destroyed the institution was technically present in the risk register. SVB had interest rate risk on its register. Credit Suisse had counterparty concentration risk identified. Northern Rock had liquidity risk documented. The problem was that identification had never been connected to assessment, governance, or action. "The risk register had become a compliance artefact rather than a management tool."

---

## PART 2: THE 10 FAILURE MODES

### Failure Mode 1: Concentration Blindness

**Definition:** The failure to identify or act upon dangerous concentrations — in asset classes, counterparties, geographies, funding sources, or business models — until those concentrations produce catastrophic losses.

**Pattern:** Institutions pursue growth in what appears to be a diversified portfolio but is actually concentrated along hidden dimensions. The concentration is visible in the data but invisible to governance because the risk identification process does not aggregate exposures across silos or test for correlation.

#### Case Studies

**Silicon Valley Bank (SVB) — 2023**
- $209 billion in assets at failure
- $91 billion in held-to-maturity (HTM) securities, overwhelmingly long-duration US Treasuries and agency MBS
- $15.2 billion in unrealized losses vs $16 billion total equity — unrealized losses nearly equalled total equity
- $1.8 billion realized loss on available-for-sale (AFS) portfolio triggered crisis
- $42 billion in single-day deposit withdrawals (largest bank run in history)
- Interest rate risk was on the risk register; it had been there for years
- CRO position vacant for 8 months during critical period
- No quarterly re-identification process that would have surfaced the growing HTM concentration
- Third-largest US bank failure by assets
- **Source: Ch 1, Ch 13**

**Credit Suisse / Archegos — 2021**
- Archegos Capital Management (Bill Hwang's family office) built $20 billion in concentrated equity positions using total return swaps (TRS) at 5-8x leverage
- Credit Suisse's single-counterparty exposure: $20 billion
- Credit Suisse loss: $5.5 billion
- Total industry losses from Archegos: approximately $10 billion (Nomura ~$3B, others)
- The TRS structure meant Archegos did not appear on standard equity holder disclosures
- Credit Suisse's prime brokerage had margin calls outstanding but did not escalate
- Cross-counterparty concentration risk was a known failure mode; the reconciliation process between top-down and bottom-up identification did not surface it
- **Source: Ch 1, Ch 6, Ch 8, Ch 16**

**Washington Mutual (WaMu) — 2008**
- $307 billion in assets — largest US bank failure by assets until SVB
- Massive concentration in option adjustable-rate mortgages (option ARMs) and subprime
- Sold to JPMorgan Chase for $1.9 billion after seizure by FDIC
- **Source: Ch 1, Ch 12**

**Wachovia / Golden West — 2006-2008**
- Wachovia acquired Golden West Financial in 2006 for $25.5 billion
- Inherited $122 billion in option ARM mortgages
- Losses approximately $25 billion
- Concentration in a single product (option ARMs) acquired through M&A, not organically grown — risk identification process did not extend to acquisition due diligence
- **Source: Ch 9**

**Anglo Irish Bank — 2009**
- €29.3 billion in Irish taxpayer cost
- Extreme concentration in commercial real estate (CRE) lending to a small number of developers
- €87 million in concealed loans to chairman Sean FitzPatrick
- CEO and chairman convicted of fraud
- Concentration blindness compounded by governance bypass — the board did not see or act on the CRE concentration
- **Source: Ch 1, Ch 5**

**HSH Nordbank — 2008-2015**
- €10 billion state guarantee + €3 billion capital injection
- €30 billion shipping portfolio — extreme single-sector concentration
- Believed shipping and subprime were "diversified" exposures — correlation surprise when both collapsed simultaneously during GFC
- False diversification: two concentrated exposures do not diversify each other
- **Source: Ch 8, Ch 10**

**Icelandic Banks (Kaupthing, Landsbanki, Glitnir) — 2008**
- Combined assets approximately 10x Iceland's GDP
- All three failed within one week in October 2008
- Extreme concentration in cross-border wholesale funding and related-party lending
- IMF bailout: $2.1 billion
- **Source: Ch 1, Ch 10**

**SNS Reaal — 2012**
- €3.7 billion nationalization cost
- €7.4 billion in commercial real estate loans — single-sector concentration
- Combination of insurance company and bank, with CRE concentration the destruction vector
- **Source: Ch 11**

**Signature Bank — 2023**
- $110 billion in assets
- Heavy concentration in cryptocurrency-related deposits
- Third-largest US bank failure
- Rapid deposit flight following SVB collapse — contagion through shared concentration profile
- **Source: Ch 13**

**Bankia — 2012**
- €22.4 billion bailout — largest in Spanish history
- Formed from merger of seven cajas (savings banks), each with CRE concentration
- Merging seven concentrated portfolios did not create diversification — it created a larger concentration
- Rodrigo Rato (former IMF managing director) convicted as chairman
- **Source: Ch 12**

**Northern Rock — 2007**
- 75% of funding from wholesale markets — extreme funding concentration
- Nationalized; approximately £2 billion cost to UK taxpayer
- First UK bank run in 150 years (September 2007)
- Liquidity risk was documented but the funding concentration was not treated as an existential threat
- **Source: Ch 1, Ch 5**

**LTCM — 1998**
- $125 billion portfolio, $35 million daily VaR estimate (model-based)
- Single-day loss: $553 million (>15x stated VaR)
- $3.6 billion bailout organized by NY Fed, contributed by 14 banks
- Concentrated in convergence trades that assumed mean reversion — Russian crisis caused correlation spike that destroyed all positions simultaneously
- **Source: Ch 1, Ch 9, Ch 16**

**Countrywide Financial — 2007-2008**
- Acquired by Bank of America for $4 billion in 2008
- Subsequent litigation, settlements, and losses cost BofA over $40 billion
- Massive concentration in subprime and Alt-A mortgage origination
- **Source: Ch 1, Ch 16**

**Alpha Bank (Greece) — 2012-2015**
- Approximately €4 billion in recapitalization
- Part of €30.9 billion total recapitalization across four Greek banks
- Sovereign concentration: Greek government bonds and Greek CRE
- **Source: Ch 16**

**Bank of Cyprus — 2013**
- 47.5% bail-in of uninsured deposits — first major bail-in under new EU resolution framework
- Extreme concentration in Greek government bonds
- **Source: Ch 16**

**American Savings & Loan — 1988**
- $5.4 billion in losses
- Seized by FSLIC in 1988
- Interest rate concentration: long-duration fixed-rate assets funded by short-term deposits
- Part of broader S&L crisis pattern
- **Source: Ch 16**

**Dexia — 2008, 2011**
- First bailout (2008): €6.4 billion + €150 billion in government guarantees
- Second failure (2011): broken up entirely
- Concentrated in long-dated municipal/sovereign credit funded by short-term wholesale
- Failed twice because the concentration was not resolved after the first bailout
- **Source: Ch 12**

---

### Failure Mode 2: Model Overreliance

**Definition:** Excessive dependence on quantitative models (VaR, credit scoring, stress testing) that systematically underestimate tail risk, creating a false sense of security that prevents qualitative risk identification from being taken seriously.

**Pattern:** The institution relies on models that performed well in benign conditions. When conditions change (regime shift, correlation breakdown, liquidity evaporation), the models fail catastrophically. The risk identification process defers to model output rather than questioning model assumptions.

#### Case Studies

**LTCM — 1998**
- Models assumed normal distribution of returns and stable correlations
- $35 million daily VaR estimate; actual single-day loss: $553 million (>15x VaR)
- Nobel laureates (Scholes, Merton) on the team — extreme confidence in model validity
- Russian crisis caused correlation spike that broke every convergence assumption
- **Source: Ch 1, Ch 9**

**UBS Structured Credit — 2007-2008**
- $37.4 billion in write-downs on structured credit positions
- Risk function relied on the same models as the front office — no independent challenge
- Super-senior CDO tranches rated AAA were treated as risk-free by internal models
- When models and risk function share assumptions, there is no identification of model risk itself
- **Source: Ch 7, Ch 9**

**AIG Financial Products — 2008**
- $527 billion in CDS notional outstanding
- $78 billion in multi-sector CDO exposure
- $85 billion initial Fed bailout; total government support exceeded $180 billion
- AIG FP models priced CDS as if the probability of widespread mortgage default was near zero
- The CDS were priced using models that did not contemplate systemic housing decline
- When collateral calls came, AIG could not meet them — the model had not identified the liquidity risk of margin calls on this scale
- **Source: Ch 9**

**Merrill Lynch — 2007-2008**
- Approximately $40 billion gross subprime exposure
- $32 billion in super-senior CDO tranches retained on balance sheet
- $51.8 billion in total write-downs
- Super-senior tranches were model-rated as virtually risk-free
- Fire-sale of $30.6 billion in CDOs for $6.7 billion (22 cents on the dollar)
- **Source: Ch 9**

**Hypo Real Estate / Depfa — 2007-2008**
- Depfa had €400 billion balance sheet of long-dated public finance assets
- Funded almost entirely through short-term wholesale markets
- Hypo Real Estate required €102 billion in German government guarantees
- Models for asset valuation did not capture liquidity risk of funding mismatch
- **Source: Ch 5, Ch 10**

**Bear Stearns — 2007-2008**
- Two hedge funds collapsed in June 2007 — early warning of subprime crisis
- Institution itself collapsed March 2008; sold to JPMorgan for $2/share (later $10)
- Internal models showed adequate capital; market confidence evaporated in days
- VaR models did not capture the speed of counterparty confidence collapse
- **Source: Ch 1, Ch 9, Ch 16**

**Lehman Brothers — 2008**
- $85 billion in RMBS exposure, $111 billion in real estate
- 30:1 leverage ratio
- $639 billion bankruptcy — largest in US history
- Repo 105: $50 billion in assets temporarily removed from balance sheet at quarter-end to improve leverage ratios
- Models showed manageable risk; Repo 105 transactions made leverage appear lower than reality
- **Source: Ch 10**

**Citigroup — 2007-2009**
- $45 billion in TARP funds received
- $49 billion+ in SIV assets consolidated onto balance sheet when off-balance-sheet vehicles could no longer fund
- $301 billion in government loss-sharing agreement
- SIV model assumed perpetual access to commercial paper markets — when CP markets froze, Citigroup had to absorb the assets
- **Source: Ch 1, Ch 8**

**Knight Capital — 2012**
- $440-460 million loss in 45 minutes due to software deployment error
- Firm had $365 million in equity — wiped out in under an hour
- Algorithmic trading models had no circuit-breaker for this failure mode
- Dormant code activated by deployment error sent millions of erroneous orders
- **Source: Ch 14**

---

### Failure Mode 3: Governance Bypass

**Definition:** The systematic circumvention, weakening, or overriding of risk governance structures — risk committees, escalation protocols, limit frameworks, and independent challenge — by commercial interests, senior management, or cultural pressure.

**Pattern:** The governance structure exists on paper. Risk committees meet. Reports are produced. But the governance is performative: limits are raised when breached, risk officers are overruled or marginalized, and commercial interests dominate risk decisions.

#### Case Studies

**JPMorgan / London Whale — 2012**
- Chief Investment Office (CIO) accumulated $6.2 billion in losses on synthetic credit derivatives
- CIO was exempted from standard risk limits and VaR reporting that applied to the investment bank
- When VaR model showed limit breaches, the model was changed (not the position)
- Bruno Iksil ("London Whale") operated in a governance vacuum within JPMorgan
- Classic governance bypass: the unit generating the risk was exempted from the controls designed to catch it
- **Source: Ch 1, Ch 4**

**Barings Bank — 1995**
- Nick Leeson accumulated $1.3 billion in hidden losses trading Nikkei futures
- Leeson controlled both front office (trading) and back office (settlements) in Singapore
- Internal audit had identified the segregation-of-duties violation but findings were not acted upon
- Oldest merchant bank in England — destroyed by a single trader because governance allowed one person to control both execution and confirmation
- **Source: Ch 1**

**HBOS / Paul Moore — 2005-2008**
- Paul Moore, Head of Group Regulatory Risk at HBOS, raised concerns about aggressive lending growth in 2004-2005
- Moore was fired in 2005 after warning the board about risk culture
- HBOS subsequently suffered losses exceeding £10 billion
- Peter Cummings (Head of Corporate Banking) was banned from the financial industry by the FSA
- The risk function identified the problem; governance bypassed it by removing the risk officer
- **Source: Ch 3**

**Wells Fargo — 2016-ongoing**
- 3.5 million unauthorized customer accounts created by retail bankers under sales pressure
- $3 billion DOJ settlement
- Federal Reserve imposed an unprecedented asset cap (2018-2025) — in force for seven years
- The risk was not a failure of identification at the branch level — employees knew what was happening. It was a governance failure: the incentive structure rewarded the behavior, and risk escalation was suppressed
- **Source: Ch 1, Ch 3, Ch 9**

**Credit Suisse / Mozambique — 2013-2021**
- Credit Suisse bankers arranged $2 billion in hidden loans to Mozambican state entities
- Loans disguised as tuna fishing fleet financing ("tuna bond" scandal)
- $475 million in regulatory settlements
- Governance bypass: the transactions were structured to avoid internal credit approval thresholds
- **Source: Ch 16**

**Lehman Brothers — 2008**
- CRO Madelyn Antoncic was marginalized and eventually removed
- Repo 105 transactions ($50 billion) were used to disguise true leverage at quarter-end
- The CFO and senior management controlled the narrative to the board; risk function was subordinated
- Board received incomplete and misleading information about leverage and exposure
- $639 billion bankruptcy
- **Source: Ch 1, Ch 10**

**Banca Monte dei Paschi di Siena — 2012-2017**
- €730 million in losses concealed through derivative transactions
- Oldest bank in the world (founded 1472)
- Derivatives were used to hide losses from governance oversight
- Multiple rounds of recapitalization
- **Source: Ch 3**

**Societe Generale / Kerviel — 2008**
- Jerome Kerviel accumulated €50 billion in hidden positions
- Realized loss: €4.9 billion
- Kerviel was a junior trader who exploited control gaps — he understood the back-office systems because he had previously worked there
- Governance failure: alerts were generated but not investigated; his previous back-office knowledge allowed him to defeat automated controls
- **Source: Ch 3**

**Deutsche Bank Mirror Trading — 2011-2015**
- Approximately $10 billion in transactions used for Russian money laundering
- $630 million in combined regulatory fines (US and UK)
- The trading pattern was visible in transaction data but compliance controls did not flag it
- Governance structures existed but were not designed to detect this pattern
- **Source: Ch 4, Ch 9**

**Standard Chartered — Sanctions — 2012**
- Processed approximately $250 billion in transactions for Iranian clients over nearly a decade
- $667 million in fines
- Internal compliance identified issues but was overruled by business interests
- U-turn stripping: payment messages were altered to remove Iranian references
- **Source: Ch 1, Ch 3, Ch 9**

---

### Failure Mode 4: Cultural Suppression

**Definition:** An organizational culture that actively or passively discourages the identification, escalation, or honest assessment of risks — through fear, incentives, groupthink, or institutional inertia.

**Pattern:** The institution has a risk function and formal processes, but the culture makes it impossible to use them honestly. Risk officers who raise concerns are marginalized. Business lines control the risk narrative. "Good news" is rewarded; "bad news" is punished.

#### Case Studies

**HBOS / Paul Moore — 2005-2008**
- Moore raised concerns about aggressive lending and was fired
- Losses exceeded £10 billion
- Peter Cummings banned from the industry
- Moore later testified to UK Parliament about the culture of suppression
- Classic case: the risk function did its job; the culture destroyed the messenger
- **Source: Ch 3**

**Wells Fargo — 2016-ongoing**
- Retail bankers who refused to create unauthorized accounts were fired
- Bankers who reported the practice were also punished
- "Eight is great" — the sales culture demanded eight products per customer
- $3 billion DOJ settlement; Fed asset cap 2018-2025
- The culture of sales targets created an environment where identifying conduct risk was career-ending
- **Source: Ch 1, Ch 3, Ch 9**

**Lehman Brothers — 2008**
- CRO Madelyn Antoncic marginalized after raising concerns about leverage
- Culture of aggressive risk-taking set by CEO Richard Fuld
- Senior management controlled information flow to the board
- Staff who questioned the real estate strategy were sidelined
- **Source: Ch 1, Ch 10**

**Wirecard — 2020**
- €1.9 billion in fabricated cash balances
- BaFin (German regulator) filed criminal complaints against Financial Times journalists who reported on the fraud — the regulator attacked the whistleblowers
- Short-sellers had flagged concerns from 2015 — they were accused of market manipulation
- CEO Markus Braun arrested; COO Jan Marsalek fled (still wanted)
- Culture of suppression extended from the company to the national regulator
- **Source: Ch 1, Ch 6, Ch 14**

**Enron — 2001**
- $74 billion in shareholder value destroyed
- Special purpose entities used to hide losses off-balance-sheet
- Internal culture rewarded aggressive deal-making and punished skepticism
- Arthur Andersen (auditor) failed to challenge the structures
- **Source: Ch 1**

**WorldCom — 2002**
- $180 billion in shareholder value destroyed
- $11 billion in fraudulent accounting entries
- Internal audit discovered the fraud, but the culture had suppressed earlier warnings
- **Source: Ch 1**

**AMP Australia — 2018-2019**
- AUD 600 million+ in remediation costs
- Charged fees to deceased customers and customers who received no service ("fees for no service")
- Royal Commission revealed a culture where revenue generation overrode customer and compliance concerns
- **Source: Ch 11**

**Danske Bank — 2007-2015 (discovered 2018)**
- €200 billion in suspicious transactions through Estonian branch
- Fines exceeding €2 billion
- CEO resigned
- Internal whistleblower raised concerns in 2013 — they were ignored
- Estonian branch operated with minimal oversight from Copenhagen headquarters
- **Source: Ch 11**

---

### Failure Mode 5: Liquidity Illusion

**Definition:** The assumption that assets can be liquidated, funding can be rolled, or markets will remain functional — when in fact liquidity is a fair-weather phenomenon that evaporates precisely when it is most needed.

**Pattern:** The institution builds a business model or takes positions predicated on continuous market liquidity. In normal conditions, everything works. In stress, the liquidity disappears simultaneously across all markets, and the institution faces fire-sale losses, funding runs, or both.

#### Case Studies

**Northern Rock — 2007**
- 75% of funding from wholesale markets
- When wholesale markets froze in August 2007, Northern Rock could not fund itself
- First UK bank run in 150 years — queues of depositors outside branches
- Nationalized; approximately £2 billion cost to UK taxpayer
- Liquidity risk was documented but the existential dependence on wholesale funding was not treated as a concentration
- **Source: Ch 1, Ch 5**

**Hypo Real Estate / Depfa — 2007-2008**
- Depfa had €400 billion balance sheet — long-dated public sector assets funded by short-term wholesale
- When short-term markets froze, Depfa (and by extension Hypo Real Estate) faced a funding cliff
- €102 billion in German government guarantees required
- Eventually nationalized in 2009
- **Source: Ch 5, Ch 10**

**Bear Stearns — 2008**
- Two hedge funds collapsed June 2007 — first sign of subprime liquidity evaporation
- Institution collapsed March 2008 in days as counterparties pulled funding and prime brokerage clients withdrew
- Sold for $2/share (later revised to $10)
- Market liquidity and counterparty confidence evaporated simultaneously
- **Source: Ch 1, Ch 9, Ch 16**

**Dexia — 2008, 2011**
- Long-dated municipal and sovereign credit assets funded by short-term wholesale
- €6.4 billion bailout + €150 billion in guarantees (2008)
- Failed again in 2011 and was broken up entirely
- Liquidity illusion: the funding model worked in benign conditions but was fatally fragile
- **Source: Ch 12**

**Citigroup — 2007-2009**
- SIVs (structured investment vehicles) held $49 billion+ in assets funded by commercial paper
- When CP markets froze, Citigroup was forced to consolidate SIVs onto balance sheet
- $45 billion in TARP; $301 billion loss-sharing agreement
- The SIV model assumed perpetual CP market access — a liquidity illusion
- **Source: Ch 1, Ch 8**

**SVB — 2023**
- $42 billion in single-day deposit withdrawals
- Deposits concentrated among VC-backed tech firms with interconnected communication networks
- The speed of digital bank runs (social media + mobile banking) was not modeled
- Liquidity stress testing had not contemplated this velocity of outflow
- **Source: Ch 13**

**Icelandic Banks — 2008**
- Combined assets 10x Iceland's GDP
- Funded by cross-border wholesale markets and online savings accounts (e.g., Icesave)
- When global wholesale markets froze, all three banks failed within one week
- No domestic lender of last resort large enough to backstop the system
- **Source: Ch 1, Ch 10**

**LTCM — 1998**
- Assumed positions could be unwound in orderly markets
- Russian crisis caused simultaneous liquidity evaporation across all convergence trade markets
- Other funds with similar strategies unwound simultaneously, amplifying illiquidity
- $3.6 billion bailout organized by NY Fed
- **Source: Ch 1, Ch 9, Ch 16**

**Fortis / ABN AMRO — 2007-2008**
- Fortis-led consortium acquired ABN AMRO for €71 billion in October 2007 — at the peak of the market
- €11.2 billion rescue required within a year
- The acquisition consumed Fortis's liquidity buffers just before the crisis; when wholesale markets froze, Fortis could not fund both itself and the acquired assets
- **Source: Ch 10**

---

### Failure Mode 6: Regulatory Arbitrage Failure

**Definition:** The exploitation of gaps between regulatory regimes, accounting standards, or jurisdictional boundaries to reduce capital, avoid oversight, or circumvent restrictions — which backfires when the underlying risks materialize regardless of how they were classified.

**Pattern:** The institution structures activities to minimize regulatory capital or avoid specific regulatory requirements. The structuring "works" from a compliance perspective but does not actually reduce the economic risk. When the risk materializes, the institution is undercapitalized for the actual exposure.

#### Case Studies

**Lehman Brothers / Repo 105 — 2008**
- $50 billion in assets temporarily removed from balance sheet at quarter-end
- Repo 105 transactions were classified as "sales" rather than "financing" under UK GAAP (Linklaters legal opinion)
- This made leverage ratios appear lower than they actually were
- The economic risk never left Lehman — only the accounting classification changed
- $639 billion bankruptcy
- **Source: Ch 10**

**Citigroup / SIVs — 2007-2009**
- SIVs were structured to remain off-balance-sheet under accounting rules
- Citigroup had no regulatory capital against $49 billion+ in SIV assets
- When SIVs could no longer fund in CP markets, Citigroup was forced to consolidate — suddenly needing capital for assets it had always economically owned
- **Source: Ch 1, Ch 8**

**AIG / CDS — 2008**
- AIG Financial Products wrote $527 billion in CDS without posting collateral or holding capital against them
- CDS were classified as insurance-like products, not derivatives, allowing AIG to avoid derivative capital and margin rules
- When collateral calls came, AIG had no reserves
- $85 billion initial bailout; >$180 billion total government support
- **Source: Ch 9**

**Credit Suisse / Archegos — 2021**
- Archegos used total return swaps (TRS) to build equity positions without triggering beneficial ownership disclosure thresholds
- TRS structure allowed 5-8x leverage while remaining invisible to other prime brokers and regulators
- Credit Suisse had $20 billion exposure to a single family office
- $5.5 billion loss
- **Source: Ch 6, Ch 8**

**Standard Chartered — Sanctions — 2012**
- U-turn stripping: payment messages altered to remove references to sanctioned entities
- Transactions structured to appear compliant with US sanctions while actually processing $250 billion for Iranian clients
- $667 million in fines
- **Source: Ch 1, Ch 3, Ch 9**

**Deutsche Bank — Mirror Trading — 2011-2015**
- $10 billion in mirror trades used to move money out of Russia
- Trades structured as legitimate equity transactions: buy in Moscow, sell identical position in London
- Regulatory arbitrage between Russian and UK/US jurisdictions
- $630 million in fines
- **Source: Ch 4, Ch 9**

**Bankia — 2012**
- Seven cajas merged to meet new capital requirements
- The merger was partly driven by regulatory pressure to consolidate
- But merging seven weak institutions did not create a strong one — the CRE concentration simply aggregated
- €22.4 billion bailout
- **Source: Ch 12**

**UBS — French Tax — 2019-2025**
- Initially fined €4.5 billion by French court for helping clients evade taxes
- Reduced to €1.8 billion on appeal
- Settled for €835 million in 2025
- Cross-border structuring between Swiss and French tax regimes
- **Source: Ch 16**

---

### Failure Mode 7: Emerging Risk Blindness

**Definition:** The failure to identify risks that are new, evolving, or outside the institution's historical experience — including technology risk, cyber risk, climate risk, geopolitical risk, and novel financial instruments.

**Pattern:** The risk identification process is backward-looking: it identifies risks that have materialized before. Emerging risks — those with limited historical data, uncertain transmission channels, or novel characteristics — are systematically missed because the process does not have mechanisms to look forward.

#### Case Studies

**Wirecard — 2020**
- €1.9 billion in fabricated cash balances
- A fintech company with banking license — outside traditional banking regulatory oversight patterns
- Short-sellers and journalists flagged concerns from 2015 onward — BaFin's response was to investigate the journalists, not the company
- Emerging risk: the business model (payment processing with complex third-party acquiring structures in Asia) was new and poorly understood by regulators
- CEO Markus Braun arrested; COO Jan Marsalek fled
- **Source: Ch 1, Ch 6, Ch 14**

**Equifax — 2017**
- 147 million consumer records breached
- Total costs: $1.38 billion ($575-700 million settlement + remediation)
- Apache Struts vulnerability had a patch available for months before the breach
- Cyber risk was an emerging risk category that was inadequately integrated into enterprise risk identification
- **Source: Ch 14**

**Knight Capital — 2012**
- $440-460 million loss in 45 minutes
- Dormant code activated by a software deployment error
- $365 million in equity — effectively wiped out
- Technology risk (specifically algorithmic trading deployment risk) was an emerging risk that traditional operational risk frameworks did not capture
- **Source: Ch 14**

**Capital One — 2019**
- 100 million+ customer records breached
- $80 million OCC penalty
- Cloud configuration error exploited by a former AWS employee
- Emerging risk at the intersection of cloud migration and insider threat
- **Source: Ch 5**

**Punjab National Bank — 2018**
- $2 billion fraud via SWIFT messaging system over 7 years
- SWIFT system was not integrated with the bank's core banking system (CBS)
- 13,000+ fraudulent SWIFT messages sent without CBS authorization
- Technology integration risk — the gap between two systems created a control void that persisted for years
- **Source: Ch 14**

**CBA Australia — 2018**
- AUD 700 million AUSTRAC fine — largest in Australian history
- 53,000+ unreported suspicious transactions
- Intelligent Deposit Machines (IDMs) deployed without adequate anti-money laundering controls
- New technology (IDMs) created a new risk (anonymous large cash deposits) that the AML framework did not anticipate
- **Source: Ch 13**

**SVB — 2023**
- The speed of a social-media-driven digital bank run was an emerging risk
- $42 billion withdrawn in a single day via mobile banking
- Traditional liquidity stress tests modeled slower deposit outflow scenarios
- The combination of concentrated depositor base + social media communication + digital banking created a novel speed-of-withdrawal risk
- **Source: Ch 13**

**Lloyd's of London — 9/11 — 2001**
- $5.6 billion in claims from September 11 attacks
- Terrorism concentration risk in a single city block was an emerging risk that traditional property insurance did not model
- Led to fundamental restructuring of terrorism risk coverage (TRIA in US)
- **Source: Ch 16**

---

### Failure Mode 8: Correlation Surprise

**Definition:** The failure to identify hidden correlations between apparently independent risks — risks that appear diversified in normal conditions but become highly correlated in stress, producing simultaneous losses across portfolios, business lines, or risk types.

**Pattern:** The institution believes it is diversified because it holds multiple asset classes, operates in multiple geographies, or has multiple business lines. In stress, hidden correlations emerge: all property markets fall together, all wholesale funding freezes simultaneously, all counterparties face the same pressure. The "diversification" was an illusion.

#### Case Studies

**LTCM — 1998**
- Convergence trades across global fixed income markets assumed low or negative correlations
- Russian crisis triggered simultaneous "flight to quality" across all markets
- Correlations spiked to near 1.0 across previously uncorrelated positions
- $553 million single-day loss vs $35 million VaR (implied correlation assumption was catastrophically wrong)
- **Source: Ch 1, Ch 9, Ch 16**

**HSH Nordbank — 2008-2015**
- €10 billion state guarantee + €3 billion capital
- Believed shipping exposure and subprime exposure provided diversification
- Both collapsed simultaneously during GFC — shipping demand collapsed because trade collapsed because of the financial crisis
- Classic hidden correlation: the same macroeconomic shock drove both asset classes
- **Source: Ch 8, Ch 10**

**Fortis / ABN AMRO — 2008**
- €71 billion acquisition of ABN AMRO funded by Fortis capital and wholesale markets
- Correlation between acquisition integration risk, wholesale funding risk, and asset quality risk
- All three materialized simultaneously: integration distracted management, wholesale markets froze, acquired assets deteriorated
- €11.2 billion rescue
- **Source: Ch 10**

**Icelandic Banks — 2008**
- Cross-bank correlation: all three institutions had the same business model (cross-border wholesale funding + aggressive overseas lending)
- When one failed, counterparty confidence in all three collapsed immediately
- Systemic correlation: three "independent" banks were actually running identical strategies
- **Source: Ch 1, Ch 10**

**Lehman Brothers — 2008**
- Correlation between real estate exposure, leverage, counterparty confidence, and funding
- When real estate declined, leverage amplified losses, counterparties withdrew, and funding evaporated — all simultaneously
- Each risk category made every other category worse — a correlation cascade
- **Source: Ch 10**

**AIG — 2008**
- CDS portfolio assumed low correlation across mortgage pools
- When housing declined nationally (not just regionally), all CDS exposures triggered simultaneously
- $527 billion notional — correlated default across the entire portfolio
- **Source: Ch 9**

**GFC Broadly — 2007-2009**
- 63 events in the ILD from this period, totaling approximately $1.5 trillion in losses
- The defining feature was correlation surprise: housing, structured credit, wholesale funding, counterparty risk, and sovereign risk all became correlated
- Institutions that believed they were diversified across these categories found that all categories moved together
- **Source: Ch 1, Ch 16**

**SVB + Signature Bank — 2023**
- Two institutions with different business models (tech deposits vs crypto deposits) failed within days of each other
- Hidden correlation: both were vulnerable to rapid digital deposit flight, both had concentrated depositor bases, both operated in sectors experiencing simultaneous stress
- **Source: Ch 13**

---

### Failure Mode 9: Operational Risk Underestimation

**Definition:** The systematic underestimation of operational risk — including control failures, technology failures, fraud, and process breakdowns — either by excluding it from risk identification or by treating it as immaterial compared to credit and market risk.

**Pattern:** The risk identification process focuses on credit risk (loan losses) and market risk (trading losses) because these are quantifiable and familiar. Operational risk — people, processes, systems, and external events — is treated as a residual category. When operational failures occur, they are often catastrophic because no controls were designed to prevent them.

#### Case Studies

**Barings — 1995**
- Nick Leeson destroyed the bank through unauthorized trading
- Internal audit identified the segregation-of-duties failure (Leeson controlled both front and back office)
- The finding was not acted upon — operational risk governance was weak
- **Source: Ch 1**

**Societe Generale / Kerviel — 2008**
- €4.9 billion loss from unauthorized trading
- €50 billion in hidden positions accumulated by a junior trader
- Kerviel exploited his knowledge of back-office controls (gained from previous role)
- 107 risk alerts generated — none properly investigated
- **Source: Ch 3**

**AIB / Rusnak — 2002**
- $691 million in FX trading losses at Allfirst (AIB's US subsidiary)
- John Rusnak fabricated options to hide losses for years
- Operated for over 3 years before detection
- Sentenced to 7.5 years in prison
- Control failure: inadequate confirmation processes for OTC FX options
- **Source: Ch 7**

**UBS / Adoboli — 2011**
- $2.3 billion in unauthorized trading losses
- Kweku Adoboli exploited gaps in the ETF desk's booking system
- £29.7 million FSA fine; Adoboli sentenced to 7 years
- Similar pattern to Barings and SocGen: trader understood the control environment and found the gaps
- **Source: Ch 7**

**Knight Capital — 2012**
- $440-460 million in 45 minutes from a software deployment error
- Dormant code activated, sending millions of erroneous orders
- $365 million in equity — firm effectively destroyed
- No kill switch or circuit breaker for deployment failures
- **Source: Ch 14**

**Punjab National Bank — 2018**
- $2 billion fraud over 7 years
- SWIFT messaging system disconnected from core banking system
- 13,000+ fraudulent SWIFT messages sent without CBS authorization
- Operational control failure: two critical systems were not integrated
- **Source: Ch 14**

**Equifax — 2017**
- 147 million consumer records breached
- Known vulnerability (Apache Struts) went unpatched for months
- Total costs: $1.38 billion
- Operational risk underestimation: the IT vulnerability scanning process was inadequate
- **Source: Ch 14**

**CBA Australia — 2018**
- AUD 700 million fine
- 53,000+ suspicious transactions unreported
- Intelligent Deposit Machines deployed without adequate AML controls
- Operational risk: the technology deployment process did not include AML risk assessment
- **Source: Ch 13**

**Deutsche Bank — Mirror Trading — 2011-2015**
- $10 billion in suspicious transactions
- $630 million in fines
- The mirror trading pattern was detectable in transaction data but AML monitoring was inadequate
- Operational risk: compliance monitoring systems were not calibrated for this pattern
- **Source: Ch 4, Ch 9**

**Lloyds / PPI — 1990s-2019**
- £50 billion+ in industry-wide PPI (payment protection insurance) remediation
- Lloyds alone: approximately £22 billion
- PPI was sold as an operational add-on to lending products with inadequate suitability controls
- Operational risk embedded in the sales process — identified only decades later
- **Source: Ch 4, Ch 16**

---

### Failure Mode 10: Complacency / Normalisation of Deviance

**Definition:** The gradual acceptance of deteriorating conditions, weakening controls, or increasing risk as "normal" — because the institution has experienced no losses recently, because peers are doing the same thing, or because the risk has been on the register for so long that it no longer triggers concern.

**Pattern:** The institution has a period of profitability and stability. Risk indicators deteriorate slowly — concentration increases, controls weaken, governance becomes less rigorous — but no losses occur. The absence of losses is interpreted as evidence that the strategy is sound, rather than as a period of accumulating unrealized risk. When the loss finally materializes, it is catastrophic.

#### Case Studies

**SVB — 2023**
- Interest rate risk was on the register for years — it was "known"
- HTM portfolio grew from manageable to $91 billion without triggering governance intervention
- Unrealized losses grew to $15.2 billion (nearly equal to $16 billion equity) gradually over 18 months
- CRO position vacant for 8 months — the absence of a CRO became normalized
- Each quarter, the risk was present, documented, and not acted upon — normalisation of deviance
- **Source: Ch 1, Ch 13**

**Signature Bank — 2023**
- $110 billion in assets, heavy crypto concentration
- Concentration grew gradually over several years as crypto deposits flowed in
- No re-identification process questioned whether the deposit profile had changed materially
- **Source: Ch 13**

**Wachovia / Golden West — 2006-2008**
- $122 billion in option ARMs acquired via Golden West
- During the acquisition, housing prices were still rising — the ARMs were "performing"
- No losses initially, which was taken as validation of the strategy
- Losses of approximately $25 billion when housing prices declined
- **Source: Ch 9**

**Anglo Irish Bank — 2000s**
- CRE lending concentration grew over a decade during the Celtic Tiger boom
- Each year of no losses reinforced confidence in the strategy
- €29.3 billion in ultimate taxpayer cost
- **Source: Ch 1, Ch 5**

**HBOS — 2000s**
- Aggressive corporate and commercial real estate lending grew throughout 2000s
- Peter Cummings' division generated strong returns year after year
- Paul Moore's warnings (2004-2005) dismissed as alarmist — the business was profitable
- Losses exceeded £10 billion when the cycle turned
- **Source: Ch 3**

**Countrywide Financial — 2000s**
- Largest mortgage originator in the US
- Steadily loosened underwriting standards throughout early 2000s
- Each year of rising house prices validated the strategy
- Each loosening step was marginal — no single decision was catastrophic
- Cumulative result: $40 billion+ in losses for Bank of America after acquisition
- **Source: Ch 1, Ch 16**

**American Savings & Loan — 1980s**
- $5.4 billion in losses
- S&L crisis pattern: institutions held long-duration fixed-rate mortgages funded by short-term deposits
- The interest rate mismatch was structural and visible for years
- Losses only materialized when rates rose sharply — until then, the mismatch was "just how S&Ls work"
- **Source: Ch 16**

**Dexia — 2008-2011**
- Failed twice
- After the first bailout (€6.4B), the fundamental business model (long-dated assets, short-term funding) was not changed
- The first failure was treated as a liquidity event, not a structural flaw
- When the same dynamic recurred in 2011, Dexia had to be broken up entirely
- Normalisation: surviving the first crisis created complacency about the second
- **Source: Ch 12**

**ICBC — Ongoing**
- Policy-directed lending to state-owned enterprises — a structural feature, not a discretionary strategy
- The absence of visible losses does not mean the risk is absent; it means the risk is being subsidized by the state
- Risk identification processes that rely on loss history will never flag this risk
- **Source: Ch 16**

---

## PART 3: CROSS-CUTTING PATTERNS

### Pattern A: Multiple Failure Modes Per Event
Almost no case study involves only one failure mode. The most catastrophic failures involve 3-5 simultaneous failure modes:

| Institution | Primary | Secondary | Tertiary |
|-------------|---------|-----------|----------|
| Lehman | Model Overreliance | Governance Bypass | Regulatory Arbitrage |
| AIG | Model Overreliance | Regulatory Arbitrage | Correlation Surprise |
| Credit Suisse (Archegos) | Concentration Blindness | Governance Bypass | Regulatory Arbitrage |
| SVB | Concentration Blindness | Complacency | Liquidity Illusion |
| LTCM | Model Overreliance | Correlation Surprise | Liquidity Illusion |
| Wells Fargo | Cultural Suppression | Governance Bypass | Operational Risk Underestimation |
| Northern Rock | Liquidity Illusion | Concentration Blindness | Complacency |
| Wirecard | Emerging Risk Blindness | Cultural Suppression | Operational Risk Underestimation |
| Icelandic Banks | Concentration Blindness | Correlation Surprise | Liquidity Illusion |
| Barings | Governance Bypass | Operational Risk Underestimation | Cultural Suppression |

### Pattern B: The 15-Year Cycle
The book identifies a recurring ~15-year cycle of crisis, reform, complacency, and repeat:
- **S&L Crisis (1980s)** → Basel I reforms
- **LTCM / Asian Crisis (1997-1998)** → Basel II development
- **GFC (2007-2009)** → Basel III, Dodd-Frank, SR 15-18
- **SVB / Credit Suisse (2023)** → Basel III.1 / CRR III reforms
- Each cycle: concentration blindness and complacency repeat in new asset classes

### Pattern C: "The Risk Was on the Register"
The book's most powerful finding: in most cases, the risk that destroyed the institution was technically identified somewhere in the risk inventory. The failure was in:
1. Assessment (not understanding severity)
2. Governance (not escalating or acting)
3. Connection (identification not linked to capital, strategy, or limits)
4. Freshness (the identification was stale — no re-identification process)

### Pattern D: Geographic and Temporal Clustering
- **GFC cluster (2007-2009):** 63 events, ~$1.5 trillion — dominated by concentration blindness, model overreliance, and correlation surprise
- **European sovereign/banking (2010-2015):** Dexia, Bankia, SNS Reaal, Alpha Bank, Bank of Cyprus, Banca MPS — dominated by concentration blindness and regulatory arbitrage
- **Conduct failures (2012-2020):** Deutsche Bank, Standard Chartered, Wells Fargo, Danske Bank, CBA, Wirecard — dominated by cultural suppression, governance bypass, and operational risk underestimation

### Pattern E: Size Amplifies Everything
The largest failures (Lehman $639B bankruptcy, AIG >$180B bailout, Citigroup $45B TARP) all involved multiple failure modes operating simultaneously at massive scale. The interaction between failure modes is multiplicative, not additive — governance bypass enables concentration to grow, which model overreliance fails to flag, which complacency allows to persist.

---

## PART 4: METHODOLOGY CONNECTIONS

### How Each Phase Addresses Specific Failure Modes

**Phase 1: Foundation Setting**
- **Addresses:** Emerging Risk Blindness, Complacency
- PESTLE analysis forces forward-looking scan beyond historical experience
- Risk culture assessment identifies suppression patterns before they cause harm
- Internal context analysis identifies structural vulnerabilities (funding model, business model concentration)
- Starting universe forces the institution to define what is IN scope — preventing blind spots

**Phase 2: Dual-Track Identification**
- **Addresses:** Concentration Blindness, Cultural Suppression, Operational Risk Underestimation
- Top-down (SWIFT workshops): senior management identifies strategic and emerging risks that bottom-up processes miss
- Bottom-up (templates): business units identify operational and process risks invisible to senior management
- Reconciliation: the gap between top-down and bottom-up views reveals hidden concentrations, blind spots, and suppressed risks
- Delphi method: anonymous assessment prevents groupthink and cultural pressure

**Phase 3: Assessment**
- **Addresses:** Model Overreliance, Correlation Surprise, Complacency
- Four-dimensional scoring (Impact, Likelihood, Vulnerability, Speed of Onset) prevents over-reliance on any single metric
- Data quality ratings force acknowledgment when assessments are based on thin data
- Interaction matrix identifies hidden correlations between risks
- Concentration analysis explicitly maps exposure concentrations across the portfolio
- Bow-tie analysis traces cause-to-consequence pathways, revealing control gaps

**Phase 4: Documentation**
- **Addresses:** Operational Risk Underestimation, Governance Bypass
- 14-field risk inventory requires structured documentation of every identified risk
- Risk profiles create detailed records that prevent risks from being "lost" in generic categories
- Standardized format enables comparison, aggregation, and audit

**Phase 5: Integration**
- **Addresses:** Regulatory Arbitrage Failure, Governance Bypass, Concentration Blindness
- ICAAP/ILAAP integration connects identification to capital and liquidity adequacy
- Strategic planning integration forces risk identification into business decisions
- Board reporting integration ensures governance sees the full risk picture
- Gap analysis between regulatory capital and economic risk identifies arbitrage

**Phase 6: Ongoing Cycle**
- **Addresses:** Complacency, Emerging Risk Blindness, Liquidity Illusion
- Quarterly re-identification prevents staleness and drift
- Event-driven updates respond to market changes, near-misses, and emerging threats
- Monthly KRI monitoring provides continuous surveillance between formal identification cycles
- Internal audit assurance provides independent verification that the process is functioning

### The Central Methodological Insight
The book argues that the 179 failures are not primarily failures of risk measurement, hedging, or capital — they are failures of risk identification. The risks existed; the institutions failed to identify them, or identified them but failed to connect identification to governance, assessment, and action. A structured, complete, and continuously refreshed risk identification process — connected to governance — would have flagged the majority of these failure modes before they became fatal.

---

## PART 5: REGULATORY AND ACADEMIC REFERENCES

### Regulatory Frameworks Cited

| Framework | Issuer | Key Relevance |
|-----------|--------|---------------|
| ISO 31000:2018 | ISO | Risk management principles; identification as foundational step |
| ISO 31010:2019 | ISO | Risk assessment techniques (SWIFT, Delphi, FMEA, bow-tie) |
| COSO ERM 2017 | COSO | Enterprise risk framework; four objective categories used in ILD classification |
| BCBS 328 (Principle 7) | Basel Committee | "Banks should have a comprehensive risk identification process" |
| BCBS 239 | Basel Committee | Risk data aggregation and reporting principles |
| BCBS PSMOR | Basel Committee | Principles for Sound Management of Operational Risk |
| Fed SR 15-18 | Federal Reserve | Large financial institution supervision guidance; risk identification requirements |
| Fed SR 11-7 | Federal Reserve | Model risk management guidance |
| PRA SS31/15 | Bank of England | Internal capital adequacy assessment process |
| OCC Heightened Standards | OCC | Risk governance expectations for large banks |
| EBA Guidelines | EBA | SREP, ICAAP, ILAAP guidance |
| DORA | EU | Digital Operational Resilience Act — technology and cyber risk |
| CRR III / CRD VI | EU | Capital Requirements Regulation/Directive (Basel III.1 implementation) |
| FCA Conduct Questions | FCA | Conduct risk identification |
| SM&CR | FCA/PRA | Senior Managers & Certification Regime — personal accountability |

### Key Regulatory Findings Cited
- Fed SR 15-18 requires "comprehensive identification of all material risks"
- BCBS Principle 7: identification should be "forward-looking" and not rely solely on historical loss data
- PRA supervisory findings consistently cite inadequate risk identification as a root cause of capital and liquidity assessment failures
- OCC Heightened Standards require "an effective process to identify, measure, monitor, and control risk"

### ILD Classification Framework
The book classifies each of the 179 events along multiple dimensions:
1. **Risk type** (credit, market, operational, conduct, liquidity, strategic)
2. **COSO objective** (strategic, operations, compliance, reporting)
3. **Failure mode** (one or more of the 10 failure modes)
4. **Primary cause** (identification failure, assessment failure, governance failure, or combination)
5. **Loss amount** (direct financial loss, bailout cost, fine, or shareholder value destruction)
6. **Geography and period**

---

## PART 6: ADDITIONAL CASE STUDIES (NOT ASSIGNED TO A SINGLE PRIMARY FAILURE MODE)

These cases appear in the book with enough detail for citation but span multiple failure modes roughly equally:

**Enron — 2001**
- $74 billion in shareholder value destroyed
- Off-balance-sheet SPEs, mark-to-market accounting manipulation
- Failure modes: Governance Bypass, Cultural Suppression, Regulatory Arbitrage, Operational Risk Underestimation
- **Source: Ch 1**

**WorldCom — 2002**
- $180 billion in shareholder value destroyed
- $11 billion in fraudulent accounting
- Failure modes: Governance Bypass, Cultural Suppression, Operational Risk Underestimation
- **Source: Ch 1**

**Fannie Mae / Freddie Mac — 2008**
- Government-sponsored enterprises placed into conservatorship
- Massive concentration in US residential mortgage market
- Failure modes: Concentration Blindness, Model Overreliance, Regulatory Arbitrage
- **Source: Ch 1**

**NAB Australia — 2020**
- AUSTRAC proceedings for AML failures
- Similar pattern to CBA — technology deployment without adequate risk assessment
- **Source: Ch 13**

**SNB StabFund — 2008**
- $39 billion stabilization fund for UBS toxic assets
- Swiss National Bank created the fund to absorb UBS's structured credit positions
- **Source: Ch 7**

**Co-operative Bank — 2013**
- £1.5 billion rescue
- Britannia Building Society merger brought unexpected CRE exposures
- Governance failure: board lacked financial expertise
- **Source: Ch 3**

---

## PART 7: KEY STATISTICS FOR THE ARTICLE

### Headline Numbers
- **179** bank loss events in the database
- **30** countries represented
- **Six decades** of data
- **$2.3 trillion** in aggregate losses
- **10** recurring failure modes explain the vast majority
- **63** events from the GFC alone (~$1.5 trillion)
- **Most common failure mode:** Concentration Blindness (present in the majority of the largest failures)
- **Most lethal combination:** Concentration Blindness + Model Overreliance + Governance Bypass (present in Lehman, AIG, Citigroup, Credit Suisse/Archegos)

### By Failure Mode — Approximate Frequency Across ILD
(Based on case study analysis across all 16 chapters)
1. **Concentration Blindness** — present in ~60-70% of the largest failures
2. **Model Overreliance** — present in ~40-50%, especially GFC-era
3. **Governance Bypass** — present in ~50-60%, across all eras
4. **Cultural Suppression** — present in ~30-40%, often co-occurs with Governance Bypass
5. **Liquidity Illusion** — present in ~30-40%, especially GFC-era
6. **Regulatory Arbitrage Failure** — present in ~25-35%, especially structured products era
7. **Emerging Risk Blindness** — present in ~20-30%, increasing in post-2015 cases
8. **Correlation Surprise** — present in ~25-35%, especially crisis periods
9. **Operational Risk Underestimation** — present in ~35-45%, especially conduct and technology cases
10. **Complacency** — present in ~50-60%, present in almost every case as an enabling condition

### Largest Single Failures in the ILD
| Institution | Year | Loss/Cost | Primary Failure Modes |
|-------------|------|-----------|----------------------|
| Lehman Brothers | 2008 | $639B bankruptcy | Model, Governance, Arbitrage |
| AIG | 2008 | >$180B bailout | Model, Arbitrage, Correlation |
| Citigroup | 2008 | $45B TARP + $301B guarantee | Model, Arbitrage, Liquidity |
| Hypo Real Estate | 2008 | €102B guarantee | Liquidity, Concentration, Model |
| Merrill Lynch | 2008 | $51.8B write-downs | Model, Concentration, Complacency |
| Anglo Irish Bank | 2009 | €29.3B taxpayer cost | Concentration, Governance, Complacency |
| Bankia | 2012 | €22.4B bailout | Concentration, Arbitrage, Complacency |
| SVB | 2023 | $209B assets at failure | Concentration, Complacency, Liquidity |
| UBS | 2008 | $37.4B write-downs | Model, Concentration |
| Credit Suisse (Archegos) | 2021 | $5.5B loss | Concentration, Governance, Arbitrage |

---

## PART 8: QUOTABLE PASSAGES FROM THE BOOK

(For use in the article — paraphrase, do not quote verbatim at length)

- The risk register had become a "compliance artefact rather than a management tool" (Ch 1)
- The same 10 failure modes recur with "remarkable consistency" across decades and geographies (Ch 1)
- "The risk that kills the institution is usually already on the register" — the problem is not identification in the narrow sense but the disconnection between identification and governance (Ch 1, Ch 16)
- Risk identification in most banks is "a backward-looking exercise that identifies risks that have already materialised elsewhere" (Ch 6)
- The ILD demonstrates that "risk identification failure is the root cause of the majority of bank failures, not risk measurement failure" (Ch 16)
- The 15-year cycle: "Each generation of bankers discovers the same failure modes in new asset classes" (Ch 16)
- Concentration blindness is "the single most common precursor to catastrophic bank failure" (Ch 16)
- The interaction between failure modes is "multiplicative, not additive" (Ch 10)

---

## PART 9: ARTICLE STRUCTURE SUGGESTIONS

### Proposed Opening Hook
Lead with the SVB paradox: a $209 billion bank that had interest rate risk on its register for years, had unrealized losses nearly equal to its total equity, and still collapsed — not because the risk was unidentified but because identification had become a compliance checkbox disconnected from governance and action.

### Proposed Evidence Structure
1. **The Database**: What 179 failures across 30 countries tell us (ILD overview, key statistics)
2. **The 10 Failure Modes**: Brief description of each with 2-3 compelling examples per mode
3. **The Interaction Problem**: Why failures involve 3-5 modes simultaneously (use Lehman, AIG, SVB as examples of multi-mode failure)
4. **The 15-Year Cycle**: S&L → LTCM → GFC → SVB — same modes, new asset classes

### Proposed Monday Morning Steps
1. Map your top 10 risks against the 10 failure modes — which modes are you blind to?
2. Test for concentration across dimensions (counterparty, sector, geography, funding source) — not just within each silo
3. Ask: "Is this risk on the register because we genuinely assess it, or because it has always been there?"
4. Run a correlation stress test: what happens if your top 3 risks materialise simultaneously?
5. Check when your risk register was last materially changed — if nothing has changed in 12 months, something is wrong

### Suggested CTA
Option A: Assessment + Toolkit (default for this article)
