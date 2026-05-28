'use client'

import { useState } from 'react'
import { ProductGallery } from '@/components/pdp/product-gallery'
import { ProductInfo } from '@/components/pdp/product-info'
import type { Product } from '@/lib/products'

interface ProductLayoutClientProps {
  product: Product
  galleryImages: { src: string; alt: string }[]
}

export function ProductLayoutClient({
  product,
  galleryImages,
}: ProductLayoutClientProps) {
  // Lifted state: when user picks a colour, swap the primary gallery image
  const [colorOverrideSrc, setColorOverrideSrc] = useState<string | null>(null)

  // Build the final images list: inject colour override at position 0
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
      <ProductInfo
        product={product}
        onColorImageChange={setColorOverrideSrc}
      />
    </div>
  )
}
