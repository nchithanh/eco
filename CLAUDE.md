# Dolphin Software — Claude Code

Next.js marketing site for **Dolphin Software** (SMB · Vietnam; JP when asked).  
Brand display: **Dolphin Software** only — never “Dolphin Kich” in new copy.

## Quick facts

| | |
| --- | --- |
| Repo / live | GitHub `nchithanh/eco` · https://dolphin-software.io.vn/ |
| Stack | Next.js 16 (App Router) · React 19 · Tailwind 4 · static export / GitHub Pages |
| Outcomes | **Build · Modernize · Automate · Care** |
| Cold ICP | SMB needs a **website** (Build) → Zalo / quote — do not lead with “AI Agent” |
| Locales | `vi` SoT · `en` · `ja` |

## Commands

```bash
npm run dev          # local
npm run build        # production
npm test             # vitest
GITHUB_PAGES=true npm run build   # Pages artifact
```

Git push as **nchithanh** (not nghianhdev):

```bash
GIT_SSH_COMMAND='ssh -i ~/.ssh/id_ed25519 -o IdentitiesOnly=yes' git push -u origin HEAD:main
```

## Source of truth (read before inventing)

1. Company / brand: @.cursor/knowledge/README.md → `company.md` (+ opinion, values, pains, services)
2. Product / routes / homepage: @documentations/README.md
3. Agent routing: @.claude/agents/_router.md · ops: @documentations/agent-ops.md
4. Claude handoff: @documentations/claude-handoff.md

Missing fact → **TODO**. Do not invent prices, KPIs, or routes.

## Always (also in `.claude/rules/`)

- Reply to the user in **Vietnamese**; product copy stays in the target locale.
- **Confirm-before-acting:** plan → wait for user **`ok`** before edits/shell/git.
- Workspace-only: mutate only inside this repo.
- Update `documentations/` (+ `changelog.md`) when behavior/routes/copy structure changes.
- On commit / push / Pages build: bump `COOKIE_CONSENT_REVISION` in `lib/cookie-consent.ts`.
- Schema truth: keep `public/schema/` in sync when product copy changes.
- Public HTML: one `h1`, heading order, landmarks — see seo-geo-html rule.

## Next.js note

@AGENTS.md

This Next.js version may differ from training data — check `node_modules/next/dist/docs/` before new APIs.

## Where code lives

- Homepage: `components/HomePage.tsx` + section components; order in `documentations/homepage.md`
- Copy: `lib/i18n/` (`homepage_lang_*`, `dictionaries`, `*-copy.ts`)
- News: `lib/news-details.ts` + `/news/`
- Mascots: `lib/mascot.ts` (`eco` / `chat` / `contact`)
- Anti–vibe-code plan: `documentations/homepage-anti-vibe-code.md` (Phases 0–4 done; Sprint D/E pending)

## Claude layout (mirrors Cursor)

| Path | Role |
| --- | --- |
| `.claude/rules/` | Always-on + path-scoped rules (from `.cursor/rules/`) |
| `.claude/agents/` | Personas: content, seo, frontend, reviewer, tester, devops |
| `.claude/skills/` | `lang`, `seo`, `mode-news`, `mode-social`, `create-blog`, `create-social`, `content-pipeline` |

Cursor pack still canonical for knowledge/examples: `.cursor/knowledge/`, `.cursor/examples/`. Keep both IDE packs in sync when changing policy.

## Invoke examples

- News JA: skill `mode-news` + `seo` + `lang` · agent `content`
- Homepage UI: agent `frontend` · read `homepage.md`
- Deploy/push: agent `devops` · cookie bump + `nchithanh` SSH
