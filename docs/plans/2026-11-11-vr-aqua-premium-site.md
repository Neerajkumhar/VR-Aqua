# VR AQUA Premium Website — Implementation Plan

> Execute directly in this session. The workspace has no existing React scaffold, so this is a from-scratch Vite + React build around the existing `public/assets` bottle artwork.

**Goal:** Build a cinematic, responsive, frontend-only product showcase that turns 12 existing bottle designs into a premium branded-water catalogue and inquiry experience.

**Architecture:** Vite + React (JavaScript). One page composed of focused section components. Product data lives outside the UI. CSS design tokens drive the visual system. Motion is CSS + IntersectionObserver, with native `<dialog>` for accessible product and mobile-menu overlays.

**Tech Stack:** React 19, Vite, CSS, native browser APIs. No backend, routing, database, auth, analytics, or contact integration.

---

## 1. Asset manifest

- 12 designs, each with a 500 ML and 1 Litre transparent PNG (24 source images).
- Keep all originals untouched.
- Create WebP display derivatives in `public/assets/optimized/` for page weight.
- Preserve original PNG paths in product data as fallbacks.
- Categorize only from the supplied brand names. Do not invent client facts.

## 2. Files

- `index.html` — document shell, metadata, local font preloads
- `package.json`, `vite.config.js` — Vite scaffold
- `src/main.jsx`, `src/App.jsx` — app entry and section composition
- `src/data/products.js` — product manifest and categories
- `src/data/site.js` — navigation and contact configuration placeholders
- `src/hooks/useReveal.js` — scroll reveal with reduced-motion support
- `src/hooks/useScrollSpy.js` — active navigation section
- `src/components/*` — Navbar, Hero, Introduction, ProductCollection, ProductCard, ProductDetailModal, CustomizationShowcase, BusinessCategories, ProcessSection, BrandGallery, CTASection, ContactSection, Footer, shared UI
- `src/styles/fonts.css`, `tokens.css`, `base.css`, `layout.css`, `components.css`, `animations.css`

## 3. Visual system

- Direction: **Midnight Chrome Atelier** — cinematic product gallery, precise hairline grid, chrome typography, one glacial-blue accent.
- Display: Sora. Text: Inter. Editorial italic: Cormorant Garamond.
- One 2px radius. No glass cards. No stock images. No invented claims, prices, reviews, or statistics.
- Signature moment: oversized bottle pair in a spotlight, with interactive 500 ML / 1 L switching throughout the collection.

## 4. Build order

1. Scaffold Vite/React and central design tokens.
2. Build product manifest and reusable UI primitives.
3. Build navbar, cinematic hero, and editorial introduction.
4. Build product collection with filtering, size switching, and accessible detail dialog.
5. Build customization rail, business categories, process, and editorial brand gallery.
6. Build final CTA, configurable inquiry form, and footer.
7. Add reduced-motion-safe CSS animations and scroll reveals.
8. Run production build, start dev server, inspect DOM/layout at desktop and mobile widths, test interactions, fix defects.
9. Run accessibility/overflow/console checks and final build verification.

## 5. Acceptance criteria

- Every discovered design represented with correct available sizes.
- No image stretched or cropped; all transparent artwork preserved.
- 500 ML / 1 L controls work on cards and in the detail view.
- Filters, mobile navigation, scroll spy, modal focus/escape, and form validation work.
- No horizontal overflow at 320, 390, 768, 1024, 1440 px.
- All interactive elements keyboard reachable; visible focus; reduced motion respected.
- No fabricated business facts or contact details.
- Production build succeeds.
