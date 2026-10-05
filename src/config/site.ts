export const siteConfig = {
  name: "Mir Tauhidul",
  title: "Mir Tauhidul — Software Engineer",
  description: "Personal portfolio of Mir Tauhidul: projects, experience and contact.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  links: {
    github: "https://github.com/mtauhidul",
  },
} as const;
