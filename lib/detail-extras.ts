import { themeAsset } from "@/lib/asset";
import type { Locale } from "@/lib/i18n/types";
import type { ServiceSlug } from "@/lib/i18n/service-details";
import type { TechSlug } from "@/lib/tech-stack";
import type { ThemeId } from "@/lib/theme";
import type { WorkSlug } from "@/lib/works-details";

export function serviceHero(slug: ServiceSlug, theme: ThemeId) {
  return themeAsset(`/services/${slug}/hero.jpg`, theme);
}
export function techHero(slug: TechSlug, theme: ThemeId) {
  return themeAsset(`/tech/${slug}.jpg`, theme);
}

export type FaqItem = { q: string; a: string };

export type ServiceExtras = {
  audience: string;
  useCases: string[];
  faq: FaqItem[];
};

export type TechExtras = {
  whenToUse: string[];
  stackFit: string;
};

export type WorkExtras = {
  timeline: string;
  stack: string[];
};

type L<T> = Record<Locale, Record<string, T>>;

const serviceExtras: L<ServiceExtras> = {
  vi: {
    web: {
      audience:
        "Doanh nghiệp vừa và nhỏ (SMB), startup, và đội marketing cần website hoàn chỉnh, bàn giao đúng hạn và dễ báo giá.",
      useCases: [
        "Landing page cho chiến dịch quảng cáo hoặc ra mắt sản phẩm mới",
        "Website doanh nghiệp với CMS để tự quản lý nội dung",
        "Website đa ngôn ngữ hỗ trợ VI / EN / JA cho doanh nghiệp hướng xuất khẩu hoặc khách quốc tế",
      ],
      faq: [
        {
          q: "Thiết kế website theo yêu cầu giá bao nhiêu?",
          a: "Giá phụ thuộc vào phạm vi: số trang, thiết kế tùy chỉnh hay dùng template, có CMS không, và các tích hợp như form hoặc thanh toán. Gói khởi điểm từ $38 (landing page) đến $380 (e-commerce). Báo giá chính xác được cung cấp sau khi xác nhận mục tiêu.",
        },
        {
          q: "Làm website doanh nghiệp mất bao lâu?",
          a: "Landing page thường hoàn thành trong 3–5 ngày làm việc. Website doanh nghiệp đa trang mất 7–14 ngày. Website e-commerce mất 3–4 tuần. Thời gian thực tế phụ thuộc vào mức độ phản hồi nội dung và review từ phía khách hàng.",
        },
        {
          q: "Tôi có thể tự cập nhật nội dung website sau khi bàn giao không?",
          a: "Có. Các gói Business Website trở lên bao gồm CMS headless (Strapi), cho phép đội ngũ của bạn tự thêm, sửa, xóa nội dung mà không cần lập trình viên.",
        },
        {
          q: "Dịch vụ có bao gồm SEO không?",
          a: "Tất cả các gói đều bao gồm SEO kỹ thuật nền tảng: meta tags, tối ưu tốc độ, mobile-friendly, sitemap và robots.txt. Chiến lược từ khóa và xây dựng backlink là dịch vụ bổ sung nếu bạn muốn tăng trưởng organic dài hạn.",
        },
        {
          q: "Dolphin Software có làm website đa ngôn ngữ không?",
          a: "Có. Dolphin Software hỗ trợ xây dựng website đa ngôn ngữ (Tiếng Việt / Tiếng Anh / Tiếng Nhật), phù hợp cho doanh nghiệp có khách hàng hoặc đối tác quốc tế.",
        },
        {
          q: "Tôi đang dùng website cũ — Dolphin Software có hỗ trợ nâng cấp hệ thống cũ không?",
          a: "Có. Dolphin Software đánh giá hệ thống hiện tại và đề xuất phương án nâng cấp phù hợp — từ cải thiện hiệu năng đến tái cấu trúc toàn bộ stack kỹ thuật. Liên hệ để được phân tích giải pháp miễn phí.",
        },
        {
          q: "Dolphin Software có tích hợp AI automation vào website không?",
          a: "Có. Với định vị là studio phát triển phần mềm và AI, Dolphin Software có thể tích hợp các tính năng AI automation — như chatbot, xử lý đơn hàng tự động, hoặc phân tích dữ liệu — vào website doanh nghiệp theo yêu cầu.",
        },
      ],
    },
    mobile: {
      audience:
        "Dịch vụ phát triển app của Dolphin Software phù hợp nhất cho product team đang ship MVP iOS/Android hoặc cross-platform — SMB và startup Việt Nam cần app thương mại hoặc vận hành nội bộ; product team có sẵn web muốn mở rộng sang mobile; doanh nghiệp cần app companion tích hợp backend hiện có.",
      useCases: [
        "Startup booking cần app consumer nhanh → MVP cross-platform Flutter + API đặt lịch/thanh toán → lên store trong 8–12 tuần, sẵn sàng beta",
        "Chuỗi bán lẻ cần app vận hành nội bộ → Android companion nối POS/ERP qua REST API → giảm thao tác thủ công, đồng bộ dữ liệu real-time",
        "SaaS / web platform muốn mobile companion → React Native tái sử dụng backend hiện có → ra mắt mobile channel không build lại backend",
      ],
      faq: [
        {
          q: "Flutter hay React Native — nên chọn cái nào?",
          a: "Dolphin Software chọn framework dựa trên stack hiện tại của team bạn và yêu cầu native trước khi bắt đầu dự án. Flutter phù hợp hơn khi cần UI tùy biến cao và hiệu năng đồng nhất trên cả hai platform; React Native phù hợp hơn khi team đã quen với JavaScript/TypeScript hoặc cần tích hợp sâu với module native.",
        },
        {
          q: "Dolphin Software có hỗ trợ submit lên App Store và Google Play không?",
          a: "Có. Dolphin Software cung cấp checklist đầy đủ cho TestFlight và Play internal track, hỗ trợ bạn trong toàn bộ quá trình submit — bao gồm cả xử lý feedback từ Apple/Google nếu cần review lại.",
        },
        {
          q: "Thời gian phát triển một app MVP thường mất bao lâu?",
          a: "Thông thường từ 8 đến 14 tuần tùy phạm vi, sau khi xác định xong luồng và MVP scope ở sprint đầu. Dolphin Software sẽ cung cấp timeline cụ thể sau buổi trao đổi yêu cầu ban đầu — không ước lượng chung chung.",
        },
        {
          q: "Chi phí làm app iOS/Android với Dolphin Software là bao nhiêu?",
          a: "Dolphin Software báo giá theo phạm vi dự án cụ thể, không có gói cố định áp cho mọi trường hợp. Sau buổi trao đổi yêu cầu, bạn nhận được báo giá rõ ràng — không phí ẩn, không bán thêm dịch vụ không cần thiết.",
        },
        {
          q: "App sau khi bàn giao có được hỗ trợ tiếp không?",
          a: "Có. Dolphin Software cung cấp hỗ trợ sau bàn giao cho các lỗi phát sinh sau khi launch. Nếu bạn cần nâng cấp tính năng hoặc mở rộng app, Dolphin Software có thể tiếp tục theo hình thức retainer hoặc dự án riêng.",
        },
        {
          q: "Dolphin Software có thể tích hợp AI vào ứng dụng di động không?",
          a: "Có. Với định vị là studio phát triển phần mềm và AI cho doanh nghiệp, Dolphin Software có thể tích hợp chatbot, xử lý ngôn ngữ tự nhiên, hoặc phân tích dữ liệu thông minh vào app di động theo phạm vi dự án. Xem lộ trình AI và agent tại /ai-transform/.",
        },
      ],
    },
    backend: {
      audience: "Team cần API vững, auth và tích hợp dịch vụ bên thứ ba.",
      useCases: [
        "API cho web + mobile",
        "Auth, phân quyền, webhook",
        "Thanh toán / email / storage",
      ],
      faq: [
        {
          q: "Stack mặc định?",
          a: "Node.js (NestJS/Express) + PostgreSQL là lựa chọn phổ biến; có thể điều chỉnh.",
        },
        {
          q: "Có tài liệu API?",
          a: "Bàn giao OpenAPI / mô tả endpoint và env sample.",
        },
      ],
    },
    design: {
      audience: "Product owner cần UI rõ ràng và handover sạch cho engineering.",
      useCases: [
        "UI marketing site / app flows",
        "Design system nhẹ cho SMB",
        "Redesign trải nghiệm đặt lịch / convert",
      ],
      faq: [
        {
          q: "Làm trên Figma?",
          a: "Có — file có tổ chức, states và assets để dev implement.",
        },
        {
          q: "Có prototype?",
          a: "Có prototype flow chính trước khi polish UI.",
        },
      ],
    },
    integrations: {
      audience: "Doanh nghiệp cần nối hệ thống sẵn có thay vì viết lại từ đầu.",
      useCases: [
        "Zalo / email / CRM webhook",
        "Payment gateway và đối soát",
        "Đồng bộ đơn hàng / lịch sang tool nội bộ",
      ],
      faq: [
        {
          q: "Cần gì từ phía khách?",
          a: "Credential sandbox, mô tả flow hiện tại và người phụ trách hệ thống.",
        },
        {
          q: "Có monitoring?",
          a: "Logging cơ bản + cảnh báo lỗi tích hợp khi thỏa thuận trong scope.",
        },
      ],
    },
    agents: {
      audience: "Team muốn tự động hóa quy trình bằng agent / AI có kiểm soát.",
      useCases: [
        "Chatbot FAQ nội bộ / khách hàng",
        "Agent gom tài liệu và tóm tắt chu kỳ",
        "Tool-calling / MCP theo môi trường",
      ],
      faq: [
        {
          q: "AI có thay hết người không?",
          a: "Không — thiết kế human-in-the-loop cho bước quan trọng.",
        },
        {
          q: "Chạy trên cloud nào?",
          a: "Theo policy khách: cloud managed hoặc self-host khi cần.",
        },
      ],
    },

  },
  en: {
    web: {
      audience:
        "SMEs, startups, and marketing teams who need scoped websites that ship fast and are easy to quote.",
      useCases: [
        "Landing page for ad campaigns or new product launch",
        "Business website with CMS for self-managed content",
        "Multi-language website supporting VI / EN / JA for export-oriented businesses or international clients",
      ],
      faq: [
        {
          q: "How much does custom website design cost?",
          a: "Price depends on scope: number of pages, custom vs template design, CMS, and integrations like forms or payments. Starter package from $38 (landing page) to $380 (e-commerce). Exact quote provided after confirming goals.",
        },
        {
          q: "How long does a business website take?",
          a: "Landing pages typically complete in 3–5 business days. Multi-page business websites take 7–14 days. E-commerce websites take 3–4 weeks. Actual time depends on content feedback and review speed from the client.",
        },
        {
          q: "Can I update website content myself after handover?",
          a: "Yes. Business Website packages and above include headless CMS (Strapi), allowing your team to add, edit, delete content without developers.",
        },
        {
          q: "Is SEO included?",
          a: "All packages include foundational technical SEO: meta tags, speed optimization, mobile-friendly, sitemap and robots.txt. Keyword strategy and backlink building are add-on services if you want long-term organic growth.",
        },
        {
          q: "Does Dolphin Software build multi-language websites?",
          a: "Yes. Dolphin Software supports building multi-language websites (Vietnamese / English / Japanese), suitable for businesses with international clients or partners.",
        },
        {
          q: "I have an old website — can Dolphin Software help upgrade legacy systems?",
          a: "Yes. Dolphin Software evaluates the current system and proposes suitable upgrade options — from performance improvements to full technical stack restructuring. Contact for free solution analysis.",
        },
        {
          q: "Can Dolphin Software integrate AI automation into websites?",
          a: "Yes. Positioned as a software and AI development studio, Dolphin Software can integrate AI automation features — such as chatbots, automated order processing, or data analysis — into business websites on demand.",
        },
      ],
    },
    mobile: {
      audience: "Dolphin Software's app development service is best fit for product teams shipping iOS/Android or cross-platform MVP — SMBs and startups in Vietnam who need commercial or internal ops apps; product teams with existing web who want to expand to mobile; businesses needing companion app integrated with existing backend.",
      useCases: [
        "Startup booking needs fast consumer app → cross-platform Flutter MVP + booking/payment API → on store in 8–12 weeks, ready for beta",
        "Retail chain needs internal ops app → Android companion connected to POS/ERP via REST API → reduce manual tasks, real-time data sync",
        "SaaS / web platform wants mobile companion → React Native reusing existing backend → launch mobile channel without rebuilding backend",
      ],
      faq: [
        {
          q: "Flutter or React Native — which should I choose?",
          a: "Dolphin Software picks the framework based on your team's current stack and native requirements before starting the project. Flutter is better fit when highly custom UI and consistent performance across both platforms are needed; React Native is better fit when the team is already familiar with JavaScript/TypeScript or needs deep integration with native modules.",
        },
        {
          q: "Does Dolphin Software help with App Store and Google Play submission?",
          a: "Yes. Dolphin Software provides full checklist for TestFlight and Play internal track, supports you through the entire submission process — including handling feedback from Apple/Google if re-review is needed.",
        },
        {
          q: "How long does developing an MVP app typically take?",
          a: "Typically 8 to 14 weeks depending on scope, after defining flow and MVP scope in the first sprint. Dolphin Software will provide specific timeline after initial requirements discussion — no vague estimates.",
        },
        {
          q: "How much does building iOS/Android app with Dolphin Software cost?",
          a: "Dolphin Software quotes based on specific project scope, not fixed packages for all cases. After requirements discussion, you receive a clear quote — no hidden fees, no unnecessary upselling.",
        },
        {
          q: "Is support provided after app handover?",
          a: "Yes. Dolphin Software provides post-handover support for bugs that arise after launch. If you need feature upgrades or app expansion, Dolphin Software can continue via retainer or separate project.",
        },
        {
          q: "Can Dolphin Software integrate AI into mobile apps?",
          a: "Yes. Positioned as a software and AI development studio for businesses, Dolphin Software can integrate chatbots, natural language processing, or intelligent data analysis into mobile apps within project scope. See the AI transformation roadmap (including agents) at /ai-transform/.",
        },
      ],
    },
    backend: {
      audience: "Teams that need solid APIs, auth, and third-party integrations.",
      useCases: [
        "APIs for web + mobile",
        "Auth, roles, webhooks",
        "Payments / email / storage",
      ],
      faq: [
        {
          q: "Default stack?",
          a: "Node.js (NestJS/Express) + PostgreSQL is common; we adapt as needed.",
        },
        {
          q: "API docs included?",
          a: "OpenAPI / endpoint notes and env samples at handover.",
        },
      ],
    },
    design: {
      audience: "Owners who need clear UI and clean engineering handover.",
      useCases: [
        "Marketing site / app flows",
        "Lightweight SMB design systems",
        "Booking / conversion UX redesigns",
      ],
      faq: [
        {
          q: "Figma?",
          a: "Yes — organized files, states, and assets for implementation.",
        },
        {
          q: "Prototypes?",
          a: "Core flows are prototyped before visual polish.",
        },
      ],
    },
    integrations: {
      audience: "Businesses connecting existing systems instead of rewriting everything.",
      useCases: [
        "Zalo / email / CRM webhooks",
        "Payment gateways and reconciliation",
        "Syncing orders / schedules into internal tools",
      ],
      faq: [
        {
          q: "What do you need from us?",
          a: "Sandbox credentials, current flow notes, and a system owner.",
        },
        {
          q: "Monitoring?",
          a: "Basic logging plus integration error alerts when in scope.",
        },
      ],
    },
    agents: {
      audience: "Teams automating workflows with controlled AI agents.",
      useCases: [
        "Internal / customer FAQ chatbots",
        "Doc collection and cycle summaries",
        "Tool-calling / MCP per environment",
      ],
      faq: [
        {
          q: "Does AI replace people?",
          a: "No — we keep humans in the loop for critical steps.",
        },
        {
          q: "Where does it run?",
          a: "Per your policy: managed cloud or self-hosted when required.",
        },
      ],
    },

  },
  ja: {
    web: {
      audience: "スコープが明確で早く公開・見積もりしやすい SME・スタートアップ・マーケチーム向け。",
      useCases: [
        "広告キャンペーンまたは新商品ローンチ用のランディングページ",
        "コンテンツを自社で管理できるCMS付き企業サイト",
        "輸出志向企業または国際顧客向けのVI / EN / JA対応多言語サイト",
      ],
      faq: [
        {
          q: "オーダーメイドWebサイト制作の料金は？",
          a: "範囲で決まります：ページ数、カスタムvsテンプレートデザイン、CMS有無、フォームや決済などの連携。スタートパッケージは$38（LP）～$380（EC）。目標確認後に正式見積もり。",
        },
        {
          q: "企業サイトの制作期間は？",
          a: "LPは通常3〜5営業日で完成。複数ページの企業サイトは7〜14日。ECサイトは3〜4週間。実際の期間はクライアント側のコンテンツフィードバックとレビュー速度次第。",
        },
        {
          q: "引き渡し後に自分でコンテンツを更新できますか？",
          a: "はい。ビジネスWebサイト以上のパッケージにはヘッドレスCMS（Strapi）が含まれ、チームが開発者なしでコンテンツを追加・編集・削除できます。",
        },
        {
          q: "SEOは含まれますか？",
          a: "全パッケージに基本的な技術SEOが含まれます：meta tags、速度最適化、モバイル対応、sitemapとrobots.txt。キーワード戦略と被リンク構築は、長期的なオーガニック成長が必要な場合の追加サービスです。",
        },
        {
          q: "Dolphin Softwareは多言語Webサイトを制作しますか？",
          a: "はい。Dolphin Softwareは多言語Webサイト（ベトナム語 / 英語 / 日本語）の構築に対応し、国際顧客やパートナーを持つ企業に適しています。",
        },
        {
          q: "古いWebサイトがあります — Dolphin Softwareは既存システムのアップグレードをサポートしますか？",
          a: "はい。Dolphin Softwareは現行システムを評価し、適切なアップグレード案を提案します — パフォーマンス改善から技術スタック全面再構築まで。無料ソリューション分析についてお問い合わせください。",
        },
        {
          q: "Dolphin SoftwareはWebサイトにAI自動化を組み込めますか？",
          a: "はい。ソフトウェアおよびAI開発スタジオとして、Dolphin Softwareはチャットボット、自動注文処理、データ分析などのAI自動化機能を、企業サイトに要求に応じて組み込むことができます。",
        },
      ],
    },
    mobile: {
      audience: "Dolphin Softwareのアプリ開発サービスは、iOS/AndroidまたはクロスプラットフォームのMVPを出すプロダクトチーム向けに最適 — ベトナムで商用または社内運用アプリが必要なSMBとスタートアップ; 既存Webをモバイルへ拡張したいプロダクトチーム; 既存バックエンドと連携するコンパニオンアプリが必要な企業。",
      useCases: [
        "予約系スタートアップが速いコンシューマーアプリが必要 → クロスプラットフォームFlutter MVP + 予約/決済API → 8〜12週間でストア公開、ベータ準備完了",
        "小売チェーンが社内運用アプリ必要 → POS/ERPへREST APIで接続したAndroidコンパニオン → 手作業削減、リアルタイムデータ同期",
        "SaaS / Webプラットフォームがモバイルコンパニオン希望 → 既存バックエンドを再利用するReact Native → バックエンド再構築なしでモバイルチャネル公開",
      ],
      faq: [
        {
          q: "FlutterかReact Native — どちらを選ぶべき？",
          a: "Dolphin Softwareはプロジェクト開始前にチームの現行スタックとネイティブ要件に基づいてフレームワークを選定します。高度にカスタムなUIと両プラットフォームで一貫したパフォーマンスが必要な場合はFlutterの方が適しています; チームがすでにJavaScript/TypeScriptに慣れている、またはネイティブモジュールとの深い統合が必要な場合はReact Nativeの方が適しています。",
        },
        {
          q: "Dolphin SoftwareはApp StoreとGoogle Play申請をサポートしますか？",
          a: "はい。Dolphin SoftwareはTestFlightとPlay内部トラックの完全なチェックリストを提供し、申請プロセス全体をサポートします — 再審査が必要な場合のApple/Googleからのフィードバック対応も含みます。",
        },
        {
          q: "MVPアプリの開発期間は通常どれくらい？",
          a: "通常8〜14週間、最初のスプリントでフローとMVP範囲を定義した後です。Dolphin Softwareは初回の要件ディスカッション後に具体的なタイムラインを提供 — 曖昧な見積もりはしません。",
        },
        {
          q: "Dolphin SoftwareでiOS/Androidアプリを作る費用は？",
          a: "Dolphin Softwareは具体的なプロジェクト範囲に基づいて見積もり、全ケース共通の固定パッケージはありません。要件ディスカッション後、明確な見積もりを受け取ります — 隠れた費用なし、不要なアップセルなし。",
        },
        {
          q: "アプリ引き渡し後にサポートはありますか？",
          a: "はい。Dolphin Softwareはローンチ後に発生するバグについて引き渡し後サポートを提供します。機能アップグレードやアプリ拡張が必要な場合、Dolphin Softwareはリテイナーまたは別プロジェクトで継続できます。",
        },
        {
          q: "Dolphin SoftwareはモバイルアプリにAIを組み込めますか？",
          a: "はい。企業向けソフトウェアおよびAI開発スタジオとして、Dolphin Softwareはプロジェクト範囲内でチャットボット、自然言語処理、またはインテリジェントなデータ分析をモバイルアプリに組み込むことができます。エージェントを含むAI変革ロードマップは /ai-transform/ をご覧ください。",
        },
      ],
    },
    backend: {
      audience: "堅牢な API・認証・外部連携が必要なチーム向け。",
      useCases: [
        "Web + Mobile 向け API",
        "認証・権限・Webhook",
        "決済 / メール / ストレージ",
      ],
      faq: [
        { q: "標準スタックは？", a: "Node.js（NestJS/Express）+ PostgreSQL が一般的。要件に合わせて調整。" },
        { q: "API ドキュメントは？", a: "OpenAPI / エンドポイント説明と env サンプルを納品。" },
      ],
    },
    design: {
      audience: "明確な UI とエンジニア向けのきれいなハンドオーバーが必要なオーナー向け。",
      useCases: [
        "マーケサイト / アプリフロー",
        "SMB 向け軽量デザインシステム",
        "予約・CV の UX 改善",
      ],
      faq: [
        { q: "Figma ですか？", a: "はい。整理されたファイル、状態、アセットを用意します。" },
        { q: "プロトタイプは？", a: "主要フローを先にプロトタイプしてからビジュアルを磨きます。" },
      ],
    },
    integrations: {
      audience: "全面作り直しではなく既存システム接続が必要な企業向け。",
      useCases: [
        "Zalo / メール / CRM Webhook",
        "決済ゲートウェイと突合",
        "注文・予定の社内ツール同期",
      ],
      faq: [
        { q: "こちらで用意するものは？", a: "サンドボックス認証情報、現行フロー、システム担当者。" },
        { q: "監視は？", a: "スコープに含めれば基本ログと連携エラー通知。" },
      ],
    },
    agents: {
      audience: "制御付き AI エージェントで業務を自動化したいチーム向け。",
      useCases: [
        "社内 / 顧客向け FAQ ボット",
        "ドキュメント収集とサイクル要約",
        "環境別の tool-calling / MCP",
      ],
      faq: [
        { q: "人は不要になりますか？", a: "いいえ。重要ステップは human-in-the-loop を残します。" },
        { q: "実行環境は？", a: "方針に応じマネージドクラウドまたはセルフホスト。" },
      ],
    },

  },

};

const techExtras: L<TechExtras> = {
  vi: {
    react: {
      whenToUse: ["UI web/app component-based", "Đội đã quen JS/TS", "Cần ecosystem lớn"],
      stackFit: "Thường đi với Next.js, TypeScript, Tailwind trong các dự án Dolphin Software.",
    },
    nextjs: {
      whenToUse: ["Marketing site + app cùng codebase", "SEO / SSR quan trọng", "Full-stack React"],
      stackFit: "Mặc định cho website & dashboard của studio.",
    },
    typescript: {
      whenToUse: ["Codebase trung / lớn", "Nhiều người cùng dev", "API contract rõ"],
      stackFit: "Chuẩn cho frontend, NestJS và script tooling.",
    },
    tailwind: {
      whenToUse: ["Ship UI nhanh", "Design system utility-first", "Marketing + app cùng ngôn ngữ style"],
      stackFit: "Dùng xuyên suốt landing và product UI.",
    },
    nodejs: {
      whenToUse: ["API / realtime", "Cùng ngôn ngữ với frontend", "CLI & worker"],
      stackFit: "Nền cho Express, NestJS và automation.",
    },
    flutter: {
      whenToUse: ["Một codebase multi-platform", "UI custom mạnh", "Performance native"],
      stackFit: "Lựa chọn mobile khi đội ưu tiên Flutter.",
    },
    "react-native": {
      whenToUse: ["Tái dùng skill React", "MVP mobile nhanh", "Chia sẻ logic với web"],
      stackFit: "Khi đội web React muốn mở rộng mobile.",
    },
    postgresql: {
      whenToUse: ["Dữ liệu quan hệ", "JSON + SQL cùng chỗ", "Cần độ tin cậy cao"],
      stackFit: "DB mặc định cho hầu hết backend sản phẩm.",
    },
    docker: {
      whenToUse: ["Môi trường đồng nhất", "CI/CD", "Deploy microservice / agent"],
      stackFit: "Đóng gói service và stack local Compose.",
    },
    nestjs: {
      whenToUse: ["API TypeScript có cấu trúc", "Module rõ domain", "Enterprise-ready"],
      stackFit: "Backend chính khi scope API lớn.",
    },
    express: {
      whenToUse: ["API nhỏ / gateway", "Prototype nhanh", "Middleware linh hoạt"],
      stackFit: "Service nhỏ hoặc lớp HTTP tối giản.",
    },
    strapi: {
      whenToUse: ["CMS headless", "Editor tự cập nhật", "Nhiều kênh frontend"],
      stackFit: "Nội dung marketing / blog cho Next.js.",
    },
    aws: {
      whenToUse: ["Cần cloud managed", "Scale theo traffic", "Nhiều dịch vụ (compute/DB/storage)"],
      stackFit: "Nền deploy production và managed data cho sản phẩm Dolphin Software.",
    },
    kubernetes: {
      whenToUse: ["Nhiều service container", "Cần rollout/rollback chuẩn", "GitOps / platform team"],
      stackFit: "Khi hệ thống vượt 1–2 container Compose và cần orchestration.",
    },
    grafana: {
      whenToUse: ["Cần dashboard vận hành", "Alert theo metrics/logs", "Nhiều datasource"],
      stackFit: "Lớp quan sát kèm Prometheus/Loki hoặc cloud metrics.",
    },
    elasticsearch: {
      whenToUse: ["Full-text search", "Gom log/event lớn", "Analytics gần realtime"],
      stackFit: "Search sản phẩm hoặc log pipeline khi PostgreSQL không đủ.",
    },
    redis: {
      whenToUse: ["Cache hot-path", "Session / rate limit", "Queue nhẹ"],
      stackFit: "Đi kèm API Nest/Express + PostgreSQL.",
    },
    terraform: {
      whenToUse: ["Nhiều môi trường cloud", "Muốn IaC review được", "Tránh click-ops"],
      stackFit: "Định nghĩa AWS/K8s và dịch vụ kèm theo một cách lặp lại.",
    }
  },
  en: {
    react: {
      whenToUse: ["Component-based web/app UI", "JS/TS-friendly teams", "Large ecosystem needed"],
      stackFit: "Pairs with Next.js, TypeScript, and Tailwind on Dolphin Software projects.",
    },
    nextjs: {
      whenToUse: ["Marketing + app in one codebase", "SEO / SSR matters", "Full-stack React"],
      stackFit: "Default for studio websites and dashboards.",
    },
    typescript: {
      whenToUse: ["Medium/large codebases", "Multi-dev collaboration", "Clear API contracts"],
      stackFit: "Standard across frontend, NestJS, and tooling.",
    },
    tailwind: {
      whenToUse: ["Fast UI shipping", "Utility-first design systems", "Shared marketing + app styling"],
      stackFit: "Used across landings and product UI.",
    },
    nodejs: {
      whenToUse: ["APIs / realtime", "Same language as frontend", "CLIs & workers"],
      stackFit: "Foundation for Express, NestJS, and automation.",
    },
    flutter: {
      whenToUse: ["One multi-platform codebase", "Highly custom UI", "Native performance"],
      stackFit: "Mobile choice when teams prefer Flutter.",
    },
    "react-native": {
      whenToUse: ["Reuse React skills", "Fast mobile MVP", "Share logic with web"],
      stackFit: "When React web teams expand to mobile.",
    },
    postgresql: {
      whenToUse: ["Relational data", "JSON + SQL together", "High reliability"],
      stackFit: "Default DB for most product backends.",
    },
    docker: {
      whenToUse: ["Consistent environments", "CI/CD", "Microservices / agents"],
      stackFit: "Packages services and local Compose stacks.",
    },
    nestjs: {
      whenToUse: ["Structured TypeScript APIs", "Clear domain modules", "Enterprise-ready"],
      stackFit: "Primary backend when API scope is large.",
    },
    express: {
      whenToUse: ["Small APIs / gateways", "Fast prototypes", "Flexible middleware"],
      stackFit: "Small services or minimal HTTP layers.",
    },
    strapi: {
      whenToUse: ["Headless CMS", "Editor self-serve updates", "Multi-channel frontends"],
      stackFit: "Marketing / blog content for Next.js.",
    },
    aws: {
      whenToUse: ["Need managed cloud", "Scale with traffic", "Compute/DB/storage building blocks"],
      stackFit: "Production deploy and managed data foundation for Dolphin Software products.",
    },
    kubernetes: {
      whenToUse: ["Many containerized services", "Standard rollouts/rollbacks", "GitOps / platform teams"],
      stackFit: "When the system outgrows one or two Compose containers.",
    },
    grafana: {
      whenToUse: ["Ops dashboards", "Metric/log alerts", "Multiple datasources"],
      stackFit: "Observability layer with Prometheus/Loki or cloud metrics.",
    },
    elasticsearch: {
      whenToUse: ["Full-text search", "Large log/event volumes", "Near-real-time analytics"],
      stackFit: "Product search or log pipelines when PostgreSQL is not enough.",
    },
    redis: {
      whenToUse: ["Hot-path cache", "Sessions / rate limits", "Lightweight queues"],
      stackFit: "Pairs with Nest/Express APIs and PostgreSQL.",
    },
    terraform: {
      whenToUse: ["Multi-env cloud", "Reviewable IaC", "Avoid click-ops"],
      stackFit: "Defines repeatable AWS/K8s and related services.",
    }
  },
  ja: {
    react: {
      whenToUse: ["コンポーネント UI", "JS/TS チーム", "大きなエコシステム"],
      stackFit: "Dolphin Software では Next.js / TypeScript / Tailwind と併用が多いです。",
    },
    nextjs: {
      whenToUse: ["マーケとアプリを一体で", "SEO / SSR が重要", "フルスタック React"],
      stackFit: "スタジオのサイトとダッシュボードの標準です。",
    },
    typescript: {
      whenToUse: ["中〜大規模コード", "複数人開発", "明確な API 契約"],
      stackFit: "フロント・NestJS・ツール共通の標準です。",
    },
    tailwind: {
      whenToUse: ["UI を速く出す", "Utility-first", "マーケとアプリで共通"],
      stackFit: "LP からプロダクト UI まで使用します。",
    },
    nodejs: {
      whenToUse: ["API / リアルタイム", "フロントと同じ言語", "CLI / Worker"],
      stackFit: "Express・NestJS・自動化の基盤です。",
    },
    flutter: {
      whenToUse: ["マルチプラットフォーム", "カスタム UI", "ネイティブ性能"],
      stackFit: "Flutter 志向のモバイル案件で採用します。",
    },
    "react-native": {
      whenToUse: ["React スキル再利用", "モバイル MVP", "Web とロジック共有"],
      stackFit: "React Web チームのモバイル展開向けです。",
    },
    postgresql: {
      whenToUse: ["関係データ", "JSON + SQL", "高い信頼性"],
      stackFit: "プロダクト backend の標準 DB です。",
    },
    docker: {
      whenToUse: ["環境の統一", "CI/CD", "マイクロサービス / Agent"],
      stackFit: "サービス梱包と Compose に使います。",
    },
    nestjs: {
      whenToUse: ["構造化 TS API", "ドメイン分割", "エンタープライズ向け"],
      stackFit: "API スコープが大きいときの主 backend です。",
    },
    express: {
      whenToUse: ["小さな API / GW", "試作", "柔軟なミドルウェア"],
      stackFit: "小サービスや薄い HTTP 層向けです。",
    },
    strapi: {
      whenToUse: ["ヘッドレス CMS", "編集者セルフ更新", "多チャネル配信"],
      stackFit: "Next.js 向けマーケ / ブログコンテンツに。",
    },
    aws: {
      whenToUse: ["Need managed cloud", "Scale with traffic", "Compute/DB/storage building blocks"],
      stackFit: "Production deploy and managed data foundation for Dolphin Software products.",
    },
    kubernetes: {
      whenToUse: ["Many containerized services", "Standard rollouts/rollbacks", "GitOps / platform teams"],
      stackFit: "When the system outgrows one or two Compose containers.",
    },
    grafana: {
      whenToUse: ["Ops dashboards", "Metric/log alerts", "Multiple datasources"],
      stackFit: "Observability layer with Prometheus/Loki or cloud metrics.",
    },
    elasticsearch: {
      whenToUse: ["Full-text search", "Large log/event volumes", "Near-real-time analytics"],
      stackFit: "Product search or log pipelines when PostgreSQL is not enough.",
    },
    redis: {
      whenToUse: ["Hot-path cache", "Sessions / rate limits", "Lightweight queues"],
      stackFit: "Pairs with Nest/Express APIs and PostgreSQL.",
    },
    terraform: {
      whenToUse: ["Multi-env cloud", "Reviewable IaC", "Avoid click-ops"],
      stackFit: "Defines repeatable AWS/K8s and related services.",
    }
  },

};

const workExtras: L<WorkExtras> = {
  vi: {
    billiard: {
      timeline: "Khoảng 3–5 tuần cho MVP ops (tùy số bàn và báo cáo).",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Realtime status"],
    },
    badminton: {
      timeline: "Khoảng 2–4 tuần cho site + booking lịch cơ bản.",
      stack: ["Next.js", "Tailwind", "Booking calendar", "Form / notify"],
    },
    tickets: {
      timeline: "Khoảng 2–3 tuần cho landing convert + luồng đặt vé ngắn.",
      stack: ["Next.js", "Conversion funnel", "Form tối giản", "Confirm screen"],
    },
    beauty: {
      timeline: "Khoảng 3–4 tuần cho catalog dịch vụ + slot booking.",
      stack: ["Next.js", "Service catalog", "Slot calendar", "Status workflow"],
    },
    cafe: {
      timeline: "Khoảng 3–5 tuần cho menu QR + luồng order tới quầy/bếp.",
      stack: ["Next.js", "QR per table", "Order cart", "Kitchen / counter status"],
    },
    clinic: {
      timeline: "Khoảng 3–4 tuần cho site phòng khám + lịch bác sĩ/slot.",
      stack: ["Next.js", "Doctor calendar", "Intake form", "Reminders"],
    },
  },
  en: {
    billiard: {
      timeline: "About 3–5 weeks for an ops MVP (tables + reporting).",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Realtime status"],
    },
    badminton: {
      timeline: "About 2–4 weeks for site + basic court booking.",
      stack: ["Next.js", "Tailwind", "Booking calendar", "Form / notify"],
    },
    tickets: {
      timeline: "About 2–3 weeks for a conversion landing + short ticket flow.",
      stack: ["Next.js", "Conversion funnel", "Minimal form", "Confirm screen"],
    },
    beauty: {
      timeline: "About 3–4 weeks for service catalog + slot booking.",
      stack: ["Next.js", "Service catalog", "Slot calendar", "Status workflow"],
    },
    cafe: {
      timeline: "About 3–5 weeks for QR menu + counter/kitchen order flow.",
      stack: ["Next.js", "QR per table", "Order cart", "Kitchen / counter status"],
    },
    clinic: {
      timeline: "About 3–4 weeks for clinic site + doctor/slot calendar.",
      stack: ["Next.js", "Doctor calendar", "Intake form", "Reminders"],
    },
  },
  ja: {
    billiard: {
      timeline: "Ops MVP はおおよそ 3〜5 週間（テーブル数・レポート次第）。",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Realtime status"],
    },
    badminton: {
      timeline: "サイト + 基本予約はおおよそ 2〜4 週間。",
      stack: ["Next.js", "Tailwind", "Booking calendar", "Form / notify"],
    },
    tickets: {
      timeline: "CV 向け LP + 短いチケット導線はおおよそ 2〜3 週間。",
      stack: ["Next.js", "Conversion funnel", "Minimal form", "Confirm screen"],
    },
    beauty: {
      timeline: "メニュー + スロット予約はおおよそ 3〜4 週間。",
      stack: ["Next.js", "Service catalog", "Slot calendar", "Status workflow"],
    },
    cafe: {
      timeline: "QRメニュー + 厨房/カウンター注文はおおよそ 3〜5 週間。",
      stack: ["Next.js", "QR per table", "Order cart", "Kitchen / counter status"],
    },
    clinic: {
      timeline: "クリニックサイト + 医師スロットはおおよそ 3〜4 週間。",
      stack: ["Next.js", "Doctor calendar", "Intake form", "Reminders"],
    },
  },

};

export function getServiceExtras(
  locale: Locale,
  slug: ServiceSlug,
): ServiceExtras {
  return serviceExtras[locale][slug];
}

export function getTechExtras(locale: Locale, slug: TechSlug): TechExtras {
  return techExtras[locale][slug];
}

export function getWorkExtras(locale: Locale, slug: WorkSlug): WorkExtras {
  return workExtras[locale][slug];
}

export type DetailExtrasUi = {
  audienceTitle: string;
  useCasesTitle: string;
  faqTitle: string;
  whenToUseTitle: string;
  stackFitTitle: string;
  timelineTitle: string;
  stackTitle: string;
};

const extrasUi: Record<Locale, DetailExtrasUi> = {
  vi: {
    audienceTitle: "Phù hợp với",
    useCasesTitle: "Use cases điển hình",
    faqTitle: "Câu hỏi thường gặp",
    whenToUseTitle: "Khi nào nên dùng",
    stackFitTitle: "Trong stack KU THANH",
    timelineTitle: "Timeline tham khảo",
    stackTitle: "Stack đã dùng",
  },
  en: {
    audienceTitle: "Best for",
    useCasesTitle: "Use cases",
    faqTitle: "FAQ",
    whenToUseTitle: "When to use it",
    stackFitTitle: "In the KU THANH stack",
    timelineTitle: "Reference timeline",
    stackTitle: "Stack used",
  },
  ja: {
    audienceTitle: "向いている方",
    useCasesTitle: "ユースケース",
    faqTitle: "よくある質問",
    whenToUseTitle: "こんなときに",
    stackFitTitle: "KU THANH スタックでの位置",
    timelineTitle: "参考スケジュール",
    stackTitle: "使用スタック",
  },


};

export function getDetailExtrasUi(locale: Locale): DetailExtrasUi {
  return extrasUi[locale];
}
