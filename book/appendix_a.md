# Appendix A: Industry Loss Database Methodology

---

## Purpose and Scope

The Industry Loss Database is a structured inventory of 179 institutional loss events spanning six decades (1930s-2020s), 35 countries, and aggregate estimated losses exceeding $2.3 trillion (USD equivalent). It serves as the empirical foundation for the risk identification methodology described in this book.

The database was constructed to answer a single question: *Were the risks that destroyed or severely damaged these institutions identifiable before the losses materialised?* For each entry, the answer was yes. The database therefore functions as both an evidence base for why systematic risk identification is necessary and a diagnostic tool for identifying recurring patterns of risk identification failure.

The database is cited throughout the book. Chapter 1 (Why Banks Fail at Risk Identification) introduces the ten failure modes derived from the database. Chapter 4 (The Risk Taxonomy) uses it for the Taxonomy Test. Chapters 5 through 14 reference specific entries as illustrations of methodological principles. Chapter 16 (Lessons from Bank Failures) presents the full statistical analysis.

This appendix documents the database's construction methodology: what qualifies as an entry, where the data comes from, how losses are defined and standardised, how events are classified, and what limitations apply. Section 9 contains the complete 179-entry event list.

---

## Inclusion Criteria

An event qualifies for inclusion in the database if it meets all of the following criteria:

1. **Institutional scope.** The event involved a financial institution (bank, insurer, broker-dealer, asset manager, financial services company) or a non-financial corporation whose failure was primarily driven by financial risk management failures (e.g. Enron, Parmalat, Wirecard).

2. **Material loss.** The event resulted in a quantifiable financial loss — whether through direct write-downs, bailout costs, fines, settlements, bankruptcy claims, or market capitalisation destruction — that was material relative to the institution's size.

3. **Risk identification relevance.** The loss was caused or substantially amplified by a failure in risk identification — meaning that the risk was identifiable before it crystallised, using information and techniques available at the time, but the institution's risk identification process either failed to detect it, detected it but failed to escalate it, or escalated it but was overruled by governance failures.

4. **Public documentation.** Sufficient public information exists to reconstruct the risk event, the identification failure, the loss amount, and the outcome. Sources include regulatory enforcement actions, court filings, parliamentary inquiries, government commission reports, central bank publications, annual reports, SEC filings, and investigative journalism by recognised outlets.

Events are not excluded based on geography, institution size, or regulatory jurisdiction. The database deliberately includes events from emerging and frontier markets alongside advanced economies, and small community banks alongside global systemically important institutions, because risk identification failure is a structural problem that transcends scale and sophistication.

Some institutions appear more than once where they experienced multiple distinct risk events (e.g. UBS appears with subprime exposure, unauthorised trading, and tax evasion entries; Bradford & Bingley appears with three distinct but interrelated risk dimensions). Each entry represents a distinct risk identification failure, even where the events are temporally or causally connected.

---

## Data Sources

The database draws on the following categories of public sources:

**Regulatory enforcement actions and supervisory reports**
- Basel Committee on Banking Supervision publications
- US Securities and Exchange Commission (SEC) enforcement releases
- US Department of Justice (DOJ) press releases and deferred prosecution agreements
- UK Financial Conduct Authority (FCA) / former Financial Services Authority (FSA) enforcement notices
- European Central Bank (ECB) supervisory decisions
- European Banking Authority (EBA) stress test disclosures
- Australian Prudential Regulation Authority (APRA) and AUSTRAC enforcement actions
- German BaFin, Swiss FINMA, and other national regulatory authority publications

**Government commission and inquiry reports**
- US Financial Crisis Inquiry Commission (FCIC) final report (2011)
- UK Parliamentary Commission on Banking Standards (2013)
- Australian Royal Commission into Misconduct in the Banking, Superannuation and Financial Services Industry (2019)
- Irish Banking Inquiry reports
- Icelandic Special Investigation Commission report (2010)
- Various national parliamentary committee reports

**Court filings and legal proceedings**
- Criminal prosecution records (e.g. Enron, WorldCom, Madoff, Anglo Irish Bank)
- Civil litigation filings and settlement agreements
- Bankruptcy court records and examiner reports (e.g. Lehman Brothers examiner report)
- Class action settlement documentation

**Annual reports and financial disclosures**
- Institution annual reports and investor presentations
- Restatement filings and material event notifications
- Resolution authority reports and bridge bank documentation

**Investigative journalism and academic research**
- Financial Times, Wall Street Journal, Bloomberg investigative reporting
- Academic case studies published in peer-reviewed journals
- Central bank working papers on financial stability

No single source was relied upon for any entry. Where sources disagreed on loss amounts or event details, the most authoritative primary source was used (regulatory enforcement actions and court findings take precedence over journalistic estimates).

---

## Loss Definitions

The "Estimated Loss" field captures the most commonly cited measure of financial impact for each event. The definition of "loss" varies by event type:

**Direct financial losses.** Write-downs, trading losses, loan loss provisions, and impairments recognised in the institution's financial statements (e.g. UBS's $37.4 billion in subprime write-downs).

**Bailout and recapitalisation costs.** Government capital injections, central bank emergency lending facilities, and taxpayer-funded rescues (e.g. Fannie Mae and Freddie Mac's $187 billion in government support; RBS's £45.5 billion bailout).

**Fines and settlements.** Regulatory fines, DOJ/SEC settlements, and civil litigation payments (e.g. HSBC's $1.9 billion AML/sanctions settlement; Wells Fargo's $3 billion fake accounts settlement).

**Bankruptcy claims and market capitalisation destruction.** For institutions that failed entirely, the loss figure may represent total claims against the bankruptcy estate (e.g. WorldCom's $180 billion in claims) or the estimated cost to depositors, creditors, and guarantee schemes (e.g. Washington Mutual's $31.8 billion).

**Remediation and compensation costs.** Customer compensation programmes and remediation expenses (e.g. Lloyds' £22 billion in PPI redress; Equifax's $1.38 billion in consumer restitution and compliance costs).

Where an institution experienced multiple forms of loss (e.g. both direct write-downs and subsequent fines), the database records the single most material figure to avoid double-counting. Where multiple sources cite different loss amounts, the figure from the most authoritative regulatory or legal source is used.

Loss figures are recorded in their original currency alongside the USD-standardised equivalent. The original currency preserves the precision of the source data, while USD standardisation enables cross-event comparison.

---

## USD Standardisation

All loss figures are converted to US dollars using approximate exchange rates to enable cross-event comparison. The conversion methodology uses single indicative rates rather than date-specific market rates. This is a deliberate simplification: the database is an analytical tool for identifying risk identification failure patterns, not a precise financial accounting of losses.

The following approximate rates are applied:

| Currency | Code | Rate to USD |
|---|---|---:|
| US Dollar | USD | 1.00 |
| Euro | EUR | 1.18 |
| British Pound | GBP | 1.35 |
| Swiss Franc | CHF | 1.10 |
| Australian Dollar | AUD | 0.72 |
| Canadian Dollar | CAD | 0.78 |
| Singapore Dollar | SGD | 0.74 |
| Danish Krone | DKK | 0.16 |
| Swedish Krona | SEK | 0.11 |
| Chinese Yuan | CNY | 0.15 |
| Malaysian Ringgit | MYR | 0.24 |
| Russian Rouble | RUB | 0.013 |
| South African Rand | ZAR | 0.06 |

These rates represent approximate mid-market values and do not reflect the specific exchange rate prevailing at the time of each loss event. For events denominated in currencies that have experienced significant long-term depreciation (e.g. the Russian rouble), the USD equivalent may differ materially from the rate at the time of the event. This approximation is acceptable for the database's analytical purpose — identifying risk identification failure patterns — but the original-currency figures should be used for any financial analysis requiring precision.

The standardisation methodology is implemented in the build script (`build_loss_database.py`) and is fully reproducible.

---

## Risk Classification

Each event is classified along two dimensions: a risk taxonomy (L1 and L2 categories) and a COSO objective category.

### Risk Taxonomy

The L1 (top-level) classification aligns with Basel-convention risk categories:

| L1 Category | Description | Database Count | % of Total | Aggregate USD Loss |
|---|---|---:|---:|---:|
| Credit Risk | Losses from counterparty default, concentration, or credit quality deterioration | 75 | 41.9% | $1,360.8B |
| Operational Risk | Losses from inadequate or failed internal processes, people, systems, or external events — including fraud, IT failures, and governance breakdowns | 77 | 43.0% | $626.4B |
| Conduct Risk | Losses from misconduct, mis-selling, benchmark manipulation, or unethical business practices | 12 | 6.7% | $110.4B |
| Market Risk | Losses from adverse movements in market prices — including unauthorised trading and excessive leverage | 9 | 5.0% | $45.4B |
| Liquidity Risk | Losses from inability to meet obligations due to funding shortfalls or maturity mismatches | 3 | 1.7% | $23.9B |
| Strategic Risk | Losses from failed acquisitions, business model failures, or catastrophe events | 3 | 1.7% | $108.6B |

The L1 classification uses keyword-based assignment with manual override for ambiguous cases. The classification logic prioritises the *risk identification failure* rather than the proximate cause — for example, an accounting fraud that conceals credit losses is classified as Operational Risk (internal fraud) rather than Credit Risk, because the identification failure was in detecting the fraud, not in assessing the credit.

The L2 (sub-category) classification provides greater specificity within each L1 category, using Basel II event-type descriptors where applicable (e.g. "Internal Fraud — Executive Misconduct", "Credit Concentration — Real Estate", "Market Risk — Unauthorised Trading").

### COSO Objective Category

Each event is mapped to one of the four COSO ERM objective categories, indicating which institutional objective the risk identification failure most directly compromised:

| COSO Category | Description | Database Count | % of Total |
|---|---|---:|---:|
| Strategic | Failures related to the institution's fundamental business decisions, strategy, and risk appetite | 74 | 41.3% |
| Operations | Failures in the effectiveness and efficiency of operations, including internal controls and technology | 39 | 21.8% |
| Compliance | Failures to comply with applicable laws, regulations, and ethical standards | 34 | 19.0% |
| Reporting | Failures in the reliability of financial and non-financial reporting | 32 | 17.9% |

The dominance of the Strategic category (41%) is a significant finding: the most frequent risk identification failures occur at the level of the institution's fundamental business decisions — risks that only senior management and the Board can identify and own. This evidence supports the methodology's requirement for top-down identification workshops (Chapter 6) as a mandatory component alongside bottom-up risk capture.

---

## Failure Mode Analysis

Analysis of all 179 events reveals ten recurring failure modes — patterns that appear across different institutions, decades, and geographies with sufficient consistency to be considered structural rather than idiosyncratic. These failure modes were introduced in Chapter 1 and examined through the full evidence base in Chapter 16.

### 1. Concentration Blindness

Failure to identify portfolio or sector concentration as a systemic risk, often masked by diversification narratives or regulatory treatments that assign low risk weights to concentrated exposures.

*Examples: Northern Rock (75% wholesale funding), AIG ($527B CDS notional), Alpha Bank (Greek sovereign at zero risk weight), Bankia (€22.4B property lending bailout), Washington Mutual (subprime/option ARM concentration).*

### 2. Model Overreliance

Excessive trust in quantitative models — VaR, credit ratings, internal risk models — that failed to capture tail risks, correlation breakdowns, or regime shifts.

*Examples: LTCM (VaR-based diversification assumptions), Merrill Lynch (AAA-rated super-senior CDO retention), UBS (internal models aligned with front-office assumptions), Bear Stearns (CDO valuation models).*

### 3. Governance Bypass

Risk identification frameworks existed on paper but were circumvented by dominant individuals, concentrated authority, or governance structures that subordinated risk to revenue.

*Examples: Standard Chartered (compliance overruled on sanctions), Anglo Irish Bank (chairman concealed personal loans), HBOS (Group Head of Risk dismissed after warnings), Enron (CFO personally profited from SPE structures).*

### 4. Silo Thinking

Risk identification conducted within business lines or subsidiaries without enterprise-level aggregation, missing cross-portfolio exposures and compound concentrations.

*Examples: Lloyd's of London (cross-syndicate 9/11 aggregation), Citigroup (off-balance-sheet SIV exposure excluded from risk aggregation), Archegos (cross-prime-broker leverage invisible to each individual broker), Hypo Real Estate (post-Depfa-acquisition risk aggregation failure).*

### 5. Cultural Suppression

Institutional culture that discouraged challenge, dissent, or escalation of risk concerns — treating risk identification as an obstacle to business rather than a safeguard.

*Examples: Washington Mutual ("power of yes" culture), Wells Fargo ("eight is great" cross-selling targets), Olympus (CEO fired for questioning suspicious fees), Toshiba ("challenge" culture producing earnings manipulation).*

### 6. Emerging Risk Blindness

Failure to identify new risk types — conduct risk, cyber risk, structured product complexity — that fell outside the institution's existing taxonomy or historical experience.

*Examples: Lloyds PPI (conduct risk absent from taxonomy), UBS tax evasion (cross-border solicitation treated as normal distribution), Wirecard (fintech fraud patterns not recognised by traditional banking regulator), Capital One (cloud configuration risk not in operational risk framework).*

### 7. Control Environment Failure

Weak internal controls allowed fraud, unauthorised trading, or accounting manipulation to go undetected — often for years.

*Examples: Barings (segregation of duties violation), Société Générale (Kerviel's back-office knowledge exploited), PNB (SWIFT-CBS disconnect), Parmalat (forged bank confirmations over 15 years), WorldCom (capitalisation of operating expenses).*

### 8. Information Asymmetry

Key risk information held by front office, management, or individual actors but not shared with risk functions, the board, or external overseers.

*Examples: Lehman Brothers (Repo 105 concealing leverage), Banca Monte dei Paschi (derivative structures designed to avoid risk reporting thresholds), Credit Suisse Mozambique (transaction secrecy requirements), Refco (round-trip debt concealment).*

### 9. Regulatory Arbitrage Masking

Complex structures designed to optimise capital or regulatory treatment that simultaneously obscured the true risk profile from internal and external risk identification.

*Examples: Landesbank Sachsen (off-balance-sheet conduit with full liquidity backstop), Citigroup SIVs (liquidity puts excluded from risk framework), Bankia (merger of seven cajas presented as strengthening measure), WestLB (Landesbank state-guarantee model incentivising reach-for-yield).*

### 10. Complacency

Extended periods of low losses bred overconfidence and reduced vigilance in risk identification processes. The absence of loss was equated with the absence of risk.

*Examples: Bear Stearns (own hedge fund collapse not processed as warning signal), American Savings & Loan (deregulation euphoria), NAB (failed to learn from CBA's AML fine despite analogous gaps), Nordea and Swedbank (failed to learn from Danske Bank's AML scandal).*

---

## Summary Statistics

The following tables present the database's statistical profile. All figures are calculated from the complete 179-entry dataset. USD amounts use the approximate conversion rates documented in Section 5.

### By Risk Taxonomy (L1)

| Category | Count | % of Total | Aggregate USD Loss | % of Total Loss |
|---|---:|---:|---:|---:|
| Credit Risk | 75 | 41.9% | $1,360.8B | 59.8% |
| Operational Risk | 77 | 43.0% | $626.4B | 27.5% |
| Strategic Risk | 3 | 1.7% | $108.6B | 4.8% |
| Conduct Risk | 12 | 6.7% | $110.4B | 4.9% |
| Market Risk | 9 | 5.0% | $45.4B | 2.0% |
| Liquidity Risk | 3 | 1.7% | $23.9B | 1.1% |
| **Total** | **179** | **100%** | **$2,275.5B** | **100%** |

Credit risk is the largest category by dollar value ($1.37 trillion, 60% of total losses), reflecting the concentration of mortgage-related losses during the Global Financial Crisis. Operational risk is the largest by frequency (77 entries, 43%), driven by the breadth of fraud, governance, and conduct events across all decades.

### By Decade

| Decade | Count | % of Total | Aggregate USD Loss | % of Total Loss |
|---|---:|---:|---:|---:|
| 1930s | 1 | 0.6% | $7.6B | 0.3% |
| 1980s | 2 | 1.1% | $8.8B | 0.4% |
| 1990s | 6 | 3.4% | $14.6B | 0.6% |
| 2000s | 79 | 44.1% | $1,840.9B | 80.9% |
| 2010s | 84 | 46.9% | $372.0B | 16.3% |
| 2020s | 7 | 3.9% | $31.4B | 1.4% |
| **Total** | **179** | **100%** | **$2,275.5B** | **100%** |

The 2000s concentration (44% of entries, 81% of losses) reflects the Global Financial Crisis, which accounts for 63 events and approximately $1.5 trillion in aggregate losses within the 2007-2010 period alone. The 2010s show the highest event frequency (47%) but lower aggregate losses, reflecting the shift from credit-driven systemic failures to conduct, governance, and compliance events with individually smaller but collectively significant losses.

### By Region

| Region | Count | % of Total | Aggregate USD Loss |
|---|---:|---:|---:|
| Europe | 96 | 53.6% | $982.7B |
| North America | 53 | 29.6% | $1,230.3B |
| Asia-Pacific | 20 | 11.2% | $35.2B |
| Latin America | 5 | 2.8% | $8.0B |
| Africa | 4 | 2.2% | $15.2B |
| Middle East | 1 | 0.6% | $4.0B |
| **Total** | **179** | **100%** | **$2,275.5B** |

Europe has the highest event frequency (54%), reflecting the depth of the European banking crisis, the eurozone sovereign debt crisis, and the extensive post-crisis conduct enforcement actions. North America has the highest aggregate losses (54% of total loss value), driven by the scale of US GSE, investment bank, and mortgage lender failures during the GFC.

### By COSO Objective Category

| Category | Count | % of Total |
|---|---:|---:|
| Strategic | 74 | 41.3% |
| Operations | 39 | 21.8% |
| Compliance | 34 | 19.0% |
| Reporting | 32 | 17.9% |
| **Total** | **179** | **100%** |

### Global Financial Crisis Concentration (2007-2010)

| Metric | Value |
|---|---|
| Events | 63 |
| Aggregate USD Loss | ~$1.5 trillion |
| % of Database Events | 35.2% |
| % of Database Losses | ~66% |
| Dominant L1 Category | Credit Risk |
| Dominant COSO Category | Strategic |

### By Loss Magnitude

| Bucket | Count | % of Total | Aggregate USD Loss |
|---|---:|---:|---:|
| < $1B | 37 | 20.7% | $9.2B |
| $1-10B | 98 | 54.7% | $329.7B |
| $10-50B | 30 | 16.8% | $690.5B |
| $50B+ | 14 | 7.8% | $1,246.1B |
| **Total** | **179** | **100%** | **$2,275.5B** |

The distribution is heavily right-skewed: the 14 largest events (8% of entries) account for 55% of total losses. This concentration of loss in a small number of catastrophic events underscores the importance of identifying tail risks — the very risks that conventional risk identification processes are least equipped to detect.

---

## Full Event List

The following table contains all 179 entries in the Industry Loss Database, ordered alphabetically by institution name. Each entry includes the institution, country, year of the event, risk event description, L1 risk category, COSO objective category, estimated loss in original currency, and USD-standardised loss.

| # | Institution | Country | Year | Risk Event | L1 Category | COSO | Est. Loss (Original) | USD Loss |
|--:|---|---|---:|---|---|---|---|---:|
| 1 | Malaysia Development Berhad (Malaysia) | Malaysia | 2015 | Fraud and Money Laundering | Operational Risk | Compliance | $4.5 billion | $4.5B |
| 2 | Adelphia Communications | United States | 2002 | Internal Corporate Fraud | Operational Risk | Reporting | $2.5 billion | $2.5B |
| 3 | AIG (US) | United States | 2008 | Overexposure to Credit Default Swaps leading to liquidity crisis | Credit Risk | Strategic | $85 billion | $85.0B |
| 4 | Allied Irish Bank | Ireland | 2002 | Rogue Trader (John Rusnak) | Operational Risk | Operations | $691 million | $691M |
| 5 | Allied Irish Banks (Ireland) | Ireland | 2008 | Overexposure to Property Market leading to nationalization | Credit Risk | Strategic | €21 billion | $24.8B |
| 6 | Alpha Bank (Greece) | Greece | 2010 | Overexposure to Greek Sovereign Debt | Credit Risk | Strategic | ~€4 billion | $4.7B |
| 7 | AmBank (Malaysia) | Malaysia | 2015 | Involvement in 1MDB Scandal | Conduct Risk | Compliance | $700 million | $700M |
| 8 | AMCORE Financial | United States | 2010 | Overexposure to Commercial Real Estate | Credit Risk | Strategic | $3.8 billion | $3.8B |
| 9 | American International Group (AIG) | United States | 2005 | Accounting Fraud | Operational Risk | Reporting | $3.9 billion | $3.9B |
| 10 | American International Group (AIG) | United States | 2008 | Overexposure to Credit Default Swaps | Credit Risk | Strategic | $85 billion | $85.0B |
| 11 | American Savings & Loan | United States | 1988 | High-risk Mortgage Lending and Securities Investments | Credit Risk | Strategic | $5.4 billion | $5.4B |
| 12 | AMP (Australia) | Australia | 2018 | Fees for No Service | Conduct Risk | Compliance | AUD 600 million | $432M |
| 13 | Anglo Irish Bank | Ireland | 2010 | Hidden Loans and Accounting Fraud | Operational Risk | Reporting | €29.3 billion | $34.6B |
| 14 | ANZ (Australia) | Australia | 2018 | Interest Rate Rigging | Conduct Risk | Compliance | AUD 50 million | $36M |
| 15 | Arthur Andersen | United States | 2002 | Involvement in Enron Scandal and Failure in Ethical Responsibility | Conduct Risk | Compliance | $63 billion | $63.0B |
| 16 | Banca Carige (Italy) | Italy | 2018 | Governance Failures and High NPLs | Credit Risk | Operations | €1.9 billion | $2.2B |
| 17 | Banca Monte dei Paschi di Siena (Italy) | Italy | 2013 | Derivative and Accounting Fraud | Operational Risk | Reporting | €4 billion | $4.7B |
| 18 | Banca Monte dei Paschi di Siena (Italy) | Italy | 2013 | Derivative Mis-selling | Conduct Risk | Compliance | €730 million | $861M |
| 19 | Banca Popolare di Bari (Italy) | Italy | 2019 | Mismanagement and False Accounting | Operational Risk | Reporting | €1.4 billion | $1.7B |
| 20 | Banca Popolare di Vicenza (Italy) | Italy | 2017 | Fraud and Mismanagement | Operational Risk | Reporting | €11 billion | $13.0B |
| 21 | Banca Privada d'Andorra (Andorra) | Andorra | 2015 | Money Laundering | Operational Risk | Compliance | $1.2 billion | $1.2B |
| 22 | Banco de Valencia (Spain) | Spain | 2011 | Overexposure to Real Estate Loans | Credit Risk | Strategic | €4.5 billion | $5.3B |
| 23 | Banco do Brasil | Brazil | 2010 | Fraud and Overextension of Credit | Operational Risk | Operations | $1.2 billion | $1.2B |
| 24 | Banco Espirito Santo (Portugal) | Portugal | 2014 | Accounting Irregularities and Overexposure to Angola's Oil Sector | Operational Risk | Reporting | €3.6 billion | $4.2B |
| 25 | Banco Intercontinental (Dominican Republic) | Dominican Republic | 2003 | Fraud and Mismanagement | Operational Risk | Operations | $2.2 billion | $2.2B |
| 26 | Banco Nacional (Costa Rica) | Costa Rica | 2004 | Fraud and Money Laundering | Operational Risk | Compliance | $500 million | $500M |
| 27 | Banco Popular (Spain) | Spain | 2017 | Overexposure to Real Estate Loans | Credit Risk | Strategic | €3.5 billion | $4.1B |
| 28 | Banesto (Spain) | Spain | 1993 | Overexposure to Real Estate Investments | Credit Risk | Strategic | $3.8 billion | $3.8B |
| 29 | Bank of America | United States | 2008 | Overexposure to Subprime Mortgages | Credit Risk | Strategic | $64.8 billion | $64.8B |
| 30 | Bank of Cyprus | Cyprus | 2012 | Overexposure to Greek Debt | Credit Risk | Strategic | €1.9 billion | $2.2B |
| 31 | Bank of Moscow (Russia) | Russia | 2011 | Fraud and Mismanagement | Operational Risk | Operations | $9 billion | $9.0B |
| 32 | Bank of New England | United States | 1991 | Overexposure to Commercial Real Estate | Credit Risk | Strategic | $2.5 billion | $2.5B |
| 33 | Bankgesellschaft Berlin (Germany) | Germany | 2001 | Overexposure to Real Estate Market | Credit Risk | Strategic | €1.6 billion | $1.9B |
| 34 | Bankia (Spain) | Spain | 2012 | Overexposure to Real Estate Loans | Credit Risk | Strategic | €22.4 billion | $26.4B |
| 35 | Bankia (Spain) | Spain | 2012 | Misrepresentation of Financial Statements | Operational Risk | Reporting | €3.1 billion | $3.7B |
| 36 | BankUnited FSB | United States | 2009 | Overexposure to Option Adjustable-Rate Mortgages | Credit Risk | Strategic | $14 billion | $14.0B |
| 37 | Barclays (UK) | United Kingdom | 2012 | Libor Scandal | Conduct Risk | Compliance | £290 million | $392M |
| 38 | Barings Bank | United Kingdom | 1995 | Unauthorized and Unsuitable Trading | Market Risk | Operations | $1.3 billion | $1.3B |
| 39 | Bawag (Austria) | Austria | 2006 | Hidden Losses and Fraudulent Transactions | Operational Risk | Reporting | €1.6 billion | $1.9B |
| 40 | Bear Stearns | United States | 2008 | Overexposure to Mortgage-Backed Securities | Credit Risk | Strategic | $17.3 billion | $17.3B |
| 41 | Bear Stearns (US) | United States | 2008 | Overexposure to Collateralized Debt Obligations leading to insolvency | Credit Risk | Strategic | $3.2 billion | $3.2B |
| 42 | Bernard L. Madoff Investment Securities LLC | United States | 2008 | Ponzi Scheme | Operational Risk | Compliance | $64.8 billion | $64.8B |
| 43 | Bradford & Bingley (UK) | United Kingdom | 2008 | Overexposure to Buy-to-Let Mortgages | Credit Risk | Strategic | £11 billion | $14.9B |
| 44 | Bradford & Bingley (UK) | United Kingdom | 2008 | Overexposure to Subprime Mortgages | Credit Risk | Operations | £18 billion | $24.3B |
| 45 | Bradford & Bingley (UK) | United Kingdom | 2008 | Overexposure to Mortgage Market leading to insolvency | Credit Risk | Strategic | £11 billion | $14.9B |
| 46 | Caisse Centrale du Credit Immobilier de France (3CIF) | France | 2012 | Overexposure to Real Estate Market | Credit Risk | Strategic | €1.7 billion | $2.0B |
| 47 | Caixa Economica Federal (Brazil) | Brazil | 2015 | Corruption and Fraud | Operational Risk | Compliance | $2 billion | $2.0B |
| 48 | Caixa Geral de Depositos (Portugal) | Portugal | 2016 | Mismanagement and Risky Business Practice | Operational Risk | Operations | €1.86 billion | $2.2B |
| 49 | Caja Madrid (Spain) | Spain | 2013 | Credit Card Scandal and Mismanagement | Credit Risk | Operations | €15 billion | $17.7B |
| 50 | Capital One (US) | United States | 2019 | Data Breach exposing customer data | Operational Risk | Operations | $300 million | $300M |
| 51 | Carige Bank (Italy) | Italy | 2018 | Poor Governance and Risk Management | Operational Risk | Operations | €500 million | $590M |
| 52 | Carillion (UK) | United Kingdom | 2018 | Debt and Pension Deficit Mismanagement | Credit Risk | Strategic | £1.5 billion | $2.0B |
| 53 | CIT Group | United States | 2009 | Overexposure to Subprime Mortgages | Credit Risk | Strategic | $2.3 billion | $2.3B |
| 54 | Citigroup | United States | 2008 | Overexposure to Subprime Mortgages | Credit Risk | Strategic | $27.7 billion | $27.7B |
| 55 | Colonial BancGroup | United States | 2009 | Overexposure to Mortgage-backed Securities and Fraud | Operational Risk | Operations | $2.8 billion | $2.8B |
| 56 | Commerzbank (Germany) | Germany | 2008 | Overexposure to Subprime Mortgages | Credit Risk | Strategic | €6.5 billion | $7.7B |
| 57 | Commonwealth Bank (Australia) | Australia | 2018 | Money Laundering | Operational Risk | Compliance | AUD 700 million | $504M |
| 58 | Cooperative Bank (UK) | United Kingdom | 2013 | Mismanagement and Governance Failures | Operational Risk | Operations | £1.5 billion | $2.0B |
| 59 | Countrywide Financial | United States | 2008 | Subprime Mortgage Lending and Fraud | Operational Risk | Strategic | $8.7 billion | $8.7B |
| 60 | Credit Suisse (Switzerland) | Switzerland | 2008 | Overexposure to Subprime Mortgages | Credit Risk | Strategic | $2.85 billion | $2.9B |
| 61 | Credit Suisse (Switzerland) | Switzerland | 2016 | Mozambique's Hidden Debt Scandal | Credit Risk | Compliance | $2 billion | $2.0B |
| 62 | Credit Suisse (Switzerland) | Switzerland | 2020 | Spying Scandal | Operational Risk | Operations | CHF 5 million | $5.5M |
| 63 | Danske Bank (Denmark) | Denmark | 2018 | Money Laundering (200 billion) | Operational Risk | Compliance | DKK 1.5 billion | $240M |
| 64 | DBS (Singapore) | Singapore | 2008 | Overexposure to Lehman Brothers' Structured Products | Credit Risk | Operations | SGD 1.03 billion | $762M |
| 65 | Delta National Bank and Trust Company (US) | United States | 2008 | Subprime Mortgage Crisis | Credit Risk | Strategic | $500 million | $500M |
| 66 | Depfa Bank (Germany) | Germany | 2008 | Overexposure to Public Sector Funding during Financial Crisis | Credit Risk | Strategic | €2.6 billion | $3.1B |
| 67 | Deutsche Bank (Germany) | Germany | 2018 | Money Laundering | Operational Risk | Compliance | $630 million | $630M |
| 68 | Dewan Housing Finance Corporation (India) | India | 2019 | Fraud and Mismanagement | Operational Risk | Operations | $4 billion | $4.0B |
| 69 | Dexia (Belgium) | Belgium | 2011 | Overexposure to Greek Debt | Credit Risk | Strategic | €4 billion | $4.7B |
| 70 | Enron | United States | 2001 | Accounting Fraud | Operational Risk | Reporting | $74 billion | $74.0B |
| 71 | Equifax (US) | United States | 2017 | Data Breach | Operational Risk | Operations | $1.38 billion | $1.4B |
| 72 | Equitable Life (UK) | United Kingdom | 2000 | Over-optimistic valuation of liabilities leading to insolvency | Liquidity Risk | Strategic | £1.5 billion | $2.0B |
| 73 | Erste Group Bank (Austria) | Austria | 2014 | Overexposure to Eastern European Markets | Credit Risk | Strategic | €1.6 billion | $1.9B |
| 74 | Fannie Mae | United States | 2004 | Accounting Fraud | Operational Risk | Reporting | $11 billion | $11.0B |
| 75 | Fannie Mae and Freddie Mac | United States | 2008 | Overexposure to Mortgage-backed Securities | Credit Risk | Strategic | $187 billion | $187.0B |
| 76 | First National Bank of Keystone (USA) | United States | 1999 | Fraud and Operational Risk | Operational Risk | Operations | $800 million | $800M |
| 77 | Fortis (Belgium) | Belgium | 2008 | Inadequate Risk Management during ABN AMRO Acquisition | Strategic Risk | Strategic | $53 billion | $53.0B |
| 78 | Fortis (Belgium/Netherlands) | Belgium | 2008 | Overexposure to Subprime Mortgage Market leading to insolvency | Credit Risk | Strategic | €23.5 billion | $27.7B |
| 79 | Freddie Mac | United States | 2003 | Accounting Fraud | Operational Risk | Reporting | $5 billion | $5.0B |
| 80 | Fremont General Corporation | United States | 2007 | Subprime Lending and Regulatory Issues | Credit Risk | Compliance | $6.9 billion | $6.9B |
| 81 | Glitnir (Iceland) | Iceland | 2008 | Overexposure to Wholesale Funding Market | Credit Risk | Strategic | €1.6 billion | $1.9B |
| 82 | Global Crossing | United States | 2002 | Accounting Fraud and Misrepresentation | Operational Risk | Reporting | $22.4 billion | $22.4B |
| 83 | HBL (Pakistan) | Pakistan | 2017 | Money Laundering | Operational Risk | Compliance | $225 million | $225M |
| 84 | HBOS (UK) | United Kingdom | 2008 | Overexposure to Property Market leading to insolvency | Credit Risk | Strategic | £10 billion | $13.5B |
| 85 | HealthSouth Corporation | United States | 2003 | Accounting Fraud | Operational Risk | Reporting | $2.7 billion | $2.7B |
| 86 | HIH Insurance (Australia) | Australia | 2001 | Fraud and Inadequate Risk Management | Operational Risk | Operations | $5.3 billion AUD | $5.3B |
| 87 | HSBC | United Kingdom | 2012 | Money Laundering and Sanctions Breaching | Operational Risk | Compliance | $1.9 billion | $1.9B |
| 88 | HSH Nordbank (Germany) | Germany | 2008 | Overexposure to Subprime Mortgages and Shipping Loans | Credit Risk | Strategic | €2 billion | $2.4B |
| 89 | Hwang's Archegos Capital Management | United States | 2021 | Uncontrolled Leverage and Concentration Risk | Market Risk | Operations | $20 billion | $20.0B |
| 90 | Hypo Alpe-Adria-Bank International (Austria) | Austria | 2009 | Rapid Expansion and Overexposure to Balkans Real Estate Market | Credit Risk | Strategic | €7.6 billion | $9.0B |
| 91 | Hypo Real Estate (Germany) | Germany | 2008 | Overexposure to Mortgage Backed Securities | Credit Risk | Strategic | €10 billion | $11.8B |
| 92 | Hypo Real Estate (Germany) | Germany | 2008 | Overexposure to Mortgage-Backed Securities leading to insolvency | Credit Risk | Strategic | $64.48 billion | $64.5B |
| 93 | ICBC (China) | China | 2020 | Overexposure to Bad Loans | Credit Risk | Strategic | CNY 45.6 billion | $6.8B |
| 94 | Icelandic Banks (Kaupthing, Landsbanki, Glitnir) | Iceland | 2008 | Overexpansion and Overexposure to Financial Market | Credit Risk | Strategic | $85 billion | $85.0B |
| 95 | Icesave (Iceland) | Iceland | 2008 | Overexposure to Wholesale Funding Market | Credit Risk | Strategic | £4.5 billion | $6.1B |
| 96 | IndyMac Bancorp | United States | 2008 | Overexposure to Alt-A Loans | Credit Risk | Strategic | $10.7 billion | $10.7B |
| 97 | Irish Life and Permanent (Ireland) | Ireland | 2010 | Overexposure to Property Loans | Credit Risk | Reporting | €4 billion | $4.7B |
| 98 | Irish Nationwide Building Society (Ireland) | Ireland | 2010 | Overexposure to Commercial Property Loans | Credit Risk | Operations | €5.4 billion | $6.4B |
| 99 | Irwin Financial Corporation | United States | 2009 | Overexposure to Home Equity Loans | Credit Risk | Strategic | $1 billion | $1.0B |
| 100 | JPMorgan Chase (London Whale) | United States | 2012 | Poorly Supervised Proprietary Trading | Market Risk | Operations | $6.2 billion | $6.2B |
| 101 | Kaupthing (Iceland) | Iceland | 2008 | Overexposure to Wholesale Funding Market | Credit Risk | Strategic | €5.5 billion | $6.5B |
| 102 | Kaupthing Bank (Iceland) | Iceland | 2008 | Overexpansion and Insufficient Capital | Strategic Risk | Strategic | $50 billion | $50.0B |
| 103 | Knight Capital (US) | United States | 2012 | Software Glitch in Trading Algorithm | Market Risk | Operations | $460 million | $460M |
| 104 | Kreditanstalt (Austria) | Austria | 1931 | Overexposure to Post-War German and Central European Debt | Credit Risk | Strategic | $7.6 billion | $7.6B |
| 105 | Laiki Bank (Cyprus) | Cyprus | 2013 | Insolvency due to overexposure to Greek debt | Credit Risk | Strategic | €4.5 billion | $5.3B |
| 106 | Landesbank Sachsen (Germany) | Germany | 2007 | Overexposure to Structured Investment Vehicles leading to insolvency | Credit Risk | Strategic | €17 billion | $20.1B |
| 107 | Landsbanki (Iceland) | Iceland | 2008 | Overexposure to Wholesale Funding Market | Credit Risk | Strategic | €2.2 billion | $2.6B |
| 108 | Lehman Brothers | United States | 2008 | Overexposure to Subprime Mortgages | Credit Risk | Strategic | $30 billion | $30.0B |
| 109 | Lincoln Savings and Loan | United States | 1989 | Fraudulent Business Practices and Regulatory Capture | Operational Risk | Compliance | $3.4 billion | $3.4B |
| 110 | Lloyd's of London (UK) | United Kingdom | 2001 | World Trade Center Insurance Dispute | Strategic Risk | Strategic | $5.6 billion | $5.6B |
| 111 | Lloyds Banking Group (UK) | United Kingdom | 2013 | Payment Protection Insurance (PPI) Mis-selling | Conduct Risk | Compliance | £22 billion | $29.7B |
| 112 | Long-Term Capital Management | United States | 1998 | High Leverage and Market Risk | Market Risk | Strategic | $4.6 billion | $4.6B |
| 113 | Luckin Coffee (China) | China | 2020 | Accounting Fraud | Operational Risk | Reporting | $310 million | $310M |
| 114 | Maybank (Malaysia) | Malaysia | 2015 | Overexposure to Oil and Gas Sector | Credit Risk | Strategic | MYR 1.74 billion | $418M |
| 115 | Merrill Lynch | United States | 2008 | Overexposure to Subprime Mortgages | Credit Risk | Strategic | $51.8 billion | $51.8B |
| 116 | Metropolitan Life Insurance Company | United States | 1999 | Misrepresentation of Insurance Products | Operational Risk | Compliance | $1.6 billion | $1.6B |
| 117 | MF Global | United States | 2011 | Mismanagement of Funds | Operational Risk | Operations | $40 billion | $40.0B |
| 118 | MF Global | United States | 2011 | Overexposure to European Sovereign Debt | Credit Risk | Strategic | $1.6 billion | $1.6B |
| 119 | Monte dei Paschi (Italy) | Italy | 2013 | Derivative and Accounting Scandal | Conduct Risk | Reporting | €3.9 billion | $4.6B |
| 120 | NAB (Australia) | Australia | 2020 | Money Laundering | Operational Risk | Compliance | AUD 15 million | $10.8M |
| 121 | National Century Financial Enterprises (US) | United States | 2002 | Corporate Fraud | Operational Risk | Operations | $2.6 billion | $2.6B |
| 122 | New Century Financial Corporation | United States | 2007 | Overexposure to Subprime Mortgages | Credit Risk | Strategic | $1.2 billion | $1.2B |
| 123 | NMC Health (UAE) | United Arab Emirates | 2019 | Accounting Fraud and Debt Concealment | Operational Risk | Reporting | $4 billion | $4.0B |
| 124 | Nordea Bank (Sweden) | Sweden | 2019 | Money Laundering | Operational Risk | Compliance | SEK 4 billion | $440M |
| 125 | Northern Rock (UK) | United Kingdom | 2007 | Overexposure to Mortgage Market leading to insolvency | Credit Risk | Strategic | £26 billion | $35.1B |
| 126 | Olympus Corporation (Japan) | Japan | 2011 | Accounting Fraud | Operational Risk | Reporting | $1.7 billion | $1.7B |
| 127 | Parmalat (Italy) | Italy | 2003 | Accounting Fraud | Operational Risk | Reporting | $20 billion | $20.0B |
| 128 | Patisserie Valerie (UK) | United Kingdom | 2018 | Accounting Fraud | Operational Risk | Reporting | £94 million | $127M |
| 129 | PennyMac (US) | United States | 2008 | Subprime Mortgage Lending | Credit Risk | Strategic | $12.2 billion | $12.2B |
| 130 | Petrobras (Brazil) | Brazil | 2014 | Operation Car Wash (Corruption Scandal) | Operational Risk | Compliance | $2.1 billion | $2.1B |
| 131 | Pilatus Bank (Malta) | Malta | 2018 | Money Laundering and Fraud | Operational Risk | Compliance | €500 million | $590M |
| 132 | Postbank (Ireland) | Ireland | 2010 | Liquidity Crisis leading to insolvency | Liquidity Risk | Strategic | €500 million | $590M |
| 133 | PrivatBank (Ukraine) | Ukraine | 2016 | Large-scale Money-laundering | Operational Risk | Compliance | $5.5 billion | $5.5B |
| 134 | Punjab National Bank (India) | India | 2018 | Fraudulent Letter of Undertaking Issuance | Operational Risk | Operations | $2 billion | $2.0B |
| 135 | Punjab National Bank (India) | India | 2018 | Letter of Undertaking Fraud | Operational Risk | Operations | $1.8 billion | $1.8B |
| 136 | Rabobank (Netherlands) | Netherlands | 2013 | Libor and Euribor Scandal | Conduct Risk | Compliance | $1 billion | $1.0B |
| 137 | Raiffeisen Bank (Austria) | Austria | 2019 | Money Laundering and Corruption Allegations | Operational Risk | Compliance | €5 million | $5.9M |
| 138 | Refco | United States | 2005 | Debt Fraud | Operational Risk | Reporting | $2.4 billion | $2.4B |
| 139 | Roskilde Bank (Denmark) | Denmark | 2008 | Overexposure to Real Estate Market | Credit Risk | Strategic | €1 billion | $1.2B |
| 140 | Royal Ahold (Netherlands) | Netherlands | 2003 | Accounting Fraud | Operational Risk | Reporting | $1 billion | $1.0B |
| 141 | Royal Bank of Scotland (UK) | United Kingdom | 2008 | Overexposure to Subprime Mortgages | Credit Risk | Strategic | £24.1 billion | $32.5B |
| 142 | Royal Bank of Scotland (UK) | United Kingdom | 2008 | Overexposure to Subprime Mortgage Market leading to nationalization | Credit Risk | Strategic | £45.5 billion | $61.4B |
| 143 | Royal Bank of Scotland (UK) | United Kingdom | 2012 | IT Systems Failure | Operational Risk | Operations | £175 million | $236M |
| 144 | Satyam Computer Services (India) | India | 2009 | Accounting Fraud | Operational Risk | Reporting | $1.5 billion | $1.5B |
| 145 | Sino-Forest Corporation (Canada) | Canada | 2011 | Fraud and Misrepresentation | Operational Risk | Reporting | $4 billion CAD | $4.0B |
| 146 | Skye Bank (Nigeria) | Nigeria | 2018 | Non-performing Loans and Capital Issues | Credit Risk | Operations | $600 million | $600M |
| 147 | SNS Reaal (Netherlands) | Netherlands | 2013 | Overexposure to Property Finance | Credit Risk | Strategic | €2.2 billion | $2.6B |
| 148 | Societe Generale (France) | France | 2008 | Unauthorized Trading (Jerome Kerviel) | Market Risk | Operations | €4.9 billion | $5.8B |
| 149 | Societe Generale (France) | France | 2018 | Libor and Euribor Scandal | Conduct Risk | Compliance | $1.34 billion | $1.3B |
| 150 | Standard Chartered (UK) | United Kingdom | 2012 | Sanctions Breaching | Operational Risk | Compliance | $667 million | $667M |
| 151 | Stanford Financial Group | United States | 2009 | Ponzi Scheme | Operational Risk | Compliance | $7 billion | $7.0B |
| 152 | Steinhoff International (South Africa) | South Africa | 2017 | Accounting Fraud | Operational Risk | Reporting | €6 billion | $7.1B |
| 153 | Steinhoff International (South Africa) | South Africa | 2017 | Accounting Fraud | Operational Risk | Reporting | $7.4 billion | $7.4B |
| 154 | Swedbank (Sweden) | Sweden | 2019 | Money Laundering | Operational Risk | Compliance | SEK 4 billion | $440M |
| 155 | Tatfondbank (Russia) | Russia | 2017 | Misappropriation of Funds | Operational Risk | Operations | RUB 97 billion | $1.3B |
| 156 | Tesco Bank (UK) | United Kingdom | 2016 | Cyber Attack leading to account balance theft | Operational Risk | Operations | £2.5 million | $3.4M |
| 157 | Toshiba (Japan) | Japan | 2015 | Accounting Fraud | Operational Risk | Reporting | $1.2 billion | $1.2B |
| 158 | Tyco International | United States | 2002 | Financial Fraud by Executives | Operational Risk | Operations | $3.2 billion | $3.2B |
| 159 | UBS (Switzerland) | Switzerland | 2008 | Overexposure to Subprime Mortgages | Credit Risk | Strategic | $37.4 billion | $37.4B |
| 160 | UBS (Switzerland) | Switzerland | 2008 | Overexposure to Subprime Mortgage Market leading to insolvency | Credit Risk | Strategic | $21.34 billion | $21.3B |
| 161 | UBS (Switzerland) | Switzerland | 2011 | Unauthorized Trading | Market Risk | Operations | $2.3 billion | $2.3B |
| 162 | UBS (Switzerland) | Switzerland | 2013 | Unauthorized Trading | Market Risk | Operations | CHF 2.2 billion | $2.4B |
| 163 | UBS (Switzerland) | Switzerland | 2019 | Tax Evasion | Conduct Risk | Compliance | €4.5 billion | $5.3B |
| 164 | UBS AG (Switzerland) | Switzerland | 2012 | Unauthorized Trading | Market Risk | Operations | $2.3 billion | $2.3B |
| 165 | UniCredit (Italy) | Italy | 2008 | Overexposure to Subprime Mortgages | Credit Risk | Strategic | $19.2 billion | $19.2B |
| 166 | VBS Mutual Bank (South Africa) | South Africa | 2018 | Looting and Fraud | Operational Risk | Operations | R2 billion | $120M |
| 167 | Veneto Banca (Italy) | Italy | 2017 | Fraud and Mismanagement | Operational Risk | Reporting | €10 billion | $11.8B |
| 168 | Visa (US) | United States | 2019 | System Failure leading to transaction disruptions | Operational Risk | Operations | $1.2 billion | $1.2B |
| 169 | Vivendi | France | 2002 | Accounting Fraud | Operational Risk | Reporting | €3.1 billion | $3.7B |
| 170 | Wachovia (US) | United States | 2008 | Overexposure to Subprime Mortgage Market leading to insolvency | Credit Risk | Strategic | $25 billion | $25.0B |
| 171 | Washington Mutual | United States | 2008 | Overexposure to Mortgage Lending | Credit Risk | Strategic | $31.8 billion | $31.8B |
| 172 | Washington Mutual (US) | United States | 2008 | Overexposure to Subprime Mortgage Market leading to insolvency | Credit Risk | Strategic | $16.7 billion | $16.7B |
| 173 | Wells Fargo (US) | United States | 2016 | Fake Accounts Scandal | Conduct Risk | Operations | $3 billion | $3.0B |
| 174 | WestLB (Germany) | Germany | 2008 | Overexposure to Subprime Mortgages | Credit Risk | Strategic | €3 billion | $3.5B |
| 175 | WestLB (Germany) | Germany | 2012 | Structured Investment Vehicle failure leading to insolvency | Liquidity Risk | Strategic | €18 billion | $21.2B |
| 176 | Westpac (Australia) | Australia | 2019 | Money Laundering and Child Exploitation Scandal | Operational Risk | Compliance | AUD 1.3 billion | $936M |
| 177 | Wirecard (Germany) | Germany | 2020 | Accounting Fraud | Operational Risk | Reporting | €1.9 billion | $2.2B |
| 178 | WorldCom | United States | 2002 | Accounting Fraud | Operational Risk | Reporting | $180 billion | $180.0B |
| 179 | Yes Bank (India) | India | 2020 | Overexposure to Infrastructure Loans | Credit Risk | Strategic | $2 billion | $2.0B |

---

## Limitations and Caveats

The Industry Loss Database is an analytical tool designed to identify patterns in risk identification failure. It is not a comprehensive actuarial loss database and should not be used for capital modelling, reserving, or statistical inference about loss frequency distributions. The following limitations apply:

**Survivorship and selection bias.** The database includes only events that became public knowledge — typically because they were large enough to trigger regulatory action, litigation, or media coverage. Smaller risk identification failures that were absorbed without public disclosure are not captured. The database therefore overrepresents large, catastrophic events and underrepresents the steady accumulation of smaller losses from identification failures that never reach the threshold of public attention.

**Geographic bias.** The database over-represents jurisdictions with strong disclosure requirements, active financial media, and adversarial regulatory enforcement (US, UK, EU, Australia). Risk identification failures in jurisdictions with less transparency — including many emerging markets — are underrepresented, not because they occur less frequently but because they are less likely to be publicly documented.

**Temporal bias.** The concentration of entries in the 2000s and 2010s partly reflects the genuine clustering of failures around the Global Financial Crisis and its aftermath, but also reflects the greater availability of detailed public information for recent events. Earlier decades are underrepresented because regulatory disclosure requirements were less extensive and investigative journalism less developed.

**Loss estimation uncertainty.** Loss figures are drawn from public sources and represent the best available estimate at the time of database construction. For many events, the "true" loss is contested, evolves over time (as litigation settles, assets are recovered, or additional losses emerge), or depends on definitional choices (e.g. whether to measure the bailout cost, the write-down, or the market capitalisation destruction). The figures should be treated as indicative of magnitude rather than precise.

**FX approximation.** USD standardisation uses single approximate exchange rates rather than rates prevailing at the time of each event. For events spanning multiple years or occurring during periods of significant currency volatility, the USD equivalent may differ materially from a time-weighted conversion. This is acceptable for the database's pattern-identification purpose but limits the precision of cross-currency aggregate figures.

**Classification judgements.** The assignment of L1 risk category, COSO objective category, and failure mode involves analytical judgement. Many events could reasonably be classified in more than one category (e.g. an accounting fraud that conceals credit losses could be classified as Operational Risk or Credit Risk). The classification reflects the primary risk identification failure rather than the proximate financial cause, but reasonable analysts could disagree on specific assignments.

**Double-counting within institutions.** Some institutions appear multiple times where they experienced distinct risk events (e.g. AIG appears with both an accounting fraud entry and a CDS overexposure entry). This inflates the aggregate loss figure where the same institution's total loss is partially counted in multiple entries. For enterprise-level loss analysis, deduplicated institution-level totals would be more appropriate.

**No counterfactual.** The database cannot prove that the methodology described in this book would have prevented any specific loss. It demonstrates that the risks were identifiable and that specific methodology components address the identified failure modes, but the counterfactual — what would have happened if the methodology had been in place — is inherently unknowable.

Despite these limitations, the database provides a rigorous empirical foundation for the methodology's design. The ten failure modes recur with sufficient consistency across decades, jurisdictions, and institution types to support the conclusion that risk identification failure is structural rather than idiosyncratic — and that a systematic methodology addressing these failure modes would materially reduce the frequency and severity of the losses documented here.

---

*This appendix is maintained by EON Risk Services Ltd. The database is constructed from public sources only. Loss figures are indicative and drawn from regulatory enforcement actions, court filings, government commission reports, and financial disclosures. USD standardisation uses approximate exchange rates for cross-event comparability. The complete dataset, including narrative enrichment fields not shown in the summary table above, is available in the accompanying Excel and CSV files.*
