// Placeholder content — replace section by section.
export const profile = {
  name: "Mir Tauhidul",
  role: "Full-stack developer",
  email: "hello@example.com",
  availability: "Booking projects from Nov 2026",
  intro:
    "I take products from idea to production: sharp frontend, solid APIs, deployed and monitored. I work directly with founders and small teams.",
  proof: [
    { value: "30+", label: "products shipped" },
    { value: "<24h", label: "reply time" },
    { value: "6 yrs", label: "building for the web" },
  ],
  about: {
    lead: "I'm a developer who treats your product like my own: scoped tightly, built fast, and shipped weekly so you see progress, not status updates.",
    body: "I've worked across fintech, health and developer tools. I'm most useful early on, when one person who can design, build and deploy removes weeks of coordination.",
    facts: [
      { label: "Based in", value: "Your City, Country" },
      { label: "Works with", value: "Founders, startups, small product teams" },
      { label: "Timezone", value: "Flexible, overlaps EU / US mornings" },
      { label: "Engagement", value: "Fixed-scope projects, retainers, full-time" },
    ],
  },
  fit: {
    good: [
      "MVPs and v1 products",
      "Dashboards and internal tools",
      "Rebuilds of slow or fragile apps",
    ],
    reply: "Within 24 hours",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/mtauhidul" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
  ],
} as const;

export const navItems = [
  { id: "top", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;
