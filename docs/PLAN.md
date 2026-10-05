# Portfolio plan

Single-page, dark-only portfolio. All content is placeholder for now and lives in `src/content/*` (data) and `src/components/sections/*` (UI), so each section can be edited on its own.

## Goal

Win client work from founders and startups (and stay open to full-time roles) by showing real developer work as case studies.

## Page structure

| #   | Section    | Purpose                                                    | Content file    | Component                 |
| --- | ---------- | ---------------------------------------------------------- | --------------- | ------------------------- |
| 00  | Hero       | Who it's for, what you do, availability, CTA, proof        | `profile.ts`    | `sections/hero.tsx`       |
| 01  | Work       | Case studies: problem, what I built, results, stack, links | `projects.ts`   | `sections/work.tsx`       |
| 02  | About      | Why work with you, quick facts                             | `profile.ts`    | `sections/about.tsx`      |
| 03  | Experience | Roles with measurable highlights                           | `experience.ts` | `sections/experience.tsx` |
| 04  | Stack      | Tools, plain lists                                         | `skills.ts`     | `sections/stack.tsx`      |
| 05  | Contact    | Email, good-fit projects, reply time, socials, résumé      | `profile.ts`    | `sections/contact.tsx`    |

## Motion principles

- Easing `cubic-bezier(0.22, 1, 0.36, 1)`; reveals 0.8s.
- Hero lines slide up from a mask; sections fade and rise once on scroll.
- No navbar: floating wordmark, contact link and an edge section index.

## Edit order (one by one)

1. Hero + profile data (name, role, intro, stats)
2. About (copy, portrait)
3. Projects (real projects, screenshots, links)
4. Experience
5. Skills
6. Contact (email, résumé PDF, socials)
7. Polish: SEO/OG image, favicon, analytics, deploy to Vercel, custom domain

## Later

Project detail pages, blog, resume download, Lighthouse and a11y audit.
