import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface AdviceCardProps {
  title: string;
  href: string;
  excerpt: string;
  readTime: string;
  tag: string;
  image: string;
}

export function AdviceCard({
  title,
  href,
  excerpt,
  readTime,
  tag,
  image,
}: AdviceCardProps) {
  return (
    <article className="group flex flex-col">
      {/* Photo */}
      <Link
        href={href}
        className="relative overflow-hidden rounded-sm bg-sand aspect-[16/10] block mb-5"
        aria-label={`Lees artikel: ${title}`}
        tabIndex={-1}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          unoptimized
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-brown/10 group-hover:bg-brown/20 transition-colors duration-300" />
      </Link>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-3">
        <span className="font-sans text-sm uppercase tracking-widest text-copper font-medium">
          {tag}
        </span>
        <span className="w-px h-3 bg-border" aria-hidden="true" />
        <span className="font-sans text-sm text-brown-muted">{readTime}</span>
      </div>

      {/* Title */}
      <Link href={href}>
        <h3 className="font-serif text-xl md:text-2xl font-light text-brown leading-snug hover:text-sage transition-colors mb-3 text-balance">
          {title}
        </h3>
      </Link>

      {/* Excerpt */}
      <p className="font-sans text-base text-brown-muted leading-relaxed mb-4 flex-1 line-clamp-3">
        {excerpt}
      </p>

      {/* CTA */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 font-sans text-base text-brown-muted hover:text-brown transition-colors group/link self-start min-h-[44px] pb-0.5 border-b border-border hover:border-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Lees meer
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
