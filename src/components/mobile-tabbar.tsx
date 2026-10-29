"use client";

import * as React from "react";
import { Home, Info, FolderKanban, Network, Mail } from "lucide-react";
import { useSite, type PageId } from "@/components/site-provider";
import { cn } from "@/lib/utils";

const ITEMS: { id: PageId; icon: React.ElementType; key: "home" | "about" | "projects" | "structure" | "contact" }[] = [
  { id: "home", icon: Home, key: "home" },
  { id: "about", icon: Info, key: "about" },
  { id: "projects", icon: FolderKanban, key: "projects" },
  { id: "structure", icon: Network, key: "structure" },
  { id: "contact", icon: Mail, key: "contact" },
];

/**
 * Mobile bottom navigation — thumb-friendly, fixed to viewport bottom.
 * Shows on screens < lg. Respects iOS safe area.
 */
export function MobileTabBar() {
  const { page, setPage, t } = useSite();

  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 glass border-t border-border/60"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Mobile navigation"
    >
      <div className="grid grid-cols-5 gap-0.5 px-1 h-16">
        {ITEMS.map((item) => {
          const active = page === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 rounded-lg transition-colors min-h-[48px]",
                active ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
              aria-label={t.nav[item.key]}
              aria-current={active ? "page" : undefined}
            >
              <Icon className={cn("h-5 w-5 transition-transform", active && "scale-110")} />
              <span className={cn("text-[10px] font-semibold leading-none", active && "font-bold")}>
                {t.nav[item.key]}
              </span>
              {active && (
                <span className="absolute bottom-1 h-1 w-1 rounded-full bg-secondary" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
