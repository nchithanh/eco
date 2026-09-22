import { describe, expect, it, vi, afterEach } from "vitest";
import {
  DEFAULT_TURNSTILE_SITE_KEY,
  getTurnstileSiteKey,
} from "@/lib/turnstile";

describe("turnstile", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("uses default site key when env empty", () => {
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "");
    expect(getTurnstileSiteKey()).toBe(DEFAULT_TURNSTILE_SITE_KEY);
  });

  it("prefers env site key", () => {
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "0xTESTKEY");
    expect(getTurnstileSiteKey()).toBe("0xTESTKEY");
  });
});
