# AlonePro Landing Page

Official landing page for **AlonePro** — a native Gutenberg WordPress theme purpose-built for charities, nonprofit foundations, NGOs, and fundraising campaigns.

Built with Next.js 16 App Router, React 19, Tailwind CSS v4, and GSAP ScrollTrigger animations.

---

## Features

- **Hero & Value Proposition**: Clear messaging, call-to-actions, and live theme metrics.
- **Interactive Demo Showcase**: Filterable demo catalog across nonprofit niches (Disaster Relief, Animal Welfare, Clean Water, Healthcare, Education, Community, etc.).
- **Native Gutenberg Experience**: Highlights full-site editing, custom block patterns, and design freedom without bloated page builders.
- **Theme Capabilities Grid**: Modular overview of features (Block Patterns, Visual Palette, Responsive Design, Ultra-Fast Loading, Donations & Fundraising).
- **Pattern & Workflow Showcase**: Curated building blocks and publishing workflow steps for nonprofit teams.
- **Built with Restraint**: Core performance and architectural principles.
- **Plugin Compatibility**: Out-of-the-box compatibility with WooCommerce, GiftFlow, The Events Calendar, Newsletter, Elementor, Beplus Visual Mega Navigation, Yoast / Rank Math SEO, and more.
- **Pricing & Licensing**: Transparent tiers for single sites, agencies, and lifetime access, including an interactive FAQ accordion.
- **Fluid GSAP Motion**: Polished scroll-triggered entrance animations and stagger reveals with reduced-motion support.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Runtime**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with OKLCH design tokens
- **Animations**: [GSAP](https://gsap.com/) & ScrollTrigger
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## Project Structure

```text
├── app/
│   ├── globals.css         # Design tokens, typography, layout, and utility styles
│   ├── layout.tsx          # Root metadata, font configuration, and page wrapper
│   └── page.tsx            # Main landing page assembling sections
├── components/
│   ├── landing/
│   │   ├── site-header.tsx         # Sticky navigation with mobile menu drawer
│   │   ├── hero-section.tsx        # Hero headline, CTA buttons, social proof
│   │   ├── demo-showcase.tsx       # Live search and category-filtered demos
│   │   ├── gutenberg-showcase.tsx  # Gutenberg block features & workflow
│   │   ├── feature-highlights.tsx  # 4-column theme capabilities grid
│   │   ├── pattern-showcase.tsx    # Pattern tags and editorial workflow steps
│   │   ├── principles-section.tsx  # Editorial principles and technical highlights
│   │   ├── compatible-section.tsx  # Supported WordPress plugins grid
│   │   ├── pricing-section.tsx     # Pricing cards, license switch, FAQ accordion
│   │   ├── final-cta.tsx           # Bottom conversion section
│   │   └── site-footer.tsx         # Footer links, copyright, developer credits
│   └── motion/
│       └── gsap-provider.tsx       # Client-side GSAP ScrollTrigger registry
├── data/
│   ├── compatible.ts       # Compatible plugins list & icons
│   ├── demos.json          # Demo catalog data
│   ├── demos.ts            # Demo data types & exports
│   ├── faq.ts              # Pricing and general FAQs
│   ├── features.ts         # Theme capabilities list
│   ├── pricing.ts          # Pricing plans and feature comparisons
│   └── showcase-info.ts    # Pattern tags, workflow steps, principles
└── public/                 # Static assets and icons
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+ (or 11)

### Installation

```bash
pnpm install
```

### Development Server

Start the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized production build:

```bash
pnpm build
```

Preview the production server locally:

```bash
pnpm start
# or specify a custom port:
pnpm start -p 3001
```

---

## Quality Checks

Run ESLint to check for code style issues:

```bash
pnpm lint
```

---

## License

Private / Proprietary — All rights reserved. Developed by [BeplusTheme](https://beplusthemes.com/).
