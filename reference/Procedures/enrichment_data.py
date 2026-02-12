"""
Narrative enrichment data for Industry Loss Database.
EON Risk Services Ltd

Each entry keyed by index (PDF alphabetical order) contains:
  risk_l2, coso_category, root_cause, risk_id_failure, outcome

COSO categories: Strategic | Operations | Reporting | Compliance
Risk ID Failure narratives are the core IP — specific to each institution.
"""

ENRICHMENT = {
    # ── 0: Malaysia Development Berhad (Malaysia), 2015, Fraud and Money Laundering ──
    0: {
        'risk_l2': 'External Fraud — Embezzlement',
        'coso_category': 'Compliance',
        'root_cause': 'Sovereign wealth fund 1MDB was systematically looted through fraudulent bond issuances and layered money laundering involving senior political figures and international banks.',
        'risk_id_failure': 'Arranging banks failed to identify the compliance and reputational risk of the 1MDB mandate despite abnormally high fees, opaque fund governance, and the direct involvement of politically exposed persons in transaction structuring.',
        'outcome': 'Goldman Sachs fined $2.9B globally; Malaysian PM Najib Razak convicted; 1MDB dissolved.',
    },
    # ── 1: Adelphia Communications, 2002, Internal Corporate Fraud ──
    1: {
        'risk_l2': 'Internal Fraud — Executive Misconduct',
        'coso_category': 'Reporting',
        'root_cause': 'Founding Rigas family used off-balance-sheet entities to siphon billions while falsifying financial statements to conceal personal borrowings guaranteed by the company.',
        'risk_id_failure': 'The board failed to identify related-party transaction risk due to concentrated family control over governance, audit committee, and treasury functions, with no independent oversight of intercompany flows.',
        'outcome': 'Filed for bankruptcy 2002; Rigas family convicted of fraud; assets sold to Time Warner Cable and Comcast.',
    },
    # ── 2: AIG (US), 2008, Overexposure to CDS leading to liquidity crisis ──
    2: {
        'risk_l2': 'Counterparty Credit Risk — CDS Concentration',
        'coso_category': 'Strategic',
        'root_cause': 'AIG Financial Products sold massive volumes of credit default swaps on mortgage-linked CDOs without adequate collateral reserves, creating catastrophic counterparty exposure when housing prices fell.',
        'risk_id_failure': 'AIG treated CDS exposure as near-zero risk based on historical default rates of AAA-rated CDOs, failing to identify the correlation risk and the liquidity-triggered collateral call scenario that could materialise under systemic stress.',
        'outcome': '$85B Federal Reserve bailout; US government took 79.9% equity stake; AIG later reprivatised.',
    },
    # ── 3: Allied Irish Bank, 2002, Rogue Trader (John Rusnak) ──
    3: {
        'risk_l2': 'Market Risk — Unauthorised Trading',
        'coso_category': 'Operations',
        'root_cause': 'FX trader John Rusnak concealed $691M in losses through fictitious option trades at AIB subsidiary Allfirst, exploiting weak back-office confirmation processes.',
        'risk_id_failure': 'AIB failed to identify the operational risk in its US subsidiary due to geographic separation of oversight, reliance on local management assurances, and inadequate independent trade confirmation procedures for FX options.',
        'outcome': 'Rusnak sentenced to 7.5 years; Allfirst sold to M&T Bank; AIB absorbed $691M loss.',
    },
    # ── 4: Allied Irish Banks (Ireland), 2008, Overexposure to Property Market ──
    4: {
        'risk_l2': 'Credit Concentration — Property Sector',
        'coso_category': 'Strategic',
        'root_cause': 'AIB accumulated massive exposure to Irish commercial and residential property during the Celtic Tiger boom, with loan-to-value ratios based on inflated property valuations.',
        'risk_id_failure': 'Risk identification treated the Irish property market as structurally safe, failing to identify single-country property concentration as a systemic threat because stress testing used benign historical scenarios that excluded a nationwide property collapse.',
        'outcome': 'Nationalised 2010; €21B government recapitalisation; merged into AIB Group plc.',
    },
    # ── 5: Alpha Bank (Greece), 2010, Overexposure to Greek Sovereign Debt ──
    5: {
        'risk_l2': 'Credit Concentration — Sovereign',
        'coso_category': 'Strategic',
        'root_cause': 'As a major Greek bank, Alpha held disproportionate sovereign debt exposure to the Greek state, which became impaired when the eurozone debt crisis triggered restructuring.',
        'risk_id_failure': 'Alpha Bank did not identify domestic sovereign debt as a concentration risk because eurozone membership was assumed to eliminate sovereign default risk, and regulatory frameworks assigned zero risk weights to home-state government bonds.',
        'outcome': 'Required multiple rounds of recapitalisation via Hellenic Financial Stability Fund; survived as private entity after significant dilution.',
    },
    # ── 6: AmBank (Malaysia), 2015, Involvement in 1MDB Scandal ──
    6: {
        'risk_l2': 'External Fraud — Political Corruption',
        'coso_category': 'Compliance',
        'root_cause': 'AmBank accounts were used to channel approximately $700M in funds linked to the 1MDB scandal to the personal accounts of the Malaysian Prime Minister.',
        'risk_id_failure': 'AmBank failed to identify the money laundering and politically-exposed-person risk in large, unusual fund flows through personal accounts connected to the nation\'s leader, reflecting weak AML controls and unwillingness to challenge political authority.',
        'outcome': 'Fined $700M by Malaysian authorities; chairman removed; compliance overhaul mandated.',
    },
    # ── 7: AMCORE Financial, 2010, Overexposure to Commercial Real Estate ──
    7: {
        'risk_l2': 'Credit Concentration — Commercial Real Estate',
        'coso_category': 'Strategic',
        'root_cause': 'AMCORE concentrated heavily in commercial real estate lending in the US Midwest, with inadequate diversification across geographies or asset classes.',
        'risk_id_failure': 'Risk identification failed to flag the CRE concentration relative to capital, treating regional property lending as core business rather than a risk that required limits, diversification, or stress testing against a property downturn.',
        'outcome': 'Seized by FDIC 2010; assets sold to Harris NA (BMO subsidiary).',
    },
    # ── 8: American International Group (AIG), 2005, Accounting Fraud ──
    8: {
        'risk_l2': 'Internal Fraud — Accounting Manipulation',
        'coso_category': 'Reporting',
        'root_cause': 'AIG engaged in bid-rigging with brokers and used finite reinsurance transactions to artificially inflate reserves and smooth earnings over multiple years.',
        'risk_id_failure': 'Internal risk identification failed to detect accounting manipulation because the transactions were structured as legitimate reinsurance, and the complexity of insurance accounting masked their true purpose from both internal audit and external reviewers.',
        'outcome': 'CEO Hank Greenberg forced to resign; $1.6B SEC settlement; $3.9B restatement.',
    },
    # ── 9: American International Group (AIG), 2008, Overexposure to CDS ──
    9: {
        'risk_l2': 'Counterparty Credit Risk — CDS Portfolio',
        'coso_category': 'Strategic',
        'root_cause': 'AIG Financial Products division wrote $527 billion in notional CDS contracts, primarily on CDOs backed by subprime mortgages, without hedging or reserving for potential collateral calls.',
        'risk_id_failure': 'Risk identification relied on credit rating agency assessments and internal models that assigned negligible probability to a broad housing downturn, failing to identify that CDS contracts contained mark-to-market collateral triggers that could create a liquidity crisis independent of actual defaults.',
        'outcome': '$182B total government support; largest US bailout; AIG later fully repaid taxpayers.',
    },
    # ── 10: American Savings & Loan, 1988, High-risk Mortgage Lending ──
    10: {
        'risk_l2': 'Credit Risk — Mortgage Lending',
        'coso_category': 'Strategic',
        'root_cause': 'Aggressive growth strategy funded high-risk mortgage origination and speculative securities investments during the S&L deregulation era.',
        'risk_id_failure': 'Risk identification was undermined by deregulation euphoria that treated relaxed lending standards as a competitive opportunity rather than a risk, with no framework to identify that interest rate liberalisation had fundamentally altered the asset-liability risk profile.',
        'outcome': 'Seized by FSLIC 1988; resolved through RTC; losses borne by taxpayers.',
    },
    # ── 11: AMP (Australia), 2018, Fees for No Service ──
    11: {
        'risk_l2': 'Conduct Risk — Customer Detriment',
        'coso_category': 'Compliance',
        'root_cause': 'AMP systematically charged financial advice fees to customers who received no service, including deceased customers, over a prolonged period.',
        'risk_id_failure': 'Risk identification frameworks categorised fee-for-service as a standard business model risk rather than a conduct risk, failing to identify the systemic pattern of customer detriment because complaints data was not aggregated or escalated as a risk indicator.',
        'outcome': 'Royal Commission censure; CEO resigned; AUD 600M remediation; share price halved.',
    },
    # ── 12: Anglo Irish Bank, 2010, Hidden Loans and Accounting Fraud ──
    12: {
        'risk_l2': 'Internal Fraud — Related-Party Lending',
        'coso_category': 'Reporting',
        'root_cause': 'Chairman Sean FitzPatrick concealed €87M in personal loans by temporarily transferring them to another bank around year-end, while the bank maintained aggressive property lending concentrations.',
        'risk_id_failure': 'Risk identification failed at multiple levels: the board did not identify related-party lending fraud due to a culture of deference to the chairman, and enterprise risk failed to flag the extreme CRE concentration because growth was equated with success in the Celtic Tiger era.',
        'outcome': 'Nationalised 2009; €29.3B taxpayer bailout; renamed IBRC and liquidated 2013; executives prosecuted.',
    },
    # ── 13: ANZ (Australia), 2018, Interest Rate Rigging ──
    13: {
        'risk_l2': 'Conduct Risk — Benchmark Manipulation',
        'coso_category': 'Compliance',
        'root_cause': 'ANZ traders manipulated the Bank Bill Swap Rate (BBSW), Australia\'s key interest rate benchmark, to benefit their trading positions.',
        'risk_id_failure': 'Risk identification did not extend to benchmark-setting processes as a conduct risk vector, treating rate submissions as an operational function rather than a conflict-of-interest exposure requiring surveillance and controls.',
        'outcome': 'Fined AUD 50M by ASIC; required to implement enhanced compliance framework.',
    },
    # ── 14: Arthur Andersen, 2002, Involvement in Enron Scandal ──
    14: {
        'risk_l2': 'Operational Risk — Professional Misconduct',
        'coso_category': 'Compliance',
        'root_cause': 'Arthur Andersen compromised audit independence by simultaneously providing consulting services to Enron, then obstructed justice by shredding documents after the SEC investigation began.',
        'risk_id_failure': 'The firm failed to identify the existential reputational risk of conflict-of-interest between audit and consulting relationships, and had no framework for identifying the point at which client accommodation crossed into professional misconduct.',
        'outcome': 'Criminal conviction for obstruction of justice; firm dissolved; 85,000 employees lost jobs.',
    },
    # ── 15: Banca Carige (Italy), 2018, Governance Failures and High NPLs ──
    15: {
        'risk_l2': 'Credit Risk — Non-Performing Loans',
        'coso_category': 'Operations',
        'root_cause': 'Chronic governance dysfunction combined with excessive exposure to the struggling Ligurian regional economy produced unsustainable NPL ratios.',
        'risk_id_failure': 'Risk identification was captured by dominant shareholders who prevented independent assessment of credit quality, while regional lending concentration was treated as a business identity rather than a risk to be measured and limited.',
        'outcome': 'Placed under ECB administration 2019; rescued by FITD deposit guarantee scheme; later acquired by BPER Banca.',
    },
    # ── 16: Banca Monte dei Paschi di Siena (Italy), 2013, Derivative and Accounting Fraud ──
    16: {
        'risk_l2': 'Internal Fraud — Derivative Concealment',
        'coso_category': 'Reporting',
        'root_cause': 'MPS used complex derivative contracts (Santorini, Alexandria) to conceal hundreds of millions in losses from a failed acquisition, with the knowledge of senior management.',
        'risk_id_failure': 'Risk identification failed because derivative positions were structured specifically to avoid triggering internal risk reporting thresholds, and the involvement of senior management in the concealment meant that the normal escalation path was itself compromised.',
        'outcome': 'Multiple management convictions; €8B total recapitalisation; majority state-owned until 2024 partial privatisation.',
    },
    # ── 17: Banca Monte dei Paschi di Siena (Italy), 2013, Derivative Mis-selling ──
    17: {
        'risk_l2': 'Conduct Risk — Derivative Mis-selling',
        'coso_category': 'Compliance',
        'root_cause': 'MPS sold complex structured derivatives to municipalities and local government entities that did not understand the risks, resulting in significant losses for public-sector clients.',
        'risk_id_failure': 'Conduct risk in derivative sales to unsophisticated counterparties was not identified as a distinct risk category, as the bank\'s risk framework focused on market and credit risk of the positions rather than suitability and conduct risk toward clients.',
        'outcome': 'Fined €730M; required to compensate affected municipalities; contributed to broader governance crisis.',
    },
    # ── 18: Banca Popolare di Bari (Italy), 2019, Mismanagement and False Accounting ──
    18: {
        'risk_l2': 'Internal Fraud — False Accounting',
        'coso_category': 'Reporting',
        'root_cause': 'Management falsified financial statements to conceal deteriorating credit quality and capital adequacy while continuing to sell shares to retail investors.',
        'risk_id_failure': 'The cooperative governance structure concentrated power in management with minimal independent oversight, and Italy\'s fragmented supervisory framework failed to identify the gap between reported and actual asset quality until the bank was nearly insolvent.',
        'outcome': 'Placed under special administration by Bank of Italy 2019; rescued through Mediocredito Centrale (state-owned).',
    },
    # ── 19: Banca Popolare di Vicenza (Italy), 2017, Fraud and Mismanagement ──
    19: {
        'risk_l2': 'Internal Fraud — Share Price Manipulation',
        'coso_category': 'Reporting',
        'root_cause': 'Management artificially inflated share prices by funding customer share purchases with bank loans, creating circular capital that masked the true solvency position.',
        'risk_id_failure': 'Risk identification did not flag the circular relationship between lending and capital raising as a solvency risk, because the share subscription and lending functions were managed in silos without enterprise-level aggregation of the self-referencing exposure.',
        'outcome': 'Declared failing by ECB 2017; liquidated under Italian insolvency law; senior creditors bailed in; retail investors partially compensated by state.',
    },
    # ── 20: Banca Privada d'Andorra (Andorra), 2015, Money Laundering ──
    20: {
        'risk_l2': 'Compliance Risk — Money Laundering',
        'coso_category': 'Compliance',
        'root_cause': 'The bank was identified by US FinCEN as a primary money laundering concern, facilitating flows from Venezuelan corruption, Chinese organised crime, and Russian illicit finance.',
        'risk_id_failure': 'Operating in a micro-state with limited regulatory infrastructure, the bank failed to identify its own vulnerability to being used as a laundering vehicle, treating its jurisdiction\'s bank secrecy as a competitive advantage rather than a compliance risk that invited illicit flows.',
        'outcome': 'Designated by FinCEN 2015; intervened by Andorran authorities; eventually wound down.',
    },
    # ── 21: Banco de Valencia (Spain), 2011, Overexposure to Real Estate Loans ──
    21: {
        'risk_l2': 'Credit Concentration — Real Estate',
        'coso_category': 'Strategic',
        'root_cause': 'Aggressive expansion into real estate development lending during the Spanish property bubble without adequate provisioning or diversification.',
        'risk_id_failure': 'Risk identification treated real estate lending growth as aligned with regional economic strategy rather than a concentration risk, and the savings bank (caja) governance model lacked independent risk challenge capability.',
        'outcome': 'Rescued by FROB; €4.5B in public funds; absorbed by CaixaBank 2013.',
    },
    # ── 22: Banco do Brasil, 2010, Fraud and Overextension of Credit ──
    22: {
        'risk_l2': 'Credit Risk — Excessive Lending',
        'coso_category': 'Operations',
        'root_cause': 'State-directed lending expansion combined with internal fraud led to significant credit losses across the agricultural and small business portfolios.',
        'risk_id_failure': 'As a state-controlled bank, risk identification was subordinated to government policy objectives, and the political pressure to extend credit overrode internal risk appetite limits and credit quality standards.',
        'outcome': 'Government capital injection; management restructured; enhanced credit controls implemented.',
    },
    # ── 23: Banco Espirito Santo (Portugal), 2014, Accounting Irregularities ──
    23: {
        'risk_l2': 'Internal Fraud — Group Structure Manipulation',
        'coso_category': 'Reporting',
        'root_cause': 'The Espirito Santo family used opaque holding company structures to channel bank funds into failing non-financial group entities, concealing losses across multiple jurisdictions.',
        'risk_id_failure': 'Risk identification failed to penetrate the complex multi-layered group structure controlled by the founding family, and intra-group exposures to non-bank entities in Angola and elsewhere were not consolidated or stress-tested as a unified credit concentration.',
        'outcome': 'Resolved via bridge bank (Novo Banco) 2014; €4.9B resolution fund used; Espirito Santo family assets seized.',
    },
    # ── 24: Banco Intercontinental (Dominican Republic), 2003, Fraud and Mismanagement ──
    24: {
        'risk_l2': 'Internal Fraud — Asset Stripping',
        'coso_category': 'Operations',
        'root_cause': 'Senior management systematically embezzled funds through fictitious loans and shell companies, representing one of the largest bank frauds in Caribbean history.',
        'risk_id_failure': 'Weak regulatory oversight and concentrated ownership allowed management to bypass internal controls entirely, with no independent risk identification function capable of detecting the diversion of assets.',
        'outcome': 'Collapsed 2003; government bailout cost 20% of GDP; multiple executives convicted.',
    },
    # ── 25: Banco Nacional (Costa Rica), 2004, Fraud and Money Laundering ──
    25: {
        'risk_l2': 'Compliance Risk — Money Laundering',
        'coso_category': 'Compliance',
        'root_cause': 'Internal fraud combined with inadequate anti-money laundering controls allowed the bank to be used for laundering proceeds from drug trafficking.',
        'risk_id_failure': 'AML risk identification relied on basic transaction monitoring without the capability to detect structured layering patterns, and the bank lacked a culture of suspicious activity reporting.',
        'outcome': 'Fined and restructured; management replaced; enhanced AML framework imposed by regulator.',
    },
    # ── 26: Banco Popular (Spain), 2017, Overexposure to Real Estate Loans ──
    26: {
        'risk_l2': 'Credit Concentration — Real Estate',
        'coso_category': 'Strategic',
        'root_cause': 'Banco Popular carried €37B in toxic real estate assets from the Spanish property crash, with insufficient provisioning that eroded market confidence and triggered deposit flight.',
        'risk_id_failure': 'Risk identification consistently underestimated the provisioning required for distressed real estate assets, using optimistic recovery assumptions that delayed recognition of the true scale of impairment over nearly a decade.',
        'outcome': 'First resolution under EU BRRD 2017; sold to Santander for €1; shareholders and junior creditors wiped out.',
    },
    # ── 27: Banesto (Spain), 1993, Overexposure to Real Estate Investments ──
    27: {
        'risk_l2': 'Credit Concentration — Real Estate',
        'coso_category': 'Strategic',
        'root_cause': 'Banesto accumulated massive real estate and industrial holdings under chairman Mario Conde, with inadequate provisioning disguised through accounting manipulation.',
        'risk_id_failure': 'The Bank of Spain failed to identify the scale of connected lending and provisioning shortfall because Banesto management actively obscured the true asset quality through complex corporate structures and related-party transactions.',
        'outcome': 'Intervened by Bank of Spain 1993; Mario Conde convicted of fraud; bank eventually absorbed by Santander.',
    },
    # ── 28: Bank of America, 2008, Overexposure to Subprime Mortgages ──
    28: {
        'risk_l2': 'Credit Risk — Subprime Mortgage Exposure',
        'coso_category': 'Strategic',
        'root_cause': 'Direct subprime exposure was compounded by the acquisition of Countrywide Financial, which brought massive additional mortgage losses and litigation liability onto the balance sheet.',
        'risk_id_failure': 'Acquisition due diligence failed to identify the full extent of Countrywide\'s mortgage liability, particularly the pending litigation and representations-and-warranties exposure, treating the purchase as a strategic opportunity rather than a risk absorption event.',
        'outcome': 'Required $45B TARP support; Countrywide acquisition ultimately cost over $40B in settlements; survived as going concern.',
    },
    # ── 29: Bank of Cyprus, 2012, Overexposure to Greek Debt ──
    29: {
        'risk_l2': 'Credit Concentration — Sovereign',
        'coso_category': 'Strategic',
        'root_cause': 'Heavy investment in Greek government bonds combined with extensive Greek subsidiary operations created double exposure to the Greek economic crisis.',
        'risk_id_failure': 'Sovereign debt of a eurozone member was treated as risk-free under regulatory and internal frameworks, and the correlation between Greek sovereign risk and the performance of Greek banking operations was not identified as a compound concentration.',
        'outcome': 'Bailed in 2013 — uninsured depositors lost up to 47.5%; largest bail-in in European history at the time.',
    },
    # ── 30: Bank of Moscow (Russia), 2011, Fraud and Mismanagement ──
    30: {
        'risk_l2': 'Internal Fraud — Related-Party Lending',
        'coso_category': 'Operations',
        'root_cause': 'Former management under Mayor Luzhkov\'s ally Borodin issued massive loans to connected entities that were never repaid, representing one of Russia\'s largest bank frauds.',
        'risk_id_failure': 'Political control of the bank made independent risk identification impossible — the bank served as a financing vehicle for politically connected insiders, and no independent function had the authority or protection to challenge related-party transactions.',
        'outcome': 'VTB acquired majority stake; $9B hole discovered; former president Borodin fled to London.',
    },
    # ── 31: Bank of New England, 1991, Overexposure to Commercial Real Estate ──
    31: {
        'risk_l2': 'Credit Concentration — Commercial Real Estate',
        'coso_category': 'Strategic',
        'root_cause': 'Extreme concentration in New England commercial real estate lending left the bank fatally exposed when the regional property market collapsed in the early 1990s.',
        'risk_id_failure': 'Geographic and sector concentration in CRE was not identified as a systemic risk because the bank\'s identity was built around regional property lending, and risk frameworks lacked concentration limits that could challenge the core business model.',
        'outcome': 'Seized by FDIC 1991; largest New England bank failure; $2.5B loss to deposit insurance fund.',
    },
    # ── 32: Bankgesellschaft Berlin (Germany), 2001, Overexposure to Real Estate Market ──
    32: {
        'risk_l2': 'Credit Concentration — Real Estate',
        'coso_category': 'Strategic',
        'root_cause': 'The state-owned Landesbank accumulated toxic real estate fund guarantees during the post-reunification Berlin property boom, with politically-driven lending decisions.',
        'risk_id_failure': 'Risk identification was overridden by political imperatives to support Berlin\'s post-reunification development, with the state government ownership creating conflicts that prevented independent risk assessment of property fund exposures.',
        'outcome': '€1.76B state bailout; restructured and merged into Landesbank Berlin; privatised 2007.',
    },
    # ── 33: Bankia (Spain), 2012, Overexposure to Real Estate Loans ──
    33: {
        'risk_l2': 'Credit Concentration — Real Estate',
        'coso_category': 'Strategic',
        'root_cause': 'Bankia was created from the merger of seven struggling cajas, inheriting massive property developer loan portfolios that were inadequately provisioned.',
        'risk_id_failure': 'The merger that created Bankia was itself a risk identification failure — combining seven weak institutions was presented as a strengthening measure, but no assessment identified that aggregating concentrated property exposures without recapitalisation simply created a larger problem.',
        'outcome': '€22.4B government bailout — Spain\'s largest; listed via IPO then immediately required rescue; partial reprivatisation 2017.',
    },
    # ── 34: Bankia (Spain), 2012, Misrepresentation of Financial Statements ──
    34: {
        'risk_l2': 'Internal Fraud — Financial Misrepresentation',
        'coso_category': 'Reporting',
        'root_cause': 'Bankia\'s 2011 IPO prospectus materially misrepresented the bank\'s financial health, showing profits when the institution was deeply insolvent.',
        'risk_id_failure': 'The IPO due diligence process failed to identify that reported financial statements were fundamentally misstated, with auditors, underwriters, and the regulator all accepting provisioning levels that were later shown to understate losses by billions.',
        'outcome': 'Former chairman Rodrigo Rato convicted of fraud; IPO investors compensated; Bankia merged with CaixaBank 2021.',
    },
    # ── 35: BankUnited FSB, 2009, Overexposure to Option ARMs ──
    35: {
        'risk_l2': 'Credit Risk — Exotic Mortgage Products',
        'coso_category': 'Strategic',
        'root_cause': 'BankUnited concentrated in option adjustable-rate mortgages in Florida, which allowed borrowers to defer interest payments, creating negative amortisation exposure during the housing downturn.',
        'risk_id_failure': 'Risk identification failed to recognise that option ARM products created a compounding risk — negative amortisation meant that credit exposure grew as property values fell, but this amplification mechanism was not captured in the bank\'s risk models.',
        'outcome': 'Seized by OTS 2009; largest bank failure in Florida history; assets sold to private equity consortium.',
    },
    # ── 36: Barclays (UK), 2012, Libor Scandal ──
    36: {
        'risk_l2': 'Conduct Risk — Benchmark Manipulation',
        'coso_category': 'Compliance',
        'root_cause': 'Barclays traders colluded to manipulate LIBOR submissions to benefit trading positions, with tacit knowledge at management levels during the financial crisis.',
        'risk_id_failure': 'Risk identification frameworks did not extend to the LIBOR submission process as a conduct risk — rate-setting was treated as an administrative function rather than an activity with material conflict-of-interest and market manipulation potential.',
        'outcome': 'Fined £290M (first bank fined in LIBOR scandal); CEO Bob Diamond resigned; triggered industry-wide LIBOR reform.',
    },
    # ── 37: Barings Bank, 1995, Unauthorized and Unsuitable Trading ──
    37: {
        'risk_l2': 'Market Risk — Unauthorised Trading',
        'coso_category': 'Operations',
        'root_cause': 'Nick Leeson concealed £827M in losses from unauthorised futures trading on the Nikkei 225, exploiting his dual role in both trading and back-office settlement in Barings\' Singapore office.',
        'risk_id_failure': 'Barings failed to identify the fundamental control weakness of combining front-office trading authority with back-office settlement oversight in one individual, and ignored internal audit warnings about the segregation-of-duties violation in the Singapore operation.',
        'outcome': 'Collapsed February 1995 — Britain\'s oldest merchant bank destroyed; sold to ING for £1; Leeson imprisoned.',
    },
    # ── 38: Bawag (Austria), 2006, Hidden Losses and Fraudulent Transactions ──
    38: {
        'risk_l2': 'Internal Fraud — Loss Concealment',
        'coso_category': 'Reporting',
        'root_cause': 'BAWAG management concealed over €1B in losses from speculative Caribbean hedge fund investments and derivatives through off-balance-sheet vehicles over more than a decade.',
        'risk_id_failure': 'Losses were hidden through related-party structures that fell outside the bank\'s risk reporting perimeter, and the dominance of the CEO over governance prevented independent challenge or investigation of persistently opaque Caribbean investment returns.',
        'outcome': 'CEO and executives convicted; bank sold to Cerberus Capital; Austrian trade union (owner) lost its investment.',
    },
    # ── 39: Bear Stearns, 2008, Overexposure to Mortgage-Backed Securities ──
    39: {
        'risk_l2': 'Credit Risk — Structured Products Concentration',
        'coso_category': 'Strategic',
        'root_cause': 'Bear Stearns was heavily concentrated in mortgage securitisation and retained significant MBS positions on balance sheet, leaving it fatally exposed when subprime delinquencies surged.',
        'risk_id_failure': 'Risk identification treated Bear Stearns\' dominant position in mortgage securitisation as a competitive strength rather than a concentration risk, with no scenario analysis exploring the impact of a broad mortgage market deterioration on both origination revenue and retained positions.',
        'outcome': 'Emergency sale to JPMorgan Chase at $2/share (from $170); Fed guaranteed $29B in toxic assets.',
    },
    # ── 40: Bear Stearns (US), 2008, Overexposure to CDOs leading to insolvency ──
    40: {
        'risk_l2': 'Credit Risk — CDO Concentration',
        'coso_category': 'Strategic',
        'root_cause': 'Two Bear Stearns hedge funds collapsed in June 2007 from CDO exposure, presaging the bank\'s own failure from retained structured credit positions and loss of counterparty confidence.',
        'risk_id_failure': 'The collapse of its own hedge funds in 2007 was treated as an isolated subsidiary event rather than identified as an early warning signal of the same concentration risk embedded in the parent bank\'s own balance sheet.',
        'outcome': 'Acquired by JPMorgan Chase March 2008 in Fed-brokered rescue; shareholders received $10/share.',
    },
    # ── 41: Bernard L. Madoff Investment Securities LLC, 2008, Ponzi Scheme ──
    41: {
        'risk_l2': 'External Fraud — Ponzi Scheme',
        'coso_category': 'Compliance',
        'root_cause': 'Madoff operated the largest Ponzi scheme in history for over 20 years, fabricating returns and statements while using new investor funds to pay existing investors.',
        'risk_id_failure': 'Feeder funds and institutional investors failed to identify that Madoff\'s consistently smooth returns were statistically implausible, and did not conduct operational due diligence on his one-man audit firm or the absence of independent custody — warning signs that Harry Markopolos repeatedly flagged to the SEC.',
        'outcome': 'Madoff arrested December 2008; sentenced to 150 years; $17.5B in claims; trustee recovered ~$14B for victims.',
    },
    # ── 42: Bradford & Bingley (UK), 2008, Overexposure to Buy-to-Let Mortgages ──
    42: {
        'risk_l2': 'Credit Concentration — Buy-to-Let Mortgages',
        'coso_category': 'Strategic',
        'root_cause': 'Strategic pivot to become the UK\'s leading buy-to-let and self-certification mortgage lender created extreme product and sector concentration.',
        'risk_id_failure': 'The bank\'s strategy was itself the unidentified risk — transforming from a building society into a specialist BTL lender was treated as strategic differentiation, with no identification of the concentration risk created by abandoning diversification in pursuit of a market niche.',
        'outcome': 'Nationalised September 2008; mortgage book transferred to government; savings transferred to Abbey (Santander).',
    },
    # ── 43: Bradford & Bingley (UK), 2008, Overexposure to Subprime Mortgages ──
    43: {
        'risk_l2': 'Credit Risk — Self-Certification Mortgages',
        'coso_category': 'Operations',
        'root_cause': 'Self-certification mortgages with minimal income verification created a portfolio highly vulnerable to borrower default when economic conditions deteriorated.',
        'risk_id_failure': 'Self-certification lending was not identified as a credit risk amplifier because origination volumes and early default rates appeared healthy, masking the fact that the relaxed verification process systematically attracted higher-risk borrowers.',
        'outcome': 'Part of the broader B&B nationalisation; self-cert mortgage losses were a primary driver of the £18B impairment.',
    },
    # ── 44: Bradford & Bingley (UK), 2008, Overexposure to Mortgage Market leading to insolvency ──
    44: {
        'risk_l2': 'Liquidity Risk — Wholesale Funding Dependence',
        'coso_category': 'Strategic',
        'root_cause': 'Rapid growth funded by wholesale markets rather than retail deposits left B&B fatally vulnerable when interbank lending froze in 2008.',
        'risk_id_failure': 'The funding model risk was not identified as existential because wholesale markets had been reliable for years, and stress testing did not include a scenario where the entire interbank market seized simultaneously across all maturities.',
        'outcome': 'Nationalised; the combined effect of BTL concentration, self-cert exposure, and wholesale funding dependence made B&B unviable.',
    },
    # ── 45: Caisse Centrale du Crédit Immobilier de France (3CIF), 2012 ──
    45: {
        'risk_l2': 'Credit Concentration — Real Estate',
        'coso_category': 'Strategic',
        'root_cause': 'The state-backed social housing lender relied entirely on wholesale funding to finance its real estate loan portfolio, with no retail deposit base to provide stability.',
        'risk_id_failure': 'Risk identification failed to recognise that a wholesale-funded mono-line real estate lender had an existential vulnerability to funding market disruption, treating the state guarantee as sufficient protection without assessing the structural fragility of the business model.',
        'outcome': 'Wound down from 2013 after losing access to affordable wholesale funding; portfolio managed in run-off.',
    },
    # ── 46: Caixa Economica Federal (Brazil), 2015, Corruption and Fraud ──
    46: {
        'risk_l2': 'External Fraud — Political Corruption',
        'coso_category': 'Compliance',
        'root_cause': 'Senior executives participated in the Lava Jato (Car Wash) corruption network, approving inflated contracts and kickbacks related to infrastructure lending.',
        'risk_id_failure': 'As a state-controlled bank, risk identification of political corruption was structurally compromised — the very officials who should have been subject to integrity screening were appointed through the political system that the corruption network exploited.',
        'outcome': 'Multiple executives arrested; management replaced; enhanced governance requirements imposed.',
    },
    # ── 47: Caixa Geral de Depósitos (Portugal), 2016, Mismanagement ──
    47: {
        'risk_l2': 'Credit Risk — Politically-Directed Lending',
        'coso_category': 'Operations',
        'root_cause': 'Portugal\'s largest state-owned bank extended large loans to politically connected borrowers and projects with inadequate credit analysis, leading to substantial losses.',
        'risk_id_failure': 'State ownership created a structural conflict where risk identification was subordinated to political lending directives, and the bank lacked the institutional independence to refuse or limit exposures driven by government policy.',
        'outcome': '€5B government recapitalisation 2017; parliamentary investigation; governance reform mandated.',
    },
    # ── 48: Caja Madrid (Spain), 2013, Credit Card Scandal and Mismanagement ──
    48: {
        'risk_l2': 'Internal Fraud — Executive Misconduct',
        'coso_category': 'Operations',
        'root_cause': 'Board members and senior executives used undisclosed corporate credit cards for personal luxury spending while the bank (later Bankia) was being bailed out with public funds.',
        'risk_id_failure': 'Risk identification frameworks focused on financial risks and did not extend to executive conduct and expense controls, treating board member behaviour as a governance matter outside the risk function\'s remit.',
        'outcome': 'Former chairman Rodrigo Rato and 64 executives tried for embezzlement; Rato convicted and imprisoned.',
    },
    # ── 49: Capital One (US), 2019, Data Breach exposing customer data ──
    49: {
        'risk_l2': 'Operational Risk — Cyber / Data Security',
        'coso_category': 'Operations',
        'root_cause': 'A former AWS employee exploited a misconfigured web application firewall to access personal data of over 100 million Capital One customers and applicants.',
        'risk_id_failure': 'Cloud migration risk was identified at the infrastructure level but not at the application configuration level — the bank did not identify that misconfigured firewall rules in its AWS environment created a server-side request forgery vulnerability exposing customer data.',
        'outcome': 'Fined $80M by OCC; $190M class-action settlement; perpetrator convicted; CISO function restructured.',
    },
    # ── 50: Carige Bank (Italy), 2018, Poor Governance and Risk Management ──
    50: {
        'risk_l2': 'Operational Risk — Governance Failure',
        'coso_category': 'Operations',
        'root_cause': 'Entrenched shareholders resisted capital raising and governance reform while NPL ratios deteriorated, creating a slow-motion solvency crisis.',
        'risk_id_failure': 'The bank treated governance dysfunction as a shareholder matter rather than an operational risk, failing to identify that blocked capital actions and board infighting were themselves risk events that accelerated credit deterioration.',
        'outcome': 'ECB removed board 2019; rescued by Italian deposit guarantee scheme; acquired by BPER Banca 2022.',
    },
    # ── 51: Carillion (UK), 2018, Debt and Pension Deficit Mismanagement ──
    51: {
        'risk_l2': 'Strategic Risk — Business Model Failure',
        'coso_category': 'Strategic',
        'root_cause': 'Carillion pursued aggressive revenue growth through low-margin government contracts while accumulating unsustainable pension deficits and supplier debt, using aggressive accounting to delay recognition of project losses.',
        'risk_id_failure': 'Risk identification treated contract revenue as the primary metric without identifying the compounding effect of pension underfunding, late payments to suppliers, and contract loss provisions — each individually manageable but collectively fatal to the business model.',
        'outcome': 'Compulsory liquidation January 2018; 43,000 jobs affected; £7B in obligations; major UK government contracting reform.',
    },
    # ── 52: CIT Group, 2009, Overexposure to Subprime Mortgages ──
    52: {
        'risk_l2': 'Credit Risk — Subprime Exposure',
        'coso_category': 'Strategic',
        'root_cause': 'CIT Group expanded aggressively into subprime lending and leveraged finance before the crisis, then lost access to commercial paper funding as credit markets froze.',
        'risk_id_failure': 'Risk identification failed to connect the credit risk in the loan portfolio with the liquidity risk of the funding model — subprime exposure and wholesale funding dependence were assessed in silos rather than as correlated vulnerabilities.',
        'outcome': 'Filed for bankruptcy November 2009 despite receiving $2.3B in TARP funds; emerged from Chapter 11 within weeks.',
    },
    # ── 53: Citigroup, 2008, Overexposure to Subprime Mortgages ──
    53: {
        'risk_l2': 'Credit Risk — Structured Products / CDO Warehouse',
        'coso_category': 'Strategic',
        'root_cause': 'Citigroup retained massive CDO warehousing positions and provided liquidity backstops to off-balance-sheet SIVs that held subprime-linked securities, creating hidden exposures that materialised in the crisis.',
        'risk_id_failure': 'Off-balance-sheet SIV exposures were excluded from the bank\'s risk aggregation framework because liquidity puts were considered remote contingencies, failing to identify that in a systemic crisis all contingent exposures would crystallise simultaneously.',
        'outcome': '$45B TARP bailout; US government took equity stake; eventually repaid; required years of restructuring.',
    },
    # ── 54: Colonial BancGroup, 2009, Overexposure to MBS and Fraud ──
    54: {
        'risk_l2': 'Credit Risk — Mortgage Fraud',
        'coso_category': 'Operations',
        'root_cause': 'Combination of legitimate mortgage-backed securities losses and an internal fraud scheme involving fabricated mortgage loans inflated the bank\'s reported asset quality.',
        'risk_id_failure': 'Risk identification focused on market-driven credit losses but failed to identify that the same origination pipeline producing those losses also contained fabricated loan documentation, as fraud detection and credit risk were managed separately.',
        'outcome': 'Seized by FDIC August 2009; sold to BB&T (now Truist); executives later convicted of fraud.',
    },
    # ── 55: Commerzbank (Germany), 2008, Overexposure to Subprime Mortgages ──
    55: {
        'risk_l2': 'Credit Risk — Subprime / Structured Products',
        'coso_category': 'Strategic',
        'root_cause': 'Commerzbank and its subsidiary Eurohypo accumulated substantial exposure to US subprime MBS and structured credit products seeking yield in a low-rate European environment.',
        'risk_id_failure': 'Risk identification treated AAA-rated US structured products as safe diversification away from domestic German exposure, failing to identify that the credit ratings masked correlated subprime risk and that geographic diversification into unfamiliar US mortgage markets introduced model and information risks.',
        'outcome': '€18.2B government stabilisation (SoFFin); part-nationalised; state reduced stake over following decade.',
    },
    # ── 56: Commonwealth Bank (Australia), 2018, Money Laundering ──
    56: {
        'risk_l2': 'Compliance Risk — AML Failure',
        'coso_category': 'Compliance',
        'root_cause': 'CBA\'s intelligent deposit machines were exploited for money laundering, with the bank failing to report over 53,000 suspicious cash transactions as required by AUSTRAC regulations.',
        'risk_id_failure': 'When deploying intelligent deposit machines, risk identification focused on operational efficiency and customer experience but failed to identify that anonymous cash deposit capability without adequate real-time AML monitoring created a systemic money laundering vulnerability.',
        'outcome': 'Record AUD 700M AUSTRAC fine; CEO resigned; Royal Commission scrutiny; comprehensive compliance overhaul.',
    },
    # ── 57: Cooperative Bank (UK), 2013, Mismanagement and Governance Failures ──
    57: {
        'risk_l2': 'Operational Risk — Governance / Integration Failure',
        'coso_category': 'Operations',
        'root_cause': 'The Co-op Bank\'s attempt to acquire Britannia Building Society brought hidden commercial property losses onto its balance sheet, compounded by governance failures including an unqualified chairman.',
        'risk_id_failure': 'Merger due diligence failed to identify the true scale of Britannia\'s commercial property loan impairments, and the mutual governance model placed individuals without banking expertise in oversight roles, leaving risk identification without competent challenge at board level.',
        'outcome': 'Required £1.5B rescue; bondholders bailed in; lost ethical banking credentials; hedge fund investors took control.',
    },
    # ── 58: Countrywide Financial, 2008, Subprime Mortgage Lending and Fraud ──
    58: {
        'risk_l2': 'Credit Risk — Subprime Origination',
        'coso_category': 'Strategic',
        'root_cause': 'Countrywide became America\'s largest mortgage originator by aggressively expanding into subprime and Alt-A lending with reduced documentation standards, while retaining significant exposure on balance sheet.',
        'risk_id_failure': 'Risk identification was overridden by the originate-to-distribute model assumption that securitisation transferred risk, failing to identify that retained tranches, warehouse lines, and representations-and-warranties created massive residual exposure to the very loans being originated.',
        'outcome': 'Acquired by Bank of America 2008 for $4B; ultimately cost BofA over $40B in settlements and litigation.',
    },
    # ── 59: Credit Suisse (Switzerland), 2008, Overexposure to Subprime Mortgages ──
    59: {
        'risk_l2': 'Credit Risk — Structured Products',
        'coso_category': 'Strategic',
        'root_cause': 'Credit Suisse traders mispriced CDO positions and concealed losses in the structured products book, with the bank also holding retained securitisation exposure.',
        'risk_id_failure': 'Internal risk identification relied on trader-provided marks for illiquid CDO positions rather than independent price verification, allowing mismarking to persist and obscure the true risk exposure in the structured credit portfolio.',
        'outcome': 'Wrote down $2.85B; no government bailout required; several traders dismissed; independent valuation protocols strengthened.',
    },
    # ── 60: Credit Suisse (Switzerland), 2016, Mozambique\'s Hidden Debt Scandal ──
    60: {
        'risk_l2': 'Compliance Risk — Corrupt Lending',
        'coso_category': 'Compliance',
        'root_cause': 'Credit Suisse bankers arranged $2B in hidden loans to Mozambican state entities, with kickbacks to bankers and officials, that were concealed from the IMF and international donors.',
        'risk_id_failure': 'Sovereign lending risk identification focused on credit analysis of the Mozambican state but failed to identify the corruption risk embedded in the transaction structure, despite red flags including the involvement of intermediaries, the military nature of the borrowers, and the secrecy requirements.',
        'outcome': '$475M in SEC/DOJ settlements (DOJ component attributed to Credit Suisse Group AG); bankers indicted; Mozambique defaulted on the loans; contributed to Credit Suisse\'s eventual demise.',
    },
    # ── 61: Crédit Suisse (Switzerland), 2020, Spying Scandal ──
    61: {
        'risk_l2': 'Operational Risk — Corporate Espionage',
        'coso_category': 'Operations',
        'root_cause': 'Credit Suisse hired private investigators to surveil former executive Iqbal Khan after his departure to rival UBS, in a corporate espionage operation authorised by the COO.',
        'risk_id_failure': 'Reputational and legal risk from corporate surveillance was not identified because the decision was made outside normal governance channels by a senior executive who bypassed the compliance and legal functions entirely.',
        'outcome': 'COO Pierre-Olivier Bouée resigned; CEO Tidjane Thiam subsequently departed; external investigation; reputational damage.',
    },
    # ── 62: Danske Bank (Denmark), 2018, Money Laundering (200 billion) ──
    62: {
        'risk_l2': 'Compliance Risk — AML Failure',
        'coso_category': 'Compliance',
        'root_cause': 'Danske Bank\'s Estonian branch processed approximately €200B in suspicious transactions from non-resident customers, primarily from Russia and former Soviet states, over nearly a decade.',
        'risk_id_failure': 'The Estonian branch operated under local AML oversight that was disconnected from group-level compliance, and Danske\'s risk identification treated the non-resident portfolio as a profitable niche business rather than identifying the extraordinary concentration of high-risk customers flowing through a small peripheral branch.',
        'outcome': 'CEO resigned; €2B fine from Danish/US authorities; Estonian licence withdrawn; stock price halved.',
    },
    # ── 63: DBS (Singapore), 2008, Overexposure to Lehman Structured Products ──
    63: {
        'risk_l2': 'Credit Risk — Counterparty / Structured Products',
        'coso_category': 'Operations',
        'root_cause': 'DBS distributed Lehman Brothers-linked structured notes (minibonds) to retail investors in Singapore and Hong Kong, who suffered total losses when Lehman collapsed.',
        'risk_id_failure': 'Distribution risk and counterparty concentration in structured product sales were not identified as material risks because the products were treated as off-balance-sheet distribution rather than a conduct and reputational exposure to a single issuer\'s creditworthiness.',
        'outcome': 'Compensated affected retail investors; SGD 1B in losses; MAS imposed enhanced suitability requirements for structured product sales.',
    },
    # ── 64: Delta National Bank and Trust Company (US), 2008, Subprime ──
    64: {
        'risk_l2': 'Credit Risk — Subprime Mortgage',
        'coso_category': 'Strategic',
        'root_cause': 'Small community bank became overexposed to subprime mortgage products during the housing boom, with concentrations far exceeding its capital base.',
        'risk_id_failure': 'As a small bank, risk identification lacked the sophistication to assess portfolio-level concentration in subprime products, treating each loan individually rather than identifying the systemic correlation that made the entire book vulnerable to a single market movement.',
        'outcome': 'Closed by OCC 2009; FDIC arranged assumption of deposits; shareholders wiped out.',
    },
    # ── 65: Depfa Bank (Germany), 2008, Overexposure to Public Sector Funding ──
    65: {
        'risk_l2': 'Liquidity Risk — Maturity Mismatch',
        'coso_category': 'Strategic',
        'root_cause': 'Depfa funded long-term public sector loans with short-term wholesale market borrowing, creating an extreme maturity mismatch that became fatal when interbank markets froze.',
        'risk_id_failure': 'Public sector credit quality was conflated with funding liquidity risk — because the underlying assets were government-guaranteed, the severe maturity transformation risk in the funding model was not identified as a threat to solvency.',
        'outcome': 'Acquired by Hypo Real Estate 2007 (which itself required €102B state guarantee); wound down over following decade.',
    },
    # ── 66: Deutsche Bank (Germany), 2018, Money Laundering ──
    66: {
        'risk_l2': 'Compliance Risk — AML Failure',
        'coso_category': 'Compliance',
        'root_cause': 'Deutsche Bank processed approximately $10 billion in suspicious transactions through its Moscow mirror-trading scheme between 2011 and 2015, converting roubles to dollars via matched equity trades.',
        'risk_id_failure': 'The mirror-trading scheme exploited the gap between equities trading surveillance (which saw matched trades as routine) and AML monitoring (which tracked cash flows), with neither function identifying that the combined pattern constituted a massive money-laundering mechanism.',
        'outcome': '$630M combined UK/US fines; multiple compliance overhauls; contributed to years of regulatory scrutiny and strategic retrenchment.',
    },
    # ── 67: Dewan Housing Finance Corporation (India), 2019, Fraud ──
    67: {
        'risk_l2': 'Internal Fraud — Related-Party Lending',
        'coso_category': 'Operations',
        'root_cause': 'DHFL promoters allegedly siphoned approximately $2B through shell companies and fictitious borrowers, using the housing finance company as a personal financing vehicle.',
        'risk_id_failure': 'Promoter-controlled governance structure meant risk identification had no independence from the very individuals perpetrating the fraud, and external auditors failed to identify the web of shell companies receiving diverted funds.',
        'outcome': 'Referred to NCLT for insolvency 2019; acquired by Piramal Group; promoters arrested for fraud.',
    },
    # ── 68: Dexia (Belgium), 2011, Overexposure to Greek Debt ──
    68: {
        'risk_l2': 'Credit Concentration — Sovereign',
        'coso_category': 'Strategic',
        'root_cause': 'Dexia held large positions in Greek and other peripheral European sovereign bonds while funding through short-term wholesale markets, creating compounding credit and liquidity risk.',
        'risk_id_failure': 'Having already been rescued in 2008, Dexia\'s risk identification failed to learn from the first crisis — sovereign debt was again treated as risk-free, and the reconstituted risk framework did not identify that the same maturity mismatch vulnerability persisted in the restructured entity.',
        'outcome': 'Second bailout 2011; broken up across Belgium, France, Luxembourg; placed in orderly wind-down.',
    },
    # ── 69: Enron, 2001, Accounting Fraud ──
    69: {
        'risk_l2': 'Internal Fraud — Special Purpose Entity Manipulation',
        'coso_category': 'Reporting',
        'root_cause': 'Enron used thousands of special purpose entities to conceal debt, inflate revenues, and manipulate earnings, with the complicity of management, auditors, and legal advisors.',
        'risk_id_failure': 'Risk identification failed because the SPE structures were deliberately designed to fall outside consolidation rules, and the complexity of the arrangements exceeded the analytical capacity of both internal risk functions and the board — who relied on assurances from the CFO who was personally profiting from the entities.',
        'outcome': 'Filed for bankruptcy December 2001; largest US bankruptcy at the time; executives convicted; Arthur Andersen destroyed; catalyst for Sarbanes-Oxley.',
    },
    # ── 70: Equifax (US), 2017, Data Breach ──
    70: {
        'risk_l2': 'Operational Risk — Cyber Security',
        'coso_category': 'Operations',
        'root_cause': 'Equifax failed to patch a known Apache Struts vulnerability for over two months, allowing hackers to access personal data of 147 million consumers.',
        'risk_id_failure': 'The risk identification process treated software patching as a routine IT operational matter rather than identifying that unpatched vulnerabilities in internet-facing systems holding 147 million records represented a critical and time-sensitive risk requiring executive-level urgency.',
        'outcome': '$1.38 billion — comprising up to $425M consumer restitution fund, $175M state penalties, and the remainder in compliance and security spending; CEO, CIO, and CISO departed; comprehensive cybersecurity overhaul mandated.',
    },
    # ── 71: Equitable Life (UK), 2000, Over-optimistic valuation of liabilities ──
    71: {
        'risk_l2': 'Insurance Risk — Liability Valuation',
        'coso_category': 'Strategic',
        'root_cause': 'Equitable Life guaranteed annuity rates to policyholders that became unaffordable as interest rates fell, but continued writing new business rather than reserving for the growing liability.',
        'risk_id_failure': 'Actuarial risk identification systematically underestimated the guaranteed annuity rate liability by using optimistic interest rate assumptions, and the mutual governance structure lacked external shareholders who might have challenged the unsustainable promise-versus-reserve gap.',
        'outcome': 'Closed to new business 2000; policyholders lost up to 40% of fund value; UK government paid £1.5B in compensation after parliamentary inquiry.',
    },
    # ── 72: Erste Group Bank (Austria), 2014, Overexposure to Eastern European Markets ──
    72: {
        'risk_l2': 'Credit Risk — Emerging Market Concentration',
        'coso_category': 'Strategic',
        'root_cause': 'Erste\'s expansion into Romania, Hungary, and other CEE markets generated substantial NPLs as these economies contracted, with FX-denominated lending amplifying borrower stress.',
        'risk_id_failure': 'CEE expansion was identified as a growth strategy but the compound risk of foreign-currency lending to local-currency earners in countries with limited crisis track records was not assessed as a concentration risk — geographic diversification was assumed to reduce rather than increase portfolio risk.',
        'outcome': '€1.6B goodwill write-down and loan loss provisions; recovered through subsequent CEE economic growth.',
    },
    # ── 73: Fannie Mae, 2004, Accounting Fraud ──
    73: {
        'risk_l2': 'Internal Fraud — Earnings Manipulation',
        'coso_category': 'Reporting',
        'root_cause': 'Fannie Mae management manipulated earnings through improper accounting for derivatives and loan loss reserves to meet bonus targets and present stable earnings growth.',
        'risk_id_failure': 'The implicit government guarantee created a culture where Fannie Mae was considered too important to fail, and risk identification — both internal and regulatory — was undermined by the political influence the GSE wielded to resist oversight and maintain favourable accounting treatment.',
        'outcome': '$11B restatement; CEO Franklin Raines and CFO departed; OFHEO imposed consent order; preceded the 2008 conservatorship.',
    },
    # ── 74: Fannie Mae and Freddie Mac, 2008, Overexposure to MBS ──
    74: {
        'risk_l2': 'Credit Risk — Mortgage Portfolio Concentration',
        'coso_category': 'Strategic',
        'root_cause': 'The two GSEs guaranteed or held $5.3 trillion in mortgage-backed securities, and as housing prices declined, the thin capital buffer was overwhelmed by losses on the mortgage portfolio.',
        'risk_id_failure': 'Risk identification was structurally compromised by the GSEs\' dual mandate — maximising homeownership access while managing credit risk — with political pressure consistently winning over risk limits, and the implicit government guarantee suppressing market discipline that would normally have constrained exposure growth.',
        'outcome': 'Placed into government conservatorship September 2008; $187B taxpayer support; remain in conservatorship.',
    },
    # ── 75: First National Bank of Keystone (USA), 1999, Fraud and Operational Risk ──
    75: {
        'risk_l2': 'Internal Fraud — Loan Portfolio Manipulation',
        'coso_category': 'Operations',
        'root_cause': 'Management inflated the bank\'s reported assets by misrepresenting the value of mortgage loan pools and retaining servicing rights without proper accounting.',
        'risk_id_failure': 'Rapid asset growth from a small community bank should have triggered enhanced risk identification scrutiny, but regulators and auditors accepted reported values without independently verifying the composition and valuation of the rapidly-growing securitisation portfolio.',
        'outcome': 'Closed by OCC 1999; $800M FDIC loss; largest bank failure in West Virginia history.',
    },
    # ── 76: Fortis (Belgium), 2008, Inadequate Risk Management during ABN AMRO Acquisition ──
    76: {
        'risk_l2': 'Strategic Risk — Acquisition Risk',
        'coso_category': 'Strategic',
        'root_cause': 'Fortis participated in the consortium acquisition of ABN AMRO at the peak of the market, paying €24B for its share while the credit crisis was already unfolding, without adequate capital buffers.',
        'risk_id_failure': 'Strategic risk identification failed to recognise that completing the largest bank acquisition in history during a developing credit crisis created existential risk — the deal timeline meant that by completion, market conditions had fundamentally changed, but no mechanism existed to re-evaluate the risk after the initial commitment.',
        'outcome': 'Broken up across three countries; Belgian operations nationalised then sold to BNP Paribas; Dutch operations nationalised.',
    },
    # ── 77: Fortis (Belgium/Netherlands), 2008, Overexposure to Subprime leading to insolvency ──
    77: {
        'risk_l2': 'Credit Risk — Subprime / Acquisition Leverage',
        'coso_category': 'Strategic',
        'root_cause': 'The ABN AMRO acquisition drained capital precisely when subprime losses materialised across both Fortis\'s legacy portfolio and the acquired ABN AMRO assets.',
        'risk_id_failure': 'Risk identification assessed the ABN AMRO acquisition and subprime exposure as separate risk items rather than identifying their interaction — the acquisition reduced capital buffers at exactly the moment when subprime losses required additional capital, creating a compounding spiral.',
        'outcome': 'Required €11.2B government rescue; broken up; largest corporate failure in Benelux history.',
    },
    # ── 78: Freddie Mac, 2003, Accounting Fraud ──
    78: {
        'risk_l2': 'Internal Fraud — Earnings Smoothing',
        'coso_category': 'Reporting',
        'root_cause': 'Freddie Mac manipulated accounting for mortgage-related investments to smooth earnings volatility, understating income by $5B over several years to create hidden reserves.',
        'risk_id_failure': 'Similar to Fannie Mae, the GSE\'s political influence and implicit government guarantee meant that risk identification — both internal and from the weak regulator OFHEO — lacked the independence and authority to challenge management\'s accounting choices.',
        'outcome': '$5B restatement; $125M SEC fine; CEO and CFO departed; preceded the 2008 conservatorship.',
    },
    # ── 79: Fremont General Corporation, 2007, Subprime Lending and Regulatory Issues ──
    79: {
        'risk_l2': 'Credit Risk — Subprime Origination',
        'coso_category': 'Compliance',
        'root_cause': 'Fremont aggressively originated subprime loans with high loan-to-value ratios and reduced documentation, which deteriorated rapidly as housing prices declined.',
        'risk_id_failure': 'Origination volume and short-term profitability metrics displaced risk identification — lending standards were progressively weakened to maintain origination volumes, and the risk function lacked the authority to constrain the business model when early delinquency indicators were still within tolerance.',
        'outcome': 'FDIC cease-and-desist order 2007; exited subprime lending; filed for bankruptcy 2008.',
    },
    # ── 80: Glitnir (Iceland), 2008, Overexposure to Wholesale Funding Market ──
    80: {
        'risk_l2': 'Liquidity Risk — Wholesale Funding Dependence',
        'coso_category': 'Strategic',
        'root_cause': 'Glitnir expanded internationally using short-term wholesale funding to finance long-term loans, creating an extreme maturity and currency mismatch.',
        'risk_id_failure': 'The Icelandic regulatory framework and Glitnir\'s own risk function failed to identify that an island nation\'s banking system had grown to 10x GDP on wholesale funding — a scale at which the sovereign could not credibly backstop the banks, making the implicit guarantee worthless in a crisis.',
        'outcome': 'Nationalised October 2008; placed into receivership; assets transferred to new domestic bank.',
    },
    # ── 81: Global Crossing, 2002, Accounting Fraud and Misrepresentation ──
    81: {
        'risk_l2': 'Internal Fraud — Revenue Fabrication',
        'coso_category': 'Reporting',
        'root_cause': 'Global Crossing inflated revenues through capacity swap transactions with other telecom companies, booking immediate revenue on swaps that had no net economic substance.',
        'risk_id_failure': 'Risk identification failed to detect that swap transactions between telecom peers were circular revenue arrangements rather than genuine sales, partly because the accounting treatment was novel and industry-wide, making it appear as standard practice rather than a risk signal.',
        'outcome': 'Filed for bankruptcy January 2002; SEC investigation; eventually acquired by Singapore Technologies.',
    },
    # ── 82: HBL (Pakistan), 2017, Money Laundering ──
    82: {
        'risk_l2': 'Compliance Risk — AML Failure',
        'coso_category': 'Compliance',
        'root_cause': 'HBL\'s New York branch had persistent AML compliance failures, including inadequate transaction monitoring and insufficient suspicious activity reporting.',
        'risk_id_failure': 'The bank\'s AML risk identification in its US operations was not calibrated to US regulatory expectations, applying home-country compliance standards to a high-risk international banking jurisdiction where far more rigorous monitoring was required.',
        'outcome': 'Fined $225M by NY DFS; required to close New York branch; compliance programme restructured.',
    },
    # ── 83: HBOS (UK), 2008, Overexposure to Property Market leading to insolvency ──
    83: {
        'risk_l2': 'Credit Concentration — Commercial Property',
        'coso_category': 'Strategic',
        'root_cause': 'HBOS\'s corporate banking division under Peter Cummings pursued aggressive commercial real estate and leveraged lending, with individual loan approvals that bypassed normal credit processes.',
        'risk_id_failure': 'HBOS\'s risk identification function raised concerns about corporate banking concentrations but was overruled by the dominant commercial culture — Group Head of Risk Paul Moore was dismissed after warning the board about unsustainable growth, a textbook case of cultural suppression of risk identification.',
        'outcome': 'Emergency merger with Lloyds TSB 2008; £10B+ losses; Peter Cummings banned by FSA; Paul Moore case became emblematic of whistleblower suppression.',
    },
    # ── 84: HealthSouth Corporation, 2003, Accounting Fraud ──
    84: {
        'risk_l2': 'Internal Fraud — Earnings Inflation',
        'coso_category': 'Reporting',
        'root_cause': 'CEO Richard Scrushy directed systematic inflation of earnings by $2.7B over seven years through fictitious revenue entries and manipulated expense accounts.',
        'risk_id_failure': 'The CEO controlled all information flows to the board and audit committee, and risk identification was impossible because the individual responsible for the fraud also controlled the functions designed to detect it — a classic case of governance bypass by a dominant executive.',
        'outcome': 'Scrushy acquitted of accounting fraud (convicted of bribery later); CFO and 15 other executives convicted; $2.7B restatement.',
    },
    # ── 85: HIH Insurance (Australia), 2001, Fraud and Inadequate Risk Management ──
    85: {
        'risk_l2': 'Insurance Risk — Under-Reserving / Fraud',
        'coso_category': 'Operations',
        'root_cause': 'HIH systematically under-reserved for long-tail insurance claims while pursuing aggressive acquisition-led growth, with management concealing the true state of reserves.',
        'risk_id_failure': 'Actuarial risk identification was compromised by management pressure to use optimistic assumptions for long-tail claim reserves, and the rapid acquisition strategy brought unknown liabilities onto the balance sheet without adequate due diligence on acquired reserve adequacy.',
        'outcome': 'Largest corporate collapse in Australian history at the time; $5.3B AUD deficit; Royal Commission; CEO Ray Williams convicted.',
    },
    # ── 86: HSBC, 2012, Money Laundering and Sanctions Breaching ──
    86: {
        'risk_l2': 'Compliance Risk — AML / Sanctions',
        'coso_category': 'Compliance',
        'root_cause': 'HSBC provided banking services to Mexican drug cartels, processed transactions for sanctioned entities in Iran and Libya, and stripped wire transfer information to circumvent US sanctions filters.',
        'risk_id_failure': 'HSBC\'s decentralised country-level compliance model meant that AML and sanctions risk identification operated at local subsidiary level without group-level aggregation, allowing the Mexican subsidiary to process billions in suspicious cash while group compliance had no visibility into the pattern.',
        'outcome': '$1.9B deferred prosecution agreement with DOJ; five-year compliance monitorship; triggered global HSBC compliance transformation.',
    },
    # ── 87: HSH Nordbank (Germany), 2008, Overexposure to Subprime and Shipping ──
    87: {
        'risk_l2': 'Credit Concentration — Shipping / Structured Products',
        'coso_category': 'Strategic',
        'root_cause': 'HSH Nordbank combined heavy shipping finance concentration (as the world\'s largest shipping lender) with exposure to US subprime structured products, creating correlated losses when global trade collapsed.',
        'risk_id_failure': 'Risk identification treated shipping lending and structured credit as diversified exposures, failing to identify that both were correlated to global economic activity — the same crisis that impaired CDO values also collapsed shipping rates, producing simultaneous losses across supposedly diversified portfolios.',
        'outcome': '€10B state guarantee from Hamburg and Schleswig-Holstein; restructured as Hamburg Commercial Bank; privatised 2018.',
    },
    # ── 88: Hwang\'s Archegos Capital Management, 2021, Leverage and Concentration ──
    88: {
        'risk_l2': 'Market Risk — Concentrated Leverage / Prime Brokerage',
        'coso_category': 'Operations',
        'root_cause': 'Bill Hwang used total return swaps to build massive concentrated positions in a handful of stocks with 5-8x leverage across multiple prime brokers, none of whom had visibility into his total exposure.',
        'risk_id_failure': 'Prime brokers (Credit Suisse, Nomura, Morgan Stanley) each identified their bilateral exposure to Archegos as manageable, but none identified the aggregate cross-broker leverage — the family office structure meant no 13F filing was required, and each bank lacked the framework to identify that their client\'s total position was many multiples of what any single broker saw.',
        'outcome': 'Archegos collapsed March 2021; approximately $10 billion in net losses across prime brokers as an estimated $20 billion in concentrated positions were unwound; Credit Suisse lost $5.5B (contributing to its eventual failure); Hwang convicted of fraud.',
    },
    # ── 89: Hypo Alpe-Adria-Bank International (Austria), 2009, Balkans Real Estate ──
    89: {
        'risk_l2': 'Credit Concentration — Emerging Market Real Estate',
        'coso_category': 'Strategic',
        'root_cause': 'The Carinthian state-owned bank expanded aggressively into the Balkans (Croatia, Serbia, Bosnia) with property and infrastructure lending, backed by an implicit Austrian state guarantee that encouraged risk-taking.',
        'risk_id_failure': 'Rapid Balkans expansion was treated as a geographic diversification strategy, but risk identification failed to assess the credit risk of lending into immature property markets with limited legal enforcement, or to recognise that the state guarantee was encouraging rather than mitigating excessive risk-taking.',
        'outcome': 'Nationalised by Austria 2009; €7.6B in losses; wound down via HETA Asset Resolution; Carinthia state nearly bankrupted by guarantee obligations.',
    },
    # ── 90: Hypo Real Estate (Germany), 2008, Overexposure to MBS ──
    90: {
        'risk_l2': 'Credit Risk — Structured Products / Public Finance',
        'coso_category': 'Strategic',
        'root_cause': 'Following its acquisition of Depfa Bank, Hypo Real Estate inherited a massive maturity mismatch and structured product exposure that crystallised when wholesale markets froze.',
        'risk_id_failure': 'The Depfa acquisition due diligence failed to identify the existential liquidity risk in Depfa\'s funding model — a €400B balance sheet funded almost entirely through short-term wholesale markets — because the focus was on credit quality of the public-sector asset book rather than the catastrophic funding vulnerability.',
        'outcome': '€102B government guarantee; nationalised 2009; assets wound down through FMS Wertmanagement bad bank.',
    },
    # ── 91: Hypo Real Estate (Germany), 2008, Overexposure to MBS leading to insolvency ──
    91: {
        'risk_l2': 'Liquidity Risk — Systemic Funding Failure',
        'coso_category': 'Strategic',
        'root_cause': 'The combination of Depfa\'s wholesale funding dependency and Hypo Real Estate\'s own structured product losses created a €64B capital hole that only the German state could fill.',
        'risk_id_failure': 'Enterprise-wide risk aggregation after the Depfa acquisition failed to produce a consolidated view of the combined entity\'s liquidity and credit exposures, with legacy risk systems unable to identify the total exposure across two recently-merged balance sheets in a rapidly-moving crisis.',
        'outcome': 'Required Germany\'s largest financial sector bailout; fully nationalised; restructured into bad bank.',
    },
    # ── 92: ICBC (China), 2020, Overexposure to Bad Loans ──
    92: {
        'risk_l2': 'Credit Risk — NPL Accumulation',
        'coso_category': 'Strategic',
        'root_cause': 'As the world\'s largest bank by assets, ICBC accumulated significant bad loan exposure through policy-directed lending to state-owned enterprises and local government financing vehicles.',
        'risk_id_failure': 'Risk identification was constrained by the dual role of Chinese state banks as both commercial lenders and policy instruments — credit decisions directed by state industrial policy could not be challenged by the risk function, and NPL recognition was delayed by regulatory forbearance and evergreening practices.',
        'outcome': 'Absorbed losses through state capital support and special asset management company transfers; continued operations as systemically important state bank.',
    },
    # ── 93: Icelandic Banks (Kaupthing, Landsbanki, Glitnir), 2008, Overexpansion ──
    93: {
        'risk_l2': 'Strategic Risk — Systemic Overexpansion',
        'coso_category': 'Strategic',
        'root_cause': 'Three Icelandic banks collectively grew to 10x the nation\'s GDP through aggressive international expansion funded by wholesale markets, creating a banking system that the sovereign could not credibly backstop.',
        'risk_id_failure': 'Neither the banks nor the Icelandic regulator identified the systemic risk created by a banking system vastly exceeding the fiscal capacity of the sovereign, because each bank\'s risk assessment focused on its individual balance sheet without considering the national-level concentration and the impossibility of a credible lender-of-last-resort function.',
        'outcome': 'All three banks collapsed October 2008; Iceland imposed capital controls; IMF bailout; currency collapsed; Special Investigation Commission appointed.',
    },
    # ── 94: Icesave (Iceland), 2008, Overexposure to Wholesale Funding Market ──
    94: {
        'risk_l2': 'Liquidity Risk — Cross-Border Deposit Risk',
        'coso_category': 'Strategic',
        'root_cause': 'Landsbanki\'s Icesave internet savings product attracted £4.5B in UK and Dutch deposits offering above-market rates, creating cross-border deposit liabilities that Iceland\'s deposit guarantee scheme could not cover.',
        'risk_id_failure': 'Risk identification treated Icesave deposits as stable retail funding without identifying the run risk inherent in offering premium rates through an online-only channel with no branch relationship, or the sovereign risk created by accumulating foreign deposit liabilities beyond the host nation\'s guarantee capacity.',
        'outcome': 'Deposits frozen; UK invoked anti-terrorism legislation; Iceland-UK-Netherlands dispute lasted years; depositors eventually compensated from Landsbanki estate.',
    },
    # ── 95: IndyMac Bancorp, 2008, Overexposure to Alt-A Loans ──
    95: {
        'risk_l2': 'Credit Risk — Alt-A Mortgage Concentration',
        'coso_category': 'Strategic',
        'root_cause': 'IndyMac specialised in Alt-A mortgages (between prime and subprime) with reduced documentation, retaining significant exposure on balance sheet rather than distributing it.',
        'risk_id_failure': 'IndyMac\'s risk identification treated Alt-A as fundamentally different from subprime based on borrower FICO scores, failing to identify that reduced-documentation lending systematically attracted borrowers who could not qualify under full documentation — making the actual credit risk closer to subprime than the Alt-A label suggested.',
        'outcome': 'Seized by OTS July 2008; second-largest bank failure in US history at that time; FDIC loss estimated at $10.7B.',
    },
    # ── 96: Irish Life and Permanent (Ireland), 2010, Overexposure to Property Loans ──
    96: {
        'risk_l2': 'Credit Concentration — Property / Circular Deposits',
        'coso_category': 'Reporting',
        'root_cause': 'IL&P concentrated in Irish residential mortgages and engaged in circular interbank transactions with Anglo Irish Bank to artificially inflate deposit figures in financial statements.',
        'risk_id_failure': 'The circular deposit scheme reveals that risk identification was subordinated to managing market perception — rather than identifying and addressing the genuine funding vulnerability, management chose to disguise it through transactions that themselves created additional reputational and legal risk.',
        'outcome': 'Required €4B state recapitalisation; renamed Permanent TSB; circular transaction scheme led to executive prosecutions.',
    },
    # ── 97: Irish Nationwide Building Society (Ireland), 2010, Overexposure to Commercial Property ──
    97: {
        'risk_l2': 'Credit Concentration — Commercial Real Estate',
        'coso_category': 'Operations',
        'root_cause': 'Managing Director Michael Fingleton ran INBS as a personal fiefdom, concentrating lending in commercial property development with minimal credit analysis or board oversight.',
        'risk_id_failure': 'Risk identification was impossible in a governance structure where one individual controlled all lending decisions, credit approval, and board information — the building society model provided no external shareholder pressure and the board exercised no independent challenge of the MD\'s concentrated property lending.',
        'outcome': '€5.4B government bailout; merged into IBRC (with Anglo Irish); liquidated 2013; Fingleton never successfully prosecuted.',
    },
    # ── 98: Irwin Financial Corporation, 2009, Overexposure to Home Equity Loans ──
    98: {
        'risk_l2': 'Credit Risk — Home Equity / Second Lien',
        'coso_category': 'Strategic',
        'root_cause': 'Irwin Financial concentrated in home equity lending, which suffered disproportionate losses because second-lien positions are subordinated to first mortgages in default.',
        'risk_id_failure': 'Risk identification for home equity lending focused on individual borrower creditworthiness without identifying the structural subordination risk — that in a systemic property downturn, second-lien recovery rates would approach zero as first mortgages consumed all available collateral value.',
        'outcome': 'Filed for bankruptcy September 2009; banking subsidiary Irwin Union Bank seized by FDIC.',
    },
    # ── 99: JPMorgan Chase (London Whale), 2012, Poorly Supervised Proprietary Trading ──
    99: {
        'risk_l2': 'Market Risk — Proprietary Trading / Hedging',
        'coso_category': 'Operations',
        'root_cause': 'JPMorgan\'s Chief Investment Office in London built massive synthetic credit positions ostensibly as portfolio hedges, but which became speculative bets that lost $6.2B when markets moved against them.',
        'risk_id_failure': 'The CIO office was classified as a hedging function rather than a trading desk, which exempted it from the bank\'s proprietary trading risk limits and VaR monitoring — risk identification failed because the organisational classification of the activity determined the level of oversight, and the hedge designation was never independently challenged.',
        'outcome': '$920M in regulatory fines; "London Whale" trader Bruno Iksil cooperated; managers Julien Grout and Javier Martin-Artajo charged; JPMorgan absorbed losses.',
    },
    # ── 100: Kaupthing (Iceland), 2008, Overexposure to Wholesale Funding Market ──
    100: {
        'risk_l2': 'Liquidity Risk — Wholesale Funding Dependence',
        'coso_category': 'Strategic',
        'root_cause': 'Kaupthing grew to Iceland\'s largest bank through acquisitions funded by wholesale markets, with assets reaching 6x Iceland\'s GDP.',
        'risk_id_failure': 'Risk identification did not incorporate the concept of sovereign backstop capacity — the bank assessed its own liquidity position without identifying that its scale relative to the Icelandic economy meant no credible lender of last resort existed for its wholesale funding needs.',
        'outcome': 'Collapsed October 2008; placed in receivership; domestic operations transferred to new entity; former executives convicted of market manipulation.',
    },
    # ── 101: Kaupthing Bank (Iceland), 2008, Overexpansion and Insufficient Capital ──
    101: {
        'risk_l2': 'Strategic Risk — Overleveraged Expansion',
        'coso_category': 'Strategic',
        'root_cause': 'Kaupthing\'s international acquisition spree was funded by leverage and related-party lending to its own shareholders, creating circular capital and hidden concentration.',
        'risk_id_failure': 'Related-party lending to major shareholders for the purpose of buying the bank\'s own shares created circular capital that inflated solvency metrics, and this self-referencing exposure was not identified by risk functions because the lending appeared to be to creditworthy individual borrowers rather than a systemic solvency manipulation.',
        'outcome': '$50B in assets seized; largest Icelandic corporate failure; multiple executives imprisoned for fraud and market manipulation.',
    },
    # ── 102: Knight Capital (US), 2012, Software Glitch in Trading Algorithm ──
    102: {
        'risk_l2': 'Operational Risk — Technology / Algorithmic Trading',
        'coso_category': 'Operations',
        'root_cause': 'A software deployment error activated dormant code that executed millions of erroneous trades in 45 minutes, accumulating $440 million in market losses ($460 million total including remediation costs) before the system was shut down.',
        'risk_id_failure': 'Pre-deployment testing and change management processes did not identify that the code release contained a configuration that would activate legacy trading logic, and no automated kill-switch existed to halt trading when position accumulation exceeded predefined thresholds at the speed algorithmic systems can generate.',
        'outcome': 'Lost $440 million in market losses within 45 minutes ($460 million total); required emergency capital injection; acquired by Getco (now Virtu Financial) 2013.',
    },
    # ── 103: Kreditanstalt (Austria), 1931, Overexposure to Post-War Debt ──
    103: {
        'risk_l2': 'Credit Concentration — Sovereign / Industrial',
        'coso_category': 'Strategic',
        'root_cause': 'Austria\'s largest bank held concentrated exposure to Central European industrial credits that became impaired as the post-WWI economic order collapsed, triggering a banking crisis that spread across Europe.',
        'risk_id_failure': 'Risk identification could not conceive of systemic sovereign default across multiple Central European states simultaneously — the bank\'s credit assessment treated industrial and sovereign exposures as diversified across countries without identifying the common vulnerability to post-war economic fragility.',
        'outcome': 'Government bailout failed to prevent contagion; triggered European banking crisis of 1931; contributed to Great Depression deepening; event studied as prototype of systemic risk.',
    },
    # ── 104: Laiki Bank (Cyprus), 2013, Insolvency due to overexposure to Greek debt ──
    104: {
        'risk_l2': 'Credit Concentration — Sovereign / Cross-Border',
        'coso_category': 'Strategic',
        'root_cause': 'Laiki (Cyprus Popular Bank) held massive exposure to Greek government bonds and operated a large Greek subsidiary, creating double exposure to the Greek crisis.',
        'risk_id_failure': 'Greek sovereign exposure was treated as eurozone sovereign risk (zero risk weight) and the Greek subsidiary operations were assessed separately from the bond portfolio, failing to identify the compound concentration where both the investment book and the operating business were exposed to the same single-country risk.',
        'outcome': 'Resolved under bail-in 2013; uninsured depositors lost nearly everything; bank wound down; largest institution resolved under new EU framework.',
    },
    # ── 105: Landesbank Sachsen (Germany), 2007, Overexposure to SIVs ──
    105: {
        'risk_l2': 'Credit Risk — Off-Balance-Sheet Conduits',
        'coso_category': 'Strategic',
        'root_cause': 'Sachsen LB\'s Dublin-based conduit Ormond Quay held €17B in structured credit products funded by short-term commercial paper, with a full liquidity backstop guarantee from the parent bank.',
        'risk_id_failure': 'The off-balance-sheet conduit structure placed the exposure outside the bank\'s primary risk reporting framework, and the liquidity guarantee — which represented a multiple of the bank\'s capital — was treated as a contingent liability unlikely to crystallise rather than an actual risk position requiring capital.',
        'outcome': 'First German bank casualty of the US subprime crisis (August 2007); emergency takeover by LBBW; state of Saxony provided guarantee.',
    },
    # ── 106: Landsbanki (Iceland), 2008, Overexposure to Wholesale Funding Market ──
    106: {
        'risk_l2': 'Liquidity Risk — Cross-Border Funding',
        'coso_category': 'Strategic',
        'root_cause': 'Landsbanki funded its international expansion through wholesale markets and the Icesave online deposit product, creating foreign currency liabilities far exceeding the Icelandic central bank\'s reserves.',
        'risk_id_failure': 'The Icesave deposit product was celebrated as an innovation in retail funding diversification, but risk identification failed to recognise that attracting foreign-currency deposits at premium rates from a jurisdiction where the sovereign could not guarantee them created a fundamentally unstable funding structure.',
        'outcome': 'Collapsed October 2008; Icesave deposits frozen; international diplomatic crisis with UK and Netherlands; resolved through winding-up proceedings.',
    },
    # ── 107: Lehman Brothers, 2008, Overexposure to Subprime Mortgages ──
    107: {
        'risk_l2': 'Credit Risk — Subprime / Leverage',
        'coso_category': 'Strategic',
        'root_cause': 'Lehman held $85 billion in mortgage-related assets (including $55 billion in subprime MBS) and used Repo 105 transactions to temporarily remove assets from its balance sheet at reporting dates, concealing the true leverage ratio from investors and regulators.',
        'risk_id_failure': 'Risk identification was actively undermined by the use of Repo 105 to manipulate reported leverage ratios, while the firm\'s risk culture prioritised growth and market share over honest risk assessment — internal critics were marginalised, and the board lacked the expertise to independently evaluate the CRO\'s increasingly urgent warnings.',
        'outcome': 'Filed for bankruptcy September 2008 — largest in US history ($639B assets); triggered global financial panic; no government bailout; Barclays and Nomura acquired pieces.',
    },
    # ── 108: Lincoln Savings and Loan, 1989, Fraudulent Business Practices ──
    108: {
        'risk_l2': 'Internal Fraud — Regulatory Capture',
        'coso_category': 'Compliance',
        'root_cause': 'Charles Keating used Lincoln S&L to make speculative real estate and junk bond investments while his political contributions influenced five US senators to pressure regulators to back off oversight.',
        'risk_id_failure': 'Regulatory risk identification was directly corrupted through political interference — the "Keating Five" scandal demonstrated how regulatory capture can disable the external risk identification mechanism that is supposed to compensate for weak internal governance.',
        'outcome': 'Seized by FHLBB 1989; $3.4B cost to taxpayers; Keating convicted of fraud; "Keating Five" senators censured; catalysed S&L reform legislation.',
    },
    # ── 109: Lloyd\'s of London (UK), 2001, World Trade Center Insurance Dispute ──
    109: {
        'risk_l2': 'Insurance Risk — Catastrophe / Aggregation',
        'coso_category': 'Strategic',
        'root_cause': 'The September 11 attacks produced the largest insurance loss in history at that time, with Lloyd\'s syndicates exposed through multiple layers of property, liability, aviation, and business interruption coverage.',
        'risk_id_failure': 'Catastrophe risk identification models did not include a scenario combining coordinated terrorist attacks on multiple high-value insured properties in a single city, and aggregation risk across multiple syndicates covering different aspects of the same underlying event was not identified at the market level.',
        'outcome': '$5.6B in claims for Lloyd\'s market; fundamentally reshaped catastrophe modelling to include terrorism; led to creation of government-backed terrorism insurance pools.',
    },
    # ── 110: Lloyds TSB (UK), 2013, Payment Protection Insurance (PPI) Mis-selling ──
    110: {
        'risk_l2': 'Conduct Risk — Product Mis-selling',
        'coso_category': 'Compliance',
        'root_cause': 'Lloyds systematically sold PPI policies alongside loans and credit cards to customers who did not need them, could not claim on them, or were unaware they were paying for them.',
        'risk_id_failure': 'PPI sales were treated as a profitable cross-selling activity within normal business operations, and risk identification frameworks did not classify customer suitability as a material risk — sales incentive structures that rewarded PPI attachment rates were not identified as conduct risk drivers until regulatory intervention forced retrospective review.',
        'outcome': 'Over £22B industry-wide PPI redress (Lloyds paid most at £12B+); largest consumer mis-selling scandal in UK history; FCA deadline for claims set at 2019.',
    },
    # ── 111: Long-Term Capital Management, 1998, High Leverage and Market Risk ──
    111: {
        'risk_l2': 'Market Risk — Leverage / Convergence Trading',
        'coso_category': 'Strategic',
        'root_cause': 'LTCM used 25:1 leverage to trade convergence strategies across global fixed income markets, which failed catastrophically when the Russian crisis caused correlations to spike and liquidity to evaporate across all markets simultaneously.',
        'risk_id_failure': 'LTCM\'s Nobel Prize-winning founders relied on VaR models calibrated to normal market conditions that assumed diversification benefits across markets, failing to identify that in a crisis, the very convergence trades that appeared diversified would all move against the fund simultaneously as correlations went to one.',
        'outcome': 'Fed-brokered $3.6B bailout by consortium of 14 banks; fund wound down; became the defining case study of model overreliance and leverage risk.',
    },
    # ── 112: Luckin Coffee (China), 2020, Accounting Fraud ──
    112: {
        'risk_l2': 'Internal Fraud — Revenue Fabrication',
        'coso_category': 'Reporting',
        'root_cause': 'Luckin Coffee fabricated approximately $310M in sales through fictitious transactions, inflating revenues by ~40% to support its rapid growth narrative and stock price.',
        'risk_id_failure': 'External investors and auditors failed to identify that revenue growth rates were inconsistent with observable store traffic and transaction volumes, with the pressure to identify the "next Starbucks" in China overriding basic plausibility checks on reported per-store economics.',
        'outcome': 'Delisted from NASDAQ; $180M SEC settlement; chairman and CEO removed; company survived in restructured form in China.',
    },
    # ── 113: Maybank (Malaysia), 2015, Overexposure to Oil and Gas Sector ──
    113: {
        'risk_l2': 'Credit Concentration — Commodity Sector',
        'coso_category': 'Strategic',
        'root_cause': 'As Malaysia\'s largest bank, Maybank was heavily exposed to the oil and gas sector which suffered when crude oil prices collapsed from $100 to below $30 per barrel.',
        'risk_id_failure': 'Oil and gas lending was treated as financing for a strategic national sector rather than a commodity concentration risk, and stress testing did not model a sustained oil price decline of 70%+ because such a scenario fell outside the historical reference range used for risk identification.',
        'outcome': 'MYR 1.74B in impairments; tightened sector exposure limits; recovered as oil prices stabilised.',
    },
    # ── 114: Merrill Lynch, 2008, Overexposure to Subprime Mortgages ──
    114: {
        'risk_l2': 'Credit Risk — CDO Retention / Concentration',
        'coso_category': 'Strategic',
        'root_cause': 'Merrill Lynch retained $32 billion in super-senior CDO tranches on balance sheet while simultaneously being one of the largest CDO underwriters, creating enormous concentrated exposure to the subprime market.',
        'risk_id_failure': 'Super-senior CDO tranches were treated as near-risk-free because they would only suffer losses after all junior tranches were wiped out, and risk identification failed to model the scenario where systemic housing market collapse would impair even these supposedly safe tranches — the AAA rating was accepted as a substitute for independent risk analysis.',
        'outcome': 'Emergency sale to Bank of America for $50B (down from $100B peak); CEO Stan O\'Neal ousted; $51.8B in write-downs.',
    },
    # ── 115: Metropolitan Life Insurance Company, 1999, Misrepresentation of Insurance Products ──
    115: {
        'risk_l2': 'Conduct Risk — Sales Practice Violations',
        'coso_category': 'Compliance',
        'root_cause': 'MetLife agents misrepresented whole life insurance policies as retirement savings plans, particularly targeting nurses and other working professionals through workplace sales programs.',
        'risk_id_failure': 'Sales practice risk was not monitored as a conduct risk category — the focus was on policy volumes and lapse rates rather than suitability of advice, and the workplace distribution model was seen as an efficient channel rather than a setting that created pressure-selling dynamics.',
        'outcome': '$1.7B in fines and remediation; class action settlements; industry-wide reform of insurance sales practices.',
    },
    # ── 116: MF Global, 2011, Mismanagement of Funds ──
    116: {
        'risk_l2': 'Operational Risk — Client Asset Segregation',
        'coso_category': 'Operations',
        'root_cause': 'MF Global improperly used $1.6B in segregated customer funds to cover margin calls on the firm\'s proprietary European sovereign bond positions, violating the fundamental broker-dealer obligation to protect client assets.',
        'risk_id_failure': 'The client asset segregation controls were overridden under liquidity pressure, and risk identification failed to flag that the firm\'s proprietary positions had grown to a scale where margin calls could only be met by breaching the client asset boundary — the control was treated as an accounting requirement rather than a hard operational limit.',
        'outcome': 'Filed for bankruptcy October 2011; customer funds shortfall; CEO Jon Corzine (former NJ Governor/Goldman CEO) faced civil charges; settled for $5M.',
    },
    # ── 117: MF Global, 2011, Overexposure to European Sovereign Debt ──
    117: {
        'risk_l2': 'Credit Risk — Sovereign Bond Concentration',
        'coso_category': 'Strategic',
        'root_cause': 'CEO Jon Corzine transformed MF Global from a brokerage into a proprietary trading firm, building a $6.3B portfolio of European sovereign bonds (Italy, Spain, Portugal) using repo-to-maturity financing.',
        'risk_id_failure': 'Risk identification was overridden by CEO authority — the board approved increased risk limits at Corzine\'s request, and when the CRO raised concerns about the concentration in peripheral European sovereign debt, Corzine marginalised the risk function and continued building the position.',
        'outcome': 'Eighth-largest US bankruptcy; $1.6B customer funds missing; catalysed enhanced broker-dealer supervision.',
    },
    # ── 118: Monte dei Paschi (Italy), 2013, Derivative and Accounting Scandal ──
    118: {
        'risk_l2': 'Internal Fraud — Derivative Loss Concealment',
        'coso_category': 'Reporting',
        'root_cause': 'MPS management used complex derivative transactions (Santorini with Deutsche Bank, Alexandria with Nomura) to hide hundreds of millions in losses from a disastrous acquisition of Antonveneta.',
        'risk_id_failure': 'The derivative structures were specifically designed to circumvent risk reporting requirements, exploiting the gap between derivative accounting standards and risk identification frameworks — the transactions appeared as legitimate hedges while actually functioning as financing arrangements to conceal impaired assets.',
        'outcome': '€8B+ in total recapitalisations; world\'s oldest bank (founded 1472) eventually majority state-owned; partial re-privatisation 2024.',
    },
    # ── 119: NAB (Australia), 2020, Money Laundering ──
    119: {
        'risk_l2': 'Compliance Risk — AML Failure',
        'coso_category': 'Compliance',
        'root_cause': 'NAB failed to adequately monitor thousands of transactions for money laundering risk, with systemic weaknesses in its customer due diligence and transaction monitoring processes.',
        'risk_id_failure': 'Despite industry awareness following CBA\'s 2018 AML fine, NAB failed to identify that its own transaction monitoring systems had similar gaps — a failure to learn from peer institution events and apply that intelligence to identify analogous vulnerabilities internally.',
        'outcome': 'AUSTRAC civil penalty proceedings; AUD 15M+ in fines; compliance remediation program mandated.',
    },
    # ── 120: National Century Financial Enterprises (US), 2002, Corporate Fraud ──
    120: {
        'risk_l2': 'Internal Fraud — Ponzi-like Operation',
        'coso_category': 'Operations',
        'root_cause': 'NCFE issued asset-backed notes ostensibly secured by healthcare receivables but used new investor money to pay existing investors and diverted funds to insiders — effectively a healthcare-sector Ponzi scheme.',
        'risk_id_failure': 'Investors and rating agencies failed to identify that the healthcare receivables backing the notes were fabricated or recycled, relying on the company\'s representations and audited financials rather than independent verification of the underlying asset pool.',
        'outcome': 'Filed for bankruptcy 2002; CEO and other executives convicted of fraud; $2.6B in losses to bondholders; auditor PwC paid $80M settlement.',
    },
    # ── 121: New Century Financial Corporation, 2007, Overexposure to Subprime Mortgages ──
    121: {
        'risk_l2': 'Credit Risk — Subprime Origination / Warehouse',
        'coso_category': 'Strategic',
        'root_cause': 'New Century was the second-largest US subprime originator, with a business model entirely dependent on continuous securitisation that collapsed when the secondary market for subprime MBS froze.',
        'risk_id_failure': 'The originate-to-distribute model was assumed to transfer all credit risk, but risk identification failed to recognise that warehouse exposure during the origination pipeline, early payment default clauses, and residual interests created material retained risk that would crystallise if the distribution channel closed.',
        'outcome': 'Filed for bankruptcy April 2007 — one of the first major subprime casualties; KPMG-audited financials later restated; bankruptcy examiner found accounting fraud.',
    },
    # ── 122: NMC Health (UAE), 2019, Accounting Fraud and Debt Concealment ──
    122: {
        'risk_l2': 'Internal Fraud — Debt Concealment',
        'coso_category': 'Reporting',
        'root_cause': 'NMC Health\'s founder concealed over $4B in debt through off-balance-sheet entities and falsified financial statements, while the company was listed on the London Stock Exchange\'s FTSE 100.',
        'risk_id_failure': 'Short-seller Muddy Waters identified discrepancies that the company\'s auditors (Ernst & Young), lenders, and the FCA all missed — the external risk identification ecosystem (auditors, analysts, regulators) failed to identify debt concealment that was eventually uncovered by adversarial analysis of publicly available information.',
        'outcome': 'Placed into administration 2020; $6.6B in hidden debt discovered; founder BR Shetty faced fraud charges; EY investigation launched.',
    },
    # ── 123: Nordea Bank (Sweden), 2019, Money Laundering ──
    123: {
        'risk_l2': 'Compliance Risk — AML Failure',
        'coso_category': 'Compliance',
        'root_cause': 'Nordea\'s branches in Denmark, Finland, and the Baltic states processed suspicious transactions linked to the Russian and Azerbaijani "laundromats" — networks designed to move illicit funds through Nordic banks.',
        'risk_id_failure': 'Despite the Danske Bank scandal providing a clear warning about Baltic AML vulnerabilities, Nordea failed to identify analogous risks in its own Nordic-Baltic operations — peer learning did not translate into enhanced risk identification of similar exposure patterns in its own transaction flows.',
        'outcome': 'Fined SEK 4B by Nordic regulators; relocated headquarters from Stockholm to Helsinki (partly for ECB supervision); compliance overhaul.',
    },
    # ── 124: Northern Rock (UK), 2007, Overexposure to Mortgage Market leading to insolvency ──
    124: {
        'risk_l2': 'Liquidity Risk — Securitisation-Dependent Funding',
        'coso_category': 'Strategic',
        'root_cause': 'Northern Rock funded 75% of its mortgage lending through securitisation and wholesale markets rather than retail deposits, creating existential dependence on continuous market access.',
        'risk_id_failure': 'Northern Rock\'s business model was itself the unidentified risk — the bank explicitly chose wholesale-funded rapid growth as its strategy, and neither internal risk identification nor the FSA identified that this created a binary outcome where any disruption to securitisation markets would be immediately fatal rather than merely painful.',
        'outcome': 'First UK bank run since 1866 (September 2007); nationalised February 2008; eventually sold to Virgin Money; cost taxpayers £2B.',
    },
    # ── 125: Olympus Corporation (Japan), 2011, Accounting Fraud ──
    125: {
        'risk_l2': 'Internal Fraud — Loss Concealment (Tobashi)',
        'coso_category': 'Reporting',
        'root_cause': 'Olympus concealed $1.7B in investment losses since the 1990s through "tobashi" schemes — shuffling losses between off-balance-sheet entities — and disguised the payoff as inflated advisory fees for acquisitions.',
        'risk_id_failure': 'When CEO Michael Woodford questioned the $687M in advisory fees paid for a $2B acquisition, the board fired him rather than investigating — demonstrating that risk identification was actively suppressed by a corporate culture that prioritised institutional face-saving over transparency and treated whistleblowing as disloyalty.',
        'outcome': 'CEO Woodford fired then vindicated; multiple executives convicted; $1.7B restatement; Woodford became internationally recognised whistleblower.',
    },
    # ── 126: Parmalat (Italy), 2003, Accounting Fraud ──
    126: {
        'risk_l2': 'Internal Fraud — Cash Fabrication',
        'coso_category': 'Reporting',
        'root_cause': 'Parmalat founder Calisto Tanzi orchestrated a 15-year fraud that included a fictitious €3.9B Bank of America account, fabricated asset values, and systematic embezzlement through family-owned entities.',
        'risk_id_failure': 'The fraud persisted for 15 years because the bank confirmation process — a fundamental audit procedure — was circumvented through forged documents, and auditors (Grant Thornton, later Deloitte) failed to independently verify the existence of cash balances that constituted the single largest item on the balance sheet.',
        'outcome': 'Filed for bankruptcy December 2003; "Europe\'s Enron"; Tanzi convicted and sentenced to 18 years; €20B in claims.',
    },
    # ── 127: Patisserie Valerie (UK), 2018, Accounting Fraud ──
    127: {
        'risk_l2': 'Internal Fraud — Cash and Revenue Manipulation',
        'coso_category': 'Reporting',
        'root_cause': 'CFO Chris Maysh orchestrated systematic falsification of Patisserie Valerie\'s accounts, overstating cash positions and understating liabilities over several years.',
        'risk_id_failure': 'The company\'s small size and apparently straightforward café business meant that risk identification relied almost entirely on the CFO\'s representations, with no independent treasury function to verify cash positions and auditors (Grant Thornton) failing to detect material misstatements in what should have been a low-complexity audit.',
        'outcome': 'Entered administration January 2019; CFO Marsh convicted; chairman Luke Johnson personally funded rescue attempt; approximately 900 jobs lost.',
    },
    # ── 128: PennyMac (US), 2008, Subprime Mortgage Lending ──
    128: {
        'risk_l2': 'Credit Risk — Subprime Origination',
        'coso_category': 'Strategic',
        'root_cause': 'PennyMac\'s predecessor entity originated substantial volumes of subprime mortgages during the housing boom that suffered severe losses when the market collapsed.',
        'risk_id_failure': 'Subprime origination was treated as a profitable and distributable business line, with risk identification focused on per-loan metrics rather than identifying the systemic risk of originating products where borrowers had minimal equity and limited ability to sustain payments if house prices stopped rising.',
        'outcome': 'Original entity suffered heavy losses; reconstituted PennyMac later profited from buying distressed mortgage assets.',
    },
    # ── 129: Petrobras (Brazil), 2014, Operation Car Wash (Corruption Scandal) ──
    129: {
        'risk_l2': 'External Fraud — Political Corruption',
        'coso_category': 'Compliance',
        'root_cause': 'A massive corruption ring involving Petrobras executives, construction companies, and Brazilian politicians systematically inflated infrastructure contracts and diverted billions in kickbacks.',
        'risk_id_failure': 'As a state-controlled company, Petrobras\'s risk identification for political corruption was structurally compromised — the board included government appointees connected to the very political parties receiving kickbacks, and procurement processes were designed to facilitate rather than prevent the overpricing that funded the corruption.',
        'outcome': '$2.1B+ in asset write-downs; dozens of executives and politicians convicted; former president Lula imprisoned (later released); largest corruption investigation in Latin American history.',
    },
    # ── 130: Pilatus Bank (Malta), 2018, Money Laundering and Fraud ──
    130: {
        'risk_l2': 'Compliance Risk — AML / Sanctions',
        'coso_category': 'Compliance',
        'root_cause': 'Pilatus Bank was used to launder funds linked to Azerbaijani ruling family corruption and other illicit flows, with the bank\'s Iranian-born owner providing little effective AML oversight.',
        'risk_id_failure': 'Malta\'s regulatory framework failed to identify the risks of granting a banking licence to a single-shareholder institution with an owner connected to sanctioned jurisdictions, and the bank\'s own AML function existed in name only — the regulatory jurisdiction was chosen specifically for its light-touch approach.',
        'outcome': 'Licence withdrawn by ECB 2018; connected to the murder of journalist Daphne Caruana Galizia who was investigating Pilatus; owner indicted in US on sanctions charges.',
    },
    # ── 131: Postbank (Ireland), 2010, Liquidity Crisis leading to insolvency ──
    131: {
        'risk_l2': 'Liquidity Risk — Funding Model Failure',
        'coso_category': 'Strategic',
        'root_cause': 'An Post\'s banking subsidiary suffered from deposit flight and inability to raise funding as the Irish banking crisis deepened, with no independent funding diversification.',
        'risk_id_failure': 'Postbank\'s risk identification relied on the assumption that its postal network distribution would provide stable deposit funding, failing to identify that in a systemic banking crisis, even government-adjacent institutions could suffer deposit flight when confidence in the entire Irish banking system collapsed.',
        'outcome': 'Required €500M state support; banking operations eventually wound down; deposit book transferred.',
    },
    # ── 132: PrivatBank (Ukraine), 2016, Large-scale Money-laundering ──
    132: {
        'risk_l2': 'Internal Fraud — Related-Party Lending / AML',
        'coso_category': 'Compliance',
        'root_cause': 'Ukraine\'s largest bank was used by its oligarch owner Igor Kolomoisky to channel $5.5B in loans to related entities through a network of offshore companies, effectively looting the bank.',
        'risk_id_failure': 'In an oligarch-dominated banking system, risk identification had no independence from the beneficial owner who was simultaneously the bank\'s largest borrower — the related-party lending that represented the primary risk was also the bank\'s core business model by design of its controller.',
        'outcome': 'Nationalised December 2016; $5.5B recapitalisation by Ukrainian state; Kolomoisky later sanctioned and charged with fraud.',
    },
    # ── 133: Punjab National Bank (India), 2018, Fraudulent Letter of Undertaking Issuance ──
    133: {
        'risk_l2': 'Operational Risk — Messaging System Fraud',
        'coso_category': 'Operations',
        'root_cause': 'A rogue employee at PNB\'s Brady House branch issued unauthorised Letters of Undertaking via the SWIFT system to Nirav Modi\'s companies, bypassing the bank\'s core banking system (CBS) entirely.',
        'risk_id_failure': 'PNB\'s risk identification failed to detect that the SWIFT messaging system operated independently of the core banking platform — a fundamental control gap where $2B in contingent liabilities were created through one system without appearing in the other, allowing the fraud to continue for seven years undetected.',
        'outcome': 'Largest fraud in Indian banking history; Nirav Modi fled to UK (extradited); employee convicted; forced integration of SWIFT with CBS across Indian banking system.',
    },
    # ── 134: Punjab National Bank (India), 2018, Letter of Undertaking Fraud ──
    134: {
        'risk_l2': 'Operational Risk — Internal Control Bypass',
        'coso_category': 'Operations',
        'root_cause': 'The same SWIFT-CBS disconnect allowed Nirav Modi and Mehul Choksi to obtain $1.8B in fraudulent trade finance guarantees that were rolled over repeatedly without detection.',
        'risk_id_failure': 'Periodic audits and reconciliations between SWIFT messages and CBS records were either not performed or were ineffective, and the risk identification framework did not flag the absence of CBS entries for outstanding SWIFT guarantees as an anomaly requiring investigation.',
        'outcome': 'Part of the broader PNB fraud case; led to industry-wide mandate for SWIFT-CBS integration across all Indian banks.',
    },
    # ── 135: Rabobank (Netherlands), 2013, Libor and Euribor Scandal ──
    135: {
        'risk_l2': 'Conduct Risk — Benchmark Manipulation',
        'coso_category': 'Compliance',
        'root_cause': 'Rabobank traders and submitters systematically manipulated LIBOR and EURIBOR submissions across multiple currencies to benefit the bank\'s trading positions.',
        'risk_id_failure': 'Despite Rabobank\'s cooperative ethos and AAA credit rating projecting an image of conservative risk management, the benchmark manipulation went undetected because conduct risk in rate-setting processes was not monitored, and the bank\'s strong reputation created complacency about the possibility of trader misconduct.',
        'outcome': '$1B fine from US/UK/Dutch regulators; CEO resigned; cooperative reputation severely damaged; 30+ employees disciplined.',
    },
    # ── 136: Raiffeisen Bank (Austria), 2019, Money Laundering and Corruption Allegations ──
    136: {
        'risk_l2': 'Compliance Risk — AML / PEP Exposure',
        'coso_category': 'Compliance',
        'root_cause': 'Raiffeisen faced allegations of facilitating suspicious transactions linked to Russian oligarchs and politically exposed persons through its extensive Central and Eastern European network.',
        'risk_id_failure': 'The bank\'s strategic positioning as the leading Western bank in Russia and CEE was assessed as a business opportunity rather than a compliance risk concentration, with insufficient identification of the AML exposure created by servicing high-risk clients in jurisdictions with weak rule of law.',
        'outcome': 'Under ongoing regulatory scrutiny; ECB increased oversight; ordered to reduce Russian exposure post-2022 invasion; reputational damage.',
    },
    # ── 137: Refco, 2005, Debt Fraud ──
    137: {
        'risk_l2': 'Internal Fraud — Hidden Liabilities',
        'coso_category': 'Reporting',
        'root_cause': 'CEO Phillip Bennett concealed $430M in bad debts by transferring them to an entity he controlled just before each reporting period, then transferring them back afterward — a round-trip fraud sustained over years.',
        'risk_id_failure': 'The fraud was discovered only days after Refco\'s IPO, meaning that the entire IPO due diligence process — including underwriter review, auditor sign-off, and SEC scrutiny — failed to identify the round-trip transactions that were the company\'s largest related-party exposure.',
        'outcome': 'Filed for bankruptcy October 2005 (two months after IPO); Bennett sentenced to 16 years; investors lost billions.',
    },
    # ── 138: Roskilde Bank (Denmark), 2008, Overexposure to Real Estate Market ──
    138: {
        'risk_l2': 'Credit Concentration — Real Estate',
        'coso_category': 'Strategic',
        'root_cause': 'Denmark\'s eighth-largest bank concentrated aggressively in property development lending around Copenhagen during the property boom.',
        'risk_id_failure': 'Rapid loan growth in a single sector and geography was treated as successful business expansion rather than identified as a concentration risk, with the bank\'s risk function unable to constrain a growth-oriented management team in a booming market.',
        'outcome': 'First Danish bank to fail in the financial crisis; taken over by Danish central bank August 2008; wound down.',
    },
    # ── 139: Royal Ahold (Netherlands), 2003, Accounting Fraud ──
    139: {
        'risk_l2': 'Internal Fraud — Revenue Overstatement',
        'coso_category': 'Reporting',
        'root_cause': 'Ahold\'s US subsidiary Foodservice inflated promotional allowances and revenue by over $1B, while European subsidiaries also engaged in accounting irregularities.',
        'risk_id_failure': 'Decentralised management across multiple countries and subsidiaries meant that consolidated risk identification lacked visibility into local accounting practices, and the parent company\'s oversight of the US subsidiary relied on local management representations that proved fraudulent.',
        'outcome': 'CEO and CFO resigned; $1.1B restatement; SEC settlement; Ahold survived but with significantly reduced market capitalisation.',
    },
    # ── 140: Royal Bank of Scotland (UK), 2008, Overexposure to Subprime Mortgages ──
    140: {
        'risk_l2': 'Credit Risk — Subprime / Structured Products',
        'coso_category': 'Strategic',
        'root_cause': 'RBS accumulated massive exposure to US subprime through its Greenwich Capital trading operation, compounded by the ill-timed £49B acquisition of ABN AMRO at the peak of the market.',
        'risk_id_failure': 'The ABN AMRO acquisition due diligence was conducted at extraordinary speed with limited access to the target\'s books, and RBS\'s risk identification framework did not model the combined impact of absorbing ABN AMRO\'s own subprime exposure at the same time as its legacy positions were deteriorating.',
        'outcome': '£45.5B government bailout — largest bank rescue in history; 84% state ownership; CEO Fred Goodwin stripped of knighthood.',
    },
    # ── 141: Royal Bank of Scotland (UK), 2008, Subprime leading to nationalisation ──
    141: {
        'risk_l2': 'Strategic Risk — Acquisition / Capital Adequacy',
        'coso_category': 'Strategic',
        'root_cause': 'The ABN AMRO acquisition consumed RBS\'s capital buffers at exactly the moment when subprime losses required additional capital, making nationalisation inevitable.',
        'risk_id_failure': 'RBS conducted the largest bank acquisition in history without adequate risk identification of the target\'s asset quality, and proceeded despite a developing credit crisis — CEO Fred Goodwin\'s dominance over the board suppressed the challenge function that should have identified the compounding risk of a leveraged acquisition into a deteriorating market.',
        'outcome': 'Required three rounds of government support totalling £45.5B; remained majority state-owned for over 15 years; renamed NatWest Group.',
    },
    # ── 142: Royal Bank of Scotland (UK), 2012, IT Systems Failure ──
    142: {
        'risk_l2': 'Operational Risk — IT Infrastructure',
        'coso_category': 'Operations',
        'root_cause': 'A botched software update to RBS\'s batch processing system locked millions of customers out of their accounts for weeks, with cascading failures across RBS, NatWest, and Ulster Bank.',
        'risk_id_failure': 'Technology risk identification focused on development project risks rather than identifying the vulnerability of running critical payment infrastructure on ageing mainframe systems with inadequate change management controls and disaster recovery — the IT estate had been underinvested during years of cost-cutting post-crisis.',
        'outcome': '£175M FCA/PRA fine; £70M+ in customer compensation; CEO Stephen Hester publicly apologised; triggered industry focus on operational resilience.',
    },
    # ── 143: Satyam Computer Services (India), 2009, Accounting Fraud ──
    143: {
        'risk_l2': 'Internal Fraud — Cash and Revenue Fabrication',
        'coso_category': 'Reporting',
        'root_cause': 'Chairman Ramalinga Raju confessed to fabricating $1.5B in cash and bank balances and inflating revenue figures over several years, in one of India\'s largest corporate frauds.',
        'risk_id_failure': 'Auditor PwC signed off on cash balances that did not exist, failing to perform basic bank confirmation procedures independently — the "India\'s Enron" case demonstrated that risk identification through external audit can fail completely when the auditor accepts management-provided confirmations without independent verification.',
        'outcome': 'Raju confessed January 2009; sentenced to 7 years; Satyam acquired by Tech Mahindra; PwC India banned for 2 years.',
    },
    # ── 144: Sino-Forest Corporation (Canada), 2011, Fraud and Misrepresentation ──
    144: {
        'risk_l2': 'Internal Fraud — Asset Fabrication',
        'coso_category': 'Reporting',
        'root_cause': 'Sino-Forest, listed on the Toronto Stock Exchange, fraudulently inflated the value of its Chinese timber assets using fabricated documentation and intermediary companies.',
        'risk_id_failure': 'The cross-border nature of the fraud exploited the information asymmetry between Canadian capital markets and Chinese forestry assets — investors and auditors could not physically verify timber plantation ownership in remote Chinese provinces, and risk identification relied on documentation that was entirely fabricated.',
        'outcome': 'Short-seller Muddy Waters exposed the fraud; shares suspended; filed for creditor protection; CEO Allen Chan banned from markets.',
    },
    # ── 145: Skye Bank (Nigeria), 2018, Non-performing Loans and Capital Issues ──
    145: {
        'risk_l2': 'Credit Risk — NPL Accumulation',
        'coso_category': 'Operations',
        'root_cause': 'Skye Bank accumulated unsustainable NPL levels, particularly in the oil and gas sector, while governance weaknesses allowed connected lending to erode the capital base.',
        'risk_id_failure': 'Credit risk identification was undermined by insider lending to connected parties and inadequate NPL recognition practices that classified impaired loans as performing, with the Central Bank of Nigeria\'s intervention triggered only after the capital adequacy ratio had deteriorated beyond recovery.',
        'outcome': 'CBN revoked licence 2018; bridge bank Polaris Bank created to assume deposits and performing assets; eventually acquired by Strategic Capital Investment Limited.',
    },
    # ── 146: SNS Reaal (Netherlands), 2013, Overexposure to Property Finance ──
    146: {
        'risk_l2': 'Credit Concentration — Commercial Property',
        'coso_category': 'Strategic',
        'root_cause': 'SNS Bank\'s property finance division accumulated €7.4B in commercial real estate loans, primarily through its SNS Property Finance subsidiary, which became severely impaired in the Dutch property downturn.',
        'risk_id_failure': 'The property finance subsidiary operated with significant autonomy from the parent bank\'s risk framework, and the concentration risk it created relative to group capital was not identified at the enterprise level because the subsidiary\'s growth was managed and reported separately.',
        'outcome': 'Nationalised February 2013; €3.7B cost to Dutch taxpayer; junior creditors expropriated; rebranded as de Volksbank.',
    },
    # ── 147: Société Générale (France), 2008, Unauthorized Trading (Jerome Kerviel) ──
    147: {
        'risk_l2': 'Market Risk — Unauthorised Trading',
        'coso_category': 'Operations',
        'root_cause': 'Junior trader Jerome Kerviel built €50B in hidden positions on European equity index futures by creating fictitious offsetting trades, exploiting his knowledge of back-office control procedures from a previous role.',
        'risk_id_failure': 'Kerviel\'s former back-office experience gave him precise knowledge of which controls to circumvent and when — risk identification was unable to detect his fictitious hedging trades because the control framework assumed that a single junior trader could not understand and systematically exploit the full chain of front-to-back verification processes.',
        'outcome': '€4.9B loss; Kerviel convicted (sentence later reduced on appeal); SocGen survived without government aid; led to industry-wide review of rogue trading controls.',
    },
    # ── 148: Société Générale (France), 2018, Libor and Euribor Scandal ──
    148: {
        'risk_l2': 'Conduct Risk — Benchmark Manipulation',
        'coso_category': 'Compliance',
        'root_cause': 'SocGen traders manipulated LIBOR and EURIBOR submissions to benefit the bank\'s derivatives positions, part of the industry-wide benchmark manipulation that affected multiple banks.',
        'risk_id_failure': 'Benchmark submission conduct risk was not identified as material because the manipulation was industry-wide and incremental — the risk framework did not extend to identifying that the bank\'s own employees were participating in systematic market abuse that had become normalised across the trading floor.',
        'outcome': '$1.34B combined US/European fines; compliance overhaul; contributed to global transition away from LIBOR to risk-free rates.',
    },
    # ── 149: Standard Chartered (UK), 2012, Sanctions Breaching ──
    149: {
        'risk_l2': 'Compliance Risk — Sanctions Evasion',
        'coso_category': 'Compliance',
        'root_cause': 'Standard Chartered processed approximately $250B in transactions for Iranian clients over nearly a decade, stripping wire transfer information to circumvent US sanctions filters.',
        'risk_id_failure': 'The bank\'s compliance function identified the sanctions risk at operational level but senior management in London overruled concerns, treating the Iranian business as commercially important — a case where risk was identified but governance failed to act on the identification, subordinating compliance to revenue.',
        'outcome': '$667M fine from NY DFS and federal regulators; deferred prosecution agreement; compliance monitorship; contributed to industry-wide sanctions compliance overhaul.',
    },
    # ── 150: Stanford Financial Group, 2009, Ponzi Scheme ──
    150: {
        'risk_l2': 'External Fraud — Ponzi Scheme',
        'coso_category': 'Compliance',
        'root_cause': 'Allen Stanford operated a $7B Ponzi scheme through Stanford International Bank in Antigua, promising above-market CD rates funded by new deposits rather than legitimate investments.',
        'risk_id_failure': 'Despite consistently above-market returns from a small Caribbean bank with opaque investment disclosures, feeder networks and investors failed to identify the Ponzi indicators — the SEC also failed, having received tips about Stanford since 1997 but not acting until 2009, demonstrating systemic failure in both private and regulatory risk identification.',
        'outcome': 'Stanford sentenced to 110 years; $7B in investor losses; SEC internally criticised for delayed response.',
    },
    # ── 151: Steinhoff International (South Africa), 2017, Accounting Fraud (€6B) ──
    151: {
        'risk_l2': 'Internal Fraud — Revenue and Asset Inflation',
        'coso_category': 'Reporting',
        'root_cause': 'Steinhoff inflated revenues and asset values by approximately €6B through fictitious transactions with related parties, spanning operations across South Africa, Europe, and Australasia.',
        'risk_id_failure': 'The fraud exploited the complexity of a multinational conglomerate structure with operations across dozens of countries — risk identification could not penetrate the web of intercompany transactions across multiple jurisdictions, and the complexity itself served as camouflage for the fictitious entries.',
        'outcome': 'CEO Markus Jooste resigned; stock price collapsed 90%; €14B in market value destroyed; multiple class-action lawsuits; Jooste died 2023 before facing trial.',
    },
    # ── 152: Steinhoff International (South Africa), 2017, Accounting Fraud ($7.4B) ──
    152: {
        'risk_l2': 'Internal Fraud — Intercompany Manipulation',
        'coso_category': 'Reporting',
        'root_cause': 'The same fraud scheme that inflated European figures also affected the South African and global consolidated accounts, with the total inflation estimated at $7.4B.',
        'risk_id_failure': 'PwC (former auditor) and Deloitte (successor auditor) both failed to identify the scale of intercompany manipulation — the dual-listed structure (Johannesburg and Frankfurt) split regulatory oversight across jurisdictions, with neither regulator having a complete view of the consolidated fraud.',
        'outcome': 'Part of the broader Steinhoff collapse; PwC investigation revealed systematic fraud; company survived through debt restructuring but at fraction of former value.',
    },
    # ── 153: Swedbank (Sweden), 2019, Money Laundering ──
    153: {
        'risk_l2': 'Compliance Risk — AML Failure',
        'coso_category': 'Compliance',
        'root_cause': 'Swedbank\'s Estonian subsidiary processed billions in suspicious transactions from high-risk non-resident clients, with patterns remarkably similar to the Danske Bank scandal.',
        'risk_id_failure': 'Despite the Danske Bank scandal breaking in 2018, Swedbank\'s management denied any similar exposure and failed to proactively investigate its own Estonian operations — risk identification not only missed the original AML failure but then failed to apply peer-event learning to identify an analogous vulnerability that was hiding in plain sight.',
        'outcome': 'CEO Birgitte Bonnesen fired for misleading statements; SEK 4B fine; Swedish and Estonian regulatory enforcement; major governance overhaul.',
    },
    # ── 154: Tatfondbank (Russia), 2017, Misappropriation of Funds ──
    154: {
        'risk_l2': 'Internal Fraud — Asset Stripping',
        'coso_category': 'Operations',
        'root_cause': 'Bank management diverted funds through related-party transactions and shell companies, stripping assets while maintaining a facade of solvency to depositors and regulators.',
        'risk_id_failure': 'Russia\'s banking supervision struggled to identify related-party lending fraud in a system where bank ownership structures were deliberately opaque, and the central bank\'s risk identification tools were insufficient to penetrate the network of shell companies used to disguise connected transactions.',
        'outcome': 'Licence revoked by CBR 2017; RUB 97B hole discovered; triggered depositor protests in Tatarstan; management under criminal investigation.',
    },
    # ── 155: Tesco Bank (UK), 2016, Cyber Attack leading to account balance theft ──
    155: {
        'risk_l2': 'Operational Risk — Cyber Attack',
        'coso_category': 'Operations',
        'root_cause': 'Attackers exploited vulnerabilities in Tesco Bank\'s debit card system to conduct unauthorised transactions on approximately 9,000 customer accounts over a weekend.',
        'risk_id_failure': 'Tesco Bank\'s cyber risk identification did not adequately assess the vulnerability of its contactless debit card infrastructure to coordinated attack, and real-time fraud detection systems were insufficient to identify and block the mass exploitation pattern before significant customer losses occurred.',
        'outcome': '£16.4M FCA fine for failing to protect customers; £2.5M in customer losses refunded; debit card system overhauled.',
    },
    # ── 156: Toshiba (Japan), 2015, Accounting Fraud ──
    156: {
        'risk_l2': 'Internal Fraud — Earnings Manipulation',
        'coso_category': 'Reporting',
        'root_cause': 'Toshiba systematically overstated profits by $1.2B over seven years through percentage-of-completion accounting manipulation on infrastructure projects, driven by top-down pressure to meet unrealistic earnings targets.',
        'risk_id_failure': 'The "challenge" culture at Toshiba — where senior management set unachievable profit targets — was the direct cause of the accounting manipulation, and risk identification was unable to function in an environment where raising concerns about target achievability was treated as personal failure rather than responsible risk management.',
        'outcome': 'CEO and predecessors resigned; $1.2B restatement; delisted from Tokyo Stock Exchange first section; sold Westinghouse nuclear unit; eventually taken private 2023.',
    },
    # ── 157: Tyco International, 2002, Financial Fraud by Executives ──
    157: {
        'risk_l2': 'Internal Fraud — Executive Looting',
        'coso_category': 'Operations',
        'root_cause': 'CEO Dennis Kozlowski and CFO Mark Swartz stole approximately $600M through unauthorised bonuses, forged loans, and fraudulent stock sales while also inflating company revenue through acquisition accounting manipulation.',
        'risk_id_failure': 'The board\'s compensation and audit committees were captured by the CEO, who controlled information flows and board appointments — risk identification of executive misconduct was structurally impossible when the governance bodies designed to provide oversight were themselves compromised by the individuals they were meant to oversee.',
        'outcome': 'Kozlowski and Swartz convicted; sentenced to 8-25 years; $3.2B restatement; Tyco subsequently broken into three companies.',
    },
    # ── 158: UBS (Switzerland), 2008, Overexposure to Subprime Mortgages ──
    158: {
        'risk_l2': 'Credit Risk — Subprime / Structured Products',
        'coso_category': 'Strategic',
        'root_cause': 'UBS\'s Dillon Read Capital Management internal hedge fund and its investment banking division accumulated massive exposure to US subprime MBS and CDOs, resulting in $37.4B in write-downs.',
        'risk_id_failure': 'UBS\'s internal shareholder report identified that the risk function relied on the same models and assumptions as the front office, providing no independent challenge — VaR limits were repeatedly increased at traders\' requests, and the risk identification framework systematically underestimated tail risk in structured credit positions.',
        'outcome': 'CHF 6B government investment; $37.4B write-downs; CEO Marcel Ospel resigned; comprehensive internal investigation and restructuring.',
    },
    # ── 159: UBS (Switzerland), 2008, Overexposure to Subprime leading to insolvency ──
    159: {
        'risk_l2': 'Credit Risk — CDO Super-Senior Retention',
        'coso_category': 'Strategic',
        'root_cause': 'UBS retained approximately $50B in "super-senior" CDO tranches that were considered risk-free, creating concentrated exposure to a single risk factor that was not reflected in the bank\'s risk reporting.',
        'risk_id_failure': 'Super-senior tranches received near-zero risk attribution in internal models because of their AAA rating and seniority, creating a blind spot where the bank\'s largest single-name exposure did not appear as material in risk reports — the risk identification framework\'s reliance on external ratings as a proxy for internal analysis was its fundamental failure.',
        'outcome': 'Part of the broader $37.4B loss; Swiss National Bank created StabFund to absorb $39B in toxic assets; UBS repaid in full by 2013.',
    },
    # ── 160: UBS (Switzerland), 2011, Unauthorized Trading ──
    160: {
        'risk_l2': 'Market Risk — Unauthorised Trading',
        'coso_category': 'Operations',
        'root_cause': 'Trader Kweku Adoboli concealed $2.3 billion in losses from unauthorised ETF trading by creating fictitious hedging positions, exploiting gaps between the bank\'s trading and settlement systems.',
        'risk_id_failure': 'Despite UBS having suffered massively from control failures in 2008, the bank\'s post-crisis risk identification framework still contained gaps in trade surveillance — fictitious trades booked to hedge genuine positions were not independently verified, and the reconciliation processes that should have detected the discrepancies were insufficiently automated.',
        'outcome': 'Adoboli sentenced to 7 years; UBS fined £29.7M by FSA; accelerated UBS\'s strategic exit from large parts of investment banking.',
    },
    # ── 161: UBS (Switzerland), 2013, Unauthorized Trading ──
    161: {
        'risk_l2': 'Market Risk — Unauthorised Trading (Ongoing)',
        'coso_category': 'Operations',
        'root_cause': 'Additional instances of trading control weaknesses emerged in UBS\'s ongoing investigation into trading practices, revealing that the Adoboli case was not an isolated incident.',
        'risk_id_failure': 'The initial Adoboli investigation treated the fraud as an individual rogue trader event rather than identifying it as symptomatic of a broader control environment weakness in the investment bank\'s trading surveillance infrastructure.',
        'outcome': 'CHF 2.2B in losses attributed to broader trading control issues; contributed to strategic decision to dramatically shrink investment banking operations.',
    },
    # ── 162: UBS (Switzerland), 2019, Tax Evasion ──
    162: {
        'risk_l2': 'Compliance Risk — Tax Evasion Facilitation',
        'coso_category': 'Compliance',
        'root_cause': 'UBS was found to have systematically helped French clients evade taxes by sending bankers to France to solicit undeclared accounts, establishing a cross-border tax evasion infrastructure.',
        'risk_id_failure': 'The cross-border wealth management model — sending Swiss-based relationship managers to solicit clients in EU countries — was treated as a normal distribution strategy, and risk identification failed to classify this systematic practice as tax evasion facilitation despite the obvious regulatory risk of helping clients maintain undeclared offshore accounts.',
        'outcome': '€4.5B fine by French court (later reduced to €1.8B on appeal); largest tax evasion penalty in French history; forced transformation of cross-border wealth management model.',
    },
    # ── 163: UBS AG (Switzerland), 2012, Unauthorized Trading ──
    163: {
        'risk_l2': 'Market Risk — Unauthorised Trading',
        'coso_category': 'Operations',
        'root_cause': 'Related to the Adoboli case, UBS AG faced regulatory penalties for the systemic trading control failures that enabled the $2.3B loss.',
        'risk_id_failure': 'Regulatory investigation revealed that UBS\'s three lines of defence model was ineffective — the first line (trading desk) controls were weak, the second line (risk management) lacked real-time surveillance capability, and the third line (internal audit) had not prioritised testing of trade verification controls.',
        'outcome': '$47.6M CFTC fine; FSA enforcement; comprehensive remediation of trading surveillance systems.',
    },
    # ── 164: UniCredit (Italy), 2008, Overexposure to Subprime Mortgages ──
    164: {
        'risk_l2': 'Credit Risk — Subprime / Structured Products',
        'coso_category': 'Strategic',
        'root_cause': 'UniCredit suffered losses from subprime exposure acquired through its German subsidiary HVB and Austrian subsidiary Bank Austria, compounded by CDO positions in its investment banking operations.',
        'risk_id_failure': 'The multi-subsidiary structure across Italy, Germany, and Austria meant that subprime exposures were accumulated across multiple entities without consolidated risk identification at group level — each subsidiary assessed its own positions independently, and aggregate group exposure was not identified until losses began crystallising.',
        'outcome': 'Multiple capital raisings totalling €19.2B; significant restructuring; survived as going concern through aggressive recapitalisation.',
    },
    # ── 165: VBS Mutual Bank (South Africa), 2018, Looting and Fraud ──
    165: {
        'risk_l2': 'Internal Fraud — Systematic Looting',
        'coso_category': 'Operations',
        'root_cause': 'VBS management, auditors, and politically connected individuals systematically looted R2B from the small mutual bank, which primarily served poor rural communities in Limpopo province.',
        'risk_id_failure': 'The mutual bank model with limited external oversight allowed management to capture the governance process entirely — the appointed auditor (KPMG South Africa) signed off on materially misstated accounts, and the South African Reserve Bank\'s supervision of small mutual banks lacked the resources to identify the fraud independently.',
        'outcome': 'Placed under curatorship 2018; R2B looted; KPMG SA fined and restructured; auditor Sipho Malaba struck off; multiple arrests including chairman.',
    },
    # ── 166: Veneto Banca (Italy), 2017, Fraud and Mismanagement ──
    166: {
        'risk_l2': 'Internal Fraud — Share Price Manipulation',
        'coso_category': 'Reporting',
        'root_cause': 'Like Banca Popolare di Vicenza, Veneto Banca artificially inflated its share price by lending customers money to buy its own shares, creating circular capital.',
        'risk_id_failure': 'The circular capital scheme — where lending and share subscription were linked — was not identified by the cooperative governance model or the Italian supervisor as a solvency manipulation, because the lending appeared to be performing and the share subscriptions appeared to be genuine market demand.',
        'outcome': 'Declared failing by ECB 2017; liquidated under Italian insolvency law; good assets sold to Intesa Sanpaolo for €1; Italian government provided €4.8B guarantee.',
    },
    # ── 167: Visa (US), 2019, System Failure leading to transaction disruptions ──
    167: {
        'risk_l2': 'Operational Risk — Technology / Infrastructure',
        'coso_category': 'Operations',
        'root_cause': 'Visa experienced a major payment processing outage affecting millions of transactions across Europe, caused by a hardware failure in its data centre that cascaded through backup systems.',
        'risk_id_failure': 'The single-point-of-failure in Visa\'s European data centre was not identified in business continuity planning because the backup systems were assumed to provide automatic failover — risk identification did not test the scenario where a specific hardware component failure could bypass the redundancy architecture.',
        'outcome': 'Millions of transactions declined; significant reputational damage; Visa invested heavily in data centre resilience and geographic redundancy.',
    },
    # ── 168: Vivendi, 2002, Accounting Fraud ──
    168: {
        'risk_l2': 'Internal Fraud — Earnings Manipulation',
        'coso_category': 'Reporting',
        'root_cause': 'CEO Jean-Marie Messier pursued a debt-fuelled acquisition spree transforming Vivendi from a utility into a media conglomerate, while manipulating earnings to hide the deteriorating financial position.',
        'risk_id_failure': 'The board deferred to Messier\'s charismatic leadership and transformational vision, failing to identify that the aggressive acquisition strategy was creating unsustainable debt levels — risk identification was subordinated to strategic ambition, and financial manipulation went undetected because challenging the CEO was culturally unacceptable.',
        'outcome': 'Messier ousted 2002; €3.1B restatement; near-bankruptcy averted through asset sales; Vivendi eventually stabilised as media group.',
    },
    # ── 169: Wachovia (US), 2008, Overexposure to Subprime Mortgage Market ──
    169: {
        'risk_l2': 'Credit Risk — Option ARM / Subprime',
        'coso_category': 'Strategic',
        'root_cause': 'Wachovia\'s acquisition of Golden West Financial brought $122B in option ARMs (Pick-a-Pay loans) onto its balance sheet, which suffered massive losses when housing prices declined.',
        'risk_id_failure': 'The Golden West acquisition due diligence accepted the target\'s internal assessment of option ARM credit quality without independently stress-testing the portfolio against a national housing price decline — the product had performed well historically in California, but that track record did not include a scenario where home prices fell nationwide.',
        'outcome': 'Emergency sale to Wells Fargo 2008 (beating Citigroup bid); $25 billion in estimated losses — primarily from the Golden West option ARM portfolio; Wachovia brand retired.',
    },
    # ── 170: Washington Mutual, 2008, Overexposure to Mortgage Lending ──
    170: {
        'risk_l2': 'Credit Risk — Subprime / Option ARM',
        'coso_category': 'Strategic',
        'root_cause': 'WaMu became the largest US savings institution by aggressively originating subprime and option ARM mortgages, with a "power of yes" culture that prioritised loan approval over credit quality.',
        'risk_id_failure': 'Risk identification was systematically overridden by the sales culture — internal reports warning about deteriorating loan quality were suppressed by management who rewarded origination volume, and the "power of yes" ethos explicitly positioned risk controls as obstacles to be minimised rather than safeguards to be respected.',
        'outcome': 'Seized by OTS September 2008 — largest bank failure in US history ($307B assets); banking operations sold to JPMorgan Chase for $1.9B.',
    },
    # ── 171: Washington Mutual (US), 2008, Subprime leading to insolvency ──
    171: {
        'risk_l2': 'Credit Risk — Subprime Concentration',
        'coso_category': 'Strategic',
        'root_cause': 'WaMu\'s concentrated mortgage portfolio suffered $16.7B in losses as subprime and option ARM borrowers defaulted en masse, triggering deposit flight that accelerated the failure.',
        'risk_id_failure': 'The bank\'s risk identification framework was deliberately weakened by management to support growth targets — the Chief Enterprise Risk Officer role was marginalised, risk appetite limits were repeatedly raised, and the credit risk function lacked authority to decline loans that met minimum origination criteria even when portfolio-level indicators signalled deterioration.',
        'outcome': 'Part of the broader WaMu collapse — the deposit run in the final days removed $16.7B in deposits in 10 days, triggering the largest bank failure in US history.',
    },
    # ── 172: Wells Fargo (US), 2016, Fake Accounts Scandal ──
    172: {
        'risk_l2': 'Conduct Risk — Unauthorised Account Opening',
        'coso_category': 'Operations',
        'root_cause': 'Wells Fargo employees opened an estimated 3.5 million potentially unauthorised deposit and credit card accounts to meet aggressive cross-selling targets, in a systemic fraud driven by the bank\'s sales incentive culture.',
        'risk_id_failure': 'Risk identification frameworks focused on financial risk metrics and did not identify the conduct risk created by the bank\'s "eight is great" cross-selling targets — the incentive structure that rewarded per-customer product counts was not analysed as a risk driver, and employee whistleblower complaints about the pressure to open potentially unauthorised accounts were treated as HR matters rather than risk signals.',
        'outcome': '$3B DOJ/SEC settlement; CEO John Stumpf resigned; $185M initial CFPB fine; asset-growth restriction imposed by Fed in 2018 (lifted 2025); defining conduct risk case study.',
    },
    # ── 173: WestLB (Germany), 2008, Overexposure to Subprime Mortgages ──
    173: {
        'risk_l2': 'Credit Risk — Subprime / Structured Products',
        'coso_category': 'Strategic',
        'root_cause': 'WestLB, the Landesbank for North Rhine-Westphalia, accumulated substantial exposure to US subprime structured products seeking yield in an environment where its implicit state guarantee lowered funding costs below what its lending margins could support.',
        'risk_id_failure': 'The Landesbank business model — low-cost state-guaranteed funding seeking higher-yielding assets — was itself the unidentified risk, as it structurally incentivised reach-for-yield into complex products the bank lacked the expertise to independently assess.',
        'outcome': 'Received state capital injection; EU Commission determined the Landesbank model constituted illegal state aid; WestLB wound down and split 2012.',
    },
    # ── 174: WestLB (Germany), 2012, SIV failure leading to insolvency ──
    174: {
        'risk_l2': 'Credit Risk — Off-Balance-Sheet Conduits',
        'coso_category': 'Strategic',
        'root_cause': 'WestLB\'s structured investment vehicles and off-balance-sheet conduits held billions in structured credit that generated losses beyond the bank\'s capital absorption capacity.',
        'risk_id_failure': 'SIV exposures sat outside the bank\'s primary risk reporting perimeter and were treated as off-balance-sheet items with remote risk of crystallisation, failing to identify that the liquidity commitments backing these vehicles represented actual rather than contingent economic exposure.',
        'outcome': 'WestLB wound down 2012; split into Portigon AG (bad bank) and Erste Abwicklungsanstalt; €18B in losses; ended the German Landesbank model as previously operated.',
    },
    # ── 175: Westpac (Australia), 2019, Money Laundering and Child Exploitation ──
    175: {
        'risk_l2': 'Compliance Risk — AML / Child Exploitation',
        'coso_category': 'Compliance',
        'root_cause': 'Westpac failed to report 23 million international fund transfers and failed to conduct due diligence on transactions to the Philippines and other jurisdictions associated with child exploitation risks.',
        'risk_id_failure': 'Westpac\'s AML risk identification was calibrated to detect large suspicious transactions but systematically failed to identify patterns of small, frequent transfers to high-risk jurisdictions associated with child exploitation — the AML framework was designed for financial crime detection but not for the specific pattern recognition required to identify child exploitation financing.',
        'outcome': 'Record AUD 1.3B AUSTRAC fine; CEO Brian Hartzer resigned; chairman stepped down early; comprehensive AML overhaul.',
    },
    # ── 176: Wirecard (Germany), 2020, Accounting Fraud ──
    176: {
        'risk_l2': 'Internal Fraud — Revenue and Cash Fabrication',
        'coso_category': 'Reporting',
        'root_cause': 'Wirecard fabricated €1.9B in cash balances at Philippine trustee banks and inflated revenues from third-party acquiring partners in Asia, sustaining the fraud through intimidation of journalists and regulators who questioned the accounts.',
        'risk_id_failure': 'BaFin (German regulator) actively sided with Wirecard against short-sellers and investigative journalists, filing criminal complaints against FT reporters rather than investigating their allegations — the entire risk identification ecosystem was inverted, with the regulator defending the fraudster and prosecuting those who identified the risk.',
        'outcome': 'Filed for insolvency June 2020; CEO Markus Braun arrested; COO Jan Marsalek fled (believed in Russia); BaFin reformed; Germany\'s largest post-war corporate fraud.',
    },
    # ── 177: WorldCom, 2002, Accounting Fraud ──
    177: {
        'risk_l2': 'Internal Fraud — Capitalisation of Operating Expenses',
        'coso_category': 'Reporting',
        'root_cause': 'WorldCom inflated assets by $11B by capitalising ordinary operating expenses as capital expenditure, while CEO Bernie Ebbers also took $400M in undisclosed personal loans from the company.',
        'risk_id_failure': 'External auditor Arthur Andersen failed to detect the capitalisation fraud, and internal risk identification only succeeded when internal auditor Cynthia Cooper independently investigated and discovered the manipulated entries — demonstrating that formal risk identification processes had failed and only an informal, courage-driven investigation uncovered the fraud.',
        'outcome': 'Largest US bankruptcy until Lehman ($180B in claims); Ebbers sentenced to 25 years; Cynthia Cooper became celebrated whistleblower; accelerated passage of Sarbanes-Oxley.',
    },
    # ── 178: Yes Bank (India), 2020, Overexposure to Infrastructure Loans ──
    178: {
        'risk_l2': 'Credit Concentration — Infrastructure / Stressed Assets',
        'coso_category': 'Strategic',
        'root_cause': 'Yes Bank aggressively expanded lending to troubled infrastructure and real estate companies (IL&FS, DHFL, Anil Ambani group) that other banks had declined, seeking growth through risk appetite arbitrage.',
        'risk_id_failure': 'The bank\'s rapid growth strategy involved deliberately lending to borrowers rejected by other banks, but risk identification treated this as contrarian opportunity rather than adverse selection risk — the fact that other institutions had declined these borrowers was not identified as a warning signal but as a competitive opening.',
        'outcome': 'RBI imposed moratorium March 2020; rescued through SBI-led consortium; founder Rana Kapoor arrested for fraud and money laundering.',
    },
}
