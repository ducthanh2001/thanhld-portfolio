"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import vi from "./i18n/vi.json";
import en from "./i18n/en.json";
import type { Locale } from "@/types/content";

const dictionaries = { vi, en } as const;
export type Dictionary = typeof vi;

interface LocaleContextValue {
  locale: Locale;
  t: Dictionary;
  toggle: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "portfolio-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("vi");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading client-only localStorage at mount, can't be a lazy initializer since this provider is also server-rendered
    if (stored === "vi" || stored === "en") setLocale(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const toggle = useCallback(() => {
    setLocale((current) => (current === "vi" ? "en" : "vi"));
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, t: dictionaries[locale], toggle }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
