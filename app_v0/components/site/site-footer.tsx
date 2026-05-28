import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { TrustBadges } from '@/components/blocks/trust-badges'

const LOGO_URL =
  'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images/logo/rupose-logo.svg'

const footerLinks = {
  winkel: {
    title: 'Winkel',
    links: [
      { label: 'Alle categorieën', href: '/winkel/' },
      { label: 'Hoeslakens', href: '/winkel/hoeslakens/' },
      { label: 'Dekbedden', href: '/winkel/dekbedden/' },
      { label: 'Hoofdkussens', href: '/winkel/hoofdkussens/' },
      { label: 'Topmatrassen', href: '/winkel/topdekmatras/' },
      { label: 'Moltons', href: '/winkel/moltons/' },
    ],
  },
  advies: {
    title: 'Slaapadvies',
    links: [
      { label: 'Alle slaaptips', href: '/slaapadvies/' },
      { label: 'Merken', href: '/merken/' },
      { label: 'Natuurlijk slapen', href: '/natuurlijk-slapen/' },
      { label: 'Duurzaamheid', href: '/duurzaamheid/' },
      { label: 'Slaapinnovaties', href: '/slaapinnovaties/' },
    ],
  },
  service: {
    title: 'Klantenservice',
    links: [
      { label: 'Veelgestelde vragen', href: '/faq/' },
      { label: 'Levertijd en verzendkosten', href: '/levertijd-en-verzendkosten/' },
      { label: 'Retourbeleid', href: '/retourbeleid/' },
      { label: 'Garantie en klachten', href: '/garantie-en-klachten/' },
      { label: 'Betaalmethodes', href: '/betaalmethodes/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
}

export function SiteFooter() {
  return (
    <footer className="bg-brown text-primary-foreground" aria-label="Sitefooter">
      {/* Trust badges strip */}
      <TrustBadges />

      {/* Main footer */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand col */}
          <div className="space-y-5">
              <Link href="/" aria-label="Rupose, home" className="inline-block">
              <span className="font-serif text-2xl font-medium tracking-[0.18em] text-primary-foreground">
                RUPOSE
              </span>
            </Link>
            <p className="text-base text-primary-foreground/70 leading-relaxed font-sans">
              Premium specialist in slaapcomfort. Hoogwaardig bedtextiel van
              geselecteerde Europese merken, voor een betere nachtrust.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/60 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-copper-light" />
                <span>Rijksstraatweg 167, 9752 BE Haren</span>
              </div>
              <a
                href="tel:+31505344235"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-copper-light" />
                <span>+31 50 534 4235</span>
              </a>
              <a
                href="mailto:info@rupose.nl"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors min-h-[44px]"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-copper-light" />
                <span>info@rupose.nl</span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="font-serif text-base font-medium text-primary-foreground tracking-wide">
                {col.title}
              </h3>
              <ul className="space-y-1.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-sans text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-sans text-primary-foreground/40">
          <span>
            &copy; {new Date().getFullYear()} Rupose. Alle rechten voorbehouden. &middot;{' '}
            <a
              href="https://artiliance.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/70 transition-colors"
            >
              Website door Artiliance
            </a>
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacyverklaring/" className="hover:text-primary-foreground/70 transition-colors inline-flex items-center py-1">
              Privacyverklaring
            </Link>
            <Link href="/algemene-voorwaarden/" className="hover:text-primary-foreground/70 transition-colors inline-flex items-center py-1">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
