import type { Metadata } from 'next'
import { PageHeader } from '@/components/blocks/page-header'
import { FeatureGrid } from '@/components/blocks/feature-grid'
import { ContentSection } from '@/components/blocks/content-section'
import { AdviceTeaser } from '@/components/blocks/advice-teaser'
import { CtaBanner } from '@/components/blocks/cta-banner'
import { adviceArticles } from '@/lib/blocks-data'

export const metadata: Metadata = {
  title: 'Slaapadvies | Rupose',
  description:
    'Eerlijk slaapadvies van Rupose: matras-keuze, kussen-keuze, dekbed-keuze en meer. Praktische gidsen voor een betere nachtrust.',
}

const topics = [
  {
    title: 'Welk hoofdkussen kies je?',
    body: 'Rugslaper, zijslaper of buikslaper: je slaaphouding bepaalt welk kussen bij je past. Wol, dons of synthetisch, wij leggen de verschillen uit.',
  },
  {
    title: 'Dekbed warmteklassen',
    body: 'Van zomers licht tot winters warm: warmteklasse 1 t/m 4 uitgelegd. Inclusief advies op basis van jouw lichaamstemperatuur en slaapkamerafmeting.',
  },
  {
    title: 'Jersey vs percal hoeslaken',
    body: 'Jersey strekt mee, percal ademt beter. Beide zijn katoen, maar ze voelen heel anders. Ontdek welk weefsel het best bij jou past.',
  },
  {
    title: 'Maattabel hoeslakens',
    body: 'Een hoeslaken van de verkeerde maat trekt continu los. Gebruik onze maatgids om de perfecte pasvorm te vinden, ook voor dikke matrassen en boxsprings.',
  },
]

const pillarContent = `Slaap neemt een derde van ons leven in beslag, maar krijgt zelden de aandacht die het verdient. Bij Rupose geloven we dat een goede nachtrust begint met de juiste keuzes: het juiste materiaal, de juiste maat, de juiste vulling.

**Waarom eerlijk slaapadvies?**

De slaapmarkt staat vol met claims en trends. Bamboe, copper-ion, anti-allergie, klimaatneutraal: elk seizoen een nieuw wonderproduct. Wij snijden door de marketingtaal heen en geven je eerlijke, op feiten gebaseerde informatie.

**Wat we behandelen**

In onze slaapadvies-artikelen bespreken we de meest gestelde vragen: welk dekbed past bij welk seizoen, hoe kies je een hoofdkussen op basis van je slaaphouding, wat is het verschil tussen jersey en percal, en waarom is een molton eigenlijk geen overbodige luxe.

**Persoonlijk advies**

Kom je er met onze artikelen niet uit? Onze slaapspecialisten staan klaar voor persoonlijk advies. Bel ons op +31 50 534 4235 of stuur een e-mail naar info@rupose.nl. We helpen je graag de juiste keuze te maken, zonder verkooppraatje.

Goede slaap begint bij de juiste informatie. En die geven we je graag.`

export default function SlaapadviesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Kennis & advies"
        title="Slaapadvies"
        intro="Eerlijk slaapadvies van Rupose. Geen marketingtaal, wel praktische kennis waarmee je bewuste keuzes maakt."
        breadcrumbs={[{ label: 'Slaapadvies' }]}
      />

      <FeatureGrid
        eyebrow="Populaire onderwerpen"
        title="Waar wil je meer over weten?"
        features={topics}
        cols={4}
        bg="muted"
      />

      <ContentSection body={pillarContent} prose />

      <AdviceTeaser
        eyebrow="Alle artikelen"
        title="Slaaptips van Rupose"
        articles={adviceArticles}
        cta={undefined}
        bg="default"
      />

      <CtaBanner
        eyebrow="Persoonlijk advies"
        title="Hulp nodig? Bel of mail ons"
        description="Onze slaapspecialisten beantwoorden al je vragen. Geen verkooppraatje, wel eerlijk advies."
        cta={{ label: 'Neem contact op', href: '/contact/' }}
        bg="sand"
      />
    </main>
  )
}
