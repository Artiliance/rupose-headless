'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Search, Check, X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  bellaDonnaColors,
  COLOR_FAMILIES,
  type BellaDonnaColor,
  type ColorFamily,
} from '@/lib/colors'

interface ColorPickerModalProps {
  open: boolean
  onClose: () => void
  selected: BellaDonnaColor | null
  onConfirm: (color: BellaDonnaColor) => void
  /** Palette to show. Defaults to the Bella Donna palette. */
  colors?: BellaDonnaColor[]
}

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(t)
  }, [value, delay])
  return debounced
}

export function ColorPickerModal({
  open,
  onClose,
  selected,
  onConfirm,
  colors = bellaDonnaColors,
}: ColorPickerModalProps) {
  const [query, setQuery] = useState('')
  const [activeFamily, setActiveFamily] = useState<ColorFamily>('Alle')
  const hasFamilies = colors.some((c) => c.family)
  const [pendingColor, setPendingColor] = useState<BellaDonnaColor | null>(
    selected
  )
  const searchRef = useRef<HTMLInputElement>(null)
  const debouncedQuery = useDebounce(query, 180)

  // Autofocus search on open
  useEffect(() => {
    if (open) {
      setPendingColor(selected)
      setTimeout(() => searchRef.current?.focus(), 50)
    }
  }, [open, selected])

  const filtered = colors.filter((c) => {
    const matchesFamily =
      activeFamily === 'Alle' || c.family === activeFamily
    const matchesQuery =
      !debouncedQuery ||
      c.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    return matchesFamily && matchesQuery
  })

  const handleConfirm = useCallback(() => {
    if (pendingColor) {
      onConfirm(pendingColor)
    }
    onClose()
  }, [pendingColor, onConfirm, onClose])

  // Keyboard nav through grid
  const gridRef = useRef<HTMLDivElement>(null)
  function handleGridKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const tiles = Array.from(
      gridRef.current?.querySelectorAll<HTMLButtonElement>('[data-swatch]') ?? []
    )
    const idx = tiles.findIndex((t) => t === document.activeElement)
    if (idx === -1) return
    const cols = window.innerWidth >= 640 ? 8 : 5
    let next = -1
    if (e.key === 'ArrowRight') next = idx + 1
    else if (e.key === 'ArrowLeft') next = idx - 1
    else if (e.key === 'ArrowDown') next = idx + cols
    else if (e.key === 'ArrowUp') next = idx - cols
    if (next >= 0 && next < tiles.length) {
      e.preventDefault()
      tiles[next].focus()
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[92vh] flex flex-col p-0 gap-0 rounded-sm overflow-hidden">
        {/* ── Header ── */}
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border flex-shrink-0">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="font-serif text-xl font-light text-brown">
                Kies je kleur
              </DialogTitle>
              <p className="font-sans text-sm text-muted-foreground mt-0.5">
                {colors.length} kleuren beschikbaar
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mt-4">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
              aria-hidden="true"
            />
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek op naam..."
              aria-label="Zoek kleur op naam"
              className="w-full font-sans text-sm bg-secondary border border-border rounded-sm pl-9 pr-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Zoekopdracht wissen"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Family filter chips — only when the palette carries families */}
          {hasFamilies && (
          <div
            className="flex gap-2 overflow-x-auto pb-1 mt-3 scrollbar-hide"
            role="group"
            aria-label="Filter op kleurgroep"
          >
            {COLOR_FAMILIES.map((family) => (
              <button
                key={family}
                onClick={() => setActiveFamily(family)}
                aria-pressed={activeFamily === family}
                className={cn(
                  'flex-shrink-0 font-sans text-xs px-3 py-1.5 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 capitalize',
                  activeFamily === family
                    ? 'bg-brown text-primary-foreground border-brown'
                    : 'bg-background border-border text-muted-foreground hover:border-brown/40 hover:text-foreground'
                )}
              >
                {family}
              </button>
            ))}
          </div>
          )}
        </DialogHeader>

        {/* ── Grid ── */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {filtered.length === 0 ? (
            <p className="font-sans text-sm text-muted-foreground text-center py-12">
              Geen kleuren gevonden voor &ldquo;{debouncedQuery}&rdquo;
            </p>
          ) : (
            <div
              ref={gridRef}
              onKeyDown={handleGridKeyDown}
              className="grid grid-cols-5 sm:grid-cols-8 gap-3"
              role="group"
              aria-label="Kleurpalette"
            >
              {filtered.map((color) => {
                const isSelected = pendingColor?.code === color.code
                return (
                  <button
                    key={color.code}
                    data-swatch
                    onClick={() => setPendingColor(color)}
                    aria-label={`${color.name} (${color.family})`}
                    aria-pressed={isSelected}
                    title={color.name}
                    className={cn(
                      'group flex flex-col items-center gap-1.5 p-1 rounded-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
                      isSelected ? 'bg-secondary' : 'hover:bg-secondary/60'
                    )}
                  >
                    {/* Swatch image */}
                    <div
                      className={cn(
                        'relative w-12 h-12 rounded-sm overflow-hidden border-2 transition-all duration-150 motion-safe:group-hover:scale-105',
                        isSelected
                          ? 'border-brown ring-2 ring-brown/30'
                          : 'border-border group-hover:border-brown/40'
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
                          sizes="48px"
                        />
                      )}
                      {/* Selected checkmark overlay */}
                      {isSelected && (
                        <div
                          className="absolute inset-0 bg-brown/30 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <Check className="w-4 h-4 text-white drop-shadow" />
                        </div>
                      )}
                    </div>
                    {/* Name */}
                    <span
                      className={cn(
                        'font-sans text-[10px] leading-tight text-center truncate w-full',
                        isSelected
                          ? 'text-brown font-medium'
                          : 'text-muted-foreground group-hover:text-foreground'
                      )}
                    >
                      {color.name}
                    </span>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div className="border-t border-border px-6 py-4 flex items-center justify-between gap-4 flex-shrink-0 bg-background">
          {/* Selected preview */}
          <div className="flex items-center gap-3 min-w-0">
            {pendingColor ? (
              <>
                <div className="relative w-10 h-10 rounded-sm border border-border overflow-hidden flex-shrink-0">
                  <Image
                    src={pendingColor.image}
                    alt={pendingColor.name}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="40px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-sans text-sm font-medium text-brown capitalize truncate">
                    {pendingColor.name}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground capitalize">
                    {pendingColor.family}
                  </p>
                </div>
              </>
            ) : (
              <p className="font-sans text-sm text-muted-foreground">
                Nog geen kleur geselecteerd
              </p>
            )}
          </div>

          <div className="flex gap-3 flex-shrink-0">
            <Button
              variant="outline"
              onClick={onClose}
              className="font-sans rounded-sm border-border text-brown-muted hover:text-brown"
            >
              Annuleer
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={!pendingColor}
              className="font-sans rounded-sm bg-copper hover:bg-copper/90 text-primary-foreground"
            >
              Bevestig keuze
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
