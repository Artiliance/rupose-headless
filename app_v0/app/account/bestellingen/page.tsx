import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/blocks/hero'
import { AccountSidebar } from '@/components/blocks/account-sidebar'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bestellingen | Mijn account | Rupose',
  description: 'Bekijk al je bestellingen en de huidige status.',
}

const statusMap: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
  behandeling: { label: 'In behandeling', variant: 'secondary' },
  verzonden:   { label: 'Verzonden',       variant: 'default' },
  geleverd:    { label: 'Geleverd',        variant: 'outline' },
  retour:      { label: 'Retour',          variant: 'destructive' },
}

const orders = [
  { id: 'ORD-1042', date: '22 mei 2026',    total: '€ 179,00', status: 'behandeling' },
  { id: 'ORD-1031', date: '14 mei 2026',    total: '€ 89,00',  status: 'verzonden' },
  { id: 'ORD-1024', date: '3 april 2026',   total: '€ 214,50', status: 'geleverd' },
  { id: 'ORD-1018', date: '18 februari 2026', total: '€ 59,00', status: 'retour' },
]

export default function BestellingenPage() {
  return (
    <main>
      <Hero variant="simple" title="Bestellingen" eyebrow="Mijn account" />
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16">
          <AccountSidebar />

          <section aria-labelledby="orders-heading">
            <h2 id="orders-heading" className="font-serif text-2xl font-light text-foreground mb-8">
              Jouw bestellingen
            </h2>

            <div className="flex flex-col divide-y divide-border border border-border rounded-sm overflow-hidden">
              {orders.map((order) => {
                const s = statusMap[order.status]
                return (
                  <Link
                    key={order.id}
                    href={`/account/bestellingen/${order.id}/`}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 py-5 bg-background hover:bg-secondary/50 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-sans text-base font-medium text-foreground group-hover:text-primary transition-colors">
                        #{order.id}
                      </span>
                      <span className="font-sans text-sm text-muted-foreground">{order.date}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-sans text-base font-medium text-foreground">{order.total}</span>
                      <Badge variant={s.variant}>{s.label}</Badge>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
