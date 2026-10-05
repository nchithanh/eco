import type {ArchivedLocale, Locale, LocaleMap} from "./types";

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
  support: "CRM · AI Care/Ops · website theo combo · báo giá — trả lời trước khi bắt đầu.",
  items: [
      {
          "q": "Dolphin Software làm gì?",
          "a": "Dolphin Software là công ty giải pháp công nghệ giúp doanh nghiệp tối ưu vận hành và chăm sóc khách hàng. GTM hiện tại: thuê CRM + AI (Care · Ops) cho doanh nghiệp dịch vụ; website thường là quyền lợi combo. Không phải chỉ agency làm web hay chỉ bán chatbot."
      },
      {
          "q": "Phần mềm CRM có tặng website không?",
          "a": "Có, theo combo. CRM + Dolphin Care từ 6 tháng, CRM + Ops và Full Growth tặng website doanh nghiệp (4.500.000đ) khi triển khai. CRM Base 12 tặng landing hoặc giảm 50% website. Thuê lẻ Care không tặng website."
      },
      {
          "q": "Dolphin Care khác Dolphin Ops ở đâu?",
          "a": "Dolphin Care là AI chăm sóc khách hàng của anh chị trên website, Zalo, Messenger. Dolphin Ops là Agent CRM giúp đội ngũ chạy việc nội bộ — lịch, khách, báo cáo."
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
          "a": "Gửi brief ngắn qua /contact/, nút nhận báo giá hoặc Zalo. Dolphin Software phản hồi phạm vi dự kiến và bước tiếp theo — không phí ngoài phạm vi đã thỏa thuận. Xem thêm /chinh-sach-gia-dolphin-2026/."
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
          "a": "Website: bảo hành kỹ thuật 36 tháng. CRM · POS · AI (SaaS): trong hạn gói đã thanh toán. Outsource / gia công phần mềm: 3 tháng sau nghiệm thu. Tính năng mới báo giá riêng, không nằm trong bảo hành."
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
          "a": "Kể vấn đề đang nghẽn qua /contact/ hoặc Zalo (https://zalo.me/0779937633). Không cần biết sẵn cần website hay AI — Dolphin đề xuất phạm vi khớp pain."
      }
  ],
};


const en: FaqCopy = {
  eyebrow: "FAQ",
  title: "[[Frequently asked]] questions",
  support: "Timeline · quotes · warranty · security — answered before starting.",
  items: [
    {
      q: "What does Dolphin Software do?",
      a: "Dolphin Software rents CRM and AI software (SaaS) for service businesses. CRM is the operating base. Care, Ops, and Intelligence are the growth layer. A website is included or discounted when you deploy a CRM combo.",
    },
    {
      q: "Can non-technical businesses work with you?",
      a: "Yes. Most of Dolphin Software's clients don't code. You just share an idea or short brief — the team defines scope in business language, delivers end-to-end, and guides operations after completion.",
    },
    {
      q: "How does the workflow happen?",
      a: "Clarify goals → Lock scope & estimate → Sprint with deliverables → UAT → Handoff & Support. You always know what's next.",
    },
    {
      q: "How does quoting work? Any hidden fees?",
      a: "Send a short brief via Contact, 'Get a quote,' or Zalo. Dolphin Software responds with expected scope and next steps — no fees beyond agreed scope.",
    },
    {
      q: "What's a typical timeline?",
      a: "Landing page: ~3–5 days. Business website: ~7–14 days. Shop / e-commerce: ~3–4 weeks. App / workflow: based on scope. Specific dates in quote after locking scope.",
    },
    {
      q: "Does it include SEO and mobile?",
      a: "Responsive by default with clear heading/meta and foundational on-page SEO. Long-term SEO content or large ad campaigns can be added in separate scope.",
    },
    {
      q: "Can you work remotely?",
      a: "Yes — chat/call, regular demos, and clear handoff documentation. Clients nationwide can collaborate.",
    },
    {
      q: "How is post-handoff maintenance different from new features?",
      a: "Website: 36 months of technical warranty. CRM and AI (SaaS): for the prepaid term. Custom outsource: 3 months after acceptance. New features are quoted separately and are not covered by warranty.",
    },
    {
      q: "How are security and data handled?",
      a: "HTTPS, access control, environment variables, no committed secrets. Your data is yours. Audit / SSO / compliance can be added to scope.",
    },
    {
      q: "Does scope balloon mid-project?",
      a: "Scope is locked at the quote step. Out-of-scope requests are logged, re-estimated, and only executed when you agree.",
    },
    {
      q: "Do you do MVP in stages?",
      a: "Yes. Dolphin Software prioritizes MVP enough to run, then expands by milestone — validate early and control budget.",
    },
    {
      q: "How is an AI agent different from a marketing chatbot?",
      a: "Marketing chatbots answer FAQ from scripts. Dolphin Software's agents tie into business workflow, tools, and internal context — support operations, not just sales chat.",
    },
    {
      q: "How do I get started?",
      a: "Describe the bottleneck via the Contact form or Zalo. You don't need to know 'website or AI' first — Dolphin proposes scope that matches the pain.",
    },
  ],
};

const ja: FaqCopy = {
  eyebrow: "FAQ",
  title: "[[よくある]]質問",
  support: "タイムライン · 見積り · 保証 · セキュリティ — 開始前に回答。",
  items: [
    {
      q: "Dolphin Softwareは何をしますか？",
      a: "Dolphin Softwareは企業向けのAI・テクノロジーソリューション会社です。運用の課題から始め、Webサイト、AIエージェント、CRM、自動化、連携、専用ソフトを選びます。どの技術が必要か分からなくても始められます。詰まっている箇所を教えてください。",
    },
    {
      q: "技術に詳しくない企業でも協力できますか？",
      a: "はい。Dolphin Softwareのクライアントのほとんどはコーディングしません。アイデアまたは短いブリーフを共有するだけ — チームはビジネス言語で範囲を定義し、エンドツーエンドで納品し、完了後の運用をガイドします。",
    },
    {
      q: "ワークフローはどのように進みますか？",
      a: "目標明確化 → 範囲とコスト確定 → 納品物を伴うスプリント → UAT → 納品とサポート。次のステップが常に明確です。",
    },
    {
      q: "見積りはどう機能しますか？隠れた費用はありますか？",
      a: "Contact、「見積りを依頼」、またはZalo経由で短いブリーフを送信。Dolphin Softwareが予想範囲と次のステップで回答 — 合意範囲外の費用はありません。",
    },
    {
      q: "一般的なタイムラインは？",
      a: "ランディングページ：約3〜5日。企業サイト：約7〜14日。ショップ/EC：約3〜4週間。アプリ/ワークフロー：範囲による。範囲確定後の見積りに具体的な日付。",
    },
    {
      q: "SEOとモバイル対応は含まれますか？",
      a: "デフォルトでレスポンシブ対応、明確な見出し/メタ、基本的なオンページSEOを含む。長期SEOコンテンツまたは大規模広告キャンペーンは別範囲として追加可能。",
    },
    {
      q: "リモート作業は可能ですか？",
      a: "はい — チャット/通話、定期デモ、明確な納品ドキュメント。全国のクライアントと協力可能。",
    },
    {
      q: "納品後のメンテナンスと新機能の違いは？",
      a: "納品後：運用ガイドと受入範囲内の技術バグ保証（通常3〜6ヶ月）。新機能は別 — 見積り優先、保証対象外。",
    },
    {
      q: "セキュリティとデータはどう処理されますか？",
      a: "HTTPS、アクセス制御、環境変数、シークレットコミットなし。データは御社のものです。監査/SSO/コンプライアンスは範囲に追加可能。",
    },
    {
      q: "プロジェクト途中で範囲が膨らみませんか？",
      a: "範囲は見積りステップで確定。範囲外の要求は記録され、再見積りされ、御社の同意時のみ実行されます。",
    },
    {
      q: "段階的なMVPは可能ですか？",
      a: "はい。Dolphin Softwareは実行可能なMVPを優先し、マイルストーンごとに拡張 — 早期検証と予算管理。",
    },
    {
      q: "AIエージェントとマーケティングチャットボットの違いは？",
      a: "マーケティングチャットボットはスクリプトからFAQに回答。Dolphin Softwareのエージェントはビジネスワークフロー、ツール、社内コンテキストと統合 — 運用サポート、販売チャットだけではありません。",
    },
    {
      q: "どうやって始めますか？",
      a: "ContactフォームまたはZaloで詰まっている箇所を教えてください。「WebかAIか」を先に決める必要はありません。Dolphinが痛みに合う範囲を提案します。",
    },
  ],
};




const byLocale: LocaleMap<FaqCopy> = { vi, en, ja };

export function getFaqCopy(locale: Locale | ArchivedLocale): FaqCopy {
  return byLocale[locale] ?? byLocale.vi;
}
