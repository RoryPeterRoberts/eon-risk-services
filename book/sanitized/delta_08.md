# Sanitization Delta — Chapter 08

## Changes Made

| # | Original | Sanitized | Context |
|---|----------|-----------|---------|
| 1 | "I sat in a conference room in Credit Suisse's London office" | "I sat in a conference room at a European G-SIB" | Author's employment |
| 2 | "twenty-three risks" | "just over twenty risks" | Metric anonymization |
| 3 | "one hundred and eighty-seven risks" | "nearly two hundred risks" | Metric anonymization |
| 4 | "would cost Credit Suisse $5.5 billion" | "would cost the institution $5.5 billion" | Author's employment context (Archegos) |
| 5 | "At Standard Chartered in 2023" | "At a UK-regulated international banking group in 2023" | Author's employment (second institution, first mention) |
| 6 | "twelve top-down risks" | "a dozen top-down risks" | Metric anonymization |
| 7 | "forty-seven bottom-up risks" | "nearly fifty bottom-up risks" | Metric anonymization |
| 8 | "At Credit Suisse, the challenge sessions" | "At the first institution, the challenge sessions" | Author's employment |
| 9 | "Citigroup...SIVs...€50B+ exposure" | [PRESERVED] | Public case study (Citi/TARP bailout) |
| 10 | "HSH Nordbank required...€10B state guarantee" | [PRESERVED] | Public case study |

## Statistics
- Total institution references found: 10
- Anonymized (Context A): 8
- Preserved (Context B): 2 (Citigroup and HSH Nordbank public cases)
- Metrics anonymized: 4

## Notes
- Standard Chartered first appearance: anonymized to "a UK-regulated international banking group"
- Credit Suisse references: anonymized to "a European G-SIB" (first institution) or "the institution" (subsequent)
- All specific numeric metrics from author's internal experience anonymized per mapping table
- Citigroup SIV/TARP case fully preserved with all public figures
- HSH Nordbank shipping/subprime case fully preserved with all public figures
- Archegos reference in mixed context: preserved loss figure but anonymized employer reference
