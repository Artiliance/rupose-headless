'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ProductCard } from '@/components/product-card'
import { AdviceTeaser } from '@/components/blocks/advice-teaser'
import {
  searchProducts,
  sortResults,
  getCategories,
  getBrands,
  getPriceRange,
  relatedSearches,
  type SearchFilters,
  type SortKey,
} from '@/lib/search'
import { articles } from '@/lib/articles'
import type { SearchResult } from '@/lib/search'
import { cn } from '@/lib/utils'

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'relevance', label: 'Relevantie' },
  { value: 'price-asc', label: 'Prijs: laag naar hoog' },
  { value: 'price-desc', label: 'Prijs: hoog naar laag' },
  { value: 'newest', label: 'Nieuwste eerst' },
]

const priceRange = getPriceRange()

function FilterPanel({
  categories,
  brands,
  filters,
  onChange,
  onReset,
}: {
  categories: { slug: string; label: string }[]
  brands: string[]
  filters: SearchFilters & { minPrice: number; maxPrice: number }
  onChange: (f: SearchFilters & { minPrice: number; maxPrice: number }) => void
  onReset: () => void
}) {
  function toggleCategory(slug: string) {
    const current = filters.categories ?? []
    const next = current.includes(slug) ? current.filter((c) => c !== slug) : [...current, slug]
    onChange({ ...filters, categories: next })
  }

  function toggleBrand(brand: string) {
    const current = filters.brands ?? []
    const next = current.includes(brand) ? current.filter((b) => b !== brand) : [...current, brand]
    onChange({ ...filters, brands: next })
  }

  const hasActive =
    (filters.categories?.length ?? 0) > 0 ||
    (filters.brands?.length ?? 0) > 0 ||
    filters.minPrice > priceRange.min ||
    filters.maxPrice < priceRange.max

  return (
    <aside className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-xl font-light text-foreground">Filters</h2>
        {hasActive && (
          <button
            onClick={onReset}
            className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline"
          >
            Wissen
          </button>
        )}
      </div>

      {/* Categorie */}
      <div>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-4">Categorie</p>
        <ul className="flex flex-col gap-3">
          {categories.map((cat) => {
            const checked = filters.categories?.includes(cat.slug) ?? false
            return (
              <li key={cat.slug}>
                <label className="flex items-center gap-3 cursor-pointer group min-h-[36px]">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleCategory(cat.slug)}
                    className="w-4 h-4 rounded border-border accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  <span className={cn('font-sans text-sm transition-colors', checked ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground')}>
                    {cat.label}
                  </span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Prijs */}
      <div>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-4">Prijs</p>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-sans text-sm text-foreground">&euro;{filters.minPrice}</span>
          <span className="font-sans text-sm text-muted-foreground">tot</span>
          <span className="font-sans text-sm text-foreground">&euro;{filters.maxPrice}</span>
        </div>
        <input
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          value={filters.maxPrice}
          onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full accent-primary"
          aria-label="Maximale prijs"
        />
      </div>

      {/* Merk */}
      <div>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-4">Merk</p>
        <ul className="flex flex-col gap-3">
          {brands.map((brand) => {
            const checked = filters.brands?.includes(brand) ?? false
            return (
              <li key={brand}>
                <label className="flex items-center gap-3 cursor-pointer group min-h-[36px]">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleBrand(brand)}
                    className="w-4 h-4 rounded border-border accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  <span className={cn('font-sans text-sm transition-colors', checked ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground')}>
                    {brand}
                  </span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default function ZoekenPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const inputRef = useRef<HTMLInputElement>(null)

  const initialQuery = searchParams.get('q') ?? ''
  const [inputValue, setInputValue] = useState(initialQuery)
  const [sort, setSort] = useState<SortKey>('relevance')
  const [filters, setFilters] = useState<SearchFilters & { minPrice: number; maxPrice: number }>({
    categories: [],
    brands: [],
    minPrice: priceRange.min,
    maxPrice: priceRange.max,
  })

  const categories = getCategories()
  const brands = getBrands()

  // Sync input when URL changes
  useEffect(() => {
    setInputValue(searchParams.get('q') ?? '')
  }, [searchParams])

  const handleSearch = useCallback(() => {
    const q = inputValue.trim()
    if (!q) return
    router.push(`/zoeken/?q=${encodeURIComponent(q)}`)
  }, [inputValue, router])

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSearch()
  }

  function resetFilters() {
    setFilters({ categories: [], brands: [], minPrice: priceRange.min, maxPrice: priceRange.max })
  }

  const query = searchParams.get('q') ?? ''
  const rawResults = searchProducts(query, filters)
  const results = sortResults(rawResults, sort)

  const activeTags: { label: string; onRemove: () => void }[] = [
    ...(filters.categories ?? []).map((slug) => ({
      label: categories.find((c) => c.slug === slug)?.label ?? slug,
      onRemove: () => setFilters((f) => ({ ...f, categories: f.categories?.filter((c) => c !== slug) })),
    })),
    ...(filters.brands ?? []).map((brand) => ({
      label: brand,
      onRemove: () => setFilters((f) => ({ ...f, brands: f.brands?.filter((b) => b !== brand) })),
    })),
    ...(filters.maxPrice < priceRange.max
      ? [{
          label: `Tot €${filters.maxPrice}`,
          onRemove: () => setFilters((f) => ({ ...f, maxPrice: priceRange.max })),
        }]
      : []),
  ]

  const adviceArticles = articles.slice(0, 3).map((a) => ({
    title: a.title,
    href: `/slaapadvies/${a.slug}/`,
    excerpt: a.excerpt,
    readTime: a.readTime,
    tag: a.tag,
    image: a.image,
  }))

  return (
    <main className="pt-24 md:pt-32 min-h-screen bg-background">
      {/* Search input bar */}
      <div className="bg-secondary/40 border-b border-border py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 bg-background border border-border rounded-sm px-4 h-14 focus-within:border-foreground/40 transition-colors">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Zoek op product, merk of categorie..."
                className="flex-1 bg-transparent font-sans text-base text-foreground placeholder:text-muted-foreground focus:outline-none h-full"
                aria-label="Zoekterm"
                autoComplete="off"
              />
              {inputValue && (
                <button
                  onClick={() => { setInputValue(''); router.push('/zoeken/') }}
                  className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-sm transition-colors"
                  aria-label="Zoekopdracht wissen"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
              <Button
                onClick={handleSearch}
                className="hidden sm:flex h-9 px-5 font-sans text-sm rounded-sm"
                aria-label="Zoeken"
              >
                Zoeken
              </Button>
            </div>

            {/* Active filter tags */}
            {activeTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4" role="list" aria-label="Actieve filters">
                {activeTags.map((tag) => (
                  <span
                    key={tag.label}
                    role="listitem"
                    className="inline-flex items-center gap-1.5 font-sans text-sm bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full"
                  >
                    {tag.label}
                    <button
                      onClick={tag.onRemove}
                      aria-label={`Filter ${tag.label} verwijderen`}
                      className="hover:text-primary/70 transition-colors"
                    >
                      <X className="w-3 h-3" aria-hidden="true" />
                    </button>
                  </span>
                ))}
                <button
                  onClick={resetFilters}
                  className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline min-h-[36px]"
                >
                  Alle filters wissen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="flex gap-12">
          {/* Sidebar (desktop) */}
          <div className="hidden lg:block w-60 flex-shrink-0">
            <FilterPanel
              categories={categories}
              brands={brands}
              filters={filters}
              onChange={setFilters}
              onReset={resetFilters}
            />
          </div>

          {/* Results */}
          <div className="flex-1 min-w-0">
            {/* Results header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                {/* Mobile filter button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="lg:hidden flex items-center gap-2 rounded-sm"
                    >
                      <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto p-6">
                    <FilterPanel
                      categories={categories}
                      brands={brands}
                      filters={filters}
                      onChange={setFilters}
                      onReset={resetFilters}
                    />
                  </SheetContent>
                </Sheet>

                <p className="font-sans text-sm text-muted-foreground">
                  {query ? (
                    <>
                      <span className="text-foreground font-medium">{results.length}</span>{' '}
                      {results.length === 1 ? 'resultaat' : 'resultaten'} voor &ldquo;{query}&rdquo;
                    </>
                  ) : (
                    <>
                      <span className="text-foreground font-medium">{results.length}</span> producten
                    </>
                  )}
                </p>
              </div>

              {/* Sort */}
              <div className="relative flex items-center gap-2">
                <label htmlFor="sort-select" className="font-sans text-sm text-muted-foreground hidden sm:block">
                  Sorteren:
                </label>
                <div className="relative">
                  <select
                    id="sort-select"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                    className="font-sans text-sm text-foreground bg-background border border-border rounded-sm pl-3 pr-8 h-9 appearance-none focus:outline-none focus:border-foreground/40 cursor-pointer"
                    aria-label="Sorteervolgorde"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Grid or empty state */}
            {results.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {results.map((product) => {
                  const price = product.sizes.length
                    ? String(Math.min(...product.sizes.map((s) => s.price)))
                    : ''
                  return (
                    <ProductCard
                      key={product.slug}
                      name={product.name}
                      slug={product.slug}
                      price={price}
                      image={product.image}
                      shortDesc={product.shortDesc}
                      category={product.categorySlug}
                    />
                  )
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
                <Search className="w-12 h-12 text-muted-foreground/40" aria-hidden="true" />
                <h2 className="font-serif text-2xl font-light text-foreground">
                  Geen resultaten gevonden
                </h2>
                <p className="font-sans text-base text-muted-foreground max-w-sm">
                  {query
                    ? `We konden niets vinden voor "${query}". Controleer je spelling of probeer een andere zoekopdracht.`
                    : 'Voer een zoekopdracht in om producten te vinden.'}
                </p>
                <Button asChild variant="outline" className="mt-4 rounded-sm">
                  <Link href="/winkel/">Bekijk alle producten</Link>
                </Button>
              </div>
            )}

            {/* Related searches */}
            {results.length > 0 && (
              <div className="mt-16 pt-10 border-t border-border">
                <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-5">
                  Klanten zoeken ook
                </p>
                <div className="flex flex-wrap gap-2">
                  {relatedSearches.map((term) => (
                    <Link
                      key={term}
                      href={`/zoeken/?q=${encodeURIComponent(term)}`}
                      className="font-sans text-sm text-foreground/70 hover:text-foreground bg-secondary hover:bg-secondary/70 transition-colors px-4 py-2 rounded-full border border-border hover:border-foreground/30 min-h-[36px] flex items-center"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Advice teaser */}
      <AdviceTeaser
        eyebrow="Slaapadvies"
        title="Hulp nodig bij je keuze?"
        articles={adviceArticles}
        cta={{ label: 'Alle slaaptips', href: '/slaapadvies/' }}
        bg="muted"
      />
    </main>
  )
}
