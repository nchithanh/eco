---
description: Bump cookie consent revision on every commit, push, or Pages build
---

# Cookie consent revision bump

Khi **commit**, **push**, hoặc **build** (Pages / `GITHUB_PAGES=true npm run build`) cho site Dolphin, **luôn bump** mã cookie consent trong cùng task — để máy đã accept trước đó thấy key mới và **mở lại popup cookie**.

## Source of truth

- File: `lib/cookie-consent.ts`
- Field: `COOKIE_CONSENT_REVISION` (string)
- Keys derived: `COOKIE_CONSENT_STORAGE_KEY`, `COOKIE_CONSENT_COOKIE_NAME`

## Do

1. Đổi `COOKIE_CONSENT_REVISION` sang giá trị **mới, khác lần trước** (vd. `YYYYMMDD` + chữ cái: `20260805c`, hoặc timestamp ngắn).
2. Include file đó trong cùng commit với phần còn lại (không để sót sau push).
3. Nếu user chỉ bảo “build” local / deploy mà không commit riêng — vẫn bump trước khi build nếu artifact sẽ lên server.
4. Nhắc trong plan (confirm-before-acting) khi task có commit/push/build: “bump cookie consent revision”.

## Do not

- Không dùng lại revision cũ.
- Không hardcode key `kuct-cookie-consent` cố định trong `CookieConsent.tsx`.
- Không bỏ qua bump vì “chỉ đổi CSS” — mọi ship lên production đều bump.
- Không xóa localStorage/cookie của user bằng script ngoài; chỉ đổi revision là đủ.

## Confirm-before-acting

Vẫn chờ **`ok`** trước khi mutate. Đưa bước bump vào plan khi có commit/push/build.
