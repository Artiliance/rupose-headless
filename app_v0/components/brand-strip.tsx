import Image from 'next/image'
import Link from 'next/link'

const brands = [
  {
    name: 'Bella Donna / Formesse',
    slug: 'bella-donna',
    logo: 'https://rupose.nl/wp-content/uploads/2026/02/Formesse-Logo.png',
    tagline: 'Duits vakmanschap',
  },
  {
    name: 'Texeler',
    slug: 'texeler',
    logo: null, // text fallback
    tagline: 'Eigenm merk — Texels schapenwol',
    featured: true,
  },
  {
    name: 'Hefel',
    slug: 'hefel',
    logo: null,
    tagline: 'Oostenrijkse kwaliteit',
  },
  {
    name: 'Dommelin',
    slug: 'dommelin',
    logo: null,
    tagline: 'Klassiek Nederlands',
  },
  {
    name: 'Ecolife',
    slug: 'ecolife',
    logo: 'https://rupose.nl/wp-content/uploads/2026/02/Ecolife-Logo.png',
    tagline: 'Natuurlijk & duurzaam',
  },
]

export function BrandStrip() {
  return (
    <section className="bg-sand border-y border-border" aria-label="Onze merken">
      <div className="container mx-auto px-4 md:px-6 py-14 md:py-20">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-copper mb-3">
            Officieel dealer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brown">
            Onze merken
          </h2>
          <p className="font-sans text-sm text-brown-muted mt-3 max-w-md mx-auto leading-relaxed">
            Rupose verkoopt uitsluitend premium Europese merken die in Nederland
            geen sterke directe distributie hebben.
          </p>
        </div>

        {/* Brand strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/merken/${brand.slug}/`}
              aria-label={`Meer over ${brand.name}`}
              className="group flex flex-col items-center gap-2 px-6 py-4 rounded-sm hover:bg-sand-deep/60 transition-colors"
            >
              {brand.logo ? (
                <div className="relative h-10 w-32 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ) : (
                <span
                  className={`font-serif text-lg font-medium text-brown-muted group-hover:text-brown transition-colors ${
                    brand.featured ? 'text-xl text-brown' : ''
                  }`}
                >
                  {brand.name}
                </span>
              )}
              <span className="font-sans text-xs text-brown-muted group-hover:text-brown-muted/80 transition-colors">
                {brand.tagline}
              </span>
              {brand.featured && (
                <span className="font-sans text-[10px] tracking-widest uppercase text-copper">
                  Eigen merk
                </span>
              )}
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/merken/"
            className="inline-flex items-center gap-2 font-sans text-sm text-brown-muted hover:text-brown border-b border-border hover:border-brown pb-0.5 transition-colors"
          >
            Alle merken bekijken
          </Link>
        </div>
      </div>
    </section>
  )
}
