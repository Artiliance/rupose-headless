# Lighthouse Audit — Rupose
**Datum:** 2026-05-27 21:27-21:28
**Device:** mobile (Google's primary index)
**Mode:** navigation (cold-load + audit)
**Tool:** chrome-devtools-mcp lighthouse_audit

## Scores per pagina
| Page | A11y | Best Practices | SEO | Agentic Browsing | Passed | Failed |
|---|---|---|---|---|---|---|
| `/` (home) | **88** | 77 | **100** | 50 | 54 | 7 |
| `/product/bella-donna-jersey-hoeslaken/` | **93** | 73 | **100** | 50 | 59 | 7 |
| `/natuurlijk-slapen/` | **91** | 77 | **100** | 50 | 53 | 6 |

## Interpretatie

### SEO 100/100 — uniform
Meta-tags, structured-data, mobile-friendly en crawlability zijn op deze pages volledig op orde. Dit verklaart waarom de site überhaupt nog 46 KW rankt ondanks de greenfield-positie — fundament is goed.

> Verschil met SE Ranking score 75: SE Ranking crawled 245 pages en weegt 108 4XX-fouten + 75 missing descriptions zwaar mee. Lighthouse is single-page snapshot van een goed-ingestelde pagina.

### Accessibility 88-93 — solide
PDPs scoren hoogst (93). Home en USP-pages 88-91 — kleine fixes mogelijk (kleurcontrast, aria-labels op interactive elements).

### Best Practices 73-77 — verbeterruimte
Typisch oorzaken in WP-stack:
- Console errors van 3rd-party scripts (cookie-script, GTM)
- Niet alles op HTTPS (mixed-content op embedded resources)
- Deprecated API's via plugins

Bij headless rebuild lost dit grotendeels op.

### Agentic Browsing 50 — grote kans bij rebuild
Dit nieuwe Lighthouse-categorie meet hoe goed AI-agents (zoals Claude/Perplexity-browse-mode) de pagina kunnen begrijpen + uitvoeren. 50 = magere structured-data + onduidelijke UI-semantics.

**v0.dev opportunity:** met goede ARIA-roles, JSON-LD per content-blok, semantic HTML5 elementen + duidelijke action-targets → score 90+ realistisch.

## Reports
- [`home.html`](home.html) / [`home.json`](home.json) — homepage
- [`pdp_bella-donna-jersey-hoeslaken.html`](pdp_bella-donna-jersey-hoeslaken.html) — PDP met 100 variations
- [`natuurlijk-slapen.html`](natuurlijk-slapen.html) — sterkste USP-content-page

## Voor pitch + rebuild-benchmark
Rupose **na** headless rebuild target (v0.dev op Next.js + Vercel):
| Metric | Huidig | Target |
|---|---|---|
| A11y | 88-93 | 95+ |
| Best Practices | 73-77 | 95+ |
| SEO | 100 | 100 |
| Agentic Browsing | 50 | 85+ |
| Performance | n/m | 90+ (LCP <2.5s, CLS <0.1) |
