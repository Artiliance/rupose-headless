'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Product } from '@/lib/products'

interface Props {
  products: Pick<Product, 'slug' | 'categorySlug' | 'name' | 'image' | 'sizes'>[]
  /** If omitted, mock data from lib/products is used server-side by the parent */
  className?: string
}

export function RecentlyViewed({ products, className }: Props) {
  const railRef = useRef<HTMLDivElement>(null)

  if (!products.length) return null

  function scroll(dir: 'left' | 'right') {
    const el = railRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' })
  }

  return (
    <section
      aria-labelledby="recently-viewed-heading"
      className={cn('py-12 md:py-16 bg-background border-t border-border', className)}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Eerder bekeken
            </p>
            <h2
              id="recently-viewed-heading"
              className="font-serif text-2xl font-light text-foreground"
            >
              Onlangs bekeken
            </h2>
          </div>

          {/* Scroll arrows — desktop only */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-sm border-border"
              onClick={() => scroll('left')}
              aria-label="Scroll naar links"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-sm border-border"
              onClick={() => scroll('right')}
              aria-label="Scroll naar rechts"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Scroll rail */}
        <div
          ref={railRef}
          className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {products.map((p) => {
            const price = p.sizes?.[0]?.price
            return (
              <Link
                key={p.slug}
                href={`/winkel/${p.categorySlug}/${p.slug}/`}
                className="group flex-none w-44 md:w-52 snap-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                aria-label={p.name}
              >
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-secondary mb-3">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 176px, 208px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                {/* Text */}
                <p className="font-sans text-sm font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {p.name}
                </p>
                {price !== undefined && (
                  <p className="font-sans text-sm text-muted-foreground mt-1">
                    Vanaf{' '}
                    {new Intl.NumberFormat('nl-NL', {
                      style: 'currency',
                      currency: 'EUR',
                      minimumFractionDigits: 2,
                    }).format(price)}
                  </p>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
