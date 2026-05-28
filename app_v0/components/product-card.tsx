'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { toastSuccess } from '@/lib/toast'

export interface ProductCardProps {
  name: string
  slug: string
  price: string
  image: string | null
  shortDesc: string
  category: string
}

export function ProductCard({
  name,
  slug,
  price,
  image,
  shortDesc,
  category,
}: ProductCardProps) {
  const cleanDesc = shortDesc
    ? shortDesc
        .replace(/&amp;/g, '&')
        .replace(/&#8217;/g, "'")
        .replace(/\n/g, ' ')
        .replace(/<[^>]*>/g, '')
        .trim()
        .slice(0, 110)
    : ''

  const href = slug ? `/winkel/${category}/${slug}/` : '/winkel/'

  function handleAddToCart() {
    toastSuccess('Toegevoegd aan winkelwagen')
  }

  return (
    <article className="group flex flex-col">
      {/* Photo */}
      <div className="relative overflow-hidden rounded-sm bg-sand aspect-[3/4] block mb-4">
        <Link
          href={href}
          className="block w-full h-full"
          aria-label={`Bekijk ${name}`}
          tabIndex={-1}
        >
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              unoptimized
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            />
          ) : (
            <div className="absolute inset-0 bg-sage-muted flex items-center justify-center">
              <span className="font-serif text-sm text-brown-muted">Geen afbeelding</span>
            </div>
          )}
        </Link>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1">
        <p className="font-sans text-[11px] uppercase tracking-widest text-copper mb-1.5">
          {category}
        </p>
        <Link href={href}>
          <h3 className="font-serif text-xl font-light text-brown leading-snug hover:text-sage transition-colors mb-2 text-balance">
            {name}
          </h3>
        </Link>
        {cleanDesc && (
          <p className="font-sans text-sm text-brown-muted leading-relaxed mb-3 line-clamp-2 flex-1">
            {cleanDesc}&hellip;
          </p>
        )}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
          {price ? (
            <span className="font-sans text-lg font-medium text-brown">
              v.a.&nbsp;&euro;
              {parseFloat(price).toLocaleString('nl-NL', { minimumFractionDigits: 2 })}
            </span>
          ) : (
            <span className="font-sans text-base text-brown-muted">Op aanvraag</span>
          )}
          <button
            onClick={handleAddToCart}
            aria-label={`${name} toevoegen aan winkelwagen`}
            className="inline-flex items-center gap-1.5 font-sans text-sm text-brown-muted hover:text-brown transition-colors min-h-[44px] px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ShoppingBag className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  )
}
