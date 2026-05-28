import { products, type Product } from './products'
import { brandDetails } from './brands'

export interface BrandSearchResult {
  slug: string
  name: string
  logo: string
  tagline: string
}

/** Matches brand pages by name when a brand term is typed in the search bar. */
export function searchBrands(query: string): BrandSearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return brandDetails
    .filter((b) => b.name.toLowerCase().includes(q) || b.fullName.toLowerCase().includes(q))
    .map((b) => ({ slug: b.slug, name: b.name, logo: b.logo, tagline: b.tagline }))
}

export interface SearchFilters {
  categories?: string[]
  brands?: string[]
  minPrice?: number
  maxPrice?: number
}

export interface SearchResult extends Product {
  score: number
}

/** Returns unique category slugs from the products list. */
export function getCategories(): { slug: string; label: string }[] {
  const map = new Map<string, string>()
  for (const p of products) map.set(p.categorySlug, p.categoryLabel)
  return Array.from(map.entries()).map(([slug, label]) => ({ slug, label }))
}

/** Returns unique brand names from the products list. */
export function getBrands(): string[] {
  return Array.from(new Set(products.map((p) => p.brand))).sort()
}

/** Returns min/max prices across all product sizes. */
export function getPriceRange(): { min: number; max: number } {
  let min = Infinity
  let max = 0
  for (const p of products) {
    for (const s of p.sizes) {
      if (s.price < min) min = s.price
      if (s.price > max) max = s.price
    }
  }
  return { min: Math.floor(min), max: Math.ceil(max) }
}

function minPrice(p: Product): number {
  if (!p.sizes.length) return 0
  return Math.min(...p.sizes.map((s) => s.price))
}

/**
 * Full-text search over products, with optional filters.
 * Scoring: name match = 4, brand = 3, category = 2, shortDesc = 1.
 */
export function searchProducts(query: string, filters: SearchFilters = {}): SearchResult[] {
  const q = query.trim().toLowerCase()

  let results: SearchResult[] = products.map((p) => {
    let score = 0
    if (q) {
      if (p.name.toLowerCase().includes(q)) score += 4
      if (p.brand.toLowerCase().includes(q)) score += 3
      if (p.categoryLabel.toLowerCase().includes(q)) score += 2
      if (p.shortDesc.toLowerCase().includes(q)) score += 1
    } else {
      score = 1 // no query = show all
    }
    return { ...p, score }
  })

  // filter: must have a score > 0 when query is set
  if (q) results = results.filter((r) => r.score > 0)

  // filter: categories
  if (filters.categories?.length) {
    results = results.filter((r) => filters.categories!.includes(r.categorySlug))
  }

  // filter: brands
  if (filters.brands?.length) {
    results = results.filter((r) => filters.brands!.includes(r.brand))
  }

  // filter: price range
  if (filters.minPrice != null || filters.maxPrice != null) {
    results = results.filter((r) => {
      const price = minPrice(r)
      if (filters.minPrice != null && price < filters.minPrice) return false
      if (filters.maxPrice != null && price > filters.maxPrice) return false
      return true
    })
  }

  return results
}

export type SortKey = 'relevance' | 'price-asc' | 'price-desc' | 'newest'

export function sortResults(results: SearchResult[], sort: SortKey): SearchResult[] {
  const copy = [...results]
  switch (sort) {
    case 'price-asc':
      return copy.sort((a, b) => minPrice(a) - minPrice(b))
    case 'price-desc':
      return copy.sort((a, b) => minPrice(b) - minPrice(a))
    case 'newest':
      // treat products later in the array as "newer"
      return copy.reverse()
    case 'relevance':
    default:
      return copy.sort((a, b) => b.score - a.score)
  }
}

export const popularSearches = [
  'Bella Donna hoeslaken',
  'Donzen dekbed',
  'Topmatras',
  'Hoofdkussen',
  'Molton',
]

export const relatedSearches = [
  'Jersey hoeslaken wit',
  'Warme donsdekbed winter',
  'Katoenen hoeslaken',
  'Kussen 60x70',
  'Bamboe beddengoed',
  'Matrastopper',
]
