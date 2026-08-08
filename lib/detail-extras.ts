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
    software: {
      audience:
        "Doanh nghiệp, startup và SMB cần xây dựng hoặc nâng cấp phần mềm theo yêu cầu — từ website và web app đến hệ thống nội bộ, backend, API và tích hợp — mà không muốn tự duy trì đội kỹ thuật toàn thời gian.",
      useCases: [
        "Website và web application — xây dựng sản phẩm số phục vụ khách hàng hoặc hoạt động kinh doanh",
        "Phần mềm nội bộ — dashboard, công cụ quản lý và workflow giúp đội ngũ vận hành hiệu quả hơn",
        "Backend và API — một backend phục vụ web, mobile hoặc các hệ thống khác",
        "Tích hợp thanh toán và dịch vụ bên thứ ba — MoMo, ZaloPay, VNPay, Stripe, email, CRM và các API phổ biến",
        "Hệ thống kết nối dữ liệu — webhooks, lưu trữ file, đồng bộ dữ liệu và kết nối nhiều công cụ trong cùng một quy trình",
      ],
      faq: [
        {
          q: "Dolphin Software nhận phát triển những loại phần mềm nào?",
          a: "Dolphin Software có thể phát triển website, web application, phần mềm quản lý, hệ thống nội bộ, backend, API và các giải pháp cần tích hợp với hệ thống bên thứ ba. Phạm vi cụ thể được xác định dựa trên bài toán và nhu cầu thực tế.",
        },
        {
          q: "Tôi chỉ có ý tưởng, chưa có đặc tả kỹ thuật thì có thể làm việc với Dolphin không?",
          a: "Có. Bạn có thể bắt đầu từ bài toán kinh doanh và nhu cầu của người dùng. Dolphin Software sẽ cùng làm rõ phạm vi, đề xuất hướng triển khai và xác định các phần cần phát triển trước khi bắt đầu.",
        },
        {
          q: "Dolphin Software có phát triển backend và API không?",
          a: "Có. Backend và API là một phần trong năng lực phát triển phần mềm của Dolphin Software, bao gồm REST API, xác thực, phân quyền, cơ sở dữ liệu, webhooks và các kết nối cần thiết cho web, mobile hoặc hệ thống nội bộ.",
        },
        {
          q: "Dolphin Software có hỗ trợ tích hợp thanh toán và dịch vụ bên thứ ba không?",
          a: "Có. Dolphin Software có thể tích hợp các cổng thanh toán và dịch vụ phổ biến như MoMo, ZaloPay, VNPay, Stripe, email, CRM và các API bên thứ ba tùy theo yêu cầu của dự án.",
        },
        {
          q: "Tôi không có đội kỹ thuật nội bộ thì có thể thuê Dolphin phát triển phần mềm không?",
          a: "Có. Dolphin Software có thể làm việc từ bài toán và yêu cầu kinh doanh, sau đó phụ trách phần phân tích, thiết kế, phát triển, kiểm thử và bàn giao trong phạm vi đã thống nhất.",
        },
        {
          q: "Sau khi bàn giao, Dolphin Software có tiếp tục hỗ trợ không?",
          a: "Có. Các lỗi thuộc phạm vi đã nghiệm thu được xử lý theo chính sách bảo hành của dự án. Các tính năng hoặc thay đổi mới sẽ được xác định phạm vi và báo giá trước khi thực hiện.",
        },
        {
          q: "Dolphin Software sử dụng công nghệ gì?",
          a: "Dolphin Software lựa chọn công nghệ dựa trên yêu cầu của từng dự án. Với backend, Node.js cùng NestJS hoặc Express và PostgreSQL là những lựa chọn phổ biến. Dolphin Software không ép một stack duy nhất nếu hệ thống hiện tại yêu cầu công nghệ khác.",
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
    software: {
      audience:
        "Businesses, startups, and SMBs that need to build or upgrade custom software — from websites and web apps to internal systems, backends, APIs, and integrations — without maintaining a full-time engineering team.",
      useCases: [
        "Websites and web applications — digital products for customers or business operations",
        "Internal software — dashboards, management tools, and workflows that help teams run better",
        "Backend and APIs — one backend serving web, mobile, or other systems",
        "Payment and third-party integrations — MoMo, ZaloPay, VNPay, Stripe, email, CRM, and common APIs",
        "Data-connected systems — webhooks, file storage, sync, and linking tools in one process",
      ],
      faq: [
        {
          q: "What kinds of software does Dolphin Software build?",
          a: "Websites, web applications, management software, internal systems, backends, APIs, and solutions that integrate with third-party systems. Exact scope follows the real business problem.",
        },
        {
          q: "We only have an idea, not a technical spec — can we still work together?",
          a: "Yes. Start from the business problem and user needs. Dolphin Software helps clarify scope, propose an approach, and define what to build before development starts.",
        },
        {
          q: "Does Dolphin Software build backends and APIs?",
          a: "Yes. Backend and APIs are part of our custom software capability — REST APIs, auth, roles, databases, webhooks, and connections for web, mobile, or internal systems.",
        },
        {
          q: "Do you support payment and third-party integrations?",
          a: "Yes. We can integrate common gateways and services such as MoMo, ZaloPay, VNPay, Stripe, email, CRM, and other APIs depending on the project.",
        },
        {
          q: "We have no in-house tech team — can we hire Dolphin to build software?",
          a: "Yes. Dolphin Software can work from the business problem and requirements, then handle analysis, design, development, testing, and handover within the agreed scope.",
        },
        {
          q: "Do you support us after handover?",
          a: "Yes. Bugs within the accepted scope are handled under the project warranty policy. New features or changes are scoped and quoted before work starts.",
        },
        {
          q: "What technologies does Dolphin Software use?",
          a: "We choose technology based on each project. For backends, Node.js with NestJS or Express and PostgreSQL are common. We do not force a single stack if your existing system needs something else.",
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
      audience: "明確な範囲で早く公開でき見積もりしやすいWebサイトが必要なSME・スタートアップ・マーケティングチーム向けです。",
      useCases: [
        "広告キャンペーンまたは新商品ローンチ用ランディングページ",
        "コンテンツを自社で管理できるCMS付き企業Webサイト",
        "輸出企業または国際顧客向けのVI / EN / JA多言語Webサイト",
      ],
      faq: [
        {
          q: "オーダーメイドWebサイト制作の料金は？",
          a: "範囲次第：ページ数・カスタムvsテンプレート・CMS有無・フォームや決済連携など。スターターパッケージは$38（LP）〜$380（EC）。目標確認後に正式見積もり提供。",
        },
        {
          q: "企業サイトの制作期間は？",
          a: "LPは通常3〜5営業日。複数ページの企業サイトは7〜14日。ECサイトは3〜4週間。実際の期間はクライアント側のコンテンツフィードバックとレビュー速度次第。",
        },
        {
          q: "引き渡し後に自分でコンテンツを更新できますか？",
          a: "はい。ビジネスWebサイト以上のパッケージにはヘッドレスCMS（Strapi）が含まれ、開発者なしでチームがコンテンツを追加・編集・削除可能です。",
        },
        {
          q: "SEOは含まれますか？",
          a: "全パッケージに基本的な技術SEO含む：meta tags・速度最適化・モバイル対応・sitemapとrobots.txt。キーワード戦略と被リンク構築は、長期オーガニック成長が必要な場合の追加サービス。",
        },
        {
          q: "多言語Webサイトを制作しますか？",
          a: "はい。Dolphin Softwareは多言語Webサイト（ベトナム語 / 英語 / 日本語）の構築に対応し、国際顧客やパートナーを持つ企業に適しています。",
        },
        {
          q: "既存システムのアップグレードに対応しますか？",
          a: "はい。現行システムを評価し適切なアップグレード案を提案 — パフォーマンス改善から技術スタック全面再構築まで。無料ソリューション分析についてお問い合わせください。",
        },
        {
          q: "WebサイトにAI自動化を組み込めますか？",
          a: "はい。ソフトウェアとAI開発スタジオとして、チャットボット・自動注文処理・データ分析などのAI自動化機能を要求に応じて企業サイトへ組み込めます。",
        },
      ],
    },
    mobile: {
      audience: "iOS/AndroidまたはクロスプラットフォームMVPを出荷するプロダクトチーム向けに最適 — ベトナムで商用または社内運用アプリが必要なSMBとスタートアップ; 既存Webをモバイルへ拡張したいチーム; 既存バックエンドと連携するコンパニオンアプリが必要な企業。",
      useCases: [
        "予約系スタートアップが速いコンシューマーアプリ必要 → クロスプラットフォームFlutter MVP + 予約/決済API → 8〜12週間でストア公開・ベータ準備完了",
        "小売チェーンが社内運用アプリ必要 → POS/ERPへREST APIで接続したAndroidコンパニオン → 手作業削減・リアルタイムデータ同期",
        "SaaS / Webプラットフォームがモバイルコンパニオン希望 → 既存バックエンド再利用のReact Native → バックエンド再構築なしでモバイルチャネル公開",
      ],
      faq: [
        {
          q: "FlutterかReact Native — どちらを選ぶべき？",
          a: "プロジェクト開始前に、チームの現行スタックとネイティブ要件に基づいてフレームワークを選定します。高度にカスタムなUIと両プラットフォームで一貫したパフォーマンスが必要ならFlutterが適しています; JavaScript/TypeScriptに慣れている、またはネイティブモジュールとの深い統合が必要ならReact Nativeが適しています。",
        },
        {
          q: "App StoreとGoogle Play申請をサポートしますか？",
          a: "はい。TestFlightとPlay内部トラックの完全なチェックリストを提供し、申請プロセス全体をサポート — 再審査が必要な場合のApple/Googleからのフィードバック対応も含みます。",
        },
        {
          q: "MVPアプリの開発期間は通常どれくらい？",
          a: "通常8〜14週間、最初のスプリントでフローとMVP範囲定義後です。初回要件ディスカッション後に具体的なタイムライン提供 — 曖昧な見積もりはしません。",
        },
        {
          q: "iOS/Androidアプリを作る費用は？",
          a: "具体的なプロジェクト範囲に基づいて見積もり、全ケース共通の固定パッケージはありません。要件ディスカッション後、明確な見積もり提供 — 隠れた費用なし・不要なアップセルなし。",
        },
        {
          q: "アプリ引き渡し後にサポートはありますか？",
          a: "はい。ローンチ後に発生するバグについて引き渡し後サポート提供。機能アップグレードやアプリ拡張が必要な場合、リテイナーまたは別プロジェクトで継続可能。",
        },
        {
          q: "モバイルアプリにAIを組み込めますか？",
          a: "はい。企業向けソフトウェアおよびAI開発スタジオとして、プロジェクト範囲内でチャットボット・自然言語処理・インテリジェントなデータ分析をモバイルアプリへ組み込めます。エージェント含むAI変革ロードマップは /ai-transform/ 参照。",
        },
      ],
    },
    software: {
      audience:
        "ウェブサイトやWebアプリから社内システム、バックエンド、API、連携まで、専任エンジニアチームを抱えたくない企業・スタートアップ・SMB向け。",
      useCases: [
        "ウェブサイトとWebアプリケーション — 顧客や事業運営向けのデジタル製品",
        "社内ソフトウェア — ダッシュボード、管理ツール、チーム運用を助けるワークフロー",
        "バックエンドとAPI — Web・モバイル・他システムを支える一つのバックエンド",
        "決済と外部連携 — MoMo、ZaloPay、VNPay、Stripe、メール、CRM、一般的なAPI",
        "データ連携システム — Webhook、ファイル保存、同期、複数ツールを一つのプロセスへ",
      ],
      faq: [
        {
          q: "Dolphin Softwareはどんなソフトウェアを開発できますか？",
          a: "ウェブサイト、Webアプリ、管理ソフト、社内システム、バックエンド、API、外部システム連携まで対応。具体範囲は実課題に基づき決めます。",
        },
        {
          q: "アイデアだけで技術仕様がない場合でも依頼できますか？",
          a: "できます。ビジネス課題とユーザーニーズから始め、範囲の明確化、方針提案、開発前の範囲確定まで伴走します。",
        },
        {
          q: "バックエンドとAPIも開発しますか？",
          a: "はい。カスタムソフトウェア能力の一部としてREST API、認証、権限、DB、Webhook、Web/モバイル/社内向け接続を含みます。",
        },
        {
          q: "決済や外部サービス連携は対応していますか？",
          a: "はい。MoMo、ZaloPay、VNPay、Stripe、メール、CRMなど、プロジェクトに応じて一般的なゲートウェイとAPIを統合できます。",
        },
        {
          q: "社内に技術チームがなくても依頼できますか？",
          a: "できます。課題と要件から分析・設計・開発・テスト・納品まで、合意範囲内で対応します。",
        },
        {
          q: "納品後のサポートはありますか？",
          a: "はい。検収済み範囲の不具合は保証方針に従って対応。新機能や変更は着手前に範囲と見積もりを確定します。",
        },
        {
          q: "どの技術を使いますか？",
          a: "案件ごとに選定。バックエンドではNode.js（NestJS/Express）とPostgreSQLが一般的。既存システムが別技術を要する場合は強制しません。",
        },
      ],
    },
    design: {
      audience: "明確なUIとエンジニア向けのきれいなハンドオーバーが必要なプロダクトオーナー向け。",
      useCases: [
        "マーケサイトまたはアプリフローのUI",
        "SMB向け軽量デザインシステム",
        "予約・コンバージョンのUX再設計",
      ],
      faq: [
        { q: "Figmaで作業しますか？", a: "はい。整理されたファイル・状態・アセットをdevが実装できる形で用意します。" },
        { q: "プロトタイプは作りますか？", a: "はい。主要フローをプロトタイプしてからビジュアルを磨きます。" },
      ],
    },
    integrations: {
      audience: "全面作り直しではなく既存システムの接続が必要な企業向け。",
      useCases: [
        "Zalo / メール / CRM Webhook",
        "決済ゲートウェイと突合",
        "注文・予定の社内ツール同期",
      ],
      faq: [
        { q: "こちらで用意するものは？", a: "サンドボックス認証情報・現行フローの説明・システム担当者。" },
        { q: "監視は含まれますか？", a: "スコープに含めれば基本ログと連携エラー通知を提供。" },
      ],
    },
    agents: {
      audience: "制御付きAIエージェントで業務を自動化したいチーム向け。",
      useCases: [
        "社内または顧客向けFAQチャットbot",
        "ドキュメント収集とサイクル要約Agent",
        "環境別のtool-calling / MCP",
      ],
      faq: [
        { q: "AIが人を完全に置き換えますか？", a: "いいえ。重要なステップはhuman-in-the-loopを残します。" },
        { q: "実行環境は？", a: "方針に応じてマネージドクラウドまたはセルフホスト。" },
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
