import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { ContentSection } from '@/components/blocks/content-section'
import { CtaBanner } from '@/components/blocks/cta-banner'

export const metadata: Metadata = {
  title: 'Garantie en klachten | Rupose',
  description: 'Lees over de garantietermijnen bij Rupose en hoe je een klacht indient.',
}

const body = `
<p>Op alle producten van Rupose geldt de <strong>wettelijke garantie van 2 jaar</strong>. Dit betekent dat je recht hebt op herstel, vervanging of terugbetaling als een product niet voldoet aan de koopovereenkomst door een fabricagefout of materiaalgebrek.</p>

<p><strong>Wat valt onder garantie?</strong></p>
<p>Materiaalgebreken zoals loszittende naden, defecte elastieken, scheuren in het weefsel of kleurverlies door normaal gebruik. Ook productiefouten die direct bij ontvangst zichtbaar zijn, vallen onder garantie.</p>

<p><strong>Wat valt niet onder garantie?</strong></p>
<p>Slijtage door normaal gebruik, schade door onjuist wassen (te hoge temperatuur, onjuist gebruik van de droger), vlekken of beschadigingen veroorzaakt door de gebruiker.</p>

<p><strong>Een klacht indienen</strong></p>
<p>Stuur een e-mail naar info@rupose.nl met je ordernummer, een beschrijving van het probleem en indien mogelijk een foto. Wij reageren binnen 2 werkdagen met een oplossing. Bij gegronde klachten bieden wij herstel, vervanging of terugbetaling aan.</p>

<p>We nemen elke klacht serieus. Kom je er niet uit met onze klantenservice? Dan kun je een klacht indienen via het <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ODR-platform van de Europese Commissie</a>.</p>
`

export default function GarantieEnKlachtenPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Klantenservice"
        title="Garantie en klachten"
        intro="Op alle producten geldt 2 jaar wettelijke garantie. Klacht of defect? We lossen het op."
      />
      <ContentSection body={body} />
      <CtaBanner
        bg="sand"
        title="Klacht of defect product?"
        description="Neem contact op met onze klantenservice. We reageren binnen 2 werkdagen."
        cta={{ label: 'Contact opnemen', href: '/contact/' }}
      />
    </main>
  )
}
