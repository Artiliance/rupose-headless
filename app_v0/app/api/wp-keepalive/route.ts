import { NextResponse } from 'next/server'

// Vercel-cron warmup-route: houdt WPGraphQL Smart Cache warm (RSC-perf-pattern 5).
// Dormant in de demo (static data). Activeren bij de switch: cron-block in vercel.json
// + CRON_SECRET env zetten (zie docs/HEADLESS_MIGRATION.md).

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  if (!secret) {
    return NextResponse.json({ ok: false, reason: 'CRON_SECRET niet geconfigureerd' }, { status: 503 })
  }
  if (request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 })
  }
  const endpoint = process.env.WP_GRAPHQL_URL
  if (!endpoint) {
    return NextResponse.json({ ok: false, reason: 'WP_GRAPHQL_URL ontbreekt' }, { status: 503 })
  }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ generalSettings { url } }' }),
      cache: 'no-store',
    })
    return NextResponse.json({ ok: res.ok, status: res.status })
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 502 })
  }
}
