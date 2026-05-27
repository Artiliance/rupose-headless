# v0.dev brief — Rupose homepage + design-system foundation

## Doel
Bouw de **homepage** en het **design-system** voor Rupose.nl headless rebuild. Dit is iteratie 1 — de homepage zet de tone-of-voice + visuele taal vast voor alle volgende templates (category/PDP/brand/pillar/blog/service).

## Brand
**Rupose** — premium webshop voor hoogwaardig bedtextiel, gevestigd in Haren (NL). Tagline: *"Shop slim, droom zacht"*.

Niche-positionering: **premium specialist in slaap-comfort**, geen brede bedtextiel-shop. Verkoopt premium niche-merken (Bella Donna/Formesse, Texeler, Hefel, Dommelin, Ecolife, Vorsa, Mohoton) die in Nederland geen sterke directe distributie hebben. Focus op hoofdkussens, topmatrassen, dekbedden, jersey-hoeslakens, moltons, kussenslopen.

## Tone & visuele taal
- **Natuurlijk, duurzaam, kennis-gedreven** — niet luxe-overdaad, niet budget-discounter
- **Rustig, ademend, tactiel** — denk linnen, lichte beige/cream tinten, zachte schaduwen
- **Yumeko-tier** premium-niche (referentie, NIET klonen): yumeko.nl
- **NIET**: druk, prijsknaller-energie, dekbedovertrek-collectie-vibe, generieke WooCommerce-shop
- **Wel**: ruimte, ademruimte tussen elementen, fotografie-driven, content-first

## Color palette (afleidend van logo + sleep-context — v0 mag finetunen)
- Primary: zachte sage / olijfgroen `oklch(0.65 0.05 130)` — natural/organic
- Secondary: warme zandbeige `oklch(0.92 0.02 80)` — comfort
- Background: off-white linen `oklch(0.98 0.005 80)`
- Text primary: deep brown-black `oklch(0.25 0.01 60)`
- Accent: copper/terracotta `oklch(0.65 0.10 40)` — voor CTAs

> Logo SVG: https://rupose.nl/wp-content/uploads/2024/01/Logo-opzet-2.svg — gebruik de logo-kleuren als anchor en bouw palette eromheen. Mag aanpassen als jij betere harmonie vindt.

## Typography
- Headings: serif (Cormorant Garamond, Fraunces, of vergelijkbaar) — premium, klassiek
- Body: sans-serif (Inter, of Plus Jakarta Sans) — clean, modern
- Voldoende line-height, voldoende white-space

## Tech stack (verplicht)
- Next.js 16 App Router (RSC, geen pages-router)
- Tailwind v4 (`@theme inline` met CSS custom properties)
- shadcn/ui (Button, Card, Sheet, Dialog, Accordion, Tabs uit shadcn)
- TypeScript strict
- `next/image` (mag unoptimized = true)
- Geen client-state-libraries (geen Zustand/Redux), alleen native useState voor UI-state

## Homepage structure

### 1. Header (sitewide)
- Top-bar (optioneel, klein): "Gratis verzending vanaf €75" + tel/mail
- Main nav: Logo links, primary nav-items (Winkel, Slaapadvies, Merken, Over, Contact), zoek-icon + winkelwagen-icon rechts
- Mobile: hamburger met sheet/drawer
- Sticky on scroll met subtiele backdrop-blur

### 2. Hero (above the fold)
- **Niet**: groot product-banner met "shop nu!"
- **Wel**: ademende lifestyle-foto (een opgemaakt bed of detail van textiel) + rustige headline
- Headline-voorstel: *"Bedtextiel waarmee je slaap verbetert"* — H1
- Sub: *"Premium Duitse kwaliteit. Eerlijk advies. Levenslang geselecteerd."* of variant
- Twee CTAs: primary "Ontdek de collectie" + ghost "Lees slaapadvies"
- Subtiele scroll-indicator
- Beschikbare lifestyle-foto's: zie context.key_images.lifestyle

### 3. Trust-bar
- 4 USP-icoontjes met korte tekst: *Duitse premiumkwaliteit* / *Eerlijk slaapadvies* / *Gratis verzending €75+* / *Veilig betalen*

### 4. Categorie-overview ("Onze collectie")
- Grid van 6-8 categorieën als kaarten met representatieve foto's en korte intro
- Categorieën: Hoeslakens, Hoofdkussens, Topmatrassen, Dekbedden, Kussenslopen, Molton & beschermers, Topdekmatrassen
- Bij hover: subtiele scale + arrow

### 5. "Onze merken" — brand-strip
- Horizontale strip met logo's van de 5 brands waarvoor Rupose officieel verkoopt
- Brand-logos (gebruik echte logo's uit `context.key_images.brand_logos` of placeholder-stippen):
  - Bella Donna / Formesse
  - Texeler (eigen merk — extra-prominent)
  - Hefel
  - Dommelin
  - Ecolife
- Links naar `/merken/[slug]/`

### 6. Featured products (3-4 stuks)
- *"Onze favorieten"* — selectie van 3-4 producten met must-win KW-match:
  - Bella Donna Jersey hoeslaken
  - Donzen Dekbed Vorsa
  - Texeler Bovenste Beste hoofdkussen
  - Plateau Molton Tencel
- Product-card: foto, naam, prijs vanaf, "Bekijk product"-link

### 7. Slaapadvies-teaser (pillar-page hook)
- Sectie met 3 blog/advice-cards:
  - "Wat is een molton?" (link `/slaapadvies/wat-is-een-molton/`)
  - "Jersey vs katoen hoeslaken" (link `/slaapadvies/jersey-vs-katoen/`)
  - "Welk dekbed past bij jouw seizoen?" (link `/slaapadvies/welk-dekbed-kies-je/`)
- CTA naar pillar-page `/slaapadvies/`

### 8. Brand-narrative ("Waarom Rupose")
- Tekst-sectie met USP-content uit `context.usp_content.natuurlijk-slapen` en `duurzaamheid-bij-rupose` (gebruik passages, niet alles)
- Kleine foto naast tekst (lifestyle)
- CTA "Lees over ons" → `/over-ons/`

### 9. Newsletter-CTA
- Subtiel banner: "Slaapadvies in je inbox. Geen spam, alleen kennis."
- E-mail input + submit (mag voor demo non-functional zijn)

### 10. Footer
- 4-koloms: Winkel-links / Slaapadvies / Klantenservice / Contact-info
- Onderaan: copyright + privacy + algemene voorwaarden
- Klein: cookie-script-vermelding (consent-banner zelf wordt apart geladen)

## Cookie-consent (al ingericht)
Cookie-script.com account `4a6bbfdd9b7a8382bd90ec40800b553d`. Voor de demo: voeg een `<Script>` in `app/layout.tsx` toe die `https://cdn.cookie-script.com/s/4a6bbfdd9b7a8382bd90ec40800b553d.js` laadt met `strategy="afterInteractive"`.

## Variabelen + sample data
Gebruik onderstaande JSON als mock-data inline (geen API/DB calls voor deze iteratie):

```json
__CONTEXT_JSON_PLACEHOLDER__
```

## Output-verwachting
- Volledige Next.js 16 App Router project structuur (`app/`, `components/`, `lib/`)
- `app/layout.tsx` met sitewide header/footer + cookie-script
- `app/page.tsx` = homepage met alle 10 secties hierboven
- `app/globals.css` met Tailwind v4 `@theme inline` design-tokens
- Shared componenten in `components/`: SiteHeader, SiteFooter, ProductCard, CategoryCard, AdviceCard, BrandStrip, NewsletterCta, TrustBar, etc.
- Bestanden moeten productie-ready zijn (geen TODO-comments, geen mock-libraries die niet bestaan)
- Sample-images via `next/image` met `unoptimized` waar nodig
- Geen broken links — alle hrefs intern moeten kloppen (`/winkel/`, `/winkel/hoeslakens/`, `/merken/bella-donna/`, `/slaapadvies/`, etc.) — even als de pages later komen

## Wat NIET doen
- Geen "we are a sleep company" generieke marketing-headlines
- Geen hero-banner met "50% korting"-knaller
- Geen lange productcatalogus op homepage (max 4 featured)
- Geen Cookie banner zelf bouwen — cookie-script.com doet dat
- Geen footer met 50 columns vol shop-links — clean, max 4 columns
- Geen meertaligheid — NL-only

## Inspiratie-richting (niet 1-op-1 kopiëren)
- yumeko.nl — eco-premium tone
- bedrock.com (USA) — kleur-restraint
- toa.st — fotografie-driven product-storytelling
- coyuchi.com — natural/sustainable tone

## Resultaat
Een homepage die voelt als een **Duitse Manufaktur die ook online verkoopt**, niet als een WooCommerce-templated shop. Rustig, kundig, premium.
