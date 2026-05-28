import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Toaster } from 'sonner'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { FloatingContact } from '@/components/blocks/floating-contact'
import { BackToTop } from '@/components/blocks/back-to-top'
import { ExitIntentPopup } from '@/components/blocks/exit-intent-popup'
import { JsonLd } from '@/components/seo/json-ld'
import './globals.css'

const LOGO = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images/brands/Rupose-logo-by-homan.svg'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rupose',
  url: 'https://rupose.nl',
  logo: LOGO,
  image: LOGO,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rijksstraatweg 167',
    postalCode: '9752 BE',
    addressLocality: 'Haren',
    addressCountry: 'NL',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rupose',
  url: 'https://rupose.nl',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://rupose.nl/zoeken?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rupose | Premium Bedtextiel. Shop Slim, Droom Zacht.',
  description:
    'Rupose is dé premium specialist in slaapcomfort. Hoogwaardige dekbedden, hoofdkussens, hoeslakens en topmatrassen van merken als Bella Donna, Texeler, Hefel en Ecolife.',
  keywords:
    'bedtextiel, hoeslakens, hoofdkussens, dekbedden, topmatrassen, molton, Bella Donna, Texeler, Hefel, Ecolife, premium slaap',
  authors: [{ name: 'Rupose', url: 'https://rupose.nl' }],
  metadataBase: new URL('https://rupose.nl'),
  openGraph: {
    title: 'Rupose | Premium Bedtextiel',
    description: 'Premium slaapcomfort-specialist. Shop slim, droom zacht.',
    url: 'https://rupose.nl',
    siteName: 'Rupose',
    locale: 'nl_NL',
    type: 'website',
  },
  // DEMO: noindex zolang dit op een demo-/vercel.app-URL draait.
  // Bij productie-launch op rupose.nl: zet index/follow op true.
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="bg-background">
      <head>
        {/* Google Fonts: Cormorant Garamond */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />

        {/* Floating stack: bottom-right, gap-2 */}
        <div className="fixed bottom-6 right-4 z-50 flex flex-col items-center gap-2">
          <BackToTop />
          <FloatingContact />
        </div>

        <ExitIntentPopup />

        <Toaster
          richColors
          closeButton
          toastOptions={{
            classNames: {
              toast: 'font-sans',
            },
          }}
        />
        <Script
          src="https://cdn.cookie-script.com/s/4a6bbfdd9b7a8382bd90ec40800b553d.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
