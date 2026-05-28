'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { variantFadeUp, variantStagger } from '@/lib/motion'

interface Brand {
  name: string
  slug: string
  logo: string
  tagline: string
  featured?: boolean
}

interface BrandStripProps {
  brands: Brand[]
  eyebrow?: string
  title?: string
  description?: string
}

export function BrandStrip({
  brands,
  eyebrow = 'Officieel dealer',
  title = 'Onze merken',
  description = 'Rupose verkoopt uitsluitend premium Europese merken die in Nederland geen sterke directe distributie hebben.',
}: BrandStripProps) {
  const shouldReduce = false
  const containerVariants = variantStagger(shouldReduce, 0.06, 0.1)
  const itemVariants = variantFadeUp(shouldReduce, 16)

  return (
    <section className="bg-secondary border-y border-border" aria-label="Onze merken">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-3">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
            {title}
          </h2>
          <p className="font-sans text-base text-muted-foreground mt-3 max-w-md mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {brands.map((brand) => (
            <motion.div key={brand.slug} variants={itemVariants}>
              <Link
                href={`/merken/${brand.slug}/`}
                aria-label={`Meer over ${brand.name}`}
                className="group flex flex-col items-center gap-3 px-4 py-5 rounded-sm bg-background border border-border hover:border-primary/40 hover:shadow-sm transition-all duration-200 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:-translate-y-0.5"
              >
                <div className="relative h-14 w-full max-w-[140px] transition-all duration-300">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    unoptimized
                    sizes="120px"
                  />
                </div>
                <div className="text-center">
                  <span className="block font-sans text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-snug">
                    {brand.tagline}
                  </span>
                  {brand.featured && (
                    <span className="mt-1 block font-sans text-xs tracking-widest uppercase text-primary">
                      Eigen merk
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link
            href="/merken/"
            className="inline-flex items-center gap-2 font-sans text-base text-muted-foreground hover:text-foreground border-b border-border hover:border-foreground pb-0.5 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Alle merken bekijken
          </Link>
        </div>
      </div>
    </section>
  )
}
