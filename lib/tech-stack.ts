import type { Locale } from "@/lib/i18n/types";

export const TECH_SLUGS = [
  "react",
  "nextjs",
  "typescript",
  "tailwind",
  "nodejs",
  "flutter",
  "react-native",
  "postgresql",
  "docker",
  "nestjs",
  "express",
  "strapi",
  "aws",
  "kubernetes",
  "grafana",
  "elasticsearch",
  "redis",
  "terraform",
] as const;

export type TechSlug = (typeof TECH_SLUGS)[number];

export function isTechSlug(value: string): value is TechSlug {
  return (TECH_SLUGS as readonly string[]).includes(value);
}

/** Display name on TechStack → internal slug */
export const TECH_NAME_TO_SLUG: Record<string, TechSlug> = {
  React: "react",
  "Next.js": "nextjs",
  TypeScript: "typescript",
  Tailwind: "tailwind",
  "Node.js": "nodejs",
  Flutter: "flutter",
  "React Native": "react-native",
  PostgreSQL: "postgresql",
  Docker: "docker",
  NestJS: "nestjs",
  Express: "express",
  Strapi: "strapi",
  AWS: "aws",
  Kubernetes: "kubernetes",
  Grafana: "grafana",
  Elasticsearch: "elasticsearch",
  Redis: "redis",
  Terraform: "terraform",
};

export type TechDetail = {
  name: string;
  color: string;
  officialUrl: string;
  tagline: string;
  intro: string;
  highlights: string[];
  features: { title: string; body: string }[];
};

export type TechDetailUi = {
  back: string;
  highlightsTitle: string;
  featuresTitle: string;
  visitOfficial: string;
  sourceNote: string;
};

type TechCopy = {
  tagline: string;
  intro: string;
  highlights: string[];
  features: { title: string; body: string }[];
};

type TechMeta = {
  name: string;
  color: string;
  officialUrl: string;
};

const ui: Record<Locale, TechDetailUi> = {
  vi: {
    back: "← Về Tech stack",
    highlightsTitle: "Điểm nổi bật",
    featuresTitle: "Vì sao dùng",
    visitOfficial: "Mở trang official",
    sourceNote:
      "Nội dung tóm tắt theo homepage official — dùng nội bộ cho preview nhanh.",
  },
  en: {
    back: "← Back to Tech stack",
    highlightsTitle: "Highlights",
    featuresTitle: "Why teams use it",
    visitOfficial: "Open official site",
    sourceNote:
      "Summary inspired by the official homepage — cached here for fast preview.",
  },
  ja: {
    back: "← 技術スタックへ戻る",
    highlightsTitle: "ハイライト",
    featuresTitle: "選ばれる理由",
    visitOfficial: "公式サイトを開く",
    sourceNote:
      "公式ホームページを基にした要約です。プレビュー高速化のためローカルに保持しています。",
  },


};

const meta: Record<TechSlug, TechMeta> = {
  react: {
    name: "React",
    color: "#61DAFB",
    officialUrl: "https://react.dev/",
  },
  nextjs: {
    name: "Next.js",
    color: "#111111",
    officialUrl: "https://nextjs.org/",
  },
  typescript: {
    name: "TypeScript",
    color: "#3178C6",
    officialUrl: "https://www.typescriptlang.org/",
  },
  tailwind: {
    name: "Tailwind CSS",
    color: "#06B6D4",
    officialUrl: "https://tailwindcss.com/",
  },
  nodejs: {
    name: "Node.js",
    color: "#339933",
    officialUrl: "https://nodejs.org/",
  },
  flutter: {
    name: "Flutter",
    color: "#02569B",
    officialUrl: "https://flutter.dev/",
  },
  "react-native": {
    name: "React Native",
    color: "#61DAFB",
    officialUrl: "https://reactnative.dev/",
  },
  postgresql: {
    name: "PostgreSQL",
    color: "#4169E1",
    officialUrl: "https://www.postgresql.org/",
  },
  docker: {
    name: "Docker",
    color: "#2496ED",
    officialUrl: "https://www.docker.com/",
  },
  nestjs: {
    name: "NestJS",
    color: "#E0234E",
    officialUrl: "https://nestjs.com/",
  },
  express: {
    name: "Express",
    color: "#444444",
    officialUrl: "https://expressjs.com/",
  },
  strapi: {
    name: "Strapi",
    color: "#4945FF",
    officialUrl: "https://strapi.io/",
  },
  aws: {
    name: "AWS",
    color: "#FF9900",
    officialUrl: "https://aws.amazon.com/",
  },
  kubernetes: {
    name: "Kubernetes",
    color: "#326CE5",
    officialUrl: "https://kubernetes.io/",
  },
  grafana: {
    name: "Grafana",
    color: "#F46800",
    officialUrl: "https://grafana.com/",
  },
  elasticsearch: {
    name: "Elasticsearch",
    color: "#005571",
    officialUrl: "https://www.elastic.co/elasticsearch",
  },
  redis: {
    name: "Redis",
    color: "#DC382D",
    officialUrl: "https://redis.io/",
  },
  terraform: {
    name: "Terraform",
    color: "#7B42BC",
    officialUrl: "https://www.terraform.io/",
  },
};

const copyByLocale: Record<Locale, Record<TechSlug, TechCopy>> = {
  en: {
    react: {
      tagline: "The library for web and native user interfaces",
      intro: "React lets you build user interfaces out of individual pieces called components. Create your own components, then combine them into entire screens, pages, and apps.",
      highlights: [
        "Component-based UI for web and native",
        "Declarative rendering with a predictable data flow",
        "Huge ecosystem — Next.js, React Native, tooling, and more",
        "Used by Meta and thousands of product teams worldwide",
      ],
      features: [
        {
          title: "Create user interfaces from components",
          body: "React components are JavaScript functions. You can pass markup and data with props, then nest components to compose complex UIs.",
        },
        {
          title: "Write components with code and markup",
          body: "JSX mixes markup with JavaScript logic so UI and behavior stay close. React keeps the DOM in sync when state changes.",
        },
        {
          title: "Add interactivity wherever you need it",
          body: "State and effects let components respond to user input. Share logic with hooks across your application.",
        },
      ],
    },
    nextjs: {
      tagline: "The React Framework for the Web",
      intro: "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components and production-ready defaults.",
      highlights: [
        "App Router with server and client components",
        "Built-in routing, data fetching, and caching",
        "Static, SSR, and hybrid rendering options",
        "Optimized images, fonts, and bundling out of the box",
      ],
      features: [
        {
          title: "Ship faster with conventions",
          body: "File-system routing, layouts, and loading UI patterns reduce boilerplate so teams focus on product features.",
        },
        {
          title: "Full-stack React",
          body: "Server Actions, route handlers, and middleware bring backend capabilities next to your UI without a separate API service for many apps.",
        },
        {
          title: "Performance by default",
          body: "Automatic code splitting, streaming, and image optimization help pages stay fast as they grow.",
        },
      ],
    },
    typescript: {
      tagline: "JavaScript with syntax for types",
      intro: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale — from editor autocomplete to safer refactors.",
      highlights: [
        "Static types that compile down to plain JavaScript",
        "Excellent IDE support and incremental adoption",
        "Catch bugs before runtime across large codebases",
        "Works with React, Node.js, NestJS, and modern tooling",
      ],
      features: [
        {
          title: "Types you can grow into",
          body: "Start with JavaScript files, add types where they help most, and tighten contracts as the project matures.",
        },
        {
          title: "Confident refactors",
          body: "Interfaces, generics, and the type checker make large renames and API changes safer for product teams.",
        },
        {
          title: "Ecosystem ready",
          body: "DefinitelyTyped and first-party types cover browsers, Node, and popular libraries used in production apps.",
        },
      ],
    },
    tailwind: {
      tagline: "Rapidly build modern websites without leaving your HTML",
      intro: "A utility-first CSS framework packed with classes like flex, pt-4, and text-center that can be composed to build any design, directly in your markup.",
      highlights: [
        "Utility-first styling without leaving your templates",
        "Design system tokens via configuration",
        "Tiny production CSS with automatic unused-class removal",
        "Works great with React, Next.js, and component libraries",
      ],
      features: [
        {
          title: "Build anything",
          body: "Compose small utilities into custom designs instead of fighting opinionated component CSS from a UI kit.",
        },
        {
          title: "Responsive by default",
          body: "Breakpoint prefixes make mobile-first layouts readable and consistent across the marketing site and app UI.",
        },
        {
          title: "Ship less CSS",
          body: "Only the classes you use make it into production bundles, keeping pages light as the design system grows.",
        },
      ],
    },
    nodejs: {
      tagline: "Run JavaScript Everywhere",
      intro: "Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, tools, and scalable network applications.",
      highlights: [
        "Event-driven, non-blocking I/O for scalable services",
        "npm — the largest package ecosystem for JavaScript",
        "Same language across browser, server, and tooling",
        "Foundation for NestJS, Express, Next.js API routes, and more",
      ],
      features: [
        {
          title: "Build APIs and backends",
          body: "HTTP servers, WebSockets, queues, and CLI tools share one runtime and a familiar JavaScript/TypeScript stack.",
        },
        {
          title: "Open source & cross-platform",
          body: "Runs on Linux, macOS, and Windows — the default runtime for modern JavaScript backend teams.",
        },
        {
          title: "Performance & community",
          body: "V8 under the hood, LTS releases, and a massive community keep production workloads supported long-term.",
        },
      ],
    },
    flutter: {
      tagline: "Build apps for any screen",
      intro: "Flutter is Google's UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
      highlights: [
        "One codebase for iOS, Android, web, and desktop",
        "Expressive, flexible UI with Material and Cupertino widgets",
        "Hot reload for fast UI iteration",
        "Compiled to native code for smooth performance",
      ],
      features: [
        {
          title: "Beautiful UIs fast",
          body: "Rich widget catalog and custom painting APIs help teams ship polished product screens without fighting platform differences.",
        },
        {
          title: "Native performance",
          body: "Flutter compiles to ARM/x64 machine code and uses its own rendering engine for consistent 60/120fps experiences.",
        },
        {
          title: "Reach every device",
          body: "Ship the same product logic to phones, tablets, browsers, and desktops when one team owns the full client.",
        },
      ],
    },
    "react-native": {
      tagline: "Learn once, write anywhere",
      intro: "Create native apps for Android and iOS using React. React Native lets you use a single JavaScript codebase to power truly native mobile experiences.",
      highlights: [
        "Native UI components with a React programming model",
        "Share business logic with your web React apps",
        "Large ecosystem — Expo, navigation, native modules",
        "Used in production by Meta and many consumer apps",
      ],
      features: [
        {
          title: "Native feel",
          body: "Render platform primitives instead of a WebView so gestures, accessibility, and performance feel like a native app.",
        },
        {
          title: "One team, more platforms",
          body: "Reuse React skills and shared modules across web and mobile while still dropping to native code when needed.",
        },
        {
          title: "Iterate quickly",
          body: "Fast Refresh and a strong debugging story shorten the loop from design change to device preview.",
        },
      ],
    },
    postgresql: {
      tagline: "The World's Most Advanced Open Source Relational Database",
      intro: "PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development and a proven architecture for reliability and data integrity.",
      highlights: [
        "ACID-compliant relational database",
        "JSON/JSONB, full-text search, and rich extensions",
        "Strong concurrency with MVCC",
        "Runs everywhere — cloud, containers, and on-prem",
      ],
      features: [
        {
          title: "Reliability first",
          body: "Battle-tested storage, replication, and backup tooling make Postgres a default choice for product data stores.",
        },
        {
          title: "More than tables",
          body: "Use relational schemas alongside document-style JSON, GIS, and custom types without leaving one database.",
        },
        {
          title: "Open source standard",
          body: "No lock-in vendor tax — wide hosting options and a vibrant extension ecosystem (PostGIS, pgvector, and more).",
        },
      ],
    },
    docker: {
      tagline: "Develop faster. Run anywhere.",
      intro: "Docker helps developers build, share, and run applications in containers — consistent environments from a laptop to CI to production.",
      highlights: [
        "Package apps with dependencies into portable images",
        "Same runtime locally, in CI, and in the cloud",
        "Compose multi-service stacks for local development",
        "Foundation for Kubernetes and modern DevOps workflows",
      ],
      features: [
        {
          title: "Eliminate “works on my machine”",
          body: "Containers capture OS packages, runtimes, and app code so every engineer and every environment starts from the same image.",
        },
        {
          title: "Ship with confidence",
          body: "Build once, promote the same artifact through staging and production with registries and CI pipelines.",
        },
        {
          title: "Scale the platform",
          body: "From a single Compose file to orchestrators, Docker is the common packaging layer for microservices and agents.",
        },
      ],
    },
    nestjs: {
      tagline: "A progressive Node.js framework for building efficient server-side applications",
      intro: "NestJS uses TypeScript and progressive architecture inspired by Angular — modules, providers, and dependency injection — to structure scalable Node backends.",
      highlights: [
        "Opinionated structure for large Node/TypeScript APIs",
        "First-class support for REST, GraphQL, microservices, and WebSockets",
        "Built on Express (or Fastify) with a clean DI container",
        "Great fit for enterprise and product backend teams",
      ],
      features: [
        {
          title: "Architecture that scales",
          body: "Modules and providers keep domains separated as the API grows — easier onboarding and clearer ownership.",
        },
        {
          title: "Platform flexibility",
          body: "Swap HTTP adapters, add queues, or connect microservices without rewriting business logic.",
        },
        {
          title: "TypeScript-native",
          body: "Decorators, DTOs, and validation pipes keep contracts explicit between controllers and services.",
        },
      ],
    },
    express: {
      tagline: "Fast, unopinionated, minimalist web framework for Node.js",
      intro: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      highlights: [
        "Minimal core — add only the middleware you need",
        "Huge middleware ecosystem for auth, logging, and APIs",
        "De-facto standard for Node HTTP servers",
        "Powers NestJS defaults and countless production APIs",
      ],
      features: [
        {
          title: "Simple routing",
          body: "Define HTTP methods and paths clearly, then compose middleware for cross-cutting concerns.",
        },
        {
          title: "Unopinionated",
          body: "Choose your own structure, ORMs, and validators — Express stays out of the way for small services and prototypes.",
        },
        {
          title: "Battle-tested",
          body: "Years of production use and community middleware make Express a reliable foundation for APIs and gateways.",
        },
      ],
    },
    strapi: {
      tagline: "The leading open-source headless CMS",
      intro: "Strapi is an open-source headless CMS that helps teams manage content through an admin panel and deliver it via REST or GraphQL APIs to any frontend.",
      highlights: [
        "Self-hosted or cloud headless CMS",
        "Custom content types without writing boilerplate APIs",
        "REST & GraphQL out of the box",
        "Role-based access for editors and developers",
      ],
      features: [
        {
          title: "Content for any channel",
          body: "Decouple editorial workflows from Next.js, mobile, or marketing sites — one CMS, many frontends.",
        },
        {
          title: "Developer-friendly",
          body: "Customize controllers, services, and plugins in JavaScript/TypeScript when the default admin panel is not enough.",
        },
        {
          title: "Ship content faster",
          body: "Editors work in a familiar UI while engineers keep full control of schema, permissions, and delivery APIs.",
        },
      ],
    },
    aws: {
      tagline: "Cloud infrastructure for scalable products",
      intro: "Amazon Web Services provides compute, storage, networking, and managed data services so teams can deploy and grow production systems without owning a data center.",
      highlights: [
        "Global regions and managed building blocks (EC2, S3, RDS, Lambda…)",
        "Security, IAM, and compliance tooling for production workloads",
        "Pay-as-you-go capacity that scales with traffic",
        "Deep ecosystem of observability and deployment integrations",
      ],
      features: [
        {
          title: "Ship on managed primitives",
          body: "Use VMs, containers, serverless, and managed databases instead of racking hardware — focus engineering time on product logic.",
        },
        {
          title: "Operate with guardrails",
          body: "IAM, VPC, and audit logs help keep environments separated and reviewable as the stack grows.",
        },
        {
          title: "Grow without replatforming",
          body: "Start small, then add CDN, queues, and autoscaling when demand appears — same cloud, clearer stages.",
        },
      ],
    },
    kubernetes: {
      tagline: "Container orchestration at scale",
      intro: "Kubernetes automates deployment, scaling, and operations of containerized applications across clusters — the de facto control plane for modern microservices.",
      highlights: [
        "Declarative deployments, rollouts, and rollbacks",
        "Service discovery, load balancing, and self-healing",
        "Works with Docker images and cloud/on-prem clusters",
        "Huge ecosystem: Helm, operators, GitOps tooling",
      ],
      features: [
        {
          title: "Standardize how services run",
          body: "Pods, Deployments, and Services give every app the same lifecycle — easier ops across teams.",
        },
        {
          title: "Scale with demand",
          body: "Horizontal pod autoscaling and resource limits keep workloads responsive without manual SSH firefighting.",
        },
        {
          title: "Portable by design",
          body: "The same manifests can target managed K8s (EKS/GKE/AKS) or a private cluster when requirements change.",
        },
      ],
    },
    grafana: {
      tagline: "Observability dashboards for metrics, logs, and traces",
      intro: "Grafana helps teams visualize and alert on operational data from Prometheus, Loki, Tempo, cloud providers, and more — one pane for system health.",
      highlights: [
        "Rich dashboards for metrics, logs, and traces",
        "Alerting rules tied to real signals",
        "Plugins for popular datasources and clouds",
        "Shareable views for eng, SRE, and stakeholders",
      ],
      features: [
        {
          title: "See the system, not just logs",
          body: "Correlate latency, errors, and saturation so incidents get diagnosed faster.",
        },
        {
          title: "Alert on what matters",
          body: "Route actionable alerts instead of noisy thresholds that everyone ignores.",
        },
        {
          title: "Fit the stack you already run",
          body: "Connect Prometheus, Elasticsearch, CloudWatch, and others without rebuilding telemetry.",
        },
      ],
    },
    elasticsearch: {
      tagline: "Search and analytics engine for logs and content",
      intro: "Elasticsearch is a distributed search and analytics engine used for full-text search, log aggregation, and near-real-time analysis across large datasets.",
      highlights: [
        "Full-text search with relevance ranking",
        "Scalable indexing for logs and events",
        "Aggregations for operational and product analytics",
        "Pairs with Kibana / OpenSearch dashboards in many stacks",
      ],
      features: [
        {
          title: "Find needles in product data",
          body: "Power search boxes, filters, and faceted navigation when SQL alone is not enough.",
        },
        {
          title: "Centralize operational signals",
          body: "Ingest app and infra logs for investigation during incidents and audits.",
        },
        {
          title: "Analyze at ingest speed",
          body: "Near-real-time indexes keep dashboards and alerts close to live traffic.",
        },
      ],
    },
    redis: {
      tagline: "In-memory data store for speed and coordination",
      intro: "Redis is an open-source in-memory data structure store used as a cache, message broker, session store, and fast ephemeral database.",
      highlights: [
        "Sub-millisecond reads and writes",
        "Structures: strings, hashes, lists, sets, streams",
        "Pub/Sub and streams for lightweight messaging",
        "Common companion to PostgreSQL-backed APIs",
      ],
      features: [
        {
          title: "Cut hot-path latency",
          body: "Cache frequent queries and session data so APIs stay snappy under load.",
        },
        {
          title: "Coordinate workers",
          body: "Queues, locks, and rate limits help background jobs and APIs stay consistent.",
        },
        {
          title: "Simple operational footprint",
          body: "Managed Redis or a small instance covers most SMB product needs before heavier brokers.",
        },
      ],
    },
    terraform: {
      tagline: "Infrastructure as code",
      intro: "Terraform lets teams define cloud resources in declarative configuration, plan changes safely, and apply reproducible infrastructure across environments.",
      highlights: [
        "Declarative IaC for major clouds and SaaS providers",
        "Plan → apply workflow with reviewable diffs",
        "Modules for reusable environment patterns",
        "State tracking for long-lived infrastructure",
      ],
      features: [
        {
          title: "Environments you can repeat",
          body: "Dev, staging, and prod stay aligned because networking and services are coded, not clicked.",
        },
        {
          title: "Safer changes",
          body: "Plans show what will be created, updated, or destroyed before anything hits production.",
        },
        {
          title: "Team-scale ops",
          body: "Modules and remote state help multiple engineers collaborate without snowflake servers.",
        },
      ],
    }
},
  vi: {
    react: {
      tagline: "Thư viện cho giao diện web và native",
      intro: "React giúp bạn dựng giao diện từ các mảnh nhỏ gọi là component. Tự tạo component, rồi ghép thành màn hình, trang và ứng dụng hoàn chỉnh.",
      highlights: [
        "UI theo component cho web và native",
        "Render khai báo với luồng dữ liệu dễ đoán",
        "Hệ sinh thái lớn — Next.js, React Native, tooling…",
        "Được Meta và hàng nghìn đội sản phẩm dùng",
      ],
      features: [
        {
          title: "Tạo UI từ component",
          body: "Component React là hàm JavaScript. Truyền markup và dữ liệu qua props, lồng component để dựng UI phức tạp.",
        },
        {
          title: "Viết component bằng code và markup",
          body: "JSX kết hợp markup với logic JavaScript. React đồng bộ DOM khi state thay đổi.",
        },
        {
          title: "Thêm tương tác khi cần",
          body: "State và effect giúp component phản hồi người dùng. Chia sẻ logic bằng hooks trong toàn app.",
        },
      ],
    },
    nextjs: {
      tagline: "Framework React cho Web",
      intro: "Được nhiều công ty lớn tin dùng, Next.js giúp tạo ứng dụng web chất lượng cao với React và các mặc định sẵn sàng production.",
      highlights: [
        "App Router với server và client components",
        "Routing, data fetching và caching tích hợp",
        "Render tĩnh, SSR và hybrid",
        "Tối ưu ảnh, font và bundling sẵn",
      ],
      features: [
        {
          title: "Ship nhanh nhờ convention",
          body: "Routing theo file, layout và loading UI giảm boilerplate để đội ngũ tập trung vào sản phẩm.",
        },
        {
          title: "Full-stack React",
          body: "Server Actions, route handlers và middleware mang backend sát UI mà không cần API riêng cho nhiều app.",
        },
        {
          title: "Hiệu năng mặc định",
          body: "Code splitting, streaming và tối ưu ảnh giúp trang vẫn nhanh khi mở rộng.",
        },
      ],
    },
    typescript: {
      tagline: "JavaScript với cú pháp kiểu dữ liệu",
      intro: "TypeScript là ngôn ngữ kiểu mạnh xây trên JavaScript, mang lại tooling tốt hơn ở mọi quy mô — từ gợi ý editor đến refactor an toàn hơn.",
      highlights: [
        "Kiểu tĩnh biên dịch ra JavaScript thuần",
        "Hỗ trợ IDE tốt, áp dụng dần được",
        "Bắt lỗi trước runtime trên codebase lớn",
        "Tương thích React, Node.js, NestJS và tooling hiện đại",
      ],
      features: [
        {
          title: "Kiểu dữ liệu mở rộng dần",
          body: "Bắt đầu từ file JavaScript, thêm type nơi cần nhất, siết hợp đồng API khi dự án lớn lên.",
        },
        {
          title: "Refactor tự tin",
          body: "Interface, generic và type checker giúp đổi tên và đổi API an toàn hơn cho đội sản phẩm.",
        },
        {
          title: "Sẵn sàng hệ sinh thái",
          body: "DefinitelyTyped và type chính thức phủ trình duyệt, Node và thư viện phổ biến.",
        },
      ],
    },
    tailwind: {
      tagline: "Dựng website hiện đại nhanh mà không rời HTML",
      intro: "Framework CSS utility-first với các class như flex, pt-4, text-center — ghép lại để tạo mọi thiết kế ngay trong markup.",
      highlights: [
        "Styling utility-first ngay trong template",
        "Token design system qua cấu hình",
        "CSS production nhỏ nhờ loại class thừa",
        "Hợp với React, Next.js và component library",
      ],
      features: [
        {
          title: "Dựng mọi layout",
          body: "Ghép utility nhỏ thành thiết kế riêng thay vì bị CSS kit áp đặt.",
        },
        {
          title: "Responsive mặc định",
          body: "Prefix breakpoint giúp layout mobile-first dễ đọc trên site marketing và app UI.",
        },
        {
          title: "Ít CSS hơn khi ship",
          body: "Chỉ class dùng thật vào bundle production, trang vẫn nhẹ khi design system lớn.",
        },
      ],
    },
    nodejs: {
      tagline: "Chạy JavaScript mọi nơi",
      intro: "Node.js® là runtime JavaScript miễn phí, mã mở, đa nền tảng — giúp lập trình viên tạo server, tool và ứng dụng mạng mở rộng được.",
      highlights: [
        "I/O event-driven, non-blocking cho dịch vụ scale",
        "npm — hệ sinh thái package JavaScript lớn nhất",
        "Cùng ngôn ngữ cho browser, server và tooling",
        "Nền tảng cho NestJS, Express, API Next.js…",
      ],
      features: [
        {
          title: "Xây API và backend",
          body: "HTTP server, WebSocket, queue và CLI dùng chung một runtime và stack JavaScript/TypeScript quen thuộc.",
        },
        {
          title: "Mã mở & đa nền tảng",
          body: "Chạy trên Linux, macOS, Windows — runtime mặc định cho backend JavaScript hiện đại.",
        },
        {
          title: "Hiệu năng & cộng đồng",
          body: "V8, bản LTS và cộng đồng lớn giúp workload production được hỗ trợ lâu dài.",
        },
      ],
    },
    flutter: {
      tagline: "Xây app cho mọi màn hình",
      intro: "Flutter là bộ công cụ UI của Google để tạo ứng dụng đẹp, biên dịch native cho mobile, web và desktop từ một codebase.",
      highlights: [
        "Một codebase cho iOS, Android, web và desktop",
        "UI linh hoạt với Material và Cupertino",
        "Hot reload để iterate UI nhanh",
        "Biên dịch native cho hiệu năng mượt",
      ],
      features: [
        {
          title: "UI đẹp, ship nhanh",
          body: "Katalog widget phong phú và API vẽ tùy chỉnh giúp ra màn hình sản phẩm mà không phải đấu với khác biệt nền tảng.",
        },
        {
          title: "Hiệu năng native",
          body: "Flutter biên dịch ARM/x64 và dùng engine render riêng cho trải nghiệm 60/120fps ổn định.",
        },
        {
          title: "Phủ mọi thiết bị",
          body: "Cùng logic sản phẩm lên điện thoại, tablet, trình duyệt và desktop khi một đội sở hữu toàn bộ client.",
        },
      ],
    },
    "react-native": {
      tagline: "Học một lần, viết mọi nơi",
      intro: "Tạo app native Android và iOS bằng React. React Native dùng một codebase JavaScript để mang trải nghiệm mobile thật sự native.",
      highlights: [
        "Component UI native với mô hình React",
        "Chia sẻ business logic với React web",
        "Hệ sinh thái lớn — Expo, navigation, native modules",
        "Dùng production bởi Meta và nhiều consumer app",
      ],
      features: [
        {
          title: "Cảm giác native",
          body: "Render primitive nền tảng thay vì WebView — gesture, a11y và hiệu năng như app native.",
        },
        {
          title: "Một đội, nhiều nền tảng",
          body: "Tái dùng kỹ năng React và module chung cho web/mobile, vẫn xuống native khi cần.",
        },
        {
          title: "Iterate nhanh",
          body: "Fast Refresh và debug mạnh rút ngắn vòng từ đổi design đến xem trên thiết bị.",
        },
      ],
    },
    postgresql: {
      tagline: "Cơ sở dữ liệu quan hệ mã mở tiên tiến nhất thế giới",
      intro: "PostgreSQL là hệ CSDL object-relational mã mở mạnh mẽ, hơn 35 năm phát triển, kiến trúc tin cậy và toàn vẹn dữ liệu đã được kiểm chứng.",
      highlights: [
        "CSDL quan hệ tuân thủ ACID",
        "JSON/JSONB, full-text search và extension phong phú",
        "Đồng thời cao với MVCC",
        "Chạy mọi nơi — cloud, container, on-prem",
      ],
      features: [
        {
          title: "Tin cậy trước hết",
          body: "Lưu trữ, replication và backup đã chiến đấu thực tế khiến Postgres là lựa chọn mặc định cho dữ liệu sản phẩm.",
        },
        {
          title: "Hơn cả bảng quan hệ",
          body: "Schema quan hệ kèm JSON kiểu document, GIS và kiểu tùy chỉnh trong một database.",
        },
        {
          title: "Chuẩn mã mở",
          body: "Không khóa vendor — hosting rộng và hệ extension sống động (PostGIS, pgvector…).",
        },
      ],
    },
    docker: {
      tagline: "Phát triển nhanh hơn. Chạy mọi nơi.",
      intro: "Docker giúp lập trình viên build, chia sẻ và chạy ứng dụng trong container — môi trường nhất quán từ laptop đến CI và production.",
      highlights: [
        "Đóng gói app cùng dependency thành image di động",
        "Cùng runtime local, CI và cloud",
        "Compose stack đa dịch vụ cho dev local",
        "Nền tảng cho Kubernetes và DevOps hiện đại",
      ],
      features: [
        {
          title: "Hết “chạy được trên máy tôi”",
          body: "Container gom OS package, runtime và code app — mọi engineer và môi trường bắt đầu từ cùng một image.",
        },
        {
          title: "Ship tự tin",
          body: "Build một lần, promote cùng artifact qua staging/production với registry và CI.",
        },
        {
          title: "Scale nền tảng",
          body: "Từ một file Compose đến orchestrator, Docker là lớp đóng gói chung cho microservice và agent.",
        },
      ],
    },
    nestjs: {
      tagline: "Framework Node.js tiến bộ cho ứng dụng server-side hiệu quả",
      intro: "NestJS dùng TypeScript và kiến trúc progressive lấy cảm hứng từ Angular — module, provider, DI — để cấu trúc backend Node mở rộng được.",
      highlights: [
        "Cấu trúc rõ ràng cho API Node/TypeScript lớn",
        "Hỗ trợ tốt REST, GraphQL, microservice và WebSocket",
        "Dựa Express (hoặc Fastify) với DI sạch",
        "Phù hợp backend doanh nghiệp và sản phẩm",
      ],
      features: [
        {
          title: "Kiến trúc scale được",
          body: "Module và provider tách domain khi API lớn — onboard dễ hơn, ownership rõ hơn.",
        },
        {
          title: "Linh hoạt nền tảng",
          body: "Đổi HTTP adapter, thêm queue hoặc microservice mà không viết lại business logic.",
        },
        {
          title: "TypeScript-native",
          body: "Decorator, DTO và validation pipe giữ hợp đồng rõ giữa controller và service.",
        },
      ],
    },
    express: {
      tagline: "Framework web Node.js nhanh, tối giản, không áp đặt",
      intro: "Express là framework ứng dụng web Node.js tối giản và linh hoạt, cung cấp bộ tính năng vững cho web và mobile.",
      highlights: [
        "Core tối giản — chỉ thêm middleware cần dùng",
        "Hệ middleware lớn cho auth, logging và API",
        "Chuẩn thực tế cho HTTP server Node",
        "Nền mặc định NestJS và vô số API production",
      ],
      features: [
        {
          title: "Routing đơn giản",
          body: "Định nghĩa method và path rõ ràng, ghép middleware cho cross-cutting concerns.",
        },
        {
          title: "Không áp đặt",
          body: "Tự chọn cấu trúc, ORM và validator — Express không cản cho service nhỏ và prototype.",
        },
        {
          title: "Đã kiểm chứng thực chiến",
          body: "Nhiều năm production và middleware cộng đồng làm Express nền tin cậy cho API và gateway.",
        },
      ],
    },
    strapi: {
      tagline: "Headless CMS mã mở hàng đầu",
      intro: "Strapi là headless CMS mã mở giúp đội ngũ quản lý nội dung qua admin và phân phối qua REST hoặc GraphQL tới mọi frontend.",
      highlights: [
        "Headless CMS self-host hoặc cloud",
        "Content type tùy chỉnh không viết boilerplate API",
        "REST & GraphQL sẵn",
        "Phân quyền theo vai trò cho editor và developer",
      ],
      features: [
        {
          title: "Nội dung cho mọi kênh",
          body: "Tách workflow biên tập khỏi Next.js, mobile hay site marketing — một CMS, nhiều frontend.",
        },
        {
          title: "Thân thiện developer",
          body: "Tùy biến controller, service và plugin bằng JavaScript/TypeScript khi admin mặc định chưa đủ.",
        },
        {
          title: "Ship nội dung nhanh hơn",
          body: "Editor làm việc trên UI quen thuộc; engineer giữ kiểm soát schema, quyền và API phân phối.",
        },
      ],
    },
    aws: {
      tagline: "Hạ tầng cloud để sản phẩm scale",
      intro: "Amazon Web Services cung cấp compute, storage, mạng và dịch vụ dữ liệu managed để đội ngũ deploy/production mà không cần tự vận hành data center.",
      highlights: [
        "Region toàn cầu và khối dựng managed (EC2, S3, RDS, Lambda…)",
        "IAM, bảo mật và công cụ tuân thủ cho workload production",
        "Capacity pay-as-you-go theo traffic",
        "Hệ sinh thái quan sát và deploy sâu",
      ],
      features: [
        {
          title: "Ship trên primitive managed",
          body: "Dùng VM, container, serverless và DB managed thay vì tự dựng máy — tập trung vào logic sản phẩm.",
        },
        {
          title: "Vận hành có guardrail",
          body: "IAM, VPC và audit log giúp tách môi trường và review khi stack lớn dần.",
        },
        {
          title: "Scale không phải dựng lại",
          body: "Bắt đầu nhỏ, thêm CDN, queue và autoscaling khi có nhu cầu — cùng cloud, giai đoạn rõ.",
        },
      ],
    },
    kubernetes: {
      tagline: "Điều phối container ở quy mô lớn",
      intro: "Kubernetes tự động hóa deploy, scale và vận hành ứng dụng container trên cluster — control plane phổ biến cho microservice hiện đại.",
      highlights: [
        "Deploy khai báo, rollout và rollback",
        "Service discovery, load balancing và self-healing",
        "Chạy image Docker trên cloud hoặc on-prem",
        "Hệ sinh thái lớn: Helm, operator, GitOps",
      ],
      features: [
        {
          title: "Chuẩn hóa cách service chạy",
          body: "Pod, Deployment và Service cho mọi app cùng một vòng đời — ops dễ hơn giữa các đội.",
        },
        {
          title: "Scale theo nhu cầu",
          body: "Autoscaling và resource limit giúp workload ổn định mà không SSH chữa cháy thủ công.",
        },
        {
          title: "Portable by design",
          body: "Cùng manifest có thể chạy managed K8s (EKS/GKE/AKS) hoặc cluster riêng khi yêu cầu đổi.",
        },
      ],
    },
    grafana: {
      tagline: "Dashboard quan sát metrics, logs và traces",
      intro: "Grafana giúp đội ngũ visualize và alert trên dữ liệu vận hành từ Prometheus, Loki, Tempo, cloud provider… — một nơi xem sức khỏe hệ thống.",
      highlights: [
        "Dashboard cho metrics, logs và traces",
        "Alert gắn với tín hiệu thật",
        "Plugin datasource phổ biến",
        "Share view cho eng, SRE và stakeholder",
      ],
      features: [
        {
          title: "Nhìn hệ thống, không chỉ log",
          body: "Tương quan latency, lỗi và saturation để xử lý sự cố nhanh hơn.",
        },
        {
          title: "Alert đúng việc",
          body: "Đưa alert actionable thay vì ngưỡng ồn mà ai cũng bỏ qua.",
        },
        {
          title: "Khớp stack sẵn có",
          body: "Nối Prometheus, Elasticsearch, CloudWatch… mà không dựng lại telemetry.",
        },
      ],
    },
    elasticsearch: {
      tagline: "Search và analytics cho log lẫn nội dung",
      intro: "Elasticsearch là search/analytics engine phân tán dùng cho full-text search, gom log và phân tích gần realtime trên dataset lớn.",
      highlights: [
        "Full-text search có xếp hạng relevance",
        "Index scale cho log và event",
        "Aggregation cho analytics vận hành/sản phẩm",
        "Thường đi với Kibana / OpenSearch dashboard",
      ],
      features: [
        {
          title: "Tìm nhanh trong dữ liệu sản phẩm",
          body: "Power ô search, filter và facet khi chỉ SQL không đủ.",
        },
        {
          title: "Tập trung tín hiệu vận hành",
          body: "Ingest log app/infra để điều tra sự cố và audit.",
        },
        {
          title: "Phân tích gần realtime",
          body: "Index gần live giúp dashboard và alert bám traffic thật.",
        },
      ],
    },
    redis: {
      tagline: "In-memory store cho tốc độ và phối hợp",
      intro: "Redis là in-memory data store mã nguồn mở dùng làm cache, message broker, session store và DB tạm tốc độ cao.",
      highlights: [
        "Đọc/ghi dưới millisecond",
        "Cấu trúc: string, hash, list, set, stream",
        "Pub/Sub và stream cho messaging nhẹ",
        "Thường kèm API dựa PostgreSQL",
      ],
      features: [
        {
          title: "Giảm latency hot-path",
          body: "Cache query/session thường dùng để API vẫn nhanh khi tải cao.",
        },
        {
          title: "Phối hợp worker",
          body: "Queue, lock và rate limit giúp job nền và API nhất quán.",
        },
        {
          title: "Vận hành gọn",
          body: "Managed Redis hoặc instance nhỏ đủ cho hầu hết sản phẩm SMB trước khi cần broker nặng.",
        },
      ],
    },
    terraform: {
      tagline: "Infrastructure as code",
      intro: "Terraform giúp định nghĩa tài nguyên cloud bằng cấu hình khai báo, plan thay đổi an toàn và apply hạ tầng lặp lại giữa các môi trường.",
      highlights: [
        "IaC khai báo cho cloud và nhiều SaaS",
        "Luồng plan → apply với diff review được",
        "Module tái sử dụng theo môi trường",
        "State theo dõi hạ tầng dài hạn",
      ],
      features: [
        {
          title: "Môi trường lặp lại được",
          body: "Dev/staging/prod khớp nhau vì mạng và service được code, không click tay.",
        },
        {
          title: "Thay đổi an toàn hơn",
          body: "Plan cho thấy create/update/destroy trước khi đụng production.",
        },
        {
          title: "Ops theo đội",
          body: "Module và remote state giúp nhiều engineer cộng tác không tạo server snowflake.",
        },
      ],
    }
},
  ja: {
    react: {
      tagline: "Web とネイティブ UI のためのライブラリ",
      intro: "React はコンポーネントと呼ばれる部品から UI を組み立てます。独自コンポーネントを作り、画面・ページ・アプリへ組み合わせられます。",
      highlights: [
        "Web / ネイティブ向けコンポーネント UI",
        "予測しやすいデータフローの宣言的レンダリング",
        "大きなエコシステム — Next.js、React Native、各種ツール",
        "Meta をはじめ世界中のプロダクトチームが採用",
      ],
      features: [
        {
          title: "コンポーネントから UI を作る",
          body: "React コンポーネントは JavaScript 関数です。props でマークアップとデータを渡し、入れ子にして複雑な UI を構成します。",
        },
        {
          title: "コードとマークアップで書く",
          body: "JSX はマークアップとロジックを近づけます。状態が変わると React が DOM を同期します。",
        },
        {
          title: "必要な場所にインタラクション",
          body: "state と effect で入力に反応。hooks でアプリ全体にロジックを共有できます。",
        },
      ],
    },
    nextjs: {
      tagline: "Web のための React フレームワーク",
      intro: "世界有数の企業が採用。Next.js は React コンポーネントと本番向けデフォルトで高品質な Web アプリを作れます。",
      highlights: [
        "サーバー / クライアントコンポーネントの App Router",
        "ルーティング・データ取得・キャッシュを内蔵",
        "静的・SSR・ハイブリッド描画",
        "画像・フォント・バンドル最適化が標準",
      ],
      features: [
        {
          title: "規約で速く出荷",
          body: "ファイルシステムルーティングやレイアウト、ローディング UI でボイラープレートを減らし、機能に集中できます。",
        },
        {
          title: "フルスタック React",
          body: "Server Actions、ルートハンドラ、ミドルウェアで、多くのアプリは別 API なしでもバックエンド機能を UI 隣に置けます。",
        },
        {
          title: "デフォルトでパフォーマンス",
          body: "自動コード分割・ストリーミング・画像最適化で、成長しても速さを維持しやすくします。",
        },
      ],
    },
    typescript: {
      tagline: "型構文付きの JavaScript",
      intro: "TypeScript は JavaScript の上に強い型を足した言語です。エディタ補完から安全なリファクタまで、規模を問わずツール体験を高めます。",
      highlights: [
        "素の JavaScript にコンパイルされる静的型",
        "優れた IDE 支援と段階的導入",
        "大規模コードでも実行前にバグを捕捉",
        "React、Node.js、NestJS などと相性良好",
      ],
      features: [
        {
          title: "育てられる型",
          body: "JS から始め、効くところに型を足し、成熟に合わせて契約を締められます。",
        },
        {
          title: "自信あるリファクタ",
          body: "interface・generics・型チェッカーが大規模な改名・API 変更を安全にします。",
        },
        {
          title: "エコシステム対応",
          body: "DefinitelyTyped と公式型定義がブラウザ、Node、主要ライブラリをカバーします。",
        },
      ],
    },
    tailwind: {
      tagline: "HTML を離れずにモダンサイトを素早く構築",
      intro: "flex や pt-4、text-center などのユーティリティをマークアップ上で組み合わせ、どんなデザインも作れる CSS フレームワークです。",
      highlights: [
        "テンプレート内で utility-first スタイリング",
        "設定によるデザインシステムトークン",
        "未使用クラス除去で本番 CSS を小さく",
        "React / Next.js / コンポーネントライブラリと相性良",
      ],
      features: [
        {
          title: "何でも組み立てる",
          body: "意見の強い UI キットの CSS と戦わず、小さな utility で独自デザインを組めます。",
        },
        {
          title: "デフォルトでレスポンシブ",
          body: "ブレークポイント接頭辞でモバイルファーストのレイアウトが読みやすく一貫します。",
        },
        {
          title: "出荷する CSS を減らす",
          body: "使うクラスだけが本番に入り、デザインシステムが成長してもページを軽く保てます。",
        },
      ],
    },
    nodejs: {
      tagline: "どこでも JavaScript を実行",
      intro: "Node.js® は無料・オープンソース・クロスプラットフォームの JavaScript ランタイムで、サーバーやツール、スケーラブルなネットワークアプリを作れます。",
      highlights: [
        "スケーラブルなイベント駆動・ノンブロッキング I/O",
        "npm — 最大級の JavaScript パッケージエコシステム",
        "ブラウザ・サーバー・ツールで同じ言語",
        "NestJS、Express、Next.js API などの基盤",
      ],
      features: [
        {
          title: "API とバックエンド",
          body: "HTTP、WebSocket、キュー、CLI が一つのランタイムと JS/TS スタックを共有します。",
        },
        {
          title: "OSS & クロスプラットフォーム",
          body: "Linux / macOS / Windows で動作 — 現代的な JS バックエンドの定番ランタイムです。",
        },
        {
          title: "性能とコミュニティ",
          body: "V8・LTS・大きなコミュニティが本番ワークロードを長期サポートします。",
        },
      ],
    },
    flutter: {
      tagline: "あらゆる画面向けアプリを構築",
      intro: "Flutter は Google の UI ツールキットで、1 つのコードベースからモバイル・Web・デスクトップ向けに美しくネイティブコンパイルされたアプリを作れます。",
      highlights: [
        "iOS / Android / Web / デスクトップで一つのコードベース",
        "Material / Cupertino による表現力ある UI",
        "ホットリロードで高速イテレーション",
        "ネイティブコードへコンパイルし滑らかな性能",
      ],
      features: [
        {
          title: "美しい UI を速く",
          body: "豊富なウィジェットと描画 API で、プラットフォーム差に悩まされず画面を出荷できます。",
        },
        {
          title: "ネイティブ性能",
          body: "ARM/x64 へコンパイルし独自レンダリングエンジンで 60/120fps を安定させます。",
        },
        {
          title: "あらゆるデバイスへ",
          body: "1 チームがクライアント全体を持つとき、同じロジックを電話・タブレット・ブラウザ・デスクトップへ届けられます。",
        },
      ],
    },
    "react-native": {
      tagline: "一度学べばどこでも書ける",
      intro: "React で Android / iOS のネイティブアプリを作成。1 つの JavaScript コードベースで真にネイティブな体験を実現します。",
      highlights: [
        "React モデルのネイティブ UI コンポーネント",
        "Web の React とビジネスロジックを共有",
        "大きなエコシステム — Expo、ナビゲーション、ネイティブモジュール",
        "Meta や多くのコンシューマーアプリで本番利用",
      ],
      features: [
        {
          title: "ネイティブな感触",
          body: "WebView ではなくプラットフォーム primitive を描画し、ジェスチャ・a11y・性能がネイティブに近づきます。",
        },
        {
          title: "1 チームで多プラットフォーム",
          body: "React スキルと共有モジュールを Web/モバイルで再利用しつつ、必要ならネイティブへ降りられます。",
        },
        {
          title: "素早く反復",
          body: "Fast Refresh と強力なデバッグで、デザイン変更から端末プレビューまでのループを短縮します。",
        },
      ],
    },
    postgresql: {
      tagline: "世界で最も先進的なオープンソース関係データベース",
      intro: "PostgreSQL は強力なオープンソースのオブジェクト関係 DB。35 年以上の開発と、信頼性とデータ整合性で実証されたアーキテクチャを持ちます。",
      highlights: [
        "ACID 準拠の関係データベース",
        "JSON/JSONB・全文検索・豊富な拡張",
        "MVCC による高い並行性",
        "クラウド・コンテナ・オンプレどこでも",
      ],
      features: [
        {
          title: "信頼性第一",
          body: "実績あるストレージ・レプリケーション・バックアップが、製品データストアの定番にします。",
        },
        {
          title: "テーブル以上",
          body: "関係スキーマとドキュメント風 JSON、GIS、独自型を一つの DB で扱えます。",
        },
        {
          title: "オープンソースの標準",
          body: "ベンダーロックなし — 広いホスティングと活発な拡張（PostGIS、pgvector など）。",
        },
      ],
    },
    docker: {
      tagline: "より速く開発。どこでも実行。",
      intro: "Docker はコンテナでアプリをビルド・共有・実行 — ノート PC から CI、本番まで一貫した環境を提供します。",
      highlights: [
        "依存関係ごとポータブルなイメージにパッケージ",
        "ローカル・CI・クラウドで同じランタイム",
        "ローカル開発向け Compose のマルチサービス",
        "Kubernetes と現代 DevOps の基盤",
      ],
      features: [
        {
          title: "「自分のマシンでは動く」をなくす",
          body: "OS パッケージ・ランタイム・アプリをイメージに閉じ込め、誰もが同じ起点から始めます。",
        },
        {
          title: "自信を持って出荷",
          body: "一度ビルドした成果物をレジストリと CI でステージングから本番へ進めます。",
        },
        {
          title: "プラットフォームを拡張",
          body: "Compose からオーケストレータまで、Docker はマイクロサービスとエージェントの共通パッケージ層です。",
        },
      ],
    },
    nestjs: {
      tagline: "効率的なサーバーサイド向けプログレッシブ Node.js フレームワーク",
      intro: "NestJS は TypeScript と Angular に着想したモジュール・プロバイダ・DI で、スケーラブルな Node バックエンドを構造化します。",
      highlights: [
        "大規模 Node/TypeScript API 向けの明確な構造",
        "REST / GraphQL / マイクロサービス / WebSocket を第一級で",
        "Express（または Fastify）上のクリーンな DI",
        "エンタープライズとプロダクト双方に適合",
      ],
      features: [
        {
          title: "スケールするアーキテクチャ",
          body: "モジュールとプロバイダでドメインを分離 — オンボーディングしやすく所有権も明確。",
        },
        {
          title: "プラットフォームの柔軟性",
          body: "HTTP アダプタの入替、キューやマイクロサービスの追加をビジネスロジック書き換えなしで。",
        },
        {
          title: "TypeScript ネイティブ",
          body: "デコレータ・DTO・検証パイプでコントローラとサービスの契約を明示します。",
        },
      ],
    },
    express: {
      tagline: "高速・非意見・ミニマルな Node.js Web フレームワーク",
      intro: "Express はミニマルで柔軟な Node.js Web フレームワークで、Web / モバイル向けに堅実な機能セットを提供します。",
      highlights: [
        "必要なミドルウェアだけ足せる最小コア",
        "認証・ログ・API 向けの巨大なミドルウェア群",
        "Node HTTP サーバーの事実上の標準",
        "NestJS の既定や無数の本番 API を支える",
      ],
      features: [
        {
          title: "シンプルなルーティング",
          body: "HTTP メソッドとパスを明確に定義し、横断関心はミドルウェアで構成します。",
        },
        {
          title: "非意見的",
          body: "構造・ORM・バリデータを自由に選べ、小さなサービスや試作を邪魔しません。",
        },
        {
          title: "実戦で検証済み",
          body: "長年の本番利用とコミュニティミドルウェアが、API とゲートウェイの信頼できる基盤になります。",
        },
      ],
    },
    strapi: {
      tagline: "リーディングなオープンソース ヘッドレス CMS",
      intro: "Strapi はオープンソースのヘッドレス CMS。管理画面でコンテンツを扱い、REST / GraphQL で任意のフロントへ配信できます。",
      highlights: [
        "セルフホストまたはクラウドのヘッドレス CMS",
        "ボイラープレート API なしでカスタムコンテンツタイプ",
        "REST & GraphQL 標準搭載",
        "編集者と開発者向けロールベース権限",
      ],
      features: [
        {
          title: "あらゆるチャネルへ",
          body: "編集ワークフローを Next.js・モバイル・マーケサイトから分離 — 1 CMS、多数フロント。",
        },
        {
          title: "開発者フレンドリー",
          body: "標準管理画面で足りないとき、JS/TS でコントローラ・サービス・プラグインを拡張できます。",
        },
        {
          title: "コンテンツを速く出荷",
          body: "編集者は慣れた UI、エンジニアはスキーマ・権限・配信 API を完全にコントロール。",
        },
      ],
    },
    aws: {
      tagline: "Cloud infrastructure for scalable products",
      intro: "Amazon Web Services provides compute, storage, networking, and managed data services so teams can deploy and grow production systems without owning a data center.",
      highlights: [
        "Global regions and managed building blocks (EC2, S3, RDS, Lambda…)",
        "Security, IAM, and compliance tooling for production workloads",
        "Pay-as-you-go capacity that scales with traffic",
        "Deep ecosystem of observability and deployment integrations",
      ],
      features: [
        {
          title: "Ship on managed primitives",
          body: "Use VMs, containers, serverless, and managed databases instead of racking hardware — focus engineering time on product logic.",
        },
        {
          title: "Operate with guardrails",
          body: "IAM, VPC, and audit logs help keep environments separated and reviewable as the stack grows.",
        },
        {
          title: "Grow without replatforming",
          body: "Start small, then add CDN, queues, and autoscaling when demand appears — same cloud, clearer stages.",
        },
      ],
    },
    kubernetes: {
      tagline: "Container orchestration at scale",
      intro: "Kubernetes automates deployment, scaling, and operations of containerized applications across clusters — the de facto control plane for modern microservices.",
      highlights: [
        "Declarative deployments, rollouts, and rollbacks",
        "Service discovery, load balancing, and self-healing",
        "Works with Docker images and cloud/on-prem clusters",
        "Huge ecosystem: Helm, operators, GitOps tooling",
      ],
      features: [
        {
          title: "Standardize how services run",
          body: "Pods, Deployments, and Services give every app the same lifecycle — easier ops across teams.",
        },
        {
          title: "Scale with demand",
          body: "Horizontal pod autoscaling and resource limits keep workloads responsive without manual SSH firefighting.",
        },
        {
          title: "Portable by design",
          body: "The same manifests can target managed K8s (EKS/GKE/AKS) or a private cluster when requirements change.",
        },
      ],
    },
    grafana: {
      tagline: "Observability dashboards for metrics, logs, and traces",
      intro: "Grafana helps teams visualize and alert on operational data from Prometheus, Loki, Tempo, cloud providers, and more — one pane for system health.",
      highlights: [
        "Rich dashboards for metrics, logs, and traces",
        "Alerting rules tied to real signals",
        "Plugins for popular datasources and clouds",
        "Shareable views for eng, SRE, and stakeholders",
      ],
      features: [
        {
          title: "See the system, not just logs",
          body: "Correlate latency, errors, and saturation so incidents get diagnosed faster.",
        },
        {
          title: "Alert on what matters",
          body: "Route actionable alerts instead of noisy thresholds that everyone ignores.",
        },
        {
          title: "Fit the stack you already run",
          body: "Connect Prometheus, Elasticsearch, CloudWatch, and others without rebuilding telemetry.",
        },
      ],
    },
    elasticsearch: {
      tagline: "Search and analytics engine for logs and content",
      intro: "Elasticsearch is a distributed search and analytics engine used for full-text search, log aggregation, and near-real-time analysis across large datasets.",
      highlights: [
        "Full-text search with relevance ranking",
        "Scalable indexing for logs and events",
        "Aggregations for operational and product analytics",
        "Pairs with Kibana / OpenSearch dashboards in many stacks",
      ],
      features: [
        {
          title: "Find needles in product data",
          body: "Power search boxes, filters, and faceted navigation when SQL alone is not enough.",
        },
        {
          title: "Centralize operational signals",
          body: "Ingest app and infra logs for investigation during incidents and audits.",
        },
        {
          title: "Analyze at ingest speed",
          body: "Near-real-time indexes keep dashboards and alerts close to live traffic.",
        },
      ],
    },
    redis: {
      tagline: "In-memory data store for speed and coordination",
      intro: "Redis is an open-source in-memory data structure store used as a cache, message broker, session store, and fast ephemeral database.",
      highlights: [
        "Sub-millisecond reads and writes",
        "Structures: strings, hashes, lists, sets, streams",
        "Pub/Sub and streams for lightweight messaging",
        "Common companion to PostgreSQL-backed APIs",
      ],
      features: [
        {
          title: "Cut hot-path latency",
          body: "Cache frequent queries and session data so APIs stay snappy under load.",
        },
        {
          title: "Coordinate workers",
          body: "Queues, locks, and rate limits help background jobs and APIs stay consistent.",
        },
        {
          title: "Simple operational footprint",
          body: "Managed Redis or a small instance covers most SMB product needs before heavier brokers.",
        },
      ],
    },
    terraform: {
      tagline: "Infrastructure as code",
      intro: "Terraform lets teams define cloud resources in declarative configuration, plan changes safely, and apply reproducible infrastructure across environments.",
      highlights: [
        "Declarative IaC for major clouds and SaaS providers",
        "Plan → apply workflow with reviewable diffs",
        "Modules for reusable environment patterns",
        "State tracking for long-lived infrastructure",
      ],
      features: [
        {
          title: "Environments you can repeat",
          body: "Dev, staging, and prod stay aligned because networking and services are coded, not clicked.",
        },
        {
          title: "Safer changes",
          body: "Plans show what will be created, updated, or destroyed before anything hits production.",
        },
        {
          title: "Team-scale ops",
          body: "Modules and remote state help multiple engineers collaborate without snowflake servers.",
        },
      ],
    }
},


};

export function getTechDetail(locale: Locale, slug: TechSlug): TechDetail {
  const m = meta[slug];
  const copy = copyByLocale[locale][slug];
  return { ...m, ...copy };
}

export function getTechDetailUi(locale: Locale): TechDetailUi {
  return ui[locale];
}
