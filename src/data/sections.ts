/**
 * Home-page sections in render order. Drives the navbar selector, the ⌘K
 * palette, and each section heading. `chord` is the letter after `g`.
 */

export interface Section {
  id: string;
  label: string;
  heading: string;
  chord?: string;
}

export const sections: Section[] = [
  { id: "about", label: "About", heading: "About", chord: "a" },
  { id: "experience", label: "Experience", heading: "Experience", chord: "e" },
  { id: "skills", label: "Skills", heading: "Skills", chord: "s" },
  { id: "projects", label: "Projects", heading: "Projects", chord: "p" },
  { id: "education", label: "Education", heading: "Education", chord: "d" },
  { id: "faq", label: "FAQ", heading: "FAQ", chord: "f" },
  { id: "contact", label: "Contact", heading: "Contact", chord: "c" },
];

export const sectionById = (id: string): Section => {
  const s = sections.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown section: ${id}`);
  return s;
};
