import * as React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Mark size variant — the logo is mark-only (no embedded text) to avoid
   * Arabic glyph overlap in SVG <text>. Text is rendered as HTML next to
   * the mark by the caller (navbar/footer) for crisp, properly-shaped
   * Arabic typography via the Cairo font.
   */
  variant?: "default" | "light";
}

/**
 * Al-Nahda Foundation logo mark — a clean, scalable SVG.
 * Symbolism: two forest-green pillars (stability/growth) + open golden book
 * (knowledge) + green sprout with three leaves (renewal & sustainable development).
 *
 * Mark-only by design. Pair with <LogoWordmark /> for text.
 */
export function SiteLogo({ className, variant = "default", ...props }: LogoProps) {
  // `variant` is accepted for API symmetry but the mark is color-invariant
  // by default; destructured out so it never leaks onto the SVG DOM element.
  void variant;
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Al-Nahda Foundation logo"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Soft circular backdrop */}
      <circle cx="32" cy="32" r="30" fill="oklch(0.88 0.12 125 / 0.22)" />
      <circle cx="32" cy="32" r="30" fill="none" stroke="oklch(0.45 0.13 152 / 0.18)" strokeWidth="1.5" />

      {/* Left pillar */}
      <rect x="13" y="26" width="7" height="26" rx="3.2" fill="oklch(0.45 0.13 152)" />
      {/* Right pillar */}
      <rect x="44" y="26" width="7" height="26" rx="3.2" fill="oklch(0.45 0.13 152)" />

      {/* Open book — two golden pages (V-shape) */}
      <path
        d="M20 38 Q32 32 44 38 L44 43 Q32 37 20 43 Z"
        fill="oklch(0.7 0.16 70)"
      />
      <path
        d="M20 38 Q32 32 44 38 L44 36 Q32 30 20 36 Z"
        fill="oklch(0.76 0.15 82)"
      />
      {/* Book spine */}
      <path d="M31 33 L33 33 L33 44 L31 44 Z" fill="oklch(0.6 0.14 60)" />

      {/* Sprout stem */}
      <path
        d="M32 33 L32 16"
        stroke="oklch(0.6 0.15 140)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Left leaf */}
      <path d="M32 25 Q23 22 20 14 Q27 16 32 25 Z" fill="oklch(0.65 0.16 135)" />
      {/* Right leaf */}
      <path d="M32 21 Q41 18 44 10 Q37 12 32 21 Z" fill="oklch(0.65 0.16 135)" />
      {/* Top leaf */}
      <path d="M32 17 Q32 9 26 6 Q31 10 32 17 Z" fill="oklch(0.7 0.15 120)" />
    </svg>
  );
}

interface WordmarkProps {
  variant?: "default" | "light";
  lang?: "ar" | "en";
  className?: string;
}

/**
 * Logo wordmark — renders Arabic + Latin name as crisp HTML text.
 * Use alongside <SiteLogo /> to compose a full lockup.
 */
export function LogoWordmark({
  variant = "default",
  lang = "ar",
  className,
}: WordmarkProps) {
  const titleColor =
    variant === "light" ? "text-background" : "text-primary";
  const subColor =
    variant === "light" ? "text-background/70" : "text-secondary";

  return (
    <span className={`flex flex-col leading-none ${className ?? ""}`}>
      <span
        className={`font-extrabold ${titleColor} ${lang === "ar" ? "text-lg" : "text-base"}`}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {lang === "ar" ? "مؤسسة النهضة" : "Al-Nahda"}
      </span>
      <span
        className={`text-[10px] font-bold tracking-[0.18em] uppercase mt-1 ${subColor} ${lang === "ar" ? "font-cairo" : "font-jakarta"}`}
        dir="ltr"
      >
        {lang === "ar" ? "للتنمية" : "Foundation for Development"}
      </span>
    </span>
  );
}

interface LogoLockupProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "className"> {
  variant?: "default" | "light";
  lang?: "ar" | "en";
  className?: string;
}

/**
 * Full logo lockup: mark + wordmark, composed as accessible HTML.
 */
export function LogoLockup({ variant = "default", lang = "ar", className, ...rest }: LogoLockupProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`} {...rest}>
      <SiteLogo className="h-10 w-10 lg:h-11 lg:w-11 shrink-0" variant={variant} />
      <LogoWordmark variant={variant} lang={lang} />
    </span>
  );
}
