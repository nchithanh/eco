"use client";

import {
 createContext,
 useCallback,
 useContext,
 useEffect,
 useMemo,
 useState,
 type ReactNode,
} from "react";
import { QuoteEstimatorModal } from "@/components/QuoteEstimatorModal";
import { acquirePageScroll, releasePageScroll } from "@/lib/scroll-lock";

type QuoteContextValue = {
 openQuote: () => void;
 closeQuote: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
 const [open, setOpen] = useState(false);

 const openQuote = useCallback(() => setOpen(true), []);
 const closeQuote = useCallback(() => setOpen(false), []);

 useEffect(() => {
 if (!open) return;
 const onKey = (event: KeyboardEvent) => {
 if (event.key === "Escape") closeQuote();
 };
 document.addEventListener("keydown", onKey);
 acquirePageScroll();
 return () => {
 document.removeEventListener("keydown", onKey);
 releasePageScroll();
 };
 }, [open, closeQuote]);

 const value = useMemo(
 () => ({ openQuote, closeQuote }),
 [openQuote, closeQuote],
 );

 return (
 <QuoteContext.Provider value={value}>
 {children}
 <QuoteEstimatorModal open={open} onClose={closeQuote} />
 </QuoteContext.Provider>
 );
}

export function useQuote() {
 const ctx = useContext(QuoteContext);
 if (!ctx) {
 throw new Error("useQuote must be used within QuoteProvider");
 }
 return ctx;
}
