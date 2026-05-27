import { HeroSection } from "@/components/hero-section";
import { TrustBar } from "@/components/trust-bar";
import { CategoryGrid } from "@/components/category-grid";
import { BrandStrip } from "@/components/brand-strip";
import { FeaturedProducts } from "@/components/featured-products";
import { SlaapadviesTeaser } from "@/components/slaapadvies-teaser";
import { BrandNarrative } from "@/components/brand-narrative";
import { NewsletterCta } from "@/components/newsletter-cta";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <CategoryGrid />
      <BrandStrip />
      <FeaturedProducts />
      <SlaapadviesTeaser />
      <BrandNarrative />
      <NewsletterCta />
    </main>
  );
}
