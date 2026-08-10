/**
 * Homepage copy — Japanese overlay synced from VI SoT.
 */
import type { HomepageLang } from "./homepage_lang_vi";

export const homepageLangJa: HomepageLang = {
  hero: {
    eyebrow: "Dolphin Software",
    aiPill: "",
    headline: "テクノロジーを企業の[[負担]]にさせない",
    subhead: "Webサイト構築 · レガシーシステム刷新 · 適切なAI統合",
    support: "Dolphin Softwareは中小企業向けに、要件に応じたWebサイト設計、レガシーシステムの刷新、実用的なAI自動化を支援し、時間を節約し運用効率を実質的に向上させます。",
    trustLine: "まず理解する · 明確な見積り · 不要な営業なし",
    ctaPrimary: "見積りを依頼",
    ctaSecondary: "Webサービスを見る",
    tags: ["Automation", "Web & App", "適切なAI"],
    metrics: [
      { value: "6+", label: "掲載ケース" },
      { value: "Build", label: "SMB向け優先" },
    ],
    visual: {
      web: "Web & App",
      automation: "Automation",
      ai: "AI統合"
    }
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
    title: "長期パートナー、コードを渡すだけ[[ではない]]",
    support: "明確なタイムライン、確約された範囲、納品後サポート——技術的な霧はありません。",
    promise: "まず理解 · 明確な見積り · 範囲どおり納品",
    reasons: [
      {
        title: "実戦経験",
        body: "7年間の実運用——信頼性、観察力、中小企業向けエンドツーエンド納品。"
      },
      {
        title: "エンドツーエンドの納品",
        body: "ディスカバリーからデプロイまで——1チームが責任を持ち、将来の拡張に対応する構造。"
      },
      {
        title: "透明なプロセス",
        body: "マイルストーン、定期デモ、範囲ベースの見積り——実際の納品物で測定。"
      },
      {
        title: "納品後サポート",
        body: "運用ガイド、合意されたバグ保証、実際のニーズに応じた最適化。"
      }
    ]
  },
  capabilities: {
    eyebrow: "How we help",
    title: "明確なWebサイト、企業が[[実際に]]運用できる",
    support: "短いブリーフで十分です。最も近いアウトカムを選択——Dolphin Softwareがアプローチと具体的な見積りを提案します。",
    ctaPrimary: "見積りを依頼",
    ctaSecondary: "サービスパッケージを見る",
    ctaSecondaryHref: "#popular-services",
    learnMore: "詳細を見る",
    prevPage: "前へ",
    nextPage: "次へ",
    pauseCarousel: "カルーセルを一時停止",
    playCarousel: "カルーセルを再生",
    offers: [
      {
        id: "build",
        title: "Build",
        body: "販売・運用に合うWebサイトとソフトウェアを要件どおり構築——紹介だけのサイトではありません。",
        meta: "SMB優先",
        href: "/services/web/"
      },
      {
        id: "modernize",
        title: "Modernize",
        body: "一から作り直す前に、稼働中のシステムを拡張・最適化・モダナイズ。",
        meta: "既存システム",
        href: "/services/software/"
      },
      {
        id: "automate",
        title: "Automate",
        body: "価値がある反復作業にAI——人の代わりではなく、手作業を減らす。",
        meta: "反復ワークフロー",
        href: "/ai-transform/"
      },
      {
        id: "care",
        title: "Care",
        body: "Dolphin Care — サイト上の顧客対応、リード記録、知識範囲内の時間外サポート。",
        meta: "サイト上",
        href: "/dolphin-care/"
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
        id: "build",
        category: "Build",
        title: "Build",
        body: "販売・運用に合うWebサイトとソフトウェアを要件どおり構築——紹介だけのサイトではありません。",
        tags: [
          "SMB優先"
        ]
      },
      {
        id: "modernize",
        category: "Modernize",
        title: "Modernize",
        body: "一から作り直す前に、稼働中のシステムを拡張・最適化・モダナイズ。",
        tags: [
          "既存システム"
        ]
      },
      {
        id: "automate",
        category: "Automate",
        title: "Automate",
        body: "価値がある反復作業にAI——人の代わりではなく、手作業を減らす。",
        tags: [
          "反復ワークフロー"
        ]
      },
      {
        id: "care",
        category: "Care",
        title: "Care",
        body: "Dolphin Care — サイト上の顧客対応、リード記録、知識範囲内の時間外サポート。",
        tags: [
          "サイト上"
        ]
      }
    ]
  },
  works: {
    eyebrow: "Projects",
    title: "実際に展開したWebサイト",
    support: "以下の各プロジェクト：課題 → 範囲 → 測定可能な結果。",
    cta: "このようなWebサイトをご希望ですか？",
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
    eyebrow: "AI Philosophy",
    title: "[[散在する]]シグナルを1つのコンソールに",
    support: "以前：Slack、Jira、ドキュメントが実データを分断。適用後：収集 → 標準化 → 運用 → 管理——すべての全体像を1つの透明なフローに。",
    cta: "詳細を見る",
    live: "live",
    tabs: [
      "概要",
      "データ",
      "インサイト",
      "アラート"
    ],
    widgets: {
      activity: "アクティビティ",
      pulse: "システム状態",
      nodes: "実行中ノード"
    },
    principles: [
      {
        title: "ツールよりプロセス優先",
        body: ""
      },
      {
        title: "数値で測定",
        body: ""
      },
      {
        title: "常に人間が制御",
        body: ""
      }
    ]
  },
  aiEdge: {
    eyebrow: "Ops AI",
    badge: "Automate",
    title: "Webサイトが基盤——[[AI]]はその上のスマートレイヤー",
    support: "Web & アプリがDolphin Softwareの核心です。実際に有益な場合、チャット、自動化、プロセスエージェントを追加——現実的で、SF小説ではありません。",
    items: [
      {
        id: "chat",
        tag: "On-site",
        title: "御社のWebサイト上のAIチャット & FAQ",
        body: "よくある質問に回答し、稼働中のWebサイトで直接リードを獲得。"
      },
      {
        id: "workflow",
        tag: "Automation",
        title: "スマートワークフロー & 自動フォーム",
        body: "予約、見積り、リード振り分けを自動化——手動ステップを削減。"
      },
      {
        id: "agent",
        tag: "Integration",
        title: "CRM / Zalo連携エージェント",
        body: "ビジネスエージェントが実際のワークフローと統合、ライブシステムに接続——測定可能な結果。"
      }
    ],
    ctaTransform: "企業AI変革",
    ctaAgent: "Dolphin Careを見る"
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
    eyebrow: "Solutions",
    title: "[[人気]]サービス",
    support: "4つの主要パッケージを比較——適合するパッケージを選択し、見積りを依頼またはZaloチャット。カスタム範囲、レガシーシステム統合、業界特化SEOが必要ですか？Dolphin Softwareは見積り前に各項目を詳細に分析します。"
  },
  faq: {
    eyebrow: "FAQ",
    title: "[[よくある]]質問",
    support: "タイムライン · 見積り · 保証 · セキュリティ——開始前に回答。",
    items: [
      {
        q: "Dolphin Softwareは何をしますか？",
        a: "Dolphin Softwareは中小企業（SMB）がビジネス課題から運用可能なシステムへ移行するのを支援します——Webサイト、モバイル、自動化、AI。目標を述べるだけで、Dolphin Softwareが適切な範囲を提案します。"
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
        a: "「見積りを依頼」をクリック、Zaloチャット、または目標、期限、推定予算（あれば）を記載したContactフォームを送信。"
      }
    ]
  },
  contactChrome: {
    eyebrow: "Next step",
    title: "Webサイト構築またはワークフロー[[自動化]]の準備はできましたか？",
    support: "短いブリーフを送信——Dolphin Softwareがアプローチと適切な範囲で回答、パッケージ押し付けなし。",
    nextHint: "通常営業日内に回答。",
    afterSubmitTitle: "ブリーフ送信後、以下を受け取ります：",
    afterSubmitItems: [
      "御社の課題に対する初期アプローチ",
      "範囲提案：Webサイト · 刷新 · AI自動化 · Dolphin Care",
      "タイムラインマイルストーンと推定コスト範囲"
    ]
  },
  seo: {
    title: "Dolphin Software – 中小企業向けWebサイト設計とAI",
    description: "Dolphin Softwareはベトナムの中小企業向けに、カスタムWebサイト構築、レガシーシステム刷新、AI自動化統合を提供。透明な見積り、期限内納品。",
    og_title: "Dolphin Software – Webサイト設計 · システム刷新 · AI自動化",
    og_description: "中小企業が運用可能なWebサイトを構築し、レガシーシステムを刷新し、適切な場所にAIを適用——時間を節約し、運用効率を向上。",
    canonical: "https://dolphin-software.io.vn/",
    keywords: [
      "カスタムWebサイト設計",
      "レガシーシステム刷新",
      "企業向けAI自動化",
      "中小企業向けWebサイト設計",
      "Dolphin Software",
      "Dolphin Care",
      "WebサイトへのAI統合",
      "ベトナムWeb設計会社"
    ]
  }
};
