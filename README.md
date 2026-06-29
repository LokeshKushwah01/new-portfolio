# Lokesh Kushwah — Portfolio

A modern, animated portfolio website built with Next.js 16, Tailwind CSS, and Framer Motion. Features a premium dark theme with interactive particle background, scroll-reveal animations, and a typewriter hero effect.

## Tech Stack

- **Framework** — Next.js 16 (App Router, TypeScript)
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion (scroll-reveal, page transitions)
- **Particles** — @tsparticles/react + @tsparticles/slim
- **Typewriter** — react-type-animation
- **Forms** — react-hook-form
- **Icons** — lucide-react + custom SVGs

## Sections

- **Hero** — Particle canvas background, typewriter role animation, CTA buttons
- **About** — Bio, animated stat counters
- **Skills** — 12-tech grid with stagger-in animation
- **Projects** — 6 project cards with gradient accents and live/code links
- **Experience** — Alternating vertical timeline
- **Contact** — Form with mailto fallback + social links

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Customisation

| What to change | Where |
|---|---|
| Name, title, bio | `components/About.tsx`, `components/Hero.tsx` |
| Projects | `components/Projects.tsx` — edit the `PROJECTS` array |
| Work history | `components/Experience.tsx` — edit the `EXPERIENCE` array |
| Skills | `components/Skills.tsx` — edit the `SKILLS` array |
| Social links | `components/Hero.tsx`, `components/Contact.tsx` |
| Profile photo | Replace the monogram placeholder in `components/About.tsx` with an `<Image>` tag |
| Accent color | Search-replace `indigo` across components (current: `#6366F1`) |

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Base | `#080B14` | Page background |
| Surface | `#0F1629` | Alternating sections |
| Card | `#141D35` | Cards, timeline items |
| Accent | `#6366F1` | Buttons, borders, highlights |
| Text | `#E2E8F0` | Headings |
| Muted | `#94A3B8` | Body copy, labels |

## Deployment

Deploy instantly on [Vercel](https://vercel.com) — connect the repo and it auto-detects Next.js.

```bash
npm install -g vercel
vercel
```

## License

MIT
