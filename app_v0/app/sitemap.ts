import type { MetadataRoute } from 'next'
import { products } from '@/lib/products'
import { categories } from '@/lib/blocks-data'
import { brandDetails } from '@/lib/brands'
import { articles } from '@/lib/articles'

const BASE = 'https://rupose.nl'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPaths = [
    '',
    '/winkel',
    '/merken',
    '/slaapadvies',
    '/over-ons',
    '/contact',
    '/duurzaamheid',
    '/natuurlijk-slapen',
    '/slaapinnovaties',
    '/faq',
    '/klantenservice',
    '/levertijd-en-verzendkosten',
    '/retourbeleid',
    '/garantie-en-klachten',
    '/betaalmethodes',
  ]

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${BASE}${p}/`,
    lastModified: now,
  }))

  for (const c of categories) {
    entries.push({ url: `${BASE}/winkel/${c.slug}/`, lastModified: now })
  }
  for (const p of products) {
    entries.push({ url: `${BASE}/winkel/${p.categorySlug}/${p.slug}/`, lastModified: now })
  }
  for (const b of brandDetails) {
    entries.push({ url: `${BASE}/merken/${b.slug}/`, lastModified: now })
  }
  for (const a of articles) {
    entries.push({ url: `${BASE}/slaapadvies/${a.slug}/`, lastModified: now })
  }

  return entries
}
