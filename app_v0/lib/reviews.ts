export interface Review {
  id: string
  name: string
  city: string
  rating: 4 | 5
  date: string
  quote: string
  product?: string
}

export const allReviews: Review[] = [
  {
    id: 'r01',
    name: 'Annelies V.',
    city: 'Groningen',
    rating: 5,
    date: '14 april 2026',
    quote:
      'Het Bella Donna hoeslaken zit na drie maanden en tientallen wasbeurten nog net zo strak als op dag één. Eindelijk een hoeslaken dat niet afschuift tijdens de nacht.',
    product: 'Bella Donna Jersey hoeslaken',
  },
  {
    id: 'r02',
    name: 'Maarten de B.',
    city: 'Utrecht',
    rating: 5,
    date: '2 mei 2026',
    quote:
      'Het donzen dekbed van Hefel is een openbaring. Ik slaap altijd te warm, maar dit dons voert vocht zo goed af dat ik voor het eerst in jaren niet meer zwetend wakker word.',
    product: 'Hefel Pure Cotton dekbed',
  },
  {
    id: 'r03',
    name: 'Ingrid S.',
    city: 'Amsterdam',
    rating: 5,
    date: '28 maart 2026',
    quote:
      'Geweldig advies gekregen over welk kussen bij mijn slaaphouding past. Uiteindelijk gekozen voor het Texeler wollen kussen en ik heb nooit beter geslapen.',
    product: 'Texeler wollen hoofdkussen',
  },
  {
    id: 'r04',
    name: 'Robert K.',
    city: 'Den Haag',
    rating: 5,
    date: '11 februari 2026',
    quote:
      'De molton beschermer van Formesse is onzichtbaar onder het hoeslaken en absorbeert toch alles. Ideaal voor onze kinderen. Aanrader voor elk gezin met jonge kinderen.',
    product: 'Molton matrasbeschermer',
  },
  {
    id: 'r05',
    name: 'Petra M.',
    city: 'Eindhoven',
    rating: 4,
    date: '19 januari 2026',
    quote:
      'Snelle levering, nette verpakking en de kwaliteit van het topmatras is merkbaar beter dan wat ik eerder had. Het matras voelt steviger maar toch zacht genoeg.',
    product: 'Topmatras',
  },
  {
    id: 'r06',
    name: 'Lucas W.',
    city: 'Rotterdam',
    rating: 5,
    date: '5 maart 2026',
    quote:
      'Ik heb lang getwijfeld tussen twee dekbedden. Het advies via de chat was helder en eerlijk. Uiteindelijk de juiste keuze gemaakt. De service maakt Rupose uniek.',
  },
  {
    id: 'r07',
    name: 'Sofie H.',
    city: 'Haren',
    rating: 5,
    date: '22 april 2026',
    quote:
      'De kussenslopen zijn van een kwaliteit die je voelt bij de eerste aanraking. Puur katoen, geen kunstmatige glans. Mijn slaapkamer voelt nu echt als een hotelkamer.',
    product: 'Satijnen kussenslopen',
  },
  {
    id: 'r08',
    name: 'Dirk van der B.',
    city: 'Leeuwarden',
    rating: 5,
    date: '7 mei 2026',
    quote:
      'Rupose is de enige online winkel waar ik écht advies krijg in plaats van een chatbot die mij doorverwijst naar een FAQ. Binnen een dag antwoord op mijn specifieke vraag.',
  },
  {
    id: 'r09',
    name: 'Hanneke J.',
    city: 'Assen',
    rating: 4,
    date: '16 februari 2026',
    quote:
      'De TENCEL hoeslakens zijn verrassend koel en toch zacht. Perfect voor de zomermaanden. Ik heb er inmiddels twee sets van. De wasbestendigheid is uitstekend.',
    product: 'TENCEL hoeslaken',
  },
  {
    id: 'r10',
    name: 'Thomas N.',
    city: 'Zwolle',
    rating: 5,
    date: '30 april 2026',
    quote:
      'Het Texeler dekbed is een investering die ik niet betreur. Ik merk het verschil direct: rustiger slapen, minder wakker worden. Puur wol uit Nederland, dat is het waard.',
    product: 'Texeler wollen dekbed',
  },
  {
    id: 'r11',
    name: 'Marloes A.',
    city: 'Nijmegen',
    rating: 5,
    date: '9 april 2026',
    quote:
      'Besteld op dinsdag, geleverd op donderdag. Prachtige verpakking, geen plastic. Het hoeslaken was direct perfect van maat op ons extra diepe boxspring.',
  },
  {
    id: 'r12',
    name: 'Frank O.',
    city: 'Tilburg',
    rating: 4,
    date: '1 mei 2026',
    quote:
      'Goed gesorteerd assortiment en eerlijke productbeschrijvingen. Je koopt wat je krijgt. De topmatras past precies en mijn partner slaapt eindelijk minder onrustig.',
    product: 'Topdekmatras',
  },
]

/** Return a subset of reviews — optionally filtered by product, with fallback to all */
export function getReviews(count = 6, productName?: string): Review[] {
  const pool = productName
    ? allReviews.filter((r) => r.product === productName)
    : allReviews
  const source = pool.length >= count ? pool : allReviews
  return source.slice(0, count)
}
