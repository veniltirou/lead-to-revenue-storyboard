# Chapter 5 — ChatGPT Image Prompts (one conversation, 13 messages)

Generate all twelve scenes in **one ChatGPT conversation**. Message 0 sets
the style, cast and rules once; every scene after that is a short message,
because ChatGPT remembers the setup within the conversation.

Afterwards, attach the twelve images back in Claude. Claude crops them to
the series size (1024 × 587), adds the footer strip and copyright badge,
checks the spelling of every on-screen word, and puts them in the chapter.

## Before you start: download these four images

| Attach | Download from |
| --- | --- |
| Style + Cynthia in context | https://veniltirou.github.io/lead-to-revenue-storyboard/commerce-mile-high/Scene04.png |
| Cynthia reference | https://raw.githubusercontent.com/veniltirou/lead-to-revenue-storyboard/chapter5-rma-loaner/characters/cynthia-reference.png |
| Mile High City Bank emblem | https://veniltirou.github.io/lead-to-revenue-storyboard/commerce-mile-high/mhcb_logo.png |
| Alex reference (optional) | The Canva Scene 3 image, downloaded from Canva |

If you skip the Alex image, ChatGPT designs him from the description, and
Scene 3 becomes his reference for the rest.

## Tips

- One scene per message works best. If an image comes back with a typo,
  reply only: **"Same image, fix the text: [what it should say]."**
- If Alex or Cynthia drift, reply: **"Redraw. Alex must match Scene 3
  exactly"** (or "Cynthia must match the reference exactly").
- If ChatGPT asks to confirm the size, answer: **landscape**.

---

## Message 0 — setup (attach all four images)

```
I'm going to ask you for 12 illustrations for one storyboard chapter, one per message. Please read these rules once and apply them to every image in this conversation. Don't generate anything yet; just reply "Ready".

STYLE (match the first attached image): warm, clean flat-cartoon illustration, soft cel shading, gentle outlines, warm peach and beige palette with teal and navy accents, bright natural light, modern offices, friendly expressive characters. Landscape format. Keep all important content away from the top and bottom 8% of the frame (I will crop to 16:9).

TEXT RULES: Only the on-screen words I list for each scene, spelled exactly. Software screens are simple generic white UI cards (thin header bar, a few labelled rows), never real product screenshots. NO footer, NO watermark, NO copyright text, NO signatures — I add those myself.

CAST
- ALEX (ABC Corporation service agent): man in his early thirties, warm brown skin, short neat black curly hair with a fade, trimmed short beard, rectangular dark-framed glasses, navy quarter-zip pullover over a light-blue collared shirt, grey chinos, navy lanyard with a white badge reading "Alex", slim headset (often around his neck). Calm, attentive, friendly. [If I attached an Alex image, match it exactly.]
- CYNTHIA (Mile High City Bank, facilities): match the attached Cynthia reference exactly — East Asian woman in her thirties, straight black shoulder-length hair with side part, teal blazer, blush blouse, dark trousers, white badge reading "Cynthia".
- DEPOT REPAIR MANAGER: unnamed, navy polo, carries a tablet. REPAIR TECHNICIAN: unnamed, navy work overalls. Neither wears a name badge.
- THE VENDING MACHINE "BV-48213": modern refrigerated beverage vending machine, glass front, rows of bottles and cans, card reader, white body with a navy side panel, small serial plate "BV-48213".
- THE LOANER "LN-2207": same model in grey, with a small yellow tag reading "LOANER".
- MILE HIGH CITY BANK settings: warm wooden interiors and plants, with the attached round navy mountain emblem.

BACKDROP PEOPLE: every scene includes two to four unnamed background people doing their own work, smaller and softer in focus than the main characters. They never look at the camera, hold no readable text, and wear no name badges. Vary age, ethnicity and build, and don't make them look like Alex or Cynthia.
```

---

## Message 1 — Scene 1, The Machine Notices First

```
Scene 1. A bright staff lounge at Mile High City Bank's Denver branch, emblem on the wall. Vending machine BV-48213 stands in the corner, working normally. Floating beside it, a translucent telemetry card with a small rising line chart. Backdrop: two employees chatting at a table with mugs, one pouring coffee, all unaware.
On-screen text (telemetry card): "BV-48213 · Telemetry" / "Cabinet temp +3°F in 5 days" / "Compressor duty 92%" / "Predicted failure: ~10 days"
```

## Message 2 — Scene 2, The Service Request Writes Itself

```
Scene 2. ABC Corporation's remote monitoring room, early morning: a wall of screens, coffee cups, soft blue light. An unnamed monitoring analyst (navy ABC polo, headset around her neck) turns toward the big wall screen as an alert appears. On the wall screen, left to right: a small alert card, a glowing arrow, and a large white service request card, with a tiny vending machine icon by the alert. Backdrop: one colleague at another console, one walking past with a laptop.
On-screen text: alert card "IoT incident" / "Asset BV-48213"; SR card "SR-30417" / "Cooling performance degrading" / "Customer: Mile High City Bank" / "Created by: IoT rule"
```

## Message 3 — Scene 3, Alex Takes the Case

```
Scene 3. ABC's service center, open-plan, warm light. Alex at his desk with two monitors, leaning in with interest. The main monitor shows the SR card with a tab showing a small temperature gauge and a rising line chart. A yellow sticky note on the monitor frame. Backdrop: colleagues at nearby desks on headsets, one walking by with a coffee.
On-screen text: monitor "SR-30417" / tab "Connected Asset" / "Queue: Beverage Equipment"; sticky note "Check coverage"
```

After Scene 3: if Alex looks right, reply **"This is Alex from now on."**

## Message 4 — Scene 4, What Mile High Is Entitled To

```
Scene 4. Close-up over Alex's shoulder at his monitor, which shows a subscription coverage card with a small gold badge. Alex points at the card, nodding, pleased. Backdrop, softly blurred beyond the monitor: a colleague on a call and another at a whiteboard.
On-screen text (card): "Subscription · Denver Branch · BV-48213" / "Gold coverage" / "✓ 4-hour response" / "✓ Depot repair: parts + labor" / "✓ Loaner unit"
```

## Message 5 — Scene 5, Alex Calls Cynthia

```
Scene 5. Split screen with a soft diagonal divider. Left: Alex at ABC in his headset, smiling, explaining with an open hand. Right: Cynthia at her desk in a warm wooden Mile High City Bank office, phone to her ear, relieved and pleasantly surprised. Small speech-bubble icons with no words. Backdrop: a colleague on a headset two desks from Alex; a bank colleague passing Cynthia's open door.
On-screen text: a small calendar card on Cynthia's desk "Thursday · Loaner swap"
```

## Message 6 — Scene 6, Three Lines from One SR

```
Scene 6. Alex at his desk clicking an "Add" button. His monitor shows the SR's parts tab as a simple three-row table, each row with a small icon: an outbound truck for shipments, a curved return arrow for the return. Backdrop: two colleagues at neighbouring desks, one leaning over to help the other.
On-screen text: "Line 1 · Shipment · Loaner LN-2207" / "Line 2 · Return · RMA-58841 · BV-48213" / "Line 3 · Shipment · BV-48213 (repaired)" / button "Add"
```

## Message 7 — Scene 7, Approved and Orchestrated

```
Scene 7. An Order Management desk at ABC. An unnamed service manager (navy blazer, no badge) at a laptop clicks "Approve" on an order card that shows a small padlock. Behind her, a simple icon flow: approval stamp → warehouse → truck. Backdrop: an order administrator on the phone at a second desk; through a glass wall, a warehouse worker driving a pallet jack.
On-screen text: "Order with loaner" / "Approval Pending" / button "Approve"
```

## Message 8 — Scene 8, Swap Day in Denver

```
Scene 8. The Mile High staff lounge. Two ABC crew members in navy overalls wheel in the grey loaner on a dolly, while the white machine BV-48213 is strapped to a second dolly heading out the door toward a delivery van. Cynthia stands to the side with a clipboard, smiling. Backdrop: two bank employees watching from a table, one already buying a drink from the loaner.
On-screen text: loaner tag "LOANER"; serial plates "LN-2207" and "BV-48213"; label on the outgoing dolly "RMA-58841"
```

## Message 9 — Scene 9, At the Repair Center

```
Scene 9. ABC Denver Repair Center: a clean workshop with workbenches and tool walls. BV-48213 stands open, its back panel removed. The depot repair manager shows a repair work order on his tablet while the technician shines a flashlight on the condenser fan. Backdrop: other technicians at their own benches, one with another machine half taken apart, one pushing a parts cart.
On-screen text (tablet): "Depot Repair · RMA-58841" / "Repair work order" / "Diagnosis: condenser fan motor"
```

## Message 10 — Scene 10, The Estimate Cynthia Doesn't Pay

```
Scene 10. Cynthia at her desk at Mile High City Bank, reading an estimate on her laptop, eyebrows raised in a pleased way, about to click "Approve". Backdrop: the bank's open office behind her glass wall, a few colleagues at desks, one carrying files past.
On-screen text (estimate card): "Repair estimate · BV-48213" / "Condenser fan motor $185" / "Labor 1.5 h $180" / "Total $365" / "Gold coverage −$365" / "You pay $0" / button "Approve"
```

## Message 11 — Scene 11, Repaired, Tested, and Home

```
Scene 11. Two panels side by side. Left: at the repair center, the technician closes the back panel of BV-48213 beside a small green indicator. Right: the white machine wheeled back into the Mile High staff lounge while the grey loaner goes out on a dolly toward the van. Backdrop: on the left, another technician testing a different machine; on the right, the van driver holding the door and a bank employee holding a door open.
On-screen text: left indicator "Cooling test passed · 24 h"; right labels "BV-48213 · home" and "LN-2207 · RMA-58842"
```

## Message 12 — Scene 12, Closing the Loop

```
Scene 12. Late afternoon at ABC's service center. Alex, satisfied, clicks "Resolve" on the SR. A second monitor shows a new knowledge article card. In a corner of the frame, a small cloud icon with a green check. Backdrop: colleagues packing up or finishing calls; one gives Alex a passing thumbs-up from behind (face not shown).
On-screen text: SR card "SR-30417 · Resolved"; knowledge card "Knowledge article" / "BV-500: high temp + high compressor duty → check condenser fan motor"; cloud icon "Incident closed"
```
