/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  SITE CONTENT — single source of truth for all copy on the site.      ║
 * ║  Edit only this file when you want to change wording, links, etc.     ║
 * ║  Components import what they need (e.g. `site.hero`, `site.nav`).     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

export const site = {
  /** Owner name. Used in the navbar window-title and <title> tag. */
  name: "Archit Gupta",

  /** Short monogram shown as the navbar "filename root" — keep it tight. */
  monogram: "archit",

  /** SEO metadata. */
  meta: {
    title: "Archit Gupta — Full-stack engineer",
    description:
      "Portfolio of Archit Gupta, a full-stack software engineer building polished web experiences end-to-end.",
    /** Path to the OG / Twitter card image (1200×630). Resolved against the site URL. */
    ogImage: "/og.png",
  },

  /** Navigation. Order = render order in the navbar. */
  nav: {
    links: [
      { label: "About",      href: "#about"      },
      { label: "Experience", href: "#experience" },
      { label: "Skills",     href: "#skills"     },
      { label: "Projects",   href: "#projects"   },
      { label: "Education",  href: "#education"  },
      { label: "FAQ",        href: "#faq"        },
      { label: "Contact",    href: "#contact"    },
      { label: "Blog",       href: "/blog"       },
    ],
    /** Short text/wordmark on the left of the navbar. */
    wordmark: "Archit Gupta",
    /** Path to the downloadable resume PDF in /public. */
    resumeHref: "/resume.pdf",
  },

  /** Hero — the first thing visitors see. */
  hero: {
    eyebrow: "Hi, I'm",
    name: "Archit Gupta.",
    title: "Full-stack engineer.",
    tagline:
      "I build polished web experiences end-to-end — APIs, infra, and pixels.",
    /** Buttons rendered below the tagline. First one is the primary accent CTA. */
    ctas: [
      { label: "View projects",  href: "#projects", variant: "primary" },
      { label: "Get in touch",   href: "#contact",  variant: "ghost"   },
    ],
    /** Inline social row below the CTAs. */
    socials: [
      { label: "GitHub",   href: "https://github.com/archit2901" },
      { label: "LinkedIn", href: "https://linkedin.com/in/archit-gupta" },
      { label: "Email",    href: "mailto:gupta.archit1@northeastern.edu" },
    ],
    /**
     * Faux shell-session rendered in the hero terminal block. Each step has a
     * `cmd` (the typed command after the prompt) and `out` (one line OR an
     * array of lines printed after the command). Lines type out sequentially.
     */
    terminalSession: [
      { cmd: "whoami", out: "full-stack engineer · open for 2027" },
      {
        cmd: "ls ./recent",
        out: [
          "abacus-co-op/   react · typescript · node · python",
          "ey-software/    react · ts · node · 400k users",
          "northeastern/   mscs · gpa 3.834",
        ],
      },
    ],
  },

  /** About section — the first content section after the hero. */
  about: {
    /** Tiny mono prefix above the heading. Matches navbar ordinal style. */
    sectionLabel: "01 · About",
    /**
     * Display heading. Intentionally avoids re-introducing "I'm Archit" —
     * the hero already does that. Swap with any of these if you prefer:
     *   "Behind the work."   — more evocative
     *   "The story so far."  — narrative
     *   "A bit about me."    — friendly/conversational
     */
    heading: "More on me.",
    /**
     * Optional lead/elevator-pitch sentence rendered larger and brighter than
     * body. Leave as "" to hide it (the bio paragraphs lead naturally).
     */
    intro: "",
    /** Body paragraphs. Add as many as you want; rendered in order. */
    bio: [
      "I'm Archit, a software engineer and CS Master's student at Northeastern, based in Boston. Before grad school, I spent 2.5 years at Ernst & Young in Delhi building full-stack applications for Fortune 500 clients, including contributing to EY.AI, a generative AI platform that scaled to 400,000+ users at 99.9% uptime.",
      "I work across the stack: React, Next.js, and TypeScript on the frontend; Go, Node, and Python on the backend, with deeper interests in AI/ML systems and data infrastructure. I'm currently interning at Abacus Health Solutions, where I've been shipping production features using TypeScript, Go, REST APIs, Sentry, and AWS. On the side, I TA'd CS1800 (Discrete Structures) at Khoury, which turned out to be one of the most useful things I've done for my own engineering thinking.",
    ],
    /** Tech labels for the inline pill strip. They wrap onto multiple rows. */
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Go",
      "Node.js",
      "Python",
      "Java",
      "C#",
      ".NET",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "S3",
      "Azure",
      "REST APIs",
      "GraphQL",
      "Sentry",
      "Git",
      "CI/CD",
      "Tailwind",
      "Express",
    ],
    portrait: {
      /** Drop a new file in /public and update this path to swap. */
      src: "/portrait.jpg",
      alt: "Portrait of Archit Gupta at Grand Central Terminal",
    },
    /** Short caption shown beside the mobile-only circular avatar.
     *  Empty string hides the caption row; component falls back to a sane default. */
    avatarCaption: "Boston, MA · ET",
    /** Tenure badge rendered above the bio. Spells out total years so recruiters
     *  don't have to subtract dates themselves. Empty string hides the badge. */
    tenureBadge: "3+ years of professional engineering · 2.5y at EY + 6mo co-op",
    /** Bento row of compact fact cards. */
    facts: [
      { label: "Based in",  value: "Boston, MA" },
      { label: "Education", value: "MSCS @ Northeastern" },
      { label: "Languages", value: "English, Hindi" },
      { label: "Status",    value: "Open for 2027 roles" },
    ],
  },

  /** Experience section — roles in reverse chronological order. */
  experience: {
    sectionLabel: "02 · Experience",
    heading: "The work so far.",
    /**
     * Horizontally-scrolling marquee at the top of the section. Each entry is
     * one standout metric across all roles. Order matters (left → right).
     */
    winsTicker: [
      "$500K revenue impact",
      "400K+ users on EY.AI",
      "99.9% uptime",
      "2× backend throughput",
      "MTTR 4h → 30min",
      "60% deploy time cut",
      "100+ students taught",
      "95% errors ↓",
      "Portal load 3s → 20ms",
    ],
    /**
     * Most recent first. The role flagged `current: true` gets the rotating
     * gradient border + a small "Currently" badge.
     *
     * `heroStat` drives the giant number on each card (count-up animates from 0
     * to `countUpTo` when the card enters the viewport, then displays `value`).
     * Leave it out to render the card without a hero stat.
     *
     * `accent` tints the card's hover border + hero-stat gradient.
     */
    roles: [
      {
        role: "Software Engineer Intern",
        company: "Abacus Health Solutions",
        /** Optional — if set, the company name renders as a link. */
        url: "",
        location: "Cranston, RI",
        start: "Jan 2026",
        end: "Present",
        current: true,
        accent: "cyan",
        heroStat: {
          value: "20ms",
          label: "portal load (from 3s)",
          countUpTo: 20,
          suffix: "ms",
        },
        bullets: [
          "Building a full-stack healthcare web application end-to-end, translating Figma designs into a responsive React + TypeScript frontend backed by Node.js and Python services exposed via REST APIs.",
          "Designed and implemented database schemas in MySQL and integrated Redis for caching and session management, reducing read latency on high-traffic endpoints and easing database load.",
          "Collaborated directly with designers and product stakeholders to convert Figma mockups into pixel-accurate, responsive UI components, accelerating the design-to-development handoff each sprint.",
          "Instrumented Sentry across frontend and backend services for real-time error tracking, surfacing production issues within minutes and improving release confidence across the team's deployment cycle.",
        ],
        stack: ["React", "TypeScript", "Node.js", "Python", "MySQL", "Redis", "Sentry", "Figma"],
      },
      {
        role: "Technical Support Assistant",
        company: "Northeastern University",
        url: "",
        location: "Boston, MA",
        start: "Feb 2025",
        end: "Jan 2026",
        current: false,
        accent: "rose",
        heroStat: {
          value: "95%",
          label: "config errors eliminated",
          countUpTo: 95,
          suffix: "%",
        },
        bullets: [
          "Engineered intelligent automation scripts supporting 500+ staff daily, preventing system disruptions and improving user experience.",
          "Built scalable PowerShell automation, reducing manual configuration errors by 95% and accelerating deployment by 40%.",
          "Implemented targeted solutions across 40+ systems, decreasing JIRA support tickets by 35%.",
        ],
        stack: ["PowerShell", "Automation", "JIRA"],
      },
      {
        role: "Graduate Teaching Assistant — CS1800",
        company: "Khoury College, Northeastern",
        url: "",
        location: "Boston, MA",
        start: "Sep 2025",
        end: "Dec 2025",
        current: false,
        accent: "violet",
        heroStat: {
          value: "100+",
          label: "students per cohort",
          countUpTo: 100,
          suffix: "+",
        },
        bullets: [
          "Facilitated weekly recitations for 100+ students, raising exam scores by an average of 10 points across sections.",
          "Developed 20+ visual code examples and presentations bridging mathematical theory with applied implementation.",
          "Held office hours and provided targeted feedback on assignments covering logic, set theory, graph theory, and combinatorics.",
        ],
        stack: ["Teaching", "Discrete Structures"],
      },
      {
        role: "Software Development Engineer 1",
        company: "Ernst & Young",
        url: "",
        location: "Delhi, India",
        start: "Jul 2022",
        end: "Dec 2024",
        current: false,
        accent: "amber",
        heroStat: {
          value: "400K+",
          label: "users on EY.AI · 99.9% uptime",
          countUpTo: 400,
          suffix: "K+",
        },
        bullets: [
          "Contributed to EY.AI, a custom generative AI platform built on the OpenAI API and deployed to 400,000+ EY employees globally, launching at 99.9% uptime with enterprise-grade security as part of a 20-engineer team.",
          "Built and delivered 3+ full-stack web applications using React.js, TypeScript, Node.js, and Microsoft Power Platform for Fortune 500 clients across North America, Europe, Australia, and the Middle East, supporting $500K+ in client engagements.",
          "Developed a React.js application with advanced search, custom hooks, and SharePoint REST API integration, cutting data-retrieval time from 50s to 30s; refactored data-processing workflows with efficient sorting and graph algorithms, doubling system throughput.",
          "Integrated REST APIs with MongoDB across 10+ endpoints, configuring CORS, authentication, and error handling for reliable frontend-backend communication.",
          "Built CI/CD pipelines with Azure DevOps and Git, cutting full-stack deployment time by 60%; instrumented Datadog and CloudWatch monitoring, reducing mean time to resolution from 4 hours to 30 minutes.",
        ],
        stack: ["React", "TypeScript", "Node.js", "Power Platform", "MongoDB", "Azure DevOps", "Datadog"],
      },
    ],
  },

  /** Education section — schools in reverse chronological order. */
  education: {
    sectionLabel: "05 · Education",
    heading: "Where I learned to build.",
    /** Most recent first. */
    schools: [
      {
        school: "Northeastern University",
        degree: "MS in Computer Science",
        department: "Khoury College of Computer Sciences",
        location: "Boston, MA",
        start: "Jan 2025",
        end: "May 2027",
        accent: "cyan",
        /** Optional GPA string. Leave "" to hide the row. */
        gpa: "3.834 / 4.0",
        /**
         * Course code displayed on the chip; title shown in browser tooltip.
         * Edit / add / remove freely — these are common Khoury MSCS picks.
         */
        coursework: [
          { code: "CS5800", title: "Algorithms" },
          { code: "CS5500", title: "Foundations of Software Engineering" },
          { code: "CS6140", title: "Machine Learning" },
          { code: "CS6240", title: "Large-Scale Parallel Data Processing" },
          { code: "CS5340", title: "Computer Human Interaction" },
          { code: "CS5520", title: "Mobile Application Development" },
        ],
        highlights: [
          "Graduate TA — CS1800 Discrete Structures (Fall 2025).",
          "Open for full-time 2027 roles.",
        ],
      },
      {
        school: "Guru Gobind Singh Indraprastha University",
        degree: "Bachelor of Technology in Computer Science",
        /** Empty when the affiliated college within IPU isn't specified. */
        department: "",
        location: "Delhi, India",
        start: "Aug 2018",
        end: "Aug 2022",
        accent: "amber",
        gpa: "3.55 / 4.0",
        /**
         * BTech CS subject abbreviations rather than fabricated course numbers.
         * Tooltips show the full subject name on hover.
         */
        coursework: [
          { code: "DSA",   title: "Data Structures & Algorithms" },
          { code: "OS",    title: "Operating Systems" },
          { code: "DBMS",  title: "Database Management Systems" },
          { code: "CN",    title: "Computer Networks" },
          { code: "OOP",   title: "Object-Oriented Programming" },
          { code: "AI/ML", title: "Artificial Intelligence & Machine Learning" },
        ],
        /** Empty by default — add clubs, awards, or honors to populate. */
        highlights: [],
      },
    ],
  },

  /** Skills section — categorized + a featured "primary stack" strip. */
  skills: {
    sectionLabel: "03 · Skills",
    heading: "Tools in the box.",
    /**
     * 6-8 most-used / most-current technologies — shown in a larger pill format
     * above the category grid as a quick "this is what I work with day-to-day"
     * for recruiters.
     */
    primaryStack: [
      "TypeScript",
      "React",
      "Next.js",
      "Go",
      "Node.js",
      "AWS",
    ],
    /**
     * Skill categories — comprehensive list pulled from resume + LinkedIn.
     * Add / remove freely; the filter chips and the "All" count regenerate
     * automatically from this array.
     */
    categories: [
      {
        key: "languages",
        title: "Languages",
        accent: "cyan",
        skills: [
          "TypeScript", "JavaScript", "Python", "Go",
          "Java", "C#", "C++", "SQL",
        ],
      },
      {
        key: "frontend",
        title: "Frontend",
        accent: "amber",
        skills: [
          "React", "Next.js", "AngularJS", "Tailwind",
          "HTML", "CSS", "jQuery", "Bootstrap", "Flutter",
        ],
      },
      {
        key: "backend",
        title: "Backend",
        accent: "rose",
        skills: [
          "Node.js", "Express", ".NET", "Power Platform",
        ],
      },
      {
        key: "database",
        title: "Database",
        accent: "violet",
        skills: [
          "PostgreSQL", "MongoDB", "MySQL",
          "SQL Server", "Redis", "SharePoint",
        ],
      },
      {
        key: "cloud",
        title: "Cloud & DevOps",
        accent: "cyan",
        skills: [
          "AWS", "S3", "Azure", "Azure DevOps",
          "Docker", "Kubernetes", "Jenkins", "CI/CD",
          "Kafka", "RabbitMQ",
          "Datadog", "CloudWatch", "Sentry",
        ],
      },
      {
        key: "tools",
        title: "Tools & Workflow",
        accent: "amber",
        skills: [
          "Git", "GitHub", "GitLab", "REST APIs", "GraphQL",
          "OAuth", "Postman", "Swagger", "JIRA", "ServiceNow",
          "Linux", "Agile/Scrum", "PowerShell",
          "Claude Code", "GitHub Copilot", "ChatGPT API",
        ],
      },
    ],
  },

  /** Projects section — featured trio on the landing page, full archive on /projects. */
  projects: {
    sectionLabel: "04 · Projects",
    landingHeading: "Things I've built.",
    pageHeading: "Selected work.",
    browseAllLabel: "Browse all projects",
    /** Categories rendered as filter chips on /projects. */
    categories: [
      { key: "systems", title: "Systems" },
      { key: "ai",      title: "AI"      },
      { key: "web",     title: "Web"     },
    ],
    /**
     * All portfolio-worthy projects. `featured: true` puts them on the
     * landing page (max 3 are read). Everything appears on /projects.
     */
    items: [
      {
        slug: "url-shortener",
        name: "URL Shortener",
        tagline: "Production-grade URL shortener in Go.",
        description: "Layered Go service backed by PostgreSQL + Redis with a cache-aside redirect path, base62 short-code generation, golang-migrate migrations, structured Sentry observability, and a CI workflow. Integration tests spin up disposable Postgres/Redis containers via testcontainers.",
        stack: ["Go", "PostgreSQL", "Redis", "Sentry", "Docker", "GitHub Actions"],
        repoUrl: "https://github.com/archit2901/url-shortener",
        liveUrl: "",
        year: "2026",
        accent: "cyan",
        category: "systems",
        featured: true,
      },
      {
        slug: "sentiment-aura",
        name: "Sentiment Aura",
        tagline: "Real-time speech-sentiment, visualized as a Perlin-noise aura.",
        description: "Speak into your mic and watch a flowing emotion-driven animation react in real time. React + react-p5 frontend streams audio to Deepgram for live transcription, then a FastAPI backend routes transcripts through Claude Sonnet 4 for emotion + keyword extraction. Each emotion has its own colors and particle behaviour.",
        stack: ["React", "react-p5", "FastAPI", "Python", "Deepgram", "Claude API"],
        repoUrl: "https://github.com/archit2901/sentiment-aura",
        liveUrl: "https://sentiment-aura-eight.vercel.app",
        year: "2025",
        accent: "violet",
        category: "ai",
        featured: true,
      },
      {
        slug: "resume-to-portfolio",
        name: "Resume → Portfolio",
        tagline: "Upload a resume, get a portfolio site back.",
        description: "Drop a PDF or DOCX onto the page; the backend parses it, ships the text through Claude for structured extraction (name, skills, experience, projects…), and renders a fully self-contained HTML portfolio you can download and host anywhere. Includes a live edit flow for tweaking sections before exporting.",
        stack: ["Next.js 14", "TypeScript", "Tailwind", "Framer Motion", "Claude API", "pdf-parse"],
        repoUrl: "https://github.com/archit2901/resume-to-portfolio",
        liveUrl: "",
        year: "2026",
        accent: "amber",
        category: "ai",
        featured: true,
      },
      {
        slug: "webthreaders-new",
        name: "Web Threaders",
        tagline: "Digital-agency site with a Three.js particle-network hero.",
        description: "Next.js 15 marketing site with an interactive 3D particle network rendered via @react-three/fiber, glassmorphism cards, Framer Motion scroll reveals, animated counters, a tech-ticker marquee, and a contact form wired through API routes.",
        stack: ["Next.js 15", "TypeScript", "Three.js", "@react-three/fiber", "Framer Motion", "Tailwind"],
        repoUrl: "https://github.com/archit2901/webthreaders-new",
        liveUrl: "",
        year: "2026",
        accent: "rose",
        category: "web",
        featured: false,
      },
      {
        slug: "careercompass-ai",
        name: "CareerCompass AI",
        tagline: "AI career-development platform.",
        description: "React + Vite client with protected routes (login/register) and a Job Analyzer module that runs job descriptions through the Claude API to extract requirements and surface fit insights for the user.",
        stack: ["React", "Vite", "Claude API", "REST APIs"],
        repoUrl: "https://github.com/archit2901/careercompass-ai",
        liveUrl: "",
        year: "2025",
        accent: "cyan",
        category: "ai",
        featured: false,
      },
      {
        slug: "haryanahandloom-new",
        name: "Haryana Handloom",
        tagline: "Next.js storefront for a handloom brand.",
        description: "Marketing + commerce site with a category-grid home, shop page, care guide, contact page, and dynamic category routes. Built on the Next.js 14 App Router with a component-driven layout (Hero, ProductShowcase, Testimonials, Newsletter, Brands).",
        stack: ["Next.js 14", "TypeScript", "Tailwind", "shadcn/ui"],
        repoUrl: "https://github.com/archit2901/haryanahandloom-new",
        liveUrl: "",
        year: "2026",
        accent: "amber",
        category: "web",
        featured: false,
      },
      {
        slug: "school-robotics-team",
        name: "RoboHawks Robotics",
        tagline: "Single-page site for a high-school robotics team.",
        description: "Volunteer build for the RoboHawks team. React + Vite + Tailwind with Framer Motion scroll-reveals, animated stat counters, project modals, sticky navbar, and a mobile hamburger menu. All copy lives in one editable data file so the team can swap content without touching components.",
        stack: ["React", "Vite", "Tailwind", "Framer Motion"],
        repoUrl: "https://github.com/archit2901/school-robotics-team",
        liveUrl: "",
        year: "2026",
        accent: "violet",
        category: "web",
        featured: false,
      },
    ],
  },

  /** FAQ section — recruiter-targeted Q&A. Each `a` accepts inline HTML
   *  (links, <strong>, etc.) so it renders via `set:html`. */
  faq: {
    sectionLabel: "06 · FAQ",
    heading: "FAQs.",
    /** Optional status banner above the questions. Empty string hides it. */
    status: "Open for Spring 2027 co-op + full-time roles starting May 2027",
    /** Optional footer CTA. Points at #contact since the section now exists. */
    footer: {
      prompt: "Still got questions?",
      label: "Reach out",
      href: "#contact",
    },
    items: [
      {
        q: "What roles are you looking for?",
        a: "Two things, in parallel: <strong>a Spring 2027 software-engineering co-op</strong> through Northeastern's co-op program, and <strong>full-time software engineering roles starting May 2027</strong>. Full-stack, backend, or anything close to AI/ML systems and data infrastructure. I'm open to IC tracks at startups and at bigger companies. New-grad and early-career titles fit. With 2.5 years already at EY, I tend to ramp up faster than the title typically implies.",
        accent: "cyan",
      },
      {
        q: "When are you available to start?",
        a: "Two timelines: I can start a <strong>Spring 2027 co-op in January 2027</strong>, and I finish my MSCS at Northeastern in <strong>May 2027</strong> for full-time. I'm currently on co-op at Abacus Health Solutions, then back to coursework. I'm available to interview anytime, including during co-op hours with a day's notice.",
        accent: "amber",
      },
      {
        q: "Where are you based, and are you open to relocation?",
        a: "Boston, MA. Open to <strong>NYC, SF Bay Area, Seattle, Austin</strong>, or <strong>fully remote</strong> for the right team. I'd prefer hybrid in-office a few days a week. I do my best work around other people. US-wide timezone collaboration works for me since I already do it at Abacus.",
        accent: "rose",
      },
      {
        q: "What's your work authorization?",
        a: "F-1 student visa. After May 2027 graduation I'm eligible for <strong>12 months of OPT plus the 24-month STEM-OPT extension</strong>, which gives me 36 months of work authorization with no sponsorship needed. For the long term I'll need <strong>H-1B sponsorship</strong>, and I would plan to file in the FY28 cycle. Companies that sponsor STEM-OPT and H-1B are a hard requirement on my side.",
        accent: "violet",
      },
      {
        q: "What's your biggest impact so far?",
        a: "At <strong>Ernst & Young</strong> I contributed to <strong>EY.AI</strong>, an internal generative-AI platform that scaled to <strong>400,000+ employees at 99.9% uptime</strong>. On the same team I cut <strong>MTTR from 4 hours to 30 minutes</strong> through algorithmic improvements and observability work in Datadog and CloudWatch. I also shipped CI/CD changes that <strong>reduced deployment time by 60%</strong>. Across 2.5 years, my client work drove <strong>$500K+ in annual revenue impact</strong>.",
        accent: "cyan",
      },
      {
        q: "What stack are you strongest in?",
        a: "Frontend: <strong>TypeScript, React, Next.js, Tailwind</strong>. Backend: <strong>Go, Node.js, Python, C#/.NET</strong>. Infra: <strong>AWS, Docker, PostgreSQL, Redis, Sentry</strong>. I've shipped production code in every layer of that stack within the last twelve months. Recent personal builds skew toward <strong>Go services with Postgres and Redis</strong> (see <a href=\"https://github.com/archit2901/url-shortener\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-link\">url-shortener</a>) and <strong>AI integrations</strong> like <a href=\"https://github.com/archit2901/sentiment-aura\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-link\">sentiment-aura</a> and <a href=\"https://github.com/archit2901/resume-to-portfolio\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-link\">resume-to-portfolio</a>, both built on the Anthropic API.",
        accent: "amber",
      },
      {
        q: "What kind of problems do you most want to work on?",
        a: "<strong>Polished web products that actually have to work in production</strong>. Fast, observable, correct. The things that matter when real users are on the other end. I get excited by anything <strong>touching AI/ML systems or data infrastructure</strong>, where backend rigor matters as much as the UX layer. I'm less interested in pure marketing site work or anything that strips away the backend ownership.",
        accent: "rose",
      },
      {
        q: "Where can I see more, and what's the fastest way to reach you?",
        a: "<strong>GitHub</strong>: <a href=\"https://github.com/archit2901\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-link\">github.com/archit2901</a>, with 11 repos including the projects on this site. The <a href=\"/projects\" class=\"faq-link\">/projects page</a> here has the full list. The fastest way to reach me is <strong>email</strong>: <a href=\"mailto:gupta.archit1@northeastern.edu\" class=\"faq-link\">gupta.archit1@northeastern.edu</a>, and I respond within 24 hours on weekdays. LinkedIn DMs work too. I'm up for a 25-minute intro call or jumping straight into a technical screen.",
        accent: "violet",
      },
    ],
  },

  /** Contact section — no form, just the channels. */
  contact: {
    sectionLabel: "07 · Contact",
    heading: "Get in touch.",
    lead: "The fastest way is email. I read everything and reply within 24 hours on weekdays.",
    /** Primary email shown in the big email card. */
    email: "gupta.archit1@northeastern.edu",
    /** Four link tiles below the email card. Icon keys map to SVGs in Contact.astro. */
    links: [
      { label: "GitHub",   icon: "github",   href: "https://github.com/archit2901",         accent: "cyan",   action: "open"     },
      { label: "LinkedIn", icon: "linkedin", href: "https://linkedin.com/in/archit2901",    accent: "violet", action: "open"     },
      { label: "Email",    icon: "mail",     href: "mailto:gupta.archit1@northeastern.edu", accent: "amber",  action: "compose"  },
      { label: "Resume",   icon: "download", href: "/resume.pdf",                            accent: "rose",   action: "download" },
    ],
    /** Status strip below the tiles. The first item's dot breathes. */
    status: [
      { label: "Boston, MA · ET",           icon: "dot"   },
      { label: "Replies within 24h",        icon: "mail"  },
      { label: "On co-op through Jul 2026", icon: "clock" },
    ],
  },

  /** /uses page — gear + dev environment. Each item has a short reason. */
  uses: {
    sectionLabel: "→ /uses",
    heading: "What I work with.",
    lead:
      "The tools I reach for every day, and the short version of why. Updated whenever I switch something out.",
    groups: [
      {
        title: "Editor",
        accent: "cyan",
        items: [
          { name: "Cursor",            note: "VS Code-derived editor with built-in Claude / GPT pair-programming. My daily driver." },
          { name: "VS Code",           note: "Fallback for when I need an extension Cursor doesn't have yet." },
          { name: "GitHub Copilot",    note: "Inline completions. Pairs with Cursor's chat." },
          { name: "Claude Code",       note: "When I need an agent that can run shell commands and edit files end-to-end." },
        ],
      },
      {
        title: "Terminal",
        accent: "amber",
        items: [
          { name: "iTerm2",  note: "Tabs, split panes, hotkey window. Configured with the Tokyo Night theme." },
          { name: "zsh + Oh My Zsh", note: "Git plugin, autosuggestions, syntax highlighting." },
          { name: "Starship", note: "Cross-shell prompt. Shows git status + the language version of the cwd." },
          { name: "fzf",     note: "Fuzzy file/command finder. `Ctrl+R` history search is non-negotiable." },
        ],
      },
      {
        title: "Hardware",
        accent: "rose",
        items: [
          { name: "MacBook Pro 14\" (M3 Pro)", note: "Primary machine. Quiet, fast, lasts a workday on battery." },
          { name: "External 27\" display",    note: "Vertical pair-up with the laptop screen for code + browser side-by-side." },
          { name: "Logitech MX Master 3S",    note: "Tab switching with the side wheel saves a real number of minutes per day." },
          { name: "Keychron K2 (brown switches)", note: "Compact mechanical board, USB-C, hot-swappable." },
        ],
      },
      {
        title: "Apps",
        accent: "violet",
        items: [
          { name: "Linear",      note: "Issue tracking for personal projects. Loves keyboard shortcuts the way I do." },
          { name: "Notion",      note: "Notes, drafts, second brain. Database views for project planning." },
          { name: "Raycast",     note: "Spotlight replacement. Window management + clipboard history + AI chat." },
          { name: "Arc",         note: "Daily driver browser. Tab groups by project keep context separate." },
          { name: "Postman",     note: "API testing during the Abacus co-op. Saves request collections per project." },
        ],
      },
      {
        title: "Fonts & UI",
        accent: "cyan",
        items: [
          { name: "JetBrains Mono",   note: "Editor + terminal. Ligatures on. Variable weight for emphasis." },
          { name: "Inter Variable",   note: "Default for any UI I build, including this site." },
          { name: "Tokyo Night",      note: "Editor + terminal theme. Dark, low contrast, easy on the eyes." },
        ],
      },
      {
        title: "CLIs",
        accent: "amber",
        items: [
          { name: "git",          note: "Daily." },
          { name: "gh",           note: "GitHub CLI for `gh pr create` and PR reviews from the terminal." },
          { name: "node + npm",   note: "Volta-managed across multiple Node versions." },
          { name: "go",           note: "Backend services. The url-shortener project lives here." },
          { name: "docker",       note: "Compose for local Postgres + Redis." },
          { name: "lychee",       note: "Broken-link checker. Run before every deploy." },
        ],
      },
    ],
  },

  /** Build stamp shown in the site footer. Update by hand on each major build. */
  build: {
    version: "0.1.0",
    framework: "astro 5",
    jsGzipKb: 121,
    lastBuiltDate: "Jun 18 2026",
    repoUrl: "https://github.com/archit2901/portfolio",
  },

  /** Strings used by the command-palette modal. */
  commandPalette: {
    placeholder: "Type a command or search…",
    noResults: "No matches. Try a section name.",
  },
} as const;

export type SiteContent = typeof site;
