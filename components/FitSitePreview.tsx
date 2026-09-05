"use client";

import { Logo } from "@/components/Logo";

type FitSitePreviewProps = {
  variant: number;
  title: string;
  recommended: string;
};

/** DOM product preview for Fit ICP cards (HeroSitePreview language; no photos). */
export function FitSitePreview({
  variant,
  title,
  recommended,
}: FitSitePreviewProps) {
  const v = ((variant % 4) + 4) % 4;

  return (
    <div className="kuct-fit-preview flex h-full min-h-[18rem] flex-col overflow-hidden rounded-[10px] bg-[var(--kuct-surface)] shadow-[0_0.5rem_1.5rem_rgb(26_22_37/0.06)] sm:min-h-[22rem] lg:min-h-[24rem]">
      <div className="flex items-center gap-2 border-b border-black/[0.06] px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <Logo variant="mark" imageClassName="h-5 w-auto sm:h-6" />
          <span className="font-display truncate text-[0.7rem] font-bold tracking-tight text-[var(--kuct-text)] sm:text-xs">
            Dolphin Software
          </span>
        </div>
        <span className="ml-auto max-w-[55%] truncate rounded-[10px] bg-[color-mix(in_srgb,var(--kuct-accent)_12%,white)] px-2.5 py-1 text-[0.6rem] font-semibold text-[var(--kuct-accent)] sm:text-[0.65rem]">
          {recommended || title}
        </span>
      </div>

      {v === 0 ? <PreviewCms /> : null}
      {v === 1 ? <PreviewLanding /> : null}
      {v === 2 ? <PreviewBooking /> : null}
      {v === 3 ? <PreviewModernize /> : null}
    </div>
  );
}

function PreviewCms() {
  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 p-3 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-3 sm:p-4">
      <aside
        className="flex flex-row gap-1.5 overflow-x-auto rounded-[10px] bg-[color-mix(in_srgb,var(--kuct-accent)_6%,white)] p-2 sm:flex-col sm:overflow-visible"
        aria-hidden
      >
        {["Trang", "Bài viết", "Media", "Cài đặt"].map((label, i) => (
          <span
            key={label}
            className={
              i === 0
                ? "shrink-0 rounded-[10px] bg-white px-2.5 py-1.5 text-[0.65rem] font-semibold text-[var(--kuct-accent)] shadow-[0_1px_3px_rgb(26_22_37/0.06)]"
                : "shrink-0 rounded-[10px] px-2.5 py-1.5 text-[0.65rem] font-medium text-[var(--kuct-muted)]"
            }
          >
            {label}
          </span>
        ))}
      </aside>
      <div className="flex min-w-0 flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <p className="font-display text-[0.85rem] font-semibold text-[var(--kuct-text)] sm:text-[0.95rem]">
            CMS · Tự sửa nội dung
          </p>
          <span className="shrink-0 rounded-[10px] bg-[var(--kuct-accent)] px-2.5 py-1 text-[0.6rem] font-semibold text-white">
            Xuất bản
          </span>
        </div>
        <div className="space-y-2 rounded-[10px] bg-[var(--kuct-bg)] p-3" aria-hidden>
          <span className="block h-2.5 w-[70%] rounded-full bg-black/12" />
          <span className="block h-2 w-full rounded-full bg-black/8" />
          <span className="block h-2 w-[88%] rounded-full bg-black/8" />
          <div className="mt-2 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="aspect-[4/3] rounded-[10px] bg-[color-mix(in_srgb,var(--kuct-accent)_10%,white)]"
              />
            ))}
          </div>
        </div>
        <p className="text-[0.7rem] leading-snug text-[var(--kuct-muted)]">
          Trang web + hướng dẫn vận hành — cập nhật mà không cần dev mỗi lần.
        </p>
      </div>
    </div>
  );
}

function PreviewLanding() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 p-3 sm:p-4">
      <div className="rounded-[10px] bg-[color-mix(in_srgb,var(--kuct-accent)_8%,white)] p-3 sm:p-4">
        <p className="font-display text-[0.9rem] font-semibold leading-snug text-[var(--kuct-text)] sm:text-[1.05rem]">
          Landing / MVP theo giai đoạn
        </p>
        <p className="mt-1.5 text-[0.7rem] leading-snug text-[var(--kuct-muted)]">
          Ra mắt nhanh · kiểm soát ngân sách · mở rộng theo milestone
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-[10px] bg-[var(--kuct-accent)] px-2.5 py-1.5 text-[0.6rem] font-semibold text-white">
            Đăng ký sớm
          </span>
          <span className="rounded-[10px] bg-white px-2.5 py-1.5 text-[0.6rem] font-semibold text-[var(--kuct-accent)] shadow-[0_1px_3px_rgb(26_22_37/0.08)]">
            Xem demo
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2" aria-hidden>
        {["MVP", "Milestone 2", "Scale"].map((label, i) => (
          <div
            key={label}
            className="rounded-[10px] bg-[var(--kuct-bg)] px-2 py-2.5 text-center"
          >
            <p className="text-[0.65rem] font-semibold text-[var(--kuct-text)]">
              {label}
            </p>
            <span
              className={
                i === 0
                  ? "mt-1 inline-block size-1.5 rounded-full bg-[var(--kuct-accent)]"
                  : "mt-1 inline-block size-1.5 rounded-full bg-black/15"
              }
            />
          </div>
        ))}
      </div>
      <p className="text-[0.7rem] leading-snug text-[var(--kuct-muted)]">
        Bàn giao MVP trước — xác thực thị trường trước khi mở rộng.
      </p>
    </div>
  );
}

function PreviewBooking() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 p-3 sm:p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="font-display text-[0.85rem] font-semibold text-[var(--kuct-text)] sm:text-[0.95rem]">
          Booking · Lead · Thanh toán
        </p>
        <span className="shrink-0 rounded-[10px] bg-[var(--kuct-accent)] px-2 py-1 text-[0.6rem] font-semibold text-white">
          + Care
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <div className="rounded-[10px] bg-[var(--kuct-bg)] p-2.5 sm:p-3" aria-hidden>
          <p className="text-[0.65rem] font-semibold text-[var(--kuct-muted)]">
            Slot hôm nay
          </p>
          <ul className="mt-2 m-0 list-none space-y-1.5 p-0">
            {["15:00", "17:30", "19:00"].map((t, i) => (
              <li
                key={t}
                className={
                  i === 0
                    ? "rounded-[10px] bg-[var(--kuct-accent)] px-2 py-1.5 text-center text-[0.7rem] font-semibold text-white"
                    : "rounded-[10px] bg-white px-2 py-1.5 text-center text-[0.7rem] font-medium text-[var(--kuct-text)] shadow-[0_1px_2px_rgb(26_22_37/0.05)]"
                }
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-[10px] bg-[color-mix(in_srgb,var(--kuct-accent)_8%,white)] p-2.5">
            <p className="text-[0.65rem] font-semibold text-[var(--kuct-text)]">
              Thanh toán
            </p>
            <p className="mt-1 text-[0.7rem] font-semibold text-[var(--kuct-accent)]">
              QR / thẻ · xác nhận
            </p>
          </div>
          <div className="rounded-[10px] bg-white p-2.5 shadow-[0_1px_3px_rgb(26_22_37/0.06)]">
            <p className="text-[0.65rem] font-semibold text-[var(--kuct-text)]">
              Care chat
            </p>
            <p className="mt-1 text-[0.65rem] leading-snug text-[var(--kuct-muted)]">
              Thu lead → giữ slot → Zalo / CRM
            </p>
          </div>
        </div>
      </div>
      <p className="text-[0.7rem] leading-snug text-[var(--kuct-muted)]">
        Thay cuộc gọi / Excel bằng web app + agent chăm khách.
      </p>
    </div>
  );
}

function PreviewModernize() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 p-3 sm:p-4">
      <p className="font-display text-[0.85rem] font-semibold text-[var(--kuct-text)] sm:text-[0.95rem]">
        Nâng cấp hệ thống + lộ trình AI
      </p>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
        <div className="rounded-[10px] bg-black/[0.04] p-2.5 sm:p-3">
          <p className="text-[0.65rem] font-semibold text-[var(--kuct-muted)]">
            Hiện tại
          </p>
          <ul className="mt-2 m-0 list-none space-y-1 p-0 text-[0.65rem] text-[var(--kuct-muted)]" aria-hidden>
            <li>Excel / phần mềm cũ</li>
            <li>Quy trình rời rạc</li>
            <li>Khó quan sát</li>
          </ul>
        </div>
        <span
          className="font-display text-lg font-semibold text-[var(--kuct-accent)]"
          aria-hidden
        >
          →
        </span>
        <div className="rounded-[10px] bg-[color-mix(in_srgb,var(--kuct-accent)_10%,white)] p-2.5 sm:p-3">
          <p className="text-[0.65rem] font-semibold text-[var(--kuct-accent)]">
            Sau nâng cấp
          </p>
          <ul className="mt-2 m-0 list-none space-y-1 p-0 text-[0.65rem] text-[var(--kuct-text)]" aria-hidden>
            <li>Web / API thống nhất</li>
            <li>AI Agent hỗ trợ</li>
            <li>Insight vận hành</li>
          </ul>
        </div>
      </div>
      <div className="rounded-[10px] bg-[var(--kuct-bg)] px-3 py-2.5">
        <p className="text-[0.7rem] font-semibold text-[var(--kuct-text)]">
          Phân tích trước · báo giá sau
        </p>
        <p className="mt-1 text-[0.65rem] leading-snug text-[var(--kuct-muted)]">
          Không đẩy tính năng thừa — chỉ phần hệ thống thật sự cần.
        </p>
      </div>
    </div>
  );
}
