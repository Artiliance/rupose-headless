import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { FaqAccordion } from '@/components/blocks/faq-accordion'
import { CtaBanner } from '@/components/blocks/cta-banner'

export const metadata: Metadata = {
  title: 'Veelgestelde vragen | Rupose',
  description: 'Antwoorden op de meest gestelde vragen over verzending, retour, betaling, garantie en producten.',
}

const faqItems = [
  {
    question: 'Wanneer wordt mijn bestelling bezorgd?',
    answer:
      'Bestellingen geplaatst voor 15:00 op werkdagen worden de volgende werkdag bezorgd. Gemiddeld ontvang je je pakket binnen 2 tot 3 werkdagen na bestelling. Bij grotere bestellingen of drukte rondom feestdagen kan de levertijd iets langer zijn.',
  },
  {
    question: 'Wat zijn de verzendkosten?',
    answer:
      'Verzending is gratis bij bestellingen vanaf \u20AC75. Bij bestellingen onder de \u20AC75 rekenen wij \u20AC5,95 verzendkosten. We versturen via PostNL met track-and-trace.',
  },
  {
    question: 'Hoe retourneer ik een product?',
    answer:
      'Je kunt producten binnen 30 dagen na ontvangst retourneren, mits ongewassen, ongebruikt en in originele verpakking. Neem contact met ons op via info@rupose.nl of bel +31 50 534 4235 om een retour aan te melden. De retourkosten zijn voor rekening van de klant, tenzij sprake is van een fout van onze kant.',
  },
  {
    question: 'Kan ik een product omruilen voor een andere maat of kleur?',
    answer:
      'Ja, omruilen is mogelijk binnen 30 dagen. Stuur het product terug en geef bij je retour aan waarvoor je wilt omruilen. Na ontvangst en controle sturen wij het nieuwe product zo snel mogelijk op.',
  },
  {
    question: 'Welke betaalmethoden accepteren jullie?',
    answer:
      'We accepteren iDEAL, Mastercard, Visa, Maestro en achteraf betalen via Klarna (onder voorbehoud van goedkeuring). Alle transacties verlopen via een beveiligde verbinding (SSL/TLS).',
  },
  {
    question: 'Wat is de garantietermijn op jullie producten?',
    answer:
      'Op alle producten geldt de wettelijke garantie van 2 jaar. Bij productiefoutjes of materiaalgebreken lossen wij dit altijd op, ook buiten de garantietermijn als het redelijk is. Neem contact met ons op met een foto van het defect.',
  },
  {
    question: 'Op welke temperatuur was ik een hoeslaken of molton?',
    answer:
      'Jersey hoeslakens was je op 40 graden, percalkatoen op 60 graden. Moltons van Tencel en katoen zijn veelal wasbaar op 60 graden. Check altijd het wasetiket voor specifieke instructies. Gebruik geen wasverzachter bij producten met elastiek.',
  },
  {
    question: 'Leveren jullie ook buiten Nederland?',
    answer:
      'Ja, we leveren naar Belgi\u00eb, Duitsland en andere EU-landen. De verzendkosten en levertijden verschillen per land. Neem contact op voor een offerte bij grotere of internationale bestellingen.',
  },
  {
    question: 'Hoe kan ik jullie bereiken voor persoonlijk advies?',
    answer:
      'Bel ons op +31 50 534 4235 (ma t/m za, 09:00\u201317:30) of stuur een e-mail naar info@rupose.nl. Wij reageren doorgaans binnen 1 werkdag. Je kunt ook langskomen in onze winkel in Haren (op afspraak aanbevolen).',
  },
  {
    question: 'Kan ik mijn account verwijderen?',
    answer:
      'Ja, je kunt een verzoek tot verwijdering van je account en bijbehorende gegevens indienen via info@rupose.nl. We verwerken dit verzoek binnen 5 werkdagen conform de AVG.',
  },
]

export default function FaqPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Klantenservice"
        title="Veelgestelde vragen"
        intro="Vind hier antwoord op de meest gestelde vragen. Staat jouw vraag er niet bij? Neem dan direct contact met ons op."
      />
      <FaqAccordion items={faqItems} />
      <CtaBanner
        bg="sand"
        title="Staat je vraag er niet bij?"
        description="Bel, mail of kom langs. Wij helpen je graag persoonlijk verder."
        cta={{ label: 'Neem contact op', href: '/contact/' }}
      />
    </main>
  )
}
