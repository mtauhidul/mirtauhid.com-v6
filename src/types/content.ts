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
  /** e.g. "Part-time" */
  employment?: string;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM", or null while the role is current */
  end: string | null;
  location: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};
