import type { Metadata } from "next";
import { AdminConsole } from "@/components/demos/AdminConsole";
import { buildPageMetadata } from "@/lib/seo";
import "./admin.css";

const path = "/demos/admin/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Dolphin Admin | Dolphin Software",
    description:
      "Dolphin Admin — workspace Sale / CRM / Analytics. Sales pipeline B2B. Không index.",
    path,
    noIndex: true,
  }),
  title: { absolute: "Dolphin Admin | Dolphin Software" },
};

export default function DemosAdminPage() {
  return <AdminConsole />;
}
