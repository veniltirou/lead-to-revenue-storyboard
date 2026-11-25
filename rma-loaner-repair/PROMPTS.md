# Chapter 5 — Image Prompt Pack

Prompts for the twelve illustrated scenes in **The Vending Machine That Called
for Help — RMA, Loaner and Depot Repair**. Scene 13 (the ledger diagram) is
already final and needs no prompt.

Save each result over the placeholder with the same file name
(`Scene01.png` … `Scene12.png`), at **1024 × 587** like Chapter 4.

## How to use this pack

1. Paste the **Global style** block at the start of every prompt.
2. For any scene with Cynthia, attach `characters/cynthia-reference.png` and
   say "Cynthia must match the attached reference exactly."
3. For Alex, generate **Scene 3 first**, then attach your best Alex image
   to every later Alex scene and say "Alex must match the attached image
   exactly." After the chapter is done, save that image as
   `characters/alex-reference.png`.
4. Keep on-screen text to what's listed under **Exact text**. Check the
   spelling of every word before saving; regenerate if anything is off.

## Global style (paste first, every time)

> Warm, clean flat-cartoon illustration in the same style as an Oracle CX
> storyboard series: soft cel shading, gentle outlines, warm peach and beige
> palette with teal and navy accents, bright natural light, modern office
> settings, friendly expressive characters. 16:9 landscape, 1024 × 587. Any
> on-screen software panel is a simple, clean, generic UI card (white card,
> thin header bar, a few labelled rows), not a real product screenshot. Along
> the bottom edge, a thin footer strip with small italic grey text:
> "Illustrative representation — not an actual product screenshot", and a
> small dark rounded badge at the bottom right: "© Venil Tirou ·
> veniltirou.github.io". No other logos or watermarks.

## Characters

**Alex (new, ABC Corporation service agent).** Man in his early thirties,
warm brown skin, short neat black curly hair with a fade, trimmed short
beard, rectangular dark-framed glasses. Navy quarter-zip pullover over a
light-blue collared shirt, grey chinos. ABC navy lanyard with a white name
badge reading "Alex". Calm, attentive, friendly. Usually wears a slim
headset when on calls.

**Cynthia Michael (Mile High City Bank, locked).** Use
`characters/cynthia-reference.png`: East Asian woman in her thirties,
straight black shoulder-length hair with a side part, teal blazer, blush
blouse, dark trousers, white name badge reading "Cynthia".

**Depot repair manager and repair technician (unnamed).** Free to design.
Keep the technician in ABC navy work overalls; the manager in a navy polo
with a tablet. No name badges with names, so they stay unnamed.

**The vending machine (BV-48213).** A modern refrigerated beverage vending
machine: glass front, rows of bottles and cans, card reader, white body
with a navy side panel. A small serial plate reading "BV-48213". The loaner
(LN-2207) is the same model in grey with a small yellow tag "LOANER".

**Mile High City Bank.** Reuse the bank's look from Chapter 4: warm wooden
interiors, plants, the round navy mountain emblem and "Mile High City Bank"
wordmark (attach `commerce-mile-high/mhcb_logo.png`).

---

## Scene prompts

### Scene01.png — The Machine Notices First
> A bright staff lounge at Mile High City Bank's Denver branch, wooden
> walls, plants, the bank emblem on the wall. The white beverage vending
> machine BV-48213 stands in the corner, working normally, a bank employee
> in the background pouring coffee, unaware. Floating beside the machine, a
> translucent telemetry overlay card with a small line chart rising gently.

Exact text (overlay card): "BV-48213 · Telemetry" · "Cabinet temp +3°F in 5 days" · "Compressor duty 92%" · "Predicted failure: ~10 days"

### Scene02.png — The Service Request Writes Itself
> A clean conceptual scene: on the left, a small IoT cloud icon with an
> alert card; a glowing arrow flows right into a large white UI card
> representing a new service request in Oracle Fusion B2B Service. A tiny
> icon of the vending machine links to the SR card. No people.

Exact text: left card "IoT incident" · "Asset BV-48213"; right card "SR-30417" · "Cooling performance degrading" · "Customer: Mile High City Bank" · "Created by: IoT rule"

### Scene03.png — Alex Takes the Case
> ABC Corporation service center: open-plan office, warm light. Alex
> (design above) at his desk with two monitors, leaning in with interest.
> The main monitor shows the SR with a tab labelled "Connected Asset"
> displaying a temperature gauge and a small chart. A sticky note on the
> monitor frame.

Exact text: monitor "SR-30417" · tab "Connected Asset" · "Queue: Beverage Equipment"; sticky note "Check coverage"

### Scene04.png — What Mile High Is Entitled To
> Close-up over Alex's shoulder at his monitor, which shows a clean
> subscription coverage card with a small gold badge. Alex points at the
> card, nodding.

Exact text (card): "Subscription · Denver Branch · BV-48213" · "Gold coverage" · "✓ 4-hour response" · "✓ Depot repair: parts + labor" · "✓ Loaner unit"

### Scene05.png — Alex Calls Cynthia
> Split-screen composition with a soft diagonal divider. Left: Alex at ABC
> wearing his headset, smiling, explaining. Right: Cynthia (match the
> reference exactly) at her desk at Mile High City Bank, phone to her ear,
> relieved and surprised. Small speech-bubble icons only, no long text.

Exact text: a small calendar card on Cynthia's desk: "Thursday · Loaner swap"

### Scene06.png — Three Lines from One SR
> Alex at his desk, monitor showing the SR's parts tab as a simple table
> with three rows, each row with a small icon (truck outbound for shipments,
> curved return arrow for the return). Alex is clicking "Add".

Exact text (table rows):
"Line 1 · Shipment · Loaner LN-2207" ·
"Line 2 · Return · RMA-58841 · BV-48213" ·
"Line 3 · Shipment · BV-48213 (repaired)"

### Scene07.png — Approved and Orchestrated
> An Order Management operations desk at ABC. A service manager (navy
> blazer, unnamed) at a laptop clicks an "Approve" button on a card showing
> an order locked with a small padlock. Behind, a simple flow of icons:
> approval stamp → warehouse → truck.

Exact text: card "Order with loaner" · "Approval Pending" · button "Approve"

### Scene08.png — Swap Day in Denver
> The Mile High staff lounge. Two ABC crew members in navy overalls wheel
> the grey loaner machine (yellow "LOANER" tag) in on a dolly, while the
> white machine BV-48213 is strapped to a second dolly heading out the door
> toward a delivery van. Cynthia (match reference) stands to the side with a
> clipboard, smiling.

Exact text: tag on loaner "LOANER" · serial plates "LN-2207" and "BV-48213" · label on the outgoing dolly "RMA-58841"

### Scene09.png — At the Repair Center
> ABC Denver Repair Center: a clean workshop with workbenches and tool
> walls. BV-48213 stands open, its back panel removed. The depot repair
> manager (navy polo, tablet) shows a repair work order on the tablet while
> the technician (navy overalls) shines a flashlight on the condenser fan.

Exact text: tablet "Depot Repair · RMA-58841" · "Repair work order" · "Diagnosis: condenser fan motor"

### Scene10.png — The Estimate Cynthia Doesn't Pay
> Cynthia (match reference) at her desk at Mile High City Bank, reading a
> clean estimate on her laptop, eyebrows raised in a pleased way, about to
> click "Approve".

Exact text (estimate card): "Repair estimate · BV-48213" · "Condenser fan motor $185" · "Labor 1.5 h $180" · "Total $365" · "Gold coverage −$365" · "You pay $0" · button "Approve"

### Scene11.png — Repaired, Tested, and Home
> Two-panel composition. Left: at the repair center, the technician closes
> the back panel of BV-48213 next to a small green "Cooling test passed"
> indicator. Right: the white machine being wheeled back into the Mile High
> staff lounge while the grey loaner goes out on a dolly toward the van.

Exact text: left indicator "Cooling test passed · 24 h"; right labels "BV-48213 · home" and "LN-2207 · RMA-58842"

### Scene12.png — Closing the Loop
> Alex at his desk, satisfied, clicking "Resolve" on the SR. A second
> monitor shows a new knowledge article card. In the corner of the scene, a
> small IoT cloud icon with a green check.

Exact text: SR card "SR-30417 · Resolved"; knowledge card "Knowledge article" · "BV-500: high temp + high compressor duty → check condenser fan motor"; IoT icon "Incident closed"
