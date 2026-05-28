import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/blocks/hero'
import { AccountSidebar } from '@/components/blocks/account-sidebar'
import { OrderTracker } from '@/components/blocks/order-tracker'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Download, Truck } from 'lucide-react'

const CDN = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images'

const mockOrders: Record<string, {
  id: string; date: string; total: string; status: string;
  items: { name: string; variant: string; qty: number; price: string; image: string }[];
  shipping: { name: string; street: string; city: string };
  billing:  { name: string; street: string; city: string };
  payment: string;
}> = {
  'ORD-1042': {
    id: 'ORD-1042', date: '22 mei 2026', total: '€ 179,00', status: 'behandeling',
    items: [
      { name: 'Bella Donna Hoeslaken Jersey',  variant: 'Wit, 90x200 cm',  qty: 1, price: '€ 89,00',  image: `${CDN}/hoeslakens/bella-donna-jersey-wit.jpg` },
      { name: 'Yumeko Percale Kussensloop',    variant: 'Ivoor, 60x70 cm', qty: 2, price: '€ 45,00',  image: `${CDN}/kussens/yumeko-percale-kussensloop-ivoor.jpg` },
    ],
    shipping: { name: 'Sofie de Vries', street: 'Herestraat 42', city: '9711 LA Groningen' },
    billing:  { name: 'Sofie de Vries', street: 'Herestraat 42', city: '9711 LA Groningen' },
    payment: 'iDEAL',
  },
  'ORD-1031': {
    id: 'ORD-1031', date: '14 mei 2026', total: '€ 89,00', status: 'verzonden',
    items: [
      { name: 'Essenza Satijn Dekbedovertrek', variant: 'Wit, 240x220 cm', qty: 1, price: '€ 89,00', image: `${CDN}/dekbedovertrekken/essenza-satijn-wit.jpg` },
    ],
    shipping: { name: 'Sofie de Vries', street: 'Herestraat 42', city: '9711 LA Groningen' },
    billing:  { name: 'Sofie de Vries', street: 'Herestraat 42', city: '9711 LA Groningen' },
    payment: 'Creditcard',
  },
  'ORD-1024': {
    id: 'ORD-1024', date: '3 april 2026', total: '€ 214,50', status: 'geleverd',
    items: [
      { name: 'Hefel Pure Cotton Dekbed',  variant: 'Warmteklasse 3, 240x220 cm', qty: 1, price: '€ 214,50', image: `${CDN}/dekbedden/hefel-pure-cotton-dekbed.jpg` },
    ],
    shipping: { name: 'Sofie de Vries', street: 'Herestraat 42', city: '9711 LA Groningen' },
    billing:  { name: 'Sofie de Vries', street: 'Herestraat 42', city: '9711 LA Groningen' },
    payment: 'iDEAL',
  },
  'ORD-1018': {
    id: 'ORD-1018', date: '18 februari 2026', total: '€ 59,00', status: 'retour',
    items: [
      { name: 'Texeler Wollen Kussen', variant: 'Standaard, 60x70 cm', qty: 1, price: '€ 59,00', image: `${CDN}/kussens/texeler-wollen-kussen.jpg` },
    ],
    shipping: { name: 'Sofie de Vries', street: 'Herestraat 42', city: '9711 LA Groningen' },
    billing:  { name: 'Sofie de Vries', street: 'Herestraat 42', city: '9711 LA Groningen' },
    payment: 'Achteraf betalen',
  },
}

const stepDates: Record<string, string[]> = {
  behandeling: ['28 mei 2026', '28 mei 2026', '',           ''],
  verzonden:   ['28 mei 2026', '28 mei 2026', '30 mei 2026', ''],
  geleverd:    ['28 mei 2026', '28 mei 2026', '30 mei 2026', '1 juni 2026'],
  retour:      ['', '', '', ''],
}
const statusLabels: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
  behandeling: { label: 'In behandeling', variant: 'secondary' },
  verzonden:   { label: 'Verzonden',       variant: 'default' },
  geleverd:    { label: 'Geleverd',        variant: 'outline' },
  retour:      { label: 'Retour',          variant: 'destructive' },
}

export async function generateStaticParams() {
  return Object.keys(mockOrders).map((id) => ({ id }))
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await props.params
  return { title: `Bestelling ${id} | Mijn account | Rupose` }
}

export default async function OrderDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params
  const order = mockOrders[id]
  if (!order) notFound()

  const activeStep = { behandeling: 1, verzonden: 2, geleverd: 3, retour: -1 }[order.status] ?? 0
  const s = statusLabels[order.status]
  const dates = stepDates[order.status] ?? []
  const trackerSteps = ['Geplaatst', 'Bevestigd', 'Verzonden', 'Geleverd'].map((label, i) => ({
    label,
    date: dates[i] || undefined,
  }))

  return (
    <main>
      <Hero variant="simple" title={`Bestelling #${order.id}`} eyebrow="Mijn account" />
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16">
          <AccountSidebar />

          <div className="flex flex-col gap-10">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-sans text-sm text-muted-foreground">{order.date}</p>
                <Badge variant={s.variant} className="w-fit">{s.label}</Badge>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2 min-h-[44px]">
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download factuur
                </Button>
                {order.status === 'verzonden' && (
                  <Button size="sm" className="flex items-center gap-2 min-h-[44px]">
                    <Truck className="w-4 h-4" aria-hidden="true" />
                    Track verzending
                  </Button>
                )}
              </div>
            </div>

            {/* Status tracker */}
            {order.status !== 'retour' && (
              <OrderTracker currentStep={activeStep} steps={trackerSteps} />
            )}

            {/* Line items */}
            <div>
              <h3 className="font-serif text-xl font-light text-foreground mb-4">Artikelen</h3>
              <div className="flex flex-col divide-y divide-border border border-border rounded-sm overflow-hidden">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 px-4 py-4 bg-background">
                    <div className="w-16 h-16 bg-secondary rounded-sm overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-base font-medium text-foreground truncate">{item.name}</p>
                      <p className="font-sans text-sm text-muted-foreground">{item.variant}</p>
                      <p className="font-sans text-sm text-muted-foreground">Aantal: {item.qty}</p>
                    </div>
                    <p className="font-sans text-base font-medium text-foreground flex-shrink-0">{item.price}</p>
                  </div>
                ))}
                <div className="flex items-center justify-between px-4 py-4 bg-secondary/40">
                  <span className="font-sans text-base font-medium">Totaal</span>
                  <span className="font-sans text-base font-medium">{order.total}</span>
                </div>
              </div>
            </div>

            {/* Addresses + payment */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'Leveradres',   addr: order.shipping },
                { title: 'Factuuradres', addr: order.billing  },
              ].map(({ title, addr }) => (
                <div key={title} className="flex flex-col gap-1">
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-2">{title}</p>
                  <p className="font-sans text-sm text-foreground">{addr.name}</p>
                  <p className="font-sans text-sm text-muted-foreground">{addr.street}</p>
                  <p className="font-sans text-sm text-muted-foreground">{addr.city}</p>
                </div>
              ))}
              <div className="flex flex-col gap-1">
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-2">Betaalmethode</p>
                <p className="font-sans text-sm text-foreground">{order.payment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
