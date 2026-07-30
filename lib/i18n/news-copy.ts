import type { Locale } from "./types";
import type { NewsCategory } from "@/lib/news-details";

export type NewsCopy = {
  meta: { title: string; description: string };
  title: string;
  blurb: string;
  homeEyebrow: string;
  homeTitle: string;
  viewAll: string;
  homeSeeMore: string;
  filterAll: string;
  readMore: string;
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
    title: "Dolphin Kick — Tin tức & ghi chép",
    description:
      "Ghi chép thực tế về web, app, UX, quy trình và case từ studio Dolphin Kick.",
  },
  title: "Tin tức & ghi chép",
  blurb:
    "Bài ngắn về product, engineering và cách làm việc — không phải thông cáo báo chí.",
  homeEyebrow: "Ghi chép",
  homeTitle: "Ghi chép [[mới nhất]]",
  viewAll: "Xem tất cả",
  homeSeeMore: "Xem thêm",
  filterAll: "Tất cả",
  readMore: "Đọc tiếp",
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
    title: "Dolphin Kick — News & notes",
    description:
      "Practical notes on web, apps, UX, process, and cases from Dolphin Kick.",
  },
  title: "News & notes",
  blurb:
    "Product, engineering, how we work — short notes, not press releases.",
  homeEyebrow: "Notes",
  homeTitle: "[[Latest]] notes",
  viewAll: "View all notes",
  homeSeeMore: "See more",
  filterAll: "All",
  readMore: "Read more",
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
    title: "Dolphin Kick — ニュース＆メモ",
    description:
      "Dolphin Kick による Web / アプリ / UX / プロセス / ケースの実践メモ。",
  },
  title: "ニュース＆メモ",
  blurb:
    "プロダクト・技術・進め方の短い記事です。プレスリリースではありません。",
  homeEyebrow: "メモ",
  homeTitle: "[[最新]]のメモ",
  viewAll: "すべてのニュースを見る",
  homeSeeMore: "もっと見る",
  filterAll: "すべて",
  readMore: "続きを読む",
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

const de: NewsCopy = {
  meta: {
    title: "Dolphin Kick — News & Notizen",
    description:
      "Praxisnahe Notizen zu Web, Apps, UX, Prozess und Cases von Dolphin Kick.",
  },
  title: "News & Notizen",
  blurb:
    "Produkt, Technik, Arbeitsweise — kurze Notizen, keine Pressemitteilungen.",
  homeEyebrow: "Notizen",
  homeTitle: "[[Neueste]] Notizen",
  viewAll: "Alle Notizen",
  homeSeeMore: "Mehr anzeigen",
  filterAll: "Alle",
  readMore: "Weiterlesen",
  prevPage: "Vorherige Seite",
  nextPage: "Nächste Seite",
  relatedTitle: "Verwandt",
  cta: "Über ein Projekt sprechen?",
  breadcrumbHome: "Start",
  breadcrumbNews: "News",
  categories: {
    process: "Prozess",
    product: "Produkt",
    tech: "Technik",
    studio: "Studio",
    cases: "Cases",
  },
};

const zh: NewsCopy = {
  meta: {
    title: "Dolphin Kick — 新闻与笔记",
    description: "来自 Dolphin Kick 的 Web、应用、UX、流程与案例实践笔记。",
  },
  title: "新闻与笔记",
  blurb: "产品、工程与工作方式的短文——不是新闻稿。",
  homeEyebrow: "笔记",
  homeTitle: "[[最新]]笔记",
  viewAll: "查看全部笔记",
  homeSeeMore: "查看更多",
  filterAll: "全部",
  readMore: "阅读更多",
  prevPage: "上一页",
  nextPage: "下一页",
  relatedTitle: "相关文章",
  cta: "想聊聊项目吗？",
  breadcrumbHome: "首页",
  breadcrumbNews: "新闻",
  categories: {
    process: "流程",
    product: "产品",
    tech: "技术",
    studio: "工作室",
    cases: "案例",
  },
};

export const newsByLocale: Record<Locale, NewsCopy> = { vi, en, ja, de, zh };

export const newsNavLabel: Record<Locale, string> = {
  vi: "Tin tức",
  en: "News",
  ja: "ニュース",
  de: "News",
  zh: "新闻",
};
