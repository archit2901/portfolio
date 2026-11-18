---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/projects/index.astro","src/pages/uses.astro"]
---

# Home page (architgupta.me /)

Scope: home page plus /projects, /uses, /blog, /404, which inherit its world. Visitor mode: Persuade.
Audience: recruiters screening for full-time 2027 SWE roles (10-second skim), then engineers checking depth.
Action: download the résumé, email, open LinkedIn/GitHub. Proof: the 6 headline metrics, each linked to its proof, and the experience bullets.
Constraints: content from `src/data/*` only; light + dark (system default, toggle); Lighthouse 95+; 3 to 4 bullets per role visible; no kicker labels above headings; no pill nav.
Chosen direction: Instrument Faceplate. Memorable moment: the large portrait window beside the name, and pressing a metric key lands on its proof.

## Direction contract

THESIS: The site is a precise instrument. One calm light-grey faceplate where the numbers are readouts and keys, and a single orange key does the important thing. It refuses the dark terminal/neon portfolio and the centred-headline-over-cards template.

OWN-WORLD: Matte faceplate grey ground inside a darker desk margin, raised off-white keys with soft offset shadows, recessed readout wells, engraved seams (dark line + white highlight), condensed-caps engraved labels, Archivo grotesk with tabular figures, one orange key colour reserved for the action that matters now (résumé, current status, lit cross-ref). Dark theme is the same instrument in anodised graphite.

STORY: The visitor reads name, role, status and four links in one glance, sees six headline metrics in a readout strip (experience, scale, uptime, clients, GPA, projects), presses one and lands on its proof, then downloads the résumé.

FIRST VIEWPORT: One faceplate. Top strip: wordmark, numbered selector nav in engraved caps, LIGHT/DARK slide switch, ⌘K key, orange Résumé key. Left module (~62%): "Hi, I'm Archit Gupta" at display scale, role line, tagline, a two-line recessed readout (facts cut by a seam, lit LED on 'Open to full-time 2027 roles'), the primary key row with orange Download résumé first, then GitHub/LinkedIn/Email keys. Right module (~38%): a large 3:4 portrait window (about 340px) with a vertical dot-grille strip, cut from the left by a full-height engraved seam. Beneath both, cut by a horizontal seam: the 6-metric readout strip. (Revised 2026-11-15 at Archit's request: bigger headshot, broad metrics, Code section removed.)

FORM: Instrument Faceplate (1960s Ulm-school product design), candidate 3 of 7 on my ordered list; seed key 86977f3a. Raised by declined challengers: orange reserved for one meaning (orienteering); focus is the brightest state (understory); before → after stats set as measurements (forge); stillness by default, nothing moves unless the visitor moves it (ink basin); one 8-column, 8px-baseline module made visible by seams (oscilloscope).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Motion revision (2026-11-15, Archit asked for animation and something to show): the "stillness by default" raise is replaced by one power-on sequence per session, odometer metrics, a sliding nav selector knob, and a scroll-linked projects tuning dial. Still nothing loops and content never waits on motion.

## Unresolved

- SEC Filings Agent repo link and both new project years (TODO in data).
