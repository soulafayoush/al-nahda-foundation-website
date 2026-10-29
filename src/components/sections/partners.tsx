"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { SectionBadge } from "@/components/section-utils";

// Real partner organizations mentioned in the PDF content
const partners = [
  { ar: "الهلال الأحمر السوري", en: "Syrian Red Crescent", abbr: "SARC" },
  { ar: "منظمة الإغاثة النرويجية", en: "Norwegian People's Aid", abbr: "NPA" },
  { ar: "وزارة الشؤون الاجتماعية والعمل", en: "Ministry of Social Affairs & Labor", abbr: "MoSAL" },
  { ar: "منظمة الأمل الدولية", en: "International Hope Org.", abbr: "IHO" },
  { ar: "وزارة الثقافة", en: "Ministry of Culture", abbr: "MoC" },
  { ar: "Operazione Colomba", en: "Operazione Colomba", abbr: "OC" },
  { ar: "فريق مبادرون", en: "Mubadiron Team", abbr: "MBD" },
  { ar: "الدفاع المدني", en: "Civil Defense", abbr: "CD" },
];

export function PartnersSection() {
  const { lang } = useSite();

  return (
    <section className="py-14 lg:py-20 border-y border-border/60 bg-card/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <SectionBadge>
            {lang === "ar" ? "شركاء النجاح" : "Our Partners"}
          </SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-2xl sm:text-3xl font-extrabold"
          >
            {lang === "ar" ? "معاً نصنع الأثر" : "Together We Create Impact"}
          </motion.h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            {lang === "ar"
              ? "نفخر بشراكاتنا مع جهات حكومية ومنظمات دولية ومحلية تعزز أثرنا التنموي"
              : "We are proud of our partnerships with governmental bodies and international and local organizations that amplify our developmental impact"}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.abbr}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center gap-3 rounded-2xl bg-card border border-border p-4 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Handshake className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-xs text-foreground leading-tight line-clamp-2">
                  {lang === "ar" ? p.ar : p.en}
                </p>
                <p className="mt-0.5 text-[10px] font-bold text-secondary uppercase tracking-wide">
                  {p.abbr}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
