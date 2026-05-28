"use client";

import { useState } from "react";
import { ShoppingCart, Minus, Plus, Truck, RefreshCw, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VariantSelector } from "@/components/pdp/variant-selector";
import { AggregateRating } from "@/components/blocks/aggregate-rating";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { toastSuccess } from "@/lib/toast";
import type { Product } from "@/lib/products";
import type { BrandDetail } from "@/lib/brands";

interface ProductInfoProps {
  product: Product
  brand?: BrandDetail
  onColorImageChange?: (src: string) => void
}

const USP_ITEMS = [
  {
    icon: Truck,
    text: "Gratis verzending vanaf €75",
  },
  {
    icon: RefreshCw,
    text: "30 dagen retourrecht",
  },
  {
    icon: Shield,
    text: "Veilig betalen: iDEAL, creditcard",
  },
  {
    icon: Leaf,
    text: "OEKO-TEX® gecertificeerd",
  },
];

export function ProductInfo({ product, brand, onColorImageChange }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [addedFeedback, setAddedFeedback] = useState(false);

  function increment() {
    setQuantity((q) => Math.min(q + 1, 10));
  }
  function decrement() {
    setQuantity((q) => Math.max(q - 1, 1));
  }

  function handleAddToCart() {
    setAddedFeedback(true);
    toastSuccess(`${product.name} toegevoegd aan winkelwagen`);
    setTimeout(() => setAddedFeedback(false), 2000);
  }

  const priceValue = product.priceFrom ?? product.sizes?.[0]?.price ?? 0
  const formattedPrice = priceValue.toLocaleString("nl-NL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Merk (logo OF tekst, nooit beide) + voorraad-badge */}
      <div className="flex items-center justify-between gap-4">
        {brand?.logo ? (
          <Link
            href={`/merken/${brand.slug}/`}
            aria-label={`Naar merkpagina van ${brand.name}`}
            className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={120}
              height={28}
              className="h-6 w-auto object-contain object-left"
              unoptimized
            />
          </Link>
        ) : (
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-copper font-medium">
            {product.brand}
          </span>
        )}
        <span
          className={cn(
            "font-sans text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0",
            product.inStock !== false
              ? "bg-sage-muted text-sage"
              : "bg-muted text-brown-muted"
          )}
        >
          {product.inStock !== false ? "Op voorraad" : "Tijdelijk uitverkocht"}
        </span>
      </div>

      {/* Name */}
      <h1 className="font-serif text-3xl md:text-4xl font-light text-brown leading-tight text-balance">
        {product.name}
      </h1>

      {/* Rating */}
      <AggregateRating score={4.8} count={847} size="sm" />

      {/* Short description (Woo short_description) */}
      <p className="font-sans text-base text-brown-muted leading-relaxed">
        {product.shortDesc}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="font-serif text-3xl font-light text-brown">
          &euro;{formattedPrice}
        </span>
        <span className="font-sans text-xs text-brown-muted">v.a. incl. btw</span>
      </div>

      {/* Divider */}
      <hr className="border-border" />

      {/* Variant selector — colours + sizes from lib/products */}
      {(product.colours && product.colours.length > 0) || (product.sizes && product.sizes.length > 0) ? (
        <VariantSelector
          colours={product.colours}
          sizes={product.sizes}
          useBellaDonnaColors={product.slug === 'bella-donna-jersey-hoeslaken'}
          onColorImageChange={onColorImageChange}
        />
      ) : product.attributes && product.attributes.length > 0 ? (
        <VariantSelector
          attributes={product.attributes}
          onSelectionChange={setSelections}
        />
      ) : null}

      {/* Quantity + CTA */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Quantity stepper */}
        <div
          className="flex items-center border border-border rounded-sm"
          role="group"
          aria-label="Aantal"
        >
          <button
            onClick={decrement}
            disabled={quantity <= 1}
            aria-label="Verminder aantal"
            className="w-11 h-12 flex items-center justify-center text-brown-muted hover:text-brown disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Minus className="w-4 h-4" aria-hidden="true" />
          </button>
          <span className="w-10 text-center font-sans text-base font-medium text-brown select-none">
            {quantity}
          </span>
          <button
            onClick={increment}
            disabled={quantity >= 10}
            aria-label="Verhoog aantal"
            className="w-11 h-12 flex items-center justify-center text-brown-muted hover:text-brown disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Plus className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Add to cart */}
        <Button
          onClick={handleAddToCart}
          disabled={!product.sizes?.length}
          className={cn(
            "flex-1 h-12 font-sans text-base tracking-wide rounded-sm transition-all duration-200",
            addedFeedback
              ? "bg-sage hover:bg-sage text-primary-foreground"
              : "bg-copper hover:bg-copper/90 text-primary-foreground"
          )}
        >
          <ShoppingCart className="w-4 h-4 mr-2" aria-hidden="true" />
          {addedFeedback ? "Toegevoegd aan winkelwagen" : "Bestellen"}
        </Button>
      </div>

      {/* Certifications */}
      {product.certifications && product.certifications.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {product.certifications.map((cert) => (
            <span
              key={cert}
              className="font-sans text-sm text-brown-muted border border-border px-3 py-1.5 rounded-full"
            >
              {cert}
            </span>
          ))}
        </div>
      )}

      {/* Divider */}
      <hr className="border-border" />

      {/* USP bullets */}
      <ul className="flex flex-col gap-3" aria-label="Voordelen">
        {USP_ITEMS.map((usp) => {
          const Icon = usp.icon;
          return (
            <li key={usp.text} className="flex items-center gap-3">
              <Icon
                className="w-5 h-5 text-sage flex-shrink-0"
                aria-hidden="true"
              />
              <span className="font-sans text-base text-brown-muted">
                {usp.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
