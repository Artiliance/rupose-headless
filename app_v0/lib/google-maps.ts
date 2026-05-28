// Laadt de Google Maps JS API (Places) eenmalig, client-side.
// Vereist NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (referrer-restricted) + Places API enabled.

let loadPromise: Promise<any> | null = null

export function loadGooglePlaces(apiKey: string): Promise<any> {
  if (typeof window === 'undefined') return Promise.reject(new Error('client only'))
  const w = window as any
  if (w.google?.maps?.places) return Promise.resolve(w.google)
  if (loadPromise) return loadPromise

  loadPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=nl&region=NL`
    s.async = true
    s.defer = true
    s.onload = () => resolve((window as any).google)
    s.onerror = () => reject(new Error('Google Maps kon niet laden'))
    document.head.appendChild(s)
  })
  return loadPromise
}
