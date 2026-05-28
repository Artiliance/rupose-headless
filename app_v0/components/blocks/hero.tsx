'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { variantFadeUp, variantStagger, variantScaleIn } from '@/lib/motion'

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

export interface HeroCta {
  label: string
  href: string
  variant?: 'primary' | 'outline'
}

export interface HeroBreadcrumb {
  label: string
  href?: string
}

export interface HeroProps {
  /** Visual layout variant */
  variant?: 'fullbleed' | 'split' | 'simple'
  eyebrow?: string
  title: string
  subtitle?: string
  /** Required for fullbleed and split; optional for simple */
  image?: string
  imageAlt?: string
  ctas?: HeroCta[]
  trustSignal?: string
  /** Fullbleed-only: id of element to scroll to */
  scrollTo?: string
  /** Simple/PageHeader-only */
  intro?: string
  breadcrumbs?: HeroBreadcrumb[]
  meta?: string
}

// ---------------------------------------------------------------------------
// Fullbleed variant — full-bleed image with overlay text + parallax
// ---------------------------------------------------------------------------

function HeroFullbleed({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  ctas = [],
  trustSignal,
  scrollTo,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0px', '-60px'])

  const containerV = variantStagger(false, 0.1, 0)
  const itemV = variantFadeUp(false, 24)

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] md:min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero sectie"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          <Image
            src={image!}
            alt={imageAlt ?? ''}
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-brown/75 via-brown/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-16">
          <motion.div
            className="max-w-xl lg:max-w-2xl"
            variants={containerV}
            initial="hidden"
            animate="visible"
          >
            {eyebrow && (
              <motion.p variants={itemV} className="font-sans text-xs tracking-[0.2em] uppercase text-copper-light mb-6 font-medium">
                {eyebrow}
              </motion.p>
            )}
            <motion.h1
              variants={itemV}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.05] font-light mb-6 text-balance"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p variants={itemV} className="font-sans text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-md">
                {subtitle}
              </motion.p>
            )}
            {ctas.length > 0 && (
              <motion.div variants={itemV} className="flex flex-col sm:flex-row gap-3">
                {ctas.map((cta) =>
                  cta.variant === 'outline' ? (
                    <Button
                      key={cta.href} asChild variant="outline" size="lg"
                      className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover:border-primary-foreground/70 font-sans text-base tracking-wide px-8 py-6 h-auto min-h-[44px] rounded-sm bg-transparent"
                    >
                      <Link href={cta.href}>{cta.label}</Link>
                    </Button>
                  ) : (
                    <Button
                      key={cta.href} asChild size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-base tracking-wide px-8 py-6 h-auto min-h-[44px] rounded-sm"
                    >
                      <Link href={cta.href}>{cta.label}</Link>
                    </Button>
                  )
                )}
              </motion.div>
            )}
            {trustSignal && (
              <motion.div variants={itemV} className="mt-12 flex items-center gap-3">
                <div className="flex -space-x-1" aria-hidden="true">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-copper-light fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-sans text-primary-foreground/70">{trustSignal}</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {scrollTo && (
        <div className="relative z-10 flex justify-center pb-8 md:pb-10">
          <a
            href={`#${scrollTo}`}
            aria-label="Scroll naar de volgende sectie"
            className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors min-h-[44px] justify-center"
          >
            <span className="text-sm font-sans tracking-widest uppercase">Ontdek</span>
            <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      )}
    </section>
  )
}

// ---------------------------------------------------------------------------
// Split variant — text left, image right, 2-column
// ---------------------------------------------------------------------------

function HeroSplit({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  ctas = [],
}: HeroProps) {
  const containerV = variantStagger(false, 0.1, 0)
  const itemV = variantFadeUp(false, 20)
  const imageV = variantScaleIn(false, 0.97)

  return (
    <section className="bg-secondary overflow-hidden" aria-label="Hero sectie">
      <div className="container mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
          {/* Text side */}
          <motion.div
            className="pb-12 md:pb-16"
            variants={containerV}
            initial="hidden"
            animate="visible"
          >
            {eyebrow && (
              <motion.p variants={itemV} className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-5 font-medium">
                {eyebrow}
              </motion.p>
            )}
            <motion.h1
              variants={itemV}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight text-balance mb-6"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p variants={itemV} className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                {subtitle}
              </motion.p>
            )}
            {ctas.length > 0 && (
              <motion.div variants={itemV} className="flex flex-col sm:flex-row gap-3">
                {ctas.map((cta) =>
                  cta.variant === 'outline' ? (
                    <Button key={cta.href} asChild variant="outline" size="lg"
                      className="font-sans text-base tracking-wide px-8 py-6 h-auto min-h-[44px] rounded-sm"
                    >
                      <Link href={cta.href}>{cta.label}</Link>
                    </Button>
                  ) : (
                    <Button key={cta.href} asChild size="lg"
                      className="font-sans text-base tracking-wide px-8 py-6 h-auto min-h-[44px] rounded-sm"
                    >
                      <Link href={cta.href}>{cta.label}</Link>
                    </Button>
                  )
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Image side — flush to bottom */}
          {image && (
            <motion.div
              className="relative h-[420px] md:h-[520px] rounded-t-sm overflow-hidden"
              variants={imageV}
              initial="hidden"
              animate="visible"
            >
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                className="object-cover object-center"
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Simple variant — title + intro only, no full image. Optional small accent image.
// This is the "PageHeader" pattern.
// ---------------------------------------------------------------------------

function HeroSimple({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  breadcrumbs,
  meta,
  ctas = [],
}: HeroProps) {
  const containerV = variantStagger(false, 0.1, 0)
  const itemV = variantFadeUp(false, 20)
  const imageV = variantScaleIn(false, 0.97)

  return (
    <header className="bg-secondary border-b border-border pt-32 md:pt-36 pb-12 md:pb-16" aria-label="Paginakop">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-1 font-sans text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors min-h-[44px] inline-flex items-center">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-foreground transition-colors min-h-[44px] inline-flex items-center">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-foreground font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={`grid grid-cols-1 ${image ? 'lg:grid-cols-2 gap-12 items-center' : ''}`}>
          <motion.div variants={containerV} initial="hidden" animate="visible">
            {eyebrow && (
              <motion.p variants={itemV} className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4 font-medium">
                {eyebrow}
              </motion.p>
            )}
            <motion.h1
              variants={itemV}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight text-balance mb-4"
            >
              {title}
            </motion.h1>
            {meta && (
              <motion.p variants={itemV} className="font-sans text-sm text-muted-foreground mb-3">
                {meta}
              </motion.p>
            )}
            {intro && (
              <motion.p variants={itemV} className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {intro}
              </motion.p>
            )}
            {ctas.length > 0 && (
              <motion.div variants={itemV} className="flex flex-col sm:flex-row gap-3 mt-8">
                {ctas.map((cta) =>
                  cta.variant === 'outline' ? (
                    <Button key={cta.href} asChild variant="outline" size="lg"
                      className="font-sans text-base px-8 py-6 h-auto min-h-[44px] rounded-sm"
                    >
                      <Link href={cta.href}>{cta.label}</Link>
                    </Button>
                  ) : (
                    <Button key={cta.href} asChild size="lg"
                      className="font-sans text-base px-8 py-6 h-auto min-h-[44px] rounded-sm"
                    >
                      <Link href={cta.href}>{cta.label}</Link>
                    </Button>
                  )
                )}
              </motion.div>
            )}
          </motion.div>

          {image && imageAlt && (
            <motion.div
              className="relative aspect-[4/3] rounded-sm overflow-hidden"
              variants={imageV}
              initial="hidden"
              animate="visible"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                unoptimized
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

// ---------------------------------------------------------------------------
// Main Hero export — routes to correct variant
// ---------------------------------------------------------------------------

export function Hero(props: HeroProps) {
  const variant = props.variant ?? 'fullbleed'
  if (variant === 'split') return <HeroSplit {...props} />
  if (variant === 'simple') return <HeroSimple {...props} />
  return <HeroFullbleed {...props} />
}

// ---------------------------------------------------------------------------
// PageHeader — alias for variant="simple" for backwards compat
// ---------------------------------------------------------------------------

export type PageHeaderProps = Omit<HeroProps, 'variant'>
export function PageHeader(props: PageHeaderProps) {
  return <Hero variant="simple" {...props} />
}
