import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { ContentSection } from '@/components/blocks/content-section'
import { FeatureGrid } from '@/components/blocks/feature-grid'
import { AdviceTeaser } from '@/components/blocks/advice-teaser'
import { CtaBanner } from '@/components/blocks/cta-banner'
import { adviceArticles } from '@/lib/blocks-data'
import { Leaf, Wind, Droplets, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Natuurlijk slapen | Rupose',
  description:
    'Wat betekent natuurlijk slapen? Lees over katoen, wol, TENCEL Lyocell en dons als slaapmateriaal en waarom het uitmaakt wat je gebruikt.',
}

const materials = [
  {
    icon: <Leaf />,
    title: 'TENCEL Lyocell',
    description:
      'Gewonnen uit FSC-gecertificeerd hout via een gesloten waterproces. Zijdezacht, ademend en tot twee keer zo absorberend als katoen. Ideaal voor warme slapers.',
  },
  {
    icon: <Wind />,
    title: 'Ganzendons en veren',
    description:
      'Dons reguleert temperatuur beter dan synthetische vulling. Onze donsproducten zijn gecertificeerd RDS (Responsible Down Standard) of NOMITE voor huisstofmijtallergie.',
  },
  {
    icon: <Droplets />,
    title: 'Jersey en percalkatoen',
    description:
      'Percalkatoen ademt beter bij warme nachten. Jersey strekt mee en voelt soepeler. Beide zijn van 100% OEKO-TEX gecertificeerd katoen, geen synthetische toevoegingen.',
  },
  {
    icon: <Sun />,
    title: 'Texelse schapenwol',
    description:
      'Wol van het Texelse schaap is van nature temperatuurregulerend, vochtafvoerend en antibacterieel. Anders dan merino is Texelse wol grof genoeg om jaren mee te gaan.',
  },
]

const contentBody = `
<p>Veel mensen denken bij bedtextiel alleen aan comfort en kleur. Maar de materialen waarmee je je omringt tijdens het slapen hebben een directe invloed op hoe diep en hoe droog je slaapt. Vochtige nachten, overmatig zweten of juist het gevoel te koud te liggen zijn vaak symptomen van het verkeerde materiaal, niet van de verkeerde temperatuur in je slaapkamer.</p>

<p>Natuurlijke materialen ademen. Ze nemen vocht op en geven het af. Ze passen zich aan aan jouw lichaamstemperatuur. Synthetische alternatieven doen dat structureel minder goed, ook al zijn ze goedkoper of makkelijker te wassen.</p>

<p>Bij Rupose hanteren we een eenvoudig principe: elk product dat wij voeren, is gemaakt van materialen die wij zelf zouden gebruiken. Dat betekent OEKO-TEX gecertificeerd katoen, Europees dons met RDS-certificering, Texelse wol en TENCEL Lyocell van FSC-gecertificeerde bronnen.</p>

<p>Natuurlijk slapen is geen luxe, het is een keuze. En die keuze begint met begrijpen wat er in je beddengoed zit. Onze slaapspecialisten helpen je daarbij, of het nu via onze slaaptips is, via de productbeschrijvingen, of door gewoon te bellen.</p>
`

export default function NatuurlijkSlapenPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Slaapfilosofie"
        title="Waarom materialen ertoe doen"
        intro="Natuurlijke vezels ademen, reguleren temperatuur en gaan langer mee. Ontdek waarom wij nooit kiezen voor synthetisch."
      />
      <ContentSection
        eyebrow="Onze filosofie"
        title="Wat je 's nachts omringt, bepaalt hoe je slaapt"
        body={contentBody}
      />
      <FeatureGrid
        eyebrow="Natuurlijke materialen"
        title="De vezels achter ons assortiment"
        features={materials}
        bg="muted"
      />
      <AdviceTeaser
        eyebrow="Meer lezen"
        title="Gerelateerde slaaptips"
        articles={adviceArticles.slice(0, 3)}
      />
      <CtaBanner
        title="Vragen over materialen?"
        description="Onze specialisten helpen je graag verder. Bel, mail of kom langs in Haren."
        cta={{ label: 'Neem contact op', href: '/contact/' }}
      />
    </main>
  )
}
