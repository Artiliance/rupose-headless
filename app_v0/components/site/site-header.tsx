'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, Search, ShoppingBag, User, Phone, Mail, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SearchOverlay } from '@/components/blocks/search-overlay'

const LOGO_URL =
  'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images/logo/rupose-logo.svg'

const navItems = [
  { label: 'Winkel', href: '/winkel/' },
  { label: 'Slaapadvies', href: '/slaapadvies/' },
  { label: 'Merken', href: '/merken/' },
  { label: 'Over', href: '/over-ons/' },
  { label: 'Contact', href: '/contact/' },
]

export function SiteHeader() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileQuery, setMobileQuery] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleMobileSearch(e: React.FormEvent) {
    e.preventDefault()
    const q = mobileQuery.trim()
    if (!q) return
    setMobileOpen(false)
    router.push(`/zoeken/?q=${encodeURIComponent(q)}`)
  }

  return (
    <>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'bg-background/95 backdrop-blur-md border-b border-border/60',
          'transition-shadow duration-300',
          scrolled && 'shadow-sm'
        )}
      >
        {/* Top bar */}
        <div
          className={cn(
            'bg-primary text-primary-foreground overflow-hidden transition-all duration-300',
            scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
          )}
        >
          <div className="container mx-auto px-4 md:px-6 py-2 flex items-center justify-between gap-4">
            <span className="font-sans text-xs tracking-wide">
              Gratis verzending vanaf €75. Bezorging binnen 2 tot 3 werkdagen.
            </span>
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:+31505344235"
                className="flex items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors"
              >
                <Phone className="w-3 h-3" aria-hidden="true" />
                <span>+31 50 534 4235</span>
              </a>
              <a
                href="mailto:info@rupose.nl"
                className="flex items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors"
              >
                <Mail className="w-3 h-3" aria-hidden="true" />
                <span>info@rupose.nl</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main nav row */}
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={cn(
              'grid grid-cols-[auto_1fr_auto] items-center gap-4 transition-[height] duration-200',
              scrolled ? 'h-14' : 'h-16 md:h-20'
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label="Rupose, terug naar home"
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Image
                src={LOGO_URL}
                alt="Rupose"
                width={160}
                height={44}
                className="h-8 md:h-10 w-auto object-contain"
                unoptimized
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center justify-center gap-6 lg:gap-8"
              aria-label="Hoofdnavigatie"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative font-sans text-base font-medium text-foreground/70 hover:text-foreground transition-colors min-h-[44px] flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </nav>

            {/* Action icons */}
            <div className="flex items-center justify-end gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="w-11 h-11 text-foreground/60 hover:text-foreground hover:bg-secondary rounded-sm"
                aria-label="Zoeken"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="w-5 h-5" aria-hidden="true" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex w-11 h-11 text-foreground/60 hover:text-foreground hover:bg-secondary rounded-sm"
                aria-label="Mijn account"
                asChild
              >
                <Link href="/account/">
                  <User className="w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-11 h-11 text-foreground/60 hover:text-foreground hover:bg-secondary rounded-sm relative"
                aria-label="Winkelwagen"
                asChild
              >
                <Link href="/winkelwagen/">
                  <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                  <span
                    className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                </Link>
              </Button>

              {/* Mobile hamburger */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden w-11 h-11 text-foreground/60 hover:text-foreground hover:bg-secondary rounded-sm"
                    aria-label="Menu openen"
                  >
                    <Menu className="w-5 h-5" aria-hidden="true" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="bg-background border-l border-border w-80 p-0 flex flex-col"
                >
                  {/* Sheet header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                    <Image
                      src={LOGO_URL}
                      alt="Rupose"
                      width={120}
                      height={34}
                      className="h-8 w-auto object-contain"
                      unoptimized
                    />
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="w-11 h-11 flex items-center justify-center text-foreground/60 hover:text-foreground rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Menu sluiten"
                    >
                      <X className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Mobile search bar */}
                  <form onSubmit={handleMobileSearch} className="px-6 pt-5 pb-2">
                    <div className="flex items-center gap-2 border border-border rounded-sm px-3 h-11 focus-within:border-foreground/40 transition-colors bg-background">
                      <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                      <input
                        type="search"
                        value={mobileQuery}
                        onChange={(e) => setMobileQuery(e.target.value)}
                        placeholder="Zoeken..."
                        className="flex-1 bg-transparent font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                        aria-label="Zoekterm"
                        autoComplete="off"
                      />
                    </div>
                  </form>

                  {/* Nav items */}
                  <nav
                    className="flex flex-col px-6 py-4 gap-0 flex-1"
                    aria-label="Mobiele navigatie"
                  >
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-serif text-2xl font-light text-foreground min-h-[56px] flex items-center border-b border-border/40 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {item.label}
                      </Link>
                    ))}

                    {/* Account link in mobile menu */}
                    <Link
                      href="/account/"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 font-sans text-base text-foreground/70 hover:text-foreground min-h-[56px] border-b border-border/40 transition-colors mt-2"
                    >
                      <User className="w-4 h-4" aria-hidden="true" />
                      Mijn account
                    </Link>
                  </nav>

                  {/* Contact footer */}
                  <div className="px-6 py-6 bg-secondary/40 border-t border-border space-y-3">
                    <a
                      href="tel:+31505344235"
                      className="flex items-center gap-2 text-base text-foreground/60 hover:text-foreground transition-colors min-h-[44px]"
                    >
                      <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      <span>+31 50 534 4235</span>
                    </a>
                    <a
                      href="mailto:info@rupose.nl"
                      className="flex items-center gap-2 text-base text-foreground/60 hover:text-foreground transition-colors min-h-[44px]"
                    >
                      <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      <span>info@rupose.nl</span>
                    </a>
                    <p className="text-sm text-muted-foreground">Gratis verzending v.a. €75</p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
