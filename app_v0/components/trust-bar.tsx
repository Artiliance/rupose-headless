import { Award, MessageCircle, Truck, ShieldCheck } from 'lucide-react'

const usps = [
  {
    icon: Award,
    title: 'Duitse premiumkwaliteit',
    desc: 'OEKO-TEX® gecertificeerd, Made in Germany',
  },
  {
    icon: MessageCircle,
    title: 'Eerlijk slaapadvies',
    desc: 'Persoonlijk advies van slaapspecialisten',
  },
  {
    icon: Truck,
    title: 'Gratis verzending',
    desc: 'Vanaf €75 — bezorging in 2-3 werkdagen',
  },
  {
    icon: ShieldCheck,
    title: 'Veilig betalen',
    desc: 'iDEAL, creditcard & achteraf betalen',
  },
]

export function TrustBar() {
  return (
    <section
      className="bg-sand border-y border-border"
      aria-label="Onze beloften"
    >
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {usps.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-sage/15 flex items-center justify-center">
                <Icon className="w-4.5 h-4.5 text-sage" aria-hidden="true" />
              </div>
              <div>
                <p className="font-serif text-sm font-medium text-brown leading-tight mb-0.5">
                  {title}
                </p>
                <p className="font-sans text-xs text-brown-muted leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
