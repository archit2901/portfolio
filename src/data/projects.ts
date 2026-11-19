/**
 * Projects. `featured` projects appear on the home page in `featuredOrder`;
 * everything appears on /projects. Optional fields left undefined are hidden.
 */

export type ProjectCategory = "ai" | "systems" | "web";

export interface Project {
  slug: string;
  name: string;
  /** Short label for the projects tuning dial (defaults to name). */
  short?: string;
  subtitle?: string;
  tagline: string;
  /** Where it was built, e.g. a hackathon. Shown as a readout chip. */
  event?: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  year?: string;
  category: ProjectCategory;
  featured: boolean;
}

export const projectCategories: { key: ProjectCategory; title: string }[] = [
  { key: "ai", title: "AI" },
  { key: "systems", title: "Systems" },
  { key: "web", title: "Web" },
];

export const featuredOrder = ["siteline", "sec-filings-agent", "market-stream", "url-shortener"];

export const projects: Project[] = [
  {
    slug: "siteline",
    name: "Siteline",
    subtitle: "AI Site-Selection Agents",
    tagline: "A multi-agent system that tells any business where in Houston to open its next location.",
    event: "2nd Place · CoStar Track · HackPrinceton 2026",
    description:
      "Led a 4-person team building a multi-agent site-selection system on Amazon Bedrock and LangChain. It scores 11,720 H3 hexagons across Harris, Fort Bend and Montgomery counties with a Huff gravity model, ranks real CoStar lease spaces by customers won and rent per customer, and verifies every number in Python (40/40 evals) before the top 10 are shown with citations.",
    stack: ["Python", "FastAPI", "LangChain", "Amazon Bedrock", "React", "deck.gl"],
    repoUrl: "https://github.com/archit2901/siteline",
    year: "2026",
    category: "ai",
    featured: true,
  },
  {
    slug: "sec-filings-agent",
    name: "SEC Filings Research Agent",
    short: "SEC Agent",
    tagline: "An agentic RAG system that answers research questions over NVIDIA, AMD, and Micron SEC filings.",
    description:
      "Built the agent with LangGraph, using Pinecone for vector search and Cohere reranking to surface the most relevant filing passages. An early-stopping agent cut model calls by 43% and latency by half versus a baseline in evaluations.",
    stack: ["LangGraph", "RAG", "Pinecone", "Cohere", "LLM Evals"],
    repoUrl: undefined, // TODO: repo link (no matching repo found on github.com/archit2901)
    year: undefined, // TODO: project year
    category: "ai",
    featured: true,
  },
  {
    slug: "market-stream",
    name: "Market Stream",
    subtitle: "Real-Time Market Data Pipeline",
    tagline: "A real-time market data pipeline that merges two market data APIs into one clean event stream.",
    description:
      "A Python pipeline polls CoinGecko and Finnhub and unifies their data into a deduplicated Kafka event stream covering 14 assets. It computes event-time rolling windows in Redis and rebuilds that state from Kafka replay in under 1 second after a restart.",
    stack: ["Python", "Kafka", "Redis", "Stream Processing"],
    repoUrl: "https://github.com/archit2901/market-stream",
    year: undefined, // TODO: project year (repo created Jul 2026)
    category: "systems",
    featured: true,
  },
  {
    slug: "url-shortener",
    name: "URL Shortener",
    tagline: "Production-grade URL shortener in Go.",
    description:
      "Layered Go service backed by PostgreSQL + Redis with a cache-aside redirect path, base62 short-code generation, golang-migrate migrations, structured Sentry observability, and a CI workflow. Integration tests spin up disposable Postgres/Redis containers via testcontainers.",
    stack: ["Go", "PostgreSQL", "Redis", "Sentry", "Docker", "GitHub Actions"],
    repoUrl: "https://github.com/archit2901/url-shortener",
    year: "2026",
    category: "systems",
    featured: true,
  },
  {
    slug: "sentiment-aura",
    name: "Sentiment Aura",
    tagline: "Real-time speech-sentiment, visualized as a Perlin-noise aura.",
    description:
      "Speak into your mic and watch a flowing emotion-driven animation react in real time. React + react-p5 frontend streams audio to Deepgram for live transcription, then a FastAPI backend routes transcripts through Claude Sonnet 4 for emotion + keyword extraction. Each emotion has its own colors and particle behaviour.",
    stack: ["React", "react-p5", "FastAPI", "Python", "Deepgram", "Claude API"],
    repoUrl: "https://github.com/archit2901/sentiment-aura",
    liveUrl: "https://sentiment-aura-eight.vercel.app",
    year: "2025",
    category: "ai",
    featured: false,
  },
  {
    slug: "resume-to-portfolio",
    name: "Resume → Portfolio",
    tagline: "Upload a resume, get a portfolio site back.",
    description:
      "Drop a PDF or DOCX onto the page; the backend parses it, ships the text through Claude for structured extraction (name, skills, experience, projects…), and renders a fully self-contained HTML portfolio you can download and host anywhere. Includes a live edit flow for tweaking sections before exporting.",
    stack: ["Next.js 14", "TypeScript", "Tailwind", "Framer Motion", "Claude API", "pdf-parse"],
    repoUrl: "https://github.com/archit2901/resume-to-portfolio",
    year: "2026",
    category: "ai",
    featured: false,
  },
  {
    slug: "careercompass-ai",
    name: "CareerCompass AI",
    tagline: "AI career-development platform.",
    description:
      "React + Vite client with protected routes (login/register) and a Job Analyzer module that runs job descriptions through the Claude API to extract requirements and surface fit insights for the user.",
    stack: ["React", "Vite", "Claude API", "REST APIs"],
    repoUrl: "https://github.com/archit2901/careercompass-ai",
    year: "2025",
    category: "ai",
    featured: false,
  },
  {
    slug: "webthreaders-new",
    name: "Web Threaders",
    tagline: "Digital-agency site with a Three.js particle-network hero.",
    description:
      "Next.js 15 marketing site with an interactive 3D particle network rendered via @react-three/fiber, glassmorphism cards, Framer Motion scroll reveals, animated counters, a tech-ticker marquee, and a contact form wired through API routes.",
    stack: ["Next.js 15", "TypeScript", "Three.js", "@react-three/fiber", "Framer Motion", "Tailwind"],
    repoUrl: "https://github.com/archit2901/webthreaders-new",
    year: "2026",
    category: "web",
    featured: false,
  },
  {
    slug: "haryanahandloom-new",
    name: "Haryana Handloom",
    tagline: "Next.js storefront for a handloom brand.",
    description:
      "Marketing + commerce site with a category-grid home, shop page, care guide, contact page, and dynamic category routes. Built on the Next.js 14 App Router with a component-driven layout (Hero, ProductShowcase, Testimonials, Newsletter, Brands).",
    stack: ["Next.js 14", "TypeScript", "Tailwind", "shadcn/ui"],
    repoUrl: "https://github.com/archit2901/haryanahandloom-new",
    year: "2026",
    category: "web",
    featured: false,
  },
  {
    slug: "school-robotics-team",
    name: "RoboHawks Robotics",
    tagline: "Single-page site for a high-school robotics team.",
    description:
      "Volunteer build for the RoboHawks team. React + Vite + Tailwind with Framer Motion scroll-reveals, animated stat counters, project modals, sticky navbar, and a mobile hamburger menu. All copy lives in one editable data file so the team can swap content without touching components.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
    repoUrl: "https://github.com/archit2901/school-robotics-team",
    year: "2026",
    category: "web",
    featured: false,
  },
];

export const featuredProjects: Project[] = featuredOrder
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is Project => Boolean(p));
