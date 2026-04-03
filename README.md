# Park Buffer Air Quality — Urban Sensing Midterm

A slide-based web presentation for the NYU CUSP Urban Sensing midterm, investigating whether park proximity improves street-level air quality before leaf-out. Built with TanStack Start, React, Tailwind CSS, and Framer Motion, deployed on Cloudflare Workers.

## What This Is

A 10-slide interactive presentation showing results from a walking transect experiment conducted on March 31, 2026 in Jackson Heights, Queens. PM2.5 was measured with an Atmotube Pro sensor across three zones (Broadway, Park Interior, Quiet Side) to test whether the physical open space of a park reduces particulate pollution before trees have leaves.

**Key finding:** No PM2.5 gradient was detected — all three zones measured ~7.2 µg/m³, suggesting that the leaf canopy, not open space alone, is the active filtering mechanism.

## Running Locally

```bash
bun install
bun run dev        # http://localhost:3000
```

## Building & Deploying

```bash
bun run build      # Production build → dist/
bun run deploy     # Build + deploy to Cloudflare Workers
```

## Navigating the Presentation

- **Arrow keys** or **Space** to move between slides
- **Dot indicators** at the bottom to jump to any slide
- **Sun/Moon icon** in the bottom-left to toggle dark/light mode
- URL hash (`#0`, `#1`, ... `#9`) updates automatically and supports direct linking

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx                    # Root layout (dark theme default)
│   └── index.tsx                     # Renders the Presentation component
├── components/
│   └── presentation/
│       ├── Presentation.tsx          # Slide orchestrator (array + direction tracking)
│       ├── SlideShell.tsx            # Framer Motion animated slide wrapper
│       ├── SlideNavigation.tsx       # Bottom nav bar (dots, arrows, theme toggle)
│       └── slides/
│           ├── TitleSlide.tsx        # 1. Research question, author, affiliation
│           ├── SensorSlide.tsx       # 2. Atmotube Pro specs
│           ├── WhyItMattersSlide.tsx # 3. Hypothesis and motivation
│           ├── MethodSlide.tsx       # 4. Three zones with timestamps
│           ├── RawDataSlide.tsx      # 5. Sample data table
│           ├── MapSlide.tsx          # 6. Embedded Leaflet map (iframe)
│           ├── KeyFindingSlide.tsx   # 7. Three stat cards (null result)
│           ├── BoxPlotSlide.tsx      # 8. PM2.5 box plot image
│           ├── InterpretationSlide.tsx # 9. Literature-backed interpretation
│           └── LimitationsSlide.tsx  # 10. Caveats + future work + Q&A
├── hooks/
│   ├── useTheme.ts                  # Dark/light mode toggle
│   └── presentation/
│       └── useSlideNavigation.ts    # Keyboard nav, URL hash, slide state
├── lib/
│   └── utils.ts                     # cn() utility (clsx + tailwind-merge)
└── styles.css                       # Tailwind + shadcn OKLch theme variables
public/
├── pollution_map.html               # Interactive Leaflet map (slide 6 iframe)
└── segment_boxplot.png              # PM2.5 box plot by zone (slide 8 image)
```

## Making Changes

### Editing slide content

Each slide is a self-contained React component in `src/components/presentation/slides/`. Edit the JSX directly — no data files or config to update.

### Adding or removing slides

Update the `SLIDES` array in `src/components/presentation/Presentation.tsx`. The navigation dots, keyboard controls, and URL hashing all adapt automatically based on the array length.

### Reordering slides

Change the order of components in the `SLIDES` array. No other files need updating.

### Changing the theme

Color variables are defined in `src/styles.css` using OKLch values. The `:root` block controls light mode, the `.dark` block controls dark mode. The app defaults to dark mode (set via `className="dark"` on `<html>` in `__root.tsx`).

### Updating static assets

The map and box plot are served from `public/`. Replace the files with updated versions using the same filenames, or update the `src` paths in `MapSlide.tsx` and `BoxPlotSlide.tsx`.

## Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) + React 19
- **Styling:** Tailwind CSS 4 with shadcn/ui theme variables (OKLch)
- **Animations:** Framer Motion (`motion` package) for slide transitions
- **Icons:** lucide-react
- **Deployment:** Cloudflare Workers
- **Package manager:** Bun

## Content Reference

See `PRESENTATION_GUIDELINE.md` for the full experiment details, data collection methodology, analysis results, and literature citations that inform the slide content.
