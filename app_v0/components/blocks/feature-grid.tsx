'use client'

import { type LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { variantFadeUp, variantStagger } from '@/lib/motion'

export interface Feature {
  icon?: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  eyebrow?: string
  title?: string
  features: Feature[]
  cols?: 3 | 4
  bg?: 'default' | 'muted'
}

export function FeatureGrid({
  eyebrow,
  title,
  features,
  cols = 3,
  bg = 'default',
}: FeatureGridProps) {
  const shouldReduce = false
  const containerVariants = variantStagger(shouldReduce, 0.08, 0.1)
  const itemVariants = variantFadeUp(shouldReduce, 20)

  return (
    <section
      aria-labelledby={title ? 'feature-grid-heading' : undefined}
      aria-label={title ? undefined : 'Kenmerken'}
      className={`py-16 md:py-20 ${bg === 'muted' ? 'bg-secondary' : 'bg-background'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {(eyebrow || title) && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {eyebrow && (
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-3 font-medium">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id="feature-grid-heading"
                className="font-serif text-3xl md:text-4xl font-light text-foreground text-balance"
              >
                {title}
              </h2>
            )}
          </motion.div>
        )}
        <motion.div
          className={`grid grid-cols-1 sm:grid-cols-2 ${cols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 md:gap-8`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="flex flex-col gap-4 p-6 rounded-sm border border-border bg-background"
              >
                {Icon && (
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                )}
                <h3 className="font-serif text-xl font-light text-foreground leading-snug">
                  {feature.title}
                </h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
