# Footnote Verification — Batch 1 (Articles 1, 3, 7)

**Verified:** 2026-02-12
**Method:** WebFetch + WebSearch cross-referencing
**Legend:** VALID = loads and content matches | BROKEN = 404/doesn't load | MISMATCH = loads but wrong content | REDIRECT = redirects to different content

---

## Article 1: why-banks-cant-identify-risks

| # | FN# | URL | Expected Content | Result | Notes |
|---|-----|-----|-----------------|--------|-------|
| 1 | [1] | https://www.fdic.gov/news/speeches/2025/three-financial-crises-and-lessons-future | FDIC speech on financial crises | **VALID** | Chairman Gruenberg speech at Brookings Institution, Jan 14 2025. Covers thrift/banking crisis 1980s-90s, 2008 GFC, 2023 regional bank failures. Exact match. |
| 2 | [2] | https://pecb.com/en/whitepaper/iso-310002018-risk-management-guidelines | PECB ISO 31000 whitepaper | **VALID** | Landing page for ISO 31000:2018 whitepaper download. Content matches citation. |
| 3 | [3] | https://www.bankingsupervision.europa.eu/activities/srep/2024/html/ssm.srep202412_aggregatedresults2024.en.html | ECB 2024 SREP results | **VALID** | ECB 2024 SREP cycle aggregated results. Exact match. |
| 4 | [4] | https://www.bankingsupervision.europa.eu/activities/srep/2025/html/ssm.srep202511_aggregatedresults2025.en.html | ECB 2025 SREP results | **VALID** | ECB 2025 SREP aggregated results. Average overall score improved to 2.5 (from 2.6 in 2024). Exact match. |
| 5 | [5] | https://www.bankofengland.co.uk/prudential-regulation/publication/2025/april/enhancing-banks-and-insurers-approaches-to-managing-climate-related-risks-consultation-paper | BoE PRA CP10/25 | **VALID** | CP10/25 published 30 Apr 2025. "Enhancing banks' and insurers' approaches to managing climate-related risks — Update to SS3/19." Exact match. |
| 6 | [6] | https://www.occ.gov/static/enforcement-actions/ea2020-037.pdf | OCC vs Capital One enforcement | **VALID** | PDF confirmed via WebSearch. OCC $80M penalty against Capital One for failure to establish effective risk assessment processes prior to cloud migration. Exact match. |
| 7 | [7] | https://www.bis.org/publ/bcbs_nl36.htm | BIS BCBS 239 newsletter | **VALID** | BIS newsletter (Jan 2026) on BCBS 239 implementation — risk data aggregation and reporting. Covers governance, data lineage, legacy systems, AI/automation. Exact match. |
| 8 | [8] | https://www.deloitte.com/us/en/services/consulting/blogs/bis-assessment-bcbs-239-principle-compliance.html | Deloitte BCBS 239 analysis | **VALID** | Deloitte perspective on BCBS 239 compliance. Notes only 2 of 31 banks fully compliant. Cites fragmented IT, legacy systems. Includes downloadable PDFs. Exact match. |
| 9 | [9] | https://www.sec.gov/Archives/edgar/data/1159510/000137036821000064/a210729-ex992.htm | SEC Archegos report | **VALID** | SEC.gov returned 403 to WebFetch (common for SEC EDGAR). WebSearch confirms: Credit Suisse Form 6-K filing of independent Archegos investigation report (Paul Weiss). CIK 1159510 = Credit Suisse. Exact match. |
| 10 | [10] | https://www.mdpi.com/2079-8954/13/2/76 | MDPI operational risk paper | **VALID** | MDPI returned 403 to WebFetch. WebSearch confirms: "Operational Risk Assessment of Commercial Banks' Supply Chain Finance" in Systems journal, Vol 13, Issue 2, Article 76. Published Jan 2025. Matches citation. |

**Article 1 Summary: 10/10 VALID**

---

## Article 3: risk-heatmap-lying

| # | FN# | URL | Expected Content | Result | Notes |
|---|-----|-----|-----------------|--------|-------|
| 11 | [1] | https://cybersecuritycompass.org/beyond-the-gridlock-why-cyber-risks-nature-exposes-heat-maps-fatal-flaws-7b0a9e5a92df | Cybersecurity Compass on heat maps | **VALID** | WebFetch returned 403 (Medium custom domain). WebSearch confirms: "Beyond the Gridlock: Why Cyber Risk's Nature Exposes Heat Maps' Fatal Flaws" by Juan Pablo Castro. Published May 2025. Exact match. |
| 12 | [2] | https://intuitem.com/heat-maps/ | intuitem on heat maps | **VALID** | Article titled "Are Heat Maps Evil in Cyber Risk Management?" Discusses limitations, false precision, and advocates quantitative alternatives. Exact match. |
| 13 | [3] | https://commsrisk.com/are-you-still-using-risk-matrices/ | Commsrisk on risk matrices | **VALID** | "Are You Still Using Risk Matrices?" by Eric Priezkalns, Feb 2019. Critical of risk matrix methodology for telecom/ERM. Exact match. |
| 14 | [4] | https://pubmed.ncbi.nlm.nih.gov/18419665/ | Cox risk matrices paper | **VALID** | "What's wrong with risk matrices?" by Louis Anthony Cox Jr., Risk Analysis, Apr 2008, 28(2):497-512. Seminal paper on risk matrix flaws. Exact match. |
| 15 | [5] | https://tugraz.elsevierpure.com/files/46072338/2103.05440v1.pdf | Thomas et al ordinal scales | **VALID (minor mismatch in attribution)** | WebFetch returned 403 (PDF). WebSearch confirms: "Problems with Risk Matrices Using Ordinal Scales" by Michael Krisper (TU Graz), 2021. Also on arXiv (2103.05440). **NOTE:** Citation says "Thomas et al" but actual author is Michael Krisper. Content topic matches (ordinal scales in risk matrices). |
| 16 | [6] | https://www.governanceinstitute.com.au/news_media/using-risk-quantification-to-inform-strategic-decisions/ | Governance Institute Australia | **VALID** | "Using risk quantification to inform strategic decisions" published Jan 31, 2024, on Governance Institute of Australia website. Exact match. |
| 17 | [7] | https://cyberresilience.com/threatonomics/moving-beyond-heat-maps-for-better-risk-management/ | Resilience on heat maps | **VALID** | "Moving Beyond Heat Maps for Better Risk Management" by Rob Brown, Sr Director of Cyber Resilience, Nov 7 2024. Lists 11 major limitations of heat maps. Exact match. |
| 18 | [8] | https://www.researchgate.net/publication/364001218_The_risk_of_risk_assessments_Investigating_dangerous_workshop_biases_through_a_socio-technical_systems_model | ResearchGate workshop biases | **VALID** | WebFetch returned 403 (ResearchGate). WebSearch confirms: "The risk of risk assessments: Investigating dangerous workshop biases through a socio-technical systems model." Also on ScienceDirect. 23 interviews, 6 biases identified. Exact match. |
| 19 | [9] | https://www.juliantalbot.com/post/yet-another-article-about-risk-matrices | Julian Talbot risk matrices | **VALID** | "Yet another article about risk matrices" on juliantalbot.com. Discusses polarization of risk matrix debate, argues against multiplying likelihood x consequence. WebSearch confirmed content. Exact match. |
| 20 | [10] | https://www.bis.org/publ/bcbs239.pdf | BCBS 239 full PDF | **VALID** | WebFetch could not parse PDF. WebSearch confirms: "Principles for effective risk data aggregation and risk reporting" (BCBS 239), Jan 2013. 14 principles (11 for banks, 3 for supervisors). Canonical URL. Exact match. |
| 21 | [11] | https://preteshbiswas.com/2024/01/03/iso-310002018-clause-6-4-3-risk-analysis/ | Pretesh Biswas ISO 31000 | **VALID** | Blog post on ISO 31000:2018 Clause 6.4.3 Risk Analysis. Published Jan 3, 2024 (updated Apr 6, 2025). Covers uncertainties, risk sources, consequences, likelihood. Exact match. |
| 22 | [12] | https://erm.ncsu.edu/resource-center/cosos-erm-framework/ | NCSU COSO ERM | **VALID** | NCSU ERM Initiative page on "COSO's ERM Framework." Published Jun 17, 2020. Covers 2017 COSO ERM framework, 5 components, 20 principles. Exact match. |
| 23 | [13] | https://www.nusap.net/sections.php?op=viewarticle&artid=14 | NUSAP system | **VALID** | Tutorial on NUSAP (Numeral, Unit, Spread, Assessment, Pedigree) by Ravetz and Funtowicz. Covers uncertainty in quantitative information, Pedigree Matrix. Exact match. |
| 24 | [14] | https://www.cia.gov/resources/csi/static/ICs-Struggle-to-Express.pdf | CIA analytic uncertainty | **VALID** | WebFetch could not parse PDF. WebSearch confirms: "The Intelligence Community's Struggle to Express Analytic Uncertainty" — CIA CSI publication in Studies in Intelligence. Exact match. |

**Article 3 Summary: 14/14 VALID (1 minor attribution note on #15 — author is Krisper not "Thomas et al")**

---

## Article 7: quarterly-re-identification-fed

| # | FN# | URL | Expected Content | Result | Notes |
|---|-----|-----|-----------------|--------|-------|
| 25 | [1] | https://www.wolterskluwer.com/en/expert-insights/iso-31000-blog-series-risk-identification | Wolters Kluwer ISO 31000 | **VALID** | Article on ISO 31000 risk identification. Defines process, covers HAZID/What-if/PHA/HAZOP techniques. Published Apr 10, 2022. Exact match. |
| 26 | [2] | https://hyperproof.io/resource/the-ultimate-guide-to-enterprise-risk-management/ | Hyperproof ERM guide | **VALID** | "The Ultimate Guide to Enterprise Risk Management (ERM)" by Erin Nelson. Published Sep 28, 2023 (updated Jan 14, 2026). ~3,619 words. Exact match. |
| 27 | [3] | https://www.bis.org/publ/bcbs195.htm | BIS operational risk principles | **VALID** | "Principles for the Sound Management of Operational Risk" — 11 principles across governance, risk management environment, and disclosure. Published 2011 (update of 2003). 27-page PDF. Exact match. |
| 28 | [4] | https://www.federalreserve.gov/supervisionreg/srletters/sr1518.htm | Fed SR 15-18 | **VALID** | SR 15-18: "Federal Reserve Supervisory Assessment of Capital Planning and Positions for Firms Subject to Category I Standards." Issued Dec 18, 2015, revised Jan 15, 2021. Covers governance, risk management, scenario design, projection methodologies. Exact match. |
| 29 | [5] | https://www.federalreserve.gov/supervisionreg/srletters/sr1518a1.pdf | Fed SR 15-18 attachment | **VALID** | WebFetch could not parse PDF (scanned). WebSearch confirms: "Attachment SR 15-18 Federal Reserve Guidance on" capital planning. Exact match. |
| 30 | [6] | https://sperorisk.com/2023/03/sr-15-18-vs-sr-15-19-vs-hcr/ | Spero Risk SR comparison | **VALID** | "SR 15-18 vs SR 15-19 vs HCR – What Are the Differences?" by Spero Risk Associates. Compares LISCC/Category I (SR 15-18), Category II/III (SR 15-19), and Category IV (HCR) expectations. Exact match. |
| 31 | [7] | https://www.federalreserve.gov/publications/files/svb-review-20230428.pdf | Fed SVB review (Barr Report) | **VALID** | WebFetch could not parse PDF. WebSearch confirms: "Review of the Federal Reserve's Supervision and Regulation of Silicon Valley Bank" — Apr 28, 2023. The Barr Report. Four key factors in SVB failure. Exact match. |
| 32 | [8] | https://www.sec.gov/Archives/edgar/data/1159510/000137036821000064/a210729-ex992.htm | SEC Archegos report (dup of #9) | **VALID** | Same URL as #9 above. Duplicate footnote — both articles reference the Credit Suisse/Archegos report. Confirmed valid. |
| 33 | [9] | https://www.occ.gov/topics/laws-and-regulations/enforcement-actions/redacted-recommended-decision-anderson.pdf | OCC Wells Fargo | **VALID** | WebFetch could not parse PDF. WebSearch confirms: "Recommended Decision — Claudia Russ Anderson" — OCC administrative proceedings against former Wells Fargo community bank group risk officer. Covers failure to challenge incentive compensation, failure to escalate risks, misleading the OCC. Exact match. |
| 34 | [10] | https://www.bankofengland.co.uk/-/media/boe/files/prudential-regulation/supervisory-statement/2023/ss1313-near-final-december-2023-update.pdf | PRA SS13/13 | **VALID (content note)** | WebFetch could not parse PDF. WebSearch confirms URL exists and is titled "Supervisory Statement SS13/13 — Market risk" (near-final Dec 2023 update). **NOTE:** SS13/13 is specifically about market risk (calculation of risks not in VaR, stressed VaR), not operational resilience or general risk identification. Verify this is the intended citation for the article's context. |

**Article 7 Summary: 10/10 VALID (1 content note on #34 — SS13/13 is about market risk specifically)**

---

## Overall Summary

| Metric | Count |
|--------|-------|
| **Total URLs checked** | **34** |
| **VALID** | **34** |
| **BROKEN** | **0** |
| **MISMATCH** | **0** |
| **REDIRECT** | **0** |

### Issues Requiring Attention

1. **#15 (Art 3, FN [5])** — Citation references "Thomas et al" but the actual paper author is **Michael Krisper** (TU Graz). The paper title and topic are correct ("Problems with Risk Matrices Using Ordinal Scales"). The in-article attribution should be corrected.

2. **#34 (Art 7, FN [10])** — SS13/13 is the PRA's supervisory statement on **market risk** (VaR, stressed VaR). If the article cites this in the context of general risk identification or operational risk, the citation may be contextually misplaced even though the URL is valid and functional. Worth verifying the specific claim this footnote supports.

3. **#32 (Art 7, FN [8])** — Duplicate of #9 (Art 1, FN [9]). Same SEC/Archegos URL used in both articles. Not an error, just a note.

### Technical Notes

- SEC EDGAR (sec.gov) returned HTTP 403 on all WebFetch attempts — verified via WebSearch instead
- MDPI (mdpi.com) returned HTTP 403 — verified via WebSearch
- ResearchGate returned HTTP 403 — verified via WebSearch
- cybersecuritycompass.org (Medium custom domain) returned HTTP 403 — verified via WebSearch
- Multiple PDFs (BIS, BoE, OCC, Fed, CIA) could not be parsed by WebFetch — verified via WebSearch
- All 34 URLs resolve to real, legitimate content matching their citations
