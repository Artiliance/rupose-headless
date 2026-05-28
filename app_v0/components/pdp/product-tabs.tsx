"use client";

import { Droplets, Wind, Package, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Product } from "@/lib/products";

interface ProductTabsProps {
  product: Product;
}

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs defaultValue="productinfo" className="w-full">
      <TabsList className="flex w-full justify-start gap-0 bg-transparent border-b border-border rounded-none h-auto p-0 mb-8">
        {[
          { value: "productinfo", label: "Productinfo" },
          { value: "specificaties", label: "Specificaties" },
          { value: "onderhoud", label: "Onderhoud" },
          { value: "verzending", label: "Verzending & retour" },
        ].map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="font-sans text-base text-brown-muted data-[state=active]:text-brown data-[state=active]:border-b-2 data-[state=active]:border-sage data-[state=active]:shadow-none rounded-none px-5 py-3 min-h-[44px] bg-transparent hover:text-brown transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Productinfo tab */}
      <TabsContent value="productinfo" className="mt-0">
        <div
          className="prose prose-base max-w-none font-sans text-brown-muted leading-relaxed
            [&_h3]:font-serif [&_h3]:text-2xl [&_h3]:font-light [&_h3]:text-brown [&_h3]:mt-6 [&_h3]:mb-3
            [&_p]:mb-4 [&_p]:text-base
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul>li]:mb-2 [&_ul>li]:text-base
            [&_strong]:text-brown [&_strong]:font-medium"
        >
          <p>{product.longDesc}</p>
        </div>
      </TabsContent>

      {/* Specificaties tab */}
      <TabsContent value="specificaties" className="mt-0">
        <dl className="divide-y divide-border">
          {/* Product identifiers */}
          {product.sizes?.[0]?.sku && (
            <div className="flex flex-col sm:flex-row sm:gap-8 py-4">
              <dt className="font-sans text-base font-medium text-brown uppercase tracking-wider w-full sm:w-52 flex-shrink-0 mb-1 sm:mb-0">
                Artikelnummer
              </dt>
              <dd className="font-sans text-base text-brown-muted flex-1">
                {product.sizes[0].sku}
              </dd>
            </div>
          )}
          {product.sizes?.[0]?.ean && (
            <div className="flex flex-col sm:flex-row sm:gap-8 py-4">
              <dt className="font-sans text-base font-medium text-brown uppercase tracking-wider w-full sm:w-52 flex-shrink-0 mb-1 sm:mb-0">
                EAN
              </dt>
              <dd className="font-sans text-base text-brown-muted flex-1">
                {product.sizes[0].ean}
              </dd>
            </div>
          )}
          {product.categoryLabel && (
            <div className="flex flex-col sm:flex-row sm:gap-8 py-4">
              <dt className="font-sans text-base font-medium text-brown uppercase tracking-wider w-full sm:w-52 flex-shrink-0 mb-1 sm:mb-0">
                Categorie
              </dt>
              <dd className="font-sans text-base text-brown-muted flex-1">
                {product.categoryLabel}
              </dd>
            </div>
          )}
          {(product.specifications ?? []).map((spec) => (
            <div
              key={spec.label}
              className="flex flex-col sm:flex-row sm:gap-8 py-4"
            >
              <dt className="font-sans text-base font-medium text-brown uppercase tracking-wider w-full sm:w-52 flex-shrink-0 mb-1 sm:mb-0">
                {spec.label}
              </dt>
              <dd className="font-sans text-base text-brown-muted flex-1">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </TabsContent>

      {/* Onderhoud tab */}
      <TabsContent value="onderhoud" className="mt-0">
        <div className="flex flex-col gap-5 max-w-2xl">
          <p className="font-sans text-base text-brown-muted leading-relaxed">
            Goed onderhoud verlengt de levensduur van uw beddengoed aanzienlijk
            en behoudt de kwaliteit en comfort van uw investering.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {[
              {
                icon: Droplets,
                title: "Wassen",
                body: "Volg altijd het wasadvies op het label. De meeste producten van Rupose zijn wasbaar op 60°C voor een hygiënische reiniging.",
              },
              {
                icon: Wind,
                title: "Drogen",
                body: "Gebruik bij voorkeur de droger op een lage temperatuur of laat het product luchten op een droogrek. Vermijd direct zonlicht voor gekleurde producten.",
              },
              {
                icon: Package,
                title: "Opslaan",
                body: "Bewaar schoon en droog beddengoed in een ademende katoenen zak of de originele verpakking. Vermijd plastic zakken, want die houden vocht vast.",
              },
              {
                icon: Sparkles,
                title: "Luchten",
                body: "Laat uw dekbed en kussens regelmatig luchten, het liefst in de buitenlucht op een droge dag. Dit vermindert stofmijten en frist de vulling op.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary [&>svg]:w-5 [&>svg]:h-5">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-brown mb-1">
                      {item.title}
                    </h4>
                    <p className="font-sans text-base text-brown-muted leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </TabsContent>

      {/* Verzending tab */}
      <TabsContent value="verzending" className="mt-0">
        <div className="flex flex-col gap-5 max-w-2xl">
          {[
            {
              title: "Gratis verzending",
              body: "Bestellingen vanaf €75 worden gratis verzonden naar Nederland en België. Voor bestellingen onder de €75 rekenen wij €4,95 verzendkosten.",
            },
            {
              title: "Levertijd",
              body: "Producten die op voorraad zijn worden op werkdagen voor 16:00 uur besteld dezelfde dag verzonden. Verwachte levertijd: 1–3 werkdagen.",
            },
            {
              title: "30 dagen retourrecht",
              body: "Niet tevreden? U heeft 30 dagen retourrecht vanaf de ontvangstdatum. Het product dient ongebruikt, ongewassen en in de originele verpakking te worden geretourneerd.",
            },
            {
              title: "Retourprocedure",
              body: "Stuur een e-mail naar info@rupose.nl met uw bestelnummer en de reden van retour. Wij sturen u de retourinstructies toe. Retourkosten zijn voor de klant, tenzij sprake is van een defect product.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <h4 className="font-serif text-xl font-medium text-brown">
                {item.title}
              </h4>
              <p className="font-sans text-base text-brown-muted leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
