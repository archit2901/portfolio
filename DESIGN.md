---
name: architgupta.me
description: Instrument Faceplate. One matte panel on a desk; numbers are readouts and keys, one orange key does the thing that matters now.
colors:
  desk: "#DCDCD7"
  plate: "#EDEDE9"
  raised: "#F9F9F7"
  sunk: "#E1E2DC"
  seam: "#CFD0CA"
  seam-highlight: "#FFFFFF"
  ink: "#1A1B1D"
  ink-2: "#45484D"
  ink-3: "#5E6166"
  key-graphite: "#2B2D30"
  key-legend: "#F1F1EE"
  signal-orange: "#EE5A12"
  signal-orange-legend: "#1A1B1D"
  signal-orange-text: "#B83C0A"
  focus: "#C2410C"
  led-off: "#C4C5BF"
  dark-desk: "#100F0E"
  dark-plate: "#201F1D"
  dark-raised: "#2E2D2A"
  dark-sunk: "#1A1917"
  dark-seam: "#0C0B0A"
  dark-seam-highlight: "#34322F"
  dark-ink: "#EEECE7"
  dark-ink-2: "#BCB8B0"
  dark-ink-3: "#A19D95"
  dark-key-graphite: "#403E3A"
  dark-signal-orange: "#F2611D"
  dark-signal-orange-legend: "#1A1917"
  dark-signal-orange-text: "#FF8A47"
  dark-focus: "#FF8A47"
  dark-led-off: "#484540"
  grille: "#C4C5BF"
  dark-grille: "#0A0908"
typography:
  display:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 7.6vw, 6rem)"
    fontWeight: 760
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 106"
  greet:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 560
    lineHeight: 1.2
    letterSpacing: "-0.005em"
  role:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 3rem)"
    fontWeight: 720
    lineHeight: 1.02
    letterSpacing: "-0.028em"
    fontVariation: "'wdth' 104"
  title:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2vw, 1.625rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.018em"
  subtitle:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.45
  readout:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 2.6vw, 2.375rem)"
    fontWeight: 740
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontFeature: "'tnum' 1, 'lnum' 1"
  lede:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.3vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  key-legend:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.2
  key-legend-lg:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
  selector:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 640
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 80"
  position:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    fontFeature: "'tnum' 1, 'lnum' 1"
  label:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 620
    lineHeight: 1.2
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 78"
  tag:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 82"
  chip:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 640
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 82"
rounded:
  plate: "clamp(1.25rem, 2.2vw, 1.75rem)"
  panel: "1.25rem"
  well-lg: "1rem"
  well: "0.875rem"
  key: "0.75rem"
  bezel: "0.6875rem"
  inset: "0.625rem"
  small: "0.5rem"
  focus: "6px"
  led: "999px"
spacing:
  desk-margin: "clamp(0.5rem, 1.6vw, 1.5rem)"
  pad: "clamp(1.25rem, 3.6vw, 3rem)"
  module-block: "clamp(3rem, 6vw, 5.5rem)"
  row-block: "2rem"
  row-block-wide: "2.5rem"
  heading-to-content: "2.5rem"
  cluster: "0.75rem"
  key-gap: "0.625rem"
  nav-height: "4.5rem"
components:
  plate:
    backgroundColor: "{colors.plate}"
    rounded: "{rounded.plate}"
    width: "min(82rem, 100% - 2 * clamp(0.5rem, 1.6vw, 1.5rem))"
  key:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    typography: "{typography.key-legend}"
    rounded: "{rounded.key}"
    padding: "0.625rem 1rem"
    height: "2.75rem"
  key-dark:
    backgroundColor: "{colors.key-graphite}"
    textColor: "{colors.key-legend}"
    typography: "{typography.key-legend}"
    rounded: "{rounded.key}"
    padding: "0.625rem 1rem"
    height: "2.75rem"
  key-accent:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.signal-orange-legend}"
    typography: "{typography.key-legend}"
    rounded: "{rounded.key}"
    padding: "0.625rem 1rem"
    height: "2.75rem"
  key-accent-hero:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.signal-orange-legend}"
    typography: "{typography.key-legend-lg}"
    rounded: "{rounded.well}"
    padding: "0.625rem 1rem"
    height: "3.5rem"
  metric-key:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    typography: "{typography.readout}"
    rounded: "{rounded.well}"
    padding: "1rem 1rem 0.9375rem"
    height: "6.5rem"
  well:
    backgroundColor: "{colors.sunk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.well}"
    padding: "0.875rem 1.125rem"
  portrait-window:
    backgroundColor: "{colors.sunk}"
    rounded: "{rounded.well-lg}"
    padding: "0.375rem"
    width: "21.25rem"
  event-chip:
    backgroundColor: "{colors.sunk}"
    textColor: "{colors.ink}"
    typography: "{typography.chip}"
    rounded: "{rounded.small}"
    padding: "0.375rem 0.75rem"
  led:
    backgroundColor: "{colors.led-off}"
    rounded: "{rounded.led}"
    size: "0.5rem"
  led-on:
    backgroundColor: "{colors.signal-orange}"
    rounded: "{rounded.led}"
    size: "0.5rem"
  engraved-label:
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
  tag:
    textColor: "{colors.ink-3}"
    typography: "{typography.tag}"
  nav-selector:
    textColor: "{colors.ink-2}"
    typography: "{typography.selector}"
    padding: "0.75rem 0"
---

# Design System: architgupta.me

## Overview

**Creative North Star: "The Instrument Faceplate"**

The site is a precise instrument in the 1960s Ulm-school sense: one matte faceplate set on a slightly darker desk, cut into modules by engraved seams, with raised keys you press and recessed wells you read. Numbers are measurements, not decoration. Every interactive thing is a physical-feeling key; every piece of status is a readout behind glass. One orange key colour is reserved for the action or signal that matters now.

Density is calm and generous. Modules breathe (large block padding), rows inside them are separated by engraved seams rather than cards, and the eye moves left-to-right from a label column to a body column across a vertical cut. Motion behaves like the instrument it is. One authored moment: a power-on sequence on the first home-page visit of a session (seams engrave in, the status LED flickers to steady, the readout warms up, the portrait window opens like a shutter and a glint crosses its glass, the keys rise, the metric counters roll into place). After that, motion is mechanical and purposeful: odometer wheels on the metrics when they first come into view, a selector knob that slides between nav positions, and a tuning needle that tracks the featured projects as they scroll. Nothing loops, nothing is ambient, and content never waits on motion. Under reduced motion all of it is removed and values show final immediately.

Light is the lead theme. Dark is the same instrument in warm anodised graphite, with the same tokens re-valued, never a different world. The graphite carries the light plate's warmth (red and green channels a step above blue), so the orange key belongs to the panel rather than sitting on a cold blue-black, and wells sit only a few steps below the plate so they read as recesses, not holes. The previous dark cyan/violet world (glass cards, scroll-reveal cascades, magnetic tilt, conic borders, custom cursor) is retired and must not return.

**Key Characteristics:**
- One faceplate (the plate) on a desk margin; the whole page sits inside it.
- Raised keys for real links and buttons; recessed wells for readouts.
- Engraved seams: a dark 1px line with a 1px highlight beneath it.
- Archivo variable grotesk, using its width axis: wide and heavy for display, condensed caps for engraved labels.
- Tabular, lining figures wherever a number is a measurement.
- One orange, one meaning.

## Colors

A near-achromatic warm-grey instrument palette with a single saturated signal orange. Tokens are RGB triplets on `:root` (light) and `:root[data-theme='dark']` so Tailwind can apply alpha; the hex values above are their exact equivalents.

### Primary
- **Signal Orange** (signal-orange / dark-signal-orange): the one lit colour. Fill of the résumé key (nav, hero, contact), the lit status LED, the lit cross-reference marker on a `:target` row or bullet (with its fading tint), and the text caret. Nothing else on the site is orange: the toast confirms with a check icon, the 404 readout LED is unlit, the palette's active icon and the section-link "copied" state use ink, and text selection is ink at 16%. Its legend on the key is ink-dark (signal-orange-legend), not white.
- **Signal Orange as Text** (signal-orange-text / dark-signal-orange-text): the AA-safe orange for the rare case orange must sit as text or an icon on the plate.
- **Focus Orange** (focus / dark-focus): the 3px focus outline. Focus is the brightest state on the page.

### Neutral
- **Desk** (desk): the margin around the faceplate and the page background; also `theme-color`.
- **Plate** (plate): the faceplate surface, the sticky nav, the command palette panel.
- **Raised Key Cap** (raised): face of light keys, metric keys, the theme-switch thumb, the selected filter option.
- **Sunk Well** (sunk): floor of recessed readouts, the switch track, a lit bullet.
- **Seam Cut / Seam Highlight** (seam, seam-highlight): the two lines of every engraved seam; seam alone also draws hover outlines on metric keys.
- **Ink, Ink 2, Ink 3** (ink, ink-2, ink-3): primary text and headings; secondary prose and descriptions; engraved labels, tags, metadata, metric units.
- **Graphite Key** (key-graphite, key-legend): the dark secondary-action key (View projects, Get in touch, Copy address).
- **LED Off** (led-off): an unlit indicator.
- **Grille** (grille / dark-grille): the dots of the speaker-grille strip beside the portrait; equal to led-off in light, nearly black in dark so the holes read as cut through the plate.

### Named Rules
**The One Orange Rule.** Orange means "this is the thing, now": the résumé key, the live status LED, the lit cross-reference, the caret. It is never used for headings, hover states, selection, confirmations, active list items, decoration, links in prose, or a second call to action. The build holds this rule everywhere.

**The Same Instrument Rule.** Dark mode re-values the same tokens; it adds no colour, no glow, and no new surface. A component that needs a dark-only colour is wrong.

## Typography

**Display Font:** Archivo Variable (weight and width axes; with ui-sans-serif, system-ui)
**Body Font:** Archivo Variable
**Label Font:** Archivo Variable (condensed on the width axis). There is no monospace face on the site.

**Character:** One grotesk doing every job through its axes: stretched wide and heavy (wdth 104 to 106, weight 720 to 760) with tight tracking for display and section headings; condensed (wdth 78 to 82) uppercase with open tracking for engraved panel labels and tech tags. Weights are set on the variable axis in odd steps (540, 560, 620, 640, 680) rather than snapped to 400/700.

### Hierarchy
- **Display** (760, clamp 3.25 to 6rem, 0.92, wdth 106): the name in the hero h1 only.
- **Greet** (560, clamp 1.125 to 1.375rem, 1.2, ink-2): the "Hi, I'm" line, set inside the same h1 above the name; it is part of the heading, not a label over it.
- **Role** (600, clamp 1.5 to 2.25rem, 1.15): the role line under the hero name.
- **Headline** (720, clamp 2 to 3rem, 1.02): section headings and page h1s, each paired with a hover/focus copy-link key.
- **Title** (700, clamp 1.375 to 1.625rem, 1.2): role titles, project names.
- **Subtitle** (600, 1.125rem, 1.45): a project's tagline, capped at 52ch.
- **Readout** (740, clamp 1.875 to 2.375rem, 1, tabular): metric values in the hero readout strip; an optional unit follows at 0.5em, weight 600, ink-3.
- **Lede** (400, clamp 1.0625 to 1.1875rem, 1.55, ink-2): the hero tagline, capped at 36em.
- **Body** (400, 1.0625rem, 1.6): prose in ink-2, capped at 68 to 72ch. Experience bullets drop the cap from 1024px and run to the row's right seam.

**The Justified Block Rule.** Prose blocks (About bio, Experience bullets, project descriptions, FAQ answers) are justified from 640px via the shared `.justify` class, never auto-hyphenated, last line ragged. Below 640px they are ragged right, where justification opens rivers. Taglines, ledes and short leads stay ragged at every width.
- **Key Legend** (600, 0.9375rem, 1.2): text on keys.
- **Key Legend Large** (600, 1rem, 1.2): the hero action keys only.
- **Selector** (640, 0.8125rem, 0.1em, uppercase, wdth 80): nav selector labels, engraved condensed caps, in the desktop strip and the menu panel.
- **Position** (600, 0.6875rem, tabular, ink-3): the position numeral before each selector label.
- **Label** (620, 0.75rem, 0.12em, uppercase, wdth 78): engraved panel labels: field names, definition terms, footer, palette footer, project year, group titles on /uses. The theme switch legends use the same treatment at 0.6875rem.
- **Tag** (600, 0.75rem, 0.08em, uppercase, wdth 82): technology lists, separated by gap, not boxed.
- **Chip** (640, 0.75rem, 0.08em, uppercase, wdth 82, ink): the text inside a project's event chip.

### Named Rules
**The Measurement Rule.** Any number that is a measurement uses tabular lining figures. A metric is a value at full readout weight, an optional unit at half size in ink-3, then a plain-language label beneath; units never sit at readout weight.

**The No Kicker Rule.** Engraved labels name a panel, a field, or a group. They never sit above a heading as a kicker or eyebrow.

## Layout

The page is one faceplate, centred, as wide as 82rem but never touching the window: its width subtracts the desk margin on both sides at every viewport, so the desk always shows around it. Inside it, every section is a module: block padding clamp(3rem, 6vw, 5.5rem), inline padding equal to the shared `pad` value, separated from the previous module by an engraved seam along its top edge.

Within modules, content is set as rows, not cards: each row has a label column (13 to 16rem: dates, project name, group title) and a body column, divided at md or lg by a vertical engraved cut drawn as a background gradient at the column edge plus half the gap. Rows are separated by horizontal seams and padded 2rem (2.5rem from md/lg). Section headings sit 2.5rem above their content. On experience rows the label column is sticky from md (top: nav height + 1.5rem), so a long role's dates travel with its bullets instead of leaving the column empty.

**The Even Columns Rule.** Two side-by-side columns in a module end on the same line; neither leaves a dead block under the other. About is the reference: from 1240px the copy column carries the heading, fact readout, bio and a four-up quick-facts strip (cut by a seam above, vertical seams between), and the 3:4 portrait (up to 28rem) is bottom-aligned to that strip, so any spare height sits beside the heading. Below 1240px the copy stacks full width and the portrait sits beside the quick-facts list.

The hero is a control module. At 1024px and up it is two columns, copy (1.25fr) and panel (0.75fr), divided by a full-height engraved vertical seam. The copy column stacks name, role, tagline, the status readout, the primary key row (orange résumé key first, then graphite keys; 1.35fr / 1fr / 1fr from 640px) and the profile keys. The panel column holds the portrait window (3:4, up to 21.25rem wide) with a vertical speaker-grille strip beside it. Beneath both, a full-width metrics strip is cut off by an engraved horizontal seam that meets the foot of the vertical seam. Below 1024px the two columns dissolve (display: contents) into one grid so the portrait sits beside the name (8rem wide, 10rem from 640px) and the grille is hidden; the metrics strip runs 2 columns, 3 at 640px, 6 at 1024px.

Breakpoints observed: 640px, 768px, 900px (theme switch joins the nav), 1024px, 1240px (numbered selector nav replaces the menu key). The sticky nav is 4.5rem tall and every anchored element carries a matching scroll margin.

The direction named an 8-column, 8px-baseline module; the build does not hold to a strict 8px grid (10px and 14px steps recur). Spacing is set by the values above, not by a baseline.

## Elevation & Depth

Depth is physical and shallow, built from paired light: soft drop shadows plus an inner top highlight lift keys and the plate; inner shadows plus a bottom highlight sink wells. Nothing floats in space except the command palette. There are no glows, no glass, no blur, and no hard offset shadows.

### Shadow Vocabulary
- **Plate** (`0 1px 2px rgb(0 0 0 / 0.06), 0 24px 48px -32px rgb(0 0 0 / 0.35), inset 0 1px 0 rgb(255 255 255 / 0.85)`): the faceplate on the desk.
- **Key** (`0 1px 0 rgb(0 0 0 / 0.06), 0 2px 4px -1px rgb(0 0 0 / 0.12), inset 0 1px 0 rgb(255 255 255 / 0.9)`): every raised key at rest.
- **Key Down** (`0 0 0 rgb(0 0 0 / 0), 0 1px 1px rgb(0 0 0 / 0.1), inset 0 1px 2px rgb(0 0 0 / 0.08)`): pressed, open, or aria-pressed keys, with a 1px downward translate.
- **Well** (`inset 0 2px 3px rgb(0 0 0 / 0.12), inset 0 -1px 0 rgb(255 255 255 / 0.7)`): recessed readouts, the switch track, the search field, a lit bullet.
- **Seam** (`border-top: 1px solid seam` plus `0 1px 0 seam-highlight`): every engraved division. A vertical seam is the same pair turned 90 degrees (1px seam line plus a 1px highlight to its right).
- **LED Lens** (unlit: `inset 0 1px 1px rgb(0 0 0 / 0.18)`; lit: `inset 0 -1px 1px rgb(0 0 0 / 0.18), inset 0 1px 1px rgb(255 255 255 / 0.45)`): part of the LED recipe in both themes; it makes the dot read as a domed lens set into the plate, not a flat circle.

Dark mode deepens the drop shadows and dims the highlights, warmed to rgb(255 248 235) (values in the sidecar); the vocabulary is the same. A seam on a box taller than 1px is drawn inside it (border in seam-highlight plus `inset 0 -1px 0` seam), because an outer 1px shadow aliases into a vertical line when the box lands on a half pixel.

### Named Rules
**The Press Rule.** A key at rest is raised; pressing, opening, or toggling it sinks it (Key Down shadow, translateY 1px). Depth changes only in response to the visitor.

## Shapes

Softly radiused, machined rectangles, each radius one step smaller than the surface it sits in. The plate's corners scale with the viewport (1.25 to 1.75rem); the portrait window, the grille strip and the email panel are 1rem; wells, metric keys and hero action keys are 0.875rem; keys are 0.75rem; a photo inside its window sits behind a 0.375rem bezel with a 0.6875rem radius; small insets (bullets, the FAQ toggle, the highlight readout, filter options) are 0.625rem; event chips are 0.5rem. The focus outline follows a 6px radius. Only LEDs are fully round. Photos are always 3:4 portraits inside a well window, never square crops. The portrait's own backdrop is matched to the instrument: panel grey (#E4E5E0) in the light file, graphite (equal to dark-raised) in the dark file, swapped on the theme attribute so no white rectangle ever shows. Divisions are engraved lines, not borders around boxes.

## Components

### Buttons (Keys)
Tactile and exact: every key is a real link or button.
- **Shape:** gently rounded (0.75rem), minimum height 2.75rem; large action keys 3.25 to 3.5rem tall with 0.875rem radius.
- **Light key:** raised key-cap face, ink legend, Key shadow. Used for profile links, Code/Live, "N more", All projects, ⌘K.
- **Graphite key:** key-graphite face, key-legend text. Secondary actions: View projects, Get in touch, Copy address.
- **Orange key:** signal-orange face, dark legend. The résumé download only; it leads the hero key row.
- **Hero action keys:** 3.5rem tall, 0.875rem radius, 1rem legend; the orange key spans the row on the smallest screens.
- **Hover / Focus / Active:** hover lightens the face slightly (alpha 0.7 to 0.9); focus is a 3px focus-orange outline offset 3px; active and aria-pressed sink with Key Down and translateY(1px) over 120ms.

### Metric Keys (Signature)
The metrics readout strip under the hero: six raised metric keys, each a link to the section, bullet, or page that proves it. A readout-weight tabular value with an optional half-size ink-3 unit sits above a 0.875rem ink-2 label; minimum height 6.5rem (7.25rem from 1024px). Hover adds a 1px seam ring; press sinks. Following one lights the target: a bullet becomes a well with an orange LED, a project row gains an orange dot before its name, and an orange tint fades out over 1.6s.

### Status Readout
A well holding two lines: the facts row, its items divided by a short engraved vertical seam (stacked without seams below 640px), then the live line in ink, led by a lit LED. Sized to its content, never full-width.

### Portrait Window
A 1rem-radius well with a 0.375rem bezel framing the 3:4 portrait, paired on wide screens with a 3.5rem speaker-grille strip of round dots on a 14px pitch. The grille is decoration of the instrument, aria-hidden, and never carries content.

### Event Chip
A small well (0.5rem radius, 0.375rem by 0.75rem padding) holding engraved chip caps in ink, set at the top of a project's body column to name where the project was made (for example "HackPrinceton Fall 2026 · Business + Enterprise track"). It is a readout, not a key and not a heading label.

### Wells (Readouts)
- **Style:** sunk floor, Well shadow, 0.875rem radius (1rem for the email panel). Hold status readouts, the about fact line, GPA, the highlight figure per role, the primary-stack readouts, event chips, the search field, the project filter, the toast, the portrait windows.
- **Rule:** a well is never clickable as a whole; keys may sit inside one.

### Indicator LEDs
0.5rem round dots with the LED Lens shadow. Unlit (led-off) beside every experience bullet, past status line, and the 404 readout; lit (signal-orange) only for live status (hero, FAQ banner, contact), the current role, and a lit cross-reference.

### Inputs / Fields
- **Style:** the palette search field is a well with the input set transparently inside it.
- **Focus:** the well keeps its inner shadow and gains a 3px focus-orange ring.

### Theme Switch
A two-position slide switch: condensed-caps LIGHT and DARK legends (the active one in ink) either side of a sunk track with a raised thumb that slides 1rem over 200ms. role="switch" with aria-checked.

### Navigation
Sticky plate-coloured strip sealed by a seam, gaining a soft drop shadow once scrolled. Wordmark at 720 weight, then a numbered selector: tabular position numerals in ink-3 before each label in engraved condensed caps (Selector style) in ink-2; the section in view turns ink and gets a 2px ink underline that scales in from the left. Tools on the right: theme switch, ⌘K key, orange Résumé key. Below 1240px a menu key opens a two-column numbered list with the switch and an All projects key. Never a pill-shaped bar.

### Tags
Technology lists set in the condensed-caps tag style, ink-3, separated by 0.875rem gaps. No pills, no boxes.

### Skills Spotlight
Skills the page can prove are pressable: the primary stack as light keys with an indicator LED top-left, table skills as text with a faint engraved underline (ink-3 at 32%). Pressing one opens a well under its group: a header with a lit LED, the skill and a tabular count ("2 roles · 2 projects"), then one row per proof (role or project name over an engraved source line, the bullet or tagline with the term marked in ink at 680, a project's stack in tag caps, an arrow). It lights the same places across the page: bullets become lit wells with the orange LED, project rows take the orange dot, tags turn ink with a 2px underline. One skill at a time; pressing it again, the close key or Escape ends it and returns focus; `?skill=<slug>` deep-links it and skips the power-on. Evidence is built at compile time from `src/data/evidence.ts` with whole-word, case-sensitive matching and a short alias list; a skill with no proof on the site stays plain text and is never a key.

### Section Heading
Headline text with a 2rem square copy-link key that appears on hover or focus (always faintly visible on touch) and copies the section URL; once copied it sinks to a sunk face with an ink glyph.

### Toast
A well that rises at the bottom centre with an ink check icon and a short confirmation, then hides after 1.6s. It never uses orange.

## Do's and Don'ts

### Do:
- **Do** make every raised key a real `<a>` or `<button>`, and put read-only values in recessed wells.
- **Do** reserve signal-orange for the résumé key, the lit status LED, the lit `:target` cross-reference marker, and the caret.
- **Do** separate rows and modules with engraved seams (dark line plus highlight) rather than card borders.
- **Do** set measurements with tabular lining figures, with any unit at half size in ink-3 after the value.
- **Do** link every metric key to its proof.
- **Do** show photos at 3:4 inside a well window, with the backdrop matched to the panel grey in light and graphite in dark.
- **Do** keep the desk margin visible around the plate at every width.
- **Do** keep motion mechanical: the power-on sequence (once per session, html.boot, about 1.5s, never on a deep link), odometer wheels on the metrics (WAAPI, 0.9 to 1.4s), the nav selector knob (420ms slide), the projects tuning needle (scroll-linked, lamp lit only when tuned), key press 120ms, switch 200ms, theme crossfade 220ms, all on cubic-bezier(0.16, 1, 0.3, 1). Remove all of it under prefers-reduced-motion or the stored reduce-motion preference; the palette's "Replay power-on" re-runs the sequence.
- **Do** follow the system theme by default and honour the stored manual choice before first paint.

### Don't:
- **Don't** put a kicker or eyebrow label above a heading; engraved labels name panels, fields, and groups only.
- **Don't** use orange for headings, hover states, selection, confirmations, active items, prose links, decoration, or a second call to action.
- **Don't** style a non-interactive element as a raised key.
- **Don't** set tech tags or the navigation as pills.
- **Don't** add generic scroll-triggered fade/rise reveals, looping or ambient animation, parallax, or a custom cursor. Scroll may drive motion only when the scroll relationship is the meaning (the tuning needle).
- **Don't** bring back the retired dark cyan/violet world: no glass cards, glows, conic borders, or magnetic tilt.
- **Don't** add a monospace face or set display text in a system face; Archivo carries every role.
- **Don't** crop photos square.
