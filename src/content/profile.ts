// Placeholder content — replace section by section.
export const profile = {
  name: "Mir Tauhidul",
  role: "Full-stack developer",
  email: "hello@example.com",
  timezone: "UTC", // placeholder, e.g. "Asia/Dhaka"
  location: "Your City, Country",
  intro:
    "A collection of the products, tools and open-source work I've built, from the first idea to production.",
  proof: [
    { value: "30+", label: "products shipped" },
    { value: "6 yrs", label: "building for the web" },
    { value: "2.4k", label: "open-source stars" },
  ],
  about: {
    lead: "I'm a developer who enjoys the whole path from idea to production: interface details, APIs and the infrastructure underneath.",
    body: "I've worked across fintech, health and developer tools. I like small scope, clear systems and shipping often.",
    facts: [
      { label: "Based in", value: "Your City, Country" },
      { label: "Focus", value: "Web platforms and product engineering" },
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
