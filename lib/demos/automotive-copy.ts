/** Demo personal automotive salesperson LP — fictional brand & vehicle. */

export const automotiveDemoBrand = "Quân Auto Concierge";

export const automotiveDemoCopy = {
  metaTitle:
    "Quân Auto Concierge — Demo sales experience ô tô | Dolphin Software",
  metaDescription:
    "Demo landing page cá nhân cho sales ô tô: khám phá xe, so sánh phiên bản, tài chính ước tính, đặt lái thử. Thiết kế bởi Dolphin Software — dữ liệu minh họa.",
  demoBadge: "Demo website bởi Dolphin Software",
  demoNote:
    "Thương hiệu & xe minh họa — thông số, giá, review mang tính placeholder. Không phải listing thật.",
  nav: {
    vehicle: "Xe",
    features: "Đặc điểm",
    gallery: "Gallery",
    pricing: "Giá",
    financing: "Tài chính",
    about: "Về tôi",
    reviews: "Đánh giá",
    contact: "Liên hệ",
    book: "Đặt lái thử",
  },
  vehicle: {
    name: "Aether S7",
    variant: "Signature AWD · Demo",
    tagline: "Êm. Chắc. Sẵn sàng trên mọi cung đường.",
    startingPrice: "Từ 1,19 tỷ ₫*",
    priceNote: "* Giá demo placeholder — thay khi triển khai thật.",
    heroSpecs: [
      { label: "POWER", value: "250 PS*" },
      { label: "TRANSMISSION", value: "8AT*" },
      { label: "SEATS", value: "5*" },
      { label: "FUEL", value: "Hybrid*" },
    ],
    ctaPrimary: "Book a Test Drive",
    ctaSecondary: "Get a Quote",
    scrollHint: "Scroll · Drive Flow",
  },
  facts: {
    eyebrow: "Quick facts",
    title: "Thông số cốt lõi",
    items: [
      { label: "Engine", value: "2.0 Hybrid · Demo*" },
      { label: "Power", value: "250 PS*" },
      { label: "Transmission", value: "8-speed AT*" },
      { label: "Fuel", value: "Hybrid · Demo*" },
      { label: "Seats", value: "5*" },
      { label: "Warranty", value: "TODO — theo hãng*" },
    ],
    footnote: "* Demo data — không phải thông số xe thật.",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Khám phá từng góc",
    categories: [
      {
        id: "exterior",
        label: "Exterior",
        caption: "Silhouette & light lines",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
        alt: "Demo exterior — sedan under dramatic light",
      },
      {
        id: "interior",
        label: "Interior",
        caption: "Cabin calm & materials",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
        alt: "Demo interior cabin atmosphere",
      },
      {
        id: "technology",
        label: "Technology",
        caption: "Displays & assist",
        image:
          "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80",
        alt: "Demo technology and dashboard",
      },
      {
        id: "details",
        label: "Details",
        caption: "Craft in close-up",
        image:
          "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
        alt: "Demo vehicle detail shot",
      },
      {
        id: "driving",
        label: "Driving",
        caption: "Road presence",
        image:
          "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1600&q=80",
        alt: "Demo driving on open road",
      },
      {
        id: "lifestyle",
        label: "Lifestyle",
        caption: "City nights",
        image:
          "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
        alt: "Demo lifestyle automotive scene",
      },
    ],
  },
  why: {
    eyebrow: "Why this car",
    title: "Giá trị cảm nhận được",
    scenes: [
      {
        id: "performance",
        title: "Performance",
        body: "Phản hồi ga mượt, kiểm soát ổn định trên cao tốc và đô thị — mô tả minh họa cho demo.",
        spec: "0–100: TODO*",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
        alt: "Performance scene — demo road imagery",
      },
      {
        id: "comfort",
        title: "Comfort",
        body: "Cabin yên tĩnh, ghế nâng đỡ hành trình dài — placeholder cho nội thất thật của khách.",
        spec: "Ghế: 5 · Cabin: Demo*",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
        alt: "Comfort scene — demo interior",
      },
      {
        id: "technology",
        title: "Technology",
        body: "Màn hình, kết nối và hỗ trợ lái — liệt kê đúng tính năng khi có data hãng.",
        spec: "ADAS: TODO*",
        image:
          "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=80",
        alt: "Technology scene — demo cockpit",
      },
      {
        id: "safety",
        title: "Safety",
        body: "Hệ thống an toàn chủ động / bị động theo cấu hình phiên bản — không bịa chứng nhận.",
        spec: "An toàn: TODO*",
        image:
          "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80",
        alt: "Safety scene — demo driving",
      },
    ],
  },
  variants: {
    eyebrow: "Variants",
    title: "Chọn phiên bản phù hợp",
    support: "Bảng so sánh demo — thay bằng biến thể thật của dòng xe.",
    columns: ["Variant", "Giá*", "Động cơ*", "Điểm khác biệt*"],
    rows: [
      {
        name: "S7 Base",
        price: "1,19 tỷ ₫",
        engine: "2.0 Hybrid",
        diff: "Đủ dùng đô thị",
      },
      {
        name: "S7 Signature",
        price: "1,35 tỷ ₫",
        engine: "2.0 Hybrid AWD",
        diff: "AWD + gói tiện nghi",
        featured: true,
      },
      {
        name: "S7 Performance",
        price: "1,48 tỷ ₫",
        engine: "2.0 Hybrid+",
        diff: "Setup lái đậm hơn",
      },
    ],
    footnote: "* Demo placeholder.",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Minh bạch trước khi quyết định",
    vehiclePrice: "1.350.000.000 ₫*",
    vehicleLabel: "Giá xe Signature AWD (demo)",
    promotions: [
      { label: "Ưu đãi tháng này", value: "TODO — theo chính sách đại lý*" },
      { label: "Gói phụ kiện", value: "TODO*" },
      { label: "Lệ phí trước bạ / đăng ký (ước)", value: "TODO*" },
    ],
    cta: "Get My Best Offer",
    footnote: "* Không phải giá cam kết. Thay số thật khi go-live.",
  },
  financing: {
    eyebrow: "Financing",
    title: "Ước tính trả góp",
    support:
      "Máy tính minh họa. Kết quả là ước tính — không phải phê duyệt khoản vay.",
    priceLabel: "Giá xe (₫)",
    downLabel: "Trả trước (₫)",
    termLabel: "Kỳ hạn (tháng)",
    rateLabel: "Lãi suất (%/năm)",
    defaults: {
      price: 1_350_000_000,
      down: 270_000_000,
      term: 60,
      rate: 8.5,
    },
    resultLabel: "Ước tính mỗi tháng",
    estimateNote: "Estimate only · không phải offer ngân hàng.",
    cta: "Talk financing with me",
  },
  salesperson: {
    eyebrow: "Salesperson",
    title: "Người bạn nói chuyện trước khi mua",
    name: "Trần Minh Quân",
    role: "Automotive Sales Concierge · Demo",
    experience: "8+ năm đồng hành khách mua xe*",
    intro:
      "Tôi không bán catalog. Tôi giúp anh/chị chọn đúng phiên bản, hiểu chi phí thật, và lịch lái thử vừa lịch sống của mình.",
    expertise: [
      "Sedan & crossover gia đình",
      "Tư vấn trả góp / thủ tục",
      "Trade-in định hướng*",
    ],
    phone: "0900 000 000",
    zalo: "#contact",
    email: "quan@demo.local",
    cta: "Talk to Me",
    portraitAlt: "Portrait placeholder — Trần Minh Quân (demo)",
    footnote: "* Demo persona.",
  },
  trust: {
    eyebrow: "Customer trust",
    title: "Khách đã gặp tôi nói gì",
    support: "Review minh họa — thay bằng review thật / verified khi có.",
    items: [
      {
        quote:
          "Quân giải thích rõ phí phát sinh trước khi em quyết định — không bị bất ngờ lúc làm hồ sơ.",
        name: "Chị Lan*",
        vehicle: "Aether S7 Signature*",
        rating: "5.0*",
      },
      {
        quote:
          "Lịch lái thử đúng giờ, xe sạch, tư vấn phiên bản theo nhu cầu gia đình chứ không đẩy gói đắt nhất.",
        name: "Anh Hùng*",
        vehicle: "Aether S7 Base*",
        rating: "5.0*",
      },
    ],
    footnote: "* Demo testimonials — không phải khách thật.",
  },
  testDrive: {
    eyebrow: "Test drive",
    title: "Experience It Yourself.",
    support: "Form demo — submit chỉ scroll tới cảm ơn; gắn CRM/Zalo khi go-live.",
    fields: {
      vehicle: "Xe / phiên bản",
      date: "Ngày mong muốn",
      time: "Giờ",
      location: "Địa điểm",
      name: "Họ tên",
      phone: "Số điện thoại",
      email: "Email",
      message: "Ghi chú",
    },
    vehicleOptions: ["S7 Base", "S7 Signature", "S7 Performance"],
    locations: ["Showroom demo · Q.1", "Gặp tại nhà (nội thành)*", "Khác — ghi chú"],
    times: ["09:00", "11:00", "14:00", "16:00", "19:00"],
    cta: "Book a Test Drive",
    success: "Đã ghi nhận yêu cầu demo. Liên hệ Zalo/điện thoại để xác nhận lịch thật.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Nói chuyện trực tiếp",
    phone: "0900 000 000",
    message: "Zalo / Message",
    email: "quan@demo.local",
    place: "Showroom demo — TODO địa chỉ thật",
    hours: "T2–T7 · 9:00–19:00*",
    mapNote: "Bản đồ: TODO khi có địa chỉ.",
  },
  mobileBar: {
    call: "Call",
    message: "Message",
    testDrive: "Test Drive",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Câu hỏi trước khi chốt",
    items: [
      {
        q: "Xe còn hàng / sẵn lái thử?",
        a: "TODO theo tồn kho thật. Trên demo: giả định có lịch trong tuần.",
      },
      {
        q: "Tôi có thể đặt lái thử không?",
        a: "Có — dùng form Test Drive hoặc gọi/Zalo. Xác nhận slot với sales.",
      },
      {
        q: "Giá cuối cùng là bao nhiêu?",
        a: "Giá trên trang là placeholder. Giá chốt sau kiểm tra khuyến mại / phiên bản / thủ tục.",
      },
      {
        q: "Có hỗ trợ trả góp?",
        a: "Có hướng dẫn ước tính trên trang. Điều kiện vay do đối tác tài chính — không cam kết trên demo.",
      },
      {
        q: "Cần giấy tờ gì?",
        a: "TODO checklist theo quy trình đại lý (CMND/CCCD, chứng minh thu nhập nếu vay…).",
      },
      {
        q: "Bảo hành thế nào?",
        a: "TODO theo chính sách hãng / gói đã chọn.",
      },
      {
        q: "Có nhận xe cũ đổi ngang?",
        a: "Trade-in: TODO quy trình thẩm định. Demo chỉ nêu hướng hỗ trợ.",
      },
      {
        q: "Giao xe mất bao lâu?",
        a: "TODO theo màu / phiên bản / kho. Không hứa ngày trên demo.",
      },
    ],
  },
  final: {
    title: "Sẵn sàng cầm vô-lăng.",
    support: "Một cuộc hẹn lái thử — rõ xe, rõ người bán, rõ bước tiếp theo.",
    ctaPrimary: "Book Your Test Drive",
    ctaSecondary: "Get a Quote",
  },
  driveFlow: [
    "CAR",
    "ROAD",
    "INTERIOR",
    "TECHNOLOGY",
    "DRIVING",
    "SALESPERSON",
    "TEST DRIVE",
  ],
  disclaimer:
    "Trang demo Dolphin Software cho sales ô tô cá nhân. Hình Unsplash dùng minh họa. Không phải website đại lý / hãng chính thức.",
  footer: {
    rights: "© Demo Quân Auto Concierge",
    by: "Thiết kế trải nghiệm bởi Dolphin Software",
  },
} as const;
