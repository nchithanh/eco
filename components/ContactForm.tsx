"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactValues) => {
    const subject = encodeURIComponent(`YeGa — yêu cầu từ ${data.name}`);
    const body = encodeURIComponent(
      `Tên: ${data.name}\nLiên hệ: ${data.contact}\n\n${data.message}`,
    );
    // Placeholder until YeGa has a real inbox.
    window.location.href = `mailto:hello@yega.local?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/5 bg-[var(--yega-surface)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Bắt đầu dự án với YeGa
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 max-w-xl space-y-5"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-sm text-[var(--yega-muted)]">
              Tên
            </label>
            <input
              id="name"
              className="mt-1 w-full border border-white/10 bg-[#0B1220] px-3 py-2 text-[var(--yega-text)] outline-none focus:border-[var(--yega-accent)]"
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm text-[var(--yega-muted)]">
              Email hoặc Zalo
            </label>
            <input
              id="contact"
              className="mt-1 w-full border border-white/10 bg-[#0B1220] px-3 py-2 text-[var(--yega-text)] outline-none focus:border-[var(--yega-accent)]"
              {...register("contact")}
            />
            {errors.contact && (
              <p className="mt-1 text-xs text-red-400">{errors.contact.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-[var(--yega-muted)]">
              Mô tả ngắn dự án
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 w-full border border-white/10 bg-[#0B1220] px-3 py-2 text-[var(--yega-text)] outline-none focus:border-[var(--yega-accent)]"
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[var(--yega-accent)] px-6 py-3 text-sm font-semibold text-[#0B1220] transition hover:brightness-110"
          >
            Gửi yêu cầu
          </button>
          {sent && (
            <p className="text-sm text-[var(--yega-accent)]">
              Đã mở ứng dụng email của bạn (hoặc sao chép nội dung nếu trình duyệt chặn mailto).
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
