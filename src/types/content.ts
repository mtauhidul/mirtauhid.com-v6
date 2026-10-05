export type Project = {
  title: string;
  slug: string;
  summary: string;
  role: string;
  year: string;
  tags: string[];
  href: string;
  repo?: string;
  featured?: boolean;
  hue: number; // placeholder image tint, 0-360
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};
