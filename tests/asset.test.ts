import { afterEach, describe, expect, it, vi } from "vitest";

describe("routePath", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("returns path unchanged when base path is empty", async () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "");
    vi.resetModules();
    const { routePath } = await import("@/lib/asset");
    expect(routePath("/custom-agent/")).toBe("/custom-agent/");
  });

  it("strips duplicate base path prefix for Next.js Link", async () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "/eco");
    vi.resetModules();
    const { routePath } = await import("@/lib/asset");
    expect(routePath("/custom-agent/")).toBe("/custom-agent/");
    expect(routePath("/eco/custom-agent/")).toBe("/custom-agent/");
  });
});

describe("assetPath", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("prefixes base path for plain anchors and static assets", async () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "/eco");
    vi.resetModules();
    const { assetPath } = await import("@/lib/asset");
    expect(assetPath("/custom-agent/")).toBe("/eco/custom-agent/");
  });
});
