'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Package, MapPin, User, Settings, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { toastInfo } from '@/lib/toast'

const navLinks = [
  { label: 'Dashboard', href: '/account/', icon: LayoutDashboard },
  { label: 'Bestellingen', href: '/account/bestellingen/', icon: Package },
  { label: 'Adressen', href: '/account/adressen/', icon: MapPin },
  { label: 'Profiel', href: '/account/profiel/', icon: User },
  { label: 'Voorkeuren', href: '/account/abonnementen/', icon: Settings },
]

export function AccountSidebar() {
  const pathname = usePathname()

  function handleSignOut() {
    toastInfo('Je bent uitgelogd.')
  }

  const linkCls = (href: string) =>
    cn(
      'flex items-center gap-3 min-h-[44px] px-3 py-2 rounded-sm font-sans text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      pathname === href
        ? 'bg-primary/10 text-primary font-medium'
        : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
    )

  return (
    <>
      {/* Desktop sidebar — sticky */}
      <nav
        aria-label="Account navigatie"
        className="hidden md:flex flex-col gap-1 sticky top-28 self-start"
      >
        {navLinks.map(({ label, href, icon: Icon }) => (
          <Link key={href} href={href} className={linkCls(href)}>
            <Icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            {label}
          </Link>
        ))}

        <div className="mt-4 pt-4 border-t border-border">
          <button
            type="button"
            onClick={handleSignOut}
            className="flex items-center gap-3 min-h-[44px] px-3 py-2 w-full rounded-sm font-sans text-sm text-foreground/60 hover:text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            Uitloggen
          </button>
        </div>
      </nav>

      {/* Mobile tabs — horizontal scroll */}
      <nav
        aria-label="Account navigatie"
        className="md:hidden w-full overflow-x-auto flex items-center gap-1 pb-3 mb-6 border-b border-border"
      >
        {navLinks.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-2 whitespace-nowrap px-3 py-2 min-h-[44px] rounded-sm font-sans text-sm flex-shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              pathname === href
                ? 'bg-primary/10 text-primary font-medium'
                : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
            )}
          >
            <Icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            {label}
          </Link>
        ))}
        <button
          type="button"
          onClick={handleSignOut}
          className="flex items-center gap-2 whitespace-nowrap px-3 py-2 min-h-[44px] rounded-sm font-sans text-sm flex-shrink-0 text-foreground/60 hover:text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          Uitloggen
        </button>
      </nav>
    </>
  )
}
