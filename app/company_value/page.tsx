import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { assetPath } from "@/lib/asset";
import { buildPageMetadata } from "@/lib/seo";

const canonical = "/schema/company/";

/** Legacy path — use /schema/company/. */
export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Company value — Dolphin Software",
    description: "Redirect to /schema/company/.",
    path: canonical,
    noIndex: true,
  }),
  title: { absolute: "Company value — Dolphin Software" },
  robots: { index: false, follow: false },
};

export default function CompanyValueRedirectPage() {
  permanentRedirect(assetPath(canonical));
}
