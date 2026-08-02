"use client";

import Image from "next/image";
import { AccentText, BrandText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Contact panel visual — lg+ only. */
function ContactVisualScene() {
  return (
    <div
      className="relative hidden min-h-[14rem] items-center justify-center overflow-hidden rounded-[1.75rem] border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] lg:flex"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 70% 42%, rgb(var(--kuct-accent-rgb) / 0.12), transparent 62%)",
      }}
      aria-hidden
    >
      <Image
        src={assetPath("/mascot/dolphin-contact.webp")}
        alt=""
        width={800}
        height={994}
        className="kuct-mascot-float relative z-[1] h-auto max-h-48 w-auto max-w-[min(14rem,55%)] object-contain drop-shadow-[0_12px_28px_rgba(var(--kuct-accent-rgb),0.18)] select-none"
        sizes="(min-width: 1024px) 12rem, 0px"
      />
    </div>
  );
}

export function ContactForm() {
  const { t } = useLocale();
  const c = t.contact;

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal variant="left">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {c.eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
              <AccentText>{c.title}</AccentText>
            </h2>
            <p className="mt-5 max-w-[42ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              <BrandText size="sm">{c.support}</BrandText>
            </p>
            {c.afterSubmitTitle && c.afterSubmitItems?.length ? (
              <div className="mt-6 max-w-[42ch]">
                <p className="text-sm font-semibold text-[var(--kuct-text)]">
                  {c.afterSubmitTitle}
                </p>
                <ul className="mt-3 list-none space-y-2 p-0">
                  {c.afterSubmitItems.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-[var(--kuct-muted)]"
                    >
                      <span className="shrink-0 text-[var(--kuct-accent)]" aria-hidden>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://zalo.me/0779937633"
                target="_blank"
                rel="noopener noreferrer"
                className="kuct-btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
              >
                {c.ctaZalo}
              </a>
              <a
                href="mailto:nchithanh9999@gmail.com"
                className="inline-flex items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(8,8,16,0.85)] px-7 py-3 text-sm font-semibold text-[var(--kuct-text)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-accent)]"
              >
                {c.ctaEmail}
              </a>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--kuct-muted)]">
              {c.nextHint}
            </p>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <ContactVisualScene />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
