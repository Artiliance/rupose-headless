import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  winkel: {
    title: 'Winkel',
    links: [
      { label: 'Hoeslakens', href: '/winkel/hoeslakens/' },
      { label: 'Hoofdkussens', href: '/winkel/hoofdkussens/' },
      { label: 'Dekbedden', href: '/winkel/dekbedden/' },
      { label: 'Kussenslopen', href: '/winkel/kussenslopen/' },
      { label: 'Moltons', href: '/winkel/moltons/' },
      { label: 'Topmatrassen', href: '/winkel/topdekmatras/' },
    ],
  },
  slaapadvies: {
    title: 'Slaapadvies',
    links: [
      { label: 'Wat is een molton?', href: '/slaapadvies/wat-is-een-molton/' },
      { label: 'Jersey vs katoen hoeslaken', href: '/slaapadvies/jersey-vs-katoen/' },
      { label: 'Welk dekbed kies je?', href: '/slaapadvies/welk-dekbed-kies-je/' },
      { label: 'Alle slaaptips', href: '/slaapadvies/' },
      { label: 'Merken', href: '/merken/' },
    ],
  },
  service: {
    title: 'Klantenservice',
    links: [
      { label: 'Veelgestelde vragen', href: '/klantenservice/faq/' },
      { label: 'Verzending & levering', href: '/klantenservice/verzending/' },
      { label: 'Retourneren', href: '/klantenservice/retour/' },
      { label: 'Maattabel', href: '/klantenservice/maattabel/' },
      { label: 'Over ons', href: '/over-ons/' },
    ],
  },
}

export function SiteFooter() {
  return (
    <footer className="bg-brown text-primary-foreground" aria-label="Sitefooter">
      {/* Main footer */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand col */}
          <div className="space-y-5">
            <Link href="/" aria-label="Rupose — home">
              <Image
                src="https://rupose.nl/wp-content/uploads/2024/01/Logo-opzet-2.svg"
                alt="Rupose"
                width={130}
                height={38}
                className="h-9 w-auto brightness-0 invert"
                unoptimized
              />
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed font-sans">
              Premium specialist in slaapcomfort. Hoogwaardig bedtextiel van
              geselecteerde Europese merken &mdash; voor een betere nachtrust.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/60 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-copper-light" />
                <span>Rijksstraatweg 167, 9752 BE Haren</span>
              </div>
              <a
                href="tel:+31505344235"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-copper-light" />
                <span>+31 50 534 4235</span>
              </a>
              <a
                href="mailto:info@rupose.nl"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
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
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-sans text-primary-foreground/60 hover:text-primary-foreground transition-colors"
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
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-primary-foreground/40">
          <span>&copy; {new Date().getFullYear()} Rupose. Alle rechten voorbehouden.</span>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy/" className="hover:text-primary-foreground/70 transition-colors">
              Privacybeleid
            </Link>
            <Link href="/algemene-voorwaarden/" className="hover:text-primary-foreground/70 transition-colors">
              Algemene voorwaarden
            </Link>
            <Link href="/cookies/" className="hover:text-primary-foreground/70 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
