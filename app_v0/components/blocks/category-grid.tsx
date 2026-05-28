'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { variantFadeUp, variantStagger } from '@/lib/motion'

interface Category {
  name: string
  slug: string
  image: string | null
  count?: number
}

function CategoryCard({ name, slug, image, count }: Category) {
  return (
    <Link
      href={`/winkel/${slug}/`}
      className="group relative overflow-hidden rounded-sm bg-secondary aspect-[4/5] block"
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
        <div className="absolute inset-0 bg-muted" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/20 to-transparent transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-serif text-xl font-light text-primary-foreground leading-tight text-balance">
              {name}
            </h3>
            {count !== undefined && count > 0 && (
              <p className="font-sans text-sm text-primary-foreground/70 mt-1">
                {count} {count === 1 ? 'product' : 'producten'}
              </p>
            )}
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
          </div>
        </div>
      </div>
    </Link>
  )
}

interface CategoryGridProps {
  categories: Category[]
  eyebrow?: string
  title?: string
  showViewAll?: boolean
}

export function CategoryGrid({
  categories,
  eyebrow = 'Ons assortiment',
  title = 'Onze collectie',
  showViewAll = true,
}: CategoryGridProps) {
  const shouldReduce = false
  const containerVariants = variantStagger(shouldReduce, 0.1, 0.1)
  const itemVariants = variantFadeUp(shouldReduce, 20)

  return (
    <section id="collectie" className="bg-background" aria-label="Onze collectie">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-3">
              {eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight text-balance">
              {title}
            </h2>
          </motion.div>
          {showViewAll && (
            <Link
              href="/winkel/alle/"
              className="inline-flex items-center gap-2 font-sans text-base text-muted-foreground hover:text-foreground transition-colors group min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Alles bekijken
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.slug}
              variants={itemVariants}
            >
              <CategoryCard {...cat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
