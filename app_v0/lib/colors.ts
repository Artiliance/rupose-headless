export type BellaDonnaColor = {
  code: string
  name: string
  family: string
  image: string
}

export const COLOR_FAMILIES = [
  'Alle',
  'wit',
  'grijs',
  'zwart',
  'beige/bruin',
  'blauw',
  'groen',
  'rood/roze',
  'paars',
] as const

export type ColorFamily = (typeof COLOR_FAMILIES)[number]

const CDN = 'https://cdn.jsdelivr.net/gh/Artiliance/rupose-headless@main/public/images/all'

export const bellaDonnaColors: BellaDonnaColor[] = [
  { code: '0030', name: 'bordeaux',       family: 'rood/roze',   image: `${CDN}/Farbe-0030_bordeaux.jpg` },
  { code: '0033', name: 'cabernet',       family: 'rood/roze',   image: `${CDN}/Farbe-0033_cabernet.jpg` },
  { code: '0040', name: 'goudgeel',       family: 'beige/bruin', image: `${CDN}/Farbe-0040_goldgelb.jpg` },
  { code: '0091', name: 'lichtgeel',      family: 'beige/bruin', image: `${CDN}/Farbe-0091_hellgelb.jpg` },
  { code: '0101', name: 'zwart',          family: 'zwart',       image: `${CDN}/Farbe-0101_schwarz.jpg` },
  { code: '0110', name: 'poeder',         family: 'beige/bruin', image: `${CDN}/Farbe-0110_puder.jpg` },
  { code: '0111', name: 'naturel',        family: 'wit',         image: `${CDN}/Farbe-0111_natur.jpg` },
  { code: '0114', name: 'wolwit',         family: 'wit',         image: `${CDN}/Farbe-0114_wollweiss.jpg` },
  { code: '0115', name: 'champignon',     family: 'wit',         image: `${CDN}/Farbe-0115_champignon.jpg` },
  { code: '0119', name: 'linnen',         family: 'wit',         image: `${CDN}/Farbe-0119_leinen.jpg` },
  { code: '0122', name: 'muskaat',        family: 'beige/bruin', image: `${CDN}/Farbe-0122_muskat.jpg` },
  { code: '0125', name: 'platina',        family: 'wit',         image: `${CDN}/Farbe-0125_platin.jpg` },
  { code: '0126', name: 'truffel',        family: 'beige/bruin', image: `${CDN}/Farbe-0126_trueffel.jpg` },
  { code: '0180', name: 'azuur',          family: 'blauw',       image: `${CDN}/Farbe-0180_azur.jpg` },
  { code: '0183', name: 'koningsblauw',   family: 'blauw',       image: `${CDN}/Farbe-0183_royalblau.jpg` },
  { code: '0185', name: 'rood',           family: 'rood/roze',   image: `${CDN}/Farbe-0185_rot.jpg` },
  { code: '0188', name: 'karmijnrood',    family: 'rood/roze',   image: `${CDN}/Farbe-0188_carminrot.jpg` },
  { code: '0192', name: 'magenta',        family: 'rood/roze',   image: `${CDN}/Farbe-0192_magenta.jpg` },
  { code: '0209', name: 'blauwgrijs',     family: 'grijs',       image: `${CDN}/Farbe-0209_blaugrau.jpg` },
  { code: '0211', name: 'jeansblauw',     family: 'blauw',       image: `${CDN}/Farbe-0211_jeansblau.jpg` },
  { code: '0213', name: 'antraciet',      family: 'grijs',       image: `${CDN}/Farbe-0213_anthrazit.jpg` },
  { code: '0215', name: 'lichtantraciet', family: 'grijs',       image: `${CDN}/Farbe-0215_hellanthrazit.jpg` },
  { code: '0219', name: 'cement',         family: 'grijs',       image: `${CDN}/Farbe-0219_zement.jpg` },
  { code: '0220', name: 'grafiet',        family: 'grijs',       image: `${CDN}/Farbe-0220_graphit.jpg` },
  { code: '0302', name: 'arctisch',       family: 'blauw',       image: `${CDN}/Farbe-0302_arktis.jpg` },
  { code: '0507', name: 'marine',         family: 'blauw',       image: `${CDN}/Farbe-0507_marine.jpg` },
  { code: '0520', name: 'zilver',         family: 'grijs',       image: `${CDN}/Farbe-0520_silber.jpg` },
  { code: '0522', name: 'lichtblauw',     family: 'blauw',       image: `${CDN}/Farbe-0522_hellblau.jpg` },
  { code: '0523', name: 'hemelsblauw',    family: 'blauw',       image: `${CDN}/Farbe-0523-himmelblau.jpg` },
  { code: '0524', name: 'mint',           family: 'groen',       image: `${CDN}/Farbe-0524_mint.jpg` },
  { code: '0525', name: 'lila',           family: 'paars',       image: `${CDN}/Farbe-0525_flieder-thumb.jpg` },
  { code: '0528', name: 'amethist',       family: 'paars',       image: `${CDN}/Farbe-0528_amethyst.jpg` },
  { code: '0531', name: 'limoen',         family: 'groen',       image: `${CDN}/Farbe-0531_limette.jpg` },
  { code: '0532', name: 'pistache',       family: 'groen',       image: `${CDN}/Farbe-0532_pistazie.jpg` },
  { code: '0533', name: 'olijf',          family: 'groen',       image: `${CDN}/Farbe-0533_olive.jpg` },
  { code: '0537', name: 'saffraan',       family: 'beige/bruin', image: `${CDN}/Farbe-0537_safran.jpg` },
  { code: '0540', name: 'fuchsia',        family: 'rood/roze',   image: `${CDN}/Farbe-0540_fuchsia.jpg` },
  { code: '0543', name: 'braam',          family: 'rood/roze',   image: `${CDN}/Farbe-0543_brombeer.jpg` },
  { code: '0545', name: 'petrol',         family: 'blauw',       image: `${CDN}/Farbe-0545_petrol.jpg` },
  { code: '0565', name: 'oudroze',        family: 'rood/roze',   image: `${CDN}/Farbe-0565_altrose.jpg` },
  { code: '0566', name: 'roze',           family: 'rood/roze',   image: `${CDN}/Farbe-0566_rose.jpg` },
  { code: '0629', name: 'pastelgroen',    family: 'groen',       image: `${CDN}/Farbe-0629-pastelgruen.jpg` },
  { code: '0639', name: 'aquamarijn',     family: 'blauw',       image: `${CDN}/Farbe-0639_aquamarin.jpg` },
  { code: '0701', name: 'grijs',          family: 'grijs',       image: `${CDN}/Farbe-0701_grau.jpg` },
  { code: '0703', name: 'lichtgrijs',     family: 'grijs',       image: `${CDN}/Farbe-0703_hellgrau.jpg` },
  { code: '0704', name: 'mango',          family: 'beige/bruin', image: `${CDN}/Farbe-0704_mango.jpg` },
  { code: '0705', name: 'jaffa',          family: 'beige/bruin', image: `${CDN}/Farbe-0705_jaffa.jpg` },
  { code: '0710', name: 'parelgrijs',     family: 'grijs',       image: `${CDN}/Farbe-0710_perlgrau.jpg` },
  { code: '1000', name: 'wit',            family: 'wit',         image: `${CDN}/Farbe-1000_weiss.jpg` },
]

/** Popular quick-pick codes shown inline before "Meer kleuren" */
export const POPULAR_COLOR_CODES = [
  '1000', // wit
  '0114', // wolwit
  '0213', // antraciet
  '0101', // zwart
  '0566', // roze
  '0180', // azuur
  '0533', // olijf
  '0030', // bordeaux
]
