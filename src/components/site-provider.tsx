"use client";

import * as React from "react";
import { translations, type Lang, type Dict } from "@/lib/i18n";

export type PageId = "home" | "about" | "projects" | "structure" | "contact";

interface SiteContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  page: PageId;
  setPage: (p: PageId) => void;
  t: Dict;
  dir: "rtl" | "ltr";
}

const SiteContext = React.createContext<SiteContextValue | null>(null);

const VALID_PAGES: PageId[] = ["home", "about", "projects", "structure", "contact"];

function getHashPage(): PageId {
  if (typeof window === "undefined") return "home";
  const hash = window.location.hash.replace("#", "");
  if (VALID_PAGES.includes(hash as PageId)) return hash as PageId;
  return "home";
}

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("ar");
  const [page, setPageState] = React.useState<PageId>("home");

  // Sync from hash on mount + listen to hashchange
  React.useEffect(() => {
    setPageState(getHashPage());
    const onHash = () => setPageState(getHashPage());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Apply dir + lang to <html>
  React.useEffect(() => {
    const html = document.documentElement;
    const dir = lang === "ar" ? "rtl" : "ltr";
    html.setAttribute("dir", dir);
    html.setAttribute("lang", lang);
  }, [lang]);

  const setLang = React.useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = React.useCallback(() => setLangState((p) => (p === "ar" ? "en" : "ar")), []);

  const setPage = React.useCallback((p: PageId) => {
    if (typeof window !== "undefined") {
      window.location.hash = p;
      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setPageState(p);
  }, []);

  const value: SiteContextValue = {
    lang,
    setLang,
    toggleLang,
    page,
    setPage,
    t: translations[lang],
    dir: lang === "ar" ? "rtl" : "ltr",
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = React.useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
