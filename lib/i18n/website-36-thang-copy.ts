/** VI SoT — Facebook ads experiment LP `/website-36-thang/`. */

export type Website36Need =
  | "new"
  | "upgrade"
  | "unsure";

export type Website36ThangCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  support: string;
  ctaConsult: string;
  ctaQuote: string;
  ctaInline: string;
  heroHighlights: { value: string; label: string }[];
  images: {
    hero: { src: string; alt: string };
    problem: { src: string; alt: string };
    blog: { src: string; alt: string };
    deliverables: { src: string; alt: string };
    process: { src: string; alt: string };
  };
  offer: {
    id: string;
    title: string;
    items: string[];
  };
  problem: {
    id: string;
    title: string;
    paragraphs: string[];
  };
  blog: {
    id: string;
    title: string;
    intro: string[];
    pillarsTitle: string;
    pillars: { title: string; body: string }[];
    disclaimer: string;
  };
  deliverables: {
    id: string;
    title: string;
    items: { title: string; body: string }[];
  };
  process: {
    id: string;
    title: string;
    steps: { title: string; body: string }[];
  };
  audience: {
    id: string;
    title: string;
    intro: string;
    items: string[];
    outro: string;
  };
  why: {
    id: string;
    title: string;
    intro: string;
    items: { title: string; body: string }[];
  };
  faq: {
    id: string;
    title: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    id: string;
    title: string;
    support: string;
  };
  form: {
    id: string;
    title: string;
    support: string;
    name: string;
    company: string;
    phone: string;
    email: string;
    need: string;
    needOptions: { value: Website36Need; label: string }[];
    message: string;
    messageOptional: string;
    submit: string;
    sent: string;
    sendError: string;
    footnote: string;
    errors: {
      name: string;
      company: string;
      phone: string;
      email: string;
      need: string;
    };
  };
};

export const website36ThangCopyVi: Website36ThangCopy = {
  metaTitle: "Thiết Kế Website + 36 Tháng Bảo Hành | Dolphin Software",
  metaDescription:
    "Thiết kế website doanh nghiệp cùng Dolphin Software. Bảo hành kỹ thuật 36 tháng và tối đa 36 bài blog trong 3 tháng đầu. Nhận tư vấn.",
  eyebrow: "Website doanh nghiệp",
  headline: "Website không nên kết thúc ở ngày bàn giao",
  support:
    "Dolphin Software thiết kế website doanh nghiệp — kèm bảo hành kỹ thuật 36 tháng và tối đa 36 bài blog định hướng SEO/GEO trong 3 tháng đầu. Để website không chỉ hoàn thiện về mặt kỹ thuật, mà còn sẵn sàng để hoạt động.",
  ctaConsult: "Nhận tư vấn website",
  ctaQuote: "Nhận báo giá",
  ctaInline: "Trao đổi với chúng tôi",
  heroHighlights: [
    { value: "36", label: "tháng bảo hành kỹ thuật" },
    { value: "36", label: "bài blog trong 3 tháng đầu" },
  ],
  images: {
    hero: {
      src: "/website-36-thang/hero.jpg",
      alt: "Bàn làm việc doanh nghiệp với laptop mở website doanh nghiệp sạch sẽ",
    },
    problem: {
      src: "/website-36-thang/problem.jpg",
      alt: "Website đã bàn giao nhưng thiếu nội dung và hỗ trợ tiếp theo",
    },
    blog: {
      src: "/website-36-thang/blog.jpg",
      alt: "Lịch nội dung blog và bản thảo bài viết cho website doanh nghiệp",
    },
    deliverables: {
      src: "/website-36-thang/deliverables.jpg",
      alt: "Các hạng mục bàn giao: website, bảo hành, blog, hỗ trợ và phạm vi rõ",
    },
    process: {
      src: "/website-36-thang/process.jpg",
      alt: "Quy trình bảy bước từ tư vấn đến hỗ trợ kỹ thuật liên tục",
    },
  },
  offer: {
    id: "offer",
    title: "Những gì có trong gói dịch vụ",
    items: [
      "Bảo hành kỹ thuật 36 tháng sau ngày bàn giao",
      "Tối đa 36 bài blog trong 3 tháng đầu — 3 bài/tuần, mỗi bài 1.000–2.000 từ",
      "Định hướng SEO/GEO — nội dung phù hợp với lĩnh vực, sản phẩm/dịch vụ và khách hàng mục tiêu của doanh nghiệp",
      "Website responsive với CMS hoặc phương án quản trị phù hợp",
      "Bàn giao minh bạch theo phạm vi dự án đã thỏa thuận",
      "Hỗ trợ sau bàn giao — không biến mất sau khi bàn giao",
    ],
  },
  problem: {
    id: "problem",
    title: "Vấn đề không kết thúc khi website được bàn giao",
    paragraphs: [
      "Nhiều doanh nghiệp nhận bàn giao website rồi... không biết làm gì tiếp theo.",
      "Không có nội dung. Không có kế hoạch blog. Không có ai hỗ trợ khi website gặp sự cố. Đơn vị thiết kế đã nhận đủ tiền và chuyển sang dự án khác.",
      "Kết quả: website đẹp, nhưng không hoạt động hiệu quả. Không có nội dung để Google lập chỉ mục. Không có thông tin để khách hàng tìm thấy doanh nghiệp. Không có ai xử lý khi lỗi phát sinh.",
      "Đây không phải lỗi của riêng đơn vị nào — đó là cách mà phần lớn thị trường đang vận hành. Dolphin Software chọn cách tiếp cận khác.",
    ],
  },
  blog: {
    id: "blog",
    title: "36 bài blog trong 3 tháng đầu — tại sao điều này quan trọng",
    intro: [
      "Tối đa 36 bài blog, với lịch đăng 3 bài/tuần trong 3 tháng đầu sau bàn giao, không phải để \"viết cho đủ số lượng.\"",
      "Mục tiêu thực tế là giúp website của bạn có nội dung ngay từ đầu — thay vì bắt đầu với một trang trống.",
      "Mỗi bài viết được xây dựng dựa trên:",
    ],
    pillarsTitle: "Mỗi bài viết dựa trên",
    pillars: [
      {
        title: "Lĩnh vực kinh doanh của bạn",
        body: "Không dùng nội dung chung chung, không áp dụng template cho mọi ngành.",
      },
      {
        title: "Sản phẩm và dịch vụ cụ thể",
        body: "Nội dung phản ánh đúng những gì doanh nghiệp bạn cung cấp.",
      },
      {
        title: "Khách hàng mục tiêu",
        body: "Viết cho người sẽ đọc, không viết để đối phó với thuật toán.",
      },
      {
        title: "Định hướng SEO/GEO",
        body: "Cấu trúc bài viết và từ khóa được lên kế hoạch có chủ đích.",
      },
    ],
    disclaimer:
      "Chúng tôi không cam kết thứ hạng Google hay mức tăng trưởng traffic cụ thể. Chúng tôi cam kết bàn giao nội dung chất lượng, đúng lịch, phù hợp với doanh nghiệp của bạn.",
  },
  deliverables: {
    id: "deliverables",
    title: "Bạn nhận được gì",
    items: [
      {
        title: "Website hoàn chỉnh",
        body: "Thiết kế theo yêu cầu, responsive trên mọi thiết bị, tích hợp CMS hoặc phương án quản trị phù hợp với quy mô và đội ngũ của bạn.",
      },
      {
        title: "Bảo hành kỹ thuật 36 tháng",
        body: "Trong 36 tháng sau bàn giao, các lỗi kỹ thuật thuộc phạm vi dự án sẽ được xử lý mà không phát sinh chi phí thêm.",
      },
      {
        title: "Tối đa 36 bài blog",
        body: "Nội dung viết chuyên biệt cho ngành của bạn, định hướng SEO/GEO, bàn giao theo lịch 3 bài/tuần trong 3 tháng đầu.",
      },
      {
        title: "Hỗ trợ sau bàn giao",
        body: "Đội ngũ Dolphin tiếp tục đồng hành sau khi dự án kết thúc — để bạn không phải tự xoay sở khi phát sinh vấn đề.",
      },
      {
        title: "Bàn giao minh bạch",
        body: "Phạm vi dự án, tiến độ và các hạng mục bàn giao được xác định rõ từ đầu. Không có điều khoản mơ hồ, không có chi phí ẩn.",
      },
    ],
  },
  process: {
    id: "process",
    title: "Quy trình làm việc",
    steps: [
      {
        title: "Trao đổi nhu cầu",
        body: "Chúng tôi lắng nghe mục tiêu kinh doanh, đối tượng khách hàng và yêu cầu cụ thể của bạn trước khi đề xuất bất kỳ giải pháp nào.",
      },
      {
        title: "Đề xuất phạm vi dự án",
        body: "Dựa trên thông tin trao đổi, chúng tôi đưa ra đề xuất phạm vi cụ thể — bao gồm cấu trúc website, tính năng, lịch trình và chi phí.",
      },
      {
        title: "Thiết kế và phát triển",
        body: "Quá trình thiết kế và lập trình được thực hiện theo phạm vi đã thỏa thuận, với các mốc cập nhật tiến độ rõ ràng.",
      },
      {
        title: "Bàn giao website",
        body: "Website được kiểm tra kỹ trước khi bàn giao. Bạn nhận đầy đủ quyền truy cập, tài liệu hướng dẫn và thông tin cần thiết để vận hành.",
      },
      {
        title: "Lên kế hoạch nội dung",
        body: "Sau bàn giao website, chúng tôi làm việc cùng bạn để xác định chủ đề, từ khóa và định hướng cho 36 bài blog dựa trên ngành và khách hàng mục tiêu của doanh nghiệp.",
      },
      {
        title: "Triển khai blog (3 bài/tuần)",
        body: "Nội dung được bàn giao đều đặn theo lịch trong 3 tháng đầu. Bạn review và phê duyệt trước khi đăng.",
      },
      {
        title: "Hỗ trợ kỹ thuật liên tục",
        body: "Bảo hành kỹ thuật 36 tháng có hiệu lực ngay từ ngày bàn giao website. Đội ngũ Dolphin tiếp tục hỗ trợ khi bạn cần.",
      },
    ],
  },
  audience: {
    id: "audience",
    title: "Dịch vụ này phù hợp với ai",
    intro: "Gói dịch vụ này được thiết kế cho:",
    items: [
      "Doanh nghiệp SMB và startup chuẩn bị làm website mới hoặc nâng cấp website hiện tại",
      "Doanh nghiệp có website cũ, ít nội dung và cần xây dựng lại từ nền tảng vững hơn",
      "Doanh nghiệp chưa có đội ngũ content hoặc SEO và muốn có nội dung bài bản ngay từ đầu",
      "Sales team cần website hỗ trợ bán hàng — không chỉ là trang giới thiệu công ty",
      "Người ra quyết định muốn sự rõ ràng — biết mình đang nhận được gì, không phải đoán",
    ],
    outro:
      "Nếu bạn cần một đơn vị hoàn thành dự án rồi chuyển sang khách hàng tiếp theo, chúng tôi có thể không phải lựa chọn phù hợp nhất. Nếu bạn cần đối tác đồng hành sau bàn giao, hãy nói chuyện với chúng tôi.",
  },
  why: {
    id: "why",
    title: "Tại sao chọn Dolphin Software",
    intro: "Không phải vì chúng tôi lớn nhất. Mà vì chúng tôi làm theo cách khác.",
    items: [
      {
        title: "Phạm vi rõ ràng từ đầu",
        body: "Mọi hạng mục đều được xác định trước khi bắt đầu — không có chi phí phát sinh bất ngờ, không có thỏa thuận miệng.",
      },
      {
        title: "Bảo hành thực sự, không phải hứa hẹn",
        body: "36 tháng bảo hành kỹ thuật được ghi rõ trong hợp đồng — không phải điều khoản mơ hồ để đối phó.",
      },
      {
        title: "Nội dung viết bởi người hiểu ngành của bạn",
        body: "Chúng tôi không dùng template có sẵn. Mỗi bài blog được nghiên cứu và viết riêng cho lĩnh vực, sản phẩm và khách hàng mục tiêu của doanh nghiệp bạn.",
      },
      {
        title: "Hỗ trợ sau bàn giao có thực",
        body: "Khi website gặp sự cố sau khi ra mắt, bạn không phải tự tìm cách xử lý.",
      },
    ],
  },
  faq: {
    id: "faq",
    title: "Câu hỏi thường gặp",
    items: [
      {
        q: "Bảo hành 36 tháng bao gồm những gì?",
        a: "Bảo hành kỹ thuật bao gồm các lỗi phát sinh từ quá trình thiết kế và lập trình trong phạm vi dự án đã thỏa thuận. Các yêu cầu thay đổi tính năng hoặc bổ sung ngoài phạm vi ban đầu sẽ được trao đổi và báo giá riêng.",
      },
      {
        q: "36 bài blog có được đăng lên website luôn không?",
        a: "Chúng tôi bàn giao nội dung theo lịch. Việc đăng bài lên website có thể do đội ngũ của bạn thực hiện, hoặc chúng tôi hỗ trợ nếu được yêu cầu — tùy thuộc vào thỏa thuận cụ thể trong từng dự án.",
      },
      {
        q: "Nội dung blog có đảm bảo tăng thứ hạng Google không?",
        a: "Không. Chúng tôi không cam kết thứ hạng tìm kiếm hay mức tăng trưởng traffic cụ thể. Chúng tôi cam kết bàn giao nội dung chất lượng, có cấu trúc rõ ràng, phù hợp với định hướng SEO/GEO và lĩnh vực của bạn.",
      },
      {
        q: "Tôi cần chuẩn bị gì trước khi bắt đầu?",
        a: "Thông tin về doanh nghiệp, sản phẩm/dịch vụ, đối tượng khách hàng và mục tiêu của website là những gì chúng tôi cần để bắt đầu. Chúng tôi sẽ hướng dẫn cụ thể trong buổi trao đổi đầu tiên.",
      },
      {
        q: "Gói dịch vụ này có phù hợp nếu tôi đã có website và chỉ muốn nâng cấp không?",
        a: "Có. Chúng tôi làm việc với cả dự án website mới lẫn nâng cấp website hiện tại. Phạm vi cụ thể sẽ được xác định sau khi trao đổi nhu cầu.",
      },
      {
        q: "Tôi có thể xem mẫu website đã thực hiện không?",
        a: "Có. Vui lòng liên hệ để chúng tôi gửi portfolio phù hợp với lĩnh vực của bạn.",
      },
      {
        q: "Thời gian hoàn thành một dự án website thường là bao lâu?",
        a: "Tùy vào phạm vi và mức độ phức tạp của dự án. Thông thường, một website doanh nghiệp cơ bản đến trung bình mất từ 4 đến 8 tuần từ lúc xác nhận phạm vi đến bàn giao. Lịch trình cụ thể sẽ được thỏa thuận trong hợp đồng.",
      },
      {
        q: "Chi phí dịch vụ là bao nhiêu?",
        a: "Chi phí phụ thuộc vào phạm vi dự án — số trang, tính năng, mức độ tùy chỉnh và yêu cầu kỹ thuật. Điền form bên dưới để nhận báo giá phù hợp với nhu cầu của bạn.",
      },
    ],
  },
  finalCta: {
    id: "final-cta",
    title: "Bạn đang chuẩn bị làm website?",
    support:
      "Nếu bạn muốn hiểu rõ những gì doanh nghiệp mình thực sự cần trước khi quyết định, hãy để chúng tôi trao đổi trực tiếp. Không có cam kết, không có áp lực. Chỉ là cuộc trò chuyện thực tế về dự án của bạn.",
  },
  form: {
    id: "lead-form",
    title: "Để lại thông tin — chúng tôi sẽ liên hệ trong 24 giờ làm việc",
    support:
      "Tư vấn thiết kế website doanh nghiệp. Điền thông tin bên dưới để nhận tư vấn hoặc báo giá phù hợp với nhu cầu của bạn.",
    name: "Họ và tên",
    company: "Tên doanh nghiệp",
    phone: "Số điện thoại",
    email: "Email",
    need: "Bạn đang cần",
    needOptions: [
      { value: "new", label: "Làm website mới" },
      { value: "upgrade", label: "Nâng cấp website hiện tại" },
      { value: "unsure", label: "Chưa chắc, cần tư vấn" },
    ],
    message: "Mô tả ngắn về nhu cầu của bạn",
    messageOptional: "(không bắt buộc)",
    submit: "Gửi yêu cầu tư vấn",
    sent: "Đã nhận yêu cầu — Dolphin Software sẽ liên hệ trong 24 giờ làm việc.",
    sendError: "Gửi chưa thành công. Vui lòng thử lại hoặc liên hệ Zalo.",
    footnote:
      "Sau khi gửi form, bạn sẽ nhận được xác nhận qua email. Đội ngũ Dolphin Software sẽ liên hệ với bạn trong vòng 24 giờ làm việc.",
    errors: {
      name: "Vui lòng nhập họ và tên",
      company: "Vui lòng nhập tên doanh nghiệp",
      phone: "Vui lòng nhập số điện thoại",
      email: "Vui lòng nhập email hợp lệ",
      need: "Vui lòng chọn nhu cầu",
    },
  },
};

export function getWebsite36ThangCopy(): Website36ThangCopy {
  return website36ThangCopyVi;
}
