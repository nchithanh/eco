/**
 * /faq/ hub — curated groups from existing SoT (no invented answers).
 * Homepage FAQ remains the long list; hub adds product/industry deep links.
 */

import { getAgentDolphinCopy } from "@/lib/i18n/agent-dolphin-copy";
import { getDolphinOpsCopy } from "@/lib/i18n/dolphin-ops-copy";
import { getFaqCopy } from "@/lib/i18n/faq-copy";
import { getIndustryPageCopy } from "@/lib/i18n/industries-copy";
import { getPosPageCopy } from "@/lib/i18n/pos-copy";
import type { IndustrySlug } from "@/lib/industries/catalog";
import type { PosSlug } from "@/lib/pos/catalog";

export type FaqHubGroup = {
  id: string;
  title: string;
  intro: string;
  href?: string;
  items: { q: string; a: string }[];
};

export type FaqHubCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  answerTitle: string;
  answerFirst: string;
  groups: FaqHubGroup[];
};

const INDUSTRY_PICK: IndustrySlug[] = [
  "spa",
  "salon",
  "clinic",
  "education",
];

const POS_PICK: PosSlug[] = ["cafe", "tra-sua", "pet", "fashion"];

export function getFaqHubCopy(): FaqHubCopy {
  const home = getFaqCopy("vi");
  const care = getAgentDolphinCopy("vi");
  const ops = getDolphinOpsCopy("vi");

  const industryGroups: FaqHubGroup[] = INDUSTRY_PICK.map((slug) => {
    const page = getIndustryPageCopy(slug);
    return {
      id: `industry-${slug}`,
      title: `CRM · ${page.label}`,
      intro: `Câu hỏi thường gặp cho ${page.label} (CRM dịch vụ). Chi tiết đầy đủ tại trang ngành.`,
      href: `/industries/${slug}/`,
      items: page.faq.slice(0, 3),
    };
  });

  const posGroups: FaqHubGroup[] = POS_PICK.map((slug) => {
    const page = getPosPageCopy(slug);
    return {
      id: `pos-${slug}`,
      title: `POS · ${page.label}`,
      intro: `Câu hỏi thường gặp cho ${page.label} (POS bán hàng). Chi tiết tại trang POS.`,
      href: `/pos/${slug}/`,
      items: page.faq.slice(0, 3),
    };
  });

  return {
    metaTitle:
      "FAQ Dolphin Software — CRM · POS · Care · Ops | Câu hỏi thường gặp",
    metaDescription:
      "Câu hỏi thường gặp về Dolphin Software: CRM dịch vụ, POS bán hàng, Dolphin Care, Dolphin Ops, website combo và báo giá. Trả lời ngắn, theo fact trên site.",
    h1: "Câu hỏi thường gặp về Dolphin Software",
    lead: "Gom câu hỏi khi tìm CRM dịch vụ, POS cửa hàng, AI chăm sóc khách hoặc website combo — trả lời ngắn, có link sang trang sản phẩm, ngành và POS.",
    answerTitle: "Dolphin Software là gì?",
    answerFirst:
      "Dolphin Software là công ty giải pháp công nghệ tại Việt Nam (TP.HCM), giúp doanh nghiệp tối ưu vận hành qua CRM (dịch vụ), POS (bán hàng), AI (Dolphin Care · Ops), website và tích hợp. Bắt đầu từ vấn đề vận hành — không từ buzzword sản phẩm.",
    groups: [
      {
        id: "general",
        title: "Chung về Dolphin",
        intro: "Định vị, báo giá, quy trình và bảo hành — cùng nguồn FAQ trang chủ.",
        href: "/#faq",
        items: home.items,
      },
      {
        id: "care",
        title: "Dolphin Care",
        intro: "AI chăm sóc khách trên website / Zalo / Messenger.",
        href: "/dolphin-care/",
        items: care.faqItems,
      },
      {
        id: "ops",
        title: "Dolphin Ops",
        intro: "Agent CRM — vận hành nội bộ trên CRM.",
        href: "/dolphin-ops/",
        items: ops.faqItems,
      },
      ...industryGroups,
      ...posGroups,
    ],
  };
}

/** Flatten unique Qs for FAQPage JSON-LD (cap size for crawlers). */
export function faqHubJsonLdItems(
  hub: FaqHubCopy,
  max = 40,
): { q: string; a: string }[] {
  const seen = new Set<string>();
  const out: { q: string; a: string }[] = [];
  for (const group of hub.groups) {
    for (const item of group.items) {
      const key = item.q.trim().toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(item);
      if (out.length >= max) return out;
    }
  }
  return out;
}
