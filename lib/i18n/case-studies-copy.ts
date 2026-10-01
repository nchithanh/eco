/**
 * /case-studies/ hub — portfolio evidence from existing works (no invented KPIs).
 * Detail pages remain canonical at /works/[slug]/.
 */

import {
  getWorkDetail,
  getWorkImage,
  WORK_SLUGS,
  type WorkSlug,
} from "@/lib/works-details";
import { SEO_LOCALE } from "@/lib/seo";

export type CaseStudyCard = {
  slug: WorkSlug;
  title: string;
  tag: string;
  summary: string;
  href: string;
  image: string;
};

export type CaseStudiesHubCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  answerTitle: string;
  answerFirst: string;
  listTitle: string;
  cardCta: string;
  noteTitle: string;
  noteBody: string;
  cards: CaseStudyCard[];
};

export function getCaseStudiesHubCopy(): CaseStudiesHubCopy {
  const cards: CaseStudyCard[] = WORK_SLUGS.map((slug) => {
    const detail = getWorkDetail(SEO_LOCALE, slug);
    return {
      slug,
      title: detail.title,
      tag: detail.tag,
      summary: detail.intro,
      href: `/works/${slug}/`,
      image: getWorkImage(slug),
    };
  });

  return {
    metaTitle:
      "Case studies & dự án SMB — Website · Booking · Ops | Dolphin Software",
    metaDescription:
      "Dự án SMB đã làm của Dolphin Software: bida, sân cầu, vé, beauty, cafe, clinic — mô tả bài toán và phạm vi thật, không KPI bịa. Chi tiết tại /works/.",
    h1: "Case studies và dự án SMB",
    lead: "Các bài toán vận hành đã dựng website / booking / ops cho doanh nghiệp dịch vụ. Mỗi card dẫn tới trang dự án chi tiết — chỉ nêu phạm vi và kết quả định tính đã ghi trên site.",
    answerTitle: "Dolphin có case study công khai không?",
    answerFirst:
      "Có — portfolio SMB dưới đây (website, đặt chỗ, ops quầy). Đây là bằng chứng định tính: bài toán, phạm vi, điểm nổi bật — không phải bảng ROI hay AggregateRating. Deal CRM/AI (ví dụ vận hành lớp nhảy) chỉ lên case công khai khi fact được phép đăng.",
    listTitle: "Dự án trên site",
    cardCta: "Xem dự án →",
    noteTitle: "Deal CRM / AI chưa công khai",
    noteBody:
      "Một số triển khai CRM · Care · Ops (kể cả studio nhảy) đang ở demo hoặc hợp đồng nội bộ. Không bịa số liệu; khi có case được duyệt sẽ bổ sung vào hub này và /industries/.",
    cards,
  };
}
