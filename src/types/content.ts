export type CaseStudy = {
  title: string;
  slug: string;
  context: string;
  role: string;
  year: string;
  problem: string;
  solution: string;
  results: { value: string; label: string }[];
  stack: string[];
  live?: string;
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
