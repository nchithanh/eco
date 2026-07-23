# KUCT Careers Page — Design Spec

**Date:** 2026-07-23  
**Status:** Approved for planning  
**Route:** `/careers`

## Goal

Add a Careers (tuyển dụng) page for **freelance** openings aligned with KUCT’s current service needs. Compensation is framed as **~USD 1,000/month full-capacity equivalent**, with **flexible hourly** engagement — not full-time employment.

## Decisions (locked)

| Topic | Choice |
| --- | --- |
| Comp model | ~$1000/mo equivalent, flexible hourly (option C) |
| Roles | All 4: Frontend, Mobile, Backend, UI/UX |
| Apply flow | Dedicated apply form on Careers page |
| Architecture | Single `/careers` page — job list + form (Approach 1) |
| Detail routes | Out of scope (`/careers/[slug]` later if needed) |
| CMS / MDX | Out of scope |

## Page structure

1. **Shared chrome** — `Nav` + `Footer` + `LocaleProvider` / language switcher (same as homepage).
2. **Hero** — eyebrow “Careers” (localized), one headline, one short support line (freelance, remote-friendly, flexible hours, ~$1000/mo equivalent).
3. **Open roles** — four glass cards matching site style:
   - Frontend — Next.js / React
   - Mobile — Flutter / React Native
   - Backend — Node.js / API
   - UI/UX Designer
4. **Apply form** (`#apply`) — name, contact (email/Zalo), portfolio URL, role select, message → `mailto` (same pattern as homepage Contact).

### Job card content (each role)

- Title + category tags (stack)
- Engagement badge: **Freelance** (not full-time)
- Comp line: **~$1,000/mo equivalent · hourly flexible**
- 3–5 requirement / responsibility bullets
- CTA **Apply** → scrolls to `#apply` and pre-selects that role

### Apply form

- Stack: `react-hook-form` + zod (same conventions as Contact)
- Fields: name, contact, portfolio URL, role (`frontend` | `mobile` | `backend` | `design`), message
- Submit: open `mailto` with localized subject/body including selected role
- Success copy mirrors Contact (email app opened / copy if blocked)

## Navigation

- Add **Careers** link in `Nav` (desktop + mobile) and `Footer`
- Label localized (`nav.careers`)
- Careers is a real route (`/careers`), not a homepage hash

## i18n

Extend dictionaries for `vi` | `en` | `ja` | `de`:

- `nav.careers`
- `careers.meta` (title, description)
- `careers.hero` (eyebrow, headline, support)
- `careers.roles` (eyebrow, title, support)
- `careers.jobs[]` (id, title, summary, bullets, tags)
- `careers.compLabel` / engagement label
- `careers.apply` (form labels, errors, mail subject/body, sent message)

Job IDs are stable across locales: `frontend`, `mobile`, `backend`, `design`.

## Visual / UX

- Reuse soft glass / lavender–pink tokens from homepage (`kuct-*`, glass cards)
- First viewport: brand-adjacent chrome + careers hero only (no job grid crowding the hero)
- One job per card; no decorative badge clutter beyond Freelance + comp line
- Mobile: stacked cards; language switcher remains in Nav

## Out of scope

- Full-time / employee benefits copy
- ATS, file upload, backend persistence
- Per-job SEO pages
- Auth / applicant portal

## Success criteria

- `/careers` renders in all 4 locales with 4 freelance roles and clear ~$1000/mo-equivalent messaging
- Applying a role pre-fills the form role and builds a usable mailto
- Nav/Footer link to Careers works from homepage and careers page
- Existing homepage tests still pass; add smoke tests for careers list + locale switch + form role field
