import type { Locale } from "@/lib/i18n/types";

export const NEWS_CATEGORIES = [
  "process",
  "product",
  "tech",
  "studio",
  "cases",
] as const;

export type NewsCategory = (typeof NEWS_CATEGORIES)[number];

export const NEWS_SLUGS = [
  "discovery-before-build",
  "sprint-demo-cadence",
  "scope-without-scope-creep",
  "handover-and-ops",
  "landing-that-converts",
  "booking-ux-patterns",
  "mobile-first-or-responsive",
  "design-system-lite",
  "nextjs-app-router-notes",
  "react-component-boundaries",
  "flutter-vs-react-native",
  "api-auth-payments",
  "integrations-checklist",
  "ai-agents-in-products",
  "architecture-audit-lite",
  "billiard-ops-dashboard",
  "badminton-court-booking",
  "event-ticket-convert",
  "beauty-salon-booking",
  "remote-freelance-rhythm",
  "hiring-for-delivery",
  "why-we-write-estimates",
  "client-comms-that-work",
  "stock-community-disclaimer",
  "performance-budgets",
  "cms-when-you-need-it",
  "smoke-tests-before-ship",
  "multi-locale-sites",
  "theme-tokens-not-themes",
  "from-mvp-to-v1"
] as const;

export type NewsSlug = (typeof NEWS_SLUGS)[number];

export function isNewsSlug(value: string): value is NewsSlug {
  return (NEWS_SLUGS as readonly string[]).includes(value);
}

export type NewsArticleCopy = {
  title: string;
  excerpt: string;
  body: string[];
};

export type NewsListItem = {
  slug: NewsSlug;
  category: NewsCategory;
  date: string;
  title: string;
  excerpt: string;
};

export type NewsDetail = NewsListItem & {
  body: string[];
  image: string;
};

export type NewsDetailUi = {
  relatedTitle: string;
  cta: string;
  breadcrumbHome: string;
  breadcrumbNews: string;
  readMore: string;
};

type NewsMeta = {
  category: NewsCategory;
  date: string;
};

const metaBySlug: Record<NewsSlug, NewsMeta> = {
  "discovery-before-build": {
    "category": "process",
    "date": "2025-03-12"
  },
  "sprint-demo-cadence": {
    "category": "process",
    "date": "2025-04-08"
  },
  "scope-without-scope-creep": {
    "category": "process",
    "date": "2025-05-20"
  },
  "handover-and-ops": {
    "category": "process",
    "date": "2025-07-02"
  },
  "landing-that-converts": {
    "category": "product",
    "date": "2025-08-14"
  },
  "booking-ux-patterns": {
    "category": "product",
    "date": "2025-09-03"
  },
  "mobile-first-or-responsive": {
    "category": "product",
    "date": "2025-10-11"
  },
  "design-system-lite": {
    "category": "product",
    "date": "2025-11-05"
  },
  "nextjs-app-router-notes": {
    "category": "tech",
    "date": "2025-12-01"
  },
  "react-component-boundaries": {
    "category": "tech",
    "date": "2026-01-09"
  },
  "flutter-vs-react-native": {
    "category": "tech",
    "date": "2026-01-22"
  },
  "api-auth-payments": {
    "category": "tech",
    "date": "2026-02-05"
  },
  "integrations-checklist": {
    "category": "tech",
    "date": "2026-02-18"
  },
  "ai-agents-in-products": {
    "category": "tech",
    "date": "2026-03-01"
  },
  "architecture-audit-lite": {
    "category": "tech",
    "date": "2026-03-15"
  },
  "billiard-ops-dashboard": {
    "category": "cases",
    "date": "2025-06-18"
  },
  "badminton-court-booking": {
    "category": "cases",
    "date": "2025-07-28"
  },
  "event-ticket-convert": {
    "category": "cases",
    "date": "2025-09-19"
  },
  "beauty-salon-booking": {
    "category": "cases",
    "date": "2025-11-22"
  },
  "remote-freelance-rhythm": {
    "category": "studio",
    "date": "2026-04-02"
  },
  "hiring-for-delivery": {
    "category": "studio",
    "date": "2026-04-16"
  },
  "why-we-write-estimates": {
    "category": "studio",
    "date": "2026-04-28"
  },
  "client-comms-that-work": {
    "category": "studio",
    "date": "2026-05-10"
  },
  "stock-community-disclaimer": {
    "category": "studio",
    "date": "2026-05-20"
  },
  "performance-budgets": {
    "category": "tech",
    "date": "2026-05-28"
  },
  "cms-when-you-need-it": {
    "category": "product",
    "date": "2026-06-05"
  },
  "smoke-tests-before-ship": {
    "category": "process",
    "date": "2026-06-12"
  },
  "multi-locale-sites": {
    "category": "product",
    "date": "2026-06-20"
  },
  "theme-tokens-not-themes": {
    "category": "tech",
    "date": "2026-07-01"
  },
  "from-mvp-to-v1": {
    "category": "process",
    "date": "2026-07-15"
  }
} as Record<NewsSlug, NewsMeta>;

/** Logical public paths — resolve with themeAsset at render. */
const categoryImages: Record<NewsCategory, string> = {
  "process": "/ops-lifecycle.jpg",
  "product": "/capabilities/web.jpg",
  "tech": "/capabilities/backend.jpg",
  "studio": "/contact-visual.jpg",
  "cases": "/works/billiard.jpg"
};

const slugImages: Partial<Record<NewsSlug, string>> = {
  "billiard-ops-dashboard": "/works/billiard.jpg",
  "badminton-court-booking": "/works/badminton.jpg",
  "event-ticket-convert": "/works/tickets.jpg",
  "beauty-salon-booking": "/works/beauty.jpg",
  "landing-that-converts": "/capabilities/web.jpg",
  "booking-ux-patterns": "/capabilities/design.jpg",
  "mobile-first-or-responsive": "/capabilities/mobile.jpg",
  "design-system-lite": "/capabilities/design.jpg",
  "nextjs-app-router-notes": "/tech/nextjs.jpg",
  "react-component-boundaries": "/tech/react.jpg",
  "flutter-vs-react-native": "/tech/flutter.jpg",
  "api-auth-payments": "/capabilities/integrations.jpg",
  "integrations-checklist": "/capabilities/integrations.jpg",
  "ai-agents-in-products": "/capabilities/agents.jpg",
  "architecture-audit-lite": "/service-architecture.jpg",
  "cms-when-you-need-it": "/service-stock.jpg",
  "stock-community-disclaimer": "/service-stock.jpg",
  "hiring-for-delivery": "/contact-visual.jpg",
  "remote-freelance-rhythm": "/contact-visual.jpg",
  "theme-tokens-not-themes": "/capabilities/design.jpg",
  "performance-budgets": "/capabilities/web.jpg",
  "multi-locale-sites": "/capabilities/web.jpg"
};

export function getNewsImage(slug: NewsSlug): string {
  return slugImages[slug] ?? categoryImages[metaBySlug[slug].category];
}

const copyByLocale: Record<Locale, Record<NewsSlug, NewsArticleCopy>> = {
  vi: {
    "discovery-before-build": {
    title: "Workshop khám phá trước khi code giúp giữ ngân sách",
    excerpt: "Làm rõ mục tiêu, phạm vi và rủi ro trước khi viết code thường rẻ hơn sửa sai sau launch. Một buổi discovery ngắn có thể tránh cả sprint làm lại.",
    body: [
      "Nhiều dự án web/app của SMB bắt đầu bằng “làm luôn trang chủ” rồi mới hỏi mục tiêu kinh doanh. Kết quả hay gặp: feature thừa, flow lệch user thật, và ngân sách cháy vì phải đập đi xây lại.",
      "Discovery workshop không cần dài. Một đến hai buổi là đủ để thống nhất persona, hành trình chính, tiêu chí thành công, và những gì cố ý không làm trong giai đoạn một. Dolphin Software thường bắt đầu bằng câu hỏi: ai dùng, họ cần hoàn thành việc gì, và đo thành công thế nào.",
      "Khi đội sản phẩm và khách hàng cùng nhìn một bản đồ phạm vi, ước lượng trở nên thực tế hơn. Bạn biết phần nào nên prototype sớm, phần nào có thể chờ dữ liệu sau launch.",
      "Chi phí discovery thường nhỏ hơn một sprint làm lại. Nếu bạn đang cân nhắc thuê studio, hãy hỏi họ có bước làm rõ bài toán trước khi mở repo hay không — đó là tín hiệu làm việc có kỷ luật, không chỉ “code nhanh”.",
    ],
  },
    "sprint-demo-cadence": {
    title: "Demo hai tuần một lần giữ SMB đi đúng hướng",
    excerpt: "Khách SMB thường bận vận hành hàng ngày. Demo định kỳ ngắn giúp họ thấy tiến độ thật và chỉnh hướng sớm, trước khi lệch xa.",
    body: [
      "Email “tuần này làm xong X” dễ thành tường thuật một chiều. Demo trên môi trường gần production thì khác: khách bấm thử, hỏi ngay, và quyết định kịp thời.",
      "Nhịp hai tuần vừa đủ để có thay đổi đáng xem, vừa không để feedback tồn đọng quá lâu. Mỗi demo nên có một mục tiêu: xác nhận flow, chọn phương án UI, hoặc chốt “làm / chưa làm” cho một hạng mục.",
      "Dolphin Software giữ demo gọn — khoảng 30–45 phút: xem cái mới, ghi quyết định, cập nhật backlog. Không biến buổi demo thành họp status dài.",
      "Khi khách thấy sản phẩm thường xuyên, niềm tin tăng và scope creep giảm. Mọi thay đổi lớn phải đi qua quyết định có ghi nhận, không chỉ “nhân tiện thêm cái này”.",
    ],
  },
    "scope-without-scope-creep": {
    title: "Viết ước lượng bảo vệ cả hai bên",
    excerpt: "Ước lượng tốt không phải con số thấp để thắng deal. Nó là ranh giới rõ ràng giữa “đã bao gồm” và “sẽ báo giá thêm”.",
    body: [
      "Scope creep thường bắt đầu từ giả định im lặng: khách nghĩ “cái này chắc có sẵn”, team nghĩ “cái kia ngoài phạm vi”. Khi launch cận kề, cả hai bên mệt và bất ngờ.",
      "Một ước lượng khỏe mạnh liệt kê deliverable, giả định, phụ thuộc (nội dung, API bên thứ ba, tài khoản), và những việc cố ý loại trừ. Ví dụ: “tích hợp thanh toán sandbox” khác hẳn “go-live thanh toán production với đối soát”.",
      "Ở Dolphin Software, mọi thay đổi lớn sau khi chốt đều qua change request ngắn: mô tả, ảnh hưởng lịch, chi phí. Không phải để khó dễ — để dự án còn kết thúc được.",
      "Khách hàng tốt cũng được lợi: họ biết đang mua gì, và có thể ưu tiên lại khi ngân sách hoặc thời gian eo hẹp thay vì “thêm hết vào sprint này”.",
    ],
  },
    "handover-and-ops": {
    title: "Handover và vận hành nhẹ sau launch",
    excerpt: "Launch không phải điểm kết thúc. Bộ tài liệu bàn giao và vài việc ops tối thiểu giúp site/app sống được khi team studio rút dần.",
    body: [
      "Nhiều dự án “xong” khi URL lên production, rồi không ai nhớ DNS, biến môi trường, hay quy trình deploy. Ba tháng sau, một hotfix nhỏ thành khủng hoảng.",
      "Handover tối thiểu nên có: sơ đồ kiến trúc ngắn, quyền truy cập (hosting, domain, analytics, store), cách deploy, checklist rollback, và danh sách nợ kỹ thuật cố ý để lại.",
      "Ops nhẹ không nghĩa là team 24/7. Với SMB, thường đủ: giám sát uptime cơ bản, backup, cập nhật dependency theo lịch, và một kênh liên hệ khi sự cố thật sự xảy ra.",
      "Dolphin Software khuyến nghị chốt gói chăm sóc sau launch ngay từ đầu — dù chỉ vài giờ mỗi tháng — để kiến thức không biến mất cùng sprint cuối.",
    ],
  },
    "landing-that-converts": {
    title: "Thứ tự landing: thương hiệu, một headline, một CTA",
    excerpt: "Viewport đầu không phải dashboard marketing. Thương hiệu dẫn, một thông điệp chính, một hành động — phần còn lại để phía dưới.",
    body: [
      "Landing yếu thường nhồi stats, badge, lịch, địa chỉ và ba CTA cạnh nhau ngay màn hình đầu. Người xem không biết nên nhìn đâu trước.",
      "Quy tắc thực dụng: viewport đầu chỉ mang thương hiệu (đủ mạnh để nhận ra), một headline, một câu hỗ trợ ngắn, một nhóm CTA, và một hình ảnh chủ đạo. Không gắn nhãn nổi, chip khuyến mãi lên ảnh hero.",
      "Dolphin Software thiết kế landing theo hướng “một việc mỗi section”. Phía dưới mới tới bằng chứng, quy trình, FAQ — sau khi người dùng đã hiểu bạn làm gì.",
      "Nếu bỏ thanh nav mà trang vẫn có thể thuộc về bất kỳ brand nào, branding còn quá yếu. Hãy sửa hierarchy trước khi tối ưu A/B màu nút.",
    ],
  },
    "booking-ux-patterns": {
    title: "UX đặt lịch: slot rõ, xác nhận đủ, ít cuộc gọi hơn",
    excerpt: "Form đặt lịch mơ hồ tạo ra tin nhắn và cuộc gọi. Làm rõ khung giờ, trạng thái xác nhận và bước tiếp theo sẽ giảm tải vận hành.",
    body: [
      "Người dùng cần biết: còn slot nào, múi giờ nào, đặt xong thì chuyện gì xảy ra. Nếu phải đoán, họ sẽ gọi điện — đúng lúc lễ tân đang bận.",
      "Pattern hiệu quả: lịch theo slot thật (không phải “liên hệ chúng tôi”), trạng thái pending/confirmed rõ, email hoặc tin xác nhận kèm địa điểm/link, và nút đổi/hủy có kiểm soát.",
      "Với SMB dịch vụ — spa, studio, phòng khám nhỏ — giảm một cuộc gọi mỗi đặt lịch đã đáng giá. Dolphin Software ưu tiên flow ngắn trên mobile trước khi thêm tính năng “thông minh”.",
      "Đừng ẩn phí hủy hoặc chính sách đến muộn trong PDF. Đưa vào bước xác nhận cuối: ít tranh cãi sau, trải nghiệm vẫn lịch sự.",
    ],
  },
    "mobile-first-or-responsive": {
    title: "Khi nào làm web responsive, khi nào nên app",
    excerpt: "Không phải sản phẩm nào cũng cần native ngay. Chọn theo thói quen dùng, nhu cầu offline/push, và ngân sách bảo trì dài hạn.",
    body: [
      "Nếu phần lớn lưu lượng là trình duyệt, nội dung marketing + vài flow chính (đăng ký, đặt lịch, xem trạng thái), responsive web thường đủ và rẻ hơn nhiều để duy trì.",
      "Cân nhắc app (native hoặc hybrid) khi cần push đáng tin, offline thật, tích hợp thiết bị sâu, hoặc người dùng mở sản phẩm hàng ngày như công cụ làm việc — không chỉ “có mặt trên store cho đẹp”.",
      "Dolphin Software hay bắt đầu bằng web/PWA khi giả thuyết sản phẩm còn đang kiểm chứng. App store review, bản cập nhật kép (iOS/Android), và chi phí duy trì chỉ đáng khi retention đã rõ.",
      "Câu hỏi quyết định: người dùng có mở app mỗi ngày không? Nếu câu trả lời là “thỉnh thoảng”, hãy đầu tư vào web nhanh và đo trước khi mở rộng.",
    ],
  },
    "design-system-lite": {
    title: "Design system mỏng cho site SMB",
    excerpt: "SMB không cần 50 component. Cần token màu/typography/spacing nhất quán và vài primitive tái sử dụng — đủ để site không vỡ khi thêm trang.",
    body: [
      "Design system “đầy đủ” thường chết vì quá nặng so với quy mô. Ba người làm site năm trang không cần thư viện button variant dài như enterprise.",
      "Bắt đầu từ token: màu brand, chữ (display/body), khoảng cách, radius, shadow nếu thật sự dùng. Sau đó mới tới primitive: button, input, link, heading — ít biến thể, đặt tên rõ.",
      "Dolphin Software áp dụng “lite system”: đủ để designer và dev nói cùng ngôn ngữ, không đủ để trì hoãn launch vì phải hoàn thiện mọi atom.",
      "Khi sản phẩm lớn hơn (nhiều app, nhiều team), lúc đó mới mở rộng component. Đừng đảo ngược thứ tự: ship giá trị trước, hệ thống theo sau đúng mức cần.",
    ],
  },
    "nextjs-app-router-notes": {
    title: "Ghi chú thực dụng Next.js App Router cho site marketing + product",
    excerpt: "App Router mạnh khi dùng đúng chỗ: layout dùng chung, server component cho nội dung tĩnh, client chỉ nơi cần tương tác.",
    body: [
      "Site marketing của studio thường kết hợp trang tĩnh (i18n, SEO) và vài vùng tương tác (form báo giá, bộ lọc). App Router hợp nếu tách rõ server/client boundary thay vì bọc cả trang bằng \"use client\".",
      "Ưu tiên: metadata và nội dung dịch từ server; form và widget tương tác đẩy xuống client component nhỏ. Tránh fetch trùng bằng cách để dữ liệu gần nơi render và cache có chủ đích.",
      "Dolphin Software dùng Next cho site đa ngôn ngữ vì routing theo locale và static generation vẫn thực tế với quy mô SMB — miễn là không nhồi mọi thứ vào client bundle.",
      "Trước khi nâng version lớn, đọc note breaking change trong docs của bản bạn đang dùng. API và cấu trúc thư mục có thể khác training data quen thuộc.",
    ],
  },
    "react-component-boundaries": {
    title: "Tách UI / hooks / services trong React",
    excerpt: "Component chỉ nên render và gọi handler. Logic dữ liệu nằm ở hook; gọi API nằm ở service — tránh mọi thứ trong một file.",
    body: [
      "Khi một file vừa fetch, vừa transform, vừa validate form, vừa JSX dài 300 dòng, mỗi thay đổi nhỏ đều rủi ro. Boundary rõ giúp test và review nhanh hơn.",
      "Quy ước thực dụng: UI gọi hook; hook dùng React Query (hoặc tương đương) và gọi service; service chỉ nói chuyện với server — get/create/update/delete theo domain, không nhét toast hay điều hướng vào đó.",
      "Form: react-hook-form + schema resolver thay vì một useState cho mỗi field. Sau mutation, invalidate đúng queryKey theo domain.",
      "Dolphin Software áp dụng tách lớp này cả trên product app và các form marketing phức tạp hơn — không phải nghi thức enterprise, mà để onboard người mới không mất nửa ngày chỉ để tìm “API đang gọi ở đâu”.",
    ],
  },
    "flutter-vs-react-native": {
    title: "Chọn Flutter hay React Native cho app SMB?",
    excerpt: "Hai framework đều đủ làm app SMB tốt. Quyết định nên dựa vào đội ngũ, thời gian ra mắt và kế hoạch bảo trì — không phải “cái nào hot hơn”.",
    body: [
      "Với app SMB (đặt lịch, vận hành cửa hàng, CRM nhẹ), Flutter và React Native đều có thể giao được sản phẩm ổn định. Câu hỏi đúng không phải “framework nào mạnh hơn”, mà là đội của bạn viết và bảo trì cái nào nhanh hơn trong 12–24 tháng tới.",
      "Flutter thường thắng khi cần UI đồng nhất hai nền tảng, animation mượt và một codebase Dart rõ ràng. React Native phù hợp hơn nếu team đã mạnh JavaScript/TypeScript, muốn tái dùng logic web, hoặc đã có module native sẵn.",
      "Trước khi chọn, hãy liệt kê: cần native module nào (camera, BLE, payment SDK), tần suất cập nhật store, và ai sẽ maintain sau go-live. SMB thường chết vì thiếu người sửa bug hơn vì thiếu “công nghệ mới”.",
      "Ở Dolphin Software, chúng tôi thường prototype một luồng chính (login → list → chi tiết → thanh toán) trên cả hai hướng nếu khách còn phân vân — rồi chọn theo tốc độ delivery và chi phí bảo trì thực tế, không theo xu hướng.",
      "Quy tắc ngắn: ưu tiên đội ngũ và roadmap vận hành. Framework chỉ là công cụ; app SMB sống nhờ luồng nghiệp vụ rõ và release đều đặn.",
    ],
  },
    "api-auth-payments": {
    title: "Auth, thanh toán và API bên thứ ba — làm sao đỡ “drama”",
    excerpt: "Tích hợp hay đổ vỡ không phải vì SDK khó, mà vì thiếu contract, sandbox và kế hoạch lỗi. Đây là cách làm gọn trước khi code.",
    body: [
      "Auth và payment là nơi dự án dễ chậm nhất: tài liệu thiếu, sandbox lệch production, webhook đến muộn hoặc trùng. Trước khi gắn SDK, hãy chốt luồng: ai login, session sống bao lâu, khi thanh toán fail thì UI và backend xử lý thế nào.",
      "Với auth: chọn một nguồn sự thật (JWT/session), tách rõ “đã đăng nhập” và “đã xác minh”, và ghi runbook reset mật khẩu / khóa tài khoản. Với payment: ưu tiên idempotency key, trạng thái đơn hàng rõ (pending → paid → failed/refund), và không tin client về số tiền.",
      "API bên thứ ba cần contract tối thiểu: endpoint, auth header, rate limit, retry, và ai nhận alert khi downtime. Log correlation id xuyên suốt request — khi Zalo OA hay cổng thanh toán lỗi lúc đêm, bạn sẽ cần nó.",
      "Dolphin Software thường dựng bảng trạng thái + checklist sandbox trước khi viết UI đẹp. Drama giảm khi team biết “thất bại trông như thế nào” trước khi go-live.",
    ],
  },
    "integrations-checklist": {
    title: "Checklist tích hợp trước go-live: Zalo, thanh toán, email",
    excerpt: "Ba kênh hay gặp nhất với SMB Việt Nam — và những mục nên tick trước khi mở traffic thật.",
    body: [
      "Zalo OA / Zalo API: xác nhận app/OA production đã duyệt, token refresh chạy ổn, template tin nhắn đúng locale, và có fallback khi user chưa follow OA. Test cả luồng “gửi thất bại → retry / thông báo nội bộ”.",
      "Cổng thanh toán (MoMo, ZaloPay, VNPay…): đối chiếu số tiền, chữ ký, IPN/webhook trên môi trường gần production. Kiểm tra hoàn tiền một phần, thanh toán trùng, và timeout giữa app với cổng.",
      "Email / OTP: SPF, DKIM, DMARC; domain gửi không vào spam; rate limit OTP; nội dung template có brand và link hỗ trợ. Đừng để email transactional phụ thuộc một SMTP chưa monitor.",
      "Chung cho mọi tích hợp: owner on-call, dashboard lỗi 24h đầu, và “kill switch” tắt kênh mà không sập cả app. Dolphin Software đưa checklist này vào UAT — go-live không phải lúc lần đầu thấy webhook.",
      "In ngắn: sandbox xanh chưa đủ; cần evidence trên production-like và người chịu trách nhiệm khi kênh thứ ba im tiếng.",
    ],
  },
    "ai-agents-in-products": {
    title: "AI agent giúp workflow sản phẩm ở đâu — và đâu thì không",
    excerpt: "Agent hữu ích khi có tool rõ và phạm vi hẹp. Đừng giao agent quyền “tự quyết” trên dữ liệu tiền bạc hay quyền hạn cao.",
    body: [
      "Trong sản phẩm web/app, AI agent phát huy khi gắn với tool cụ thể: tìm kiếm nội bộ, điền form từ context, tóm tắt ticket hỗ trợ, hoặc gợi ý bước tiếp theo trong luồng đã định nghĩa.",
      "Agent kém khi cần cam kết pháp lý, chỉnh số dư / trạng thái thanh toán, hoặc thay quyết định nghiệp vụ không có human-in-the-loop. “Nghe có vẻ thông minh” không thay được audit trail.",
      "Thiết kế an toàn: giới hạn tool, timeout, log prompt/action (có redact PII), và luôn có đường thoát thủ công. Đo bằng task hoàn thành đúng — không bằng độ dài câu trả lời.",
      "Dolphin Software ưu tiên agent như lớp hỗ trợ vận hành và vibe coding theo domain (MCP, context nghiệp vụ), không thay core transaction. Bắt đầu nhỏ một workflow, đo lỗi, rồi mới mở rộng.",
    ],
  },
    "architecture-audit-lite": {
    title: "Architecture audit “lite” cho hệ chậm hoặc dễ gãy",
    excerpt: "Không cần viết lại cả hệ. Một audit ngắn 1–2 tuần có thể chỉ ra bottleneck, rủi ro deploy và điểm nên vá trước.",
    body: [
      "Khi app chậm hoặc “sợ đụng là hỏng”, audit đầy đủ dễ bị trì hoãn mãi. Cách lite: chọn 3–5 user journey quan trọng, đo latency/error, đọc đường deploy, và liệt kê dependency ngoài (DB, queue, API).",
      "Checklist thực dụng: N+1 / thiếu index, cache sai chỗ, job nền không monitor, secret trong repo, không có rollback, và “single point of failure” ở một service.",
      "Kết quả nên là backlog có ưu tiên: P0 (mất dữ liệu / downtime), P1 (chậm rõ), P2 (nợ kỹ thuật). Kèm effort ước lượng — không chỉ slide kiến trúc đẹp.",
      "Dolphin Software chạy audit lite theo hướng “vá được ngay trong sprint kế”: đo chứng cứ, đề xuất tối thiểu, rồi mới nói chuyện rewrite. Hệ mong manh cần ổn định trước khi thêm feature.",
    ],
  },
    "billiard-ops-dashboard": {
    title: "Case: dashboard vận hành quán billiard — bài học thực tế",
    excerpt: "Theo dõi bàn, giờ chơi và trạng thái cửa hàng nghe đơn giản — cho đến khi ca làm việc, giá giờ và tranh chấp “bàn đang chơi” xuất hiện.",
    body: [
      "Yêu cầu cốt lõi: nhân viên thấy bàn trống/đang chơi, bắt đầu–kết thúc session, và tổng tiền ca mà không cần Excel. UI phải đọc được từ xa trên quầy — không phải dashboard phân tích đẹp nhưng chậm thao tác.",
      "Khó thật: đổi giá theo khung giờ, chuyển bàn giữa chừng, tạm dừng, và đồng bộ khi hai máy cùng sửa một bàn. Cần trạng thái rõ và khóa thao tác ngắn để tránh double-start.",
      "Chúng tôi ưu tiên luồng “mở bàn → chạy giờ → đóng bàn → thanh toán” trước báo cáo tháng. Báo cáo chỉ có ý nghĩa khi dữ liệu session sạch.",
      "Bài học Dolphin Software mang sang dự án ops khác: thiết kế cho ca làm việc ồn, mạng yếu, và người dùng không phải “power user”. Một nút đúng chỗ thắng một biểu đồ phức tạp.",
    ],
  },
    "badminton-court-booking": {
    title: "Case: site đặt sân cầu lông — giữ chỗ rõ, ít sót lịch",
    excerpt: "Khách cần thấy lịch trống và giữ chỗ nhanh. Chủ sân cần tránh double booking và quản lý giá theo khung giờ.",
    body: [
      "Luồng thành công: chọn sân → chọn slot → xác nhận / tạm giữ → thanh toán hoặc giữ chỗ theo rule cửa hàng. Hiển thị availability phải “thật” trong vài giây, không phải cache cũ nửa ngày.",
      "Quy tắc nghiệp vụ quan trọng hơn UI đẹp: thời gian giữ chỗ, hủy miễn phí đến đâu, đặt hộ vs đặt cá nhân, và giờ cao điểm. Viết thành rule rồi mới code calendar.",
      "Mobile-first là bắt buộc — nhiều khách đặt khi đang ngoài sân hoặc trên xe. Form ngắn, lỗi validation tiếng Việt rõ, và xác nhận qua Zalo/email nếu có.",
      "Với Dolphin Software, bài học là: calendar chỉ là lớp trình bày; nguồn sự thật là inventory slot + trạng thái booking. Khi hai thứ lệch, double booking là chuyện sớm muộn.",
    ],
  },
    "event-ticket-convert": {
    title: "Case: luồng đặt vé sự kiện tối ưu chuyển đổi",
    excerpt: "Từ trang sự kiện đến thanh toán xong — mỗi bước thừa là một lý do khách bỏ. Tập trung giảm ma sát, không thêm “feature cho vui”.",
    body: [
      "Trang sự kiện cần một CTA rõ, thông tin ngày giờ địa điểm ngay trên fold, và loại vé còn / hết hiện thẳng. Ảnh đẹp không thay được “còn bao nhiêu vé”.",
      "Checkout: ít field nhất có thể, giữ ghế/vé trong thời gian ngắn có đồng hồ, và thanh toán một lần chạm với trạng thái rõ (đang xử lý / thành công / thất bại + thử lại).",
      "Sau thanh toán: mã vé / QR, hướng dẫn check-in, và email/Zalo xác nhận. Hỗ trợ đổi vé hoặc hoàn theo policy phải tìm thấy trong 2 cú chạm.",
      "Dolphin Software đo funnel theo từng bước (xem → chọn vé → checkout → paid). Tối ưu chỗ drop lớn trước khi thêm upsell. Convert thắng nhờ rõ ràng, không nhờ popup.",
    ],
  },
    "beauty-salon-booking": {
    title: "Case: đặt lịch beauty salon — giảm sót lịch, tăng giữ chỗ",
    excerpt: "Nail, makeup và dịch vụ theo slot sống nhờ lịch sạch và nhắc lịch đúng lúc — không nhờ form dài.",
    body: [
      "Khách chọn dịch vụ → stylist (nếu có) → ngày giờ → xác nhận. Mỗi dịch vụ cần duration thật để tránh chồng slot. Buffer giữa lịch quan trọng không kém UI.",
      "Phía salon: xem lịch ngày/tuần, đổi stylist, đánh dấu no-show, và khóa slot bảo trì. Quyền admin và quyền lễ tân nên tách — tránh sửa nhầm lịch đã thanh toán cọc.",
      "Nhắc lịch (Zalo/SMS/email) trước 24h và 2h giảm no-show rõ. Cho phép hủy/đổi trong cửa sổ ngắn để slot về lại inventory.",
      "Dolphin Software học được: beauty booking thắng khi “thời gian của stylist” là tài nguyên trung tâm. Mọi feature (combo, voucher) phải tôn trọng ràng buộc thời gian đó.",
    ],
  },
    "remote-freelance-rhythm": {
    title: "Nhịp giao hàng remote của studio nhỏ",
    excerpt: "Làm việc từ xa với freelancer không cần họp nhiều — cần nhịp demo, definition of done và kênh quyết định rõ.",
    body: [
      "Studio nhỏ (như Dolphin Software) sống nhờ nhịp đều: kickoff ngắn, milestone có demo, và async update theo ngày làm việc — không phải status meeting mỗi sáng.",
      "Mỗi task nên có DoD: UI/API/test/checklist UAT. “Done” mơ hồ là nguồn chậm trễ số một khi team phân tán múi giờ và dual-track product/outsource.",
      "Kênh quyết định: một nơi chốt scope (ticket/Notion), một nơi chat nhanh, một nơi demo. Tránh quyết định quan trọng chỉ nằm trong tin nhắn biến mất.",
      "Với khách: lịch demo cố định, báo rủi ro sớm, và báo giá theo milestone. Freelancer gắn vào nhịp đó — không phải vào “hộp đêm không giới hạn”.",
      "Rhythm tốt thay micromanage: khi mọi người biết tuần này ship gì và ai chặn gì, remote trở thành lợi thế chứ không phải rủi ro.",
    ],
  },
    "hiring-for-delivery": {
    title: "Thuê freelancer: chọn người demo được hàng tuần",
    excerpt: "CV đẹp chưa đủ. Dolphin Software ưu tiên người sẵn sàng demo tiến độ mỗi tuần — vì delivery sống nhờ nhịp nhìn thấy được.",
    body: [
      "Khi mở rộng đội cho một milestone, studio thường bị cuốn vào portfolio và tech stack. Ở Dolphin Software, câu hỏi then chốt là: bạn có thể demo được thứ gì vào thứ Sáu tuần này?",
      "Demo hàng tuần không phải trình diễn slide. Đó là build chạy được, URL staging, hoặc clip ngắn ghi lại luồng người dùng. Ai không quen nhịp này thường kéo task sang tuần sau mà không có bằng chứng.",
      "Khi phỏng vấn, chúng tôi hỏi về một sprint gần nhất: họ đã cắt scope thế nào khi trễ, và họ báo cáo blocker ra sao. Câu trả lời mơ hồ thường đi kèm delivery mơ hồ.",
      "Hợp đồng freelance nên ghi rõ cadence demo, kênh cập nhật, và định nghĩa “done” cho từng hạng mục. Không có nhịp chung, remote dễ biến thành hộp đen.",
      "Freelancer giỏi kỹ thuật nhưng không demo được vẫn có chỗ — ở giai đoạn R&D. Còn khi client đang chờ milestone, Dolphin Software chọn người giao hàng có thể nhìn thấy.",
    ],
  },
    "why-we-write-estimates": {
    title: "Vì sao estimate viết ra thắng lời “khoảng X”",
    excerpt: "“Khoảng hai tuần” nghe thân thiện nhưng dễ thành tranh cãi. Estimate viết rõ giả định giúp cả hai bên giữ cùng khung.",
    body: [
      "Lời ước lượng miệng thường biến mất ngay khi scope đổi. Client nhớ con số thấp nhất; team nhớ điều kiện kèm theo — và hai bên không còn cùng một câu chuyện.",
      "Dolphin Software viết estimate thành vài dòng: phạm vi trong/ngoài, giả định (nội dung sẵn, API ổn định…), buffer rủi ro, và điều kiện cập nhật khi phát hiện mới.",
      "Estimate không phải lời hứa cứng. Đó là snapshot tại thời điểm biết được những gì. Khi giả định gãy, cập nhật bằng văn bản ngắn còn rẻ hơn tranh luận sau launch.",
      "Với SMB, văn bản ngắn còn giúp founder chia sẻ nội bộ với kế toán hoặc đối tác mà không cần “dịch lại” từ cuộc gọi.",
      "Nếu chỉ cần một số để “cảm giác”, nói rõ đó là ballpark. Còn khi chốt milestone, hãy viết — vì tiền và lịch gắn với chữ, không gắn với ký ức.",
    ],
  },
    "client-comms-that-work": {
    title: "Giao tiếp client giúp giảm làm lại",
    excerpt: "Rework thường đến từ hiểu nhầm, không phải code kém. Vài pattern giao tiếp đơn giản cắt được vòng chỉnh sửa vô ích.",
    body: [
      "Ở Dolphin Software, hầu hết vòng “làm lại” bắt đầu từ một câu đồng ý mơ hồ: “Được rồi, làm đi.” Không có screenshot, không có acceptance, không có người quyết định cuối.",
      "Pattern 1: mỗi quyết định UI/flow ghi lại một dòng + ảnh hoặc link. Pattern 2: phân biệt feedback “blocker” và “nice-to-have” trước khi sửa.",
      "Pattern 3: một kênh chính (Slack/email) cho quyết định; chat rải rác chỉ để hỏi nhanh. Quyết định lẫn trong tin nhắn riêng sẽ mất khi đổi người phụ trách.",
      "Demo có agenda ngắn: hôm nay xem gì, cần quyết gì, cái gì để tuần sau. Client biết mình đang “ký” cái gì thì ít đòi đổi sau.",
      "Giao tiếp tốt không phải trả lời nhanh mọi tin. Là trả lời đúng chỗ, đúng người, và để lại dấu vết đủ để team tiếp tục mà không đoán.",
    ],
  },
    "stock-community-disclaimer": {
    title: "Disclaimer minh bạch cho sản phẩm cộng đồng / không tư vấn",
    excerpt: "Sản phẩm stock hoặc cộng đồng dễ bị hiểu nhầm là lời khuyên đầu tư. Disclaimer rõ ngay từ đầu bảo vệ cả user lẫn studio.",
    body: [
      "Khi Dolphin Software làm sản phẩm theo dõi cộng đồng hoặc dữ liệu thị trường mang tính tham khảo, rủi ro lớn nhất không phải bug UI — mà là hiểu nhầm về vai trò của nội dung.",
      "Disclaimer nên nằm gần nơi người dùng ra quyết định: trên trang kết quả, trong onboarding, và trong email thông báo — không chỉ chôn ở footer.",
      "Ngôn ngữ cần cụ thể: “không phải tư vấn đầu tư / pháp lý / thuế”, “dữ liệu có thể trễ hoặc thiếu”, “tự chịu trách nhiệm khi hành động”. Tránh câu chung chung kiểu “sử dụng có rủi ro”.",
      "Nếu có cộng đồng comment hoặc tín hiệu đám đông, nói rõ đó là ý kiến người dùng, không phải khuyến nghị của nền tảng.",
      "Minh bạch không làm giảm uy tín — nó đặt kỳ vọng đúng. Product team và legal nên cùng review copy trước khi ship tính năng mới liên quan số liệu.",
    ],
  },
    "performance-budgets": {
    title: "Performance budget cho site marketing",
    excerpt: "Site marketing dễ phình vì hero, font và tracking. Một budget số cụ thể giúp team từ chối “thêm một script nữa”.",
    body: [
      "Landing đẹp nhưng nặng sẽ mất chuyển đổi trên mobile. Dolphin Software đặt performance budget sớm: ví dụ LCP mục tiêu, trọng lượng JS/CSS, và số request third-party tối đa.",
      "Budget phải đo được trên staging gần production: cùng CDN, cùng ảnh thật, cùng pixel. Đo local với Wi‑Fi văn phòng sẽ tạo ảo giác an toàn.",
      "Mỗi lần thêm font, carousel, hoặc chat widget đều phải “trả giá” từ budget. Nếu vượt, cắt hoặc trì hoãn — không chỉ tối ưu sau khi launch.",
      "Ảnh hero full-bleed vẫn làm được nếu đúng kích thước, format hiện đại, và không chồng script nặng phía trên fold.",
      "Báo cáo ngắn mỗi sprint (Lighthouse/Web Vitals) đủ để client thấy trade-off. Không cần dashboard phức tạp — cần số và quyết định.",
    ],
  },
    "cms-when-you-need-it": {
    title: "Khi nào SMB thực sự cần CMS",
    excerpt: "Không phải site nào cũng cần CMS ngày một. Nhiều SMB cập nhật thưa — code + markdown/JSON đủ và rẻ hơn.",
    body: [
      "CMS hữu ích khi nhiều người sửa nội dung thường xuyên, có quy trình duyệt, hoặc cần lịch đăng / bản nháp. Nếu founder tự sửa landing vài tháng một lần, CMS có thể là gánh nặng.",
      "Dolphin Software thường bắt đầu marketing site với nội dung trong repo (i18n dictionaries hoặc MD). Deploy qua CI vẫn “cập nhật được” mà không trả phí editor phức tạp.",
      "Dấu hiệu cần CMS: team marketing muốn đổi copy không chờ release kỹ thuật; blog/news nhiều bài; hoặc nhiều ngôn ngữ do biên tập viên không phải engineer quản lý.",
      "Dấu hiệu chưa cần: một trang giới thiệu, ít bài, và thay đổi đi kèm design/layout. Khi đó CMS chỉ thêm training và lỗ hổng cấu hình.",
      "Chọn CMS sau khi biết ai viết gì, bao lâu một lần. Công cụ theo sau quy trình — không phải ngược lại.",
    ],
  },
    "smoke-tests-before-ship": {
    title: "Smoke test và checklist trước khi launch",
    excerpt: "Launch thất bại thường vì quên việc nhỏ: form, locale, link CTA. Checklist ngắn + smoke test cắt được đêm trắng.",
    body: [
      "Trước khi bật DNS hoặc announce, Dolphin Software chạy một vòng smoke: trang chủ load, CTA chính, form liên hệ, chuyển locale, và một luồng thanh toán/đặt chỗ nếu có.",
      "Checklist nên in được trên một trang: môi trường đúng, analytics bật, 404 tùy chỉnh, robots/sitemap, và ai on-call trong 24 giờ đầu.",
      "Smoke không thay regression suite. Mục tiêu là bắt lỗi “site chết / form gãy / nút dẫn sai” trước khi khách hàng thật thấy.",
      "Giao cho một người “go / no-go” cuối cùng. Nhiều người cùng “ok miệng” dễ thành không ai chịu trách nhiệm.",
      "Sau launch 30–60 phút, xem lại log lỗi và một phiên mobile thật. Nhiều sự cố chỉ lộ khi traffic và thiết bị thật vào.",
    ],
  },
    "multi-locale-sites": {
    title: "Site đa ngôn ngữ (VI/EN/JA/DE) không loạn CMS",
    excerpt: "Bốn locale dễ thành bốn bản copy lệch nhau. Cấu trúc khóa dịch và quy trình review giữ site đồng bộ mà không cần CMS nặng.",
    body: [
      "Dolphin Software giữ cùng một cây khóa (key) cho mọi locale: title, excerpt, CTA… Thiếu khóa ở một ngôn ngữ phải lộ ra lúc build hoặc test, không phải lúc user mở trang.",
      "Tránh “copy trang rồi sửa từng file HTML”. Khi layout đổi, bạn sẽ sửa bốn nơi và sót một nơi.",
      "Quy trình thực tế: viết VI (hoặc EN) làm nguồn, dịch có kiểm soát, rồi spot-check UI vì độ dài tiếng Đức/Nhật thường phá layout.",
      "News và marketing page có thể dùng dictionary TypeScript hoặc MD theo slug. CMS chỉ thêm khi biên tập viên non-tech cập nhật hàng ngày.",
      "Locale switcher phải giữ ngữ cảnh (cùng trang / cùng bài), không đẩy về home. Đó là chi tiết nhỏ nhưng quyết định cảm giác “đã i18n thật”.",
    ],
  },
    "theme-tokens-not-themes": {
    title: "Design token và theme: CSS variables thay vì theme lan man",
    excerpt: "Nhiều file theme song song sớm thành nợ. Token (màu, spacing, type) qua CSS variables giữ một nguồn sự thật.",
    body: [
      "Khi product cần light/dark hoặc brand variant, phản xạ hay là clone cả bộ class. Sau vài tháng, “theme A” và “theme B” lệch nhau từng chi tiết.",
      "Dolphin Software ưu tiên token: `--color-bg`, `--color-accent`, `--font-display`… Component chỉ nói “dùng accent”, không hardcode hex trong JSX.",
      "Theme switch = đổi giá trị biến trên `:root` hoặc `[data-theme]`, không đổi cấu trúc component. Ít bề mặt cần test hơn.",
      "Đặt tên theo vai trò (accent, muted, surface) chứ không theo màu (“purple-500”). Khi brand đổi tint, token vẫn đúng nghĩa.",
      "Bắt đầu với ít token có chủ đích. Thêm khi thật sự tái sử dụng — không mirror toàn bộ scale của design tool ngay ngày đầu.",
    ],
  },
    "from-mvp-to-v1": {
    title: "Từ MVP sang V1 mà không viết lại toàn bộ",
    excerpt: "V1 không phải “code lại cho sạch”. Đó là siết phạm vi, trả nợ có chọn lọc, và giữ phần đã chứng minh giá trị.",
    body: [
      "MVP thành công thường xấu ở chỗ đúng: hack nhanh để học. Sai lầm phổ biến là đập hết để viết lại trước khi biết phần nào đang tạo doanh thu hoặc học hỏi.",
      "Dolphin Software tách ba lớp: giữ nguyên những gì user đã quen; trả nợ ở biên (auth, deploy, quan sát); chỉ viết lại module nào chặn tốc độ hoặc gây lỗi lặp.",
      "V1 cần định nghĩa rõ: ổn định hơn, hỗ trợ vận hành, hoặc mở rộng đối tượng — không phải “architecture đẹp hơn” như mục tiêu duy nhất.",
      "Lập danh sách nợ kỹ thuật có chi phí/rủi ro. Làm 2–3 hạng mục cao nhất mỗi milestone, song song feature mới có đo lường.",
      "Viết lại toàn bộ chỉ khi nền tảng thật sự không chịu được tải hoặc không thể thuê người bảo trì. Còn lại, tiến hóa có kiểm soát rẻ hơn big-bang.",
    ],
  },
  },
  en: {
    "discovery-before-build": {
    title: "Discovery workshops before coding save budget",
    excerpt: "Clarifying goals, scope, and risks before a single commit usually costs less than rebuilding after launch.",
    body: [
      "SMB web and app projects often jump straight into pixels and tickets. The expensive part shows up later: wrong flows, unused features, and a rebuild that eats the remaining budget.",
      "A short discovery workshop aligns personas, the primary journey, success metrics, and what will wait for phase two. At Dolphin Software we treat this as the cheapest insurance against rework.",
      "Shared scope makes estimates honest. You learn what to prototype early and what can wait for real usage data after launch.",
    ],
  },
    "sprint-demo-cadence": {
    title: "Bi-weekly demos keep SMB clients aligned",
    excerpt: "Short, regular demos beat status emails — clients see real progress and course-correct early.",
    body: [
      "A written weekly update is easy to skim and hard to challenge. A demo on a near-production build lets the client click, ask, and decide while the cost of change is still low.",
      "A two-week cadence is enough to show meaningful progress without letting feedback pile up. Each session should have one job: validate a flow, pick a UI option, or lock a yes/no on scope.",
      "We keep demos short at Dolphin Software — decisions get written down, the backlog moves, and “while you’re at it” requests stay out of the room.",
    ],
  },
    "scope-without-scope-creep": {
    title: "Estimates that protect both sides",
    excerpt: "A good estimate is not the lowest number to win the deal — it is a clear boundary between included and billed later.",
    body: [
      "Scope creep thrives on silent assumptions. The client thinks a feature is “obviously included”; the team thinks it is out of scope. Launch week becomes a surprise for everyone.",
      "Healthy estimates list deliverables, assumptions, dependencies, and explicit exclusions. “Sandbox payment” is not the same as “production go-live with reconciliation.”",
      "At Dolphin Software, material changes after sign-off go through a short change request: description, schedule impact, cost. That discipline is what lets projects actually finish.",
    ],
  },
    "handover-and-ops": {
    title: "Handover docs and light ops after launch",
    excerpt: "Launch is not the finish line. Clear handover and minimal ops keep the product alive when the build team steps back.",
    body: [
      "Too many projects are “done” when the URL is live — then nobody owns DNS, env vars, or deploys. A small hotfix three months later turns into an outage.",
      "Minimum handover: a short architecture note, access inventory, deploy steps, rollback checklist, and known technical debt left on purpose.",
      "Light ops for SMBs usually means uptime checks, backups, scheduled dependency updates, and a clear path when something breaks. Dolphin Software prefers agreeing a post-launch care block before the final sprint ends.",
    ],
  },
    "landing-that-converts": {
    title: "Landing hierarchy: brand, one headline, one CTA",
    excerpt: "The first viewport is not a marketing dashboard. Lead with brand, one message, one action — everything else scrolls down.",
    body: [
      "Weak landings stuff stats, badges, schedules, and three CTAs into the first screen. Visitors do not know where to look.",
      "Practical rule: first viewport carries brand, one headline, one short support line, one CTA group, and one dominant image. No floating promo chips on the hero.",
      "At Dolphin Software we design one job per section. Proof, process, and FAQ come after the visitor already understands what you do.",
    ],
  },
    "booking-ux-patterns": {
    title: "Booking UX: clear slots, confirmations, fewer calls",
    excerpt: "Vague booking forms create messages and phone calls. Clear slots and next steps cut ops load.",
    body: [
      "People need to know which slots exist, which timezone applies, and what happens after they book. If they must guess, they call — usually at the worst moment.",
      "Working patterns: real availability, pending vs confirmed states, a confirmation with place or link, and controlled reschedule/cancel.",
      "For service SMBs, removing one call per booking pays for itself. Dolphin Software ships a short mobile flow before adding “smart” extras — and puts cancel policies in the final confirm step, not a buried PDF.",
    ],
  },
    "mobile-first-or-responsive": {
    title: "Responsive web vs native or hybrid apps",
    excerpt: "Not every product needs native on day one. Choose by usage habits, offline/push needs, and long-term maintenance cost.",
    body: [
      "If most traffic is browser-based — marketing plus a few core flows — responsive web is usually enough and far cheaper to maintain.",
      "Consider native or hybrid when you need reliable push, real offline, deep device access, or daily tool-like usage — not just a store listing for prestige.",
      "Dolphin Software often starts with web or PWA while the product hypothesis is still being tested. Dual-store upkeep is worth it only when retention is already clear.",
    ],
  },
    "design-system-lite": {
    title: "A lite design system for SMB sites",
    excerpt: "SMBs do not need 50 components. They need consistent tokens and a few reusable primitives so new pages stay coherent.",
    body: [
      "Full design systems often die of weight. A small team shipping a five-page site does not need an enterprise button matrix.",
      "Start with tokens — brand color, type roles, spacing, radius — then a short list of primitives: button, input, link, heading. Few variants, clear names.",
      "Dolphin Software runs a lite system: enough shared language to stay consistent, not enough ceremony to delay launch. Grow components when the product and team actually need them.",
    ],
  },
    "nextjs-app-router-notes": {
    title: "Practical Next.js App Router notes for marketing + product",
    excerpt: "App Router shines when boundaries are clear: shared layouts, server components for static content, client only where interaction lives.",
    body: [
      "Studio sites mix static pages (i18n, SEO) with a few interactive pockets (quote forms, filters). App Router works when you avoid wrapping whole trees in \"use client\".",
      "Prefer server-rendered copy and metadata; push forms and widgets into small client components. Keep data close to where it renders and cache on purpose.",
      "Dolphin Software uses Next for multilingual marketing sites because locale routing and static generation stay practical at SMB scale — as long as the client bundle stays lean. Read current docs before major upgrades; conventions move.",
    ],
  },
    "react-component-boundaries": {
    title: "Separating UI, hooks, and services in React",
    excerpt: "Components should render and call handlers. Data logic lives in hooks; HTTP lives in services — not all in one file.",
    body: [
      "When one file fetches, transforms, validates, and renders 300 lines of JSX, every small change is risky. Clear boundaries make review and onboarding faster.",
      "Practical rule: UI calls hooks; hooks use React Query (or similar) and call services; services only talk to the server with domain verbs — get/create/update/delete — no toasts or routing inside.",
      "Prefer react-hook-form with a schema over a useState per field. After mutations, invalidate the right domain query keys. Dolphin Software uses this split on product apps and richer marketing forms so new contributors can find the API path in minutes.",
    ],
  },
    "flutter-vs-react-native": {
    title: "Flutter vs React Native for SMB apps",
    excerpt: "Both can ship solid SMB apps. Choose by team skills, time-to-market, and maintenance — not by hype.",
    body: [
      "For SMB apps (booking, shop ops, light CRM), Flutter and React Native are both viable. The real question is which stack your team can ship and maintain for the next 12–24 months.",
      "Flutter often wins when you need consistent UI, smooth motion, and a single Dart codebase. React Native fits teams already strong in JavaScript/TypeScript or reusing web logic.",
      "List native needs (camera, BLE, payment SDKs), store update cadence, and who owns bugs after go-live. SMBs usually fail from missing maintainers, not missing “hot” tech.",
      "At Dolphin Software we sometimes prototype one core flow both ways when a client is undecided — then pick based on delivery speed and real maintenance cost.",
    ],
  },
    "api-auth-payments": {
    title: "Auth, payments, and third-party APIs without drama",
    excerpt: "Integrations break less from hard SDKs than from missing contracts, sandboxes, and failure plans.",
    body: [
      "Auth and payments are where timelines slip: incomplete docs, sandbox ≠ production, late or duplicate webhooks. Before wiring an SDK, lock the flow: who logs in, session lifetime, and what UI + backend do when payment fails.",
      "For auth: one source of truth, clear “logged in” vs “verified”, and a reset/lock runbook. For payments: idempotency keys, explicit order states, and never trust the client for amounts.",
      "Third-party APIs need a minimal contract: endpoints, auth, rate limits, retries, and who gets paged on downtime. Correlation IDs across requests save nights when Zalo OA or a gateway flakes.",
      "At Dolphin Software we draft state tables and a sandbox checklist before polishing UI. Drama drops when failure modes are known early.",
    ],
  },
    "integrations-checklist": {
    title: "Integration checklist before go-live (Zalo, payment, email)",
    excerpt: "The three channels SMB products trip on most — and what to tick before real traffic.",
    body: [
      "Zalo OA/API: production approval, working token refresh, message templates, and a fallback if the user hasn’t followed the OA. Test send-failure → retry / internal alert.",
      "Payment gateways: amount + signature verification, IPN/webhooks on a production-like env, partial refunds, duplicate pays, and gateway timeouts.",
      "Email/OTP: SPF/DKIM/DMARC, inbox placement, OTP rate limits, branded templates with a support path. Don’t rely on an unmonitored SMTP for transactional mail.",
      "Every integration needs an on-call owner, a day-one error dashboard, and a kill switch that disables a channel without killing the app. Dolphin Software folds this into UAT so go-live isn’t the first webhook night.",
    ],
  },
    "ai-agents-in-products": {
    title: "Where AI agents help product workflows (and where they don’t)",
    excerpt: "Agents shine with clear tools and narrow scope. Don’t let them auto-decide on money or high privilege.",
    body: [
      "In web/app products, agents help with concrete tools: internal search, form fill from context, support-ticket summaries, or next-step hints in a defined flow.",
      "They struggle with legal commitments, balance/payment state changes, or business decisions without a human in the loop. Fluent text is not an audit trail.",
      "Design for safety: limited tools, timeouts, logged actions (PII redacted), and a manual escape hatch. Measure completed-correct tasks, not answer length.",
      "Dolphin Software treats agents as ops helpers and domain-aware coding aids (MCP, business context) — not as a replacement for core transactions. Start one workflow, measure errors, then expand.",
    ],
  },
    "architecture-audit-lite": {
    title: "Lite architecture audits for slow or fragile systems",
    excerpt: "You don’t need a full rewrite. A 1–2 week audit can surface bottlenecks, deploy risk, and what to patch first.",
    body: [
      "When an app is slow or “touch it and it breaks,” full audits get deferred forever. Lite approach: pick 3–5 critical journeys, measure latency/errors, review deploy path, and list external dependencies.",
      "Practical checklist: N+1 / missing indexes, misplaced cache, unmonitored jobs, secrets in repo, no rollback, and single points of failure.",
      "Output should be a prioritized backlog: P0 data-loss/downtime, P1 visible slowness, P2 tech debt — with effort estimates, not just pretty diagrams.",
      "Dolphin Software runs lite audits toward “fixable next sprint”: evidence first, minimal proposals, rewrite talk later. Stabilize before stacking features.",
    ],
  },
    "billiard-ops-dashboard": {
    title: "Case: billiard shop ops dashboard — lessons learned",
    excerpt: "Tracking tables, play time, and shop status sounds simple — until shift pricing and “who owns this table?” appear.",
    body: [
      "Core need: staff see free/busy tables, start–end sessions, and shift totals without Excel. UI must work at a glance from the counter — not a pretty-but-slow analytics board.",
      "Hard parts: time-based pricing, mid-session table moves, pauses, and two devices editing one table. Clear states and short locks prevent double-starts.",
      "We shipped “open → run timer → close → pay” before monthly reports. Reports only matter when session data is clean.",
      "Dolphin Software’s takeaway for other ops products: design for noisy shifts, weak networks, and non-power users. One right button beats a complex chart.",
    ],
  },
    "badminton-court-booking": {
    title: "Case: badminton court booking site",
    excerpt: "Players need free slots fast. Owners need no double bookings and clear peak pricing.",
    body: [
      "Winning flow: court → slot → hold/confirm → pay or hold per shop rules. Availability must be fresh in seconds, not a half-day-old cache.",
      "Business rules beat pretty UI: hold duration, free-cancel window, proxy vs personal booking, peak hours. Write rules before coding the calendar.",
      "Mobile-first is mandatory — many book on the go. Short forms, clear validation, and confirm via Zalo/email when available.",
      "Dolphin Software’s lesson: the calendar is presentation; source of truth is slot inventory + booking state. When those drift, double booking follows.",
    ],
  },
    "event-ticket-convert": {
    title: "Case: event ticket booking convert flow",
    excerpt: "From event page to paid ticket — every extra step is a reason to bounce. Cut friction, don’t add vanity features.",
    body: [
      "Event page: one clear CTA, date/venue above the fold, and honest sold-out/remaining counts. Pretty photos don’t replace “how many left.”",
      "Checkout: minimal fields, short timed holds with a visible timer, one-shot pay with clear pending/success/fail + retry.",
      "After pay: ticket code/QR, check-in guidance, confirm via email/Zalo. Refund/change policy within two taps.",
      "Dolphin Software tracks funnel step-by-step (view → select → checkout → paid). Fix the biggest drop before upsells. Clarity converts; popups rarely do.",
    ],
  },
    "beauty-salon-booking": {
    title: "Case: beauty salon booking",
    excerpt: "Nail, makeup, and slot services win with clean calendars and timely reminders — not long forms.",
    body: [
      "Flow: service → stylist (if any) → time → confirm. Real durations prevent overlap; buffers between appointments matter as much as UI.",
      "Salon side: day/week view, reassign stylist, mark no-shows, lock maintenance slots. Split admin vs front-desk rights so deposits aren’t edited by mistake.",
      "Reminders (Zalo/SMS/email) at 24h and 2h cut no-shows. Allow cancel/reschedule in a short window so slots return to inventory.",
      "Dolphin Software’s lesson: stylist time is the core resource. Combos and vouchers must respect that time constraint.",
    ],
  },
    "remote-freelance-rhythm": {
    title: "Remote freelance delivery rhythm at a small studio",
    excerpt: "Remote with freelancers doesn’t need more meetings — it needs demo cadence, definition of done, and clear decision channels.",
    body: [
      "A small studio like Dolphin Software runs on rhythm: short kickoffs, milestone demos, and async workday updates — not daily status theater.",
      "Every task needs a DoD: UI/API/tests/UAT checklist. Vague “done” is the #1 delay when time zones and product/outsource tracks mix.",
      "Decision channels: one place for scope, one for fast chat, one for demos. Don’t bury important calls in vanishing DMs.",
      "With clients: fixed demo slots, early risk flags, milestone quotes. Freelancers join that rhythm — not an unlimited night box. Good rhythm beats micromanagement.",
    ],
  },
    "hiring-for-delivery": {
    title: "Hiring freelancers who can demo weekly",
    excerpt: "A strong CV is not enough. Dolphin Software hires for weekly demo cadence — delivery lives on visible progress.",
    body: [
      "When we staff a milestone, the key question is: what can you demo this Friday? A running build, a staging URL, or a short user-flow clip beats a polished slide deck.",
      "In interviews we ask how they cut scope when late and how they surface blockers. Vague answers usually mean vague delivery.",
      "Contracts should spell out demo cadence, update channel, and done criteria. Without a shared rhythm, remote work becomes a black box. For client milestones, Dolphin Software picks people who ship visibly.",
    ],
  },
    "why-we-write-estimates": {
    title: "Why written estimates beat verbal “around X”",
    excerpt: "“About two weeks” sounds friendly until scope shifts. Written estimates keep assumptions visible for both sides.",
    body: [
      "Verbal estimates vanish when scope changes. Clients remember the lowest number; teams remember the caveats — then the stories diverge.",
      "At Dolphin Software we write a short estimate: in/out of scope, assumptions, risk buffer, and when we will revise. It is a snapshot, not a rigid promise.",
      "When an assumption breaks, a short written update is cheaper than a post-launch argument. For SMBs, text also travels inside the company without a call replay.",
    ],
  },
    "client-comms-that-work": {
    title: "Client communication patterns that reduce rework",
    excerpt: "Most rework comes from ambiguity, not bad code. A few simple communication habits cut useless revision loops.",
    body: [
      "At Dolphin Software, rework often starts with a vague “looks good, go.” No screenshot, no acceptance, no final decision owner.",
      "Capture each UI/flow decision in one line plus a link or image. Separate blockers from nice-to-haves before editing. Keep decisions in one primary channel.",
      "Demos need a short agenda: what we review, what we decide, what waits. Clear sign-off now means fewer change requests later.",
    ],
  },
    "stock-community-disclaimer": {
    title: "Transparent disclaimers for community / non-advisory products",
    excerpt: "Stock or community products are easy to mistake for advice. Clear disclaimers early protect users and the studio.",
    body: [
      "For Dolphin Software community or market-reference products, the biggest risk is role confusion — not a UI bug. Users must know what the product is not.",
      "Place disclaimers near decision points: results pages, onboarding, and alerts — not only in the footer. Be specific: not investment/legal/tax advice; data may be delayed; users act at their own risk.",
      "If the product surfaces crowd signals or comments, label them as user opinions, not platform recommendations. Clear expectations build trust.",
    ],
  },
    "performance-budgets": {
    title: "Performance budgets for marketing sites",
    excerpt: "Marketing sites bloat from heroes, fonts, and tracking. A numeric budget helps the team say no to “one more script.”",
    body: [
      "Dolphin Software sets budgets early: target LCP, JS/CSS weight, and a max third-party request count. Measure on staging that mirrors production — not office Wi‑Fi.",
      "Every new font, carousel, or chat widget spends the budget. If you exceed it, cut or delay; do not wait until after launch to optimize.",
      "Full-bleed heroes still work with right-sized modern images and no heavy scripts above the fold. A short Web Vitals note each sprint beats a complex dashboard.",
    ],
  },
    "cms-when-you-need-it": {
    title: "When an SMB actually needs a CMS",
    excerpt: "Not every site needs a CMS on day one. Many SMBs update rarely — code plus markdown/JSON is enough and cheaper.",
    body: [
      "A CMS helps when many people edit often, need approvals, drafts, or schedules. If a founder tweaks a landing a few times a year, a CMS can be overhead.",
      "Dolphin Software often starts marketing sites with in-repo content (i18n dictionaries or MD) and CI deploys. No complex editor fee required.",
      "Adopt a CMS when marketing must change copy without engineering releases, when news volume grows, or when non-engineers own many locales. Otherwise you add training and config risk for little gain.",
    ],
  },
    "smoke-tests-before-ship": {
    title: "Smoke tests and launch checklists",
    excerpt: "Failed launches often miss small things: forms, locales, CTA links. A short checklist plus smoke tests saves all-nighters.",
    body: [
      "Before DNS flip or announce, Dolphin Software smokes home load, primary CTA, contact form, locale switch, and any booking/payment path.",
      "Keep a one-page checklist: correct env, analytics on, custom 404, robots/sitemap, and who is on-call for the first day. One person owns final go/no-go.",
      "Smoke tests catch “site down / form broken / wrong link” — not full regression. Recheck logs and a real mobile session in the first hour after launch.",
    ],
  },
    "multi-locale-sites": {
    title: "Multi-locale sites (VI/EN/JA/DE) without CMS chaos",
    excerpt: "Four locales easily become four drifting copies. Shared translation keys and a review rhythm keep sites aligned without a heavy CMS.",
    body: [
      "Dolphin Software uses one key tree across locales. Missing keys should fail build or tests — not surprise users on a live page.",
      "Do not duplicate whole HTML pages per language. Write a source locale, translate deliberately, then spot-check UI length (DE/JA often break layouts).",
      "Dictionaries or slug-based MD work until non-tech editors need daily updates. Locale switchers should keep context on the same page, not dump users on home.",
    ],
  },
    "theme-tokens-not-themes": {
    title: "Design tokens and themes: CSS variables over theme sprawl",
    excerpt: "Parallel theme files become debt fast. Tokens for color, space, and type via CSS variables keep one source of truth.",
    body: [
      "Cloning whole class sets for light/dark or brand variants drifts within months. Dolphin Software prefers tokens (`--color-accent`, `--font-display`) so components never hardcode hex in JSX.",
      "Theme switch means changing variable values on `:root` or `[data-theme]`, not rewriting components. Name tokens by role (accent, muted), not by raw color.",
      "Start with a small intentional set. Add tokens when reuse is real — do not mirror an entire design-tool scale on day one.",
    ],
  },
    "from-mvp-to-v1": {
    title: "From MVP to V1 without rewriting everything",
    excerpt: "V1 is not a clean-room rewrite. It is tighter scope, selective debt paydown, and keeping what already proved value.",
    body: [
      "A successful MVP is often ugly in the right places. Rewriting everything before you know what drives revenue or learning wastes that signal.",
      "Dolphin Software keeps familiar user paths, pays debt at the edges (auth, deploy, observability), and rewrites only modules that block speed or cause repeat incidents.",
      "Define V1 as stability, operability, or audience expansion — not “prettier architecture” alone. Rank tech debt by cost/risk and clear a few items per milestone beside measured features.",
    ],
  },
  },
  ja: {
    "discovery-before-build": {
    title: "実装前のディスカバリーが予算を守る",
    excerpt: "ゴール・スコープ・リスクをコードの前に揃える方が、ローンチ後の作り直しより安く済むことが多い。",
    body: [
      "SMBのWeb/アプリ案件では、いきなり画面やチケットから始まりがちです。後からフローのズレや不要機能が露呈し、残予算を食う作り直しになります。",
      "短いディスカバリーでペルソナ、主要ジャーニー、成功指標、フェーズ2に回す範囲を合意します。Dolphin Softwareではこれを手戻り防止の保険と考えています。",
      "スコープが共有されると見積もりが現実的になり、早期に試すべき点とローンチ後のデータ待ちでよい点がはっきりします。",
    ],
  },
    "sprint-demo-cadence": {
    title: "隔週デモでSMBの認識ズレを防ぐ",
    excerpt: "短い定例デモはステータスメールより効く。進捗が見え、早い段階で軌道修正できる。",
    body: [
      "週次の文章報告は読み流されやすい一方、近い本番環境でのデモはクリックと即決を促します。",
      "2週間サイクルなら意味のある変化を見せつつ、フィードバックの滞留も防げます。目的は1つに絞るのがコツです。",
      "Dolphin Softwareではデモを短くし、決定を記録してバックログを動かします。「ついでに」の追加要望は別扱いです。",
    ],
  },
    "scope-without-scope-creep": {
    title: "双方を守る見積もりの書き方",
    excerpt: "良い見積もりは最安値ではない。「含まれるもの」と「別見積もり」の境界をはっきりさせることだ。",
    body: [
      "スコープクリープは暗黙の前提から生まれます。クライアントは「当然入っている」と思い、チームは「範囲外」と思っている——ローンチ直前に双方が驚く構図です。",
      "健全な見積もりは成果物、前提、依存関係、意図的な除外を列挙します。「サンドボックス決済」と「本番ゴーライブ＋照合」は別物です。",
      "Dolphin Softwareでは合意後の大きな変更は短い変更依頼（内容・日程・費用）で扱います。プロジェクトを終わらせるための規律です。",
    ],
  },
    "handover-and-ops": {
    title: "ローンチ後の引き継ぎと軽い運用",
    excerpt: "ローンチはゴールではない。短い引き継ぎと最小限の運用で、構築チームが離れた後もプロダクトが生き続ける。",
    body: [
      "URLが公開された時点で「完了」扱いになると、DNSや環境変数、デプロイ手順の所有者がいなくなります。数ヶ月後の小さな修正が障害になります。",
      "最低限の引き継ぎは、短い構成メモ、アクセス一覧、デプロイ手順、ロールバック、意図的に残した技術的負債です。",
      "SMB向けの軽い運用は稼働監視、バックアップ、定期アップデート、障害時の連絡経路で足りることが多いです。Dolphin Softwareは最終スプリント前にケア枠を合意するのを推奨します。",
    ],
  },
    "landing-that-converts": {
    title: "LPの階層：ブランド、見出し1つ、CTA1つ",
    excerpt: "最初のビューポートはダッシュボードではない。ブランド、一文、一つの行動——それ以外は下に送る。",
    body: [
      "弱いLPは統計、バッジ、スケジュール、複数CTAを最初の画面に詰め込み、視線が散ります。",
      "実務ルール：最初の画面はブランド、見出し、短い補足、CTAグループ、主役画像。ヒーロー上の浮遊チップは不要です。",
      "Dolphin Softwareではセクションごとに役割を1つにします。証拠やFAQは「何をする会社か」が伝わってからで十分です。",
    ],
  },
    "booking-ux-patterns": {
    title: "予約UX：枠の明確さ、確認、電話を減らす",
    excerpt: "曖昧な予約フォームはメッセージと電話を増やす。枠と次の一手を明確にすれば運用負荷が下がる。",
    body: [
      "空き枠、タイムゾーン、予約後の流れが見えないと、ユーザーは電話します——しかも忙しいタイミングで。",
      "有効なパターンは実在枠、pending/confirmed、場所やリンク付き確認、制御された変更・キャンセルです。",
      "サービス系SMBでは予約1件あたり電話が減るだけで効果が出ます。Dolphin Softwareはモバイルの短いフローを先に整え、キャンセル方針も最終確認に載せます。",
    ],
  },
    "mobile-first-or-responsive": {
    title: "レスポンシブWebか、ネイティブ/ハイブリッドか",
    excerpt: "最初からネイティブが必要とは限らない。利用習慣、オフライン/プッシュ、長期保守コストで選ぶ。",
    body: [
      "トラフィックの大半がブラウザで、マーケ＋主要フロー程度なら、レスポンシブWebで十分なことが多いです。",
      "信頼できるプッシュ、本格オフライン、深い端末連携、毎日使うツール用途ならアプリを検討します。ストア掲載だけの見栄え目的は弱い理由です。",
      "Dolphin Softwareは仮説検証中はWeb/PWAから始めることが多いです。iOS/Androidの二重保守は、定着が見えてからでも遅くありません。",
    ],
  },
    "design-system-lite": {
    title: "SMBサイト向けライトなデザインシステム",
    excerpt: "SMBにコンポーネント50個は不要。トークンと少数のプリミティブで、ページ追加時も破綻しない一貫性を作る。",
    body: [
      "フル仕様のデザインシステムは重さで死にがちです。少人数の小規模サイトにエンタープライズ級のバリアント表は要りません。",
      "まずはトークン（色・書体役割・余白・半径）、次に button / input / link / heading など少数のプリミティブ。",
      "Dolphin Softwareのライトシステムは共通言語を保つ程度に留め、ローンチを遅らせる儀式にはしません。必要になってから拡張します。",
    ],
  },
    "nextjs-app-router-notes": {
    title: "マーケ＋プロダクト向けNext.js App Router実務メモ",
    excerpt: "共有レイアウト、静的はServer Components、操作が必要な所だけClient——境界が明確なときApp Routerは強い。",
    body: [
      "スタジオサイトは静的ページ（i18n・SEO）と少量の対話UIが混在します。木全体を\"use client\"で包まないことが要点です。",
      "コピーとmetadataはサーバー寄り、フォーム等は小さなClientへ。データは描画箇所の近くで、キャッシュは意図的に。",
      "Dolphin Softwareは多言語マーケにNextを使います。ロケールroutingと静的生成はSMB規模でも現実的です。メジャー升级前は現行docsを確認してください。",
    ],
  },
    "react-component-boundaries": {
    title: "ReactでUI / hooks / servicesを分ける",
    excerpt: "コンポーネントは描画とハンドラ呼び出しまで。データロジックはhooks、HTTPはservices——1ファイルに詰めない。",
    body: [
      "1ファイルでfetch・変換・バリデーション・長いJSXを兼ねると、小さな変更でもリスクが上がります。境界があるとレビューとオンボーディングが速くなります。",
      "実務ルール：UIはhooksを呼び、hooksはReact Query等経由でservicesへ。servicesはサーバー通信のみ（get/create/update/delete）。トーストや遷移は入れません。",
      "フォームはフィールドごとのuseStateよりreact-hook-form＋スキーマ。mutation後はドメインのqueryKeyを正しくinvalidate。Dolphin Softwareはプロダクトでもマーケフォームでもこの分割を使います。",
    ],
  },
    "flutter-vs-react-native": {
    title: "SMBアプリでFlutterとReact Nativeの選び方",
    excerpt: "どちらでも十分作れます。流行ではなく、チーム・納期・保守で決めるのが現実的です。",
    body: [
      "予約・店舗運用・軽量CRMなどSMBアプリでは、FlutterもReact Nativeも十分戦えます。問うべきは「どちらが強いか」ではなく、12〜24ヶ月メンテしやすいのはどちらかです。",
      "UIの統一感や滑らかなアニメ、Dart一本化を重視するならFlutter。JS/TSが強くWebロジックを再利用したいならReact Nativeが合いやすいです。",
      "カメラ、BLE、決済SDKなどネイティブ要件、ストア更新頻度、本番後の担当者を先に洗い出しましょう。SMBは技術不足より人手不足で止まりがちです。",
      "Dolphin Softwareでは迷う案件で主要フローを両側に短く試作し、納期と保守コストで決めることがあります。",
    ],
  },
    "api-auth-payments": {
    title: "認証・決済・外部APIをトラブル少なくつなぐ",
    excerpt: "SDKの難しさより、契約・サンドボックス・失敗時の設計不足で壊れます。",
    body: [
      "認証と決済は遅延の温床です。SDK接続の前に、誰がログインし、セッション寿命、決済失敗時のUI/バックエンド挙動を確定しましょう。",
      "認証は真実のソースを一つに。「ログイン済み」と「確認済み」を分け、リセット/ロック手順を文書化。決済はidempotency、注文状態の明確化、金額はクライアントを信じない。",
      "外部APIはエンドポイント、認証、レート制限、リトライ、障害時の連絡先を最低限の契約に。相関IDがあると深夜の切り分けが楽になります。",
      "Dolphin SoftwareではUIを整える前に状態表とサンドボックスチェックリストを先に作ります。",
    ],
  },
    "integrations-checklist": {
    title: "Go-live前の連携チェックリスト（Zalo・決済・メール）",
    excerpt: "SMBでつまずきやすい3チャネルと、本番前に確認すべき項目です。",
    body: [
      "Zalo OA/API：本番承認、トークン更新、テンプレ、未フォロー時のフォールバック。送信失敗→リトライ/社内通知まで確認。",
      "決済：金額・署名検証、本番相当のWebhook、部分返金、二重決済、タイムアウト。",
      "メール/OTP：SPF/DKIM/DMARC、迷惑メール回避、OTPレート制限、サポート導線付きテンプレ。監視なしSMTPに依存しない。",
      "連携ごとに担当者、初日のエラーダッシュボード、チャネルだけ切るキルスイッチを用意。Dolphin SoftwareはこれをUATに組み込みます。",
    ],
  },
    "ai-agents-in-products": {
    title: "プロダクト業務でAIエージェントが効く場所／効かない場所",
    excerpt: "明確なツールと狭い範囲では有効。金銭や高権限の自動決定は任せないでください。",
    body: [
      "Web/アプリでは、社内検索、コンテキストからの入力補助、サポート要約、定義済みフローの次アクション提案などでエージェントが効きます。",
      "法的約束、残高/決済状態の変更、人の確認なしの業務判断は苦手です。流暢な文章は監査証跡の代わりになりません。",
      "ツール制限、タイムアウト、操作ログ（PIIマスク）、手動フォールバックを設計。正解タスク完了率で測りましょう。",
      "Dolphin Softwareはエージェントを運用支援やドメイン寄りのコーディング補助（MCP等）に留め、基幹トランザクションの代替にはしません。",
    ],
  },
    "architecture-audit-lite": {
    title: "遅い／壊れやすいシステム向けライト構成監査",
    excerpt: "全面作り直しは不要。1〜2週の監査でボトルネックと先に直す点が見えます。",
    body: [
      "フル監査は先送りされがちです。重要ジャーニー3〜5本を測り、デプロイ経路と外部依存を洗い出すライト手法が有効です。",
      "確認例：N+1/インデックス不足、誤ったキャッシュ、監視なしジョブ、リポジトリ内シークレット、ロールバック欠如、単一障害点。",
      "成果物は優先バックログ（P0障害、P1遅延、P2負債）と工数見積もり。綺麗な図だけでは不十分です。",
      "Dolphin Softwareは「次スプリントで直せる」監査を重視。証跡→最小提案→その後にリライト議論、の順です。",
    ],
  },
    "billiard-ops-dashboard": {
    title: "事例：ビリヤード店の運用ダッシュボードで学んだこと",
    excerpt: "卓・プレイ時間・状態の管理は単純に見えます。シフト料金や「この卓は誰の？」で難しくなります。",
    body: [
      "要件は、空き/使用中の把握、セッション開始終了、シフト合計をExcelなしで。カウンターから一目で使えるUIが必要です。",
      "難所は時間帯料金、途中の卓移動、一時停止、二端末同時編集。状態の明確化と短いロックで二重開始を防ぎます。",
      "月次レポートより「開卓→計測→閉卓→会計」を先に固めました。セッションが汚ければレポートは意味を持ちません。",
      "Dolphin Softwareの学び：騒がしいシフトと弱い回線、パワーユーザー以外向けに。正しいボタン一つが複雑なグラフに勝ちます。",
    ],
  },
    "badminton-court-booking": {
    title: "事例：バドミントンコート予約サイト",
    excerpt: "空き枠の素早い把握と、ダブルブッキング防止・ピーク料金が要点です。",
    body: [
      "成功フローはコート→枠→仮押さえ/確定→支払いまたは店舗ルールのホールド。空き状況は数秒で新鮮である必要があります。",
      "UIより業務ルール：ホールド時間、無料キャンセル期限、代理予約、ピーク時間。ルールを書いてからカレンダーを実装。",
      "モバイル優先は必須。短いフォーム、明確なバリデーション、可能ならZalo/メール確認。",
      "Dolphin Softwareの学び：カレンダーは表示層。真実は枠在庫と予約状態。ずれればダブルブッキングします。",
    ],
  },
    "event-ticket-convert": {
    title: "事例：イベントチケット予約のコンバージョン導線",
    excerpt: "イベントページから決済完了まで。余分な一歩が離脱の理由になります。",
    body: [
      "イベントページは明確なCTA、日時・会場をファーストビューに、残券/完売を正直に。綺麗な写真だけでは足りません。",
      "チェックアウトは最小項目、短い仮押さえとタイマー、処理中/成功/失敗+再試行が分かる決済。",
      "決済後は券コード/QR、チェックイン案内、メール/Zalo確認。変更・返金ポリシーは2タップ以内。",
      "Dolphin Softwareはファネルを段階計測し、最大ドロップを先に直します。明快さがコンバージョンを作ります。",
    ],
  },
    "beauty-salon-booking": {
    title: "事例：ビューティーサロン予約",
    excerpt: "ネイルやメイクは、きれいなカレンダーと適切なリマインドでノーショーを減らせます。",
    body: [
      "サービス→スタイリスト（任意）→日時→確定。実所要時間とバッファが重複防止の鍵です。",
      "店舗側は日/週表示、担当変更、ノーショー記録、メンテスロットロック。受付と管理者の権限を分けます。",
      "24時間前と2時間前のリマインド（Zalo/SMS/メール）が有効。短い変更ウィンドウで枠を在庫に戻す。",
      "Dolphin Softwareの学び：スタイリストの時間が中核リソース。コンボやクーポンも時間制約を守るべきです。",
    ],
  },
    "remote-freelance-rhythm": {
    title: "小さなスタジオのリモート／フリーランス納品リズム",
    excerpt: "会議を増やすより、デモ周期・完了定義・意思決定チャネルを明確に。",
    body: [
      "Dolphin Softwareのような小さなスタジオは、短いキックオフ、マイルストーンデモ、非同期の日次更新で回します。毎日の定例は必須ではありません。",
      "タスクごとにDoD（UI/API/テスト/UAT）を。曖昧な「完了」が分散チームの最大の遅延源です。",
      "スコープ確定・チャット・デモの場所を分ける。重要な決定を消えやすいDMだけに残さない。",
      "顧客には固定デモ、早期リスク共有、マイルストーン見積もり。フリーランスもそのリズムに合わせます。",
    ],
  },
    "hiring-for-delivery": {
    title: "週次デモできるフリーランスの採用",
    excerpt: "履歴書だけでは足りません。Dolphin Software は週次デモのリズムを重視します。成果は見える進捗で決まります。",
    body: [
      "マイルストーン要員を探すとき、核心は「今週金曜に何をデモできるか」です。動くビルド、ステージング URL、短い操作動画がスライドより価値があります。",
      "面接では遅延時のスコープ削減とブロッカー報告を聞きます。曖昧な答えは、だいたい曖昧な納品につながります。",
      "契約にデモ頻度・連絡手段・完了条件を明記します。共通リズムがないとリモートはブラックボックスになります。Dolphin Software は見える納品ができる人を選びます。",
    ],
  },
    "why-we-write-estimates": {
    title: "口頭の「だいたいX」より見積を書く理由",
    excerpt: "「だいたい2週間」は聞こえが良いですが、スコープが変わると争点になります。前提を書いた見積が双方の枠を揃えます。",
    body: [
      "口頭見積はスコープ変更と同時に消えます。クライアントは低い数字を、チームは条件を覚え、話がずれます。",
      "Dolphin Software では範囲・前提・リスクバッファ・見直し条件を短い文書にします。約束の固定ではなく、その時点のスナップショットです。",
      "前提が崩れたら短い更新文の方が、ローンチ後の口論より安く済みます。SMB では社内共有もしやすくなります。",
    ],
  },
    "client-comms-that-work": {
    title: "手戻りを減らすクライアントコミュニケーション",
    excerpt: "手戻りはコード不足より曖昧さから来ることが多いです。シンプルな習慣が無駄な修正ループを減らします。",
    body: [
      "Dolphin Software では「いいね、進めて」だけで始まる手戻りが多いです。スクショも受け入れ条件も最終決定者もありません。",
      "UI/フロー決定は1行＋リンク/画像で残し、修正前にブロッカーと要望を分け、決定は主チャンネルに集約します。",
      "デモには短いアジェンダを。何を見るか・何を決めるか・何を翌週へ。今の合意が後の変更要求を減らします。",
    ],
  },
    "stock-community-disclaimer": {
    title: "コミュニティ／非助言プロダクトの透明な免責",
    excerpt: "株式・コミュニティ系は助言と誤解されやすいです。早い段階の明確な免責がユーザーとスタジオを守ります。",
    body: [
      "Dolphin Software のコミュニティ／市場参照プロダクトでは、最大リスクは UI バグではなく役割の誤解です。何でないかを示す必要があります。",
      "免責は結果ページ・オンボーディング・通知など判断の近くに置き、フッターだけに埋めない。投資・法務・税務助言ではないこと、遅延・欠落の可能性、自己責任を具体的に書きます。",
      "群衆シグナルやコメントはユーザー意見でありプラットフォーム推奨ではないと明示します。期待値の整理が信頼になります。",
    ],
  },
    "performance-budgets": {
    title: "マーケティングサイトのパフォーマンス予算",
    excerpt: "ヒーロー・フォント・トラッキングで肥大化しがちです。数値の予算があると「もう1つスクリプト」を止められます。",
    body: [
      "Dolphin Software は早期に LCP 目標・JS/CSS 重量・サードパーティ上限を設定します。本番に近いステージングで測り、オフィス Wi‑Fi の錯覚を避けます。",
      "フォントやカルーセル、チャット追加は予算を消費します。超過したら削減か延期。ローンチ後の最適化待ちはしません。",
      "フルブリードヒーローは適切な画像と折り上の重いスクリプト回避で成立します。スプリントごとの短い Web Vitals メモで十分です。",
    ],
  },
    "cms-when-you-need-it": {
    title: "SMB が本当に CMS を必要にするとき",
    excerpt: "初日からの CMS は必須ではありません。更新が少ないならコード＋markdown/JSON の方が安く足ります。",
    body: [
      "多数が頻繁に編集し、承認・下書き・予約が必要なら CMS が効きます。創業者が年に数回ランディングを触るだけならオーバーヘッドになりがちです。",
      "Dolphin Software のマーケサイトはリポジトリ内コンテンツ（i18n や MD）と CI デプロイから始めることが多いです。",
      "マーケがエンジニアなしで文言を変えたい、記事量が増える、非エンジニアが多言語を持つなら CMS を検討。そうでなければ学習コストと設定リスクが増えるだけです。",
    ],
  },
    "smoke-tests-before-ship": {
    title: "リリース前のスモークテストとチェックリスト",
    excerpt: "失敗の多くはフォーム・ロケール・CTA など小さな見落としです。短いチェックとスモークで徹夜を減らせます。",
    body: [
      "DNS 切替や告知の前に、Dolphin Software はホーム表示・主 CTA・問い合わせ・ロケール切替・予約/決済があればその経路をスモークします。",
      "1ページのリストで環境・解析・404・robots/sitemap・初日のオンコールを確認。最終 go/no-go は一人が持ちます。",
      "スモークは全面回帰ではなく「落ちる／フォーム壊れ／リンク誤り」を拾います。公開直後はログと実機モバイルを再確認します。",
    ],
  },
    "multi-locale-sites": {
    title: "CMS を混沌化させない多言語サイト（VI/EN/JA/DE）",
    excerpt: "4ロケールはすぐ内容がずれます。共通キーとレビュー手順で、重い CMS なしでも揃えられます。",
    body: [
      "Dolphin Software は全ロケールで同じキー木を使います。欠落はビルド/テストで検知し、本番でユーザーに見せません。",
      "言語ごとに HTML を複製しない。ソース言語を書き、計画的に翻訳し、DE/JA の長さでレイアウト崩れがないか確認します。",
      "日次で非エンジニアが編集するまで辞書や slug ベース MD で十分。スイッチャーは同一ページ文脈を保ち、ホームへ落とさない。",
    ],
  },
    "theme-tokens-not-themes": {
    title: "デザイントークンとテーマ：テーマ乱立より CSS 変数",
    excerpt: "並列テーマファイルはすぐ負債になります。色・余白・書体を CSS 変数のトークンにすると単一の真実源になります。",
    body: [
      "ライト/ダークやブランド差分でクラス一式を複製すると数か月でずれます。Dolphin Software はトークン（`--color-accent` など）を優先し、JSX に hex を直書きしません。",
      "テーマスイッチは `:root` / `[data-theme]` の値変更であり、コンポーネント構造の書き換えではありません。名前は役割（accent, muted）で付けます。",
      "意図した少数から始め、再利用が確かになってから追加。初日にデザインツール全スケールを写さない。",
    ],
  },
    "from-mvp-to-v1": {
    title: "全部書き直さずに MVP から V1 へ",
    excerpt: "V1 はクリーンルーム再実装ではありません。範囲を締め、負債を選んで返し、価値が証明された部分を残すことです。",
    body: [
      "成功した MVP は正しい場所で雑なことが多いです。何が収益や学習を生むか分からないうちの全面書き直しはその信号を捨てます。",
      "Dolphin Software は慣れた導線を保ち、auth・デプロイ・可観測性など縁の負債を返し、速度阻害や再発障害のモジュールだけ書き換えます。",
      "V1 は安定・運用・対象拡大として定義し、「きれいな設計」だけを目的にしない。負債をコスト/リスクで順位付けし、計測付き機能と並行して消化します。",
    ],
  },
  },
  de: {
    "discovery-before-build": {
    title: "Discovery vor dem Code spart Budget",
    excerpt: "Ziele, Scope und Risiken vor dem ersten Commit zu klären kostet meist weniger als ein Rebuild nach dem Launch.",
    body: [
      "Viele SMB-Projekte starten direkt mit Screens und Tickets. Teuer wird es später: falsche Flows, ungenutzte Features und ein Rebuild, der das Restbudget auffrisst.",
      "Ein kurzer Discovery-Workshop klärt Personas, die Hauptjourney, Erfolgsmetriken und was bewusst in Phase zwei wartet. Bei Dolphin Software ist das die günstigste Absicherung gegen Nacharbeit.",
      "Gemeinsamer Scope macht Schätzungen ehrlich — und zeigt, was früh prototypisiert werden sollte.",
    ],
  },
    "sprint-demo-cadence": {
    title: "Zweiwochen-Demos halten SMB-Kunden aligned",
    excerpt: "Kurze, regelmäßige Demos schlagen Status-Mails — Kunden sehen echten Fortschritt und steuern früh nach.",
    body: [
      "Schriftliche Updates sind leicht zu überfliegen und schwer zu hinterfragen. Ein Demo auf einem near-prod Build lässt den Kunden klicken und entscheiden, solange Änderungen noch günstig sind.",
      "Ein Zweiwochen-Rhythmus zeigt echten Fortschritt, ohne Feedback stauen zu lassen. Jede Session braucht ein klares Ziel.",
      "Bei Dolphin Software bleiben Demos kurz: Entscheidungen werden festgehalten, das Backlog bewegt sich, und „nebenbei noch…“ bleibt draußen.",
    ],
  },
    "scope-without-scope-creep": {
    title: "Schätzungen, die beide Seiten schützen",
    excerpt: "Eine gute Schätzung ist nicht die niedrigste Zahl — sie zieht die Grenze zwischen inkludiert und später berechnet.",
    body: [
      "Scope Creep lebt von stillen Annahmen. Der Kunde hält ein Feature für „klar inklusive“, das Team für „out of scope“. In der Launch-Woche wundert sich dann jeder.",
      "Solide Schätzungen listen Deliverables, Annahmen, Abhängigkeiten und bewusste Ausschlüsse. Sandbox-Zahlung ist nicht Production-Go-live mit Abstimmung.",
      "Bei Dolphin Software laufen wesentliche Änderungen nach Freigabe über einen kurzen Change Request — damit Projekte tatsächlich fertig werden.",
    ],
  },
    "handover-and-ops": {
    title: "Handover und leichtes Ops nach dem Launch",
    excerpt: "Launch ist nicht das Ende. Klarer Handover und minimales Ops halten das Produkt am Leben, wenn das Build-Team zurücktritt.",
    body: [
      "Viele Projekte gelten als fertig, sobald die URL live ist — dann gehört DNS, Env und Deploy niemandem. Ein kleiner Hotfix wird Monate später zum Ausfall.",
      "Minimaler Handover: kurze Architekturnotiz, Zugangsübersicht, Deploy-Schritte, Rollback-Checkliste und bewusst belassene Tech-Debt.",
      "Leichtes Ops für SMBs heißt meist Uptime, Backups, geplante Updates und ein klarer Eskalationsweg. Dolphin Software klärt das Care-Paket idealerweise vor dem letzten Sprint.",
    ],
  },
    "landing-that-converts": {
    title: "Landing-Hierarchie: Marke, eine Headline, ein CTA",
    excerpt: "Der erste Viewport ist kein Marketing-Dashboard. Marke, eine Botschaft, eine Aktion — der Rest scrollt nach unten.",
    body: [
      "Schwache Landings stopfen Stats, Badges, Termine und drei CTAs in den ersten Screen. Besucher wissen nicht, wohin sie schauen sollen.",
      "Praxisregel: Erster Viewport trägt Marke, eine Headline, eine kurze Stützzeile, eine CTA-Gruppe und ein dominantes Bild — ohne schwebende Promo-Chips auf dem Hero.",
      "Bei Dolphin Software hat jede Section einen Job. Proof und FAQ kommen, nachdem klar ist, was ihr tut.",
    ],
  },
    "booking-ux-patterns": {
    title: "Booking-UX: klare Slots, Bestätigung, weniger Anrufe",
    excerpt: "Unklare Buchungsformulare erzeugen Nachrichten und Anrufe. Klare Slots und nächste Schritte entlasten den Betrieb.",
    body: [
      "Nutzer brauchen echte Slots, eine klare Zeitzone und wissen, was nach der Buchung passiert. Sonst rufen sie an — meist zur Unzeit.",
      "Gute Muster: echte Verfügbarkeit, Pending vs. Confirmed, Bestätigung mit Ort oder Link, kontrolliertes Umbuchen/Stornieren.",
      "Für Service-SMBs spart schon ein Anruf weniger pro Buchung spürbar Zeit. Dolphin Software liefert zuerst einen kurzen Mobile-Flow und stellt Storno-Regeln in den letzten Bestätigungsschritt.",
    ],
  },
    "mobile-first-or-responsive": {
    title: "Responsive Web vs. Native/Hybrid-App",
    excerpt: "Nicht jedes Produkt braucht Native am Tag eins. Entscheide nach Nutzung, Offline/Push und langfristigen Wartungskosten.",
    body: [
      "Wenn der Traffic vor allem im Browser liegt — Marketing plus wenige Kernflows — reicht responsive Web meist und ist günstiger zu betreiben.",
      "Native oder Hybrid lohnen sich bei zuverlässigem Push, echtem Offline, tiefer Geräteanbindung oder täglicher Tool-Nutzung — nicht nur für einen Store-Eintrag.",
      "Dolphin Software startet oft mit Web/PWA, solange die Produkthypothese noch getestet wird. Doppelte Store-Pflege zahlt sich aus, wenn Retention klar ist.",
    ],
  },
    "design-system-lite": {
    title: "Lite Design System für SMB-Sites",
    excerpt: "SMBs brauchen keine 50 Komponenten — sondern Tokens und wenige Primitives, damit neue Seiten kohärent bleiben.",
    body: [
      "Volle Design Systems sterben oft am Eigengewicht. Ein kleines Team mit fünf Seiten braucht keine Enterprise-Button-Matrix.",
      "Zuerst Tokens — Farbe, Typorollen, Spacing, Radius — dann wenige Primitives: Button, Input, Link, Heading. Wenige Varianten, klare Namen.",
      "Dolphin Software nutzt ein Lite-System: genug gemeinsame Sprache für Konsistenz, zu wenig Zeremonie für Launch-Verzögerung. Komponenten wachsen mit echtem Bedarf.",
    ],
  },
    "nextjs-app-router-notes": {
    title: "Praktische Next.js-App-Router-Notizen für Marketing + Produkt",
    excerpt: "App Router wirkt, wenn Grenzen klar sind: Layouts teilen, Server Components für Statik, Client nur bei Interaktion.",
    body: [
      "Studio-Sites mischen statische Seiten (i18n, SEO) mit wenigen interaktiven Inseln. App Router funktioniert, wenn nicht ganze Bäume in \"use client\" landen.",
      "Copy und Metadata serverseitig; Forms und Widgets in kleine Client-Komponenten. Daten nah am Render halten, Caching bewusst setzen.",
      "Dolphin Software nutzt Next für mehrsprachige Marketing-Sites — Locale-Routing und Static Generation bleiben auf SMB-Skala praktisch, solange das Client-Bundle schlank bleibt. Vor Major-Upgrades aktuelle Docs lesen.",
    ],
  },
    "react-component-boundaries": {
    title: "UI, Hooks und Services in React trennen",
    excerpt: "Komponenten rendern und rufen Handler auf. Datenlogik gehört in Hooks, HTTP in Services — nicht alles in eine Datei.",
    body: [
      "Wenn eine Datei fetched, transformiert, validiert und 300 Zeilen JSX rendert, ist jede kleine Änderung riskant. Klare Grenzen beschleunigen Review und Onboarding.",
      "Praxisregel: UI ruft Hooks; Hooks nutzen React Query (o. ä.) und Services; Services sprechen nur mit dem Server (get/create/update/delete) — ohne Toasts oder Routing.",
      "Lieber react-hook-form mit Schema als useState pro Feld. Nach Mutations die richtigen Domain-QueryKeys invalidieren. Dolphin Software nutzt diese Trennung in Product-Apps und reicheren Marketing-Forms.",
    ],
  },
    "flutter-vs-react-native": {
    title: "Flutter vs. React Native für KMU-Apps",
    excerpt: "Beide können solide KMU-Apps liefern. Entscheiden Sie nach Team, Time-to-Market und Wartung — nicht nach Hype.",
    body: [
      "Für KMU-Apps (Buchung, Shop-Ops, leichtes CRM) sind Flutter und React Native beide tauglich. Die Frage ist: Was kann Ihr Team in 12–24 Monaten zuverlässig warten?",
      "Flutter punktet bei einheitlicher UI und einem klaren Dart-Codebase. React Native passt zu starken JS/TS-Teams und Wiederverwendung von Web-Logik.",
      "Listen Sie Native-Bedarfe (Kamera, BLE, Payment-SDKs), Update-Rhythmus und Bug-Ownership nach Go-Live. KMUs scheitern oft an fehlenden Maintainern, nicht an fehlender „Trend-Tech“.",
      "Bei Dolphin Software prototypisieren wir bei Unsicherheit manchmal einen Kernflow in beiden Stacks — und wählen nach Liefergeschwindigkeit und Wartungskosten.",
    ],
  },
    "api-auth-payments": {
    title: "Auth, Payments und Drittanbieter-APIs ohne Drama",
    excerpt: "Integrationen scheitern selten am SDK — eher an fehlenden Contracts, Sandboxes und Fehlerplänen.",
    body: [
      "Auth und Payments bremsen Projekte: lückenhafte Docs, Sandbox ≠ Produktion, späte oder doppelte Webhooks. Vor dem SDK-Anschluss Flow klären: Login, Session-Dauer, Verhalten bei Zahlungsfehler.",
      "Auth: eine Source of Truth, klar „eingeloggt“ vs. „verifiziert“, Runbook für Reset/Sperre. Payments: Idempotency-Keys, klare Bestellzustände, Beträge nie vom Client übernehmen.",
      "Drittanbieter brauchen Minimal-Contract: Endpoints, Auth, Rate Limits, Retries und Alarm-Owner. Correlation-IDs helfen, wenn Gateways nachts ausfallen.",
      "Bei Dolphin Software kommen Zustandstabellen und Sandbox-Checklisten vor dem UI-Feinschliff — weniger Drama beim Go-Live.",
    ],
  },
    "integrations-checklist": {
    title: "Integrations-Checkliste vor Go-Live (Zalo, Payment, E-Mail)",
    excerpt: "Drei Kanäle, an denen KMU-Produkte oft scheitern — und was Sie vor echtem Traffic abhaken sollten.",
    body: [
      "Zalo OA/API: Produktionsfreigabe, Token-Refresh, Templates und Fallback ohne OA-Follow. Sendefehler → Retry / interner Alert testen.",
      "Payment: Betrag und Signatur prüfen, Webhooks produktionsnah, Teilrefunds, Doppelzahlungen, Timeouts.",
      "E-Mail/OTP: SPF/DKIM/DMARC, Inbox-Platzierung, OTP-Limits, Templates mit Support-Pfad. Kein unmonitortes SMTP für Transaktionsmail.",
      "Jede Integration braucht Owner, Day-one-Error-Dashboard und Kill-Switch. Dolphin Software nimmt das in die UAT auf — Go-Live ist nicht die erste Webhook-Nacht.",
    ],
  },
    "ai-agents-in-products": {
    title: "Wo AI-Agents Produkt-Workflows helfen — und wo nicht",
    excerpt: "Agents sind stark bei klaren Tools und engem Scope. Keine Auto-Entscheidungen über Geld oder hohe Rechte.",
    body: [
      "In Web/Apps helfen Agents bei konkreten Tools: interne Suche, Formularhilfe aus Kontext, Support-Zusammenfassungen, Next-Step-Hinweise in definierten Flows.",
      "Schwächer bei rechtlichen Zusagen, Saldo-/Payment-Änderungen oder Business-Entscheidungen ohne Human-in-the-Loop. Flüssiger Text ist kein Audit-Trail.",
      "Sicherheit: begrenzte Tools, Timeouts, Action-Logs (PII redacted), manueller Escape. Messen Sie korrekt abgeschlossene Tasks, nicht Antwortlänge.",
      "Dolphin Software nutzt Agents als Ops-Hilfe und domainnahe Coding-Unterstützung (MCP, Business-Kontext) — nicht als Ersatz für Kerntransaktionen.",
    ],
  },
    "architecture-audit-lite": {
    title: "Lite-Architecture-Audits für langsame oder fragile Systeme",
    excerpt: "Kein Full-Rewrite nötig. Ein 1–2-Wochen-Audit zeigt Bottlenecks, Deploy-Risiken und erste Patches.",
    body: [
      "Volle Audits werden oft ewig verschoben. Lite: 3–5 kritische Journeys messen, Deploy-Pfad prüfen, externe Dependencies listen.",
      "Checkliste: N+1 / fehlende Indexes, falsches Caching, unmonitored Jobs, Secrets im Repo, kein Rollback, Single Points of Failure.",
      "Ergebnis: priorisiertes Backlog (P0 Datenverlust/Downtime, P1 sichtbare Langsamkeit, P2 Tech Debt) mit Aufwand — nicht nur Diagramme.",
      "Dolphin Software zielt auf „im nächsten Sprint fixbar“: Evidenz, Minimalvorschläge, Rewrite später. Erst stabilisieren, dann Features.",
    ],
  },
    "billiard-ops-dashboard": {
    title: "Case: Billard-Shop-Ops-Dashboard — Lessons Learned",
    excerpt: "Tische, Spielzeit und Status klingen einfach — bis Schichtpreise und „wessen Tisch?“ kommen.",
    body: [
      "Kernbedarf: frei/belegt sehen, Sessions starten/enden, Schichtsummen ohne Excel. UI muss vom Tresen aus schnell lesbar sein — kein langsames Analytics-Board.",
      "Schwer: zeitabhängige Preise, Tischwechsel mitten in der Session, Pausen, zwei Geräte am selben Tisch. Klare Zustände und kurze Locks verhindern Doppelstarts.",
      "Wir lieferten „öffnen → Timer → schließen → zahlen“ vor Monatsreports. Reports brauchen saubere Session-Daten.",
      "Dolphin Software-Takeaway: für laute Schichten, schwaches Netz und Nicht-Power-User designen. Ein richtiger Button schlägt ein komplexes Chart.",
    ],
  },
    "badminton-court-booking": {
    title: "Case: Badminton-Platz-Buchungsseite",
    excerpt: "Spieler wollen freie Slots schnell. Betreiber wollen keine Doppelbuchungen und klare Peak-Preise.",
    body: [
      "Erfolgsflow: Platz → Slot → Hold/Confirm → Zahlung oder Hold nach Shop-Regel. Verfügbarkeit muss in Sekunden frisch sein.",
      "Business-Regeln vor schöner UI: Hold-Dauer, freies Storno-Fenster, Proxy- vs. Eigenbuchung, Peak-Zeiten. Regeln schreiben, dann Kalender bauen.",
      "Mobile-first ist Pflicht. Kurze Formulare, klare Validierung, Bestätigung per Zalo/E-Mail wenn möglich.",
      "Dolphin Software-Lesson: Kalender ist Darstellung; Source of Truth ist Slot-Inventar + Booking-Status. Drift → Doppelbuchung.",
    ],
  },
    "event-ticket-convert": {
    title: "Case: Event-Ticket-Buchung mit Fokus auf Conversion",
    excerpt: "Von der Event-Seite zur bezahlten Ticket — jeder Extra-Schritt ist ein Absprunggrund. Reibung senken, keine Vanity-Features.",
    body: [
      "Event-Seite: ein klarer CTA, Datum/Ort above the fold, ehrliche Rest-/Sold-out-Angaben. Schöne Fotos ersetzen kein „wie viele noch“.",
      "Checkout: minimale Felder, kurzer Hold mit Timer, Zahlung mit klar pending/success/fail + Retry.",
      "Nach Zahlung: Ticket-Code/QR, Check-in-Hilfe, Bestätigung per E-Mail/Zalo. Storno/Änderung in zwei Taps.",
      "Dolphin Software misst den Funnel schrittweise und behebt den größten Drop vor Upsells. Klarheit konvertiert — Popups selten.",
    ],
  },
    "beauty-salon-booking": {
    title: "Case: Beauty-Salon-Buchung",
    excerpt: "Nail, Makeup und Slot-Services gewinnen mit sauberen Kalendern und rechtzeitigen Remindern — nicht mit langen Forms.",
    body: [
      "Flow: Service → Stylist (falls vorhanden) → Zeit → Bestätigen. Echte Dauer und Puffer verhindern Überlappungen.",
      "Salon-Seite: Tages-/Wochenansicht, Stylist wechseln, No-Shows markieren, Wartungs-Slots sperren. Admin- und Empfangsrechte trennen.",
      "Reminders (Zalo/SMS/E-Mail) 24h und 2h vorher senken No-Shows. Kurzes Storno-/Umbuchungsfenster gibt Slots zurück.",
      "Dolphin Software-Lesson: Stylist-Zeit ist die Kernressource. Combos und Voucher müssen diese Zeitgrenze respektieren.",
    ],
  },
    "remote-freelance-rhythm": {
    title: "Remote-Freelance-Lieferrhythmus in einem kleinen Studio",
    excerpt: "Remote mit Freelancern braucht keine Mehr-Meetings — sondern Demo-Takt, Definition of Done und klare Entscheidungskanäle.",
    body: [
      "Ein kleines Studio wie Dolphin Software lebt von Rhythmus: kurze Kickoffs, Milestone-Demos, async Tagesupdates — kein tägliches Status-Theater.",
      "Jede Task braucht DoD: UI/API/Tests/UAT. Vages „done“ ist Delay Nr. 1 bei Zeitzonen und gemischten Product/Outsource-Tracks.",
      "Kanäle: Scope an einem Ort, Chat schnell, Demos separat. Wichtige Entscheidungen nicht nur in flüchtigen DMs.",
      "Kunden: fixe Demo-Slots, frühe Risiken, Milestone-Quotes. Freelancer folgen diesem Rhythmus — nicht einer endlosen Nachtbox. Rhythmus schlägt Micromanagement.",
    ],
  },
    "hiring-for-delivery": {
    title: "Freelancer einstellen, die wöchentlich demoen",
    excerpt: "Ein starker CV reicht nicht. Dolphin Software stellt nach wöchentlichem Demo-Rhythmus ein — Delivery lebt von sichtbarem Fortschritt.",
    body: [
      "Beim Staffing eines Meilensteins zählt: Was können Sie diesen Freitag demoen? Ein laufender Build, eine Staging-URL oder ein kurzer User-Flow-Clip schlägt Folien.",
      "Im Interview fragen wir, wie Scope bei Verzug gekürzt und Blocker gemeldet werden. Vage Antworten bedeuten oft vage Delivery.",
      "Verträge sollten Demo-Rhythmus, Update-Kanal und Done-Kriterien festhalten. Ohne gemeinsamen Takt wird Remote zur Blackbox. Dolphin Software wählt sichtbare Delivery.",
    ],
  },
    "why-we-write-estimates": {
    title: "Warum schriftliche Estimates besser sind als „so um X“",
    excerpt: "„Ungefähr zwei Wochen“ klingt nett — bis Scope kippt. Geschriebene Estimates machen Annahmen für beide Seiten sichtbar.",
    body: [
      "Mündliche Estimates verschwinden, sobald Scope sich ändert. Kunden merken die niedrigste Zahl, Teams die Vorbehalte — dann divergieren die Geschichten.",
      "Bei Dolphin Software schreiben wir kurz: In/Out of Scope, Annahmen, Risikopuffer und Revisionsregeln. Ein Snapshot, kein starres Versprechen.",
      "Bricht eine Annahme, ist ein kurzes Update billiger als der Streit nach dem Launch. Für SMBs reist Text auch intern ohne Call-Replay.",
    ],
  },
    "client-comms-that-work": {
    title: "Kundenkommunikation, die Nacharbeit reduziert",
    excerpt: "Die meiste Nacharbeit kommt von Unklarheit, nicht von schlechtem Code. Wenige Kommunikationsmuster kürzen nutzlose Revisionsschleifen.",
    body: [
      "Bei Dolphin Software beginnt Nacharbeit oft mit einem vagen „sieht gut aus, weiter.“ Kein Screenshot, keine Acceptance, kein Entscheider.",
      "Jede UI-/Flow-Entscheidung in einer Zeile plus Link/Bild festhalten. Blocker von Nice-to-haves trennen. Entscheidungen in einem Hauptkanal halten.",
      "Demos brauchen eine kurze Agenda: Was prüfen, was entscheiden, was wartet. Klares Sign-off jetzt heißt weniger Change Requests später.",
    ],
  },
    "stock-community-disclaimer": {
    title: "Transparente Disclaimer für Community- / Non-Advisory-Produkte",
    excerpt: "Stock- oder Community-Produkte werden leicht als Beratung missverstanden. Frühe, klare Disclaimer schützen Nutzer und Studio.",
    body: [
      "Bei Community- oder Markt-Referenzprodukten von Dolphin Software ist Rollenverwirrung das größte Risiko — nicht ein UI-Bug. Nutzer müssen wissen, was das Produkt nicht ist.",
      "Disclaimer nahe an Entscheidungsstellen platzieren: Ergebnisse, Onboarding, Alerts — nicht nur im Footer. Konkret: keine Anlage-/Rechts-/Steuerberatung; Daten können verzögert sein; Handeln auf eigene Verantwortung.",
      "Crowd-Signale oder Kommentare als Nutzermeinungen kennzeichnen, nicht als Plattformempfehlung. Klare Erwartungen schaffen Vertrauen.",
    ],
  },
    "performance-budgets": {
    title: "Performance-Budgets für Marketing-Sites",
    excerpt: "Marketing-Sites wachsen durch Heroes, Fonts und Tracking. Ein Zahlenbudget hilft, „noch ein Script“ abzulehnen.",
    body: [
      "Dolphin Software setzt Budgets früh: LCP-Ziel, JS/CSS-Gewicht, max. Third-Party-Requests. Messen auf produktionsnahem Staging — nicht im Büro-Wi‑Fi.",
      "Jeder neue Font, Carousel oder Chat-Widget verbraucht Budget. Bei Überschreitung kürzen oder verschieben — nicht erst nach dem Launch optimieren.",
      "Full-Bleed-Heroes gehen mit passenden modernen Bildern und ohne schwere Scripts above the fold. Kurze Web-Vitals-Notizen pro Sprint reichen.",
    ],
  },
    "cms-when-you-need-it": {
    title: "Wann ein SMB wirklich ein CMS braucht",
    excerpt: "Nicht jede Site braucht am Tag eins ein CMS. Viele SMBs updaten selten — Code plus Markdown/JSON reicht und ist günstiger.",
    body: [
      "Ein CMS hilft, wenn viele oft editieren und Freigaben, Entwürfe oder Zeitpläne brauchen. Tweckt ein Founder die Landing nur selten, ist CMS oft Overhead.",
      "Dolphin Software startet Marketing-Sites oft mit In-Repo-Content (i18n oder MD) und CI-Deploys — ohne teuren Editor.",
      "CMS lohnt, wenn Marketing Copy ohne Engineering-Release ändert, News-Volumen wächst oder Nicht-Engineers viele Locales pflegen. Sonst: Training und Konfigurationsrisiko ohne Gewinn.",
    ],
  },
    "smoke-tests-before-ship": {
    title: "Smoke-Tests und Launch-Checklisten",
    excerpt: "Gescheiterte Launches vergessen oft Kleines: Formulare, Locales, CTA-Links. Kurze Checkliste plus Smoke-Tests sparen Nachtschichten.",
    body: [
      "Vor DNS-Flip oder Announce smoket Dolphin Software Home-Load, Primär-CTA, Kontaktformular, Locale-Wechsel und ggf. Buchungs-/Zahlungspfad.",
      "Eine Einseiten-Checkliste: richtiges Env, Analytics an, Custom-404, Robots/Sitemap, On-Call am ersten Tag. Eine Person besitzt Go/No-Go.",
      "Smoke fängt „Site down / Formular kaputt / falscher Link“ — nicht volle Regression. In der ersten Stunde Logs und echte Mobile-Session prüfen.",
    ],
  },
    "multi-locale-sites": {
    title: "Multi-Locale-Sites (VI/EN/JA/DE) ohne CMS-Chaos",
    excerpt: "Vier Locales driften schnell auseinander. Gemeinsame Keys und Review-Rhythmus halten Sites synchron — ohne schweres CMS.",
    body: [
      "Dolphin Software nutzt einen Key-Baum über alle Locales. Fehlende Keys sollen Build/Tests brechen — nicht Nutzer auf Live-Seiten überraschen.",
      "Keine HTML-Duplikate pro Sprache. Quell-Locale schreiben, bewusst übersetzen, UI-Länge prüfen (DE/JA sprengen oft Layouts).",
      "Dictionaries oder slug-basiertes MD reichen, bis Non-Tech täglich editiert. Locale-Switcher müssen Kontext auf derselben Seite halten.",
    ],
  },
    "theme-tokens-not-themes": {
    title: "Design-Tokens und Themes: CSS-Variablen statt Theme-Wildwuchs",
    excerpt: "Parallele Theme-Dateien werden schnell zur Schuld. Tokens für Farbe, Abstand und Typografie über CSS-Variablen halten eine Wahrheit.",
    body: [
      "Komplette Class-Sets für Light/Dark oder Brand-Varianten driften in Monaten. Dolphin Software bevorzugt Tokens (`--color-accent`, `--font-display`) — kein Hex im JSX.",
      "Theme-Switch ändert Variablenwerte auf `:root` oder `[data-theme]`, nicht Komponentenstruktur. Tokens nach Rolle benennen (accent, muted), nicht nach Rohfarbe.",
      "Klein und bewusst starten. Tokens erst bei echter Wiederverwendung ergänzen — nicht am Tag eins die ganze Design-Tool-Skala spiegeln.",
    ],
  },
    "from-mvp-to-v1": {
    title: "Vom MVP zu V1 — ohne alles neu zu schreiben",
    excerpt: "V1 ist kein Clean-Room-Rewrite. Es ist engerer Scope, selektiver Schuldabbau und das Behalten dessen, was Wert bewiesen hat.",
    body: [
      "Ein erfolgreiches MVP ist oft an den richtigen Stellen unschön. Alles neu schreiben, bevor klar ist, was Umsatz oder Lernen treibt, verschwendet das Signal.",
      "Dolphin Software behält vertraute User-Pfade, zahlt Schulden an den Rändern (Auth, Deploy, Observability) und schreibt nur Module um, die Tempo blockieren oder Incidents wiederholen.",
      "V1 als Stabilität, Operabilität oder Audience-Erweiterung definieren — nicht nur „schönere Architektur“. Tech-Debt nach Kosten/Risiko ranken und pro Meilenstein wenige Punkte neben gemessenen Features abbauen.",
    ],
  },
  },
  zh: {
    "discovery-before-build": {
    title: "动手写代码前的需求工作坊能省预算",
    excerpt: "在第一次提交之前先澄清目标、范围和风险，通常比上线后再推倒重来更便宜。",
    body: [
      "许多中小企业的网站/应用项目一上来就画界面、开工单。真正昂贵的部分往往出现在后面：流程不对、功能闲置，以及吃掉剩余预算的返工。",
      "一次简短的需求工作坊就能对齐用户画像、主路径、成功指标，以及哪些内容放到二期。Dolphin Software 把它当作最便宜的“防返工保险”。",
      "共同确认范围后，估算才诚实——你也清楚哪些该先做原型，哪些可以等上线后的真实数据。",
    ],
  },
    "sprint-demo-cadence": {
    title: "双周演示让中小客户始终对齐",
    excerpt: "简短、定期的演示胜过状态邮件——客户能看到真实进度并及早纠偏。",
    body: [
      "书面周报容易扫过、难以质疑。在接近生产的环境里演示，客户可以点击、提问，并在变更成本仍低时做决定。",
      "两周节奏既能展示有意义的进展，又不让反馈堆积。每次会议只做一件事：验证流程、选 UI 方案，或锁定范围上的是/否。",
      "Dolphin Software 的演示保持简短——决策写下来、待办往前推，“顺便再加一个”的请求不进会议室。",
    ],
  },
    "scope-without-scope-creep": {
    title: "保护双方的估算写法",
    excerpt: "好的估算不是为了赢单而报最低价——而是划清“已包含”与“之后另计”的边界。",
    body: [
      "范围蔓延靠沉默假设生长：客户以为某功能“显然包含”，团队以为“超出范围”。上线周所有人都意外。",
      "健康的估算列出交付物、假设、依赖，以及明确排除项。“沙箱支付”不等于“生产上线并对账”。",
      "在 Dolphin Software，签字后的重大变更走简短变更单：描述、工期影响、费用。这份纪律才能让项目真正收尾。",
    ],
  },
    "handover-and-ops": {
    title: "上线后的交接文档与轻量运维",
    excerpt: "上线不是终点。清晰交接和最小运维，能在构建团队抽身后让产品继续活着。",
    body: [
      "太多项目在 URL 上线时就算“完成”——然后没人管 DNS、环境变量或部署。三个月后一个小热修会变成故障。",
      "最低交接：短架构说明、权限清单、部署步骤、回滚清单，以及有意留下的技术债。",
      "中小企业的轻量运维通常意味着可用性检查、备份、定期依赖更新，以及故障时的明确路径。Dolphin Software 倾向在冲刺结束前就谈妥上线后的维护块。",
    ],
  },
    "landing-that-converts": {
    title: "落地页层级：品牌、一句标题、一个行动",
    excerpt: "首屏不是营销仪表盘。先品牌、一则信息、一个行动——其余内容往下滚。",
    body: [
      "弱落地页把数据、徽章、日程和三个 CTA 塞进首屏。访客不知道该先看哪里。",
      "实用规则：首屏承载品牌、一句标题、一句短支持语、一组 CTA，以及一张主视觉。不要在英雄图上贴浮动促销标签。",
      "Dolphin Software 按“每区块一件事”设计。证据、流程和 FAQ 放在访客已经理解你做什么之后。",
    ],
  },
    "booking-ux-patterns": {
    title: "预约 UX：清晰时段、确认到位、少打电话",
    excerpt: "模糊的预约表单制造消息和电话。清晰时段与下一步能降低运营负担。",
    body: [
      "人们需要知道有哪些时段、时区如何、预约后会发生什么。若必须猜测，他们就会打电话——往往在最糟的时刻。",
      "有效模式：真实可约、待确认/已确认状态、带地点或链接的确认，以及可控的改期/取消。",
      "对服务型中小企业，每次预约少一通电话就值回票价。Dolphin Software 先交付精简移动流程，再加“智能”功能——并把取消政策写进最终确认，而不是埋进 PDF。",
    ],
  },
    "mobile-first-or-responsive": {
    title: "响应式网站 vs 原生或混合应用",
    excerpt: "不是每个产品第一天都需要原生。按使用习惯、离线/推送需求和长期维护成本选择。",
    body: [
      "若大部分流量来自浏览器——营销加几条核心流程——响应式网站通常够用，且维护便宜得多。",
      "需要可靠推送、真离线、深度设备能力，或像日常工具一样高频使用时，再考虑原生或混合——别只为了上架好看。",
      "产品假设仍在验证时，Dolphin Software 常从 Web/PWA 起步。双端商店维护只有在留存已经清晰时才值得。",
    ],
  },
    "design-system-lite": {
    title: "给中小企业站点用的轻量设计系统",
    excerpt: "中小企业不需要 50 个组件。需要一致的 token 和少量可复用原语，好让新页面保持统一。",
    body: [
      "完整设计系统常因过重而夭折。小团队做五页网站，不需要企业级按钮矩阵。",
      "从 token 开始——品牌色、字体角色、间距、圆角——再来短名单原语：按钮、输入、链接、标题。变体少、命名清。",
      "Dolphin Software 跑轻量系统：共享语言够用，仪式感不足以拖慢上线。等产品和团队真正需要时再扩展组件。",
    ],
  },
    "nextjs-app-router-notes": {
    title: "营销 + 产品场景下的 Next.js App Router 实践",
    excerpt: "边界清晰时 App Router 很强：共享布局、静态内容用服务端组件，交互才放客户端。",
    body: [
      "工作室站点混合静态页（i18n、SEO）与少量交互口袋（报价表单、筛选）。避免整棵树都包 \"use client\" 时，App Router 才好用。",
      "优先服务端渲染文案与元数据；把表单和控件推进小客户端组件。数据靠近渲染处，并有意识地缓存。",
      "Dolphin Software 用 Next 做多语言营销站，因为在中小企业规模下路由与静态生成仍实用——前提是客户端包保持精简。大升级前先读现行文档，约定会变。",
    ],
  },
    "react-component-boundaries": {
    title: "在 React 中分离 UI、hooks 与 services",
    excerpt: "组件负责渲染与调用处理函数。数据逻辑放 hooks；HTTP 放 services——别全塞进一个文件。",
    body: [
      "当一个文件同时拉取、转换、校验并渲染 300 行 JSX 时，小改动也危险。清晰边界让评审与入职更快。",
      "实用规则：UI 调 hooks；hooks 用 React Query（或类似）并调 services；services 只用领域动词与服务器对话——get/create/update/delete——内部不做 toast 或路由。",
      "表单优先 react-hook-form + schema，而不是每个字段一个 useState。变更后使正确的查询键失效。Dolphin Software 在产品应用和较丰富的营销表单上用这套拆分，新人几分钟就能找到 API 路径。",
    ],
  },
    "flutter-vs-react-native": {
    title: "中小企业应用：Flutter vs React Native",
    excerpt: "两者都能做出扎实的中小企业应用。按团队技能、上市时间和维护成本选——别跟风。",
    body: [
      "对预约、店铺运营、轻量 CRM 等应用，Flutter 与 React Native 都可行。真正的问题是未来 12–24 个月哪套栈你们能交付并维护。",
      "需要一致 UI、流畅动效和单一 Dart 代码库时，Flutter 常更占优。已强在 JS/TS 或要复用 Web 逻辑的团队更适合 React Native。",
      "列出原生需求（相机、BLE、支付 SDK）、商店更新节奏，以及上线后谁背锅。中小企业失败多因缺少维护者，而非缺少“热门”技术。",
    ],
  },
    "api-auth-payments": {
    title: "认证、支付与第三方 API：少些戏剧性",
    excerpt: "集成翻车往往不是 SDK 太难，而是缺契约、沙箱和失败预案。",
    body: [
      "认证与支付最容易拖期：文档不全、沙箱≠生产、Webhook 迟到或重复。接入 SDK 前先锁流程：谁登录、会话多久、支付失败时前后端做什么。",
      "认证：单一事实源、分清“已登录”与“已验证”，以及重置/锁定手册。支付：幂等键、明确订单状态，金额永远不信任客户端。",
      "第三方 API 需要最小契约：端点、鉴权、限流、重试，以及宕机时谁被叫醒。跨请求的关联 ID 能在 Zalo OA 或网关抽风时救命。",
    ],
  },
    "integrations-checklist": {
    title: "上线前集成清单（Zalo、支付、邮件）",
    excerpt: "中小企业产品最常踩坑的三个通道——以及真实流量前该勾选什么。",
    body: [
      "Zalo OA/API：生产审批、可用的 token 刷新、消息模板，以及用户未关注 OA 时的回退。测试发送失败→重试/内部告警。",
      "支付网关：金额与签名校验、类生产环境的 IPN/Webhook、部分退款、重复支付与网关超时。",
      "邮件/OTP：SPF/DKIM/DMARC、收件箱到达、OTP 限流、带客服路径的品牌模板。交易邮件别靠无人监控的 SMTP。",
    ],
  },
    "ai-agents-in-products": {
    title: "AI Agent 在产品流程里帮得上（和帮不上）的地方",
    excerpt: "工具清晰、范围收窄时 Agent 很强。别让它们自动决定金钱或高权限动作。",
    body: [
      "在 Web/App 产品里，Agent 适合具体工具：内部搜索、按上下文填表、工单摘要，或既定流程中的下一步提示。",
      "它们在法律承诺、余额/支付状态变更，或无人把关的业务决策上会挣扎。流利文本不是审计轨迹。",
      "安全设计：工具有限、超时、动作可日志（脱敏 PII）、以及人工逃生舱。衡量“正确完成的任务”，而不是回答长度。",
    ],
  },
    "architecture-audit-lite": {
    title: "慢或脆弱系统的轻量架构审计",
    excerpt: "你不需要全面重写。1–2 周的审计就能暴露瓶颈、部署风险，以及该先补什么。",
    body: [
      "当应用又慢又“一碰就碎”时，完整审计会被永远推迟。轻量做法：选 3–5 条关键旅程，测延迟/错误，审查部署路径，并列出外部依赖。",
      "实用清单：N+1/缺索引、缓存放错、无人监控的任务、仓库里的密钥、无回滚，以及单点故障。",
      "产出应是按优先级的待办：P0 丢数据/宕机，P1 可见变慢，P2 技术债——带工作量估算，而不只是漂亮图。",
    ],
  },
    "billiard-ops-dashboard": {
    title: "案例：台球店运营看板——经验总结",
    excerpt: "跟踪球桌、开台时间与店铺状态听起来简单——直到分时计价和“这桌谁管”出现。",
    body: [
      "核心需求：员工一眼看到空闲/占用、开台—结束，以及班次汇总，不用 Excel。柜台要能扫一眼操作——不是好看但慢的分析板。",
      "难点：按时计价、中途换桌、暂停，以及两台设备改同一桌。清晰状态与短锁可避免双开。",
      "我们先交付“开台→计时→结账→收款”，再做月报。会话数据干净时，报表才有意义。",
    ],
  },
    "badminton-court-booking": {
    title: "案例：羽毛球场地预约站",
    excerpt: "场地介绍、可用性与清晰预约流——让用户少猜、前台少接电话。",
    body: [
      "访客要在手机上快速看清：哪些场、什么时段、多少钱、约完下一步是什么。",
      "把真实可用性、确认状态和取消规则放进流程，而不是事后私信解释。",
      "Dolphin Software 优先短路径：选场→选时→确认→回执。花哨功能等核心转化稳定后再加。",
    ],
  },
    "event-ticket-convert": {
    title: "案例：活动票务从浏览到转化",
    excerpt: "从活动列表到完成预约，每一步都为减少流失而设计。",
    body: [
      "票务漏斗在信息不足或步骤过多时断裂。先讲清活动价值，再收集必要字段。",
      "确认页应重复时间、地点与须知——减少“我以为……”的售后。",
      "我们把支付与确认做成可恢复状态机，避免重复下单与幽灵名额。",
    ],
  },
    "beauty-salon-booking": {
    title: "案例：美甲/美妆预约",
    excerpt: "时段预约减少空档与爽约——把政策写进确认，而不是事后争论。",
    body: [
      "美业日程靠准时到店。预约流应展示服务时长、技师可选性与取消窗口。",
      "确认消息带地址/地图与准备须知，能显著减少前台电话。",
      "Dolphin Software 先做移动端短流程，再谈会员与营销自动化。",
    ],
  },
    "remote-freelance-rhythm": {
    title: "远程自由协作的节奏",
    excerpt: "异步更新 + 定期同步，胜过假装所有人都在同一时区全日在线。",
    body: [
      "远程交付靠书面决策、可见看板，以及短而有目的的通话——不是全天开会。",
      "约定响应窗口与演示节奏，客户和自由职业者都能规划深度工作时间。",
      "Dolphin Software 用双周演示与清晰变更通道，让远程项目不靠“随时在线”硬撑。",
    ],
  },
    "hiring-for-delivery": {
    title: "为交付而招人，不为简历关键词",
    excerpt: "看作品、沟通与可靠性，胜过堆砌时髦框架名词。",
    body: [
      "中小企业交付失败常因协作差，而非缺某个库的经验。试一个小任务，看沟通与完成质量。",
      "问清楚可用时间、重叠时区，以及上线后谁维护。",
      "我们招自由协作伙伴时重视可演示的成果与直率沟通——与客户期望一致。",
    ],
  },
    "why-we-write-estimates": {
    title: "我们为什么坚持写估算",
    excerpt: "估算是对齐工具，不是销售魔术。它暴露假设，并在变更变贵前保护范围。",
    body: [
      "口头“大概那样”会在四周后变成冲突。写下来的范围让双方能说“不在内”。",
      "好估算也暴露依赖：文案、第三方账号、法务审批——常被假装不存在。",
      "Dolphin Software 把估算当作协作文件：可修订、可追溯，而不是一次性报价表演。",
    ],
  },
    "client-comms-that-work": {
    title: "真正管用的客户沟通",
    excerpt: "短更新、明确决策、少黑箱——信任来自可预测，而非华丽幻灯片。",
    body: [
      "客户需要知道：本周交付了什么、卡在哪里、需要他们做什么决定。",
      "用同一频道记决策；别把范围散落在五个聊天工具里。",
      "我们演示时带着书面选项——是/否比开放式脑暴更快结束会议。",
    ],
  },
    "stock-community-disclaimer": {
    title: "证券社区内容：分享，不是投顾",
    excerpt: "站点上的证券相关内容是社区分享——不是持牌投资建议，也不保证收益。",
    body: [
      "请把证券版块当作讨论与学习空间，而非买卖指令。",
      "Dolphin Software 不做持牌投资顾问，也不承诺收益。决策与风险由你自行承担。",
      "若你需要正式建议，请咨询具备相应资质的专业人士。",
    ],
  },
    "performance-budgets": {
    title: "性能预算：在变慢之前设限",
    excerpt: "没有预算，每个“小功能”都会悄悄加重首屏。先约定再堆料。",
    body: [
      "为 JS 体积、图片重量和关键路径的 LCP 设上限。超了就换方案或延期功能。",
      "营销站尤其脆弱：第三个分析脚本常比第三个功能段落更伤转化。",
      "Dolphin Software 在冲刺中复查预算，这样“再加一个小库”会变成有意识的取舍。",
    ],
  },
    "cms-when-you-need-it": {
    title: "什么时候才真正需要 CMS",
    excerpt: "不是每个站点第一天都要 CMS。内容变更频率与编辑角色决定时机。",
    body: [
      "若营销每周改文案而工程师成了瓶颈，CMS（或结构化内容）会回本。",
      "若页面少、更新稀，静态内容 + 清晰仓库流程往往更简单、更安全。",
      "我们按谁编辑、多久一次、是否需要预览/权限来选型——而不是默认“企业级 CMS”。",
    ],
  },
    "smoke-tests-before-ship": {
    title: "上线前的冒烟测试清单",
    excerpt: "一小份可重复清单能在真实用户之前抓住断链、坏表单与权限错误。",
    body: [
      "每次发布至少点一遍：主转化路径、认证、支付沙箱（若有）、关键外链，以及移动首屏。",
      "记下环境差异：预发通过、生产失败，通常是配置而不是代码。",
      "Dolphin Software 把冒烟测试放进 UAT，这样“上线夜”不再是第一次点完整条路径。",
    ],
  },
    "multi-locale-sites": {
    title: "多语言站点：一套结构，多套文案",
    excerpt: "按语言复制整站 HTML 会迅速失控。共用结构，系统化翻译。",
    body: [
      "Dolphin Software 在所有语言使用同一键树。缺失在构建/测试阶段发现，而不是暴露给用户。",
      "不要为每种语言复制 HTML。写源语言，有计划地翻译，并用 DE/JA 等较长文案检查布局。",
      "非工程师日更之前，字典或基于 slug 的内容通常够用。切换语言应保持同页语境，而不是踢回首页。",
    ],
  },
    "theme-tokens-not-themes": {
    title: "设计 token 与主题：用 CSS 变量，别堆主题文件",
    excerpt: "并行主题文件很快变成负债。把颜色、间距、字体放进 CSS 变量 token，才有单一事实源。",
    body: [
      "为浅/深色或品牌差异复制整套类名，几个月就会漂移。Dolphin Software 优先 token（如 `--color-accent`），不在 JSX 里写死 hex。",
      "主题切换是改 `:root` / `[data-theme]` 的值，而不是改组件结构。按角色命名（accent、muted）。",
      "从少量有意的 token 开始，确认复用后再加。别第一天就搬空设计工具的全部色板。",
    ],
  },
    "from-mvp-to-v1": {
    title: "从 MVP 到 V1：不必整站重写",
    excerpt: "V1 不是洁净室重做。收紧范围、有选择地还债，并保留已验证价值的部分。",
    body: [
      "成功的 MVP 常在正确的地方显得粗糙。尚未分清什么带来收入或学习就全面重写，等于丢掉信号。",
      "Dolphin Software 保留用户已熟悉的路径，偿还认证/部署/可观测性等边缘债务，并只重写拖慢速度或反复故障的模块。",
      "把 V1 定义为稳定、可运维与可扩大对象——而不是“漂亮架构”本身。按成本/风险排债，并与可度量功能并行消化。",
    ],
  },
  }
};


export function getNewsDetail(locale: Locale, slug: NewsSlug): NewsDetail {
  const meta = metaBySlug[slug];
  const copy = copyByLocale[locale][slug];
  return {
    slug,
    category: meta.category,
    date: meta.date,
    title: copy.title,
    excerpt: copy.excerpt,
    body: copy.body,
    image: getNewsImage(slug),
  };
}

export function listNews(locale: Locale): NewsListItem[] {
  return [...NEWS_SLUGS]
    .map((slug) => {
      const meta = metaBySlug[slug];
      const copy = copyByLocale[locale][slug];
      return {
        slug,
        category: meta.category,
        date: meta.date,
        title: copy.title,
        excerpt: copy.excerpt,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** Rough reading time from article copy (~450 chars / min). */
export function estimateNewsReadMinutes(locale: Locale, slug: NewsSlug): number {
  const copy = copyByLocale[locale][slug];
  const text = [copy.excerpt, ...copy.body].join("");
  const chars = text.replace(/\s+/g, "").length;
  return Math.max(1, Math.round(chars / 450));
}

export function getRelatedNews(
  locale: Locale,
  slug: NewsSlug,
  limit = 3,
): NewsListItem[] {
  const current = metaBySlug[slug];
  const all = listNews(locale).filter((item) => item.slug !== slug);
  const same = all.filter((item) => item.category === current.category);
  const rest = all.filter((item) => item.category !== current.category);
  return [...same, ...rest].slice(0, limit);
}

export function formatNewsDate(locale: Locale, isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  const tag =
    locale === "vi"
      ? "vi-VN"
      : locale === "ja"
        ? "ja-JP"
        : locale === "de"
          ? "de-DE"
          : locale === "zh"
            ? "zh-CN"
            : "en-US";
  return new Intl.DateTimeFormat(tag, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

const detailUi: Record<Locale, NewsDetailUi> = {
  vi: {
    relatedTitle: "Bài liên quan",
    cta: "Muốn trao đổi về dự án?",
    breadcrumbHome: "Trang chủ",
    breadcrumbNews: "Tin tức",
    readMore: "Đọc tiếp",
  },
  en: {
    relatedTitle: "Related",
    cta: "Want to talk about a project?",
    breadcrumbHome: "Home",
    breadcrumbNews: "News",
    readMore: "Read more",
  },
  ja: {
    relatedTitle: "関連記事",
    cta: "プロジェクトについて話しませんか？",
    breadcrumbHome: "ホーム",
    breadcrumbNews: "ニュース",
    readMore: "続きを読む",
  },
  de: {
    relatedTitle: "Verwandt",
    cta: "Über ein Projekt sprechen?",
    breadcrumbHome: "Start",
    breadcrumbNews: "News",
    readMore: "Weiterlesen",
  },
  zh: {
    relatedTitle: "相关文章",
    cta: "想聊聊项目吗？",
    breadcrumbHome: "首页",
    breadcrumbNews: "新闻",
    readMore: "阅读更多",
  },
};

export function getNewsDetailUi(locale: Locale): NewsDetailUi {
  return detailUi[locale];
}
