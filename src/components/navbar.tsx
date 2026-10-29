"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useSite, type PageId } from "@/components/site-provider";
import { LogoLockup } from "@/components/site-logo";
import { cn } from "@/lib/utils";

const NAV_ITEMS: { id: PageId; key: keyof ReturnType<typeof useSite>["t"]["nav"] }[] = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "projects", key: "projects" },
  { id: "structure", key: "structure" },
  { id: "contact", key: "contact" },
];

export function Navbar() {
  const { lang, toggleLang, page, setPage, t } = useSite();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: PageId) => {
    setPage(id);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "glass shadow-lg shadow-primary/5 border-b border-border/60"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
            {/* Logo */}
            <button
              onClick={() => handleNav("home")}
              className="flex items-center gap-2 shrink-0 transition-opacity hover:opacity-90"
              aria-label="Al-Nahda Foundation Home"
            >
              <LogoLockup lang={lang} className="h-10 lg:h-11" />
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors",
                    page === item.id
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {t.nav[item.key]}
                  {page === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="inline-flex items-center gap-1.5 min-h-[44px] min-w-[44px] px-3 rounded-lg text-sm font-bold border border-border/70 bg-card/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Switch language"
              >
                <Globe className="h-4 w-4" />
                <span>{lang === "ar" ? "EN" : "ع"}</span>
              </button>

              <button
                onClick={() => setMobileOpen((o) => !o)}
                className="lg:hidden inline-flex items-center justify-center h-12 w-12 rounded-lg border border-border/70 bg-card/50 text-foreground"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-border/60 glass"
            >
              <div className="container mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={cn(
                      "px-4 py-3.5 min-h-[48px] text-start rounded-xl text-base font-semibold transition-colors flex items-center",
                      page === item.id
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-muted"
                    )}
                  >
                    {t.nav[item.key]}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Spacer so content isn't hidden behind fixed navbar */}
      <div className="h-16 lg:h-20" aria-hidden />
    </>
  );
}
