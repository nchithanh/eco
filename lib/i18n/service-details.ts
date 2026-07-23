import type { Locale } from "./types";

export const SERVICE_SLUGS = [
  "web",
  "mobile",
  "backend",
  "design",
  "integrations",
  "agents",
] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export type ServiceDetail = {
  title: string;
  intro: string;
  highlights: string[];
  process: string[];
  deliverables: string[];
};

export type ServiceDetailUi = {
  back: string;
  highlightsTitle: string;
  processTitle: string;
  deliverablesTitle: string;
  cta: string;
  notFound: string;
};

const ui: Record<Locale, ServiceDetailUi> = {
  vi: {
    back: "← Về trang chủ",
    highlightsTitle: "Bạn nhận được gì",
    processTitle: "Cách chúng tôi làm",
    deliverablesTitle: "Bàn giao",
    cta: "Nhận báo giá",
    notFound: "Không tìm thấy dịch vụ này.",
  },
  en: {
    back: "← Back to home",
    highlightsTitle: "What you get",
    processTitle: "How we work",
    deliverablesTitle: "Deliverables",
    cta: "Get a quote",
    notFound: "This service was not found.",
  },
  ja: {
    back: "← ホームへ戻る",
    highlightsTitle: "得られるもの",
    processTitle: "進め方",
    deliverablesTitle: "納品物",
    cta: "見積もりを依頼",
    notFound: "このサービスは見つかりませんでした。",
  },
  de: {
    back: "← Zur Startseite",
    highlightsTitle: "Was Sie erhalten",
    processTitle: "So arbeiten wir",
    deliverablesTitle: "Lieferumfang",
    cta: "Angebot anfordern",
    notFound: "Dieser Service wurde nicht gefunden.",
  },
};

const vi: Record<ServiceSlug, ServiceDetail> = {
  web: {
    title: "Phát triển website theo yêu cầu",
    intro:
      "Từ landing nhanh đến corporate site và CMS — chúng tôi xây web rõ ràng về phạm vi, tốc độ ra mắt và khả năng mở rộng nội dung.",
    highlights: [
      "Landing / marketing site tối ưu chuyển đổi",
      "Corporate site đa ngôn ngữ khi cần",
      "CMS (Strapi / headless) để team tự cập nhật",
      "SEO kỹ thuật cơ bản và performance tốt",
    ],
    process: [
      "Khảo sát mục tiêu, sitemap và nội dung",
      "Thiết kế UI + review vòng ngắn",
      "Implement Next.js / React theo milestone",
      "QA, bàn giao và hướng dẫn vận hành",
    ],
    deliverables: [
      "Source code + deploy production",
      "Tài liệu cấu trúc nội dung / CMS",
      "Checklist launch và hỗ trợ hậu kỳ ngắn",
    ],
  },
  mobile: {
    title: "Phát triển mobile app",
    intro:
      "App iOS / Android hoặc cross-platform — ưu tiên trải nghiệm người dùng, ổn định release và tích hợp API rõ ràng.",
    highlights: [
      "Flutter hoặc React Native theo stack đội ngũ",
      "Navigation, auth và offline-friendly khi cần",
      "Tích hợp API / thanh toán / push notification",
      "Build pipeline và checklist store release",
    ],
    process: [
      "Định nghĩa user flow và MVP scope",
      "UI kit mobile + prototype chính",
      "Sprint phát triển với demo định kỳ",
      "Test thiết bị, UAT và hỗ trợ submit store",
    ],
    deliverables: [
      "App builds (TestFlight / internal track)",
      "Source + hướng dẫn chạy local",
      "Tài liệu API integration phía app",
    ],
  },
  backend: {
    title: "Backend & tích hợp hệ thống",
    intro:
      "API, auth, thanh toán và kết nối dịch vụ bên thứ ba — nền tảng vững để web/app scale mà không “vá” lung tung.",
    highlights: [
      "REST / API rõ contract và error handling",
      "Auth (JWT / session) và phân quyền",
      "Tích hợp payment, email, storage, webhook",
      "PostgreSQL + logging / monitoring cơ bản",
    ],
    process: [
      "Phân tích domain và biên hệ thống",
      "Thiết kế API + data model",
      "Implement theo module / sprint",
      "Test tích hợp, tài liệu và bàn giao ops",
    ],
    deliverables: [
      "Service backend deploy được",
      "OpenAPI / tài liệu endpoint",
      "Env sample + runbook ngắn",
    ],
  },
  design: {
    title: "UI/UX & bàn giao",
    intro:
      "Thiết kế giao diện và design system — để sản phẩm đẹp, nhất quán và đội engineering triển khai nhanh, ít đoán mò.",
    highlights: [
      "Research nhanh + user flow",
      "UI high-fidelity trên Figma",
      "Design system / component library",
      "Handover sạch: spacing, states, assets",
    ],
    process: [
      "Workshop yêu cầu và đối tượng dùng",
      "Wireframe → UI polish theo vòng feedback",
      "Chuẩn hóa token và component",
      "Handover + hỗ trợ trong giai đoạn build",
    ],
    deliverables: [
      "File Figma có tổ chức",
      "Specs / redlines cho key screens",
      "Export icon/assets và guideline ngắn",
    ],
  },
  integrations: {
    title: "Tích hợp dịch vụ bên thứ ba",
    intro:
      "Gắn thanh toán MoMo / ZaloPay / VNPay, Zalo OA, SMS, email và các API khác vào hệ thống hiện có — an toàn, rõ luồng, dễ vận hành.",
    highlights: [
      "Thanh toán: MoMo, ZaloPay, VNPay, Stripe…",
      "Zalo OA / Messaging / webhook realtime",
      "SMS, email, eKYC, logistics tùy nhu cầu",
      "Retry, idempotency, logging và đối soát",
    ],
    process: [
      "Audit hệ thống hiện tại và chọn cổng phù hợp",
      "Thiết kế luồng thanh toán / callback / hoàn tiền",
      "Implement + sandbox test với đối tác",
      "Go-live, monitoring và bàn giao ops",
    ],
    deliverables: [
      "Module tích hợp chạy trên staging/production",
      "Tài liệu luồng + env / credential checklist",
      "Runbook xử lý lỗi thanh toán / webhook",
    ],
  },
  agents: {
    title: "Hệ sinh thái agent cho business",
    intro:
      "Xây context theo nghiệp vụ doanh nghiệp, gắn MCP và tool nội bộ — để team vibe coding / AI workflow nhanh hơn, đúng domain hơn.",
    highlights: [
      "Business context / knowledge base cho agent",
      "Tích hợp MCP servers và tool nội bộ",
      "Workflow agent hỗ trợ coding, CS, ops",
      "Guardrails: quyền truy cập, audit, prompt policy",
    ],
    process: [
      "Map nghiệp vụ, nguồn dữ liệu và use-case agent",
      "Thiết kế context layer + MCP / tool connectors",
      "Prototype agent workflow và đánh giá chất lượng",
      "Hardening, tài liệu và bàn giao vận hành",
    ],
    deliverables: [
      "Agent / MCP stack chạy được theo môi trường",
      "Context pack theo business + guideline dùng",
      "Checklist bảo mật và mở rộng tool mới",
    ],
  },
};

const en: Record<ServiceSlug, ServiceDetail> = {
  web: {
    title: "Custom website development",
    intro:
      "From fast landings to corporate sites and CMS — clear scope, ship speed, and content that your team can own.",
    highlights: [
      "Conversion-minded landing / marketing sites",
      "Corporate sites with optional multi-language",
      "CMS (Strapi / headless) for self-serve updates",
      "Solid technical SEO and performance baselines",
    ],
    process: [
      "Discover goals, sitemap, and content model",
      "UI design with short review loops",
      "Build in Next.js / React by milestone",
      "QA, launch, and ops handover",
    ],
    deliverables: [
      "Source + production deploy",
      "CMS / content structure docs",
      "Launch checklist and short post-launch support",
    ],
  },
  mobile: {
    title: "Mobile app development",
    intro:
      "iOS / Android or cross-platform — UX first, stable releases, and clean API integration.",
    highlights: [
      "Flutter or React Native to match your stack",
      "Navigation, auth, offline-friendly patterns",
      "API / payments / push notifications",
      "Build pipeline and store-release checklist",
    ],
    process: [
      "Define flows and MVP scope",
      "Mobile UI kit + core prototype",
      "Sprint delivery with regular demos",
      "Device testing, UAT, store submit support",
    ],
    deliverables: [
      "App builds (TestFlight / internal track)",
      "Source + local run guide",
      "App-side API integration notes",
    ],
  },
  backend: {
    title: "Backend & system integration",
    intro:
      "APIs, auth, payments, and third-party connections — a foundation that scales without endless patches.",
    highlights: [
      "REST / APIs with clear contracts and errors",
      "Auth (JWT / session) and authorization",
      "Payments, email, storage, webhooks",
      "PostgreSQL plus basic logging / monitoring",
    ],
    process: [
      "Map domain boundaries and integrations",
      "Design API + data model",
      "Implement module by module",
      "Integration tests, docs, and ops handover",
    ],
    deliverables: [
      "Deployable backend services",
      "OpenAPI / endpoint documentation",
      "Env samples + short runbook",
    ],
  },
  design: {
    title: "UI/UX & handover",
    intro:
      "Interfaces and design systems — so the product looks consistent and engineering can ship without guessing.",
    highlights: [
      "Lightweight research + user flows",
      "High-fidelity UI in Figma",
      "Design system / component library",
      "Clean handover: spacing, states, assets",
    ],
    process: [
      "Workshop requirements and audiences",
      "Wireframes → polished UI with feedback loops",
      "Tokens and components standardization",
      "Handover and support during build",
    ],
    deliverables: [
      "Organized Figma file",
      "Specs / redlines for key screens",
      "Exported assets and a short guideline",
    ],
  },
  integrations: {
    title: "Third-party service integration",
    intro:
      "Wire MoMo / ZaloPay / VNPay, Zalo OA, SMS, email, and other APIs into your existing system — securely, with clear flows and operable runbooks.",
    highlights: [
      "Payments: MoMo, ZaloPay, VNPay, Stripe…",
      "Zalo OA / messaging / realtime webhooks",
      "SMS, email, eKYC, logistics as needed",
      "Retries, idempotency, logging, reconciliation",
    ],
    process: [
      "Audit your stack and pick the right providers",
      "Design payment / callback / refund flows",
      "Implement + sandbox test with partners",
      "Go-live, monitoring, and ops handover",
    ],
    deliverables: [
      "Integration modules on staging/production",
      "Flow docs + env / credential checklist",
      "Runbook for payment / webhook failures",
    ],
  },
  agents: {
    title: "Business agent ecosystem",
    intro:
      "Build business-aware context, MCP connectors, and internal tools — so your team can vibe-code and run AI workflows faster, on-domain.",
    highlights: [
      "Business context / knowledge base for agents",
      "MCP servers and internal tool integration",
      "Agent workflows for coding, CS, and ops",
      "Guardrails: access control, audit, prompt policy",
    ],
    process: [
      "Map business processes, data, and agent use-cases",
      "Design context layer + MCP / tool connectors",
      "Prototype workflows and evaluate quality",
      "Harden, document, and hand over operations",
    ],
    deliverables: [
      "Runnable agent / MCP stack per environment",
      "Business context pack + usage guideline",
      "Security checklist and path to add new tools",
    ],
  },
};

const ja: Record<ServiceSlug, ServiceDetail> = {
  web: {
    title: "オーダーメイドWebサイト開発",
    intro:
      "ランディングからコーポレート、CMSまで — 範囲・リリース速度・運用しやすさを明確にして作ります。",
    highlights: [
      "コンバージョンを意識したLP / マーケサイト",
      "必要に応じて多言語コーポレート",
      "CMS（Strapi / headless）で自社更新",
      "基本的な技術SEOとパフォーマンス",
    ],
    process: [
      "目的・サイトマップ・コンテンツ設計",
      "短いレビューサイクルでUI設計",
      "Next.js / Reactでマイルストーン実装",
      "QA、公開、運用引き継ぎ",
    ],
    deliverables: [
      "ソース + 本番デプロイ",
      "CMS / コンテンツ構成ドキュメント",
      "ローンチチェックリストと短期サポート",
    ],
  },
  mobile: {
    title: "モバイルアプリ開発",
    intro:
      "iOS / Android またはクロスプラットフォーム — UX・安定リリース・API連携を重視します。",
    highlights: [
      "Flutter / React Native を用途に合わせて選定",
      "ナビ、認証、必要ならオフライン対応",
      "API / 決済 / プッシュ通知",
      "ビルドパイプラインとストア申請チェック",
    ],
    process: [
      "ユーザーフローとMVP範囲の定義",
      "モバイルUIキット + 主要プロトタイプ",
      "スプリント開発と定期デモ",
      "実機テスト、UAT、ストア申請支援",
    ],
    deliverables: [
      "アプリビルド（TestFlight / 内部配信）",
      "ソース + ローカル起動手順",
      "アプリ側API連携メモ",
    ],
  },
  backend: {
    title: "バックエンド & システム連携",
    intro:
      "API、認証、決済、外部連携 — 場当たり的な継ぎ接ぎではなく、スケールできる基盤を作ります。",
    highlights: [
      "契約とエラーが明確なREST / API",
      "認証（JWT / session）と権限",
      "決済・メール・ストレージ・Webhook",
      "PostgreSQL + 基本ログ / 監視",
    ],
    process: [
      "ドメイン境界と連携の整理",
      "API + データモデル設計",
      "モジュール単位で実装",
      "結合テスト、ドキュメント、運用引き継ぎ",
    ],
    deliverables: [
      "デプロイ可能なバックエンド",
      "OpenAPI / エンドポイント文書",
      "環境変数サンプル + 短い運用手順",
    ],
  },
  design: {
    title: "UI/UX & 引き渡し",
    intro:
      "UIとデザインシステム — 見た目の一貫性と、開発が迷わないハンドオーバーを両立します。",
    highlights: [
      "軽量リサーチ + ユーザーフロー",
      "Figmaでの高精細UI",
      "デザインシステム / コンポーネント",
      "余白・状態・アセットまで整理した引き渡し",
    ],
    process: [
      "要件と対象ユーザーのワークショップ",
      "ワイヤー → UI磨き込み",
      "トークンとコンポーネント標準化",
      "引き渡しと実装フェーズの伴走",
    ],
    deliverables: [
      "整理されたFigmaファイル",
      "主要画面のスペック / レッドライン",
      "アセット書き出しと短いガイドライン",
    ],
  },
  integrations: {
    title: "外部サービス連携",
    intro:
      "MoMo / ZaloPay / VNPay、Zalo OA、SMS、メールなどを既存システムへ安全に接続 — フローを明確にし、運用しやすい形で実装します。",
    highlights: [
      "決済: MoMo、ZaloPay、VNPay、Stripe…",
      "Zalo OA / メッセージ / Webhook",
      "SMS・メール・eKYC・物流など必要に応じて",
      "リトライ、冪等、ログ、突合",
    ],
    process: [
      "現行システムの監査とプロバイダ選定",
      "決済 / コールバック / 返金フロー設計",
      "実装 + サンドボックステスト",
      "本番投入、監視、運用引き継ぎ",
    ],
    deliverables: [
      "ステージング / 本番で動く連携モジュール",
      "フロー文書 + 環境変数 / 認証チェックリスト",
      "決済 / Webhook障害のランブック",
    ],
  },
  agents: {
    title: "ビジネス向けエージェント生態系",
    intro:
      "業務コンテキスト、MCP、社内ツールを整え — チームがドメインに沿って vibe coding / AI ワークフローを速く回せる基盤を作ります。",
    highlights: [
      "業務コンテキスト / ナレッジベース",
      "MCPサーバーと社内ツール連携",
      "コーディング・CS・Ops向けエージェント",
      "ガードレール: 権限、監査、プロンプト方針",
    ],
    process: [
      "業務・データ・エージェント用途の整理",
      "コンテキスト層 + MCP / ツール設計",
      "ワークフロー試作と品質評価",
      "ハードニング、文書化、運用引き渡し",
    ],
    deliverables: [
      "環境ごとに動く agent / MCP スタック",
      "業務コンテキストパック + 利用ガイド",
      "セキュリティチェックとツール拡張手順",
    ],
  },
};

const de: Record<ServiceSlug, ServiceDetail> = {
  web: {
    title: "Individuelle Website-Entwicklung",
    intro:
      "Von schnellen Landings bis Corporate Sites und CMS — klarer Scope, Liefergeschwindigkeit und Inhalte, die Ihr Team selbst pflegen kann.",
    highlights: [
      "Conversion-orientierte Landing- / Marketing-Sites",
      "Corporate Sites optional mehrsprachig",
      "CMS (Strapi / headless) für Eigenpflege",
      "Solide technische SEO- und Performance-Basis",
    ],
    process: [
      "Ziele, Sitemap und Content-Modell klären",
      "UI-Design mit kurzen Review-Loops",
      "Umsetzung in Next.js / React nach Meilensteinen",
      "QA, Go-live und Ops-Übergabe",
    ],
    deliverables: [
      "Source + Production-Deploy",
      "CMS- / Content-Dokumentation",
      "Launch-Checklist und kurze Nachbetreuung",
    ],
  },
  mobile: {
    title: "Mobile-App-Entwicklung",
    intro:
      "iOS / Android oder Cross-Platform — UX zuerst, stabile Releases und saubere API-Anbindung.",
    highlights: [
      "Flutter oder React Native passend zum Stack",
      "Navigation, Auth, offline-freundliche Patterns",
      "API / Zahlungen / Push-Benachrichtigungen",
      "Build-Pipeline und Store-Release-Checklist",
    ],
    process: [
      "Flows und MVP-Scope definieren",
      "Mobile-UI-Kit + Kernprototyp",
      "Sprint-Lieferung mit regelmäßigen Demos",
      "Gerätetests, UAT, Store-Submit-Support",
    ],
    deliverables: [
      "App-Builds (TestFlight / Internal Track)",
      "Source + lokale Startanleitung",
      "API-Integrationsnotizen auf App-Seite",
    ],
  },
  backend: {
    title: "Backend & Systemintegration",
    intro:
      "APIs, Auth, Zahlungen und Drittanbieter — ein Fundament, das skaliert, statt endlos zu patchen.",
    highlights: [
      "REST / APIs mit klaren Contracts und Fehlern",
      "Auth (JWT / Session) und Berechtigungen",
      "Zahlungen, E-Mail, Storage, Webhooks",
      "PostgreSQL plus Basis-Logging / Monitoring",
    ],
    process: [
      "Domänengrenzen und Integrationen mapen",
      "API + Datenmodell entwerfen",
      "Modulweise implementieren",
      "Integrationstests, Doku und Ops-Übergabe",
    ],
    deliverables: [
      "Deploybare Backend-Services",
      "OpenAPI / Endpoint-Dokumentation",
      "Env-Samples + kurzes Runbook",
    ],
  },
  design: {
    title: "UI/UX & Übergabe",
    intro:
      "Interfaces und Design Systems — konsistent im Look, schnell umsetzbar für Engineering.",
    highlights: [
      "Leichte Research + User Flows",
      "High-Fidelity-UI in Figma",
      "Design System / Komponentenbibliothek",
      "Saubere Handover: Abstände, States, Assets",
    ],
    process: [
      "Workshop zu Anforderungen und Zielgruppen",
      "Wireframes → poliertes UI mit Feedback",
      "Tokens und Komponenten standardisieren",
      "Übergabe und Support in der Build-Phase",
    ],
    deliverables: [
      "Organisierte Figma-Datei",
      "Specs / Redlines für Schlüsselscreens",
      "Exportierte Assets und kurze Guideline",
    ],
  },
  integrations: {
    title: "Drittanbieter-Integration",
    intro:
      "MoMo / ZaloPay / VNPay, Zalo OA, SMS, E-Mail und weitere APIs sicher in Ihr bestehendes System einbinden — mit klaren Flows und betreibbaren Runbooks.",
    highlights: [
      "Zahlungen: MoMo, ZaloPay, VNPay, Stripe…",
      "Zalo OA / Messaging / Webhooks",
      "SMS, E-Mail, eKYC, Logistik nach Bedarf",
      "Retries, Idempotenz, Logging, Abstimmung",
    ],
    process: [
      "Bestands-Audit und Provider-Auswahl",
      "Zahlungs- / Callback- / Refund-Flows designen",
      "Umsetzung + Sandbox-Tests mit Partnern",
      "Go-live, Monitoring und Ops-Übergabe",
    ],
    deliverables: [
      "Integrationsmodule auf Staging/Production",
      "Flow-Doku + Env-/Credential-Checkliste",
      "Runbook für Zahlungs-/Webhook-Fehler",
    ],
  },
  agents: {
    title: "Agent-Ökosystem für Business",
    intro:
      "Business-Context, MCP-Connectoren und interne Tools aufbauen — damit Ihr Team schneller und domain-treu vibe-coden und AI-Workflows fahren kann.",
    highlights: [
      "Business-Context / Knowledge Base für Agents",
      "MCP-Server und interne Tool-Integration",
      "Agent-Workflows für Coding, CS und Ops",
      "Guardrails: Zugriffsrechte, Audit, Prompt-Policy",
    ],
    process: [
      "Prozesse, Daten und Agent-Use-Cases mappen",
      "Context-Layer + MCP-/Tool-Connectoren designen",
      "Workflows prototypen und Qualität bewerten",
      "Härten, dokumentieren und Betrieb übergeben",
    ],
    deliverables: [
      "Lauffähiger Agent-/MCP-Stack je Umgebung",
      "Business-Context-Pack + Nutzungsleitfaden",
      "Security-Checkliste und Pfad für neue Tools",
    ],
  },
};

const detailsByLocale: Record<Locale, Record<ServiceSlug, ServiceDetail>> = {
  vi,
  en,
  ja,
  de,
};

export function getServiceDetailUi(locale: Locale): ServiceDetailUi {
  return ui[locale];
}

export function getServiceDetail(
  locale: Locale,
  slug: ServiceSlug,
): ServiceDetail {
  return detailsByLocale[locale][slug];
}
