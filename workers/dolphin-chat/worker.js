/**
 * Cloudflare Worker — Groq proxy for Dolphin Assist (Free plan).
 * System context: ./system-context.js
 * Deploy Quick Edit (1 file): use paste-for-dashboard.js
 * Secret: GROQ_API_KEY
 * URL: https://dolphin-chat.nchithanh9999.workers.dev
 */
import { SYSTEM } from "./system-context.js";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.1-8b-instant";

const ALLOW_ORIGINS = [
  "https://dolphin-software.io.vn",
  "https://www.dolphin-software.io.vn",
  "http://localhost:3000",
  "http://localhost:3002",
];

function corsHeaders(origin) {
  const allow = ALLOW_ORIGINS.includes(origin) ? origin : ALLOW_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method === "GET") {
      return new Response("dolphin-chat ok", {
        headers: { ...cors, "Content-Type": "text/plain;charset=UTF-8" },
      });
    }

    if (request.method !== "POST") {
      return Response.json(
        { error: "Method not allowed" },
        { status: 405, headers: cors },
      );
    }

    if (!env.GROQ_API_KEY) {
      return Response.json(
        { error: "Missing GROQ_API_KEY" },
        { status: 500, headers: cors },
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { error: "Invalid JSON" },
        { status: 400, headers: cors },
      );
    }

    const messages = Array.isArray(body?.messages) ? body.messages.slice(-12) : [];
    const cleaned = messages
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string",
      )
      .map((m) => ({
        role: m.role,
        content: String(m.content).slice(0, 4000),
      }));

    if (!cleaned.length) {
      return Response.json(
        { error: "messages required" },
        { status: 400, headers: cors },
      );
    }

    const groqRes = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.4,
        max_tokens: 500,
        messages: [{ role: "system", content: SYSTEM }, ...cleaned],
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      return Response.json(
        { error: "Groq error", detail: errText.slice(0, 300) },
        { status: 502, headers: cors },
      );
    }

    const data = await groqRes.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "";

    return Response.json(
      { reply },
      { headers: { ...cors, "Content-Type": "application/json" } },
    );
  },
};
