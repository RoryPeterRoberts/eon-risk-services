# Delta Log: Chapter 7 Sanitization

## Summary
- **Total changes:** 4
- **Anonymizations (Context A):** 4
- **Preservations (Context B):** 8 public references verified and kept intact

---

## Change 1 — Line 5 (Opening anecdote, author's employment)
- **Context:** Author describing his role at the institution
- **Original:** `...my role as Global Head of Risk Identification at Credit Suisse, I received...`
- **Sanitized:** `...my role as Global Head of Risk Identification at a European G-SIB, I received...`
- **Rule:** First mention of Credit Suisse as employer → "a European G-SIB"

## Change 2 — Line 43 (Template field discussion, author's employment)
- **Context:** Author describing reviewing bottom-up submissions at his employer
- **Original:** `When I reviewed the Credit Suisse submissions, the risk definitions were adequate.`
- **Sanitized:** `When I reviewed the institution's submissions, the risk definitions were adequate.`
- **Rule:** Subsequent mention of Credit Suisse as employer → "the institution"

## Change 3 — Line 234 (Compliance theatre section, author's employment)
- **Context:** Author describing process redesign at his employer (the 3-new-risks rule)
- **Original:** `When I redesigned the bottom-up process at Credit Suisse, I introduced a requirement...`
- **Sanitized:** `When I redesigned the bottom-up process at the G-SIB, I introduced a requirement...`
- **Rule:** Subsequent mention of Credit Suisse as employer → "the G-SIB"

## Change 4 — No change (verification)
- **Note:** No internal metrics (23/187/12/47) appear in Chapter 7. Those are Chapter 8 content.

---

## Preserved Public Case Studies (Context B — no changes)

| Reference | Location | Reason Preserved |
|---|---|---|
| AIB / Allied Irish Banks | Lines 169-185 | Public case study — $691M Rusnak fraud |
| Allfirst Financial | Lines 171-184 | Public case study — AIB subsidiary |
| John Rusnak / $691 million | Line 171 | Public case study — convicted trader |
| UBS / Kweku Adoboli / $2 billion | Lines 188-198 | Public case study — rogue trading |
| Kerviel at Societe Generale | Line 196 | Public case study — rogue trading |
| JPMorgan London Whale | Line 135 | Public case study — model risk |
| Deutsche Bank mirror-trading | Line 147 | Public case study — financial crime |
| Northern Rock | Line 163 | Public case study — funding risk |
| PPI scandal | Line 127 | Public case study — conduct risk |

---

## Ambiguous Cases

None identified in Chapter 7. All Credit Suisse references in this chapter are clearly in the context of the author's employment (Context A) and were anonymized accordingly. All public case studies are clearly external references (Context B) and were preserved.
