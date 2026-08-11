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
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { isJobAcceptingApplications, JOB_HIRING, sortJobsByDisplayOrder } from "@/lib/careers-jobs";
import { submitLead } from "@/lib/leads-api";

const fieldClass =
 "mt-1 w-full rounded-xl border border-black/15 bg-[var(--kuct-panel)] px-4 py-2.5 text-[var(--kuct-text)] outline-none backdrop-blur-md kuct-field focus:border-black/40";

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
 const { t, locale } = useLocale();
 const a = t.careers.apply;
 const [sent, setSent] = useState(false);
 const [sendError, setSendError] = useState(false);
 const [submitting, setSubmitting] = useState(false);
 const [now, setNow] = useState<Date | null>(null);
 const schema = useMemo(() => createCareersSchema(a.errors), [a.errors]);

 useEffect(() => {
 setNow(new Date());
 }, []);

 const openJobs = useMemo(
 () =>
 sortJobsByDisplayOrder(
 t.careers.jobs.filter((job) => {
 if (JOB_HIRING[job.id].kind === "closed") return false;
 if (!now) return true;
 return isJobAcceptingApplications(job.id, now);
 }),
 ),
 [t.careers.jobs, now],
 );

 const safeInitial =
 initialRole &&
 JOB_HIRING[initialRole].kind !== "closed" &&
 (!now || isJobAcceptingApplications(initialRole, now))
 ? initialRole
 : undefined;

 const {
 register,
 handleSubmit,
 setValue,
 formState: { errors },
 } = useForm<CareersValues>({
 resolver: zodResolver(schema),
 defaultValues: { role: safeInitial, honeypot: "" },
 });

 useEffect(() => {
 if (safeInitial) setValue("role", safeInitial);
 }, [safeInitial, setValue]);

 const onSubmit = async (data: CareersValues) => {
 if (!isJobAcceptingApplications(data.role) || submitting) return;
 const roleTitle =
 t.careers.jobs.find((j) => j.id === data.role)?.title ?? data.role;
 setSubmitting(true);
 setSendError(false);
 setSent(false);
 const result = await submitLead({
 source: "careers",
 name: data.name,
 contact: data.contact,
 note: data.message,
 locale,
 payload: {
 portfolio: data.portfolio,
 role: data.role,
 roleTitle,
 },
 honeypot: data.honeypot ?? "",
 });
 setSubmitting(false);
 if (result.ok) {
 setSent(true);
 return;
 }
 setSendError(true);
 };

 return (
 <section id="apply" className="scroll-mt-20 py-24">
 <div className="mx-auto max-w-7xl px-6">
 <Reveal variant="title">
 <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {a.eyebrow}
 </p>
 <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
 {a.title}
 </h2>
 <p className="mt-3 max-w-xl text-[var(--kuct-muted)]">
 <BrandText size="sm">{a.support}</BrandText>
 </p>
 </Reveal>
 <Reveal delay={60}>
 <form
 onSubmit={handleSubmit(onSubmit)}
 className="mt-10 max-w-xl space-y-5"
 noValidate
 >
 <div
 className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
 aria-hidden
 >
 <label htmlFor="careers-honeypot">Company</label>
 <input
 id="careers-honeypot"
 tabIndex={-1}
 autoComplete="off"
 {...register("honeypot")}
 />
 </div>
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
 {openJobs.map((job) => (
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
 disabled={submitting}
 className="kuct-btn-primary rounded-lg px-5 py-3 text-sm font-semibold disabled:opacity-50"
 >
 {a.submit}
 </button>
 {sent && (
 <p className="text-sm text-[var(--kuct-accent)]">{a.sent}</p>
 )}
 {sendError && (
 <p className="text-sm text-red-600">{a.sendError}</p>
 )}
 </form>
 </Reveal>
 </div>
 </section>
 );
}
