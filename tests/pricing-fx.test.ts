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

  it("formats project-type hint ranges", () => {
    expect(formatQuoteHintRange("vi", { min: 2, max: 10 })).toBe("~2–10 triệu");
    expect(formatQuoteHintRange("en", { min: 2, max: 10 })).toBe("~$76 – $380");
  });
});

describe("package display prices", () => {
  it("formats CRM Base 12 prepaid (COMBO_PACKAGES)", () => {
    expect(getPackageDisplayPrices("vi", "crm-base-12", "Từ").price).toBe(
      "5.400.000đ",
    );
  });

  it("formats CRM + Care 12 prepaid (COMBO_PACKAGES)", () => {
    expect(getPackageDisplayPrices("vi", "crm-care-12", "Từ").price).toBe(
      "16.200.000đ",
    );
  });
});
