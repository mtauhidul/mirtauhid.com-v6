export type CaseStudy = {
  title: string;
  slug: string;
  client: string;
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
  period: string;
  location: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};
