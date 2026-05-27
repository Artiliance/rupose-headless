# Rupose — Prospect Master Index
**Datum start:** 2026-05-27
**Status:** scan + analyse + strategie + visuele capture afgerond — wacht op v0.dev-go
**Werkdir:** `/Users/meceda/Projects/artiliance-os/rupose-headless/`

---

## 1. Quick context

**Klant (prospect):** Rupose — bedtextiel-webshop, Haren NL
- **Eigenaar-login:** `rubert@homanslapen.nl` (Homan = leverancier?)
- **Adres:** Rijksstraatweg 167, 9752 BE Haren
- **Niche:** premium specialist slaap-comfort
- **Doel demo:** complete headless rebuild met v0.dev als case #3 + landelijke SEO-positionering
- **NIET fixen:** huidige WP-site blijft draaien, alle bevindingen = pitch-materiaal

**Erik's constraints deze prospect:**
- Geen catalogus-creep uit concurrenten — alleen wat Rupose verkoopt
- Bestaande copy = tone-of-voice foundation
- Alleen bestaande images voor v0.dev (geen AI-gen)
- SE Ranking-spoor weg na elke sessie (audit + nieuw-aangemaakt-project verwijderen)
- → Zie [[feedback-demo-seranking-cleanup]] in memory

---

## 2. Strategische deliverable

→ **[`SEO_strategie_rupose.md`](SEO_strategie_rupose.md)** (13 KB, 9 secties)

Bevat: positionering vs. concurrentie, KW-strategie met must-win-12, voorgestelde URL-architectuur, content-plan 12 maanden, technische SEO uit audit, linkbuilding, KPI-projectie 0→36 maanden, v0.dev-briefing-volgorde.

**Verwijst naar onderstaande bron-bestanden in `_inventory/`.**

---

## 3. Data-architectuur (`_inventory/` directory)

Alle data lokaal — SE Ranking is leeg geveegd. Single source of truth.

### 3a. WP/WooCommerce-export (van rupose.nl WP REST + Woo REST)
| Bestand | Inhoud | Gebruikt door |
|---|---|---|
| `pages.json` | 20 pagina's volledig (title, content.rendered, slug, parent, template) | strategie sectie 4 (architectuur) + 5 (content) |
| `posts.json` | 4 blogposts (Tencel, Molton, Hoeslaken-maten, Hallo wereld) | strategie sectie 5 (content) + must-win-12 |
| `menus.json` + `menu_items.json` | 3 menus, 16 items | v0.dev navigatie-payload |
| `post_categories.json` | 1 blog-categorie | minimaal |
| `settings.json` | 35 site-instellingen | reference |
| `woo_products.json` | 17 producten — name, slug, permalink, type, short_description, description, categories, tags, attributes, images, meta_data, price | strategie sectie 2 (catalogus) + v0.dev PDP-payload |
| `woo_variations.json` | 239 varianten per product-ID — kleur+afmeting+prijs | v0.dev PDP variant-selector UX |
| `woo_categories.json` | 8 Woo-categorieën | strategie sectie 4 + v0.dev category-payload |
| `woo_attributes.json` | 11 global attributes (pa_kleur 100 terms, pa_afmeting 63, etc.) | strategie sectie 2 + v0.dev variation-pattern |
| `woo_attribute_pa_*.json` | Per-attribuut term-lijst (kleur/afmeting/materiaal/hardheid/etc.) | v0.dev attribute-selector taxonomies |
| `wp_products_with_acf.json` | wp/v2/product (12 items via REST) — bevat `acf:{}` LEEG | bewijs dat ACF niet via REST exposed is |
| `wp_product_72167_full.json` | Diepe inspect 1 product (Bella Donna Clima Kussensloop) | reference voor PDP-structuur |
| `woo_acf_extracted.json` | Parsed meta_data per product — alleen Rank Math velden, geen echte ACF | bewijst kleur-variatie = pure Woo |

### 3b. Afgeleide bestanden (analyse-output)
| Bestand | Inhoud | Bron | Gebruikt door |
|---|---|---|---|
| `content_corpus.json` | 6.408w van alle content + parsed text | pages + posts + woo_products | strategie sectie 5 + v0.dev tone-of-voice |
| `media.json` | 127 raw media-items (URL, mime, dimensions, alt, parent, slug) | `/wp/v2/media?context=edit` | media_classified |
| `media_classified.json` | 127 items in 8 buckets: product_primary 26, gallery 0, logo_brand 15, icon_svg 0, lifestyle_mood 3, page_header 0, fonts 3, other 80 | media.json + woo_products | v0.dev image-manifest |
| `pdp_html/00_home.html` | Rendered home HTML | curl | visual reference |
| `pdp_html/01_shop.html` | Rendered shop HTML | curl | visual reference |
| `pdp_html/02_over.html`, `03_contact.html` | Service pages HTML | curl | visual reference |
| `pdp_html/71697_*.html` | Bella Donna Jersey (100 variations) | curl | PDP UX-pattern voor v0.dev |
| `pdp_html/72042_*.html` | Plateau Molton Tencel (21 var) | curl | Erik flagde ACF-complexity hier |
| `pdp_html/72167_*.html` | Bella Donna Clima Kussensloop (2 var) | curl | simpel variant-voorbeeld |
| `pdp_html/72761_*.html` | Texeler Multikeus dekbed (3 var) | curl | eigen merk PDP |

### 3c. SE Ranking-bevindingen (project + audit zijn weer leeg in dashboard)
| Bestand | Inhoud | Bron | Gebruikt door |
|---|---|---|---|
| `seranking_audit_summary.md` | Audit 701298304 samenvatting: score 75/100, 116 errors, 202 warnings, 99 passed, 644 notices, DT 22, backlinks 15, 123 indexed | DATA_getAuditReport (deleted) | strategie sectie 6 (technical SEO) + pitch-deck |
| `seranking_competitor_baselines.json` | 8 concurrenten + Rupose baseline | DATA_getDomainOverviewWorldwide (project deleted) | strategie sectie 1 (markt-pyramide) |
| `keyword_research.json` | 10 KW-clusters, 80+ must-win KW, KW-volume + KD + intent per item | DATA_getRelatedKeywords ×10 seeds | strategie sectie 3 (KW-strategie) |

### 3d. Visuele capture (chrome-devtools) — **2026-05-27 21:22-21:28 voltooid**
| Bestand | Inhoud | Gebruikt door |
|---|---|---|
| [`screenshots/desktop/00_home.png`](screenshots/desktop/00_home.png) | Homepage 1440×900 fullpage | pitch + v0.dev hero-context |
| [`screenshots/desktop/01_winkel.png`](screenshots/desktop/01_winkel.png) | Shop-overview fullpage | v0.dev category-template |
| [`screenshots/desktop/02_pdp_bella-donna-jersey-hoeslaken.png`](screenshots/desktop/02_pdp_bella-donna-jersey-hoeslaken.png) | PDP met 100 variations (worst-case UX) | v0.dev variant-selector-pattern |
| [`screenshots/desktop/03_pdp_plateau-molton-tencel.png`](screenshots/desktop/03_pdp_plateau-molton-tencel.png) | PDP 21 vars (Erik's flag) | v0.dev PDP-baseline |
| [`screenshots/desktop/04_pdp_texeler-bovenste-beste-dekbed.png`](screenshots/desktop/04_pdp_texeler-bovenste-beste-dekbed.png) | Eigen-merk PDP | v0.dev brand-storytelling |
| [`screenshots/desktop/05_natuurlijk-slapen.png`](screenshots/desktop/05_natuurlijk-slapen.png) | USP 678w (sterkste content-page) | v0.dev pillar-template |
| [`screenshots/desktop/06_duurzaamheid.png`](screenshots/desktop/06_duurzaamheid.png) | USP 600w | v0.dev pillar-template |
| [`screenshots/desktop/07_faq.png`](screenshots/desktop/07_faq.png) | FAQ 461w | v0.dev FAQ-pattern |
| `screenshots/mobile/*.png` (8) | Idem mobile 390×844 | v0.dev mobile-first context |
| [`lighthouse/_lighthouse_summary.md`](lighthouse/_lighthouse_summary.md) | Scores + interpretatie | pitch + rebuild-benchmark |
| [`lighthouse/home.html`](lighthouse/home.html) + `.json` | Lighthouse home (A88/BP77/SEO100/AB50) | full-detail audit |
| [`lighthouse/pdp_bella-donna-jersey-hoeslaken.html`](lighthouse/pdp_bella-donna-jersey-hoeslaken.html) + `.json` | Lighthouse PDP (A93/BP73/SEO100/AB50) | full-detail audit |
| [`lighthouse/natuurlijk-slapen.html`](lighthouse/natuurlijk-slapen.html) + `.json` | Lighthouse USP (A91/BP77/SEO100/AB50) | full-detail audit |

### 3e. 3rd-party scripts
| Bestand | Inhoud | Gebruikt door |
|---|---|---|
| [`_inventory/rupose_external_scripts.json`](_inventory/rupose_external_scripts.json) | Cookie-consent (cookie-script.com account `4a6bbfdd9b7a8382bd90ec40800b553d`) | v0.dev consent-integratie |

---

## 4. Read-order voor volgende sessie

1. **Dit bestand** — overzicht + context
2. `MEMORY.md` Track 15 entry — sessie-resume
3. `session_track15_rupose.md` (in memory dir) — detail-status
4. `SEO_strategie_rupose.md` — strategische kaders
5. `lighthouse/_lighthouse_summary.md` — performance/A11y/SEO baseline + rebuild-targets
6. `_inventory/keyword_research.json` — KW-targets per template
7. `_inventory/content_corpus.json` — tekstbasis voor v0.dev
8. `_inventory/media_classified.json` — beschikbare images
9. `_inventory/rupose_external_scripts.json` — cookie-consent + 3rd-party
10. `screenshots/desktop/` + `screenshots/mobile/` — visuele referentie per page-type

---

## 5. Onbeantwoorde / open vragen voor Erik

1. **Waterdichte matrasbeschermer-gap:** 480/m vraag, KD 7 — moet Rupose dit toevoegen aan catalogus of bewust skippen? (sectie 2 strategie)
2. **Brand-pages prio:** alleen Bella Donna/Texeler/Hefel of ook Dommelin/Vorsa? (sectie 4)
3. **Pillar `/slaapadvies/`:** Rupose schrijft zelf, of externe content-schrijver? (sectie 5 Fase 1)
4. **v0.dev-template-volgorde:** zoals voorgesteld (home → category → PDP → brand → pillar → blog → service) of anders?
5. **ACF deep-dive:** als ACF-fields niet exposed via REST, willen we ze alsnog opvragen via WP admin export of WP-CLI? Of accepteren we dat current site = WC-attributes + Gutenberg-content?
6. **Klant-deal-status:** nu nog prospect of al go van Rupose-eigenaar?
7. **SE Ranking persistence:** als/wanneer klant signed, monitoring-project opnieuw aanmaken + permanent laten staan?

---

## 6. Veiligheid

- Credentials gedeeld in chat (wachten op Erik's rotatie): WP-admin pw, App-pw, Woo CK/CS
- Geen secrets in dit project-bestand bewaard
- `_inventory/` is lokaal — niet pushen naar Git zonder credentials-scrub (overigens: huidig werkdir is geen git-repo)

---

## 7. Cleanup-spoor

- ✅ 2026-05-27: SE Ranking audit `701298304` deleted
- ✅ 2026-05-27: SE Ranking project `12173180` deleted (verified via listProjects)
- ⏳ Pending: Erik roteert WP-admin/app-pw/Woo-keys (op zijn moment)
