'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, Search, ShoppingBag, Phone, Mail, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Winkel', href: '/winkel/' },
  { label: 'Slaapadvies', href: '/slaapadvies/' },
  { label: 'Merken', href: '/merken/' },
  { label: 'Over', href: '/over-ons/' },
  { label: 'Contact', href: '/contact/' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-linen/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      )}
    >
      {/* Top bar */}
      <div
        className={cn(
          'bg-sage text-primary-foreground text-xs py-2 transition-all duration-300 overflow-hidden',
          scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-10 opacity-100'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
          <span className="font-sans tracking-wide">
            Gratis verzending vanaf €75 &mdash; Bezorging binnen 2&ndash;3 werkdagen
          </span>
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+31505344235"
              className="flex items-center gap-1 hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+31 50 534 4235</span>
            </a>
            <a
              href="mailto:info@rupose.nl"
              className="flex items-center gap-1 hover:text-primary-foreground/80 transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>info@rupose.nl</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Rupose — home">
            <Image
              src="https://rupose.nl/wp-content/uploads/2024/01/Logo-opzet-2.svg"
              alt="Rupose"
              width={140}
              height={40}
              className="h-9 md:h-11 w-auto"
              unoptimized
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Hoofdnavigatie">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-sans text-brown-muted hover:text-brown tracking-wide transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-copper transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-brown-muted hover:text-brown hover:bg-sand"
              aria-label="Zoeken"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-brown-muted hover:text-brown hover:bg-sand relative"
              aria-label="Winkelwagen"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-copper" aria-hidden="true" />
            </Button>

            {/* Mobile hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-brown-muted hover:text-brown hover:bg-sand"
                  aria-label="Menu openen"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-linen border-border w-80 p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                    <Image
                      src="https://rupose.nl/wp-content/uploads/2024/01/Logo-opzet-2.svg"
                      alt="Rupose"
                      width={120}
                      height={34}
                      className="h-8 w-auto"
                      unoptimized
                    />
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="text-brown-muted hover:text-brown"
                      aria-label="Menu sluiten"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Mobiele navigatie">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-serif text-2xl text-brown py-2 border-b border-border/50 hover:text-sage transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto px-6 py-6 bg-sand-deep/30 border-t border-border space-y-2">
                    <a href="tel:+31505344235" className="flex items-center gap-2 text-sm text-brown-muted hover:text-brown transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>+31 50 534 4235</span>
                    </a>
                    <a href="mailto:info@rupose.nl" className="flex items-center gap-2 text-sm text-brown-muted hover:text-brown transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>info@rupose.nl</span>
                    </a>
                    <p className="text-xs text-brown-muted pt-1">Gratis verzending v.a. €75</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
