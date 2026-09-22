import { describe, expect, it } from "vitest";
import { CHAT_REPLY_CHUNK_MAX, splitChatReply } from "@/lib/split-chat-reply";

describe("splitChatReply", () => {
  it("returns single chunk when short", () => {
    expect(splitChatReply("Xin chào!")).toEqual(["Xin chào!"]);
  });

  it("splits on blank paragraphs", () => {
    const a = "A".repeat(120);
    const b = "B".repeat(120);
    expect(splitChatReply(`${a}\n\n${b}`, 150)).toEqual([a, b]);
  });

  it("packs short sentences under max", () => {
    const chunks = splitChatReply(
      "Câu một khá dài đây. Câu hai cũng dài tương tự. Câu ba tiếp theo. Câu bốn kết thúc.",
      40,
    );
    expect(chunks.length).toBeGreaterThan(1);
    for (const c of chunks) {
      expect(Array.from(c).length).toBeLessThanOrEqual(40);
    }
  });

  it("never exceeds maxChars (except empty)", () => {
    const long = `${"Dolphin Care giúp vận hành. ".repeat(40)}\n\n${"CRM theo ngành spa nail. ".repeat(30)}`;
    const chunks = splitChatReply(long);
    expect(chunks.length).toBeGreaterThan(1);
    for (const c of chunks) {
      expect(Array.from(c).length).toBeLessThanOrEqual(CHAT_REPLY_CHUNK_MAX);
    }
    expect(chunks.join(" ").replace(/\s+/g, " ")).toContain("Dolphin Care");
  });
});
