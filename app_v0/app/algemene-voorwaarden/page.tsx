import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { ContentSection } from '@/components/blocks/content-section'

export const metadata: Metadata = {
  title: 'Algemene voorwaarden | Rupose',
  description: 'De algemene voorwaarden van Rupose, van toepassing op alle bestellingen en dienstverlening.',
}

const body = `
<p>Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, bestellingen en overeenkomsten van Rupose (Rijksstraatweg 167, 9752 BE Haren, KVK: 12345678, BTW: NL123456789B01).</p>

<p><strong>Artikel 1 &mdash; Definities</strong></p>
<p>Rupose: de eenmanszaak/BV onder de naam Rupose, ingeschreven bij de Kamer van Koophandel. Klant: iedere natuurlijke of rechtspersoon die een overeenkomst sluit met Rupose. Overeenkomst: de koopovereenkomst die tot stand komt na acceptatie van een bestelling door Rupose.</p>

<p><strong>Artikel 2 &mdash; Totstandkoming overeenkomst</strong></p>
<p>Een overeenkomst komt tot stand op het moment dat Rupose de bestelling bevestigt via e-mail. Rupose behoudt het recht een bestelling te weigeren zonder opgave van redenen, bijvoorbeeld bij vermoedens van fraude of onvolledige betaalgegevens.</p>

<p><strong>Artikel 3 &mdash; Prijzen en betaling</strong></p>
<p>Alle prijzen zijn inclusief 21% BTW, tenzij anders vermeld. Rupose behoudt zich het recht voor prijzen te wijzigen. Voor lopende bestellingen gelden de prijzen zoals weergegeven op het moment van bestelling. Betaling dient te geschieden bij het plaatsen van de bestelling.</p>

<p><strong>Artikel 4 &mdash; Levering</strong></p>
<p>Rupose streeft naar levering binnen de op de website vermelde termijnen. Bij overschrijding van de levertijd heeft de klant het recht de overeenkomst kosteloos te ontbinden. Rupose is niet aansprakelijk voor vertragingen door externe factoren zoals bezorgproblemen van PostNL.</p>

<p><strong>Artikel 5 &mdash; Herroepingsrecht</strong></p>
<p>Consumenten hebben het recht om binnen 14 dagen na ontvangst de overeenkomst te herroepen zonder opgave van redenen. Het product dient ongebruikt en in originele staat te worden teruggestuurd. Retourkosten zijn voor rekening van de klant, tenzij het product defect is.</p>

<p><strong>Artikel 6 &mdash; Garantie</strong></p>
<p>Op alle producten geldt de wettelijke garantietermijn van 2 jaar. Zie onze garantiepagina voor volledige informatie over de garantievoorwaarden en procedure.</p>

<p><strong>Artikel 7 &mdash; Aansprakelijkheid</strong></p>
<p>Rupose is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst. De aansprakelijkheid is beperkt tot het factuurbedrag van de betreffende bestelling.</p>

<p><strong>Artikel 8 &mdash; Toepasselijk recht</strong></p>
<p>Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Noord-Nederland, tenzij partijen kiezen voor bemiddeling.</p>

<p>Versie: januari 2025. Rupose behoudt zich het recht voor deze voorwaarden te wijzigen. De meest recente versie is altijd te vinden op rupose.nl/algemene-voorwaarden.</p>
`

export default function AlgemeneVoorwaardenPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Juridisch"
        title="Algemene voorwaarden"
        intro="Van toepassing op alle bestellingen en dienstverlening van Rupose."
      />
      <ContentSection body={body} />
    </main>
  )
}
