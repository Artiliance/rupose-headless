import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CategoryCardProps {
  name: string
  slug: string
  image: string | null
  count?: number
}

function CategoryCard({ name, slug, image, count }: CategoryCardProps) {
  return (
    <Link
      href={`/winkel/${slug}/`}
      className="group relative overflow-hidden rounded-sm bg-sand aspect-[4/5] block"
      aria-label={`Bekijk categorie ${name}`}
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
        <div className="absolute inset-0 bg-sage-muted" />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/20 to-transparent transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-serif text-xl font-light text-primary-foreground leading-tight text-balance">
              {name}
            </h3>
            {count !== undefined && count > 0 && (
              <p className="font-sans text-xs text-primary-foreground/60 mt-1">
                {count} {count === 1 ? 'product' : 'producten'}
              </p>
            )}
          </div>
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
      </div>
    </Link>
  )
}

const categories = [
  {
    name: 'Hoeslakens',
    slug: 'hoeslakens',
    count: 1,
    image: 'https://rupose.nl/wp-content/uploads/2025/08/MCD9691-groot.jpeg',
  },
  {
    name: 'Hoofdkussens',
    slug: 'hoofdkussens',
    count: 4,
    image: 'https://rupose.nl/wp-content/uploads/2025/08/MCD9739-groot.jpeg',
  },
  {
    name: 'Dekbedden',
    slug: 'dekbedden',
    count: 3,
    image: 'https://rupose.nl/wp-content/uploads/2025/08/MCD9646-Edit-groot.jpeg',
  },
  {
    name: 'Kussenslopen',
    slug: 'kussenslopen',
    count: 1,
    image: 'https://rupose.nl/wp-content/uploads/2025/08/MCD9716-groot.jpeg',
  },
  {
    name: 'Moltons',
    slug: 'moltons',
    count: 3,
    image: 'https://rupose.nl/wp-content/uploads/2025/08/MCD9710-groot.jpeg',
  },
  {
    name: 'Topdekmatras',
    slug: 'topdekmatras',
    count: 0,
    image: 'https://rupose.nl/wp-content/uploads/2025/04/MCD9695-groot.jpeg',
  },
  {
    name: 'Toppers',
    slug: 'toppers',
    count: 0,
    image: 'https://rupose.nl/wp-content/uploads/2025/08/MCD9710-groot.jpeg',
  },
]

export function CategoryGrid() {
  return (
    <section
      id="collectie"
      className="bg-linen"
      aria-label="Onze collectie"
    >
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-copper mb-3">
              Ons assortiment
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brown leading-tight text-balance">
              Onze collectie
            </h2>
          </div>
          <Link
            href="/winkel/"
            className="flex items-center gap-2 font-sans text-sm text-brown-muted hover:text-brown transition-colors group"
          >
            Alles bekijken
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat.slug}
              className={
                // First card is double-wide on md+
                i === 0
                  ? 'col-span-2 md:col-span-2 md:row-span-1'
                  : ''
              }
            >
              <CategoryCard {...cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
