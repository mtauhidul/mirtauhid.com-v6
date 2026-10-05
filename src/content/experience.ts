import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    company: "Company One",
    role: "Senior Frontend Design Engineer",
    period: "2024 — Now",
    location: "Remote",
    highlights: [
      "Rebuilt the core dashboard, cutting load time by 85%.",
      "Introduced a design system adopted by 5 product teams.",
      "Mentored 4 engineers and ran frontend hiring.",
    ],
  },
  {
    company: "Company Two",
    role: "Frontend Engineer",
    period: "2021 — 2024",
    location: "Your City",
    highlights: [
      "Designed an event pipeline handling 40M events per week.",
      "Cut infrastructure cost 30% by moving to edge rendering.",
    ],
  },
  {
    company: "Company Three",
    role: "Frontend Developer",
    period: "2019 — 2021",
    location: "Remote",
    highlights: [
      "Delivered 12 production apps from design handoff to launch.",
      "Raised Lighthouse performance from 54 to 96.",
    ],
  },
];
