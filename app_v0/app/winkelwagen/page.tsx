import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { CartTable } from '@/components/blocks/cart-table'
import { CrossSell } from '@/components/blocks/cross-sell'
import { featuredProducts } from '@/lib/blocks-data'

export const metadata: Metadata = {
  title: 'Winkelwagen | Rupose',
  description: 'Bekijk je winkelwagen en ga verder naar het afrekenen.',
}

export default function WinkelwagenPage() {
  return (
    <main>
      <Hero
        variant="simple"
        title="Winkelwagen"
      />
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <CartTable />
        </div>
      </section>
      <CrossSell
        variant="bundle"
        title="Vaak samen gekocht"
        products={featuredProducts.slice(0, 4)}
        bg="muted"
      />
    </main>
  )
}
