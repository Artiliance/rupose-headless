import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Hero } from '@/components/blocks/hero'
import { FaqAccordion } from '@/components/blocks/faq-accordion'

export const metadata: Metadata = {
  title: 'Klantenservice | Rupose',
  description: 'Neem contact op met Rupose. Telefonisch bereikbaar ma t/m za, 09:00-17:30. Of stuur een e-mail.',
}

const contactFaqs = [
  {
    question: 'Hoe snel reageer jullie op e-mails?',
    answer: 'We streven ernaar om e-mails binnen 1 werkdag te beantwoorden. In drukke perioden kan dit oplopen tot 2 werkdagen.',
  },
  {
    question: 'Kan ik langskomen in de winkel zonder afspraak?',
    answer:
      'Ja, je bent welkom in onze winkel in Haren tijdens openingstijden. Voor uitgebreid slaapadvies raden wij aan een afspraak te maken zodat we voldoende tijd voor je hebben.',
  },
  {
    question: 'Geven jullie ook advies op locatie?',
    answer:
      'Voor zakelijke klanten (hotels, zorginstellingen) bieden wij in sommige gevallen adviesgesprekken op locatie aan. Neem contact op om de mogelijkheden te bespreken.',
  },
  {
    question: 'Kunnen jullie me helpen bij het kiezen van de juiste matermalen?',
    answer:
      'Absoluut. Dat is juist waar wij goed in zijn. Bel of mail met je slaapvraag en we adviseren je op maat, zonder verkoopdruk.',
  },
]

export default function KlantenservicePage() {
  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Klantenservice"
        title="We helpen je graag"
        intro="Vragen over een product, je bestelling of slaapadvies? We zijn goed bereikbaar via telefoon, e-mail of in de winkel."
      />

      <section className="py-16 md:py-20 bg-background" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4 md:px-6">
          <h2 id="contact-heading" className="sr-only">Contactgegevens</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Contact info */}
            <div>
              <h3 className="font-serif text-2xl font-light text-foreground mb-8">
                Contactgegevens
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-sans text-base font-medium text-foreground mb-0.5">Bezoekadres</p>
                    <p className="font-sans text-base text-muted-foreground leading-relaxed">
                      Rijksstraatweg 167<br />9752 BE Haren (GN)
                    </p>
                    <Link
                      href="https://maps.google.com/?q=Rijksstraatweg+167,+Haren"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-primary hover:underline underline-offset-4 mt-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    >
                      Routebeschrijving
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-sans text-base font-medium text-foreground mb-0.5">Telefoon</p>
                    <a
                      href="tel:+31505344235"
                      className="font-sans text-base text-muted-foreground hover:text-foreground transition-colors min-h-[44px] inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    >
                      +31 50 534 4235
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-sans text-base font-medium text-foreground mb-0.5">E-mail</p>
                    <a
                      href="mailto:info@rupose.nl"
                      className="font-sans text-base text-muted-foreground hover:text-foreground transition-colors min-h-[44px] inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    >
                      info@rupose.nl
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-sans text-base font-medium text-foreground mb-2">Openingstijden</p>
                    <dl className="font-sans text-base text-muted-foreground flex flex-col gap-1">
                      <div className="grid grid-cols-[120px_1fr]">
                        <dt>Maandag t/m vrijdag</dt>
                        <dd>09:00 &ndash; 17:30</dd>
                      </div>
                      <div className="grid grid-cols-[120px_1fr]">
                        <dt>Zaterdag</dt>
                        <dd>10:00 &ndash; 16:00</dd>
                      </div>
                      <div className="grid grid-cols-[120px_1fr]">
                        <dt>Zondag</dt>
                        <dd>Gesloten</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div>
              <h3 className="font-serif text-2xl font-light text-foreground mb-8">
                Stuur een bericht
              </h3>
              <form className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="cf-name" className="font-sans text-sm font-medium text-foreground">Naam</label>
                    <input
                      id="cf-name"
                      type="text"
                      autoComplete="name"
                      className="h-11 rounded-sm border border-border bg-background px-3 font-sans text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Jan de Vries"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="cf-email" className="font-sans text-sm font-medium text-foreground">E-mailadres</label>
                    <input
                      id="cf-email"
                      type="email"
                      autoComplete="email"
                      className="h-11 rounded-sm border border-border bg-background px-3 font-sans text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="jan@voorbeeld.nl"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-subject" className="font-sans text-sm font-medium text-foreground">Onderwerp</label>
                  <input
                    id="cf-subject"
                    type="text"
                    className="h-11 rounded-sm border border-border bg-background px-3 font-sans text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Vraag over mijn bestelling"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-message" className="font-sans text-sm font-medium text-foreground">Bericht</label>
                  <textarea
                    id="cf-message"
                    rows={5}
                    className="rounded-sm border border-border bg-background px-3 py-2.5 font-sans text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y"
                    placeholder="Schrijf hier je vraag of opmerking..."
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 min-h-[44px] rounded-sm bg-primary text-primary-foreground font-sans text-base font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Bericht versturen
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <FaqAccordion
        eyebrow="Klantenservice"
        title="Veelgestelde vragen"
        items={contactFaqs}
        bg="muted"
      />
    </main>
  )
}
