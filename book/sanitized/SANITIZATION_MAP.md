# Sanitization Mapping — Master Record

## Institution Aliases

| Real Name | Book Alias | Short Reference |
|---|---|---|
| Credit Suisse (employer) | "a European G-SIB" | "the first institution" / "Institution A" / "the G-SIB" |
| Standard Chartered (employer) | "a UK-regulated international banking group" | "the second institution" / "Institution B" |
| Zurich Insurance (employer) | "a major European insurer" | — |
| Hypo Real Estate (employer) | "a German mortgage bank" | — |
| AIB (employer) | "a leading Irish bank" | — |

## Metric Conversions Applied

| Original | Sanitized |
|---|---|
| "47 risk categories" | "nearly fifty risk categories" |
| "23 risk categories" (Swiss) | "just over twenty" |
| "31 risk categories" (PB) | "around thirty" |
| "23 top-down risks" | "approximately twenty top-down risks" |
| "187 bottom-up risks" | "nearly two hundred bottom-up risks" |
| "12 top-down gaps" | "a dozen top-down gaps" |
| "47 bottom-up gaps" | "nearly fifty bottom-up gaps" |
| "team of 7 across London/Zurich/India" | "a small global team spanning multiple offices" |
| "37 material risks" (Ch 12) | "nearly forty material risks" |
| "eleven other material risks" (Ch 10) | "nearly a dozen other material risks" |
| "connected to nine" (Ch 10) | "connected to almost ten" |

## Chapters Processed

| Chapter | Date | Anonymized | Preserved | Metrics | Status |
|---|---|---|---|---|---|
| 1 | 2026-02-10 | 6 | 2 | 0 | Complete |
| 2 | 2026-02-10 | 3 | 0 | 0 | Complete |
| 3 | 2026-02-10 | 3 | 6 | 0 | Complete |
| 4 | 2026-02-10 | 4 | 3 | 3 | Complete |
| 5 | 2026-02-10 | 2 | 5 | 0 | Complete |
| 6 | 2026-02-10 | 4 | 5 | 0 | Complete |
| 7 | 2026-02-10 | 4 | 8 | 0 | Complete |
| 8 | 2026-02-10 | 5 | 4 | 3 | Complete |
| 9 | 2026-02-10 | 2 | 14 | 0 | Complete |
| 10 | 2026-02-10 | 1 | 9 | 2 | Complete |
| 11 | 2026-02-10 | 3 | 6 | 0 | Complete |
| 12 | 2026-02-10 | 3 | 6 | 2 | Complete |
| 13 | 2026-02-10 | 2 | 8 | 0 | Complete |
| 14 | 2026-02-10 | 2 | 7 | 0 | Complete |
| 15 | 2026-02-10 | 6 | 1 | 3 | Complete |
| 16 | 2026-02-10 | 1 | 7 | 0 | Complete |
| **TOTAL** | — | **51** | **91** | **13** | **All Complete** |

## Summary

- **Total changes applied:** 64 (51 employer name anonymizations + 13 metric conversions)
- **Total public case study references preserved:** 91
- **Chapters with most changes:** Ch 8 (8 changes), Ch 4 (7 changes), Ch 1 (6 changes), Ch 15 (6 changes)
- **Chapters with fewest changes:** Ch 16 (1 change), Ch 10 (1 change), Ch 5 (2 changes), Ch 9 (2 changes), Ch 13 (2 changes), Ch 14 (2 changes)
- **Ambiguous cases flagged:** 3 (all resolved — see delta_08.md for details)

## Notes

- Credit Suisse appears in both contexts (employer AND public case study) in Chapters 1, 6, 8, 9, 15, 16. Each reference was independently classified.
- Standard Chartered appears in both contexts in Chapters 1, 3, 9, 15, 16. Public sanctions/fines references preserved.
- Hypo Real Estate appears in both contexts in Chapter 5. Public failure (nationalisation) preserved; employment anonymized.
- AIB appears only as a public case study reference in Chapter 16 (Allfirst/Rusnak fraud). No employment-context references required anonymization.
- Zurich Insurance employer reference appears in Chapter 2 only.
- Chapter 16 had the special "I have built it twice" transformation applied.
