'use client'

import { useState } from 'react'
import { Hero } from '@/components/blocks/hero'
import { AccountSidebar } from '@/components/blocks/account-sidebar'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { toastSuccess } from '@/lib/toast'

const initialPrefs = [
  {
    id: 'newsletter',
    label: 'Nieuwsbrief',
    description: 'Ontvang inspiratie, nieuwe collecties en slaaptips in je inbox.',
    enabled: true,
  },
  {
    id: 'aanbiedingen',
    label: 'Aanbiedingen',
    description: 'Exclusieve kortingen en seizoensacties per e-mail.',
    enabled: true,
  },
  {
    id: 'order-updates',
    label: 'Bestelstatus updates',
    description: 'Ontvang een bericht bij verzending en bezorging van je bestelling.',
    enabled: true,
  },
]

export default function AbonnementenPage() {
  const [prefs, setPrefs] = useState(initialPrefs)

  function toggle(id: string) {
    setPrefs((prev) => prev.map((p) => (p.id === id ? { ...p, enabled: !p.enabled } : p)))
  }

  function handleSave() {
    toastSuccess('Voorkeuren opgeslagen.')
  }

  return (
    <main>
      <Hero variant="simple" title="Voorkeuren" eyebrow="Mijn account" />
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16">
          <AccountSidebar />

          <section aria-labelledby="prefs-heading" className="max-w-xl">
            <h2 id="prefs-heading" className="font-serif text-2xl font-light text-foreground mb-8">
              Communicatievoorkeuren
            </h2>

            <div className="flex flex-col divide-y divide-border border border-border rounded-sm overflow-hidden">
              {prefs.map((pref) => (
                <div key={pref.id} className="flex items-center justify-between gap-6 px-5 py-5 bg-background">
                  <div className="flex flex-col gap-0.5">
                    <Label
                      htmlFor={pref.id}
                      className="font-sans text-base font-medium text-foreground cursor-pointer"
                    >
                      {pref.label}
                    </Label>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {pref.description}
                    </p>
                  </div>
                  <Switch
                    id={pref.id}
                    checked={pref.enabled}
                    onCheckedChange={() => toggle(pref.id)}
                    aria-label={pref.label}
                    className="flex-shrink-0"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button className="min-h-[44px]" onClick={handleSave}>Opslaan</Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
