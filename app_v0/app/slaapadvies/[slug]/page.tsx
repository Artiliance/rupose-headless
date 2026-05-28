import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Clock } from 'lucide-react'
import { ContentSection } from '@/components/blocks/content-section'
import { AdviceTeaser } from '@/components/blocks/advice-teaser'
import { NewsletterCta } from '@/components/blocks/newsletter-cta'
import { getArticleBySlug, getRelatedArticles, getAllArticles } from '@/lib/articles'

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Artikel niet gevonden' }

  return {
    title: `${article.title} | Slaapadvies | Rupose`,
    description: article.excerpt,
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(slug, 3)

  return (
    <main className="pt-28 md:pt-32">
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <Link href="/slaapadvies/" className="hover:text-foreground transition-colors">
              Slaapadvies
            </Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-foreground font-medium truncate max-w-[200px]">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <header className="bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-sm mb-4">
              {article.tag}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
              {article.title}
            </h1>
            <p className="font-sans text-lg text-muted-foreground mb-6 text-balance">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
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
              />
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <ContentSection body={article.body} />

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <AdviceTeaser
          title="Meer slaapadvies"
          articles={relatedArticles.map((a) => ({
            title: a.title,
            href: `/slaapadvies/${a.slug}/`,
            excerpt: a.excerpt,
            readTime: a.readTime,
            tag: a.tag,
            image: a.image,
          }))}
        />
      )}

      <NewsletterCta />
    </main>
  )
}
