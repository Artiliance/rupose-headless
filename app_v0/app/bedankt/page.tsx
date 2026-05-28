import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { OrderTracker } from '@/components/blocks/order-tracker'
import { AdviceTeaser } from '@/components/blocks/advice-teaser'
import { articles } from '@/lib/articles'

const CDN = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images'

export const metadata: Metadata = {
  title: 'Bestelling geplaatst | Rupose',
  description: 'Bedankt voor je bestelling bij Rupose. Je ontvangt een bevestiging per e-mail.',
  robots: { index: false, follow: false },
}

const mockOrderLines = [
  {
    id: '1',
    name: 'Bella Donna Hoeslaken Jersey',
    variant: 'Wit, 90x200 cm',
    qty: 1,
    price: 89,
    image: `${CDN}/hoeslakens/bella-donna-jersey-wit.jpg`,
  },
  {
    id: '2',
    name: 'Yumeko Percale Kussensloop',
    variant: 'Ivoor, 60x70 cm',
    qty: 2,
    price: 45,
    image: `${CDN}/kussens/yumeko-percale-kussensloop-ivoor.jpg`,
  },
]

const trackerSteps = [
  { label: 'Geplaatst',   date: '28 mei 2026' },
  { label: 'Bevestigd',   date: '28 mei 2026', description: 'Betaling ontvangen' },
  { label: 'Verzonden',   date: 'Verwacht: 29 mei' },
  { label: 'Geleverd',    date: 'Verwacht: 30 mei' },
]

const subtotal = mockOrderLines.reduce((s, l) => s + l.price * l.qty, 0)
const shipping = 0
const total = subtotal + shipping

export default function BedanktPage() {
  return (
    <main>
      {/* Confirmation hero */}
      <section className="py-16 md:py-24 bg-secondary/40 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" aria-hidden="true" />
            </div>
          </div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-3 font-medium">
            Bestelling geplaatst
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground font-light mb-4 text-balance">
            Bedankt voor je bestelling!
          </h1>
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-2 text-balance">
            Je bestelnummer is{' '}
            <span className="font-medium text-foreground">#ORD-1043</span>.
            We hebben een bevestiging gestuurd naar je e-mailadres.
          </p>
          <p className="font-sans text-sm text-muted-foreground mb-8">
            Verwachte levering: <span className="text-foreground font-medium">vrijdag 30 mei 2026</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-sm min-h-[44px] px-8 font-sans text-base">
              <Link href="/account/bestellingen/">
                <Package className="w-4 h-4 mr-2" aria-hidden="true" />
                Mijn bestellingen
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-sm min-h-[44px] px-8 font-sans text-base"
            >
              <Link href="/winkel/">
                Verder winkelen
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Order detail */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl flex flex-col gap-10">

          {/* Tracker */}
          <OrderTracker currentStep={1} steps={trackerSteps} />

          {/* Line items */}
          <div>
            <h2 className="font-serif text-2xl font-light text-foreground mb-4">
              Artikelen in je bestelling
            </h2>
            <div className="flex flex-col divide-y divide-border border border-border rounded-sm overflow-hidden">
              {mockOrderLines.map((item) => (
                <div key={item.id} className="flex items-center gap-4 px-4 py-4 bg-background">
                  <div className="w-14 h-14 bg-secondary rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-base font-medium text-foreground">{item.name}</p>
                    <p className="font-sans text-sm text-muted-foreground">{item.variant}</p>
                    <p className="font-sans text-sm text-muted-foreground">Aantal: {item.qty}</p>
                  </div>
                  <p className="font-sans text-base font-medium text-foreground flex-shrink-0">
                    {new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(
                      item.price * item.qty
                    )}
                  </p>
                </div>
              ))}

              {/* Totals */}
              <div className="flex flex-col gap-1.5 px-4 py-4 bg-secondary/40">
                <div className="flex justify-between font-sans text-sm text-muted-foreground">
                  <span>Subtotaal</span>
                  <span>{new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(subtotal)}</span>
                </div>
                <div className="flex justify-between font-sans text-sm text-muted-foreground">
                  <span>Verzending</span>
                  <span className="text-foreground">Gratis</span>
                </div>
                <div className="flex justify-between font-sans text-base font-medium text-foreground border-t border-border pt-2 mt-1">
                  <span>Totaal (incl. btw)</span>
                  <span>{new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email info */}
          <div className="flex items-start gap-4 p-5 bg-secondary/30 border border-border rounded-sm">
            <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-sans text-sm font-medium text-foreground mb-1">
                Bevestiging onderweg
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Je ontvangt een bevestigingsmail met alle details. Heb je vragen over je bestelling?
                Neem contact op via{' '}
                <a
                  href="mailto:info@rupose.nl"
                  className="text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  info@rupose.nl
                </a>{' '}
                of{' '}
                <a
                  href="tel:+31503180234"
                  className="text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  050 318 02 34
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advice teaser */}
      <AdviceTeaser
        eyebrow="Terwijl je wacht"
        title="Tips voor een betere nachtrust"
        articles={articles.slice(0, 3).map((a) => ({
          title: a.title,
          excerpt: a.excerpt,
          tag: a.tag,
          readTime: a.readTime,
          image: a.image,
          href: `/slaapadvies/${a.slug}/`,
        }))}
        cta={{ label: 'Alle slaaptips', href: '/slaapadvies/' }}
        bg="muted"
      />
    </main>
  )
}
