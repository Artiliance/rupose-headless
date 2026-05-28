// Rendert structured data (schema.org) als JSON-LD.
// `data` is interne, vertrouwde data. We escapen `<` naar < zodat een eventuele
// "</script>" in een stringveld de tag niet kan breken (XSS-safe, ook bij latere CMS-data).
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  )
}
