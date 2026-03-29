# DRG:S Build Companion — Claude Instructions

## Project Overview
A mobile-friendly React SPA serving as a strategy reference for Deep Rock Galactic: Survivor. Deployed to GitHub Pages at `/drgs-build-companion/`.

## Tech Stack
- React 19, Vite 8, Tailwind CSS 4
- Testing: Vitest
- Deployment: GitHub Actions → GitHub Pages

## Project Structure
```
src/
  App.jsx              # Tab nav shell (3 tabs currently)
  pages/               # CheatSheets, StageGuide, ShopOptimizer
  components/          # TabNav, BuildCard, OverclockTable, ArtifactPriority, etc.
  data/
    builds.js          # 12 builds — primary data file
    artifacts.js       # 36 artifacts with ARTIFACT_BY_ID/BY_NAME exports
    economy.js         # Stage economy benchmarks
    staging/           # Temporary JSON from research agents (gitignored)
  tests/               # Vitest tests, follow artifacts.test.js pattern
docs/superpowers/
  specs/               # Design docs
  plans/               # Implementation plans
```

## Data Conventions
- All data files are JS modules (`export const NAME = [...]`), not JSON
- Lookup maps are derived exports: e.g. `ARTIFACT_BY_ID`, `ARTIFACT_BY_NAME`
- Follow the existing schema shapes exactly when adding entities
- Artifact IDs: kebab-case (`squint-ee5`), Build IDs: kebab-case (`thick-boy-sniper`)

## Research Sources (pre-authorized)
- `deeprockgalactic.wiki.gg` — primary wiki
- `steamcommunity.com`, `gameplay.tips`, `www.dualshockers.com` — community meta

## Design System
Dark cave theme: `cave-black` bg, `dark-steel` panels, `drg-amber` accents, `nitra-green` economy.
Fonts: Rajdhani (body), JetBrains Mono (mono). Mobile-first layout.

## Commands
```bash
npm run dev       # Start dev server
npm run build     # Production build
npm test          # Run Vitest
```

## Active Expansion Work
Content 5-10x expansion in progress. 6 research agents gather data into `src/data/staging/*.json`, then implementation agents convert to JS data files and add 4 new pages (Artifact Tiers, Weapon Reference, Bestiary, Synergies).
