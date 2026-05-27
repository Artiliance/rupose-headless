export type ProductAttribute = {
  name: string;
  type: "color" | "size" | "select";
  options: string[];
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  categoryHref: string;
  shortDescription: string;
  longDescriptionHtml: string;
  priceFrom: number;
  images: { src: string; alt: string }[];
  attributes: ProductAttribute[];
  specifications: { label: string; value: string }[];
  certifications?: string[];
  inStock: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "bella-donna-jersey-hoeslaken",
    name: "Bella Donna Jersey Hoeslaken",
    brand: "Bella Donna / Formesse",
    category: "Hoeslakens",
    categorySlug: "hoeslakens",
    categoryHref: "/winkel/hoeslakens/",
    shortDescription:
      "Zijdezacht jersey-hoeslaken van supergekamd katoen, verrijkt met aloë vera en arganolie. Perfect passend op matrassen tot 35 cm hoog, verkrijgbaar in 54 kleuren.",
    longDescriptionHtml: `
      <p>Het Bella Donna Jersey hoeslaken is het meest verkochte hoeslaken in ons assortiment — en dat is niet zonder reden. De jersey-tricot van <strong>97% supergekamd katoen</strong> en 3% elastan geeft mee met elke beweging, rimpelt niet en blijft de hele nacht op zijn plaats.</p>
      <p>Bijzonder aan dit hoeslaken is de behandeling met <strong>aloë vera en arganolie</strong>: de stof voelt zacht aan en ondersteunt de huid op een natuurlijke manier. Perfect voor mensen met een gevoelige huid.</p>
      <p>De brede silikone rand (35 cm hoog) past op matrassen tot 35 cm dik — ook op boxsprings en verhoogde matrassen. Dankzij de witte siliconen strip aan de onderkant blijft het hoeslaken tijdens de nacht op zijn plek.</p>
      <h3>Kleur &amp; pasvorm</h3>
      <p>Verkrijgbaar in <strong>54 kleuren</strong> — van neutrale linnen-tinten en warm ecru tot diepe bordeaux, navy en zacht saliegroen. De kleur blijft na honderd wasbeurten even helder dankzij de hoogwaardigeverfmethode van Formesse.</p>
    `,
    priceFrom: 69,
    images: [
      {
        src: "https://rupose.nl/wp-content/uploads/2024/06/Farbe-0030_bordeaux.jpg",
        alt: "Bella Donna Jersey Hoeslaken bordeaux",
      },
      {
        src: "https://rupose.nl/wp-content/uploads/2025/08/MCD9691-groot.jpeg",
        alt: "Bella Donna Jersey Hoeslaken op bed gestyled",
      },
      {
        src: "https://rupose.nl/wp-content/uploads/2025/06/Bella-Donna-Clima-scaled.jpg",
        alt: "Bella Donna Jersey Hoeslaken detailfoto",
      },
    ],
    attributes: [
      {
        name: "Kleur",
        type: "color",
        options: [
          "Wit",
          "Ecru",
          "Ivoor",
          "Champagne",
          "Zand",
          "Linen",
          "Taupe",
          "Grijs",
          "Zilvergrijs",
          "Antraciet",
          "Zwart",
          "Roze",
          "Oud roze",
          "Poederroze",
          "Blush",
          "Koraal",
          "Terracotta",
          "Rood",
          "Bordeaux",
          "Wijnrood",
          "Oranje",
          "Mosterd",
          "Okergeel",
          "Geel",
          "Saliegroen",
          "Mintgroen",
          "Olijfgroen",
          "Bosgroen",
          "Lichtblauw",
          "Ijsblauw",
          "Blauw",
          "Koningsblauw",
          "Navy",
          "Indigo",
          "Petrol",
          "Turquoise",
          "Aubergine",
          "Lavendel",
          "Lila",
          "Paars",
        ],
      },
      {
        name: "Maat",
        type: "size",
        options: [
          "80x200",
          "90x200",
          "100x200",
          "120x200",
          "140x200",
          "160x200",
          "180x200",
          "200x200",
          "90x220",
          "100x220",
          "120x220",
          "140x220",
          "160x220",
          "180x220",
          "200x220",
        ],
      },
    ],
    specifications: [
      { label: "Materiaal", value: "97% supergekamd katoen, 3% elastan" },
      { label: "Behandeling", value: "Aloë vera & arganolie" },
      { label: "Hoekhoogte", value: "Tot 35 cm" },
      { label: "Wasadvies", value: "60°C machinewasbaar" },
      { label: "Productieland", value: "Duitsland (Made in Germany)" },
      { label: "Certificering", value: "OEKO-TEX® Standard 100" },
      { label: "Pillproof", value: "Ja — pilling-vrij finish" },
    ],
    certifications: ["OEKO-TEX® Standard 100", "Made in Germany"],
    inStock: true,
  },
  {
    slug: "donzen-dekbed-vorsa",
    name: "Donzen Dekbed Vorsa",
    brand: "Vorsa",
    category: "Dekbedden",
    categorySlug: "dekbedden",
    categoryHref: "/winkel/dekbedden/",
    shortDescription:
      "Gevuld met 100% Mazurische ganzendons. Combineert lichtheid met luxe comfort in vier warmteklassen en meerdere maten — voor elk seizoen en elke slaper.",
    longDescriptionHtml: `
      <p>Het Vorsa donzen dekbed is gevuld met <strong>100% Mazurische ganzendons</strong> — afkomstig uit Polen, waar ganzen onder optimale omstandigheden worden gehouden. De zachte donsvulling biedt maximale isolatie bij minimaal gewicht.</p>
      <p>Vorsa staat voor eerlijke prijzen zonder concessies aan kwaliteit. Dit dekbed is direct inkoopbaar van de producent — zonder de toeslag van een distributiemiddelman. Dat vertaalt zich in een eerlijke prijs voor een premium product.</p>
      <h3>Vier warmteklassen</h3>
      <ul>
        <li><strong>Zomer (100 g/m²):</strong> voor warme nachten of warme slapers</li>
        <li><strong>Lente/Herfst (200 g/m²):</strong> veelzijdig tussenseizoen-dekbed</li>
        <li><strong>Winter (300 g/m²):</strong> voor koude nachten of koude slapers</li>
        <li><strong>4-seizoenen (100+200 g/m²):</strong> twee dekbedden die samenknoopbaar zijn</li>
      </ul>
      <p>De tijk is van fijn geweven <strong>percal katoen (230 TC)</strong> met een satijngeweven buitenkant — fluisterzacht en koel aanvoelend. De stikselpatroon houdt de vulling gelijkmatig verdeeld.</p>
    `,
    priceFrom: 189,
    images: [
      {
        src: "https://rupose.nl/wp-content/uploads/2026/03/MCD9646-Edit-groot-300x300-1.jpeg",
        alt: "Donzen Dekbed Vorsa op bed",
      },
      {
        src: "https://rupose.nl/wp-content/uploads/2025/08/MCD9646-Edit-groot.jpeg",
        alt: "Vorsa dekbed gestyled in slaapkamer",
      },
    ],
    attributes: [
      {
        name: "Maat",
        type: "size",
        options: [
          "140x200",
          "200x200",
          "200x220",
          "240x220",
          "260x220",
          "140x220",
        ],
      },
      {
        name: "Warmteklasse",
        type: "select",
        options: [
          "Zomer (100 g/m²)",
          "Lente/Herfst (200 g/m²)",
          "Winter (300 g/m²)",
          "4-seizoenen (100+200 g/m²)",
        ],
      },
    ],
    specifications: [
      { label: "Vulling", value: "100% Mazurische ganzendons" },
      { label: "Tijk", value: "Percal katoen 230 TC" },
      {
        label: "Warmteklassen",
        value: "Zomer / Lente-Herfst / Winter / 4-seizoenen",
      },
      { label: "Wasadvies", value: "60°C machinewasbaar (grote machine)" },
      { label: "Herkomst vulling", value: "Polen — Mazurië" },
      { label: "Certificering", value: "OEKO-TEX® Standard 100" },
      { label: "Tijk sluiting", value: "Verborgen rits" },
    ],
    certifications: ["OEKO-TEX® Standard 100", "Responsible Down Standard"],
    inStock: true,
  },
  {
    slug: "texeler-bovenste-beste-hoofdkussen",
    name: "Texeler Bovenste Beste Hoofdkussen",
    brand: "Texeler",
    category: "Hoofdkussens",
    categorySlug: "hoofdkussens",
    categoryHref: "/winkel/hoofdkussens/",
    shortDescription:
      "Gevuld met lange kroezende Texelse schapenwol. Vezelvrij, milieuvriendelijk en met een dichtweven tijk zodat de wolvezels altijd op hun plek blijven.",
    longDescriptionHtml: `
      <p>Het Texeler Bovenste Beste hoofdkussen is het topproduct van ons eigen wol-kussen-assortiment. Alleen de <strong>lange kroezende Texelse schapenwol</strong> met de juiste vezeldikte is goed genoeg — minder dan 30% van de jaarlijkse wol-oogst voldoet aan dit criterium.</p>
      <p>De katoenen of satijnen tijk wordt zo dicht geweven dat wolvezels op hun plek blijven en niet kunnen migreren. Het resultaat: een kussen dat jarenlang zijn vorm en veerkracht behoudt.</p>
      <h3>Waarom Texelse wol?</h3>
      <p>Texelse schapen leven in de zeewind van het Waddengebied. Hun wol heeft een unieke structuur: de vezels zijn van nature gekroest, waardoor ze een luchtige en veerkrachtige vulling vormen. Dit zorgt voor een uitstekende vochtregulatie en een optimale slaaptemperatuur.</p>
      <h3>Slaaphouding</h3>
      <p>Het kussen is verkrijgbaar in drie hardheden, afgestemd op jouw slaaphouding. Een rugslaper heeft baat bij een medium kussen, een zijslaper bij een steviger model. Rupose adviseert je graag via de slaapadvies-pagina.</p>
    `,
    priceFrom: 79,
    images: [
      {
        src: "https://rupose.nl/wp-content/uploads/2026/02/Texeler_SOEZZ_Bovenste_Beste-scaled.jpg",
        alt: "Texeler Bovenste Beste hoofdkussen voorzijde",
      },
      {
        src: "https://rupose.nl/wp-content/uploads/2025/08/MCD9739-groot.jpeg",
        alt: "Texeler hoofdkussen gestyled op bed",
      },
    ],
    attributes: [
      {
        name: "Slaaphouding",
        type: "select",
        options: ["Rugslaper (zacht)", "Zij/rugslaper (medium)", "Zijslaper (stevig)"],
      },
      {
        name: "Maat",
        type: "size",
        options: ["60x70", "60x80", "80x80"],
      },
    ],
    specifications: [
      { label: "Vulling", value: "100% Texelse schapenwol — lange vezels" },
      {
        label: "Tijk",
        value: "Dichtweven katoen (vezelvrij) of satijn, keuze bij bestelling",
      },
      {
        label: "Hardheden",
        value: "Zacht (rugslaper) / Medium / Stevig (zijslaper)",
      },
      { label: "Wasadvies", value: "Professioneel reinigen aanbevolen" },
      { label: "Herkomst wol", value: "Texel, Nederland" },
      { label: "Levensduur", value: "8–12 jaar bij goed onderhoud" },
    ],
    certifications: ["OEKO-TEX® Standard 100", "Woolmark"],
    inStock: true,
  },
  {
    slug: "plateau-molton-tencel",
    name: "Plateau Molton Tencel",
    brand: "Bella Donna / Formesse",
    category: "Moltons",
    categorySlug: "moltons",
    categoryHref: "/winkel/moltons/",
    shortDescription:
      "Actieve temperatuurregeling via PCM-technologie en een Tencel™-vulling. Houdt je de hele nacht fris, droog en comfortabel. Ideaal voor wie 's nachts zweet.",
    longDescriptionHtml: `
      <p>De Plateau Molton Tencel is meer dan een matrasbeschermer — het is een actief slaapklimaatsysteem. Dankzij <strong>PCM-technologie (Phase Change Materials)</strong> absorbeert de molton warmte wanneer het te warm wordt, en geeft deze terug wanneer het te koel wordt.</p>
      <p>De vulling van <strong>TENCEL™ Lyocell</strong> voert vocht snel af en houdt het slaapoppervlak droog. Een ideale keuze voor mensen die 's nachts zweten of voor wie de slaaptemperatuur moeilijk te reguleren is.</p>
      <h3>Plateau-constructie</h3>
      <p>De Plateau-constructie zorgt voor een egaal slaapoppervlak zonder vouwen of ribbels. De molton ligt plat op het matras en wordt aan de zijkanten vastgehouden door een comfortabel elastiek dat matrassen tot 30 cm hoogte omvat.</p>
      <h3>Duurzaamheid</h3>
      <p>TENCEL™ Lyocell wordt geproduceerd in een gesloten watercyclus — meer dan 99% van het oplosmiddel wordt hergebruikt. Dit maakt de productie <strong>klimaatneutraal gecertificeerd</strong>.</p>
    `,
    priceFrom: 54,
    images: [
      {
        src: "https://rupose.nl/wp-content/uploads/2025/08/plateau-molton-tencel.webp",
        alt: "Plateau Molton Tencel matrasbeschermer",
      },
      {
        src: "https://rupose.nl/wp-content/uploads/2025/08/MCD9710-groot.jpeg",
        alt: "Plateau Molton Tencel op bed gestyled",
      },
    ],
    attributes: [
      {
        name: "Maat",
        type: "size",
        options: [
          "80x200",
          "90x200",
          "100x200",
          "120x200",
          "140x200",
          "160x200",
          "180x200",
          "200x200",
          "90x220",
          "140x220",
          "160x220",
          "180x220",
          "200x220",
        ],
      },
    ],
    specifications: [
      { label: "Materiaal bovenzijde", value: "TENCEL™ Lyocell + PCM capsules" },
      {
        label: "Materiaal onderzijde",
        value: "Anti-slip behandelde bouclé",
      },
      { label: "Vulling", value: "TENCEL™ Lyocell microvezel" },
      { label: "Hoekhoogte", value: "Tot 30 cm" },
      { label: "Wasadvies", value: "60°C machinewasbaar" },
      { label: "Productieland", value: "Duitsland" },
      { label: "Certificering", value: "OEKO-TEX® Standard 100, Klimaatneutraal" },
    ],
    certifications: [
      "OEKO-TEX® Standard 100",
      "Made in Germany",
      "Klimaatneutrale productie",
    ],
    inStock: true,
  },
  {
    slug: "hefel-pure-cotton-topdekmatras",
    name: "Hefel Pure Cotton Topdekmatras",
    brand: "Hefel",
    category: "Topdekmatrassen",
    categorySlug: "topdekmatrassen",
    categoryHref: "/winkel/topdekmatrassen/",
    shortDescription:
      "Topdekmatras van puur katoen. Ademend, vochtabsorberend en lekker zacht. Geeft direct extra comfort aan je bestaande matras.",
    longDescriptionHtml: `
      <p>Het Hefel Pure Cotton topdekmatras brengt direct extra comfort naar je bestaande matras. De pure katoenvulling is ademend en vochtabsorberend — voor een frisse, droge slaapomgeving.</p>
      <p>Hefel is een Oostenrijks familiebedrijf dat al generaties lang premium bedtextiel produceert. De producten staan bekend om hun duurzaamheid en ambachtelijke kwaliteit. Dit topdekmatras is een perfect instapmodel voor wie het comfort van een topdekmatras wil ontdekken.</p>
      <h3>Onderhoud</h3>
      <p>Het Hefel Pure Cotton topdekmatras is machinewasbaar op 60°C en kan in de droger worden gedroogd. Hierdoor is het hygiënisch en onderhoudsvriendelijk — ideaal voor gezinnen.</p>
    `,
    priceFrom: 229,
    images: [
      {
        src: "https://rupose.nl/wp-content/uploads/2025/07/pure_cotton_ub.jpg",
        alt: "Hefel Pure Cotton Topdekmatras",
      },
      {
        src: "https://rupose.nl/wp-content/uploads/2025/04/MCD9695-groot.jpeg",
        alt: "Hefel topdekmatras op bed gestyled",
      },
    ],
    attributes: [
      {
        name: "Maat",
        type: "size",
        options: [
          "80x200",
          "90x200",
          "100x200",
          "120x200",
          "140x200",
          "160x200",
          "180x200",
          "200x200",
        ],
      },
    ],
    specifications: [
      { label: "Vulling", value: "100% puur katoen" },
      { label: "Tijk", value: "100% puur katoen" },
      { label: "Hoogte", value: "Ca. 5 cm" },
      { label: "Wasadvies", value: "60°C machinewasbaar, droger geschikt" },
      { label: "Productieland", value: "Oostenrijk" },
      { label: "Certificering", value: "OEKO-TEX® Standard 100" },
    ],
    certifications: ["OEKO-TEX® Standard 100"],
    inStock: true,
  },
  {
    slug: "topmatras-elite-3",
    name: "Topmatras Elite 3",
    brand: "Ecolife",
    category: "Topdekmatrassen",
    categorySlug: "topdekmatrassen",
    categoryHref: "/winkel/topdekmatrassen/",
    shortDescription:
      "Premium topmatras van Ecolife met paardenhaar, scheerwol en bamboe. 11 cm luxueuze comfort-laag. Omkeerbaar: winter/zomerzijde.",
    longDescriptionHtml: `
      <p>Het Topmatras Elite 3 is het premium model in het Ecolife-assortiment. Dit <strong>11 cm dikke topmatras</strong> combineert drie lagen van uitsluitend natuurlijke materialen: paardenhaar, scheerwol en bamboevezel.</p>
      <h3>Materiaallagen</h3>
      <ul>
        <li><strong>Bovenlaag:</strong> Bamboe-jersey tijk — zacht, ademend en antibacterieel</li>
        <li><strong>Middenvulling:</strong> Scheerwol — warmteregulatie en veerkracht</li>
        <li><strong>Onderlaag:</strong> Paardenhaar — ventilerend en vormvast</li>
      </ul>
      <h3>Omkeerbaar</h3>
      <p>Het Elite 3 is omkeerbaar: de <strong>winterzijde</strong> is iets warmer door de extra wollaag bovenop; de <strong>zomerzijde</strong> plaatst de ventilaterende paardenhaarzijde bovenaan voor maximale koelte.</p>
      <h3>Hardheidskeuze</h3>
      <p>Beschikbaar in zacht, medium en stevig. De hardheid heeft invloed op de stevigheid van het ligoppervlak — niet op de dikte of de hoogte. Rupose adviseert zijslapers medium of stevig; rugslapers medium of zacht.</p>
    `,
    priceFrom: 399,
    images: [
      {
        src: "https://rupose.nl/wp-content/uploads/2025/08/plateau-molton-tencel-3.webp",
        alt: "Topmatras Elite 3 van Ecolife",
      },
      {
        src: "https://rupose.nl/wp-content/uploads/2025/08/plateau-molton-tencel-6.webp",
        alt: "Elite 3 detailopname materiaallagen",
      },
    ],
    attributes: [
      {
        name: "Maat",
        type: "size",
        options: [
          "80x200",
          "90x200",
          "100x200",
          "120x200",
          "140x200",
          "160x200",
          "180x200",
          "200x200",
        ],
      },
      {
        name: "Hardheid",
        type: "select",
        options: ["Zacht", "Medium", "Stevig"],
      },
    ],
    specifications: [
      { label: "Vullinglagen", value: "Paardenhaar, scheerwol, bamboevezel" },
      { label: "Tijk", value: "Bamboe-jersey, dubbel geweven" },
      { label: "Dikte", value: "Ca. 11 cm" },
      { label: "Hardheden", value: "Zacht / Medium / Stevig" },
      { label: "Omkeerbaar", value: "Ja — winter/zomerzijde" },
      { label: "Wasadvies", value: "Professioneel reinigen" },
      { label: "Certificering", value: "OEKO-TEX® Standard 100" },
    ],
    certifications: ["OEKO-TEX® Standard 100", "Responsible Wool Standard"],
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug
  )
    .concat(PRODUCTS.filter((p) => p.slug !== product.slug))
    .slice(0, count);
}
