import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Hero } from '@/components/blocks/hero'
import { FeatureGrid } from '@/components/blocks/feature-grid'
import { CtaBanner } from '@/components/blocks/cta-banner'
import { brandDetails } from '@/lib/brands'
import { Award, Leaf, ShieldCheck, Globe, Users, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Merken | Rupose',
  description:
    'Rupose werkt uitsluitend met geselecteerde Europese topmerken: Formesse, Texeler, Hefel, Ecolife en Homan. Leer de merken kennen.',
}

const whyPremium = [
  {
    icon: <Award />,
    title: 'Bewuste selectie',
    description:
      'Ieder merk dat wij voeren, kennen wij persoonlijk. Wij reizen naar de fabrieken en toetsen elk product op kwaliteit en duurzaamheid.',
  },
  {
    icon: <Leaf />,
    title: 'Europese herkomst',
    description:
      'Onze partners produceren in Duitsland, Oostenrijk en Nederland. Korte ketens, transparante productie, geen bulkimport.',
  },
  {
    icon: <ShieldCheck />,
    title: 'OEKO-TEX gecertificeerd',
    description:
      'Elk garen en elke vezel is getest op schadelijke stoffen. OEKO-TEX Standard 100 is het minimale certificaat dat wij accepteren.',
  },
  {
    icon: <Globe />,
    title: 'Generaties vakmanschap',
    description:
      'De merken die wij voeren zijn familiebedrijven met decennialange ervaring. Geen trendy start-ups, maar bewezen vakkennis.',
  },
  {
    icon: <Users />,
    title: 'Persoonlijk advies',
    description:
      'Je bent geen ordernummer. Bel, mail of kom langs in onze winkel in Haren; een specialist denkt mee over jouw slaapsituatie.',
  },
  {
    icon: <Truck />,
    title: 'Zorgeloos geleverd',
    description:
      'Gratis verzending vanaf 75 euro, 30 dagen retourrecht en veilig betalen via iDEAL of creditcard. Premium zonder risico.',
  },
]

export default function MerkenPage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Onze partners"
        title="Geselecteerde Europese topmerken"
        intro="Rupose voert alleen merken die wij vertrouwen. Familiebedrijven met een langjarige traditie in premium bedtextiel."
      />

      {/* Brand cards grid */}
      <section aria-labelledby="brands-heading" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 id="brands-heading" className="sr-only">Alle merken</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandDetails.map((brand) => (
              <Link
                key={brand.slug}
                href={`/merken/${brand.slug}/`}
                className="group block bg-secondary rounded-sm overflow-hidden border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={brand.heroImage}
                    alt={`${brand.name} bedtextiel`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="relative h-8 w-24 mb-3">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain object-left"
                      unoptimized
                    />
                  </div>
                  <h3 className="font-serif text-xl font-light text-foreground mb-1">{brand.name}</h3>
                  <p className="font-sans text-sm text-muted-foreground mb-3">{brand.country}</p>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed line-clamp-2">
                    {brand.intro}
                  </p>
                  <span className="inline-flex items-center mt-4 font-sans text-sm text-primary font-medium group-hover:underline">
                    Ontdek het merk
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Waarom premium merken"
        title="Kwaliteit die je voelt"
        features={whyPremium}
        bg="muted"
      />
      <CtaBanner
        title="Hulp bij het kiezen van een merk?"
        description="Onze specialisten leggen je graag het verschil uit. Neem contact op of kom langs in Haren."
        cta={{ label: 'Neem contact op', href: '/contact/' }}
      />
    </main>
  )
}
