import { type ReactNode } from "react";

/** Decorative empty-state art for Dolphin Admin. */

export type EmptyArtKind = "inbox" | "search" | "panel";

export function EmptyArt({
  kind = "inbox",
  className = "df-empty-art",
}: {
  kind?: EmptyArtKind;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 110"
      width={160}
      height={110}
      aria-hidden
    >
      <rect x="8" y="14" width="144" height="82" rx="10" fill="#f4f4f5" />
      <rect x="18" y="24" width="72" height="10" rx="5" fill="#e4e4e7" />
      {kind === "search" ? (
        <>
          <rect x="18" y="42" width="96" height="8" rx="4" fill="#ddd6fe" />
          <rect x="18" y="56" width="64" height="8" rx="4" fill="#e4e4e7" />
          <circle cx="118" cy="62" r="16" fill="none" stroke="#6b56d6" strokeWidth="4" />
          <path d="M129 73 142 86" stroke="#6b56d6" strokeWidth="4" strokeLinecap="round" />
        </>
      ) : kind === "panel" ? (
        <>
          <rect x="18" y="42" width="52" height="40" rx="10" fill="#ddd6fe" />
          <rect x="78" y="42" width="64" height="12" rx="6" fill="#e4e4e7" />
          <rect x="78" y="60" width="48" height="8" rx="4" fill="#e4e4e7" />
          <circle cx="128" cy="80" r="12" fill="#6b56d6" />
          <path d="M128 74v12M122 80h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <rect x="28" y="48" width="104" height="40" rx="10" fill="#fff" stroke="#e4e4e7" />
          <path d="M28 58h104" stroke="#ddd6fe" strokeWidth="8" />
          <rect x="40" y="68" width="40" height="8" rx="4" fill="#e4e4e7" />
          <rect x="86" y="68" width="28" height="8" rx="4" fill="#6b56d6" opacity="0.35" />
        </>
      )}
    </svg>
  );
}

export function EmptyState({
  kind = "inbox",
  title,
  body,
  action,
}: {
  kind?: EmptyArtKind;
  title: string;
  body?: string;
  action?: ReactNode;
}) {
  return (
    <div className="df-empty">
      <EmptyArt kind={kind} />
      <strong>{title}</strong>
      {body ? <p>{body}</p> : null}
      {action}
    </div>
  );
}
