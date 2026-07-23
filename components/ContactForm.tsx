"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createContactSchema,
  type ContactValues,
} from "@/lib/contact-schema";
import { BrandText } from "@/components/BrandName";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const fieldClass =
  "mt-1 w-full rounded-2xl border border-white/70 bg-white/50 px-4 py-2.5 text-[var(--kuct-text)] outline-none backdrop-blur-md kuct-field focus:border-[var(--kuct-accent)]";

export function ContactForm() {
  const { locale } = useLocale();
  return <ContactFormInner key={locale} />;
}

function ContactFormInner() {
  const { t } = useLocale();
  const c = t.contact;
  const [sent, setSent] = useState(false);

  const schema = useMemo(() => createContactSchema(c.errors), [c.errors]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ContactValues) => {
    const subject = encodeURIComponent(`${c.mailSubject} ${data.name}`);
    const body = encodeURIComponent(
      `${c.mailBodyName}: ${data.name}\n${c.mailBodyContact}: ${data.contact}\n\n${data.message}`,
    );
    // Placeholder until KU THANH has a real inbox.
    window.location.href = `mailto:hello@ku-thanh.local?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {c.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          {c.title}
        </h2>
        <p className="mt-3 max-w-xl text-[var(--kuct-muted)]">
          <BrandText size="sm">{c.support}</BrandText>
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 max-w-xl space-y-5"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-sm text-[var(--kuct-muted)]">
              {c.name}
            </label>
            <input id="name" className={fieldClass} {...register("name")} />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm text-[var(--kuct-muted)]">
              {c.contact}
            </label>
            <input id="contact" className={fieldClass} {...register("contact")} />
            {errors.contact && (
              <p className="mt-1 text-xs text-red-600">{errors.contact.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-[var(--kuct-muted)]">
              {c.message}
            </label>
            <textarea
              id="message"
              rows={4}
              className={fieldClass}
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="kuct-btn-primary rounded-full px-7 py-3 text-sm font-semibold"
          >
            {c.submit}
          </button>
          {sent && (
            <p className="text-sm text-[var(--kuct-accent)]">{c.sent}</p>
          )}
        </form>
      </div>
    </section>
  );
}
