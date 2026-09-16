import { describe, expect, it } from "vitest";
import {
  formatQuoteEstimateRange,
  formatQuoteHintRange,
  getPackageDisplayPrices,
} from "@/lib/pricing-fx";

describe("quote FX formatting", () => {
  const sample = { min: 4.5, max: 10 };

  it("formats VND in Vietnamese millions", () => {
    expect(formatQuoteEstimateRange("vi", sample)).toBe("4,5 – 10 triệu VNĐ");
  });

  it("formats USD for English locale", () => {
    expect(formatQuoteEstimateRange("en", sample)).toBe("$171 – $380");
  });

  it("formats JPY for Japanese locale", () => {
    expect(formatQuoteEstimateRange("ja", sample)).toBe("￥28,000 – ￥62,100");
  });

  it("formats project-type hint ranges", () => {
    expect(formatQuoteHintRange("vi", { min: 2, max: 10 })).toBe("~2–10 triệu");
    expect(formatQuoteHintRange("en", { min: 2, max: 10 })).toBe("~$76 – $380");
  });
});

describe("package display prices", () => {
  it("formats landing fixed promo price (ONETIME_WEB)", () => {
    expect(getPackageDisplayPrices("vi", "landing", "Từ").price).toBe(
      "1.500.000đ",
    );
  });

  it("formats business website fixed list price (ONETIME_WEB)", () => {
    expect(getPackageDisplayPrices("vi", "business", "Từ").price).toBe(
      "4.500.000đ",
    );
  });
});
