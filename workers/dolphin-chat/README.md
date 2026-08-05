# dolphin-chat (Cloudflare Worker Free)

Proxy Groq for site chat. **No paid Workers plan.** Key never in the Next.js client.

## Files

| File | Role |
| --- | --- |
| `system-context.js` | **SoT** system prompt (company / services / Care / AI) |
| `worker.js` | Runtime (imports context) |
| `paste-for-dashboard.js` | **1 file** để Ctrl+A paste vào Cloudflare Quick Edit |

Sau khi sửa context: chạy lại generate (xem dưới) rồi Deploy trên dashboard.

```bash
cd workers/dolphin-chat && node --input-type=module -e '
import { readFileSync, writeFileSync } from "fs";
import { SYSTEM } from "./system-context.js";
const worker = readFileSync("./worker.js","utf8");
const body = worker.replace(/^[\s\S]*?^import \{ SYSTEM \} from "\.\/system-context\.js";\s*/m, "").replace(/^\/\*\*[\s\S]*?\*\/\n/m, "");
writeFileSync("./paste-for-dashboard.js", `/**\n * SINGLE-FILE paste for Cloudflare Quick Edit (dolphin-chat).\n * Generated — regenerate after system-context.js changes.\n */\nconst SYSTEM = ${JSON.stringify(SYSTEM)};\n\n${body.trim()}\n`);
console.log("ok");
'
```

## Dashboard

1. Worker `dolphin-chat` → **Edit code** → paste **`paste-for-dashboard.js`** → **Deploy**
2. **Settings → Variables** → `GROQ_API_KEY` kiểu **Secret** (không Plaintext)
3. URL: `https://dolphin-chat.nchithanh9999.workers.dev`

## Test

```bash
curl -sS -X POST 'https://dolphin-chat.nchithanh9999.workers.dev' \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://dolphin-software.io.vn' \
  -d '{"messages":[{"role":"user","content":"Dolphin Care là gì?"}]}'
```

## Site

`NEXT_PUBLIC_CHAT_API_URL` (optional). Client: `lib/chat-api.ts` + `AiChatWidget`. Fallback: `matchAiChatReply`.
