# Physio Cure

A premium marketing website for Physio Cure, a modern physiotherapy clinic in Larnaca, Cyprus.

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- next/font (Manrope + Inter)
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

## Project Structure

```
app/              # Next.js app router pages and layout
components/
  animations/     # Reusable animation components
  layout/         # Navbar, Footer
  sections/       # Page sections
  ui/             # UI components
hooks/            # Custom React hooks
lib/              # Business data, utilities
public/           # Static assets
styles/           # Global styles
```

## Design System

- **Primary**: Deep Graphite (#111111), Pure White (#FFFFFF)
- **Accent**: Soft Cyan (#7FD6E7), Cool Blue (#4FA8D5)
- **Success**: Fresh Mint (#74D6AE)
- **Typography**: Manrope (display), Inter (body)

## SEO

- Metadata, OpenGraph, Twitter Cards
- robots.ts, sitemap.ts
- Structured Data (MedicalBusiness, Physician, LocalBusiness)
- Semantic HTML, ARIA labels

## Performance

- Hardware-accelerated animations
- prefers-reduced-motion support
- Lazy loading sections
- Optimized images via next/image
