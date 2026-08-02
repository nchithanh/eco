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
  support:
    "Timeline · báo giá · bảo hành · bảo mật — những điều bạn cần biết trước khi bắt đầu.",
  items: [
    {
      q: "Studio làm những gì?",
      a: "Dolphin Software giúp SMB đi từ bài toán kinh doanh đến hệ thống dễ vận hành — website, phần mềm, tự động hóa và AI. Bạn nói mục tiêu, chúng tôi đề xuất phạm vi phù hợp.",
    },
    {
      q: "Không biết kỹ thuật có làm được không?",
      a: "Được. Đa số khách không code. Bạn gửi ý tưởng hoặc mô tả ngắn, chúng tôi tư vấn bằng ngôn ngữ kinh doanh, làm trọn gói và bàn giao kèm hướng dẫn vận hành.",
    },
    {
      q: "Quy trình làm việc thế nào?",
      a: "Làm rõ mục tiêu → chốt phạm vi & báo giá → sprint có đầu ra → nghiệm thu → bàn giao & hỗ trợ. Bạn luôn biết bước tiếp theo.",
    },
    {
      q: "Nhận báo giá ra sao?",
      a: "Gửi mô tả qua Contact, nút “Nhận báo giá” hoặc Zalo. Chúng tôi phản hồi phạm vi ước tính và bước tiếp theo — không phí ẩn ngoài scope đã thống nhất.",
    },
    {
      q: "Timeline thường bao lâu?",
      a: "Landing: ~3–5 ngày. Business website: ~7–14 ngày. Shop / e-commerce: ~3–4 tuần. App / workflow: theo scope. Ngày cụ thể được gắn trong báo giá sau khi chốt.",
    },
    {
      q: "Website có tối ưu SEO / mobile không?",
      a: "Mặc định responsive, heading / meta rõ và SEO on-page cơ bản. SEO nội dung dài hạn hoặc Ads quy mô lớn có thể thỏa thuận thêm.",
    },
    {
      q: "Làm remote được không?",
      a: "Được — chat / call, demo định kỳ và tài liệu bàn giao rõ. Chúng tôi phục vụ khách toàn quốc.",
    },
    {
      q: "Bảo trì sau bàn giao khác gì tính năng mới?",
      a: "Sau bàn giao: hướng dẫn vận hành và bảo hành lỗi kỹ thuật (thường 3–6 tháng) trong phạm vi đã nghiệm thu. Tính năng mới là hạng mục riêng, báo giá trước.",
    },
    {
      q: "Bảo mật và dữ liệu thế nào?",
      a: "HTTPS, phân quyền, env vars, không commit secret. Dữ liệu thuộc về bạn. Audit / SSO / compliance nâng cao thỏa thuận thêm trong scope.",
    },
    {
      q: "Có làm MVP theo giai đoạn không?",
      a: "Có. Chúng tôi ưu tiên MVP đủ chạy rồi mở rộng theo milestone — kiểm chứng sớm và kiểm soát ngân sách.",
    },
    {
      q: "AI agent khác chatbot marketing thế nào?",
      a: "Chatbot marketing trả lời FAQ theo kịch bản. Agent gắn với quy trình nghiệp vụ, tool và ngữ cảnh nội bộ — hỗ trợ vận hành, không chỉ chat bán hàng.",
    },
    {
      q: "Phạm vi có bị phình giữa chừng không?",
      a: "Scope được chốt ở bước báo giá. Yêu cầu ngoài phạm vi sẽ được ghi nhận, ước lượng lại và chỉ làm khi bạn đồng ý.",
    },
    {
      q: "Làm sao để bắt đầu?",
      a: "Nhấn “Nhận báo giá”, chat Zalo hoặc gửi form Contact với mục tiêu, deadline và ngân sách ước lượng nếu có.",
    },
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

const de: FaqCopy = {
  eyebrow: "FAQ",
  title: "Häufige [[Fragen]]",
  support: "Timeline · Angebot · Garantie · Sicherheit — vor dem Start.",
  items: [
    {
      q: "Was macht das Studio?",
      a: "Dolphin Software hilft KMUs vom Geschäftsproblem zum betreibbaren System — Web, Mobile, Automation und AI. Ziel nennen; wir schlagen passenden Scope vor.",
    },
    {
      q: "Wir sind nicht technisch — geht das trotzdem?",
      a: "Ja. Die meisten Kunden schreiben keinen Code. Idee oder kurzes Briefing reichen — wir scopen in Geschäftssprache und übergeben mit Betriebseinweisung.",
    },
    {
      q: "Wie läuft der Prozess?",
      a: "Ziele klären → Scope & Angebot → Sprint mit Deliverables → Abnahme → Übergabe & Support. Der nächste Schritt ist immer klar.",
    },
    {
      q: "Wie funktioniert das Angebot?",
      a: "Kurzes Briefing per Kontakt, „Angebot anfordern“ oder Zalo. Antwort mit geschätztem Scope und nächsten Schritten — keine versteckten Kosten außerhalb des Scopes.",
    },
    {
      q: "Typische Dauer?",
      a: "Landings: ~2–4 Wochen. Mehrseitige Sites: Wochen bis ~1–2 Monate. Apps/Workflows: 4–12-Wochen-Meilensteine. Termine stehen im Angebot nach Scope-Fix.",
    },
    {
      q: "SEO / Mobile inklusive?",
      a: "Standardmäßig responsive mit klarer Heading-/Meta-Struktur und soliden On-Page-SEO-Basics. Längeres Content-SEO oder große Kampagnen separat möglich.",
    },
    {
      q: "Remote möglich?",
      a: "Ja — Chat/Calls, regelmäßige Demos und klare Übergabedokumente.",
    },
    {
      q: "Worin unterscheidet sich Wartung nach Übergabe von neuen Features?",
      a: "Nach Übergabe: Einweisung plus technische Fehlergarantie (typisch 3–6 Monate) im abgenommenen Scope. Neue Features separat — vorab angeboten, nicht von der Garantie abgedeckt.",
    },
    {
      q: "Wie steht es um Sicherheit und Daten?",
      a: "HTTPS, Rechte, Env-Variablen, keine committed Secrets. Ihre Daten bleiben Ihre. Audit/SSO/Compliance können in den Scope.",
    },
    {
      q: "Zum Börsen-/Community-Inhalt?",
      a: "Nur Community-Sharing — keine lizenzierte Anlageberatung und keine Gewinnzusage.",
    },
    {
      q: "Wie starten wir?",
      a: "„Angebot anfordern“, Zalo oder Kontaktformular mit Ziel, Deadline und grobem Budget senden.",
    },
    {
      q: "Bläht sich der Scope mitten im Projekt auf?",
      a: "Scope wird im Angebot fixiert. Out-of-Scope wird erfasst, neu geschätzt und erst nach Freigabe gebaut.",
    },
    {
      q: "MVP in Stufen möglich?",
      a: "Ja. Zuerst lauffähiges MVP, danach Erweiterung per Meilenstein — frühe Validierung und Budgetkontrolle.",
    },
    {
      q: "Unterschied AI-Agent vs. Marketing-Chatbot?",
      a: "Marketing-Bots beantworten meist FAQ/Skripte. Unsere Agents hängen an Prozessen, Tools/MCP und Kontext — Ops-Hilfe, nicht nur Sales-Chat.",
    },
  ],
};

const zh: FaqCopy = {
  eyebrow: "FAQ",
  title: "常见[[问题]]",
  support: "周期 · 报价 · 质保 · 安全——开始前可先了解。",
  items: [
    {
      q: "工作室提供哪些服务？",
      a: "Dolphin Software 帮助中小企业从业务问题走到可运营系统——网站、移动、自动化与 AI。告诉我们目标，我们提出合适范围。",
    },
    {
      q: "不懂技术也能合作吗？",
      a: "可以。多数客户不会写代码。分享想法或简要说明即可——用业务语言界定范围、端到端交付，并附运营指引。",
    },
    {
      q: "合作流程是怎样的？",
      a: "对齐目标 → 锁定范围与报价 → 有交付物的冲刺 → 验收 → 交接与支持。你始终清楚下一步。",
    },
    {
      q: "报价流程是怎样的？",
      a: "通过联系表单、“获取报价”或 Zalo 发送简要说明。我们回复估算范围与下一步——约定范围外无隐藏费用。",
    },
    {
      q: "典型周期多久？",
      a: "落地页：约 2–4 周。多页站：数周到约 1–2 个月。应用/工作流：4–12 周里程碑。具体日期在锁定范围后的报价中写明。",
    },
    {
      q: "包含 SEO / 移动适配吗？",
      a: "默认响应式，标题/元信息清晰，含基础站内 SEO。长期内容 SEO 或大型广告可另议。",
    },
    {
      q: "可以远程协作吗？",
      a: "可以——聊天/通话、定期演示与清晰交接文档。",
    },
    {
      q: "交接后维护和新功能有何不同？",
      a: "交接后：运营指引 + 验收范围内技术故障质保（通常 3–6 个月）。新功能单独报价，不纳入质保。",
    },
    {
      q: "安全与数据如何处理？",
      a: "HTTPS、权限、环境变量、不提交密钥。数据归你。审计/SSO/合规可加入范围。",
    },
    {
      q: "关于站点上的证券社区内容？",
      a: "仅为社区分享——不是持牌投资建议，也不保证收益。",
    },
    {
      q: "如何开始？",
      a: "点击“获取报价”、聊 Zalo，或提交联系表单，附上目标、截止日期与大致预算（如有）。",
    },
    {
      q: "项目中途范围会膨胀吗？",
      a: "报价阶段锁定范围。超出需求会记录、重新估算，并在你同意后才做。",
    },
    {
      q: "能否分阶段做 MVP？",
      a: "可以。先做可运行 MVP，再按里程碑扩展——尽早验证并控制预算。",
    },
    {
      q: "AI Agent 和营销聊天机器人有何不同？",
      a: "营销机器人多回答 FAQ/话术。我们的 Agent 连接业务流程、工具/MCP 与内部上下文——服务运营，不只是售前窗。",
    },
  ],
};

const byLocale: Record<Locale, FaqCopy> = { vi, en, ja, de, zh };

export function getFaqCopy(locale: Locale): FaqCopy {
  return byLocale[locale];
}
