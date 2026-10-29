"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { HandHeart, Users, Phone, ArrowLeft, ArrowRight } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { SectionHeading } from "@/components/section-utils";

export function GetInvolvedSection() {
  const { lang, setPage } = useSite();
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const cards = [
    {
      icon: HandHeart,
      title: lang === "ar" ? "تطوّع معنا" : "Volunteer With Us",
      desc:
        lang === "ar"
          ? "انضم إلى فريق المتطوعين وشارك في مبادراتنا المجتمعية والبيئية والتوعوية وصنع الأثر المباشر."
          : "Join our volunteer team and participate in our community, environmental, and awareness initiatives to create direct impact.",
      cta: lang === "ar" ? "انضم الآن" : "Join Now",
      gradient: "from-primary/15 to-primary/5",
      iconBg: "bg-primary text-primary-foreground",
    },
    {
      icon: Users,
      title: lang === "ar" ? "شاركنا" : "Partner With Us",
      desc:
        lang === "ar"
          ? "نبحث عن شراكات مع منظمات وجهات تشاركنا الرؤية لتحقيق تنمية مستدامة وأثر أوسع."
          : "We seek partnerships with organizations and entities that share our vision to achieve sustainable development and wider impact.",
      cta: lang === "ar" ? "لنتواصل" : "Let's Connect",
      gradient: "from-secondary/15 to-secondary/5",
      iconBg: "bg-secondary text-secondary-foreground",
    },
    {
      icon: Phone,
      title: lang === "ar" ? "تواصل معنا" : "Contact Us",
      desc:
        lang === "ar"
          ? "للاستفسار عن أنشطتنا أو المشاركة في مشاريعنا التنموية، يسعدنا تواصلكم معنا في أي وقت."
          : "For inquiries about our activities or participation in our development projects, we welcome your contact at any time.",
      cta: lang === "ar" ? "تواصل الآن" : "Contact Now",
      gradient: "from-accent/30 to-accent/5",
      iconBg: "bg-accent-foreground text-accent",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={lang === "ar" ? "كن جزءاً من الأثر" : "Get Involved"}
          title={lang === "ar" ? "كيف تشارك في النهضة؟" : "How Will You Join the Renaissance?"}
          subtitle={
            lang === "ar"
              ? "أثرنا يكبر بدعمكم. اختر الطريقة التي تناسبك للمساهمة في صناعة نهضة مستدامة"
              : "Our impact grows with your support. Choose the way that suits you to contribute to building sustainable renaissance"
          }
        />

        <div className="mt-12 grid md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl bg-card border border-border p-7 lg:p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all overflow-hidden"
            >
              <div className={`absolute -top-16 -end-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.gradient} blur-2xl group-hover:scale-125 transition-transform duration-500`} />
              <div className="relative">
                <div className={`inline-flex h-14 w-14 rounded-2xl ${c.iconBg} items-center justify-center shadow-lg mb-5`}>
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <button
                  onClick={() => setPage("contact")}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all group/btn"
                >
                  {c.cta}
                  <Arrow className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
