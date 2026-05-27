"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function NewsletterCta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section
      aria-label="Nieuwsbrief"
      className="py-20 md:py-24 bg-sand border-t border-border"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-copper mb-4 font-medium">
            Nieuwsbrief
          </p>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl text-brown font-light leading-tight text-balance mb-4">
            Slaapadvies in je inbox
          </h2>
          <p className="font-sans text-base text-brown-muted leading-relaxed mb-8 text-balance">
            Geen spam, alleen kennis. Praktische slaaptips, productnieuws en
            advies van specialisten — een paar keer per maand.
          </p>

          {/* Form */}
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
                className="flex-1 bg-background border-border font-sans text-sm text-brown placeholder:text-brown-muted/60 rounded-sm h-11 focus-visible:ring-sage"
                aria-label="E-mailadres voor nieuwsbrief"
              />
              <Button
                type="submit"
                className="bg-copper hover:bg-copper/90 text-primary-foreground font-sans text-sm tracking-wide h-11 px-6 rounded-sm gap-2 flex-shrink-0"
              >
                Aanmelden
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          ) : (
            <div className="max-w-md mx-auto py-4">
              <p className="font-serif text-xl text-brown font-light">
                Dank voor je aanmelding.
              </p>
              <p className="font-sans text-sm text-brown-muted mt-2">
                Je ontvangt binnenkort jouw eerste slaaptips van Rupose.
              </p>
            </div>
          )}

          {/* Fine print */}
          {!submitted && (
            <p className="font-sans text-xs text-brown-muted/60 mt-4">
              Door je aan te melden ga je akkoord met ons{" "}
              <a
                href="/privacy-policy/"
                className="underline hover:text-brown-muted transition-colors"
              >
                privacybeleid
              </a>
              . Afmelden kan altijd.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
