import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    title: "Northwind Analytics",
    slug: "northwind-analytics",
    summary:
      "A real-time analytics dashboard that turned 40M weekly events into decisions. Cut report load time from 9s to 600ms.",
    role: "Lead engineer",
    year: "2026",
    tags: ["Next.js", "TypeScript", "ClickHouse"],
    href: "#",
    repo: "#",
    featured: true,
    hue: 250,
  },
  {
    title: "Atlas Health Portal",
    slug: "atlas-health",
    summary:
      "Patient scheduling and records platform used by 14 clinics, built to HIPAA standards.",
    role: "Full-stack",
    year: "2025",
    tags: ["React", "Node", "Postgres"],
    href: "#",
    hue: 175,
  },
  {
    title: "Lumen Design Kit",
    slug: "lumen-kit",
    summary:
      "An open-source component library with 60+ accessible, themeable primitives.",
    role: "Creator",
    year: "2025",
    tags: ["Tailwind", "Radix", "Storybook"],
    href: "#",
    repo: "#",
    hue: 320,
  },
  {
    title: "Pulse Mobile Banking",
    slug: "pulse-banking",
    summary:
      "Cross-platform banking app with biometric auth, instant transfers and spend insights.",
    role: "Frontend lead",
    year: "2024",
    tags: ["React Native", "GraphQL"],
    href: "#",
    hue: 215,
  },
  {
    title: "Orbit CLI",
    slug: "orbit-cli",
    summary:
      "A developer CLI that scaffolds, deploys and monitors services in a single command.",
    role: "Creator",
    year: "2024",
    tags: ["Node", "TypeScript", "Open source"],
    href: "#",
    repo: "#",
    hue: 25,
  },
];
