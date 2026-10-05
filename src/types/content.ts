export type CaseStudy = {
  title: string;
  slug: string;
  context: string;
  /** one-word category shown on the card, e.g. "Productivity", "Healthcare", "Fintech" */
  kind: string;
  role: string;
  year: string;
  /** one line, used on the small cards */
  summary: string;
  /** the large inline case study at the top of Work */
  featured?: boolean;
  solution: string;
  results: { value: string; label: string }[];
  stack: string[];
  live?: string;
  /** demo account shown next to the live link on the large case study */
  demoLogin?: { email: string; password: string };
  /** one real proof point shown as a badge on the small card */
  highlight?: string;
  /** text for the live link, default "Live site" (e.g. "Live demo") */
  liveLabel?: string;
  /** screenshots for the large case study; several become tabs (empty shows a placeholder) */
  screenshots?: {
    label: string;
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
  /** short status pills on the large case study, e.g. "In production", "Solo build" */
  status?: string[];
  /** one plain line on what the author did, e.g. "Solo build: design, code and deployment." */
  owned?: string;
  /** four short, concrete things the product does */
  features?: string[];
  repo?: string;
};

export type Experience = {
  company: string;
  role: string;
  /** optional label shown after the company, e.g. "Contract" */
  employment?: string;
  /** "YYYY-MM", or "YYYY" when the month is unknown */
  start: string;
  /** same format as start, or null while the role is current */
  end: string | null;
  location: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};
