# مؤسسة النهضة للتنمية | Al-Nahda Foundation for Development

أثرٌ نحو النهضة — نصنع نهضة مستدامة تبدأ بالإنسان وتقاس بالأثر.

A modern, bilingual (Arabic/English), fully responsive non-profit organization website built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion.

## ✨ Features

- **Bilingual** — Full Arabic (RTL) + English (LTR) with instant language switching
- **5 Pages** — Home, About, Projects, Organizational Structure, Contact (hash-based navigation)
- **36 Projects** — Categorized (Community/Environmental, Relief & Education, Awareness)
- **20 Real Photos** — Extracted from the foundation's PDF profile, optimized as WebP
- **Mobile-First UX** — Bottom tab bar, large touch targets (48px+), safe-area aware
- **World-Class Sections** — Impact stats with animated counters, partners, testimonials, get-involved CTAs, newsletter
- **Direct Contact** — Form sends via Email (mailto) + WhatsApp (wa.me) directly
- **Performance** — ~700ms load time, WebP images (~920KB total), lazy loading
- **SEO Ready** — OpenGraph, robots, theme-color, semantic HTML

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Cairo (Arabic) + Plus Jakarta Sans (Latin) |

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

The app runs on `http://localhost:3000`.

## 📦 Deploy to Vercel

### Option A: via Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — just click **Deploy**
5. Done! Your site is live in ~60 seconds

### Option B: via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow the prompts, then deploy to production
vercel --prod
```

**No environment variables needed** — the site is fully static/client-side.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (RTL, fonts, metadata)
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Tailwind + brand theme (forest green + gold)
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Hero, About, Projects, Structure, Contact, etc.
│   ├── navbar.tsx          # Top navigation with language switcher
│   ├── footer.tsx          # Footer with social links + newsletter
│   ├── mobile-tabbar.tsx   # Mobile bottom navigation bar
│   ├── site-logo.tsx       # SVG logo mark + wordmark
│   ├── site-provider.tsx   # Language + page state context
│   └── page-router.tsx     # Hash-based multi-page router
├── lib/
│   ├── i18n.ts             # All Arabic/English translations
│   ├── content.ts          # Projects, org structure, gallery data
│   └── utils.ts            # Tailwind merge utility
└── public/
    └── images/alnahda/pdf/ # 20 WebP photos from the PDF
```

## 🎨 Brand Identity

| Color | Usage | OKLCH |
|-------|-------|-------|
| Forest Green | Primary | `oklch(0.45 0.13 152)` |
| Golden Orange | Secondary | `oklch(0.7 0.16 70)` |
| Lime Green | Accent | `oklch(0.88 0.12 125)` |
| Warm Off-White | Background | `oklch(0.985 0.008 95)` |

## 📞 Contact

- **Email**: feedback.alnahda.org@gmail.com
- **Phone/WhatsApp**: +963 968 726 351
- **Location**: Al-Qusayr City - Al-Ghaydah Road, Homs, Syria
- **Facebook**: [AlNahdaOrganizationforDevelopment](https://www.facebook.com/AlNahdaOrganizationforDevelopment/)
- **Instagram**: [Al.Nahda.dev](https://www.instagram.com/Al.Nahda.dev)

## 📄 License

© 2025 Al-Nahda Foundation for Development. All rights reserved.
