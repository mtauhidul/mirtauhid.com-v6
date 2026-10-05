import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    company: "Company One",
    role: "Senior Software Engineer",
    period: "2024 — Present",
    location: "Remote",
    summary: "Leading the web platform team behind the flagship product.",
    highlights: [
      "Rebuilt the core dashboard, improving load time by 85%.",
      "Introduced a design system adopted by 5 product teams.",
      "Mentored 4 engineers; ran the hiring loop for frontend roles.",
    ],
  },
  {
    company: "Company Two",
    role: "Full-Stack Engineer",
    period: "2021 — 2024",
    location: "Your City",
    summary: "Shipped customer-facing features across web and API.",
    highlights: [
      "Designed an event pipeline processing 40M events per week.",
      "Cut infrastructure cost 30% by moving to edge rendering.",
    ],
  },
  {
    company: "Company Three",
    role: "Frontend Developer",
    period: "2019 — 2021",
    location: "Remote",
    summary: "Built interfaces for early-stage startups.",
    highlights: [
      "Delivered 12 production apps from design handoff to launch.",
      "Raised Lighthouse performance scores from 54 to 96.",
    ],
  },
];
