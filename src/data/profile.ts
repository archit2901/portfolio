/**
 * Who Archit is, how to reach him, and the copy for the hero, About and
 * Contact sections. Source of truth: the Nov 2026 content brief.
 */

export const links = {
  github: "https://github.com/archit2901",
  githubLabel: "github.com/archit2901",
  linkedin: "https://linkedin.com/in/archit2901",
  linkedinLabel: "linkedin.com/in/archit2901",
  email: "gupta.archit1@northeastern.edu",
  resume: "/resume.pdf",
  resumeFileName: "Archit_Gupta_Resume.pdf",
} as const;

export const profile = {
  name: "Archit Gupta",
  siteUrl: "https://architgupta.me",

  meta: {
    title: "Archit Gupta | Full-stack & AI Software Engineer",
    description:
      "Portfolio of Archit Gupta, a full-stack and AI software engineer working in React, TypeScript, Python, AWS, and LLM agents. MS CS at Northeastern, graduating May 2027.",
    ogImage: "/og.png",
  },

  hero: {
    eyebrow: "Hi, I'm",
    name: "Archit Gupta",
    role: "Full-stack & AI engineer.",
    tagline:
      "I build web products and AI systems end to end: React front ends, cloud backends, and LLM agents that hold up in production.",
    /** Rendered as one status chip, joined with " · ". */
    status: ["MS CS @ Northeastern", "Graduating May 2027", "Open to full-time 2027 roles"],
    ctas: [
      { label: "View projects", href: "#projects", kind: "link" },
      { label: "Download résumé", href: links.resume, kind: "download" },
      { label: "Get in touch", href: "#contact", kind: "link" },
    ],
  },

  about: {
    factLine: "About 3 years of engineering experience · 2.5 years at EY + a 7-month internship at Abacus",
    bio: [
      "I'm Archit, a software engineer finishing my MS in Computer Science at Northeastern in Boston. Before grad school I spent two and a half years at Ernst & Young in Delhi. There I built the user-facing app for EY.AI, a generative AI assistant used by 400,000+ employees, along with full-stack tools for EY teams and a website for a Fortune 500 client.",
      "Most recently I interned at Abacus Health Solutions. I helped migrate a legacy ASP.NET portal to React and TypeScript, brought dashboard load times from 8–9 seconds to under 1 second, and built a LangGraph assistant that answers members' plan, Rx, and reward questions. Today I'm an AI Instructional Assistant at Northeastern's CATLR, helping faculty bring Claude into their teaching. I also TA'd CS1800 (Discrete Structures) at Khoury, which turned out to be one of the most useful things I've done for my own engineering thinking.",
    ],
    quickFacts: [
      { label: "Based in", value: "Boston, MA" },
      { label: "Education", value: "MS CS @ Northeastern" },
      { label: "Languages", value: "English, Hindi" },
      { label: "Status", value: "Open to full-time 2027 roles" },
    ],
    portrait: {
      src: "/portrait.jpg",
      width: 1200,
      height: 1600,
      alt: "Archit Gupta standing in the main concourse of Grand Central Terminal",
    },
    headshot: {
      src: "/headshot-3x4.jpg",
      srcSmall: "/headshot-3x4-sm.jpg",
      /** Same photo with the white backdrop replaced by graphite, for dark mode. */
      srcDark: "/headshot-3x4-dark.jpg",
      srcDarkSmall: "/headshot-3x4-dark-sm.jpg",
      width: 750,
      height: 1000,
      alt: "Headshot of Archit Gupta, smiling, in a dark button-up shirt",
    },
  },

  contact: {
    lead: "The fastest way is email. I read everything and reply within 24 hours on weekdays.",
    status: ["Boston, MA · ET", "Replies within 24h", "Open to full-time 2027 roles"],
  },
} as const;
