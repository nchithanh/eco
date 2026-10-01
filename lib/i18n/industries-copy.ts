import type { IndustrySlug } from "@/lib/industries/catalog";

export type IndustryFaq = { q: string; a: string };

export type IndustryPageCopy = {
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
  careTitle: string;
  careBody: string;
  crmTitle: string;
  crmBody: string;
  automationTitle: string;
  automationBody: string;
  webTitle: string;
  webBody: string;
  workflowTitle: string;
  workflow: { title: string; body: string }[];
  faqTitle: string;
  faq: IndustryFaq[];
  ctaTitle: string;
  ctaSupport: string;
};

export type IndustriesHubCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  answerTitle: string;
  answerFirst: string;
};

export const industriesHubVi: IndustriesHubCopy = {
  metaTitle:
    "Giải pháp theo ngành — Spa · Salon · Clinic · Giáo dục | Dolphin Software",
  metaDescription:
    "Dolphin Software hỗ trợ doanh nghiệp dịch vụ theo ngành: CRM, Dolphin Care (AI chăm sóc khách), Ops và website combo. Xem spa, salon, nail, clinic, giáo dục và dance center.",
  h1: "Giải pháp công nghệ theo ngành dịch vụ",
  lead: "Chọn ngành để xem vấn đề thường gặp, cách CRM · Care · Ops · website giúp gì, workflow mẫu và FAQ — rồi sang bảng giá combo nếu cần số liệu.",
  answerTitle: "Dolphin phục vụ những ngành nào?",
  answerFirst:
    "Dolphin Software tập trung doanh nghiệp dịch vụ tại Việt Nam (TP.HCM và mở rộng): spa, salon, nail, clinic, trung tâm giáo dục / nhảy, shop dịch vụ, vận tải và đội sales. Lõi là CRM thuê theo kỳ; Care và Ops là lớp AI; website thường đi kèm combo — không bắt đầu bằng bán “AI Agent” suông.",
};

const sharedCta = {
  ctaTitle: "Nói về doanh nghiệp của bạn",
  ctaSupport:
    "Kể ngành, số cơ sở và chỗ đang nghẽn (lịch, Zalo, follow-up). Dolphin đề xuất phạm vi CRM · Care · Ops — không ép gói.",
};

function page(
  partial: Omit<IndustryPageCopy, "ctaTitle" | "ctaSupport">,
): IndustryPageCopy {
  return { ...partial, ...sharedCta };
}

export const industryPagesVi: Record<IndustrySlug, IndustryPageCopy> = {
  spa: page({
    metaTitle: "CRM & AI chăm sóc khách cho spa | Dolphin Software",
    metaDescription:
      "Spa hay mất lịch và tin nhắn ngoài giờ? Dolphin giúp gom khách · lịch trên CRM, Care trả lời website/Zalo, Ops nhắc việc — xem workflow và FAQ.",
    label: "Spa",
    h1: "CRM và AI chăm sóc khách cho spa",
    answerTitle: "Dolphin giúp spa như thế nào?",
    answerFirst:
      "Dolphin giúp spa giữ khách, lịch và follow-up trên một CRM; Dolphin Care trả lời câu hỏi / lịch trên website hoặc Zalo trong phạm vi đã khóa; Ops nhắc việc nội bộ khi cần. Website có thể đi kèm combo CRM — không phải bắt buộc mua AI trước.",
    problemsTitle: "Spa đang gặp vấn đề gì?",
    problemsLead: "Thường không thiếu khách — thiếu chỗ gom lịch và trả lời kịp.",
    problems: [
      {
        title: "Lịch và kỹ thuật viên rời rạc",
        body: "Book qua Zalo/Excel dễ trùng slot, quên nhắc, khó xem ai trống.",
      },
      {
        title: "Khách hỏi ngoài giờ",
        body: "Giá, liệu trình, còn lịch — không ai trả lời thì lead nguội.",
      },
      {
        title: "Follow-up liệu trình thủ công",
        body: "Team nhớ miệng hoặc nhắn tay — khách quay lại không đều.",
      },
    ],
    solutionsTitle: "Dolphin giải quyết phần nào?",
    careTitle: "Dolphin Care giúp gì?",
    careBody:
      "Trả lời FAQ, giờ mở cửa, gợi ý liệu trình, ghi SĐT/lead, hỗ trợ hỏi lịch trống nếu đã nối dữ liệu — bàn giao người khi việc nhạy cảm.",
    crmTitle: "CRM giúp gì?",
    crmBody:
      "Hồ sơ khách, lịch hẹn, ghi chú liệu trình, nhắc nội bộ — một nơi thay vì nhiều nhóm chat.",
    automationTitle: "Automation / Ops giúp gì?",
    automationBody:
      "Nhắc việc follow-up, mở đúng màn khách/lịch khi nhân viên nói việc cần làm (bước nhạy có duyệt).",
    webTitle: "Website / landing giúp gì?",
    webBody:
      "Chỗ khách tìm thấy spa và hỏi Care; thường là quyền lợi combo CRM chứ không phải điểm mở cold duy nhất.",
    workflowTitle: "Workflow mẫu",
    workflow: [
      {
        title: "Khách hỏi trên web / Zalo",
        body: "Care trả lời trong knowledge; ghi lead nếu khách để lại liên hệ.",
      },
      {
        title: "Nhân viên xem CRM",
        body: "Lịch + hồ sơ khách; xác nhận slot và liệu trình.",
      },
      {
        title: "Sau liệu trình",
        body: "Ghi chú + nhắc follow-up; Care/FAQ giảm câu hỏi lặp.",
      },
    ],
    faqTitle: "FAQ — spa",
    faq: [
      {
        q: "Spa nhỏ có cần CRM không?",
        a: "Khi lịch và khách bắt đầu rối trên Zalo/Excel thì CRM giúp gom một chỗ. Spa rất nhỏ vẫn có thể bắt đầu gọn — không bắt buộc hệ thống nặng.",
      },
      {
        q: "AI có đặt lịch giúp spa được không?",
        a: "Care có thể hỗ trợ hỏi lịch / giữ chỗ trong phạm vi đã cấu hình; xác nhận cuối và việc nhạy cảm vẫn do người.",
      },
      {
        q: "Có bắt buộc mua AI trước CRM không?",
        a: "Không. Thường CRM là nền; Care/Ops gắn khi cần tăng trưởng trên cùng dữ liệu.",
      },
      {
        q: "Dolphin Care khác chatbot Facebook thế nào?",
        a: "Care gắn knowledge và quy trình spa đã khóa (FAQ, lịch, lead), không chỉ kịch bản bán hàng chung. Việc nhạy vẫn bàn giao người.",
      },
      {
        q: "Ops dùng khi nào cho spa?",
        a: "Khi team nội bộ cần nhắc follow-up, mở đúng khách/lịch trên CRM bằng cách nói việc cần làm — sau khi đã có lớp CRM.",
      },
      {
        q: "Website có đi kèm không?",
        a: "Thường là quyền lợi combo khi thuê CRM (± Care/Ops) đủ điều kiện — xem /chinh-sach-gia-dolphin-2026/ tab Spa. Thuê lẻ Care không mặc định tặng website.",
      },
      {
        q: "Có gắn Zalo OA được không?",
        a: "Care hỗ trợ kênh Zalo khi triển khai trong phạm vi dự án — chi tiết theo báo giá /contact/.",
      },
      {
        q: "Triển khai mất bao lâu?",
        a: "Phụ thuộc phạm vi (CRM, Care, website). Timeline cụ thể khóa sau khi nắm số cơ sở, kênh lead và lịch hiện tại — không có một con số cố định cho mọi spa.",
      },
      {
        q: "Spa nhiều chi nhánh dùng được không?",
        a: "Có thể — phạm vi chi nhánh, quyền và báo cáo bàn rõ khi tư vấn. Không giả định mọi gói sẵn đã cover đa cơ sở.",
      },
      {
        q: "Bắt đầu từ đâu?",
        a: "Kể số giường/KT, kênh book (Zalo/web) và chỗ nghẽn qua /contact/ hoặc Zalo. Xem thêm FAQ chung tại /faq/ và ngành khác tại /industries/.",
      },
    ],
  }),

  salon: page({
    metaTitle: "CRM & AI cho salon tóc / làm đẹp | Dolphin Software",
    metaDescription:
      "Salon cần lịch thợ, khách quay lại và trả lời tin nhắn kịp. Dolphin: CRM + Care + Ops — FAQ và workflow mẫu.",
    label: "Salon",
    h1: "CRM và AI chăm sóc khách cho salon",
    answerTitle: "Dolphin giúp salon như thế nào?",
    answerFirst:
      "Dolphin giúp salon giữ khách và lịch thợ trên CRM, dùng Care để trả lời dịch vụ/giá/lịch ngoài giờ trên web hoặc Zalo, và Ops để nhắc follow-up. Mục tiêu là bớt mất lead và bớt double-book — không thay stylist.",
    problemsTitle: "Salon đang gặp vấn đề gì?",
    problemsLead: "Khách quay lại phụ thuộc lịch đúng người và chăm đúng lúc.",
    problems: [
      {
        title: "Đặt lịch theo thợ khó theo dõi",
        body: "Nhiều kênh book — dễ trùng hoặc quên xác nhận.",
      },
      {
        title: "Tin nhắn giá / dịch vụ lặp lại",
        body: "Reception trả lời cùng câu mỗi ngày.",
      },
      {
        title: "Khách cũ không được nhắc",
        body: "Follow-up nhuộm/uốn/gội phụ thuộc nhớ miệng.",
      },
    ],
    solutionsTitle: "Dolphin giải quyết phần nào?",
    careTitle: "Dolphin Care giúp gì?",
    careBody:
      "FAQ dịch vụ, bảng giá sơ bộ, giờ mở cửa, thu lead, hỗ trợ hỏi lịch — chuyển người khi cần tư vấn chuyên sâu.",
    crmTitle: "CRM giúp gì?",
    crmBody:
      "Khách + lịch + ghi chú sở thích/dịch vụ đã làm; team thấy lịch sử trước khi đón.",
    automationTitle: "Automation / Ops giúp gì?",
    automationBody:
      "Nhắc rebook, mở đúng hồ sơ khách khi nói việc cần làm.",
    webTitle: "Website giúp gì?",
    webBody:
      "Trang dịch vụ + chỗ Care trả lời; combo CRM có thể tặng/giảm website.",
    workflowTitle: "Workflow mẫu",
    workflow: [
      {
        title: "Lead hỏi trên web",
        body: "Care trả lời dịch vụ/giá khung; ghi SĐT.",
      },
      {
        title: "Book trên CRM",
        body: "Gán thợ + slot; xác nhận với khách.",
      },
      {
        title: "Sau dịch vụ",
        body: "Ghi chú + nhắc lần sau; Care giảm hỏi lặp.",
      },
    ],
    faqTitle: "FAQ — salon",
    faq: [
      {
        q: "CRM nào phù hợp salon nhỏ?",
        a: "CRM đủ lịch, khách, follow-up — không cần ERP. Dolphin định hướng thuê theo kỳ cho SMB dịch vụ.",
      },
      {
        q: "Care có tư vấn màu tóc thay stylist không?",
        a: "Không thay tư vấn chuyên môn tại ghế. Care phủ FAQ và điều phối; việc kỹ thuật để người.",
      },
      {
        q: "Có gắn Zalo được không?",
        a: "Care hỗ trợ kênh Zalo OA khi triển khai trong phạm vi dự án — chi tiết theo báo giá.",
      },
      {
        q: "Salon có cần mua AI trước không?",
        a: "Không. Nhiều salon bắt đầu CRM lịch–khách; Care/Ops thêm khi tin nhắn và follow-up nghẽn.",
      },
      {
        q: "Đặt lịch theo thợ có làm được không?",
        a: "CRM hướng lịch và hồ sơ khách/thợ theo phạm vi gói. Luồng book phức tạp bàn khi khóa phạm vi — không hứa mọi rule stylist sẵn có.",
      },
      {
        q: "Ops giúp salon việc gì?",
        a: "Nhắc follow-up (nhuộm/uốn/gội), mở đúng khách trên CRM khi team nói việc cần làm; bước nhạy có thể cần duyệt.",
      },
      {
        q: "Website salon đi kèm combo nào?",
        a: "Xem /chinh-sach-gia-dolphin-2026/ tab Salon. Website thường quyền lợi combo CRM đủ điều kiện — không tặng mặc định với mọi gói lẻ.",
      },
      {
        q: "Khác tiệm nail chỗ nào?",
        a: "Cùng họ lịch–KT–khách; nail có trang /industries/nail/ và FAQ riêng. Combo giá nail có thể tham chiếu nhóm salon.",
      },
      {
        q: "Bao lâu triển khai?",
        a: "Theo phạm vi (CRM, Care, web). Ngày cụ thể sau khi nắm số ghế, kênh book và quy trình hiện tại — trao đổi qua /contact/.",
      },
      {
        q: "Bắt đầu thế nào?",
        a: "Mô tả số stylist, kênh đặt lịch và pain qua /contact/ hoặc Zalo. FAQ tổng: /faq/.",
      },
    ],
  }),

  nail: page({
    metaTitle: "CRM & AI cho tiệm nail | Dolphin Software",
    metaDescription:
      "Tiệm nail: lịch kỹ thuật viên, tin nhắn ngoài giờ, khách quay lại. Dolphin dùng mô hình CRM + Care gần salon — FAQ ngành nail.",
    label: "Nail",
    h1: "CRM và AI chăm sóc khách cho tiệm nail",
    answerTitle: "Dolphin giúp tiệm nail như thế nào?",
    answerFirst:
      "Tiệm nail gặp bài toán gần salon: nhiều slot ngắn trong ngày, hỏi giá/mẫu ngoài giờ, cần nhắc khách quay lại. Dolphin gom khách–lịch trên CRM, Care trả lời FAQ/lịch trên web hoặc Zalo, Ops nhắc follow-up. Combo giá tham chiếu nhóm salon trên bảng giá.",
    problemsTitle: "Tiệm nail đang gặp vấn đề gì?",
    problemsLead: "Slot dày + tin nhắn mẫu/giá dễ làm trễ lead.",
    problems: [
      {
        title: "Book dày, dễ trùng",
        body: "Nhiều KT và khung giờ ngắn — Zalo khó nhìn tổng.",
      },
      {
        title: "Hỏi mẫu / giá ngoài giờ",
        body: "Ảnh mẫu và bảng giá lặp lại mỗi tối.",
      },
      {
        title: "Khách không tái đặt",
        body: "Thiếu nhắc sau 2–3 tuần khi lớp sơn hết chu kỳ.",
      },
    ],
    solutionsTitle: "Dolphin giải quyết phần nào?",
    careTitle: "Dolphin Care giúp gì?",
    careBody:
      "FAQ giá khung, giờ mở, quy trình đặt lịch, thu lead; không thay KT chọn mẫu tại chỗ.",
    crmTitle: "CRM giúp gì?",
    crmBody:
      "Lịch theo KT/slot, hồ sơ khách và ghi chú dịch vụ đã làm.",
    automationTitle: "Automation / Ops giúp gì?",
    automationBody:
      "Nhắc rebook theo chu kỳ; mở đúng khách khi team follow.",
    webTitle: "Website giúp gì?",
    webBody:
      "Gallery/dịch vụ + Care; thường kèm combo CRM.",
    workflowTitle: "Workflow mẫu",
    workflow: [
      {
        title: "Khách hỏi mẫu/giá",
        body: "Care trả lời FAQ; ghi lịch mong muốn + SĐT.",
      },
      {
        title: "Xác nhận trên CRM",
        body: "Gán KT và slot; xác nhận lại với khách.",
      },
      {
        title: "Nhắc tái đặt",
        body: "Nhắc nội bộ hoặc Care theo kịch bản đã duyệt.",
      },
    ],
    faqTitle: "FAQ — nail",
    faq: [
      {
        q: "Nail có trang riêng khác salon không?",
        a: "Có — copy và FAQ riêng cho nail. Phần combo giá có thể tham chiếu nhóm salon trên bảng giá Dolphin.",
      },
      {
        q: "AI có chọn mẫu nail giúp khách không?",
        a: "Care mô tả dịch vụ/FAQ đã nạp; chọn mẫu và kỹ thuật vẫn do KT.",
      },
      {
        q: "Bắt đầu không cần hệ thống lớn?",
        a: "Có — thuê CRM theo kỳ + Care khi cần; không bắt buộc triển khai nặng ngày đầu.",
      },
      {
        q: "CRM giúp tiệm nail việc gì?",
        a: "Gom lịch theo KT/slot, hồ sơ khách và ghi chú dịch vụ đã làm — bớt trùng slot khi book dày trong ngày.",
      },
      {
        q: "Care trả lời được giá và giờ mở không?",
        a: "Có, trong knowledge đã khóa (giá khung, giờ, quy trình đặt). Câu hỏi ngoài phạm vi chuyển người.",
      },
      {
        q: "Nhắc khách tái đặt sau 2–3 tuần?",
        a: "Có thể cấu hình nhắc nội bộ (Ops/CRM) hoặc kịch bản Care đã duyệt — không tự gửi hàng loạt ngoài phạm vi.",
      },
      {
        q: "Có bắt buộc website không?",
        a: "Không. Website thường đi kèm combo CRM khi đủ điều kiện; xem bảng giá nhóm salon /contact/.",
      },
      {
        q: "Gắn Zalo được không?",
        a: "Care hỗ trợ Zalo khi nằm trong phạm vi triển khai — chi tiết báo giá.",
      },
      {
        q: "Khác spa chỗ nào?",
        a: "Cùng họ dịch vụ có lịch; spa có trang /industries/spa/. Nail thiên slot ngắn và gallery mẫu.",
      },
      {
        q: "Bắt đầu từ đâu?",
        a: "Nói số KT, khung giờ đông và kênh book qua /contact/ hoặc Zalo. Xem /industries/ và /faq/.",
      },
    ],
  }),

  clinic: page({
    metaTitle: "CRM & AI cho phòng khám / clinic | Dolphin Software",
    metaDescription:
      "Clinic cần lịch khám, hồ sơ khách và trả lời ngoài giờ có kiểm soát. Dolphin: CRM + Care + bước nhạy có người duyệt.",
    label: "Clinic",
    h1: "CRM và AI chăm sóc khách cho clinic",
    answerTitle: "Dolphin giúp clinic như thế nào?",
    answerFirst:
      "Dolphin giúp clinic gom lịch và hồ sơ tiếp nhận trên CRM, dùng Care cho FAQ/giờ khám/địa chỉ và thu lead — mọi bước nhạy cảm (chỉ định, tư vấn y khoa sâu) bàn giao người. Không thay bác sĩ; không tự tạo claim điều trị.",
    problemsTitle: "Clinic đang gặp vấn đề gì?",
    problemsLead: "Lịch và tin nhắn nhiều; thông tin nhạy cần kiểm soát.",
    problems: [
      {
        title: "Hỏi giờ khám / địa chỉ lặp",
        body: "Lễ tân trả lời cùng nội dung mỗi ngày.",
      },
      {
        title: "Lịch khám phân tán",
        body: "Book Zalo dễ trùng hoặc quên nhắc.",
      },
      {
        title: "Sợ bot trả lời sai chuyên môn",
        body: "Cần guardrail và chuyển người rõ ràng.",
      },
    ],
    solutionsTitle: "Dolphin giải quyết phần nào?",
    careTitle: "Dolphin Care giúp gì?",
    careBody:
      "FAQ hành chính, giờ làm việc, chỉ đường, thu lead; từ chối / chuyển người ngoài knowledge y khoa đã duyệt.",
    crmTitle: "CRM giúp gì?",
    crmBody:
      "Lịch hẹn, thông tin liên hệ, ghi chú tiếp nhận nội bộ (theo phạm vi triển khai).",
    automationTitle: "Automation / Ops giúp gì?",
    automationBody:
      "Nhắc việc follow-up hành chính; bước nhạy có người duyệt trước khi chạy.",
    webTitle: "Website giúp gì?",
    webBody:
      "Thông tin phòng khám + Care cho câu hỏi ngoài giờ trong phạm vi an toàn.",
    workflowTitle: "Workflow mẫu",
    workflow: [
      {
        title: "Khách hỏi ngoài giờ",
        body: "Care trả FAQ đã duyệt; ghi lead.",
      },
      {
        title: "Lễ tân xếp lịch",
        body: "CRM hiển thị slot; xác nhận với khách.",
      },
      {
        title: "Trước giờ hẹn",
        body: "Nhắc nội bộ / quy trình đã cấu hình — không tự kê đơn.",
      },
    ],
    faqTitle: "FAQ — clinic",
    faq: [
      {
        q: "AI có tư vấn điều trị được không?",
        a: "Không thay tư vấn y khoa. Care chỉ trong knowledge hành chính/FAQ đã duyệt; chuyên môn để người.",
      },
      {
        q: "Clinic nhỏ có dùng được không?",
        a: "Có — bắt đầu từ lịch + FAQ; mở rộng Care/Ops khi ổn định quy trình.",
      },
      {
        q: "Dữ liệu khách có kiểm soát không?",
        a: "Triển khai theo phạm vi hợp đồng và chính sách bảo mật site; chi tiết trao đổi khi tư vấn.",
      },
      {
        q: "CRM clinic làm gì?",
        a: "Gom lịch hẹn, hồ sơ liên hệ và follow-up hành chính — không thay phần mềm HIS/EMR bệnh viện nếu ngoài phạm vi.",
      },
      {
        q: "Care trả lời được những gì?",
        a: "Giờ khám, địa chỉ, quy trình đặt lịch, FAQ hành chính đã duyệt. Không kê đơn hay chẩn đoán.",
      },
      {
        q: "Ops có tự nhắc bệnh nhân không?",
        a: "Có thể nhắc nội bộ / quy trình đã cấu hình. Gửi thông báo hàng loạt hoặc bước nhạy cần quyền duyệt — không mặc định tự động y khoa.",
      },
      {
        q: "Có bắt buộc AI không?",
        a: "Không. Nhiều clinic chỉ cần CRM lịch trước; Care khi tin nhắn ngoài giờ nghẽn.",
      },
      {
        q: "Website và bảng giá?",
        a: "Website theo combo CRM khi đủ điều kiện. Mốc giá: /chinh-sach-gia-dolphin-2026/ tab Clinic hoặc /contact/.",
      },
      {
        q: "Khác spa/salon chỗ nào?",
        a: "Cùng họ lịch–khách nhưng ranh giới chuyên môn chặt hơn — Care không vào tư vấn điều trị.",
      },
      {
        q: "Bắt đầu thế nào?",
        a: "Mô tả loại hình clinic, kênh đặt lịch và FAQ được phép công bố qua /contact/. FAQ tổng: /faq/.",
      },
    ],
  }),

  education: page({
    metaTitle: "CRM & AI cho trung tâm giáo dục | Dolphin Software",
    metaDescription:
      "Trung tâm giáo dục: lớp, học viên, lịch và lead từ web/Zalo. Dolphin CRM + Care + Ops — FAQ và workflow.",
    label: "Trung tâm giáo dục",
    h1: "CRM và AI cho trung tâm giáo dục",
    answerTitle: "Dolphin giúp trung tâm giáo dục như thế nào?",
    answerFirst:
      "Dolphin giúp trung tâm gom học viên/lớp/lịch và lead trên CRM (và hệ sinh thái Edu khi phù hợp), Care trả lời khóa học/lịch khai giảng trên web hoặc Zalo, Ops nhắc follow-up tuyển sinh. Không bịa cam kết điểm số hay tỷ lệ đậu.",
    problemsTitle: "Trung tâm đang gặp vấn đề gì?",
    problemsLead: "Lead tuyển sinh và lịch lớp dễ loạn khi lớn nhanh.",
    problems: [
      {
        title: "Lead hỏi khóa học ngoài giờ",
        body: "Phụ huynh/học viên nhắn khi admin offline.",
      },
      {
        title: "Lớp · lịch · sĩ số rời rạc",
        body: "Excel/Zalo khó nhìn chỗ trống và follow-up đóng phí.",
      },
      {
        title: "Nhắc học / tái ghi danh thủ công",
        body: "Phụ thuộc nhớ của từng GV/admin.",
      },
    ],
    solutionsTitle: "Dolphin giải quyết phần nào?",
    careTitle: "Dolphin Care giúp gì?",
    careBody:
      "FAQ khóa học, lịch khai giảng, học phí khung (nếu được phép công bố), thu lead; chuyển tư vấn viên khi cần.",
    crmTitle: "CRM giúp gì?",
    crmBody:
      "Lead, học viên, lớp/lịch và việc follow-up tuyển sinh trên một nền (theo phạm vi gói).",
    automationTitle: "Automation / Ops giúp gì?",
    automationBody:
      "Nhắc gọi lại lead, mở đúng hồ sơ khi team nói việc cần làm.",
    webTitle: "Website giúp gì?",
    webBody:
      "Trang khóa học + Care; combo CRM có thể kèm website.",
    workflowTitle: "Workflow mẫu",
    workflow: [
      {
        title: "Lead hỏi khóa",
        body: "Care trả FAQ; ghi SĐT/phụ huynh.",
      },
      {
        title: "Tư vấn trên CRM",
        body: "Gán pipeline; xếp lớp thử / tư vấn.",
      },
      {
        title: "Sau ghi danh",
        body: "Lịch học và nhắc nội bộ theo quy trình trung tâm.",
      },
    ],
    faqTitle: "FAQ — giáo dục",
    faq: [
      {
        q: "Có phải Dolphin Edu không?",
        a: "Dolphin Edu là ứng hướng lớp/học viên (demo riêng). Trang này mô tả giải pháp CRM · Care · Ops cho trung tâm trên marketing site; chi tiết sản phẩm Edu trao đổi khi phù hợp.",
      },
      {
        q: "AI có thay giáo viên không?",
        a: "Không. Care hỗ trợ tuyển sinh/FAQ; giảng dạy vẫn do người.",
      },
      {
        q: "Xem giá combo ở đâu?",
        a: "Trang chính sách giá — tab Edu — hoặc /contact/.",
      },
      {
        q: "CRM giúp trung tâm việc gì?",
        a: "Gom lead, học viên, lớp/lịch và follow-up tuyển sinh trên một nền theo phạm vi gói — bớt Excel/Zalo rời.",
      },
      {
        q: "Care trả lời học phí được không?",
        a: "Chỉ khi học phí khung được phép công bố và đã nạp knowledge. Không bịa mức giá; câu ngoài phạm vi chuyển tư vấn viên.",
      },
      {
        q: "Ops dùng khi nào?",
        a: "Khi team cần nhắc gọi lại lead hoặc mở đúng hồ sơ bằng cách nói việc trên CRM — sau khi đã có dữ liệu vận hành.",
      },
      {
        q: "Website có kèm không?",
        a: "Thường quyền lợi combo CRM đủ điều kiện. Chi tiết /chinh-sach-gia-dolphin-2026/ tab Edu.",
      },
      {
        q: "Nhiều cơ sở / nhiều lớp?",
        a: "Có thể bàn phạm vi chi nhánh và quyền. Không mặc định mọi gói sẵn cover đa cơ sở phức tạp.",
      },
      {
        q: "Khác dance center chỗ nào?",
        a: "Cùng họ giáo dục/dịch vụ; nhảy có trang /industries/dance-center/ (lịch phòng/studio).",
      },
      {
        q: "Bắt đầu từ đâu?",
        a: "Nói loại hình trung tâm, số lớp và kênh lead qua /contact/ hoặc Zalo. FAQ tổng: /faq/.",
      },
    ],
  }),

  "dance-center": page({
    metaTitle: "CRM & AI cho trung tâm nhảy / dance | Dolphin Software",
    metaDescription:
      "Trung tâm nhảy: lớp, lịch phòng, học viên và lead. Dolphin theo mô hình giáo dục/dịch vụ — CRM + Care; không bịa case KPI.",
    label: "Trung tâm nhảy",
    h1: "CRM và AI cho trung tâm nhảy / dance",
    answerTitle: "Dolphin giúp trung tâm nhảy như thế nào?",
    answerFirst:
      "Trung tâm nhảy cần lịch lớp/phòng, học viên và lead từ web hoặc mạng xã hội. Dolphin hướng CRM + Care + Ops theo nhóm giáo dục/dịch vụ: gom vận hành, trả lời FAQ lịch/học phí khung, nhắc follow-up. Case công khai chi tiết chỉ đăng khi có dữ liệu được duyệt — không bịa số liệu.",
    problemsTitle: "Trung tâm nhảy đang gặp vấn đề gì?",
    problemsLead: "Nhiều lớp · phòng · HV; lead dễ trôi trên chat.",
    problems: [
      {
        title: "Lịch phòng / lớp chồng chéo",
        body: "Book thủ công dễ trùng phòng hoặc giáo viên.",
      },
      {
        title: "Lead hỏi lịch học ngoài giờ",
        body: "Admin không trả lời kịp trên Zalo.",
      },
      {
        title: "Theo dõi HV bảo lưu / đóng phí",
        body: "Thiếu một chỗ nhìn trạng thái.",
      },
    ],
    solutionsTitle: "Dolphin giải quyết phần nào?",
    careTitle: "Dolphin Care giúp gì?",
    careBody:
      "FAQ lịch khai giảng, địa điểm, học phí khung (nếu công bố), thu lead đăng ký.",
    crmTitle: "CRM giúp gì?",
    crmBody:
      "Học viên/lớp/lịch và pipeline tuyển sinh (phạm vi theo gói; có thể kết hợp hướng Edu).",
    automationTitle: "Automation / Ops giúp gì?",
    automationBody:
      "Nhắc follow-up lead và việc nội bộ trên CRM.",
    webTitle: "Website giúp gì?",
    webBody:
      "Trang lớp/lịch + Care; combo có thể kèm website.",
    workflowTitle: "Workflow mẫu",
    workflow: [
      {
        title: "Lead hỏi lớp",
        body: "Care trả FAQ; ghi thông tin liên hệ.",
      },
      {
        title: "Xếp lớp thử",
        body: "CRM/lịch phòng; xác nhận với HV.",
      },
      {
        title: "Theo dõi sau thử",
        body: "Follow-up đóng phí / bảo lưu theo quy trình trung tâm.",
      },
    ],
    faqTitle: "FAQ — dance center",
    faq: [
      {
        q: "Có case study công khai không?",
        a: "Portfolio SMB công khai xem tại /case-studies/ (website · booking · ops). Deal CRM/AI lớp nhảy chỉ lên case khi fact được phép — không bịa KPI.",
      },
      {
        q: "Khác trung tâm ngoại ngữ chỗ nào?",
        a: "Cùng họ giáo dục/dịch vụ (lớp · lịch · HV) nhưng FAQ và lịch phòng/studio đặc thù nhảy.",
      },
      {
        q: "Bắt đầu từ đâu?",
        a: "Nói rõ số cơ sở/lớp và kênh lead — xem bảng giá tab Edu hoặc /contact/.",
      },
      {
        q: "Có phải Dolphin Edu không?",
        a: "Edu là CRM vận hành lớp/HV (demo riêng). Trang này là landing ngành trên marketing site — CRM · Care · Ops; nối Edu khi phù hợp deal.",
      },
      {
        q: "Care giúp tuyển sinh lớp nhảy thế nào?",
        a: "FAQ lịch khai giảng, level, học phí khung (nếu được phép), thu lead; xếp lớp thử và chuyên môn để người.",
      },
      {
        q: "CRM có quản lý phòng tập không?",
        a: "Hướng lịch lớp/HV theo phạm vi. Rule phòng phức tạp bàn khi khóa scope — không hứa TMS studio đầy đủ sẵn.",
      },
      {
        q: "Ops nhắc việc gì?",
        a: "Follow-up sau lớp thử, gọi lại lead, mở đúng hồ sơ khi team nói việc trên CRM.",
      },
      {
        q: "AI thay huấn luyện viên?",
        a: "Không. Care/Ops hỗ trợ vận hành và tuyển sinh; dạy nhảy vẫn do người.",
      },
      {
        q: "Website và giá?",
        a: "Website theo combo khi đủ điều kiện. Mốc: bảng giá tab Edu hoặc /contact/.",
      },
      {
        q: "Nhiều chi nhánh studio?",
        a: "Có thể trao đổi phạm vi chi nhánh. Không mặc định mọi gói đã cover đa cơ sở.",
      },
    ],
  }),

  shop: page({
    metaTitle: "CRM cho shop dịch vụ | Dolphin Software",
    metaDescription:
      "Shop dịch vụ cần lịch, khách và báo cáo gọn. Dolphin CRM + Care + website combo — FAQ.",
    label: "Shop dịch vụ",
    h1: "CRM và chăm sóc khách cho shop dịch vụ",
    answerTitle: "Dolphin giúp shop dịch vụ như thế nào?",
    answerFirst:
      "Shop dịch vụ cần lịch hẹn, khách quay lại và trả lời tin kịp mà không học phần mềm nặng. Dolphin cho thuê CRM theo kỳ, gắn Care khi cần trả lời web/Zalo, Ops khi cần nhắc việc — website theo combo nếu phù hợp.",
    problemsTitle: "Shop đang gặp vấn đề gì?",
    problemsLead: "Vận hành lớn hơn Excel nhưng chưa cần ERP.",
    problems: [
      {
        title: "Lịch và khách trên chat",
        body: "Khó bàn giao ca và xem lịch sử.",
      },
      {
        title: "Hỏi ngoài giờ",
        body: "Mất lead đơn giản (giá, còn chỗ).",
      },
      {
        title: "Báo cáo thủ công",
        body: "Cuối ngày/cuối tuần tổng bằng tay.",
      },
    ],
    solutionsTitle: "Dolphin giải quyết phần nào?",
    careTitle: "Dolphin Care giúp gì?",
    careBody: "FAQ, giờ mở cửa, thu lead, hỗ trợ hỏi lịch trong phạm vi.",
    crmTitle: "CRM giúp gì?",
    crmBody: "Khách · lịch · follow-up · báo cáo cơ bản theo gói.",
    automationTitle: "Automation / Ops giúp gì?",
    automationBody: "Nhắc việc và mở đúng màn khi team nói việc cần làm.",
    webTitle: "Website giúp gì?",
    webBody: "Hiện diện + Care; thường quyền lợi combo CRM.",
    workflowTitle: "Workflow mẫu",
    workflow: [
      { title: "Lead hỏi", body: "Care/FAQ; ghi liên hệ." },
      { title: "Book CRM", body: "Xác nhận lịch với khách." },
      { title: "Sau dịch vụ", body: "Ghi chú + nhắc tái đặt." },
    ],
    faqTitle: "FAQ — shop",
    faq: [
      {
        q: "Khác spa/salon chỗ nào?",
        a: "Cùng họ dịch vụ có lịch; FAQ và gói giá xem tab Shop trên bảng giá.",
      },
      {
        q: "Có cần AI ngay không?",
        a: "Không bắt buộc — có thể chỉ CRM trước.",
      },
      {
        q: "Xem giá ở đâu?",
        a: "/chinh-sach-gia-dolphin-2026/#industry-shop hoặc /contact/.",
      },
      {
        q: "Shop dịch vụ là gì với Dolphin?",
        a: "Cửa hàng/điểm có lịch hẹn hoặc chăm khách lặp (không phải sàn TMĐT lớn). CRM + Care/Ops theo pain thật.",
      },
      {
        q: "CRM giúp shop việc gì?",
        a: "Khách · lịch · follow-up · báo cáo cơ bản theo gói — bàn giao ca rõ hơn chat/Excel.",
      },
      {
        q: "Care trả lời ngoài giờ?",
        a: "Có, trong FAQ/giờ mở/lead đã khóa. Câu ngoài phạm vi chuyển người.",
      },
      {
        q: "Ops khi nào cần?",
        a: "Khi team cần nhắc tái đặt hoặc mở đúng khách bằng chat trên CRM.",
      },
      {
        q: "Website có kèm combo không?",
        a: "Thường quyền lợi combo CRM đủ điều kiện — xem bảng giá Shop; không mặc định mọi gói lẻ.",
      },
      {
        q: "Gắn Zalo được không?",
        a: "Care hỗ trợ Zalo khi nằm trong phạm vi dự án — chi tiết /contact/.",
      },
      {
        q: "Bắt đầu thế nào?",
        a: "Kể loại hình shop, kênh lead và chỗ nghẽn qua /contact/ hoặc Zalo. FAQ tổng: /faq/.",
      },
    ],
  }),

  transport: page({
    metaTitle: "CRM cho vận tải / điều phối | Dolphin Software",
    metaDescription:
      "Đơn · chuyến · khách trên một CRM; Care cho FAQ/lead. Dolphin — không bịa SLA vận tải.",
    label: "Vận tải",
    h1: "CRM và vận hành cho doanh nghiệp vận tải",
    answerTitle: "Dolphin giúp vận tải như thế nào?",
    answerFirst:
      "Dolphin hướng CRM để theo dõi khách/đơn/trạng thái và Care cho FAQ hoặc lead trên web — trong phạm vi triển khai thực tế. Không cam kết SLA giao hàng hay tối ưu tuyến thuật toán nếu chưa nằm trong hợp đồng.",
    problemsTitle: "Đang gặp vấn đề gì?",
    problemsLead: "Trạng thái đơn và khách phân tán trên chat/Excel.",
    problems: [
      {
        title: "Khách hỏi trạng thái liên tục",
        body: "Team trả lời tay, dễ lệch thông tin.",
      },
      {
        title: "Đơn / chuyến khó bàn giao ca",
        body: "Thiếu một chỗ nhìn việc đang mở.",
      },
      {
        title: "Lead báo giá ngoài giờ",
        body: "Mất cơ hội khi không ai trả lời.",
      },
    ],
    solutionsTitle: "Dolphin giải quyết phần nào?",
    careTitle: "Dolphin Care giúp gì?",
    careBody:
      "FAQ dịch vụ, khu vực phủ (nếu công bố), thu lead báo giá; trạng thái đơn chỉ khi đã nối dữ liệu thật.",
    crmTitle: "CRM giúp gì?",
    crmBody:
      "Khách, đơn/việc, follow-up và ghi chú điều phối theo phạm vi gói.",
    automationTitle: "Automation / Ops giúp gì?",
    automationBody:
      "Nhắc việc nội bộ; bước nhạy có duyệt.",
    webTitle: "Website giúp gì?",
    webBody: "Trang dịch vụ + form/Care thu lead.",
    workflowTitle: "Workflow mẫu",
    workflow: [
      { title: "Lead hỏi", body: "Care/FAQ; ghi nhu cầu." },
      { title: "Báo giá người", body: "Team xử lý trên CRM." },
      { title: "Theo dõi việc", body: "Trạng thái và nhắc nội bộ." },
    ],
    faqTitle: "FAQ — vận tải",
    faq: [
      {
        q: "Có phải phần mềm giao hàng chuyên dụng không?",
        a: "Dolphin là CRM/AI/website theo phạm vi dự án — không mặc định là TMS đầy đủ. Nhu cầu chuyên sâu bàn trong tư vấn.",
      },
      {
        q: "Xem giá?",
        a: "Bảng giá tab Vận tải hoặc /contact/.",
      },
      {
        q: "AI tự điều phối tài xế?",
        a: "Không mặc định. Mọi tự động hóa điều phối chỉ khi nằm trong phạm vi đã thống nhất.",
      },
      {
        q: "CRM giúp vận tải việc gì?",
        a: "Theo dõi khách, đơn/việc, follow-up và ghi chú điều phối theo phạm vi gói — bớt lệch thông tin trên chat.",
      },
      {
        q: "Care trả lời trạng thái đơn được không?",
        a: "Chỉ khi đã nối dữ liệu thật và nằm trong knowledge. Không bịa ETA/SLA ngoài hệ thống.",
      },
      {
        q: "Ops làm gì?",
        a: "Nhắc việc nội bộ, mở đúng đơn/khách khi team nói việc; bước nhạy có duyệt.",
      },
      {
        q: "Có cam kết SLA giao hàng không?",
        a: "Không trên trang marketing. SLA chỉ khi ghi trong hợp đồng phạm vi riêng.",
      },
      {
        q: "Website thu lead báo giá?",
        a: "Có — trang dịch vụ + form/Care. Website combo theo điều kiện CRM trên bảng giá.",
      },
      {
        q: "Khác đội sales chỗ nào?",
        a: "Sales nghiêng pipeline deal (/industries/sales/); vận tải nghiêng đơn/trạng thái/điều phối trong phạm vi.",
      },
      {
        q: "Bắt đầu từ đâu?",
        a: "Mô tả loại hình vận tải, kênh lead và pain qua /contact/. FAQ tổng: /faq/.",
      },
    ],
  }),

  sales: page({
    metaTitle: "CRM pipeline & AI cho đội sales | Dolphin Software",
    metaDescription:
      "Lead · deal · follow-up trên CRM; Care thu lead web. Dolphin cho đội sales SMB — FAQ.",
    label: "Sales pipeline",
    h1: "CRM pipeline cho đội sales",
    answerTitle: "Dolphin giúp đội sales như thế nào?",
    answerFirst:
      "Dolphin giúp đội sales giữ lead/deal/follow-up trên CRM (Ops hỗ trợ mở đúng màn khi nói việc), Care thu lead từ website. Phù hợp SMB — không phải Salesforce thay thế doanh nghiệp lớn.",
    problemsTitle: "Đội sales đang gặp vấn đề gì?",
    problemsLead: "Lead trôi trên chat; không biết ai follow đến đâu.",
    problems: [
      {
        title: "Lead không vào pipeline",
        body: "Form/web/Zalo không gom một chỗ.",
      },
      {
        title: "Quên follow-up",
        body: "Phụ thuộc nhớ từng saler.",
      },
      {
        title: "Báo cáo cuối tuần thủ công",
        body: "Khó thấy deal theo giai.",
      },
    ],
    solutionsTitle: "Dolphin giải quyết phần nào?",
    careTitle: "Dolphin Care giúp gì?",
    careBody: "Thu lead và FAQ sản phẩm/dịch vụ trên web trong knowledge đã khóa.",
    crmTitle: "CRM giúp gì?",
    crmBody: "Pipeline, hoạt động, nhắc follow-up — lõi vận hành sales.",
    automationTitle: "Automation / Ops giúp gì?",
    automationBody:
      "Saler nói việc → mở đúng deal/khách; bước nhạy có duyệt.",
    webTitle: "Website giúp gì?",
    webBody: "Landing/thu lead + Care; combo khi kèm CRM.",
    workflowTitle: "Workflow mẫu",
    workflow: [
      { title: "Lead vào", body: "Web/Care hoặc nhập tay vào CRM." },
      { title: "Chạy pipeline", body: "Follow-up theo stage." },
      { title: "Báo cáo", body: "Xem việc mở / won theo phạm vi gói." },
    ],
    faqTitle: "FAQ — sales",
    faq: [
      {
        q: "Có thay CRM enterprise không?",
        a: "Dolphin hướng SMB/dịch vụ. Enterprise phức tạp cần đánh giá riêng.",
      },
      {
        q: "Xem giá?",
        a: "Bảng giá tab Sales pipeline hoặc /contact/.",
      },
      {
        q: "Care có chốt deal giúp không?",
        a: "Care thu lead và FAQ; chốt deal do saler trên CRM.",
      },
      {
        q: "CRM pipeline gồm gì?",
        a: "Lead/deal theo stage, hoạt động và nhắc follow-up — lõi để lead không trôi trên chat.",
      },
      {
        q: "Ops giúp saler thế nào?",
        a: "Saler nói việc → mở đúng deal/khách trên CRM; bước nhạy (gửi hàng loạt, xóa…) có thể cần duyệt.",
      },
      {
        q: "Lead từ website vào đâu?",
        a: "Form/Care thu lead rồi vào CRM theo phạm vi triển khai — không bắt buộc mọi kênh nối sẵn.",
      },
      {
        q: "Có báo cáo doanh số phức tạp không?",
        a: "Báo cáo theo phạm vi gói. Dashboard kiểu enterprise lớn không mặc định — bàn khi tư vấn.",
      },
      {
        q: "Bắt buộc Care/AI không?",
        a: "Không. Có thể chỉ CRM pipeline trước; Care khi cần thu lead web ngoài giờ.",
      },
      {
        q: "Website / landing có kèm không?",
        a: "Theo combo CRM khi đủ điều kiện. Xem bảng giá Sales hoặc /contact/.",
      },
      {
        q: "Bắt đầu thế nào?",
        a: "Nói quy mô đội, kênh lead và stage hiện tại qua /contact/ hoặc Zalo. FAQ tổng: /faq/ · ngành khác: /industries/.",
      },
    ],
  }),
};

export function getIndustryPageCopy(slug: IndustrySlug): IndustryPageCopy {
  return industryPagesVi[slug];
}

export function getIndustriesHubCopy(): IndustriesHubCopy {
  return industriesHubVi;
}
