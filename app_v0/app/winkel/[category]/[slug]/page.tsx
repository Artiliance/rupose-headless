import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { Breadcrumbs } from "@/components/pdp/breadcrumbs";
import { ProductLayoutClient } from "@/components/pdp/product-layout-client";
import { ProductTabs } from "@/components/pdp/product-tabs";
import { RelatedProducts } from "@/components/pdp/related-products";
import { FaqAccordion } from "@/components/blocks/faq-accordion";
import { CrossSell } from "@/components/blocks/cross-sell";
import { RecentlyViewed } from "@/components/blocks/recently-viewed";
import { getProductFaqs } from "@/lib/faqs";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.categorySlug,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product niet gevonden | Rupose",
    };
  }

  return {
    title: `${product.name} | Rupose`,
    description: product.shortDesc,
    openGraph: {
      title: `${product.name} | Rupose`,
      description: product.shortDesc,
      images: product.gallery[0]
        ? [{ url: product.gallery[0], alt: product.name }]
        : [],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product, 4);

  // Convert gallery strings to image objects for ProductGallery
  const galleryImages = product.gallery.map((src, i) => ({
    src,
    alt: i === 0 ? product.name : `${product.name} - afbeelding ${i + 1}`,
  }));

  const breadcrumbs = [
    { label: "Winkel", href: "/winkel/" },
    { label: product.categoryLabel, href: `/winkel/${product.categorySlug}/` },
    { label: product.name },
  ];

  return (
    <main>
      {/* ── Breadcrumb bar ── */}
      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* ── Main product layout ── */}
      <section
        aria-label={product.name}
        className="container mx-auto px-4 md:px-6 py-10 md:py-16"
      >
        <ProductLayoutClient product={product} galleryImages={galleryImages} />
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-border" />

      {/* ── Tabs ── */}
      <section
        aria-label="Productdetails"
        className="container mx-auto px-4 md:px-6 py-12 md:py-16"
      >
        <ProductTabs product={product} />
      </section>

      {/* ── FAQ ── */}
      <FaqAccordion
        eyebrow="Veelgestelde vragen"
        title={`Vragen over ${product.name}`}
        items={getProductFaqs(slug)}
        bg="muted"
      />

      {/* ── Cross-sell ── */}
      <CrossSell
        variant="also-bought"
        products={related.slice(0, 4)}
      />

      {/* ── Related products ── */}
      <RelatedProducts products={related} />

      {/* ── Recently viewed ── */}
      <RecentlyViewed products={products.slice(0, 6)} />
    </main>
  );
}
