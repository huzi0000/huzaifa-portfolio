# Huzaifa Siddiqui — Digital Growth Systems

Single-page portfolio implemented directly from the supplied reference designs
(`hero-section.png`, `about-section.png`, `service-section.png`, `work-section.png`,
`contact-section.png`) and their source media. The original reference images and
assets live in the project root and are untouched.

## Stack

React 18 · Vite 5 · TypeScript · Tailwind CSS 3 · Framer Motion · Lucide React
Fonts are self-hosted via Fontsource (no external font requests):
**Space Grotesk** (display), **Geist** (body/UI), **Geist Mono** (technical
labels), **Instrument Serif** (the orange editorial accent in the hero).

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production bundle into dist/
npm run preview   # serve the production build
```

## Layout

```
src/
  App.tsx                  section composition
  main.tsx                 mount + smooth anchor scrolling with navbar offset
  index.css                design tokens, type scale, primitives (one source of truth)
  components/
    Navbar.tsx             fixed floating pill, scroll-spy active state
    SectionLabel.tsx       "02 ———— ABOUT ME" structural label
    Reveal.tsx             fade + rise on enter, disabled under reduced motion
    brands.tsx             hand-tuned inline brand marks (currentColor driven)
    icons.tsx              Tooth glyph (Lucide has no equivalent)
  sections/                Hero, About, Services, Work, Contact
  data/                    services, projects (+ filters)
public/assets/             copies of the supplied media, served as-is
```

## Design system

Defined once in `src/index.css` and consumed everywhere:

| token | value |
| --- | --- |
| background | `#080A0A` |
| primary text | `#F2F2ED` |
| editorial sand (line 2 of headings) | `#D8C9B2` |
| muted body | `#858983` |
| signal orange | `#FF7433` |
| hero display | `clamp(3.1rem, 11.05vw, 12.4rem)` · Space Grotesk 700 · lh .755 |
| section display | `clamp(2.2rem, 4.82vw, 4.9rem)` · Space Grotesk 700 · lh .92 |
| light display | `clamp(1.85rem, 3.66vw, 3.86rem)` · Geist 300 · lh 1.03 |

Headings use the reference's two-tone device: line 1 cream, line 2 warm sand
(`tone-a` / `tone-b`).

## Content rules

No invented facts. The About stat rail replaces the reference's placeholder
metrics with sourced facts only (Core Discipline, Based In, What I Build,
Availability). Contact details are exact; Discord is rendered as a
username-only, non-linked row because no valid profile URL was supplied.

The contact form is fully client-side: it validates required fields and email
format, sets `aria-invalid` / `aria-describedby`, focuses the first invalid
field, then composes a pre-filled `mailto:`. No backend, no paid service, no
secrets.

## Dev-only QA tooling (`tools/`)

Not part of the bundle.

- `shoot.mjs` — drives headless Chrome over CDP to capture each section at the
  exact reference dimensions, aligned to the reference label position.
- `responsive.mjs` — captures 1920/1440/1280/1024/768/430/390/375/320 and audits
  for horizontal overflow, out-of-bounds elements and small tap targets.
- `poster.mjs` — extracts a still frame from `hero-video.mp4` for the poster /
  static fallback.
- `measure.ps1`, `brighten.ps1` — read pixel profiles out of the reference
  images to derive the type scale and grid metrics.
