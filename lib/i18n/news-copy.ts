import type { Locale } from "./types";
import type { NewsCategory } from "@/lib/news-details";

export type NewsCopy = {
  meta: { title: string; description: string };
  title: string;
  blurb: string;
  homeEyebrow: string;
  homeTitle: string;
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
  homeEyebrow: "Ghi chép",
  homeTitle: "Ghi chép [[mới nhất]]",
  viewAll: "Xem tất cả",
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
  homeEyebrow: "Notes",
  homeTitle: "[[Latest]] notes",
  viewAll: "View all notes",
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
  homeEyebrow: "メモ",
  homeTitle: "[[最新]]のメモ",
  viewAll: "すべてのニュースを見る",
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
};



export const newsByLocale: Record<Locale, NewsCopy> = { vi, en, ja };

export const newsNavLabel: Record<Locale, string> = {
  vi: "Tin tức",
  en: "News",
  ja: "ニュース",
};
