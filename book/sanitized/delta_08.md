# Sanitization Delta — Chapter 08

## Changes Made

| # | Original | Sanitized | Rule |
|---|----------|-----------|------|
| 1 | "I sat in a conference room in Credit Suisse's London office" | "I sat in a conference room at a European G-SIB" | Context A: author's employment (first mention in chapter) |
| 2 | "twenty-three risks identified by the CRO" | "just over twenty risks identified by the CRO" | Internal metric anonymization |
| 3 | "one hundred and eighty-seven risks documented" | "nearly two hundred risks documented" | Internal metric anonymization |
| 4 | "At Standard Chartered in 2023" | "At a UK-regulated international banking group in 2023" | Context A: author's employment (Institution B, first mention in chapter) |
| 5 | "At Credit Suisse, the first reconciliation cycle produced twelve top-down risks...and forty-seven bottom-up risks" | "At Institution A, the first reconciliation cycle produced a dozen top-down risks...and nearly fifty bottom-up risks" | Context A: author's employment + internal metric anonymization (2 metrics) |
| 6 | "At Credit Suisse, the challenge sessions were" | "At Institution A, the challenge sessions were" | Context A: author's employment |
| 7 | "The Credit Suisse example from this chapter's opening" | "The example from this chapter's opening" | Context A: back-reference to author's institutional experience in opening anecdote |

## Preserved (Context B — public case studies)

| # | Reference | Reason |
|---|-----------|--------|
| 1 | Credit Suisse — Archegos Capital Management, $5.5 billion loss (line 21) | Public Archegos case study — Credit Suisse named as victim in public record |
| 2 | Archegos Capital Management — total return swap exposure, multiple prime brokers (line 21) | Public case study |
| 3 | Citigroup — SIVs, off-balance-sheet CDOs, liquidity puts, $49B SIV assets consolidated, $45B TARP bailout (lines 99–117) | Public crisis case study |
| 4 | HSH Nordbank — world's largest shipping lender, €10B state guarantee, restructured as Hamburg Commercial Bank, privatised 2018 (lines 157–159) | Public crisis case study |
| 5 | All footnote references to Credit Suisse Group reports (Paul, Weiss), FCIC reports, HSH Nordbank reports | Public citations — footnotes never anonymized |

## Footnotes
- All 9 footnotes ([^ch8-1] through [^ch8-9]) preserved exactly as source
- No footnote content anonymized (all reference public regulatory documents, commission reports, and published institutional reports)

## Statistics
- Total institution references requiring classification: 10
- Anonymized (Context A — employer): 4 (3 Credit Suisse as employer, 1 Standard Chartered as employer)
- Preserved (Context B — public case): 4 (Credit Suisse/Archegos, Citigroup/SIVs/TARP, HSH Nordbank, Archegos Capital Management)
- Internal metrics anonymized: 4 (twenty-three→just over twenty, one hundred and eighty-seven→nearly two hundred, twelve→a dozen, forty-seven→nearly fifty)

## Notes
- Credit Suisse appears as BOTH employer (anonymized) AND Archegos victim (preserved) in this chapter — distinction maintained sentence-by-sentence
- Line 21: "would cost Credit Suisse $5.5 billion" is PRESERVED because this is the public Archegos case study (Context B)
- Line 21: "I had left the institution by then" — "the institution" is the author's natural phrasing; no change needed (already anonymized by context)
- Line 133: "The Credit Suisse example" removed because it back-references the author's opening anecdote (Context A), not the public Archegos case
- Standard Chartered appears ONLY as employer context in this chapter — anonymized to "a UK-regulated international banking group" (first mention)
- Credit Suisse employer references anonymized to "a European G-SIB" (first mention) then "Institution A" (subsequent)
- All four internal metrics converted to words per mapping table: "twenty-three"→"just over twenty", "one hundred and eighty-seven"→"nearly two hundred", "twelve"→"a dozen", "forty-seven"→"nearly fifty"
- First-person narrative fully preserved throughout
- Citigroup case study (lines 99–117) preserved in full with all figures — entirely public record
- HSH Nordbank case study (lines 157–159) preserved in full with all figures — entirely public record
