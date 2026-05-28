import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/blocks/page-header'
import { BrandNarrative } from '@/components/blocks/brand-narrative'
import { BrandVideo } from '@/components/blocks/brand-video'
import { FeatureGrid } from '@/components/blocks/feature-grid'
import { ProductCarousel } from '@/components/blocks/product-carousel'
import { ReviewsCarousel } from '@/components/blocks/reviews-carousel'
import { FaqAccordion } from '@/components/blocks/faq-accordion'
import { CtaBanner } from '@/components/blocks/cta-banner'
import { brandDetails, getBrandBySlug } from '@/lib/brands'
import { products } from '@/lib/products'
import { brandFaqs, genericShippingFaqs } from '@/lib/faqs'
import { allReviews } from '@/lib/reviews'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return brandDetails.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) return {}
  return {
    title: `${brand.name} | Rupose`,
    description: brand.intro,
    alternates: { canonical: `/merken/${brand.slug}/` },
  }
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) notFound()

  const brandProducts = products
    .filter((p) => brand.productSlugs.includes(p.slug))
    .map((p) => ({
      name: p.name,
      slug: p.slug,
      category: p.categorySlug,
      price: String(p.sizes[0]?.price ?? ''),
      image: p.image,
      shortDesc: p.shortDesc,
    }))

  const featureItems = brand.usps.slice(0, 3).map((usp) => ({
    title: usp.title,
    description: usp.body,
  }))

  return (
    <main>
      <PageHeader
        logo={brand.logo}
        logoAlt={`${brand.name} logo`}
        eyebrow={brand.country}
        title={brand.name}
        intro={brand.intro}
        breadcrumbs={[
          { label: 'Merken', href: '/merken/' },
          { label: brand.name },
        ]}
      />

      <BrandNarrative
        eyebrow={`Over ${brand.name}`}
        title={brand.fullName}
        body={brand.story}
        image={brand.heroImage}
        imageAlt={`${brand.name}, ${brand.tagline}`}
      />

      {brand.video && (
        <BrandVideo
          video={brand.video}
          brandName={brand.name}
          bg="muted"
        />
      )}

      <FeatureGrid
        eyebrow="Waarom kiezen voor dit merk"
        title={`Voordelen van ${brand.name}`}
        features={featureItems}
        bg="muted"
      />

      {brandProducts.length > 0 && (
        <ProductCarousel
          eyebrow="Collectie"
          title={`${brand.name} producten`}
          products={brandProducts}
          cta={{ label: 'Bekijk alle producten', href: '/winkel/' }}
        />
      )}

      <FaqAccordion
        eyebrow="Veelgestelde vragen"
        title={`Vragen over ${brand.name}`}
        items={brandFaqs[slug] ?? genericShippingFaqs}
        bg="muted"
      />

      <ReviewsCarousel
        eyebrow="Klantervaringen"
        title={`Ervaringen met ${brand.name}`}
        reviews={allReviews.slice(0, 6)}
        bg="default"
      />

      <CtaBanner
        eyebrow="Collectie"
        title={`Ontdek de hele ${brand.name} collectie`}
        description={`Alle ${brand.name} producten zijn verkrijgbaar bij Rupose. Persoonlijk advies bij elk product.`}
        cta={{ label: 'Naar de winkel', href: '/winkel/' }}
        bg="primary"
      />
    </main>
  )
}
