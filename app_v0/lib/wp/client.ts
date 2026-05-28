// WPGraphQL-client voor de headless switch (scaffolding — nog niet bedraad aan pagina's).
// Patronen: lazy-eval ENV + fail-fast (geen silent `|| ""`), POST tijdens build / GET-APQ runtime.
// Zie docs/HEADLESS_MIGRATION.md voor de swap-stappen.

import { cache } from 'react'

// Lazy-eval: NOOIT process.env op module-load lezen (crasht client-bundle). Pas binnen de fetch.
function requireEndpoint(): string {
  const url = process.env.WP_GRAPHQL_URL
  if (!url) {
    throw new Error(
      'WP_GRAPHQL_URL ontbreekt — zet in Vercel → Settings → Environment Variables (zie .env.example)',
    )
  }
  return url
}

const IS_BUILD_PHASE = process.env.NEXT_PHASE === 'phase-production-build'

export interface WpFetchOptions {
  variables?: Record<string, unknown>
  /** cache-tags voor gerichte revalidatie (bv. ['products', 'products:listing']) */
  tags?: string[]
  /** ISR-revalidatie in seconden; default 60 (balans met WPGraphQL Smart Cache TTL) */
  revalidate?: number
}

async function _wpFetch<T>(query: string, opts: WpFetchOptions = {}): Promise<T> {
  const { variables, tags = [], revalidate = 60 } = opts
  const res = await fetch(requireEndpoint(), {
    // Build: POST (vermijdt GET-storm 404's op koude Smart Cache).
    // Runtime: GET/APQ is sneller — schakel om zodra persisted-queries aanstaan (zie migratiedoc).
    method: IS_BUILD_PHASE ? 'POST' : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate, tags },
  })

  if (!res.ok) {
    throw new Error(`WPGraphQL HTTP ${res.status} op ${query.slice(0, 60)}…`)
  }

  const json = (await res.json()) as { data?: T; errors?: unknown }
  if (json.errors) {
    throw new Error(`WPGraphQL errors: ${JSON.stringify(json.errors)}`)
  }
  if (!json.data) {
    throw new Error('WPGraphQL: lege data-response')
  }
  return json.data
}

// React.cache() dedupliceert binnen één request (generateMetadata + Page roepen dezelfde fetch).
export const wpFetch = cache(_wpFetch)
