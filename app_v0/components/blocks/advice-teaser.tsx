'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { AdviceCard } from '@/components/advice-card'
import type { AdviceCardProps } from '@/components/advice-card'
import { variantFadeUp, variantStagger } from '@/lib/motion'

interface AdviceTeaserProps {
  eyebrow?: string
  title?: string
  articles: AdviceCardProps[]
  cta?: { label: string; href: string }
  bg?: 'muted' | 'default'
}

export function AdviceTeaser({
  eyebrow = 'Kennis & advies',
  title = 'Slaap beter, weet meer',
  articles,
  cta = { label: 'Alle slaaptips', href: '/slaapadvies/' },
  bg = 'muted',
}: AdviceTeaserProps) {
  const shouldReduce = false
  const containerVariants = variantStagger(shouldReduce, 0.1, 0.1)
  const itemVariants = variantFadeUp(shouldReduce, 20)

  return (
    <section
      aria-label="Slaapadvies"
      className={bg === 'muted' ? 'py-20 md:py-28 bg-secondary/40' : 'py-20 md:py-28 bg-background'}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-3 font-medium">
              {eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light leading-tight text-balance">
              {title}
            </h2>
          </motion.div>
          {cta && (
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 font-sans text-base text-muted-foreground hover:text-foreground transition-colors group self-start md:self-auto pb-0.5 border-b border-border hover:border-foreground min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          )}
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {articles.map((article) => (
            <motion.div key={article.href} variants={itemVariants}>
              <AdviceCard {...article} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
