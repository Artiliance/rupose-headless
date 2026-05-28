'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MessageCircle, Phone, Mail, Clock, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Backdrop — click-outside to close on mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Popover panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contactgegevens"
        className={cn(
          'fixed bottom-[4.5rem] right-4 z-50 w-72',
          'bg-background border border-border rounded-lg shadow-xl',
          'transition-all duration-200 origin-bottom-right',
          open
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none',
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <span className="font-serif text-base font-medium text-foreground">
            Contact
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Sluit contactvenster"
            className="w-7 h-7 flex items-center justify-center rounded-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-4 flex flex-col gap-3">
          {/* Phone */}
          <a
            href="tel:+31505344235"
            className="flex items-center gap-3 min-h-[44px] text-foreground hover:text-primary transition-colors group"
          >
            <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
              <Phone className="w-4 h-4" aria-hidden="true" />
            </span>
            <div>
              <p className="font-sans text-xs text-muted-foreground leading-none mb-0.5">Bellen</p>
              <p className="font-sans text-sm font-medium">+31 50 534 4235</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@rupose.nl"
            className="flex items-center gap-3 min-h-[44px] text-foreground hover:text-primary transition-colors group"
          >
            <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
              <Mail className="w-4 h-4" aria-hidden="true" />
            </span>
            <div>
              <p className="font-sans text-xs text-muted-foreground leading-none mb-0.5">E-mail</p>
              <p className="font-sans text-sm font-medium">info@rupose.nl</p>
            </div>
          </a>

          {/* Opening hours */}
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
            </span>
            <div>
              <p className="font-sans text-xs text-muted-foreground leading-none mb-1">Openingstijden</p>
              <ul className="font-sans text-sm text-foreground space-y-0.5">
                <li>Ma t/m vr: 09:00 - 17:30</li>
                <li>Zaterdag: 10:00 - 17:00</li>
                <li className="text-muted-foreground">Zondag: gesloten</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact/"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center justify-between w-full min-h-[44px] px-4 py-2.5 rounded-sm bg-primary text-primary-foreground font-sans text-sm font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Stuur een bericht
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? 'Sluit contactmenu' : 'Open contactmenu'}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {open
          ? <X className="w-5 h-5" aria-hidden="true" />
          : <MessageCircle className="w-5 h-5" aria-hidden="true" />
        }
      </button>
    </>
  )
}
