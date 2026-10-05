@AGENTS.md

# Project conventions

- Package manager: **pnpm** (never npm/yarn). Node version in `.nvmrc`.
- Stack: Next.js (App Router, `src/`), TypeScript strict, Tailwind v4, ESLint + Prettier.
- Before finishing work run `pnpm check` (lint + typecheck + format check).
- Layout: `src/app` routes · `src/components/ui` primitives · `src/components/sections` page sections · `src/config` site config · `src/content` portfolio content/data · `src/lib` helpers · `docs/` plans and decisions.
- Import via the `@/*` alias. Server components by default; add `"use client"` only when needed.
- Branch `main`; remote `origin` = github.com/mtauhidul/mirtauhid.com-v6. Conventional commit messages.
