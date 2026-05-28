'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Search, X, Clock, TrendingUp, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { searchProducts, popularSearches } from '@/lib/search'
import type { Product } from '@/lib/products'

const MAX_RECENT = 5
const DEBOUNCE_MS = 200
const STORAGE_KEY = 'rupose_recent_searches'

function loadRecent(): string[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
  } catch {
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
  const overlayRef = useRef<HTMLDivElement>(null)

  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const [recent, setRecent] = useState<string[]>([])

  // Load recent on open
  useEffect(() => {
    if (open) {
      setRecent(loadRecent())
      setQuery('')
      setSuggestions([])
      setTimeout(() => inputRef.current?.focus(), 80)
    }
  }, [open])

  // Debounce query
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_MS)
    return () => clearTimeout(timer)
  }, [query])

  // Live suggestions
  useEffect(() => {
    if (debouncedQuery.trim().length < 2) {
      setSuggestions([])
      return
    }
    const results = searchProducts(debouncedQuery)
    setSuggestions(results.slice(0, 4))
  }, [debouncedQuery])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    // slight delay so the trigger button click doesn't immediately close
    const id = setTimeout(() => document.addEventListener('mousedown', handler), 100)
    return () => {
      clearTimeout(id)
      document.removeEventListener('mousedown', handler)
    }
  }, [open, onClose])

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

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') submit(query)
  }

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px]"
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={overlayRef}
        role="dialog"
        aria-label="Zoeken"
        aria-modal="true"
        className="fixed top-0 left-0 right-0 z-[61] bg-background border-b border-border shadow-lg"
      >
        {/* Input row */}
        <div className="container mx-auto px-4 md:px-6 flex items-center gap-3 h-16 md:h-20">
          <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Zoek op product, merk of categorie..."
            className="flex-1 bg-transparent font-sans text-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
            aria-label="Zoekterm"
            autoComplete="off"
          />
          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Zoeken sluiten"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Suggestions panel */}
        <div className="container mx-auto px-4 md:px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Left: recent + popular */}
            <div className="flex flex-col gap-6">
              {recent.length > 0 && (
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Recent
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
            </div>

            {/* Right: live product suggestions */}
            <div>
              {suggestions.length > 0 && (
                <>
                  <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Producten
                  </p>
                  <ul className="flex flex-col gap-3">
                    {suggestions.map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={`/winkel/${product.categorySlug}/${product.slug}/`}
                          onClick={onClose}
                          className="flex items-center gap-3 group min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                        >
                          <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-secondary flex-shrink-0">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                              unoptimized
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
                  <Link
                    href={`/zoeken/?q=${encodeURIComponent(query.trim())}`}
                    onClick={() => { saveRecent(query.trim()); onClose() }}
                    className={cn(
                      'mt-4 flex items-center gap-2 font-sans text-sm text-primary hover:text-primary/80 transition-colors',
                      'border-t border-border pt-4 min-h-[44px]'
                    )}
                  >
                    Bekijk alle resultaten voor &ldquo;{query}&rdquo;
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
