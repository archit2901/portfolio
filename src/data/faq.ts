/**
 * Recruiter FAQ. Answers may contain inline HTML (<strong>, <a>) and are
 * rendered with set:html. Answers 3, 4 and 8 are kept from the previous site
 * per the content brief; the rest are new.
 */

export const faqBanner = "Open to full-time software engineering roles starting in 2027";

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: "What roles are you looking for?",
    a: "Full-time software engineering roles starting in 2027, after I finish my MS in May. I'm most interested in full-stack and backend work, and anything close to AI systems: agents, RAG, evaluations, and the infrastructure behind them. New grad and early-career titles fit. With two and a half years at EY plus an internship, I tend to ramp up faster than the title implies.",
  },
  {
    q: "When are you available to start?",
    a: "I finish my MS in Computer Science at Northeastern in May 2027 and can start full-time after that. I'm available to interview anytime with a day's notice.",
  },
  {
    q: "Where are you based, and are you open to relocation?",
    a: "Boston, MA. Open to <strong>NYC, SF Bay Area, Seattle, Austin</strong>, or <strong>fully remote</strong> for the right team. I'd prefer hybrid in-office a few days a week. I do my best work around other people. US-wide timezone collaboration works for me since I did it daily at Abacus.",
  },
  {
    q: "What's your work authorization?",
    a: "F-1 student visa. After May 2027 graduation I'm eligible for <strong>12 months of OPT plus the 24-month STEM-OPT extension</strong>, which gives me 36 months of work authorization with no sponsorship needed. For the long term I'll need <strong>H-1B sponsorship</strong>, and I would plan to file in the FY28 cycle. Companies that sponsor STEM-OPT and H-1B are a hard requirement on my side.",
  },
  {
    q: "What's your biggest impact so far?",
    a: "At Ernst & Young I built the user-facing app for EY.AI, a generative AI assistant on the OpenAI API used by 400,000+ employees at 99.9% uptime. I also built a Return-to-Office approval app end to end that improved request handling efficiency by 90%+, and a KPI dashboard for 1,000+ partners that cut review time by 70%. At Abacus, I helped migrate a legacy ASP.NET portal to React and TypeScript and brought dashboard load times from 8–9 seconds to under 1 second.",
  },
  {
    q: "What stack are you strongest in?",
    a: "Frontend: TypeScript, React, Next.js, Tailwind. Backend: Node.js, Python/FastAPI, Go. AI: LangGraph, LangChain, RAG, the OpenAI and Claude APIs, and LLM evals. Cloud and data: AWS (S3, ECS Fargate, Cognito, CloudWatch), Terraform, Docker, PostgreSQL, MongoDB, Redis, and Kafka. Testing: pytest, Vitest, Playwright. Recent personal builds include an agentic RAG research agent over SEC filings, a Kafka market data pipeline, and a Go URL shortener with Postgres and Redis.",
  },
  {
    q: "What kind of problems do you most want to work on?",
    a: "Products that have to work in production: fast, observable, correct, with real users on the other end. I'm most excited by AI systems where reliability matters, like agents that call tools, retrieval pipelines, and the evaluations and monitoring that make them safe to ship. I'm less interested in pure marketing-site work or roles that strip away backend ownership.",
  },
  {
    q: "Where can I see more, and what's the fastest way to reach you?",
    a: "<strong>GitHub</strong>: <a href=\"https://github.com/archit2901\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/archit2901</a>, including the projects on this site. The <a href=\"/projects\">/projects page</a> here has the full list. The fastest way to reach me is <strong>email</strong>: <a href=\"mailto:gupta.archit1@northeastern.edu\">gupta.archit1@northeastern.edu</a>, and I respond within 24 hours on weekdays. LinkedIn DMs work too. I'm up for a 25-minute intro call or jumping straight into a technical screen.",
  },
];
