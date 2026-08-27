import type { Locale } from "@/lib/i18n/types";
import { CONTACTS } from "@/lib/contacts";

export type PrivacyCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: { id: string; title: string; body: string[] }[];
};

const vi: PrivacyCopy = {
  metaTitle: "Quyền riêng tư | Dolphin Software",
  metaDescription:
    "Dolphin Software thu thập dữ liệu nào trên website và Facebook Messenger, dùng để làm gì, và cách yêu cầu xóa.",
  eyebrow: "Pháp lý",
  title: "Quyền riêng tư",
  updated: "Cập nhật 27/08/2026",
  intro:
    "Trang này mô tả dữ liệu Dolphin Software xử lý trên website dolphin-software.io.vn và khi anh/chị nhắn Fanpage qua Messenger. Không bán dữ liệu cho bên thứ ba.",
  sections: [
    {
      id: "site",
      title: "Website",
      body: [
        "Cookie và lưu trữ trình duyệt cần thiết: ngôn ngữ, theme, lựa chọn cookie, phiên xem demo. Chi tiết trên banner cookie khi vào site.",
        "Form liên hệ / báo giá / tuyển dụng: tên, cách liên hệ, ghi chú anh/chị gửi — để trả lời yêu cầu, không dùng cho quảng cáo bên thứ ba.",
      ],
    },
    {
      id: "messenger",
      title: "Facebook Messenger",
      body: [
        `Fanpage Dolphin Software (ID ${CONTACTS.facebookPageId}) có thể được Dolphin Assist trả lời tự động.`,
        "Khi anh/chị nhắn tin: Facebook gửi Page-scoped ID và nội dung tin tới máy chủ của Dolphin (Cloudflare Worker) để tạo câu trả lời. Không lưu mật khẩu Facebook.",
        "Hội thoại dùng để trả lời trong phiên. Không bán, không chia sẻ cho đối tác quảng cáo.",
      ],
    },
    {
      id: "delete",
      title: "Xóa dữ liệu",
      body: [
        `Gửi email ${CONTACTS.email} với tiêu đề “Xóa dữ liệu Messenger” hoặc “Xóa dữ liệu website”, kèm Page-scoped ID (nếu biết) hoặc SĐT/email đã để lại trên form.`,
        "Chúng tôi xóa bản ghi lead và ngừng dùng hội thoại đó cho cải thiện dịch vụ. Tin trên Facebook vẫn do Facebook lưu theo chính sách của họ — anh/chị có thể xóa cuộc trò chuyện trên Messenger.",
      ],
    },
    {
      id: "contact",
      title: "Liên hệ",
      body: [
        `Email ${CONTACTS.email} · Zalo ${CONTACTS.phone} · Messenger ${CONTACTS.messenger}`,
      ],
    },
  ],
};

const en: PrivacyCopy = {
  metaTitle: "Privacy | Dolphin Software",
  metaDescription:
    "What Dolphin Software collects on the website and Facebook Messenger, why, and how to request deletion.",
  eyebrow: "Legal",
  title: "Privacy",
  updated: "Updated 27 Aug 2026",
  intro:
    "This page describes data Dolphin Software processes on dolphin-software.io.vn and when you message the Fanpage on Messenger. We do not sell data to third parties.",
  sections: [
    {
      id: "site",
      title: "Website",
      body: [
        "Essential cookies and browser storage: language, theme, cookie choice, demo session. Details are on the cookie banner.",
        "Contact / quote / careers forms: name, contact method, and notes you send — to reply to the request, not for third-party ads.",
      ],
    },
    {
      id: "messenger",
      title: "Facebook Messenger",
      body: [
        `The Dolphin Software Page (ID ${CONTACTS.facebookPageId}) may be answered by Dolphin Assist.`,
        "When you message: Facebook sends a Page-scoped ID and the text to Dolphin’s server (Cloudflare Worker) to generate a reply. We do not receive your Facebook password.",
        "The thread is used to reply in-session. We do not sell it or share it with ad partners.",
      ],
    },
    {
      id: "delete",
      title: "Delete data",
      body: [
        `Email ${CONTACTS.email} with subject “Delete Messenger data” or “Delete website data”, plus your Page-scoped ID (if you have it) or the phone/email left on a form.`,
        "We delete lead records and stop using that thread to improve the service. Facebook still stores the chat under their policy — you can delete the conversation in Messenger.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      body: [
        `Email ${CONTACTS.email} · Zalo ${CONTACTS.phone} · Messenger ${CONTACTS.messenger}`,
      ],
    },
  ],
};

const ja: PrivacyCopy = {
  metaTitle: "プライバシー | Dolphin Software",
  metaDescription:
    "Dolphin SoftwareがサイトとFacebook Messengerで扱うデータ、目的、削除の依頼方法。",
  eyebrow: "法務",
  title: "プライバシー",
  updated: "更新 2026年8月27日",
  intro:
    "dolphin-software.io.vn と Fanpage の Messenger で Dolphin Software が扱うデータです。第三者への販売はありません。",
  sections: [
    {
      id: "site",
      title: "ウェブサイト",
      body: [
        "必須のCookieとブラウザ保存：言語、テーマ、Cookie選択、デモセッション。詳細はCookieバナー。",
        "問い合わせ / 見積 / 採用フォーム：お名前、連絡先、メモ。返信のためであり、第三者広告には使いません。",
      ],
    },
    {
      id: "messenger",
      title: "Facebook Messenger",
      body: [
        `Dolphin Software の Page（ID ${CONTACTS.facebookPageId}）には Dolphin Assist が自動返信する場合があります。`,
        "メッセージを送ると、Facebook が Page-scoped ID と本文を Dolphin のサーバー（Cloudflare Worker）へ送り、返信を生成します。Facebook のパスワードは受け取りません。",
        "会話はセッション内の返信に使います。販売や広告パートナーへの共有はありません。",
      ],
    },
    {
      id: "delete",
      title: "データの削除",
      body: [
        `件名「Delete Messenger data」または「Delete website data」で ${CONTACTS.email} へ。Page-scoped ID（分かる場合）またはフォームに残した電話/メールを添えてください。`,
        "リード記録を削除し、その会話の改善利用を止めます。Facebook 側の保存は同社の方針に従います。Messenger で会話を削除できます。",
      ],
    },
    {
      id: "contact",
      title: "連絡先",
      body: [
        `メール ${CONTACTS.email} · Zalo ${CONTACTS.phone} · Messenger ${CONTACTS.messenger}`,
      ],
    },
  ],
};

const byLocale: Record<Locale, PrivacyCopy> = { vi, en, ja };

export function getPrivacyCopy(locale: Locale): PrivacyCopy {
  return byLocale[locale] ?? vi;
}
