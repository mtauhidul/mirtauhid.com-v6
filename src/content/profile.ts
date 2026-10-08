// Placeholder content — replace section by section.
export const profile = {
  name: "Mir Tauhidul",
  fullName: "Mir Tauhidul Islam",
  role: "Frontend engineer",
  email: "mir.tauhidul@protonmail.com",
  timezone: "Asia/Dhaka",
  location: "Dhaka, Bangladesh",
  intro:
    "I turn rough ideas into polished, working web apps. I set the direction and structure, build fast with AI, and make sure everything feels right before it ships.",
  about: {
    lead: "I’m Mir Tauhidul Islam, a frontend engineer who’s also comfortable with simple backend work when needed. I care about how UI looks, feels, and works, and I use AI as part of my everyday development workflow. I’m curious by nature, always learning, and constantly looking for better ways to build.",
    body: "In 2021, I started working as a freelance developer and joined ProviderLINK full-time (remote) in 2023. Since then I have built dashboards, hiring tools, landing pages, various custom and AI-powered apps.",
    facts: [
      { label: "Based in", value: "Dhaka, Bangladesh", flag: "bd" },
      {
        label: "Focus",
        value: "I build, I learn, I ship, with AI in my workflow and good UI/UX in mind",
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
