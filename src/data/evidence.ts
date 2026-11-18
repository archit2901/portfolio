/**
 * Skills spotlight index: for every skill, the experience bullets and
 * projects that show it in use. Built at compile time from the same data the
 * page renders, so the proof can never drift from the content.
 *
 * Matching is deliberately conservative: a skill matches its own name (or the
 * aliases below) as a whole word, case-sensitively, in a role's bullets and
 * stack or a project's tagline, description and stack. A skill with no match
 * is shown as plain text, never as a spotlight key.
 */
import { experience, bulletAnchor, type Role } from '~/data/experience';
import { projects, featuredOrder } from '~/data/projects';
import { primaryStack, skillGroups } from '~/data/skills';

/** Extra spellings a skill goes by in the role and project copy. */
const aliases: Record<string, string[]> = {
  'React.js': ['React'],
  React: ['React'],
  'Express.js': ['Express.js', 'Express'],
  AWS: ['AWS', 'S3', 'ECS Fargate', 'Cognito', 'CloudWatch', 'Amazon Bedrock'],
  'AWS (S3, ECS Fargate, Cognito, CloudWatch)': ['AWS', 'S3', 'ECS Fargate', 'Cognito', 'CloudWatch', 'Amazon Bedrock'],
  'REST APIs': ['REST APIs', 'REST API', 'REST'],
  'CI/CD': ['CI/CD', 'CI workflow'],
  OAuth: ['OAuth', 'OAuth2'],
  'Microsoft SQL Server': ['Microsoft SQL Server', 'SQL Server'],
  'Agile/Scrum': ['Agile', 'Scrum'],
  'Tailwind CSS': ['Tailwind CSS', 'Tailwind'],
};

export const skillTerms = (skill: string): string[] => aliases[skill] ?? [skill];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
/** Whole-word match that also respects symbols like C++, C#, Node.js. */
export const skillPattern = (skill: string): string =>
  `(?<![A-Za-z0-9])(?:${skillTerms(skill).map(escape).join('|')})(?![A-Za-z0-9+#])`;

export interface Evidence {
  kind: 'role' | 'project';
  /** Where it lives: "Software Engineer Intern" / "Siteline". */
  title: string;
  /** Context line: "Abacus Health Solutions · 2026". */
  source: string;
  /** The proof itself: a bullet, or a project's tagline. */
  text: string;
  /** A project's stack, shown under its tagline. */
  stack?: string;
  href: string;
}

export interface SkillProof {
  skill: string;
  slug: string;
  pattern: string;
  roles: number;
  projects: number;
  items: number[];
}

export const skillSlug = (s: string): string =>
  s.toLowerCase().replace(/\.js\b/g, '').replace(/\+\+/g, 'pp').replace(/#/g, 'sharp').replace(/\(.*\)/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const year = (r: Role) => (r.end === 'Present' ? `${r.start.slice(-4)} – now` : r.end.slice(-4));

/** Every place proof can come from, each listed once. */
const entries: Evidence[] = [];
const roleBullets = new Map<string, number[]>();
const roleSummary = new Map<string, number>();
for (const r of experience) {
  const idx: number[] = [];
  r.bullets.forEach((b, i) => {
    idx.push(entries.length);
    entries.push({ kind: 'role', title: r.role, source: `${r.company} · ${year(r)}`, text: b.text, href: `#${bulletAnchor(r, i)}` });
  });
  roleBullets.set(r.slug, idx);
}
const onHome = new Set(featuredOrder);
const projectEntry = new Map<string, number>();
for (const p of projects) {
  projectEntry.set(p.slug, entries.length);
  entries.push({
    kind: 'project',
    title: p.name,
    source: p.event ?? ['Project', p.year].filter(Boolean).join(' · '),
    text: p.tagline,
    stack: p.stack.join(' · '),
    href: onHome.has(p.slug) ? `#project-${p.slug}` : `/projects#project-${p.slug}`,
  });
}

const allSkills = [...new Set([...primaryStack, ...skillGroups.flatMap((g) => g.skills)])];

export const proofs: Record<string, SkillProof> = {};
for (const skill of allSkills) {
  const re = new RegExp(skillPattern(skill));
  const items: number[] = [];
  let roles = 0;
  let projectCount = 0;

  for (const r of experience) {
    const hits = r.bullets.flatMap((b, i) => (re.test(b.text) ? [roleBullets.get(r.slug)![i]] : []));
    if (hits.length) {
      items.push(...hits);
      roles++;
    } else if (r.stack.some((t) => re.test(t))) {
      // Named in the role's stack but in no bullet: cite the stack line itself.
      if (!roleSummary.has(r.slug)) {
        roleSummary.set(r.slug, entries.length);
        entries.push({ kind: 'role', title: r.role, source: `${r.company} · ${year(r)}`, text: `Stack: ${r.stack.join(', ')}`, href: `#role-${r.slug}` });
      }
      items.push(roleSummary.get(r.slug)!);
      roles++;
    }
  }
  for (const p of projects) {
    if (re.test(p.tagline) || re.test(p.description) || p.stack.some((t) => re.test(t))) {
      items.push(projectEntry.get(p.slug)!);
      projectCount++;
    }
  }

  if (items.length) {
    const slug = skillSlug(skill);
    proofs[skill] = { skill, slug, pattern: skillPattern(skill), roles, projects: projectCount, items };
  }
}

/** Only the entries some skill cites, re-indexed, for the client payload. */
export const spotlightPayload = () => {
  const used = [...new Set(Object.values(proofs).flatMap((p) => p.items))].sort((a, b) => a - b);
  const remap = new Map(used.map((old, i) => [old, i]));
  return {
    entries: used.map((i) => entries[i]),
    skills: Object.fromEntries(
      Object.values(proofs).map((p) => [p.slug, { ...p, items: p.items.map((i) => remap.get(i)!) }]),
    ),
  };
};
