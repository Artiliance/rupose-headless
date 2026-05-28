import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/products";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="related-heading" className="py-16 md:py-20 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper mb-2">
              Vergelijkbaar
            </p>
            <h2
              id="related-heading"
              className="font-serif text-3xl md:text-4xl font-light text-brown"
            >
              Andere producten
            </h2>
          </div>
          <Link
            href="/winkel/"
            className="hidden sm:inline-flex items-center gap-1.5 font-sans text-base text-brown-muted hover:text-brown transition-colors group min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Alle producten
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.name}
              slug={product.slug}
              price={String(product.priceFrom ?? '')}
              image={product.images?.[0]?.src ?? null}
              shortDesc={product.shortDescription}
              category={product.categorySlug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
