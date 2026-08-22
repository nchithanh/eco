import { describe, expect, it } from "vitest";
import { getAiChatCopy, matchAiChatReply } from "@/lib/i18n/ai-chat-copy";

describe("matchAiChatReply follow-up examples", () => {
  const copy = getAiChatCopy("vi");

  it("returns Care example when recent turn was about Dolphin Care", () => {
    const reply = matchAiChatReply("cho ví dụ", copy, {
      recentTranscript:
        "user: dolphin care là gì\nassistant: Dolphin Care chăm sóc khách 24/7 trên website",
    });
    expect(reply).toBe(copy.exampleCare);
    expect(reply).toMatch(/Spa|Care/i);
  });

  it("returns Ops example when recent turn was about Dolphin Ops", () => {
    const reply = matchAiChatReply("cho ví dụ", copy, {
      recentTranscript:
        "user: dolphin ops là gì\nassistant: Dolphin Ops là Agent CRM, nói việc rồi mở đúng màn",
    });
    expect(reply).toBe(copy.exampleOps);
    expect(reply).toMatch(/Booking|Ops/i);
  });

  it("returns web example when recent turn was about website", () => {
    const reply = matchAiChatReply("cho ví dụ", copy, {
      recentTranscript: "user: cần website doanh nghiệp\nassistant: landing hoặc business",
    });
    expect(reply).toBe(copy.exampleWeb);
  });

  it("asks which topic when example request has no recent context", () => {
    expect(matchAiChatReply("cho ví dụ", copy)).toBe(copy.exampleGeneric);
  });
});
