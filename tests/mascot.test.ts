import { describe, expect, it } from "vitest";
import { MASCOT, mascotSrc } from "@/lib/mascot";

describe("mascotSrc", () => {
  it("uses violet files by default", () => {
    expect(mascotSrc("eco")).toBe("/mascot/dolphin-eco.webp");
    expect(mascotSrc("chat")).toBe("/mascot/dolphin-chat.webp");
    expect(mascotSrc("contact")).toBe("/mascot/dolphin-contact.webp");
    expect(MASCOT.eco).toBe("/mascot/dolphin-eco.webp");
  });

  it("uses orangered archive files when that theme is selected", () => {
    expect(mascotSrc("eco", "orangered")).toBe(
      "/mascot/dolphin-eco-orangered.webp",
    );
  });
});
