"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider",
        "bg-secondary/15 text-secondary border border-secondary/25",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
      {children}
    </motion.span>
  );
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
  className,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && "text-center mx-auto", "max-w-3xl", className)}>
      {badge && <SectionBadge>{badge}</SectionBadge>}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-balance"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
