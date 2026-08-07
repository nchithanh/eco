"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { assetPath } from "@/lib/asset";

type SchemaJsonViewProps = {
 eyebrow: string;
 title: string;
 description: string;
 data: object;
 rawPath: string;
 crumbs?: { href: string; label: string }[];
};

export function SchemaJsonView({
 eyebrow,
 title,
 description,
 data,
 rawPath,
 crumbs,
}: SchemaJsonViewProps) {
 const [copied, setCopied] = useState(false);
 const pretty = JSON.stringify(data, null, 2);
 const rawHref = assetPath(rawPath);

 const onCopy = useCallback(async () => {
 try {
 await navigator.clipboard.writeText(pretty);
 setCopied(true);
 window.setTimeout(() => setCopied(false), 2000);
 } catch {
 setCopied(false);
 }
 }, [pretty]);

 return (
 <section className="scroll-mt-20 py-16 sm:py-20">
 <div className="mx-auto max-w-6xl px-6">
 {crumbs && crumbs.length > 0 ? (
 <nav className="mb-4 flex flex-wrap gap-2 text-xs text-[var(--kuct-muted)]">
 {crumbs.map((c, i) => (
 <span key={c.href} className="inline-flex items-center gap-2">
 {i > 0 ? <span aria-hidden>/</span> : null}
 <Link
 href={assetPath(c.href)}
 className="hover:text-[var(--kuct-accent)]"
 >
 {c.label}
 </Link>
 </span>
 ))}
 </nav>
 ) : null}

 <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
 {eyebrow}
 </p>
 <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem]">
 <AccentText>{title}</AccentText>
 </h1>
 <p className="mt-4 max-w-[52ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
 {description}{" "}
 <a
 href={rawHref}
 className="font-medium text-[var(--kuct-accent)] underline-offset-2 hover:underline"
 >
 {rawPath}
 </a>
 </p>

 <div className="mt-6 flex flex-wrap gap-3">
 <button
 type="button"
 onClick={onCopy}
 className="kuct-btn-primary inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold"
 >
 {copied ? "Đã copy" : "Copy JSON"}
 </button>
 <a
 href={rawHref}
 download
 className="kuct-btn-ghost inline-flex items-center "
 >
 Tải file
 </a>
 </div>

 <pre
 className="mt-8 overflow-x-auto rounded-xl bg-[var(--kuct-panel)] p-4 text-left text-[12px] leading-relaxed text-[var(--kuct-muted)] sm:p-6 sm:text-[13px]"
 tabIndex={0}
 >
 <code>{pretty}</code>
 </pre>
 </div>
 </section>
 );
}
