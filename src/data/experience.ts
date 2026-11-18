/**
 * Roles in reverse chronological order. Source: the Nov 2026 content brief.
 *
 * - `highlight` is the one-line summary shown under the title (omit to hide).
 * - Bullets with an `id` are the source of an impact stat in `stats.ts`;
 *   the stat links to `#<id>` so a visitor can see the number in context.
 * - The first `visibleBullets` bullets show by default; the rest collapse.
 */

export interface Bullet {
  text: string;
  id?: string;
}

export interface Role {
  slug: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  highlight?: string;
  bullets: Bullet[];
  /** Technologies named in this role's bullets. */
  stack: string[];
}

export const visibleBullets = 4;

/** Stable anchor for a bullet: its stat id if it has one, else `<slug>-<n>`. */
export const bulletAnchor = (r: Role, i: number): string => r.bullets[i].id ?? `${r.slug}-${i + 1}`;

export const experience: Role[] = [
  {
    slug: "catlr",
    role: "AI Instructional Assistant, CATLR",
    company: "Northeastern University",
    location: "Boston, MA",
    start: "Aug 2026",
    end: "Present",
    current: true,
    highlight: "Helping faculty bring AI into their courses",
    bullets: [
      { text: "Part of the graduate team at CATLR supporting faculty who lead AI curriculum transformation across Northeastern's colleges." },
      { text: "Partner with the AI directors of the College of Science and the College of Arts, Media & Design to help faculty bring AI into teaching, primarily using Claude." },
      { text: "Prototype Claude Projects, artifacts, and sample presentations for upcoming faculty workshops on AI in course curricula." },
    ],
    stack: ["Claude", "Claude Projects"],
  },
  {
    slug: "abacus",
    role: "Software Engineer Intern",
    company: "Abacus Health Solutions",
    location: "Cranston, RI",
    start: "Jan 2026",
    end: "Jul 2026",
    current: false,
    highlight: "Dashboard load time 8–9s → under 1s",
    bullets: [
      {
        id: "abacus-migration",
        text: "Migrated a legacy ASP.NET Web Forms portal to a React 19 and TypeScript SPA on a 4-person team, delivering 17 routes on Azure Static Web Apps to diabetic members at 50+ client companies across 30+ reward programs.",
      },
      {
        id: "abacus-dashboard",
        text: "Translated legacy C# program rules into one data-driven My Progress dashboard that replaced 5 status-specific templates, and dropped dashboard load times from 8–9 s to under 1 s, measured with Lighthouse and Sentry.",
      },
      { text: "Developed a LangGraph benefits assistant that routes member questions by intent to tool nodes for plan, Rx, and reward data, verifying each answer so members get instant replies to queries once handled manually." },
      { text: "Integrated Sentry tracing and session replay with PHI redaction, and used Claude Code and GitHub Copilot to write Vitest, MSW, and Playwright tests, adding a regression test for each QA bug fixed." },
    ],
    stack: ["React 19", "TypeScript", "ASP.NET", "C#", "Azure Static Web Apps", "LangGraph", "Sentry", "Vitest", "MSW", "Playwright"],
  },
  {
    slug: "ta-cs1800",
    role: "Graduate Teaching Assistant, CS1800",
    company: "Khoury College, Northeastern University",
    location: "Boston, MA",
    start: "Sep 2025",
    end: "Dec 2025",
    current: false,
    highlight: "100+ students per cohort",
    bullets: [
      {
        id: "ta-recitations",
        text: "Directed weekly CS1800 Discrete Structures recitations and office hours for 100+ students, supporting a 15% rise in average exam scores.",
      },
      { text: "Created 20+ practical code examples linking mathematical proofs to data structures and algorithms." },
      { text: "Gave targeted feedback on assignments covering logic, set theory, graph theory, and combinatorics." },
    ],
    stack: ["Discrete Structures", "Teaching"],
  },
  {
    slug: "tech-support",
    role: "Technical Support Assistant",
    company: "Northeastern University",
    location: "Boston, MA",
    start: "Feb 2025",
    end: "Dec 2025",
    current: false,
    // No highlight line for this role (per brief). Bullets kept verbatim from the previous site.
    bullets: [
      { text: "Engineered intelligent automation scripts supporting 500+ staff daily, preventing system disruptions and improving user experience." },
      { text: "Built scalable PowerShell automation, reducing manual configuration errors by 95% and accelerating deployment by 40%." },
      { text: "Implemented targeted solutions across 40+ systems, decreasing JIRA support tickets by 35%." },
    ],
    stack: ["PowerShell", "Automation", "JIRA"],
  },
  {
    slug: "ey",
    role: "Software Engineer",
    company: "Ernst & Young",
    location: "Delhi, India",
    start: "Aug 2022",
    end: "Dec 2024",
    current: false,
    highlight: "400K+ employees on EY.AI · 99.9% uptime",
    bullets: [
      {
        id: "ey-ai",
        text: "Engineered EY.AI's user-facing app in React, TypeScript, and Node.js, a generative AI assistant on the OpenAI API serving 400,000+ employees at 99.9% uptime, integrating RAG and a LangChain/LangGraph self-evaluation loop.",
      },
      {
        id: "ey-rto",
        text: "Built a React app with a 5-tier approval workflow, auto-approval rules, and five role-based permission levels to replace email and Teams requests for Return-to-Office exceptions, improving request handling efficiency by 90%+.",
      },
      {
        id: "ey-kpi",
        text: "Replaced Excel-based KPI and OKR reviews for 1,000+ partners in EY's Europe West region with a MERN dashboard, adding rule-based approval workflows and country-specific admin roles, shortening review time by 70%.",
      },
      { text: "Developed EY's annual knowledge assessment portal for 400,000+ employees with a React/TypeScript front end on S3, Python on ECS Fargate behind an ALB, Cognito OAuth2/OIDC, PostgreSQL, Redis, and a certificate worker." },
      { text: "Delivered a React and TypeScript website for a Fortune 500 client, with an interactive dashboard of the company's data and projects served from Amazon S3, scaled on AWS behind a load balancer and provisioned with Terraform." },
      {
        id: "ey-cicd",
        text: "Automated releases with Azure DevOps CI/CD that cut deployment time by 60%, wrote pytest, Vitest, and Playwright tests, documented APIs in Swagger UI, and added CloudWatch logging and Sentry error tracking in production.",
      },
    ],
    stack: ["React", "TypeScript", "Node.js", "OpenAI API", "LangGraph", "Python", "AWS", "Terraform", "Azure DevOps"],
  },
];
