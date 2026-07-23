"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createCareersSchema,
  type CareersValues,
  type JobId,
} from "@/lib/careers-schema";
import { BrandText } from "@/components/BrandName";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const fieldClass =
  "mt-1 w-full rounded-2xl border border-white/70 bg-white/50 px-4 py-2.5 text-[var(--kuct-text)] outline-none backdrop-blur-md kuct-field focus:border-[var(--kuct-accent)]";

type Props = { initialRole?: JobId };

export function CareersApplyForm({ initialRole }: Props) {
  const { locale } = useLocale();
  return (
    <CareersApplyFormInner
      key={`${locale}-${initialRole ?? ""}`}
      initialRole={initialRole}
    />
  );
}

function CareersApplyFormInner({ initialRole }: Props) {
  const { t } = useLocale();
  const a = t.careers.apply;
  const [sent, setSent] = useState(false);
  const schema = useMemo(() => createCareersSchema(a.errors), [a.errors]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CareersValues>({
    resolver: zodResolver(schema),
    defaultValues: { role: initialRole },
  });

  useEffect(() => {
    if (initialRole) setValue("role", initialRole);
  }, [initialRole, setValue]);

  const onSubmit = (data: CareersValues) => {
    const roleTitle =
      t.careers.jobs.find((j) => j.id === data.role)?.title ?? data.role;
    const subject = encodeURIComponent(`${a.mailSubject} ${roleTitle}`);
    const body = encodeURIComponent(
      `${a.mailBodyName}: ${data.name}\n${a.mailBodyContact}: ${data.contact}\n${a.mailBodyPortfolio}: ${data.portfolio}\n${a.mailBodyRole}: ${roleTitle}\n\n${data.message}`,
    );
    window.location.href = `mailto:hello@ku-thanh.local?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="apply" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {a.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          {a.title}
        </h2>
        <p className="mt-3 max-w-xl text-[var(--kuct-muted)]">
          <BrandText size="sm">{a.support}</BrandText>
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 max-w-xl space-y-5"
          noValidate
        >
          <div>
            <label
              htmlFor="careers-name"
              className="block text-sm text-[var(--kuct-muted)]"
            >
              {a.name}
            </label>
            <input
              id="careers-name"
              className={fieldClass}
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="careers-contact"
              className="block text-sm text-[var(--kuct-muted)]"
            >
              {a.contact}
            </label>
            <input
              id="careers-contact"
              className={fieldClass}
              {...register("contact")}
            />
            {errors.contact && (
              <p className="mt-1 text-xs text-red-600">{errors.contact.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="careers-portfolio"
              className="block text-sm text-[var(--kuct-muted)]"
            >
              {a.portfolio}
            </label>
            <input
              id="careers-portfolio"
              className={fieldClass}
              {...register("portfolio")}
            />
            {errors.portfolio && (
              <p className="mt-1 text-xs text-red-600">
                {errors.portfolio.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="careers-role"
              className="block text-sm text-[var(--kuct-muted)]"
            >
              {a.role}
            </label>
            <select
              id="careers-role"
              className={fieldClass}
              {...register("role")}
              defaultValue={initialRole ?? ""}
            >
              <option value="" disabled>
                {a.role}
              </option>
              {t.careers.jobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title}
                </option>
              ))}
            </select>
            {errors.role && (
              <p className="mt-1 text-xs text-red-600">{errors.role.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="careers-message"
              className="block text-sm text-[var(--kuct-muted)]"
            >
              {a.message}
            </label>
            <textarea
              id="careers-message"
              rows={4}
              className={fieldClass}
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="kuct-btn-primary rounded-full px-7 py-3 text-sm font-semibold"
          >
            {a.submit}
          </button>
          {sent && (
            <p className="text-sm text-[var(--kuct-accent)]">{a.sent}</p>
          )}
        </form>
      </div>
    </section>
  );
}
