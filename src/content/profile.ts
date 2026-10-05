// Placeholder content — replace section by section.
export const profile = {
  name: "Mir Tauhidul",
  fullName: "Mir Tauhidul Islam",
  role: "Frontend design engineer",
  email: "hello@mirtauhid.com",
  timezone: "Asia/Dhaka",
  location: "Dhaka, Bangladesh",
  intro:
    "I turn rough ideas into working, on-brand web apps. I design directly in code, so there's no mockup stage, just the real product.",
  proof: [
    { value: "30+", label: "projects" },
    { value: "3+ yrs", label: "building for the web" },
    { value: "0", label: "static mockups" },
  ],
  about: {
    lead: "I'm Mir Tauhidul Islam, a frontend design engineer with some backend experience. I care about how a product looks and feels, and I build it myself.",
    body: "I started building for the web in 2023 and have worked on 30+ projects since. I skip the static mockups and design directly in code, so what I show is what ships.",
    facts: [
      { label: "Based in", value: "Dhaka, Bangladesh" },
      { label: "Focus", value: "Interface design, design systems and responsive UI" },
      { label: "Building since", value: "2023" },
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
