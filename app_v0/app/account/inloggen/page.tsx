import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { AuthForm } from '@/components/blocks/auth-form'

export const metadata: Metadata = {
  title: 'Inloggen | Rupose',
  description: 'Log in op je Rupose-account om je bestellingen te beheren.',
}

export default function InloggenPage() {
  return (
    <main>
      <Hero
        variant="simple"
        title="Inloggen"
        intro="Log in op je account om je bestellingen en gegevens te beheren."
      />
      <AuthForm variant="login" />
    </main>
  )
}
