import type { Locale } from "@/lib/i18n/types";

export type AboutCopy = {
  eyebrow: string;
  name: string;
  role: string;
  motto: string;
  support: string;
  location: string;
  mindsetEyebrow: string;
  mindsetTitle: string;
  mindset: { title: string; body: string }[];
  experienceEyebrow: string;
  experienceTitle: string;
  experienceSupport: string;
  experiences: {
    company: string;
    role: string;
    period: string;
    focus: string;
    bullets: string[];
    stack: string[];
  }[];
  focusEyebrow: string;
  focusTitle: string;
  focusItems: { title: string; body: string }[];
  skillsLabel: string;
  skills: string[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaSupport: string;
  ctaPrimary: string;
  ctaSecondary: string;
  links: {
    email: string;
    zalo: string;
    github: string;
    linkedin: string;
  };
};

const vi: AboutCopy = {
  eyebrow: "Giới thiệu",
  name: "Nguyễn Chí Thành",
  role: "Product Backend Engineer / Tech Lead",
  motto: "Kỷ luật. Tần tâm. [[Không gì là không thể.]]",
  support:
    "5+ năm xây và vận hành hệ thống live ở edtech & SaaS. Tôi đam mê production reliability — khi sự cố xảy ra, tôi truy đến gốc, phục hồi dữ liệu, và đưa hệ thống chạy lại. Không có bài toán nào là “không làm được” nếu đủ rõ scope và đủ quyết tâm ship.",
  location: "HCM · Vietnam",
  mindsetEyebrow: "Mindset",
  mindsetTitle: "Tinh thần làm việc tôi mang theo mỗi ngày",
  mindset: [
    {
      title: "Đam mê hệ thống thật",
      body: "Không chỉ viết code đẹp — tôi chăm observability, load test, và ổn định lúc traffic cao. Sản phẩm live mới là sân thật.",
    },
    {
      title: "Kỷ luật như tập luyện",
      body: "Như tinh thần Cristiano Ronaldo: làm việc mỗi ngày, không dựa vào may mắn. Incident, review, design — đều có nhịp và chuẩn.",
    },
    {
      title: "Không gì là không thể",
      body: "Từ monolith Laravel sang Golang microservices, từ legacy PHP sang NestJS, từ peak-hour outage đến data recovery — cứ rõ mục tiêu là tìm cách ship.",
    },
  ],
  experienceEyebrow: "Kinh nghiệm",
  experienceTitle: "Hành trình trên sản phẩm thật",
  experienceSupport:
    "Edtech, merchant SaaS, outsourcing — cùng một kim chỉ nam: ổn định production và giao đúng bài toán kinh doanh.",
  experiences: [
    {
      company: "Marathon Education",
      role: "Backend Engineer (Product)",
      period: "09/2022 – 05/2025",
      focus: "Production reliability · Golang · Observability",
      bullets: [
        "Xử lý incident giờ cao điểm: dữ liệu lỗi chặn học online — dẫn data recovery, khôi phục truy cập.",
        "Nâng observability với Prometheus, Grafana, structured logging; K6 trước các đợt traffic lớn.",
        "Đề xuất và tham gia migrate Laravel monolith → Golang microservices để scale.",
        "Tích hợp ClassIn, Zalo ZNS, HubSpot, Mailgun trên production.",
      ],
      stack: ["Golang", "Laravel", "Redis", "Kafka", "MySQL", "K6", "Prometheus", "Grafana"],
    },
    {
      company: "Myspa",
      role: "Backend Engineer (Product)",
      period: "01/2021 – 08/2022",
      focus: "Merchant SaaS · Legacy · Mini Apps",
      bullets: [
        "Maintain core backend cho spa/salon/clinic đang chạy thật: appointment, CRM, operations.",
        "Tham gia từ đầu Mini App thống nhất trên Zalo, MOMO, Tiki.",
        "API + tích hợp dữ liệu merchant / booking theo yêu cầu từng nền tảng.",
      ],
      stack: ["Laravel", "CodeIgniter", "MySQL", "Redis"],
    },
    {
      company: "Splus Software",
      role: "Software Engineer / Tech Lead",
      period: "02/2024 – Nay",
      focus: "Architecture · Team lead · NestJS microservices",
      bullets: [
        "Tái kiến trúc PHP legacy → microservices NestJS; monitoring Grafana + logging pipeline.",
        "Lead 5 engineer trên 3 dự án song song; mentor, knowledge sharing, architecture review.",
        "Ứng phó lỗ hổng Next.js trên production, giữ uptime và security.",
        "Thiết kế workflow AI-assisted (prompt + checkpoint review) để phân tích legacy an toàn.",
      ],
      stack: ["NestJS", "Redis", "RabbitMQ", "MySQL", "Grafana", "Docker"],
    },
  ],
  focusEyebrow: "Core focus",
  focusTitle: "Tôi mang lại giá trị gì",
  focusItems: [
    {
      title: "Product backend",
      body: "Làm việc với PO/BA, thiết kế solution, ship release ổn định trên sản phẩm live.",
    },
    {
      title: "Production operations",
      body: "Incident response, RCA, data recovery — giảm downtime khi hệ thống đang phục vụ người dùng thật.",
    },
    {
      title: "Observability",
      body: "Prometheus, Grafana, tracing, logging, K6 — nhìn thấy vấn đề trước khi khách hàng báo.",
    },
    {
      title: "System design",
      body: "Monolith → microservices, messaging (Kafka, RabbitMQ), scale và maintainability dài hạn.",
    },
  ],
  skillsLabel: "Stack & practices",
  skills: [
    "Golang",
    "NestJS",
    "Laravel",
    "TypeScript",
    "MySQL",
    "Redis",
    "Kafka",
    "RabbitMQ",
    "Prometheus",
    "Grafana",
    "K6",
    "Docker",
    "GitLab CI/CD",
    "System design",
    "Incident response",
  ],
  ctaEyebrow: "Next step",
  ctaTitle: "Cùng ship hệ thống bạn cần",
  ctaSupport:
    "Bạn có bài toán khó? Hãy nói mục tiêu — tôi sẽ chốt scope, thiết kế, và vận hành đến khi chạy ổn.",
  ctaPrimary: "Nhận báo giá",
  ctaSecondary: "Chat Zalo",
  links: {
    email: "Email",
    zalo: "Zalo",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};

const en: AboutCopy = {
  eyebrow: "About",
  name: "Nguyen Chi Thanh",
  role: "Product Backend Engineer / Tech Lead",
  motto: "Discipline. Dedication. [[Nothing is impossible.]]",
  support:
    "5+ years building and operating live systems in edtech and SaaS. I care about production reliability — when incidents hit, I trace to the root, recover data, and bring services back. With clear scope and relentless execution, nothing is off the table.",
  location: "HCM · Vietnam",
  mindsetEyebrow: "Mindset",
  mindsetTitle: "How I show up every day",
  mindset: [
    {
      title: "Obsessed with live systems",
      body: "Pretty code is not enough. I invest in observability, load tests, and peak-hour stability — production is the real pitch.",
    },
    {
      title: "Train like a pro",
      body: "Cristiano Ronaldo energy: daily discipline over luck. Incidents, reviews, and design get a rhythm and a standard.",
    },
    {
      title: "Nothing is impossible",
      body: "Laravel monolith → Golang microservices. Legacy PHP → NestJS. Peak outages → data recovery. Clear goal, find the path, ship.",
    },
  ],
  experienceEyebrow: "Experience",
  experienceTitle: "Built on real products",
  experienceSupport:
    "Edtech, merchant SaaS, outsourcing — one compass: keep production stable and solve the business problem.",
  experiences: [
    {
      company: "Marathon Education",
      role: "Backend Engineer (Product)",
      period: "09/2022 – 05/2025",
      focus: "Production reliability · Golang · Observability",
      bullets: [
        "Led peak-hour incident response when bad data blocked live classes — data recovery restored access.",
        "Hardened observability with Prometheus, Grafana, structured logging; K6 before high-traffic windows.",
        "Proposed and helped migrate Laravel monolith → Golang microservices for scale.",
        "Shipped production integrations: ClassIn, Zalo ZNS, HubSpot, Mailgun.",
      ],
      stack: ["Golang", "Laravel", "Redis", "Kafka", "MySQL", "K6", "Prometheus", "Grafana"],
    },
    {
      company: "Myspa",
      role: "Backend Engineer (Product)",
      period: "01/2021 – 08/2022",
      focus: "Merchant SaaS · Legacy · Mini Apps",
      bullets: [
        "Maintained the live merchant core for spa/salon/clinic: appointments, CRM, operations.",
        "Joined from day one on a unified Mini App across Zalo, MOMO, and Tiki.",
        "Built APIs and integrations for merchant data and booking flows per platform.",
      ],
      stack: ["Laravel", "CodeIgniter", "MySQL", "Redis"],
    },
    {
      company: "Splus Software",
      role: "Software Engineer / Tech Lead",
      period: "02/2024 – Present",
      focus: "Architecture · Team lead · NestJS microservices",
      bullets: [
        "Re-architected legacy PHP → NestJS microservices; Grafana monitoring + logging pipelines.",
        "Led 5 engineers across 3 concurrent projects; mentoring, sharing, architecture reviews.",
        "Mitigated production Next.js library vulnerabilities without downtime.",
        "Designed AI-assisted workflows with human review for safe legacy analysis.",
      ],
      stack: ["NestJS", "Redis", "RabbitMQ", "MySQL", "Grafana", "Docker"],
    },
  ],
  focusEyebrow: "Core focus",
  focusTitle: "What I bring",
  focusItems: [
    {
      title: "Product backend",
      body: "Partner with PO/BA, design solutions, ship stable releases on live products.",
    },
    {
      title: "Production operations",
      body: "Incident response, RCA, data recovery — cut downtime when real users are waiting.",
    },
    {
      title: "Observability",
      body: "Prometheus, Grafana, tracing, logging, K6 — see issues before customers report them.",
    },
    {
      title: "System design",
      body: "Monolith → microservices, messaging (Kafka, RabbitMQ), long-term scale and maintainability.",
    },
  ],
  skillsLabel: "Stack & practices",
  skills: [
    "Golang",
    "NestJS",
    "Laravel",
    "TypeScript",
    "MySQL",
    "Redis",
    "Kafka",
    "RabbitMQ",
    "Prometheus",
    "Grafana",
    "K6",
    "Docker",
    "GitLab CI/CD",
    "System design",
    "Incident response",
  ],
  ctaEyebrow: "Next step",
  ctaTitle: "Let's ship the system you need",
  ctaSupport:
    "Hard problem? Tell me the goal — I'll lock scope, design, and operate until it runs clean.",
  ctaPrimary: "Get a quote",
  ctaSecondary: "Chat on Zalo",
  links: {
    email: "Email",
    zalo: "Zalo",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};

const de: AboutCopy = {
  ...en,
  eyebrow: "Über mich",
  name: "Nguyen Chi Thanh",
  role: "Product Backend Engineer / Tech Lead",
  motto: "Disziplin. Einsatz. [[Nichts ist unmöglich.]]",
  support:
    "5+ Jahre Aufbau und Betrieb von Live-Systemen in EdTech & SaaS. Ich stehe für Production Reliability — bei Incidents bis zur Ursache, Datenrettung, Restart. Mit klarem Scope und Einsatz ist nichts unmöglich.",
  location: "HCM · Vietnam",
  mindsetEyebrow: "Mindset",
  mindsetTitle: "So arbeite ich jeden Tag",
  experienceEyebrow: "Erfahrung",
  experienceTitle: "Auf echten Produkten gebaut",
  focusEyebrow: "Fokus",
  focusTitle: "Was ich mitbringe",
  ctaEyebrow: "Nächster Schritt",
  ctaTitle: "Lassen Sie uns Ihr System shippen",
  ctaSupport:
    "Schwieriges Problem? Nennen Sie das Ziel — ich klarisiere Scope, designe und betreibe bis es stabil läuft.",
  ctaPrimary: "Angebot anfordern",
  ctaSecondary: "Zalo-Chat",
};

const ja: AboutCopy = {
  ...en,
  eyebrow: "紹介",
  name: "Nguyen Chi Thanh",
  role: "Product Backend Engineer / Tech Lead",
  motto: "規律。献身。[[不可能はない。]]",
  support:
    "EdTech・SaaSでライブシステムを5年以上構築・運用。本番の信頼性にこだわり、インシデントでは原因追跡・データ復旧・復旧までやり切る。スコープが明確でやり切る意思があれば、できないことはない。",
  location: "HCM · Vietnam",
  mindsetEyebrow: "マインドセット",
  mindsetTitle: "毎日の仕事のスタンス",
  experienceEyebrow: "経験",
  experienceTitle: "実プロダクトでの軌跡",
  focusEyebrow: "フォーカス",
  focusTitle: "提供できる価値",
  ctaEyebrow: "次の一歩",
  ctaTitle: "必要なシステムを一緒に届けましょう",
  ctaSupport:
    "難しい課題でもゴールを教えてください。スコープを固め、設計し、安定稼働まで伴走します。",
  ctaPrimary: "見積もりを依頼",
  ctaSecondary: "Zaloでチャット",
};

const zh: AboutCopy = {
  ...en,
  eyebrow: "介绍",
  name: "Nguyen Chi Thanh",
  role: "Product Backend Engineer / Tech Lead",
  motto: "纪律。专注。[[没有什么不可能。]]",
  support:
    "5+ 年在 edtech 与 SaaS 构建并运营线上系统。我专注生产可靠性——事故发生时追到根因、恢复数据、把服务拉回来。范围清晰、执行到位，就没有做不到的事。",
  location: "HCM · Vietnam",
  mindsetEyebrow: "心态",
  mindsetTitle: "我每天如何工作",
  experienceEyebrow: "经历",
  experienceTitle: "真实产品上的路径",
  focusEyebrow: "核心能力",
  focusTitle: "我能带来什么",
  ctaEyebrow: "下一步",
  ctaTitle: "一起交付你需要的系统",
  ctaSupport: "难题？说出目标——我会锁定范围、设计并运维到稳定运行。",
  ctaPrimary: "获取报价",
  ctaSecondary: "Zalo 沟通",
};

export const aboutCopy: Record<Locale, AboutCopy> = { vi, en, de, ja, zh };

export function getAboutCopy(locale: Locale): AboutCopy {
  return aboutCopy[locale];
}
