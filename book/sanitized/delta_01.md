# Delta Log: Chapter 1 Sanitization

## Summary
- **Total changes:** 6
- **Anonymizations (Context A):** 6
- **Preservations (Context B):** 2 instances deliberately kept

---

## Change 1 — Line 7 (employer reference, first mention)
- **Original:** `I was appointed Global Head of Risk Identification at Credit Suisse.`
- **Sanitized:** `I was appointed Global Head of Risk Identification at a European G-SIB.`
- **Rule:** Credit Suisse as employer → "a European G-SIB" (first mention in chapter)

## Change 2 — Line 9 (employer reference, subsequent mention)
- **Original:** `How does Credit Suisse currently identify its risks?`
- **Sanitized:** `How does the institution currently identify its risks?`
- **Rule:** Credit Suisse as employer → "the institution" (subsequent mention)

## Change 3 — Line 13 (employer reference, subsequent mention)
- **Original:** `Credit Suisse was, at the time, one of the largest banks in the world.`
- **Sanitized:** `The G-SIB was, at the time, one of the largest banks in the world.`
- **Rule:** Credit Suisse as employer → "The G-SIB" (subsequent mention)

## Change 4 — Line 15 (employer reference, first mention)
- **Original:** `When I moved to Standard Chartered in 2023 as Risk Identification Lead`
- **Sanitized:** `When I moved to a UK-regulated international banking group in 2023 as Risk Identification Lead`
- **Rule:** Standard Chartered as employer → "a UK-regulated international banking group" (first mention in chapter)

## Change 5 — Line 170 (employer reference, special phrasing)
- **Original:** `I have built it twice — at Credit Suisse and at Standard Chartered`
- **Sanitized:** `I have built it twice — at two globally significant institutions, one a European G-SIB and the other a UK-regulated international banking group`
- **Rule:** Special rule for "I have built it twice" sentence

## Change 6 — No change needed (PRESERVED)
*The following public case study references were deliberately PRESERVED:*

### Line 73 — Standard Chartered sanctions case (PUBLIC)
- **Text:** `At Standard Chartered, the compliance function identified the sanctions risk in the Iranian business.`
- **Action:** PRESERVED — this is a public regulatory enforcement case, not an employer reference
- **Rule:** Context B — public failure case study with named institution

### Line 91 — Credit Suisse / Archegos case (PUBLIC)
- **Text:** `At Credit Suisse, the risk culture that allowed Archegos to accumulate $20 billion in exposure through total return swaps...`
- **Action:** PRESERVED — this is a public failure case study documented by regulators
- **Rule:** Context B — public failure case study with named institution

---

## Ambiguous Cases: None
All instances were clearly either Context A (employer) or Context B (public case study).
