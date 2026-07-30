import type { Locale } from "@/lib/i18n/types";

export const MORE_SLUGS = ["architecture", "stock"] as const;

export type MoreSlug = (typeof MORE_SLUGS)[number];

export function isMoreSlug(value: string): value is MoreSlug {
  return (MORE_SLUGS as readonly string[]).includes(value);
}

export type MoreDetail = {
  title: string;
  tag: string;
  intro: string;
  highlights: string[];
  process: string[];
  notes: string[];
  image: string;
};

export type MoreDetailUi = {
  back: string;
  highlightsTitle: string;
  processTitle: string;
  notesTitle: string;
  cta: string;
};

const ui: Record<Locale, MoreDetailUi> = {
  vi: {
    back: "← Về trang chủ",
    highlightsTitle: "Phạm vi",
    processTitle: "Cách làm việc",
    notesTitle: "Lưu ý",
    cta: "Liên hệ tư vấn",
  },
  en: {
    back: "← Back to home",
    highlightsTitle: "Scope",
    processTitle: "How we work",
    notesTitle: "Notes",
    cta: "Talk to us",
  },
  ja: {
    back: "← ホームへ戻る",
    highlightsTitle: "範囲",
    processTitle: "進め方",
    notesTitle: "注意事項",
    cta: "相談する",
  },
  de: {
    back: "← Zurück zur Startseite",
    highlightsTitle: "Umfang",
    processTitle: "Ablauf",
    notesTitle: "Hinweise",
    cta: "Kontakt aufnehmen",
  },


  zh: {
    back: "← 返回首页",
    highlightsTitle: "范围",
    processTitle: "合作方式",
    notesTitle: "注意事项",
    cta: "联系咨询",
  }
};

/** Logical public paths — resolve with `themeAsset` at render. */
const images: Record<MoreSlug, string> = {
  architecture: "/service-architecture.jpg",
  stock: "/service-stock.jpg",
};

type MoreCopy = Omit<MoreDetail, "image">;

const copyByLocale: Record<Locale, Record<MoreSlug, MoreCopy>> = {
  vi: {
    architecture: {
      title: "Kiến trúc & hỗ trợ hệ thống",
      tag: "Ops",
      intro:
        "Khi hệ thống đang chạy nhưng chậm, lỗi, khó mở rộng hoặc thiếu người vận hành — Dolphin Software audit nhanh, đề xuất hướng khắc phục và hỗ trợ remote theo phiên.",
      highlights: [
        "Audit kiến trúc / hiệu năng / điểm nghẽn",
        "Phương án khắc phục theo mức ưu tiên (P0–P2)",
        "Hỗ trợ remote khi sự cố hoặc cần onboard vận hành",
        "Tài liệu ngắn: sơ đồ hiện trạng + bước tiếp theo",
      ],
      process: [
        "Thu thập symptom, log, sơ đồ hiện có (nếu có)",
        "Buổi discovery / screen-share để khoanh vùng",
        "Báo cáo ngắn + ước lượng effort",
        "Fix theo sprint nhỏ hoặc retainer hỗ trợ",
      ],
      notes: [
        "Phù hợp khi đã có hệ thống — không thay discovery sản phẩm mới.",
        "Có thể kết hợp với đội nội bộ của bạn; Dolphin Software không “chiếm” repo nếu bạn không muốn.",
      ],
    },
    stock: {
      title: "Cộng đồng đầu tư chứng khoán",
      tag: "Community",
      intro:
        "Hỗ trợ gắn ID / tham gia cộng đồng trao đổi. Miễn phí theo điều kiện. Đây không phải dịch vụ tư vấn đầu tư có giấy phép và không cam kết lợi nhuận.",
      highlights: [
        "Hướng dẫn gắn ID theo quy trình cộng đồng",
        "Kênh trao đổi / cập nhật theo nhóm",
        "Miễn phí khi đủ điều kiện tham gia",
        "Minh bạch: không bán “tip chắc thắng”",
      ],
      process: [
        "Liên hệ qua form / Zalo với nhu cầu gắn ID",
        "Xác nhận điều kiện miễn phí (nếu áp dụng)",
        "Nhận hướng dẫn tham gia cộng đồng",
        "Tự quyết định; không có tư vấn cá nhân hóa có phí ẩn",
      ],
      notes: [
        "Không phải tư vấn đầu tư được cấp phép.",
        "Không cam kết lợi nhuận; rủi ro thị trường thuộc về bạn.",
        "Thông tin mang tính chia sẻ cộng đồng, không phải khuyến nghị mua/bán.",
      ],
    },
  },
  en: {
    architecture: {
      title: "Architecture & system support",
      tag: "Ops",
      intro:
        "When a live system is slow, failing, hard to scale, or short on operators — Dolphin Software runs a focused audit, proposes fixes, and can support remotely by session.",
      highlights: [
        "Architecture / performance / bottleneck audit",
        "Remediation plan by priority (P0–P2)",
        "Remote support for incidents or ops onboarding",
        "Short write-up: current map + next steps",
      ],
      process: [
        "Collect symptoms, logs, existing diagrams",
        "Discovery / screen-share to narrow the issue",
        "Short report + effort estimate",
        "Fix in small sprints or support retainer",
      ],
      notes: [
        "Best for existing systems — not a greenfield product discovery.",
        "We can pair with your internal team; we won’t take over the repo unless you ask.",
      ],
    },
    stock: {
      title: "Securities investing community",
      tag: "Community",
      intro:
        "Help linking an ID / joining a discussion community. Free under conditions. This is not licensed investment advice and does not promise returns.",
      highlights: [
        "ID-linking guidance per community process",
        "Group discussion / update channel",
        "Free when eligibility conditions are met",
        "Transparent: no “sure-win tip” selling",
      ],
      process: [
        "Contact via form / Zalo with ID-link intent",
        "Confirm free-eligibility conditions (if any)",
        "Receive join instructions",
        "You decide; no hidden paid personal advisory",
      ],
      notes: [
        "Not licensed investment advice.",
        "No return guarantees; market risk is yours.",
        "Community sharing only — not buy/sell recommendations.",
      ],
    },
  },
  ja: {
    architecture: {
      title: "アーキテクチャ & システム支援",
      tag: "Ops",
      intro:
        "稼働中のシステムが遅い・不安定・拡張しづらい・運用人材が足りないとき、Dolphin Software が短時間で監査し、改善案を出し、リモート支援も可能です。",
      highlights: [
        "アーキテクチャ / 性能 / ボトルネック監査",
        "優先度付きの改善案（P0–P2）",
        "障害時や運用オンボーディングのリモート支援",
        "現状図 + 次の一手の短いドキュメント",
      ],
      process: [
        "症状・ログ・既存図の収集",
        "画面共有付きディスカバリーで切り分け",
        "短いレポートと工数見積もり",
        "小さなスプリントまたはリテーナー支援",
      ],
      notes: [
        "既存システム向け。新規プロダクトのゼロからの発見は別メニューです。",
        "社内チームと並走可能。希望がなければリポジトリを専有しません。",
      ],
    },
    stock: {
      title: "証券投資コミュニティ",
      tag: "Community",
      intro:
        "ID 連携 / コミュニティ参加のサポート。条件により無料。認可を受けた投資助言ではなく、利益を保証しません。",
      highlights: [
        "コミュニティ手順に沿った ID 連携案内",
        "グループでの情報交換 / 更新チャネル",
        "条件を満たせば無料",
        "「絶対儲かる」系の販売はしません",
      ],
      process: [
        "フォーム / Zalo で ID 連携の意向を連絡",
        "無料条件の確認（ある場合）",
        "参加手順を受け取る",
        "判断はご自身で。隠れた有料個別助言はありません",
      ],
      notes: [
        "認可を受けた投資助言ではありません。",
        "利益保証なし。市場リスクはご自身に帰属します。",
        "コミュニティ共有であり、売買推奨ではありません。",
      ],
    },
  },
  de: {
    architecture: {
      title: "Architektur- & Systemsupport",
      tag: "Ops",
      intro:
        "Wenn ein laufendes System langsam, fehleranfällig, schwer skalierbar oder ohne Ops-Kapazität ist — Dolphin Software auditiert fokussiert, schlägt Fixes vor und unterstützt remote nach Session.",
      highlights: [
        "Architektur- / Performance- / Bottleneck-Audit",
        "Remediation nach Priorität (P0–P2)",
        "Remote-Support bei Incidents oder Ops-Onboarding",
        "Kurzes Dokument: Ist-Map + nächste Schritte",
      ],
      process: [
        "Symptome, Logs, vorhandene Diagramme sammeln",
        "Discovery / Screenshare zur Eingrenzung",
        "Kurzer Report + Aufwandsschätzung",
        "Fix in kleinen Sprints oder Support-Retainer",
      ],
      notes: [
        "Für bestehende Systeme — kein Greenfield-Product-Discovery.",
        "Wir können mit Ihrem Intern-Team arbeiten; Repo-Übernahme nur auf Wunsch.",
      ],
    },
    stock: {
      title: "Wertpapier-Investment-Community",
      tag: "Community",
      intro:
        "Hilfe beim ID-Linking / Beitritt zu einer Diskussionscommunity. Unter Bedingungen kostenlos. Keine lizenzierte Anlageberatung und keine Renditeversprechen.",
      highlights: [
        "ID-Linking-Anleitung gemäß Community-Prozess",
        "Gruppenkanal für Austausch / Updates",
        "Kostenlos bei erfüllten Bedingungen",
        "Transparent: kein Verkauf von „sicheren Tipps“",
      ],
      process: [
        "Kontakt per Formular / Zalo mit ID-Link-Absicht",
        "Kostenlos-Bedingungen prüfen (falls vorhanden)",
        "Beitrittsanleitung erhalten",
        "Entscheidung liegt bei Ihnen; keine versteckte Personalberatung",
      ],
      notes: [
        "Keine lizenzierte Anlageberatung.",
        "Keine Renditegarantie; Marktrisiko trägt der Nutzer.",
        "Nur Community-Sharing — keine Kauf-/Verkaufsempfehlungen.",
      ],
    },
  },


  zh: {
    architecture: {
      title: "架构与系统支持",
      tag: "Ops",
      intro:
        "When a live system is slow, failing, hard to scale, or short on operators — Dolphin Software runs a focused audit, proposes fixes, and can support remotely by session.",
      highlights: [
        "Architecture / performance / bottleneck audit",
        "Remediation plan by priority (P0–P2)",
        "Remote support for incidents or ops onboarding",
        "Short write-up: current map + next steps",
      ],
      process: [
        "Collect symptoms, logs, existing diagrams",
        "Discovery / screen-share to narrow the issue",
        "Short report + effort estimate",
        "Fix in small sprints or support retainer",
      ],
      notes: [
        "Best for existing systems — not a greenfield product discovery.",
        "We can pair with your internal team; we won’t take over the repo unless you ask.",
      ],
    },
    stock: {
      title: "证券投资社区",
      tag: "Community",
      intro:
        "Help linking an ID / joining a discussion community. Free under conditions. This is not licensed investment advice and does not promise returns.",
      highlights: [
        "ID-linking guidance per community process",
        "Group discussion / update channel",
        "Free when eligibility conditions are met",
        "Transparent: no “sure-win tip” selling",
      ],
      process: [
        "Contact via form / Zalo with ID-link intent",
        "Confirm free-eligibility conditions (if any)",
        "Receive join instructions",
        "You decide; no hidden paid personal advisory",
      ],
      notes: [
        "Not licensed investment advice.",
        "No return guarantees; market risk is yours.",
        "Community sharing only — not buy/sell recommendations.",
      ],
    },
  }
};

export function getMoreDetail(locale: Locale, slug: MoreSlug): MoreDetail {
  return { ...copyByLocale[locale][slug], image: images[slug] };
}

export function getMoreDetailUi(locale: Locale): MoreDetailUi {
  return ui[locale];
}

export function getMoreImage(slug: MoreSlug): string {
  return images[slug];
}
