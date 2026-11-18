/**
 * Headline metrics: the readout strip under the hero. Kept broad on purpose
 * so a recruiter can size up experience, scale and education at a glance.
 * Every value is a fact from the résumé; `href` points at the proof.
 */
import { projects } from "./projects";

export interface Stat {
  value: string;
  /** Optional unit set smaller after the value, e.g. "yrs". */
  unit?: string;
  label: string;
  href: string;
}

export const stats: Stat[] = [
  { value: "3", unit: "yrs", label: "engineering experience", href: "#experience" },
  { value: "400K+", label: "users on apps I built", href: "#ey-ai" },
  { value: "99.9%", label: "uptime in production", href: "#ey-ai" },
  { value: "50+", label: "client companies served", href: "#abacus-migration" },
  { value: "3.834", label: "MS CS GPA, Northeastern", href: "#education" },
  { value: String(projects.length), label: "projects built", href: "/projects" },
];
