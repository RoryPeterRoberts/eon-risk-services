# Footnote Verification -- Batch 2 (Articles 9, 10, 11)

Verified: 2026-02-12

## Summary

- **Total URLs checked:** 20
- **VALID:** 17
- **MISMATCH:** 1
- **BLOCKED (bot protection):** 0
- **BROKEN:** 0
- **Duplicates (cross-article):** 2 (both valid, same as their first occurrence)

## Results

| # | Article | FN# | URL | Expected Content | Result | Notes |
|---|---------|-----|-----|-----------------|--------|-------|
| 1 | Art 9: governance-bypass | [1] | https://www.gov.uk/government/publications/report-into-the-collapse-of-barings-bank | BoE Barings inquiry | VALID | Board of Banking Supervision inquiry into the collapse of Barings, laid before Parliament 18 July 1995. 354-page PDF. Note: authored by Board of Banking Supervision, not BoE directly. |
| 2 | Art 9: governance-bypass | [4] | https://lowellmilkeninstitute.law.ucla.edu/wp-content/uploads/2018/01/WF-Board-Report.pdf | Wells Fargo board report | VALID | "Independent Directors of the Board of Wells Fargo & Company -- Sales Practices Investigation Report -- April 10, 2017". 113 pages. Content matches. |
| 3 | Art 9: governance-bypass | [5] | https://www.justice.gov/archives/opa/pr/wells-fargo-agrees-pay-3-billion-resolve-criminal-and-civil-investigations-sales-practices | DOJ Wells Fargo settlement | VALID | DOJ press release: "Wells Fargo Agrees to Pay $3 Billion to Resolve Criminal and Civil Investigations into Sales Practices". Dated Feb 21, 2020. Site has Akamai bot protection but page loads in browser. |
| 4 | Art 9: governance-bypass | [6] | https://www.sec.gov/Archives/edgar/data/1159510/000137036821000064/a210729-ex992.htm | SEC Archegos/CS report | VALID | "Credit Suisse Group Special Committee of the Board of Directors -- Report on Archegos Capital Management -- July 29, 2021". Content matches exactly. |
| 5 | Art 9: governance-bypass | [8] | https://www.sec.gov/litigation/litreleases/2021/lr25252.htm | SEC Mozambique settlement | MISMATCH | Redirects to https://www.sec.gov/enforcement-litigation/litigation-releases/lr-25252 which is about "Howard S. Kleyman" -- an SEC case charging an attorney with assisting a prime bank scheme (Nov 1, 2021). NOT about Mozambique or Credit Suisse. The correct Mozambique/CS settlement is a different litigation release number. |
| 6 | Art 9: governance-bypass | [10] | https://www.societegenerale.com/sites/default/files/12%20May%202008%20The%20report%20by%20the%20General%20Inspection%20of%20Societe%20Generale.pdf | SocGen Mission Green report | VALID | "Societe Generale -- General Inspection Department -- MISSION GREEN Summary report -- May 20, 2008". 71 pages. Translation from French. URL normalises spaces to hyphens but PDF loads correctly. |
| 7 | Art 9: governance-bypass | [11] | https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/REPORT%20-%20JPMorgan%20Chase%20Whale%20Trades%20(4-12-13).pdf | Senate JPM Whale report | VALID | "JPMorgan Chase Whale Trades: A Case History of Derivatives Risks and Abuses -- Majority and Minority Staff Report -- Permanent Subcommittee on Investigations, United States Senate". 306 pages. Released March 15, 2013. |
| 8 | Art 9: governance-bypass | [12] | https://www.bis.org/bcbs/publ/wp45.pdf | BCBS Working Paper 45 | VALID | "Basel Committee on Banking Supervision -- Working Paper 45 -- Lessons on supervisory effectiveness -- a literature review". 61 pages. July 2025. Content matches. |
| 9 | Art 10: 179-bank-failures | [1] | https://www.federalreserve.gov/publications/review-of-the-federal-reserves-supervision-and-regulation-of-silicon-valley-bank.htm | Fed SVB review | VALID | Federal Reserve review page on supervision and regulation of Silicon Valley Bank. Released April 2023. HTML page with link to full PDF. |
| 10 | Art 10: 179-bank-failures | [3] | https://www.sec.gov/Archives/edgar/data/1159510/000137036821000064/a210729-ex992.htm | SEC Archegos (duplicate) | VALID | Same as #4 above. Duplicate reference across articles. Credit Suisse/Archegos report confirmed. |
| 11 | Art 10: 179-bank-failures | [7] | https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/REPORT%20-%20JPMorgan%20Chase%20Whale%20Trades%20(4-12-13).pdf | Senate JPM Whale (duplicate) | VALID | Same as #7 above. Duplicate reference across articles. Senate Whale report confirmed. |
| 12 | Art 11: concentration-blindness | [1] | https://www.federalreserve.gov/publications/files/svb-review-20230428.pdf | Fed SVB review PDF | VALID | "Review of the Federal Reserve's Supervision and Regulation of Silicon Valley Bank" by Michael S. Barr, Vice Chair for Supervision, April 28, 2023. 118 pages. Direct PDF of the report. |
| 13 | Art 11: concentration-blindness | [3] | https://www.fdic.gov/resources/publications/history-eighties/volume-1/history-80s-volume-1-part1-04.pdf | FDIC S&L history | VALID | "History of the Eighties -- Chapter 4: The Savings and Loan Crisis and Its Relationship to Banking". 22 pages. FDIC historical publication. |
| 14 | Art 11: concentration-blindness | [4] | https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf | FCIC report full PDF | VALID | "The Financial Crisis Inquiry Report -- Final Report of the National Commission on the Causes of the Financial and Economic Crisis in the United States -- Official Government Edition". 663 pages. |
| 15 | Art 11: concentration-blindness | [5] | https://publications.parliament.uk/pa/cm200708/cmselect/cmtreasy/56/56i.pdf | UK Parliament Northern Rock | VALID | "House of Commons Treasury Committee -- The run on the Rock -- Fifth Report of Session 2007-08 -- Volume I". 181 pages. Published 26 January 2008. |
| 16 | Art 11: concentration-blindness | [7] | https://assets.gov.ie/42234/b40d2827610943fbb78e9120fa70e719.pdf | Nyberg Report Ireland | VALID | "Misjudging Risk: Causes of the Systemic Banking Crisis in Ireland -- Report of the Commission of Investigation into the Banking Sector in Ireland -- March 2011". 172 pages. |
| 17 | Art 11: concentration-blindness | [9] | https://www.bis.org/fsi/fsicms4.pdf | BIS Spain banking crisis | VALID | "Financial Stability Institute -- FSI Crisis Management Series No 4 -- The 2008-14 banking crisis in Spain". 62 pages. July 2023. |
| 18 | Art 11: concentration-blindness | [12] | https://www.bis.org/publ/bcbs283.htm | BCBS 283 large exposures | VALID | BIS page for "Supervisory framework for measuring and controlling large exposures". Published April 2014. Standard sets 25% Tier 1 capital limit; 15% between G-SIBs. Effective January 2019. |
| 19 | Art 11: concentration-blindness | [13] | https://www.levyinstitute.org/pubs/wp74.pdf | Minsky Financial Instability | VALID | "Working Paper No. 74 -- The Financial Instability Hypothesis -- by Hyman P. Minsky -- The Jerome Levy Economics Institute of Bard College -- May 1992". 10 pages. |
| 20 | Art 11: concentration-blindness | [14] | https://www.nber.org/system/files/working_papers/w13882/w13882.pdf | Reinhart Rogoff working paper | VALID | "NBER Working Paper Series -- This Time is Different: A Panoramic View of Eight Centuries of Financial Crises -- Carmen M. Reinhart, Kenneth S. Rogoff -- Working Paper 13882 -- March 2008". 125 pages. |

## Issues Requiring Action

### 1. MISMATCH: Article 9, Footnote [8] -- SEC Mozambique settlement

**URL:** `https://www.sec.gov/litigation/litreleases/2021/lr25252.htm`
**Problem:** This litigation release (LR-25252) is about Howard S. Kleyman, charged with assisting a prime bank scheme. It has nothing to do with Mozambique or Credit Suisse.
**Likely correct URL:** The SEC Mozambique/Credit Suisse settlement was announced in October 2021. The correct litigation release number needs to be identified. Possible candidates:
- SEC charged Credit Suisse with FCPA violations related to Mozambique in October 2021
- Try searching SEC.gov for "Mozambique" or "Credit Suisse FCPA" litigation releases from 2021
- The correct URL may be something like `https://www.sec.gov/litigation/litreleases/2021/lr25xxx.htm` with a different release number

**Recommended fix:** Replace with the correct SEC litigation release URL for the Credit Suisse Mozambique FCPA settlement.

## Notes on Verification Method

- All URLs were tested using both WebFetch (HTTP client) and Playwright browser navigation
- PDFs were verified by loading in browser and taking screenshots to confirm title pages
- Content match was assessed by comparing document titles and descriptions against expected content
- Some government sites (DOJ, SEC) have bot protection (Akamai) that blocks automated HTTP requests but pages load correctly in a full browser
- Some PDF URLs showed transient redirect behavior on first load but resolved correctly on retry; final verification was done with stable browser sessions
