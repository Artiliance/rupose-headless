import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rupose — Premium Bedtextiel | Shop Slim, Droom Zacht',
  description:
    'Rupose is dé premium specialist in slaapcomfort. Hochwaardige dekbedden, hoofdkussens, hoeslakens en topmatrassen van merken als Bella Donna, Texeler, Hefel en Dommelin.',
  keywords:
    'bedtextiel, hoeslakens, hoofdkussens, dekbedden, topmatrassen, molton, Bella Donna, Texeler, Hefel, Dommelin, premium slaap',
  authors: [{ name: 'Rupose', url: 'https://rupose.nl' }],
  metadataBase: new URL('https://rupose.nl'),
  openGraph: {
    title: 'Rupose — Premium Bedtextiel',
    description: 'Premium slaapcomfort-specialist. Shop slim, droom zacht.',
    url: 'https://rupose.nl',
    siteName: 'Rupose',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Script
          src="https://cdn.cookie-script.com/s/4a6bbfdd9b7a8382bd90ec40800b553d.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
