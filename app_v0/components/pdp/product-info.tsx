"use client";

import { useState } from "react";
import { ShoppingCart, Minus, Plus, Truck, RefreshCw, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VariantSelector } from "@/components/pdp/variant-selector";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

interface ProductInfoProps {
  product: Product;
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
    text: "Veilig betalen — iDEAL, creditcard",
  },
  {
    icon: Leaf,
    text: "OEKO-TEX® gecertificeerd",
  },
];

export function ProductInfo({ product }: ProductInfoProps) {
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
    // Mock: show brief feedback only
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  }

  const formattedPrice = product.priceFrom.toLocaleString("nl-NL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Brand + in-stock badge */}
      <div className="flex items-center justify-between">
        <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-copper font-medium">
          {product.brand}
        </span>
        <span
          className={cn(
            "font-sans text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full",
            product.inStock
              ? "bg-sage-muted text-sage"
              : "bg-muted text-brown-muted"
          )}
        >
          {product.inStock ? "Op voorraad" : "Tijdelijk uitverkocht"}
        </span>
      </div>

      {/* Name */}
      <h1 className="font-serif text-3xl md:text-4xl font-light text-brown leading-tight text-balance">
        {product.name}
      </h1>

      {/* Short description */}
      <p className="font-sans text-sm text-brown-muted leading-relaxed">
        {product.shortDescription}
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

      {/* Variant selector */}
      {product.attributes.length > 0 && (
        <VariantSelector
          attributes={product.attributes}
          onSelectionChange={setSelections}
        />
      )}

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
            className="w-10 h-11 flex items-center justify-center text-brown-muted hover:text-brown disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Minus className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <span className="w-10 text-center font-sans text-sm font-medium text-brown select-none">
            {quantity}
          </span>
          <button
            onClick={increment}
            disabled={quantity >= 10}
            aria-label="Verhoog aantal"
            className="w-10 h-11 flex items-center justify-center text-brown-muted hover:text-brown disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Add to cart */}
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={cn(
            "flex-1 h-11 font-sans text-sm tracking-wide rounded-sm transition-all duration-200",
            addedFeedback
              ? "bg-sage hover:bg-sage text-primary-foreground"
              : "bg-copper hover:bg-copper/90 text-primary-foreground"
          )}
        >
          <ShoppingCart className="w-4 h-4 mr-2" aria-hidden="true" />
          {addedFeedback ? "Toegevoegd aan winkelwagen" : "Voeg toe aan winkelwagen"}
        </Button>
      </div>

      {/* Certifications */}
      {product.certifications && product.certifications.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {product.certifications.map((cert) => (
            <span
              key={cert}
              className="font-sans text-[10px] text-brown-muted border border-border px-2.5 py-1 rounded-full"
            >
              {cert}
            </span>
          ))}
        </div>
      )}

      {/* Divider */}
      <hr className="border-border" />

      {/* USP bullets */}
      <ul className="flex flex-col gap-2.5" aria-label="Voordelen">
        {USP_ITEMS.map((usp) => {
          const Icon = usp.icon;
          return (
            <li key={usp.text} className="flex items-center gap-3">
              <Icon
                className="w-4 h-4 text-sage flex-shrink-0"
                aria-hidden="true"
              />
              <span className="font-sans text-xs text-brown-muted">
                {usp.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
