"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSite } from "@/components/site-provider";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { MissionVisionSection } from "@/components/sections/mission-vision";
import { GoalsSection } from "@/components/sections/goals";
import { ImpactSection } from "@/components/sections/impact";
import { PartnersSection } from "@/components/sections/partners";
import { GetInvolvedSection } from "@/components/sections/get-involved";
import { ProjectsSection } from "@/components/sections/projects";
import { StructureSection } from "@/components/sections/structure";
import { ContactSection } from "@/components/sections/contact";
import { CtaBanner } from "@/components/sections/cta-banner";

export function PageRouter() {
  const { page } = useSite();

  return (
    <main className="flex-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {page === "home" && (
            <>
              <HeroSection />
              <ImpactSection />
              <AboutSection />
              <MissionVisionSection />
              <GoalsSection />
              <PartnersSection />
              <ProjectsSection />
              <GetInvolvedSection />
              <CtaBanner />
            </>
          )}
          {page === "about" && (
            <>
              <AboutSection />
              <MissionVisionSection />
              <GoalsSection />
              <ImpactSection />
              <PartnersSection />
              <GetInvolvedSection />
              <CtaBanner />
            </>
          )}
          {page === "projects" && (
            <>
              <div className="pt-8 lg:pt-12">
                <ProjectsSection />
              </div>
              <GetInvolvedSection />
              <CtaBanner />
            </>
          )}
          {page === "structure" && (
            <>
              <div className="pt-8 lg:pt-12">
                <StructureSection />
              </div>
              <PartnersSection />
              <CtaBanner />
            </>
          )}
          {page === "contact" && (
            <div className="pt-8 lg:pt-12">
              <ContactSection />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
