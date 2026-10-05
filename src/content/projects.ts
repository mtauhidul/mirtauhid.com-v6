import type { CaseStudy } from "@/types/content";

export const projects: CaseStudy[] = [
  {
    title: "Arista ATS",
    slug: "arista-ats",
    kind: "Hiring",
    featured: true,
    context: "Running in production at a US-based company",
    role: "Full-stack developer",
    year: "2026",
    summary:
      "An applicant tracking and client management platform, used in production by a US company that hires global virtual assistants.",
    problem:
      "The company hires candidates from around the world for its US clients' virtual assistant jobs. Hundreds of applicants, many clients and open jobs, interviews and emails all needed to live in one place.",
    solution:
      "I built it end to end: research, planning, architecture, the interface, the backend, AI-assisted development, deployment and ongoing maintenance. Recruiters move candidates through each job's pipeline, schedule interviews and send email from one app. AI reads and scores resumes against each job. Hired candidates carry over into client account management.",
    results: [
      { value: "800+", label: "candidates handled" },
      { value: "30+", label: "clients" },
      { value: "50+", label: "jobs" },
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],
    live: "https://ats-ui-test.vercel.app/ats",
    liveLabel: "Live demo",
    image: {
      src: "/images/arista-ats-dashboard.webp",
      width: 1706,
      height: 922,
      alt: "Arista ATS hiring dashboard with candidate, client and open job totals and application and hiring trend charts",
    },
  },
  {
    title: "Niblet",
    slug: "niblet",
    kind: "Nutrition",
    featured: true,
    context: "Portfolio project",
    role: "Full-stack developer",
    year: "2026",
    summary:
      "An AI nutrition coach you talk to. Say what you ate, or send a photo, and it logs the meal and does the macro maths.",
    problem:
      "Logging food is tedious. Most apps make you search, weigh and type in every item.",
    solution:
      "A chat you talk to. A tool-using AI agent logs meals from a message or a photo, fixes or removes entries, answers questions about your day and logs your weight, all from one chat. I built it end to end: product design, a streaming agent with nine validated tools, the Firebase backend, tests and a production-hardened deploy.",
    results: [
      { value: "98", label: "Lighthouse, desktop" },
      { value: "9", label: "validated AI tools" },
      { value: "2", label: "AI providers, one switch" },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "OpenAI API"],
    live: "https://niblet-ai.vercel.app",
    liveLabel: "Live demo",
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
