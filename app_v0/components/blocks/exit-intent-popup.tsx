'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toastSuccess } from '@/lib/toast'

const EXCLUDED_PATHS = [
  '/winkelwagen',
  '/afrekenen',
  '/bedankt',
  '/account',
]

const SESSION_KEY = 'rupose_exit_intent_shown'
const MIN_DELAY_MS = 15_000

export function ExitIntentPopup() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const readyRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Check if current route is excluded
  const isExcluded = EXCLUDED_PATHS.some((p) => pathname.startsWith(p))

  useEffect(() => {
    // Skip on excluded routes or if already shown this session
    if (isExcluded) return
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(SESSION_KEY)) return

    // Mark as ready only after MIN_DELAY_MS
    timerRef.current = setTimeout(() => {
      readyRef.current = true
    }, MIN_DELAY_MS)

    function handleMouseLeave(e: MouseEvent) {
      // Only trigger when cursor exits from the top
      if (!readyRef.current) return
      if (e.clientY > 10) return
      if (sessionStorage.getItem(SESSION_KEY)) return

      sessionStorage.setItem(SESSION_KEY, '1')
      setOpen(true)
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isExcluded])

  // Reset readyRef when route changes (but don't re-show if already shown)
  useEffect(() => {
    readyRef.current = false
    if (timerRef.current) clearTimeout(timerRef.current)
    if (isExcluded) return
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(SESSION_KEY)) return

    timerRef.current = setTimeout(() => {
      readyRef.current = true
    }, MIN_DELAY_MS)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [pathname, isExcluded])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return
    toastSuccess('Aanmelding ontvangen. Check je inbox voor de kortingscode.')
    setOpen(false)
    setEmail('')
  }

  if (isExcluded) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className={[
          'sm:max-w-md bg-background border-border p-0 overflow-hidden',
          'motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in-0',
          'motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=closed]:animate-out',
          'motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=closed]:zoom-out-95',
          'motion-reduce:data-[state=open]:animate-none motion-reduce:data-[state=closed]:animate-none',
        ].join(' ')}
        aria-labelledby="exit-intent-title"
        aria-describedby="exit-intent-desc"
      >
        {/* Accent bar */}
        <div className="h-1 w-full bg-primary" aria-hidden="true" />

        <div className="px-8 py-8">
          <DialogHeader className="mb-6">
            <DialogTitle
              id="exit-intent-title"
              className="font-serif text-2xl font-light text-brown text-balance"
            >
              Even wachten&hellip;
            </DialogTitle>
            <DialogDescription
              id="exit-intent-desc"
              className="font-sans text-base text-muted-foreground leading-relaxed text-balance mt-2"
            >
              Voor je gaat: meld je aan voor onze nieuwsbrief en ontvang{' '}
              <strong className="text-foreground font-medium">10% korting</strong> op je eerste
              bestelling.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="exit-email"
                className="font-sans text-sm font-medium text-foreground"
              >
                E-mailadres
              </label>
              <Input
                id="exit-email"
                type="email"
                autoComplete="email"
                placeholder="jouw@emailadres.nl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 font-sans text-base"
                aria-required="true"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 font-sans text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm"
            >
              Claim 10% korting
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="font-sans text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors min-h-[44px] inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Nee bedankt, ik betaal liever de volle prijs
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
