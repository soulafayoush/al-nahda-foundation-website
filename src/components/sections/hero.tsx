"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Users, Leaf, HandHeart, Quote } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { t, lang, setPage } = useSite();
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const stats = [
    { icon: Sparkles, value: t.hero.stat1Value, label: t.hero.stat1Label },
    { icon: Users, value: t.hero.stat2Value, label: t.hero.stat2Label },
    { icon: Leaf, value: t.hero.stat3Value, label: t.hero.stat3Label },
  ];

  return (
    <section className="relative overflow-hidden gradient-hero pt-8 pb-16 lg:pt-16 lg:pb-28">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pattern-dots opacity-50" aria-hidden />
      <motion.div
        aria-hidden
        className="absolute -top-24 -end-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -start-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-6 text-center lg:text-start">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-primary/10 text-primary border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              {t.hero.badge}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-foreground text-balance"
            >
              {t.hero.title}
              <span className="block mt-3 text-xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent leading-snug">
                {t.hero.titleAccent}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-6 text-sm sm:text-lg text-muted-foreground leading-[1.8] sm:leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3"
            >
              <button
                onClick={() => setPage("about")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 min-h-[52px] rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                {t.hero.ctaAbout}
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={() => setPage("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 min-h-[52px] rounded-xl bg-card text-foreground font-bold text-sm border border-border hover:border-secondary hover:text-secondary hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <HandHeart className="h-4 w-4" />
                {t.hero.ctaContact}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.dl
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-start">
                  <dt className="text-xl sm:text-3xl font-extrabold text-primary">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-[10px] sm:text-sm text-muted-foreground font-medium leading-tight">
                    {s.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Visual — real hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              {/* Main image card */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/3] lg:aspect-square">
                <img
                  src="/images/alnahda/pdf/outdoor-session.webp"
                  alt={lang === "ar" ? "جلسة مجتمعية لمؤسسة النهضة للتنمية" : "Al-Nahda Foundation community session"}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.currentTarget.style.display = "none");
                  }}
                />
                {/* gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 lg:p-6">
                  <div className="flex items-start gap-3 text-background">
                    <span className="h-9 w-9 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <Quote className="h-4 w-4 text-secondary-foreground" />
                    </span>
                    <p className="text-sm font-semibold leading-snug drop-shadow">
                      {lang === "ar"
                        ? "نبني الغد بأيدٍ تعزز الحياة والكرامة الإنسانية."
                        : "Building tomorrow with hands that uphold life and human dignity."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat card — top (hidden on mobile to avoid overlap) */}
              <motion.div
                initial={{ opacity: 0, x: isRtl ? 30 : -30, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={cn(
                  "absolute -top-4 hidden sm:block",
                  isRtl ? "-start-3" : "-end-3",
                  "bg-card rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3 max-w-[190px]"
                )}
              >
                <div className="h-10 w-10 rounded-xl bg-accent/30 flex items-center justify-center shrink-0">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground leading-tight">
                    {isRtl ? "تنمية مستدامة" : "Sustainable"}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {isRtl ? "مبادرات خضراء" : "Green initiatives"}
                  </p>
                </div>
              </motion.div>

              {/* Floating stat card — bottom (hidden on mobile) */}
              <motion.div
                initial={{ opacity: 0, x: isRtl ? -30 : 30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className={cn(
                  "absolute -bottom-5 hidden sm:block",
                  isRtl ? "-end-3" : "-start-3",
                  "bg-card rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3 max-w-[210px]"
                )}
              >
                <div className="h-10 w-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <HandHeart className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground leading-tight">
                    {isRtl ? "أثر مجتمعي" : "Social Impact"}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {isRtl ? "إغاثة وتمكين" : "Relief & empowerment"}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative">
        <svg
          className="block w-full h-12 lg:h-16 text-background"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,40 C240,80 480,0 720,32 C960,64 1200,16 1440,40 L1440,80 L0,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
