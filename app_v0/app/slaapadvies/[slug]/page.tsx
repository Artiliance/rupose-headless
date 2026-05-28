import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Clock, Calendar } from 'lucide-react'
import { ContentSection } from '@/components/blocks/content-section'
import { AdviceTeaser } from '@/components/blocks/advice-teaser'
import { NewsletterCta } from '@/components/blocks/newsletter-cta'
import { getArticleBySlug, getRelatedArticles, getAllArticles } from '@/lib/articles'
import { JsonLd } from '@/components/seo/json-ld'

const SITE = 'https://rupose.nl'
const LOGO = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images/brands/Rupose-logo-by-homan.svg'

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Artikel niet gevonden' }
  return {
    title: `${article.title} | Slaapadvies | Rupose`,
    description: article.excerpt,
    alternates: { canonical: `/slaapadvies/${article.slug}/` },
  }
}

function formatDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getRelatedArticles(slug, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: [article.image],
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    description: article.excerpt,
    author: { '@type': 'Organization', name: 'Rupose', url: SITE },
    publisher: {
      '@type': 'Organization',
      name: 'Rupose',
      logo: { '@type': 'ImageObject', url: LOGO },
    },
    mainEntityOfPage: `${SITE}/slaapadvies/${article.slug}/`,
  }

  return (
    <main className="pt-28 md:pt-32">
      <JsonLd data={articleSchema} />

      {/* ── Breadcrumbs ── */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <Link href="/slaapadvies/" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Slaapadvies
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="text-foreground font-medium truncate max-w-[260px]">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* ── Article header ── */}
      <header className="bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">

            {/* Category badge */}
            <Link
              href={`/slaapadvies/?tag=${encodeURIComponent(article.category)}`}
              className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-sm mb-5 hover:bg-primary/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {article.category}
            </Link>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
              {article.title}
            </h1>
            <p className="font-sans text-lg text-muted-foreground mb-7 text-balance leading-relaxed">
              {article.excerpt}
            </p>

            {/* Meta: date + reading time */}
            <div className="flex items-center justify-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              </span>
              <span className="w-px h-4 bg-border" aria-hidden="true" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{article.readingTime} min lezen</span>
              </span>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="container mx-auto px-4 md:px-6 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── Article body ── */}
      <ContentSection body={article.body} prose />

      {/* ── Tags ── */}
      {article.tags.length > 0 && (
        <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-16">
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-sm text-muted-foreground mb-3">Trefwoorden</p>
            <div className="flex flex-wrap gap-2" role="list" aria-label="Artikeltags">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/slaapadvies/?tag=${encodeURIComponent(tag)}`}
                  role="listitem"
                  className="inline-flex items-center min-h-[36px] px-3 py-1 rounded-sm border border-border bg-secondary text-sm font-sans text-foreground hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Related articles ── */}
      {related.length > 0 && (
        <AdviceTeaser
          eyebrow="Meer lezen"
          title="Gerelateerde artikelen"
          articles={related.map((a) => ({
            title: a.title,
            href: `/slaapadvies/${a.slug}/`,
            excerpt: a.excerpt,
            readTime: a.readTime,
            tag: a.category,
            image: a.image,
          }))}
          bg="muted"
        />
      )}

      <NewsletterCta />
    </main>
  )
}
