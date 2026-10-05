import type { CaseStudy } from "@/types/content";

export const projects: CaseStudy[] = [
  {
    title: "Northwind Analytics",
    slug: "northwind-analytics",
    client: "Northwind (SaaS, Series A)",
    role: "Lead engineer",
    year: "2026",
    problem: "Reports took 9 seconds to load and the team stopped trusting the numbers.",
    solution:
      "Moved event storage to ClickHouse, built a streaming ingestion pipeline and rebuilt the dashboard with server rendering and cached aggregates.",
    results: [
      { value: "600ms", label: "report load, from 9s" },
      { value: "40M", label: "events per week" },
      { value: "-35%", label: "infra cost" },
    ],
    stack: ["Next.js", "TypeScript", "ClickHouse", "AWS"],
    live: "#",
    repo: "#",
  },
  {
    title: "Atlas Health Portal",
    slug: "atlas-health",
    client: "Atlas Clinics",
    role: "Full-stack developer",
    year: "2025",
    problem: "14 clinics scheduled patients by phone and spreadsheet.",
    solution:
      "Built a booking and records platform with role-based access, audit logs and reminders, to HIPAA standards.",
    results: [
      { value: "14", label: "clinics onboarded" },
      { value: "-60%", label: "no-shows" },
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
    live: "#",
  },
  {
    title: "Lumen Design Kit",
    slug: "lumen-kit",
    client: "Open source",
    role: "Creator",
    year: "2025",
    problem: "Teams kept rebuilding the same accessible components from scratch.",
    solution:
      "Published 60+ themeable, keyboard-accessible primitives with docs and a Storybook.",
    results: [
      { value: "2.4k", label: "GitHub stars" },
      { value: "60+", label: "components" },
    ],
    stack: ["Tailwind", "Radix", "Storybook"],
    live: "#",
    repo: "#",
  },
  {
    title: "Pulse Mobile Banking",
    slug: "pulse-banking",
    client: "Pulse (fintech)",
    role: "Frontend lead",
    year: "2024",
    problem: "Onboarding took 11 steps and half of new users dropped off.",
    solution:
      "Shipped a cross-platform app with biometric auth, instant transfers and a 3-step onboarding.",
    results: [
      { value: "+48%", label: "onboarding completion" },
      { value: "4.8", label: "store rating" },
    ],
    stack: ["React Native", "GraphQL", "Node.js"],
    live: "#",
  },
];
