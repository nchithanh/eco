# Claude Code handoff — Dolphin Software

How to open a productive Claude Code session on this repo. Cursor pack remains under `.cursor/`; Claude mirrors live in `.claude/`.

## First session

1. Open repo root (`/home/thanhnc/projects/startup` or clone of `nchithanh/eco`).
2. Confirm memory loaded: `/context` — expect `CLAUDE.md` + `.claude/rules/`.
3. For brand/copy work, read `.cursor/knowledge/company.md` before drafting.
4. For UI/routes, read `documentations/homepage.md` / `pages.md` / `architecture.md`.

## What loads automatically

- `CLAUDE.md` — project brief + commands + SoT pointers  
- `.claude/rules/*.md` without `paths:` — always on (confirm-before-acting, workspace-only, cookie bump, Vietnamese reply, dolphin-core, …)  
- Path-scoped content rules when editing `lib/i18n/**`, news, copy modules  

## What to invoke on demand

| Need | Invoke |
| --- | --- |
| Locale tone vi/en/ja | skill **lang** |
| Keywords / meta / GEO | skill **seo** |
| Blog `/news/` | skill **mode-news** (+ **create-blog** / **content-pipeline**) |
| FB / Zalo / TikTok / IG | skill **mode-social** (+ **create-social**) |
| Persona | `.claude/agents/{content,seo,frontend,reviewer,tester,devops}.md` via router |

Router table: `.claude/agents/_router.md` (same as Cursor).

## Dual IDE policy

| Content | Location |
| --- | --- |
| Company knowledge SoT | `.cursor/knowledge/` only (do not fork) |
| Product docs | `documentations/` only |
| Always-on / content rules | `.cursor/rules/*.mdc` **and** `.claude/rules/*.md` — update both when changing policy |
| Agents | `.cursor/agents/` **and** `.claude/agents/` |
| Skills | `.cursor/skills/` **and** `.claude/skills/` |

Prefer editing the pair in one task, or edit Cursor then re-run conversion notes in this doc.

## Confirm-before-acting

Same as Cursor: short plan → user replies **`ok`** → then mutate. Pure Q&A can skip.

## Cookie + GitHub

- Commit/push/Pages build → bump `lib/cookie-consent.ts` → `COOKIE_CONSENT_REVISION`
- Push: `GIT_SSH_COMMAND='ssh -i ~/.ssh/id_ed25519 -o IdentitiesOnly=yes' git push …` as **nchithanh**

## Pending product work (context)

Anti–vibe-code Phases 0–4 shipped. Remaining: **Sprint D** (Works case depth + Process), **Sprint E** (Care/AiEdge mobile polish). See `documentations/homepage-anti-vibe-code.md`.

## Related

- [agent-ops.md](./agent-ops.md) — full agent/content pack ops  
- [overview.md](./overview.md) · [conventions.md](./conventions.md)
