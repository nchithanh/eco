"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import {
  PosDayStrip,
  PosDescGrid,
} from "@/components/PosDescBlocks";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { getPosHubCopy } from "@/lib/i18n/pos-copy";
import {
  POS_CATALOG,
  POS_DAY_STEPS,
  POS_DEMO_URL,
  POS_HUB_MODULES,
  POS_LIMIT_CARDS,
  POS_WHO_CARDS,
} from "@/lib/pos/catalog";

const ZALO = "https://zalo.me/0779937633";

export function PosHubContent() {
  const hub = getPosHubCopy();
  const pricingHref = `${assetPath("/chinh-sach-gia-dolphin-2026/")}#pos`;

  return (
    <main className="bg-[var(--kuct-bg)]">
      <Nav />

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, #ECFDF5, transparent), radial-gradient(ellipse 40% 40% at 100% 0%, #F5F3FF, transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <Reveal variant="title">
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-[var(--kuct-muted)]"
            >
              <ol className="m-0 flex list-none flex-wrap items-center justify-center gap-1.5 p-0">
                <li>
                  <Link
                    href={assetPath("/")}
                    className="hover:text-[var(--kuct-text)]"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[var(--kuct-text)]">POS</li>
              </ol>
            </nav>
            <p className="kuct-section-eyebrow mt-6">Dolphin POS</p>
            <h1 className="mx-auto mt-3 max-w-[20ch] font-display text-[1.75rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.25rem] lg:text-[2.5rem]">
              <AccentText>{hub.h1}</AccentText>
            </h1>
            <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-[var(--kuct-muted)]">
              {hub.lead}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={POS_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="kuct-btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold no-underline"
              >
                Mở demo POS
              </a>
              <a
                href={pricingHref}
                className="kuct-btn-outline inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold no-underline"
              >
                Xem bảng giá
              </a>
              <a
                href={ZALO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--kuct-border)] px-5 py-2.5 text-sm font-semibold text-[var(--kuct-text)] no-underline transition hover:bg-[var(--kuct-surface-muted)]"
              >
                Chat Zalo
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="border-t border-[var(--kuct-border)] py-12 sm:py-14"
        aria-labelledby="pos-hub-answer"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2
            id="pos-hub-answer"
            className="font-display text-xl font-semibold sm:text-2xl"
          >
            <AccentText>{hub.answerTitle}</AccentText>
          </h2>
          <p className="mt-3 max-w-[44ch] text-base leading-relaxed text-[var(--kuct-text)]">
            {hub.answerFirst}
          </p>
        </div>
      </section>

      <PosDescGrid
        id="pos-hub-modules"
        title="Trong app đang có gì"
        lead="Khớp demo — chưa nối ngân hàng thật."
        cards={POS_HUB_MODULES}
      />

      <PosDayStrip
        id="pos-hub-day"
        title="Một ca mẫu"
        steps={POS_DAY_STEPS}
      />

      <PosDescGrid
        id="pos-hub-who"
        title="Ai dùng"
        cards={POS_WHO_CARDS}
        muted
      />

      <PosDescGrid
        id="pos-hub-limits"
        title="Giới hạn trung thực"
        cards={POS_LIMIT_CARDS}
      />

      <section
        className="border-t border-[var(--kuct-border)] bg-[var(--kuct-surface-muted)] py-14 sm:py-16 lg:pb-20"
        aria-labelledby="pos-hub-list"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2
            id="pos-hub-list"
            className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]"
          >
            <AccentText>Chọn lĩnh vực cửa hàng</AccentText>
          </h2>
          <p className="mt-3 max-w-[48ch] text-[var(--kuct-muted)]">
            Cùng kiểu chọn lĩnh vực trong app — bấm thẻ để xem landing ngành.
          </p>
          <ul className="mt-8 m-0 mx-auto grid max-w-lg list-none grid-cols-1 gap-3 p-0 sm:mx-0 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {POS_CATALOG.map((item) => (
              <li key={item.slug}>
                <Link
                  href={assetPath(`/pos/${item.slug}/`)}
                  className="flex h-full items-center gap-3 rounded-[10px] border border-[var(--kuct-border)] bg-white px-3 py-3 no-underline shadow-sm transition hover:border-[var(--kuct-text)]"
                >
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-[10px] text-xl"
                    style={{ backgroundColor: item.colorSoft }}
                    aria-hidden
                  >
                    {item.emoji}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-[var(--kuct-text)]">
                      {item.labelVi}
                    </span>
                    <span className="mt-0.5 block text-sm text-[var(--kuct-muted)]">
                      {item.blurb}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
