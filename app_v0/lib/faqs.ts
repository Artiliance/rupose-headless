import type { FaqItem } from '@/components/blocks/faq-accordion'

// ---------------------------------------------------------------------------
// Generic shipping / returns FAQs — used as fallback across the site
// ---------------------------------------------------------------------------
export const genericShippingFaqs: FaqItem[] = [
  {
    question: 'Hoe lang duurt de verzending?',
    answer:
      'Bestellingen geplaatst voor 15:00 uur op werkdagen worden dezelfde dag verzonden en zijn doorgaans binnen 2 tot 3 werkdagen bezorgd via PostNL.',
  },
  {
    question: 'Wat zijn de verzendkosten?',
    answer:
      'Verzending is gratis bij bestellingen vanaf 75 euro. Onder dit bedrag rekenen wij 4,95 euro verzendkosten voor pakketbezorging in Nederland.',
  },
  {
    question: 'Kan ik een bestelling retourneren?',
    answer:
      'Ja, je kunt producten binnen 30 dagen na ontvangst retourneren, mits ongebruikt en in originele verpakking. Neem contact op via info@rupose.nl om een retourzending aan te melden.',
  },
  {
    question: 'Hoe volg ik mijn bestelling?',
    answer:
      'Na verzending ontvang je een bevestigingsmail met een Track en Trace-code van PostNL. Je kunt de bezorging ook volgen via je account onder "Bestellingen".',
  },
  {
    question: 'Kan ik mijn bestelling nog wijzigen of annuleren?',
    answer:
      'Wijzigingen en annuleringen zijn mogelijk zolang de bestelling nog niet is verzonden. Neem hiervoor zo snel mogelijk telefonisch contact op via 050-123 45 67.',
  },
]

// ---------------------------------------------------------------------------
// Category FAQs — 4 per category slug
// ---------------------------------------------------------------------------
export const categoryFaqs: Record<string, FaqItem[]> = {
  hoeslakens: [
    {
      question: 'Welke maat hoeslaken heb ik nodig?',
      answer:
        'Meet de afmetingen van je matras op: lengte, breedte en hoogte. Onze hoeslakens zijn verkrijgbaar van 70x200 cm tot 200x220 cm, met instophoogtes van 20 tot 40 cm. Twijfel je? Kies altijd een hoeslaken met grotere instophoogte dan je matras dik is.',
    },
    {
      question: 'Wat is het verschil tussen jersey en perkalkatoen?',
      answer:
        'Jersey (gebreid) rekbaar is ideaal voor matrassen met een opstaande rand van 25 cm of meer en voelt aangenaam zacht. Perkalkatoen (geweven) is stijver, koeler en slijtvaster. Beides zijn geschikte keuzes; het is een persoonlijke voorkeur.',
    },
    {
      question: 'Op welke temperatuur was ik een hoeslaken?',
      answer:
        'Katoenen hoeslakens kun je wassen op 60 graden, wat hygiënisch is en stofmijten bestrijdt. Bamboe- en tencel-varianten wassen op 40 graden om krimp te voorkomen. Raadpleeg altijd het wassymbool op het product.',
    },
    {
      question: 'Hoe lang gaat een kwalitatief hoeslaken mee?',
      answer:
        'Een hoeslaken van goede kwaliteit, zoals onze Bella Donna of Formesse-lijn, gaat bij normaal gebruik en correcte verzorging gemakkelijk 5 tot 8 jaar mee. Was wekelijks op 60 graden voor optimale hygiëne en levensduur.',
    },
  ],
  dekbedden: [
    {
      question: 'Welke warmteklasse is geschikt voor mij?',
      answer:
        'Warmteklasse 1 en 2 zijn geschikt voor warme slapers en de zomermaanden. Klasse 3 en 4 zijn bedoeld voor koudere nachten of gevoelige slapers. Een 4-seizoenen dekbed combineert klasse 1 en 3 en is het hele jaar bruikbaar.',
    },
    {
      question: 'Wat is het verschil tussen dons en synthetisch?',
      answer:
        'Donzen dekbedden isoleren uitstekend, zijn licht van gewicht en ademen goed. Ze zijn bij voorkeur professioneel reinigbaar. Synthetische vulling is geschikt voor mensen met een donsal Lergie, is machinewasbaar en betaalbaarder in aanschaf.',
    },
    {
      question: 'Hoe was ik een donzen dekbed?',
      answer:
        'Kleine donzen dekbedden (tot 135x200 cm) kun je thuis wassen op 40 graden in een trommelwasmachine zonder agitator, met een speciaal down-wasmiddel. Grotere maten raad je aan professioneel te laten reinigen om klontering van de vulling te voorkomen.',
    },
    {
      question: 'Hoe lang is de levensduur van een premium dekbed?',
      answer:
        'Een premium donzen dekbed, zoals de Vorsa of Hefel-lijn, heeft bij goede verzorging een levensduur van 10 tot 15 jaar. Laat je dekbed jaarlijks een dag buiten luchten en bewaar het losjes in een katoenen hoes.',
    },
  ],
  hoofdkussens: [
    {
      question: 'Welk kussen past bij mijn slaaphouding?',
      answer:
        'Rugslapers hebben doorgaans baat bij een medium kussen van 10 tot 12 cm. Zijslapers hebben een steviger, hoger kussen nodig van 12 tot 16 cm om de schouder op te vangen. Buikslapers slapen het comfortabelst op een plat kussen tot 8 cm hoog.',
    },
    {
      question: 'Hoe weet ik of mijn kussen aan vervanging toe is?',
      answer:
        'Vouw je kussen dubbel. Als het niet terugvalt, is de vulling uitgewerkt en tijd voor vervanging. Gemiddeld adviseren wij elk 2 tot 3 jaar een nieuw kussen voor optimale ondersteuning en hygiëne.',
    },
    {
      question: 'Kan ik mijn hoofdkussen in de wasmachine wassen?',
      answer:
        'Synthetische kussens zijn doorgaans wasbaar op 60 graden. Donzen en wolle kussens was op 40 graden met een speciaal wasprogramma. Drogertijd op laag tot medium warmte, met tennisballen erbij, voorkomt klontering.',
    },
    {
      question: 'Wat is het voordeel van een wollen kussen?',
      answer:
        'Wol reguleert temperatuur en vochtigheid op een natuurlijke manier: warm in de winter, koel in de zomer. Wol is van nature anti-allergeen, ademend en duurzaam. Onze Texeler wollen kussens zijn gemaakt van gecertificeerde Texelse schapenwol.',
    },
  ],
  topmatrassen: [
    {
      question: 'Wat doet een topmatras precies?',
      answer:
        'Een topmatras is een dunne comfortlaag (5 tot 12 cm) die bovenop je bestaande matras wordt gelegd. Het verbetert het slaapcomfort, past de hardheid aan en verlengt de levensduur van je matras. Het is geen vervanging voor een versleten matras.',
    },
    {
      question: 'Welke maat topmatras heb ik nodig?',
      answer:
        'De maat van je topmatras stemt u af op je matras. Kies dezelfde lengte en breedte. De hoogte varieert doorgaans van 5 tot 12 cm. Een hoeslaken met een grotere instophoogte accommodeert matras en topmatras samen.',
    },
    {
      question: 'Kan ik een topmatras wassen?',
      answer:
        'De meeste topmatrassen hebben een afneembare, wasbare hoes (60 graden). De kern zelf is niet wasbaar. Laat de kern regelmatig luchten en gebruik een matrasbeschermer voor optimale hygiëne.',
    },
    {
      question: 'Hoe lang gaat een topmatras mee?',
      answer:
        'Afhankelijk van kwaliteit en gebruik gaat een topmatras gemiddeld 5 tot 8 jaar mee. Premium kwaliteiten zoals onze Bella Donna Stretch of Hefel topmatrassen behouden hun veerkracht aanmerkelijk langer.',
    },
  ],
  kussenslopen: [
    {
      question: 'Wat is het verschil tussen een kussensloop en een kussenslip?',
      answer:
        'Een kussenslip heeft geen sluiting en schuift over het kussen heen. Een kussensloop heeft een opstaande rand of rits voor een nettere afwerking en blijft beter op zijn plaats. Beide zijn verkrijgbaar in onze collectie.',
    },
    {
      question: 'Op welke temperatuur was ik een kussensloop?',
      answer:
        'Katoenen en satijnen kussenslopen wassen goed op 60 graden, wat hygiënisch is en stofmijten doodt. Bamboevarianten wassen op 40 graden. Keer kussenslopen binnenstebuiten voor een langere kleur- en glansbehoud.',
    },
    {
      question: 'Hoe combineer ik kussenslopen met mijn dekbedovertrek?',
      answer:
        'Kies kussenslopen in hetzelfde materiaal en kleur als je dekbedovertrek voor een rustgevend geheel. Of kies een subtiele tint die complementair is voor een gelaagde look. Onze sets bevatten altijd bijpassende kussenslopen.',
    },
    {
      question: 'Hoeveel kussenslopen heb ik nodig per bed?',
      answer:
        'Per slaappersoon heb je minimaal twee kussenslopen nodig: een in gebruik en een schone in reserve. Voor een gastbed raad je aan ook een extra stel klaar te hebben liggen.',
    },
  ],
  'molton-beschermers': [
    {
      question: 'Wat is het nut van een molton matrasbeschermer?',
      answer:
        'Een molton matrasbeschermer beschermt je matras tegen vocht, stofmijten, huisstofaallergenen en slijtage. Dit verlengt de levensduur van je matras aanzienlijk. Bovendien geeft molton een zachte, dampende toplaag die geluid dempt bij het bewegen in bed.',
    },
    {
      question: 'Kan een molton beschermer mijn matras laten krimpen in de was?',
      answer:
        'Molton is een geweven stof van katoen en krimpt licht bij de eerste wassing. Wij passen onze maatvoering hierop aan. Was op 60 graden en droog op medium warmte. Bij twijfel over de maat: kies een instophoogte die iets ruimer is dan je matras.',
    },
    {
      question: 'Hoe often moet ik mijn matrasbeschermer wassen?',
      answer:
        'Was je matrasbeschermer minimaal eens per maand op 60 graden. Bij transpiratie of vochtige nachten vaker, zoals om de twee weken. Een frisse beschermer draagt direct bij aan betere slaaphygiene.',
    },
    {
      question: 'Werkt een molton beschermer ook op een topmatras?',
      answer:
        'Ja, je kunt een molton beschermer over een topmatras trekken zoals over een gewoon matras. Zorg wel dat de totale hoogte van matras plus topmatras past binnen de instophoogte van de beschermer.',
    },
  ],
  topdekmatrassen: [
    {
      question: 'Wat is het verschil tussen een topmatras en een topdekmatras?',
      answer:
        'Een topmatras is een zelfstandige laag die je bovenop je matras legt, los of met een hoeslaken vastgezet. Een topdekmatras is doorgaans dunner (3 tot 6 cm) en functioneert meer als een comfort-afdeklaag dan als echte comfortlaag. Beide verbeteren het slaapcomfort.',
    },
    {
      question: 'Op welk matras past een topdekmatras het beste?',
      answer:
        'Een topdekmatras is geschikt bij elk matras van normale hardheid. Bij een te zacht matras is een stevigere topmatras of matrasverzwaarder een betere keuze dan een topdekmatras.',
    },
    {
      question: 'Hoe was ik een topdekmatras?',
      answer:
        'De meeste topdekmatrassen hebben een wasbare hoes. Verwijder de hoes en was op 40 tot 60 graden. De kern zelf luchten op een droge dag buiten. Controleer altijd het waslabel voor de exacte wasadviezen van het specifieke product.',
    },
    {
      question: 'Is een topdekmatras geschikt voor kinderen?',
      answer:
        'Ja, mits de maat en constructie passend zijn. Gebruik altijd een vaste matrasbeschermer voor kinderen. Kies een topdekmatras zonder te diepe zachte lagen om het risico op omhulling bij peuters en kleuters te vermijden.',
    },
  ],
}

// ---------------------------------------------------------------------------
// Brand FAQs — 3 per brand slug
// ---------------------------------------------------------------------------
export const brandFaqs: Record<string, FaqItem[]> = {
  'bella-donna': [
    {
      question: 'Waar worden Bella Donna hoeslakens gemaakt?',
      answer:
        'Bella Donna is een merk van het Duitse bedrijf Formesse GmbH. Alle producten worden geproduceerd in Duitsland volgens strenge kwaliteitsnormen, en zijn OEKO-TEX Standard 100 gecertificeerd.',
    },
    {
      question: 'Wat maakt Bella Donna hoeslakens uniek?',
      answer:
        'Bella Donna staat bekend om zijn uitzonderlijk hoge kwaliteitskatoen en de perfecte pasvorm. De hoeslakens zijn beschikbaar in meer dan 50 kleuren en maten, inclusief speciale maten voor boxsprings en diepe matrassen tot 45 cm hoog.',
    },
    {
      question: 'Zijn Bella Donna producten wasbaar op hoge temperatuur?',
      answer:
        'Ja, de meeste Bella Donna katoenen hoeslakens zijn wasbaar op 60 graden, wat ze ook geschikt maakt voor mensen met een huisstofmijerallergie. Jersey-varianten wassen op 40 graden. Raadpleeg altijd het waslabel voor de exacte instructies.',
    },
  ],
  texeler: [
    {
      question: 'Wat is Texeler en waar komt het vandaan?',
      answer:
        'Texeler is ons eigen huismerk, gebaseerd op de rijke traditie van textielvakmanschap op het Waddeneiland Texel. De producten worden vervaardigd van gecertificeerde natuurlijke materialen, met een sterke nadruk op comfort en duurzaamheid.',
    },
    {
      question: 'Zijn Texeler producten duurzaam?',
      answer:
        'Ja. Texeler werkt uitsluitend met OEKO-TEX gecertificeerde garens en vullingen. De productiepartners zijn geselecteerd op milieunormen en eerlijk arbeid. De verpakking is volledig recyclebaar.',
    },
    {
      question: 'Kan ik Texeler producten alleen bij Rupose kopen?',
      answer:
        'Texeler is een exclusief Rupose-merk en daarmee alleen verkrijgbaar via onze webshop en ons filiaal in Haren. Dit garandeert dat wij de kwaliteitsstandaard volledig in eigen hand houden.',
    },
  ],
  hefel: [
    {
      question: 'Wat is de specialiteit van Hefel dekbedden?',
      answer:
        'Hefel Textil is een Oostenrijkse fabrikant die gespecialiseerd is in dekbedden en kussens met een premium donsvulling. De Pure Cotton-lijn combineert een 100 procent katoenen tijk met geselecteerde ganzendons voor maximaal comfort en ademend vermogen.',
    },
    {
      question: 'Zijn Hefel producten ethisch verantwoord?',
      answer:
        'Hefel is lid van de Responsible Down Standard (RDS) en de European Bedding Industries Association (EBIA). Dit garandeert dat het gebruikte dons en de veren afkomstig zijn van diervriendelijk beheerde boerderijen zonder levend plukken.',
    },
    {
      question: 'Hoe lang gaat een Hefel dekbed mee?',
      answer:
        'Bij correcte verzorging heeft een Hefel premium dekbed een levensduur van 10 tot 15 jaar. Laat het jaarlijks professioneel reinigen, laat het regelmatig luchten en bewaar het los in een katoenen hoes wanneer het niet in gebruik is.',
    },
  ],
  ecolife: [
    {
      question: 'Wat onderscheidt Ecolife van andere beddengoedmerken?',
      answer:
        'Ecolife maakt slaapproducten uitsluitend van gecertificeerde natuurlijke en gerecyclede materialen, zoals GOTS-biologische wol en gerecyclede PET-vezels. Het merk combineert volwaardig slaapcomfort met een aantoonbaar lagere milieubelasting.',
    },
    {
      question: 'Welke materialen gebruikt Ecolife?',
      answer:
        'Ecolife werkt met gerecyclede of gecertificeerde biologische grondstoffen. De vullingen bestaan uit GOTS-wol of gerecyclede PET-vezels die dezelfde veerkracht bieden als synthetisch, maar met een fractie van de milieu-impact. Onze medewerkers helpen je graag de juiste keuze maken.',
    },
    {
      question: 'Hoe weet ik waar mijn Ecolife-product vandaan komt?',
      answer:
        'Elk Ecolife-product bevat een kaartje met de exacte herkomst van de gebruikte materialen en de bijbehorende certificeringen. Zo weet je precies waarvoor je betaalt en hoe duurzaam je aankoop is.',
    },
  ],
  vorsa: [
    {
      question: 'Waar zijn Vorsa dekbedden van gemaakt?',
      answer:
        'Vorsa premium dekbedden zijn gevuld met zorgvuldig geselecteerde witte ganzendons van Europese herkomst. De tijk is vervaardigd van 100 procent biologisch katoenen percal, gecertificeerd volgens GOTS-normen.',
    },
    {
      question: 'Waarom zijn Vorsa dekbedden meer waard dan goedkopere alternatieven?',
      answer:
        'Vorsa combineert de hoogste donsvulkwaliteit (fill power 700+) met een dichtegeweven tijk die donsdoorslag voorkomt. Dit resulteert in een lichtgewicht dekbed dat uitstekend isoleert zonder warmtestuwing, geschikt voor zowel slapers met kouwelijkheidsgevoeligheid als warme slapers.',
    },
    {
      question: 'Hoe reinig ik een Vorsa premium donzen dekbed?',
      answer:
        'Kleine maten (tot 135x200 cm) kunt u thuis wassen op 40 graden met een specifiek down-wasmiddel in een trommelwasmachine zonder agitator. Grotere maten adviseert u naar een professionele textielverzorger te brengen voor de beste resultaten en behoud van de vulkwaliteit.',
    },
  ],
}

// ---------------------------------------------------------------------------
// Product FAQs — 5 generic + slug-specific per featured product
// ---------------------------------------------------------------------------
const genericProductFaqs: FaqItem[] = [
  {
    question: 'Kan ik dit product retourneren als het niet bevalt?',
    answer:
      'Ja, je kunt elk product binnen 30 dagen na ontvangst retourneren, mits ongebruikt en in de originele verpakking. Stuur een e-mail naar info@rupose.nl om een retour aan te melden.',
  },
  {
    question: 'Is dit product OEKO-TEX gecertificeerd?',
    answer:
      'De meeste producten in ons assortiment zijn OEKO-TEX Standard 100 gecertificeerd. Dit houdt in dat ze zijn getest op schadelijke stoffen en veilig zijn voor elk type huid. De exacte certificering staat vermeld op de productpagina.',
  },
  {
    question: 'Hoe snel wordt dit product geleverd?',
    answer:
      'Bestellingen voor 15:00 uur op werkdagen worden dezelfde dag verzonden. Je ontvangt een Track en Trace-link zodra je pakket onderweg is. De verwachte levertijd is 2 tot 3 werkdagen.',
  },
  {
    question: 'Kan ik ook telefonisch bestellen of advies krijgen?',
    answer:
      'Ja, je kunt ons bereiken op 050-123 45 67 op werkdagen tussen 09:00 en 17:00 uur. Onze slaapspecialisten helpen je graag persoonlijk met productadvies en het samenstellen van je ideale slaapomgeving.',
  },
  {
    question: 'Is er een garantie op dit product?',
    answer:
      'Alle producten vallen onder de wettelijke garantie van 2 jaar. Bij fabricagefouten of materiaaldefecten nemen we het product kosteloos retour of vervangen we het. Normale slijtage valt buiten de garantie.',
  },
]

const slugSpecificFaqs: Record<string, FaqItem[]> = {
  'bella-donna-jersey-hoeslaken': [
    {
      question: 'Is het Bella Donna Jersey hoeslaken geschikt voor mijn boxspring?',
      answer:
        'Ja. Dankzij de rekbare jersey stof en de beschikbare instophoogtes tot 45 cm past het Bella Donna Jersey hoeslaken op vrijwel elke boxspring of combi-matras. Meet de totale hoogte van je matras inclusief topper voor de juiste maat.',
    },
  ],
  'texeler-wollen-kussen': [
    {
      question: 'Is het Texeler wollen kussen geschikt bij een allergeen?',
      answer:
        'Wol is van nature hypoallergeen en antibacterieel. Het Texeler kussen is een uitstekende keuze voor mensen die gevoelig zijn voor huisstofmijten of synthetische vezels. Wol laat geen vochtrijke omgeving ontstaan waar mijten gedijen.',
    },
  ],
  'hefel-pure-cotton-dekbed': [
    {
      question: 'Is het Hefel Pure Cotton dekbed geschikt voor warme slapers?',
      answer:
        'Het Hefel Pure Cotton dekbed in warmteklasse 2 is ideaal voor warme slapers of gebruik in de zomer. De katoenen tijk ademt uitstekend en de lichte donsvulling reguleert de temperatuur zonder warmtestuwing.',
    },
  ],
  'plateau-molton-tencel': [
    {
      question: 'Wordt de Plateau Molton Tencel zachter na wassen?',
      answer:
        'Ja. De TENCEL-katoen molton wordt doorgaans zachter na meerdere wasbeurten. Was op 60 graden en droog op een lage temperatuur of hang hem buiten. Na enkele wasbeurten bereikt de stof zijn optimale zachtheid.',
    },
  ],
  'vorsa-donzen-dekbed': [
    {
      question: 'Wat is het fill power van het Vorsa donzen dekbed?',
      answer:
        'Het Vorsa premium dekbed heeft een fill power van meer dan 700 cuin. Dit betekent dat de dons een uitstekend isolatievermogen heeft bij een minimaal gewicht. Hoe hoger de fill power, hoe lichter en warmer het dekbed bij gelijk volume.',
    },
  ],
  'molton-matrasbeschermer': [
    {
      question: 'Maakt de molton matrasbeschermer geluid bij bewegen?',
      answer:
        'Nee. Onze molton matrasbeschermers zijn vervaardigd van een zachte geweven katoensoort die geluidsarm is en prettig aanvoelt. U hoort en voelt de beschermer niet, terwijl uw matras wel optimaal beschermd is.',
    },
  ],
}

export const productFaqs: Record<string, FaqItem[]> = Object.fromEntries(
  Object.keys(slugSpecificFaqs).map((slug) => [
    slug,
    [...(slugSpecificFaqs[slug] ?? []), ...genericProductFaqs],
  ])
)

export function getProductFaqs(slug: string): FaqItem[] {
  return productFaqs[slug] ?? genericProductFaqs
}
