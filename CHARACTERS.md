# Character Consistency Policy

This file is the single source of truth for which characters are locked
to a fixed visual design, which ones are free per chapter, and where each
character's canonical reference image lives. Check this before generating
any new chapter art.

## Scope: what gets fixed and what doesn't

**Prior chapters are frozen — do not retroactively edit them.** Sales
Force Automation, Incentive Compensation, Customer Data Management,
Quote-to-Cash, Subscription Management, the Advanced deep-dives, and
OIC Integrations stay exactly as published, inconsistencies and all.
They already serve their purpose (a visible weekly record); redoing art
in them spends time for a cosmetic gain nobody but the author would
notice.

**Friday Debrief is the one exception**, since it's mid-repair already.

**Everything from here forward — every new chapter — follows the rules
below, starting now.** The registry entries for James, Sarah, Harrison
below describe target state for new work, not a mandate to fix old work.

## The rule

1. **James is fixed across every chapter, permanently.** He is the
   through-line of the series — an Oracle Fusion CX sales rep, shown
   using the Oracle ecosystem to do his job efficiently. Every chapter
   draws his art from the same locked reference. Never regenerate him
   from scratch.
2. **All other characters are chapter-specific by default.** A new
   supporting character (an intern, a manager, a customer contact) can
   be designed fresh for the chapter they're introduced in, with no
   consistency obligation — *until Rule 3 applies to them.*
3. **The moment a non-James character reappears in a second chapter,
   they graduate to locked status too**, using whichever appearance is
   picked as canonical (see decision log below). From that point on,
   they're treated exactly like James: reused from a fixed reference,
   never regenerated.

## Status legend

- 🔒 **Locked** — canonical reference exists, must be reused
- 🟡 **Pending decision** — has appeared more than once with inconsistent
  designs; Rule 3 applies, canonical version not yet chosen
- ⚪ **Free** — has only appeared in one chapter so far, no obligation yet

## Registry

| Character | Status | Appears in | Notes |
|---|---|---|---|
| **James** | 🔒 Locked for new work (anchor not yet finalized) | *Frozen:* Sales Force Automation, Incentive Compensation, OIC Integrations. *Active:* Friday Debrief | Three visually distinct lineages exist across frozen chapters — left as-is, not being fixed. Friday Debrief's version (OIC/Friday-Debrief style: name badges, peach background, matches site branding) becomes the anchor for every *new* chapter going forward. Frozen chapters keep their own look. |
| **Sarah** | ⚪ Free (does not appear in Friday Debrief) | *Frozen:* Incentive Compensation, OIC Integrations | No action needed now — she isn't in the chapter currently being touched. If she's written into a future new chapter, that's when she graduates to 🟡 Pending and gets a canonical pick, styled to match James's locked look. |
| **Harrison** | ⚪ Free (one lineage, both frozen so far) | *Frozen:* OIC Integrations. *Active:* Friday Debrief | Both his appearances are within scope-frozen chapters as of this policy — Friday Debrief is being corrected for text/disclaimer issues but his design itself isn't being touched. Treat as a Rule 3 candidate the moment he's written into a chapter outside the OIC storyline. |
| **Leila (Home, Sweet Home)** | ⚪ Free | *Frozen:* OIC Integrations | Appeared once, in a frozen chapter. No obligation. A different person from Leila at ABC (below). |
| **Lisa** | 🔒 Locked (decided 2026-10-28) | *Active:* The World of ABC Corporation (cast lineup, fourth card); I1 One Deal, Three Credits (Scene 10); I2 When the Payment Isn't Final (Scene 1, small figure); I3 Disputes (Scene 4); Chapter 4 Oracle Commerce: Mile High City Bank (Scene 1); I5 Leila's Nine-Month Runway; I6 From Order to Earnings; I7 Five Questions Before Payday; I8 When the Cash Arrives; I9 Quick Take: Why $5,000 Pays $90; I10 One Deal, Two Branches. *Frozen:* Chapter 3 Incentive Compensation | Compensation Analyst. **Canonical look (the I5/I6 lineage):** long wavy dark-brown hair past the shoulders, warm tan skin, burnt-orange blazer over a white V-neck top, navy lanyard with a white "Lisa" badge, dark teal trousers, dark low heels. Reference: `characters/lisa-reference.jpg` (cropped from `leila-runway/Runway01.jpg` and `Runway07.jpg`). Every active appearance now matches: the cast lineup card, I1 Scene 10, I2 Scene 1, I3 Scene 4 and Chapter 4 Scene 1 were redrawn on 2026-10-28. In I1 Scene 10 the whiteboard diagram was moved slightly right and scaled to 95% so her longer hair no longer covers "Direct". |
| **Leila (ABC)** | 🔒 Locked (canonical look changed 2026-10-28) | *Active:* I4 Three Transactions, One Paycheck (Prologue); The World of ABC Corporation (cast lineup, sixth card); I5 Leila's Nine-Month Runway; I6 From Order to Earnings; I7 Five Questions Before Payday; I8 When the Cash Arrives; I9 Quick Take: Why $5,000 Pays $90; I10 One Deal, Two Branches | Joined as the fall intern from a local Denver university (I4, October 2026); a junior sales rep on James's team from I5 on. **Canonical look (the I5/I6 lineage):** early twenties, medium chestnut-brown high ponytail with a lavender scrunchie, thin round dark glasses, lavender cardigan with a lighter lavender flower pattern over a white top, mustard-yellow trousers, lavender sneakers. **The lanyard marks her role:** teal with a "Leila – Intern" badge while she is an intern (I4); green with a "Leila" badge as a junior rep (I5 on). Reference: `characters/leila-reference.jpg` (cropped from `leila-runway/Runway01.jpg` and `Runway03.jpg`). This replaces the earlier lock (honey-brown ponytail, dark rectangular glasses, dark grey trousers). The cast lineup card and the I4 Prologue were redrawn on 2026-10-28. **Known variance:** the I4 Prologue keeps its original cardigan pattern (small white flowers) because Gemini's redraw of the pattern came out smudged; the colour and cut match, and her hair, glasses and scrunchie are canonical. |
| **Cynthia Michael** | 🔒 Locked (decided 2026-11-25) | *Active:* Chapter 4 Oracle Commerce: Mile High City Bank (Scenes 4, 5, 6, 10); Chapter 5 The Vending Machine That Called for Help | Mile High City Bank facilities team; the bank's contact for ABC. **Canonical look (the Chapter 4 lineage):** East Asian woman, thirties, straight black shoulder-length hair with side part, teal blazer, blush blouse, dark trousers, white name badge reading "Cynthia". Reference: `characters/cynthia-reference.png` (cropped from `commerce-mile-high/Scene11.png`). Drawn the same way in every Chapter 4 scene, so no redraw was needed. |
| **Alex** | ⚪ Free | *Active:* Chapter 5 The Vending Machine That Called for Help | ABC Corporation service agent (support engineer) in Fusion B2B Service. New in Chapter 5; design spec in `rma-loaner-repair/PROMPTS.md`. Becomes 🟡 Pending the moment he appears in a second chapter (for example a general Fusion Service chapter). |
| **Disha** | ⚪ Free (named only, never drawn) | *Active:* I10 One Deal, Two Branches (mentioned) | The Cheyenne, Wyoming rep who ships Leila's Front Range Hospital deal in months 1 to 3. She is named in speech bubbles and on the projector but never drawn. If she is ever drawn, she becomes 🟡 Pending and gets a canonical pick. Sarah is also named in I10 as Leila's manager, but not drawn, so her status doesn't change. |

## Decision log

**2026-10-28: Lisa and Leila take their I5/I6 look.** Both had two
lineages. The I5/I6 one was chosen over the cast-lineup one because:

1. **It is the only consistent version.** I5 and I6 draw both women the
   same way across 18 images. The older Lisa is not one look but three
   (short light-brown hair in the lineup and I3, auburn in I1, long copper
   in Chapter 4).
2. **It tells the cast apart.** The lineup Lisa has the same hair, face and
   build as Sarah; only the blazer colour separates them. The I5/I6 Lisa is
   recognisable at LinkedIn thumbnail size.
3. **It costs less to fix and keeps text safe.** Moving to the lineup look
   would mean redrawing 17 text-heavy I5/I6 scenes, each a fresh chance of
   misspelt on-screen text. Moving to the I5/I6 look means redrawing six
   images, mostly single-figure scenes, and pasting only the redrawn person
   back into each original so every caption stays pixel-identical.
4. **They carry the Incentive Compensation storyline from I5 on**, and I6
   was drawn from I5 as its reference.

Leila's lanyard is allowed to change with her role (teal as an intern,
green as a junior rep). Everything else about her look is fixed.

**2026-11-25: Cynthia Michael locks to her Chapter 4 look.** Chapter 5
brings her back, which triggers Rule 3. Chapter 4 draws her identically in
all four of her scenes, so that look becomes canonical with no redraws.
Her reference is cropped from `commerce-mile-high/Scene11.png`.

## Workflow going forward

1. Before writing a new chapter, check this table for every character who
   will appear.
2. If a locked or pending character appears: pull their canonical
   reference image (once finalized) rather than generating anything new
   for them.
3. If a brand-new character appears: design them freely, but log them in
   this table immediately as ⚪ Free, so future-you (or future chapters)
   knows they exist and where they first showed up.
4. The moment any ⚪ Free character shows up in a second chapter, flip
   them to 🟡 Pending and resolve it before publishing — don't let a
   second inconsistent version go live.

## Open items (apply to new chapters only — nothing here touches frozen work)

- [ ] Pick James's single canonical reference image (one clean, front-
      facing, neutral pose) from Friday Debrief's art lineage.
- [ ] Generate James's multi-pose/expression reference sheet from that
      canonical image (talking, explaining, surprised, thinking,
      thumbs-up/success, standing) — this becomes the permanent asset
      library referenced by every *new* chapter from here forward.
- [ ] Whenever Sarah (or any other repeat character) is written into a
      new chapter for the first time under this policy, pick her
      canonical version then — don't defer it a second time.
- [x] Resolve Lisa's and Leila's canonical looks (decision log, 2026-10-28).
- [x] Cast lineup: Leila's card caption now reads "Junior Sales Rep".
- [x] Redraw to the canonical look (only the person changes; the redrawn
      figure is pasted back into the original so all text stays identical),
      done 2026-10-28:
  - [x] `abc-world/Scene01.png`: Lisa's card (fourth) and Leila's card
        (sixth, green junior-rep lanyard)
  - [x] `payment-not-final/Scene01.png`: the small Lisa figure (reuses the
        new lineup figure)
  - [x] `ic-three-transactions/Prologue.png`: Leila's hair, glasses and
        scrunchie (teal intern lanyard and badge kept)
  - [x] `route66-three-credits/Scene10.png`: Lisa
  - [x] `disputes/Scene04.png`: Lisa
  - [x] `commerce-mile-high/Scene01.png`: Lisa
