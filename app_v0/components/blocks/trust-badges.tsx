'use client'

import { ShieldCheck, RefreshCw, Truck } from 'lucide-react'

const badges = [
  {
    id: 'ideal',
    label: 'iDEAL',
    node: (
      <svg aria-hidden="true" viewBox="0 0 38 36" className="h-7 w-auto" fill="none">
        <rect width="38" height="36" rx="4" fill="#CC0066" />
        <text x="6" y="24" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="13" fill="white">iDEAL</text>
      </svg>
    ),
  },
  {
    id: 'klarna',
    label: 'Klarna',
    node: (
      <svg aria-hidden="true" viewBox="0 0 52 20" className="h-7 w-auto" fill="none">
        <rect width="52" height="20" rx="4" fill="#FFB3C7" />
        <text x="7" y="14" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="11" fill="#17120e">Klarna</text>
      </svg>
    ),
  },
  {
    id: 'oeko',
    label: 'OEKO-TEX Standard 100',
    node: (
      <svg aria-hidden="true" viewBox="0 0 80 28" className="h-7 w-auto" fill="none">
        <rect width="80" height="28" rx="4" fill="#005B2E" />
        <text x="6" y="12" fontFamily="Arial, sans-serif" fontSize="6.5" fill="white" fontWeight="bold">OEKO-TEX®</text>
        <text x="6" y="22" fontFamily="Arial, sans-serif" fontSize="6" fill="#9ae38a">STANDARD 100</text>
      </svg>
    ),
  },
  {
    id: 'ssl',
    label: 'SSL-beveiligd',
    node: <ShieldCheck className="w-6 h-6 text-sage flex-shrink-0" aria-hidden="true" />,
  },
  {
    id: 'retour',
    label: '30 dagen retourrecht',
    node: <RefreshCw className="w-6 h-6 text-sage flex-shrink-0" aria-hidden="true" />,
  },
  {
    id: 'delivery',
    label: 'Bezorging in 2 tot 3 werkdagen',
    node: <Truck className="w-6 h-6 text-sage flex-shrink-0" aria-hidden="true" />,
  },
]

export function TrustBadges() {
  return (
    <div
      className="bg-secondary border-b border-border"
      aria-label="Betaal- en betrouwbaarheidskenmerken"
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-8">
          {badges.map((badge) => (
            <li
              key={badge.id}
              className="flex items-center gap-2 text-sm font-sans text-foreground/70"
            >
              {badge.node}
              <span className="hidden sm:inline">{badge.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
