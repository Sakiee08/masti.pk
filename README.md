# Masti.pk — Pakistan's Premier Discreet Wellness & Supplements Store

Production single-vendor D2C e-commerce platform built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Zustand**, tailored specifically for the Pakistani market with 100% confidential packaging, Cash on Delivery (COD) nationwide, and clinically validated health supplements.

---

## 🌟 Key Features

- **55 Authoritative Products**: Sourced from leading Pakistani pharmacies and manufacturers:
  - **Condoms & Delays**: Durex, Masti, Josh, Sathi, Touch, Dooz, Largo.
  - **Lubricants & Gels**: Durex Play (Aloe Vera 2-in-1, Cherry, Tingling, Classic, Warming), K-Y Jelly, Josh Silky.
  - **Bone & Joint Health**: Vitabiotics Osteocare & Jointace, Nutrifactor Bonex-D & Jointin-D, Nature's Bounty Calcium.
  - **Sexual Health & Virility**: Vitabiotics Wellman Conception, Nutrifactor Tryception & Duron, Qarshi Gen-Xing Gold & Shahi Gold.
  - **Liver Health & Detox**: Nutrifactor Liverovit (Silymarin 80%) & Glutazon (L-Glutathione 500mg), Qarshi Livakseer, Seven Seas Cod Liver Oil.
  - **Kidney & Urinary Health**: Nutrifactor Cranflo (Cranberry PACs), Uri-Care, Uric-Free (Tart Cherry), Qarshi Jawarish Zarooni.
- **100% Discreet Packaging**: Plain unbranded cardboard carton, neutral sender description (*"Logistics Hub"* / *"General Health Goods"*), tamper-evident security tape.
- **Panic / Quick Privacy Exit**: `ESC` key or top-bar button redirects immediately to clean Google search.
- **Mobile-First Experience**: Sticky bottom purchase bar, responsive slide-over cart, touch-optimized checkout.
- **Pakistani Payment Flow**:
  - Cash on Delivery (COD) with zero bank statement record.
  - Free nationwide shipping on orders over **Rs. 2,000**.
  - 1-Click confidential ordering via WhatsApp.
- **Security & Integrity Hardened**:
  - A+ Security Headers (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`).
  - Server-side price recalculation & quantity boundary checks (`create-intent`).
  - IP sliding-window rate limiter protecting checkout queues from bot spam.
  - Strict Pakistani phone number regex validation (`^((\+92|0092|92)?3[0-9]{9}|03[0-9]{9})$`).

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

### 5. Run Automated Security Audit & QA Tests
```bash
node scratch/qa-security-test.js
```

---

## 📁 Architecture & File Structure

```
├── src/
│   ├── app/                          # Next.js App Router (65 pages)
│   │   ├── api/                      # Backend Route Handlers
│   │   │   ├── catalogue/            # GET /api/catalogue (filtering, search)
│   │   │   ├── checkout/             # POST /api/checkout/create-intent (recalculated pricing)
│   │   │   └── products/[slug]/      # GET /api/products/[slug]
│   │   ├── cart/                     # Cart page with coupon discounts
│   │   ├── checkout/                 # Confidential single-column checkout
│   │   │   └── success/[orderId]/    # Order confirmation & WhatsApp support
│   │   ├── discreet-packaging/       # Unboxing comparison guide
│   │   ├── products/                 # PLP with category & brand faceting
│   │   │   └── [slug]/               # PDP with Supplement Facts & sticky mobile bar
│   │   ├── layout.tsx                # Root layout, Google Fonts (Outfit), Viewport
│   │   └── page.tsx                  # Luxury homepage with interactive showcases
│   ├── components/
│   │   ├── cart/CartDrawer.tsx       # Slide-over cart with free shipping bar
│   │   ├── home/
│   │   │   ├── SensationFinder.tsx   # Interactive sensation matcher
│   │   │   └── SupplementsSection.tsx# 4-target health tabs (Bone, Sexual, Liver, Kidney)
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Autocomplete search & mega dropdown
│   │   │   └── Footer.tsx            # Trust pillars, city routing, payment badges
│   │   └── product/
│   │       ├── ProductCard.tsx       # Multi-pack selector, unit price, badges
│   │       ├── ProductCatalogClient.tsx # Multi-facet catalogue filters
│   │       └── ProductDetailClient.tsx  # Clinical supplement facts & sticky bar
│   ├── data/
│   │   └── seed-catalogue.ts         # 55 certified products with live Pakistani CDN packshots
│   ├── lib/
│   │   ├── sanitize.ts               # Zero-dependency XSS HTML sanitizer
│   │   ├── store/cart-store.ts       # Zustand cart with boundary checks
│   │   └── utils.ts                  # PKR formatting & discount calculations
│   └── types/store.ts                # TypeScript interfaces (SupplementFacts, Product, Cart)
├── next.config.mjs                   # Enterprise HTTP security headers
└── scratch/qa-security-test.js       # 24-point automated test suite
```

---

## 📄 License & Confidentiality
Designed for private D2C commercial deployment in Pakistan.
All rights reserved © 2026 Masti.pk.
