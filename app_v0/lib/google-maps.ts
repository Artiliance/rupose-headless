// Laadt de Google Maps JS API eenmalig, client-side.
// Vereist NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (referrer-restricted) + Places API (New) enabled.
//
// We gebruiken de `callback`-parameter i.p.v. script.onload: bij loading=async is
// google.maps.importLibrary pas gegarandeerd beschikbaar zodra de callback vuurt,
// niet al bij onload. Daarna haalt de consumer libraries op via importLibrary('places').

let loadPromise: Promise<any> | null = null

export function loadGooglePlaces(apiKey: string): Promise<any> {
  if (typeof window === 'undefined') return Promise.reject(new Error('client only'))
  const w = window as any
  if (w.google?.maps?.importLibrary) return Promise.resolve(w.google)
  if (loadPromise) return loadPromise

  loadPromise = new Promise((resolve, reject) => {
    const g = w.google || (w.google = {})
    const maps = g.maps || (g.maps = {})
    maps.__ruposeReady__ = () => resolve(w.google)

    const params = new URLSearchParams({
      key: apiKey,
      v: 'weekly',
      language: 'nl',
      region: 'NL',
      loading: 'async',
      callback: 'google.maps.__ruposeReady__',
    })

    const s = document.createElement('script')
    s.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`
    s.async = true
    s.onerror = () => {
      loadPromise = null
      reject(new Error('Google Maps kon niet laden'))
    }
    document.head.appendChild(s)
  })
  return loadPromise
}
