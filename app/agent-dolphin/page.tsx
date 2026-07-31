import type { Metadata } from "next";
import { AgentDolphinPage } from "@/components/AgentDolphinContent";
import { getAgentDolphinCopy } from "@/lib/i18n/agent-dolphin-copy";
import { assetPath } from "@/lib/asset";
import { buildPageMetadata } from "@/lib/seo";

const c = getAgentDolphinCopy("vi");
const canonical = "/dolphin-care/";
const redirectTo = assetPath(canonical);

/** Legacy slug — keep for bookmarks; prefer /dolphin-care/. */
export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: canonical,
    image: "/og-dolphin-care.png",
    imageAlt: "Dolphin Care — AI chăm sóc khách trên website",
    noIndex: true,
  }),
  title: { absolute: c.metaTitle },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(redirectTo)});`,
        }}
      />
      <AgentDolphinPage />
    </>
  );
}
