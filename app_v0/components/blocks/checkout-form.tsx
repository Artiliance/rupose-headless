'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CreditCard, Smartphone, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toastSuccess } from '@/lib/toast'

const CDN = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images'
const mockOrderLines = [
  {
    id: '1',
    name: 'Bella Donna Jersey hoeslaken',
    variant: 'Wit, 90x200 cm',
    qty: 1,
    price: 64.95,
    image: `${CDN}/heroes/Formesse_Bella-Donna-Jersey_Stapel-scaled.jpg`,
  },
  {
    id: '2',
    name: 'Texeler Bovenste Beste hoofdkussen',
    variant: 'Standaard, 60x70 cm',
    qty: 2,
    price: 149,
    image: `${CDN}/heroes/MCD9710-groot.jpeg`,
  },
]

const paymentMethods = [
  { id: 'ideal', label: 'iDEAL', icon: Smartphone },
  { id: 'card', label: 'Creditcard', icon: CreditCard },
  { id: 'afterpay', label: 'Achteraf betalen', icon: Clock },
]

export function CheckoutForm() {
  const [payment, setPayment] = useState('ideal')
  const router = useRouter()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toastSuccess('Bestelling geplaatst. Dank voor je aankoop!')
    setTimeout(() => router.push('/bedankt/'), 1200)
  }

  const subtotal = mockOrderLines.reduce((s, l) => s + l.price * l.qty, 0)
  const shipping = subtotal >= 75 ? 0 : 5.95
  const total = subtotal + shipping

  return (
    <div className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16"
        >

          {/* Left: form */}
          <div className="lg:col-span-3 flex flex-col gap-10">

            {/* Delivery details */}
            <fieldset>
              <legend className="font-serif text-xl font-light text-foreground mb-6">
                Bezorggegevens
              </legend>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="co-firstname" className="font-sans text-sm font-medium">Voornaam</Label>
                    <Input id="co-firstname" type="text" autoComplete="given-name" className="rounded-sm h-11 font-sans text-base" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="co-lastname" className="font-sans text-sm font-medium">Achternaam</Label>
                    <Input id="co-lastname" type="text" autoComplete="family-name" className="rounded-sm h-11 font-sans text-base" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="co-email" className="font-sans text-sm font-medium">E-mailadres</Label>
                  <Input id="co-email" type="email" autoComplete="email" className="rounded-sm h-11 font-sans text-base" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="co-phone" className="font-sans text-sm font-medium">Telefoonnummer</Label>
                  <Input id="co-phone" type="tel" autoComplete="tel" className="rounded-sm h-11 font-sans text-base" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="co-street" className="font-sans text-sm font-medium">Straat en huisnummer</Label>
                  <Input id="co-street" type="text" autoComplete="street-address" className="rounded-sm h-11 font-sans text-base" />
                </div>
                <div className="grid grid-cols-[1fr_2fr] gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="co-zip" className="font-sans text-sm font-medium">Postcode</Label>
                    <Input id="co-zip" type="text" autoComplete="postal-code" className="rounded-sm h-11 font-sans text-base" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="co-city" className="font-sans text-sm font-medium">Plaats</Label>
                    <Input id="co-city" type="text" autoComplete="address-level2" className="rounded-sm h-11 font-sans text-base" />
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Shipping */}
            <fieldset>
              <legend className="font-serif text-xl font-light text-foreground mb-6">
                Verzendmethode
              </legend>
              <div className="border border-border rounded-sm p-4 flex items-center justify-between">
                <div>
                  <p className="font-sans text-base font-medium text-foreground">PostNL, standaard bezorging</p>
                  <p className="font-sans text-sm text-muted-foreground">Bezorgd binnen 2 tot 3 werkdagen</p>
                </div>
                <span className="font-sans text-base font-medium text-foreground">
                  {shipping === 0 ? <span className="text-primary">Gratis</span> : `\u20AC${shipping.toFixed(2).replace('.', ',')}`}
                </span>
              </div>
            </fieldset>

            {/* Payment */}
            <fieldset>
              <legend className="font-serif text-xl font-light text-foreground mb-6">
                Betaalmethode
              </legend>
              <div className="flex flex-col gap-2" role="radiogroup" aria-label="Betaalmethode kiezen">
                {paymentMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 border rounded-sm p-4 cursor-pointer transition-colors ${
                        payment === method.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={payment === method.id}
                        onChange={() => setPayment(method.id)}
                        className="accent-primary w-4 h-4 shrink-0 focus-visible:ring-2 focus-visible:ring-ring"
                      />
                      <Icon className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                      <span className="font-sans text-base text-foreground">{method.label}</span>
                    </label>
                  )
                })}
              </div>
            </fieldset>
          </div>

          {/* Right: order summary */}
          <aside aria-label="Bestellingsoverzicht" className="lg:col-span-2">
            <div className="bg-secondary rounded-sm border border-border p-6 sticky top-24">
              <h2 className="font-serif text-xl font-light text-foreground mb-5">Jouw bestelling</h2>
              <ul className="flex flex-col gap-4 mb-5" role="list">
                {mockOrderLines.map((line) => (
                  <li key={line.id} className="flex gap-3 items-start">
                    <div className="relative w-14 h-14 rounded-sm overflow-hidden flex-shrink-0 bg-muted">
                      <Image
                        src={line.image}
                        alt={line.name}
                        fill
                        className="object-cover object-center"
                        unoptimized
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-sm font-medium text-foreground leading-snug line-clamp-1">{line.name}</p>
                      <p className="font-sans text-xs text-muted-foreground mt-0.5">{line.variant}</p>
                      <p className="font-sans text-xs text-muted-foreground">Aantal: {line.qty}</p>
                    </div>
                    <span className="font-sans text-sm font-medium text-foreground flex-shrink-0">
                      &euro;{(line.price * line.qty).toFixed(2).replace('.', ',')}
                    </span>
                  </li>
                ))}
              </ul>
              <dl className="flex flex-col gap-2 font-sans text-base border-t border-border pt-4">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotaal</dt>
                  <dd className="text-foreground">&euro;{subtotal.toFixed(2).replace('.', ',')}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Verzending</dt>
                  <dd className="text-foreground">
                    {shipping === 0
                      ? <span className="text-primary">Gratis</span>
                      : `\u20AC${shipping.toFixed(2).replace('.', ',')}`}
                  </dd>
                </div>
                <div className="flex justify-between border-t border-border pt-3 mt-1">
                  <dt className="font-medium text-foreground">Totaal</dt>
                  <dd className="font-semibold text-foreground text-lg">
                    &euro;{total.toFixed(2).replace('.', ',')}
                  </dd>
                </div>
              </dl>
              <Button
                type="submit"
                size="lg"
                className="w-full mt-6 rounded-sm min-h-[44px] font-sans text-base"
              >
                Bestelling plaatsen
              </Button>
              <p className="font-sans text-xs text-muted-foreground text-center mt-3">
                Veilig betalen. Je gegevens worden niet opgeslagen zonder toestemming.
              </p>
            </div>
          </aside>

        </form>
      </div>
    </div>
  )
}
