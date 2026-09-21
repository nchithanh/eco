import type { Metadata } from "next";
import { AdminConsole } from "@/components/demos/AdminConsole";
import { buildPageMetadata } from "@/lib/seo";
import "./admin.css";

const path = "/demos/admin/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Dolphin Admin | Dolphin Software",
    description:
      "Dolphin Admin — Sale pipeline, Contracts (xem/in PDF), CRM / Analytics. Không index.",
    path,
    noIndex: true,
  }),
  title: { absolute: "Dolphin Admin | Dolphin Software" },
};

export default function DemosAdminPage() {
  return <AdminConsole />;
}
