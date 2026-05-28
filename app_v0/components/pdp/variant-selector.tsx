'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ColorPickerModal } from '@/components/pdp/color-picker-modal'
import {
  bellaDonnaColors,
  POPULAR_COLOR_CODES,
  type BellaDonnaColor,
} from '@/lib/colors'
import { toastSuccess } from '@/lib/toast'
import type { ProductAttribute, ColourSwatch } from '@/lib/products'

// ---------- threshold above which the modal is shown ----------
const MODAL_THRESHOLD = 8

// ---------- CSS fallback colours for attribute-based (no image) swatches ----------
const COLOUR_MAP: Record<string, string> = {
  Wit: '#FFFFFF', Ecru: '#F5F0E8', Ivoor: '#FFFFF0', Champagne: '#F7E7CE',
  Zand: '#DEB887', Linen: '#FAF0E6', Taupe: '#B8A898', Grijs: '#9E9E9E',
  Zilvergrijs: '#B2BEB5', Antraciet: '#3B3B3B', Zwart: '#1A1A1A',
  Roze: '#FFB6C1', 'Oud roze': '#C08080', Poederroze: '#FADADD',
  Blush: '#F4A7A0', Koraal: '#FF7F6E', Terracotta: '#C06040',
  Rood: '#CC0000', Bordeaux: '#6E0A1E', Wijnrood: '#8B1A2B',
  Oranje: '#FF8C00', Mosterd: '#FFBE00', Okergeel: '#D4A017',
  Geel: '#FFD700', Saliegroen: '#7B9E7A', Mintgroen: '#AAD8B0',
  Olijfgroen: '#6B7A3E', Bosgroen: '#2D5A27', Lichtblauw: '#ADD8E6',
  Ijsblauw: '#99C5C4', Blauw: '#2060CC', Koningsblauw: '#4169E1',
  Navy: '#1A2B6B', Indigo: '#4B0082', Petrol: '#005F6B',
  Turquoise: '#30D5C8', Aubergine: '#614051', Lavendel: '#C9A9D0',
  Lila: '#C8A2C8', Paars: '#800080',
}

// ---------- Props ----------

interface VariantSelectorProps {
  // Legacy: attribute-based (non-Bella Donna products)
  attributes?: ProductAttribute[]
  onSelectionChange?: (selections: Record<string, string>) => void
  // Bella Donna: colour/size arrays from lib/products
  colours?: ColourSwatch[]
  sizes?: { label: string; price: number; sku: string }[]
  onColorImageChange?: (imageSrc: string) => void
  // Whether this product uses the full Bella Donna 49-colour palette
  useBellaDonnaColors?: boolean
}

// ─────────────────────────────────────────────────────────────────
// Sub-component: image-based colour swatch (Bella Donna style)
// ─────────────────────────────────────────────────────────────────
interface BellaDonnaColorSelectorProps {
  selected: BellaDonnaColor | null
  onSelect: (c: BellaDonnaColor) => void
  onOpenModal: () => void
}

function BellaDonnaColorSelector({
  selected,
  onSelect,
  onOpenModal,
}: BellaDonnaColorSelectorProps) {
  const popular = POPULAR_COLOR_CODES.map(
    (code) => bellaDonnaColors.find((c) => c.code === code)!
  ).filter(Boolean)

  return (
    <div>
      {/* Label row */}
      <div className="flex items-baseline justify-between mb-3">
        <span className="font-sans text-base font-medium text-brown uppercase tracking-wider">
          Kleur
        </span>
        {selected && (
          <span className="font-sans text-sm text-brown-muted capitalize">
            {selected.name}
          </span>
        )}
      </div>

      {/* Quick-pick popular swatches */}
      <div className="flex flex-wrap gap-2">
        {popular.map((color) => {
          const isSelected = selected?.code === color.code
          return (
            <button
              key={color.code}
              onClick={() => onSelect(color)}
              aria-label={color.name}
              aria-pressed={isSelected}
              title={color.name}
              className={cn(
                'relative w-11 h-11 rounded-sm overflow-hidden border-2 transition-all duration-150 motion-safe:hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                isSelected
                  ? 'border-brown ring-2 ring-brown/30 ring-offset-1 motion-safe:scale-110'
                  : 'border-border hover:border-brown/40'
              )}
            >
              <Image
                src={color.image}
                alt={color.name}
                fill
                className="object-cover object-center"
                unoptimized
                sizes="44px"
              />
            </button>
          )
        })}

        {/* "Meer kleuren" modal trigger */}
        <button
          onClick={onOpenModal}
          aria-label="Alle 49 kleuren bekijken"
          className="h-11 px-3 flex items-center gap-1.5 font-sans text-sm text-brown-muted border-2 border-dashed border-border rounded-sm hover:border-brown/40 hover:text-brown transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Alle kleuren
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>

      {/* CTA button: opens modal */}
      <button
        onClick={onOpenModal}
        className="mt-3 inline-flex items-center gap-2 font-sans text-sm text-copper hover:text-copper/80 transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Kies je kleur ({bellaDonnaColors.length} beschikbaar)
        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────────────────────────

export function VariantSelector({
  attributes,
  onSelectionChange,
  colours,
  sizes,
  onColorImageChange,
  useBellaDonnaColors = false,
}: VariantSelectorProps) {
  // ---------- State: attribute-based (legacy) ----------
  const [selections, setSelections] = useState<Record<string, string>>({})
  const [expandedColours, setExpandedColours] = useState<Record<string, boolean>>({})

  // ---------- State: Bella Donna ----------
  const [bdSelected, setBdSelected] = useState<BellaDonnaColor | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  function handleAttrSelect(attributeName: string, value: string) {
    const next = { ...selections, [attributeName]: value }
    setSelections(next)
    onSelectionChange?.(next)
  }

  function handleBdConfirm(color: BellaDonnaColor) {
    setBdSelected(color)
    if (!color.image.startsWith('#')) onColorImageChange?.(color.image)
    toastSuccess(`Kleur gewijzigd naar ${color.name}`)
  }

  function handleBdQuickSelect(color: BellaDonnaColor) {
    setBdSelected(color)
    if (!color.image.startsWith('#')) onColorImageChange?.(color.image)
    toastSuccess(`Kleur gewijzigd naar ${color.name}`)
  }

  // ── Bella Donna colours path ──────────────────────────────────
  if (useBellaDonnaColors) {
    return (
      <div className="flex flex-col gap-6">
        <BellaDonnaColorSelector
          selected={bdSelected}
          onSelect={handleBdQuickSelect}
          onOpenModal={() => setModalOpen(true)}
        />

        {/* Size picker */}
        {sizes && sizes.length > 0 && (
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <span className="font-sans text-base font-medium text-brown uppercase tracking-wider">
                Maat
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => {
                const isSelected = selections['Maat'] === size.label
                return (
                  <button
                    key={size.sku}
                    onClick={() => handleAttrSelect('Maat', size.label)}
                    aria-pressed={isSelected}
                    className={cn(
                      'min-w-[44px] min-h-[44px] px-4 font-sans text-base border rounded-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                      isSelected
                        ? 'border-sage bg-sage-muted text-brown font-medium'
                        : 'border-border text-brown-muted hover:border-sage/60 hover:text-brown'
                    )}
                  >
                    {size.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <ColorPickerModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          selected={bdSelected}
          onConfirm={handleBdConfirm}
        />
      </div>
    )
  }

  // ── ColourSwatch path (<=8 colours, inline) ───────────────────
  if (colours && colours.length > 0) {
    const isModal = colours.length > MODAL_THRESHOLD
    // Map ColourSwatch to BellaDonnaColor shape for the modal
    const asBdColors: BellaDonnaColor[] = colours.map((c) => ({
      code: c.name,
      name: c.label,
      family: '',
      image: c.thumb,
    }))

    return (
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-baseline justify-between mb-3">
            <span className="font-sans text-base font-medium text-brown uppercase tracking-wider">
              Kleur
            </span>
            {bdSelected && (
              <span className="font-sans text-sm text-brown-muted capitalize">
                {bdSelected.name}
              </span>
            )}
          </div>

          {!isModal ? (
            <div className="flex flex-wrap gap-2">
              {asBdColors.map((color) => {
                const isSelected = bdSelected?.code === color.code
                return (
                  <button
                    key={color.code}
                    onClick={() => handleBdQuickSelect(color)}
                    aria-label={color.name}
                    aria-pressed={isSelected}
                    title={color.name}
                    className={cn(
                      'relative w-11 h-11 rounded-sm overflow-hidden border-2 transition-all duration-150 motion-safe:hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                      isSelected
                        ? 'border-brown ring-2 ring-brown/30 ring-offset-1 motion-safe:scale-110'
                        : 'border-border hover:border-brown/40'
                    )}
                  >
                    {color.image.startsWith('#') ? (
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: color.image }}
                      />
                    ) : (
                      <Image
                        src={color.image}
                        alt={color.name}
                        fill
                        className="object-cover object-center"
                        unoptimized
                        sizes="44px"
                      />
                    )}
                  </button>
                )
              })}
            </div>
          ) : (
            <>
              <div className="flex flex-wrap gap-2">
                {asBdColors.slice(0, 8).map((color) => {
                  const isSelected = bdSelected?.code === color.code
                  return (
                    <button
                      key={color.code}
                      onClick={() => handleBdQuickSelect(color)}
                      aria-label={color.name}
                      aria-pressed={isSelected}
                      title={color.name}
                      className={cn(
                        'relative w-11 h-11 rounded-sm overflow-hidden border-2 transition-all duration-150 motion-safe:hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                        isSelected
                          ? 'border-brown ring-2 ring-brown/30 ring-offset-1 motion-safe:scale-110'
                          : 'border-border hover:border-brown/40'
                      )}
                    >
                      {color.image.startsWith('#') ? (
                        <div
                          className="absolute inset-0"
                          style={{ backgroundColor: color.image }}
                        />
                      ) : (
                        <Image
                          src={color.image}
                          alt={color.name}
                          fill
                          className="object-cover object-center"
                          unoptimized
                          sizes="44px"
                        />
                      )}
                    </button>
                  )
                })}
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="mt-3 inline-flex items-center gap-2 font-sans text-sm text-copper hover:text-copper/80 transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Meer kleuren ({colours.length} beschikbaar)
                <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
              <ColorPickerModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                selected={bdSelected}
                colors={asBdColors}
                onConfirm={(c) => {
                  setBdSelected(c)
                  if (!c.image.startsWith('#')) onColorImageChange?.(c.image)
                  toastSuccess(`Kleur gewijzigd naar ${c.name}`)
                  setModalOpen(false)
                }}
              />
            </>
          )}
        </div>

        {sizes && sizes.length > 0 && (
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <span className="font-sans text-base font-medium text-brown uppercase tracking-wider">
                Maat
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => {
                const isSelected = selections['Maat'] === size.label
                return (
                  <button
                    key={size.sku}
                    onClick={() => handleAttrSelect('Maat', size.label)}
                    aria-pressed={isSelected}
                    className={cn(
                      'min-w-[44px] min-h-[44px] px-4 font-sans text-base border rounded-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                      isSelected
                        ? 'border-sage bg-sage-muted text-brown font-medium'
                        : 'border-border text-brown-muted hover:border-sage/60 hover:text-brown'
                    )}
                  >
                    {size.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }

  // ── Legacy: attribute-based path ─────────────────────────────
  if (!attributes || attributes.length === 0) return null

  return (
    <div className="flex flex-col gap-6">
      {attributes.map((attr) => {
        const selected = selections[attr.name]

        if (attr.type === 'color') {
          const isExpanded = expandedColours[attr.name] ?? false
          const visible = isExpanded
            ? attr.options
            : attr.options.slice(0, MODAL_THRESHOLD)
          const hasMore = attr.options.length > MODAL_THRESHOLD

          return (
            <div key={attr.name}>
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-sans text-base font-medium text-brown uppercase tracking-wider">
                  {attr.name}
                </span>
                {selected && (
                  <span className="font-sans text-sm text-brown-muted">
                    {selected}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {visible.map((option) => {
                  const cssColor = COLOUR_MAP[option] ?? '#DDD'
                  const isWhiteish = ['#FFFFFF', '#FFFFF0', '#FAF0E6', '#F5F0E8'].includes(cssColor)
                  return (
                    <button
                      key={option}
                      onClick={() => handleAttrSelect(attr.name, option)}
                      title={option}
                      aria-label={option}
                      aria-pressed={selected === option}
                      className={cn(
                        'w-11 h-11 rounded-full border-2 transition-all duration-150 motion-safe:hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                        selected === option
                          ? 'border-brown ring-2 ring-brown/30 ring-offset-1 motion-safe:scale-110'
                          : isWhiteish
                          ? 'border-border hover:border-brown-muted'
                          : 'border-transparent hover:border-brown/20'
                      )}
                      style={{ backgroundColor: cssColor }}
                    />
                  )
                })}
              </div>
              {hasMore && (
                <button
                  onClick={() =>
                    setExpandedColours((prev) => ({
                      ...prev,
                      [attr.name]: !isExpanded,
                    }))
                  }
                  className="mt-3 inline-flex items-center gap-1 font-sans text-sm text-brown-muted hover:text-brown transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      isExpanded && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                  {isExpanded
                    ? 'Minder kleuren'
                    : `+${attr.options.length - MODAL_THRESHOLD} kleuren meer`}
                </button>
              )}
            </div>
          )
        }

        if (attr.type === 'size') {
          return (
            <div key={attr.name}>
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-sans text-base font-medium text-brown uppercase tracking-wider">
                  {attr.name}
                </span>
                {selected && (
                  <span className="font-sans text-sm text-brown-muted">
                    {selected} cm
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {attr.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAttrSelect(attr.name, option)}
                    aria-pressed={selected === option}
                    className={cn(
                      'min-w-[44px] min-h-[44px] px-4 font-sans text-base border rounded-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                      selected === option
                        ? 'border-sage bg-sage-muted text-brown font-medium'
                        : 'border-border text-brown-muted hover:border-sage/60 hover:text-brown'
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
        }

        return (
          <div key={attr.name}>
            <label
              htmlFor={`attr-${attr.name}`}
              className="block font-sans text-base font-medium text-brown uppercase tracking-wider mb-3"
            >
              {attr.name}
            </label>
            <div className="relative">
              <select
                id={`attr-${attr.name}`}
                value={selected ?? ''}
                onChange={(e) => handleAttrSelect(attr.name, e.target.value)}
                className="w-full appearance-none font-sans text-base text-brown bg-background border border-border rounded-sm px-4 py-3 pr-10 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-sage transition-colors cursor-pointer"
              >
                <option value="" disabled>
                  Kies {attr.name.toLowerCase()}...
                </option>
                {attr.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-muted pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
