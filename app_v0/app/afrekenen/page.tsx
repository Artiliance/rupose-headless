import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { CheckoutForm } from '@/components/blocks/checkout-form'

export const metadata: Metadata = {
  title: 'Afrekenen | Rupose',
  description: 'Vul je bezorggegevens in en kies je betaalmethode om je bestelling te plaatsen.',
}

export default function AfrekenPage() {
  return (
    <main>
      <Hero
        variant="simple"
        title="Afrekenen"
      />
      <CheckoutForm />
    </main>
  )
}
