import type { Metadata, Viewport } from "next";
import { Cairo, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "مؤسسة النهضة للتنمية | Al-Nahda Foundation for Development",
  description:
    "مؤسسة غير ربحية تعنى بخدمة الإنسان وتنمية المجتمع عبر مبادرات إغاثية وتنموية. نصنع نهضة مستدامة تبدأ بالإنسان وتقاس بالأثر.",
  keywords: [
    "النهضة",
    "التنمية",
    "مؤسسة",
    "غير ربحية",
    "إغاثة",
    "Al-Nahda",
    "Foundation",
    "non-profit",
    "Syria",
    "development",
  ],
  authors: [{ name: "Al-Nahda Foundation" }],
  openGraph: {
    title: "مؤسسة النهضة للتنمية | Al-Nahda Foundation",
    description: "أثرٌ نحو النهضة - نصنع نهضة مستدامة تبدأ بالإنسان وتقاس بالأثر",
    type: "website",
    locale: "ar_SY",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a7a43" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1f17" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${jakarta.variable} font-cairo antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {children}
        <SonnerToaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
