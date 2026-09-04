/**
 * Homepage copy — Japanese overlay synced from VI SoT.
 */
import type { HomepageLang } from "./homepage_lang_vi";

export const homepageLangJa: HomepageLang = {
  hero: {
    eyebrow: "Dolphin Software",
    aiPill: "",
    headline: "ビジネスの課題を[[AIとテクノロジー]]で解く",
    subhead: "まず事業を理解し、技術が本当に効く箇所を見極め、必要なものだけを作る。",
    support: "Dolphinは成長中の企業の運用ボトルネックを特定し、Webサイト、AIエージェント、CRM、自動化、カスタムソフトウェアなど、合う手段で解消します。",
    trustLine: "We don't start with technology. We start with your problem.",
    ctaPrimary: "事業について話す",
    ctaSecondary: "ソリューションを見る",
    tags: ["課題から", "AIと技術", "Webは一つの手段"],
    metrics: [
      { value: "6+", label: "掲載ケース" },
      { value: "Pain", label: "課題から始める" },
    ],
    visual: {
      web: "Web & App",
      automation: "Automation",
      ai: "AI統合"
    }
  },
  problems: {
    eyebrow: "What is slowing you down?",
    title: "何が事業を[[遅らせて]]いますか？",
    support: "カタログから始めません。詰まっている箇所から始め、それから手段を選びます。",
    items: [
      {
        title: "手作業が多すぎる",
        body: "チームが毎日同じ作業に時間を使っている。",
        href: "/ai-transform/",
        solution: "自動化",
      },
      {
        title: "顧客を取りこぼす",
        body: "リード、フォロー、メッセージが散らばり、冷める。CRMで台帳、Careでサイト対応。",
        href: "/dolphin-ops/",
        solution: "CRM / AI対応",
      },
      {
        title: "サイトが集客に効かない",
        body: "ページはあるが、訪問者が電話も連絡も残さない。",
        href: "/services/web/",
        solution: "Webサイト",
      },
      {
        title: "ツール同士がつながっていない",
        body: "顧客、販売、運用が別々のシステムに分かれている。",
        href: "/services/integrations/",
        solution: "連携",
      },
      {
        title: "人に依存しすぎている",
        body: "手順と顧客情報がスタッフの頭の中にある。",
        href: "/services/software/",
        solution: "システム / CRM",
      },
      {
        title: "AIは欲しいが、どこから始めるか不明",
        body: "AIの重要性は分かるが、どの用途が価値を出すか不明。",
        href: "/ai-transform/",
        solution: "AIソリューション",
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
    title: "機能の山を[[売りません]]",
    support: "多くの企業に必要なのは、ボタンが百個あるシステムではありません。遅れの原因を外すことです。Dolphinは製品ではなく、事業から始めます。",
    promise: "We don't start with technology. We start with your problem.",
    reasons: [
      {
        title: "理解する",
        body: "販売、顧客対応、運用の実態を、ビジネスの言葉で聞く。"
      },
      {
        title: "詰まりを特定する",
        body: "時間、リード、または特定の人に依存している箇所を示す。"
      },
      {
        title: "必要なものだけ作る",
        body: "Web、AI、CRM、連携、または専用ソフト — 痛みに合うものだけ。"
      },
      {
        title: "測って改善する",
        body: "自走できる形で納品し、現場が出たら直す — 置いて終わりにしない。"
      }
    ]
  },
  capabilities: {
    eyebrow: "Solutions",
    title: "事業の回り方に沿った[[ソリューション]]",
    support: "7つのバラバラな受託サービスではありません。運用の一つの詰まりを外すための手段です。",
    ctaPrimary: "事業について話す",
    ctaSecondary: "事業について話す",
    ctaSecondaryHref: "#contact",
    learnMore: "詳しく見る",
    prevPage: "前へ",
    nextPage: "次へ",
    pauseCarousel: "カルーセルを一時停止",
    playCarousel: "カルーセルを再生",
    offers: [
      {
        id: "website",
        title: "Webサイト",
        body: "事業目標に沿ったWebサイトとWebアプリ — 見つかり、理解され、連絡しやすい。",
        meta: "発見とコンバージョン",
        href: "/services/web/"
      },
      {
        id: "ai",
        title: "AIソリューション",
        body: "実務のAI：反復作業、分類、チーム支援 — 痛みが明確になってから。",
        meta: "効く場所に",
        href: "/ai-transform/"
      },
      {
        id: "agents",
        title: "AIエージェント",
        body: "Dolphin Care — サイト上の顧客対応、リード記録、知識範囲内の時間外サポート。",
        meta: "サイト上",
        href: "/dolphin-care/"
      },
      {
        id: "crm",
        title: "CRMと顧客",
        body: "Dolphin Ops — 顧客、予定、フォローを一箇所に。チャットに散らさない。",
        meta: "社内運用",
        href: "/dolphin-ops/"
      },
      {
        id: "automation",
        title: "自動化",
        body: "反復の手作業を減らす：リマインド、レポート、入力 — 手順が明確になってから。",
        meta: "反復作業",
        href: "/ai-transform/"
      },
      {
        id: "integrations",
        title: "連携",
        body: "決済、Zalo、CRM、既存システムをつなぎ、情報が一本で流れるようにする。",
        meta: "既存システム",
        href: "/services/integrations/"
      },
      {
        id: "custom",
        title: "専用ソフトとレガシー",
        body: "既製品が合わないときに社内システムを作る — または動いているものを、作り直し前提にせず改善。",
        meta: "業務に合わせて",
        href: "/services/software/"
      }
    ],
    moreServices: [
      {
        label: "ランディング",
        href: "/services/landing/"
      },
      {
        label: "モバイルアプリ",
        href: "/services/mobile/"
      },
      {
        label: "UI/UX",
        href: "/services/design/"
      },
      {
        label: "決済統合",
        href: "/services/integrations/"
      }
    ],
    items: [
      {
        id: "website",
        category: "Website",
        title: "Webサイト",
        body: "事業目標に沿ったWebサイトとWebアプリ — 見つかり、理解され、連絡しやすい。",
        tags: ["発見とコンバージョン"]
      },
      {
        id: "ai",
        category: "AI",
        title: "AIソリューション",
        body: "実務のAI：反復作業、分類、チーム支援 — 痛みが明確になってから。",
        tags: ["効く場所に"]
      },
      {
        id: "agents",
        category: "AI Agent",
        title: "AIエージェント",
        body: "Dolphin Care — サイト上の顧客対応、リード記録、知識範囲内の時間外サポート。",
        tags: ["サイト上"]
      },
      {
        id: "crm",
        category: "CRM",
        title: "CRMと顧客",
        body: "Dolphin Ops — 顧客、予定、フォローを一箇所に。チャットに散らさない。",
        tags: ["社内運用"]
      },
      {
        id: "automation",
        category: "Automation",
        title: "自動化",
        body: "反復の手作業を減らす：リマインド、レポート、入力 — 手順が明確になってから。",
        tags: ["反復作業"]
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "連携",
        body: "決済、Zalo、CRM、既存システムをつなぎ、情報が一本で流れるようにする。",
        tags: ["既存システム"]
      },
      {
        id: "custom",
        category: "Custom",
        title: "専用ソフトとレガシー",
        body: "既製品が合わないときに社内システムを作る — または動いているものを、作り直し前提にせず改善。",
        tags: ["業務に合わせて"]
      }
    ]
  },
  works: {
    eyebrow: "Projects",
    title: "実際に外した[[詰まり]] — きれいな写真だけではない",
    support: "各ケース：詰まっていた箇所 → 作った範囲 → 納品後に変わったこと。技術スタックは下に。",
    cta: "御社の課題について話す",
    ctaHint: "ご相談ください——ソリューション提案前に一緒に分析します。",
    industries: [
      "スパ",
      "レストラン",
      "教育",
      "医療",
      "小売",
      "イベント"
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
        after: ""
      },
      {
        id: "badminton",
        title: "バドミントンコートサイト",
        tag: "予約",
        problem: "顧客が電話で問い合わせ、管理者がスロット衝突。",
        scope: "コート紹介、空き予定、明確な予約プロセス。",
        result: "空き問い合わせ電話削減、時間枠予約の精度向上。",
        before: "",
        after: ""
      },
      {
        id: "tickets",
        title: "チケット予約とコンバージョン最適化",
        tag: "予約 · コンバージョン",
        problem: "顧客がイベントを見るが、チケット完了前に離脱。",
        scope: "閲覧 → 選択 → 決済/予約フローのコンバージョン最適化。",
        result: "予約ステップ削減、予約完了率向上。",
        before: "",
        after: ""
      },
      {
        id: "beauty",
        title: "美容予約",
        tag: "美容",
        problem: "予約漏れ、ダブルブッキング、営業時間外の予約困難。",
        scope: "ネイル/メイク/サービス別のスロット予約 + 確認。",
        result: "予約漏れ削減、営業時間外予約増加。",
        before: "",
        after: ""
      },
      {
        id: "cafe",
        title: "カフェQR注文",
        tag: "QR · 注文",
        problem: "ピーク時の注文遅延、手書きミス。",
        scope: "テーブル別QRメニュー、カート、カウンター/キッチンへ注文送信。",
        result: "注文スピード向上、ミス削減、スタッフが接客に集中。",
        before: "",
        after: ""
      },
      {
        id: "clinic",
        title: "クリニック予約",
        tag: "クリニック",
        problem: "患者が電話問い合わせ、スロット衝突、再診リマインダー忘れ。",
        scope: "医師/スロット別予約 + 確認とリマインダー。",
        result: "問い合わせ電話削減、ダブルブッキング削減。",
        before: "",
        after: ""
      }
    ]
  },
  technology: {
    eyebrow: "Ops AI",
    title: "運用向けの[[AIソリューション]]",
    roadmap: "管理されたAIロードマップ：audit → pilot → 展開",
    support:
      "Dolphinは空想的なAIを売りません。実際の業務を見直し、最も価値のある1〜2件を選び、数値で測れるパイロットを走らせてから展開します。",
    items: [
      {
        id: "agents",
        tag: "Agents",
        title: "AI Agents — 正しい作業を自動化",
        body: "ワークフローと役割ごとのカスタムエージェントが、チームの時間を奪う反復作業を処理します。",
      },
      {
        id: "automation",
        tag: "Automation",
        title: "AI Automation — 手作業を減らす",
        body: "リード獲得、フォローアップ催促、レポート集計など、運用の反復ステップを自動化します。",
      },
      {
        id: "integration",
        tag: "Integration",
        title: "AI Integration — 現行システムと接続",
        body: "CRM、チャット、カレンダー、既存ツールにAIを接続 — 全面刷新は不要です。",
      },
    ],
    note: "Dolphinは社内でもAIエージェント・ワークフローを運用しています — 調整、コンテンツ、デザインからソフトウェア開発まで。",
    ctaPrimary: "AI変革のロードマップを見る",
    ctaSecondary: "部門別ユースケースを探す（Sales / Support / Operations）",
  },
  aiEdge: {
    eyebrow: "Dolphin Intelligence",
    badge: "AI Workflow",
    title: "繰り返し業務を[[自動AIワークフロー]]へ",
    support:
      "Dolphin Intelligence は役割別 AI エージェント、実世界アクション、条件ロジック、ヒューマンチェックポイントを組み合わせます — 単発チャットボットではありません。",
    items: [
      {
        id: "agent",
        tag: "Agent",
        title: "役割別 AI エージェント",
        body: "Research / Content / SEO / Review… コンテキスト・指示・スキーマで一貫した判断。",
      },
      {
        id: "action",
        tag: "Action · Logic",
        title: "アクションとオーケストレーション",
        body: "API・CMS・メール・公開；cron・分岐・ループ — エージェントが決め、アクションが実行。",
      },
      {
        id: "human",
        tag: "Human",
        title: "必要な地点のヒューマンチェック",
        body: "トピック・SEO・公開前に人が承認 — ブラックボックスにせず統制を保つ。",
      },
    ],
    ctaPrimary: "Dolphin Intelligence を見る",
    ctaSecondary: "AI変革のロードマップ",
    learnMore: "詳しく見る",
  },
  process: {
    eyebrow: "Process",
    title: "[[明確な納品]]を伴う5ステッププロセス",
    support: "ディスカバリーから納品まで——各ステップで明確な成果物、スキップなし。",
    deliverableLabel: "成果物",
    steps: [
      {
        name: "傾聴と発見",
        detail: "Webサイト/アプリの目標と予算、時間制約を明確化。",
        deliverable: "調整済みの課題要約、目標、制約。"
      },
      {
        name: "計画と見積り",
        detail: "機能、マイルストーン、コスト、納品物を分解。",
        deliverable: "明確な範囲、タイムライン、見積りを含む提案。"
      },
      {
        name: "スプリント開発",
        detail: "UI、機能、レスポンシブ、統合を納品——早期調整のためのデモ。",
        deliverable: "早期レビュー用のスプリントビルド/デモ。"
      },
      {
        name: "QA & UAT",
        detail: "本番前に御社と品質チェックと受入テスト。",
        deliverable: "UAT チェックリストと解決済みバグリスト。"
      },
      {
        name: "納品とパートナーシップ",
        detail: "デプロイ、運用ガイド、ドキュメント——さらに稼働後の技術サポート。",
        deliverable: "ソースコード、ドメイン/ホスティング & 環境、管理画面（該当する場合）、ガイド、合意された保証。"
      }
    ]
  },
  fit: {
    eyebrow: "Fit",
    title: "Dolphin Softwareは誰に[[最適]]か？",
    support: "Dolphin Softwareは、ベトナムの中小企業（SMB）で次のニーズがある場合に最適です：ゼロからのカスタムWebサイト設計、運用困難を引き起こすレガシーシステムの刷新、または実際のワークフローへのAI自動化統合。技術に詳しくなくても大丈夫——チームはビジネス言語で作業し、運用可能になるまで納品します。",
    exploreCta: "適合するプロファイルを見る",
    matrix: [
      {
        profile: "自ら運用できるWebサイトが必要な企業",
        recommended: "企業サイトまたはWebアプリ",
        note: "CMS、運用ガイド、技術保証を含む。"
      },
      {
        profile: "予算管理しながら迅速なローンチが必要なスタートアップ",
        recommended: "ランディングページまたは段階的MVP",
        note: "まずMVPを納品、マイルストーンごとに拡張——予算管理と早期検証。"
      },
      {
        profile: "予約/リード/決済を自動化したい企業",
        recommended: "Webアプリ + 決済統合 + Dolphin Care",
        note: "現在のプロセスが手動電話またはExcelベースの場合に適合。"
      },
      {
        profile: "レガシーシステムを刷新または既存インフラにAIを追加したい企業",
        recommended: "システム刷新 + AIロードマップ",
        note: "Dolphin Softwareは見積り前に現行システムを分析——不要な機能を押し付けません。"
      }
    ]
  },
  popularServicesChrome: {
    eyebrow: "Website packages",
    title: "見つけてもらい、[[転換]]するためのWebパッケージ",
    support: "痛みがGoogle / LP / ショップのときの4パッケージ — Dolphinの全カタログではありません。パッケージを選び、見積りまたはZaloへ。"
  },
  faq: {
    eyebrow: "FAQ",
    title: "[[よくある]]質問",
    support: "タイムライン · 見積り · 保証 · セキュリティ——開始前に回答。",
    items: [
      {
        q: "Dolphin Softwareは何をしますか？",
        a: "Dolphin Softwareは企業向けのAI・テクノロジーソリューション会社です。運用の課題から始め、Webサイト、AIエージェント、CRM、自動化、連携、専用ソフトを選びます。どの技術が必要か分からなくても始められます。詰まっている箇所を教えてください。"
      },
      {
        q: "技術に詳しくない企業でも協力できますか？",
        a: "はい。Dolphin Softwareのクライアントのほとんどはコーディングしません。アイデアまたは短いブリーフを共有するだけ——チームはビジネス言語で範囲を定義し、エンドツーエンドで納品し、完了後の運用をガイドします。"
      },
      {
        q: "ワークフローはどのように進みますか？",
        a: "目標明確化 → 範囲とコスト確定 → 納品物を伴うスプリント → UAT → 納品とサポート。次のステップが常に明確です。"
      },
      {
        q: "見積りはどう機能しますか？隠れた費用はありますか？",
        a: "Contact、「見積りを依頼」、またはZalo経由で短いブリーフを送信。Dolphin Softwareが予想範囲と次のステップで回答——合意範囲外の費用はありません。"
      },
      {
        q: "一般的なタイムラインは？",
        a: "ランディングページ：約3〜5日。企業サイト：約7〜14日。ショップ/EC：約3〜4週間。アプリ/ワークフロー：範囲による。範囲確定後の見積りに具体的な日付。"
      },
      {
        q: "SEOとモバイル対応は含まれますか？",
        a: "デフォルトでレスポンシブ対応、明確な見出し/メタ、基本的なオンページSEOを含む。長期SEOコンテンツまたは大規模広告キャンペーンは別範囲として追加可能。"
      },
      {
        q: "リモート作業は可能ですか？",
        a: "はい——チャット/通話、定期デモ、明確な納品ドキュメント。全国のクライアントと協力可能。"
      },
      {
        q: "納品後のメンテナンスと新機能の違いは？",
        a: "納品後：運用ガイドと受入範囲内の技術バグ保証（通常3〜6ヶ月）。新機能は別——見積り優先、保証対象外。"
      },
      {
        q: "セキュリティとデータはどう処理されますか？",
        a: "HTTPS、アクセス制御、環境変数、シークレットコミットなし。データは御社のものです。監査/SSO/コンプライアンスは範囲に追加可能。"
      },
      {
        q: "プロジェクト途中で範囲が膨らみませんか？",
        a: "範囲は見積りステップで確定。範囲外の要求は記録され、再見積りされ、御社の同意時のみ実行されます。"
      },
      {
        q: "段階的なMVPは可能ですか？",
        a: "はい。Dolphin Softwareは実行可能なMVPを優先し、マイルストーンごとに拡張——早期検証と予算管理。"
      },
      {
        q: "AIエージェントとマーケティングチャットボットの違いは？",
        a: "マーケティングチャットボットはスクリプトからFAQに回答。Dolphin Softwareのエージェントはビジネスワークフロー、ツール、社内コンテキストと統合——運用サポート、販売チャットだけではありません。"
      },
      {
        q: "どうやって始めますか？",
        a: "ContactフォームまたはZaloで詰まっている箇所を教えてください。「WebかAIか」を先に決める必要はありません。Dolphinが痛みに合う範囲を提案します。"
      }
    ]
  },
  contactChrome: {
    eyebrow: "Next step",
    title: "[[御社の事業]]について話す",
    support: "どの技術が必要か分からなくても大丈夫です。詰まっている箇所を教えてください。Dolphinがアプローチと適切な範囲で返します。パッケージの押し付けはありません。",
    nextHint: "通常営業日内に回答。",
    afterSubmitTitle: "ブリーフ送信後、以下を受け取ります：",
    afterSubmitItems: [
      "御社の課題に対する初期アプローチ",
      "痛みに合う範囲提案：Webサイト · AI · CRM · 連携 · 専用ソフト",
      "タイムラインマイルストーンと推定コスト範囲"
    ]
  },
  seo: {
    title: "Dolphin Software – 企業向けAI・テクノロジーソリューション",
    description: "Dolphin Softwareは運用の詰まりを特定し、Webサイト、AIエージェント、CRM、自動化、連携、専用ソフトで解消します。技術からではなく、課題から始めます。",
    og_title: "Dolphin Software – 企業向けAI・テクノロジーソリューション",
    og_description: "技術から始めません。課題から始めます。Web、AI、CRM、自動化、専用ソフト — 事業に本当に必要なものだけ。",
    canonical: "https://dolphin-software.io.vn/",
    keywords: [
      "企業向けAIとテクノロジーソリューション",
      "カスタムWebサイト設計",
      "中小企業向けCRM",
      "業務プロセス自動化",
      "専用管理ソフト",
      "Dolphin Software",
      "Dolphin Care",
      "Dolphin Ops"
    ]
  }
};
