import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ProductCardProps {
  name: string
  slug: string
  price: string
  image: string | null
  shortDesc: string
  category: string
}

function ProductCard({ name, slug, price, image, shortDesc, category }: ProductCardProps) {
  // Strip HTML entities from shortDesc
  const cleanDesc = shortDesc
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, "'")
    .replace(/\n/g, ' ')
    .replace(/<[^>]*>/g, '')
    .trim()
    .slice(0, 100)

  return (
    <article className="group flex flex-col">
      {/* Image */}
      <Link
        href={slug ? `/winkel/${category}/${slug}/` : '/winkel/'}
        className="relative overflow-hidden rounded-sm bg-sand aspect-[3/4] block mb-4"
        aria-label={`Bekijk ${name}`}
        tabIndex={-1}
      >
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 bg-sage-muted flex items-center justify-center">
            <span className="font-serif text-sm text-brown-muted">Geen afbeelding</span>
          </div>
        )}
      </Link>

      {/* Meta */}
      <div className="flex flex-col flex-1">
        <p className="font-sans text-xs uppercase tracking-widest text-copper mb-1.5">{category}</p>
        <Link href={slug ? `/winkel/${category}/${slug}/` : '/winkel/'}>
          <h3 className="font-serif text-lg font-light text-brown leading-snug hover:text-sage transition-colors mb-2 text-balance">
            {name}
          </h3>
        </Link>
        {cleanDesc && (
          <p className="font-sans text-xs text-brown-muted leading-relaxed mb-3 line-clamp-2 flex-1">
            {cleanDesc}&hellip;
          </p>
        )}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
          {price ? (
            <span className="font-sans text-sm font-medium text-brown">
              v.a. &euro;{parseFloat(price).toLocaleString('nl-NL', { minimumFractionDigits: 2 })}
            </span>
          ) : (
            <span className="font-sans text-sm text-brown-muted">Op aanvraag</span>
          )}
          <Link
            href={slug ? `/winkel/${category}/${slug}/` : '/winkel/'}
            className="flex items-center gap-1 font-sans text-xs text-brown-muted hover:text-brown transition-colors group/link"
          >
            Bekijk
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}

const featuredProducts = [
  {
    name: 'Bella Donna Jersey hoeslaken',
    slug: 'bella-donna-jersey-hoeslaken',
    category: 'hoeslakens',
    price: '64.95',
    image: 'https://rupose.nl/wp-content/uploads/2024/06/Farbe-0030_bordeaux.jpg',
    shortDesc:
      'Ervaar het verschil van natuurlijk slapen met het Bella Donna Jersey hoeslaken. Zijdezacht katoen, verrijkt met aloë vera, een perfecte pasvorm.',
  },
  {
    name: 'Texeler Bovenste Beste hoofdkussen',
    slug: 'texeler-bovenste-beste-hoofdkussen',
    category: 'hoofdkussens',
    price: '149',
    image: 'https://rupose.nl/wp-content/uploads/2026/02/Texeler_SOEZZ_Bovenste_Beste-scaled.jpg',
    shortDesc:
      'Alleen de beste wol is goed genoeg voor Texeler®. Uitsluitend lang kroezende Texelse schapenwol met de juiste vezeldikte.',
  },
  {
    name: 'Donzen Dekbed Vorsa',
    slug: 'donzen-dekbed-vorsa',
    category: 'dekbedden',
    price: '499',
    image: 'https://rupose.nl/wp-content/uploads/2026/03/MCD9646-Edit-groot-300x300-1.jpeg',
    shortDesc:
      'Gevuld met 100% Mazurische ganzendons. Combineert lichtheid met luxe comfort. Vier warmteklassen, meerdere maten.',
  },
  {
    name: 'Plateau Molton Tencel',
    slug: 'plateau-molton-tencel',
    category: 'moltons',
    price: '119',
    image: 'https://rupose.nl/wp-content/uploads/2025/08/plateau-molton-tencel.webp',
    shortDesc:
      'Dankzij PCM-technologie en een Tencel™-vulling blijf je de hele nacht fris, droog en comfortabel. Ideaal voor wie \'s nachts zweet.',
  },
]

export function FeaturedProducts() {
  return (
    <section className="bg-linen" aria-label="Onze favorieten">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-copper mb-3">
              Handpicked selectie
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brown leading-tight text-balance">
              Onze favorieten
            </h2>
          </div>
          <Link
            href="/winkel/"
            className="flex items-center gap-2 font-sans text-sm text-brown-muted hover:text-brown transition-colors group"
          >
            Bekijk alles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
