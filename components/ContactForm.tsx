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
      className="relative hidden min-h-[16rem] items-center justify-center overflow-hidden rounded-[1.75rem] lg:flex"
      style={{
        background:
          "radial-gradient(ellipse at 70% 42%, rgb(var(--kuct-accent-rgb) / 0.16), transparent 62%), linear-gradient(145deg, color-mix(in srgb, var(--kuct-accent-3) 22%, transparent), transparent 70%)",
      }}
      aria-hidden
    >
      <Image
        src={assetPath("/brand/logo-dolphin.png")}
        alt=""
        width={519}
        height={519}
        className="kuct-mascot-float relative z-[1] h-auto max-h-64 w-auto max-w-[min(18rem,70%)] object-contain drop-shadow-[0_16px_32px_rgba(var(--kuct-accent-rgb),0.22)] select-none sm:max-h-72"
        sizes="(min-width: 1024px) 12rem, 0px"
      />
    </div>
  );
}

export function ContactForm() {
  const { t } = useLocale();
  const c = t.contact;

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal variant="left">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              <AccentText>{c.title}</AccentText>
            </h2>
            <p className="mt-3 max-w-xl text-[var(--kuct-muted)]">
              <BrandText size="sm">{c.support}</BrandText>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://zalo.me/0779937633"
                target="_blank"
                rel="noopener noreferrer"
                className="kuct-btn-primary inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold"
              >
                {c.ctaZalo}
              </a>
              <a
                href="mailto:nchithanh9999@gmail.com"
                className="kuct-btn-ghost inline-flex items-center rounded-full px-6 py-2.5 text-sm font-medium"
              >
                {c.ctaEmail}
              </a>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <ContactVisualScene />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
