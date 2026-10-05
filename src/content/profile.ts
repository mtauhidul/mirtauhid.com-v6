// Placeholder content — replace section by section.
export const profile = {
  name: "Mir Tauhidul",
  role: "Frontend design engineer",
  email: "hello@example.com",
  timezone: "UTC", // placeholder, e.g. "Asia/Dhaka"
  location: "Your City, Country",
  intro:
    "I design and build fast, polished interfaces, working where design and code meet. Here's a collection of what I've built.",
  proof: [
    { value: "30+", label: "products shipped" },
    { value: "6 yrs", label: "building for the web" },
    { value: "2.4k", label: "open-source stars" },
  ],
  about: {
    lead: "I'm a frontend design engineer: I care about the details people feel, like spacing, motion and clarity.",
    body: "I work where design and code meet. I've shipped interfaces across fintech, health and developer tools.",
    facts: [
      { label: "Based in", value: "Your City, Country" },
      { label: "Focus", value: "Frontend, interaction and design systems" },
      { label: "Currently", value: "Building in public" },
      { label: "Languages", value: "English, Bangla" },
    ],
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
