// Mappers: WPGraphQL/Woo/ACF-nodes -> onze bestaande TS-types (de "switch-logica").
// Hierdoor blijven alle componenten ongewijzigd: ze krijgen exact dezelfde shape als nu (static).
// Velden 1-op-1 afstemmen op queries.ts zodra het echte schema live is.

import type { Product, ProductSize } from '@/lib/products'
import type { BrandDetail } from '@/lib/brands'
import type { Article } from '@/lib/articles'
import type { Category } from '@/lib/blocks-data'

type WpNode = Record<string, any>

const str = (v: unknown, fallback = ''): string => (typeof v === 'string' ? v : fallback)

export function mapProduct(node: WpNode): Product {
  const cat = node.productCategories?.nodes?.[0] ?? {}
  const brand = node.productBrands?.nodes?.[0] ?? {}
  const sizes: ProductSize[] =
    node.variations?.nodes?.map((v: WpNode) => ({
      label: str(v.name),
      price: Number(v.price) || 0,
      sku: str(v.sku),
    })) ?? [
      { label: 'Standaard', price: Number(node.price) || 0, sku: str(node.sku), ean: str(node.globalUniqueId) || undefined },
    ]

  return {
    slug: str(node.slug),
    categorySlug: str(cat.slug),
    categoryLabel: str(cat.name),
    brand: str(brand.name) || 'Rupose',
    name: str(node.name),
    shortDesc: str(node.shortDescription),
    longDesc: str(node.description),
    image: str(node.image?.sourceUrl),
    gallery: node.galleryImages?.nodes?.map((g: WpNode) => str(g.sourceUrl)).filter(Boolean) ?? [str(node.image?.sourceUrl)].filter(Boolean),
    colours: [],
    sizes,
    specs: Object.fromEntries((node.productAcf?.specs ?? []).map((s: WpNode) => [str(s.label), str(s.value)])),
    care: node.productAcf?.care ?? [],
    shipping: str(node.productAcf?.shipping),
    returnPolicy: str(node.productAcf?.returnPolicy),
  }
}

export function mapBrand(node: WpNode): BrandDetail {
  const acf = node.brandAcf ?? {}
  return {
    slug: str(node.slug),
    name: str(node.name),
    fullName: str(node.name),
    country: '',
    logo: str(acf.logo?.sourceUrl),
    heroImage: str(acf.logo?.sourceUrl),
    tagline: str(acf.tagline),
    intro: str(acf.intro) || str(node.description),
    story: acf.story ? [str(acf.story)] : [],
    usps: (acf.usps ?? []).map((u: WpNode) => ({ title: str(u.title), body: str(u.body) })),
    productSlugs: [],
    videoUrl: acf.videoUrl ? str(acf.videoUrl) : undefined,
  }
}

export function mapCategory(node: WpNode): Pick<Category, 'slug' | 'name'> & { seoText?: string } {
  return {
    slug: str(node.slug),
    name: str(node.name),
    seoText: node.categoryAcf?.seoText ? str(node.categoryAcf.seoText) : undefined,
  }
}

export function mapArticle(node: WpNode): Pick<Article, 'slug' | 'title' | 'excerpt' | 'body' | 'image' | 'publishedAt'> {
  return {
    slug: str(node.slug),
    title: str(node.title),
    excerpt: str(node.excerpt).replace(/<[^>]+>/g, '').trim(),
    body: str(node.content),
    image: str(node.featuredImage?.node?.sourceUrl),
    publishedAt: str(node.date),
  }
}
