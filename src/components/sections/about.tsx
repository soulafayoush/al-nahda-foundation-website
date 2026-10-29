"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, BadgeCheck, MapPin, Leaf, Users, HandHeart } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { SectionBadge, FadeIn } from "@/components/section-utils";

export function AboutSection() {
  const { t, lang } = useSite();
  const icons = [Leaf, Users, HandHeart];

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image / info panel */}
          <FadeIn className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-primary/10 to-secondary/10 -z-10" />

              <div className="grid grid-cols-2 gap-4">
                {/* Info card 1 - Founded */}
                <div className="bg-card rounded-2xl border border-border p-5 shadow-sm">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {t.about.founded}
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-foreground" dir={lang === "ar" ? "rtl" : "ltr"}>
                    {t.about.foundedDate}
                  </p>
                </div>

                {/* Info card 2 - License */}
                <div className="bg-card rounded-2xl border border-border p-5 shadow-sm mt-6">
                  <div className="h-11 w-11 rounded-xl bg-secondary/15 flex items-center justify-center mb-3">
                    <BadgeCheck className="h-5 w-5 text-secondary" />
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {t.about.license}
                  </p>
                  <p className="mt-1 text-sm font-bold text-foreground leading-snug">
                    {t.about.licenseDesc}
                  </p>
                </div>

                {/* Areas */}
                <div className="bg-foreground text-background rounded-2xl p-5 shadow-lg col-span-2">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <p className="text-sm font-bold">{t.about.areas}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.about.areasList.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-background/10 border border-background/15"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <SectionBadge>{t.about.badge}</SectionBadge>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance"
            >
              {t.about.title}
            </motion.h2>

            <FadeIn delay={0.1}>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t.about.p1}
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {t.about.p2}
              </p>
            </FadeIn>

            {/* Features */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {t.about.features.map((f, i) => {
                const Icon = icons[i];
                return (
                  <FadeIn key={f.title} delay={0.1 * i}>
                    <div className="h-full rounded-2xl border border-border bg-card/50 p-4 hover:border-primary/30 hover:shadow-md transition-all">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-sm text-foreground leading-tight">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
