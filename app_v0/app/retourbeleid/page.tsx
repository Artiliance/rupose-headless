import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { ContentSection } from '@/components/blocks/content-section'
import { CtaBanner } from '@/components/blocks/cta-banner'

export const metadata: Metadata = {
  title: 'Retourbeleid | Rupose',
  description: 'Lees het retourbeleid van Rupose. Producten retourneren binnen 30 dagen, ongebruikt en in originele verpakking.',
}

const body = `
<p>Bij Rupose kun je producten binnen <strong>30 dagen na ontvangst</strong> retourneren, mits ze ongewassen, ongebruikt en in de originele verpakking verkeren. Zo zorgen we ervoor dat alle klanten producten ontvangen in perfecte staat.</p>

<p><strong>Hoe werkt retourneren?</strong></p>
<p>Stuur een e-mail naar info@rupose.nl met je ordernummer en de reden van retour. Wij sturen je een retourinstructie met het juiste retouradres. Verpak het product zorgvuldig, inclusief het originele etiket. De retourkosten zijn voor jouw rekening, tenzij er sprake is van een fout van onze kant of een defect product.</p>

<p><strong>Terugbetaling</strong></p>
<p>Na ontvangst en controle van de retour ontvang je binnen 5 werkdagen je betaling terug via de oorspronkelijke betaalmethode. Bij iDEAL-betalingen verloopt terugbetaling via bankoverschrijving.</p>

<p><strong>Uitzondering: maatwerk en hygiëneproducten</strong></p>
<p>Op maat gemaakte producten en producten waarbij de hygiëneverpakking is verbroken (zoals kussens zonder originele folie) kunnen niet worden geretourneerd, tenzij er sprake is van een fabricagefout.</p>

<p>Heb je vragen over een retour? Neem gerust contact op via info@rupose.nl of bel +31 50 534 4235.</p>
`

export default function RetourbeleidPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Klantenservice"
        title="Retourbeleid"
        intro="Producten retourneren binnen 30 dagen. Lees hieronder hoe het werkt."
      />
      <ContentSection body={body} />
      <CtaBanner
        bg="sand"
        title="Vragen over je retour?"
        description="Neem contact op en we helpen je verder."
        cta={{ label: 'Contact opnemen', href: '/contact/' }}
      />
    </main>
  )
}
