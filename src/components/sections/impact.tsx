"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Sprout, Users, HandHeart, MapPin } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { SectionBadge } from "@/components/section-utils";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  React.useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function ImpactSection() {
  const { t, lang } = useSite();

  const stats = [
    {
      icon: Sprout,
      value: 1400,
      suffix: "+",
      label: lang === "ar" ? "شجرة وشتلة مزروعة" : "Trees & saplings planted",
      color: "from-primary/15 to-primary/5",
      iconColor: "text-primary",
    },
    {
      icon: Users,
      value: 2900,
      suffix: "+",
      label: lang === "ar" ? "مستفيد مباشر" : "Direct beneficiaries served",
      color: "from-secondary/20 to-secondary/5",
      iconColor: "text-secondary",
    },
    {
      icon: HandHeart,
      value: 35,
      suffix: "+",
      label: lang === "ar" ? "مشروع ومبادرة منجزة" : "Projects & initiatives completed",
      color: "from-accent/30 to-accent/5",
      iconColor: "text-accent-foreground",
    },
    {
      icon: MapPin,
      value: 3,
      suffix: "",
      label: lang === "ar" ? "مناطق عمل نشطة" : "Active areas of operation",
      color: "from-primary/10 to-secondary/10",
      iconColor: "text-primary",
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent" aria-hidden />
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionBadge>
            {lang === "ar" ? "أثرنا بالأرقام" : "Our Impact in Numbers"}
          </SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance"
          >
            {lang === "ar" ? "أثر حقيقي قابل للقياس" : "Real, Measurable Impact"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-3 text-muted-foreground max-w-2xl mx-auto"
          >
            {lang === "ar"
              ? "نفذنا أكثر من 35 مشروعاً ومبادرة خدمت آلاف المستفيدين عبر مناطق عملنا منذ تأسيسنا"
              : "We have implemented over 35 projects and initiatives serving thousands of beneficiaries across our operating areas since our founding"}
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl bg-card border border-border p-6 lg:p-7 shadow-sm hover:shadow-xl transition-shadow overflow-hidden text-center"
            >
              <div className={`mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}>
                <s.icon className={`h-7 w-7 ${s.iconColor}`} />
              </div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium leading-snug">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
