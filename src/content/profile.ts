// Placeholder content — replace section by section.
export const profile = {
  name: "Mir Tauhidul",
  fullName: "Mir Tauhidul Islam",
  role: "Frontend design engineer",
  email: "mir.tauhidul@protonmail.com",
  timezone: "Asia/Dhaka",
  location: "Dhaka, Bangladesh",
  intro:
    "I turn rough ideas into working, on-brand web apps. I design directly in code, so there's no mockup stage, just the real product.",
  about: {
    lead: "I'm Mir Tauhidul Islam, a frontend design engineer who can also build the simple backend. I care about how a product looks and feels, and I build it myself.",
    body: "In 2021, I started working as a freelance developer and joined ProviderLINK full-time (remote) in 2023. Since then I have built dashboards, hiring tools, landing pages, various custom and AI-powered apps.",
    facts: [
      { label: "Based in", value: "Dhaka, Bangladesh", flag: "bd" },
      {
        label: "Focus",
        value: "Building intelligent web applications with modern UI/UX",
      },
    ],
  },
  socials: [
    { label: "GitHub", href: "https://github.com/mtauhidul" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mirtauhid" },
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
