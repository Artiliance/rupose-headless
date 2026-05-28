import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { ContentSection } from '@/components/blocks/content-section'
import { FeatureGrid } from '@/components/blocks/feature-grid'
import { CtaBanner } from '@/components/blocks/cta-banner'
import { Recycle, ShieldCheck, MapPin, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Duurzaamheid | Rupose',
  description:
    'Lees hoe Rupose omgaat met duurzaamheid: OEKO-TEX certificering, Europese productie, verantwoord retourbeleid en bewuste materiaalkeuze.',
}

const pillars = [
  {
    icon: ShieldCheck,
    title: 'OEKO-TEX Standard 100',
    description:
      'Elk product in ons assortiment is getest op meer dan 100 schadelijke stoffen. OEKO-TEX Standard 100 is het minimale certificaat dat wij accepteren van onze leveranciers.',
  },
  {
    icon: MapPin,
    title: 'Europese productie',
    description:
      'Wij kiezen bewust voor merken die in Europa produceren. Kortere logistieke ketens betekenen minder uitstoot, en Europese arbeidsomstandigheden bieden meer zekerheid.',
  },
  {
    icon: Recycle,
    title: 'Verantwoord retourbeleid',
    description:
      'Geretourneerde producten die in perfecte staat zijn, gaan terug in het assortiment. Niet in de verbrandingsoven. Beschadigde goederen doneren wij aan lokale goede doelen.',
  },
  {
    icon: Package,
    title: 'Duurzame verpakking',
    description:
      'We versturen in recyclebaar karton zonder plastic vulmateriaal. Onze verzendpartners werken met elektrische bezorgvoertuigen voor last-mile delivery in stedelijk gebied.',
  },
]

const contentBody = `
<p>Duurzaamheid is voor Rupose geen marketingterm. Het is een reeks concrete keuzes die we dagelijks maken: welke merken we voeren, hoe we verpakken, wat we doen met retourzendingen en welke certificeringen we eisen van onze leveranciers.</p>

<p>We beginnen bij de bron. Alle katoenen producten in ons assortiment zijn OEKO-TEX Standard 100 gecertificeerd. Dat betekent dat elk garen, elke verf en elke versteviging getest is op schadelijke stoffen. Voor donsproducten eisen we RDS-certificering (Responsible Down Standard), die de herkomst van veren en dons garandeert.</p>

<p>Onze leveranciers produceren in Duitsland, Oostenrijk en Nederland. Niet om nationalistische redenen, maar omdat Europese fabrieken onderworpen zijn aan strenge milieu- en arbeidswetgeving die we verifieerbaar achten. We bezoeken onze leveranciers persoonlijk en stellen vragen die importeurs van bulkproducten zelden stellen.</p>

<p>Retourlogistiek is een van de grootste verborgen vervuilers in de e-commerce. Wij proberen retourneren te beperken door uitstekende productinformatie, maatgidsen en persoonlijk advies. Wie toch retourneert, kan dat doen. Producten die terugkomen, worden gecheckt en waar mogelijk herverkocht. Nooit weggegooid.</p>
`

export default function DuurzaamheidPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Onze aanpak"
        title="Duurzaamheid in de praktijk"
        intro="Geen greenwashing, maar concrete keuzes. Lees hoe wij omgaan met certificering, productie en retourlogistiek."
      />
      <ContentSection
        eyebrow="Ons beleid"
        title="Wat duurzaamheid voor Rupose betekent"
        body={contentBody}
      />
      <FeatureGrid
        eyebrow="Vier pijlers"
        title="Waar wij op letten"
        features={pillars}
        bg="muted"
      />
      <CtaBanner
        title="Vragen over ons duurzaamheidsbeleid?"
        description="We vertellen je graag meer. Neem contact op via telefoon of e-mail."
        cta={{ label: 'Neem contact op', href: '/contact/' }}
      />
    </main>
  )
}
