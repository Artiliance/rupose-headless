'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Search, X, Clock, TrendingUp, ArrowRight, Store } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogClose } from '@/components/ui/dialog'
import { searchProducts, searchBrands, popularSearches, type BrandSearchResult } from '@/lib/search'
import type { Product } from '@/lib/products'

const MAX_RECENT = 5
const DEBOUNCE_MS = 200
const STORAGE_KEY = 'rupose_recent_searches'

function loadRecent(): string[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
  } catch {
    console.warn('[search] recent-searches in localStorage was corrupt; resetting')
    localStorage.removeItem(STORAGE_KEY)
    return []
  }
}

function saveRecent(term: string) {
  const current = loadRecent().filter((t) => t !== term)
  const next = [term, ...current].slice(0, MAX_RECENT)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
}

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const [brandHits, setBrandHits] = useState<BrandSearchResult[]>([])
  const [recent, setRecent] = useState<string[]>([])

  // Reset + load recent each time the popup opens
  useEffect(() => {
    if (!open) return
    setRecent(loadRecent())
    setQuery('')
    setSuggestions([])
    setBrandHits([])
  }, [open])

  // Debounce query
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_MS)
    return () => clearTimeout(timer)
  }, [query])

  // Live suggestions (products + brands)
  useEffect(() => {
    if (debouncedQuery.trim().length < 2) {
      setSuggestions([])
      setBrandHits([])
      return
    }
    setSuggestions(searchProducts(debouncedQuery).slice(0, 5))
    setBrandHits(searchBrands(debouncedQuery).slice(0, 3))
  }, [debouncedQuery])

  const submit = useCallback(
    (term: string) => {
      const q = term.trim()
      if (!q) return
      saveRecent(q)
      onClose()
      router.push(`/zoeken/?q=${encodeURIComponent(q)}`)
    },
    [router, onClose]
  )

  const hasResults = suggestions.length > 0 || brandHits.length > 0

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        showCloseButton={false}
        onOpenAutoFocus={(e) => {
          e.preventDefault()
          inputRef.current?.focus()
        }}
        className="top-[8vh] translate-y-0 sm:max-w-2xl max-w-[calc(100%-1.5rem)] p-0 gap-0 overflow-hidden rounded-lg border-border"
      >
        <DialogTitle className="sr-only">Zoeken</DialogTitle>

        {/* Input row */}
        <div className="flex items-center gap-3 h-16 px-5 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') submit(query) }}
            placeholder="Zoek op product, merk of categorie..."
            className="flex-1 bg-transparent font-sans text-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
            aria-label="Zoekterm"
            autoComplete="off"
          />
          <DialogClose
            aria-label="Zoeken sluiten"
            className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring flex-shrink-0"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </DialogClose>
        </div>

        {/* Body */}
        <div className="max-h-[60vh] overflow-y-auto px-5 py-5">
          {hasResults ? (
            <>
              {suggestions.length > 0 && (
                <div className={brandHits.length > 0 ? 'mb-6' : ''}>
                  <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Producten
                  </p>
                  <ul className="flex flex-col gap-1">
                    {suggestions.map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={`/winkel/${product.categorySlug}/${product.slug}/`}
                          onClick={onClose}
                          className="flex items-center gap-3 group min-h-[56px] p-2 -mx-2 rounded-sm hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-secondary flex-shrink-0">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                              unoptimized
                              sizes="48px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-sans text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                              {product.name}
                            </p>
                            <p className="font-sans text-xs text-muted-foreground">
                              {product.brand} &middot; {product.categoryLabel}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => submit(query)}
                    className="mt-3 w-full flex items-center justify-center gap-2 font-sans text-sm text-primary hover:text-primary/80 transition-colors border-t border-border pt-4 min-h-[44px]"
                  >
                    Bekijk alle resultaten voor &ldquo;{query.trim()}&rdquo;
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              )}

              {brandHits.length > 0 && (
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Merken
                  </p>
                  <ul className="flex flex-col gap-1">
                    {brandHits.map((brand) => (
                      <li key={brand.slug}>
                        <Link
                          href={`/merken/${brand.slug}/`}
                          onClick={onClose}
                          className="flex items-center gap-3 group min-h-[56px] p-2 -mx-2 rounded-sm hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-secondary flex-shrink-0 flex items-center justify-center p-1.5 [color-scheme:light]">
                            <Image
                              src={brand.logo}
                              alt={brand.name}
                              fill
                              className="object-contain p-1.5"
                              unoptimized
                              sizes="48px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-sans text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                              {brand.name}
                            </p>
                            <p className="font-sans text-xs text-muted-foreground truncate">
                              <Store className="inline w-3 h-3 mr-1 -mt-0.5" aria-hidden="true" />
                              Merkpagina &middot; {brand.tagline}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col gap-6">
              {recent.length > 0 && (
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Recent gezocht
                  </p>
                  <ul className="flex flex-col gap-1">
                    {recent.map((term) => (
                      <li key={term}>
                        <button
                          onClick={() => submit(term)}
                          className="flex items-center gap-2 font-sans text-base text-foreground/70 hover:text-foreground transition-colors min-h-[40px] w-full text-left"
                        >
                          <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                          {term}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Populair
                </p>
                <ul className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <li key={term}>
                      <button
                        onClick={() => submit(term)}
                        className="flex items-center gap-1.5 font-sans text-sm text-foreground/70 hover:text-foreground bg-secondary hover:bg-secondary/70 transition-colors px-3 py-1.5 rounded-full min-h-[36px]"
                      >
                        <TrendingUp className="w-3 h-3" aria-hidden="true" />
                        {term}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {query.trim().length >= 2 && (
                <p className="font-sans text-sm text-muted-foreground">
                  Geen producten of merken gevonden voor &ldquo;{query.trim()}&rdquo;. Druk op Enter om alle resultaten te bekijken.
                </p>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
