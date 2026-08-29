# Frontend lives in another repo

Clone / push:

`git@github.com:nchithanh/dolphinOps.git`

```bash
GIT_SSH_COMMAND='ssh -i ~/.ssh/id_ed25519 -o IdentitiesOnly=yes' \
  git clone git@github.com:nchithanh/dolphinOps.git
```

Local checkout in this workspace (nested git): `frontend/`. **context/**, **documentations/**, **AGENTS.md**, **README.md** are tracked in `dolphinOps` and not gitignored from `eco`. App code (`app/`, `package.json`, …) stays in the private FE repo.
