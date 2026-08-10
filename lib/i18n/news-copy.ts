import type { Locale } from "./types";
import type { NewsCategory } from "@/lib/news-details";

export type NewsCopy = {
  meta: { title: string; description: string };
  title: string;
  blurb: string;
  pageEyebrow: string;
  featuredLabel: string;
  homeEyebrow: string;
  homeTitle: string;
  homeCarouselEyebrow: string;
  homeCarouselTitle: string;
  homeCarouselSupport: string;
  viewAll: string;
  filterAll: string;
  readMore: string;
  readMinutes: string;
  prevPage: string;
  nextPage: string;
  relatedTitle: string;
  cta: string;
  breadcrumbHome: string;
  breadcrumbNews: string;
  categories: Record<NewsCategory, string>;
  emptyState: string;
};

const vi: NewsCopy = {
  meta: {
    title: "Dolphin Software — Tin tức & ghi chép",
    description:
      "Ghi chép thực tế về web, app, UX, quy trình và case từ studio Dolphin Software.",
  },
  title: "Tin tức & ghi chép",
  blurb:
    "Bài ngắn về product, engineering và cách làm việc — không phải thông cáo báo chí.",
  pageEyebrow: "News & notes",
  featuredLabel: "Nổi bật",
  homeEyebrow: "Notes",
  homeTitle: "Ghi chép [[mới nhất]]",
  homeCarouselEyebrow: "News & updates",
  homeCarouselTitle: "Cập nhật [[đáng theo dõi]]",
  homeCarouselSupport:
    "Theo dõi thay đổi mới — từ sản phẩm, kỹ thuật đến cách làm việc của team.",
  viewAll: "Xem đầy đủ",
  filterAll: "Tất cả",
  readMore: "Đọc tiếp",
  readMinutes: "{n} phút đọc",
  prevPage: "Trang trước",
  nextPage: "Trang sau",
  relatedTitle: "Bài liên quan",
  cta: "Muốn trao đổi về dự án?",
  breadcrumbHome: "Trang chủ",
  breadcrumbNews: "Tin tức",
  categories: {
    process: "Quy trình",
    product: "Sản phẩm",
    tech: "Kỹ thuật",
    studio: "Studio",
    cases: "Case",
  },
  emptyState: "Chưa có bài viết. Nội dung mới sẽ được đăng tại đây.",
};

const en: NewsCopy = {
  meta: {
    title: "Dolphin Software — News & notes",
    description:
      "Practical notes on web, apps, UX, process, and cases from Dolphin Software.",
  },
  title: "News & notes",
  blurb:
    "Product, engineering, how we work — short notes, not press releases.",
  pageEyebrow: "News & notes",
  featuredLabel: "Featured",
  homeEyebrow: "Notes",
  homeTitle: "[[Latest]] notes",
  homeCarouselEyebrow: "News & updates",
  homeCarouselTitle: "Updates [[worth watching]]",
  homeCarouselSupport:
    "Follow the latest changes — from products and engineering to how we work.",
  viewAll: "View full",
  filterAll: "All",
  readMore: "Read more",
  readMinutes: "{n} min read",
  prevPage: "Previous page",
  nextPage: "Next page",
  relatedTitle: "Related",
  cta: "Want to talk about a project?",
  breadcrumbHome: "Home",
  breadcrumbNews: "News",
  categories: {
    process: "Process",
    product: "Product",
    tech: "Tech",
    studio: "Studio",
    cases: "Cases",
  },
  emptyState: "No posts yet. New articles will appear here.",
};

const ja: NewsCopy = {
  meta: {
    title: "Dolphin Software — ニュース＆メモ",
    description:
      "Dolphin Software による Web / アプリ / UX / プロセス / ケースの実践メモ。",
  },
  title: "ニュース＆メモ",
  blurb:
    "プロダクト・技術・進め方の短い記事です。プレスリリースではありません。",
  pageEyebrow: "News & notes",
  featuredLabel: "注目",
  homeEyebrow: "Notes",
  homeTitle: "[[最新]]のメモ",
  homeCarouselEyebrow: "News & updates",
  homeCarouselTitle: "[[注目]]のアップデート",
  homeCarouselSupport:
    "プロダクト・技術・進め方の最新情報をチェック。",
  viewAll: "すべて見る",
  filterAll: "すべて",
  readMore: "続きを読む",
  readMinutes: "約{n}分",
  prevPage: "前のページ",
  nextPage: "次のページ",
  relatedTitle: "関連記事",
  cta: "プロジェクトについて話しませんか？",
  breadcrumbHome: "ホーム",
  breadcrumbNews: "ニュース",
  categories: {
    process: "プロセス",
    product: "プロダクト",
    tech: "技術",
    studio: "スタジオ",
    cases: "ケース",
  },
  emptyState: "まだ記事がありません。新しい記事はここに掲載されます。",
};



export const newsByLocale: Record<Locale, NewsCopy> = { vi, en, ja };

export const newsNavLabel: Record<Locale, string> = {
  vi: "Tin tức",
  en: "News",
  ja: "ニュース",
};
