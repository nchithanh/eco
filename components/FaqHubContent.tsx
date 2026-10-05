"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { getFaqHubCopy, type FaqHubGroup } from "@/lib/i18n/faq-hub";

function FaqGroupBlock({ group }: { group: FaqHubGroup }) {
  const baseId = useId();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section
      id={group.id}
      aria-labelledby={`${group.id}-heading`}
      className="scroll-mt-24 border-t border-[var(--kuct-border)] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2
            id={`${group.id}-heading`}
            className="font-display text-xl font-semibold tracking-tight sm:text-2xl"
          >
            <AccentText>{group.title}</AccentText>
          </h2>
          {group.href ? (
            <Link
              href={
                group.href.startsWith("/#")
                  ? group.href
                  : assetPath(group.href)
              }
              className="text-sm font-semibold text-[var(--kuct-accent)] no-underline hover:underline"
            >
              Xem trang →
            </Link>
          ) : null}
        </div>
        <p className="mt-2 text-sm text-[var(--kuct-muted)]">{group.intro}</p>
        <div className="mt-6 space-y-2">
          {group.items.map((item, index) => {
            const open = openFaq === index;
            const buttonId = `${baseId}-q-${index}`;
            const panelId = `${baseId}-a-${index}`;
            return (
              <div
                key={item.q}
                className="rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface)]"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-semibold text-[var(--kuct-text)]"
                    onClick={() => setOpenFaq(open ? null : index)}
                  >
                    {item.q}
                    <span aria-hidden className="text-[var(--kuct-muted)]">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                  className="px-4 pb-4 text-sm leading-relaxed text-[var(--kuct-muted)]"
                >
                  <FaqAnswerText text={item.a} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FaqHubContent() {
  const hub = getFaqHubCopy();

  return (
    <main>
      <Nav />
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal variant="title">
            <p className="kuct-section-eyebrow">FAQ</p>
            <h1 className="mt-3 max-w-[22ch] font-display text-[1.75rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.25rem] lg:text-[2.5rem]">
              <AccentText>{hub.h1}</AccentText>
            </h1>
            <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-[var(--kuct-muted)]">
              {hub.lead}
            </p>
            <nav aria-label="Mục FAQ" className="mt-8">
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {hub.groups.map((group) => (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="inline-flex rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--kuct-text)] no-underline transition hover:bg-[var(--kuct-surface-muted)]"
                    >
                      {group.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </div>
      </section>

      <section
        className="border-t border-[var(--kuct-border)] py-12"
        aria-labelledby="faq-hub-answer"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            id="faq-hub-answer"
            className="font-display text-xl font-semibold sm:text-2xl"
          >
            <AccentText>{hub.answerTitle}</AccentText>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--kuct-text)]">
            {hub.answerFirst}
          </p>
        </div>
      </section>

      {hub.groups.map((group) => (
        <FaqGroupBlock key={group.id} group={group} />
      ))}

      <section className="kuct-section-wash py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-base text-[var(--kuct-muted)]">
            Chưa thấy câu trả lời?{" "}
            <Link
              href={assetPath("/contact/")}
              className="font-semibold text-[var(--kuct-accent)] hover:underline"
            >
              Liên hệ Dolphin
            </Link>{" "}
            hoặc{" "}
            <a
              href="https://zalo.me/0779937633"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--kuct-accent)] hover:underline"
            >
              chat Zalo
            </a>
            .
          </p>
          <ul className="mt-6 flex list-none flex-wrap justify-center gap-x-4 gap-y-2 p-0 text-sm font-medium">
            <li>
              <Link href={assetPath("/industries/")} className="text-[var(--kuct-accent)] hover:underline">
                CRM · ngành
              </Link>
            </li>
            <li>
              <Link href={assetPath("/pos/")} className="text-[var(--kuct-accent)] hover:underline">
                POS
              </Link>
            </li>
            <li>
              <Link href={assetPath("/case-studies/")} className="text-[var(--kuct-accent)] hover:underline">
                Case studies
              </Link>
            </li>
            <li>
              <Link
                href={assetPath("/chinh-sach-gia-dolphin-2026/")}
                className="text-[var(--kuct-accent)] hover:underline"
              >
                Bảng giá
              </Link>
            </li>
            <li>
              <Link href={assetPath("/dolphin-care/")} className="text-[var(--kuct-accent)] hover:underline">
                Care
              </Link>
            </li>
            <li>
              <Link href={assetPath("/dolphin-ops/")} className="text-[var(--kuct-accent)] hover:underline">
                Ops
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
