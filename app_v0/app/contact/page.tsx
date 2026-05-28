import type { Metadata } from 'next'
import { ContactPageClient } from './contact-client'

export const metadata: Metadata = {
  title: 'Contact | Rupose',
  description:
    'Neem contact op met Rupose voor vragen over bedtextiel, bestellingen of persoonlijk slaapadvies. Bel, mail of bezoek onze winkel in Haren.',
}

export default function ContactPage() {
  return <ContactPageClient />
}
