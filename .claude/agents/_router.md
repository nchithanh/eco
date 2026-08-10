---
name: _router
description: Dolphin agent persona — _router
---

# Agent router — Dolphin

When a chat starts, pick **one primary** agent (optional one secondary). Do not run all agents.

| User intent | Primary | Secondary |
| --- | --- | --- |
| Blog / news / bài viết | `content` | `seo` |
| FB / Zalo / TikTok / IG | `content` | `seo` (light) |
| Keyword / meta / GEO / ranking | `seo` | `content` |
| Homepage / UI / component / CSS | `frontend` | `reviewer` |
| Review diff / “check giúp” | `reviewer` | — |
| Tests failing / viết test | `tester` | `frontend` |
| Deploy / Pages / CF / push | `devops` | — |
| Unclear | Ask 1 clarifying question | — |

Then load matching **mode** (news/social), **skills** (lang/seo), **content rules**, **knowledge**, and `documentations/`.

Personas live in this folder: `content.md`, `seo.md`, `frontend.md`, `reviewer.md`, `tester.md`, `devops.md`.
