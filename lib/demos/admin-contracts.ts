/** Demo contract catalog for Dolphin Admin → Contracts workspace. */

export type AdminContractStatus = "draft" | "ready" | "signed";

export type AdminContract = {
  id: string;
  slug: string;
  titleVi: string;
  titleEn: string;
  client: string;
  status: AdminContractStatus;
  signedAt: string | null;
  /** Absolute app path (use with assetPath for <a href>). */
  href: string;
};

export const ADMIN_CONTRACTS: readonly AdminContract[] = [
  {
    id: "hop-dong-ma",
    slug: "hop-dong-ma",
    titleVi: "Hợp đồng dịch vụ phần mềm — MA Dance",
    titleEn: "Software services agreement — MA Dance",
    client: "MA Dance Studio",
    status: "ready",
    signedAt: null,
    href: "/demos/admin/contract/hop-dong-ma/",
  },
] as const;

export function contractTitle(
  c: AdminContract,
  locale: "vi" | "en",
): string {
  return locale === "en" ? c.titleEn : c.titleVi;
}
