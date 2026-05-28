'use client'

import Link from 'next/link'
import { ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { FaqAccordion } from '@/components/blocks/faq-accordion'
import { CtaBanner } from '@/components/blocks/cta-banner'
import { Hero } from '@/components/blocks/hero'
import { toastSuccess } from '@/lib/toast'

const contactFaqs = [
  {
    question: 'Hoe lang duurt de levering?',
    answer:
      'De meeste bestellingen worden binnen 2 tot 3 werkdagen bezorgd. Bij bestellingen boven de 75 euro is verzending gratis. Producten die op voorraad zijn, verzenden we dezelfde dag als je voor 15:00 bestelt.',
  },
  {
    question: 'Kan ik mijn bestelling retourneren?',
    answer:
      'Ja, je hebt 30 dagen bedenktijd na ontvangst van je bestelling. Producten moeten ongebruikt en in originele verpakking worden teruggestuurd. Neem contact met ons op voor een retourlabel.',
  },
  {
    question: 'Bieden jullie persoonlijk slaapadvies?',
    answer:
      'Absoluut. Bel ons of stuur een e-mail met je vragen. We helpen je graag met advies over het juiste hoeslaken, dekbed of hoofdkussen. Je kunt ook langskomen in onze winkel in Haren voor een persoonlijk gesprek.',
  },
  {
    question: 'Wat is het verschil tussen warmteklassen bij dekbedden?',
    answer:
      'Warmteklasse 1 is het lichtst en geschikt voor warme zomernachten. Warmteklasse 4 is het warmst, ideaal voor koude winters of als je snel koud bent. Klasse 2 en 3 zijn geschikt voor lente, herfst en tussenseizoenen.',
  },
  {
    question: 'Hebben jullie ook maatwerk hoeslakens?',
    answer:
      'Ja, via Bella Donna bieden we hoeslakens in meer dan 50 maten, inclusief speciale afmetingen voor caravans, campers en split-topper matrassen. Neem contact op voor advies over jouw specifieke maat.',
  },
]

export function ContactPageClient() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toastSuccess('Bericht verzonden. We nemen zo snel mogelijk contact op.')
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <main>
      <Hero
        variant="simple"
        eyebrow="Klantenservice"
        title="Contact"
        intro="Heb je vragen over onze producten, je bestelling of wil je persoonlijk slaapadvies? We helpen je graag."
      />

      {/* Contact Form + Info */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-sm p-6 md:p-8">
              <h2 className="font-serif text-2xl text-foreground mb-6">
                Stuur ons een bericht
              </h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">
                    Naam
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Je volledige naam"
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    E-mailadres
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="je@email.nl"
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base">
                    Onderwerp
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Waar gaat je vraag over?"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">
                    Bericht
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Stel je vraag of vertel ons hoe we je kunnen helpen..."
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-base font-medium"
                >
                  Verstuur bericht
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  We reageren meestal binnen 24 uur op werkdagen.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Onze gegevens
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Adres</p>
                      <p className="text-muted-foreground">
                        Rijksstraatweg 167
                        <br />
                        9752 BE Haren
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Telefoon</p>
                      <a
                        href="tel:+31505344235"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +31 50 534 4235
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">E-mail</p>
                      <a
                        href="mailto:info@rupose.nl"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@rupose.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Openingstijden</p>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>Maandag t/m vrijdag: 10:00 - 18:00</p>
                        <p>Zaterdag: 10:00 - 17:00</p>
                        <p>Zondag: gesloten</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="border border-border rounded-sm aspect-[4/3] overflow-hidden">
                <iframe
                  title="Rupose — Rijksstraatweg 167, Haren"
                  src="https://www.google.com/maps?q=Rijksstraatweg+167,+9752+BE+Haren&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion
        title="Veelgestelde vragen"
        items={contactFaqs}
      />

      {/* CTA */}
      <CtaBanner
        title="Liever persoonlijk advies?"
        description="Bel ons of kom langs in onze winkel in Haren. We nemen graag de tijd voor je."
        cta={{ label: 'Bel ons', href: 'tel:+31505344235' }}
      />
    </main>
  )
}
