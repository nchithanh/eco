"use client";

import {
 useEffect,
 useId,
 useRef,
 useState,
 type FormEvent,
 type KeyboardEvent,
} from "react";
import { useAiChat } from "@/components/AiChatProvider";
import { assetPath } from "@/lib/asset";
import { fetchChatReply, type ChatApiMessage } from "@/lib/chat-api";
import { renderChatRichText } from "@/lib/chat-rich-text";
import {
 getAiChatCopy,
 matchAiChatReply,
 dayPartHello,
} from "@/lib/i18n/ai-chat-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { acquirePageScroll, releasePageScroll } from "@/lib/scroll-lock";

const CONTACTS = {
 phone: "0779937633",
 zalo: "https://zalo.me/0779937633",
 email: "nchithanh9999@gmail.com",
} as const;

const WELCOME_MASCOT = "/mascot/dolphin-eco.webp";

const REPLY_TYPEWRITER_BASE_MS = 16;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function replyTypewriterDelayMs(charCount: number): number {
  if (charCount > 400) return 6;
  if (charCount > 220) return 10;
  return REPLY_TYPEWRITER_BASE_MS;
}

type ChatMessage = {
 id: string;
 role: "assistant" | "user";
 text: string;
};

function IconChat({ className }: { className?: string }) {
 return (
 <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
 <path
 d="M5 6.5A2.5 2.5 0 017.5 4h9A2.5 2.5 0 0119 6.5v7A2.5 2.5 0 0116.5 16H11l-3.8 2.7c-.55.4-1.2-.1-1.05-.75L7 16H7.5A2.5 2.5 0 015 13.5v-7z"
 stroke="currentColor"
 strokeWidth="1.7"
 strokeLinejoin="round"
 />
 <path
 d="M8.5 9h7M8.5 12h4.5"
 stroke="currentColor"
 strokeWidth="1.7"
 strokeLinecap="round"
 />
 </svg>
 );
}

function IconPhone({ className }: { className?: string }) {
 return (
 <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
 <path
 d="M8.2 4.8l2.1 2.1c.3.3.35.78.12 1.15L9.2 9.8a11.2 11.2 0 005 5l1.75-1.22c.37-.23.85-.18 1.15.12l2.1 2.1c.4.4.4 1.05 0 1.45l-1.2 1.2c-.55.55-1.35.78-2.12.55A15.7 15.7 0 014.5 7.27c-.23-.77 0-1.57.55-2.12l1.2-1.2c.4-.4 1.05-.4 1.45 0z"
 stroke="currentColor"
 strokeWidth="1.7"
 strokeLinejoin="round"
 />
 </svg>
 );
}

function IconMail({ className }: { className?: string }) {
 return (
 <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
 <rect
 x="3.5"
 y="5.5"
 width="17"
 height="13"
 rx="2.2"
 stroke="currentColor"
 strokeWidth="1.7"
 />
 <path
 d="M4.5 7.5L12 13l7.5-5.5"
 stroke="currentColor"
 strokeWidth="1.7"
 strokeLinecap="round"
 strokeLinejoin="round"
 />
 </svg>
 );
}

function IconContact({ className }: { className?: string }) {
 return (
 <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
 <path
 d="M8 10.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM6.5 16.2c.7-1.4 2.1-2.2 4-2.2s3.3.8 4 2.2"
 stroke="currentColor"
 strokeWidth="1.7"
 strokeLinecap="round"
 />
 <path
 d="M14.5 8.5h4.2A1.8 1.8 0 0120.5 10.3v4.4a1.8 1.8 0 01-1.8 1.8h-1.1l-1.6 1.2c-.35.26-.8-.05-.72-.48l.35-1.72H14.5"
 stroke="currentColor"
 strokeWidth="1.7"
 strokeLinejoin="round"
 />
 </svg>
 );
}

function IconSend({ className }: { className?: string }) {
 return (
 <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
 <path
 d="M5 12h12M13 6l6 6-6 6"
 stroke="currentColor"
 strokeWidth="1.8"
 strokeLinecap="round"
 strokeLinejoin="round"
 />
 </svg>
 );
}

function IconClose({ className }: { className?: string }) {
 return (
 <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
 <path
 d="M7 7l10 10M17 7L7 17"
 stroke="currentColor"
 strokeWidth="1.9"
 strokeLinecap="round"
 />
 </svg>
 );
}

function IconSparkle({ className }: { className?: string }) {
 return (
 <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
 <path
 d="M12 3.5l1.1 4.2c.15.55.58.98 1.13 1.13L18.5 10l-4.27 1.17c-.55.15-.98.58-1.13 1.13L12 16.5l-1.1-4.2a1.6 1.6 0 00-1.13-1.13L5.5 10l4.27-1.17c.55-.15.98-.58 1.13-1.13L12 3.5z"
 stroke="currentColor"
 strokeWidth="1.5"
 strokeLinejoin="round"
 />
 <path
 d="M18.5 15.5l.45 1.7c.08.3.31.53.61.61l1.7.45-1.7.45a.8.8 0 00-.61.61l-.45 1.7-.45-1.7a.8.8 0 00-.61-.61l-1.7-.45 1.7-.45c.3-.08.53-.31.61-.61l.45-1.7z"
 stroke="currentColor"
 strokeWidth="1.4"
 strokeLinejoin="round"
 />
 </svg>
 );
}

let msgSeq = 0;
function nextId(prefix: string) {
 msgSeq += 1;
 return `${prefix}-${msgSeq}`;
}

export function AiChatWidget() {
 const { locale, t } = useLocale();
 const c = getAiChatCopy(locale);
 const fab = t.contactFab;
 const panelId = useId();
 const listRef = useRef<HTMLDivElement>(null);
 const inputRef = useRef<HTMLInputElement>(null);
 const { open, closeChat } = useAiChat();

  const [contactsOpen, setContactsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sending, setSending] = useState(false);
  const contactsRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

 useEffect(() => {
 setMessages([{ id: nextId("a"), role: "assistant", text: c.greeting }]);
 }, [c.greeting]);

 useEffect(() => {
 if (!open) return;
 const list = listRef.current;
 if (list && typeof list.scrollTo === "function") {
 list.scrollTo({ top: list.scrollHeight });
 }
 inputRef.current?.focus();
 }, [open, messages]);

 useEffect(() => {
 if (!open) return;
 if (typeof window.matchMedia !== "function") return;
 const mq = window.matchMedia("(max-width: 639px)");
 if (!mq.matches) return;

 acquirePageScroll();
 return () => releasePageScroll();
 }, [open]);

 useEffect(() => {
 if (open) setContactsOpen(false);
 }, [open]);

 useEffect(() => {
 if (!contactsOpen) return;

 const onPointerDown = (event: PointerEvent) => {
 const root = contactsRef.current;
 if (!root) return;
 if (event.target instanceof Node && !root.contains(event.target)) {
 setContactsOpen(false);
 }
 };

 const onKeyDown = (event: globalThis.KeyboardEvent) => {
 if (event.key === "Escape") setContactsOpen(false);
 };

 document.addEventListener("pointerdown", onPointerDown);
 document.addEventListener("keydown", onKeyDown);
 return () => {
 document.removeEventListener("pointerdown", onPointerDown);
 document.removeEventListener("keydown", onKeyDown);
 };
 }, [contactsOpen]);

 const pushUserAndReply = async (text: string) => {
 const trimmed = text.trim();
 if (!trimmed || sending) return;

 const userMsg: ChatMessage = {
 id: nextId("u"),
 role: "user",
 text: trimmed,
 };
 setMessages((prev) => [...prev, userMsg]);
 setDraft("");
 setSending(true);

 abortRef.current?.abort();
 const ac = new AbortController();
 abortRef.current = ac;

 const history: ChatApiMessage[] = [...messages, userMsg]
 .filter((m) => m.role === "user" || m.role === "assistant")
 .slice(-12)
 .map((m) => ({ role: m.role, content: m.text }));

 let reply = await fetchChatReply(history, ac.signal);
 if (!reply) {
 reply = matchAiChatReply(trimmed, c);
 }

 if (ac.signal.aborted) {
 setSending(false);
 return;
 }

 const assistantId = nextId("a");
 const full = reply;
 const chars = Array.from(full);

 if (prefersReducedMotion() || chars.length === 0) {
 setMessages((prev) => [
 ...prev,
 { id: assistantId, role: "assistant", text: full },
 ]);
 setSending(false);
 return;
 }

 setMessages((prev) => [
 ...prev,
 { id: assistantId, role: "assistant", text: "" },
 ]);

 const delayMs = replyTypewriterDelayMs(chars.length);
 let i = 0;
 await new Promise<void>((resolve) => {
 const tick = () => {
 if (ac.signal.aborted) {
 resolve();
 return;
 }
 i += 1;
 const next = chars.slice(0, i).join("");
 setMessages((prev) =>
 prev.map((m) =>
 m.id === assistantId ? { ...m, text: next } : m,
 ),
 );
 if (i < chars.length) {
 window.setTimeout(tick, delayMs);
 } else {
 resolve();
 }
 };
 window.setTimeout(tick, delayMs);
 });

 if (!ac.signal.aborted) {
 setMessages((prev) =>
 prev.map((m) =>
 m.id === assistantId ? { ...m, text: full } : m,
 ),
 );
 }
 setSending(false);
 };

 const onSubmit = (event: FormEvent) => {
 event.preventDefault();
 void pushUserAndReply(draft);
 };

 const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
 if (event.key === "Enter" && !event.shiftKey) {
 event.preventDefault();
 void pushUserAndReply(draft);
 }
 };

 const contactItems = [
 {
 key: "zalo",
 href: CONTACTS.zalo,
 label: fab.zalo,
 icon: <IconChat className="size-5" />,
 external: true,
 },
 {
 key: "phone",
 href: `tel:${CONTACTS.phone}`,
 label: fab.phone,
 icon: <IconPhone className="size-5" />,
 external: false,
 },
 {
 key: "email",
 href: `mailto:${CONTACTS.email}`,
 label: fab.email,
 icon: <IconMail className="size-5" />,
 external: false,
 },
 ] as const;

 const showWelcome = !messages.some((m) => m.role === "user");
 const hello = dayPartHello(c);
 const contactPageHref = assetPath("/#contact");

 const resetConversation = () => {
 abortRef.current?.abort();
 setSending(false);
 setDraft("");
 setMessages([{ id: nextId("a"), role: "assistant", text: c.greeting }]);
 };

  return (
 <>
 {open ? (
 <>
 <button
 type="button"
 className="pointer-events-auto fixed inset-0 z-[190] bg-[rgb(26_21_32/0.28)] backdrop-blur-[2px] lg:pointer-events-none lg:bg-transparent lg:backdrop-blur-none"
 aria-label={c.closePanel}
 onClick={closeChat}
 />
 <section
 id={panelId}
 role="dialog"
 aria-modal="true"
 aria-label={c.agentName}
 className="kuct-ai-chat__drawer pointer-events-auto fixed inset-y-0 right-0 z-[200] flex w-full max-w-[24rem] flex-col border-l border-black/[0.08] bg-white shadow-[-16px_0_48px_rgb(26_21_32/0.1)] sm:max-w-[26rem]"
 data-lenis-prevent
 data-lenis-prevent-wheel
 >
 <header className="flex shrink-0 items-center gap-2 border-b border-black/[0.06] bg-white px-3 py-2.5 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-4">
 <button
 type="button"
 className="inline-flex min-w-0 flex-1 items-center gap-1.5 rounded-[10px] px-2 py-1.5 text-left text-sm font-medium text-[var(--kuct-text)] transition hover:bg-black/[0.03]"
 onClick={resetConversation}
 >
 <span className="truncate">{c.newChat}</span>
 <span aria-hidden className="text-[var(--kuct-muted)]">▾</span>
 </button>
 <button
 type="button"
 className="grid size-8 shrink-0 place-items-center rounded-[10px] text-[var(--kuct-muted)] transition hover:bg-black/[0.04] hover:text-[var(--kuct-text)]"
 aria-label={c.newChat}
 onClick={resetConversation}
 >
 <span className="text-lg leading-none">+</span>
 </button>
 <button
 type="button"
 className="grid size-8 shrink-0 place-items-center rounded-[10px] text-[var(--kuct-muted)] transition hover:bg-black/[0.04] hover:text-[var(--kuct-text)]"
 aria-label={c.closePanel}
 onClick={closeChat}
 >
 <IconClose className="size-4" />
 </button>
 </header>

 <div
 ref={listRef}
 className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain bg-white"
 data-lenis-prevent
 data-lenis-prevent-wheel
 >
 {showWelcome ? (
 <div className="flex flex-1 flex-col px-4 py-4 sm:px-5">
 <div className="mb-5 flex items-center justify-between gap-3 rounded-[10px] bg-[var(--kuct-bg)] px-3 py-2.5">
 <p className="text-sm text-[var(--kuct-muted)]">{c.helpBanner}</p>
 <a
 href={contactPageHref}
 className="shrink-0 rounded-[10px] border border-black/[0.08] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--kuct-text)] transition hover:border-[rgba(var(--kuct-accent-rgb),0.3)] hover:text-[var(--kuct-accent)]"
 onClick={closeChat}
 >
 {c.helpSupport}
 </a>
 </div>

 <div className="flex flex-col items-center text-center">
 <img
 src={assetPath(WELCOME_MASCOT)}
 alt=""
 width={120}
 height={120}
 loading="lazy"
 decoding="async"
 className="mb-4 size-[5.5rem] object-contain drop-shadow-[0_12px_28px_rgb(26_21_32/0.12)] sm:size-28"
 />
 <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-[1.65rem]">
 {hello}
 </h2>
 <p className="mt-1.5 text-sm text-[var(--kuct-muted)]">{c.welcomeSub}</p>
 </div>

 <ul className="mt-8 flex list-none flex-col gap-2.5 p-0">
 {c.suggestionCards.map((card, index) => (
 <li key={card.title}>
 <button
 type="button"
 disabled={sending}
 className="flex w-full items-start gap-3 rounded-xl border border-black/[0.06] bg-[var(--kuct-bg)] px-3.5 py-3 text-left transition hover:border-[rgba(var(--kuct-accent-rgb),0.28)] hover:bg-white disabled:opacity-50"
 onClick={() => void pushUserAndReply(card.prompt)}
 >
 <span
 aria-hidden
 className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-[10px] bg-white text-[var(--kuct-accent)] shadow-[0_1px_2px_rgb(26_21_32/0.06)]"
 >
 {index === 0 ? "◎" : index === 1 ? "◈" : index === 2 ? "♡" : "✦"}
 </span>
 <span className="min-w-0">
 <span className="block text-sm font-semibold text-[var(--kuct-text)]">
 {card.title}
 </span>
 <span className="mt-0.5 block text-xs leading-snug text-[var(--kuct-muted)]">
 {card.body}
 </span>
 </span>
 </button>
 </li>
 ))}
 </ul>
 </div>
 ) : (
 <div className="flex flex-1 flex-col gap-3 bg-[var(--kuct-bg)] px-4 py-4">
 {messages.map((m) => {
 if (
 m.role === "assistant" &&
 !m.text &&
 sending &&
 m.id === messages[messages.length - 1]?.id
 ) {
 return null;
 }
 const isStreaming =
 sending &&
 m.role === "assistant" &&
 m.id === messages[messages.length - 1]?.id &&
 m.text.length > 0;
 return (
 <div
 key={m.id}
 className={
 m.role === "user"
 ? "ml-8 self-end rounded-xl rounded-br-md bg-[var(--kuct-accent)] px-3.5 py-2.5 text-sm leading-relaxed text-white"
 : "mr-4 self-start rounded-xl rounded-bl-md border border-black/[0.05] bg-white px-3.5 py-2.5 text-sm font-medium leading-relaxed whitespace-pre-wrap text-[var(--kuct-text)] shadow-[0_1px_2px_rgb(26_21_32/0.04)]"
 }
 >
 {renderChatRichText(m.text, { isUserBubble: m.role === "user" })}
 {isStreaming ? (
 <span
 className="ml-0.5 inline-block animate-pulse text-[var(--kuct-muted)]"
 aria-hidden
 >
 ▍
 </span>
 ) : null}
 </div>
 );
 })}
 {sending &&
 (messages[messages.length - 1]?.role === "user" ||
 (messages[messages.length - 1]?.role === "assistant" &&
 !messages[messages.length - 1]?.text)) ? (
 <div
 className="mr-4 self-start rounded-xl rounded-bl-md border border-black/[0.05] bg-white px-3.5 py-2.5 text-sm text-[var(--kuct-muted)]"
 aria-live="polite"
 >
 …
 </div>
 ) : null}
 <p className="mt-auto pt-2 text-[0.7rem] leading-snug text-[var(--kuct-muted)]">
 {c.escalateHint}
 </p>
 </div>
 )}
 </div>

 <p className="shrink-0 px-4 pt-2 text-center text-[0.65rem] leading-snug text-[var(--kuct-muted)]">
 {c.chatRecorded}
 </p>

 <form
 className="flex shrink-0 flex-col gap-2 border-t border-black/[0.05] bg-white px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
 onSubmit={onSubmit}
 >
 <div className="flex items-end gap-2 rounded-[10px] border border-black/[0.08] bg-[var(--kuct-bg)] p-1.5 focus-within:border-[rgba(var(--kuct-accent-rgb),0.35)]">
 <button
 type="button"
 disabled={sending || !draft.trim()}
 className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-[10px] border border-black/[0.08] bg-white px-3 text-xs font-semibold text-[var(--kuct-text)] transition hover:border-[rgba(var(--kuct-accent-rgb),0.3)] hover:text-[var(--kuct-accent)] disabled:opacity-40"
 aria-label={c.ask}
 onClick={() => void pushUserAndReply(draft)}
 >
 <IconSparkle className="size-3.5 text-[var(--kuct-accent)]" />
 {c.ask}
 </button>
 <input
 ref={inputRef}
 value={draft}
 onChange={(e) => setDraft(e.target.value)}
 onKeyDown={onKeyDown}
 placeholder={c.placeholder}
 aria-label={c.placeholder}
 disabled={sending}
 className="min-w-0 flex-1 bg-transparent px-2 py-2 text-base text-[var(--kuct-text)] outline-none placeholder:text-[var(--kuct-muted)]/60 disabled:opacity-60 sm:text-sm"
 />
 <button
 type="submit"
 disabled={sending || !draft.trim()}
 className="kuct-btn-primary grid size-9 shrink-0 place-items-center rounded-full disabled:opacity-40"
 aria-label={c.send}
 >
 <IconSend className="size-4" />
 </button>
 </div>
 </form>
 </section>
 </>
 ) : null}

 <div className="kuct-ai-chat pointer-events-none fixed right-4 bottom-0 z-[120] flex items-end gap-3 sm:right-6">
 <div className={`flex flex-col items-center gap-3 ${open ? "max-sm:hidden" : ""}`}>
 <div ref={contactsRef} className="pointer-events-auto flex flex-col items-center gap-3">
 {contactsOpen ? (
 <ul className="flex flex-col items-center gap-3">
 {contactItems.map((item, index) => (
 <li
 key={item.key}
 className="kuct-contact-fab__item"
 style={{ animationDelay: `${index * 50}ms` }}
 >
 <a
 href={item.href}
 aria-label={item.label}
 title={item.label}
 className="kuct-contact-fab__btn"
 {...(item.external
 ? { target: "_blank", rel: "noopener noreferrer" }
 : {})}
 >
 {item.icon}
 </a>
 </li>
 ))}
 </ul>
 ) : null}

 <button
 type="button"
 className="kuct-contact-fab__btn kuct-contact-fab__toggle"
 aria-expanded={contactsOpen}
 aria-label={contactsOpen ? fab.close : fab.open}
 title={contactsOpen ? fab.close : fab.open}
 onClick={() => setContactsOpen((prev) => !prev)}
 >
 {contactsOpen ? (
 <IconClose className="size-5" />
 ) : (
 <IconContact className="size-5" />
 )}
 </button>
 </div>
 </div>
 </div>
 </>
 );
}
