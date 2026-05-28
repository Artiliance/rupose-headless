'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toastSuccess } from '@/lib/toast'
import { cn } from '@/lib/utils'
import type { Product } from '@/lib/products'

type CrossSellVariant = 'also-bought' | 'bundle'

interface Props {
  variant?: CrossSellVariant
  title?: string
  products: Pick<Product, 'slug' | 'categorySlug' | 'name' | 'image' | 'shortDesc' | 'sizes' | 'badge'>[]
  bg?: 'default' | 'muted'
}

const defaultTitles: Record<CrossSellVariant, string> = {
  'also-bought': 'Klanten kochten ook',
  'bundle': 'Vaak samen gekocht',
}

export function CrossSell({
  variant = 'also-bought',
  title,
  products,
  bg = 'default',
}: Props) {
  const heading = title ?? defaultTitles[variant]

  if (!products.length) return null

  return (
    <section
      aria-labelledby="cross-sell-heading"
      className={cn(
        'py-12 md:py-16 border-t border-border',
        bg === 'muted' ? 'bg-secondary' : 'bg-background'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8">
          {variant === 'bundle' && (
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Combineer en bespaar
            </p>
          )}
          <h2
            id="cross-sell-heading"
            className="font-serif text-2xl md:text-3xl font-light text-foreground"
          >
            {heading}
          </h2>
        </div>

        {/* Product grid — up to 4 items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {products.slice(0, 4).map((p) => {
            const price = p.sizes[0]?.price
            const fmtPrice =
              price !== undefined
                ? new Intl.NumberFormat('nl-NL', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 2,
                  }).format(price)
                : null

            return (
              <div key={p.slug} className="group flex flex-col gap-3">
                {/* Image */}
                <Link
                  href={`/winkel/${p.categorySlug}/${p.slug}/`}
                  className="block relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={p.name}
                  tabIndex={0}
                >
                  {p.badge && (
                    <span className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground font-sans text-xs font-medium px-2 py-0.5 rounded-sm">
                      {p.badge}
                    </span>
                  )}
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    unoptimized
                  />
                </Link>

                {/* Text */}
                <div className="flex flex-col gap-1 flex-1">
                  <Link
                    href={`/winkel/${p.categorySlug}/${p.slug}/`}
                    className="font-sans text-sm font-medium text-foreground leading-snug line-clamp-2 hover:text-primary transition-colors"
                  >
                    {p.name}
                  </Link>
                  <p className="font-sans text-xs text-muted-foreground line-clamp-1">
                    {p.shortDesc}
                  </p>
                  {fmtPrice && (
                    <p className="font-sans text-sm font-semibold text-foreground mt-auto pt-1">
                      Vanaf {fmtPrice}
                    </p>
                  )}
                </div>

                {/* Add to cart */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors gap-2 min-h-[44px]"
                  onClick={() => toastSuccess(`${p.name} toegevoegd aan winkelwagen`)}
                >
                  <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                  Toevoegen
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
