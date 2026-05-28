import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/blocks/hero'
import { Button } from '@/components/ui/button'
import { Home, ShoppingBag, BookOpen, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pagina niet gevonden | Rupose',
  description: 'De pagina die je zoekt bestaat niet of is verplaatst.',
}

const suggestions = [
  {
    icon: Home,
    label: 'Naar home',
    href: '/',
    description: 'Terug naar de homepage',
  },
  {
    icon: ShoppingBag,
    label: 'Winkel',
    href: '/winkel/',
    description: 'Bekijk onze collectie',
  },
  {
    icon: BookOpen,
    label: 'Slaapadvies',
    href: '/slaapadvies/',
    description: 'Tips voor beter slapen',
  },
  {
    icon: Phone,
    label: 'Contact',
    href: '/contact/',
    description: 'Neem contact op',
  },
]

export default function NotFound() {
  return (
    <main>
      <Hero
        variant="simple"
        title="Pagina niet gevonden"
        subtitle="De pagina die je zoekt bestaat niet meer of is verplaatst. Geen zorgen, we helpen je graag verder."
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl font-light text-foreground mb-8 text-center">
              Misschien zoek je een van deze paginas?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {suggestions.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex flex-col items-center p-6 bg-muted/50 rounded-sm border border-border/50 hover:border-primary/30 hover:bg-muted transition-colors duration-200"
                  >
                    <Icon className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                    <span className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                    <span className="font-sans text-sm text-muted-foreground mt-1 text-center">
                      {item.description}
                    </span>
                  </Link>
                )
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="font-sans text-base text-muted-foreground mb-4">
                Kun je niet vinden wat je zoekt? Neem gerust contact met ons op.
              </p>
              <Button asChild variant="outline" size="lg" className="min-h-[44px]">
                <Link href="/contact/">Contact opnemen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
