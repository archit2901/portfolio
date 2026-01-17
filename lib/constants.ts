export const PERSONAL_INFO = {
  name: "Archit Gupta",
  title: "Software Engineer | Full-Stack Developer",
  tagline: "Building scalable web applications and AI-powered solutions",
  email: "gupta.archit1@northeastern.edu",
  alternateEmail: "architguptaxyz@gmail.com",
  phone: "+1 (857) 746-9629",
  linkedin: "https://www.linkedin.com/in/archit2901",
  github: "https://github.com/archit2901",
  resumePath: "/resume.pdf",
  location: "Boston, MA",
  summary: `I'm pursuing my Master's in Computer Science at Northeastern University (GPA: 3.834), where I've served as a Teaching Assistant for CS1800 Discrete Structures. Currently, I'm working as a Software Engineer Intern at Abacus Health Solutions, building end-to-end web applications using C#, .NET, and React. Before grad school, I spent over two years as a Software Engineer at Ernst & Young, architecting full-stack web applications for Fortune 500 clients across North America, Europe, Australia, and the Middle East—contributing to $500K+ in annual revenue and helping build EY.AI, a generative AI platform serving 400,000+ employees.

My expertise spans the full stack: React.js, Angular, and .NET frontends; Node.js and Express backends; MongoDB and SQL Server databases; and Azure DevOps for CI/CD pipelines. I'm actively seeking Software Engineering internships for Summer 2026 where I can apply my experience in full-stack development and scalable systems.`,
};

export const STATS = [
  { label: "Years Experience", value: "2.5+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Students Taught", value: "100+" },
  { label: "Client Revenue", value: "$500K+" },
];

export const EXPERIENCE = [
  {
    company: "Abacus Health Solutions",
    role: "Software Engineer Intern",
    duration: "Jan 2026 - Jun 2026",
    location: "Cranston, RI",
    achievements: [
      "Engineered end-to-end web applications using C#, .NET, and React, reducing portal loading time to 20 ms from 3 seconds and improving business process efficiency by 20% using Agile methodology",
      "Integrated RESTful APIs with OAuth authentication and developed unit tests achieving 20% code coverage, maintaining security standards for data storage and communications ensuring compliance for 20+ MNCs",
    ],
    tech: ["React", "Node.js", "TypeScript"],
  },
  {
    company: "Northeastern University",
    role: "Khoury College Teaching Assistant",
    duration: "September 2025 - December 2025",
    location: "Boston, MA",
    achievements: [
      "Directed weekly CS1800 Discrete Structures recitations and office hours, clarifying complex concepts for 100+ students, leading to a 15% increase in average exam scores",
      "Developed and presented 20+ practical code examples that helped bridge the gap between complex mathematical proofs and computer science principles, demonstrably improving student understanding",
    ],
    tech: ["Python", "Discrete Math", "Algorithms"],
  },
  {
    company: "Northeastern University",
    role: "Technical Support Assistant",
    duration: "February 2025 - January 2026",
    location: "Boston, MA",
    achievements: [
      "Programmed a PowerShell script to automate the imaging and configuration of 100+ Windows devices, reducing manual configuration errors by 95% and accelerating deployment by 40%",
      "Led software upgrades for 40+ systems, pinpointed critical performance bottlenecks, and deployed targeted technical solutions, decreasing software-related support tickets by 35% within JIRA and ServiceNow",
    ],
    tech: ["PowerShell", "Windows", "JIRA", "ServiceNow"],
  },
  {
    company: "Ernst & Young",
    role: "Software Engineer",
    duration: "August 2022 - December 2024",
    location: "Delhi, India",
    achievements: [
      "Architected and delivered 3+ full-stack web applications using React.js, AngularJS, and Microsoft Power Platform for Fortune 500 clients across North America, Europe, Australia, and Middle East, driving $500K+ annual revenue",
      "Implemented end-to-end full-stack applications integrating REST APIs with MongoDB databases, configuring CORS policies and seamless frontend and backend communication across 10+ API endpoints",
      "Constructed a complex React.js web application with advanced search and custom hooks, also integrating SharePoint REST API, enabling efficient user data management that reduced data retrieval time from 50 seconds to 30 seconds",
      "Collaborated in 20-person team to develop EY.AI, a custom generative AI platform using ChatGPT's API for 400,000+ employees with enterprise security. Launched scalable solution achieving 99.9% uptime",
      "Enhanced cross-functional collaboration in Agile/Scrum teams using Git version control and Azure DevOps for streamlined SDLC processes, reducing deployment errors by 40% and boosting team productivity by 25%",
      "Redesigned distributed system performance by applying efficient sorting and graph algorithms for data processing workflows across microservices architecture, reducing computational complexity and improving system throughput by 2x",
      "Integrated comprehensive logging and monitoring solutions using Datadog and CloudWatch for real-time performance tracking, enabling instant issue detection and reducing mean time to resolution from 4 hours to 30 minutes",
      "Spearheaded the implementation of automated CI/CD pipelines with Azure DevOps and Git workflows, cutting down full-stack web project deployment time by 60%",
    ],
    tech: ["React.js", "AngularJS", "Node.js", "MongoDB", "Azure DevOps", "Docker", "Datadog"],
  },
];

export const PROJECTS = [
  {
    title: "CareerCompass AI",
    description: "Built an AI-powered career development platform using Claude AI that analyzes job descriptions, identifies skill gaps, generates personalized interview questions, and provides learning path recommendations with match score calculations",
    tech: ["React", "Node.js", "Express", "MongoDB", "Claude AI", "JWT", "Tailwind CSS"],
    github: "https://github.com/archit2901/careercompass-ai",
    demo: "",
    image: "/images/careercompass.png",
    featured: true,
  },
  {
    title: "SmartOffice Workflow Manager",
    description: "Built a React-based web application with 5-tier approval workflow to manage company-wide Return-to-Office policies, improving request handling efficiency by 50% and reducing processing errors",
    tech: ["React", "Node.js", "MongoDB", "REST API"],
    github: "",
    demo: "",
    image: "/images/smartoffice.png",
    featured: true,
  },
  {
    title: "TechSkill Assessment Platform",
    description: "Deployed a React/SharePoint exam platform with four modules, replacing a manual system; this platform delivered instant results and supported 500+ employees' technical skill assessments",
    tech: ["React", "SharePoint", "REST API", "TypeScript"],
    github: "",
    demo: "",
    image: "/images/techskill.png",
    featured: true,
  },
  {
    title: "Executive Performance Analytics Dashboard",
    description: "Established a website using MERN stack for 1,000+ EY partners across Europe West Region to streamline KPI and OKR management with country-specific admin roles, reducing review time by 70%",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Azure"],
    github: "",
    demo: "",
    image: "/images/analytics.png",
    featured: true,
  },
  {
    title: "Semantic Search Engine using Transformers",
    description: "Designed a semantic search engine using pre-trained BERT fine-tuned with Stack Overflow data, reducing irrelevant search results by 8 out of 10 queries and implemented Docker and Elasticsearch for optimized performance",
    tech: ["Python", "BERT", "TensorFlow", "Docker", "Elasticsearch"],
    github: "",
    demo: "",
    image: "/images/semantic-search.png",
    featured: true,
  },
  {
    title: "Human Activity Recognition App",
    description: "Engineered a Flutter-based Android application leveraging TensorFlow deep learning to detect real-time human activities utilizing smartphone sensors, achieving 95% accuracy in activity recognition",
    tech: ["Flutter", "TensorFlow", "Dart", "Android", "Deep Learning"],
    github: "",
    demo: "",
    image: "/images/activity-recognition.png",
    featured: true,
  },
];

export const SKILLS = {
  Languages: ["JavaScript", "TypeScript", "Python", "C#", "C++", "Java", "SQL"],
  "Web Technologies": [
    "React.js",
    "AngularJS",
    "Node.js",
    "Express.js",
    ".NET",
    "REST APIs",
    "HTML",
    "CSS",
    "Flutter",
  ],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "SQL Server", "SharePoint"],
  "Cloud & DevOps": [
    "Azure DevOps",
    "Docker",
    "Git",
    "GitHub",
    "GitLab",
    "Jenkins",
    "CI/CD Pipelines",
    "Datadog",
    "CloudWatch",
  ],
  "Tools & Frameworks": [
    "Agile/Scrum",
    "Linux",
    "JQuery",
    "Bootstrap",
    "OAuth",
    "Power Apps",
    "Power Automate",
    "JIRA",
  ],
};

export const EDUCATION = [
  {
    institution: "Northeastern University",
    degree: "Master of Science in Computer Science",
    duration: "January 2025 - May 2027",
    location: "Boston, MA",
    gpa: "3.834/4.0",
    logo: "/images/neu-logo.png",
  },
  {
    institution: "Guru Gobind Singh Indraprastha University",
    degree: "Bachelor of Technology in Computer Science",
    duration: "July 2018 - July 2022",
    location: "Delhi, India",
    gpa: "3.55/4.0",
    logo: "/images/ggsipu-logo.png",
  },
];

export const CERTIFICATIONS = [
  "Data Structure and Algorithms",
  "JS Nation Organizer Certificate",
  "MTA: Security Fundamentals - Certified 2019",
  "React Summit Organizer Certificate",
];

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/archit2901",
    icon: "Github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/archit2901",
    icon: "Linkedin",
  },
  {
    label: "Email",
    href: "mailto:gupta.archit1@northeastern.edu",
    icon: "Mail",
  },
];
