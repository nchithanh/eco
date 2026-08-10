---
description: Use GitHub account nchithanh for all git remote/SSH operations
---

# GitHub identity: nchithanh

For this machine and this repo, **always use GitHub user `nchithanh`**. Never use `nghianhdev` / `nghianh`.

## When pushing / fetching

Default SSH may authenticate as `nghianhdev` and fail on `nchithanh/*` repos.

Use:

```bash
GIT_SSH_COMMAND='ssh -i ~/.ssh/id_ed25519 -o IdentitiesOnly=yes' git push -u origin HEAD:main
```

Verify identity:

```bash
ssh -T -o IdentitiesOnly=yes -i ~/.ssh/id_ed25519 git@github.com
# expect: Hi nchithanh!
```

## Do / Don't

- ✅ Remotes under `github.com:nchithanh/...` or `https://github.com/nchithanh/...`
- ✅ SSH key: `~/.ssh/id_ed25519` (maps to `nchithanh`)
- ❌ Do not push with the default key that resolves to `nghianhdev`
- ❌ Do not assume `~/.ssh/config` Host `github.com` → `id_rsa_thanhnc_window` is correct for this account

## Optional lasting fix (ask user before editing)

Point `~/.ssh/config` `Host github.com` to:

```
IdentityFile ~/.ssh/id_ed25519
IdentitiesOnly yes
```
