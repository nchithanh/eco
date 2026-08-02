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
