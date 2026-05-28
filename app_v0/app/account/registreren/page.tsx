import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { AuthForm } from '@/components/blocks/auth-form'

export const metadata: Metadata = {
  title: 'Account aanmaken | Rupose',
  description: 'Maak een gratis Rupose-account aan voor sneller afrekenen en bestellingsbeheer.',
}

export default function RegistrerenPage() {
  return (
    <main>
      <Hero
        variant="simple"
        title="Account aanmaken"
        intro="Maak een gratis account aan en geniet van sneller afrekenen en persoonlijk overzicht."
      />
      <AuthForm variant="register" />
    </main>
  )
}
