import type { CaseStudy } from "@/types/content";

export const projects: CaseStudy[] = [
  {
    title: "Northwind Analytics",
    slug: "northwind-analytics",
    kind: "Analytics",
    summary: "Real-time analytics that turned 40M weekly events into decisions.",
    featured: true,
    context: "Northwind (SaaS, Series A)",
    role: "Lead engineer",
    year: "2026",
    problem: "Reports took 9 seconds to load and the team stopped trusting the numbers.",
    solution:
      "Moved event storage to ClickHouse, built a streaming ingestion pipeline and rebuilt the dashboard with server rendering and cached aggregates.",
    results: [
      { value: "600ms", label: "report load, from 9s" },
      { value: "40M", label: "events per week" },
      { value: "-35%", label: "infra cost" },
    ],
    stack: ["Next.js", "TypeScript", "ClickHouse", "AWS"],
    live: "#",
    repo: "#",
  },
  {
    title: "Niblet",
    slug: "niblet",
    kind: "Nutrition",
    context: "Portfolio project",
    role: "Frontend design engineer",
    year: "2026",
    summary:
      "AI nutrition coach that logs meals and macros from a chat message or photo.",
    problem: "Food tracking apps make you search, weigh and type for every meal.",
    solution:
      "A chat you talk to. Say what you ate, or send a photo, and a tool-using AI agent logs the meal, does the macro maths and can also fix entries, answer questions and log your weight.",
    results: [],
    stack: ["Next.js", "TypeScript", "OpenAI API"],
    live: "https://niblet-ai.vercel.app",
  },
  {
    title: "Draftboard",
    slug: "draftboard",
    kind: "Productivity",
    context: "Personal project",
    role: "Frontend design engineer",
    year: "2026",
    summary:
      "A private sketch board that works offline. Everything stays on your device.",
    problem: "Sketch tools usually want an account and a connection.",
    solution:
      "A board manager around the Excalidraw canvas. Boards save in the browser, export to one JSON file, and the app can be installed.",
    results: [],
    stack: ["Next.js", "TypeScript", "Excalidraw"],
    live: "https://draftboard-canvas.vercel.app",
    repo: "https://github.com/mtauhidul/draftboard",
  },
  {
    title: "CareSync",
    slug: "caresync",
    kind: "Healthcare",
    context: "",
    role: "Frontend design engineer",
    year: "2026",
    summary:
      "Healthcare management system with real-time room status and live dashboards.",
    problem:
      "Clinics need staff, patients and the waiting room working from the same live picture.",
    solution: "A staff portal with real-time room status and dashboards.",
    results: [],
    stack: ["Next.js", "TypeScript", "Firebase"],
    live: "https://caresync-v2.vercel.app",
  },
  {
    title: "KIOSK",
    slug: "checkin-kiosk",
    kind: "Healthcare",
    context: "",
    role: "Frontend design engineer",
    year: "2025",
    summary:
      "Self-service check-in for clinics. Patients enter their details, add ID and sign on screen.",
    problem:
      "Front desks spend their time on paperwork and copies of ID and insurance cards.",
    solution:
      "A touch-friendly app for kiosks and tablets. Patients confirm their details, photograph their ID and insurance card, fill in their medical, family, surgical and social history, sign, answer a short survey and review everything. A test mode lets it run offline as a demo.",
    results: [],
    stack: ["React", "MUI", "Cloudinary"],
    live: "https://kiosk-demo-beta.vercel.app",
  },
  {
    title: "Night Shift",
    slug: "night-shift",
    kind: "Creative",
    context: "Personal project",
    role: "Frontend design engineer",
    year: "2026",
    summary:
      "Animated rainy city at night, with lofi music generated live in the browser.",
    problem:
      "I wanted to see how far plain JavaScript could go, with no libraries and no audio files.",
    solution:
      "A single HTML file. The view from an empty chair looking out over a rainy city at night is drawn on canvas, and the lofi beat (piano, pad, bass, melody and soft drums) is generated live with the Web Audio API.",
    results: [],
    stack: ["JavaScript", "Canvas", "Web Audio"],
    live: "https://night-lofi-anim.vercel.app",
    repo: "https://github.com/mtauhidul/night-lofi-anim",
  },
  {
    title: "MailForge AI",
    slug: "mailforge-ai",
    kind: "Landing",
    context: "Concept project",
    role: "Frontend design engineer",
    year: "2026",
    summary: "Dark, motion-led landing page for an AI email writing assistant concept.",
    problem: "I wanted to design and build a polished landing page end to end.",
    solution:
      "A single-page landing site for an imaginary AI email assistant: hero, features, demo and pricing sections, a small design system with shared components and animation presets, scroll animations with subtle parallax, and a responsive layout with light and dark themes.",
    results: [],
    stack: ["React", "TypeScript", "Framer Motion"],
    live: "https://mail-forge-ai.vercel.app",
    repo: "https://github.com/mtauhidul/mail-forge",
  },
];
