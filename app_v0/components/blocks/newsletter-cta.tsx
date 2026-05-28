'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import { toastSuccess } from '@/lib/toast'

interface NewsletterCtaProps {
  eyebrow?: string
  title?: string
  description?: string
  bg?: 'sand' | 'default'
}

export function NewsletterCta({
  eyebrow = 'Nieuwsbrief',
  title = 'Slaapadvies in je inbox',
  description = 'Geen spam, alleen kennis. Praktische slaaptips, productnieuws en advies van specialisten. Een paar keer per maand.',
  bg = 'sand',
}: NewsletterCtaProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    toastSuccess('Bedankt voor je aanmelding')
  }

  return (
    <section
      aria-label="Nieuwsbrief"
      className={`py-16 md:py-20 border-t border-border ${bg === 'sand' ? 'bg-secondary' : 'bg-background'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4 font-medium">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light leading-tight text-balance mb-4">
            {title}
          </h2>
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8 text-balance">
            {description}
          </p>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                E-mailadres
              </label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="jouw@email.nl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background border-border font-sans text-base placeholder:text-muted-foreground/60 rounded-sm h-12 min-h-[44px]"
                aria-label="E-mailadres voor nieuwsbrief"
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-base tracking-wide h-12 min-h-[44px] px-6 rounded-sm gap-2 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Aanmelden
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </form>
          ) : (
            <div className="max-w-md mx-auto py-4">
              <p className="font-serif text-xl text-foreground font-light">
                Dank voor je aanmelding.
              </p>
              <p className="font-sans text-base text-muted-foreground mt-2">
                Je ontvangt binnenkort jouw eerste slaaptips van Rupose.
              </p>
            </div>
          )}
          {!submitted && (
            <p className="font-sans text-xs text-muted-foreground/60 mt-4">
              Door je aan te melden ga je akkoord met ons{' '}
              <a
                href="/privacyverklaring/"
                className="underline hover:text-muted-foreground transition-colors"
              >
                privacybeleid
              </a>
              . Afmelden kan altijd.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
