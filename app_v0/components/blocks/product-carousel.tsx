'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { ProductCard } from '@/components/product-card'
import { variantFadeUp, variantStagger } from '@/lib/motion'

interface Product {
  name: string
  slug: string
  category: string
  price: string
  image: string | null
  shortDesc: string
}

interface ProductCarouselProps {
  title: string
  eyebrow?: string
  products: Product[]
  cta?: { label: string; href: string }
}

export function ProductCarousel({ title, eyebrow, products, cta }: ProductCarouselProps) {
  const shouldReduce = false
  const containerVariants = variantStagger(shouldReduce, 0.1, 0.1)
  const itemVariants = variantFadeUp(shouldReduce, 20)

  return (
    <section className="bg-background" aria-labelledby="product-carousel-heading">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {eyebrow && (
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-3">
                {eyebrow}
              </p>
            )}
            <h2
              id="product-carousel-heading"
              className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight text-balance"
            >
              {title}
            </h2>
          </motion.div>
          {cta && (
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 font-sans text-base text-muted-foreground hover:text-foreground transition-colors group min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </div>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {products.map((product) => (
            <motion.div key={product.slug} variants={itemVariants}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
