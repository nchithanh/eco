import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { getServiceDetail } from "@/lib/i18n/service-details";
import { assetPath } from "@/lib/asset";
import { buildPageMetadata } from "@/lib/seo";

const detail = getServiceDetail("vi", "software");
const canonical = "/services/software/";
const redirectTo = assetPath(canonical);

/** Legacy /services/backend/ — prefer /services/software/. */
export const metadata: Metadata = {
  ...buildPageMetadata({
    title: detail.metaTitle ?? detail.title,
    description: detail.metaDescription ?? detail.intro,
    path: canonical,
    noIndex: true,
  }),
  title: { absolute: detail.metaTitle ?? detail.title },
  robots: { index: false, follow: true },
};

export default function Page() {
  permanentRedirect(redirectTo);
}
