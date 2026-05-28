import type { Metadata } from 'next'
import { PageHeader } from '@/components/blocks/page-header'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'

const CDN = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images'

export const metadata: Metadata = {
  title: 'Alle producten | Rupose',
  description:
    'Het complete Rupose-assortiment in één overzicht: hoeslakens, dekbedden, hoofdkussens, topmatrassen en moltons van premium merken.',
  alternates: { canonical: '/winkel/alle/' },
}

export default function AlleProductenPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Volledig assortiment"
        title="Alle producten"
        intro="Het complete Rupose-assortiment in één overzicht."
        image={`${CDN}/lifestyle/MCD9646-Edit-groot.jpeg`}
        imageAlt="Rupose bedtextiel collectie"
        breadcrumbs={[
          { label: 'Winkel', href: '/winkel/' },
          { label: 'Alle producten' },
        ]}
      />

      <section aria-labelledby="alle-producten-heading" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 id="alle-producten-heading" className="sr-only">
            Alle producten
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
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
        </div>
      </section>
    </main>
  )
}
