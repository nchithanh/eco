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
  support: "Timeline, báo giá, bảo hành và bảo mật — trước khi bắt đầu cùng studio.",
  items: [
    {
      q: "Studio làm những gì?",
      a: "Dolphin Kick / KU THANH giúp SMB đi từ bài toán kinh doanh đến hệ thống dễ vận hành — website, mobile, tự động hóa và tích hợp AI. Bạn nói mục tiêu; chúng tôi đề xuất phạm vi và cách làm phù hợp.",
    },
    {
      q: "Không biết kỹ thuật có làm được không?",
      a: "Có. Đa số khách không code. Gửi ý tưởng, mẫu tham khảo hoặc mô tả ngắn — chúng tôi tư vấn phạm vi bằng ngôn ngữ kinh doanh, làm trọn gói và bàn giao kèm hướng dẫn vận hành.",
    },
    {
      q: "Quy trình làm việc thế nào?",
      a: "Làm rõ mục tiêu → chốt phạm vi & báo giá → thiết kế/build theo sprint (có đầu ra mỗi bước) → nghiệm thu → bàn giao & hỗ trợ. Bạn luôn biết bước tiếp theo.",
    },
    {
      q: "Báo giá và quy trình nhận quote?",
      a: "Gửi mô tả ngắn qua form Contact, nút “Nhận báo giá” hoặc chat Zalo. Chúng tôi phản hồi phạm vi ước tính và bước tiếp theo; chi tiết hợp đồng theo từng dự án — không phí ẩn ngoài phạm vi đã thống nhất. Trao đổi thật thay vì công cụ dự toán chung chung.",
    },
    {
      q: "Timeline thường bao lâu?",
      a: "Landing đơn giản: khoảng 2–4 tuần. Website doanh nghiệp nhiều trang: vài tuần đến ~1–2 tháng. App/workflow phức tạp: thường theo milestone 4–12 tuần tùy phạm vi. Timeline cụ thể gắn trong báo giá sau khi chốt scope.",
    },
    {
      q: "Website có tối ưu SEO / mobile không?",
      a: "Website chúng tôi làm mặc định responsive, cấu trúc heading/meta rõ và SEO on-page cơ bản. SEO nội dung dài hạn hay Ads chiến dịch lớn có thể thỏa thuận thêm nếu cần.",
    },
    {
      q: "Làm remote được không?",
      a: "Có — cộng tác remote qua chat/call, demo định kỳ và tài liệu bàn giao rõ ràng. Phục vụ khách toàn quốc.",
    },
    {
      q: "Bảo trì sau bàn giao khác gì tính năng mới?",
      a: "Sau bàn giao có hướng dẫn vận hành và bảo hành lỗi kỹ thuật (thường 3–6 tháng theo thỏa thuận) trong phạm vi đã nghiệm thu. Tính năng mới / đổi yêu cầu là hạng mục riêng — báo giá trước khi làm, không gộp vào bảo hành.",
    },
    {
      q: "Bảo mật và dữ liệu thế nào?",
      a: "Áp dụng thực hành cơ bản phù hợp phạm vi: HTTPS, phân quyền, biến môi trường, không commit secret. Dữ liệu khách/admin thuộc bạn; studio không dùng cho mục đích khác. Yêu cầu bảo mật nâng cao (audit, SSO, compliance) thỏa thuận thêm trong scope.",
    },
    {
      q: "Về nội dung chứng khoán trên site?",
      a: "Phần cộng đồng chứng khoán chỉ mang tính chia sẻ — không phải tư vấn đầu tư có giấy phép và không cam kết lợi nhuận.",
    },
    {
      q: "Làm sao bắt đầu?",
      a: "Nhấn “Nhận báo giá”, chat Zalo, hoặc gửi form Contact với mục tiêu, deadline và ngân sách ước lượng nếu có.",
    },
    {
      q: "Phạm vi có bị phình giữa chừng không?",
      a: "Scope được chốt ở bước báo giá. Yêu cầu mới ngoài phạm vi sẽ được ghi nhận, ước lượng lại và chỉ làm khi bạn đồng ý — tránh scope creep im lặng.",
    },
    {
      q: "Có làm MVP theo giai đoạn không?",
      a: "Có. Ưu tiên MVP đủ chạy (landing/booking/core flow), rồi mở rộng theo milestone — kiểm chứng thực tế sớm và kiểm soát ngân sách, thay vì làm “full” ngay từ đầu.",
    },
    {
      q: "AI agent khác chatbot marketing thế nào?",
      a: "Chatbot marketing thường trả lời FAQ/script. Agent của studio gắn quy trình nghiệp vụ, tool/MCP và ngữ cảnh nội bộ — hỗ trợ vận hành, không chỉ chat bán hàng trên web.",
    }
  ],
};

const en: FaqCopy = {
  eyebrow: "FAQ",
  title: "Frequently asked [[questions]]",
  support: "Timeline, quotes, warranty, and security — before we start together.",
  items: [
    {
      q: "What does the studio do?",
      a: "Dolphin Kick / KU THANH helps SMBs go from business problems to systems they can run — websites, mobile, automation, and AI integrations. Tell us the goal; we propose a fitting scope and approach.",
    },
    {
      q: "We aren't technical — can we still work together?",
      a: "Yes. Most clients don't code. Share an idea, reference sample, or short brief — we scope in business language, deliver end-to-end, and hand over with an ops walkthrough.",
    },
    {
      q: "How does the process work?",
      a: "Clarify goals → lock scope & estimate → design/build in sprints (each step has a deliverable) → acceptance → handover & support. You always know the next step.",
    },
    {
      q: "How does quoting work?",
      a: "Send a short brief via the Contact form, “Get a quote”, or Zalo chat. We reply with an estimated scope and next steps; contract details are project-specific — no hidden fees outside the agreed scope. Real conversation, not a generic cost calculator.",
    },
    {
      q: "Typical timeline?",
      a: "Simple landings: about 2–4 weeks. Multi-page business sites: weeks to ~1–2 months. Richer apps/workflows: usually 4–12 week milestones depending on scope. Exact dates land in the quote once scope is locked.",
    },
    {
      q: "Is SEO / mobile included?",
      a: "Sites ship responsive by default with clear heading/meta structure and solid on-page SEO basics. Longer-term content SEO or large ad campaigns can be scoped separately if needed.",
    },
    {
      q: "Can you work remotely?",
      a: "Yes — remote collaboration via chat/calls, regular demos, and clear handover docs. We work with clients nationwide.",
    },
    {
      q: "How is post-handover maintenance different from new features?",
      a: "After handover you get an ops walkthrough plus technical-fix warranty (typically 3–6 months by agreement) within accepted scope. New features or requirement changes are separate items — quoted before we build, not covered by warranty.",
    },
    {
      q: "How do you handle security and data?",
      a: "We apply scope-appropriate basics: HTTPS, access control, environment variables, no committed secrets. Customer/admin data belongs to you; the studio doesn't reuse it elsewhere. Stronger needs (audit, SSO, compliance) can be added to scope.",
    },
    {
      q: "About the stock community content?",
      a: "Stock-related content is community sharing only — not licensed investment advice and not a profit guarantee.",
    },
    {
      q: "How do we start?",
      a: "Hit “Get a quote”, chat on Zalo, or send the Contact form with goals, deadline, and rough budget if you have one.",
    },
    {
      q: "Will scope inflate mid-project?",
      a: "Scope is locked at the quote step. Out-of-scope requests are logged, re-estimated, and only built after you approve — no silent scope creep.",
    },
    {
      q: "Can we ship an MVP in stages?",
      a: "Yes. We prioritize a runnable MVP (landing/booking/core flow), then expand by milestone — early real-world validation and budget control instead of building “full” on day one.",
    },
    {
      q: "How is an AI agent different from a marketing chatbot?",
      a: "Marketing chatbots mostly answer FAQ/scripts. Our agents attach to business workflows, tools/MCP, and internal context — ops help, not just a sales chat widget.",
    }
  ],
};

const ja: FaqCopy = {
  eyebrow: "FAQ",
  title: "よくある[[質問]]",
  support: "期間・見積もり・保証・セキュリティ — ご相談前のポイントです。",
  items: [
    {
      q: "どんなサービスがありますか？",
      a: "Dolphin Kick / KU THANH は事業の課題から運用しやすいシステムへ — Web・モバイル・業務自動化・AI 連携。ゴールを教えていただければ、範囲と進め方を提案します。",
    },
    {
      q: "技術が分からなくても大丈夫？",
      a: "大丈夫です。多くのお客様はコードを書きません。アイデアや参考例、短い概要を共有いただければ、事業の言葉で範囲を整理し、一気通貫で納品し、運用ガイド付きで引き渡します。",
    },
    {
      q: "進め方は？",
      a: "目的の明確化 → 範囲と見積もり → スプリントで設計/実装（各ステップに成果物） → 受け入れ → 引き渡しとサポート。次の一歩が常に見える進め方です。",
    },
    {
      q: "見積もりの流れは？",
      a: "Contact フォーム、「見積もりを依頼」、または Zalo から概要をお送りください。概算スコープと次のステップでご返信し、契約詳細は案件ごとに決めます。合意範囲外の隠れた費用はありません。汎用の自動見積ツールではなく、実会話で進めます。",
    },
    {
      q: "期間の目安は？",
      a: "シンプルな LP：約2〜4週間。複数ページのコーポレート：数週間〜約1〜2ヶ月。アプリや業務フロー：スコープに応じて 4〜12 週のマイルストーンが一般的。確定スケジュールはスコープ合意後の見積もりに含めます。",
    },
    {
      q: "SEO / モバイル対応は？",
      a: "サイトは標準でレスポンシブ、見出し/メタ構造を整え、オンページSEOの基本を含めます。長期のコンテンツSEOや大規模広告は必要に応じて別途スコープできます。",
    },
    {
      q: "リモート対応は可能？",
      a: "可能です。チャット/通話、定期デモ、引き渡しドキュメントでリモート協業します。全国のお客様に対応します。",
    },
    {
      q: "公開後の保守と新機能の違いは？",
      a: "引き渡し後は運用ガイドと、検収済み範囲の技術不具合保証（合意により通常3〜6ヶ月）。新機能や要件変更は別見積もりで、着手前に提示 — 保証には含みません。",
    },
    {
      q: "セキュリティとデータは？",
      a: "スコープに応じた基本実践：HTTPS、権限管理、環境変数、シークレットのコミット禁止。顧客/管理データはお客様のもので、スタジオが他用途に使いません。監査・SSO・コンプライアンスなどはスコープに追加できます。",
    },
    {
      q: "証券コミュニティの記載について",
      a: "証券関連の内容はコミュニティ共有のみです。免許を持つ投資助言ではなく、利益を保証するものでもありません。",
    },
    {
      q: "始め方は？",
      a: "「見積もりを依頼」、Zalo、または Contact フォームから、目的・期限・予算感があれば添えてご連絡ください。",
    },
    {
      q: "途中でスコープが膨らみませんか？",
      a: "見積もり段階でスコープを固定します。範囲外の要望は記録・再見積もりし、合意後にのみ着手 — 黙って広がることはしません。",
    },
    {
      q: "段階的なMVPは可能ですか？",
      a: "可能です。まず動くMVP（LP/予約/中核フロー）を優先し、マイルストーンで拡張 — 最初からフルを作らず、早期検証と予算管理に向きます。",
    },
    {
      q: "AIエージェントとマーケ用チャットボットの違いは？",
      a: "マーケ用ボットは主にFAQ/スクリプト回答。当スタジオのエージェントは業務フロー、tool/MCP、社内コンテキストに接続 — 販売チャットだけでなく運用支援です。",
    }
  ],
};

const de: FaqCopy = {
  eyebrow: "FAQ",
  title: "Häufige [[Fragen]]",
  support: "Timeline, Angebot, Garantie und Sicherheit — bevor wir starten.",
  items: [
    {
      q: "Was macht das Studio?",
      a: "Dolphin Kick / KU THANH hilft KMUs vom Geschäftsproblem zum betreibbaren System — Websites, Mobile, Automation und AI. Nennen Sie das Ziel; wir schlagen Scope und Weg vor.",
    },
    {
      q: "Wir sind nicht technisch — geht das trotzdem?",
      a: "Ja. Die meisten Kunden schreiben keinen Code. Teilen Sie Idee, Referenz oder kurzes Briefing — wir scopen in Geschäftssprache, liefern End-to-End und übergeben mit Betriebseinweisung.",
    },
    {
      q: "Wie läuft der Prozess?",
      a: "Ziele klären → Scope & Angebot → Design/Build in Sprints (jedes Step mit Deliverable) → Abnahme → Übergabe & Support. Der nächste Schritt ist immer klar.",
    },
    {
      q: "Wie funktioniert das Angebot?",
      a: "Kurzes Briefing per Kontaktformular, „Angebot anfordern“ oder Zalo. Wir antworten mit geschätztem Scope und nächsten Schritten; Vertragsdetails sind projektspezifisch — keine versteckten Kosten außerhalb des vereinbarten Scopes. Echtes Gespräch statt generischem Kostenschätzer.",
    },
    {
      q: "Typische Dauer?",
      a: "Einfache Landings: etwa 2–4 Wochen. Mehrseitige Business-Sites: Wochen bis ~1–2 Monate. Reichere Apps/Workflows: meist 4–12-Wochen-Meilensteine je nach Scope. Konkrete Termine stehen im Angebot nach Scope-Fixierung.",
    },
    {
      q: "SEO / Mobile inklusive?",
      a: "Sites sind standardmäßig responsive mit klarer Heading-/Meta-Struktur und soliden On-Page-SEO-Basics. Längeres Content-SEO oder große Kampagnen können separat gescoped werden.",
    },
    {
      q: "Remote möglich?",
      a: "Ja — Remote-Zusammenarbeit per Chat/Calls, regelmäßige Demos und klare Übergabedokumente. Wir arbeiten bundesweit.",
    },
    {
      q: "Worin unterscheidet sich Wartung nach Übergabe von neuen Features?",
      a: "Nach der Übergabe: Einweisung plus technische Fehlergarantie (typisch 3–6 Monate laut Vereinbarung) im abgenommenen Scope. Neue Features oder Anforderungsänderungen sind separate Positionen — vorab angeboten, nicht von der Garantie abgedeckt.",
    },
    {
      q: "Wie steht es um Sicherheit und Daten?",
      a: "Scope-angemessene Basics: HTTPS, Zugriffsrechte, Umgebungsvariablen, keine committed Secrets. Kunden-/Admin-Daten gehören Ihnen; das Studio nutzt sie nicht anderweitig. Stärkere Anforderungen (Audit, SSO, Compliance) können in den Scope.",
    },
    {
      q: "Zum Börsen-/Community-Inhalt?",
      a: "Aktienbezogene Inhalte sind nur Community-Sharing — keine lizenzierte Anlageberatung und keine Gewinnzusage.",
    },
    {
      q: "Wie starten wir?",
      a: "„Angebot anfordern“ klicken, Zalo schreiben oder das Kontaktformular mit Ziel, Deadline und grobem Budget senden.",
    },
    {
      q: "Bläht sich der Scope mitten im Projekt auf?",
      a: "Der Scope wird im Angebotsschritt fixiert. Out-of-Scope-Wünsche werden erfasst, neu geschätzt und erst nach Freigabe gebaut — kein stilles Scope Creep.",
    },
    {
      q: "MVP in Stufen möglich?",
      a: "Ja. Zuerst ein lauffähiges MVP (Landing/Booking/Kernflow), danach Erweiterung per Meilenstein — frühe Validierung und Budgetkontrolle statt „full“ am Tag eins.",
    },
    {
      q: "Unterschied AI-Agent vs. Marketing-Chatbot?",
      a: "Marketing-Bots beantworten meist FAQ/Skripte. Unsere Agents hängen an Geschäftsprozessen, Tools/MCP und internem Kontext — Ops-Hilfe, nicht nur Sales-Chat.",
    }
  ],
};

const zh: FaqCopy = {
  eyebrow: "FAQ",
  title: "常见[[问题]]",
  support: "周期、报价、质保与安全——开始合作前可先了解。",
  items: [
    {
      q: "工作室提供哪些服务？",
      a: "Dolphin Kick / KU THANH 帮助中小企业从业务问题走到可运营的系统——网站、移动应用、流程自动化与 AI 集成。告诉我们目标，我们提出合适范围与做法。",
    },
    {
      q: "不懂技术也能合作吗？",
      a: "可以。多数客户不会写代码。分享想法、参考样例或简要说明即可——我们用业务语言界定范围、端到端交付，并附运营指引交接。",
    },
    {
      q: "合作流程是怎样的？",
      a: "对齐目标 → 锁定范围与报价 → 按冲刺设计/开发（每步有交付物） → 验收 → 交接与支持。你始终清楚下一步。",
    },
    {
      q: "报价流程是怎样的？",
      a: "通过联系表单、“获取报价”或 Zalo 发送简要说明。我们回复估算范围与下一步；合同细节按项目约定——约定范围外无隐藏费用。真实沟通，而非通用自动估价工具。",
    },
    {
      q: "典型周期多久？",
      a: "简单落地页：约 2–4 周。多页企业站：数周到约 1–2 个月。更复杂的应用/工作流：通常按 4–12 周里程碑，视范围而定。具体日期在锁定范围后的报价中写明。",
    },
    {
      q: "包含 SEO / 移动适配吗？",
      a: "网站默认响应式，标题/元信息结构清晰，并包含基础站内 SEO。长期内容 SEO 或大型广告活动可另议。",
    },
    {
      q: "可以远程协作吗？",
      a: "可以——通过聊天/通话、定期演示与清晰交接文档远程协作，服务全国客户。",
    },
    {
      q: "交接后维护和新功能有何不同？",
      a: "交接后提供运营指引，以及对验收范围内技术故障的质保（按约定通常 3–6 个月）。新功能或需求变更是单独项——开工前先报价，不纳入质保。",
    },
    {
      q: "安全与数据如何处理？",
      a: "按范围采用基础实践：HTTPS、权限控制、环境变量、不提交密钥。客户/管理数据归你所有；工作室不另作他用。更高要求（审计、SSO、合规）可加入范围。",
    },
    {
      q: "关于站点上的证券社区内容？",
      a: "证券相关内容仅为社区分享——不是持牌投资建议，也不保证收益。",
    },
    {
      q: "如何开始？",
      a: "点击“获取报价”、聊 Zalo，或提交联系表单，附上目标、截止日期与大致预算（如有）。",
    },
    {
      q: "项目中途范围会膨胀吗？",
      a: "报价阶段锁定范围。超出范围的需求会记录、重新估算，并在你同意后才做——不会默默扩 scope。",
    },
    {
      q: "能否分阶段做 MVP？",
      a: "可以。优先可运行的 MVP（落地页/预约/核心流程），再按里程碑扩展——尽早验证并控制预算，而不是第一天就做“全量”。",
    },
    {
      q: "AI Agent 和营销聊天机器人有何不同？",
      a: "营销机器人多回答 FAQ/话术。我们的 Agent 连接业务流程、工具/MCP 与内部上下文——服务运营，不只是售前聊天窗。",
    }
  ],
};

const byLocale: Record<Locale, FaqCopy> = { vi, en, ja, de, zh };

export function getFaqCopy(locale: Locale): FaqCopy {
  return byLocale[locale];
}
