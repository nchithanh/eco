# Conventions

Claude Code mirrors: `.claude/rules|agents|skills` — see [claude-handoff.md](./claude-handoff.md). When changing policy, update **both** Cursor and Claude packs.

## Agent rules

| Rule | Path | Apply |
| --- | --- | --- |
| Dolphin core | `.cursor/rules/dolphin-core.mdc` (+ `.claude/rules/dolphin-core.md`) | Always — brand, ICP, docs pointer |
| Content brand / writing / forbidden / seo | `.cursor/rules/content-*.mdc` (+ `.claude/rules/`) | Copy tasks |
| Mode news | `.cursor/rules/mode-news.mdc` → Claude skill `mode-news` | Blog `/news/` |
| Mode social | `.cursor/rules/mode-social.mdc` → Claude skill `mode-social` | Social captions |
| Reply Vietnamese | `.cursor/rules/reply-vietnamese.mdc` (+ `.claude/`) | Always — chat replies VI regardless of user language |
| Schema JSON sync | `.cursor/rules/schema-json-sync.mdc` (+ `.claude/`) | Always — content/product changes → update `public/schema/` |
| Confirm before acting | `.cursor/rules/confirm-before-acting.mdc` (+ `.claude/`) | Always |
| Workspace only | `.cursor/rules/workspace-only.mdc` (+ `.claude/`) | Always |
| GitHub `nchithanh` | `.cursor/rules/github-nchithanh.mdc` (+ `.claude/`) | Always |
| Design Mode in-chat | `.cursor/rules/design-mode-chat.mdc` (+ `.claude/`) | Always |
| Update documentations | `.cursor/rules/update-documentations.mdc` (+ `.claude/`) | Always |
| Cookie consent bump | `.cursor/rules/cookie-consent-bump.mdc` (+ `.claude/`) | Always — bump `COOKIE_CONSENT_REVISION` on commit/push/build |
| Responsive CSS units | `.cursor/rules/responsive-css-units.mdc` (+ `.claude/`) | Glob |

## Agents (personas)

Router: `.cursor/agents/_router.md` / `.claude/agents/_router.md` — personas: content, seo, frontend, reviewer, tester, devops.

## Content Agent pack

| Path | Role |
| --- | --- |
| `.cursor/knowledge/` | Company SoT — start at `README.md` / `company.md` |
| `.cursor/examples/` | Tone samples |
| `.cursor/prompts/` | create-blog, create-social, pipeline (Claude: `.claude/skills/create-*`, `content-pipeline`) |

## Skills (project)

| Skill | Path | Use for |
| --- | --- | --- |
| lang | `.cursor/skills/lang/SKILL.md` | vi / en / ja tone |
| seo | `.cursor/skills/seo/SKILL.md` | Keywords, meta, internal links |

How to combine: [agent-ops.md](./agent-ops.md).  
Canonical product docs: this `documentations/` folder; content pack knowledge supplements it for marketing copy.  
Homepage VI copy: `lib/i18n/homepage_lang_vi.ts` (other langs: add `homepage_lang_{locale}.ts`).

Also: `AGENTS.md` — Next.js 16 may differ from training data; read local Next docs before new APIs.

## Coding habits for this repo

- Prefer light B2B tokens: `--kuct-*` in `globals.css` (mist bg, soft lavender accent `#6b56d6`, charcoal text — see [homepage-anti-vibe-code.md](./homepage-anti-vibe-code.md) Phase 0)
- Type helpers: `.kuct-type-h1` / `.kuct-type-h2` / `.kuct-type-body` / `.kuct-type-eyebrow`; surface `.kuct-surface-card` / `.kuct-badge`
- Section intros: eyebrow 11px uppercase accent → H2 display → support `leading-[1.7]`
- Radius site ~10px; avoid pill / heavy glass / neon glow on new UI
- Use `Reveal` for scroll motion on all viewports; disable only under `prefers-reduced-motion`
- JS motion demos (typewriter / chat cards / NeuralSphere): gate with `useDesktopMotion` (`lib/motion.ts` — reduced-motion only)
- Hero parallax: `useParallaxScrollY` on glow / glass / mascot wrappers (`transform`); LCP copy stays fixed
- Desktop smooth wheel: `SmoothScroll` + Lenis (`lg+`, respects `prefers-reduced-motion`)
- Prefer CSS `transform`/`opacity` for motion; keep SEO copy in DOM; avoid long opacity fades on LCP headline
- Hover transform effects stay off below `lg` (touch/tablet sticky-hover)
- Do not invent brand “Dolphin Kich” for new copy — use **Dolphin Software**
- Commits/deploy only when the user asks; push to `main` triggers Pages
- On commit/push/Pages build: bump `COOKIE_CONSENT_REVISION` in `lib/cookie-consent.ts` (forces cookie banner again)
