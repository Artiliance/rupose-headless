'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toastSuccess, toastError } from '@/lib/toast'

interface AuthFormProps {
  variant: 'login' | 'register'
}

export function AuthForm({ variant }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const isLogin = variant === 'login'

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value
    const password = (form.elements.namedItem('password') as HTMLInputElement)?.value
    if (!email || !password) {
      toastError('Vul alle verplichte velden in.')
      return
    }
    if (isLogin) {
      toastSuccess('Inloggen succesvol. Welkom terug!')
    } else {
      toastSuccess('Account aangemaakt. Welkom bij Rupose!')
    }
    form.reset()
  }

  return (
    <div className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-4xl">

          {/* Form side */}
          <div>
            <h2 className="font-serif text-2xl font-light text-foreground mb-8">
              {isLogin ? 'Inloggen op je account' : 'Maak een account aan'}
            </h2>
            <form className="flex flex-col gap-5" noValidate onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstname" className="font-sans text-sm font-medium text-foreground">
                      Voornaam
                    </Label>
                    <Input
                      id="firstname"
                      type="text"
                      autoComplete="given-name"
                      placeholder="Jan"
                      className="rounded-sm h-11 font-sans text-base focus-visible:ring-ring"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastname" className="font-sans text-sm font-medium text-foreground">
                      Achternaam
                    </Label>
                    <Input
                      id="lastname"
                      type="text"
                      autoComplete="family-name"
                      placeholder="de Vries"
                      className="rounded-sm h-11 font-sans text-base focus-visible:ring-ring"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="font-sans text-sm font-medium text-foreground">
                  E-mailadres
                </Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jan@voorbeeld.nl"
                  className="rounded-sm h-11 font-sans text-base focus-visible:ring-ring"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="font-sans text-sm font-medium text-foreground">
                    Wachtwoord
                  </Label>
                  {isLogin && (
                    <Link
                      href="/account/wachtwoord-vergeten/"
                      className="font-sans text-sm text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                    >
                      Wachtwoord vergeten?
                    </Link>
                  )}
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete={isLogin ? 'current-password' : 'new-password'}
                    placeholder={isLogin ? '••••••••' : 'Minimaal 8 tekens'}
                    className="rounded-sm h-11 font-sans text-base pr-11 focus-visible:ring-ring"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Wachtwoord verbergen' : 'Wachtwoord tonen'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors w-8 h-8 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {showPassword
                      ? <EyeOff className="w-4 h-4" aria-hidden="true" />
                      : <Eye className="w-4 h-4" aria-hidden="true" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="flex flex-col gap-2">
                  <Label htmlFor="confirm" className="font-sans text-sm font-medium text-foreground">
                    Wachtwoord bevestigen
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirm"
                      type={showConfirm ? 'text' : 'password'}
                      autoComplete="new-password"
                      placeholder="••••••••"
                      className="rounded-sm h-11 font-sans text-base pr-11 focus-visible:ring-ring"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((v) => !v)}
                      aria-label={showConfirm ? 'Bevestiging verbergen' : 'Bevestiging tonen'}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors w-8 h-8 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    >
                      {showConfirm
                        ? <EyeOff className="w-4 h-4" aria-hidden="true" />
                        : <Eye className="w-4 h-4" aria-hidden="true" />}
                    </button>
                  </div>
                </div>
              )}

              {!isLogin && (
                <div className="flex items-start gap-3">
                  <input
                    id="newsletter"
                    type="checkbox"
                    className="mt-0.5 w-4 h-4 rounded accent-primary focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  <Label htmlFor="newsletter" className="font-sans text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Ik ontvang graag slaaptips en aanbiedingen per e-mail. Afmelden kan altijd.
                  </Label>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-sm min-h-[44px] font-sans text-base mt-2"
              >
                {isLogin ? 'Inloggen' : 'Account aanmaken'}
              </Button>
            </form>
          </div>

          {/* CTA side */}
          <div className="flex flex-col justify-center gap-5 p-8 bg-secondary rounded-sm border border-border">
            {isLogin ? (
              <>
                <h3 className="font-serif text-2xl font-light text-foreground">
                  Nieuw bij Rupose?
                </h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Maak een gratis account aan en geniet van sneller afrekenen, inzicht in je bestellingen en een persoonlijke wensenlijst.
                </p>
                <ul className="flex flex-col gap-2 font-sans text-sm text-muted-foreground">
                  <li className="flex items-center gap-2 before:content-['•'] before:text-primary before:font-normal">
                    Sneller afrekenen met opgeslagen adressen
                  </li>
                  <li className="flex items-center gap-2 before:content-['•'] before:text-primary before:font-normal">
                    Bestellingsgeschiedenis inzien
                  </li>
                  <li className="flex items-center gap-2 before:content-['•'] before:text-primary before:font-normal">
                    Producten op je wensenlijst bewaren
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-sm min-h-[44px] font-sans text-base mt-2"
                >
                  <Link href="/account/registreren/">Account aanmaken</Link>
                </Button>
              </>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-light text-foreground">
                  Al een account?
                </h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Log in op je bestaande Rupose-account om direct door te gaan.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-sm min-h-[44px] font-sans text-base"
                >
                  <Link href="/account/inloggen/">Inloggen</Link>
                </Button>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
