'use client'

import Link from 'next/link'
import { ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { FaqAccordion } from '@/components/blocks/faq-accordion'
import { CtaBanner } from '@/components/blocks/cta-banner'
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

export default function ContactPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toastSuccess('Bericht verzonden. We nemen zo snel mogelijk contact op.')
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <main className="pt-28 md:pt-32">
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-foreground font-medium">Contact</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="bg-secondary/20 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Contact
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Heb je vragen over onze producten, je bestelling of wil je persoonlijk
            slaapadvies? We helpen je graag.
          </p>
        </div>
      </header>

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
                        9752 BH Haren
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

              {/* Map placeholder */}
              <div className="bg-secondary/30 border border-border rounded-sm aspect-[4/3] flex items-center justify-center">
                <p className="text-muted-foreground text-sm">
                  Kaart: Rijksstraatweg 167, Haren
                </p>
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
