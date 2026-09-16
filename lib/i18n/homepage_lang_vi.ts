/**
 * Homepage copy — Vietnamese SEO/AEO/GEO SoT (locale `vi`).
 * Synced from public/schema/homepage/overview.json (rewriter part1+part2).
 */
import type { Dictionary } from "./types";

export type HomepageLang = {
  hero?: Dictionary["hero"];
  problems?: NonNullable<Dictionary["problems"]>;
  capabilities?: Dictionary["capabilities"];
  siteOutcomes?: Dictionary["siteOutcomes"];
  why?: Dictionary["why"];
  technology?: Dictionary["technology"];
  aiEdge?: Dictionary["aiEdge"];
  process?: Dictionary["process"];
  works?: Dictionary["works"];
  fit?: NonNullable<Dictionary["fit"]>;
  faq?: Dictionary["faq"];
  popularServicesChrome?: Pick<
    Dictionary["popularServices"],
    "eyebrow" | "title" | "support"
  >;
  contactChrome?: Pick<
    Dictionary["contact"],
    "eyebrow" | "title" | "support" | "nextHint" | "afterSubmitTitle" | "afterSubmitItems"
  >;
  seo?: {
    title: string;
    description: string;
    og_title?: string;
    og_description?: string;
    canonical?: string;
    keywords?: string[];
  };
};

export const homepageLangVi: HomepageLang = {
  hero: {
    eyebrow: "Dolphin Software",
    aiPill: "",
    headline: "Giải pháp vận hành cho doanh nghiệp dịch vụ [[B2B]]",
    subhead:
      "Tập trung spa, nail, salon, giáo dục, clinic — mở rộng F&B, showroom, vận tải và doanh nghiệp cần hệ thống linh hoạt. CRM là nền tảng; Care · Ops · Intelligence đẩy tăng trưởng; Website kích cầu theo combo.",
    support:
      "Không bán danh sách tính năng. Bắt đầu từ vấn đề kinh doanh — chỉ xây những gì giúp tăng khách và doanh thu. Bàn giao source code đầy đủ, không khóa hệ thống.",
    trustLine: "Problem-first · CRM nền tảng · AI tăng trưởng · Website combo",
    ctaPrimary: "Nói về doanh nghiệp của bạn",
    ctaSecondary: "Xem combo CRM · AI · Web",
    tags: ["Problem-first", "CRM nền tảng", "AI tăng trưởng"],
    metrics: [
      { value: "CRM", label: "Vận hành lõi" },
      { value: "AI", label: "Care · Ops · Intel" },
    ],
    visual: {
      web: "Web kèm combo",
      automation: "Ops CRM",
      ai: "Care · Ops · Intel",
    },
  },
  problems: {
    eyebrow: "What is slowing you down?",
    title: "Điều gì đang [[làm chậm]] doanh nghiệp của anh chị?",
    support:
      "Doanh nghiệp lớn lên — vận hành thường vỡ thành việc tay, tool rời và thiếu tầm nhìn. Mở bằng chỗ đang nghẽn, rồi mới chọn công cụ.",
    items: [
      {
        title: "Quá nhiều việc làm tay",
        body: "Team mất giờ cho việc lặp lại mỗi ngày — nhắc lịch, nhập liệu, chuyển tin.",
        href: "/ai-transform/",
        solution: "Tự động hóa",
      },
      {
        title: "Khách bị bỏ sót",
        body: "Lead, follow-up và tin nhắn nằm rải Zalo/Excel, rồi trôi. CRM gom khách; Care chăm trên Web / Zalo / Messenger.",
        href: "/dolphin-ops/",
        solution: "CRM / Chatbot AI",
      },
      {
        title: "Website không giúp tiệm lớn lên",
        body: "Có trang, nhưng khách vào rồi không gọi, không để lại thông tin — digital presence chưa gắn với bán & chăm.",
        href: "/services/web/",
        solution: "Website",
      },
      {
        title: "Công cụ không nói chuyện với nhau",
        body: "Khách, bán hàng, vận hành nằm ở nhiều hệ thống — đội phải copy tay giữa các app.",
        href: "/services/integrations/",
        solution: "Tích hợp",
      },
      {
        title: "Doanh nghiệp phụ thuộc quá nhiều vào người",
        body: "Quy trình và dữ liệu khách nằm trong đầu nhân viên — khó bàn giao, khó scale.",
        href: "/services/software/",
        solution: "Hệ thống / CRM",
      },
      {
        title: "Muốn dùng AI, chưa biết bắt đầu đâu",
        body: "Biết AI quan trọng, chưa rõ use case nào gắn dữ liệu và quy trình thật để ra giá trị.",
        href: "/ai-transform/",
        solution: "AI thực tế",
      },
    ],
  },
  siteOutcomes: {
    eyebrow: "Outcomes",
    title: "Sau bàn giao, doanh nghiệp bạn có thể [[tự chạy]] các việc này",
    support:
      "Không phải danh sách tính năng — đây là kết quả thực tế sau khi bàn giao: khách hàng tiềm năng, đặt lịch, nội dung, thanh toán và vận hành đều nằm trong tầm kiểm soát của bạn.",
    painLead: "Kết quả vận hành",
    ctaPrimary: "Nhận báo giá",
    ctaSecondary: "Xem dịch vụ website",
    ctaSecondaryHref: "#capabilities",
    learnMore: "Tìm hiểu thêm",
    items: [
      {
        title: "Thu hút và chuyển đổi khách hàng tiềm năng",
        body: "Form/CTA và hành trình liên hệ ngắn gọn — khách truy cập hành động; đội nhóm của bạn theo dõi được nguồn.",
        bullets: [
          "Form và CTA rõ ràng trên trang",
          "Hành trình liên hệ ngắn — khách hành động ngay",
          "Đội bạn theo dõi được nguồn lead",
        ],
        href: "/services/landing/",
      },
      {
        title: "Đặt lịch ổn định, không nhầm chỗ",
        body: "Hiển thị slot trống, xác nhận và nhắc lịch tự động — giảm cuộc gọi hỏi chỗ trống và đặt trùng.",
        bullets: [
          "Hiển thị slot trống theo thời gian thực",
          "Xác nhận và nhắc lịch tự động",
          "Giảm gọi hỏi chỗ trống và đặt trùng",
        ],
        href: "/services/web/",
      },
      {
        title: "Thương hiệu được khách tin tưởng và nhớ đến",
        body: "Trang landing hoặc website doanh nghiệp với nội dung tập trung — responsive, dễ đọc, xây dựng niềm tin.",
        bullets: [
          "Landing hoặc website doanh nghiệp tập trung",
          "Responsive, dễ đọc trên mọi thiết bị",
          "Nội dung xây dựng niềm tin nhanh",
        ],
        href: "/services/landing/",
      },
      {
        title: "Đội nhóm tự cập nhật nội dung",
        body: "CMS/admin đưa vào phạm vi — chỉnh bài viết, hình ảnh, giá mà không cần gọi lại studio.",
        bullets: [
          "CMS/admin nằm trong phạm vi bàn giao",
          "Sửa bài, ảnh, giá không cần gọi studio",
          "Đội bạn tự vận hành nội dung hàng ngày",
        ],
        href: "/services/web/",
      },
      {
        title: "Thanh toán và nhắn tin trong quy trình thực",
        body: "Tích hợp MoMo / ZaloPay / VNPay / Zalo OA khi cần — ít sai sót vận hành hơn so với kết nối thủ công.",
        bullets: [
          "MoMo / ZaloPay / VNPay khi cần",
          "Zalo OA gắn vào luồng liên hệ",
          "Ít sai sót hơn gắn tay thủ công",
        ],
        href: "/services/integrations/",
      },
      {
        title: "Vận hành nội bộ gọn gàng hơn",
        body: "Dashboard, business agent hoặc vòng lặp Thu thập → Quản trị — một bức tranh thay vì mười công cụ rời rạc.",
        bullets: [
          "Dashboard hoặc agent nghiệp vụ",
          "Vòng Thu thập → Quản trị gọn",
          "Một bức tranh thay vì mười tool",
        ],
        href: "/dolphin-care/",
      },
    ],
  },
  why: {
    eyebrow: "Why Dolphin",
    title: "CRM giữ vận hành — [[AI]] đẩy tăng trưởng",
    support:
      "Theo chính sách giá 2026: CRM là sản phẩm lõi (doanh thu nền). Care / Ops / Intelligence là AI tăng trưởng — bán kèm hoặc mở rộng sau CRM. Landing / Website doanh nghiệp tặng hoặc giảm sâu theo combo để hỗ trợ chốt, không phải catalog agency.",
    promise: "CRM là nền tảng – AI là tăng trưởng – Website hỗ trợ chốt",
    reasons: [
      {
        title: "Hiểu ngành dịch vụ",
        body: "Spa, salon, edu, clinic… — cách bán, đặt lịch và chăm khách trước khi chọn gói.",
      },
      {
        title: "Chốt CRM phù hợp",
        body: "Thuê CRM theo kỳ hạn (6/12 tháng, thanh toán trước) — nền vận hành khách hàng.",
      },
      {
        title: "Gắn AI khi cần tăng trưởng",
        body: "Care (chatbot Web/Zalo/Messenger), Ops (chatbox trên CRM), Intelligence (workflow) — đúng lớp tăng trưởng.",
      },
      {
        title: "Web / Landing kèm combo",
        body: "Từ CRM + Care 6: tặng Website DN khi triển khai. CRM Base 12: tặng Landing hoặc giảm 50% Website DN.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Solutions",
    title: "CRM lõi · AI tăng trưởng · [[Web]] hỗ trợ chốt",
    support:
      "Thứ tự rõ: thuê CRM theo ngành dịch vụ → gắn Care / Ops / Intelligence khi cần tăng trưởng → Website / Landing tặng hoặc giảm theo combo (chính sách giá 2026).",
    ctaPrimary: "Nói về doanh nghiệp của bạn",
    ctaSecondary: "Nói về doanh nghiệp của bạn",
    ctaSecondaryHref: "#contact",
    learnMore: "Tìm hiểu thêm",
    prevPage: "Trang trước",
    nextPage: "Trang sau",
    pauseCarousel: "Tạm dừng carousel",
    playCarousel: "Phát carousel",
    offers: [
      {
        id: "website",
        title: "Website / Landing (kèm combo)",
        body: "Hỗ trợ chốt: CRM Base 12 tặng Landing hoặc −50% Website DN; từ CRM + Care 6 trở đi tặng Website DN khi triển khai — không bán web như sản phẩm lõi.",
        meta: "Hỗ trợ chốt",
        href: "/services/web/",
      },
      {
        id: "ai",
        title: "AI — doanh thu tăng trưởng",
        body: "Care · Ops · Intelligence: bán kèm hoặc mở rộng sau CRM. AI gắn dữ liệu và quy trình thật — audit → pilot → nhân rộng.",
        meta: "Growth",
        href: "/ai-transform/",
      },
      {
        id: "agents",
        title: "Dolphin Care — Chatbot AI",
        body: "Chatbot AI trên website / Zalo / Messenger — chăm khách, ghi lead; thường gắn sau hoặc cùng CRM.",
        meta: "Web · Zalo · Messenger",
        href: "/dolphin-care/",
      },
      {
        id: "crm",
        title: "CRM — doanh thu nền",
        body: "Sản phẩm lõi: thuê CRM vận hành khách theo ngành dịch vụ (niêm yết theo kỳ 6/12 tháng, thanh toán trước).",
        meta: "Base revenue",
        href: "/dolphin-ops/",
      },
      {
        id: "automation",
        title: "Dolphin Ops — AI trên CRM",
        body: "Chatbox AI + công cụ CRM ngày làm việc: lịch, khách, follow-up, báo cáo — lớp tăng trưởng trên nền CRM.",
        meta: "Growth · CRM",
        href: "/dolphin-ops/",
      },
      {
        id: "integrations",
        title: "Tích hợp hệ thống",
        body: "Nối thanh toán, Zalo, CRM và tool đang chạy. Phí bên thứ ba (Zalo OA, cổng TT…) khách trả NCC.",
        meta: "Hệ thống sẵn",
        href: "/services/integrations/",
      },
      {
        id: "custom",
        title: "Intelligence & phần mềm theo nghiệp vụ",
        body: "Intelligence (add-on) khi đã có CRM. Phần mềm riêng khi gói sẵn chưa khớp — hiện đại hóa, không mặc định làm lại toàn bộ.",
        meta: "Add-on · Custom",
        href: "/services/software/",
      },
    ],
    moreServices: [
      {
        label: "Landing Page",
        href: "/services/landing/",
      },
      {
        label: "Mobile App",
        href: "/services/mobile/",
      },
      {
        label: "UI/UX",
        href: "/services/design/",
      },
      {
        label: "Tích hợp thanh toán",
        href: "/services/integrations/",
      },
    ],
    items: [
      {
        id: "website",
        category: "Website",
        title: "Website / Landing (kèm combo)",
        body: "Hỗ trợ chốt: CRM Base 12 tặng Landing hoặc −50% Website DN; từ CRM + Care 6 trở đi tặng Website DN khi triển khai — không bán web như sản phẩm lõi.",
        tags: ["Hỗ trợ chốt"],
      },
      {
        id: "ai",
        category: "AI",
        title: "AI — doanh thu tăng trưởng",
        body: "Care · Ops · Intelligence: bán kèm hoặc mở rộng sau CRM. AI gắn dữ liệu và quy trình thật — audit → pilot → nhân rộng.",
        tags: ["Growth"],
      },
      {
        id: "agents",
        category: "AI Agent",
        title: "Dolphin Care — Chatbot AI",
        body: "Chatbot AI trên website / Zalo / Messenger — chăm khách, ghi lead; thường gắn sau hoặc cùng CRM.",
        tags: ["Web · Zalo · Messenger"],
      },
      {
        id: "crm",
        category: "CRM",
        title: "CRM — doanh thu nền",
        body: "Sản phẩm lõi: thuê CRM vận hành khách theo ngành dịch vụ (niêm yết theo kỳ 6/12 tháng, thanh toán trước).",
        tags: ["Base revenue"],
      },
      {
        id: "automation",
        category: "Automation",
        title: "Dolphin Ops — AI trên CRM",
        body: "Chatbox AI + công cụ CRM ngày làm việc: lịch, khách, follow-up, báo cáo — lớp tăng trưởng trên nền CRM.",
        tags: ["Growth · CRM"],
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "Tích hợp hệ thống",
        body: "Nối thanh toán, Zalo, CRM và tool đang chạy. Phí bên thứ ba (Zalo OA, cổng TT…) khách trả NCC.",
        tags: ["Hệ thống sẵn"],
      },
      {
        id: "custom",
        category: "Custom",
        title: "Intelligence & phần mềm theo nghiệp vụ",
        body: "Intelligence (add-on) khi đã có CRM. Phần mềm riêng khi gói sẵn chưa khớp — hiện đại hóa, không mặc định làm lại toàn bộ.",
        tags: ["Add-on · Custom"],
      },
    ],
  },
  works: {
    eyebrow: "Projects",
    title: "Bài toán vận hành đã gỡ — [[không chỉ]] ảnh đẹp",
    support:
      "Mỗi case: bối cảnh doanh nghiệp → chỗ nghẽn → Dolphin đổi gì → giá trị vận hành. Không bịa số liệu; stack kỹ thuật nằm dưới.",
    cta: "Nói về bài toán của anh chị",
    ctaHint: "Trao đổi trước — cùng phân tích trước khi đề xuất giải pháp.",
    industries: [
      "Spa",
      "Nhà hàng",
      "Giáo dục",
      "Y tế",
      "Bán lẻ",
      "Sự kiện",
    ],
    problemLabel: "Bài toán",
    scopeLabel: "Phạm vi",
    resultLabel: "Kết quả",
    beforeLabel: "Before",
    afterLabel: "After",
    items: [
      {
        id: "billiard",
        title: "Ops quản lý bida",
        tag: "Website · Booking",
        problem: "Giấy/Excel: khó thấy bàn trống; doanh thu ca dễ thất thoát.",
        scope: "Bản đồ bàn, đồng hồ đếm giờ, add-on, tổng kết ca trên web/ops.",
        result: "Ít ca bị bỏ sót hơn; onboarding nhanh hơn; xem ca trực tiếp.",
        before: "",
        after: "",
      },
      {
        id: "badminton",
        title: "Website sân cầu lông",
        tag: "Booking",
        problem: "Khách gọi hỏi chỗ; admin dễ chồng lịch.",
        scope: "Giới thiệu sân, lịch trống, quy trình đặt chỗ rõ.",
        result: "Ít cuộc gọi hỏi trống; đặt chỗ đúng khung giờ rõ hơn.",
        before: "",
        after: "",
      },
      {
        id: "tickets",
        title: "Đặt vé & tối ưu chuyển đổi",
        tag: "Booking · Convert",
        problem: "Khách xem sự kiện nhưng bỏ dở trước khi hoàn tất đặt vé.",
        scope: "Luồng Duyệt → Chọn → Thanh toán/Giữ chỗ ngắn gọn hơn.",
        result: "Ít bước hơn để hoàn tất; luồng đặt chỗ rõ ràng hơn.",
        before: "",
        after: "",
      },
      {
        id: "beauty",
        title: "Đặt lịch beauty",
        tag: "Beauty",
        problem: "Sót lịch, double-book; khó tự giữ chỗ ngoài giờ.",
        scope: "Đặt lịch theo slot dịch vụ + xác nhận.",
        result: "Ít lịch bị bỏ; dễ nhận đặt ngoài giờ làm việc hơn.",
        before: "",
        after: "",
      },
      {
        id: "cafe",
        title: "Đặt món QR cho quán cafe",
        tag: "QR · Order",
        problem: "Giờ cao điểm gọi món chậm, dễ sai vì ghi tay.",
        scope: "Menu QR theo bàn, giỏ món, đẩy order tới quầy/bếp.",
        result: "Gọi đồ nhanh hơn; ít sai món hơn; nhân viên tập trung phục vụ.",
        before: "",
        after: "",
      },
      {
        id: "clinic",
        title: "Đặt lịch khám phòng khám",
        tag: "Clinic",
        problem: "Bệnh nhân gọi hỏi lịch; dễ trùng slot, quên nhắc tái khám.",
        scope: "Lịch theo bác sĩ/slot + xác nhận và nhắc lịch.",
        result: "Ít cuộc gọi hỏi lịch; hạn chế đặt trùng hơn.",
        before: "",
        after: "",
      },
    ],
  },
  technology: {
    eyebrow: "Ops AI",
    title: "AI thực tế cho [[vận hành]]",
    roadmap: "Dữ liệu → hiểu → quyết định → hành động → tự động hóa (có kiểm soát)",
    support:
      "AI hữu ích khi gắn thông tin và quy trình doanh nghiệp — không phải khẩu hiệu. Dolphin chọn 1–2 việc đáng làm, chạy pilot có kiểm soát, rồi mới nhân rộng.",
    items: [
      {
        id: "agents",
        tag: "Agents",
        title: "AI Agents — đúng việc đang tốn giờ",
        body: "Agent theo workflow và vai trò cụ thể: xử lý phần lặp, để người làm phần cần phán đoán.",
      },
      {
        id: "automation",
        tag: "Automation",
        title: "Tự động hóa — bớt thao tác thủ công",
        body: "Nhắc follow-up, capture lead, tổng hợp báo cáo — khi bước đã rõ và dữ liệu đã sẵn.",
      },
      {
        id: "integration",
        tag: "Integration",
        title: "Gắn vào hệ thống đang chạy",
        body: "Kết nối CRM, chat, lịch và tool hiện có — hiện đại hóa từng phần, không mặc định thay toàn bộ.",
      },
    ],
    note: "Dolphin dùng AI workflow nội bộ cho điều phối và sản xuất — cùng tinh thần: gắn action thật, có checkpoint khi cần.",
    ctaPrimary: "Xem lộ trình chuyển đổi AI",
    ctaSecondary: "Khám phá use case theo phòng ban (Sales, Support, Operations)",
  },
  aiEdge: {
    eyebrow: "Dolphin Intelligence",
    badge: "AI Workflow",
    title: "Agent / workflow AI — [[không phải]] chatbot kênh khách",
    support:
      "Intelligence là add-on điều phối nhiều bước: agent + action + logic + human checkpoint. Chatbot Web / Zalo / Messenger thuộc Dolphin Care — khác lớp sản phẩm.",
    items: [
      {
        id: "agent",
        tag: "Agent",
        title: "AI Agent theo vai trò",
        body: "Mỗi agent có ngữ cảnh và hướng dẫn riêng — tư duy nhất quán trong chuỗi bước nghiệp vụ.",
      },
      {
        id: "action",
        tag: "Action · Logic",
        title: "Action & logic điều phối",
        body: "Gọi API, CMS, email, nhánh điều kiện — agent quyết định, action thực thi đúng lúc.",
      },
      {
        id: "human",
        tag: "Human",
        title: "Human checkpoint đúng chỗ",
        body: "Người duyệt bước nhạy cảm trước khi tiếp tục — kiểm soát được, không hộp đen.",
      },
    ],
    ctaPrimary: "Xem Dolphin Intelligence",
    ctaSecondary: "Lộ trình chuyển đổi AI",
    learnMore: "Tìm hiểu thêm",
  },
  process: {
    eyebrow: "Process",
    title: "Hợp tác rõ ràng — [[năm bước]] đến bàn giao",
    support:
      "Understand → Define → Build → Integrate → Improve. Cộng tác, minh bạch, lặp theo thực tế — không framework tư vấn cứng.",
    deliverableLabel: "Đầu ra",
    steps: [
      {
        name: "Lắng nghe & Khám phá",
        detail: "Làm rõ bài toán vận hành, mục tiêu và ràng buộc — chưa chọn tool.",
        deliverable: "Tóm tắt vấn đề, mục tiêu và ràng buộc đã căn chỉnh.",
      },
      {
        name: "Lên kế hoạch & Báo giá",
        detail: "Phân tách phạm vi, milestone, chi phí và đầu ra bàn giao.",
        deliverable: "Đề xuất có phạm vi, timeline và báo giá rõ.",
      },
      {
        name: "Phát triển theo sprint",
        detail: "Xây và demo sớm — chỉnh theo phản hồi trước khi khóa.",
        deliverable: "Sprint build/demo để review sớm.",
      },
      {
        name: "Kiểm thử & UAT",
        detail: "Nghiệm thu cùng anh chị trước khi lên production.",
        deliverable: "Checklist nghiệm thu và lỗi đã xử lý.",
      },
      {
        name: "Bàn giao & Đồng hành",
        detail: "Deploy, hướng dẫn, tài liệu — hỗ trợ kỹ thuật sau live theo thỏa thuận.",
        deliverable: "Source, môi trường, admin (nếu có), hướng dẫn và bảo hành.",
      },
    ],
  },
  fit: {
    eyebrow: "Fit",
    title: "Thuê CRM + AI — phù hợp doanh nghiệp dịch vụ [[B2B]]",
    support:
      "Chủ spa, salon, edu, clinic và dịch vụ tương tự cần nền CRM thuê theo ngành, AI tăng trưởng (Care/Ops), và có thể nhận Website / Landing theo combo. Không rành kỹ thuật vẫn trao đổi bằng ngôn ngữ kinh doanh.",
    exploreCta: "Xem hồ sơ phù hợp",
    matrix: [
      {
        profile: "Cần CRM vận hành khách / lịch / follow-up",
        recommended: "CRM Base 12 hoặc combo CRM + AI",
        note: "CRM đứng một mình: gói 12 tháng. Gói 6 tháng khi kèm Care hoặc Ops.",
      },
      {
        profile: "Muốn chatbot AI trên Web / Zalo / Messenger",
        recommended: "CRM + Care (6 hoặc 12)",
        note: "Care thuộc AI tăng trưởng — thường gắn CRM; từ Care 6 có thể tặng Website DN khi triển khai.",
      },
      {
        profile: "Muốn chatbox AI thao tác CRM ngày làm việc",
        recommended: "CRM + Ops (± Care)",
        note: "Ops là lớp tăng trưởng trên CRM — không thay CRM doanh nghiệp khổng lồ.",
      },
      {
        profile: "Cần Landing / Website doanh nghiệp",
        recommended: "Theo combo CRM (không bán web đơn lẻ như lõi)",
        note: "CRM Base 12: tặng LP hoặc −50% Website DN. Từ CRM + Care 6: tặng Website DN khi triển khai.",
      },
    ],
  },
  popularServicesChrome: {
    eyebrow: "Website packages",
    title: "Website / Landing — [[hỗ trợ chốt]] theo combo CRM",
    support:
      "Không phải catalog agency. Landing / Website DN one-time theo chính sách giá 2026 — tặng hoặc giảm sâu khi thuê CRM (± AI).",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Câu hỏi [[thường gặp]]",
    support:
      "Thuê CRM · AI tăng trưởng · Website tặng kèm combo · thanh toán trước — theo chính sách giá 2026.",
    items: [
      {
        q: "Dolphin Software làm gì?",
        a: "Đối tác công nghệ cho doanh nghiệp dịch vụ B2B: doanh thu nền là thuê CRM theo ngành; AI (Care / Ops / Intelligence) là tăng trưởng; Website / Landing tặng hoặc giảm theo combo để hỗ trợ chốt.",
      },
      {
        q: "Sản phẩm lõi là gì?",
        a: "CRM — nền vận hành khách hàng. Mọi combo và upsell xoay quanh CRM. Niêm yết theo tháng, bán theo kỳ 6 hoặc 12 tháng, thanh toán trước; không dùng thử miễn phí.",
      },
      {
        q: "AI đóng vai trò gì?",
        a: "Doanh thu tăng trưởng: Care (chatbot Web/Zalo/Messenger), Ops (chatbox trên CRM), Intelligence (workflow add-on khi đã có CRM). Thường bán kèm hoặc mở rộng sau CRM.",
      },
      {
        q: "Website / Landing có phải dịch vụ chính không?",
        a: "Không. Website hỗ trợ chốt: CRM Base 12 tặng Landing hoặc giảm 50% Website DN; từ CRM + Care 6 trở đi tặng Website DN khi triển khai (theo chính sách giá).",
      },
      {
        q: "Dolphin phục vụ ngành nào?",
        a: "Doanh nghiệp dịch vụ — spa, salon, edu, clinic và mô hình tương tự cần CRM thuê theo nghiệp vụ vận hành khách.",
      },
      {
        q: "CRM Base khác combo có AI thế nào?",
        a: "CRM đứng một mình chỉ bán gói 12 tháng. Gói 6 tháng chỉ khi kèm Care hoặc Ops. Intelligence chỉ khi đã có gói có CRM.",
      },
      {
        q: "Thuê lẻ Care có tặng website không?",
        a: "Không. Gói thuê lẻ Care dành cho khách đã có CRM — không tặng Website.",
      },
      {
        q: "Phí Zalo / cổng thanh toán có trong giá không?",
        a: "Không. Phí bên thứ ba (Zalo OA, ZNS, SMTP, cổng TT, Google…) khách trả trực tiếp nhà cung cấp.",
      },
      {
        q: "Doanh nghiệp không rành kỹ thuật có làm việc được không?",
        a: "Được. Anh chị mô tả cách vận hành và chỗ nghẽn; Dolphin đề xuất combo CRM · AI · Web khớp pain.",
      },
      {
        q: "Làm việc với Dolphin trông như thế nào?",
        a: "Hiểu ngành → chọn CRM (± AI) → khóa phạm vi & báo giá → triển khai / UAT → bàn giao & đồng hành. Web đi theo rule combo nếu áp dụng.",
      },
      {
        q: "Báo giá ở đâu?",
        a: "Brief qua Contact hoặc Zalo. Có thể tham chiếu trang Chính sách giá Dolphin 2026 cho niêm yết và quy tắc combo.",
      },
      {
        q: "Bảo trì sau bàn giao?",
        a: "Hướng dẫn vận hành + bảo hành lỗi kỹ thuật trong phạm vi đã nghiệm thu (theo thỏa thuận). Tính năng mới báo giá riêng.",
      },
      {
        q: "Làm sao để bắt đầu?",
        a: "Kể ngành dịch vụ và chỗ đang nghẽn (khách, lịch, kênh chat…). Không cần biết sẵn gói — cùng chọn CRM và lớp AI / web phù hợp.",
      },
    ],
  },
  contactChrome: {
    eyebrow: "Next step",
    title: "Chọn combo [[CRM · AI · Web]] phù hợp",
    support:
      "Kể ngành dịch vụ và chỗ nghẽn. Dolphin đề xuất thuê CRM, lớp AI tăng trưởng, và quyền lợi Website / Landing theo combo — không ép gói.",
    nextHint: "Thường phản hồi trong ngày làm việc.",
    afterSubmitTitle: "Sau khi anh chị gửi brief:",
    afterSubmitItems: [
      "Gợi ý CRM (± Care / Ops) khớp ngành",
      "Quyền lợi Website / Landing nếu đủ điều kiện combo",
      "Mốc thời gian và khoảng chi phí ước tính",
    ],
  },
  seo: {
    title: "Dolphin Software – Thuê CRM & AI Cho Doanh Nghiệp Dịch Vụ B2B",
    description:
      "CRM là doanh thu nền (thuê theo ngành). AI Care · Ops · Intelligence là tăng trưởng. Website / Landing tặng hoặc giảm theo combo — chính sách giá Dolphin 2026.",
    og_title: "Dolphin Software – Thuê CRM & AI Cho Doanh Nghiệp Dịch Vụ B2B",
    og_description:
      "CRM nền tảng · AI tăng trưởng · Website hỗ trợ chốt. Spa, salon, edu, clinic và dịch vụ B2B.",
    canonical: "https://dolphin-software.io.vn/",
    keywords: [
      "thuê CRM doanh nghiệp dịch vụ",
      "CRM spa salon clinic giáo dục",
      "Dolphin Care chatbot AI",
      "Dolphin Ops CRM",
      "combo CRM AI website",
      "chính sách giá Dolphin 2026",
      "Dolphin Software",
    ],
  },
};
