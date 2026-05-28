const GH = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images'

export type ColourSwatch = {
  name: string
  label: string
  thumb: string
}

export type ProductSize = {
  label: string
  price: number
  sku: string
}

export type Product = {
  slug: string
  categorySlug: string
  categoryLabel: string
  brand: string
  name: string
  shortDesc: string
  longDesc: string
  image: string
  gallery: string[]
  colours: ColourSwatch[]
  sizes: ProductSize[]
  specs: Record<string, string>
  care: string[]
  shipping: string
  returnPolicy: string
  badge?: string
}

export const products: Product[] = [
  {
    slug: 'bella-donna-jersey-hoeslaken',
    categorySlug: 'hoeslakens',
    categoryLabel: 'Hoeslakens',
    brand: 'Formesse',
    name: 'Bella Donna Jersey hoeslaken',
    badge: 'Bestseller',
    shortDesc:
      'Zijdezacht jersey-katoen verrijkt met aloë vera. Strekt mee tot 35 cm matrasdikte. Verkrijgbaar in 54 kleuren.',
    longDesc:
      'Het Bella Donna Jersey hoeslaken van Formesse is gemaakt van hoogwaardig jersey-katoen dat is behandeld met aloë vera voor een extra zachte aanraking. Het elastische weefsel strekt mee tot 35 cm matrasdikte en blijft strak gespannen. OEKO-TEX Standard 100 gecertificeerd. Made in Germany.',
    image: `${GH}/heroes/Formesse_Bella-Donna-Jersey_Stapel-scaled.jpg`,
    gallery: [
      `${GH}/heroes/Formesse_Bella-Donna-Jersey_Stapel-scaled.jpg`,
      `${GH}/heroes/Formesse_Bella-Donna-Jersey_Farbpalette-1-scaled.jpg`,
      `${GH}/heroes/Formesse_Bella-Donna-Jersey_Imagebild.jpg`,
    ],
    colours: [
      { name: 'weiss', label: 'Wit', thumb: `${GH}/heroes/Formesse_Bella-Donna-Jersey_Farbpalette-1-scaled.jpg` },
      { name: 'wollweiss', label: 'Wolwit', thumb: `${GH}/heroes/Formesse_Bella-Donna-Jersey_Farbpalette-1-scaled.jpg` },
      { name: 'anthrazit', label: 'Antraciet', thumb: `${GH}/heroes/Formesse_Bella-Donna-Jersey_Farbpalette-1-scaled.jpg` },
      { name: 'bordeaux', label: 'Bordeaux', thumb: `${GH}/heroes/Formesse_Bella-Donna-Jersey_Farbpalette-1-scaled.jpg` },
      { name: 'olive', label: 'Olijfgroen', thumb: `${GH}/heroes/Formesse_Bella-Donna-Jersey_Farbpalette-1-scaled.jpg` },
      { name: 'mint', label: 'Mint', thumb: `${GH}/heroes/Formesse_Bella-Donna-Jersey_Farbpalette-1-scaled.jpg` },
    ],
    sizes: [
      { label: '80x200 cm', price: 49.95, sku: 'BDJ-80200' },
      { label: '90x200 cm', price: 52.95, sku: 'BDJ-90200' },
      { label: '100x200 cm', price: 54.95, sku: 'BDJ-100200' },
      { label: '120x200 cm', price: 57.95, sku: 'BDJ-120200' },
      { label: '140x200 cm', price: 62.95, sku: 'BDJ-140200' },
      { label: '160x200 cm', price: 64.95, sku: 'BDJ-160200' },
      { label: '180x200 cm', price: 67.95, sku: 'BDJ-180200' },
      { label: '200x200 cm', price: 72.95, sku: 'BDJ-200200' },
    ],
    specs: {
      Materiaal: '100% jersey-katoen (behandeld met aloe vera)',
      Certificering: 'OEKO-TEX Standard 100',
      Productie: 'Made in Germany',
      'Maximale matrasdikte': '35 cm',
      'Beschikbare kleuren': '54 kleuren',
    },
    care: [
      'Was op 60°C voor optimale hygiëne',
      'Niet bleken',
      'Droog op lage temperatuur',
      'Strijken op lage temperatuur indien gewenst',
    ],
    shipping:
      'Gratis verzending bij bestellingen vanaf €75. Levertijd 2 tot 3 werkdagen.',
    returnPolicy:
      'Retourneren binnen 30 dagen, ongewassen en in originele verpakking.',
  },
  {
    slug: 'donzen-dekbed-vorsa',
    categorySlug: 'dekbedden',
    categoryLabel: 'Dekbedden',
    brand: 'Rupose',
    name: 'Donzen dekbed Vorsa',
    badge: 'Nieuw',
    shortDesc:
      'Gevuld met 100% Mazurische ganzendons. Licht, warm en ademend. Vier warmteklassen, meerdere maten.',
    longDesc:
      'Het Vorsa donzen dekbed wordt gevuld met zorgvuldig geselecteerd Mazurisch ganzendons. Dit dons kenmerkt zich door een uitzonderlijk hoge loftscore, waardoor het dekbed luchtig aanvoelt maar toch optimaal warmte behoudt. Geschikt voor alle seizoenen dankzij vier beschikbare warmteklassen. De tijk is gemaakt van percal katoen met een satijnweefsel voor een fluweelzacht gevoel.',
    image: `${GH}/heroes/MCD9628-groot.jpeg`,
    gallery: [
      `${GH}/heroes/MCD9628-groot.jpeg`,
      `${GH}/lifestyle/MCD9646-Edit-groot.jpeg`,
      `${GH}/heroes/MCD9695-groot.jpeg`,
    ],
    colours: [],
    sizes: [
      { label: '140x200 cm', price: 389, sku: 'VOR-140200' },
      { label: '200x200 cm', price: 499, sku: 'VOR-200200' },
      { label: '200x220 cm', price: 549, sku: 'VOR-200220' },
      { label: '240x220 cm', price: 649, sku: 'VOR-240220' },
    ],
    specs: {
      Vulling: '100% Mazurisch ganzendons',
      Tijk: '100% percal katoen, satijnweefsel',
      Warmteklassen: '1 t/m 4 beschikbaar',
      Certificering: 'OEKO-TEX Standard 100, Downpass',
      Productie: 'Made in Poland',
    },
    care: [
      'Machinewas op 60°C',
      'Droog op lage temperatuur met tennisballen',
      'Niet chemisch reinigen',
      'Regelmatig luchten aanbevolen',
    ],
    shipping:
      'Gratis verzending bij bestellingen vanaf €75. Levertijd 2 tot 3 werkdagen.',
    returnPolicy:
      'Retourneren binnen 30 dagen, ongewassen en in originele verpakking.',
  },
  {
    slug: 'texeler-bovenste-beste-hoofdkussen',
    categorySlug: 'hoofdkussens',
    categoryLabel: 'Hoofdkussens',
    brand: 'Texeler',
    name: 'Texeler Bovenste Beste hoofdkussen',
    badge: 'Eigen merk',
    shortDesc:
      'Uitsluitend lang kroezende Texelse schapenwol. Vochtregulering, temperatuurbalans, eeuwenlang vakmanschap.',
    longDesc:
      'Alleen de allerbeste wol is goed genoeg voor het Bovenste Beste hoofdkussen van Texeler. Dit kussen wordt uitsluitend gevuld met lang kroezende Texelse schapenwol, geselecteerd op vezeldikte en kwaliteit. Schapenwol reguleert van nature vocht en temperatuur, waardoor je de hele nacht op de ideale temperatuur slaapt. De tijk is gemaakt van biologisch katoen. Handgemaakt op Texel.',
    image: `${GH}/heroes/MCD9710-groot.jpeg`,
    gallery: [
      `${GH}/heroes/MCD9710-groot.jpeg`,
      `${GH}/heroes/MCD9716-groot.jpeg`,
    ],
    colours: [],
    sizes: [
      { label: '60x70 cm', price: 149, sku: 'TBB-6070' },
      { label: '60x80 cm', price: 159, sku: 'TBB-6080' },
    ],
    specs: {
      Vulling: '100% Texelse schapenwol (lang kroezend)',
      Tijk: '100% biologisch katoen',
      Productie: 'Handgemaakt op Texel, NL',
      Certificering: 'GOTS',
    },
    care: [
      'Machinewas op 30°C, gentle cycle',
      'Droog op lage temperatuur',
      'Niet bleken',
      'Regelmatig luchten verlengde levensduur',
    ],
    shipping:
      'Gratis verzending bij bestellingen vanaf €75. Levertijd 2 tot 3 werkdagen.',
    returnPolicy:
      'Retourneren binnen 30 dagen, ongewassen en in originele verpakking.',
  },
  {
    slug: 'plateau-molton-tencel',
    categorySlug: 'moltons',
    categoryLabel: 'Molton & beschermers',
    brand: 'Rupose',
    name: 'Plateau Molton Tencel',
    shortDesc:
      'PCM-technologie en Tencel-vulling. Fris, droog en comfortabel. Ideaal voor wie warm slaapt.',
    longDesc:
      'De Plateau Molton Tencel combineert de absorptiekracht van Tencel-vezels met PCM-technologie (Phase Change Material) voor actieve temperatuurregeling. De molton absorbeert vocht snel en geeft het geleidelijk af, zodat je matras droog en fris blijft. De waterdichte maar ademende membraanlaag beschermt je matras volledig zonder het slaapcomfort te beïnvloeden.',
    image: `${GH}/heroes/MCD9695-groot.jpeg`,
    gallery: [
      `${GH}/heroes/MCD9695-groot.jpeg`,
      `${GH}/heroes/MCD9716-groot.jpeg`,
    ],
    colours: [],
    sizes: [
      { label: '80x200 cm', price: 89, sku: 'PMT-80200' },
      { label: '90x200 cm', price: 94, sku: 'PMT-90200' },
      { label: '140x200 cm', price: 109, sku: 'PMT-140200' },
      { label: '160x200 cm', price: 119, sku: 'PMT-160200' },
      { label: '180x200 cm', price: 129, sku: 'PMT-180200' },
      { label: '200x200 cm', price: 139, sku: 'PMT-200200' },
    ],
    specs: {
      Toplaag: 'Tencel (Lyocell)',
      Technologie: 'PCM temperatuurregeling',
      Bescherming: 'Waterdicht, ademend membraan',
      Certificering: 'OEKO-TEX Standard 100',
    },
    care: [
      'Machinewas op 60°C',
      'Droog op lage temperatuur',
      'Niet bleken',
      'Niet strijken',
    ],
    shipping:
      'Gratis verzending bij bestellingen vanaf €75. Levertijd 2 tot 3 werkdagen.',
    returnPolicy:
      'Retourneren binnen 30 dagen, ongewassen en in originele verpakking.',
  },
  {
    slug: 'hefel-pure-cotton-topdekmatras',
    categorySlug: 'toppers',
    categoryLabel: 'Topdekmatrassen',
    brand: 'Hefel',
    name: 'Hefel Pure Cotton topdekmatras',
    shortDesc:
      'Oostenrijkse kwaliteit. Biologisch katoen, zacht en ademend. Perfecte aanvulling op elk matras.',
    longDesc:
      'De Hefel Pure Cotton topdekmatras is vervaardigd in Oostenrijk uit 100% GOTS-gecertificeerd biologisch katoen. De vulling van pure katoenvezels zorgt voor een zacht en warm slaapklimaat, terwijl de ademende constructie oververhitting voorkomt. De quilted tijk voorkomt verschuiven van de vulling en geeft een luxe gevoel.',
    image: `${GH}/heroes/MCD9691-groot.jpeg`,
    gallery: [
      `${GH}/heroes/MCD9691-groot.jpeg`,
      `${GH}/heroes/MCD9628-groot.jpeg`,
    ],
    colours: [],
    sizes: [
      { label: '80x200 cm', price: 149, sku: 'HPC-80200' },
      { label: '90x200 cm', price: 159, sku: 'HPC-90200' },
      { label: '140x200 cm', price: 199, sku: 'HPC-140200' },
      { label: '160x200 cm', price: 219, sku: 'HPC-160200' },
      { label: '180x200 cm', price: 239, sku: 'HPC-180200' },
      { label: '200x200 cm', price: 259, sku: 'HPC-200200' },
    ],
    specs: {
      Materiaal: '100% biologisch katoen (GOTS)',
      Productie: 'Made in Austria',
      Certificering: 'GOTS, OEKO-TEX Standard 100',
      Dikte: '6 cm',
    },
    care: [
      'Machinewas op 60°C',
      'Droog op lage temperatuur',
      'Niet bleken',
      'Strijken op lage temperatuur',
    ],
    shipping:
      'Gratis verzending bij bestellingen vanaf €75. Levertijd 2 tot 3 werkdagen.',
    returnPolicy:
      'Retourneren binnen 30 dagen, ongewassen en in originele verpakking.',
  },
  {
    slug: 'topmatras-elite-3',
    categorySlug: 'topdekmatras',
    categoryLabel: 'Topmatrassen',
    brand: 'Rupose',
    name: 'Topmatras Elite 3',
    shortDesc:
      'Drielagen comfortsysteem. Koudschuim, traagschuim en zacht afdeklaagje. Verlengt de levensduur van je matras.',
    longDesc:
      'De Elite 3 topmatras bestaat uit drie lagen schuim: een stevige koudschuimbasis voor ondersteuning, een traagschuimlaag die medegeeft op lichaamswarmte, en een zachte afdeklaag voor direct comfort. De afneembare en wasbare hoes van biologisch katoen-jersey zorgt voor hygiëne en gemak. Verhoogt het slaapcomfort aanzienlijk en verlengt de levensduur van je matras.',
    image: `${GH}/heroes/MCD9710-groot.jpeg`,
    gallery: [
      `${GH}/heroes/MCD9710-groot.jpeg`,
      `${GH}/heroes/MCD9695-groot.jpeg`,
    ],
    colours: [],
    sizes: [
      { label: '80x200 cm', price: 179, sku: 'TE3-80200' },
      { label: '90x200 cm', price: 189, sku: 'TE3-90200' },
      { label: '140x200 cm', price: 229, sku: 'TE3-140200' },
      { label: '160x200 cm', price: 249, sku: 'TE3-160200' },
      { label: '180x200 cm', price: 269, sku: 'TE3-180200' },
      { label: '200x200 cm', price: 289, sku: 'TE3-200200' },
    ],
    specs: {
      Laag1: 'Koudschuim HR45 (basis)',
      Laag2: 'Traagschuim 50 kg/m3 (comfortlaag)',
      Laag3: 'Zachte afdeklaag 3 cm',
      Hoes: '100% biologisch katoen-jersey, afneembaar en wasbaar',
      Totaaldikte: '9 cm',
    },
    care: [
      'Hoes wassen op 60°C',
      'Schuimkern luchten en niet wassen',
      'Regelmatig omdraaien voor gelijkmatige slijtage',
    ],
    shipping:
      'Gratis verzending bij bestellingen vanaf €75. Levertijd 2 tot 3 werkdagen.',
    returnPolicy:
      'Retourneren binnen 30 dagen, ongewassen en in originele verpakking.',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.categorySlug === product.categorySlug || p.brand === product.brand)
    )
    .slice(0, limit)
}
