# Sanitization Delta — Chapter 4

## Changes Made

| # | Location | Original Text | Sanitized Text | Rule Applied |
|---|----------|---------------|----------------|--------------|
| 1 | Line 5 (opening paragraph) | "In my first month as Global Head of Risk Identification at Credit Suisse" | "In my first month as Global Head of Risk Identification at Institution A" | Context A: Credit Suisse as employer → "Institution A" |
| 2 | Line 11 | "The investment bank had 47 risk categories" | "The investment bank had nearly fifty risk categories" | Internal metric: 47 → "nearly fifty" (words not digits) |
| 3 | Line 11 | "The Swiss universal bank had 23" | "The universal bank had just over twenty" | Internal metric: 23 → "just over twenty" (words not digits); also removed "Swiss" geographic identifier |
| 4 | Line 11 | "Private banking had 31" | "Private banking had around thirty" | Internal metric: 31 → "around thirty" (words not digits) |
| 5 | Line 149 | "At Credit Suisse, we used the COSO three-dimensional model" | "At Institution A, we used the COSO three-dimensional model" | Context A: Credit Suisse as employer → "Institution A" |
| 6 | Line 234 | "This is why building the common language was the first operational priority at Credit Suisse." | "This is why building the common language was the first operational priority at Institution A." | Context A: Credit Suisse as employer → "Institution A" |

## Preserved (Context B — Public Case Studies)

| # | Location | Text Preserved | Reason |
|---|----------|---------------|--------|
| 1 | Lines 85-101 | JPMorgan Chase / London Whale / Bruno Iksil / $6.2B loss | Public case: JPMorgan CIO trading loss (Senate investigation, SEC proceedings) |
| 2 | Lines 103-115 | Deutsche Bank mirror trading / $10B transactions / $630M fines | Public case: Deutsche Bank AML enforcement (FCA, NYDFS) |
| 3 | Lines 117-129 | Lloyds Banking Group / PPI / £50B industry cost / £22B Lloyds provisions | Public case: PPI mis-selling scandal (FCA data, Lloyds annual reports) |
| 4 | All footnotes [^ch4-1] through [^ch4-11] | All footnote markers and definitions preserved exactly | Footnote preservation rule |

## Statistics
- Total institution-as-employer references found: 3
- Anonymized (Context A): 3
- Internal metrics anonymized: 3 (47→"nearly fifty", 23→"just over twenty", 31→"around thirty")
- Preserved (Context B): 3 public case studies (JPMorgan London Whale, Deutsche Bank mirror trading, Lloyds PPI)
- Footnotes: All 11 ([^ch4-1] through [^ch4-11]) preserved with markers and definitions intact
