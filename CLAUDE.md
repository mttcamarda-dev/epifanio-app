# CLAUDE.md — epifanio-app

## Project Overview

Web app for **I.I.S.S. Epifanio Ferdinando**, a secondary school in Mesagne (BR), Puglia, Italy. The app serves as the school's digital portal with news, interviews, assembly photo galleries, upcoming events, team profiles, and an about page.

**Tech stack:** React 19 + Vite 7 + React Router 7. No backend — data is served from mock data files. All UI text is in Italian.

## Repository Structure

```
epifanio-app/
├── CLAUDE.md
├── index.html                  # Entry HTML (lang="it", Google Fonts)
├── package.json
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── main.jsx                # App entry — BrowserRouter wraps <App>
    ├── index.css               # Global CSS variables, reset, utility classes
    ├── App.jsx                 # Route definitions
    ├── App.css                 # App layout (flex column, sticky navbar offset)
    ├── components/
    │   ├── Navbar.jsx / .css   # Fixed top nav with responsive hamburger menu
    │   ├── Footer.jsx / .css   # 3-column footer with links & address
    │   ├── Card.jsx / .css     # Reusable card + formatDate() helper
    ├── pages/
    │   ├── Home.jsx / .css           # Landing: hero, latest news, interviews, events
    │   ├── Notizie.jsx / .css        # News listing
    │   ├── NotiziaSingola.jsx        # Single news article (route: /notizie/:id)
    │   ├── Interviste.jsx            # Interviews listing
    │   ├── IntervistaSingola.jsx     # Single interview (route: /interviste/:id)
    │   ├── FotoAssemblee.jsx / .css  # Photo galleries with lightbox
    │   ├── IlTeam.jsx / .css         # Team member cards
    │   ├── Eventi.jsx / .css         # Upcoming events timeline
    │   ├── ChiSiamo.jsx / .css       # About the school
    │   └── ArticlePage.css           # Shared styles for article detail pages
    └── data/
        └── mockData.js         # All mock data (notizie, interviste, foto, team, eventi)
```

## Development Setup

### Prerequisites

- Node.js >= 18
- npm

### Getting Started

```bash
git clone <repo-url>
cd epifanio-app
npm install
npm run dev          # starts dev server at http://localhost:5173
```

## Commands

| Command           | Description                         |
|-------------------|-------------------------------------|
| `npm run dev`     | Start Vite dev server with HMR      |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview production build locally     |
| `npm run lint`    | Run ESLint                           |

## Code Conventions

### General

- All UI text is in **Italian**
- Keep code simple and focused — avoid over-engineering
- Write clear commit messages that explain _why_, not just _what_
- Do not commit secrets, credentials, or `.env` files

### File Organization

- **One page per route** — each page is in `src/pages/` with its own CSS file
- **Shared components** live in `src/components/` (Navbar, Footer, Card)
- **Mock data** is centralized in `src/data/mockData.js`
- CSS files are co-located with their component/page (e.g., `Navbar.jsx` + `Navbar.css`)

### Styling

- CSS custom properties defined in `src/index.css` (`:root`)
- Color palette: `--color-primary` (school blue `#1a3a5c`), `--color-accent` (gold `#e8a838`)
- BEM-like naming: `.component__element--modifier`
- Responsive breakpoints: 900px (navbar), 768px (general), 600px (small)
- No CSS framework — plain CSS with variables

### Routing

Routes are defined in `App.jsx`:

| Path                | Page             |
|---------------------|------------------|
| `/`                 | Home             |
| `/notizie`          | Notizie          |
| `/notizie/:id`      | NotiziaSingola   |
| `/interviste`       | Interviste       |
| `/interviste/:id`   | IntervistaSingola|
| `/foto-assemblee`   | FotoAssemblee    |
| `/il-team`          | IlTeam           |
| `/eventi`           | Eventi           |
| `/chi-siamo`        | ChiSiamo         |

### Git Workflow

- Use feature branches for development
- Branch naming: `feature/<description>`, `fix/<description>`, `chore/<description>`
- Write descriptive PR titles and summaries
- Keep commits atomic — one logical change per commit

## Testing

No test framework is configured yet. When adding tests:
- Prefer Vitest (native Vite integration)
- Place test files alongside source as `*.test.jsx`

## Architecture Notes

- **SPA** — client-side routing via React Router; no SSR
- **No backend** — all data comes from `src/data/mockData.js`. To add a real backend, replace mock imports with `fetch()` calls
- **Images** — currently using Unsplash URLs as placeholders. Replace with local assets or a CMS in production
- **Font** — Inter (loaded via Google Fonts CDN in `index.html`)

## AI Assistant Guidelines

When working in this repository:

1. **Read before writing** — always read existing files before modifying them
2. **Respect existing patterns** — follow the BEM-like CSS naming, co-located CSS files, and Italian language for UI
3. **Minimal changes** — only change what is necessary to complete the task
4. **No phantom features** — do not add features, abstractions, or "improvements" that weren't requested
5. **Security first** — never commit secrets; validate user input at system boundaries
6. **Run `npm run build`** after making changes to verify the app compiles
7. **Update this file** — when adding significant tooling, dependencies, or architectural decisions, update CLAUDE.md to reflect the current state
8. **Keep Italian** — all user-facing text must be in Italian
