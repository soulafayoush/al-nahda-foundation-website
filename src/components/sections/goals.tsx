"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Leaf,
  GraduationCap,
  HeartHandshake,
  TrendingUp,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { useSite } from "@/components/site-provider";
import { SectionHeading } from "@/components/section-utils";

const ICON_MAP: Record<string, LucideIcon> = {
  users: Users,
  leaf: Leaf,
  graduation: GraduationCap,
  heart: HeartHandshake,
  trending: TrendingUp,
  building: Building2,
};

export function GoalsSection() {
  const { t } = useSite();

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={t.goals.badge} title={t.goals.title} subtitle={t.goals.subtitle} />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {t.goals.items.map((goal, i) => {
            const Icon = ICON_MAP[goal.icon] ?? Users;
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-card border border-border p-6 lg:p-7 shadow-sm hover:shadow-xl transition-shadow overflow-hidden"
              >
                {/* gradient ring on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-5xl font-black text-primary/8 group-hover:text-primary/15 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-foreground">
                  {goal.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {goal.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
