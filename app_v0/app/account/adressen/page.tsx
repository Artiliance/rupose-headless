'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Hero } from '@/components/blocks/hero'
import { AccountSidebar } from '@/components/blocks/account-sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toastSuccess } from '@/lib/toast'
import { MapPin, Plus, Pencil, Trash2 } from 'lucide-react'

const mockAddresses = [
  {
    id: 'fact',
    type: 'Factuuradres',
    name: 'S. de Vries',
    street: 'Herestraat 42',
    city: '9711 LA Groningen',
    country: 'Nederland',
  },
  {
    id: 'bezorg',
    type: 'Bezorgadres',
    name: 'S. de Vries',
    street: 'Herestraat 42',
    city: '9711 LA Groningen',
    country: 'Nederland',
  },
]

export default function AdressenPage() {
  const [addresses, setAddresses] = useState(mockAddresses)
  const [showForm, setShowForm] = useState(false)

  function handleDelete(id: string) {
    setAddresses((prev) => prev.filter((a) => a.id !== id))
    toastSuccess('Adres verwijderd.')
  }

  function handleAddSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setShowForm(false)
    toastSuccess('Nieuw adres opgeslagen.')
  }

  return (
    <main>
      <Hero variant="simple" title="Adressen" eyebrow="Mijn account" />
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16">
          <AccountSidebar />

          <section aria-labelledby="addresses-heading">
            <div className="flex items-center justify-between mb-8">
              <h2 id="addresses-heading" className="font-serif text-2xl font-light text-foreground">
                Jouw adressen
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowForm(!showForm)}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" aria-hidden="true" />
                Nieuw adres
              </Button>
            </div>

            {/* Add form */}
            {showForm && (
              <form
                onSubmit={handleAddSubmit}
                noValidate
                className="mb-8 p-6 border border-border rounded-sm bg-secondary/30 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="sm:col-span-2 font-serif text-lg font-light mb-2">Nieuw adres toevoegen</div>
                {[
                  { id: 'naam', label: 'Voor- en achternaam' },
                  { id: 'straat', label: 'Straat + huisnummer' },
                  { id: 'postcode', label: 'Postcode' },
                  { id: 'stad', label: 'Stad' },
                ].map(({ id, label }) => (
                  <div key={id} className="flex flex-col gap-1.5">
                    <Label htmlFor={id}>{label}</Label>
                    <Input id={id} name={id} required className="min-h-[44px]" />
                  </div>
                ))}
                <div className="sm:col-span-2 flex gap-3 mt-2">
                  <Button type="submit" className="min-h-[44px]">Opslaan</Button>
                  <Button type="button" variant="outline" className="min-h-[44px]" onClick={() => setShowForm(false)}>
                    Annuleren
                  </Button>
                </div>
              </form>
            )}

            {/* Address cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className="flex flex-col gap-4 p-6 border border-border rounded-sm bg-background"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">{addr.type}</p>
                      <p className="font-sans text-base font-medium text-foreground">{addr.name}</p>
                      <p className="font-sans text-sm text-muted-foreground">{addr.street}</p>
                      <p className="font-sans text-sm text-muted-foreground">{addr.city}</p>
                      <p className="font-sans text-sm text-muted-foreground">{addr.country}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2 border-t border-border/60">
                    <Button variant="outline" size="sm" className="flex items-center gap-1.5 min-h-[40px]">
                      <Pencil className="w-3.5 h-3.5" aria-hidden="true" />
                      Bewerken
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1.5 min-h-[40px] text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => handleDelete(addr.id)}
                    >
                      <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                      Verwijderen
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
