export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa: string;
  logo?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
