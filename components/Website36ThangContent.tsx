"use client";

import type { FormEvent } from "react";
import { useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { Footer } from "@/components/Footer";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import { submitLead } from "@/lib/leads-api";
import {
  getWebsite36ThangCopy,
  type Website36Need,
} from "@/lib/i18n/website-36-thang-copy";
import "@/app/website-36-thang/website-36-thang.css";

function scrollToForm() {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
}

function SectionImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden kuct-surface-card">
      <LazyImage
        src={assetPath(src)}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 40rem, 100vw"
        priority={priority}
      />
    </div>
  );
}

export function Website36ThangContent() {
  const c = getWebsite36ThangCopy();
  const { openQuote } = useQuote();
  const faqId = useId();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState<Website36Need | "">("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setFieldError(null);
    if (!name.trim()) {
      setFieldError(c.form.errors.name);
      return;
    }
    if (!company.trim()) {
      setFieldError(c.form.errors.company);
      return;
    }
    if (!phone.trim()) {
      setFieldError(c.form.errors.phone);
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFieldError(c.form.errors.email);
      return;
    }
    if (!need) {
      setFieldError(c.form.errors.need);
      return;
    }

    setStatus("sending");
    const needLabel =
      c.form.needOptions.find((o) => o.value === need)?.label ?? need;
    const result = await submitLead({
      source: "website-36-thang",
      name: name.trim(),
      contact: `${phone.trim()} · ${email.trim()}`,
      note: message.trim() || undefined,
      locale: "vi",
      honeypot,
      payload: {
        campaign: "website-36-thang",
        company: company.trim(),
        phone: phone.trim(),
        email: email.trim(),
        need,
        needLabel,
        message: message.trim() || null,
      },
    });
    setStatus(result.ok ? "sent" : "error");
  }

  return (
    <div className="w36 w36-has-sticky">
      {/* 1 Hero */}
      <section className="w36-hero scroll-mt-20">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="kuct-type-eyebrow">{c.eyebrow}</p>
            <h1 className="w36-hero__title mt-4 font-display font-semibold text-[var(--kuct-text)]">
              <AccentText>{c.headline}</AccentText>
            </h1>
            <p className="w36-hero__support mx-auto mt-5 max-w-[62ch] text-[var(--kuct-muted)]">
              {c.support}
            </p>
            <div className="w36-pills" aria-label="Điểm nổi bật">
              {c.heroHighlights.map((h, i) => (
                <Reveal key={h.label} delay={120 + i * 90} variant="scale">
                  <div className="w36-pill">
                    <span className="w36-pill__value">{h.value}</span>
                    <span className="w36-pill__label">{h.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={280} className="w36-cta-row">
              <button
                type="button"
                onClick={scrollToForm}
                className="kuct-btn-primary inline-flex items-center rounded-lg text-sm font-semibold"
              >
                {c.ctaConsult}
              </button>
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-ghost inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
              >
                {c.ctaQuote}
              </button>
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* 2 Offer */}
      <section
        id={c.offer.id}
        className="w36-section-accent scroll-mt-20 py-20 sm:py-24"
        aria-labelledby="w36-offer-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title">
            <h2
              id="w36-offer-heading"
              className="kuct-type-h2 font-display text-3xl text-[var(--kuct-text)] sm:text-[2.15rem]"
            >
              {c.offer.title}
            </h2>
          </Reveal>
          <div className="w36-offer-featured">
            {c.offer.items.slice(0, 2).map((item, i) => (
              <Reveal key={item} delay={i * 80} variant="scale">
                <div className="w36-offer-card">
                  <span className="w36-offer-card__num" aria-hidden>
                    36
                  </span>
                  <p className="w36-offer-card__text">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <ul className="w36-offer-rest">
            {c.offer.items.slice(2).map((item, i) => (
              <Reveal key={item} delay={Math.min(i, 4) * 30}>
                <li>
                  <strong>{item}</strong>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 Problem */}
      <section
        id={c.problem.id}
        className="scroll-mt-20 bg-[var(--kuct-panel)] py-20 sm:py-24"
        aria-labelledby="w36-problem-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
            <Reveal variant="title">
              <h2
                id="w36-problem-heading"
                className="kuct-type-h2 font-display text-3xl text-[var(--kuct-text)] sm:text-[2.15rem]"
              >
                {c.problem.title}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-[1.75] text-[var(--kuct-muted)]">
                {c.problem.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
              <button
                type="button"
                onClick={scrollToForm}
                className="mt-8 text-sm font-semibold text-[var(--kuct-accent)] underline-offset-4 hover:underline"
              >
                {c.ctaInline}
              </button>
            </Reveal>
            <Reveal delay={60}>
              <SectionImage
                src={c.images.problem.src}
                alt={c.images.problem.alt}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 Blog */}
      <section
        id={c.blog.id}
        className="scroll-mt-20 py-20 sm:py-24"
        aria-labelledby="w36-blog-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
            <Reveal delay={40} className="order-2 lg:order-1">
              <SectionImage src={c.images.blog.src} alt={c.images.blog.alt} />
            </Reveal>
            <div className="order-1 lg:order-2">
              <Reveal variant="title" className="max-w-3xl">
                <h2
                  id="w36-blog-heading"
                  className="kuct-type-h2 font-display text-3xl text-[var(--kuct-text)] sm:text-[2.15rem]"
                >
                  {c.blog.title}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--kuct-muted)]">
                  {c.blog.intro.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {c.blog.pillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 40}>
                <div className="kuct-surface-card h-full p-5 sm:p-6">
                  <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--kuct-muted)]">
            {c.blog.disclaimer}
          </p>
        </div>
      </section>

      {/* 5 Deliverables */}
      <section
        id={c.deliverables.id}
        className="w36-section-accent w36-section-accent--center scroll-mt-20 py-20 sm:py-24"
        aria-labelledby="w36-deliv-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <h2
              id="w36-deliv-heading"
              className="kuct-type-h2 font-display text-3xl text-[var(--kuct-text)] sm:text-[2.15rem]"
            >
              {c.deliverables.title}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {c.deliverables.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} variant="up">
                <article className="w36-deliv-item border-t border-[var(--kuct-border)] pt-5">
                  <h3 className="font-display text-xl font-semibold text-[var(--kuct-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={scrollToForm}
              className="text-sm font-semibold text-[var(--kuct-accent)] underline-offset-4 hover:underline"
            >
              {c.ctaInline}
            </button>
          </div>
        </div>
      </section>

      {/* 6 Process — sticky left + stacked cards (SiteOutcomes pattern) */}
      <section
        id={c.process.id}
        className="scroll-mt-20 bg-[var(--kuct-panel)] py-20 sm:py-24"
        aria-labelledby="w36-process-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal variant="title">
                <h2
                  id="w36-process-heading"
                  className="kuct-type-h2 max-w-[22ch] font-display text-3xl text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem]"
                >
                  {c.process.title}
                </h2>
              </Reveal>
              <Reveal delay={80} variant="left" className="mt-8">
                <SectionImage
                  src={c.images.process.src}
                  alt={c.images.process.alt}
                />
              </Reveal>
            </div>

            <ol className="flex list-none flex-col gap-4 p-0 sm:gap-5">
              {c.process.steps.map((step, i) => (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={Math.min(i * 40, 160)}
                  variant="up"
                  inViewOptions={{
                    rootMargin: "0px 0px -10% 0px",
                    threshold: 0.15,
                  }}
                >
                  <article className="kuct-surface-card p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-[10px] border border-[var(--kuct-border)] bg-white font-display text-xs font-semibold tabular-nums text-[var(--kuct-accent)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="pt-1.5 font-display text-lg font-semibold leading-snug text-[var(--kuct-text)] sm:text-xl">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)]">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 7 Audience */}
      <section
        id={c.audience.id}
        className="scroll-mt-20 py-20 sm:py-24"
        aria-labelledby="w36-audience-heading"
      >
        <div className="mx-auto max-w-3xl px-6">
          <Reveal variant="title">
            <h2
              id="w36-audience-heading"
              className="kuct-type-h2 font-display text-3xl text-[var(--kuct-text)] sm:text-[2.15rem]"
            >
              {c.audience.title}
            </h2>
            <p className="mt-4 text-base text-[var(--kuct-muted)]">
              {c.audience.intro}
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.audience.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-[var(--kuct-muted)]">
              {c.audience.outro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8 Why */}
      <section
        id={c.why.id}
        className="w36-section-accent scroll-mt-20 py-20 sm:py-24"
        aria-labelledby="w36-why-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <h2
              id="w36-why-heading"
              className="kuct-type-h2 font-display text-3xl text-[var(--kuct-text)] sm:text-[2.15rem]"
            >
              {c.why.title}
            </h2>
            <p className="mt-4 text-base text-[var(--kuct-muted)]">{c.why.intro}</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {c.why.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} variant="up">
                <div className="w36-why-item h-full">
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9 FAQ */}
      <section
        id={c.faq.id}
        className="w36-section-accent w36-section-accent--center scroll-mt-20 py-20 sm:py-24"
        aria-labelledby="w36-faq-heading"
      >
        <div className="mx-auto max-w-3xl px-6">
          <Reveal variant="title" className="text-center">
            <h2
              id="w36-faq-heading"
              className="kuct-type-h2 font-display text-3xl text-[var(--kuct-text)] sm:text-[2.15rem]"
            >
              {c.faq.title}
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-3">
            {c.faq.items.map((item, index) => {
              const panelId = `${faqId}-panel-${index}`;
              const buttonId = `${faqId}-btn-${index}`;
              const open = openFaq === index;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-xl bg-[var(--kuct-panel)]"
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[var(--kuct-text)] transition hover:text-[var(--kuct-accent)] sm:px-6 sm:text-base"
                      onClick={() =>
                        setOpenFaq((cur) => (cur === index ? null : index))
                      }
                    >
                      <span>{item.q}</span>
                      <span
                        aria-hidden
                        className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-menu-hover)] text-sm text-[var(--kuct-accent)]"
                      >
                        {open ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!open}
                    className="px-5 py-4 text-sm leading-[1.7] text-[var(--kuct-muted)] sm:px-6"
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 Final CTA */}
      <section
        id={c.finalCta.id}
        className="w36-final scroll-mt-20 py-20 sm:py-24"
        aria-labelledby="w36-final-heading"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal variant="title">
            <h2
              id="w36-final-heading"
              className="kuct-type-h2 font-display text-3xl text-[var(--kuct-text)] sm:text-[2.15rem]"
            >
              {c.finalCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[54ch] text-base leading-relaxed text-[var(--kuct-muted)]">
              {c.finalCta.support}
            </p>
            <div className="w36-cta-row">
              <button
                type="button"
                onClick={scrollToForm}
                className="kuct-btn-primary inline-flex items-center rounded-lg text-sm font-semibold"
              >
                {c.ctaConsult}
              </button>
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-ghost inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
              >
                {c.ctaQuote}
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11 Lead form */}
      <section
        id={c.form.id}
        className="scroll-mt-24 bg-[var(--kuct-panel)] py-20 sm:py-24"
        aria-labelledby="w36-form-heading"
      >
        <div className="mx-auto max-w-xl px-6">
          <div className="w36-form-shell">
            <Reveal variant="title">
              <h2
                id="w36-form-heading"
                className="kuct-type-h2 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
              >
                {c.form.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)]">
                {c.form.support}
              </p>
            </Reveal>

            {status === "sent" ? (
              <p
                className="mt-8 rounded-xl bg-white px-5 py-4 text-sm text-[var(--kuct-text)]"
                role="status"
              >
                {c.form.sent}
              </p>
            ) : (
              <form className="mt-8 space-y-4" onSubmit={onSubmit} noValidate>
                <label className="block text-sm font-medium text-[var(--kuct-text)]">
                  {c.form.name} *
                  <input
                    className="mt-1.5 w-full rounded-[10px] border border-[var(--kuct-border)] bg-white px-3 py-2.5 text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-[var(--kuct-text)]">
                  {c.form.company} *
                  <input
                    className="mt-1.5 w-full rounded-[10px] border border-[var(--kuct-border)] bg-white px-3 py-2.5 text-sm"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    autoComplete="organization"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-[var(--kuct-text)]">
                  {c.form.phone} *
                  <input
                    className="mt-1.5 w-full rounded-[10px] border border-[var(--kuct-border)] bg-white px-3 py-2.5 text-sm"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    inputMode="tel"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-[var(--kuct-text)]">
                  {c.form.email} *
                  <input
                    type="email"
                    className="mt-1.5 w-full rounded-[10px] border border-[var(--kuct-border)] bg-white px-3 py-2.5 text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-[var(--kuct-text)]">
                  {c.form.need} *
                  <select
                    className="mt-1.5 w-full rounded-[10px] border border-[var(--kuct-border)] bg-white px-3 py-2.5 text-sm"
                    value={need}
                    onChange={(e) =>
                      setNeed(e.target.value as Website36Need | "")
                    }
                    required
                  >
                    <option value="">—</option>
                    {c.form.needOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-medium text-[var(--kuct-text)]">
                  {c.form.message}{" "}
                  <span className="font-normal text-[var(--kuct-muted)]">
                    {c.form.messageOptional}
                  </span>
                  <textarea
                    className="mt-1.5 w-full rounded-[10px] border border-[var(--kuct-border)] bg-white px-3 py-2.5 text-sm"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  aria-hidden
                />
                {fieldError ? (
                  <p className="text-sm text-[#b42318]" role="alert">
                    {fieldError}
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-sm text-[#b42318]" role="alert">
                    {c.form.sendError}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold disabled:opacity-60"
                >
                  {status === "sending" ? "…" : c.form.submit}
                </button>
                <p className="text-xs leading-relaxed text-[var(--kuct-muted)]">
                  {c.form.footnote}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <div className="w36-sticky-cta md:hidden">
        <button
          type="button"
          onClick={scrollToForm}
          className="kuct-btn-primary inline-flex items-center rounded-lg text-sm font-semibold"
        >
          {c.ctaConsult}
        </button>
      </div>
    </div>
  );
}

export function Website36ThangPage() {
  return (
    <main>
      <Nav />
      <Website36ThangContent />
      <Footer />
    </main>
  );
}
