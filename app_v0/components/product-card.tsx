import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ProductCardProps {
  name: string;
  slug: string;
  price: string;
  image: string | null;
  shortDesc: string;
  category: string;
}

export function ProductCard({
  name,
  slug,
  price,
  image,
  shortDesc,
  category,
}: ProductCardProps) {
  const cleanDesc = shortDesc
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/\n/g, " ")
    .replace(/<[^>]*>/g, "")
    .trim()
    .slice(0, 110);

  const href = slug ? `/winkel/${category}/${slug}/` : "/winkel/";

  return (
    <article className="group flex flex-col">
      {/* Photo */}
      <Link
        href={href}
        className="relative overflow-hidden rounded-sm bg-sand aspect-[3/4] block mb-4"
        aria-label={`Bekijk ${name}`}
        tabIndex={-1}
      >
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            unoptimized
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
        ) : (
          <div className="absolute inset-0 bg-sage-muted flex items-center justify-center">
            <span className="font-serif text-sm text-brown-muted">
              Geen afbeelding
            </span>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-1">
        <p className="font-sans text-[10px] uppercase tracking-widest text-copper mb-1.5">
          {category}
        </p>
        <Link href={href}>
          <h3 className="font-serif text-lg font-light text-brown leading-snug hover:text-sage transition-colors mb-2 text-balance">
            {name}
          </h3>
        </Link>
        {cleanDesc && (
          <p className="font-sans text-xs text-brown-muted leading-relaxed mb-3 line-clamp-2 flex-1">
            {cleanDesc}&hellip;
          </p>
        )}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
          {price ? (
            <span className="font-sans text-sm font-medium text-brown">
              v.a.&nbsp;&euro;
              {parseFloat(price).toLocaleString("nl-NL", {
                minimumFractionDigits: 2,
              })}
            </span>
          ) : (
            <span className="font-sans text-sm text-brown-muted">
              Op aanvraag
            </span>
          )}
          <Link
            href={href}
            className="inline-flex items-center gap-1 font-sans text-xs text-brown-muted hover:text-brown transition-colors group/link"
          >
            Bekijk
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
