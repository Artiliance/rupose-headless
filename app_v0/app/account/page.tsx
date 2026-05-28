import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { AccountSidebar } from '@/components/blocks/account-sidebar'
import { AccountDashboard } from '@/components/blocks/account-dashboard'

export const metadata: Metadata = {
  title: 'Mijn account | Rupose',
  description: 'Beheer je bestellingen, adressen en profielinstellingen.',
}

export default function AccountPage() {
  return (
    <main>
      <Hero variant="simple" title="Mijn account" />
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16">
          <AccountSidebar />
          <AccountDashboard />
        </div>
      </div>
    </main>
  )
}
