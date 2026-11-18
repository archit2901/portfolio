# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and sourcers screening candidates for full-time software engineering roles starting in 2027. They arrive from a résumé, LinkedIn, or an ATS link, usually on a desktop at work with several tabs open, and give the site about 10 seconds to answer: who is this, what does he do, is he available, where is the résumé.

Secondary: engineers and hiring managers who click through to judge depth. They read experience bullets, open projects and repos, and look at real code.

## Product Purpose

architgupta.me is Archit Gupta's portfolio and hiring funnel. Archit is a full-stack and AI software engineer finishing an MS in Computer Science at Northeastern (graduating May 2027), open to full-time 2027 roles. Success: a recruiter understands who he is in about 10 seconds and acts (downloads the résumé, emails, opens LinkedIn); an engineer leaves convinced the numbers are real.

## Positioning

He builds web products and AI systems end to end: React front ends, cloud backends, and LLM agents that hold up in production. The proof is measured, specific outcomes from real roles (EY.AI used by 400K+ employees at 99.9% uptime; Abacus dashboard load 8–9 s to under 1 s; an early-stopping agent that cut model calls 43%), not adjectives.

## Operating Context

- Visitors compare the site against the résumé PDF in the next tab, so content must match the résumé exactly.
- Recruiters skim; engineers dig. The first viewport serves the skim, everything below rewards digging.
- Light and dark mode both required: follow the system setting by default, with a manual toggle.

## Capabilities and Constraints

- Static Astro 5 site, Tailwind 3, deployed on Vercel from `main`. Client JS only where interaction needs it.
- URLs that must keep working: `/`, `/projects`, `/resume.pdf`, section anchors (`#about`, `#experience`, `#projects`, `#contact`, ...), plus `/uses`, `/blog`, and vanity redirects in `vercel.json`.
- Content lives in typed data files under `src/data/`; components never hardcode copy.
- Required features: ⌘K command palette, copy-to-clipboard email, résumé download, "Code I'm proud of" (URL shortener `Resolve` snippet), static impact-stats row, section numbering if it fits.
- Experience shows 3 to 4 bullets per role without clicks; only extra bullets collapse.
- Lighthouse 95+ for Performance, Accessibility, Best Practices, SEO on mobile and desktop. Responsive at 375, 768, 1280+.
- Calm motion only; `prefers-reduced-motion` turns non-essential animation off.

## Brand Commitments

- Name: Archit Gupta. Role line: "Full-stack & AI engineer."
- Copy voice: first person, plain and direct. No em dashes in prose. No filler ("passionate", "leverage", "cutting-edge", "seamless", "robust").
- Numbers are used exactly as written in the content brief; nothing invented.
- Photos are shown in a 3:4 portrait aspect, never square crops.
- Navigation is not a pill-shaped bar.

## Evidence on Hand

- Content brief: `~/Downloads/Claude_Code_Website_Brief.md` (single source of truth for copy).
- Résumé: `public/resume.pdf` (Nov 2026).
- Headshot, white background: `public/headshot.png` (1000×1000), 3:4 crops `public/headshot-3x4.jpg`, `public/headshot-3x4-sm.jpg`.
- Portrait at Grand Central: `public/portrait.jpg` (1200×1600).
- Real code: URL shortener `Resolve` function (github.com/archit2901/url-shortener).
- Repos: github.com/archit2901 (url-shortener, market-stream, sentiment-aura, resume-to-portfolio, and others).
- Absent, must not be fabricated: testimonials, a SEC Filings agent repo link, project years for SEC Filings Agent and Market Stream.

## Product Principles

1. Ten seconds to understand: name, role, status, and the four links come before anything else.
2. Prove, don't claim: every number traces to a specific role or project.
3. Show without clicks: content is visible by default; interaction adds, never gates.
4. Fast and accessible is part of the pitch: an engineer's site that scores poorly undercuts the claim.

## Accessibility & Inclusion

WCAG AA contrast in both light and dark themes. Full keyboard support (including the ⌘K palette). Respect `prefers-reduced-motion`.
