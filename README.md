# NEXRA DIGITAL

**Turning Vision Into Digital Reality**

A premium, production-ready marketing website for NEXRA DIGITAL — a full-service creative agency
covering photography, videography, branding, web & software development, and digital marketing.

Built with Next.js (App Router), React, and hand-written CSS (no Tailwind), and structured so a
Django REST Framework backend can be dropped in later with minimal changes.

---

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Pure CSS** — CSS Modules per component/page + a small global design-token system (no Tailwind)
- **JavaScript (ES6+)**
- Backend-ready service layer for a **Python Django REST API**

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the project
```

## Project Structure

```
/app
  layout.js            Root layout: fonts, metadata, JSON-LD, Navbar/Footer/WhatsApp
  globals.css          Global resets, typography, buttons, utility classes
  page.js              Home page
  services/page.js      Services page
  portfolio/page.js     Portfolio page (client-side filter + modal)
  about/page.js         About page
  contact/page.js       Contact page (form wired to Django-ready service)
  not-found.js          Custom 404

/components            Reusable UI: Navbar, Footer, ServiceCard, TestimonialCard,
                        PortfolioGrid, ContactForm, Icon, Reveal, Counter, WhatsAppButton

/lib
  data.js               All static site copy/content (services, portfolio, testimonials, etc.)
  api.js                Shared fetch() wrapper for the future Django REST API

/services/api           Example Django-ready API service functions
  contactService.js      POST /api/contact/
  servicesService.js     GET  /api/services/ (falls back to static data)

/styles
  variables.css         Design tokens: colors, type scale, spacing, radii, shadows
  animations.css        Keyframes + reveal-on-scroll utility classes

/public
  /images               Brand illustrations, logo lockups, portfolio backgrounds (SVG)
  /icons                24 line icons used across the site (SVG, theme with currentColor)
  /videos               Reserved for future video assets
  favicon.svg, robots.txt, sitemap.xml

/scripts                One-off Python generators used to produce the original SVG
                        icon/illustration assets in /public (kept for reference/regeneration)
```

## Design System

- **Colors:** Royal Blue `#0B3D91`, Gold `#D4AF37`, White `#FFFFFF`, Dark Navy `#071B35`
  (see `styles/variables.css` for the full token set, including derived tones and gradients).
- **Type:** Montserrat (display/headings) + Poppins (body). The project references these by name;
  install them via `next/font/google` or self-hosted `@font-face` files for production use — see
  "Fonts" below.
- **Signature element — the Gold Seam:** a diagonal gold thread that runs through the hero,
  section dividers, and the logo mark, representing an idea being drawn out of the dark navy and
  turned into a finished, gleaming result ("Turning Vision Into Digital Reality").

## Fonts

The stylesheet references `Montserrat` and `Poppins` by name. For production, either:

1. Add them with `next/font/google` in `app/layout.js` (recommended, zero extra files), or
2. Drop licensed `.woff2` files into `/public/fonts` and point the `@font-face` blocks in
   `app/globals.css` at them.

## Original Assets

Every icon and illustration in `/public/images` and `/public/icons` was generated specifically for
this project as SVG (no stock photography or placeholder images), themed to the brand palette.
Portfolio thumbnails are original abstract compositions representing each project category
(photography, website design, branding, social, dashboard, and mobile UI).

The four logo variants (`logo-light.svg`, `logo-dark.svg`, `logo-transparent.svg`,
`logo-mark.svg`) and `favicon.svg` live in `/public/images` and `/public`. SVG favicons are
supported by all modern browsers; if you need PNG/ICO fallbacks for legacy support, convert
`favicon.svg` with any SVG-to-PNG/ICO tool (e.g. `rsvg-convert` or an online favicon generator).

## Connecting the Django REST API

The site runs fully today on static content and a mocked contact form (no backend required).
To connect a real Django backend:

1. Set `NEXT_PUBLIC_API_BASE_URL` in `.env.local` (see `.env.example`) to your Django API root.
2. Implement matching DRF endpoints, e.g.:
   ```python
   # urls.py
   path('api/contact/', ContactRequestViewSet.as_view({'post': 'create'})),
   ```
3. `services/api/contactService.js` and `services/api/servicesService.js` will automatically
   switch from mock/static data to real `fetch()` calls once the env var is set.

## SEO

- Per-page `metadata` exports (title, description, Open Graph, Twitter cards) in every route.
- JSON-LD `ProfessionalService` structured data in `app/layout.js`.
- `public/robots.txt` and `public/sitemap.xml` included; update the sitemap as routes change.

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `footer`), skip-to-content link, visible focus rings.
- All interactive icons include `aria-label`s; decorative icons are `aria-hidden`.
- Animations respect `prefers-reduced-motion`.

## Deployment

This is a standard Next.js app and deploys as-is to Vercel, Netlify, or any Node host:

```bash
npm run build
npm run start
```
