# Delta Log: Chapter 2 Sanitization

## Summary
- **Total changes:** 3
- **Anonymizations (Context A):** 3
- **Preservations (Context B):** 0 (no public case studies in this chapter)

---

## Change 1 — Line 11 (employer reference, first mention in chapter)
- **Original:** `At Credit Suisse, when I built the risk identification process in 2016, one of the first things I had to establish was the standards architecture.`
- **Sanitized:** `At a European G-SIB, when I built the risk identification process in 2016, one of the first things I had to establish was the standards architecture.`
- **Rule:** Credit Suisse as employer → "a European G-SIB" (first mention in chapter)

## Change 2 — Line 151 (employer reference, subsequent mention)
- **Original:** `When I built the process at Credit Suisse, we used the COSO cube as a completeness check.`
- **Sanitized:** `When I built the process at the institution, we used the COSO cube as a completeness check.`
- **Rule:** Credit Suisse as employer → "the institution" (subsequent mention)

## Change 3 — Line 211 (employer reference, first mention of Zurich Insurance)
- **Original:** `At Zurich Insurance, where I spent five years as Solvency II Project Manager before moving to the dealing floor`
- **Sanitized:** `At a major European insurer, where I spent five years as Solvency II Project Manager before moving to the dealing floor`
- **Rule:** Zurich Insurance as employer → "a major European insurer"

---

## Ambiguous Cases: None
All instances were clearly Context A (employer references). Chapter 2 contains no public case study references to named institutions.
