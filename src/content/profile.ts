// Placeholder content — replace section by section.
export const profile = {
  name: "Mir Tauhidul",
  role: "Full-Stack Engineer",
  location: "Your City, Country",
  email: "hello@example.com",
  availability: "Available for new projects",
  intro:
    "I design and build fast, accessible products, from the first sketch to the production deploy. Calm interfaces, clean code, measurable results.",
  about: [
    "I'm a software engineer who cares about the details people feel but rarely notice: the easing of a transition, the clarity of an empty state, the milliseconds shaved off a load.",
    "Over the past several years I've shipped products across fintech, health and developer tooling, working end to end with design, product and infrastructure. I like small teams, sharp scope and shipping weekly.",
  ],
  facts: [
    { label: "Based in", value: "Your City" },
    { label: "Focus", value: "Web platforms & product UI" },
    { label: "Currently", value: "Building in public" },
    { label: "Languages", value: "English, Bangla" },
  ],
  stats: [
    { value: "6+", label: "Years building" },
    { value: "30+", label: "Products shipped" },
    { value: "12", label: "Happy teams" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/mtauhidul" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X / Twitter", href: "https://x.com" },
  ],
} as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
