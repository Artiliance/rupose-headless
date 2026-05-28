// WPGraphQL / WPGraphQL-WooCommerce / WPGraphQL-for-ACF queries (scaffolding).
// Pattern 2: light-listing query gescheiden van heavy-detail query (zie migratiedoc).
// Velden afstemmen op de echte schema zodra WPGraphQL + wp-graphql-woocommerce + wpgraphql-acf live zijn.

// ── Producten ──────────────────────────────────────────────
// Light: alleen wat kaarten/overzichten tonen.
export const QUERY_PRODUCTS_LISTING = /* GraphQL */ `
  query ProductsListing($first: Int = 100) {
    products(first: $first) {
      nodes {
        slug
        name
        shortDescription
        image { sourceUrl altText }
        ... on SimpleProduct { price(format: RAW) sku }
        productCategories(first: 1) { nodes { slug name } }
        productBrands(first: 1) { nodes { slug name } }
      }
    }
  }
`

// Heavy: detail-pagina (alle ACF-velden, variaties, specs).
export const QUERY_PRODUCT_DETAIL = /* GraphQL */ `
  query ProductDetail($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      slug
      name
      description
      shortDescription
      image { sourceUrl altText }
      galleryImages { nodes { sourceUrl altText } }
      productCategories(first: 1) { nodes { slug name } }
      productBrands(first: 1) { nodes { slug name } }
      ... on SimpleProduct {
        price(format: RAW)
        sku
        # Woo 9.2+ native GTIN/EAN, of ACF-veld:
        globalUniqueId
      }
      ... on VariableProduct {
        variations(first: 100) {
          nodes { name sku price(format: RAW) }
        }
      }
      # ACF product-extras (specs, care, longDesc-rich):
      productAcf { specs { label value } care shipping returnPolicy }
    }
  }
`

// ── Categorieën ────────────────────────────────────────────
export const QUERY_CATEGORIES = /* GraphQL */ `
  query Categories {
    productCategories(first: 50) {
      nodes {
        slug
        name
        description
        # ACF term-veld voor SEO-tekstblok onder de FAQ:
        categoryAcf { seoText }
      }
    }
  }
`

// ── Merken (Woo product_brand taxonomie + ACF term-velden) ─
export const QUERY_BRANDS = /* GraphQL */ `
  query Brands {
    productBrands(first: 50) {
      nodes {
        slug
        name
        description
        # ACF term-velden: logo, video, story, usps:
        brandAcf {
          logo { sourceUrl }
          videoUrl
          tagline
          intro
          story
          usps { title body }
        }
      }
    }
  }
`

// ── Slaapadvies (posts) ────────────────────────────────────
export const QUERY_ARTICLES_LISTING = /* GraphQL */ `
  query ArticlesListing($first: Int = 50) {
    posts(first: $first) {
      nodes {
        slug title excerpt date
        featuredImage { node { sourceUrl } }
        categories(first: 1) { nodes { name } }
      }
    }
  }
`

export const QUERY_ARTICLE_DETAIL = /* GraphQL */ `
  query ArticleDetail($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      slug title excerpt content date
      featuredImage { node { sourceUrl } }
      categories(first: 1) { nodes { name } }
      tags(first: 20) { nodes { name } }
    }
  }
`
