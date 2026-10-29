"use client";

import * as React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Send, Newspaper, BadgeCheck } from "lucide-react";
import { useSite, type PageId } from "@/components/site-provider";
import { LogoLockup } from "@/components/site-logo";
import { cn } from "@/lib/utils";

export function Footer() {
  const { t, lang, setPage } = useSite();

  const quickLinks: { id: PageId; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "structure", label: t.nav.structure },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="mt-auto bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="rounded-xl p-2 inline-flex bg-background/10">
              <LogoLockup lang={lang} variant="light" />
            </div>
            <p className="mt-4 text-sm text-background/70 leading-relaxed max-w-xs">
              {lang === "ar"
                ? "أثرٌ نحو النهضة — نصنع نهضة مستدامة تبدأ بالإنسان وتقاس بالأثر."
                : "Impact toward renaissance — building sustainable development that starts with people and is measured by impact."}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-background/5 border border-background/10">
              <BadgeCheck className="h-4 w-4 text-secondary shrink-0" />
              <p className="text-xs text-background/60 leading-relaxed">
                {lang === "ar"
                  ? "مرخّصة من وزارة الشؤون الاجتماعية والعمل"
                  : "Licensed by the Ministry of Social Affairs and Labor"}
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-base mb-4 text-secondary">
              {t.contact.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setPage(link.id)}
                    className="text-sm text-background/70 hover:text-secondary transition-colors text-start"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-4 text-secondary">{t.contact.title}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:feedback.alnahda.org@gmail.com"
                  className="flex items-start gap-3 text-background/70 hover:text-secondary transition-colors group"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                  <span className="break-all group-hover:underline">
                    feedback.alnahda.org@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+963968726351"
                  className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors group"
                  dir="ltr"
                >
                  <Phone className="h-4 w-4 shrink-0 text-secondary" />
                  <span className="group-hover:underline">+963 968 726 351</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                <span>{t.contact.locationValue}</span>
              </li>
            </ul>
          </div>

          {/* Follow + Newsletter */}
          <div>
            <h3 className="font-bold text-base mb-4 text-secondary">{t.contact.followUs}</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/AlNahdaOrganizationforDevelopment/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-lg bg-background/10 hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/Al.Nahda.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-lg bg-background/10 hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:feedback.alnahda.org@gmail.com"
                aria-label="Email"
                className="h-10 w-10 rounded-lg bg-background/10 hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>

            {/* Direct contact CTA */}
            <a
              href="mailto:feedback.alnahda.org@gmail.com"
              className="mt-6 flex items-center gap-3 rounded-xl bg-background/5 border border-background/10 p-3 hover:bg-background/10 transition-colors group"
            >
              <Newspaper className="h-4 w-4 text-secondary shrink-0" />
              <span className="text-xs text-background/70 group-hover:text-background transition-colors">
                {lang === "ar" ? "تواصل معنا مباشرةً عبر البريد" : "Contact us directly via email"}
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} {lang === "ar" ? "مؤسسة النهضة للتنمية" : "Al-Nahda Foundation for Development"}. {t.contact.rights}.
          </p>
          <p className="text-xs text-background/40">
            {lang === "ar" ? "صُمّم بكل حب" : "Crafted with care"}
          </p>
        </div>
      </div>
    </footer>
  );
}
