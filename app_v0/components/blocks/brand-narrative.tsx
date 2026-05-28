'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { variantFadeUp, variantStagger, variantScaleIn } from '@/lib/motion'

interface Pillar {
  icon: LucideIcon
  label: string
  detail: string
}

interface BrandNarrativeProps {
  eyebrow?: string
  title: string
  body: string[]
  image: string
  imageAlt: string
  pillars?: Pillar[]
  cta?: { label: string; href: string }
  badge?: { stat: string; desc: string }
  imageLeft?: boolean
}

export function BrandNarrative({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  pillars,
  cta,
  badge,
  imageLeft = true,
}: BrandNarrativeProps) {
  const shouldReduce = false
  const containerVariants = variantStagger(shouldReduce, 0.1, 0)
  const itemVariants = variantFadeUp(shouldReduce, 20)
  const imageVariants = variantScaleIn(shouldReduce, 0.95)

  const photoBlock = (
    <motion.div
      className="relative"
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          unoptimized
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {badge && (
        <motion.div
          className="absolute -bottom-5 -right-2 md:-right-6 bg-secondary border border-border rounded-sm px-5 py-4 shadow-sm max-w-[200px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-serif text-2xl font-light text-foreground leading-none mb-1">
            {badge.stat}
          </p>
          <p className="font-sans text-xs text-muted-foreground leading-snug">
            {badge.desc}
          </p>
        </motion.div>
      )}
    </motion.div>
  )

  const textBlock = (
    <motion.div
      className="flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div>
        {eyebrow && (
          <motion.p
            variants={itemVariants}
            className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4 font-medium"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-4xl md:text-5xl text-foreground font-light leading-tight text-balance mb-6"
        >
          {title}
        </motion.h2>
        {body.map((para, i) => (
          <motion.p
            key={i}
            variants={itemVariants}
            className="font-sans text-base text-muted-foreground leading-relaxed mb-4 last:mb-0"
          >
            {para}
          </motion.p>
        ))}
      </div>
      {pillars && pillars.length > 0 && (
        <motion.ul variants={itemVariants} className="flex flex-col gap-4">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <li key={p.label} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans text-base font-semibold text-foreground">{p.label}</p>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">{p.detail}</p>
                </div>
              </li>
            )
          })}
        </motion.ul>
      )}
      {cta && (
        <motion.div variants={itemVariants} className="pt-2">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 font-sans text-base font-medium text-foreground hover:text-primary transition-colors group min-h-[44px] pb-0.5 border-b border-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {cta.label}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </motion.div>
      )}
    </motion.div>
  )

  return (
    <section aria-label={title} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {imageLeft ? (
            <>
              {photoBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {photoBlock}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
