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
  it("formats landing fixed promo price", () => {
    expect(getPackageDisplayPrices("vi", "landing", "Từ").price).toBe(
      "1.500.000đ",
    );
  });

  it("formats business and shop as VND ranges", () => {
    expect(getPackageDisplayPrices("vi", "business", "Từ").price).toBe(
      "4.000.000đ – 10.000.000đ",
    );
    expect(getPackageDisplayPrices("vi", "shop", "Từ").price).toBe(
      "7.000.000đ – 15.000.000đ",
    );
  });

  it("keeps webapp from-prefix price", () => {
    expect(getPackageDisplayPrices("vi", "webapp", "Từ").price).toBe(
      "Từ 10.000.000đ",
    );
  });
});
