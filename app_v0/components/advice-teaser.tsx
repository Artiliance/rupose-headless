import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

const adviceCards = [
  {
    title: 'Wat is een molton?',
    href: '/slaapadvies/wat-is-een-molton/',
    image: 'https://rupose.nl/wp-content/uploads/2025/08/MCD9710-groot.jpeg',
    readTime: '4 min',
    excerpt:
      'Een molton beschermt je matras en verbetert je slaapcomfort. Ontdek de werking, de materialen en waarom een goede molton het verschil maakt.',
  },
  {
    title: 'Jersey vs. katoen hoeslaken',
    href: '/slaapadvies/jersey-vs-katoen/',
    image: 'https://rupose.nl/wp-content/uploads/2025/08/MCD9691-groot.jpeg',
    readTime: '5 min',
    excerpt:
      'Jersey strekt mee, katoen ademt beter. Of toch niet? We leggen de echte verschillen uit — en helpen je kiezen voor jouw slaapstijl.',
  },
  {
    title: 'Welk dekbed past bij jouw seizoen?',
    href: '/slaapadvies/welk-dekbed-kies-je/',
    image: 'https://rupose.nl/wp-content/uploads/2025/08/MCD9646-Edit-groot.jpeg',
    readTime: '6 min',
    excerpt:
      'Warmteklasse 1 t/m 4 — wat betekent het? En welk materiaal past bij jou? Dons, wol of synthetisch: een eerlijk overzicht.',
  },
]

export function AdviceTeaser() {
  return (
    <section className="bg-sand" aria-label="Slaapadvies">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-copper mb-3">
              Kennisbank
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brown leading-tight text-balance">
              Slaapadvies van specialisten
            </h2>
          </div>
          <Link
            href="/slaapadvies/"
            className="flex items-center gap-2 font-sans text-sm text-brown-muted hover:text-brown transition-colors group"
          >
            Alle artikelen
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {adviceCards.map((card) => (
            <article key={card.href} className="group flex flex-col">
              <Link href={card.href} className="relative overflow-hidden rounded-sm aspect-[16/10] block mb-5" tabIndex={-1}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </Link>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-3.5 h-3.5 text-brown-muted" aria-hidden="true" />
                <span className="font-sans text-xs text-brown-muted">{card.readTime} leestijd</span>
              </div>
              <Link href={card.href}>
                <h3 className="font-serif text-xl font-light text-brown hover:text-sage transition-colors mb-2.5 leading-snug text-balance">
                  {card.title}
                </h3>
              </Link>
              <p className="font-sans text-sm text-brown-muted leading-relaxed mb-4 flex-1">
                {card.excerpt}
              </p>
              <Link
                href={card.href}
                className="flex items-center gap-1.5 font-sans text-xs font-medium text-copper hover:text-copper/80 transition-colors group/link mt-auto"
              >
                Lees verder
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
