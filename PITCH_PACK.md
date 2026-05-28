# Rupose — Pitch Pack
**Lunch:** 2026-05-28 13:00 met Rupose-eigenaar
**Door:** Artiliance

---

## 1. Wat we hebben gebouwd (in 1 nacht)

Een **volledig werkende headless e-commerce demo** van Rupose, gebouwd in v0.dev op Next.js, met Rupose's eigen content, foto's en merkidentiteit. Geen mockup. Een echte, klikbare site.

**Live demo:** zie laatste v0-link (chat: https://v0.app/chat/q7lZsexjC2S)

---

## 2. De cijfers

| Onderdeel | Aantal |
|---|---|
| Pagina-templates | 30+ |
| Herbruikbare UI-blocks | 28 |
| Echte Rupose-foto's verwerkt | 127 |
| Bella Donna kleuren in color-picker | 49 |
| Producten met varianten | 17 (239 varianten) |

---

## 3. Wat zit erin (rondleiding-volgorde voor de lunch)

### Homepage
- Hero met Rupose-fotografie + tagline
- Categorie-overzicht, merkenstrip, favorieten, slaapadvies-teasers
- Reviews-carousel + aggregate-rating (4.8/5)
- Warm brons/champagne kleurpalet (uit Rupose-logo)
- Subtiele animaties overal (Motion)

### Productpagina (showcase: Bella Donna Jersey hoeslaken)
- **Slimme color-picker**: 49 kleuren in een modal met zoekbalk + filter op kleurfamilie + echte kleur-thumbnails
- Variant-selector (kleur + maat), prijs, voorraad
- Productinfo-tabs (specificaties / onderhoud / verzending)
- Productspecifieke FAQ
- "Klanten kochten ook" + "Onlangs bekeken" carousels
- Toast bij toevoegen aan winkelwagen

### Shop-flow
- Winkel-overzicht + categoriepagina's met filters
- Winkelwagen + afrekenen + bedankt-pagina met order-tracker
- Slimme zoekbalk: autocomplete, recente + populaire zoekopdrachten, filters

### Account-omgeving
- Dashboard + bestellingen + order-detail met track-and-trace
- Adressen, profiel, voorkeuren, in-/uitloggen

### Content / SEO
- Slaapadvies pillar-page + blog-artikelen
- Merkpagina's (Bella Donna, Texeler, Hefel, Dommelin, Vorsa)
- Over-ons, natuurlijk slapen, duurzaamheid, slaapinnovaties

### Service & vertrouwen
- FAQ (algemeen + per categorie + per merk)
- Alle servicepagina's (retour, verzending, garantie, betaalmethodes, privacy, voorwaarden)
- Trust-badges, floating contact-knop, exit-intent aanbieding

---

## 4. De SEO-strategie (apart document: SEO_strategie_rupose.md)

**Kernconclusie:** Rupose staat nu op ~2 bezoekers/maand (greenfield). Realistisch 3-jaars doel: **Yumeko-niveau (~20.000 bezoekers/maand)** als premium niche-specialist.

**3 pijlers:**
1. Brand-driven SEO op merken zonder sterke NL-distributie (Bella Donna, Texeler, Hefel)
2. Slaapadvies-content cluster (de lege `/slaapadvies/` pagina wordt de motor)
3. Productpagina-uitbreiding op de 5 producten met dunne content

**12 must-win keywords** met lage concurrentie, exacte catalogus-match, samen ~5.000 zoekopdrachten/maand.

**Concurrentie-baseline:** Smulderstextiel (76k), Beterbed (146k) = plafond. Yumeko (20k) = haalbaar doel. Softcotton (38) = waarschuwing dat positionering zonder uitvoering niet werkt.

---

## 5. Technische SEO-audit (huidige rupose.nl)

Score 75/100. Sterke fundamenten (HTTPS, schema, mobile), maar:
- 108 4XX-fouten
- 75 pagina's zonder meta-description
- 109 afbeeldingen zonder alt-tekst
- 6 orphan pages

**Bij headless rebuild lost het meeste hiervan automatisch op.** Lighthouse op de huidige site: SEO 100, Accessibility 88-93, Best Practices 73-77, Agentic Browsing 50 (grote kans bij rebuild).

---

## 6. Het verhaal voor de eigenaar

1. **Dit is wat een moderne Rupose-site kan zijn** (toon de demo)
2. **Het draait op jullie eigen content** (geen verzonnen materiaal)
3. **De SEO-strategie maakt het landelijk vindbaar** (toon de cijfers)
4. **De huidige site heeft fixbare problemen** (toon de audit, maar headless lost ze op)
5. **Volgende stap:** afspraken over scope, planning, doorbouwen op deze basis

---

## 7. Bron-materiaal (in deze repo)

- `SEO_strategie_rupose.md` — volledige strategie (9 secties)
- `_INDEX.md` — overzicht alle analyse-bestanden
- `lighthouse/_lighthouse_summary.md` — performance-baseline
- `screenshots/` — visuele captures huidige site + v0-iteraties
- `_inventory/` — alle geëxtraheerde data (lokaal, niet in git)
- v0.dev chat: https://v0.app/chat/q7lZsexjC2S
- GitHub: https://github.com/Artiliance/rupose-headless
