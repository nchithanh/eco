import { describe, expect, it } from "vitest";
import { brandLogoSrc, BRAND_LOGO_ORANGERED_SRC, BRAND_LOGO_SRC } from "@/lib/brand-logo";

describe("brandLogoSrc", () => {
  it("uses the violet mark by default", () => {
    expect(brandLogoSrc()).toBe(BRAND_LOGO_SRC);
    expect(brandLogoSrc("violet")).toBe("/brand/logo-dolphin.webp");
    expect(brandLogoSrc("slate")).toBe(BRAND_LOGO_SRC);
  });

  it("uses the orangered archive when that theme is selected", () => {
    expect(brandLogoSrc("orangered")).toBe(BRAND_LOGO_ORANGERED_SRC);
  });
});
