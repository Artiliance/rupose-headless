'use client'

import Link from 'next/link'
import { Package, MapPin, User, Settings } from 'lucide-react'
import { motion } from 'motion/react'
import { variantFadeUp, variantStagger } from '@/lib/motion'
import { toastInfo } from '@/lib/toast'

const tiles = [
  {
    icon: Package,
    title: 'Bestellingen',
    description: 'Bekijk de status van je lopende en afgeronde bestellingen.',
    href: '/account/bestellingen/',
    count: '4 bestellingen',
  },
  {
    icon: MapPin,
    title: 'Adressen',
    description: 'Beheer je bezorg- en factuuradressen voor een sneller afrekenen.',
    href: '/account/adressen/',
    count: '2 adressen',
  },
  {
    icon: User,
    title: 'Profiel',
    description: 'Beheer je naam, e-mailadres, wachtwoord en persoonlijke gegevens.',
    href: '/account/profiel/',
    count: null,
  },
  {
    icon: Settings,
    title: 'Voorkeuren',
    description: 'Stel je nieuwsbrief- en communicatievoorkeuren in.',
    href: '/account/abonnementen/',
    count: null,
  },
]

export function AccountDashboard() {
  const shouldReduce = false
  const containerV = variantStagger(shouldReduce, 0.08, 0.05)
  const itemV = variantFadeUp(shouldReduce, 16)

  return (
    <section className="py-12 md:py-16 bg-background" aria-label="Account overzicht">
      <div className="container mx-auto px-4 md:px-6">
        {/* Welcome */}
        <div className="mb-10">
          <p className="font-sans text-sm text-muted-foreground mb-1">Welkom terug</p>
          <h2 className="font-serif text-2xl font-light text-foreground">Mijn account</h2>
        </div>

        {/* Dashboard tiles */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          variants={containerV}
          initial="hidden"
          animate="visible"
        >
          {tiles.map((tile) => {
            const Icon = tile.icon
            return (
              <motion.div key={tile.href} variants={itemV}>
                <Link
                  href={tile.href}
                  className="group flex flex-col gap-4 p-6 bg-secondary border border-border rounded-sm hover:border-primary/30 hover:shadow-sm transition-all duration-300 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    {tile.count && (
                      <span className="font-sans text-xs text-muted-foreground bg-background border border-border px-2 py-1 rounded-sm">
                        {tile.count}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-light text-foreground mb-1 group-hover:text-primary transition-colors">
                      {tile.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {tile.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Sign out */}
        <div className="mt-10 pt-8 border-t border-border">
          <button
            className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline min-h-[44px] inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            type="button"
            onClick={() => toastInfo('Je bent uitgelogd.')}
          >
            Uitloggen
          </button>
        </div>
      </div>
    </section>
  )
}
