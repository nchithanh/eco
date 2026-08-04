"use client";

import { useServerInsertedHTML } from "next/navigation";
import { LOCALE_BOOT_SCRIPT, THEME_BOOT_SCRIPT } from "@/lib/boot-scripts";

/**
 * Theme + locale boot scripts injected outside the React render tree (SSR stream).
 * Avoids React 19 dev warning for `<script>` inside components; still runs before paint.
 */
export function BootScripts() {
 useServerInsertedHTML(() => (
 <>
 <script
 id="kuct-theme-boot"
 dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }}
 />
 <script
 id="kuct-locale-boot-script"
 dangerouslySetInnerHTML={{ __html: LOCALE_BOOT_SCRIPT }}
 />
 </>
 ));

 return null;
}
