import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { Breadcrumbs } from "@/components/pdp/breadcrumbs";
import { ProductGallery } from "@/components/pdp/product-gallery";
import { ProductInfo } from "@/components/pdp/product-info";
import { ProductTabs } from "@/components/pdp/product-tabs";
import { RelatedProducts } from "@/components/pdp/related-products";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    category: product.categorySlug,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product niet gevonden — Rupose",
    };
  }

  return {
    title: `${product.name} — Rupose`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — Rupose`,
      description: product.shortDescription,
      images: product.images[0]
        ? [{ url: product.images[0].src, alt: product.images[0].alt }]
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

  const breadcrumbs = [
    { label: "Winkel", href: "/winkel/" },
    { label: product.category, href: product.categoryHref },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Left — Gallery */}
          <div className="lg:sticky lg:top-28">
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* Right — Info */}
          <ProductInfo product={product} />
        </div>
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

      {/* ── Related products ── */}
      <RelatedProducts products={related} />
    </main>
  );
}
