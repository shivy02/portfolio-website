<div align="center">

# Portfolio Website

A modern, animated personal portfolio built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**, with live Spotify and WakaTime integrations and a Markdown-powered blog.

[![Live Site](https://img.shields.io/badge/Live-shivypatel.com-000?style=for-the-badge&logo=vercel&logoColor=white)](https://shivypatel.com)
&nbsp;
[![Stars](https://img.shields.io/github/stars/shivy02/portfolio-website?style=for-the-badge&logo=github&color=f5c518)](https://github.com/shivy02/portfolio-website/stargazers)
&nbsp;
[![License](https://img.shields.io/badge/license-Apache--2.0-blue?style=for-the-badge)](./LICENSE)

<br />

[![Website screenshot](./public/website_screenshot.png)](https://shivypatel.com)

</div>

---

## Features

- **Next.js 15 App Router** with React 19 and TypeScript
- **Animated UI** using Framer Motion and custom Tailwind keyframes (meteors, shimmer, border beam, view transitions)
- **Live Spotify integration** that shows my most recently played track
- **Live WakaTime stats** for all-time coding hours, pulled on a schedule
- **Markdown blog** with syntax highlighting (`rehype-pretty-code` + Shiki)
- **Dark mode** by default via `next-themes`
- **Auto-generated sitemap** for SEO

## Tech Stack

| | |
|---|---|
| **Framework** | Next.js 15 (App Router) + React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, CSS Modules |
| **Animation** | Framer Motion, custom keyframes |
| **Content** | Markdown blog via `remark`/`rehype` + `rehype-pretty-code` |
| **Integrations** | Spotify (recently played), WakaTime (coding stats), GitHub (contributions) |
| **Hosting** | Vercel |

## Getting Started

```bash
# install dependencies
npm install

# run the development server (http://localhost:3000)
npm run dev

# build for production
npm run build

# run the production build
npm start

# lint
npm run lint
```

Copy `.env.example` to `.env.local` and fill in the keys you want. The site runs fine without them; the live widgets (Spotify, WakaTime, GitHub) just fall back to placeholder data until the keys are set.

---

## Making It Yours

If you forked this to build your own site, here is the honest map of what to change and where. Almost everything that shows up as content lives in one file. A few things (the animated name, the hero copy, the site metadata) are hardcoded in components, so those need a small code edit. I have called those out explicitly.

Start the dev server (`npm run dev`) and edit with it running. Most changes show up instantly.

### 1. Your content: `src/data/data.tsx`

This is the file you will spend the most time in. It is one big exported object, and most of the page reads from it. Each section is an array you can add to, reorder, or trim.

| Key | Controls | Notes |
|---|---|---|
| `experience` | The Experience timeline | Each entry has `company`, `role`, `date`, `location`, `description`, `skills` (string array), an optional `href`, and an `image` path pointing at a logo in `public/experience/`. |
| `projects` | The Projects grid | Each entry has `title`, `description`, `dates`, `technologies` (the tag pills), `href` (where the card links), and either a `video` + `thumbnail` or a static `image`, all pointing into `public/projects/`. |
| `contact` | Contact icons in the hero and dashboard | `href`, `label`, `aria`, and an `icon` (a Tabler icon component). |
| `nav` | The navbar links | `name`, `link`, and an `icon`. A `link` starting with `/` is treated as a route (like `/blog`); otherwise it scrolls to the section `id` on the home page. |
| `tools` | The scrolling tools marquee in the dashboard | `name`, `icon` (filename without extension, matched to `public/tools/`), and `themeDependent`. Set `themeDependent: true` if you provide a separate `-dark` icon variant. |
| `favoriteLanguage` | The "Fav Tool" dashboard card | Same shape as a tool entry. |
| `scratchGifs` | The "Scratch Me" dashboard card | An array of GIF URLs picked at random. See the note on self-hosting below. |

The education entry under Experience is currently hardcoded in `src/components/home/experience.tsx` rather than in the data file. Edit it there.

### 2. Your images and assets

Swap the files in `public/` (or `src/images/` for the profile photos), keeping the same paths your data references.

| What | Where |
|---|---|
| Profile photos (the grayscale-to-color hover in the hero) | `src/images/profile-bw.jpg` and `src/images/profile-color.jpg` |
| Company logos | `public/experience/` |
| Project thumbnails and videos | `public/projects/` |
| Tool and tech icons | `public/tools/` (SVGs; add a `name-dark.svg` variant for theme-dependent icons) |
| Favicon, app icons, manifest | `public/` (`favicon.ico`, `apple-icon-180.png`, `manifest-icon-*.png`) and `public/logo/` |
| Background SVG glow | `public/layout/` |

### 3. The hero text and status: `src/components/home/hero.tsx`

A few pieces of the hero are written directly in the component:

- **The tagline** ("A Software Engineer who likes building things.") is plain JSX. Edit it in place.
- **The availability pill** ("Available" / "Away") is computed in `getStatus()` from a timezone. Change `timeZone: "America/Los_Angeles"` to yours, and adjust the `currentHour >= 8 && currentHour < 22` window to your "online" hours.

### 4. The animated name: `src/components/ui/animated-name.tsx`

The hero animates between two spellings of my name (Shivy and Shivam). This one is the most hardcoded part of the site because the animation pre-measures the exact pixel width of each ending to avoid layout shift. To use your own name you will need to edit this component:

- Change the static base (`Shiv`) and the full first reveal (`Shivy`).
- Change the `Suffix` type and the two measured spans so they match your two endings.

If you do not want the swapping effect at all, the simplest path is to replace `<AnimatedName ... />` in `hero.tsx` with a plain text span of your name and delete the state machine around it. That removes the moving part entirely and is much less fiddly than retuning it.

### 5. Site metadata and SEO: `src/app/layout.tsx`

Update the `metadata` object: `title`, `description`, the `metadataBase` URL (currently `https://shivypatel.com`), the Open Graph and Twitter fields, and the `siteName`. Also check `src/app/sitemap.ts`, `src/app/robots.ts`, and `src/app/feed.xml/route.ts` for the hardcoded domain.

### 6. Blog posts: `src/content/blog/`

Each post is a Markdown file. The filename becomes the URL slug (`my-post.md` serves at `/blog/my-post`). Frontmatter drives everything else:

```markdown
---
title: "Your Post Title"
description: "A one-line summary used for previews and SEO."
date: "2026-01-30"
tags: ["nextjs", "react"]
image: "/blog/your-cover.svg"
imageAlt: "Description of the cover image for accessibility."
---

Your content in **Markdown**. Code blocks get syntax highlighting automatically.
```

Drop cover images in `public/blog/`. Reading time and the table of contents are generated automatically. To start clean, delete the example posts in that folder.

### 7. Live integrations (optional): `.env.local`

These power the Spotify, WakaTime, and GitHub widgets. All optional; without them the widgets show fallback data. See `.env.example` for the full list and the links to generate each credential:

- **WakaTime** for the coding-hours counter (`WAKATIME_API_KEY`).
- **Spotify** for the last-played track (`SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`).
- **GitHub** for the contributions heatmap (`GITHUB_TOKEN`, `GITHUB_USERNAME`, optional `GITHUB_REPO`).

> **One reliability note:** the `scratchGifs` and one dashboard animation currently hotlink to Giphy URLs. Those can break if Giphy ever rotates the asset. If you keep that card, consider downloading the GIFs into `public/` and pointing the URLs at your own copies.

### Quick checklist

- [ ] Replace everything in `src/data/data.tsx`
- [ ] Swap profile photos in `src/images/` and logos/thumbnails in `public/`
- [ ] Edit the hero tagline, timezone, and availability hours in `hero.tsx`
- [ ] Update or remove the animated name in `animated-name.tsx`
- [ ] Update site metadata in `layout.tsx` (and the domain in `sitemap.ts` / `robots.ts` / `feed.xml`)
- [ ] Replace the blog posts in `src/content/blog/`
- [ ] Add your own `.env.local` if you want the live widgets
- [ ] Update this README and the `LICENSE`/`NOTICE` attribution

---

## Support

Building and maintaining this in the open takes real time. If the code was useful, you learned something, or you used it as a starting point:

- **Star the repo.** It is the simplest way to say thanks and helps others find it.
- **Fork it** and build your own version (see the license terms below).
- Found a bug or have an idea? [Open an issue](https://github.com/shivy02/portfolio-website/issues). Feedback is welcome.

## License and Usage

Please read this before reusing anything. This repository is **dual-licensed** (see [`LICENSE`](./LICENSE) for the full text):

- **The code is [Apache 2.0](./LICENSE)-licensed.** You are welcome to read it, learn from it, and fork it to build your own portfolio.
- **The personal content is All Rights Reserved.** My name, bio, photos, logo, blog posts, project write-ups, and other curated assets are not covered by the Apache license and may not be reused.

If you build on this code, please:

1. Replace all of my personal content with your own.
2. Don't present this site (or a substantially similar copy) as your own work.
3. Keep the [`LICENSE`](./LICENSE) and [`NOTICE`](./NOTICE) files as Apache 2.0 requires, preserve the attribution they contain, and note any files you changed. A link back to this repo or [my profile](https://github.com/shivy02) is appreciated.

If you want to use it in a way the license does not cover, [open an issue](https://github.com/shivy02/portfolio-website/issues) and ask. Happy to chat.

---

<div align="center">

Made by [Shivam Patel](https://github.com/shivy02).

</div>
