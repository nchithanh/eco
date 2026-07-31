# Conventions

## Agent rules (always apply)

| Rule | Path |
| --- | --- |
| Confirm before acting | `.cursor/rules/confirm-before-acting.mdc` |
| Workspace only | `.cursor/rules/workspace-only.mdc` |
| GitHub `nchithanh` | `.cursor/rules/github-nchithanh.mdc` |
| Design Mode in-chat | `.cursor/rules/design-mode-chat.mdc` |
| Update documentations | `.cursor/rules/update-documentations.mdc` |
| Responsive CSS units | `.cursor/rules/responsive-css-units.mdc` (glob) |

Also: `AGENTS.md` — Next.js 16 may differ from training data; read local Next docs before new APIs.

## Coding habits for this repo

- Prefer dark sketch UI tokens: `--kuct-*` in `globals.css`
- Section intros: eyebrow 11px uppercase accent → H2 display → support `leading-[1.7]`
- Use `Reveal` for scroll motion (desktop); mobile motion is CSS-disabled
- JS motion demos (typewriter / chat cards): gate with `useDesktopMotion` (`lib/motion.ts`, `min-width: 1024px` + no `prefers-reduced-motion`) — static content below `lg`
- Do not invent brand “Dolphin Kich” for new copy — use **Dolphin Software**
- Commits/deploy only when the user asks; push to `main` triggers Pages
