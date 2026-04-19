# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev      # Start dev server at localhost:4321
npm run build    # Build static site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

This is a personal website and blog for Chiunhau You, built with **Astro** (static output) and deployed to GitHub Pages via `.github/workflows/deploy.yml` on pushes to `main`.

**Content system**: Blog posts live in `src/content/blog/` as `.md` or `.mdx` files. The schema is defined in `src/content.config.ts` — required frontmatter fields are `title` and `date`; optional are `subtitle`, `tag`, `description`, and `hasCharts`.

**Charts**: Set `hasCharts: true` in a post's frontmatter to load Chart.js from CDN. Use the `<Chart>` component (`src/components/Chart.astro`) inside MDX files, passing a Chart.js `config` object as a prop.

**Layouts**: `Layout.astro` is the base shell (nav, footer, fonts). `BlogPost.astro` wraps it for individual posts and reads from the `frontmatter` prop.

**Routing**:
- `/` → `src/pages/index.astro` (homepage with hero, about, projects, recent posts, contact)
- `/blog` → `src/pages/blog/index.astro`
- `/blog/[slug]` → `src/pages/blog/[slug].astro`

**Styling**: Global styles in `src/styles/global.css`, imported via `Layout.astro`. Fonts are Playfair Display and Source Serif 4 from Google Fonts.
