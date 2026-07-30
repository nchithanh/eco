# Architecture

## Stack

| Layer | Detail |
| --- | --- |
| Next.js | 16.x (App Router) — read `node_modules/next/dist/docs/` before new APIs |
| React | 19.x |
| Tailwind | v4 (`app/globals.css`) |
| Forms | react-hook-form + zod |
| Tests | Vitest + Testing Library (`tests/`) |
| Themes | `lib/theme.tsx` — violet default; UI switcher exposes violet + slate |

## Static export

`next.config.ts` enables `output: "export"` + `trailingSlash` when `GITHUB_PAGES=true`. Custom domain serves at `/` (no `basePath`). Images are `unoptimized`. Prefer `assetPath()` for public URLs.

## Top folders

| Path | Role |
| --- | --- |
| `app/` | Routes & root layout |
| `components/` | UI sections & shared chrome |
| `lib/` | i18n, estimators, `pricing-fx` (locale package prices), content data, theme, assets |
| `public/` | Static assets (mascot, brand, about, tech, themes) |
| `tests/` | Vitest suites |
| `documentations/` | Canonical project docs (this tree) |
| `.cursor/rules/` | Always-on agent rules |

## Motion / mobile

Under `max-width: 1023px`, CSS kill-switch disables decorative animations (see `app/globals.css`). Tailwind `hover` custom variant only applies on fine pointer + `lg+`.

**Scroll note:** Decorative `body::before` noise must stay at `z-index ≤ 0` (and is off on mobile). Never place full-viewport fixed layers above page content without `pointer-events: none` *and* low z-index — high z + `mix-blend-mode` can break touch scrolling. Modal/chat overlays use `lib/scroll-lock.ts`. **Do not** scroll-lock the splash `AgentLoader` — the overlay already covers the viewport; locking caused stuck `touch-action` / `overflow` on mobile.
