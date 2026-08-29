# Dolphin Ops — SaaS app

Agent CRM for internal operations (pillar **Automate**).  
This folder is the **app**. The marketing page stays at repo-root `/dolphin-ops/`.

| | |
| --- | --- |
| Host (planned) | `https://dolphin-ops.dolphin-software.io.vn` |
| Frontend | [`nchithanh/dolphinOps`](https://github.com/nchithanh/dolphinOps) (`git@github.com:nchithanh/dolphinOps.git`) — local `frontend/` (nested git, ignored by `eco`) |
| Backend | [`nchithanh/dolphinOpsBackend`](https://github.com/nchithanh/dolphinOpsBackend) (`git@github.com:nchithanh/dolphinOpsBackend.git`) — local `backend/` (nested git) |
| Agent SoT | `context/` + this `AGENTS.md` |

Status: **scaffold**. Health only. No live Agent runtime, no tenant auth, no Booking API yet.

## Commands

```bash
cd frontend && npm run dev     # :3010
cd backend && go run ./cmd/api # :8080
```

DNS / custom domain on Cloudflare: **TODO** (not pointed yet).
