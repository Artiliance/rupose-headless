import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { ContentSection } from '@/components/blocks/content-section'
import { FeatureGrid } from '@/components/blocks/feature-grid'
import { ProductCarousel } from '@/components/blocks/product-carousel'
import { CtaBanner } from '@/components/blocks/cta-banner'
import { featuredProducts } from '@/lib/blocks-data'
import { Zap, Layers, Thermometer, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Slaapinnovaties | Rupose',
  description:
    'Ontdek de innovaties achter ons assortiment: Bella Donna Jersey, Hefel Pure Cotton, TENCEL Lyocell en PCM-temperatuurregeling.',
}

const innovations = [
  {
    icon: Layers,
    title: 'Bella Donna Jersey stretch',
    description:
      'Formesse ontwikkelde een jersey-katoen met unieke 4-weg stretch. Het hoeslaken past op matrassen van 7 tot 35 cm dik, trekt strak en laat nooit los. Beschikbaar in 54 kleuren.',
  },
  {
    icon: Thermometer,
    title: 'PCM temperatuurregeling',
    description:
      'Phase Change Material (PCM) absorbeert overtollige lichaamswarmte en geeft die terug als je afkoelt. Het resultaat: een constante slaaptemperatuur de hele nacht.',
  },
  {
    icon: RefreshCw,
    title: 'Hefel Pure Cotton',
    description:
      'Hefel maakte een dekbedvulling van 100% percalkatoen dat dezelfde thermische eigenschappen heeft als dons. Geschikt voor donskussenslopers en wasbaar op 60 graden.',
  },
  {
    icon: Zap,
    title: 'TENCEL Lyocell vezel',
    description:
      'TENCEL Lyocell wordt gewonnen via een gesloten waterproces uit FSC-gecertificeerd hout. De vezel is 50% zachter dan katoen, neemt vocht sneller op en droogt sneller.',
  },
]

const contentBody = `
<p>Bedtextiel lijkt een conservatieve categorie. Katoen bestaat al eeuwen, dons ook. Maar in de materiaalwetenschap is de afgelopen twee decennia meer veranderd dan in de honderd jaar daarvoor. Bij Rupose volgen we die ontwikkelingen actief en vertalen we ze naar ons assortiment.</p>

<p>Een van de opvallendste innovaties is de 4-weg stretch van Formesse. Het klinkt technisch, maar het effect is simpel: een hoeslaken dat altijd strak blijft zitten, ook op een matras van 30 centimeter dik. De stretch werkt in alle richtingen en herstelt direct. Na honderd wassen nog steeds.</p>

<p>PCM-technologie is een andere innovatie die we serieus nemen. Microkapsulen gevuld met een faseovergangsmateriaal worden in de vezels verwerkt. Bij lichaamstemperatuur absorbeert het overtollige warmte. Zodra je afkoelt, geeft het die warmte weer terug. Het is een actief systeem dat temperatuurpieken afvlakt en daarmee diepe slaap bevordert.</p>

<p>Wij zijn geen laboratorium en we doen geen wetenschappelijk onderzoek. Maar we volgen de literatuur en testen producten uitvoerig voordat ze in ons assortiment verschijnen. Als een innovatie niet in de praktijk werkt, zul je het bij ons niet vinden.</p>
`

export default function SlaapinnovatiesPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Slaaptechnologie"
        title="Innovaties die je slaap verbeteren"
        intro="Van PCM-temperatuurregeling tot 4-weg stretch jersey. Ontdek welke materiaalontwikkelingen wij serieus nemen."
      />
      <ContentSection
        eyebrow="Achtergrond"
        title="Wat wij verstaan onder slaapinnovatie"
        body={contentBody}
      />
      <FeatureGrid
        eyebrow="Vier innovaties"
        title="Technologie in ons assortiment"
        features={innovations}
        bg="muted"
      />
      <ProductCarousel
        eyebrow="Vernieuwend assortiment"
        title="Producten met innovatieve eigenschappen"
        products={featuredProducts}
        cta={{ label: 'Bekijk alle producten', href: '/winkel/' }}
      />
      <CtaBanner
        title="Meer weten over een specifiek product?"
        description="Onze specialisten leggen het je graag uit. Neem contact op of bekijk onze slaaptips."
        cta={{ label: 'Neem contact op', href: '/contact/' }}
        secondaryCta={{ label: 'Lees slaapadvies', href: '/slaapadvies/' }}
      />
    </main>
  )
}
