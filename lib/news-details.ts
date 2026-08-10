import type { Locale } from "@/lib/i18n/types";
import { chuyenDoiAiDoanhNghiepLoTrinh5BuocCopy } from "@/lib/news-articles/chuyen-doi-ai-doanh-nghiep-lo-trinh-5-buoc";
import { dolphinCareBaoCaoInsightHangNgayCopy } from "@/lib/news-articles/dolphin-care-bao-cao-insight-hang-ngay";
import { dolphinCareChatbotAiTangChuyenDoiCopy } from "@/lib/news-articles/dolphin-care-chatbot-ai-tang-chuyen-doi";
import { studioCuoiWebsiteXemVayOnlineCopy } from "@/lib/news-articles/studio-cuoi-website-xem-vay-online";
import { websiteGioiThieuXeShowroomCopy } from "@/lib/news-articles/website-gioi-thieu-xe-showroom";

export const NEWS_CATEGORIES = [
  "process",
  "product",
  "tech",
  "studio",
  "cases",
] as const;

export type NewsCategory = (typeof NEWS_CATEGORIES)[number];

export const NEWS_SLUGS = [
  "chuyen-doi-ai-doanh-nghiep-lo-trinh-5-buoc",
  "dolphin-care-chatbot-ai-tang-chuyen-doi",
  "dolphin-care-bao-cao-insight-hang-ngay",
  "website-gioi-thieu-xe-showroom",
  "studio-cuoi-website-xem-vay-online",
  "5-dau-hieu-website-lam-mat-khach",
] as const;

export type NewsSlug = (typeof NEWS_SLUGS)[number];

export function isNewsSlug(value: string): value is NewsSlug {
  return (NEWS_SLUGS as readonly string[]).includes(value);
}

export type NewsBodyBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "lead"; text: string }
  | { type: "image"; src: string; alt: string };

export type NewsFaqItem = { q: string; a: string };

export type NewsArticleCopy = {
  title: string;
  metaTitle?: string;
  excerpt: string;
  body: NewsBodyBlock[];
  faq?: NewsFaqItem[];
};

export type NewsListItem = {
  slug: NewsSlug;
  category: NewsCategory;
  date: string;
  title: string;
  excerpt: string;
};

export type NewsDetail = NewsListItem & {
  metaTitle?: string;
  body: NewsBodyBlock[];
  faq?: NewsFaqItem[];
  image: string;
};

export type NewsDetailUi = {
  relatedTitle: string;
  cta: string;
  breadcrumbHome: string;
  breadcrumbNews: string;
  readMore: string;
  faqTitle: string;
  shareFacebook: string;
  copyLink: string;
  copied: string;
};

type NewsMeta = {
  category: NewsCategory;
  date: string;
};

const metaBySlug: Record<NewsSlug, NewsMeta> = {
  "chuyen-doi-ai-doanh-nghiep-lo-trinh-5-buoc": {
    category: "process",
    date: "2026-08-10",
  },
  "dolphin-care-chatbot-ai-tang-chuyen-doi": {
    category: "product",
    date: "2026-08-08",
  },
  "dolphin-care-bao-cao-insight-hang-ngay": {
    category: "product",
    date: "2026-08-07",
  },
  "website-gioi-thieu-xe-showroom": {
    category: "cases",
    date: "2026-08-06",
  },
  "studio-cuoi-website-xem-vay-online": {
    category: "cases",
    date: "2026-08-05",
  },
  "5-dau-hieu-website-lam-mat-khach": {
    category: "product",
    date: "2026-08-04",
  },
};

const categoryImages: Record<NewsCategory, string> = {
  process: "/ops-lifecycle.jpg",
  product: "/capabilities/web.jpg",
  tech: "/capabilities/backend.jpg",
  studio: "/contact-visual.jpg",
  cases: "/works/billiard.jpg",
};

const slugImages: Partial<Record<NewsSlug, string>> = {
  "chuyen-doi-ai-doanh-nghiep-lo-trinh-5-buoc":
    "/news/chuyen-doi-ai-cover.jpg",
  "dolphin-care-chatbot-ai-tang-chuyen-doi":
    "/news/dolphin-care-chatbot-ai-tang-chuyen-doi.jpg",
  "dolphin-care-bao-cao-insight-hang-ngay":
    "/news/dolphin-care-bao-cao-insight-hang-ngay.jpg",
  "website-gioi-thieu-xe-showroom":
    "/news/website-gioi-thieu-xe-showroom.jpg",
  "studio-cuoi-website-xem-vay-online":
    "/news/studio-cuoi-website-xem-vay-online.jpg",
  "5-dau-hieu-website-lam-mat-khach": "/news/5-dau-hieu-website-lam-mat-khach.jpg",
};

export function getNewsImage(slug: NewsSlug): string {
  return slugImages[slug] ?? categoryImages[metaBySlug[slug].category];
}

const copyByLocale: Record<Locale, Record<NewsSlug, NewsArticleCopy>> = {
  vi: {
    "chuyen-doi-ai-doanh-nghiep-lo-trinh-5-buoc":
      chuyenDoiAiDoanhNghiepLoTrinh5BuocCopy.vi,
    "dolphin-care-chatbot-ai-tang-chuyen-doi":
      dolphinCareChatbotAiTangChuyenDoiCopy.vi,
    "dolphin-care-bao-cao-insight-hang-ngay":
      dolphinCareBaoCaoInsightHangNgayCopy.vi,
    "website-gioi-thieu-xe-showroom": websiteGioiThieuXeShowroomCopy.vi,
    "studio-cuoi-website-xem-vay-online":
      studioCuoiWebsiteXemVayOnlineCopy.vi,
    "5-dau-hieu-website-lam-mat-khach": {
      title: "5 dấu hiệu website doanh nghiệp đang làm mất khách",
      metaTitle: "5 dấu hiệu website đang làm mất khách hàng",
      excerpt:
        "Website chậm, thiếu CTA, hay không thân thiện mobile đang đẩy khách sang đối thủ. Xem 5 dấu hiệu phổ biến và cách khắc phục cho SMB Việt Nam.",
      body: [
        {
          type: "lead",
          text: "Một website kém hiệu quả không chỉ gây ấn tượng xấu — nó âm thầm đẩy khách hàng tiềm năng sang đối thủ. Năm dấu hiệu phổ biến nhất gồm: tốc độ tải trang chậm, thiếu phiên bản di động, nội dung lỗi thời, không có lời kêu gọi hành động rõ ràng, và thiếu thông tin liên hệ dễ tìm.",
        },
        {
          type: "p",
          text: "Nhiều doanh nghiệp vừa và nhỏ tại Việt Nam đầu tư chi phí quảng cáo đáng kể để kéo người dùng về website — nhưng lại bỏ quên một câu hỏi quan trọng hơn: Khách vào rồi, tại sao họ lại rời đi ngay?",
        },
        {
          type: "p",
          text: "Thực tế, một website hoạt động kém không cần phải trông \"xấu\" để đẩy khách đi. Đôi khi chỉ cần trang load chậm hơn 3 giây, hoặc nút liên hệ bị khuất trên điện thoại — là đủ để khách chọn nhấn nút quay lại và tìm đối thủ của bạn. Theo Google, 53% người dùng di động sẽ rời khỏi trang nếu thời gian tải vượt quá 3 giây.",
        },
        {
          type: "p",
          text: "Bài viết này điểm qua 5 dấu hiệu rõ ràng nhất cho thấy website đang làm mất khách hàng — và gợi ý cụ thể để khắc phục từng vấn đề.",
        },
        {
          type: "h2",
          text: "Dấu hiệu 1: Trang tải chậm, khách không đủ kiên nhẫn chờ",
        },
        {
          type: "p",
          text: "Tốc độ tải trang là yếu tố đầu tiên người dùng cảm nhận — trước cả khi họ đọc một chữ nào trên website của bạn.",
        },
        {
          type: "p",
          text: "Một trang mất hơn 3 giây để hiển thị nội dung sẽ mất đi hơn một nửa lượng truy cập di động. Với doanh nghiệp SMB, điều này thường bắt nguồn từ ảnh chưa được nén, hosting chất lượng thấp, hoặc quá nhiều plugin/script không cần thiết chạy ngầm.",
        },
        {
          type: "p",
          text: "Cách kiểm tra: Dùng Google PageSpeed Insights (miễn phí) để đo điểm hiệu suất cho cả phiên bản desktop lẫn mobile. Điểm dưới 50 là tín hiệu đỏ cần xử lý ngay.",
        },
        {
          type: "p",
          text: "Hướng khắc phục: Nén toàn bộ ảnh về định dạng WebP, bật bộ nhớ đệm trình duyệt (browser caching), và cân nhắc chuyển sang gói hosting có hiệu suất cao hơn. Nếu cần làm mới website, xem quy trình tại /services/web/.",
        },
        {
          type: "h2",
          text: "Dấu hiệu 2: Website không thân thiện với điện thoại di động",
        },
        {
          type: "p",
          text: "Hơn 70% lưu lượng truy cập internet tại Việt Nam đến từ thiết bị di động. Nếu website của bạn vẫn yêu cầu người dùng phóng to, thu nhỏ hoặc vuốt ngang để đọc nội dung — bạn đang mất khách ngay từ những giây đầu tiên.",
        },
        {
          type: "p",
          text: "Dấu hiệu nhận biết rõ nhất: nút bấm quá nhỏ, văn bản bị tràn ra ngoài màn hình, hoặc menu điều hướng không hoạt động trơn tru trên smartphone.",
        },
        {
          type: "p",
          text: "Cách kiểm tra: Mở website trên điện thoại và thử thực hiện một thao tác thực tế — ví dụ tìm số điện thoại, điền form liên hệ, hoặc xem danh mục sản phẩm. Nếu bạn gặp khó khăn, khách hàng cũng vậy.",
        },
        {
          type: "p",
          text: "Hướng khắc phục: Một website được xây dựng theo chuẩn responsive design sẽ tự động điều chỉnh giao diện theo mọi kích thước màn hình — không cần tạo hai phiên bản riêng biệt.",
        },
        {
          type: "h2",
          text: "Dấu hiệu 3: Nội dung lỗi thời hoặc thiếu thông tin cần thiết",
        },
        {
          type: "p",
          text: "Khách hàng truy cập website với mục đích cụ thể: tìm hiểu dịch vụ, so sánh giá, hoặc liên hệ đặt lịch. Nếu họ thấy thông tin từ 2–3 năm trước, bảng giá không còn hiệu lực, hoặc sản phẩm đã ngừng kinh doanh — niềm tin sụp đổ ngay lập tức.",
        },
        {
          type: "p",
          text: "Nội dung lỗi thời còn ảnh hưởng trực tiếp đến thứ hạng tìm kiếm. Google ưu tiên những trang có nội dung được cập nhật thường xuyên, đặc biệt trong các lĩnh vực có tính thời sự cao như bất động sản, nhà hàng, hay dịch vụ sức khỏe.",
        },
        {
          type: "p",
          text: "Cách kiểm tra: Rà soát lại toàn bộ trang dịch vụ, bảng giá, và trang \"Về chúng tôi\". Đặt câu hỏi: Thông tin này còn chính xác không? Khách hàng có thể dựa vào đây để ra quyết định không?",
        },
        {
          type: "p",
          text: "Hướng khắc phục: Ưu tiên xây dựng website có hệ thống quản lý nội dung (CMS) để đội ngũ nội bộ có thể tự cập nhật thông tin mà không cần nhờ đơn vị kỹ thuật mỗi lần.",
        },
        {
          type: "h2",
          text: "Dấu hiệu 4: Không có lời kêu gọi hành động (CTA) rõ ràng",
        },
        {
          type: "p",
          text: "Một website đẹp nhưng không dẫn khách đến bước tiếp theo — cũng giống như một nhân viên tư vấn giỏi nhưng quên đề nghị khách đặt hàng.",
        },
        {
          type: "p",
          text: "Lỗi phổ biến là đặt nút CTA quá nhỏ, dùng màu sắc hòa lẫn vào nền, hoặc chỉ đặt một nút duy nhất ở cuối trang — nơi ít người cuộn đến. Một số website còn có quá nhiều CTA cạnh tranh nhau, khiến khách không biết nên làm gì trước.",
        },
        {
          type: "p",
          text: "Cách kiểm tra: Nhờ người chưa từng dùng website của bạn thực hiện một nhiệm vụ đơn giản: \"Hãy thử liên hệ để được tư vấn.\" Quan sát xem họ có tìm ra đường đi trong vòng 10 giây không.",
        },
        {
          type: "p",
          text: "Hướng khắc phục: Mỗi trang nên có một CTA chính — nổi bật về màu sắc, rõ ràng về hành động, và được đặt ở vị trí người dùng dễ thấy mà không cần cuộn trang. Ví dụ: \"Nhận báo giá ngay\", \"Đặt lịch tư vấn miễn phí\", hoặc \"Xem gói dịch vụ\".",
        },
        {
          type: "h2",
          text: "Dấu hiệu 5: Thông tin liên hệ khó tìm hoặc không đầy đủ",
        },
        {
          type: "p",
          text: "Đây là dấu hiệu đơn giản nhất — nhưng lại xuất hiện ở rất nhiều website SMB Việt Nam. Khách hàng đã quyết định muốn liên hệ, nhưng phải tìm kiếm số điện thoại qua 3–4 trang, hoặc form liên hệ bị lỗi, không gửi được.",
        },
        {
          type: "p",
          text: "Mỗi giây khách phải mất thêm để tìm cách liên hệ là một cơ hội bạn đang để vuột.",
        },
        {
          type: "p",
          text: "Cách kiểm tra: Vào trang web và đặt câu hỏi: Nếu tôi cần gọi điện hoặc nhắn tin ngay bây giờ, tôi làm thế nào trong vòng 5 giây? Nếu câu trả lời không rõ ràng — đó là vấn đề cần sửa.",
        },
        {
          type: "p",
          text: "Hướng khắc phục: Đặt số điện thoại và nút Zalo/Messenger ở header hoặc footer của mọi trang. Với doanh nghiệp có lượng truy cập đều, tích hợp thêm một AI chat — như [Dolphin Care](/dolphin-care/) — giúp trả lời câu hỏi thường gặp và thu thập thông tin khách hàng ngay cả ngoài giờ làm việc.",
        },
        {
          type: "h2",
          text: "Website của bạn đang hoạt động — hay chỉ đang tồn tại?",
        },
        {
          type: "p",
          text: "Có một sự khác biệt rõ ràng giữa một website được xây dựng để chạy và một website chỉ để \"có\". Website hoạt động hiệu quả thu hút đúng người, trả lời đúng câu hỏi, và dẫn khách đến hành động cụ thể — mua hàng, đặt lịch, hoặc để lại thông tin liên hệ.",
        },
        {
          type: "p",
          text: "Nếu website của bạn đang mắc một hoặc nhiều dấu hiệu trên, đây không phải lúc để làm lại từ đầu — mà là lúc để kiểm tra và sửa đúng chỗ.",
        },
        {
          type: "p",
          text: "Dolphin Software cung cấp dịch vụ thiết kế website cho doanh nghiệp SMB và startup Việt Nam: từ landing page chạy chiến dịch, website doanh nghiệp chuẩn SEO, đến web app với luồng đặt lịch và thanh toán tích hợp. Quy trình làm việc rõ ràng từ khảo sát đến bàn giao — không phát sinh ngoài phạm vi đã thống nhất.",
        },
        {
          type: "p",
          text: "[Nhận báo giá miễn phí tại dolphin-software.io.vn](/#contact)",
        },
      ],
      faq: [
        {
          q: "Website doanh nghiệp cần cập nhật lại sau bao lâu?",
          a: "Không có con số cố định, nhưng thông thường nên rà soát toàn bộ nội dung mỗi 6–12 tháng. Những trang có thông tin thay đổi thường xuyên như giá dịch vụ, sản phẩm, hoặc khuyến mãi cần được cập nhật ngay khi có thay đổi thực tế.",
        },
        {
          q: "Làm thế nào để biết website đang làm mất khách ở bước nào?",
          a: "Cài Google Analytics 4 và theo dõi chỉ số bounce rate (tỷ lệ thoát) theo từng trang. Trang nào có tỷ lệ thoát cao bất thường — trên 70–80% — là trang cần ưu tiên kiểm tra và cải thiện trước.",
        },
        {
          q: "Chi phí làm lại website tốn bao nhiêu?",
          a: "Phụ thuộc vào phạm vi dự án. Một landing page đơn giản có thể hoàn thiện trong 3–5 ngày với chi phí khởi điểm từ khoảng 38 USD. Website doanh nghiệp đầy đủ thường mất 7–14 ngày. Dolphin Software cung cấp báo giá rõ ràng theo phạm vi tại /services/web/ — không phát sinh ngoài thỏa thuận ban đầu.",
        },
        {
          q: "Website đã có rồi có cần làm lại hoàn toàn không, hay chỉ cần sửa?",
          a: "Không phải lúc nào cũng cần làm lại từ đầu. Nếu cấu trúc hiện tại còn dùng được, đôi khi chỉ cần tối ưu tốc độ, cập nhật giao diện mobile, và sắp xếp lại CTA là đủ để cải thiện đáng kể. Đánh giá từng trường hợp cụ thể sẽ cho kết quả chính xác hơn.",
        },
        {
          q: "Dolphin Care là gì và có phù hợp với SMB không?",
          a: "Dolphin Care là AI chat tích hợp trực tiếp lên website, được huấn luyện theo nội dung và quy trình của từng doanh nghiệp. Thay vì chỉ trả lời FAQ theo kịch bản cố định, Dolphin Care có thể thu thập thông tin khách hàng, trả lời câu hỏi về dịch vụ, và chuyển tiếp sang người thực khi cần — phù hợp với SMB muốn giảm khối lượng xử lý thủ công mà không cần thuê thêm nhân sự. Xem thêm tại /dolphin-care/.",
        },
      ],
    },
  },
  en: {
    "chuyen-doi-ai-doanh-nghiep-lo-trinh-5-buoc":
      chuyenDoiAiDoanhNghiepLoTrinh5BuocCopy.en,
    "dolphin-care-chatbot-ai-tang-chuyen-doi":
      dolphinCareChatbotAiTangChuyenDoiCopy.en,
    "dolphin-care-bao-cao-insight-hang-ngay":
      dolphinCareBaoCaoInsightHangNgayCopy.en,
    "website-gioi-thieu-xe-showroom": websiteGioiThieuXeShowroomCopy.en,
    "studio-cuoi-website-xem-vay-online":
      studioCuoiWebsiteXemVayOnlineCopy.en,
    "5-dau-hieu-website-lam-mat-khach": {
      title: "5 signs your business website is losing customers",
      metaTitle: "5 signs your website is losing customers",
      excerpt:
        "Slow load times, weak CTAs, or poor mobile UX push visitors to competitors. Five common signs and practical fixes for SMBs.",
      body: [
        {
          type: "lead",
          text: "A weak website does not just look bad — it quietly sends prospects to your competitors. The five most common signs: slow page speed, poor mobile experience, outdated content, unclear calls to action, and hard-to-find contact details.",
        },
        {
          type: "p",
          text: "Many SMBs spend heavily on ads to drive traffic — but skip the harder question: why do visitors leave as soon as they arrive?",
        },
        {
          type: "p",
          text: "Google reports that 53% of mobile users abandon a page that takes longer than three seconds to load. A hidden contact button on phone can be enough to send someone back to search results.",
        },
        {
          type: "h2",
          text: "Sign 1: Slow pages",
        },
        {
          type: "p",
          text: "Speed is the first thing users feel. Run PageSpeed Insights on desktop and mobile; scores below 50 need attention. Compress images to WebP, enable caching, and review hosting. See /services/web/ if you need a rebuild.",
        },
        {
          type: "h2",
          text: "Sign 2: Not mobile-friendly",
        },
        {
          type: "p",
          text: "Most traffic in Vietnam is mobile. If users must pinch-zoom or scroll sideways, you lose them in seconds. Test real tasks on a phone — find a phone number, submit a form, browse products.",
        },
        {
          type: "h2",
          text: "Sign 3: Outdated content",
        },
        {
          type: "p",
          text: "Old pricing, discontinued products, or stale service pages destroy trust and hurt SEO. Audit service pages every 6–12 months; update pricing and promos as soon as they change.",
        },
        {
          type: "h2",
          text: "Sign 4: Weak CTAs",
        },
        {
          type: "p",
          text: "One primary action per page — visible without scrolling. Ask someone unfamiliar with your site to contact you in under ten seconds; watch where they get stuck.",
        },
        {
          type: "h2",
          text: "Sign 5: Contact info is buried",
        },
        {
          type: "p",
          text: "Put phone, Zalo, and a clear form in header or footer on every page. [Dolphin Care](/dolphin-care/) can answer FAQs and capture leads after hours.",
        },
        {
          type: "h2",
          text: "Running — or just existing?",
        },
        {
          type: "p",
          text: "You may not need a full rebuild — often speed, mobile layout, and CTA placement are enough. Dolphin Software builds SEO-ready sites for Vietnamese SMBs with clear scope from discovery to handover.",
        },
        {
          type: "p",
          text: "[Get a free quote](/#contact)",
        },
      ],
      faq: [
        {
          q: "How often should a business website be updated?",
          a: "Review core content every 6–12 months; update pricing and promos whenever they change in real life.",
        },
        {
          q: "How do I find where visitors drop off?",
          a: "Use Google Analytics 4 and watch bounce rate by page. Pages above 70–80% deserve a closer look first.",
        },
        {
          q: "How much does a new website cost?",
          a: "Scope-dependent. A simple landing page can ship in 3–5 days from around USD 38; a full business site often takes 7–14 days. See /services/web/ for transparent quotes.",
        },
        {
          q: "Full rebuild or patch what exists?",
          a: "If the structure still works, speed, mobile UX, and CTA fixes often move the needle without starting over.",
        },
        {
          q: "What is Dolphin Care?",
          a: "On-site AI chat trained on your content and process — FAQs, lead capture, handoff to humans when needed. Details at /dolphin-care/.",
        },
      ],
    },
  },
  ja: {
    "chuyen-doi-ai-doanh-nghiep-lo-trinh-5-buoc":
      chuyenDoiAiDoanhNghiepLoTrinh5BuocCopy.ja,
    "dolphin-care-chatbot-ai-tang-chuyen-doi":
      dolphinCareChatbotAiTangChuyenDoiCopy.ja,
    "dolphin-care-bao-cao-insight-hang-ngay":
      dolphinCareBaoCaoInsightHangNgayCopy.ja,
    "website-gioi-thieu-xe-showroom": websiteGioiThieuXeShowroomCopy.ja,
    "studio-cuoi-website-xem-vay-online":
      studioCuoiWebsiteXemVayOnlineCopy.ja,
    "5-dau-hieu-website-lam-mat-khach": {
      title: "企業サイトが見込み客を失う5つのサイン",
      metaTitle: "Webサイトが客を逃す5つの兆候",
      excerpt:
        "表示が遅い、CTAが弱い、モバイル非対応——よくある5つのサインと、SMB向けの改善のヒント。",
      body: [
        {
          type: "lead",
          text: "弱いWebサイトは見た目だけの問題ではありません。表示速度、モバイル対応、古いコンテンツ、不明確なCTA、連絡先の見つけにくさ——この5つが、静かに競合へユーザーを送ります。",
        },
        {
          type: "p",
          text: "広告で流入を増やしても、「なぜすぐ離脱するのか」を見ないSMBは多いです。Googleによると、モバイルで3秒超の読み込みで53%が離脱します。",
        },
        {
          type: "h2",
          text: "サイン1：表示が遅い",
        },
        {
          type: "p",
          text: "PageSpeed Insightsで計測。50点未満は要対応。画像圧縮・キャッシュ・ホスティング見直し。作り直しは /services/web/ を参照。",
        },
        {
          type: "h2",
          text: "サイン2：モバイル非対応",
        },
        {
          type: "p",
          text: "ピンチズームや横スクロールが必要なら即離脱。実機で電話番号検索・フォーム送信を試してください。",
        },
        {
          type: "h2",
          text: "サイン3：古いコンテンツ",
        },
        {
          type: "p",
          text: "料金・サービス情報は6〜12か月ごとに棚卸し。変更があれば即更新。",
        },
        {
          type: "h2",
          text: "サイン4：CTAが弱い",
        },
        {
          type: "p",
          text: "各ページに主要アクションを1つ。スクロールなしで見える位置に。",
        },
        {
          type: "h2",
          text: "サイン5：連絡先が見つけにくい",
        },
        {
          type: "p",
          text: "ヘッダー／フッターに電話・Zalo・フォーム。[Dolphin Care](/dolphin-care/) で時間外もFAQ対応。",
        },
        {
          type: "p",
          text: "[無料見積もり](/#contact)",
        },
      ],
      faq: [
        {
          q: "更新頻度は？",
          a: "6〜12か月ごとの全体見直し。料金・キャンペーンは変更時に即更新。",
        },
        {
          q: "離脱箇所の特定は？",
          a: "GA4の直帰率。70〜80%超のページから優先改善。",
        },
        {
          q: "費用の目安は？",
          a: "LPは3〜5日・約38 USD〜。本格サイトは7〜14日。/services/web/ で見積。",
        },
        {
          q: "全面作り直しは必要？",
          a: "構造が生きていれば速度・モバイル・CTA改善で十分なことも多い。",
        },
        {
          q: "Dolphin Careとは？",
          a: "サイト埋め込みAIチャット。FAQ・リード取得・有人引き継ぎ。/dolphin-care/",
        },
      ],
    },
  },
};

export function getNewsDetail(locale: Locale, slug: NewsSlug): NewsDetail {
  const meta = metaBySlug[slug];
  const copy = copyByLocale[locale][slug];
  return {
    slug,
    category: meta.category,
    date: meta.date,
    title: copy.title,
    metaTitle: copy.metaTitle,
    excerpt: copy.excerpt,
    body: copy.body,
    faq: copy.faq,
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
  const bodyText = copy.body
    .map((block) => ("text" in block ? block.text : ""))
    .join("");
  const faqText = (copy.faq ?? []).map((item) => item.q + item.a).join("");
  const chars = (copy.excerpt + bodyText + faqText).replace(/\s+/g, "").length;
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
    locale === "vi" ? "vi-VN" : locale === "ja" ? "ja-JP" : "en-US";
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
    faqTitle: "Câu hỏi thường gặp",
    shareFacebook: "Chia sẻ Facebook",
    copyLink: "Sao chép liên kết",
    copied: "Đã sao chép",
  },
  en: {
    relatedTitle: "Related",
    cta: "Want to talk about a project?",
    breadcrumbHome: "Home",
    breadcrumbNews: "News",
    readMore: "Read more",
    faqTitle: "FAQ",
    shareFacebook: "Share on Facebook",
    copyLink: "Copy link",
    copied: "Copied",
  },
  ja: {
    relatedTitle: "関連記事",
    cta: "プロジェクトについて話しませんか？",
    breadcrumbHome: "ホーム",
    breadcrumbNews: "ニュース",
    readMore: "続きを読む",
    faqTitle: "よくある質問",
    shareFacebook: "Facebookでシェア",
    copyLink: "リンクをコピー",
    copied: "コピーしました",
  },
};

export function getNewsDetailUi(locale: Locale): NewsDetailUi {
  return detailUi[locale];
}
