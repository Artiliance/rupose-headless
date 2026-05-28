import { Hero } from '@/components/blocks/hero'
import { TrustBar } from '@/components/blocks/trust-bar'
import { CategoryGrid } from '@/components/blocks/category-grid'
import { BrandStrip } from '@/components/blocks/brand-strip'
import { ProductCarousel } from '@/components/blocks/product-carousel'
import { ReviewsCarousel } from '@/components/blocks/reviews-carousel'
import { RecentlyViewed } from '@/components/blocks/recently-viewed'
import { AggregateRating } from '@/components/blocks/aggregate-rating'
import { AdviceTeaser } from '@/components/blocks/advice-teaser'
import { BrandNarrative } from '@/components/blocks/brand-narrative'
import { NewsletterCta } from '@/components/blocks/newsletter-cta'
import { Leaf, Award, Recycle } from 'lucide-react'
import { categories, brands, featuredProducts, adviceArticles } from '@/lib/blocks-data'
import { allReviews } from '@/lib/reviews'

const CDN = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images'

const narrativePillars = [
  {
    icon: <Leaf />,
    label: 'Natuurlijke materialen',
    detail: 'Katoen, wol, TENCEL Lyocell. Geen synthetisch.',
  },
  {
    icon: <Award />,
    label: 'OEKO-TEX Standard 100',
    detail: 'Elk garen getest op schadelijke stoffen',
  },
  {
    icon: <Recycle />,
    label: 'Made in Germany & Europa',
    detail: 'Transparante keten, Europees vakmanschap',
  },
]

export default function HomePage() {
  return (
    <main>
      <Hero
        eyebrow="Premium bedtextiel. Haren, NL."
        title="Bedtextiel waarmee je slaap verbetert"
        subtitle="Premium kwaliteit uit Duitsland en Europa. Eerlijk slaapadvies. Zorgvuldig geselecteerde merken voor wie bewust slaapt."
        image={`${CDN}/lifestyle/MCD9646-Edit-groot.jpeg`}
        imageAlt="Opgemaakt luxe bed met premium Rupose bedtextiel"
        ctas={[
          { label: 'Ontdek de collectie', href: '/winkel/' },
          { label: 'Lees slaapadvies', href: '/slaapadvies/', variant: 'outline' },
        ]}
        trustSignal="Beoordeeld met 4,9/5. Meer dan 200 tevreden klanten."
        scrollTo="collectie"
      />
      <TrustBar />
      <CategoryGrid categories={categories} />
      <BrandStrip brands={brands} />
      <div className="container mx-auto px-4 md:px-6 pt-10 pb-0">
        <AggregateRating size="md" />
      </div>
      <ProductCarousel
        eyebrow="Handpicked selectie"
        title="Onze favorieten"
        products={featuredProducts}
        cta={{ label: 'Bekijk alles', href: '/winkel/' }}
      />
      <ReviewsCarousel
        eyebrow="Klantervaringen"
        title="Wat onze klanten zeggen"
        reviews={allReviews.slice(0, 6)}
        bg="muted"
      />
      <AdviceTeaser articles={adviceArticles.slice(0, 3)} />
      <BrandNarrative
        eyebrow="Waarom Rupose"
        title="Slaap is geen bijzaak"
        body={[
          'Bij Rupose geloven we dat de kwaliteit van je slaap direct wordt beïnvloed door de materialen die je nachts omringen. Daarom zetten we ons in voor producten gemaakt van organische en natuurlijke materialen. Zonder concessies aan comfort.',
          'Onze merken, zoals Formesse uit het Zwarte Woud en Texeler van de Waddeneilanden, produceren met uiterste precisie en vakmanschap. Geen massaproductie, maar bewust geselecteerde slaapspecialisten die hun materialen kennen.',
        ]}
        image={`${CDN}/heroes/MCD9691-groot.jpeg`}
        imageAlt="Hoogwaardig bedtextiel van Rupose. Natuurlijke materialen voor een betere nachtrust."
        pillars={narrativePillars}
        cta={{ label: 'Lees ons verhaal', href: '/over-ons/' }}
        badge={{ stat: '15+', desc: 'Jaar ervaring in premium slaapcomfort' }}
      />
      <NewsletterCta />
      <RecentlyViewed products={featuredProducts.slice(0, 6)} />
    </main>
  )
}
