import { describe, expect, it } from "vitest";
import {
  buildSchemaExportBundle,
  listSchemaBrowseEntries,
} from "@/lib/schema/entries";

describe("schema browse entries", () => {
  it("lists company, company-profile, homepage, services, agents", () => {
    const entries = listSchemaBrowseEntries();
    expect(entries.some((e) => e.id === "company")).toBe(true);
    expect(entries.some((e) => e.id === "company-profile")).toBe(true);
    expect(entries.some((e) => e.group === "homepage")).toBe(true);
    expect(entries.some((e) => e.group === "services")).toBe(true);
    expect(entries.some((e) => e.group === "agents")).toBe(true);
    expect(entries.length).toBeGreaterThanOrEqual(30);
  });

  it("export bundle keys by rawPath", () => {
    const bundle = buildSchemaExportBundle();
    expect(bundle["/schema/company.json"]).toBeTruthy();
    expect(bundle["/schema/company-profile.json"]).toBeTruthy();
    expect(bundle["/schema/homepage/hero.json"]).toBeTruthy();
  });
});
