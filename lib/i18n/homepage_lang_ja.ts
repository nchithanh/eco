/**
 * Homepage copy — Japanese overlay synced from VI SoT.
 */
import type { HomepageLang } from "./homepage_lang_vi";

export const homepageLangJa: HomepageLang = {
  hero: {
    eyebrow: "Dolphin Software",
    aiPill: "",
    headline: "[[B2B]]サービス業向けの運用ソリューション",
    subhead:
      "スパ・ネイル・サロン・教育・クリニックに特化し、F&B・ショールーム・運送など柔軟な仕組みが必要な事業へ拡大。CRMが基盤、Care・Ops・Intelligenceが成長、Websiteはコンボで需要を後押し。",
    support:
      "機能一覧は売りません。事業課題から始め、新規客と売上につながるものだけを作ります。ソース一式を引き渡し、ロックインなし。",
    trustLine: "Problem-first · CRM基盤 · AI成長 · Websiteコンボ",
    ctaPrimary: "事業の話をする",
    ctaSecondary: "CRM · AI · Webコンボを見る",
    tags: ["Problem-first", "CRM基盤", "AIで成長"],
    metrics: [
      { value: "CRM", label: "コア運用" },
      { value: "AI", label: "Care · Ops · Intel" },
    ],
    visual: {
      web: "コンボのWeb",
      automation: "Ops CRM",
      ai: "Care · Ops · Intel",
    },
  },
  problems: {
    eyebrow: "What is slowing you down?",
    title: "何が事業を[[遅らせて]]いますか？",
    support:
      "成長とともに運用は手作業・ばらばらなツール・見通し不足に割れがちです。詰まっている箇所から始め、それから手段を選びます。",
    items: [
      {
        title: "手作業が多すぎる",
        body: "チームが毎日同じ作業に時間を使っている — リマインド、入力、引き継ぎ。",
        href: "/ai-transform/",
        solution: "自動化",
      },
      {
        title: "顧客を取りこぼす",
        body: "リード、フォロー、メッセージが散らばり、冷める。CRMで台帳を整え、Careが Web / Zalo / Messenger をカバー。",
        href: "/dolphin-ops/",
        solution: "CRM / Chatbot AI",
      },
      {
        title: "サイトが店の成長に効かない",
        body: "ページはあるが、訪問者が電話も連絡も残さない — デジタルプレゼンスが販売・ケアとつながっていない。",
        href: "/services/web/",
        solution: "Webサイト",
      },
      {
        title: "ツール同士がつながっていない",
        body: "顧客、販売、運用が別々のシステムに分かれ、チームが手でコピーしている。",
        href: "/services/integrations/",
        solution: "連携",
      },
      {
        title: "人に依存しすぎている",
        body: "手順と顧客情報がスタッフの頭の中にある — 引き継ぎもスケールも難しい。",
        href: "/services/software/",
        solution: "システム / CRM",
      },
      {
        title: "AIは欲しいが、どこから始めるか不明",
        body: "AIの重要性は分かるが、どの用途が実データと業務フローにつながるかわからない。",
        href: "/ai-transform/",
        solution: "実務のAI",
      },
    ],
  },
  siteOutcomes: {
    eyebrow: "Outcomes",
    title: "納品後、御社が[[自ら運用]]できる業務",
    support:
      "機能リストではありません。納品後の実際の成果です：見込み客、予約、コンテンツ、決済、運用——すべてが御社の管理下に。",
    painLead: "運用成果",
    ctaPrimary: "見積もりを依頼",
    ctaSecondary: "ウェブサイトサービスを見る",
    ctaSecondaryHref: "#capabilities",
    learnMore: "詳しく見る",
    items: [
      {
        title: "見込み客の獲得とコンバージョン",
        body: "フォーム/CTAとシンプルな問い合わせ導線——訪問者が行動し、チームがソースを追跡できます。",
        bullets: [
          "明確なフォームとCTA",
          "短い問い合わせ導線——すぐ行動",
          "チームが流入元を追跡可能",
        ],
        href: "/services/landing/",
      },
      {
        title: "安定した予約管理、重複なし",
        body: "空き枠の表示、自動確認、リマインダー送信——問い合わせ電話とダブルブッキングを削減。",
        bullets: [
          "空き枠のリアルタイム表示",
          "自動確認とリマインダー",
          "空き確認電話と重複予約を削減",
        ],
        href: "/services/web/",
      },
      {
        title: "顧客に信頼され、記憶に残るブランド",
        body: "ランディングページまたは企業サイトに集約されたコンテンツ——レスポンシブで読みやすく、信頼構築。",
        bullets: [
          "集約されたLP／企業サイト",
          "レスポンシブで読みやすい",
          "信頼を早く築くコンテンツ",
        ],
        href: "/services/landing/",
      },
      {
        title: "チームが自らコンテンツを更新",
        body: "CMS/管理画面を範囲に含む——記事、画像、価格をスタジオに依頼せず編集。",
        bullets: [
          "納品範囲にCMS／管理画面",
          "記事・画像・価格を自社で更新",
          "日常コンテンツをチームが運用",
        ],
        href: "/services/web/",
      },
      {
        title: "実際のワークフロー内で決済とメッセージング",
        body: "必要に応じてMoMo / ZaloPay / VNPay / Zalo OAを統合——手動接続より運用ミス削減。",
        bullets: [
          "必要時にMoMo / ZaloPay / VNPay",
          "問い合わせ導線にZalo OA",
          "手動接続よりミスが少ない",
        ],
        href: "/services/integrations/",
      },
      {
        title: "社内運用の整理",
        body: "ダッシュボード、ビジネスエージェント、または収集→管理ループ——10個のばらばらなツールではなく、1つの全体像。",
        bullets: [
          "ダッシュボードまたは業務エージェント",
          "収集→管理ループ",
          "10ツールではなく1つの全体像",
        ],
        href: "/dolphin-care/",
      },
    ],
  },
  why: {
    eyebrow: "Why Dolphin",
    title: "テクノロジーパートナー — [[機能の山]]は売りません",
    support:
      "成長中の多くの企業に必要なのは、ボタンが百個あるシステムではありません。遅れの原因を外すことです。Dolphinは事業から始めます — ソフトウェア・AI・自動化はその手段です。",
    promise: "We don't start with technology. We start with your problem.",
    reasons: [
      {
        title: "理解する",
        body: "販売、顧客対応、運用の実態を、ビジネスの言葉で聞く。",
      },
      {
        title: "詰まりを特定する",
        body: "時間、リード、または特定の人に依存している箇所を示す。",
      },
      {
        title: "必要なものだけ作る",
        body: "Webサイト、Chatbot AI、CRM、連携、または専用ソフト — 痛みに合うものだけ。",
      },
      {
        title: "測って改善する",
        body: "自走できる形で納品し、現場が出たら直す — 長期の伴走であり、置いて終わりにしない。",
      },
    ],
  },
  capabilities: {
    eyebrow: "Solutions",
    title: "Dolphinが事業の[[運用を良くする]]方法",
    support:
      "7つのバラバラなサービスではありません。実際の業務フローまわりで、データ→理解→判断→行動をつなぐテクノロジーの層です。",
    ctaPrimary: "御社の事業について話す",
    ctaSecondary: "御社の事業について話す",
    ctaSecondaryHref: "#contact",
    learnMore: "詳しく見る",
    prevPage: "前へ",
    nextPage: "次へ",
    pauseCarousel: "カルーセルを一時停止",
    playCarousel: "カルーセルを再生",
    offers: [
      {
        id: "website",
        title: "Webサイト & デジタルプレゼンス",
        body: "痛みが「見つけてもらう・転換する」とき — 事業目標に沿ったWeb/LP/Webアプリ。見栄えだけのページは作りません。",
        meta: "発見とコンバージョン",
        href: "/services/web/",
      },
      {
        id: "ai",
        title: "AI & スマートワークフロー",
        body: "AIは実データと業務に繋がるとき効く：反復作業、分類、チーム支援 — audit → pilot → 展開。",
        meta: "効く場所に",
        href: "/ai-transform/",
      },
      {
        id: "agents",
        title: "Dolphin Care — Chatbot AI",
        body: "Web / Zalo / Messenger 上の Chatbot AI：文脈に沿った回答、リード記録、知識範囲内の時間外サポート。",
        meta: "Web · Zalo · Messenger",
        href: "/dolphin-care/",
      },
      {
        id: "crm",
        title: "Dolphin Ops — 運用CRM",
        body: "実務の日々向けCRM：顧客、予定、フォロー、レポート — chatbox AIが正しい画面を開く。巨大な企業向けCRMではありません。",
        meta: "社内運用",
        href: "/dolphin-ops/",
      },
      {
        id: "automation",
        title: "自動化",
        body: "手順が明確な手作業を減らす：リマインド、レポート、入力 — 人が必要な仕事に集中。",
        meta: "反復作業",
        href: "/ai-transform/",
      },
      {
        id: "integrations",
        title: "システム連携",
        body: "決済、Zalo、CRM、既存ツールをつなぎ、情報が一本で流れるようにする — 手コピーを減らす。",
        meta: "既存システム",
        href: "/services/integrations/",
      },
      {
        id: "custom",
        title: "ソフトウェア & 現代化",
        body: "既製品が合わないときに業務に合わせて作る — または動いているものを、作り直し前提にせず改善。",
        meta: "業務に合わせて",
        href: "/services/software/",
      },
    ],
    moreServices: [
      {
        label: "ランディング",
        href: "/services/landing/",
      },
      {
        label: "モバイルアプリ",
        href: "/services/mobile/",
      },
      {
        label: "UI/UX",
        href: "/services/design/",
      },
      {
        label: "決済統合",
        href: "/services/integrations/",
      },
    ],
    items: [
      {
        id: "website",
        category: "Website",
        title: "Webサイト & デジタルプレゼンス",
        body: "痛みが「見つけてもらう・転換する」とき — 事業目標に沿ったWeb/LP/Webアプリ。見栄えだけのページは作りません。",
        tags: ["発見とコンバージョン"],
      },
      {
        id: "ai",
        category: "AI",
        title: "AI & スマートワークフロー",
        body: "AIは実データと業務に繋がるとき効く：反復作業、分類、チーム支援 — audit → pilot → 展開。",
        tags: ["効く場所に"],
      },
      {
        id: "agents",
        category: "AI Agent",
        title: "Dolphin Care — Chatbot AI",
        body: "Web / Zalo / Messenger 上の Chatbot AI：文脈に沿った回答、リード記録、知識範囲内の時間外サポート。",
        tags: ["Web · Zalo · Messenger"],
      },
      {
        id: "crm",
        category: "CRM",
        title: "Dolphin Ops — 運用CRM",
        body: "実務の日々向けCRM：顧客、予定、フォロー、レポート — chatbox AIが正しい画面を開く。巨大な企業向けCRMではありません。",
        tags: ["社内運用"],
      },
      {
        id: "automation",
        category: "Automation",
        title: "自動化",
        body: "手順が明確な手作業を減らす：リマインド、レポート、入力 — 人が必要な仕事に集中。",
        tags: ["反復作業"],
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "システム連携",
        body: "決済、Zalo、CRM、既存ツールをつなぎ、情報が一本で流れるようにする — 手コピーを減らす。",
        tags: ["既存システム"],
      },
      {
        id: "custom",
        category: "Custom",
        title: "ソフトウェア & 現代化",
        body: "既製品が合わないときに業務に合わせて作る — または動いているものを、作り直し前提にせず改善。",
        tags: ["業務に合わせて"],
      },
    ],
  },
  works: {
    eyebrow: "Projects",
    title: "外した運用の詰まり — [[きれいな写真]]だけではない",
    support:
      "各ケース：事業の文脈 → 詰まり → Dolphinが変えたこと → 運用価値。数字の捏造なし。技術スタックは下に。",
    cta: "御社の課題について話す",
    ctaHint: "まず会話 — 提案の前に一緒に分析します。",
    industries: [
      "スパ",
      "レストラン",
      "教育",
      "医療",
      "小売",
      "イベント",
    ],
    problemLabel: "課題",
    scopeLabel: "範囲",
    resultLabel: "結果",
    beforeLabel: "Before",
    afterLabel: "After",
    items: [
      {
        id: "billiard",
        title: "ビリヤード運営管理",
        tag: "Website · 予約",
        problem: "紙/Excel：空きテーブルが見えにくい、シフト売上の損失。",
        scope: "テーブルマップ、時間タイマー、追加オプション、Web/運営でのシフト集計。",
        result: "シフト漏れ削減、オンボーディング加速、シフトのリアルタイム確認。",
        before: "",
        after: "",
      },
      {
        id: "badminton",
        title: "バドミントンコートサイト",
        tag: "予約",
        problem: "顧客が電話で問い合わせ、管理者がスロット衝突。",
        scope: "コート紹介、空き予定、明確な予約プロセス。",
        result: "空き問い合わせ電話削減、時間枠予約がより明確に。",
        before: "",
        after: "",
      },
      {
        id: "tickets",
        title: "チケット予約とコンバージョン",
        tag: "予約 · コンバージョン",
        problem: "顧客がイベントを見るが、チケット完了前に離脱。",
        scope: "閲覧 → 選択 → 決済/予約の短いフロー。",
        result: "完了までのステップ削減、予約導線がより明確に。",
        before: "",
        after: "",
      },
      {
        id: "beauty",
        title: "美容予約",
        tag: "美容",
        problem: "予約漏れ、ダブルブッキング、営業時間外の予約困難。",
        scope: "サービス別スロット予約 + 確認。",
        result: "予約漏れ削減、営業時間外の予約がしやすい。",
        before: "",
        after: "",
      },
      {
        id: "cafe",
        title: "カフェQR注文",
        tag: "QR · 注文",
        problem: "ピーク時の注文遅延、手書きミス。",
        scope: "テーブル別QRメニュー、カート、カウンター/キッチンへ注文送信。",
        result: "注文が速く、ミスが減り、スタッフが接客に集中。",
        before: "",
        after: "",
      },
      {
        id: "clinic",
        title: "クリニック予約",
        tag: "クリニック",
        problem: "患者が電話問い合わせ、スロット衝突、再診リマインダー忘れ。",
        scope: "医師/スロット別予約 + 確認とリマインダー。",
        result: "問い合わせ電話削減、ダブルブッキング抑制。",
        before: "",
        after: "",
      },
    ],
  },
  technology: {
    eyebrow: "Ops AI",
    title: "運用のための[[実務AI]]",
    roadmap: "データ → 理解 → 判断 → 行動 → 自動化（統制つき）",
    support:
      "AIは事業の情報とプロセスに繋がるとき効く — スローガンではありません。Dolphinは価値のある1〜2件を選び、統制されたパイロットを走らせてから展開します。",
    items: [
      {
        id: "agents",
        tag: "Agents",
        title: "AI Agents — 時間を奪う仕事に",
        body: "特定のワークフローと役割のエージェント：反復部分を処理し、判断は人に残す。",
      },
      {
        id: "automation",
        tag: "Automation",
        title: "自動化 — 手作業を減らす",
        body: "フォローアップ催促、リード取得、レポート集計 — 手順が明確でデータが揃っているとき。",
      },
      {
        id: "integration",
        tag: "Integration",
        title: "現行システムに接続",
        body: "CRM、チャット、カレンダー、既存ツールをつなぐ — 全面刷新を前提にしない現代化。",
      },
    ],
    note: "Dolphinは社内でも調整・制作にAIワークフローを使います — 同じ精神：実アクションと、必要な地点のチェックポイント。",
    ctaPrimary: "AI変革のロードマップを見る",
    ctaSecondary: "部門別ユースケースを探す（Sales / Support / Operations）",
  },
  aiEdge: {
    eyebrow: "Dolphin Intelligence",
    badge: "AI Workflow",
    title: "Agent / AIワークフロー — [[顧客チャネル]]のチャットボットではない",
    support:
      "Intelligenceは多ステップを調整するアドオン：agent + action + logic + human checkpoint。Web / Zalo / Messenger のチャットボットは Dolphin Care — 別レイヤーです。",
    items: [
      {
        id: "agent",
        tag: "Agent",
        title: "役割別 AI エージェント",
        body: "各エージェントに固有の文脈と指示 — 業務ステップ列の中で一貫した判断。",
      },
      {
        id: "action",
        tag: "Action · Logic",
        title: "アクションとオーケストレーション",
        body: "API、CMS、メール、条件分岐 — エージェントが決め、アクションが実行。",
      },
      {
        id: "human",
        tag: "Human",
        title: "必要な地点のヒューマンチェック",
        body: "機微なステップは人が承認してから続行 — ブラックボックスにしない統制。",
      },
    ],
    ctaPrimary: "Dolphin Intelligence を見る",
    ctaSecondary: "AI変革のロードマップ",
    learnMore: "詳しく見る",
  },
  process: {
    eyebrow: "Process",
    title: "はっきりした協業 — 納品までの[[5ステップ]]",
    support:
      "Understand → Define → Build → Integrate → Improve。協働・透明・現場で反復 — 硬いコンサル枠組みではありません。",
    deliverableLabel: "成果物",
    steps: [
      {
        name: "傾聴と発見",
        detail: "運用の課題、目標、制約を明確化 — ツール選びはまだしない。",
        deliverable: "調整済みの課題要約、目標、制約。",
      },
      {
        name: "計画と見積り",
        detail: "範囲、マイルストーン、コスト、納品物を分解。",
        deliverable: "明確な範囲、タイムライン、見積りを含む提案。",
      },
      {
        name: "スプリント開発",
        detail: "早く作り、早くデモ — 確定前にフィードバックで調整。",
        deliverable: "早期レビュー用のスプリントビルド/デモ。",
      },
      {
        name: "QA & UAT",
        detail: "本番前に御社と受入テスト。",
        deliverable: "UATチェックリストと解決済みバグ。",
      },
      {
        name: "納品と伴走",
        detail: "デプロイ、ガイド、ドキュメント — 稼働後の技術サポートは合意どおり。",
        deliverable: "ソース、環境、管理画面（該当時）、ガイド、保証。",
      },
    ],
  },
  fit: {
    eyebrow: "Fit",
    title: "運用を上げる準備ができた企業に[[合う]]",
    support:
      "成長中のSMBとスタートアップ — スパ、サロン、教育、クリニック、サービス、柔軟なシステムが必要なモデル。よくある痛み：ばらばらなExcel/チャット、転換しないサイト、実務AI、現行システムの現代化。技術に詳しくなくても大丈夫：ビジネスの言葉で進めます。",
    exploreCta: "適合するプロファイルを見る",
    matrix: [
      {
        profile: "自ら運用できるWeb / デジタルプレゼンスが必要",
        recommended: "企業サイトまたはランディング",
        note: "CMS、運用ガイド、技術保証 — 痛みが発見とコンバージョンのとき。",
      },
      {
        profile: "予算を抑えつつ早くローンチしたいスタートアップ",
        recommended: "ランディングまたは段階的MVP",
        note: "まず走れる形で納品し、マイルストーンごとに拡張。",
      },
      {
        profile: "予約 / リード / 顧客ケアまわりの手作業を減らしたい",
        recommended: "Ops CRM + Care（Web / Zalo / Messenger）± 連携",
        note: "電話・Excel・散らばったメッセージに頼っているときに適合。",
      },
      {
        profile: "レガシーを上げたい、または既存基盤にAIを載せたい",
        recommended: "現代化 + 統制されたAIロードマップ",
        note: "現行システムを先に分析 — 余分な機能は押しません。",
      },
    ],
  },
  popularServicesChrome: {
    eyebrow: "Website packages",
    title: "Website / Landing — CRMコンボで[[成約支援]]",
    support:
      "代理店カタログではありません。Landing / 企業サイトは一回払い — 2026料金ポリシーでCRM（±AI）契約時に贈呈または大幅割引。",
  },
  faq: {
    eyebrow: "FAQ",
    title: "[[よくある]]質問",
    support:
      "Dolphinの仕事 · 適合顧客 · 現代化か新規か · 実務AI · 協業の進め方 — 開始前に答えます。",
    items: [
      {
        q: "Dolphin Softwareは何をしますか？",
        a: "Dolphin Softwareは成長中の企業向けテクノロジーパートナーです。実際の業務フローに沿ったソフトウェア・AI・自動化で運用を現代化します — 製品カタログからではなく、事業の課題から始めます。",
      },
      {
        q: "どのような企業と働きますか？",
        a: "主に成長中のSMBとスタートアップ — スパ、サロン、教育、クリニック、サービス、柔軟なシステムが必要なモデル。Excelや散らばったメッセージを超えつつある、または運用の上げ方を探している場合がよく当てはまります。",
      },
      {
        q: "DolphinはWebサイトだけですか？",
        a: "いいえ。Webは「見つけてもらう・転換する」痛みのときの一つの手段です。ほかに運用CRM（Ops）、顧客チャネルのChatbot AI（Care）、連携、自動化、業務向けソフトウェアもあります。",
      },
      {
        q: "新規構築と現行のアップグレード、どちらですか？",
        a: "両方です。使えるレガシーは現代化を優先し、既製品が業務に合わないときだけ新規。全面作り直しを前提にしません。",
      },
      {
        q: "使っているソフト / チャネルと連携できますか？",
        a: "多くの場合できます — 決済、Zalo、CRM、既存ツール。連携範囲は実フローを把握したあとの見積りに明記します。",
      },
      {
        q: "AIは自社にどう適用しますか？",
        a: "実データとプロセスに繋がるとき：Care（Web/Zalo/Messengerのチャットボット）、Ops（CRM上のchatbox）、またはワークフロー/エージェント（Intelligence）。「AIを買う」から始めず、時間を奪っている仕事から始めます。",
      },
      {
        q: "今のシステムを全部置き換える必要がありますか？",
        a: "必須ではありません。多くはつなぎと部分的な改善です。全面置換は双方が合理的と判断したときだけ。",
      },
      {
        q: "店舗の業務に合わせた個別ソリューションは作れますか？",
        a: "はい — 既製パッケージで足りないとき、業務フローに沿ったソフトとワークフロー。範囲・マイルストーン・納品は着手前に確定します。",
      },
      {
        q: "技術に詳しくない企業でも協力できますか？",
        a: "できます。詰まっている箇所をビジネスの言葉で教えてください。Dolphinが範囲、納品、運用ガイドを提案します。",
      },
      {
        q: "Dolphinとの協業はどう進みますか？",
        a: "理解 → 範囲と見積り → スプリント/デモ → UAT → 納品と伴走。各ステップに明確な成果物。範囲変更は双方の合意のみ。",
      },
      {
        q: "見積りと隠れた費用は？",
        a: "ContactまたはZaloで短いブリーフを。初期アプローチと想定範囲を返します — 合意範囲外の費用はありません。",
      },
      {
        q: "納品後のメンテナンスと新機能の違いは？",
        a: "納品後：ガイド + 受入範囲内の技術バグ保証（合意どおり）。新機能は別見積り。",
      },
      {
        q: "どうやって始めますか？",
        a: "ContactフォームまたはZaloで詰まっている箇所を教えてください。「WebかAIか」を先に決める必要はありません — 痛みに合う次の一歩を一緒に選びます。",
      },
    ],
  },
  contactChrome: {
    eyebrow: "Next step",
    title: "より良い運用の[[仕組み]]を一緒に",
    support:
      "事業のいまの位置と、詰まっている箇所を教えてください。次に改善すべきテクノロジーを提案します — パッケージの押し付けはありません。",
    nextHint: "通常営業日内に回答。",
    afterSubmitTitle: "ブリーフ送信後：",
    afterSubmitItems: [
      "運用課題に対する初期アプローチ",
      "痛みに合う範囲提案：Web · Care · Ops · 連携 · ソフトウェア",
      "タイムラインのマイルストーンと推定コスト帯",
    ],
  },
  seo: {
    title: "Dolphin Software – 成長企業のための運用テクノロジー",
    description:
      "Dolphin SoftwareはSMBとスタートアップ向けのテクノロジーパートナー：実際の業務フローに沿ったソフトウェア・AI・自動化で運用を現代化 — Web、CRM、Chatbot AI、連携。製品からではなく課題から始めます。",
    og_title: "Dolphin Software – 成長企業のための運用テクノロジー",
    og_description:
      "成長中の企業がより明確に走るために：実ワークフローに繋がるソフトウェア + AI + 自動化。安いWeb代理店でも、AIハイプでもありません。",
    canonical: "https://dolphin-software.io.vn/",
    keywords: [
      "企業向け運用テクノロジー",
      "SMB向けソフトウェア",
      "業務ソフトウェア現代化",
      "業務プロセス自動化",
      "運用CRM",
      "Chatbot AI Web Zalo Messenger",
      "Dolphin Software",
      "Dolphin Care",
      "Dolphin Ops",
    ],
  },
};
