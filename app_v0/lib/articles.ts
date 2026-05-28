// lib/articles.ts
// Mock blog articles for slaapadvies pages.

const CDN = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images'

export type ArticleCategory =
  | 'Materialen'
  | 'Onderhoud & verzorging'
  | 'Koopgids'
  | 'Slaapcomfort'
  | 'Achtergrond'

export interface Article {
  slug: string
  title: string
  /** Legacy short tag shown on cards */
  tag: string
  /** Taxonomy category */
  category: ArticleCategory
  tags: string[]
  readingTime: number
  readTime: string
  publishedAt: string
  excerpt: string
  image: string
  body: string
}

export const articles: Article[] = [
  {
    slug: 'wat-is-een-molton',
    title: 'Wat is een molton en heb je er een nodig?',
    tag: 'Materialen',
    category: 'Materialen',
    tags: ['molton', 'matrasbescherming', 'tencel', 'pcm'],
    readingTime: 4,
    readTime: '4 min lezen',
    publishedAt: '2025-03-12',
    image: `${CDN}/heroes/MCD9710-groot.jpeg`,
    excerpt:
      'Een molton beschermt je matras tegen zweet, vlekken en slijtage. Maar niet elke molton is hetzelfde.',
    body: `Een molton is een dunne beschermende laag die je over je matras legt, onder het hoeslaken. De naam "molton" komt van het Franse "molleton", wat zachte stof betekent. Hoewel veel mensen denken dat een molton optioneel is, vertellen slaapexperts een ander verhaal.

**Waarom heb je een molton nodig?**

Een matras is een grote investering. Een goede molton beschermt die investering tegen zweet, huidschilfers, vlekken en slijtage. Zonder molton dringen vocht en vuil direct in de matraskern, wat schimmelvorming en geurtjes kan veroorzaken. Bovendien zijn de meeste matrassen niet wasbaar: eenmaal bevuild, blijft de schade zitten.

Een molton biedt ook een extra comfortlaag. Afhankelijk van het materiaal en de dikte kan een molton het slaapoppervlak merkbaar zachter en warmer aanvoelen.

**Soorten molton: wat zijn de verschillen?**

Er zijn drie hoofdsoorten molton verkrijgbaar bij Rupose:

Katoenen molton is de meest basale variant. Absorbeert vocht goed en is makkelijk te wassen op 60 graden. Ideaal als je een eenvoudige, betaalbare matrasbeschermer zoekt.

Tencel molton is gemaakt van Lyocell-vezels, gewonnen uit hout. Tencel ademt beter dan katoen en voelt zachter aan. Vooral geschikt voor mensen die 's nachts warm worden of zweten.

PCM molton (Phase Change Material) is de meest geavanceerde variant. De vulling bevat microcapsules die warmte opnemen als je te warm wordt en weer afgeven als je het koud krijgt. Dit activeert temperatuurregulering op microniveau voor een constant aangenaam slaapklimaat.

**Welke molton past bij jou?**

Slaap je warm en zwetig? Kies dan voor Tencel of PCM. Heb je een normaal slaapklimaat en wil je vooral je matras beschermen? Dan volstaat een katoenen molton. Heb je een luxe matras die je optimaal wil beschermen en een perfect slaapklimaat wil creëren? Ga dan voor de PCM-variant.

Bij Rupose helpen we je graag de juiste keuze maken. Neem gerust contact op voor persoonlijk slaapadvies.`,
  },
  {
    slug: 'molton-wassen',
    title: 'Molton wassen: zo doe je het goed',
    tag: 'Onderhoud & verzorging',
    category: 'Onderhoud & verzorging',
    tags: ['molton', 'wassen', 'onderhoud', 'levensduur'],
    readingTime: 3,
    readTime: '3 min lezen',
    publishedAt: '2025-04-08',
    image: `${CDN}/heroes/MCD9716-groot.jpeg`,
    excerpt:
      'Een molton was je op 60 graden, maar er zijn subtiele verschillen per materiaalsoort.',
    body: `Een molton regelmatig wassen is belangrijk voor de hygiëne en de levensduur van je matras. Maar hoe vaak, op welke temperatuur en hoe droog je hem daarna? We leggen het stap voor stap uit.

**Hoe vaak was je een molton?**

Was je molton minimaal eens per maand. Bij warme slapers of als je huisdieren op het bed laat: eens per twee weken. Een vuistregel: was de molton elke keer dat je het beddengoed verschoont.

**Temperatuur: altijd 60 graden?**

Voor katoenen moltons is 60 graden de standaard. Bij deze temperatuur worden huisstofmijten, bacteriën en schimmelsporen effectief gedood. Voor Tencel moltons kun je beter 40 of 60 graden gebruiken: controleer het waslabel. PCM-moltons was je op 60 graden om de hygiëne te waarborgen, maar gebruik een zacht wasprogramma.

**Wasmiddel en centrifuge**

Gebruik een mild wasmiddel zonder bleek. Bleek beschadigt de vezels en tast de PCM-microcapsules aan. Centrifugeer op maximaal 800 toeren: hogere snelheden kunnen de stof en elastieken beschadigen.

**Drogen: machine of aan de lijn?**

Droger: gebruik de lage of medium temperatuurstand. Leg er eventueel een of twee droogballen in om het drogen te versnellen en klontvorming te voorkomen. Aan de lijn: hang de molton niet in direct zonlicht als hij PCM-vulling heeft, UV-straling kan de microcapsules aantasten.

**Na het wassen**

Controleer na het wassen of de molton geen kale plekken of scheurtjes heeft. Bij twijfel: vervang de molton. Een versleten molton beschermt je matras niet meer effectief.

Bij Rupose verkopen we moltons met uitgebreide wasinstructies op het label. Heb je nog vragen? Neem contact op.`,
  },
  {
    slug: 'jersey-vs-katoen',
    title: 'Jersey vs katoen hoeslaken: wat past bij jou?',
    tag: 'Materialen',
    category: 'Materialen',
    tags: ['jersey', 'percal', 'katoen', 'hoeslaken'],
    readingTime: 5,
    readTime: '5 min lezen',
    publishedAt: '2025-04-22',
    image: `${CDN}/heroes/MCD9691-groot.jpeg`,
    excerpt:
      'Jersey strekt mee, percal ademt. Beide zijn katoen, maar het gevoel verschilt enorm.',
    body: `Als je een hoeslaken koopt, kom je al snel voor een keuze te staan: jersey of percal katoen? Beide zijn gemaakt van katoen, maar de weefseltechniek maakt een enorm verschil in gevoel, pasvorm en onderhoud.

**Wat is jersey?**

Jersey is een gebreid weefsel: de draden worden door elkaar gebreid, net als een T-shirt. Dit geeft het stof elasticiteit. Een jersey hoeslaken strekt mee, past om dikke matrassen en trekt niet snel los. Het voelt zacht en warm aan, ideaal voor koude nachten.

Het bekendste jersey hoeslaken is de Bella Donna van Formesse. Dit hoeslaken is gemaakt van jersey-katoen verrijkt met aloë vera en strekt mee tot 35 cm matrasdikte. Het is beschikbaar in 54 kleuren en wordt al meer dan 30 jaar geproduceerd in Duitsland.

**Wat is percal?**

Percal is een geweven stof met een hoge draaddichtheid, minimaal 200 draden per cm2. Dit geeft het stof een gladde, koele aanraking, vergelijkbaar met een luxe hotelkamer. Percal ademt goed, wat het ideaal maakt voor warme slapers of de zomermaanden.

Percal is minder elastisch dan jersey en past minder goed om dikke matrassen. Maar het draagt lichter, kreukelt minder snel en behoudt zijn kleur langer.

**Welke kies je?**

Kies jersey als je een zachte, warme aanraking wil, een dik matras hebt (25+ cm) of 's nachts weinig zweeft. Kies percal als je een koele, gladde aanraking wil, warm slaapt of de voorkeur geeft aan een crisp, hotelachtige look.

Twijfel je? Beide materialen zijn wasbaar op 60 graden en gaan jarenlang mee bij goed onderhoud. Vraag ons gerust om advies.`,
  },
  {
    slug: 'welk-dekbed-kies-je',
    title: 'Welk dekbed past bij jouw seizoen?',
    tag: 'Koopgids',
    category: 'Koopgids',
    tags: ['dekbed', 'warmteklasse', 'dons', 'seizoenen'],
    readingTime: 6,
    readTime: '6 min lezen',
    publishedAt: '2025-05-05',
    image: `${CDN}/lifestyle/MCD9646-Edit-groot.jpeg`,
    excerpt:
      'Warmteklasse 1 of 4? Dons of wol? Zomer of winter? Een praktische gids voor de juiste keuze.',
    body: `Een dekbed kopen voelt vaak overweldigend: warmteklassen, vulgewichten, dons versus wol versus synthetisch. We geven je een praktische gids om de juiste keuze te maken, gebaseerd op jouw slaappatroon en het seizoen.

**Warmteklassen: van 1 tot 4**

De warmteklasse van een dekbed loopt van 1 (zomers, licht) tot 4 (winters, zwaar). Warmteklasse 1 en 2 zijn voor warme nachten of warme slapers. Klasse 3 en 4 zijn voor koele slaapkamers of mensen die het snel koud krijgen.

Een 4-seizoenendekbed bestaat uit twee dekbedden die je aan elkaar knoopt: een licht zomerdekbed en een medium dekbed. Samen vormen ze een warm winterdekbed; afzonderlijk zijn ze geschikt voor de overgangsmaanden.

**Vulling: dons, wol of synthetisch?**

Dons is de luxe optie. Ganzendons heeft een hoge loftscore: het vult veel ruimte maar weegt weinig. Dons is warm, luchtig en gaat decennia mee bij goed onderhoud.

Wol reguleert van nature temperatuur. Een wollen dekbed is ideaal als je 's nachts stevig zweet en afkoelt: de wol absorbeert vocht en geeft het geleidelijk af.

Synthetisch is de meest betaalbare optie en eenvoudig te wassen op hogere temperaturen. Minder ademend dan dons of wol, maar praktisch en hygiënisch.

**Onze aanbeveling**

Voor de meeste slapers is een 4-seizoenendekbed de beste investering: flexibel, wasbaar en geschikt voor het hele jaar. Als je bereid bent meer te investeren in slaapcomfort, kies dan voor ganzendons in warmteklasse 2-3. Je slaapt er meteen beter door.

Wil je persoonlijk advies? Neem contact op met ons team. We helpen je graag de juiste keuze maken.`,
  },
  {
    slug: 'hoofdkussen-kiezen',
    title: 'Hoe kies je het juiste hoofdkussen?',
    tag: 'Koopgids',
    category: 'Koopgids',
    tags: ['hoofdkussen', 'slaaphouding', 'wol', 'latex'],
    readingTime: 5,
    readTime: '5 min lezen',
    publishedAt: '2025-05-19',
    image: `${CDN}/heroes/MCD9695-groot.jpeg`,
    excerpt:
      'Je slaaphouding bepaalt grotendeels welk hoofdkussen bij je past. Rugslaper, zijslaper of buikslaper.',
    body: `Een hoofdkussen kopen zonder te weten wat je nodig hebt, is als schoenen kopen zonder je maat te kennen. Je slaaphouding, schouderbreedte en persoonlijke voorkeur bepalen welk kussen bij jou past. We leggen het stap voor stap uit.

**Slaaphouding: de belangrijkste factor**

Rugslapers hebben een medium-dik kussen nodig dat de nek licht ondersteunt. Te dik en je hoofd kantelt naar voren, te dun en je nek hangt achterover. Een kussen van 8-10 cm is doorgaans ideaal.

Zijslapers hebben een dikker kussen nodig om de ruimte tussen hoofd en matras te overbruggen. Je schouderbreedte bepaalt de ideale dikte: bredere schouders vragen om een dikker kussen.

Buikslapers hebben het dunste kussen nodig, of soms helemaal geen. Een dik kussen duwt het hoofd te ver omhoog en belast de nek en ruggenwervel.

**Vulling: wol, dons of latex?**

Schapenwol (zoals ons Texeler Bovenste Beste) is ademend, vochtabsorberend en veerkrachtig. Geschikt voor alle slaapposities en bijzonder prettig voor mensen die 's nachts warmtewisselingen ervaren.

Dons is zacht en aanpasbaar: je duwt het in de gewenste vorm. Populair bij rugslapers die van een zacht, omhullend gevoel houden.

Latex is stevig en behoudt zijn vorm. Goed voor mensen met nek- of rugklachten die structurele ondersteuning nodig hebben.

**Grootte**

Standaardmaten zijn 60x70 cm en 60x80 cm. Voor een kingsize bed of als je veel beweegt in je slaap, kan een groter kussen prettiger zijn.

Bij Rupose bieden we persoonlijk advies op basis van jouw situatie. Neem contact op of kom langs in Haren.`,
  },
  {
    slug: 'maten-hoeslaken',
    title: 'Maten hoeslaken: welke maat past op jouw matras?',
    tag: 'Koopgids',
    category: 'Koopgids',
    tags: ['hoeslaken', 'maten', 'maatgids', 'boxspring'],
    readingTime: 4,
    readTime: '4 min lezen',
    publishedAt: '2025-06-02',
    image: `${CDN}/heroes/Formesse_Bella-Donna-Jersey_Farbpalette-1-scaled.jpg`,
    excerpt:
      'Een hoeslaken van de verkeerde maat trekt los of past niet om dikke matrassen heen.',
    body: `Een hoeslaken van de verkeerde maat is een van de meest voorkomende fouten bij het kopen van beddengoed. Het resultaat: een hoeslaken dat elke nacht lostrekt, kreukt of gewoon niet past. Met deze maatgids zit je altijd goed.

**Hoe meet je je matras?**

Meet de lengte, breedte en hoogte (dikte) van je matras. De meeste matrassen zijn 200 of 210 cm lang. De breedte varieert: 80, 90, 100, 120, 140, 160, 180 of 200 cm. De dikte is de cruciale maat die veel mensen vergeten te meten.

**Matrasdikte en hoeslaken**

Een standaard hoeslaken past om matrassen tot 25-30 cm. Heb je een dikkere matras, een topmatras of een boxspring? Dan heb je een hoeslaken met diepere hoeken nodig, of een jersey hoeslaken dat elastisch genoeg is om mee te strekken.

Het Bella Donna Jersey hoeslaken van Formesse strekt mee tot 35 cm matrasdikte. Dat maakt het uitermate geschikt voor dikke matrassen, topmatrassen en boxsprings.

**Standaardmaten hoeslakens**

80 x 200 cm matras: kies een hoeslaken voor 80-100 x 200-220 cm.
90 x 200 cm matras: kies een hoeslaken voor 90-100 x 200-220 cm.
140 x 200 cm matras: kies een hoeslaken voor 140-160 x 200-220 cm.
160 x 200 cm matras: kies een hoeslaken voor 160-180 x 200-220 cm.
180 x 200 cm matras: kies een hoeslaken voor 180-200 x 200-220 cm.
200 x 200 cm matras: kies een hoeslaken voor 200 x 200-220 cm.

**Tips voor de perfecte pasvorm**

Controleer altijd de matrasdikte voor de aankoop. Heeft je matras 28 cm en je hoeslaken maximaal 25 cm? Dan trekt het los. Bij twijfel: kies een jersey hoeslaken met meer rekbaarheid.

Heb je een ongebruikelijke maat? Bij Rupose adviseren we je graag welk hoeslaken het beste past. Neem contact op.`,
  },
  {
    slug: 'slaapcomfort-verbeteren',
    title: 'Slaapcomfort verbeteren: kleine aanpassingen, groot verschil',
    tag: 'Slaapcomfort',
    category: 'Slaapcomfort',
    tags: ['slaapcomfort', 'slaapkwaliteit', 'tips', 'nachtrust'],
    readingTime: 5,
    readTime: '5 min lezen',
    publishedAt: '2025-06-16',
    image: `${CDN}/lifestyle/MCD9646-Edit-groot.jpeg`,
    excerpt:
      'Kleine aanpassingen aan je beddengoed en slaapomgeving kunnen een merkbaar verschil maken voor je nachtrust.',
    body: `Goed slapen hoeft niet ingewikkeld te zijn. Vaak zijn het kleine aanpassingen die het grootste verschil maken. Van de temperatuur in je slaapkamer tot de keuze van je beddengoed: hier zijn de meest effectieve verbeteringen.

**Slaapkamertemperatuur**

De ideale slaapkamertemperatuur ligt tussen 16 en 18 graden Celsius. Je lichaamstemperatuur daalt van nature bij het inslapen; een koelere kamer helpt dit proces. Is je slaapkamer te warm? Overweeg dan een dekbed met een lagere warmteklasse of een Tencel molton die beter ventileert.

**Beddengoed en materiaal**

Het materiaal van je beddengoed heeft direct invloed op hoe je slaapt. Polyester houdt warmte vast en ademt slecht. Katoen, wol en Tencel ademen van nature beter. Als je 's nachts regelmatig wakker wordt van warmte of transpiratie, is het de moeite waard om over te stappen op ademend beddengoed.

**Kussenkeuze en nekhouding**

Een verkeerd kussen is een van de meest onderschatte oorzaken van slechte slaap. Je nek moet in een rechte lijn liggen met je ruggengraat. Te hoog of te laag en je wekt 's ochtends op met spanning in nek en schouders.

**Regelmaat**

Ga elke dag op dezelfde tijd naar bed en sta op dezelfde tijd op, ook in het weekend. Je biologische klok is een krachtig systeem dat van regelmaat houdt. Zelfs kleine veranderingen in je slaaptijden kunnen de kwaliteit van je slaap merkbaar verminderen.

**Donker en stil**

Verduisterende gordijnen en oordoppen of een witte-ruis-machine kunnen een groot verschil maken als je in een omgeving woont met veel licht of geluid. Je hersenen gaan pas echt in slaapstand als de prikkels minimaal zijn.

Wil je weten welk beddengoed het beste past bij jouw slaapsituatie? Neem contact op met de slaapspecialisten van Rupose.`,
  },
  {
    slug: 'duurzaam-beddengoed',
    title: 'Duurzaam beddengoed: wat betekent het echt?',
    tag: 'Achtergrond',
    category: 'Achtergrond',
    tags: ['duurzaamheid', 'oeko-tex', 'tencel', 'katoen'],
    readingTime: 6,
    readTime: '6 min lezen',
    publishedAt: '2025-07-01',
    image: `${CDN}/heroes/MCD9710-groot.jpeg`,
    excerpt:
      'OEKO-TEX, biologisch katoen, Tencel: wat betekenen deze keurmerken en claims werkelijk voor jou en het milieu?',
    body: `De term "duurzaam" wordt tegenwoordig op vrijwel elk product geplakt. Maar wat betekent het als een beddengoed-fabrikant zegt dat zijn producten duurzaam zijn? We leggen de belangrijkste keurmerken en claims uit.

**OEKO-TEX Standard 100**

Dit is het meest gebruikte keurmerk in de textielbranche. Een product met OEKO-TEX Standard 100-certificering is getest op ruim 100 schadelijke stoffen en is bewezen vrij van pesticiden, zware metalen en allergene kleurstoffen. Belangrijk: het keurmerk zegt niets over de productieomstandigheden, alleen over de schadelijkheid van het eindproduct.

**GOTS: biologisch en sociaal**

De Global Organic Textile Standard (GOTS) is strenger dan OEKO-TEX. Biologisch katoen met GOTS-certificering is geteeld zonder chemische pesticiden en kunstmest, en de productie voldoet aan sociale normen (eerlijk loon, veilige werkomgeving). Als je echt duurzaam wil kopen, zoek dan naar het GOTS-keurmerk.

**Tencel en Lyocell**

Tencel is een merknaam voor Lyocell-vezels, gewonnen uit hout van duurzaam beheerde bossen. Het productieproces is vrijwel gesloten: meer dan 99% van de oplosmiddelen wordt hergebruikt. Tencel ademt goed, voelt zacht aan en is biologisch afbreekbaar. Een goede keuze voor wie duurzamer wil leven.

**Longevity: het meest duurzame is iets dat lang meegaat**

De meest duurzame aankoop is een die je jarenlang niet hoeft te vervangen. Een goedkoop hoeslaken dat na een jaar versleten is, heeft een hogere milieu-impact dan een duurder kwalitatief exemplaar dat 10 jaar meegaat. Investeer in kwaliteit.

Bij Rupose verkopen we uitsluitend beddengoed van merken die serieus omgaan met kwaliteit en duurzaamheid: Bella Donna, Ecolife, Texeler en Hefel werken allemaal met gecertificeerde materialen.`,
  },
  {
    slug: 'hoeslaken-onderhoud',
    title: 'Hoeslaken onderhoud: zo blijft je beddengoed als nieuw',
    tag: 'Onderhoud & verzorging',
    category: 'Onderhoud & verzorging',
    tags: ['hoeslaken', 'wassen', 'onderhoud', 'katoen'],
    readingTime: 4,
    readTime: '4 min lezen',
    publishedAt: '2025-07-14',
    image: `${CDN}/heroes/MCD9691-groot.jpeg`,
    excerpt:
      'Goed onderhoud verlengt de levensduur van je beddengoed aanzienlijk. De juiste wastemperatuur, droogmethode en opbergtips.',
    body: `Kwaliteitsbeddengoed gaat jaren mee, mits je het goed onderhoudt. Met de juiste wastemperatuur, droogmethode en een paar simpele gewoonten houd je je hoeslaken, dekbedovertrek en kussensloop in topconditie.

**Hoe vaak verschoon je je beddengoed?**

De vuistregel: verschoon je beddengoed elke 1 tot 2 weken. Slaap je in een warme kamer, heb je huisdieren op bed of zweeft je 's nachts sterk? Was dan wekelijks. Huisstofmijten, huidschilfers en zweet stapelen zich op in je beddengoed; regelmatig wassen is de belangrijkste maatregel voor een hygiënisch slaapklimaat.

**Wastemperatuur: 40 of 60 graden?**

Wit katoen (percal, satijn) was je op 60 graden. Dit doodt bacteriën en huisstofmijten effectief. Gekleurd beddengoed, jersey en fijner geweven stoffen was je op 40 graden om verkleuring en krimp te voorkomen. Controleer altijd het waslabel.

**Droogadvies**

De droger mag op lage temperatuur voor de meeste katoenen producten. Haal ze iets vochtig uit de droger en strek ze glad: dit voorkomt kreukels. Aan de waslijn: hang ze niet in direct zonlicht als ze gekleurd zijn, UV-straling tast kleuren aan.

**Strijken: wel of niet?**

Percal en satijn baaien bij een licht strijkbeurt: ze zien er dan strakker uit en de draad ligt mooier. Jersey en jersey-mix hoeslakens hoef je niet te strijken; ze trekken van nature glad.

**Opbergen**

Berg beddengoed op in een droge, donkere ruimte. Vouw het zo klein mogelijk en leg het in een katoenen tas of de bijbehorende verpakking om stof te voorkomen. Vermijd plastic zakken: katoen heeft lucht nodig om niet te gaan muf ruiken.

Heb je vragen over het onderhoud van een specifiek product? Neem contact op met Rupose.`,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAllArticles(): Article[] {
  return articles
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const article = articles.find((a) => a.slug === slug)
  if (!article) return articles.filter((a) => a.slug !== slug).slice(0, limit)
  return articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, limit)
    .concat(
      articles
        .filter((a) => a.slug !== slug && a.category !== article.category)
        .slice(0, limit)
    )
    .slice(0, limit)
}

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  'Materialen',
  'Onderhoud & verzorging',
  'Koopgids',
  'Slaapcomfort',
  'Achtergrond',
]
