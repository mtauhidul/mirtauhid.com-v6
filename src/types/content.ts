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
  problem: string;
  solution: string;
  results: { value: string; label: string }[];
  stack: string[];
  live?: string;
  /** text for the live link, default "Live site" (e.g. "Live demo") */
  liveLabel?: string;
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
