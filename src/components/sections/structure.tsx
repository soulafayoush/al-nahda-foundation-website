"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Megaphone,
  Database,
  UserCog,
  FolderKanban,
  Camera,
  Wallet,
  Baby,
  Brain,
  Activity,
  Crown,
  ChevronDown,
} from "lucide-react";
import { useSite } from "@/components/site-provider";
import { SectionHeading, FadeIn } from "@/components/section-utils";
import { boardMembers, departments, type Department } from "@/lib/content";

const DEPT_ICONS: Record<string, React.ElementType> = {
  pr: Megaphone,
  info: Database,
  hr: UserCog,
  projects: FolderKanban,
  media: Camera,
  financial: Wallet,
  finance: Wallet,
  child: Baby,
  psychosocial: Brain,
  warehouse: Activity,
  mne: Activity,
};

const ROLE_LABELS: Record<string, { ar: string; en: string }> = {
  president: { ar: "رئيس مجلس الأمناء", en: "Board President" },
  vicePresident: { ar: "نائب الرئيس", en: "Vice President" },
  secretary: { ar: "أمين السر", en: "Secretary" },
  treasurer: { ar: "أمين الصندوق", en: "Treasurer" },
};

export function StructureSection() {
  const { t, lang } = useSite();

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={t.structure.badge} title={t.structure.title} subtitle={t.structure.subtitle} />

        {/* Org Chart */}
        <div className="mt-12 flex flex-col items-center">
          {/* General Assembly */}
          <FadeIn>
            <div className="relative">
              <div className="rounded-2xl gradient-brand text-primary-foreground px-8 py-5 shadow-xl shadow-primary/20 text-center min-w-[240px]">
                <Users className="h-7 w-7 mx-auto mb-2 opacity-90" />
                <p className="font-extrabold text-lg">{t.structure.generalAssembly}</p>
              </div>
            </div>
          </FadeIn>

          <ChevronDown className="h-6 w-6 text-muted-foreground my-2" aria-hidden />

          {/* Board of Trustees */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl bg-card border-2 border-primary/30 px-8 py-5 shadow-lg text-center min-w-[240px]">
              <Shield className="h-7 w-7 mx-auto mb-2 text-primary" />
              <p className="font-extrabold text-lg text-foreground">{t.structure.board}</p>
            </div>
          </FadeIn>

          <ChevronDown className="h-6 w-6 text-muted-foreground my-2" aria-hidden />

          {/* Board Members */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
            {boardMembers.map((m, i) => (
              <FadeIn key={m.role} delay={0.05 * i}>
                <div className="h-full rounded-2xl bg-card border border-border p-4 text-center hover:border-secondary/40 hover:shadow-md transition-all">
                  <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mb-2">
                    <Crown className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-[11px] font-bold text-secondary uppercase tracking-wide">
                    {ROLE_LABELS[m.role][lang]}
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-foreground">{m.name}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <ChevronDown className="h-6 w-6 text-muted-foreground my-4" aria-hidden />

          {/* Departments */}
          <div className="w-full">
            <FadeIn>
              <p className="text-center text-sm font-bold text-muted-foreground uppercase tracking-wider mb-5">
                {t.structure.departments}
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {departments.map((d, i) => {
                const Icon = DEPT_ICONS[d.key] ?? FolderKanban;
                return (
                  <motion.div
                    key={d.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group rounded-2xl bg-card border border-border p-5 hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-sm text-foreground leading-tight">
                          {t.structure.roles[d.key]}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{d.head}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
