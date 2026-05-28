import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { FeatureGrid } from '@/components/blocks/feature-grid'
import { ContentSection } from '@/components/blocks/content-section'
import { Smartphone, CreditCard, Clock, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Betaalmethodes | Rupose',
  description: 'Rupose accepteert iDEAL, creditcard, achteraf betalen en meer. Veilig betalen via SSL-verbinding.',
}

const methods = [
  {
    icon: Smartphone,
    title: 'iDEAL',
    description:
      'Direct betalen via je eigen bank. Veilig, vertrouwd en direct verwerkt. De meest gebruikte betaalmethode in Nederland.',
  },
  {
    icon: CreditCard,
    title: 'Creditcard',
    description:
      'We accepteren Mastercard en Visa. Betalingen verlopen via een beveiligde gateway met 3D Secure verificatie.',
  },
  {
    icon: Clock,
    title: 'Achteraf betalen (Klarna)',
    description:
      'Ontvang je bestelling eerst, betaal later. Klarna biedt 14 dagen uitstel zonder extra kosten, onder voorbehoud van goedkeuring.',
  },
  {
    icon: ShieldCheck,
    title: 'Bankoverschrijving',
    description:
      'Betalen via overboeking is mogelijk voor zakelijke bestellingen. Neem contact op om dit in te stellen. Bestelling wordt verzonden na ontvangst betaling.',
  },
]

const body = `
<p>Alle betalingen bij Rupose verlopen via een <strong>beveiligde SSL/TLS-verbinding</strong>. Je betalingsgegevens worden nooit opgeslagen op onze servers. We maken gebruik van gecertificeerde betaalproviders die voldoen aan de PCI DSS-normen.</p>

<p>Bij betaalfouten of vragen over een transactie kun je contact opnemen via info@rupose.nl. Bij terugbetalingen na retour ontvangt u het bedrag via de oorspronkelijke betaalmethode, doorgaans binnen 5 werkdagen.</p>
`

export default function BetaalmethodesPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Klantenservice"
        title="Betaalmethodes"
        intro="Veilig betalen via iDEAL, creditcard, achteraf betalen of bankoverschrijving."
      />
      <FeatureGrid
        eyebrow="Beschikbare methodes"
        title="Hoe kun je betalen"
        features={methods}
        cols={4}
      />
      <ContentSection
        eyebrow="Veiligheid"
        title="Jouw betaalgegevens zijn veilig"
        body={body}
        bg="muted"
      />
    </main>
  )
}
