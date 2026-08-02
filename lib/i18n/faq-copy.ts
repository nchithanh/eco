import type { Locale } from "./types";

export type FaqItem = { q: string; a: string };

export type FaqCopy = {
  eyebrow: string;
  title: string;
  support: string;
  items: FaqItem[];
};

const vi: FaqCopy = {
  eyebrow: "FAQ",
  title: "Câu hỏi [[thường gặp]]",
  support: "Timeline · báo giá · bảo hành · bảo mật — trả lời trước khi bắt đầu.",
  items: [
      {
          "q": "Dolphin Software làm gì?",
          "a": "Dolphin Software giúp doanh nghiệp vừa và nhỏ (SMB) đi từ vấn đề kinh doanh đến hệ thống có thể vận hành — website, mobile, automation và AI. Bạn chỉ cần nêu mục tiêu; Dolphin Software đề xuất phạm vi phù hợp."
      },
      {
          "q": "Doanh nghiệp không rành kỹ thuật có làm việc được không?",
          "a": "Được. Hầu hết khách hàng của Dolphin Software không biết lập trình. Bạn chỉ cần chia sẻ ý tưởng hoặc brief ngắn — đội ngũ xác định phạm vi bằng ngôn ngữ kinh doanh, bàn giao end-to-end và hướng dẫn vận hành sau khi xong."
      },
      {
          "q": "Quy trình làm việc diễn ra như thế nào?",
          "a": "Làm rõ mục tiêu → Khóa phạm vi & dự toán → Sprint có sản phẩm bàn giao → Nghiệm thu → Bàn giao & Hỗ trợ. Bạn luôn biết bước tiếp theo là gì."
      },
      {
          "q": "Báo giá hoạt động như thế nào? Có phí ẩn không?",
          "a": "Gửi brief ngắn qua Contact, 'Nhận báo giá' hoặc Zalo. Dolphin Software phản hồi với phạm vi dự kiến và bước tiếp theo — không có phí ngoài phạm vi đã thỏa thuận."
      },
      {
          "q": "Timeline điển hình là bao lâu?",
          "a": "Landing page: ~3–5 ngày. Website doanh nghiệp: ~7–14 ngày. Shop / e-commerce: ~3–4 tuần. App / workflow: theo phạm vi. Ngày cụ thể có trong báo giá sau khi khóa phạm vi."
      },
      {
          "q": "Có bao gồm SEO và mobile không?",
          "a": "Responsive theo mặc định với heading/meta rõ ràng và SEO on-page nền tảng. SEO nội dung dài hạn hoặc chiến dịch quảng cáo lớn có thể thêm vào phạm vi riêng."
      },
      {
          "q": "Có làm việc từ xa được không?",
          "a": "Được — chat/call, demo định kỳ và tài liệu bàn giao rõ ràng. Khách hàng toàn quốc đều hợp tác được."
      },
      {
          "q": "Bảo trì sau bàn giao khác gì tính năng mới?",
          "a": "Sau bàn giao: hướng dẫn vận hành cộng với bảo hành lỗi kỹ thuật (thường 3–6 tháng) trong phạm vi đã nghiệm thu. Tính năng mới là riêng — báo giá trước, không nằm trong bảo hành."
      },
      {
          "q": "Bảo mật và dữ liệu được xử lý như thế nào?",
          "a": "HTTPS, kiểm soát truy cập, biến môi trường, không commit secret. Dữ liệu của bạn là của bạn. Audit / SSO / compliance có thể thêm vào phạm vi."
      },
      {
          "q": "Phạm vi có bị phình to giữa chừng không?",
          "a": "Phạm vi được khóa ở bước báo giá. Yêu cầu ngoài phạm vi sẽ được ghi nhận, ước lượng lại và chỉ thực hiện khi bạn đồng ý."
      },
      {
          "q": "Có làm MVP theo giai đoạn không?",
          "a": "Có. Dolphin Software ưu tiên MVP đủ để chạy, rồi mở rộng theo milestone — xác thực sớm và kiểm soát ngân sách."
      },
      {
          "q": "AI agent khác chatbot marketing thế nào?",
          "a": "Chatbot marketing trả lời FAQ theo kịch bản. Agent của Dolphin Software gắn với quy trình nghiệp vụ, công cụ và ngữ cảnh nội bộ — hỗ trợ vận hành, không chỉ chat bán hàng."
      },
      {
          "q": "Làm sao để bắt đầu?",
          "a": "Nhấn 'Nhận báo giá', chat Zalo, hoặc gửi form Contact với mục tiêu, deadline và ngân sách ước lượng nếu có."
      }
  ],
};


const en: FaqCopy = {
  eyebrow: "FAQ",
  title: "Frequently asked [[questions]]",
  support: "Timeline · quotes · warranty · security — before we start.",
  items: [
    {
      q: "What does the studio do?",
      a: "Dolphin Software helps SMBs go from business problems to operable systems — websites, mobile, automation, and AI. Tell us the goal; we propose a fitting scope.",
    },
    {
      q: "We aren't technical — can we still work together?",
      a: "Yes. Most clients don't code. Share an idea or short brief — we scope in business language, deliver end-to-end, and hand over with an ops walkthrough.",
    },
    {
      q: "How does the process work?",
      a: "Clarify goals → lock scope & estimate → sprint with deliverables → acceptance → handover & support. You always know the next step.",
    },
    {
      q: "How does quoting work?",
      a: "Send a short brief via Contact, “Get a quote”, or Zalo. We reply with estimated scope and next steps — no hidden fees outside the agreed scope.",
    },
    {
      q: "Typical timeline?",
      a: "Landings: ~2–4 weeks. Multi-page sites: weeks to ~1–2 months. Apps/workflows: 4–12 week milestones by scope. Exact dates land in the quote once scope is locked.",
    },
    {
      q: "Is SEO / mobile included?",
      a: "Responsive by default with clear heading/meta and solid on-page SEO basics. Longer-term content SEO or large ad campaigns can be scoped separately.",
    },
    {
      q: "Can you work remotely?",
      a: "Yes — chat/calls, regular demos, and clear handover docs. Nationwide clients welcome.",
    },
    {
      q: "How is post-handover maintenance different from new features?",
      a: "After handover: ops walkthrough plus technical-bug warranty (typically 3–6 months) within accepted scope. New features are separate — quoted first, not covered by warranty.",
    },
    {
      q: "How do you handle security and data?",
      a: "HTTPS, access control, env vars, no committed secrets. Your data stays yours. Audit / SSO / compliance can be added to scope.",
    },
    {
      q: "About the stock community content?",
      a: "Community sharing only — not licensed investment advice and not a profit guarantee.",
    },
    {
      q: "How do we start?",
      a: "Hit “Get a quote”, chat on Zalo, or send the Contact form with goals, deadline, and rough budget if you have one.",
    },
    {
      q: "Will scope inflate mid-project?",
      a: "Scope locks at the quote step. Out-of-scope requests are logged, re-estimated, and only built after you approve.",
    },
    {
      q: "Can we ship an MVP in stages?",
      a: "Yes. Ship a runnable MVP first, then expand by milestone — early validation and budget control.",
    },
    {
      q: "How is an AI agent different from a marketing chatbot?",
      a: "Marketing chatbots answer FAQ/scripts. Our agents attach to workflows, tools/MCP, and internal context — ops help, not just a sales widget.",
    },
  ],
};

const ja: FaqCopy = {
  eyebrow: "FAQ",
  title: "よくある[[質問]]",
  support: "期間・見積もり・保証・セキュリティ — 開始前の要点。",
  items: [
    {
      q: "どんなサービスがありますか？",
      a: "Dolphin Software は事業課題から運用しやすいシステムへ — Web・モバイル・自動化・AI。ゴールを教えていただければ、範囲を提案します。",
    },
    {
      q: "技術が分からなくても大丈夫？",
      a: "大丈夫です。アイデアや短い概要を共有いただければ、事業の言葉で範囲を整理し、一気通貫で納品、運用ガイド付きで引き渡します。",
    },
    {
      q: "進め方は？",
      a: "目的の明確化 → 範囲と見積もり → 成果物付きスプリント → 受け入れ → 引き渡しとサポート。次の一歩が常に見えます。",
    },
    {
      q: "見積もりの流れは？",
      a: "Contact、「見積もりを依頼」、または Zalo から概要を。概算スコープと次のステップで返信 — 合意範囲外の隠れた費用はありません。",
    },
    {
      q: "期間の目安は？",
      a: "LP：約2〜4週間。複数ページ：数週間〜約1〜2ヶ月。アプリ/業務：4〜12週マイルストーン。確定はスコープ合意後の見積もりに含めます。",
    },
    {
      q: "SEO / モバイル対応は？",
      a: "標準でレスポンシブ、見出し/メタ整備、オンページSEOの基本付き。長期コンテンツSEOや大規模広告は別途スコープ可。",
    },
    {
      q: "リモート対応は可能？",
      a: "可能です。チャット/通話、定期デモ、引き渡しドキュメントで協業します。",
    },
    {
      q: "公開後の保守と新機能の違いは？",
      a: "引き渡し後は運用ガイドと技術不具合保証（通常3〜6ヶ月、検収範囲内）。新機能は別見積もりで、保証外です。",
    },
    {
      q: "セキュリティとデータは？",
      a: "HTTPS、権限、環境変数、シークレット非コミット。データはお客様のもの。監査/SSO/コンプライアンスはスコープ追加可。",
    },
    {
      q: "証券コミュニティの記載について",
      a: "コミュニティ共有のみです。免許ある投資助言ではなく、利益保証でもありません。",
    },
    {
      q: "始め方は？",
      a: "「見積もりを依頼」、Zalo、または Contact から、目的・期限・予算感があれば添えてご連絡ください。",
    },
    {
      q: "途中でスコープが膨らみませんか？",
      a: "見積もりでスコープ固定。範囲外は記録・再見積もりし、合意後にのみ着手します。",
    },
    {
      q: "段階的なMVPは可能ですか？",
      a: "可能です。まず動くMVP、その後マイルストーンで拡張 — 早期検証と予算管理向きです。",
    },
    {
      q: "AIエージェントとマーケ用チャットボットの違いは？",
      a: "マーケ用は主にFAQ/スクリプト。エージェントは業務フロー・tool/MCP・社内コンテキストに接続し、運用を支援します。",
    },
  ],
};



const byLocale: Record<Locale, FaqCopy> = { vi, en, ja };

export function getFaqCopy(locale: Locale): FaqCopy {
  return byLocale[locale];
}
