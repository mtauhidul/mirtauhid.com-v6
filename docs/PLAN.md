# Portfolio plan

Single-page, dark-only portfolio. All content is placeholder for now and lives in `src/content/*` (data) and `src/components/sections/*` (UI), so each section can be edited on its own.

## Page structure

| #   | Section    | Purpose for a recruiter                              | Content file    | Component                 |
| --- | ---------- | ---------------------------------------------------- | --------------- | ------------------------- |
| –   | Hero       | Who, what, availability and key numbers in 5 seconds | `profile.ts`    | `sections/hero.tsx`       |
| 01  | About      | Personality, focus, quick facts                      | `profile.ts`    | `sections/about.tsx`      |
| 02  | Projects   | Outcomes first: role, year, stack, result            | `projects.ts`   | `sections/projects.tsx`   |
| 03  | Experience | Timeline of roles with measurable highlights         | `experience.ts` | `sections/experience.tsx` |
| 04  | Skills     | Grouped toolkit                                      | `skills.ts`     | `sections/skills.tsx`     |
| 05  | Contact    | One clear call to action: email, résumé, socials     | `profile.ts`    | `sections/contact.tsx`    |

## Motion principles

- Easing `cubic-bezier(0.22, 1, 0.36, 1)`; reveals 0.9s, hovers 300–500ms.
- Hero lines slide up from a mask; sections fade, rise and unblur once on scroll.
- Scroll progress bar, nav pill that follows the active section, cursor spotlight on cards.
- `prefers-reduced-motion` is respected for CSS motion.

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
