// lib/blocks-data.ts
// Shared data for reusable blocks across all pages.
// All images via jsDelivr CDN (no GitHub raw CSP block).

const CDN = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images'

export interface Category {
  name: string
  slug: string
  count: number
  image: string
  intro: string
  seoText?: string
}

export const categories: Category[] = [
  {
    name: 'Hoeslakens',
    slug: 'hoeslakens',
    count: 1,
    image: `${CDN}/heroes/Formesse_Bella-Donna-Jersey_Stapel-scaled.jpg`,
    intro:
      'Een goed hoeslaken trekt strak, past op elk matras en voelt zacht aan de huid. Ontdek ons aanbod jersey- en percalhoeslakens in 54 kleuren.',
  },
  {
    name: 'Dekbedden',
    slug: 'dekbedden',
    count: 3,
    image: `${CDN}/lifestyle/MCD9646-Edit-groot.jpeg`,
    intro:
      'Van zomers dons tot warme wintervulling: onze dekbedden zijn gevuld met geselecteerde natuurlijke materialen voor de beste nachtrust.',
  },
  {
    name: 'Hoofdkussens',
    slug: 'hoofdkussens',
    count: 4,
    image: `${CDN}/heroes/MCD9710-groot.jpeg`,
    intro:
      'Het juiste hoofdkussen ondersteunt je nek en past bij jouw slaaphouding. Wol, dons of synthetisch: wij helpen je kiezen.',
  },
  {
    name: 'Topmatrassen',
    slug: 'topdekmatras',
    count: 3,
    image: `${CDN}/heroes/MCD9695-groot.jpeg`,
    intro:
      'Een topmatras geeft direct extra comfort en verlengt de levensduur van je matras. Kies op basis van vulling, dikte en jouw slaapklimaat.',
  },
  {
    name: 'Kussenslopen',
    slug: 'kussenslopen',
    count: 1,
    image: `${CDN}/products/bella-donna-clima-kussensloop.webp`,
    intro:
      'Zachte kussenslopen in percal of jersey, passend bij je hoeslaken. Verkrijgbaar in dezelfde kleurenpallet als de Bella Donna collectie.',
  },
  {
    name: 'Molton & beschermers',
    slug: 'moltons',
    count: 3,
    image: `${CDN}/heroes/MCD9716-groot.jpeg`,
    intro:
      'Een molton beschermt je matras tegen vocht en slijtage zonder het slaapcomfort te beïnvloeden. Met of zonder PCM-temperatuurregeling.',
  },
  {
    name: 'Dekbedovertrekken',
    slug: 'dekbedovertrekken',
    count: 3,
    image: `${CDN}/heroes/MCD9691-groot.jpeg`,
    intro:
      'Dekbedovertrekken en -sets in percal en satijn, in een breed kleurenpalet. Zacht, ademend en strak van pasvorm.',
  },
  {
    name: 'Badtextiel',
    slug: 'badtextiel',
    count: 3,
    image: `${CDN}/heroes/MCD9691-groot.jpeg`,
    intro:
      'Handdoeken, badlakens en douchelakens van absorberend katoen, afgestemd op de slaapkamercollectie.',
  },
]

export interface Brand {
  name: string
  slug: string
  logo: string
  tagline: string
  featured?: boolean
}

export const brands: Brand[] = [
  {
    name: 'Formesse (Bella Donna)',
    slug: 'formesse',
    logo: `${CDN}/brands/Formesse-Logo.png`,
    tagline: 'Duits vakmanschap uit het Zwarte Woud',
  },
  {
    name: 'Texeler',
    slug: 'texeler',
    logo: `${CDN}/brands/Texeler-logo.png`,
    tagline: 'Eigen merk. Texels schapenwol.',
    featured: true,
  },
  {
    name: 'Hefel',
    slug: 'hefel',
    logo: `${CDN}/brands/Hefel-logo.png`,
    tagline: 'Oostenrijkse kwaliteit',
  },
  {
    name: 'Ecolife',
    slug: 'ecolife',
    logo: `${CDN}/brands/Ecolife-Logo.png`,
    tagline: 'Natuurlijk en duurzaam',
  },
  {
    name: 'Homan Slapen',
    slug: 'homan',
    logo: `${CDN}/brands/homan-logo.svg`,
    tagline: 'Vakman in slaapcomfort',
  },
]

export interface FeaturedProduct {
  name: string
  slug: string
  category: string
  price: string
  image: string
  shortDesc: string
}

export const featuredProducts: FeaturedProduct[] = [
  {
    name: 'Bella Donna Jersey hoeslaken',
    slug: 'bella-donna-jersey-hoeslaken',
    category: 'hoeslakens',
    price: '64.95',
    image: `${CDN}/heroes/Formesse_Bella-Donna-Jersey_Stapel-scaled.jpg`,
    shortDesc:
      'Zijdezacht jersey-katoen verrijkt met aloë vera. Strekt mee tot 35 cm matrasdikte. Verkrijgbaar in 54 kleuren.',
  },
  {
    name: 'Texeler Bovenste Beste hoofdkussen',
    slug: 'texeler-bovenste-beste-hoofdkussen',
    category: 'hoofdkussens',
    price: '149',
    image: `${CDN}/heroes/MCD9710-groot.jpeg`,
    shortDesc:
      'Uitsluitend lang kroezende Texelse schapenwol. Vochtregulering en temperatuurbalans.',
  },
  {
    name: 'Donzen dekbed Vorsa',
    slug: 'donzen-dekbed-vorsa',
    category: 'dekbedden',
    price: '499',
    image: `${CDN}/heroes/MCD9628-groot.jpeg`,
    shortDesc:
      'Gevuld met 100% Mazurisch ganzendons. Vier warmteklassen, meerdere maten.',
  },
  {
    name: 'Plateau Molton Tencel',
    slug: 'plateau-molton-tencel',
    category: 'moltons',
    price: '119',
    image: `${CDN}/heroes/MCD9695-groot.jpeg`,
    shortDesc:
      "PCM-technologie en Tencel-vulling. Fris, droog en comfortabel de hele nacht.",
  },
]

export interface AdviceArticle {
  title: string
  href: string
  excerpt: string
  readTime: string
  tag: string
  image: string
}

export const adviceArticles: AdviceArticle[] = [
  {
    title: 'Wat is een molton en heb je er een nodig?',
    href: '/slaapadvies/wat-is-een-molton/',
    excerpt:
      'Een molton beschermt je matras tegen zweet, vlekken en slijtage. Maar niet elke molton is hetzelfde. We leggen het verschil uit.',
    readTime: '4 min lezen',
    tag: 'Slaapadvies',
    image: `${CDN}/heroes/MCD9710-groot.jpeg`,
  },
  {
    title: 'Jersey vs katoen hoeslaken: wat past bij jou?',
    href: '/slaapadvies/jersey-vs-katoen/',
    excerpt:
      'Jersey strekt mee, percal ademt. Beide zijn katoen, maar het gevoel verschilt enorm. We vergelijken beide weefsels eerlijk.',
    readTime: '5 min lezen',
    tag: 'Vergelijking',
    image: `${CDN}/heroes/MCD9691-groot.jpeg`,
  },
  {
    title: 'Welk dekbed past bij jouw seizoen?',
    href: '/slaapadvies/welk-dekbed-kies-je/',
    excerpt:
      'Warmteklasse 1 of 4? Dons of wol? Zomer of winter? Een praktische gids om het juiste dekbed te kiezen.',
    readTime: '6 min lezen',
    tag: 'Koopgids',
    image: `${CDN}/lifestyle/MCD9646-Edit-groot.jpeg`,
  },
  {
    title: 'Hoe kies je het juiste hoofdkussen?',
    href: '/slaapadvies/hoofdkussen-kiezen/',
    excerpt:
      'Je slaaphouding bepaalt grotendeels welk hoofdkussen bij je past. Rugslaper, zijslaper of buikslaper: we leggen het per type uit.',
    readTime: '5 min lezen',
    tag: 'Koopgids',
    image: `${CDN}/heroes/MCD9695-groot.jpeg`,
  },
  {
    title: 'Molton wassen: zo doe je het goed',
    href: '/slaapadvies/molton-wassen/',
    excerpt:
      'Een molton was je op 60 graden, maar er zijn subtiele verschillen per materiaalsoort. Wij geven je de juiste was- en drooginstructies.',
    readTime: '3 min lezen',
    tag: 'Onderhoud',
    image: `${CDN}/heroes/MCD9716-groot.jpeg`,
  },
  {
    title: 'Maten hoeslaken: welke maat past op jouw matras?',
    href: '/slaapadvies/maten-hoeslaken/',
    excerpt:
      'Een hoeslaken van de verkeerde maat trekt los of past niet om dikke matrassen heen. Gebruik onze maatgids voor de perfecte pasvorm.',
    readTime: '4 min lezen',
    tag: 'Maatgids',
    image: `${CDN}/heroes/Formesse_Bella-Donna-Jersey_Farbpalette-1-scaled.jpg`,
  },
]
