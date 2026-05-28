# Rupose — headless switch (demo → WP/Woo/ACF)

Status: **demo draait op statische data** (`lib/*.ts`). Deze repo is voorbereid om in één gerichte stap te switchen naar de live WooCommerce/WordPress-data. Volgt de Artiliance WP-Headless Migratie-SOP (driedelig [B]/[C]/[S], 11 fasen).

**Laag-keuze Rupose:** `[B]` boilerplate + `[C]` commerce (WooCommerce). NL-only. Region `fra1`. Image-opt `unoptimized`.

---

## Wat al klaar staat (scaffolding)

| Onderdeel | Bestand | Status |
|---|---|---|
| WPGraphQL-client (lazy-eval ENV, fail-fast, POST-build/GET-runtime) | `lib/wp/client.ts` | ✅ |
| Queries (light-listing vs heavy-detail) | `lib/wp/queries.ts` | ✅ |
| Mappers Woo/ACF → onze TS-types | `lib/wp/mappers.ts` | ✅ |
| Env-contract | `.env.example` | ✅ |
| Cron-warmup route (dormant) | `app/api/wp-keepalive/route.ts` | ✅ |
| Region fra1 | `vercel.json` | ✅ |
| Image-hosts (cloudwaysapps) | `next.config.mjs` | ✅ |
| Demo noindex + sitemap + robots | `app/{robots,sitemap}.ts`, `layout.tsx` | ✅ |
| JSON-LD (Product/Offer/Rating/Breadcrumb/FAQ/Article/Org) | `components/seo/json-ld.tsx` | ✅ |
| Canonical per route | `generateMetadata` dynamische routes | ✅ |

---

## WP-side benodigdheden (Fase 2 + 3)

Plugins: `wp-graphql`, `wp-graphql-woocommerce`, `wpgraphql-acf`, `advanced-custom-fields-pro`, `wpgraphql-smart-cache`, `seo-by-rank-math`, `post-smtp`. Mu-plugins: artiliance-headless baseline (zie SOP Fase 2).

**ACF-velden die de mappers verwachten** (`lib/wp/mappers.ts` ↔ `queries.ts`):
- **product_brand** taxonomie + term-velden: `logo` (image), `videoUrl` (text), `tagline`, `intro`, `story`, `usps[]{title,body}`
- **product_cat** term-veld: `seoText` (rich text — SEO-blok boven FAQ)
- **product** ACF: `specs[]{label,value}`, `care[]`, `shipping`, `returnPolicy`; EAN via Woo-native `globalUniqueId` (Woo 9.2+) of ACF

Merk-toewijzing is al gevalideerd tegen de echte Woo `brands`-taxonomie (zie commit `6e1e0ff`): Formesse, Texeler, Hefel, Ecolife, Mahoton, Private label (=Rupose huismerk), Dommelin.

---

## De switch (1 gerichte stap)

1. **WP-side**: plugins + mu-plugins installeren, ACF-velden aanmaken, content gevuld (Fase 2/3/7 SOP).
2. **Env op Vercel** (zie `.env.example`): `WP_GRAPHQL_URL`, `WOOCOMMERCE_CONSUMER_KEY/SECRET`, `ENABLE_COMMERCE=1`, `CRON_SECRET` (`openssl rand -hex 32`).
3. **Data-laag omzetten** — vervang de statische exports door async `lib/wp/`-fetchers, met behoud van dezelfde return-types. Per fetcher de **6 RSC-patterns** toepassen:
   - `React.cache()` rond elke `getXBySlug`
   - light-listing query (`QUERY_*_LISTING`) vs heavy-detail (`QUERY_*_DETAIL`)
   - `getRelatedX(excludeSlug, limit)` i.p.v. `getAllX().filter()`
   - wpFetch method-detection (al in `client.ts`)
   - cron-block toevoegen aan `vercel.json` (`*/15 * * * *` → `/api/wp-keepalive`)
   - `generateStaticParams` (staat al op alle dynamische routes)
   - Consumers worden `await getProducts()` etc. (pagina's omzetten van sync-array naar async-call)
4. **SEO live zetten**: `app/robots.ts` → `allow: '/'`, `layout.tsx` robots → `index/follow:true`, `NEXT_PUBLIC_SITE_URL=https://rupose.nl`.
5. **Cutover**: DNS volgens SOP Fase 10 (CF proxy off, A/CNAME → Vercel, MX/SPF behouden), Rich Results Test op 5 page-types, 301-redirects voor bestaande rankende URLs.

---

## Referentie
- SOP: `feedback_wp_headless_migration_sop` (memory) — 11 fasen B/C/S
- RSC-perf: `feedback_nextjs_wp_rsc_perf_patterns` (memory) — 6 patterns
- Demo-URL: https://demo-rupose.artiliance.nl (noindex)
