# Footnote Verification -- Batch 3 (Article 12)

**Article:** wirecard-greensill-emerging-risk-blindness
**Verified:** 2026-02-12
**Method:** WebFetch, curl/pdftotext, Playwright browser

---

| # | Article | FN# | URL | Expected Content | Result | Notes |
|---|---------|-----|-----|-----------------|--------|-------|
| 1 | wirecard-greensill | [1] | https://cdn.gmtresearch.com/public-ckfinder/hall-of-shame/Wirecard%20AG/Financial%20Times_Wirecard%20-%20the%20timeline_Jun25-2020.pdf | FT Wirecard timeline | VALID | PDF loads (200). pdftotext confirms FT article by Dan McCrum (June 25, 2020) covering Wirecard timeline from 1999 founding through collapse. Hosted on GMT Research. |
| 2 | wirecard-greensill | [2] | https://www.pymnts.com/news/security-and-risk/2020/wirecard-lenders-on-the-hook-for-millions/ | PYMNTS on Wirecard lenders | VALID | Page loads with full article. Reports Commerzbank, ING (each EUR 175m losses), Credit Agricole (EUR 110m losses) from Wirecard insolvency. EUR 1.75bn revolving credit facility details included. |
| 3 | wirecard-greensill | [3] | https://www.wirecard.com/uploads/Bericht_Sonderpruefung_KPMG_EN_200501_Disclaimer.pdf | KPMG Wirecard special investigation | VALID | PDF loads (74 pages). Title: "Report Concerning the Independent Special Investigation -- Wirecard AG, Munich" dated April 27, 2020, by KPMG AG Wirtschaftspruefungsgesellschaft. English convenience translation. |
| 4 | wirecard-greensill | [4] | https://www.europarl.europa.eu/RegData/etudes/STUD/2020/651383/IPOL_STU(2020)651383_EN.pdf | EU Parliament Wirecard study | VALID | PDF loads (59 pages). Title: "What are the wider supervisory implications of the Wirecard case? -- Public Oversight Systems for Statutory Auditors in the EU" (PE 651.383, October 2020). Requested by ECON committee. |
| 5 | wirecard-greensill | [5] | https://committees.parliament.uk/publications/6800/documents/72205/default/ | UK Parliament Greensill report | VALID | PDF loads (73 pages). Title: "Lessons from Greensill Capital" -- House of Commons Treasury Committee, Sixth Report of Session 2021-22 (HC 151), published 20 July 2021. Loaded successfully via Playwright; WebFetch returned 403 (bot protection). |
| 6 | wirecard-greensill | [6] | https://www.finma.ch/en/~/media/finma/dokumente/dokumentencenter/myfinma/finma-publikationen/cs-bericht/20231219-finma-bericht-cs.pdf | FINMA Credit Suisse report | VALID | PDF loads (84 pages). Title: "FINMA Report -- Lessons Learned from the CS Crisis", Bern, 19 December 2023. Confirmed via Playwright screenshot. |
| 7 | wirecard-greensill | [7] | https://www.insurtechinsights.com/greensill-casualties-continue-as-marsh-faces-us143-million-lawsuit-over-greensill-insurance/ | Insurtech Insights Marsh lawsuit | VALID | Page loads with full article about White Oak suing Marsh for $143m over Greensill insurance. Details Tokio Marine coverage issues and Marsh's alleged failure to disclose insurance problems. |
| 8 | wirecard-greensill | [8] | https://global.morningstar.com/en-gb/stocks/credit-suisse-s-demise-a-timeline-of-scandal-and-failures | Morningstar CS timeline | VALID | Page loads in Playwright browser. Title: "Credit Suisse's Demise: A Timeline of Scandal and Failures" by Johanna Englundh, 21 Mar 2025. Returns 403 via curl/WebFetch due to CloudFront WAF bot protection, but loads correctly in a real browser. |
| 9 | wirecard-greensill | [9] | https://www.iif.com/portals/0/Files/content/Regulatory/11062019_iif_ey_global_risk_survey_2019.pdf | IIF/EY 2019 risk survey | VALID | PDF loads (HTTP 200, 3.1MB). pdftotext confirms title: "An endurance course: surviving and thriving through 10 major risks over the next decade -- Tenth annual EY/IIF global bank risk management survey". Content matches expected IIF/EY 2019 survey. |
| 10 | wirecard-greensill | [10] | https://www.forescout.com/glossary/digital-operational-resilience-act/ | Forescout DORA | VALID | Page loads with comprehensive DORA overview. Covers all five DORA pillars (ICT Risk Management, Incident Reporting, Resilience Testing, Third-Party Risk, Information Sharing), enforcement date (Jan 17, 2025), penalties (up to 2% worldwide turnover). |

---

## Summary

| Result | Count |
|--------|-------|
| VALID | 10 |
| BROKEN | 0 |
| MISMATCH | 0 |
| REDIRECT | 0 |
| **Total** | **10** |

**All 10 footnote URLs for Article 12 are VALID.** Every URL loads successfully and the content matches the expected footnote description. Two URLs (5, 8) are behind bot protection (403 to automated tools) but load correctly in a full browser.
