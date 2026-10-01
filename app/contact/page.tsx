import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbListJsonLd,
  buildPageMetadata,
  contactPageJsonLd,
} from "@/lib/seo";

const path = "/contact/";
const title = "Liên hệ Dolphin Software | TP.HCM — Zalo · Email · Tư vấn";
const description =
  "Liên hệ Dolphin Software tại Hồ Chí Minh: Zalo, email support@dolphin-software.io.vn, hoặc để lại nhu cầu tư vấn CRM · Dolphin Care · Dolphin Ops cho doanh nghiệp dịch vụ.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title,
    description,
    path,
  }),
  title: { absolute: title },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        id="contact-page-jsonld"
        data={[
          contactPageJsonLd({ name: title, description }),
          breadcrumbListJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "Liên hệ", path },
          ]),
        ]}
      />
      <ContactPageContent />
    </>
  );
}
