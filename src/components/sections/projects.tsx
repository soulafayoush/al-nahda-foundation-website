"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, Sprout, ImageOff, CalendarRange } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { SectionHeading } from "@/components/section-utils";
import { projects, galleryImages, type ProjectCategory } from "@/lib/content";
import { cn } from "@/lib/utils";

const CATS: { id: ProjectCategory | "all"; key: "community" | "relief" | "awareness" }[] = [
  { id: "all", key: "community" },
  { id: "community", key: "community" },
  { id: "relief", key: "relief" },
  { id: "awareness", key: "awareness" },
];

function formatDate(iso: string, lang: "ar" | "en") {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function ProjectsSection() {
  const { t, lang } = useSite();
  const [active, setActive] = React.useState<ProjectCategory | "all">("all");
  const [lightbox, setLightbox] = React.useState<string | null>(null);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  const tabs: { id: ProjectCategory | "all"; label: string }[] = [
    { id: "all", label: lang === "ar" ? "الكل" : "All" },
    { id: "community", label: t.projects.categories.community.title },
    { id: "relief", label: t.projects.categories.relief.title },
    { id: "awareness", label: t.projects.categories.awareness.title },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={t.projects.badge} title={t.projects.title} subtitle={t.projects.subtitle} />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "px-4 py-2.5 rounded-xl text-sm font-bold transition-all border",
                active === tab.id
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                  : "bg-card text-foreground/70 border-border hover:border-primary/40 hover:text-primary"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col rounded-3xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all"
              >
                {/* Image / placeholder */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title[lang]}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Sprout className="h-12 w-12 text-primary/40" />
                    </div>
                  )}
                  {/* Category badge */}
                  <span className="absolute top-3 start-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-background/90 backdrop-blur text-primary border border-primary/20 uppercase tracking-wide">
                    {t.projects.categories[p.category].title.split(" ")[0]}
                  </span>
                  {p.ongoing && (
                    <span className="absolute top-3 end-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-secondary text-secondary-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {t.projects.ongoing}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-base font-extrabold text-foreground leading-tight">
                    {p.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                    {p.desc[lang]}
                  </p>

                  {/* Stats */}
                  {p.stats && p.stats.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stats.map((s) => (
                        <span
                          key={s.value}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-accent/25 text-accent-foreground text-xs font-bold"
                        >
                          <Users className="h-3 w-3" />
                          {s.value} {s.label[lang]}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Date */}
                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarRange className="h-3.5 w-3.5 text-primary" />
                    <span dir={lang === "ar" ? "rtl" : "ltr"}>
                      {formatDate(p.startDate, lang)}
                      <span className="mx-1.5 opacity-50">—</span>
                      {p.ongoing ? t.projects.ongoing : formatDate(p.endDate, lang)}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <ImageOff className="h-5 w-5 text-secondary" />
              {t.projects.gallery}
            </h3>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {galleryImages.map((img, i) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setLightbox(img.src)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-muted",
                  i === 0 || i === 5 ? "col-span-2 aspect-square sm:aspect-[2/1]" : "aspect-square"
                )}
              >
                <img
                  src={img.src}
                  alt={`${t.projects.gallery} ${i + 1}`}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox} alt="gallery" className="max-h-[85vh] w-auto object-contain" />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 end-3 h-9 w-9 rounded-full bg-background/90 text-foreground flex items-center justify-center hover:bg-background"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
