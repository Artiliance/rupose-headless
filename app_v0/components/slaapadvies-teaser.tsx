import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AdviceCard, type AdviceCardProps } from "@/components/advice-card";

const adviceArticles: AdviceCardProps[] = [
  {
    title: "Wat is een molton en heb je er een nodig?",
    href: "/slaapadvies/wat-is-een-molton/",
    excerpt:
      "Een molton beschermt je matras tegen zweet, vlekken en slijtage. Maar niet elke molton is hetzelfde. We leggen het verschil uit tussen katoen, Tencel™ en PCM-varianten — en helpen je kiezen.",
    readTime: "4 min lezen",
    tag: "Slaapadvies",
    image: "https://rupose.nl/wp-content/uploads/2025/08/MCD9710-groot.jpeg",
  },
  {
    title: "Jersey vs katoen hoeslaken: wat past bij jou?",
    href: "/slaapadvies/jersey-vs-katoen/",
    excerpt:
      "Jersey strekt mee, percal ademt. Beide zijn katoen, maar het gevoel verschilt enorm. We vergelijken beide weefsels eerlijk — van pasvorm tot slaaptemperatuur — zodat jij de juiste keuze maakt.",
    readTime: "5 min lezen",
    tag: "Vergelijking",
    image: "https://rupose.nl/wp-content/uploads/2025/08/MCD9691-groot.jpeg",
  },
  {
    title: "Welk dekbed past bij jouw seizoen?",
    href: "/slaapadvies/welk-dekbed-kies-je/",
    excerpt:
      "Warmteklasse 1 of 4? Dons of wol? Zomer of winter? We helpen je met een praktische gids om het juiste dekbed te kiezen op basis van jouw lichaamswarmte, slaapgewoontes en het seizoen.",
    readTime: "6 min lezen",
    tag: "Koopgids",
    image: "https://rupose.nl/wp-content/uploads/2025/08/MCD9646-Edit-groot.jpeg",
  },
];

export function SlaapadviesTeaser() {
  return (
    <section
      aria-label="Slaapadvies"
      className="py-20 md:py-28 bg-sage-muted/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-copper mb-3 font-medium">
              Kennis & advies
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-brown font-light leading-tight text-balance">
              Slaap beter,<br className="hidden md:block" /> weet meer
            </h2>
          </div>
          <Link
            href="/slaapadvies/"
            className="inline-flex items-center gap-2 font-sans text-sm text-brown-muted hover:text-brown transition-colors group self-start md:self-auto pb-0.5 border-b border-border hover:border-brown"
          >
            Alle slaaptips
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {adviceArticles.map((article) => (
            <AdviceCard key={article.href} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
