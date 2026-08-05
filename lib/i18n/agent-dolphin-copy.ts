import type { Locale } from "@/lib/i18n/types";

export type AgentDolphinCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  support: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustLine: string;
  heroAgentName: string;
  heroJustNow: string;
  heroCards: [string, string, string];
  whatEyebrow: string;
  whatTitle: string;
  whatSupport: string;
  pillarsEyebrow: string;
  pillarsTitle: string;
  pillarsSupport: string;
  pillars: { title: string; body: string }[];
  featuresEyebrow: string;
  featuresTitle: string;
  features: {
    title: string;
    body: string;
    items?: string[];
  }[];
  compareEyebrow: string;
  compareTitle: string;
  compareSupport: string;
  compareHeaders: [string, string, string];
  compareRows: { criterion: string; old: string; care: string }[];
  compareNote: string;
  industriesEyebrow: string;
  industriesTitle: string;
  industriesSupport: string;
  industries: { name: string; body: string }[];
  howEyebrow: string;
  howTitle: string;
  howSupport: string;
  howSteps: { title: string; body: string }[];
  embedMock: {
    url: string;
    agentName: string;
    userMsg: string;
    agentLines: [string, string, string];
    inputPlaceholder: string;
  };
  faqEyebrow: string;
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  closeEyebrow: string;
  closeTitle: string;
  closeSupport: string;
  closeCta: string;
  closeLinks: { label: string; href: string }[];
};

const vi: AgentDolphinCopy = {
  metaTitle:
    "Dolphin Care – AI Chăm Sóc Khách Hàng Trên Website | Báo Cáo Insight Hằng Ngày",
  metaDescription:
    "Dolphin Care là chatbot AI chăm sóc khách hàng trên website cho SMB Việt Nam — trả lời 24/7, tích hợp Zalo & CRM, và gửi báo cáo insight hằng ngày cho admin. Tìm hiểu ngay.",
  eyebrow: "Dolphin Care",
  headline:
    "Dolphin Care – AI Chăm Sóc Khách Hàng Trên [[Website]] Cho SMB Việt Nam",
  support:
    "Dolphin Care là giải pháp AI chăm sóc khách hàng trên website dành cho doanh nghiệp vừa và nhỏ (SMB) tại Việt Nam. Không chỉ trả lời khách hàng tự động 24/7 đúng nghiệp vụ và đúng giọng thương hiệu — Dolphin Care còn tổng hợp báo cáo insight hằng ngày cho admin, bao gồm câu hỏi phổ biến, lead tiềm năng cần follow-up, điểm nghẽn lặp lại và gợi ý marketing từ hội thoại thực tế.",
  ctaPrimary: "Nhận tư vấn Dolphin Care",
  ctaSecondary: "Chat Zalo",
  trustLine:
    "LLM · Nghiệp vụ doanh nghiệp · Ngữ cảnh khách hàng · Báo cáo insight hằng ngày",
  heroAgentName: "Dolphin Care",
  heroJustNow: "bây giờ",
  heroCards: [
    "Chào anh/chị! Em kiểm tra lịch — còn slot 15:00 và 17:30 ngày mai ạ.",
    "Anh/chị muốn để lại SĐT không? Em ghi nhận và báo nhân viên follow-up.",
    "Đã gửi tóm tắt hội thoại vào báo cáo insight hôm nay cho admin.",
  ],
  whatEyebrow: "Định nghĩa",
  whatTitle: "Dolphin Care [[là gì]]?",
  whatSupport:
    "Dolphin Care là chatbot AI cho website, được phát triển bởi Dolphin Software, hoạt động dựa trên 4 lớp xử lý. Không phải chatbot kịch bản cứng nhắc — hiểu ngữ cảnh và trả lời linh hoạt theo từng tình huống, đồng thời giữ đúng giọng thương hiệu.",
  pillarsEyebrow: "Bốn lớp AI",
  pillarsTitle: "Cơ chế hoạt động của [[Dolphin Care]]",
  pillarsSupport:
    "Bốn lớp xử lý đồng thời — giúp agent trả lời đúng việc, đúng người, đúng giọng, và chuyển hội thoại thành báo cáo hành động được.",
  pillars: [
    {
      title: "LLM (Mô hình ngôn ngữ lớn)",
      body: "Hiểu và tạo ra câu trả lời tự nhiên, linh hoạt theo ngữ cảnh.",
    },
    {
      title: "Business context (Nghiệp vụ doanh nghiệp)",
      body: "Được nạp knowledge base theo đặc thù từng doanh nghiệp, đảm bảo trả lời đúng việc.",
    },
    {
      title: "Customer context (Ngữ cảnh khách hàng)",
      body: "Ghi nhớ ngữ cảnh hội thoại để phản hồi phù hợp với từng khách.",
    },
    {
      title: "Daily insight report (Báo cáo insight hằng ngày)",
      body: "Tổng hợp dữ liệu hội thoại thực tế, gửi báo cáo hằng ngày cho admin.",
    },
  ],
  featuresEyebrow: "Tính năng",
  featuresTitle: "Tính Năng [[Nổi Bật]]",
  features: [
    {
      title: "Trả lời khách hàng tự động 24/7",
      body: "Dolphin Care xử lý các câu hỏi thường gặp ngay khi khách truy cập website — không cần nhân viên trực. Các loại yêu cầu có thể xử lý bao gồm:",
      items: [
        "Hỏi giá và báo giá sơ bộ",
        "Kiểm tra lịch trống / đặt lịch",
        "Hỏi địa chỉ, giờ làm việc",
        "Tư vấn dịch vụ phù hợp",
        "Thu thập số điện thoại, thông tin liên hệ",
        "Chuyển tiếp cho nhân viên khi cần thiết",
      ],
    },
    {
      title: "Báo Cáo Insight Hằng Ngày Cho Admin",
      body: "Đây là điểm khác biệt cốt lõi so với chatbot AI thông thường. Mỗi ngày, admin nhận được báo cáo tổng hợp từ hội thoại thực tế:",
      items: [
        "Câu hỏi phổ biến nhất — khách đang thắc mắc điều gì nhiều nhất?",
        "Lead tiềm năng cần follow-up — ai đã để lại thông tin nhưng chưa được chăm sóc?",
        "Điểm nghẽn lặp lại — khách thường bỏ cuộc ở bước nào? Thông tin nào còn thiếu?",
        "Gợi ý nội dung và marketing — insight từ hội thoại thực tế để tối ưu website, bài đăng và quảng cáo",
      ],
    },
    {
      title: "Tích Hợp Zalo và CRM",
      body: "Hỗ trợ kết nối với Zalo OA và các hệ thống CRM hiện có, giúp thông tin khách hàng được đồng bộ về một nơi thay vì phân tán trên nhiều kênh.",
    },
    {
      title: "Nhúng Vào Website Hiện Có Hoặc Mới",
      body: "Có thể tích hợp dưới dạng widget vào bất kỳ website nào đang hoạt động, không yêu cầu phải xây dựng lại từ đầu.",
    },
  ],
  compareEyebrow: "So sánh",
  compareTitle: "Dolphin Care Khác Gì So Với [[Chatbot]] Thông Thường?",
  compareSupport:
    "Chatbot kịch bản phù hợp khi chỉ cần FAQ đơn giản. Dolphin Care phù hợp hơn khi doanh nghiệp muốn AI thực sự hiểu nghiệp vụ, giữ đúng giọng thương hiệu, và cung cấp dữ liệu vận hành có giá trị hằng ngày.",
  compareHeaders: [
    "Tiêu chí",
    "Chatbot kịch bản thông thường",
    "Dolphin Care",
  ],
  compareRows: [
    {
      criterion: "Cách hoạt động",
      old: "Luồng if-else cố định",
      care: "Hiểu ngữ cảnh, trả lời linh hoạt",
    },
    {
      criterion: "Khả năng tùy biến",
      old: "Giọng điệu cứng, khó chỉnh",
      care: "Được nạp nghiệp vụ & giọng thương hiệu riêng",
    },
    {
      criterion: "Báo cáo cho admin",
      old: "Không có hoặc rất hạn chế",
      care: "Báo cáo insight hằng ngày đầy đủ",
    },
    {
      criterion: "Tích hợp hệ thống",
      old: "Ít hoặc không có",
      care: "Zalo, CRM, và quy trình vận hành thực tế",
    },
    {
      criterion: "Xử lý ngoài giờ",
      old: "Trả lời theo kịch bản cố định",
      care: "Trả lời đúng việc, thu thập lead, thông báo nhân viên",
    },
  ],
  compareNote:
    "Chatbot kịch bản thông thường phù hợp khi doanh nghiệp chỉ cần trả lời FAQ đơn giản. Dolphin Care phù hợp hơn khi doanh nghiệp muốn AI thực sự hiểu nghiệp vụ, giữ đúng giọng thương hiệu, và cung cấp dữ liệu vận hành có giá trị hằng ngày.",
  industriesEyebrow: "Ngành",
  industriesTitle: "Dolphin Care Phù Hợp Với [[Ngành]] Nào?",
  industriesSupport:
    "Dolphin Care được thiết kế cho SMB Việt Nam đang vận hành website và muốn tối ưu quy trình chăm sóc khách hàng. Các ngành phù hợp điển hình bao gồm:",
  industries: [
    {
      name: "Spa, thẩm mỹ, làm đẹp",
      body: "Tư vấn dịch vụ, đặt lịch, giải đáp thắc mắc về liệu trình",
    },
    {
      name: "Phòng khám, y tế",
      body: "Hỏi giờ khám, đặt lịch hẹn, tư vấn sơ bộ",
    },
    {
      name: "Nhà hàng, F&B",
      body: "Hỏi menu, giờ mở cửa, đặt bàn",
    },
    {
      name: "Trung tâm giáo dục, đào tạo",
      body: "Tư vấn khóa học, học phí, lịch khai giảng",
    },
    {
      name: "Showroom, bất động sản",
      body: "Tư vấn sản phẩm, hẹn xem nhà/xe, thu thập thông tin khách hàng",
    },
    {
      name: "Dịch vụ chuyên nghiệp",
      body: "Tư vấn báo giá sơ bộ, thu thập yêu cầu ban đầu",
    },
  ],
  howEyebrow: "Triển khai",
  howTitle: "Quy Trình Triển Khai [[Dolphin Care]]",
  howSupport:
    "Dolphin Care được triển khai theo 4 bước rõ ràng, có bàn giao cụ thể ở từng giai đoạn.",
  howSteps: [
    {
      title: "Bước 1 — Thu thập nghiệp vụ và giọng điệu",
      body: "Dolphin Software làm việc cùng doanh nghiệp để hiểu quy trình CSKH, các câu hỏi thường gặp, và phong cách giao tiếp mong muốn.",
    },
    {
      title: "Bước 2 — Nạp knowledge base và thiết lập guardrails",
      body: "Toàn bộ thông tin được cấu trúc và nạp vào hệ thống. Guardrails được thiết lập để đảm bảo AI không trả lời sai phạm vi hoặc lệch giọng thương hiệu.",
    },
    {
      title: "Bước 3 — Nhúng widget và kết nối kênh",
      body: "Widget được tích hợp vào website. Kết nối Zalo OA và CRM (nếu có) được thiết lập và kiểm thử.",
    },
    {
      title: "Bước 4 — Theo dõi, tổng hợp và tinh chỉnh",
      body: "Sau khi ra mắt, hệ thống báo cáo insight hằng ngày được kích hoạt. Dữ liệu từ hội thoại thực tế được dùng để liên tục cải thiện chất lượng phản hồi.",
    },
  ],
  embedMock: {
    url: "yourstore.com",
    agentName: "Dolphin Care",
    userMsg: "Mai còn lịch massage không?",
    agentLines: [
      "Còn slot 15:00",
      "Em giữ chỗ giúp",
      "Báo cáo insight đã ghi nhận",
    ],
    inputPlaceholder: "Nhập tin nhắn…",
  },
  faqEyebrow: "FAQ",
  faqTitle: "Câu Hỏi Thường Gặp ([[FAQ]])",
  faqItems: [
    {
      q: "Dolphin Care có phải chatbot kịch bản không?",
      a: "Không. Dolphin Care sử dụng LLM kết hợp với nghiệp vụ và ngữ cảnh khách hàng để hiểu và trả lời linh hoạt — không đi theo luồng if-else cố định như chatbot kịch bản thông thường.",
    },
    {
      q: "Dolphin Care có thể nhúng vào website tôi đang dùng không?",
      a: "Có. Dolphin Care được tích hợp dưới dạng widget và tương thích với hầu hết các nền tảng website phổ biến. Doanh nghiệp không cần phải xây dựng lại website từ đầu. Xem thêm dịch vụ web tại /services/web/.",
    },
    {
      q: "Báo cáo insight hằng ngày bao gồm những gì?",
      a: "Báo cáo gồm 4 phần chính: câu hỏi phổ biến nhất từ khách, danh sách lead tiềm năng cần follow-up, các điểm nghẽn lặp lại trong hội thoại, và gợi ý nội dung/marketing dựa trên dữ liệu hội thoại thực tế.",
    },
    {
      q: "Dolphin Care có tích hợp được với Zalo không?",
      a: "Có. Dolphin Care hỗ trợ tích hợp Zalo OA, giúp thông báo và dữ liệu khách hàng được đồng bộ sang Zalo theo thời gian thực.",
    },
    {
      q: "Dolphin Care phù hợp với doanh nghiệp quy mô nào?",
      a: "Dolphin Care được thiết kế đặc biệt cho SMB Việt Nam — doanh nghiệp vừa và nhỏ đang vận hành website và muốn tự động hóa CSKH mà không cần đội ngũ kỹ thuật lớn.",
    },
    {
      q: "Chi phí triển khai Dolphin Care là bao nhiêu?",
      a: "Dolphin Software báo giá minh bạch theo phạm vi triển khai thực tế — không tính phí ẩn, không bán thêm dịch vụ không cần thiết. Liên hệ để nhận tư vấn và báo giá phù hợp với quy mô doanh nghiệp.",
    },
  ],
  closeEyebrow: "Bắt đầu",
  closeTitle: "Bắt Đầu Với [[Dolphin Care]]",
  closeSupport:
    "Gửi một mô tả ngắn về doanh nghiệp và nhu cầu CSKH — Dolphin Software sẽ phản hồi với đề xuất phạm vi và chi phí dự kiến trong vòng một ngày làm việc.",
  closeCta: "Nhận tư vấn Dolphin Care",
  closeLinks: [
    { label: "Chat Zalo", href: "https://zalo.me/0779937633" },
    { label: "Gửi yêu cầu tư vấn", href: "/#contact" },
    { label: "Lộ trình AI", href: "/ai-transform/" },
  ],
};

const en: AgentDolphinCopy = {
  metaTitle:
    "Dolphin Care – AI Customer Care on Your Website | Daily Insight Reports",
  metaDescription:
    "Dolphin Care is an AI website chatbot for Vietnamese SMBs — 24/7 replies, Zalo & CRM integration, and daily insight reports for admins.",
  eyebrow: "Dolphin Care",
  headline:
    "Dolphin Care – AI Customer Care on Your [[Website]] for Vietnamese SMBs",
  support:
    "Dolphin Care is AI customer care for SMB websites in Vietnam. It answers 24/7 in your business voice — and delivers a daily insight report for admins: top questions, warm leads, recurring friction, and marketing ideas from real chats.",
  ctaPrimary: "Talk about Dolphin Care",
  ctaSecondary: "Chat on Zalo",
  trustLine:
    "LLM · Business context · Customer context · Daily insight report",
  heroAgentName: "Dolphin Care",
  heroJustNow: "now",
  heroCards: [
    "Hi! I checked availability — 3:00 and 5:30 pm slots are open tomorrow.",
    "Want to leave a phone number? I’ll log it and notify your team to follow up.",
    "Today’s insight report already includes this conversation for your admin.",
  ],
  whatEyebrow: "Definition",
  whatTitle: "What is [[Dolphin Care]]?",
  whatSupport:
    "Dolphin Care is a website AI chatbot developed by Dolphin Software, operating on four layers — not a rigid if-else script. It understands context, answers flexibly, and stays on-brand.",
  pillarsEyebrow: "Four layers",
  pillarsTitle: "How [[Dolphin Care]] works",
  pillarsSupport:
    "Four layers working together — so the agent answers the right job, to the right person, in the right voice, and turns conversations into actionable reports.",
  pillars: [
    {
      title: "LLM",
      body: "Natural, context-aware replies.",
    },
    {
      title: "Business context",
      body: "Your knowledge base so answers match how you operate.",
    },
    {
      title: "Customer context",
      body: "Conversation memory for each visitor.",
    },
    {
      title: "Daily insight report",
      body: "Structured daily summaries for admins from real chats.",
    },
  ],
  featuresEyebrow: "Features",
  featuresTitle: "Standout [[Features]]",
  features: [
    {
      title: "24/7 automatic replies",
      body: "Handles common requests as soon as visitors arrive — no staff on standby:",
      items: [
        "Pricing and preliminary quotes",
        "Availability / booking",
        "Address and hours",
        "Service guidance",
        "Phone and contact capture",
        "Hand-off to a human when needed",
      ],
    },
    {
      title: "Daily insight reports for admins",
      body: "The core difference vs typical AI chatbots. Each day admins get:",
      items: [
        "Top questions",
        "Warm leads to follow up",
        "Recurring bottlenecks",
        "Content and marketing suggestions from real conversations",
      ],
    },
    {
      title: "Zalo and CRM integration",
      body: "Optional Zalo OA and CRM sync so customer data isn’t scattered across channels.",
    },
    {
      title: "Embed on existing or new sites",
      body: "Widget-style install — no full rebuild required.",
    },
  ],
  compareEyebrow: "Compare",
  compareTitle: "Dolphin Care vs a [[Typical]] Script Chatbot",
  compareSupport:
    "Script bots fit simple FAQs. Dolphin Care fits when you need AI that understands your business, keeps your brand voice, and delivers daily operational insights.",
  compareHeaders: ["Criterion", "Typical script chatbot", "Dolphin Care"],
  compareRows: [
    {
      criterion: "How it works",
      old: "Fixed if-else flows",
      care: "Context-aware, flexible replies",
    },
    {
      criterion: "Customization",
      old: "Stiff tone, hard to tune",
      care: "Loaded with your ops & brand voice",
    },
    {
      criterion: "Admin reporting",
      old: "None or very limited",
      care: "Full daily insight report",
    },
    {
      criterion: "Integrations",
      old: "Few or none",
      care: "Zalo, CRM, real ops workflows",
    },
    {
      criterion: "After hours",
      old: "Script-only replies",
      care: "On-job answers, lead capture, staff notify",
    },
  ],
  compareNote:
    "Use a script bot for simple FAQs. Choose Dolphin Care when you want AI that understands your business and feeds daily ops/marketing data.",
  industriesEyebrow: "Industries",
  industriesTitle: "Which [[Industries]] Fit?",
  industriesSupport:
    "Built for Vietnamese SMBs with a live website who want better customer care:",
  industries: [
    {
      name: "Spa & beauty",
      body: "Service advice, booking, treatment FAQs",
    },
    {
      name: "Clinics",
      body: "Hours, appointments, light guidance",
    },
    {
      name: "Restaurants & F&B",
      body: "Menu, hours, table booking",
    },
    {
      name: "Education",
      body: "Courses, fees, start dates",
    },
    {
      name: "Showrooms & real estate",
      body: "Product advice, visit booking, lead capture",
    },
    {
      name: "Professional services",
      body: "Preliminary quotes and intake",
    },
  ],
  howEyebrow: "Implementation",
  howTitle: "How We [[Roll Out]] Dolphin Care",
  howSupport: "Four clear steps with a concrete handoff at each stage.",
  howSteps: [
    {
      title: "Step 1 — Capture ops and voice",
      body: "We map your CS workflow, FAQs, and preferred tone.",
    },
    {
      title: "Step 2 — Knowledge base and guardrails",
      body: "Structure and load content; set scope so the AI stays on-brand.",
    },
    {
      title: "Step 3 — Embed widget and connect channels",
      body: "Install on the site; wire Zalo OA and CRM when available.",
    },
    {
      title: "Step 4 — Monitor, summarize, refine",
      body: "Daily insight reports go live; real chats continuously improve replies.",
    },
  ],
  embedMock: {
    url: "yourstore.com",
    agentName: "Dolphin Care",
    userMsg: "Any massage slots tomorrow?",
    agentLines: [
      "3:00 pm is free",
      "I can hold it",
      "Logged in today’s insight report",
    ],
    inputPlaceholder: "Type a message…",
  },
  faqEyebrow: "FAQ",
  faqTitle: "Frequently asked [[questions]]",
  faqItems: [
    {
      q: "Is Dolphin Care a script chatbot?",
      a: "No. It uses an LLM with business and customer context — not fixed if-else flows.",
    },
    {
      q: "Can it embed on my existing site?",
      a: "Yes — widget-style on most common platforms. No full rebuild required. See /services/web/.",
    },
    {
      q: "What’s in the daily insight report?",
      a: "Top questions, warm leads, recurring friction, and content/marketing ideas from real chats.",
    },
    {
      q: "Does it integrate with Zalo?",
      a: "Yes — optional Zalo OA sync for alerts and customer data in near real time.",
    },
    {
      q: "Who is it for?",
      a: "Vietnamese SMBs with a website who want CS automation without a large tech team.",
    },
    {
      q: "How is pricing handled?",
      a: "Transparent quotes by scope — no hidden fees. Contact us for a fit-based estimate.",
    },
  ],
  closeEyebrow: "Get started",
  closeTitle: "Start with [[Dolphin Care]]",
  closeSupport:
    "Send a short note about your business and CS needs — we’ll reply with scope and cost guidance within one business day.",
  closeCta: "Talk about Dolphin Care",
  closeLinks: [
    { label: "Chat on Zalo", href: "https://zalo.me/0779937633" },
    { label: "Contact form", href: "/#contact" },
    { label: "AI roadmap", href: "/ai-transform/" },
  ],
};

const ja: AgentDolphinCopy = {
  metaTitle:
    "Dolphin Care – Webサイト向けAIカスタマーケア | 日次インサイトレポート",
  metaDescription:
    "ベトナムSMB向け。Webサイト上のAIチャットが24時間対応し、Zalo・CRM連携と管理者向け日次インサイトレポートを提供します。",
  eyebrow: "Dolphin Care",
  headline:
    "Dolphin Care – ベトナムSMB向け[[Webサイト]]AIカスタマーケア",
  support:
    "Dolphin Careはベトナムの中小企業向けに、Webサイト上で24時間対応するAIカスタマーケアです。ブランドの声と業務知識に沿い回答し、よくある質問・ホットリード・繰り返しの摩擦・マーケ提案を日次レポートで管理者に届けます。",
  ctaPrimary: "Dolphin Careを相談",
  ctaSecondary: "Zaloでチャット",
  trustLine:
    "LLM · 業務コンテキスト · 顧客コンテキスト · 日次インサイト",
  heroAgentName: "Dolphin Care",
  heroJustNow: "たった今",
  heroCards: [
    "こんにちは。空き枠を確認しました — 明日15:00と17:30が空いています。",
    "お電話番号をいただけますか？記録してスタッフにフォローを通知します。",
    "本日のインサイトレポートにもこの会話を反映しました。",
  ],
  whatEyebrow: "定義",
  whatTitle: "Dolphin Careとは？",
  whatSupport:
    "Dolphin Softwareが開発するWebサイト向けAIチャット。4層で動作し、硬いif-elseスクリプトではありません。文脈を理解し、柔軟に回答し、ブランドに沿います。",
  pillarsEyebrow: "4層",
  pillarsTitle: "[[Dolphin Care]]の仕組み",
  pillarsSupport:
    "4層が連携して — 正しい用件に、正しい相手へ、正しいトーンで回答し、会話を行動可能なレポートに変えます。",
  pillars: [
    {
      title: "LLM",
      body: "自然で文脈に沿った返答。",
    },
    {
      title: "業務コンテキスト",
      body: "ナレッジベースで正しい業務回答を担保。",
    },
    {
      title: "顧客コンテキスト",
      body: "会話の文脈を保持して個別に応答。",
    },
    {
      title: "日次インサイトレポート",
      body: "実会話を集約し管理者へ毎日配信。",
    },
  ],
  featuresEyebrow: "機能",
  featuresTitle: "主な[[機能]]",
  features: [
    {
      title: "24時間自動応答",
      body: "来訪直後からよくある問い合わせに対応:",
      items: [
        "料金・概算見積もり",
        "空き確認 / 予約",
        "住所・営業時間",
        "サービス案内",
        "電話・連絡先の取得",
        "必要時のスタッフ引き継ぎ",
      ],
    },
    {
      title: "管理者向け日次インサイト",
      body: "一般的なAIチャットとの核心差。毎日:",
      items: [
        "頻出質問",
        "フォローアップが必要なリード",
        "繰り返しのボトルネック",
        "実会話からのコンテンツ／マーケ提案",
      ],
    },
    {
      title: "Zalo・CRM連携",
      body: "Zalo OAや既存CRMと同期し、顧客情報の分散を防ぎます。",
    },
    {
      title: "既存／新規サイトへ埋め込み",
      body: "ウィジェット形式 — 全面作り直し不要。",
    },
  ],
  compareEyebrow: "比較",
  compareTitle: "一般的なスクリプトボットとの[[違い]]",
  compareSupport:
    "単純FAQならスクリプトボット。業務を理解し、ブランドボイスを保ち、日次の運用インサイトを届けるAIが必要なら Dolphin Care。",
  compareHeaders: ["観点", "一般的なスクリプトボット", "Dolphin Care"],
  compareRows: [
    {
      criterion: "動作",
      old: "固定if-else",
      care: "文脈理解の柔軟回答",
    },
    {
      criterion: "カスタム",
      old: "硬いトーン",
      care: "業務＆ブランドボイスを注入",
    },
    {
      criterion: "管理者レポート",
      old: "ほぼなし",
      care: "日次インサイト完備",
    },
    {
      criterion: "連携",
      old: "少ない／なし",
      care: "Zalo・CRM・実運用",
    },
    {
      criterion: "時間外",
      old: "スクリプトのみ",
      care: "用件対応・リード取得・通知",
    },
  ],
  compareNote:
    "単純FAQはスクリプトで十分。業務を理解し日次データを欲しい場合は Dolphin Care。",
  industriesEyebrow: "業種",
  industriesTitle: "どんな[[業種]]に合う？",
  industriesSupport:
    "Webサイトを運用するベトナムSMBのカスタマーケア向け:",
  industries: [
    { name: "スパ・美容", body: "施術案内、予約、FAQ" },
    { name: "クリニック", body: "診療時間、予約、簡易案内" },
    { name: "飲食", body: "メニュー、営業時間、席予約" },
    { name: "教育", body: "コース、費用、開講日" },
    { name: "ショールーム・不動産", body: "案内、見学予約、リード取得" },
    { name: "専門サービス", body: "概算見積と要件受付" },
  ],
  howEyebrow: "導入",
  howTitle: "導入の[[4ステップ]]",
  howSupport: "各段階で明確な引き渡しがある4ステップ。",
  howSteps: [
    {
      title: "ステップ1 — 業務とトーンの収集",
      body: "CSフロー、FAQ、望ましい話し方を整理。",
    },
    {
      title: "ステップ2 — KBとガードレール",
      body: "情報を構造化して投入し、範囲外回答を抑制。",
    },
    {
      title: "ステップ3 — 埋め込みとチャネル接続",
      body: "ウィジェット設置。Zalo OA / CRMを接続・検証。",
    },
    {
      title: "ステップ4 — 監視・集約・改善",
      body: "日次レポートを有効化し、実会話で継続改善。",
    },
  ],
  embedMock: {
    url: "yourstore.com",
    agentName: "Dolphin Care",
    userMsg: "明日マッサージ空いてますか？",
    agentLines: [
      "15:00が空いています",
      "確保できます",
      "本日のインサイトに記録済み",
    ],
    inputPlaceholder: "メッセージを入力…",
  },
  faqEyebrow: "FAQ",
  faqTitle: "よくある[[質問]]",
  faqItems: [
    {
      q: "スクリプト型チャットボットですか？",
      a: "いいえ。LLM＋業務／顧客コンテキストで柔軟に回答します。",
    },
    {
      q: "既存サイトに埋め込めますか？",
      a: "はい。ウィジェット形式で多くのプラットフォームに対応。全面改修は不要です。/services/web/",
    },
    {
      q: "日次インサイトの内容は？",
      a: "頻出質問、ホットリード、繰り返し摩擦、実会話からのコンテンツ／マーケ提案。",
    },
    {
      q: "Zalo連携は？",
      a: "はい。Zalo OA連携で通知と顧客データを同期できます。",
    },
    {
      q: "対象規模は？",
      a: "Webサイトを持つベトナムSMB向け。大規模な技術チームなしでCS自動化を進めたい場合に適合。",
    },
    {
      q: "料金は？",
      a: "範囲に応じた明確な見積もり。隠れ費用なし。規模に合う相談をどうぞ。",
    },
  ],
  closeEyebrow: "はじめの一歩",
  closeTitle: "[[Dolphin Care]]を始める",
  closeSupport:
    "事業とCSのニーズを短く送ってください。翌営業日以内に範囲と費用の目安をご返信します。",
  closeCta: "Dolphin Careを相談",
  closeLinks: [
    { label: "Zaloでチャット", href: "https://zalo.me/0779937633" },
    { label: "お問い合わせ", href: "/#contact" },
    { label: "AIロードマップ", href: "/ai-transform/" },
  ],
};

export const agentDolphinByLocale: Record<Locale, AgentDolphinCopy> = {
  vi,
  en,
  ja,
};

export function getAgentDolphinCopy(locale: Locale): AgentDolphinCopy {
  return agentDolphinByLocale[locale] ?? agentDolphinByLocale.en;
}

/** Homepage teaser (chat-style demos under Hero). */
export type AgentDolphinHomeMessage = {
  role: "user" | "assistant";
  text: string;
};

export type AgentDolphinHomeCard = {
  context: string;
  messages: AgentDolphinHomeMessage[];
};

export type AgentDolphinHomeBenefit = {
  title: string;
  body: string;
};

export type AgentDolphinHomeCopy = {
  eyebrow: string;
  title: string;
  support: string;
  cta: string;
  ctaSecondary: string;
  trustMicro: string;
  benefits: [
    AgentDolphinHomeBenefit,
    AgentDolphinHomeBenefit,
    AgentDolphinHomeBenefit,
  ];
  situationsLabel?: string;
  situations?: string[];
  industriesLabel?: string;
  industries?: string[];
  pipelineLabel?: string;
  pipeline?: string[];
  agentName: string;
  online: string;
  card: AgentDolphinHomeCard;
  inputPlaceholder: string;
};

const homeVi: AgentDolphinHomeCopy = {
  eyebrow: "Dolphin Care",
  title: "AI chăm sóc khách trên website + [[báo cáo]] insight hằng ngày",
  support:
    "Dolphin Care trả lời 24/7 đúng nghiệp vụ và giọng thương hiệu — đồng thời tổng hợp câu hỏi phổ biến, lead cần follow-up và gợi ý marketing cho admin mỗi ngày.",
  cta: "Tìm hiểu Dolphin Care",
  ctaSecondary: "Nhận báo giá",
  trustMicro: "Nhúng vào website mới hoặc đang chạy · Zalo & CRM",
  benefits: [
    {
      title: "Trả lời 24/7 đúng ngữ cảnh",
      body: "FAQ, đặt lịch, thu lead — không cần nhân viên trực liên tục.",
    },
    {
      title: "Báo cáo insight hằng ngày",
      body: "Câu hỏi phổ biến, lead nóng, điểm nghẽn và gợi ý nội dung từ hội thoại thật.",
    },
    {
      title: "Không bỏ lỡ lead ngoài giờ",
      body: "Khách vẫn nhận phản hồi đầu tiên; admin biết ai cần follow-up.",
    },
  ],
  situationsLabel: "Dolphin Care xử lý được:",
  situations: [
    "Khách hỏi giá",
    "Khách hỏi còn lịch không",
    "Khách hỏi địa chỉ",
    "Khách hỏi dịch vụ",
    "Khách muốn để lại SĐT",
    "Khách muốn gặp nhân viên",
  ],
  industriesLabel: "Phù hợp cho",
  industries: [
    "Spa",
    "Phòng khám",
    "Nhà hàng",
    "Giáo dục",
    "Showroom",
    "Bất động sản",
  ],
  pipelineLabel: "Cách hoạt động (không phải chatbot cứng)",
  pipeline: [
    "Hiểu ngữ cảnh",
    "Thu thông tin",
    "Đặt lịch",
    "Gửi Zalo / CRM",
    "Báo cáo insight",
    "Theo dõi khách",
  ],
  agentName: "Dolphin Care",
  online: "Đang trực tuyến",
  card: {
    context: "Spa · Đặt lịch",
    messages: [
      { role: "user", text: "Mai buổi chiều còn slot massage không?" },
      {
        role: "assistant",
        text: "Còn — 3:00 và 5:30 chiều. 60 hay 90 phút ạ?",
      },
      { role: "user", text: "60 phút lúc 3:00 nhé" },
      {
        role: "assistant",
        text: "Đang giữ slot 3:00 — 60 phút. Cho mình xin tên và số điện thoại nhé.",
      },
      { role: "user", text: "Lan, 0901 234 567" },
      {
        role: "assistant",
        text: "Đã ghi nhận chị Lan — 15:00 mai, massage 60 phút. Em gửi xác nhận Zalo và báo nhân viên trên CRM ngay ạ.",
      },
      { role: "user", text: "Ok cảm ơn" },
      {
        role: "assistant",
        text: "Đã gửi Zalo rồi. Hội thoại này cũng vào báo cáo insight hôm nay cho admin.",
      },
    ],
  },
  inputPlaceholder: "Nhập tin nhắn…",
};

const homeEn: AgentDolphinHomeCopy = {
  eyebrow: "Dolphin Care",
  title: "Website AI care + [[daily]] insight reports",
  support:
    "Answers 24/7 on-brand — plus daily admin reports with top questions, warm leads, and marketing ideas from real chats.",
  cta: "Explore Dolphin Care",
  ctaSecondary: "Get a quote",
  trustMicro: "Embed on new or existing sites · Zalo & CRM",
  benefits: [
    {
      title: "24/7 contextual replies",
      body: "FAQs, booking, lead capture — without round-the-clock staffing.",
    },
    {
      title: "Daily insight reports",
      body: "Top questions, hot leads, friction, and content ideas from real chats.",
    },
    {
      title: "Fewer missed after-hours leads",
      body: "Visitors get a first reply; admins know who to follow up.",
    },
  ],
  situationsLabel: "Dolphin Care handles:",
  situations: [
    "Pricing questions",
    "Availability checks",
    "Address requests",
    "Service inquiries",
    "Phone capture",
    "Staff escalation",
  ],
  industriesLabel: "Fits",
  industries: [
    "Spas",
    "Clinics",
    "Restaurants",
    "Education",
    "Showrooms",
    "Real estate",
  ],
  pipelineLabel: "How it works (not a rigid chatbot)",
  pipeline: [
    "Understand context",
    "Gather info",
    "Book appointment",
    "Send Zalo / CRM",
    "Insight report",
    "Follow up",
  ],
  agentName: "Dolphin Care",
  online: "Online now",
  card: {
    context: "Spa · Booking",
    messages: [
      { role: "user", text: "Any massage slots tomorrow afternoon?" },
      {
        role: "assistant",
        text: "Yes — 3:00 and 5:30 pm. 60 or 90 minutes?",
      },
      { role: "user", text: "60 minutes at 3:00 please" },
      {
        role: "assistant",
        text: "Holding 3:00 — 60 minutes. Name and phone to confirm?",
      },
      { role: "user", text: "Minh, 0901 234 567" },
      {
        role: "assistant",
        text: "Booked for Minh at 3:00 tomorrow. I’ll Zalo-remind you and notify staff in CRM.",
      },
      { role: "user", text: "Perfect, thanks" },
      {
        role: "assistant",
        text: "Done — this chat is also in today’s admin insight report.",
      },
    ],
  },
  inputPlaceholder: "Type a message…",
};

const homeJa: AgentDolphinHomeCopy = {
  eyebrow: "Dolphin Care",
  title: "サイト上のAIケア + [[日次]]インサイト",
  support:
    "24時間ブランドに沿って回答 — 頻出質問・ホットリード・マーケ提案を実会話から管理者へ毎日レポート。",
  cta: "Dolphin Careを見る",
  ctaSecondary: "見積もりを依頼",
  trustMicro: "新規／既存サイトに埋め込み · Zalo & CRM",
  benefits: [
    {
      title: "24時間の文脈対応",
      body: "FAQ・予約・リード取得 — 常時人員不要。",
    },
    {
      title: "日次インサイトレポート",
      body: "頻出質問、ホットリード、摩擦、コンテンツ案を実会話から。",
    },
    {
      title: "時間外の取りこぼしを減らす",
      body: "最初の返信を届け、フォロー対象を管理者に明示。",
    },
  ],
  situationsLabel: "Dolphin Care が対応できる内容：",
  situations: [
    "料金の質問",
    "空き状況の確認",
    "住所の問い合わせ",
    "サービス内容の質問",
    "電話番号の取得",
    "スタッフへのエスカレーション",
  ],
  industriesLabel: "適した業種",
  industries: [
    "スパ",
    "クリニック",
    "レストラン",
    "教育",
    "ショールーム",
    "不動産",
  ],
  pipelineLabel: "動作の流れ（硬いチャットボットではない）",
  pipeline: [
    "文脈を理解",
    "情報を収集",
    "予約",
    "Zalo / CRM送信",
    "インサイトレポート",
    "フォローアップ",
  ],
  agentName: "Dolphin Care",
  online: "オンライン",
  card: {
    context: "Spa · 予約",
    messages: [
      { role: "user", text: "明日の午後にマッサージ空いてますか？" },
      {
        role: "assistant",
        text: "15:00と17:30が空いています。60分と90分、どちらにしますか？",
      },
      { role: "user", text: "15:00の60分でお願いします" },
      {
        role: "assistant",
        text: "15:00・60分で確保しました。お名前と電話番号をいただけますか？",
      },
      { role: "user", text: "ミン、0901 234 567" },
      {
        role: "assistant",
        text: "ミン様・明日15:00で登録しました。ZaloリマインドとCRM通知も行います。",
      },
      { role: "user", text: "ありがとうございます" },
      {
        role: "assistant",
        text: "本日の管理者向けインサイトレポートにも反映済みです。",
      },
    ],
  },
  inputPlaceholder: "メッセージを入力…",
};

export const agentDolphinHomeByLocale: Record<Locale, AgentDolphinHomeCopy> = {
  vi: homeVi,
  en: homeEn,
  ja: homeJa,
};

export function getAgentDolphinHomeCopy(locale: Locale): AgentDolphinHomeCopy {
  return agentDolphinHomeByLocale[locale] ?? agentDolphinHomeByLocale.en;
}
