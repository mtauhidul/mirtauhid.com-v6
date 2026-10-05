# Portfolio plan

Single-page, dark-only portfolio. Content lives in `src/content/*` (data) and `src/components/sections/*` (UI), so each section can be edited on its own.

## Goal

A showcase of what I've built and accomplished. Not a sales page: no hire-me, availability or pricing language anywhere.

## Page structure

| #   | Section    | Purpose                                                                                         | Content file    | Component                 |
| --- | ---------- | ----------------------------------------------------------------------------------------------- | --------------- | ------------------------- |
| 00  | Hero       | Who I am, what I do, proof numbers                                                              | `profile.ts`    | `sections/hero.tsx`       |
| 01  | Work       | Two case studies (summary, stats, screenshots, links, a Details toggle) and small project cards | `projects.ts`   | `sections/work.tsx`       |
| 02  | About      | Why work with you, quick facts                                                                  | `profile.ts`    | `sections/about.tsx`      |
| 03  | Experience | Roles with measurable highlights                                                                | `experience.ts` | `sections/experience.tsx` |
| 04  | Stack      | Tools, plain lists                                                                              | `skills.ts`     | `sections/stack.tsx`      |
| 05  | Contact    | Email, socials, résumé                                                                          | `profile.ts`    | `sections/contact.tsx`    |

## Motion principles

- Easing `cubic-bezier(0.22, 1, 0.36, 1)`; reveals 0.8s.
- Hero lines slide up from a mask; sections fade and rise once on scroll.
- No navbar: floating wordmark, contact link and an edge section index.

## Status

Hero, work, about, experience, stack and contact are written. SEO basics are in place: Open Graph and share image, icon, `robots.txt`, `sitemap.xml` and Person structured data.

Open: résumé PDF (the Contact button still links to `#`), a custom 404, and a Lighthouse and accessibility pass.

## Later

Project detail pages, blog, resume download, Lighthouse and a11y audit.
