import { describe, expect, it, vi, afterEach } from "vitest";
import { fetchChatReply, getChatApiUrl } from "@/lib/chat-api";

describe("chat-api", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("uses default Worker URL when env empty", () => {
    vi.stubEnv("NEXT_PUBLIC_CHAT_API_URL", "");
    expect(getChatApiUrl()).toContain("dolphin-chat");
  });

  it("returns reply JSON from Worker", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        Response.json({ reply: "Xin chào từ Dolphin" }),
      ),
    );
    const reply = await fetchChatReply([
      { role: "user", content: "hi" },
    ]);
    expect(reply).toBe("Xin chào từ Dolphin");
  });

  it("returns null on network failure", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => {
        throw new Error("offline");
      }),
    );
    const reply = await fetchChatReply([
      { role: "user", content: "hi" },
    ]);
    expect(reply).toBeNull();
  });
});
