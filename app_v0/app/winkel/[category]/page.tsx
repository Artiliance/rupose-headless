import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/blocks/page-header'
import { ProductCard } from '@/components/product-card'
import { RecentlyViewed } from '@/components/blocks/recently-viewed'
import { AdviceTeaser } from '@/components/blocks/advice-teaser'
import { FaqAccordion } from '@/components/blocks/faq-accordion'
import { NewsletterCta } from '@/components/blocks/newsletter-cta'
import { categories } from '@/lib/blocks-data'
import { adviceArticles } from '@/lib/blocks-data'
import { products } from '@/lib/products'
import { categoryFaqs, genericShippingFaqs } from '@/lib/faqs'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const cat = categories.find((c) => c.slug === category)
  if (!cat) return {}
  return {
    title: `${cat.name} | Rupose`,
    description: cat.intro,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = categories.find((c) => c.slug === category)
  if (!cat) notFound()

  const catProducts = products.filter((p) => p.categorySlug === category)

  return (
    <main>
      <PageHeader
        eyebrow="Onze collectie"
        title={cat.name}
        intro={cat.intro}
        image={cat.image}
        imageAlt={`${cat.name} collectie van Rupose`}
        breadcrumbs={[
          { label: 'Winkel', href: '/winkel/' },
          { label: cat.name },
        ]}
      />

      {/* Product grid */}
      <section aria-labelledby="products-heading" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 id="products-heading" className="sr-only">
            {cat.name} producten
          </h2>
          {catProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {catProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  name={product.name}
                  slug={product.slug}
                  category={product.categorySlug}
                  price={String(product.sizes[0]?.price ?? '')}
                  image={product.image}
                  shortDesc={product.shortDesc}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-serif text-2xl font-light text-muted-foreground">
                Binnenkort beschikbaar.
              </p>
              <p className="font-sans text-base text-muted-foreground mt-2">
                We voegen binnenkort producten toe aan deze categorie.
              </p>
            </div>
          )}
        </div>
      </section>

      <AdviceTeaser
        eyebrow="Wist je dat"
        title="Advies over slaapcomfort"
        articles={adviceArticles.slice(0, 3)}
        bg="muted"
      />

      <FaqAccordion
        eyebrow="Veelgestelde vragen"
        title={`Vragen over ${cat.name}`}
        items={categoryFaqs[category] ?? genericShippingFaqs}
        bg="default"
      />

      <RecentlyViewed products={catProducts.length >= 4 ? catProducts.slice(0, 6) : products.slice(0, 6)} />

      <NewsletterCta />
    </main>
  )
}
