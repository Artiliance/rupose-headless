import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { Breadcrumbs } from "@/components/pdp/breadcrumbs";
import { ProductLayoutClient } from "@/components/pdp/product-layout-client";
import { ProductTabs } from "@/components/pdp/product-tabs";
import { BrandVideoSection } from "@/components/pdp/brand-video-section";
import { RelatedProducts } from "@/components/pdp/related-products";
import { FaqAccordion } from "@/components/blocks/faq-accordion";
import { CrossSell } from "@/components/blocks/cross-sell";
import { RecentlyViewed } from "@/components/blocks/recently-viewed";
import { getProductFaqs } from "@/lib/faqs";
import { getBrandByName } from "@/lib/brands";
import { JsonLd } from "@/components/seo/json-ld";

const SITE = "https://rupose.nl";

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
    alternates: { canonical: `/winkel/${product.categorySlug}/${product.slug}/` },
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
  const { category, slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.categorySlug !== category) {
    notFound();
  }

  const related = getRelatedProducts(product, 4);

  // Resolve brand for logo, video, etc.
  const brand = getBrandByName(product.brand)

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

  const faqs = getProductFaqs(slug);
  const productUrl = `${SITE}/winkel/${product.categorySlug}/${product.slug}/`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.gallery,
    description: product.shortDesc,
    sku: product.sizes[0]?.sku,
    brand: { "@type": "Brand", name: product.brand },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: product.sizes[0]?.price,
      availability: "https://schema.org/InStock",
      url: productUrl,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      reviewCount: 847,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Winkel", item: `${SITE}/winkel/` },
      { "@type": "ListItem", position: 2, name: product.categoryLabel, item: `${SITE}/winkel/${product.categorySlug}/` },
      { "@type": "ListItem", position: 3, name: product.name, item: productUrl },
    ],
  };

  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <main>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
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
        <ProductLayoutClient product={product} galleryImages={galleryImages} brand={brand} />
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

      {/* ── Brand video (after tabs, before FAQ) ── */}
      {brand?.videoUrl && (
        <BrandVideoSection
          videoUrl={brand.videoUrl}
          brandName={brand.name}
        />
      )}

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
