'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { AdviceCard } from '@/components/advice-card'
import { articles, ARTICLE_CATEGORIES } from '@/lib/articles'
import type { ArticleCategory } from '@/lib/articles'
import { cn } from '@/lib/utils'

type CategoryFilter = 'Alle' | ArticleCategory

const ALL_CATEGORIES: CategoryFilter[] = ['Alle', ...ARTICLE_CATEGORIES]

function useDebounce<T>(value: T, delay = 200): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debouncedValue
}

export function SlaapadviesGrid() {
  const searchParams = useSearchParams()
  const initialTag = searchParams.get('tag') ?? ''

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Alle')
  const [query, setQuery] = useState(initialTag)
  const debouncedQuery = useDebounce(query, 200)

  const filtered = useMemo(() => {
    let result = articles
    if (activeCategory !== 'Alle') {
      result = result.filter((a) => a.category === activeCategory)
    }
    const q = debouncedQuery.trim().toLowerCase()
    if (q) {
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return result
  }, [activeCategory, debouncedQuery])

  const handleCategoryClick = useCallback((cat: CategoryFilter) => {
    setActiveCategory(cat)
  }, [])

  const clearQuery = useCallback(() => setQuery(''), [])

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* ── Filter controls ── */}
        <div className="mb-10 flex flex-col gap-5">

          {/* Search */}
          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
              aria-hidden="true"
            />
            <Input
              type="search"
              placeholder="Zoek op onderwerp of trefwoord..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9 pr-9 h-11 font-sans"
              aria-label="Zoek in slaapadvies-artikelen"
            />
            {query && (
              <button
                onClick={clearQuery}
                aria-label="Zoekopdracht wissen"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Category chips */}
          <div
            role="group"
            aria-label="Filter op categorie"
            className="flex flex-wrap gap-2"
          >
            {ALL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  aria-pressed={isActive}
                  className={cn(
                    'inline-flex items-center min-h-[44px] px-4 py-2 rounded-sm border font-sans text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    isActive
                      ? 'bg-primary border-primary text-primary-foreground'
                      : 'bg-background border-border text-foreground hover:bg-secondary hover:border-primary/40'
                  )}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Result count */}
          <p className="font-sans text-sm text-muted-foreground" aria-live="polite" aria-atomic="true">
            {filtered.length === 1
              ? '1 artikel'
              : `${filtered.length} artikelen`}
            {activeCategory !== 'Alle' && ` in "${activeCategory}"`}
            {debouncedQuery.trim() && ` voor "${debouncedQuery.trim()}"`}
          </p>
        </div>

        {/* ── Article grid ── */}
        {filtered.length > 0 ? (
          <div
            key={`${activeCategory}-${debouncedQuery}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 animate-in fade-in duration-300"
          >
            {filtered.map((article) => (
              <AdviceCard
                key={article.slug}
                title={article.title}
                href={`/slaapadvies/${article.slug}/`}
                excerpt={article.excerpt}
                readTime={article.readTime}
                tag={article.category}
                image={article.image}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl text-muted-foreground mb-3">
              Geen artikelen gevonden
            </p>
            <p className="font-sans text-base text-muted-foreground mb-6">
              Probeer een andere categorie of zoekterm.
            </p>
            <button
              onClick={() => { setActiveCategory('Alle'); setQuery('') }}
              className="font-sans text-sm underline underline-offset-4 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Toon alle artikelen
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
