import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { ContentSection } from '@/components/blocks/content-section'

export const metadata: Metadata = {
  title: 'Privacyverklaring | Rupose',
  description: 'Lees hoe Rupose omgaat met je persoonsgegevens conform de AVG.',
}

const body = `
<p>Rupose (Rijksstraatweg 167, 9752 BE Haren, KVK: 12345678) verwerkt persoonsgegevens in overeenstemming met de <strong>Algemene Verordening Gegevensbescherming (AVG)</strong>. In deze verklaring leggen wij uit welke gegevens wij verzamelen, waarom, en hoe wij deze beschermen.</p>

<p><strong>Welke gegevens verzamelen wij?</strong></p>
<p>Bij het plaatsen van een bestelling verwerken wij: naam, adres, e-mailadres, telefoonnummer en betaalgegevens. Bij het aanmaken van een account bewaren wij uw inloggegevens (e-mail en gehashed wachtwoord). Bij het bezoeken van onze website verzamelen wij anonieme analytische gegevens (bezoekersstatistieken) via cookieloze analytics.</p>

<p><strong>Waarvoor gebruiken wij uw gegevens?</strong></p>
<p>Uitsluitend voor het verwerken en bezorgen van uw bestelling, het onderhouden van klantencontact, het voldoen aan wettelijke verplichtingen, en het verbeteren van onze website en dienstverlening. Wij verkopen uw gegevens nooit aan derden.</p>

<p><strong>Bewaartermijnen</strong></p>
<p>Bestelgegevens bewaren wij 7 jaar conform de fiscale bewaarplicht. Accountgegevens bewaren wij zolang uw account actief is. Na verwijdering van uw account worden persoonsgegevens binnen 30 dagen verwijderd uit onze systemen.</p>

<p><strong>Uw rechten</strong></p>
<p>U hebt het recht op inzage, rectificatie, verwijdering, beperking van verwerking en dataportabiliteit. Dien uw verzoek in via info@rupose.nl. Wij reageren binnen 30 dagen. U hebt ook het recht een klacht in te dienen bij de <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">Autoriteit Persoonsgegevens</a>.</p>

<p><strong>Cookies</strong></p>
<p>Rupose maakt gebruik van functionele cookies (noodzakelijk voor het winkelproces) en analytische cookies. Voor analytische cookies vragen wij uw toestemming via de cookiebanner. U kunt cookies te allen tijde weigeren of verwijderen via uw browserinstellingen.</p>

<p><strong>Beveiliging</strong></p>
<p>Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies en ongeautoriseerde toegang. Alle communicatie verloopt via HTTPS. Wachtwoorden worden gehasht opgeslagen en zijn niet leesbaar voor medewerkers.</p>

<p>Vragen over deze privacyverklaring? Stuur een e-mail naar info@rupose.nl. Laatste update: januari 2025.</p>
`

export default function PrivacyverklaringPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Juridisch"
        title="Privacyverklaring"
        intro="Hoe Rupose omgaat met jouw persoonsgegevens, conform de AVG."
      />
      <ContentSection body={body} />
    </main>
  )
}
