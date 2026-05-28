'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductGallery } from '@/components/pdp/product-gallery'
import { ProductInfo } from '@/components/pdp/product-info'
import type { Product } from '@/lib/products'
import type { BrandDetail } from '@/lib/brands'

interface ProductLayoutClientProps {
  product: Product
  galleryImages: { src: string; alt: string }[]
  brand?: BrandDetail
}

export function ProductLayoutClient({
  product,
  galleryImages,
  brand,
}: ProductLayoutClientProps) {
  const [colorOverrideSrc, setColorOverrideSrc] = useState<string | null>(null)

  const images = colorOverrideSrc
    ? [
        { src: colorOverrideSrc, alt: `${product.name} in gekozen kleur` },
        ...galleryImages,
      ]
    : galleryImages

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
      {/* Left — Gallery */}
      <div className="lg:sticky lg:top-28">
        <ProductGallery images={images} productName={product.name} />
      </div>

      {/* Right — Info */}
      <div className="flex flex-col gap-6">
        {/* Brand logo — rendered above ProductInfo when brand has a logo */}
        {brand?.logo && (
          <Link
            href={`/merken/${brand.slug}/`}
            aria-label={`Naar merkpagina van ${brand.name}`}
            className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={120}
              height={28}
              className="h-7 w-auto object-contain object-left"
              unoptimized
            />
          </Link>
        )}

        <ProductInfo
          product={product}
          onColorImageChange={setColorOverrideSrc}
        />
      </div>
    </div>
  )
}
