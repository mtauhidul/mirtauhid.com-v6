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
  proof: [
    { value: "40+", label: "projects" },
    { value: "5+ yrs", label: "building for the web" },
    { value: "800+", label: "candidates applied through my ATS" },
  ],
  about: {
    lead: "I'm Mir Tauhidul Islam, a frontend design engineer with some backend experience. I care about how a product looks and feels, and I build it myself.",
    body: "I started building for the web in 2021 as a freelance developer, joined ProviderLINK in 2023, and have worked on 40+ projects since. Along the way I have built dashboards, hiring tools and AI-powered apps, from the interface to the simple backend.",
    facts: [
      { label: "Based in", value: "Dhaka, Bangladesh" },
      {
        label: "Focus",
        value: "Building intelligent web applications with modern UI/UX",
      },
      { label: "Building since", value: "2021" },
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
