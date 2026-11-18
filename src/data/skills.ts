/** Skills, exactly as listed in the content brief. */

export const primaryStack = ["TypeScript", "React", "Node.js", "Python", "AWS", "LangGraph"];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "C#", "Go", "SQL", "HTML5", "CSS"],
  },
  {
    title: "AI & LLMs",
    skills: ["LangGraph", "LangChain", "RAG", "NLP", "OpenAI API", "Claude API", "Pinecone", "Cohere", "LLM Evals", "Claude Code", "GitHub Copilot"],
  },
  {
    title: "Web & Frameworks",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "ASP.NET", "FastAPI", "REST APIs", "GraphQL", "Tailwind CSS"],
  },
  {
    title: "Databases & Messaging",
    skills: ["PostgreSQL", "MySQL", "Microsoft SQL Server", "MongoDB", "Redis", "Supabase", "Kafka"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (S3, ECS Fargate, Cognito, CloudWatch)", "Azure DevOps", "Terraform", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "Git", "Linux"],
  },
  {
    title: "Testing & Monitoring",
    skills: ["pytest", "Playwright", "Vitest", "Jest", "Cypress", "Postman", "Sentry", "CloudWatch", "Datadog"],
  },
  {
    title: "Architecture & Process",
    skills: ["Microservices", "Distributed Systems", "Agile/Scrum", "SDLC", "OAuth", "Swagger", "JIRA"],
  },
];
