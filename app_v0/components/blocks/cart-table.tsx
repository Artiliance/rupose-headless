'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { featuredProducts } from '@/lib/blocks-data'
import { toastSuccess } from '@/lib/toast'

const CDN = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images'

interface CartItem {
  id: string
  name: string
  variant: string
  price: number
  qty: number
  image: string
  href: string
}

const mockItems: CartItem[] = [
  {
    id: '1',
    name: 'Bella Donna Jersey hoeslaken',
    variant: 'Wit, 90x200 cm',
    price: 64.95,
    qty: 1,
    image: `${CDN}/heroes/Formesse_Bella-Donna-Jersey_Stapel-scaled.jpg`,
    href: '/winkel/hoeslakens/bella-donna-jersey-hoeslaken/',
  },
  {
    id: '2',
    name: 'Texeler Bovenste Beste hoofdkussen',
    variant: 'Standaard, 60x70 cm',
    price: 149,
    qty: 2,
    image: `${CDN}/heroes/MCD9710-groot.jpeg`,
    href: '/winkel/hoofdkussens/texeler-bovenste-beste-hoofdkussen/',
  },
  {
    id: '3',
    name: 'Donzen dekbed Vorsa',
    variant: 'Warmteklasse 3, 240x220 cm',
    price: 499,
    qty: 1,
    image: `${CDN}/heroes/MCD9628-groot.jpeg`,
    href: '/winkel/dekbedden/donzen-dekbed-vorsa/',
  },
]

interface CartTableProps {
  showCheckoutButton?: boolean
}

export function CartTable({ showCheckoutButton = true }: CartTableProps) {
  const [items, setItems] = useState<CartItem[]>(mockItems)

  const updateQty = (id: string, delta: number) => {
    const item = items.find((i) => i.id === id)
    if (item && item.qty + delta <= 0) {
      toastSuccess(`${item.name} verwijderd uit winkelwagen`)
    }
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    )
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shipping = subtotal >= 75 ? 0 : 5.95
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="font-serif text-2xl text-foreground mb-4">Je winkelwagen is leeg</p>
        <p className="font-sans text-base text-muted-foreground mb-8">
          Voeg producten toe om door te gaan met winkelen.
        </p>
        <Button asChild size="lg" className="rounded-sm min-h-[44px] px-8">
          <Link href="/winkel/">Bekijk de collectie</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Items list */}
      <div className="lg:col-span-2">
        <ul className="flex flex-col divide-y divide-border" role="list" aria-label="Winkelwagen">
          {items.map((item) => (
            <li key={item.id} className="py-6 flex gap-4 sm:gap-6">
              {/* Product image */}
              <Link
                href={item.href}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-sm overflow-hidden flex-shrink-0 bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center"
                  unoptimized
                  sizes="96px"
                />
              </Link>

              {/* Details */}
              <div className="flex flex-1 flex-col gap-1 min-w-0">
                <Link
                  href={item.href}
                  className="font-serif text-base text-foreground hover:text-primary transition-colors leading-snug"
                >
                  {item.name}
                </Link>
                <p className="font-sans text-sm text-muted-foreground">{item.variant}</p>
                <p className="font-sans text-base font-medium text-foreground mt-1">
                  {item.qty > 1 && (
                    <span className="text-muted-foreground font-normal text-sm mr-1">
                      {item.qty} x
                    </span>
                  )}
                  &euro;{item.price.toFixed(2).replace('.', ',')}
                </p>
              </div>

              {/* Qty controls + remove */}
              <div className="flex flex-col items-end justify-between gap-2 flex-shrink-0">
                <button
                  onClick={() => updateQty(item.id, -item.qty)}
                  aria-label={`${item.name} verwijderen`}
                  className="text-muted-foreground hover:text-destructive transition-colors w-8 h-8 flex items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Trash2 className="w-4 h-4" aria-hidden="true" />
                </button>
                <div
                  className="flex items-center border border-border rounded-sm overflow-hidden"
                  role="group"
                  aria-label={`Hoeveelheid voor ${item.name}`}
                >
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    aria-label="Hoeveelheid verminderen"
                    disabled={item.qty <= 1}
                    className="w-8 h-8 flex items-center justify-center text-foreground hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Minus className="w-3 h-3" aria-hidden="true" />
                  </button>
                  <span className="w-8 h-8 flex items-center justify-center font-sans text-sm font-medium text-foreground border-x border-border">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    aria-label="Hoeveelheid verhogen"
                    className="w-8 h-8 flex items-center justify-center text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Plus className="w-3 h-3" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="pt-6">
          <Button asChild variant="outline" size="sm" className="rounded-sm min-h-[44px]">
            <Link href="/winkel/">Verder winkelen</Link>
          </Button>
        </div>
      </div>

      {/* Order summary */}
      <aside aria-label="Bestellingsoverzicht" className="lg:col-span-1">
        <div className="bg-secondary rounded-sm border border-border p-6 sticky top-24">
          <h2 className="font-serif text-xl font-light text-foreground mb-5">Overzicht</h2>
          <dl className="flex flex-col gap-3 font-sans text-base">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotaal</dt>
              <dd className="text-foreground font-medium">
                &euro;{subtotal.toFixed(2).replace('.', ',')}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Verzendkosten</dt>
              <dd className="text-foreground font-medium">
                {shipping === 0 ? (
                  <span className="text-primary">Gratis</span>
                ) : (
                  `\u20AC${shipping.toFixed(2).replace('.', ',')}`
                )}
              </dd>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-muted-foreground">
                Gratis verzending vanaf &euro;75.
              </p>
            )}
            <div className="flex justify-between border-t border-border pt-3 mt-1">
              <dt className="font-medium text-foreground">Totaal</dt>
              <dd className="font-semibold text-foreground text-lg">
                &euro;{total.toFixed(2).replace('.', ',')}
              </dd>
            </div>
          </dl>
          {showCheckoutButton && (
            <Button
              asChild
              size="lg"
              className="w-full mt-6 rounded-sm min-h-[44px] font-sans text-base"
            >
              <Link href="/afrekenen/">Naar afrekenen</Link>
            </Button>
          )}
          <p className="font-sans text-xs text-muted-foreground text-center mt-3">
            Veilig betalen met iDEAL, creditcard of achteraf betalen.
          </p>
        </div>
      </aside>
    </div>
  )
}
