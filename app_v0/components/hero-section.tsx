import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col"
      aria-label="Hero sectie"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://rupose.nl/wp-content/uploads/2025/08/MCD9646-Edit-groot.jpeg"
          alt="Opgemaakt luxe bed met premium Rupose bedtextiel"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Gradient overlay — left side darkens for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brown/75 via-brown/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-16">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Eyebrow */}
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-copper-light mb-6 font-medium">
              Premium bedtextiel &mdash; Haren, NL
            </p>

            {/* H1 */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.05] font-light mb-6 text-balance">
              Bedtextiel waarmee je slaap verbetert
            </h1>

            {/* Sub */}
            <p className="font-sans text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-md">
              Premium kwaliteit uit Duitsland en Europa. Eerlijk slaapadvies.
              Zorgvuldig geselecteerde merken voor wie bewust slaapt.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-copper hover:bg-copper/90 text-primary-foreground font-sans text-sm tracking-wide px-8 py-6 h-auto rounded-sm"
              >
                <Link href="/winkel/">Ontdek de collectie</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover:border-primary-foreground/70 font-sans text-sm tracking-wide px-8 py-6 h-auto rounded-sm bg-transparent"
              >
                <Link href="/slaapadvies/">Lees slaapadvies</Link>
              </Button>
            </div>

            {/* Trust signal */}
            <div className="mt-12 flex items-center gap-3">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-copper-light fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-sans text-primary-foreground/70">
                Beoordeeld met 4,9/5 — over 200 tevreden klanten
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8 md:pb-10">
        <a
          href="#collectie"
          aria-label="Scroll naar de collectie"
          className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors group"
        >
          <span className="text-xs font-sans tracking-widest uppercase">Ontdek</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
