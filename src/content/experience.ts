import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    company: "ProviderLINK",
    role: "Frontend Developer",
    start: "2023",
    end: null,
    location: "Texas, USA · Remote",
    highlights: [
      "I build and maintain web apps that healthcare and internal teams use every day.",
      "I turn ideas into responsive, reusable interfaces that work across browsers.",
      "I connect the frontend to backend services, APIs, authentication and real-time data.",
      "I work with the team to fix problems, improve features and build new tools people need.",
    ],
  },
  {
    company: "Upwork",
    role: "Web Application Developer",
    start: "2021",
    end: "2023",
    location: "Freelance",
    highlights: [
      "I delivered 30+ web projects for clients around the world.",
      "I built dashboards, admin panels and custom web apps on my own, from idea to launch.",
      "I worked directly with clients and turned their feedback into improvements.",
    ],
    clients: [
      { name: "USA", code: "US" },
      { name: "Canada", code: "CA" },
      { name: "UK", code: "GB" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "Spain", code: "ES" },
      { name: "Switzerland", code: "CH" },
      { name: "Norway", code: "NO" },
      { name: "Greece", code: "GR" },
      { name: "Ukraine", code: "UA" },
      { name: "Cyprus", code: "CY" },
      { name: "Turkey", code: "TR" },
      { name: "United Arab Emirates", code: "AE" },
      { name: "Kenya", code: "KE" },
      { name: "Colombia", code: "CO" },
    ],
  },
];
