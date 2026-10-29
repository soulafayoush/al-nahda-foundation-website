"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Check } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { SectionHeading, FadeIn } from "@/components/section-utils";

export function MissionVisionSection() {
  const { t } = useSite();

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent relative overflow-hidden">
      {/* decorative leaves */}
      <div className="absolute top-10 -end-10 h-40 w-40 rounded-full bg-secondary/10 blur-2xl" aria-hidden />
      <div className="absolute bottom-10 -start-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" aria-hidden />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={t.mission.badge} title={t.mission.title} />

        <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission */}
          <FadeIn>
            <div className="group relative h-full rounded-3xl bg-card border border-border p-7 lg:p-9 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all overflow-hidden">
              <div className="absolute -top-12 -end-12 h-32 w-32 rounded-full bg-primary/5 group-hover:scale-125 transition-transform duration-500" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 rounded-2xl gradient-green items-center justify-center shadow-lg shadow-primary/20 mb-5">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">
                  {t.mission.missionTitle}
                </h3>
                <ul className="mt-5 space-y-3">
                  {t.mission.missionPoints.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-sm sm:text-base text-foreground/80 font-medium">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Vision */}
          <FadeIn delay={0.1}>
            <div className="group relative h-full rounded-3xl bg-card border border-border p-7 lg:p-9 shadow-sm hover:shadow-xl hover:border-secondary/40 transition-all overflow-hidden">
              <div className="absolute -top-12 -end-12 h-32 w-32 rounded-full bg-secondary/10 group-hover:scale-125 transition-transform duration-500" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 rounded-2xl gradient-orange items-center justify-center shadow-lg shadow-secondary/20 mb-5">
                  <Eye className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">
                  {t.mission.visionTitle}
                </h3>
                <ul className="mt-5 space-y-3">
                  {t.mission.visionPoints.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-secondary" />
                      </span>
                      <span className="text-sm sm:text-base text-foreground/80 font-medium">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
