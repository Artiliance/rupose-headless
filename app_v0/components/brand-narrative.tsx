import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Award, Recycle } from "lucide-react";

const pillars = [
  {
    icon: <Leaf className="w-4 h-4" strokeWidth={1.5} />,
    label: "Natuurlijke materialen",
    detail: "Katoen, wol, TENCEL™ Lyocell — geen synthetisch",
  },
  {
    icon: <Award className="w-4 h-4" strokeWidth={1.5} />,
    label: "OEKO-TEX® Standard 100",
    detail: "Elk garen getest op schadelijke stoffen",
  },
  {
    icon: <Recycle className="w-4 h-4" strokeWidth={1.5} />,
    label: "Made in Germany & Europa",
    detail: "Transparante keten, Europees vakmanschap",
  },
];

export function BrandNarrative() {
  return (
    <section
      aria-label="Waarom Rupose"
      className="py-20 md:py-28 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="https://rupose.nl/wp-content/uploads/2024/01/Achtergrond-van-shutterstock_1716820465-verwijderd-normaal.png"
                alt="Hoogwaardig bedtextiel van Rupose — natuurlijke materialen voor een betere nachtrust"
                fill
                className="object-cover object-center"
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-2 md:-right-6 bg-sand border border-border rounded-sm px-5 py-4 shadow-sm max-w-[200px]">
              <p className="font-serif text-2xl font-light text-brown leading-none mb-1">
                15+
              </p>
              <p className="font-sans text-xs text-brown-muted leading-snug">
                Jaar ervaring in premium slaapcomfort
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-copper mb-4 font-medium">
                Waarom Rupose
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-brown font-light leading-tight text-balance mb-6">
                Slaap is geen bijzaak
              </h2>
              <p className="font-sans text-base text-brown-muted leading-relaxed mb-4">
                Bij Rupose geloven we dat de kwaliteit van je slaap direct wordt
                beïnvloed door de materialen die je &apos;s nachts omringen.
                Daarom zetten we ons in voor producten gemaakt van organische en
                natuurlijke materialen — zonder concessies aan comfort.
              </p>
              <p className="font-sans text-base text-brown-muted leading-relaxed">
                Onze merken — zoals Formesse uit het Zwarte Woud en Texeler van
                de Waddeneilanden — produceren met uiterste precisie en vakmanschap.
                Geen massaproductie, maar bewust geselecteerde slaapspecialisten
                die hun materialen kennen.
              </p>
            </div>

            {/* Pillars */}
            <ul className="flex flex-col gap-4">
              {pillars.map((p) => (
                <li key={p.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-muted flex items-center justify-center mt-0.5">
                    <span className="text-sage" aria-hidden="true">
                      {p.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-brown">
                      {p.label}
                    </p>
                    <p className="font-sans text-sm text-brown-muted leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/over-ons/"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-brown hover:text-sage transition-colors group pb-0.5 border-b border-brown hover:border-sage"
              >
                Lees ons verhaal
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
