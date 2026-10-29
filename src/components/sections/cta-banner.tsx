"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail, Sparkles } from "lucide-react";
import { useSite } from "@/components/site-provider";

export function CtaBanner() {
  const { t, lang, setPage } = useSite();
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl gradient-brand shadow-2xl shadow-primary/20"
        >
          {/* Decorative */}
          <div className="absolute inset-0 pattern-dots opacity-20" aria-hidden />
          <motion.div
            aria-hidden
            className="absolute -top-16 -end-16 h-64 w-64 rounded-full bg-secondary/20 blur-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-16 -start-16 h-64 w-64 rounded-full bg-background/10 blur-2xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />

          <div className="relative px-6 py-12 lg:px-16 lg:py-16 text-center text-primary-foreground">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-background/15 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              {t.hero.badge}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-balance max-w-2xl mx-auto">
              {t.hero.titleAccent}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-primary-foreground/80 max-w-xl mx-auto">
              {t.contact.subtitle}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setPage("contact")}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-background text-primary font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <Mail className="h-4 w-4" />
                {t.hero.ctaContact}
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={() => setPage("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {t.projects.viewAll}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
