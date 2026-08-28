import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { assetPath } from "@/lib/asset";
import { buildPageMetadata } from "@/lib/seo";

const canonical = "/demo/bao-gia-crm-nhay/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Báo giá CRM | Dolphin Software",
    description: "Redirect to /demo/bao-gia-crm-nhay/.",
    path: canonical,
    noIndex: true,
  }),
  title: { absolute: "Báo giá CRM | Dolphin Software" },
  robots: { index: false, follow: false },
};

export default function BaoGiaCrmNhayVaultRedirectPage() {
  permanentRedirect(assetPath(canonical));
}
