import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { CategoryGrid } from '@/components/blocks/category-grid'
import { ProductCarousel } from '@/components/blocks/product-carousel'
import { BrandStrip } from '@/components/blocks/brand-strip'
import { CtaBanner } from '@/components/blocks/cta-banner'
import { categories, brands, featuredProducts } from '@/lib/blocks-data'

export const metadata: Metadata = {
  title: 'Winkel | Rupose',
  description:
    'Ontdek de volledige collectie premium bedtextiel van Rupose: hoeslakens, dekbedden, hoofdkussens, moltons en meer. Van geselecteerde Europese merken.',
}

export default function WinkelPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Alle producten"
        title="Onze collectie"
        intro="Premium bedtextiel van geselecteerde Europese merken. Eerlijk slaapadvies, zorgvuldig gekozen kwaliteit."
      />
      <CategoryGrid categories={categories} />
      <ProductCarousel
        eyebrow="Handpicked selectie"
        title="Bestsellers"
        products={featuredProducts}
        cta={{ label: 'Bekijk alle producten', href: '/winkel/' }}
      />
      <BrandStrip brands={brands} />
      <CtaBanner
        title="Niet zeker welk product bij je past?"
        description="Onze slaapspecialisten helpen je graag. Bel, mail of kom langs in onze winkel in Haren."
        cta={{ label: 'Neem contact op', href: '/contact/' }}
        secondaryCta={{ label: 'Lees slaapadvies', href: '/slaapadvies/' }}
      />
    </main>
  )
}
