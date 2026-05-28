import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { ContentSection } from '@/components/blocks/content-section'
import { FaqAccordion } from '@/components/blocks/faq-accordion'

export const metadata: Metadata = {
  title: 'Levertijd en verzendkosten | Rupose',
  description: 'Bekijk de verzendkosten en levertijden van Rupose. Gratis verzending vanaf \u20AC75.',
}

const body = `
<p>Rupose verstuurt bestellingen via <strong>PostNL</strong> met track-and-trace. Zodra je bestelling is verzonden, ontvang je een e-mail met de traceercode.</p>

<p><strong>Levertijden</strong></p>
<p>Bestellingen geplaatst voor <strong>15:00 op werkdagen</strong> worden de volgende werkdag verstuurd. De gemiddelde bezorgtijd is <strong>2 tot 3 werkdagen</strong>. Rond feestdagen en drukte kan de levertijd iets langer zijn. Bij leveringen naar Belgi\u00eb en Duitsland rekenen we 3 tot 5 werkdagen.</p>

<p><strong>Verzendkosten</strong></p>
<ul>
  <li>Nederland: <strong>Gratis</strong> bij bestellingen vanaf \u20AC75</li>
  <li>Nederland: <strong>\u20AC5,95</strong> bij bestellingen onder de \u20AC75</li>
  <li>Belgi\u00eb: <strong>\u20AC9,95</strong> per bestelling</li>
  <li>Duitsland: <strong>\u20AC12,50</strong> per bestelling</li>
  <li>Overige EU: op aanvraag</li>
</ul>

<p>Grote of zware bestellingen (zoals meerdere topmatrassen) kunnen afwijkende verzendkosten hebben. Wij informeren je hierover voor verzending.</p>
`

const verzendingFaqs = [
  {
    question: 'Kan ik mijn bestelling ook afhalen?',
    answer: 'Ja, je kunt je bestelling afhalen in onze winkel in Haren (Rijksstraatweg 167). Neem contact op om een afhaaltijd af te spreken.',
  },
  {
    question: 'Wat als ik niet thuis ben bij bezorging?',
    answer: 'PostNL biedt de mogelijkheid om je pakket bij een buurman of in een afhaalpunt te laten bezorgen. Dit regel je zelf via de bezorgmail van PostNL.',
  },
  {
    question: 'Kan ik een bezorgdatum kiezen?',
    answer: 'Wij bieden op dit moment geen keuze voor een specifieke bezorgdatum. Wel kun je via PostNL na het versturen de bezorging bijsturen via hun app of website.',
  },
  {
    question: 'Wat als mijn pakket beschadigd aankomt?',
    answer: 'Neem direct contact met ons op via info@rupose.nl en stuur een foto van de beschadiging mee. Wij lossen dit snel op, hetzij met een vervangend product of terugbetaling.',
  },
  {
    question: 'Wordt mijn bestelling in \u00e9\u00e9n pakket verstuurd?',
    answer: 'In de meeste gevallen ja. Bij grote bestellingen kan het voorkomen dat we in meerdere pakketten versturen. Je ontvangt dan meerdere trackcodes.',
  },
]

export default function LevertijdEnVerzendkostenPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Klantenservice"
        title="Levertijd en verzendkosten"
        intro="Gratis verzending vanaf \u20AC75. Bezorging via PostNL met track-and-trace."
      />
      <ContentSection body={body} />
      <FaqAccordion
        eyebrow="Vragen over verzending"
        title="Veel gestelde vragen"
        items={verzendingFaqs}
        bg="muted"
      />
    </main>
  )
}
