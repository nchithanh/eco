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

  it("explains Ops without mentioning Care", () => {
    const reply = matchAiChatReply("giải thích dolphin ops", copy);
    expect(reply).toBe(copy.explainOps);
    expect(reply).not.toMatch(/Care/i);
  });

  it("answers CRM follow-up on Ops without repeating Care", () => {
    const reply = matchAiChatReply("là crm nhỉ ?", copy, {
      recentTranscript:
        "user: giải thích dolphin ops\nassistant: Dolphin Ops là Agent CRM cho vận hành nội bộ",
    });
    expect(reply).toBe(copy.explainOpsCrm);
    expect(reply).not.toMatch(/Care/i);
    expect(reply).not.toBe(copy.explainOps);
  });

  it("deepens Ops on a detail follow-up instead of looping the intro", () => {
    const reply = matchAiChatReply("giải thích chi tiết dolphin ops", copy, {
      recentTranscript:
        "user: giải thích dolphin ops\nassistant: Dolphin Ops là Agent CRM",
    });
    expect(reply).toBe(copy.explainOpsDetail);
    expect(reply).not.toMatch(/Care/i);
    expect(reply).not.toBe(copy.explainOps);
  });
});
