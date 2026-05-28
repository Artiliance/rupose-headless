import type { MetadataRoute } from 'next'

// DEMO: indexering volledig geblokkeerd zolang dit op een demo-/vercel.app-URL draait.
// Bij productie-launch op rupose.nl: zet `disallow` om naar `allow: '/'`.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: 'https://rupose.nl/sitemap.xml',
  }
}
