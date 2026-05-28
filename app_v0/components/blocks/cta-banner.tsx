'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'

interface CtaBannerProps {
  eyebrow?: string
  title: string
  description?: string
  cta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  bg?: 'primary' | 'sand' | 'sage'
}

export function CtaBanner({
  eyebrow,
  title,
  description,
  cta,
  secondaryCta,
  bg = 'primary',
}: CtaBannerProps) {
  const bgClass =
    bg === 'sand' ? 'bg-secondary'
    : bg === 'sage' ? 'bg-primary/10'
    : 'bg-foreground'

  const textClass = bg === 'primary' ? 'text-background' : 'text-foreground'
  const subTextClass = bg === 'primary' ? 'text-background/70' : 'text-muted-foreground'
  const eyebrowClass = bg === 'primary' ? 'text-background/50' : 'text-primary'

  const primaryBtnClass =
    bg === 'primary'
      ? 'bg-background text-foreground hover:bg-background/90'
      : 'bg-primary text-primary-foreground hover:bg-primary/90'

  const secondaryBtnClass =
    bg === 'primary'
      ? 'border-background/40 text-background hover:bg-background/10 hover:text-background hover:border-background/70 bg-transparent'
      : 'border-border text-foreground hover:bg-secondary'

  return (
    <section aria-label={title} className={`py-16 md:py-20 ${bgClass}`}>
      <motion.div
        className="container mx-auto px-4 md:px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {eyebrow && (
          <p className={`font-sans text-xs tracking-[0.2em] uppercase mb-4 font-medium ${eyebrowClass}`}>
            {eyebrow}
          </p>
        )}
        <h2 className={`font-serif text-3xl md:text-4xl font-light leading-tight text-balance mb-4 ${textClass}`}>
          {title}
        </h2>
        {description && (
          <p className={`font-sans text-base leading-relaxed mb-8 max-w-lg mx-auto ${subTextClass}`}>
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            size="lg"
            className={`${primaryBtnClass} font-sans text-base tracking-wide px-8 h-12 min-h-[44px] rounded-sm gap-2`}
          >
            <Link href={cta.href}>
              {cta.label}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
          {secondaryCta && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className={`${secondaryBtnClass} font-sans text-base tracking-wide px-8 h-12 min-h-[44px] rounded-sm`}
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </motion.div>
    </section>
  )
}
