# Delta Log: Chapter 4 Sanitization

## Summary
- **Total changes:** 7
- **Anonymized (Context A - author's employment / internal details):** 7
- **Preserved (Context B - public case studies):** JPMorgan/London Whale, Deutsche Bank mirror-trading, Lloyds/PPI — all preserved as-is

---

## Change Log

### Change 1
- **Line:** 5
- **Original:** `In my first month as Global Head of Risk Identification at Credit Suisse, I convened a meeting`
- **Sanitized:** `In my first month as Global Head of Risk Identification at a European G-SIB, I convened a meeting`
- **Rule:** Context A — author's employment. "Credit Suisse" replaced with "a European G-SIB" (first mention in chapter).

### Change 2
- **Line:** 11
- **Original:** `The investment bank had 47 risk categories.`
- **Sanitized:** `The investment bank had nearly fifty risk categories.`
- **Rule:** Special Case for Chapter 4 — internal process observation. Exact metric "47" anonymized to "nearly fifty".

### Change 3
- **Line:** 11
- **Original:** `The Swiss universal bank had 23.`
- **Sanitized:** `The Swiss universal bank had just over twenty.`
- **Rule:** Special Case for Chapter 4 — internal process observation. Exact metric "23" anonymized to "just over twenty".

### Change 4
- **Line:** 11
- **Original:** `Private banking had 31.`
- **Sanitized:** `Private banking had around thirty.`
- **Rule:** Special Case for Chapter 4 — internal process observation. Exact metric "31" anonymized to "around thirty".

### Change 5
- **Line:** 149
- **Original:** `At Credit Suisse, we used the COSO three-dimensional model`
- **Sanitized:** `At the institution, we used the COSO three-dimensional model`
- **Rule:** Context A — author's internal methodology at employer. "Credit Suisse" replaced with "the institution" (subsequent reference in chapter). The COSO cube usage is an internal methodology detail per special case rules.

### Change 6
- **Line:** 234
- **Original:** `This is why building the common language was the first operational priority at Credit Suisse.`
- **Sanitized:** `This is why building the common language was the first operational priority at the institution.`
- **Rule:** Context A — author's internal experience. "Credit Suisse" replaced with "the institution" (subsequent reference in chapter).

### Change 7 — Preserved public case studies (no changes made)
The following named institutions appear in Chapter 4 as **public case studies** and are **preserved unchanged**:
- **JPMorgan Chase / London Whale** (lines 85-101, 163): $6.2B loss — public enforcement, Senate investigation
- **Deutsche Bank** (lines 103-115): Mirror-trading — $630M fines, public enforcement
- **Lloyds Banking Group / PPI** (lines 117-129): £12B+ redress — public industry-wide scandal

---

## Ambiguous Cases

### Credit Suisse — dual context across book
Credit Suisse appears in Chapter 4 exclusively in Context A (author's employment and internal process observations). There are no public case study references to Credit Suisse in this chapter. All three occurrences (lines 5, 149, 234) are anonymized.

### "The Swiss universal bank" (line 11)
The reference to "The Swiss universal bank" is a description of an internal business unit division within the institution (Credit Suisse's Swiss operations). This is part of the internal taxonomy detail being anonymized. The phrase "Swiss universal bank" is retained as a generic structural descriptor (it describes a type of business unit, not a named institution) but the exact headcount "23" is anonymized. This was judged acceptable because "Swiss universal bank" does not uniquely identify the employer — many G-SIBs have Swiss universal banking operations.

### "Global Head of Risk Identification" title (line 5)
The author's exact job title is retained. While the title combined with the institution name would be identifying, the institution name has been removed. The title alone does not identify the employer and is necessary for establishing the author's credibility and context. No change made.
