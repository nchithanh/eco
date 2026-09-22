/** Soft cap per assistant bubble (grapheme-ish via Array.from). */
export const CHAT_REPLY_CHUNK_MAX = 280;

const SENTENCE_END = /(?<=[.!?…。！？])\s+/u;

/**
 * Split a long assistant reply into several chat bubbles.
 * Prefers blank-line paragraphs, then sentence boundaries, then word wrap.
 */
export function splitChatReply(
  text: string,
  maxChars: number = CHAT_REPLY_CHUNK_MAX,
): string[] {
  const trimmed = text.replace(/\r\n/g, "\n").trim();
  if (!trimmed) return [];
  if (Array.from(trimmed).length <= maxChars) return [trimmed];

  const paragraphs = trimmed
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  const units: string[] = [];
  for (const para of paragraphs) {
    if (Array.from(para).length <= maxChars) {
      units.push(para);
      continue;
    }
    const sentences = splitSentences(para);
    for (const s of sentences) {
      if (Array.from(s).length <= maxChars) {
        units.push(s);
      } else {
        units.push(...wrapByWords(s, maxChars));
      }
    }
  }

  return packUnits(units, maxChars);
}

function splitSentences(para: string): string[] {
  const parts = para.split(SENTENCE_END).map((s) => s.trim()).filter(Boolean);
  return parts.length > 0 ? parts : [para];
}

function wrapByWords(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [text];

  const out: string[] = [];
  let buf = "";

  for (const word of words) {
    const next = buf ? `${buf} ${word}` : word;
    if (Array.from(next).length <= maxChars) {
      buf = next;
      continue;
    }
    if (buf) out.push(buf);
    if (Array.from(word).length <= maxChars) {
      buf = word;
    } else {
      out.push(...hardSlice(word, maxChars));
      buf = "";
    }
  }
  if (buf) out.push(buf);
  return out;
}

function hardSlice(text: string, maxChars: number): string[] {
  const chars = Array.from(text);
  const out: string[] = [];
  for (let i = 0; i < chars.length; i += maxChars) {
    out.push(chars.slice(i, i + maxChars).join(""));
  }
  return out;
}

function packUnits(units: string[], maxChars: number): string[] {
  if (units.length === 0) return [];

  const packed: string[] = [];
  let buf = "";

  for (const unit of units) {
    const next = buf ? `${buf}\n\n${unit}` : unit;
    if (Array.from(next).length <= maxChars) {
      buf = next;
      continue;
    }
    if (buf) packed.push(buf);
    buf = unit;
  }
  if (buf) packed.push(buf);
  return packed;
}
