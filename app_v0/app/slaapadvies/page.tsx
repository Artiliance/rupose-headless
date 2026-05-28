import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHeader } from '@/components/blocks/page-header'
import { SlaapadviesGrid } from '@/components/blocks/slaapadvies-grid'
import { CtaBanner } from '@/components/blocks/cta-banner'

export const metadata: Metadata = {
  title: 'Slaapadvies | Rupose',
  description:
    'Eerlijk slaapadvies van Rupose: materiaalkeuze, onderhoud, koopgidsen en meer. Praktische artikelen voor een betere nachtrust.',
}

export default function SlaapadviesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Kennis & advies"
        title="Slaapadvies"
        intro="Eerlijk slaapadvies van Rupose. Geen marketingtaal, wel praktische kennis waarmee je bewuste keuzes maakt."
        breadcrumbs={[{ label: 'Slaapadvies' }]}
      />

      <Suspense
        fallback={
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-10 flex flex-col gap-5">
                <div className="h-11 w-full max-w-md bg-secondary/60 rounded-sm animate-pulse" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-11 w-24 bg-secondary/60 rounded-sm animate-pulse" />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-72 bg-secondary/60 rounded-sm animate-pulse" />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <SlaapadviesGrid />
      </Suspense>

      <CtaBanner
        eyebrow="Persoonlijk advies"
        title="Hulp nodig? Bel of mail ons"
        description="Onze slaapspecialisten beantwoorden al je vragen. Geen verkooppraatje, wel eerlijk advies."
        cta={{ label: 'Neem contact op', href: '/contact/' }}
        bg="sand"
      />
    </main>
  )
}
