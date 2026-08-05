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
      title: "Billiard shop management",
      tag: "Website · Booking",
      intro:
        "Delivered billiard-shop website: table booking, play-time tracking, live status, shift revenue — built for real shop operations.",
      problem:
        "Owners track tables in notebooks or Excel: hard to see which tables are free, when sessions end, and manual end-of-day totals invite errors.",
      scope:
        "Built ops website: open/close tables, time tracking, realtime status, shift summaries — staff operate it from phone or counter PC.",
      highlights: [
        "Table map with playing / free / maintenance status",
        "Per-table timer with near-end alerts",
        "Record session add-ons (drinks, snacks)",
        "Daily and shift revenue reports",
      ],
      outcomes: [
        "Fewer missed hours and customer disputes thanks to timer and table status",
        "Faster staff onboarding with clear open/close flow on phone",
        "Owners see shift status and add-on revenue without end-of-day manual sums",
      ]
    },
    badminton: {
      title: "Badminton court website",
      tag: "Booking",
      intro:
        "Court intro site plus slot booking — following sports-facility patterns: view slots, hold a court, confirm clearly.",
      problem:
        "Customers call to ask about free slots; admins check multiple calendars; easy to double-book peak hours.",
      scope:
        "Marketing page plus booking calendar: customers pick court/time, see pricing, submit hold request; admin confirms from one dashboard.",
      highlights: [
        "Availability calendar by day and time slot",
        "Facility intro, pricing, and house rules",
        "Booking form with status confirmation",
        "Contact info and directions prominent",
      ],
      outcomes: [
        "Fewer availability phone calls thanks to web calendar",
        "Fewer double-bookings with one clear booking flow",
        "More holds confirmed for the correct slot",
      ]
    },
    tickets: {
      title: "Ticket booking & conversion",
      tag: "Convert",
      intro:
        "Conversion-optimized ticket flow — from event view to booking completion — following ticketing UX best practices: clear hierarchy, strong CTA, few steps.",
      problem:
        "Long event landing, weak CTA; visitors drop when they cannot see remaining tickets, pricing, or payment steps clearly.",
      scope:
        "Compact event page: clear hero, schedule/pricing, short booking steps, confirmation status — focused on conversion over fluff.",
      highlights: [
        "Event hero with fixed book-ticket CTA",
        "Quick ticket type and quantity selection",
        "Minimal info-capture form",
        "Confirmation screen with next-step instructions",
      ],
      outcomes: [
        "Shorter path from event view to completed booking",
        "Less mid-funnel abandonment thanks to clear CTA and conversion flow",
        "Easier to measure conversion at each step of the ticket funnel",
      ]
    },
    beauty: {
      title: "Beauty salon booking",
      tag: "Beauty",
      intro:
        "Nail, makeup, and beauty service booking by slot — following common salon booking models: service → stylist/slot → confirm.",
      problem:
        "Messy message inboxes, missed appointments, overlapping client arrivals; hard to upsell service packages on social pages alone.",
      scope:
        "Service catalog plus slot calendar: clients pick package and duration, submit hold request; salon manages and confirms appointments from one dashboard.",
      highlights: [
        "Service menu with duration and pricing",
        "Day-based slot selection",
        "Notes field for requests (stylist preference, allergies, etc.)",
        "Pending / confirmed / completed status",
      ],
      outcomes: [
        "Fewer missed appointments and double-books thanks to slots and confirmation",
        "Clients can self-book outside business hours",
        "Reception processes schedule faster on one screen",
      ]
    },
    cafe: {
      title: "Cafe QR ordering",
      tag: "QR · Order",
      intro:
        "Table QR menu plus order-without-calling-staff — following cafe/F&B pattern: scan code → pick items → send to kitchen/cashier.",
      problem:
        "Peak-hour orders slow and error-prone with paper tickets; customers wait while staff run between many tables.",
      scope:
        "Digital menu via QR per table, shopping cart, notes (less ice, allergies, etc.), orders push to kitchen/counter with clear status.",
      highlights: [
        "QR code per table or zone",
        "Photo menu with pricing and categories",
        "Notes field and add-on items",
        "Preparing and ready statuses",
      ],
      outcomes: [
        "Shorter order time at peak hours",
        "Fewer wrong items compared to handwritten tickets",
        "Staff focus on service instead of running order pads",
      ]
    },
    clinic: {
      title: "Clinic appointment booking",
      tag: "Clinic",
      intro:
        "Small clinic site: service intro plus doctor-slot booking — reduces phone calls and paper appointment books.",
      problem:
        "Patients call to ask about free slots; reception cross-checks notebooks/Excel; easy to double-book slots and forget follow-up reminders.",
      scope:
        "Service pages plus doctor/time calendar: patients submit hold requests; clinic confirms and sends reminders from one dashboard.",
      highlights: [
        "Service and specialty catalog",
        "Slots by doctor and date",
        "Minimal intake form plus visit reason",
        "Confirmation and pre-visit reminders",
      ],
      outcomes: [
        "Fewer availability phone calls",
        "Less double-booking thanks to single calendar source",
        "Patients remember appointments via reminders",
      ]
    },
  },
  ja: {
    billiard: {
      title: "ビリヤード店管理",
      tag: "Website · 予約",
      intro:
        "納品済みビリヤード店サイト：台予約・プレイ時間追跡・リアルタイム状態・シフト売上 — 実際の店舗運用向けです。",
      problem:
        "ノートや Excel で管理すると、空き台・終了時刻が把握しづらく、日次集計も手作業でミスが起きやすい状況でした。",
      scope:
        "構築済み運用サイト：台の開閉・時間追跡・リアルタイム状態・シフトサマリー。スマホやカウンター PC から操作可能です。",
      highlights: [
        "プレイ中 / 空き / メンテナンスの台マップ",
        "台別タイマーと終了間近アラート",
        "セッション単位の追加注文（ドリンク・軽食）記録",
        "日次およびシフト売上レポート",
      ],
      outcomes: [
        "タイマーと台状態で取りこぼしや顧客トラブルを削減",
        "スマホでの開閉フローが明確でスタッフ習熟が早い",
        "店主は手集計なしでシフト状況と付帯売上を把握",
      ]
    },
    badminton: {
      title: "バドミントンコートサイト",
      tag: "Booking",
      intro:
        "コート紹介＋空き枠予約サイト。スポーツ施設予約の定番パターン（スロット確認→仮押さえ→確定）に沿っています。",
      problem:
        "電話で空き確認が続き、複数カレンダーの照合が必要。ピーク時のダブルブッキングが起きやすい状況でした。",
      scope:
        "紹介ページ＋予約カレンダー。お客様がコート/時間・料金を選んで仮押さえ送信し、管理画面で確定します。",
      highlights: [
        "日付・時間帯別の空き状況カレンダー",
        "施設紹介・料金・利用ルール",
        "予約フォームとステータス確認",
        "連絡先とアクセス情報を前面に配置",
      ],
      outcomes: [
        "Web上の空き状況で電話確認を削減",
        "一本化した予約フローでダブルブッキングを抑制",
        "正しい枠での確定予約が増加",
      ]
    },
    tickets: {
      title: "チケット予約とコンバージョン",
      tag: "Convert",
      intro:
        "イベント閲覧から予約完了までのコンバージョン重視フロー。明確な階層・強いCTA・少ないステップのチケットUXベストプラクティスに沿っています。",
      problem:
        "長いイベントLP・弱いCTA。残りチケット数・料金・支払い手順が不明確で離脱が発生していました。",
      scope:
        "コンパクトなイベントページ：明確なヒーロー・日程/料金・短い予約ステップ・確認ステータス。装飾より転換を優先した構成です。",
      highlights: [
        "固定チケット予約CTA付きイベントヒーロー",
        "券種と枚数の素早い選択",
        "最小限の情報取得フォーム",
        "次のステップ案内付き確認画面",
      ],
      outcomes: [
        "イベント閲覧から予約完了までの経路を短縮",
        "明確なCTAと転換フローで途中離脱を削減",
        "チケットファネルの各ステップでコンバージョン計測が容易に",
      ]
    },
    beauty: {
      title: "ビューティーサロン予約",
      tag: "Beauty",
      intro:
        "ネイル・メイク・美容サービスのスロット予約。サロン予約の定番モデル（サービス→担当者/スロット→確定）です。",
      problem:
        "メッセージ受信箱が煩雑になり、予約漏れや来店時間の重複が発生。ソーシャルページだけではサービスパッケージのアップセルが困難でした。",
      scope:
        "サービスカタログ＋スロットカレンダー。顧客がパッケージと時間を選んで仮押さえ送信し、サロンは一つのダッシュボードで管理・確定します。",
      highlights: [
        "所要時間と料金付きサービスメニュー",
        "日付ベースのスロット選択",
        "要望記入欄（担当者希望・アレルギーなど）",
        "保留 / 確定 / 完了ステータス",
      ],
      outcomes: [
        "スロットと確認機能で予約漏れとダブルブッキングを削減",
        "営業時間外でも顧客が自己予約可能に",
        "受付が一画面でスケジュールを効率処理",
      ]
    },
    cafe: {
      title: "カフェQR注文",
      tag: "QR · Order",
      intro:
        "テーブルQRメニュー＋スタッフ呼び出し不要の注文。カフェ/F&Bの定番パターン：スキャン → 選択 → 厨房/会計へ送信。",
      problem:
        "ピーク時は紙伝票が遅くミスも起きやすい。お客様は待ち、スタッフは複数テーブルを走り回る状況でした。",
      scope:
        "テーブル別QRのデジタルメニュー、カート、メモ（氷少なめ・アレルギー等）、注文を厨房/カウンターへ送信し明確なステータス表示。",
      highlights: [
        "テーブルまたはゾーン別QRコード",
        "写真付きメニューと価格・カテゴリ",
        "商品メモと追加注文フィールド",
        "調理中・準備完了ステータス",
      ],
      outcomes: [
        "ピーク時の注文リードタイム短縮",
        "手書き伝票と比べて誤注文を削減",
        "スタッフは伝票回しより接客に集中",
      ]
    },
    clinic: {
      title: "クリニック予約",
      tag: "Clinic",
      intro:
        "小規模クリニック向けサイト：サービス紹介＋医師スロット予約で、電話と紙の予約帳を削減します。",
      problem:
        "患者からの空き確認電話が続き、受付はノート/Excelを照合。スロット重複や再診リマインド漏れが起きやすい状況でした。",
      scope:
        "サービスページ＋医師/日時カレンダー。患者が仮押さえを送信し、クリニックは一つのダッシュボードで確定とリマインド送信を行います。",
      highlights: [
        "診療科・サービスカタログ",
        "医師・日付別スロット",
        "最小限の問診フォーム＋来院理由",
        "確定および来院前リマインダー",
      ],
      outcomes: [
        "空き確認電話の削減",
        "単一カレンダー元でダブルブッキングを抑制",
        "リマインダーで来院忘れを削減",
      ]
    },
  },


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
