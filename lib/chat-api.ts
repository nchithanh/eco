/**
 * Client → Cloudflare Worker (Groq proxy). Key stays on Worker secret only.
 * Default Free URL; override with NEXT_PUBLIC_CHAT_API_URL.
 */
export const DEFAULT_CHAT_API_URL =
  "https://dolphin-chat.nchithanh9999.workers.dev";

export type ChatApiMessage = {
  role: "user" | "assistant";
  content: string;
};

export function getChatApiUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_CHAT_API_URL?.trim();
  return (fromEnv || DEFAULT_CHAT_API_URL).replace(/\/$/, "");
}

export async function fetchChatReply(
  messages: ChatApiMessage[],
  signal?: AbortSignal,
): Promise<string | null> {
  const url = getChatApiUrl();
  if (!url) return null;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
      signal,
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { reply?: unknown };
    const reply = typeof data.reply === "string" ? data.reply.trim() : "";
    return reply || null;
  } catch {
    return null;
  }
}
