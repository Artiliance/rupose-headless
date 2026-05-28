'use client'

import { Hero } from '@/components/blocks/hero'
import { AccountSidebar } from '@/components/blocks/account-sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toastSuccess } from '@/lib/toast'

const fields = [
  { id: 'voornaam',    label: 'Voornaam',    type: 'text',     defaultValue: 'Sofie',               colSpan: '' },
  { id: 'achternaam',  label: 'Achternaam',  type: 'text',     defaultValue: 'de Vries',            colSpan: '' },
  { id: 'email',       label: 'E-mailadres', type: 'email',    defaultValue: 'sofie@example.com',   colSpan: 'sm:col-span-2' },
  { id: 'telefoon',    label: 'Telefoon',    type: 'tel',      defaultValue: '+31 6 12 34 56 78',   colSpan: 'sm:col-span-2' },
]

export default function ProfielPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toastSuccess('Profielgegevens opgeslagen.')
  }

  function handlePassword() {
    toastSuccess('Er is een wachtwoord-reset link verzonden naar je e-mailadres.')
  }

  return (
    <main>
      <Hero variant="simple" title="Profiel" eyebrow="Mijn account" />
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16">
          <AccountSidebar />

          <section aria-labelledby="profiel-heading" className="max-w-2xl">
            <h2 id="profiel-heading" className="font-serif text-2xl font-light text-foreground mb-8">
              Persoonlijke gegevens
            </h2>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fields.map(({ id, label, type, defaultValue, colSpan }) => (
                  <div key={id} className={`flex flex-col gap-1.5 ${colSpan}`}>
                    <Label htmlFor={id}>{label}</Label>
                    <Input
                      id={id}
                      name={id}
                      type={type}
                      defaultValue={defaultValue}
                      className="min-h-[44px]"
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" className="min-h-[44px]">Wijzigingen opslaan</Button>
                <Button
                  type="button"
                  variant="outline"
                  className="min-h-[44px]"
                  onClick={handlePassword}
                >
                  Wachtwoord wijzigen
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}
