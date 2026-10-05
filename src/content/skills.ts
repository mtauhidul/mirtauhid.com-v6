import type { SkillGroup } from "@/types/content";

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces that feel fast and look considered.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion", "Accessibility"],
  },
  {
    title: "Backend",
    description: "Reliable APIs and data you can trust.",
    items: ["Node.js", "PostgreSQL", "GraphQL", "Redis", "REST", "Auth"],
  },
  {
    title: "Tooling & Cloud",
    description: "Shipping safely, often.",
    items: ["Vercel", "AWS", "Docker", "GitHub Actions", "Playwright", "Sentry"],
  },
];
