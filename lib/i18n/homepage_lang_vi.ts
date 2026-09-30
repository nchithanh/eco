/**
 * Homepage copy — Vietnamese SEO/AEO/GEO SoT (locale `vi`).
 * Synced with public/schema/homepage/index.json + per-section JSON (CRM-first).
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
      "Tập trung spa, nail, salon, giáo dục, clinic. CRM là nền tảng vận hành. Care · Ops · Intelligence đẩy tăng trưởng. Website tặng hoặc giảm theo combo.",
    support:
      "Dolphin Software không bán danh sách tính năng. Chúng tôi bắt đầu từ chỗ đang nghẽn — lịch rải, khách trôi, follow-up thủ công — rồi chỉ xây những gì giúp tăng khách và doanh thu. CRM thuê theo kỳ là lõi. AI (Care, Ops, Intelligence) là lớp tăng trưởng. Website là quyền lợi combo, không phải sản phẩm mở đầu.",
    trustLine: "Problem-first · CRM nền tảng · AI tăng trưởng · Website combo",
    ctaPrimary: "Nói về doanh nghiệp của bạn",
    ctaSecondary: "Xem combo CRM · AI · Web",
    tags: ["Problem-first", "CRM nền tảng", "AI tăng trưởng"],
    metrics: [
      { value: "CRM", label: "Vận hành lõi" },
      { value: "AI", label: "Care · Ops · Intel" },
    ],
    visual: {
      web: "Tặng website theo combo",
      automation: "Ops CRM",
      ai: "Care · Ops · Intel",
    },
  },
  problems: {
    eyebrow: "What is slowing you down?",
    title: "Điều gì đang [[làm chậm]] doanh nghiệp của anh chị?",
    support:
      "Doanh nghiệp dịch vụ lớn lên — lịch, khách và follow-up thường vỡ thành Zalo/Excel. Mở bằng chỗ đang nghẽn, rồi mới chọn CRM · AI · website combo.",
    items: [
      {
        title: "Quá nhiều việc làm tay",
        body: "Team mất giờ nhắc lịch, nhập liệu, chuyển tin mỗi ngày — chưa có CRM gom một nơi.",
        href: "/dolphin-ops/",
        solution: "CRM / Tự động hóa",
      },
      {
        title: "Khách bị bỏ sót",
        body: "Lead, follow-up và tin nhắn nằm rải Zalo/Excel, rồi trôi. CRM gom khách; Care chăm trên Web / Zalo / Messenger.",
        href: "/dolphin-ops/",
        solution: "CRM / Chatbot AI",
      },
      {
        title: "Website không giúp tiệm lớn lên",
        body: "Có trang nhưng khách vào rồi không gọi — digital chưa gắn CRM & chăm sóc. Website tặng/giảm theo combo CRM, không làm web đứng một mình.",
        href: "/services/web/",
        solution: "Website combo CRM",
      },
      {
        title: "Công cụ không nói chuyện với nhau",
        body: "Khách, bán hàng, vận hành nằm ở nhiều hệ thống — đội phải copy tay giữa các app.",
        href: "/services/integrations/",
        solution: "Tích hợp",
      },
      {
        title: "Doanh nghiệp phụ thuộc quá nhiều vào người",
        body: "Quy trình và dữ liệu khách nằm trong đầu nhân viên — khó bàn giao, khó scale. CRM + Ops giữ việc trong hệ thống.",
        href: "/dolphin-ops/",
        solution: "CRM / Agent CRM",
      },
      {
        title: "Muốn dùng AI, chưa biết bắt đầu đâu",
        body: "AI chỉ có giá trị khi gắn CRM và quy trình thật: Care (chăm khách), Ops (chạy việc nội bộ), Intelligence (add-on).",
        href: "/ai-transform/",
        solution: "AI trên CRM",
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
    title: "Đối tác vận hành — CRM lõi, [[AI]] tăng trưởng, website combo",
    support:
      "Phần lớn spa, salon, clinic không cần hệ thống hàng trăm nút. Họ cần CRM gom khách–lịch–follow-up, AI Care/Ops khi đã sẵn sàng, và website theo quyền lợi combo — không bán thừa.",
    promise: "We don't start with technology. We start with your problem.",
    reasons: [
      {
        title: "Hiểu",
        body: "Nghe cách anh chị đang bán, chăm khách và vận hành — bằng ngôn ngữ kinh doanh.",
      },
      {
        title: "Xác định nghẽn",
        body: "Chỉ ra chỗ mất lead, lịch rải, hoặc phụ thuộc một người — trước khi đề xuất CRM hay AI.",
      },
      {
        title: "Xây đúng thứ",
        body: "CRM thuê theo kỳ trước; Care · Ops · Intelligence khi khớp pain; website tặng hoặc giảm theo combo.",
      },
      {
        title: "Đo và cải thiện",
        body: "Bàn giao để anh chị tự chạy; chỉnh khi thực tế phát sinh — đồng hành dài hạn, không bỏ xó.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Giải pháp",
    title: "Khách và lịch [[một chỗ]], không trôi trên Zalo",
    support:
      "Dành cho spa, nail, salon, lớp học, phòng khám. CRM giữ khách, lịch và việc cần gọi lại. Care trả lời trên web, Zalo, Messenger. Ops nhắc việc trong CRM. Thuê CRM kèm AI từ 6 tháng thì được tặng website để khách tìm thấy tiệm.",
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
        id: "crm",
        title: "CRM — nền vận hành",
        body: "Thuê CRM theo kỳ: khách, lịch, follow-up một chỗ. Lõi của combo; Care / Ops / Intelligence gắn thêm khi cần tăng trưởng.",
        meta: "Vận hành lõi",
        href: "/dolphin-ops/",
      },
      {
        id: "agents",
        title: "Dolphin Care — Chatbot AI",
        body: "Chatbot AI trên website / Zalo / Messenger: trả lời 24/7 đúng nghiệp vụ, ghi lead, gửi insight hằng ngày — không phải chatbot kịch bản cứng.",
        meta: "Web · Zalo · Messenger",
        href: "/dolphin-care/",
      },
      {
        id: "automation",
        title: "Dolphin Ops — AI trên CRM",
        body: "Agent CRM: nói việc cần làm, hệ thống mở đúng màn lịch, khách, báo cáo. Bước nhạy cảm có người duyệt trước khi chạy.",
        meta: "Chatbox trên CRM",
        href: "/dolphin-ops/",
      },
      {
        id: "website",
        title: "Website / Landing (kèm combo)",
        body: "Quyền lợi hiện diện số: CRM Base 12 tặng landing hoặc giảm 50% website; từ CRM + Care 6 trở đi tặng website doanh nghiệp (4.500.000đ) khi triển khai.",
        meta: "Tặng theo combo",
        href: "/services/web/",
      },
      {
        id: "ai",
        title: "AI tăng trưởng",
        body: "Care · Ops · Intelligence gắn dữ liệu CRM thật — audit → pilot → nhân rộng. Không bắt đầu bằng mua AI.",
        meta: "Đúng chỗ cần",
        href: "/ai-transform/",
      },
      {
        id: "integrations",
        title: "Tích hợp hệ thống",
        body: "Nối thanh toán, Zalo, CRM và tool đang chạy — thông tin chảy một mạch, bớt copy tay. Phí bên thứ ba khách trả NCC.",
        meta: "Hệ thống sẵn",
        href: "/services/integrations/",
      },
      {
        id: "custom",
        title: "Intelligence & phần mềm may đo",
        body: "Intelligence là add-on khi đã có CRM. Outsource phần mềm riêng khi gói sẵn chưa khớp — bàn giao source theo phạm vi.",
        meta: "Add-on · Outsource",
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
        body: "Quyền lợi hiện diện số: CRM Base 12 tặng landing hoặc giảm 50% website; từ CRM + Care 6 trở đi tặng website doanh nghiệp (4.500.000đ) khi triển khai.",
        tags: ["Tặng theo combo"],
      },
      {
        id: "ai",
        category: "AI",
        title: "AI tăng trưởng",
        body: "Care · Ops · Intelligence gắn dữ liệu CRM thật — audit → pilot → nhân rộng. Không bắt đầu bằng mua AI.",
        tags: ["Đúng chỗ cần"],
      },
      {
        id: "agents",
        category: "AI Agent",
        title: "Dolphin Care — Chatbot AI",
        body: "Chatbot AI trên website / Zalo / Messenger: trả lời 24/7 đúng nghiệp vụ, ghi lead, gửi insight hằng ngày — không phải chatbot kịch bản cứng.",
        tags: ["Web · Zalo · Messenger"],
      },
      {
        id: "crm",
        category: "CRM",
        title: "CRM — nền vận hành",
        body: "Thuê CRM theo kỳ: khách, lịch, follow-up một chỗ. Lõi của combo; Care / Ops / Intelligence gắn thêm khi cần tăng trưởng.",
        tags: ["Vận hành lõi"],
      },
      {
        id: "automation",
        category: "Automation",
        title: "Dolphin Ops — AI trên CRM",
        body: "Agent CRM: nói việc cần làm, hệ thống mở đúng màn lịch, khách, báo cáo. Bước nhạy cảm có người duyệt trước khi chạy.",
        tags: ["Chatbox trên CRM"],
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "Tích hợp hệ thống",
        body: "Nối thanh toán, Zalo, CRM và tool đang chạy — thông tin chảy một mạch, bớt copy tay. Phí bên thứ ba khách trả NCC.",
        tags: ["Hệ thống sẵn"],
      },
      {
        id: "custom",
        category: "Custom",
        title: "Intelligence & phần mềm may đo",
        body: "Intelligence là add-on khi đã có CRM. Outsource phần mềm riêng khi gói sẵn chưa khớp — bàn giao source theo phạm vi.",
        tags: ["Add-on · Outsource"],
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
    eyebrow: "Combo CRM",
    title: "Phần mềm CRM tặng [[website]] — quyền lợi combo 2026",
    support:
      "Landing 1.500.000đ · Website DN 4.500.000đ. CRM Base 12 tặng landing hoặc −50% website. Từ CRM + Care 6: tặng website DN khi triển khai — không phải catalog agency đứng một mình.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Câu hỏi [[thường gặp]]",
    support:
      "CRM · AI Care/Ops · website theo combo · báo giá — trả lời trước khi bắt đầu.",
    items: [
      {
        q: "Dolphin Software làm gì?",
        a: "Dolphin Software cho thuê CRM và AI (SaaS) cho doanh nghiệp dịch vụ B2B tại Việt Nam — spa, nail, salon, giáo dục, clinic. CRM là nền vận hành. Care, Ops và Intelligence là lớp tăng trưởng. Website tặng hoặc giảm theo combo CRM.",
      },
      {
        q: "Phần mềm CRM có tặng website không?",
        a: "Có, theo combo. CRM + Dolphin Care từ 6 tháng, CRM + Ops và Full Growth tặng website doanh nghiệp (4.500.000đ) khi triển khai. CRM Base 12 tặng landing hoặc giảm 50% website. Thuê lẻ Care không tặng website.",
      },
      {
        q: "Dolphin Care khác Dolphin Ops ở đâu?",
        a: "Dolphin Care là AI chăm sóc khách hàng của anh chị trên website, Zalo, Messenger. Dolphin Ops là Agent CRM giúp đội ngũ chạy việc nội bộ — lịch, khách, báo cáo.",
      },
      {
        q: "Dolphin làm việc với loại doanh nghiệp nào?",
        a: "Chủ yếu doanh nghiệp dịch vụ B2B đang lớn — spa, nail, salon, giáo dục, clinic. Nếu lịch và khách đang rải trên Zalo/Excel, hoặc muốn AI gắn vận hành thật, đó thường là tệp phù hợp.",
      },
      {
        q: "Dolphin chỉ làm website thôi sao?",
        a: "Không. Website là quyền lợi combo khi thuê CRM (± AI), không phải sản phẩm mở đầu. Lõi là CRM thuê theo kỳ; Care, Ops và Intelligence là lớp tăng trưởng.",
      },
      {
        q: "Làm hệ thống mới hay nâng cấp cái đang chạy?",
        a: "Cả hai. Ưu tiên gắn CRM và AI vào quy trình đang chạy; outsource may đo khi gói sẵn chưa khớp. Không mặc định làm lại toàn bộ.",
      },
      {
        q: "Có tích hợp được phần mềm / kênh đang dùng không?",
        a: "Thường được — thanh toán, Zalo, CRM và tool đang chạy. Phạm vi tích hợp ghi rõ trong báo giá sau khi nắm luồng thật.",
      },
      {
        q: "AI áp dụng vào doanh nghiệp mình thế nào?",
        a: "Khi gắn dữ liệu và quy trình thật: Care (chatbot Web/Zalo/Messenger), Ops (chatbox trên CRM), hoặc Intelligence (workflow add-on khi đã có CRM). Không bắt đầu bằng mua AI — bắt đầu bằng việc đang tốn giờ.",
      },
      {
        q: "Có phải thay hết hệ thống hiện tại không?",
        a: "Không bắt buộc. Nhiều việc là nối CRM/AI vào cách anh chị đang bán và chăm khách. Thay toàn bộ chỉ khi hai bên thống nhất đó là cách hợp lý.",
      },
      {
        q: "Có làm giải pháp riêng theo quy trình của tiệm không?",
        a: "Có — phần mềm và workflow theo nghiệp vụ khi gói sẵn không đủ. Phạm vi, milestone và bàn giao (source với outsource) được khóa trước khi làm.",
      },
      {
        q: "Doanh nghiệp không rành kỹ thuật có làm việc được không?",
        a: "Được. Anh chị kể chỗ đang nghẽn bằng ngôn ngữ kinh doanh; Dolphin đề xuất combo CRM · AI · website khớp pain.",
      },
      {
        q: "Làm việc với Dolphin trông như thế nào?",
        a: "Hiểu ngành → chọn CRM (± AI) → khóa phạm vi & báo giá → triển khai / UAT → bàn giao & đồng hành. Website đi theo rule combo nếu đủ điều kiện.",
      },
      {
        q: "Báo giá và phí ẩn?",
        a: "Brief ngắn qua Contact hoặc Zalo. Phản hồi hướng tiếp cận và phạm vi dự kiến — không phí ngoài phạm vi đã thỏa thuận. Có thể tham chiếu trang Chính sách giá Dolphin 2026.",
      },
      {
        q: "Bảo trì sau bàn giao khác tính năng mới thế nào?",
        a: "Website: bảo hành kỹ thuật 36 tháng. CRM và AI (SaaS): trong hạn gói đã thanh toán. Outsource: 3 tháng sau nghiệm thu. Tính năng mới báo giá riêng.",
      },
      {
        q: "Làm sao để bắt đầu?",
        a: "Kể ngành dịch vụ và chỗ đang nghẽn qua form Contact hoặc Zalo. Không cần biết sẵn tên gói — cùng chọn CRM và lớp AI / website phù hợp.",
      },
    ],
  },
  contactChrome: {
    eyebrow: "Next step",
    title: "Cùng xây cách [[vận hành]] tốt hơn",
    support:
      "Kể doanh nghiệp đang ở đâu và chỗ nào đang nghẽn — lịch, khách, follow-up. Dolphin đề xuất combo CRM · AI · website khớp pain, không ép gói.",
    nextHint: "Thường phản hồi trong ngày làm việc.",
    afterSubmitTitle: "Sau khi anh chị gửi brief:",
    afterSubmitItems: [
      "Hướng tiếp cận ban đầu: CRM thuê theo kỳ (± Care / Ops)",
      "Gợi ý phạm vi khớp pain: CRM · Care · Ops · website combo · outsource",
      "Mốc thời gian và khoảng chi phí ước tính theo chính sách 2026",
    ],
  },
  seo: {
    title: "Thuê CRM & AI cho spa, salon, clinic | Dolphin",
    description:
      "Dolphin cho thuê CRM (khách, lịch, follow-up) và AI cho spa, salon, clinic. Combo CRM + Care từ 6 tháng tặng website doanh nghiệp. Báo giá rõ, không phí ẩn.",
    og_title: "Thuê CRM & AI cho spa, salon, clinic | Dolphin",
    og_description:
      "CRM là nền vận hành. Care · Ops · Intelligence đẩy tăng trưởng. Website tặng hoặc giảm theo combo CRM.",
    canonical: "https://dolphin-software.io.vn/",
    keywords: [
      "phần mềm CRM tặng website",
      "CRM cho spa salon clinic",
      "thuê CRM doanh nghiệp dịch vụ",
      "chatbot AI Zalo Messenger",
      "Agent CRM",
      "Dolphin Software",
      "Dolphin Care",
      "Dolphin Ops",
    ],
  },
};
