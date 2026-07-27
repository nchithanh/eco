import { describe, expect, it } from "vitest";
import { themeAsset } from "@/lib/asset";

describe("themeAsset", () => {
  it("uses slate pack for overridden paths when theme is slate", () => {
    expect(themeAsset("/capabilities/web.jpg", "slate")).toContain(
      "/themes/slate/",
    );
    expect(themeAsset("/capabilities/web.jpg", "slate")).toBe(
      "/themes/slate/capabilities/web.jpg",
    );
    expect(themeAsset("/services/web/hero.jpg", "slate")).toBe(
      "/themes/slate/services/web/hero.jpg",
    );
    expect(themeAsset("/works/billiard.jpg", "slate")).toBe(
      "/themes/slate/works/billiard.jpg",
    );
  });

  it("uses slate pack for contact-visual when theme is slate", () => {
    expect(themeAsset("/contact-visual.jpg", "slate")).toContain(
      "/themes/slate/",
    );
    expect(themeAsset("/contact-visual.jpg", "slate")).toBe(
      "/themes/slate/contact-visual.jpg",
    );
  });

  it("uses slate pack for ops-lifecycle when theme is slate", () => {
    expect(themeAsset("/ops-lifecycle.jpg", "slate")).toContain(
      "/themes/slate/",
    );
    expect(themeAsset("/ops-lifecycle.jpg", "slate")).toBe(
      "/themes/slate/ops-lifecycle.jpg",
    );
  });

  it("falls back to violet path for assets without slate overrides", () => {
    expect(themeAsset("/tech/react.jpg", "slate")).toBe("/tech/react.jpg");
  });

  it("uses non-themed path for ocean and violet", () => {
    expect(themeAsset("/capabilities/web.jpg", "ocean")).toBe(
      "/capabilities/web.jpg",
    );
    expect(themeAsset("/capabilities/web.jpg", "violet")).toBe(
      "/capabilities/web.jpg",
    );
    expect(themeAsset("/service-architecture.jpg", "ocean")).toBe(
      "/service-architecture.jpg",
    );
  });

  it("normalizes paths without a leading slash", () => {
    expect(themeAsset("capabilities/web.jpg", "slate")).toBe(
      "/themes/slate/capabilities/web.jpg",
    );
  });
});
