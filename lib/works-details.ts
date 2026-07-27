import type { Locale } from "@/lib/i18n/types";

export const WORK_SLUGS = [
  "billiard",
  "badminton",
  "tickets",
  "beauty",
  "cafe",
  "clinic",
] as const;

export type WorkSlug = (typeof WORK_SLUGS)[number];

export function isWorkSlug(value: string): value is WorkSlug {
  return (WORK_SLUGS as readonly string[]).includes(value);
}

export type WorkDetail = {
  title: string;
  tag: string;
  intro: string;
  problem: string;
  scope: string;
  highlights: string[];
  outcomes: string[];
  image: string;
};

export type WorkDetailUi = {
  back: string;
  problemTitle: string;
  scopeTitle: string;
  highlightsTitle: string;
  outcomesTitle: string;
  cta: string;
  viewDesign: string;
  mockupAlt: string;
  viewerClose: string;
  viewerLabel: string;
};

const ui: Record<Locale, WorkDetailUi> = {
  vi: {
    back: "← Về dự án SMB",
    problemTitle: "Bài toán",
    scopeTitle: "Phạm vi",
    highlightsTitle: "Tính năng chính",
    outcomesTitle: "Kết quả",
    cta: "Muốn làm website tương tự?",
    viewDesign: "Xem design",
    mockupAlt: "Mockup trang chủ portal quán bida cao cấp",
    viewerClose: "Đóng",
    viewerLabel: "Design UI quán bida",
  },
  en: {
    back: "← Back to SMB works",
    problemTitle: "Problem",
    scopeTitle: "Scope",
    highlightsTitle: "Key features",
    outcomesTitle: "Outcomes",
    cta: "Want a similar website?",
    viewDesign: "View design",
    mockupAlt: "Premium billiard portal homepage mockup",
    viewerClose: "Close",
    viewerLabel: "Billiard shop UI design",
  },
  de: {
    back: "← Zurück zu SMB-Projekten",
    problemTitle: "Problem",
    scopeTitle: "Scope",
    highlightsTitle: "Kernfunktionen",
    outcomesTitle: "Ergebnisse",
    cta: "Ähnliche Website gewünscht?",
    viewDesign: "Design ansehen",
    mockupAlt: "Homepage-Mockup eines Premium-Billard-Portals",
    viewerClose: "Schließen",
    viewerLabel: "Billard-Shop UI-Design",
  },
  ja: {
    back: "← SMB 実績へ戻る",
    problemTitle: "課題",
    scopeTitle: "スコープ",
    highlightsTitle: "主な機能",
    outcomesTitle: "成果",
    cta: "同様のサイトを作りたいですか？",
    viewDesign: "デザインを見る",
    mockupAlt: "プレミアムビリヤードポータルのホームページモックアップ",
    viewerClose: "閉じる",
    viewerLabel: "ビリヤード店UIデザイン",
  },
  zh: {
    back: "← 返回 SMB 案例",
    problemTitle: "问题",
    scopeTitle: "范围",
    highlightsTitle: "关键功能",
    outcomesTitle: "成果",
    cta: "想做类似网站？",
    viewDesign: "查看设计",
    mockupAlt: "高端台球馆门户首页设计稿",
    viewerClose: "关闭",
    viewerLabel: "台球馆 UI 设计",
  },
};

/** Logical public paths — resolve with `themeAsset` at render. */
const images: Record<WorkSlug, string> = {
  billiard: "/works/billiard.jpg",
  badminton: "/works/badminton.jpg",
  tickets: "/works/tickets.jpg",
  beauty: "/works/beauty.jpg",
  cafe: "/works/tickets.jpg",
  clinic: "/works/beauty.jpg",
};

type WorkCopy = Omit<WorkDetail, "image">;

const copyByLocale: Record<Locale, Record<WorkSlug, WorkCopy>> = {
  vi: {
    billiard: {
      title: "Quản lý cửa hàng bida",
      tag: "Website · Đặt bàn",
      intro:
        "Website quán bida đã làm: đặt bàn, theo dõi bàn / giờ chơi, trạng thái và doanh thu theo ca — phục vụ vận hành thực tế.",
      problem:
        "Chủ quán thường ghi sổ tay hoặc Excel: khó biết bàn nào trống, giờ kết thúc khi nào, và cuối ngày phải cộng tay dễ sai.",
      scope:
        "Website ops đã dựng: mở/đóng bàn, đếm giờ, trạng thái realtime và tóm tắt ca — nhân viên thao tác nhanh trên điện thoại hoặc máy tính quầy.",
      highlights: [
        "Bản đồ bàn + trạng thái đang chơi / trống / bảo trì",
        "Timer theo bàn, cảnh báo sắp hết giờ",
        "Ghi nhận dịch vụ kèm (nước, snack) theo phiên",
        "Báo cáo doanh thu theo ngày / ca",
      ],
      outcomes: [
        "Giảm sót giờ chơi và tranh chấp với khách nhờ timer + trạng thái bàn",
        "Nhân viên onboard nhanh nhờ luồng mở/đóng bàn rõ trên điện thoại",
        "Chủ quán xem tình hình ca và doanh thu kèm mà không cộng tay cuối ngày",
      ]
    },
    badminton: {
      title: "Website sân cầu lông",
      tag: "Booking",
      intro:
        "Site giới thiệu sân và đặt lịch trống — theo pattern các nền tảng booking sân thể thao: xem slot, giữ chỗ, xác nhận rõ ràng.",
      problem:
        "Khách gọi điện hỏi lịch trống; admin phải đối chiếu nhiều lịch; dễ trùng sân vào giờ cao điểm.",
      scope:
        "Trang marketing + lịch booking: khách chọn sân/khung giờ, xem giá, gửi yêu cầu giữ chỗ; admin xác nhận trên một bảng điều khiển.",
      highlights: [
        "Lịch trống theo ngày và khung giờ",
        "Giới thiệu cơ sở, giá và nội quy",
        "Form đặt sân + xác nhận trạng thái",
        "Thông tin liên hệ / chỉ đường nổi bật",
      ],
      outcomes: [
        "Giảm cuộc gọi hỏi lịch trống nhờ lịch/availability trên web",
        "Giảm double-book nhờ luồng đặt sân một chiều rõ ràng",
        "Tăng giữ chỗ đúng slot, dễ xác nhận với khách",
      ]
    },
    tickets: {
      title: "Booking vé & convert",
      tag: "Convert",
      intro:
        "Luồng đặt vé tối ưu chuyển đổi — từ xem sự kiện đến hoàn tất booking, tham khảo UX các site ticketing: hierarchy rõ, CTA mạnh, ít bước.",
      problem:
        "Landing sự kiện dài, CTA mờ; khách bỏ giữa chừng vì không biết còn vé / giá / cách thanh toán.",
      scope:
        "Trang sự kiện gọn: hero rõ ràng, lịch/giá, bước đặt vé ngắn, trạng thái xác nhận — tập trung convert thay vì nội dung lan man.",
      highlights: [
        "Hero sự kiện + CTA đặt vé cố định",
        "Chọn loại vé / số lượng nhanh",
        "Form thu thông tin tối thiểu",
        "Màn hình xác nhận & hướng dẫn tiếp theo",
      ],
      outcomes: [
        "Rút ngắn bước từ xem sự kiện đến hoàn tất booking",
        "Giảm rớt giữa chừng nhờ CTA và luồng convert rõ",
        "Dễ đo chuyển đổi từng bước trong funnel đặt vé",
      ]
    },
    beauty: {
      title: "Booking làm đẹp",
      tag: "Beauty",
      intro:
        "Đặt lịch nail, makeup và dịch vụ beauty theo slot — theo mô hình salon booking phổ biến: dịch vụ → stylist/slot → xác nhận.",
      problem:
        "Inbox tin nhắn rối, sót lịch, khách đến trùng giờ; khó upsell gói dịch vụ trên fanpage.",
      scope:
        "Catalog dịch vụ + lịch slot: khách chọn gói, thời lượng, gửi giữ chỗ; salon quản lý lịch và nhắc lịch trên một giao diện.",
      highlights: [
        "Danh mục dịch vụ kèm thời lượng / giá",
        "Chọn slot theo ngày",
        "Ghi chú yêu cầu (stylist, dị ứng…)",
        "Trạng thái chờ / đã xác nhận / hoàn thành",
      ],
      outcomes: [
        "Giảm sót lịch và double-book nhờ slot + xác nhận",
        "Khách tự giữ chỗ ngoài giờ hành chính",
        "Lễ tân xử lý lịch nhanh hơn trên một màn hình",
      ]
    },
    cafe: {
      title: "Cafe đặt món QR",
      tag: "QR · Order",
      intro:
        "Menu QR tại bàn + đặt món không cần gọi nhân viên — theo pattern cafe / F&B: quét mã → chọn món → gửi bếp / thu ngân.",
      problem:
        "Giờ cao điểm gọi món chậm, sai món vì ghi tay; khách chờ lâu khi nhân viên bận phục vụ nhiều bàn.",
      scope:
        "Menu digital theo QR bàn, giỏ món, ghi chú (ít đá, dị ứng…), đẩy order tới quầy/bếp và trạng thái đơn rõ ràng.",
      highlights: [
        "QR theo bàn / khu vực",
        "Menu ảnh + giá, nhóm món",
        "Ghi chú món và gọi thêm",
        "Trạng thái đang chuẩn bị / sẵn sàng",
      ],
      outcomes: [
        "Rút ngắn thời gian gọi món lúc cao điểm",
        "Giảm sai món nhờ order digital thay ghi tay",
        "Nhân viên tập trung phục vụ thay vì chạy sổ order",
      ]
    },
    clinic: {
      title: "Đặt lịch phòng khám",
      tag: "Clinic",
      intro:
        "Site phòng khám nhỏ: giới thiệu dịch vụ + đặt lịch khám theo slot bác sĩ — giảm gọi điện và sổ giấy.",
      problem:
        "Bệnh nhân gọi hỏi lịch trống; lễ tân đối chiếu sổ/Excel; dễ trùng slot và quên nhắc tái khám.",
      scope:
        "Trang dịch vụ + lịch theo bác sĩ/khung giờ: bệnh nhân gửi giữ chỗ; phòng khám xác nhận và nhắc lịch trên một bảng.",
      highlights: [
        "Danh mục dịch vụ / chuyên khoa",
        "Slot theo bác sĩ và ngày",
        "Form thông tin tối thiểu + lý do khám",
        "Xác nhận / nhắc lịch trước giờ hẹn",
      ],
      outcomes: [
        "Giảm cuộc gọi hỏi lịch trống",
        "Ít trùng slot nhờ lịch một nguồn",
        "Bệnh nhân nhớ giờ hẹn nhờ nhắc lịch",
      ]
    },
  },
  en: {
    billiard: {
      title: "Billiard shop operations",
      tag: "Website · Booking",
      intro:
        "A delivered billiard-shop website: table booking, play-time tracking, live status, and shift revenue — built for real operations.",
      problem:
        "Owners tracked tables in notebooks or spreadsheets: hard to see vacancies, end times, and end-of-day totals without errors.",
      scope:
        "An ops website already built: open/close tables, timers, live status, and shift summaries — staff can run it from a phone or counter PC.",
      highlights: [
        "Table map with playing / free / maintenance states",
        "Per-table timers and near-end alerts",
        "Add-ons (drinks, snacks) tied to a session",
        "Daily / shift revenue snapshot",
      ],
      outcomes: [
        "Fewer missed play sessions and customer disputes via table timers + status",
        "Faster staff onboarding with a clear open/close flow on phone",
        "Owners see shift status and add-on revenue without end-of-day manual totals",
      ]
    },
    badminton: {
      title: "Badminton court website",
      tag: "Booking",
      intro:
        "Court intro + availability booking — following sports-facility booking patterns: see slots, hold a court, confirm clearly.",
      problem:
        "Customers called to ask for free slots; admins juggled overlapping calendars and double-booked peak hours.",
      scope:
        "Marketing site plus booking calendar: pick court/time, see pricing, request a hold; staff confirm from one console.",
      highlights: [
        "Availability by day and time slot",
        "Facility, pricing, and house rules",
        "Booking form with status confirmation",
        "Contact / directions front and center",
      ],
      outcomes: [
        "Fewer availability phone calls thanks to live court schedule on the web",
        "Less double-booking with a single clear booking path",
        "More confirmed holds on the right slot",
      ]
    },
    tickets: {
      title: "Ticket booking & conversion",
      tag: "Convert",
      intro:
        "A conversion-focused ticket flow — from event browse to completed booking — inspired by clear ticketing UX: strong hierarchy, strong CTA, fewer steps.",
      problem:
        "Long event landings with weak CTAs; visitors dropped when stock, price, or payment next steps were unclear.",
      scope:
        "A tight event page: sharp hero, schedule/pricing, short booking steps, confirmation state — convert first, fluff later.",
      highlights: [
        "Event hero with sticky book CTA",
        "Fast ticket type / quantity selection",
        "Minimal contact form",
        "Confirmation screen with next steps",
      ],
      outcomes: [
        "Fewer steps from browsing an event to a completed booking",
        "Less mid-funnel drop-off with clearer CTAs and convert flow",
        "Easier to measure conversion at each ticket-booking step",
      ]
    },
    beauty: {
      title: "Beauty appointment booking",
      tag: "Beauty",
      intro:
        "Nail, makeup, and beauty slots — following common salon booking models: service → slot → confirm.",
      problem:
        "Messy chat inboxes, missed appointments, overlapping arrivals; hard to upsell packages on social alone.",
      scope:
        "Service catalog + slot calendar: clients pick a package and duration, request a hold; the salon manages and confirms in one UI.",
      highlights: [
        "Service menu with duration / price",
        "Day-based slot picking",
        "Notes (stylist, allergies…)",
        "Pending / confirmed / done statuses",
      ],
      outcomes: [
        "Fewer missed appointments and double-books via slots + confirmation",
        "Customers can self-hold outside office hours",
        "Reception handles the calendar faster on one screen",
      ]
    },
    cafe: {
      title: "Cafe QR ordering",
      tag: "QR · Order",
      intro:
        "Table QR menu + order without waving staff down — cafe / F&B pattern: scan → pick items → send to kitchen / cashier.",
      problem:
        "Peak-hour orders slow and error-prone on paper; guests wait while staff juggle many tables.",
      scope:
        "Per-table QR digital menu, cart, notes (less ice, allergies…), push orders to counter/kitchen with clear status.",
      highlights: [
        "QR per table / zone",
        "Photo menu with prices and categories",
        "Item notes and add-ons",
        "Preparing / ready statuses",
      ],
      outcomes: [
        "Faster ordering at peak hours",
        "Fewer wrong items vs handwritten tickets",
        "Staff focus on service instead of running order pads",
      ]
    },
    clinic: {
      title: "Clinic appointment booking",
      tag: "Clinic",
      intro:
        "Small-clinic site: services intro + doctor-slot booking — fewer phone calls and paper diaries.",
      problem:
        "Patients call for free slots; reception juggles notebooks/Excel; easy double-books and missed follow-up reminders.",
      scope:
        "Service pages plus doctor/time calendar: patients request a hold; the clinic confirms and reminds from one board.",
      highlights: [
        "Service / specialty catalog",
        "Slots by doctor and day",
        "Minimal intake form + visit reason",
        "Confirm / remind before appointment",
      ],
      outcomes: [
        "Fewer availability phone calls",
        "Less double-booking with one calendar source",
        "Patients remember visits via reminders",
      ]
    },
  },
  ja: {
    billiard: {
      title: "ビリヤード店オペレーション",
      tag: "Website · 予約",
      intro:
        "制作済みのビリヤード店サイト：卓予約、プレイ時間の追跡、リアルタイム状態、シフト売上 — 現場運用向けに実装済み。",
      problem:
        "ノートや Excel 管理では空き状況や終了時刻が分かりにくく、日次集計でミスが起きやすい。",
      scope:
        "すでに構築した Ops サイト：開閉・タイマー・リアルタイム状態・シフト要約。スマホやカウンター PC で操作できます。",
      highlights: [
        "プレイ中 / 空き / メンテのテーブルマップ",
        "テーブル別タイマーと終了間近アラート",
        "セッションに紐づく追加注文",
        "日次 / シフト売上スナップショット",
      ],
      outcomes: [
        "タイマーと卓状態で取りこぼし・トラブルを減らす",
        "スマホの開閉フローでスタッフ習熟が早い",
        "シフト状況と付帯売上を手集計なしで把握",
      ]
    },
    badminton: {
      title: "バドミントンコートサイト",
      tag: "Booking",
      intro:
        "コート紹介と空き予約。スポーツ施設予約の定番 UX（スロット確認→仮押さえ→確定）に沿っています。",
      problem:
        "電話での空き確認が続き、ピーク時のダブルブッキングが起きやすい。",
      scope:
        "紹介サイト＋予約カレンダー。コート/時間・料金を選び、管理画面で確定します。",
      highlights: [
        "日・時間帯ごとの空き",
        "施設・料金・利用ルール",
        "予約フォームとステータス",
        "連絡先 / アクセスを前面に",
      ],
      outcomes: [
        "Webの空き状況で電話確認が減る",
        "一本化した予約導線でダブルブッキングを抑制",
        "正しい枠の確定予約が増える",
      ]
    },
    tickets: {
      title: "チケット予約とコンバージョン",
      tag: "Convert",
      intro:
        "イベント閲覧から予約完了までの転換重視フロー。明確な階層・強い CTA・少ないステップのチケット UX を参考。",
      problem:
        "長い LP と弱い CTA、在庫・価格・支払いの次アクションが不明で離脱。",
      scope:
        "シャープなヒーロー、日程/料金、短い予約ステップ、確認画面に絞ったイベントページ。",
      highlights: [
        "固定 Book CTA 付きヒーロー",
        "券種 / 枚数の素早い選択",
        "最小限の連絡フォーム",
        "次の案内付き確認画面",
      ],
      outcomes: [
        "イベント閲覧から予約完了までの手数を削減",
        "明確なCTAで途中離脱を減らす",
        "予約ファネルの各段コンバージョンを測りやすい",
      ]
    },
    beauty: {
      title: "ビューティー予約",
      tag: "Beauty",
      intro:
        "ネイル・メイク等のスロット予約。サロン予約の定番（サービス→スロット→確定）モデルです。",
      problem:
        "チャットが散乱し、予約漏れや時間重複が発生。SNS だけではアップセルしづらい。",
      scope:
        "サービスカタログ＋スロット。パッケージと時間を選び、サロン側で一画面管理・確定。",
      highlights: [
        "所要時間 / 価格付きメニュー",
        "日付ベースのスロット選択",
        "要望メモ（担当・アレルギー等）",
        "保留 / 確定 / 完了ステータス",
      ],
      outcomes: [
        "スロット＋確認で予約漏れ/ダブルブッキングを削減",
        "営業時間外でも顧客が自己確保できる",
        "受付が1画面でスケジュール処理しやすい",
      ]
    },
    cafe: {
      title: "カフェ QR 注文",
      tag: "QR · Order",
      intro:
        "卓の QR メニュー＋スタッフ呼び出し不要の注文。カフェ / F&B 定番：スキャン → 選択 → 厨房/会計へ。",
      problem:
        "ピーク時は手書き注文が遅く誤りやすい。スタッフが多卓対応で客が待つ。",
      scope:
        "卓別 QR デジタルメニュー、カート、メモ（氷少なめ・アレルギー等）、厨房/カウンターへ送信とステータス表示。",
      highlights: [
        "卓 / ゾーン別 QR",
        "写真メニューとカテゴリ",
        "商品メモと追加注文",
        "調理中 / 準備完了ステータス",
      ],
      outcomes: [
        "ピーク時の注文リードタイム短縮",
        "手書きより誤注文が減る",
        "スタッフが伝票回しより接客に集中",
      ]
    },
    clinic: {
      title: "クリニック予約",
      tag: "Clinic",
      intro:
        "小規模クリニック向け：サービス紹介＋医師スロット予約。電話と紙の予約帳を減らします。",
      problem:
        "空き確認の電話が続き、受付がノート/Excel を照合。枠重複や再診リマインド漏れが起きやすい。",
      scope:
        "サービスページ＋医師/時間カレンダー。患者が仮押さえを送り、クリニックが一画面で確定・リマインド。",
      highlights: [
        "診療科 / サービス一覧",
        "医師・日別スロット",
        "最小限の問診フォーム＋来院理由",
        "確定 / 予約前リマインド",
      ],
      outcomes: [
        "空き確認電話が減る",
        "単一カレンダーでダブルブッキング抑制",
        "リマインドで来院忘れを減らす",
      ]
    },
  },
  de: {
    billiard: {
      title: "Billard-Laden Operations",
      tag: "Website · Booking",
      intro:
        "Bereits gelieferte Billard-Shop-Website: Tischbuchung, Spielzeit-Tracking, Live-Status und Schichtumsatz — für den echten Betrieb gebaut.",
      problem:
        "Notizbücher oder Excel: freie Tische, Endzeiten und Tagesabschluss waren fehleranfällig.",
      scope:
        "Ops-Website bereits gebaut: Tische öffnen/schließen, Timer, Live-Status und Schichtübersicht — bedienbar am Handy oder Tresen-PC.",
      highlights: [
        "Tischkarte mit spielend / frei / Wartung",
        "Timer pro Tisch und Endzeit-Hinweise",
        "Extras (Getränke, Snacks) je Session",
        "Umsatz-Snapshot pro Tag / Schicht",
      ],
      outcomes: [
        "Weniger verpasste Sessions und Streit dank Timer + Tischstatus",
        "Schnelleres Onboarding mit klarem Öffnen/Schließen am Handy",
        "Inhaber sehen Schichtstatus und Zusatzumsatz ohne manuelle Tagesabrechnung",
      ]
    },
    badminton: {
      title: "Badmintonplatz-Website",
      tag: "Booking",
      intro:
        "Platzvorstellung plus Verfügbarkeitsbuchung — nach Sportstätten-Booking-Mustern: Slots sehen, halten, klar bestätigen.",
      problem:
        "Kunden riefen wegen freier Zeiten an; Admins jonglierten Kalender und doppelt buchten Peak-Stunden.",
      scope:
        "Marketing-Site plus Buchungskalender: Platz/Zeit wählen, Preis sehen, Hold anfragen; Staff bestätigt in einer Konsole.",
      highlights: [
        "Verfügbarkeit nach Tag und Slot",
        "Anlage, Preise und Hausregeln",
        "Buchungsformular mit Status",
        "Kontakt / Anfahrt prominent",
      ],
      outcomes: [
        "Weniger Verfügbarkeitsanrufe dank Web-Zeitplan",
        "Weniger Doppelbuchungen durch einen klaren Buchungsweg",
        "Mehr bestätigte Holds auf dem richtigen Slot",
      ]
    },
    tickets: {
      title: "Ticket-Booking & Conversion",
      tag: "Convert",
      intro:
        "Conversion-fokussierter Ticket-Flow — vom Event-Browse zur abgeschlossenen Buchung — klare Hierarchie, starke CTA, wenige Schritte.",
      problem:
        "Lange Event-Landings, schwache CTAs; Abbruch wenn Bestand, Preis oder Zahlung unklar waren.",
      scope:
        "Straffe Event-Seite: klarer Hero, Termin/Preis, kurze Buchungsschritte, Bestätigung — zuerst convertieren.",
      highlights: [
        "Event-Hero mit sticky Book-CTA",
        "Schnelle Ticketart / Mengenwahl",
        "Minimales Kontaktformular",
        "Bestätigungsbildschirm mit Next Steps",
      ],
      outcomes: [
        "Kürzerer Weg vom Event-Blick zur fertigen Buchung",
        "Weniger Abbruch mit klareren CTAs und Convert-Flow",
        "Conversion je Ticket-Schritt leichter messbar",
      ]
    },
    beauty: {
      title: "Beauty-Terminbuchung",
      tag: "Beauty",
      intro:
        "Nail-, Makeup- und Beauty-Slots — nach gängigen Salon-Booking-Modellen: Service → Slot → Bestätigen.",
      problem:
        "Chaotische Chats, verpasste Termine, Überlappungen; Upsells über Social allein schwer.",
      scope:
        "Servicekatalog + Slot-Kalender: Paket und Dauer wählen, Hold anfragen; Salon steuert und bestätigt in einer UI.",
      highlights: [
        "Menü mit Dauer / Preis",
        "Tagesbasierte Slot-Wahl",
        "Notizen (Stylist, Allergien…)",
        "Status ausstehend / bestätigt / erledigt",
      ],
      outcomes: [
        "Weniger verpasste Termine und Doppelbuchungen durch Slots + Bestätigung",
        "Kunden können außerhalb der Bürozeit selbst halten",
        "Rezeption steuert den Kalender schneller auf einem Screen",
      ]
    },
    cafe: {
      title: "Cafe QR-Bestellung",
      tag: "QR · Order",
      intro:
        "Tisch-QR-Menü + Bestellen ohne Personal zu winken — Cafe/F&B-Muster: scannen → wählen → Küche/Kasse.",
      problem:
        "In der Stoßzeit sind handgeschriebene Bestellungen langsam und fehleranfällig; Gäste warten, während Personal viele Tische bedient.",
      scope:
        "Digitales Menü per Tisch-QR, Warenkorb, Notizen (weniger Eis, Allergien…), Orders an Theke/Küche mit klarem Status.",
      highlights: [
        "QR pro Tisch / Zone",
        "Fotomente mit Preisen und Kategorien",
        "Artikelnotizen und Nachbestellungen",
        "Status in Zubereitung / bereit",
      ],
      outcomes: [
        "Schnellere Bestellung in Stoßzeiten",
        "Weniger Falschbestellungen vs. handschriftliche Zettel",
        "Personal fokussiert Service statt Orderblöcke",
      ]
    },
    clinic: {
      title: "Klinik-Terminbuchung",
      tag: "Clinic",
      intro:
        "Kleine Klinik-Site: Leistungsvorstellung + Arzt-Slot-Buchung — weniger Anrufe und Papierkalender.",
      problem:
        "Patienten rufen wegen freier Termine an; Empfang jongliert Notizbuch/Excel; Doppelbuchungen und vergessene Reminder.",
      scope:
        "Leistungsseiten plus Arzt/Zeit-Kalender: Patienten senden Holds; die Klinik bestätigt und erinnert auf einem Board.",
      highlights: [
        "Leistungs- / Fachkatalog",
        "Slots nach Arzt und Tag",
        "Minimales Formular + Besuchsgrund",
        "Bestätigen / Erinnern vor dem Termin",
      ],
      outcomes: [
        "Weniger Verfügbarkeitsanrufe",
        "Weniger Doppelbuchungen mit einer Kalenderquelle",
        "Patienten erinnern Termine dank Reminder",
      ]
    },
  },


  zh: {
    billiard: {
      title: "台球店管理",
      tag: "Website · 预约",
      intro:
        "已交付的台球馆网站：订桌、开台计时、实时状态与班次营收 — 面向真实运营搭建。",
      problem:
        "店主常用纸本或表格记台：难以及时看到空台、结束时间，日结也容易出错。",
      scope:
        "已建成的运营网站：开/关台、计时、实时状态与班次摘要 — 员工可用手机或柜台电脑操作。",
      highlights: [
        "球桌地图：在打 / 空闲 / 维护",
        "按桌计时与即将结束提醒",
        "会话内加购（饮品、小吃）",
        "日 / 班次营收快照",
      ],
      outcomes: [
        "计时+台位状态减少漏记与纠纷",
        "手机开台/关台流程让员工更快上手",
        "老板无需手工合计即可看班次与附加营收",
      ]
    },
    badminton: {
      title: "羽毛球场地站",
      tag: "Booking",
      intro:
        "场地介绍与空场预约 — 参照运动场馆预约模式：看时段、占场、确认清楚。",
      problem:
        "客户反复电话问空场；管理员对照多本日历，高峰易重约。",
      scope:
        "营销站 + 预约日历：选场地/时段、看价格、提交占位；前台在同一控制台确认。",
      highlights: [
        "按日与时段查看空场",
        "场馆、价格与场规介绍",
        "预约表单与状态确认",
        "联系方式 / 导航前置",
      ],
      outcomes: [
        "网站空场减少电话问询",
        "单一预约路径降低重约",
        "正确时段确认锁定增加",
      ]
    },
    tickets: {
      title: "活动票务预约",
      tag: "Convert",
      intro:
        "转化导向的订票流程 — 从浏览活动到完成预约，层级清晰、CTA 强、步骤少。",
      problem:
        "活动落地页冗长、CTA 弱；库存/价格/支付下一步不清晰导致中途流失。",
      scope:
        "精简活动页：清晰英雄区、日程/价格、短预约步骤与确认态 — 先转化再铺陈。",
      highlights: [
        "活动英雄区 + 固定订票 CTA",
        "快速选票种 / 数量",
        "最少信息表单",
        "确认页与后续指引",
      ],
      outcomes: [
        "缩短从浏览活动到完成预约的步骤",
        "更清晰 CTA 降低中途流失",
        "更易衡量票务漏斗各步转化",
      ]
    },
    beauty: {
      title: "美业预约",
      tag: "Beauty",
      intro:
        "美甲、化妆等按时段预约 — 常见沙龙模式：服务 → 时段 → 确认。",
      problem:
        "私信混乱、漏约、到店撞档；仅靠社媒难做套餐加购。",
      scope:
        "服务目录 + 时段日历：客户选套餐与时长并占位；门店在同一界面管理与确认。",
      highlights: [
        "含时长 / 价格的服务菜单",
        "按日选择时段",
        "备注（技师、过敏等）",
        "待确认 / 已确认 / 完成状态",
      ],
      outcomes: [
        "时段+确认减少漏约与重约",
        "客户可在非工作时间自助占位",
        "前台在同一屏幕更快处理日程",
      ]
    },
    cafe: {
      title: "咖啡店 QR 点单",
      tag: "QR · Order",
      intro:
        "桌边 QR 菜单 + 无需招手点单 — 餐饮常见模式：扫码 → 选品 → 推送到厨房/收银。",
      problem:
        "高峰手写点单慢且易错；服务员忙于多桌时客人久等。",
      scope:
        "按桌 QR 数字菜单、购物车、备注（少冰、过敏等），订单推送到柜台/厨房并显示状态。",
      highlights: [
        "按桌 / 区域 QR",
        "图片菜单与分类定价",
        "菜品备注与加购",
        "制作中 / 已就绪状态",
      ],
      outcomes: [
        "高峰点单更快",
        "相对手写减少错单",
        "员工少跑单据、多做服务",
      ]
    },
    clinic: {
      title: "诊所预约",
      tag: "Clinic",
      intro:
        "小型诊所站：服务介绍 + 医生时段预约 — 减少电话与纸本登记。",
      problem:
        "患者电话问空档；前台对照本子/表格；易重约且漏复诊提醒。",
      scope:
        "服务页 + 医生/时段日历：患者提交占位；诊所在同一看板确认与提醒。",
      highlights: [
        "服务 / 专科目录",
        "按医生与日期的时段",
        "最少信息表单 + 就诊原因",
        "确认 / 到诊前提醒",
      ],
      outcomes: [
        "减少问空档电话",
        "单一日历降低重约",
        "提醒帮助患者按时到诊",
      ]
    },
  }
};

export function getWorkDetail(locale: Locale, slug: WorkSlug): WorkDetail {
  return { ...copyByLocale[locale][slug], image: images[slug] };
}

export function getWorkDetailUi(locale: Locale): WorkDetailUi {
  return ui[locale];
}

export function getWorkImage(slug: WorkSlug): string {
  return images[slug];
}
