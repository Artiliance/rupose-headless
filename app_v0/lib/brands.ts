// lib/brands.ts
// Brand data with stories for brand pages.

const CDN = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images'

export interface BrandVideo {
  type: 'youtube' | 'vimeo'
  id: string
  title: string
}

export interface BrandUsp {
  title: string
  body: string
}

export interface BrandDetail {
  slug: string
  name: string
  fullName: string
  country: string
  logo: string
  heroImage: string
  tagline: string
  intro: string
  story: string[]
  usps: BrandUsp[]
  productSlugs: string[]
  video?: BrandVideo
  videoUrl?: string
}

export const brandDetails: BrandDetail[] = [
  {
    slug: 'formesse',
    name: 'Formesse',
    fullName: 'Formesse GmbH, Bella Donna collectie',
    country: 'Duitsland',
    logo: `${CDN}/brands/Formesse-Logo.png`,
    heroImage: `${CDN}/heroes/Formesse_Bella-Donna-Jersey_Imagebild.jpg`,
    tagline: 'Duits vakmanschap uit het Zwarte Woud',
    intro:
      'Formesse is een Duits familiebedrijf dat al meer dan 30 jaar hoeslakens produceert van uitzonderlijke kwaliteit. Hun bekendste product, de Bella Donna collectie, staat bekend om zijn jersey-weefsel verrijkt met aloë vera.',
    story: [
      'In het hart van het Zwarte Woud, in het zuidwesten van Duitsland, produceert Formesse hoeslakens die wereldwijd worden geprezen om hun kwaliteit en pasvorm. Het bedrijf werd opgericht met de overtuiging dat een goed hoeslaken het fundament is van een goede nachtrust.',
      'De Bella Donna collectie is Formesse\'s vlaggenschip: hoeslakens van jersey-katoen dat is behandeld met aloë vera, waardoor de stof zijdezacht aanvoelt en de huid kalmeert. Het elastische weefsel past zich aan tot 35 cm matrasdikte en blijft strak gespannen, ook na tientallen wassen.',
      'Elke Bella Donna hoeslaken is OEKO-TEX Standard 100 gecertificeerd en wordt geproduceerd volgens de strengste milieunormen. Formesse investeert continu in duurzame productiemethoden en werkt uitsluitend met gecertificeerde leveranciers van ruwe materialen.',
    ],
    usps: [
      {
        title: 'Jersey-katoen met aloë vera',
        body: 'Het speciale jersey-weefsel is behandeld met aloë vera extract voor een merkbaar zachtere aanraking en een kalmerend effect op de huid.',
      },
      {
        title: 'Perfecte pasvorm',
        body: 'Strekt mee tot 35 cm matrasdikte dankzij het elastische jersey-weefsel. Blijft strak gespannen en trekt niet los.',
      },
      {
        title: 'OEKO-TEX Standard 100',
        body: 'Elk garen en elke chemische stof is getest op schadelijke substanties. Veilig voor baby\'s, kinderen en mensen met een gevoelige huid.',
      },
      {
        title: '54 kleuren beschikbaar',
        body: 'Van klassiek wit tot stoer antraciet: Bella Donna is verkrijgbaar in 54 zorgvuldig geselecteerde kleuren voor elk interieur.',
      },
    ],
    productSlugs: ['bella-donna-jersey-hoeslaken'],
  },
  {
    slug: 'texeler',
    name: 'Texeler',
    fullName: 'Texeler, eigen merk van Rupose',
    country: 'Nederland',
    logo: `${CDN}/brands/Texeler-logo.png`,
    heroImage: `${CDN}/heroes/MCD9710-groot.jpeg`,
    tagline: 'Texels schapenwol. Handgemaakt voor de beste nachtrust.',
    intro:
      'Texeler is het eigen merk van Rupose, ontwikkeld op basis van jarenlange ervaring met slaapproducten. Elk kussen wordt gevuld met zorgvuldig geselecteerde Texelse schapenwol en met de hand gemaakt op het eiland Texel.',
    story: [
      'Texel staat bekend om zijn lange kroezende schapenwol, een van de meest bijzondere wol-soorten ter wereld. De wol van Texelse schapen heeft een unieke vezelstructuur: lang, luchtig en krachtig veerkrachtig, waardoor het ideaal is voor slaapproducten.',
      'Wij ontwikkelden Texeler met de overtuiging dat de beste hoofdkussens dicht bij huis gemaakt worden. De wol wordt geselecteerd op vezeldikte en kroeskracht, gewassen met zachte biologische middelen en vervolgens met de hand in biologisch katoenen tijken gestopt.',
      'Schapenwol reguleert van nature vocht en temperatuur. In de winter houdt het warm, in de zomer ademt het mee. Dat maakt Texeler-kussens geschikt voor het hele jaar, zonder te zweten of te rillen.',
    ],
    usps: [
      {
        title: 'Lang kroezende Texelse schapenwol',
        body: 'Alleen wol met de juiste vezellengte en -dikte wordt geselecteerd. Dit garandeert een optimale veerkracht en vulling die jaren meegaat.',
      },
      {
        title: 'Handgemaakt op Texel',
        body: 'Elk kussen wordt met de hand gevuld en genaaid in onze werkplaats op Texel. Geen lopende band, maar ambachtelijke aandacht voor elk product.',
      },
      {
        title: 'Biologisch katoenen tijk (GOTS)',
        body: 'De buitenstof is gemaakt van biologisch gecertificeerd katoen, vrij van pesticiden en synthetische kleurstoffen.',
      },
      {
        title: 'Temperatuurregeling het hele jaar',
        body: 'Schapenwol ademt mee met je lichaamstemperatuur. Warm genoeg in de winter, fris genoeg in de zomer. Ideaal voor alle slapers.',
      },
    ],
    productSlugs: ['texeler-bovenste-beste-hoofdkussen'],
    video: { type: 'youtube', id: 'Q1thYlrsrbU', title: 'Over Texeler' },
    videoUrl: 'https://www.youtube.com/watch?v=Q1thYlrsrbU',
  },
  {
    slug: 'hefel',
    name: 'Hefel',
    fullName: 'Hefel Textil GmbH',
    country: 'Oostenrijk',
    logo: `${CDN}/brands/Hefel-logo.png`,
    heroImage: `${CDN}/heroes/MCD9691-groot.jpeg`,
    tagline: 'Oostenrijkse precisie voor een beter slaapklimaat',
    intro:
      'Hefel is een Oostenrijks textielbedrijf dat al generaties lang topdekmatrassen en slaapproducten maakt van biologisch gecertificeerde materialen. Kwaliteit boven kwantiteit is het motto.',
    story: [
      'In de Tiroolse Alpen, omringd door natuur en rust, produceert Hefel slaaptextiel dat je het gevoel geeft alsof je in een Alpien berghotel slaapt. Het bedrijf heeft een lange traditie in het verwerken van zuivere natuurlijke materialen: katoen, wol, zijde en bamboe.',
      'Elk Hefel-product wordt gemaakt met aandacht voor duurzaamheid. De biologische materialen zijn GOTS-gecertificeerd, de productieprocessen zijn energiezuinig en het bedrijf werkt continu aan het verkleinen van zijn ecologische voetafdruk.',
      'De topdekmatrassen van Hefel zijn vervaardigd uit biologisch katoenvezels die zorgen voor een warm, ademend slaapklimaat. De quilted tijk voorkomt verschuiven van de vulling en geeft een hotelachtig gevoel van luxe.',
    ],
    usps: [
      {
        title: 'GOTS-gecertificeerd biologisch katoen',
        body: 'Alle vezels zijn gecertificeerd biologisch, vrij van schadelijke chemicaliën en geproduceerd met respect voor mens en milieu.',
      },
      {
        title: 'Made in Austria',
        body: 'Hefel produceert alles in eigen fabrieken in Oostenrijk. Korte ketens, transparante productie en Europese kwaliteitsnormen.',
      },
      {
        title: 'Quilted constructie',
        body: 'De gestepte constructie verdeelt de vulling gelijkmatig en voorkomt samenpakken. Blijft de hele nacht gelijkmatig warm.',
      },
      {
        title: 'Wasbaar op 60 graden',
        body: 'Voor optimale hygiëne is het topdekmatras wasbaar op 60 graden, ook na tientallen wassen behoudt het zijn vorm en vulling.',
      },
    ],
    productSlugs: ['hefel-pure-cotton-topdekmatras'],
    video: { type: 'youtube', id: 'pxVNNjDl46E', title: 'Over Hefel' },
    videoUrl: 'https://www.youtube.com/watch?v=pxVNNjDl46E',
  },
  {
    slug: 'ecolife',
    name: 'Ecolife',
    fullName: 'Ecolife Bedding',
    country: 'Europa',
    logo: `${CDN}/brands/Ecolife-Logo.png`,
    heroImage: `${CDN}/heroes/MCD9695-groot.jpeg`,
    tagline: 'Duurzaam slapen zonder compromis op comfort',
    intro:
      'Ecolife maakt slaapproducten van gecertificeerde natuurlijke en gerecyclede materialen. Het merk bewijst dat duurzaamheid en slaapcomfort hand in hand gaan.',
    story: [
      'Ecolife werd opgericht met een eenvoudige vraag: kan je een perfect slaapproduct maken zonder de planeet te belasten? Het antwoord bleek ja, mits je de juiste materialen kiest en de productie eerlijk organiseert.',
      'Het merk werkt uitsluitend met gerecyclede of gecertificeerde biologische grondstoffen. De vullingen zijn gemaakt van GOTS-wol of gerecyclede PET-vezels die dezelfde veerkracht bieden als synthetisch, maar met een fractie van de milieubelasting.',
      'Ecolife gelooft in transparantie: elk product bevat een kaartje met de exacte herkomst van de gebruikte materialen en de certificeringen. Zo weet je precies waarvoor je betaalt.',
    ],
    usps: [
      {
        title: 'Gerecyclede en biologische materialen',
        body: 'Van gerecyclede PET-flessen tot GOTS-biologisch wol: Ecolife kiest altijd de meest duurzame optie zonder in te boeten op comfort.',
      },
      {
        title: 'Transparante keten',
        body: 'Elk product bevat volledige herkomstinformatie. Van grondstof tot eindproduct, je weet precies hoe en waar het gemaakt is.',
      },
      {
        title: 'CO2-neutraal transport',
        body: 'Alle leveringen worden gecompenseerd via gecertificeerde klimaatprojecten. Ecolife streeft naar een volledig klimaatneutrale footprint.',
      },
      {
        title: 'Langere levensduur',
        body: 'Duurzaam geproduceerd betekent ook duurzame kwaliteit. Ecolife-producten gaan aanzienlijk langer mee dan gemiddelde slaapproducten.',
      },
    ],
    productSlugs: [],
    video: { type: 'vimeo', id: '1186255548', title: 'Over Ecolife' },
    videoUrl: 'https://vimeo.com/1186255548',
  },
  {
    slug: 'homan',
    name: 'Homan',
    fullName: 'Homan Slapen',
    country: 'Nederland',
    logo: `${CDN}/brands/homan-logo.svg`,
    heroImage: `${CDN}/heroes/MCD9628-groot.jpeg`,
    tagline: 'Vakman in slaapcomfort uit Groningen',
    intro:
      'Homan Slapen is een Nederlands slaapspecialist met decennia van vakkennis. Hun producten zijn opgebouwd op basis van klantfeedback en slaaponderzoek, niet op modetrends.',
    story: [
      'Homan Slapen heeft zijn wortels in Groningen, waar het bedrijf begon als matrasmaker. Door de jaren heen groeide het uit tot een veelzijdige specialist in slaapcomfort met een breed assortiment van kussens, moltons en dekbedden.',
      'Wat Homan onderscheidt is de combinatie van vakkennis en praktische benadering. Elk product is ontwikkeld op basis van feedback van echte slapers, niet op basis van marketingtrends. Als iets niet werkt voor de klant, wordt het aangepast.',
      'Homan werkt samen met Rupose om hun producten beschikbaar te maken voor een breder publiek. De samenwerking is gebaseerd op gedeelde waarden: eerlijkheid, kwaliteit en een oprechte passie voor betere slaap.',
    ],
    usps: [
      {
        title: 'Vakkennis van generatie op generatie',
        body: 'Decennia aan ervaring in de slaapbranche gaan schuil achter elk Homan-product. Geen experimentele concepten, maar bewezen kwaliteit.',
      },
      {
        title: 'Ontwikkeld met echte slapers',
        body: 'Klantfeedback en slaaponderzoek zijn de basis voor productverbetering. Elk nieuw product wordt uitgebreid getest voor introductie.',
      },
      {
        title: 'Nederlands vakmanschap',
        body: 'Geproduceerd in Nederland, met aandacht voor lokale kwaliteitsnormen en korte productieketens.',
      },
      {
        title: 'Eerlijke prijsstelling',
        body: 'Homan gelooft in transparante prijzen zonder opgeblazen marges. Je betaalt voor kwaliteit, niet voor een logo.',
      },
    ],
    productSlugs: [],
  },
]

export function getBrandBySlug(slug: string): BrandDetail | undefined {
  return brandDetails.find((b) => b.slug === slug)
}

export function getBrandByName(name: string): BrandDetail | undefined {
  const lower = name.toLowerCase()
  return brandDetails.find((b) => b.name.toLowerCase() === lower)
}
