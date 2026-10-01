import type { PosSlug } from "@/lib/pos/catalog";

export type PosFaq = { q: string; a: string };

export type PosDemoLine = {
  name: string;
  meta: string;
  price: string;
};

/** Homepage-style feature + POS mock panel (Care pattern). */
export type PosFeatureDemo = {
  featuresEyebrow: string;
  featuresTitle: string;
  featuresSupport: string;
  features: { title: string; body: string }[];
  demoProduct: string;
  demoContext: string;
  demoStatus: string;
  demoLines: PosDemoLine[];
  demoTotalLabel: string;
  demoTotal: string;
  demoPayLabel: string;
  demoFootnote: string;
  pipelineLabel: string;
  pipeline: string[];
};

export type PosPageCopy = {
  metaTitle: string;
  metaDescription: string;
  label: string;
  h1: string;
  answerTitle: string;
  answerFirst: string;
  problemsTitle: string;
  problemsLead: string;
  problems: { title: string; body: string }[];
  solutionsTitle: string;
  posTitle: string;
  posBody: string;
  inventoryTitle: string;
  inventoryBody: string;
  channelsTitle: string;
  channelsBody: string;
  plansTitle: string;
  plansBody: string;
  workflowTitle: string;
  workflow: { title: string; body: string }[];
  faqTitle: string;
  faq: PosFaq[];
  ctaTitle: string;
  ctaSupport: string;
} & PosFeatureDemo;

export type PosHubCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  answerTitle: string;
  answerFirst: string;
};

export const posHubVi: PosHubCopy = {
  metaTitle:
    "Dolphin POS theo ngành — Cafe · Trà sữa · Pet · Fashion | Dolphin Software",
  metaDescription:
    "Dolphin POS cho cửa hàng bán hàng: F&B, cafe, trà sữa, pet shop, fashion và shop bán hàng. Tách biệt CRM dịch vụ (spa/salon). Xem gói Cơ Bản · Chuyên nghiệp · Toàn Diện theo năm.",
  h1: "Dolphin POS cho cửa hàng bán hàng",
  lead: "Dòng sản phẩm POS — hóa đơn, quầy, kho, FnB, kênh bán. Không gộp với CRM spa/salon. Chọn ngành bên dưới hoặc mở bảng giá POS.",
  answerTitle: "POS khác CRM của Dolphin ở đâu?",
  answerFirst:
    "POS phục vụ cửa hàng bán hàng (F&B, pet, fashion, HKD): bán tại quầy, tồn kho, ca, web/sàn khi cần. CRM · Care · Ops phục vụ doanh nghiệp dịch vụ (khách, lịch, follow-up, AI chăm sóc). Hai bảng giá và hai cụm landing tách riêng trên site.",
};

const sharedCta = {
  ctaTitle: "Nhận tư vấn POS",
  ctaSupport:
    "Kể loại cửa hàng, số quầy và chỗ đang nghẽn (hóa đơn, kho, ca, kênh bán). Dolphin đề xuất gói Cơ Bản · Chuyên nghiệp · Toàn Diện — app POS triển khai theo lộ trình (TODO runtime).",
};

function page(
  partial: Omit<PosPageCopy, "ctaTitle" | "ctaSupport" | keyof PosFeatureDemo>,
  demo: PosFeatureDemo,
): PosPageCopy {
  return { ...partial, ...demo, ...sharedCta };
}

const posFeatureDemoVi: Record<PosSlug, PosFeatureDemo> = {
  fnb: {
    featuresEyebrow: "Tính năng POS · F&B",
    featuresTitle: "Bán nhanh tại quầy — vẫn soi được cuối ngày",
    featuresSupport:
      "Mock dưới đây minh họa luồng bán F&B trên Dolphin POS (marketing). Runtime app: TODO.",
    features: [
      {
        title: "Order & hóa đơn quầy",
        body: "Ghi món ăn / đồ uống, ghi chú đặc biệt, thu tiền — không phụ thuộc sổ giấy.",
      },
      {
        title: "Trừ nguyên liệu theo món",
        body: "Gắn công thức cơ bản (gạo, nước dùng, topping…) để thấy lệch tồn sớm hơn Excel.",
      },
      {
        title: "Ca & quỹ",
        body: "Mở/đóng ca, đối chiếu thu — giảm tranh cãi giao ca miệng.",
      },
    ],
    demoProduct: "Dolphin POS",
    demoContext: "F&B · Quầy bán",
    demoStatus: "Ca đang mở",
    demoLines: [
      { name: "Cơm gà xối mỡ", meta: "1 × phần · trừ gạo + gà", price: "55.000đ" },
      { name: "Trà đá", meta: "2 × ly", price: "10.000đ" },
      { name: "Canh chua cá", meta: "1 × tô · trừ cá + me", price: "45.000đ" },
    ],
    demoTotalLabel: "Tạm tính",
    demoTotal: "110.000đ",
    demoPayLabel: "Thanh toán",
    demoFootnote: "Minh họa UI — không phải app live.",
    pipelineLabel: "Luồng bán F&B trên POS",
    pipeline: [
      "Nhận order",
      "Ghi món / ghi chú",
      "Trừ nguyên liệu",
      "Thu tiền",
      "In / lưu hóa đơn",
      "Đối chiếu ca",
    ],
  },
  cafe: {
    featuresEyebrow: "Tính năng POS · Cafe",
    featuresTitle: "Order cafe — gắn hạt, sữa và ca làm",
    featuresSupport:
      "Mỗi ngành có copy SKU riêng. Cafe nhấn hạt Arabica/Robusta, sữa và đóng ca.",
    features: [
      {
        title: "Menu đồ uống & size",
        body: "Sữa đá, bạc xỉu, cold brew — ghi size/đá/sữa để giảm sót lúc peak.",
      },
      {
        title: "Nguyên liệu hạt & sữa",
        body: "Theo dõi túi hạt, hộp sữa theo ca — biết sắp hết trước khi khách đợi.",
      },
      {
        title: "Đóng ca rõ số",
        body: "Thu chi theo ca trên POS thay vì cộng tay cuối ngày.",
      },
    ],
    demoProduct: "Dolphin POS",
    demoContext: "Cafe · Order quầy",
    demoStatus: "Ca đang mở",
    demoLines: [
      {
        name: "Cà phê sữa đá",
        meta: "Size M · trừ Arabica + sữa đặc",
        price: "35.000đ",
      },
      {
        name: "Bạc xỉu",
        meta: "Size L · trừ Robusta + sữa tươi",
        price: "42.000đ",
      },
      {
        name: "Bánh croissant",
        meta: "1 × cái · trừ tồn bánh",
        price: "28.000đ",
      },
    ],
    demoTotalLabel: "Tạm tính",
    demoTotal: "105.000đ",
    demoPayLabel: "Thanh toán",
    demoFootnote: "Minh họa UI — không phải app live.",
    pipelineLabel: "Luồng bán cafe trên POS",
    pipeline: [
      "Chọn đồ uống / size",
      "Gắn hạt & sữa",
      "Pha chế",
      "Trừ nguyên liệu",
      "Thanh toán",
      "Đóng ca",
    ],
  },
  "tra-sua": {
    featuresEyebrow: "Tính năng POS · Trà sữa",
    featuresTitle: "Peak hour — topping và size không bị sót",
    featuresSupport:
      "Trà sữa cần biến thể nhanh: đường, đá, topping. POS ghi đúng để bar không hỏi lại.",
    features: [
      {
        title: "Biến thể món",
        body: "Size / % đường / topping trân châu, pudding — một dòng order rõ ràng.",
      },
      {
        title: "Tồn topping theo ngày",
        body: "Thấy trân châu / thạch sắp hết giữa ca thay vì hết lúc đông khách.",
      },
      {
        title: "Nhiều NV một quầy",
        body: "Ca và quỹ tách theo người — đỡ lệch khi đổi ca peak.",
      },
    ],
    demoProduct: "Dolphin POS",
    demoContext: "Trà sữa · Peak hour",
    demoStatus: "Ca đang mở",
    demoLines: [
      {
        name: "Trà sữa truyền thống",
        meta: "L · 50% đường · trân châu",
        price: "45.000đ",
      },
      {
        name: "Trà đào cam sả",
        meta: "M · ít đá · pudding",
        price: "48.000đ",
      },
      {
        name: "Topping thêm",
        meta: "Trân châu trắng ×1 · trừ tồn",
        price: "10.000đ",
      },
    ],
    demoTotalLabel: "Tạm tính",
    demoTotal: "103.000đ",
    demoPayLabel: "Thanh toán",
    demoFootnote: "Minh họa UI — không phải app live.",
    pipelineLabel: "Luồng bán trà sữa trên POS",
    pipeline: [
      "Chọn size / đường / đá",
      "Thêm topping",
      "Gửi bar",
      "Trừ topping & nguyên liệu",
      "Thu tiền",
      "Đối chiếu ca",
    ],
  },
  pet: {
    featuresEyebrow: "Tính năng POS · Pet shop",
    featuresTitle: "Bán hạt · cát · phụ kiện — tồn khớp kệ",
    featuresSupport:
      "Pet shop sống nhờ SKU: hạt mèo, hạt chó, cát vệ sinh. POS gắn bán với tồn.",
    features: [
      {
        title: "SKU thú cưng",
        body: "Hạt mèo / hạt chó theo kg, cát, snack — tìm nhanh tại quầy.",
      },
      {
        title: "Kiểm tồn trước khi bán",
        body: "Biết còn bao nhiêu túi trên kệ — tránh bán quá tồn khi chat + quầy cùng lúc.",
      },
      {
        title: "Hóa đơn & theo dõi ngày",
        body: "Chốt thu chi; mở rộng vận chuyển / sàn khi nâng gói.",
      },
    ],
    demoProduct: "Dolphin POS",
    demoContext: "Pet shop · Bán hàng",
    demoStatus: "Ca đang mở",
    demoLines: [
      {
        name: "Hạt mèo cá ngừ",
        meta: "1.5kg · trừ tồn kệ A2",
        price: "185.000đ",
      },
      {
        name: "Hạt chó thịt bò",
        meta: "3kg · trừ tồn kệ B1",
        price: "320.000đ",
      },
      {
        name: "Cát vệ sinh",
        meta: "8L · hương lavender",
        price: "95.000đ",
      },
    ],
    demoTotalLabel: "Tạm tính",
    demoTotal: "600.000đ",
    demoPayLabel: "Thanh toán",
    demoFootnote: "Minh họa UI — không phải app live.",
    pipelineLabel: "Luồng bán pet shop trên POS",
    pipeline: [
      "Chọn loại thú / SKU",
      "Kiểm tra tồn",
      "Thêm vào đơn",
      "Xuất hóa đơn",
      "Trừ kho",
      "Giao / tích điểm (theo gói)",
    ],
  },
  fashion: {
    featuresEyebrow: "Tính năng POS · Fashion",
    featuresTitle: "Size · màu · kênh bán — một sổ tồn",
    featuresSupport:
      "Thời trang lệch tồn vì biến thể. POS ghi đúng size/màu khi bán quầy và online.",
    features: [
      {
        title: "Biến thể size / màu",
        body: "Mỗi SKU gắn size-màu — bán quầy không đụng nhầm tồn.",
      },
      {
        title: "Quầy + web cùng sổ",
        body: "Giảm bán trùng khi vừa livestream vừa tại store (theo phạm vi gói).",
      },
      {
        title: "Ca nhân viên",
        body: "Thu theo ca — dễ soi khi shop đông cuối tuần.",
      },
    ],
    demoProduct: "Dolphin POS",
    demoContext: "Fashion · Quầy",
    demoStatus: "Ca đang mở",
    demoLines: [
      {
        name: "Áo sơ mi linen",
        meta: "M · Beige · trừ tồn",
        price: "390.000đ",
      },
      {
        name: "Quần jeans slim",
        meta: "29 · Indigo",
        price: "520.000đ",
      },
      {
        name: "Túi canvas",
        meta: "1 × chiếc · nâu",
        price: "250.000đ",
      },
    ],
    demoTotalLabel: "Tạm tính",
    demoTotal: "1.160.000đ",
    demoPayLabel: "Thanh toán",
    demoFootnote: "Minh họa UI — không phải app live.",
    pipelineLabel: "Luồng bán fashion trên POS",
    pipeline: [
      "Chọn mẫu",
      "Chọn size / màu",
      "Kiểm tồn biến thể",
      "Thanh toán quầy",
      "Cập nhật tồn",
      "Đồng bộ kênh (theo gói)",
    ],
  },
  retail: {
    featuresEyebrow: "Tính năng POS · Shop / HKD",
    featuresTitle: "Hóa đơn rõ — lớn dần theo gói",
    featuresSupport:
      "HKD bắt đầu từ bán + thu chi; sau đó mới kho, ca, đa kênh — đúng bảng giá POS năm.",
    features: [
      {
        title: "Hóa đơn mỗi ngày",
        body: "Bán quầy / ghi thu — thay sổ tay khó đối chiếu.",
      },
      {
        title: "Tài chính cơ bản",
        body: "Xem dòng tiền nhanh; gắn ngân hàng theo phạm vi gói Cơ Bản.",
      },
      {
        title: "Nâng khi cửa hàng lớn",
        body: "Thêm tồn, ca, HĐĐT, sàn — không đổi sản phẩm giữa chừng.",
      },
    ],
    demoProduct: "Dolphin POS",
    demoContext: "Shop bán hàng · HKD",
    demoStatus: "Ca đang mở",
    demoLines: [
      {
        name: "Nước ngọt thùng",
        meta: "1 × thùng 24 lon",
        price: "185.000đ",
      },
      {
        name: "Mì gói lốc",
        meta: "5 × lốc · trừ tồn kệ",
        price: "140.000đ",
      },
      {
        name: "Khăn giấy",
        meta: "2 × bịch",
        price: "36.000đ",
      },
    ],
    demoTotalLabel: "Tạm tính",
    demoTotal: "361.000đ",
    demoPayLabel: "Thanh toán",
    demoFootnote: "Minh họa UI — không phải app live.",
    pipelineLabel: "Luồng bán shop / HKD trên POS",
    pipeline: [
      "Chọn hàng",
      "Tạo hóa đơn",
      "Thu tiền",
      "Ghi tài chính",
      "Cập nhật tồn (theo gói)",
      "Báo cáo ngày",
    ],
  },
};

const plansBodyShared =
  "Ba gói theo năm trên bảng giá POS: Cơ Bản 1.920.000đ · Chuyên nghiệp 2.520.000đ (phổ biến) · Toàn Diện 8.400.000đ. CTA báo giá / Zalo — không dùng thử miễn phí.";

export const posPagesVi: Record<PosSlug, PosPageCopy> = {
  fnb: page({
    metaTitle: "POS cho F&B — quán ăn đồ uống | Dolphin Software",
    metaDescription:
      "Dolphin POS cho F&B: bán tại quầy, quản lý FnB, ca làm, tồn và kênh bán theo gói. Tách CRM dịch vụ. Xem gói năm và FAQ.",
    label: "F&B",
    h1: "POS vận hành quán F&B",
    answerTitle: "Dolphin POS giúp F&B như thế nào?",
    answerFirst:
      "Giúp quán ăn / đồ uống ghi đơn tại quầy, theo dõi tài chính cơ bản, quản lý FnB và ca theo gói — mở rộng tồn nâng cao, tích điểm và sàn khi cần gói Toàn Diện. Không thay CRM lịch liệu trình spa.",
    problemsTitle: "F&B thường nghẽn ở đâu?",
    problemsLead: "Bán nhanh nhưng sổ sách và ca dễ rối khi chỉ dựa Zalo/Excel.",
    problems: [
      {
        title: "Đơn và thu chi rời",
        body: "Bán nhiều kênh nhưng khó đối chiếu cuối ngày.",
      },
      {
        title: "Ca và nhân viên",
        body: "Giao ca miệng — lệch tiền, khó truy vết.",
      },
      {
        title: "Tồn / FnB",
        body: "Nguyên liệu và món hết giữa ca mà không thấy sớm.",
      },
    ],
    solutionsTitle: "POS giải quyết phần nào?",
    posTitle: "Bán tại quầy & hóa đơn",
    posBody:
      "Tạo hóa đơn / bán tại cửa hàng cơ bản (gói Cơ Bản trở lên); nâng cấp theo gói Chuyên nghiệp · Toàn Diện.",
    inventoryTitle: "FnB & tồn",
    inventoryBody:
      "Quản lý FnB cơ bản từ gói Chuyên nghiệp; tồn và FnB nâng cao ở gói Toàn Diện.",
    channelsTitle: "Kênh bán",
    channelsBody:
      "Bán web online cơ bản từ Cơ Bản; MXH/chat đa kênh và sàn TMĐT ở Toàn Diện.",
    plansTitle: "Gói POS theo năm",
    plansBody: plansBodyShared,
    workflowTitle: "Workflow mẫu",
    workflow: [
      { title: "Mở ca", body: "Nhân viên vào ca — ghi nhận trên POS (gói có quản lý ca)." },
      { title: "Bán & thu", body: "Tạo đơn / hóa đơn tại quầy hoặc web cơ bản." },
      { title: "Đối chiếu", body: "Xem tài chính cơ bản cuối ngày; mở rộng báo cáo khi nâng gói." },
    ],
    faqTitle: "FAQ F&B",
    faq: [
      {
        q: "POS F&B có phải CRM spa không?",
        a: "Không. POS cho bán hàng / FnB; CRM spa nằm ở /industries/spa/ và bảng giá CRM · AI.",
      },
      {
        q: "Giá gói năm bao nhiêu?",
        a: "Cơ Bản 1.920.000đ/năm; Chuyên nghiệp 2.520.000đ/năm; Toàn Diện 8.400.000đ/năm — xem /chinh-sach-gia-dolphin-2026/#pos-fnb.",
      },
      {
        q: "Có app POS chạy sẵn chưa?",
        a: "Bảng giá và landing đã công bố để báo giá. Runtime app POS: TODO theo lộ trình sản phẩm.",
      },
      {
        q: "Dolphin POS khác Dolphin Care / Ops thế nào?",
        a: "POS phục vụ cửa hàng bán hàng (quầy, hóa đơn, kho/FnB). Care là AI chăm khách trên web/Zalo; Ops là Agent CRM vận hành nội bộ — xem /dolphin-care/ và /dolphin-ops/.",
      },
      {
        q: "Quán ăn có cần máy POS chuyên dụng không?",
        a: "Không bắt buộc. Hướng web/app trên máy tính bảng hoặc máy tính thường; máy in bill tuỳ quán.",
      },
      {
        q: "Quản lý ca và nhân viên có trong gói nào?",
        a: "Quản lý ca / nhân viên theo phạm vi gói trên bảng giá POS (thường từ Chuyên nghiệp trở lên). Chi tiết feature từng gói tại #pos-fnb.",
      },
      {
        q: "Có trừ nguyên liệu / công thức món không?",
        a: "FnB và tồn theo gói: cơ bản ở Chuyên nghiệp, nâng cao ở Toàn Diện. Không cam kết công thức phức tạp ngoài phạm vi gói đã công bố.",
      },
      {
        q: "Bán online / sàn có không?",
        a: "Web bán cơ bản từ gói Cơ Bản; MXH/chat đa kênh và sàn TMĐT ở gói Toàn Diện — xem bảng tính năng POS.",
      },
      {
        q: "Có dùng thử miễn phí không?",
        a: "Không. Thanh toán trước theo kỳ gói năm (cùng chính sách giá Dolphin). Liên hệ Zalo hoặc /contact/ để báo giá.",
      },
      {
        q: "Bắt đầu tư vấn F&B thế nào?",
        a: "Kể loại quán, số quầy và chỗ nghẽn (đơn, ca, tồn) qua form báo giá hoặc Zalo. Xem thêm /faq/ và hub /pos/.",
      },
    ],
  }, posFeatureDemoVi.fnb),
  cafe: page({
    metaTitle: "POS cho tiệm cafe | Dolphin Software",
    metaDescription:
      "POS cafe: order quầy, ca, tồn đồ uống, bán web cơ bản. Gói năm Dolphin POS. Khác CRM dịch vụ.",
    label: "Tiệm cafe",
    h1: "POS cho tiệm cafe",
    answerTitle: "Cafe dùng Dolphin POS để làm gì?",
    answerFirst:
      "Ghi order và thu tại quầy, quản lý ca, theo dõi tồn đồ uống / thành phẩm theo gói — mở rộng tích điểm và đa kênh khi quán scale. Không phải CRM đặt lịch spa.",
    problemsTitle: "Cafe hay gặp gì?",
    problemsLead: "Giờ cao điểm cần bán nhanh; sổ cuối ngày dễ lệch.",
    problems: [
      { title: "Order chậm / sót", body: "Giấy hoặc chat dễ nhầm size/topping." },
      { title: "Ca và quỹ", body: "Giao ca không rõ — khó soi lệch." },
      { title: "Tồn sữa / hạt", body: "Hết nguyên liệu giữa ca mới biết." },
    ],
    solutionsTitle: "POS giúp cafe phần nào?",
    posTitle: "Bán tại quầy",
    posBody: "Hóa đơn và bán cửa hàng cơ bản từ gói Cơ Bản.",
    inventoryTitle: "FnB cafe",
    inventoryBody: "FnB / tồn theo gói Chuyên nghiệp trở lên.",
    channelsTitle: "Online & MXH",
    channelsBody: "Web bán cơ bản; MXH/chat và sàn ở gói Toàn Diện.",
    plansTitle: "Gói POS theo năm",
    plansBody: plansBodyShared,
    workflowTitle: "Workflow mẫu",
    workflow: [
      { title: "Mở quán / mở ca", body: "Nhân viên vào ca trên POS." },
      { title: "Order & thanh toán", body: "Tạo đơn quầy; in/xuất hóa đơn theo phạm vi gói." },
      { title: "Đóng ca", body: "Đối chiếu thu chi cơ bản." },
    ],
    faqTitle: "FAQ cafe",
    faq: [
      {
        q: "Cafe có dùng chung trang ngành spa không?",
        a: "Không. Cafe thuộc /pos/cafe/ (POS). Spa thuộc /industries/spa/ (CRM).",
      },
      {
        q: "Xem bảng giá POS cafe ở đâu?",
        a: "/chinh-sach-gia-dolphin-2026/#pos-cafe — cùng 3 gói năm.",
      },
      {
        q: "Có máy POS bắt buộc không?",
        a: "Không bắt buộc máy chuyên dụng — hướng web/app trên thiết bị thường; phụ kiện in bill tuỳ quán.",
      },
      {
        q: "POS cafe có phải chatbot Care không?",
        a: "Không. POS ghi order/quầy/kho. Dolphin Care là AI chăm khách trên website/Zalo — hai sản phẩm khác nhau.",
      },
      {
        q: "Theo dõi hạt Arabica / Robusta và sữa thế nào?",
        a: "Tồn / FnB theo gói trên bảng giá (thường Chuyên nghiệp trở lên). Landing minh họa luồng; runtime app: TODO.",
      },
      {
        q: "Giờ peak order có hỗ trợ size / sữa không?",
        a: "Mục tiêu POS là ghi order quầy rõ (size, sữa, ghi chú) để giảm sót so với giấy — phạm vi đúng gói đã chọn.",
      },
      {
        q: "Đóng ca và đối chiếu quỹ có không?",
        a: "Có trên các gói có quản lý ca theo bảng giá POS. Không thay kế toán đầy đủ nếu ngoài phạm vi gói.",
      },
      {
        q: "Bán mang đi / web có không?",
        a: "Web bán cơ bản từ Cơ Bản; kênh MXH/chat và sàn ở Toàn Diện.",
      },
      {
        q: "Có trial không?",
        a: "Không dùng thử miễn phí — thanh toán trước theo kỳ gói năm.",
      },
      {
        q: "Muốn báo giá cho tiệm cafe?",
        a: "Mở form báo giá trên site hoặc chat Zalo; nêu số quầy, menu roughly và chỗ nghẽn. Hub: /pos/.",
      },
    ],
  }, posFeatureDemoVi.cafe),
  "tra-sua": page({
    metaTitle: "POS cho quán trà sữa | Dolphin Software",
    metaDescription:
      "POS trà sữa: bán nhanh, biến thể món, ca, tồn. Gói năm Dolphin POS. Tách CRM dịch vụ.",
    label: "Trà sữa",
    h1: "POS cho quán trà sữa",
    answerTitle: "Trà sữa dùng POS để làm gì?",
    answerFirst:
      "Hỗ trợ bán nhanh tại quầy, quản lý ca và FnB/tồn theo gói — phù hợp quán đông giờ peak. Đa cửa hàng / sàn khi lên Toàn Diện.",
    problemsTitle: "Trà sữa thường nghẽn gì?",
    problemsLead: "Peak hour + topping/biến thể dễ loạn nếu chỉ ghi tay.",
    problems: [
      { title: "Sót topping / size", body: "Order miệng hoặc giấy dễ sai." },
      { title: "Ca đông", body: "Nhiều nhân viên — giao ca và quỹ khó soi." },
      { title: "Tồn topping", body: "Hết giữa ca mới phát hiện." },
    ],
    solutionsTitle: "POS giải quyết phần nào?",
    posTitle: "Bán quầy nhanh",
    posBody: "Hóa đơn / bán cửa hàng cơ bản từ gói Cơ Bản.",
    inventoryTitle: "FnB & tồn",
    inventoryBody: "FnB cơ bản (Chuyên nghiệp); nâng cao ở Toàn Diện.",
    channelsTitle: "Đa kênh",
    channelsBody: "Web cơ bản; MXH/chat và sàn TMĐT ở Toàn Diện.",
    plansTitle: "Gói POS theo năm",
    plansBody: plansBodyShared,
    workflowTitle: "Workflow mẫu",
    workflow: [
      { title: "Mở ca", body: "Check-in ca trước giờ đông." },
      { title: "Order peak", body: "Ghi đơn quầy — giảm sót so với giấy." },
      { title: "Đóng ca / tồn", body: "Đối chiếu và xem tồn theo gói." },
    ],
    faqTitle: "FAQ trà sữa",
    faq: [
      {
        q: "Trà sữa có nằm trong industries CRM không?",
        a: "Không. Landing POS: /pos/tra-sua/. CRM dịch vụ vẫn ở /industries/.",
      },
      {
        q: "Giá POS trà sữa?",
        a: "Cùng bảng năm: 1.920.000đ / 2.520.000đ / 8.400.000đ — #pos-tra-sua.",
      },
      {
        q: "Runtime đã có chưa?",
        a: "Landing + giá để báo giá. App POS: TODO.",
      },
      {
        q: "POS trà sữa khác cafe thế nào?",
        a: "Cùng dòng POS, khác landing và copy nghiệp vụ (topping/size vs hạt/sữa). Bảng 3 gói năm giống nhau.",
      },
      {
        q: "Ghi topping / % đường / size được không?",
        a: "Mục tiêu quầy là ghi biến thể rõ để bar không hỏi lại — đúng phạm vi gói; không cam kết mọi biến thể ngoài SoT giá.",
      },
      {
        q: "Tồn trân châu / thạch theo dõi ra sao?",
        a: "FnB/tồn theo gói Chuyên nghiệp hoặc Toàn Diện trên bảng giá POS.",
      },
      {
        q: "Nhiều nhân viên peak có quản lý ca không?",
        a: "Ca/NV theo feature gói đã công bố. Giảm lệch quỹ so với giao ca miệng.",
      },
      {
        q: "Đa cửa hàng / sàn?",
        a: "Thường ở gói Toàn Diện — xem #pos-tra-sua.",
      },
      {
        q: "Có trial không?",
        a: "Không. Thanh toán trước theo kỳ gói năm.",
      },
      {
        q: "Liên hệ tư vấn trà sữa?",
        a: "Form báo giá hoặc Zalo; nêu số quầy và giờ peak. Xem /pos/ và /faq/.",
      },
    ],
  }, posFeatureDemoVi["tra-sua"]),
  pet: page({
    metaTitle: "POS cho pet shop | Dolphin Software",
    metaDescription:
      "POS pet shop: bán hàng, tồn kho, hóa đơn, kênh online. Gói năm Dolphin POS.",
    label: "Pet shop",
    h1: "POS cho pet shop",
    answerTitle: "Pet shop dùng Dolphin POS thế nào?",
    answerFirst:
      "Quản lý bán hàng và tồn sản phẩm thú cưng, hóa đơn và tài chính cơ bản — mở rộng vận chuyển, HĐĐT, đa cửa hàng / sàn theo gói.",
    problemsTitle: "Pet shop hay gặp gì?",
    problemsLead: "SKU nhiều; tồn và hạn dùng dễ rối nếu chỉ Excel.",
    problems: [
      { title: "Tồn lệch", body: "Nhập xuất tay — không khớp kệ." },
      { title: "Bán đa kênh", body: "Quầy + chat — đơn dễ trùng/sót." },
      { title: "Cuối ngày", body: "Khó chốt thu chi nhanh." },
    ],
    solutionsTitle: "POS giúp pet shop phần nào?",
    posTitle: "Bán & hóa đơn",
    posBody: "Hóa đơn, bán quầy và web cơ bản từ gói Cơ Bản.",
    inventoryTitle: "Tồn kho",
    inventoryBody: "Tồn cơ bản (Chuyên nghiệp); tồn nâng cao (Toàn Diện).",
    channelsTitle: "Vận chuyển & sàn",
    channelsBody: "Tích hợp vận chuyển từ Chuyên nghiệp; sàn TMĐT ở Toàn Diện.",
    plansTitle: "Gói POS theo năm",
    plansBody: plansBodyShared,
    workflowTitle: "Workflow mẫu",
    workflow: [
      { title: "Nhập / bán", body: "Ghi bán quầy; cập nhật tồn theo gói." },
      { title: "Giao hàng", body: "Dùng tích hợp vận chuyển khi có trên gói." },
      { title: "Đối chiếu", body: "Tài chính cơ bản cuối ngày." },
    ],
    faqTitle: "FAQ pet shop",
    faq: [
      {
        q: "Pet shop có dùng CRM spa không?",
        a: "Không bắt buộc. Pet shop bán hàng → /pos/pet/. Spa/clinic → /industries/.",
      },
      {
        q: "Bảng giá?",
        a: "/chinh-sach-gia-dolphin-2026/#pos-pet",
      },
      {
        q: "App đã live?",
        a: "TODO runtime — hiện SoT giá + landing để tư vấn.",
      },
      {
        q: "Hạt mèo / hạt chó / cát có quản lý SKU không?",
        a: "POS hướng bán + tồn SKU theo gói. Landing minh họa; chi tiết feature xem bảng giá POS.",
      },
      {
        q: "Kiểm tồn trước khi bán?",
        a: "Tồn cơ bản / nâng cao theo gói Chuyên nghiệp · Toàn Diện — giảm bán quá tồn khi quầy + chat cùng lúc.",
      },
      {
        q: "Vận chuyển / giao hàng?",
        a: "Tích hợp vận chuyển từ phạm vi gói Chuyên nghiệp trở lên (theo SoT bảng giá).",
      },
      {
        q: "Sàn Shopee / Lazada?",
        a: "Quản lý sàn TMĐT ở gói Toàn Diện — xem #pos-pet.",
      },
      {
        q: "Khác Dolphin Care?",
        a: "Care = AI chăm khách. POS = bán hàng & kho pet shop. Có thể dùng song song nhưng bảng giá tách.",
      },
      {
        q: "Có trial không?",
        a: "Không dùng thử miễn phí — thanh toán trước theo kỳ gói năm.",
      },
      {
        q: "Báo giá pet shop?",
        a: "Zalo hoặc /contact/; kể quy mô SKU và số kênh bán. Hub /pos/pet/.",
      },
    ],
  }, posFeatureDemoVi.pet),
  fashion: page({
    metaTitle: "POS cho shop thời trang | Dolphin Software",
    metaDescription:
      "POS fashion: quầy, tồn size/màu, web, sàn TMĐT theo gói năm Dolphin POS.",
    label: "Fashion",
    h1: "POS cho shop thời trang",
    answerTitle: "Fashion dùng POS để làm gì?",
    answerFirst:
      "Bán tại quầy và online cơ bản, quản lý tồn theo gói, mở rộng MXH/chat và sàn Shopee/Lazada ở Toàn Diện.",
    problemsTitle: "Shop thời trang nghẽn gì?",
    problemsLead: "Biến thể size/màu + đa kênh dễ loạn tồn.",
    problems: [
      { title: "Tồn size/màu", body: "Excel không theo kịp nhập xuất." },
      { title: "Online + offline", body: "Đơn trùng hoặc bán quá tồn." },
      { title: "Nhân viên ca", body: "Khó soi quỹ theo ca." },
    ],
    solutionsTitle: "POS giúp fashion phần nào?",
    posTitle: "Bán quầy & web",
    posBody: "Hóa đơn, bán cửa hàng và web cơ bản từ Cơ Bản.",
    inventoryTitle: "Tồn kho",
    inventoryBody: "Tồn cơ bản → nâng cao theo gói.",
    channelsTitle: "MXH & sàn",
    channelsBody: "Chat đa kênh và quản lý sàn TMĐT ở Toàn Diện.",
    plansTitle: "Gói POS theo năm",
    plansBody: plansBodyShared,
    workflowTitle: "Workflow mẫu",
    workflow: [
      { title: "Bán quầy", body: "Tạo đơn / hóa đơn." },
      { title: "Đồng bộ tồn", body: "Theo dõi tồn theo phạm vi gói." },
      { title: "Đa kênh", body: "Mở MXH/sàn khi dùng Toàn Diện." },
    ],
    faqTitle: "FAQ fashion",
    faq: [
      {
        q: "Fashion khác shop dịch vụ CRM?",
        a: "Có. Fashion bán hàng → /pos/fashion/. Shop dịch vụ lịch/khách → /industries/shop/.",
      },
      {
        q: "Giá?",
        a: "Ba gói năm — #pos-fashion trên trang chính sách giá.",
      },
      {
        q: "Runtime?",
        a: "TODO app POS; landing dùng để báo giá.",
      },
      {
        q: "Quản lý size / màu thế nào?",
        a: "POS hướng biến thể size-màu gắn tồn theo phạm vi gói. Không cam kết ERP thời trang đầy đủ ngoài SoT.",
      },
      {
        q: "Bán quầy và livestream cùng lúc?",
        a: "Mục tiêu giảm bán trùng tồn khi đa kênh — web cơ bản từ Cơ Bản; MXH/sàn ở Toàn Diện.",
      },
      {
        q: "Ca nhân viên cuối tuần?",
        a: "Quản lý ca theo feature gói trên bảng giá POS.",
      },
      {
        q: "Sàn Shopee / Lazada?",
        a: "Ở gói Toàn Diện theo bảng tính năng POS.",
      },
      {
        q: "Khác Dolphin Ops?",
        a: "Ops = Agent CRM nội bộ. Fashion POS = bán hàng/kho. Hai dòng sản phẩm tách.",
      },
      {
        q: "Có trial không?",
        a: "Không. Thanh toán trước theo kỳ gói năm.",
      },
      {
        q: "Tư vấn shop thời trang?",
        a: "Form báo giá / Zalo; nêu số SKU biến thể và kênh bán. /pos/fashion/.",
      },
    ],
  }, posFeatureDemoVi.fashion),
  retail: page({
    metaTitle: "POS cho shop bán hàng / HKD | Dolphin Software",
    metaDescription:
      "POS hộ kinh doanh và cửa hàng: hóa đơn, tài chính, bán quầy & web, nâng cấp kho và đa kênh theo gói năm.",
    label: "Shop bán hàng",
    h1: "POS cho shop bán hàng & HKD",
    answerTitle: "HKD / cửa hàng dùng POS thế nào?",
    answerFirst:
      "Bắt đầu từ hóa đơn, tài chính và bán quầy/web cơ bản; nâng tồn, ca, HĐĐT, nhân viên rồi đa cửa hàng / sàn khi lớn — đúng 3 gói năm đã công bố.",
    problemsTitle: "Cửa hàng nhỏ hay gặp gì?",
    problemsLead: "Muốn sổ rõ nhưng chưa cần ERP nặng.",
    problems: [
      { title: "Sổ tay / Excel", body: "Khó xem lãi lỗ nhanh." },
      { title: "Bán online sơ khai", body: "Chat bán nhưng không gắn tồn." },
      { title: "Scale sau này", body: "Thêm kênh / cửa hàng thì vỡ quy trình." },
    ],
    solutionsTitle: "POS giúp phần nào?",
    posTitle: "Nền bán hàng",
    posBody: "Hóa đơn, tài chính, bán quầy & web cơ bản, tích hợp ngân hàng (Cơ Bản).",
    inventoryTitle: "Tồn & vận hành",
    inventoryBody: "Tồn, ca, HĐĐT, NV từ Chuyên nghiệp.",
    channelsTitle: "Đa kênh / đa cửa hàng",
    channelsBody: "Tích điểm, MXH, nhiều CH, sàn ở Toàn Diện.",
    plansTitle: "Gói POS theo năm",
    plansBody: plansBodyShared,
    workflowTitle: "Workflow mẫu",
    workflow: [
      { title: "Bán mỗi ngày", body: "Hóa đơn / quầy trên POS." },
      { title: "Theo dõi thu chi", body: "Tài chính cơ bản." },
      { title: "Nâng gói khi cần", body: "Thêm tồn, ca, đa kênh đúng bảng giá." },
    ],
    faqTitle: "FAQ shop bán hàng",
    faq: [
      {
        q: "Khác CRM không?",
        a: "Có. Shop bán hàng → /pos/retail/. Doanh nghiệp dịch vụ → /industries/.",
      },
      {
        q: "Bảng giá?",
        a: "/chinh-sach-gia-dolphin-2026/#pos-retail",
      },
      {
        q: "Có trial không?",
        a: "Không dùng thử miễn phí — thanh toán trước theo kỳ gói (cùng policy Dolphin).",
      },
      {
        q: "HKD nhỏ bắt đầu gói nào?",
        a: "Thường Cơ Bản (hóa đơn, tài chính, bán quầy/web cơ bản). Nâng Chuyên nghiệp / Toàn Diện khi cần tồn, ca, đa kênh.",
      },
      {
        q: "Có app POS chạy chưa?",
        a: "Landing + bảng giá để báo giá. Runtime app POS: TODO.",
      },
      {
        q: "Tích hợp ngân hàng?",
        a: "Trong phạm vi gói Cơ Bản theo SoT bảng giá POS — chi tiết khi tư vấn.",
      },
      {
        q: "Hóa đơn điện tử / nhiều cửa hàng?",
        a: "HĐĐT, NV, đa cửa hàng theo feature từng gói (thường Chuyên nghiệp / Toàn Diện).",
      },
      {
        q: "Khác Sổ Bán Hàng / phần mềm khác?",
        a: "Dolphin POS là dòng sản phẩm của Dolphin Software, bảng giá năm đã công bố trên site. So sánh chi tiết khi tư vấn — không bịa KPI đối thủ.",
      },
      {
        q: "Có gắn Dolphin Care không?",
        a: "Care (AI chăm khách) và POS tách bảng giá. Có thể kết hợp sau; cold ICP cửa hàng vẫn bắt đầu từ POS / website.",
      },
      {
        q: "Báo giá HKD / cửa hàng?",
        a: "Zalo hoặc /contact/; kể loại hàng và số kênh. Hub /pos/retail/.",
      },
    ],
  }, posFeatureDemoVi.retail),
};

export function getPosHubCopy(): PosHubCopy {
  return posHubVi;
}

export function getPosPageCopy(slug: PosSlug): PosPageCopy {
  return posPagesVi[slug];
}
