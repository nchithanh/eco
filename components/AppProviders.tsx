"use client";

import type { ReactNode } from "react";
import { AgentLoader } from "@/components/AgentLoader";
import { ContactFab } from "@/components/ContactFab";
import { CookieConsent } from "@/components/CookieConsent";
import { PagePreviewProvider } from "@/components/PagePreviewProvider";
import { QuoteProvider } from "@/components/QuoteProvider";
import { WhaleBackdrop } from "@/components/WhaleBackdrop";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { ThemeProvider } from "@/lib/theme";

// TEMP: hide whale backdrop — set true to re-enable
const SHOW_WHALE_BACKDROP = false;

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <QuoteProvider>
          <PagePreviewProvider>
            {SHOW_WHALE_BACKDROP ? <WhaleBackdrop /> : null}
            <AgentLoader />
            <div className="relative z-10">{children}</div>
            <ContactFab />
            <CookieConsent />
          </PagePreviewProvider>
        </QuoteProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
}
