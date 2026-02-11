# Delta Log: Chapter 8 Sanitization

## Summary
- **Total changes:** 8
- **Anonymizations (Context A — employer name):** 5
- **Anonymizations (Context A — internal metrics):** 3
- **Preservations (Context B):** 4 public references verified and kept intact

---

## Change 1 — Line 5 (Opening anecdote, employer name)
- **Context:** Author describing sitting in conference room at his employer
- **Original:** `...I sat in a conference room in Credit Suisse's London office with two printouts...`
- **Sanitized:** `...I sat in a conference room at a European G-SIB's London office with two printouts...`
- **Rule:** First mention of Credit Suisse as employer → "a European G-SIB"

## Change 2 — Line 5 (Opening anecdote, internal metric)
- **Context:** Number of top-down risks from first SWIFT workshop
- **Original:** `...twenty-three risks identified by the CRO...`
- **Sanitized:** `...approximately twenty top-down risks identified by the CRO...`
- **Rule:** "23 top-down risks" → "approximately twenty top-down risks"

## Change 3 — Line 5 (Opening anecdote, internal metric)
- **Context:** Number of bottom-up risks from consolidated submissions
- **Original:** `...one hundred and eighty-seven risks documented using the standardised template...`
- **Sanitized:** `...nearly two hundred risks documented using the standardised template...`
- **Rule:** "187 bottom-up risks" → "nearly two hundred bottom-up risks"

## Change 4 — Line 33 (Where Most Banks Fail section, employer name)
- **Context:** Author describing reconciliation documentation at Standard Chartered
- **Original:** `At Standard Chartered in 2023, one of the first things I examined was the reconciliation documentation from the prior cycle.`
- **Sanitized:** `At the second institution, one of the first things I examined was the reconciliation documentation from the prior cycle.`
- **Rule:** Standard Chartered as employer → "the second institution". Note: removed "in 2023" to further decouple from identifying information.

## Change 5 — Line 53 (Step 1: Gap Analysis, employer name + internal metrics)
- **Context:** Author describing first reconciliation results at Credit Suisse with exact gap counts
- **Original:** `At Credit Suisse, the first reconciliation cycle produced twelve top-down risks with no bottom-up match and forty-seven bottom-up risks with no top-down equivalent.`
- **Sanitized:** `At the first institution, the first reconciliation cycle produced a dozen top-down risks with no bottom-up match and nearly fifty bottom-up risks with no top-down equivalent.`
- **Rule:** Credit Suisse as employer → "the first institution"; "12 top-down gaps" → "a dozen top-down gaps"; "47 bottom-up gaps" → "nearly fifty bottom-up gaps"

## Change 6 — Line 83 (Step 4: Challenge, employer name)
- **Context:** Author describing challenge sessions at Credit Suisse
- **Original:** `At Credit Suisse, the challenge sessions were the most productive...`
- **Sanitized:** `At the first institution, the challenge sessions were the most productive...`
- **Rule:** Credit Suisse as employer → "the first institution"

## Change 7 — Line 133 (Common Exposures section, employer reference)
- **Context:** Back-reference to the opening anecdote about cross-counterparty concentration
- **Original:** `The Credit Suisse example from this chapter's opening illustrates the second type...`
- **Sanitized:** `The opening example from this chapter illustrates the second type...`
- **Rule:** Reference to "Credit Suisse example" in context of author's employment → neutral phrasing. This avoids confusion since Credit Suisse also appears as a public case study (Archegos) in the same chapter.

## Change 8 — Not a change, but a verification (Line 21, Archegos)
- **Original:** `...the collapse of Archegos Capital Management would cost Credit Suisse $5.5 billion.`
- **Sanitized:** PRESERVED — no change
- **Rule:** Credit Suisse Archegos ($5.5B) is a public case study → KEEP "Credit Suisse"

---

## Preserved Public Case Studies (Context B — no changes)

| Reference | Location | Reason Preserved |
|---|---|---|
| Credit Suisse / Archegos / $5.5 billion | Line 21 | Public case study — Archegos collapse is widely reported |
| Citigroup / SIVs / $45B TARP | Lines 99-117 | Public case study — 2008 financial crisis |
| HSH Nordbank / shipping + subprime | Lines 157-161 | Public case study — state bailout |
| Northern Rock (referenced via Chapter 5) | Not in Ch8 | Referenced indirectly only |

---

## Ambiguous Cases

### 1. Credit Suisse on Line 21 (Archegos) — RESOLVED
This is a MIXED context paragraph. The first sentence of the paragraph ("Four years later...") discusses the public Archegos case study with Credit Suisse named as the institution that lost $5.5B — this is public and was PRESERVED. The second sentence ("I had left the institution by then") uses "the institution" to refer to the author's former employer without naming it. The third sentence refers to "my first reconciliation cycle" — the author's internal experience — also without naming the employer. The paragraph works correctly because the public case study names Credit Suisse while the author's personal references use "the institution."

### 2. Standard Chartered reconciliation deficiency (Line 33) — RESOLVED
This was flagged as MIXED in the rules. The observation is internal (author saw it), but it relates to a regulatory-relevant finding. Per instructions, the employer name was anonymized to "the second institution." The year "2023" was also removed to reduce identifiability, since the rules example text ("At the second institution, the reconciliation documentation from the prior cycle was a merged spreadsheet...") omits the year.

### 3. "the first institution" vs "the institution" vs "the G-SIB" (naming consistency)
In Chapter 8, Credit Suisse as employer is referred to as "a European G-SIB" (first mention), then "the first institution" (subsequent mentions) to distinguish it from Standard Chartered ("the second institution"). This differs slightly from Chapter 7 where the variants "the institution" and "the G-SIB" are used, since Chapter 7 has no Standard Chartered references requiring disambiguation. The numbering ("first" / "second") is used in Chapter 8 because both employers appear in the same chapter.
