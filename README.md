# Archit Gupta — Portfolio

Personal portfolio of Archit Gupta, full-stack software engineer.

**Live:** [architgupta.me](https://architgupta.me)

## Stack

[Astro](https://astro.build/) · [Tailwind CSS](https://tailwindcss.com/) · [Three.js](https://threejs.org/) · TypeScript

Single-page landing (`/`) with a standalone projects archive (`/projects`) and a custom 404. Includes a `⌘K` command palette, keyboard shortcuts (`g a` / `g e` / `g d` etc.), and a Three.js wireframe-globe hero. All site content lives in [`src/content/site.ts`](src/content/site.ts) — components import from there.

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static output → dist/
npm run preview      # serve the built site locally
npx astro check      # type + diagnostics check
```

## Deploy

Auto-deploys to Vercel on push to `main`. Sitemap + robots.txt + JSON-LD `Person` schema + OG image all ship with the static build.

## License

Source available for reference. Please don't re-host as your own portfolio.
