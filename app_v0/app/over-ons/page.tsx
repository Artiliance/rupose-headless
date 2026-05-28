import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { ContentSection } from '@/components/blocks/content-section'
import { FeatureGrid } from '@/components/blocks/feature-grid'
import { ReviewsCarousel } from '@/components/blocks/reviews-carousel'
import { NewsletterCta } from '@/components/blocks/newsletter-cta'
import { Heart, Users, Sprout, Star } from 'lucide-react'
import { allReviews } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Over ons | Rupose',
  description:
    'Rupose is de premium bedtextielspecialist van Noord-Nederland. Lees ons verhaal: Haren-roots, Europese merken en eerlijk slaapadvies.',
}

const CDN = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images'

const values = [
  {
    icon: <Star />,
    title: 'Diepgaande kennis',
    description:
      'Wij kennen elk product dat wij verkopen. Van de vezeleigenschappen van Texelse wol tot de technische specificaties van Hefel Pure Cotton. Die kennis delen we graag.',
  },
  {
    icon: <Sprout />,
    title: 'Duurzaamheid als basis',
    description:
      'We kiezen bewust voor OEKO-TEX gecertificeerde producten, Europese productie en merken die transparant zijn over hun keten. Geen compromissen op dit punt.',
  },
  {
    icon: <Users />,
    title: 'Persoonlijk advies',
    description:
      'Je bent geen ordernummer bij Rupose. Of je nu belt, mailt of binnenloopt: je krijgt altijd een specialist aan de lijn die echt meedenkt over jouw slaapsituatie.',
  },
  {
    icon: <Heart />,
    title: 'Europese kwaliteit',
    description:
      'Onze partners produceren in Duitsland, Oostenrijk en Nederland. Wij geloven dat je kunt voelen waar iets gemaakt is. Europees vakmanschap spreekt voor zich.',
  },
]

const storyBody = `
<p>Rupose begon in Haren, een dorp net ten zuiden van Groningen waar de stilte 's avonds voelbaar is. Daar ontdekten wij als slaapspecialisten dat de meeste mensen nooit echt goed voorgelicht worden over de materialen die zij elke nacht gebruiken. Een matras krijgt aandacht, maar het hoeslaken, het kussen en het dekbed bepalen net zo goed hoe diep je slaapt.</p>

<p>We begonnen klein, met een zorgvuldig samengesteld assortiment van merken die wij zelf kenden en vertrouwden. Formesse uit het Zwarte Woud, Texeler van de Wadden, Hefel uit Vorarlberg. Merken met een verhaal, met eigen grondstoffen, met ambachtslieden die trots zijn op wat ze maken.</p>

<p>Die aanpak bleek te resoneren. Klanten kwamen niet alleen voor een product, maar ook voor het advies. Wat past bij een warme slaper? Welk hoeslaken houdt het langer vol op een diepe matras? Hoe was je een molton op 60 graden zonder dat hij krimpt? Die gesprekken zijn de kern van wat wij doen.</p>

<p>Vandaag bieden wij een volledige online collectie, maar onze winkel in Haren is de plek waar alles begon. Nog steeds kun je binnenlopen, vragen stellen en de materialen voelen. Want slaapcomfort is iets wat je pas echt begrijpt als je het ervaart.</p>

<p>Rupose is geen massawinkel. We kiezen bewust voor minder merken, maar wel de beste. Voor minder categorieën, maar wel de meest relevante. Voor eerlijk advies, ook als dat betekent dat we je naar een ander product verwijzen dat beter bij je past.</p>
`

export default function OverOnsPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Over Rupose"
        title="Gedreven door slaapkwaliteit"
        intro="Wij zijn een onafhankelijke premium bedtextielspecialist uit Haren. Geen concessies aan kwaliteit, wel eerlijk advies."
        image={`${CDN}/lifestyle/MCD9646-Edit-groot.jpeg`}
        imageAlt="Opgemaakt bed met premium Rupose bedtextiel"
      />
      <ContentSection
        eyebrow="Ons verhaal"
        title="Van Haren naar heel Nederland"
        body={storyBody}
      />
      <FeatureGrid
        eyebrow="Onze waarden"
        title="Wat ons drijft"
        features={values}
        bg="muted"
      />
      <ReviewsCarousel
        eyebrow="Klantervaringen"
        title="Klanten over Rupose"
        reviews={allReviews.slice(0, 6)}
        bg="default"
      />
      <NewsletterCta />
    </main>
  )
}
