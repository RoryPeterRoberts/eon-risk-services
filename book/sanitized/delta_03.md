# Delta Log: Chapter 3 Sanitization

## Summary
- **Total changes:** 3
- **Anonymized (Context A - author's employment):** 3
- **Preserved (Context B - public case studies):** Standard Chartered sanctions case (lines 137, 205), HBOS/Paul Moore, Wells Fargo, Cooperative Bank, Banca Monte dei Paschi di Siena, Société Générale/Kerviel — all preserved as-is

---

## Change Log

### Change 1
- **Line:** 43
- **Original:** `This was my role at Credit Suisse and at Standard Chartered.`
- **Sanitized:** `This was my role at a European G-SIB and at a UK-regulated international banking group.`
- **Rule:** Context A — author's employment references. "Credit Suisse" replaced with "a European G-SIB" (first mention in chapter). "Standard Chartered" replaced with "a UK-regulated international banking group" (first mention as employer context in chapter).
- **Note:** This is the author describing his own employment. Distinct from the Standard Chartered sanctions case study on lines 137 and 205, which is a public case study and is preserved.

### Change 2
- **Line:** 45
- **Original:** `At Credit Suisse, when I took on this role,`
- **Sanitized:** `At the G-SIB, when I took on this role,`
- **Rule:** Context A — subsequent mention of first institution. "Credit Suisse" replaced with "the G-SIB" (subsequent reference per anonymization rules).

### Change 3 — Preserved public case studies (no changes made)
The following named institutions appear in Chapter 3 as **public case studies** and are **preserved unchanged**:
- **HBOS** (lines 7, 13, 14, 15, 139, 205): Paul Moore governance failure — public Parliamentary inquiry
- **Standard Chartered** (lines 137, 205): Sanctions case — $667M fine, public enforcement action
- **Wells Fargo** (line 119): Fraudulent accounts — $3B settlement, public enforcement action
- **Cooperative Bank** (line 68): Britannia merger failure — public bailout
- **Banca Monte dei Paschi di Siena** (line 141): Derivatives concealment — public case
- **Société Générale** (line 181): Kerviel trading loss — public case

---

## Ambiguous Cases

### Standard Chartered — dual context in same chapter
Standard Chartered appears in two contexts in Chapter 3:
1. **Line 43** — author's employment ("my role at... Standard Chartered") — **ANONYMIZED**
2. **Lines 137, 205** — public sanctions case study ($667M fine, compliance monitorship) — **PRESERVED**

This dual treatment is correct per the rules: Context A (employment) is anonymized; Context B (public case study) is preserved. The two contexts are in different sections of the chapter, so no reader confusion arises.
