"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductAttribute } from "@/lib/products";

// Mapping from Dutch colour name to a CSS colour for swatches
const COLOUR_MAP: Record<string, string> = {
  Wit: "#FFFFFF",
  Ecru: "#F5F0E8",
  Ivoor: "#FFFFF0",
  Champagne: "#F7E7CE",
  Zand: "#DEB887",
  Linen: "#FAF0E6",
  Taupe: "#B8A898",
  Grijs: "#9E9E9E",
  Zilvergrijs: "#B2BEB5",
  Antraciet: "#3B3B3B",
  Zwart: "#1A1A1A",
  Roze: "#FFB6C1",
  "Oud roze": "#C08080",
  Poederroze: "#FADADD",
  Blush: "#F4A7A0",
  Koraal: "#FF7F6E",
  Terracotta: "#C06040",
  Rood: "#CC0000",
  Bordeaux: "#6E0A1E",
  Wijnrood: "#8B1A2B",
  Oranje: "#FF8C00",
  Mosterd: "#FFBE00",
  Okergeel: "#D4A017",
  Geel: "#FFD700",
  Saliegroen: "#7B9E7A",
  Mintgroen: "#AAD8B0",
  Olijfgroen: "#6B7A3E",
  Bosgroen: "#2D5A27",
  Lichtblauw: "#ADD8E6",
  Ijsblauw: "#99C5C4",
  Blauw: "#2060CC",
  Koningsblauw: "#4169E1",
  Navy: "#1A2B6B",
  Indigo: "#4B0082",
  Petrol: "#005F6B",
  Turquoise: "#30D5C8",
  Aubergine: "#614051",
  Lavendel: "#C9A9D0",
  Lila: "#C8A2C8",
  Paars: "#800080",
};

interface VariantSelectorProps {
  attributes: ProductAttribute[];
  onSelectionChange?: (selections: Record<string, string>) => void;
}

const INITIAL_VISIBLE_COLOURS = 8;

export function VariantSelector({
  attributes,
  onSelectionChange,
}: VariantSelectorProps) {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [expandedColours, setExpandedColours] = useState<Record<string, boolean>>({});

  function handleSelect(attributeName: string, value: string) {
    const next = { ...selections, [attributeName]: value };
    setSelections(next);
    onSelectionChange?.(next);
  }

  return (
    <div className="flex flex-col gap-6">
      {attributes.map((attr) => {
        const selected = selections[attr.name];

        if (attr.type === "color") {
          const isExpanded = expandedColours[attr.name] ?? false;
          const visible = isExpanded
            ? attr.options
            : attr.options.slice(0, INITIAL_VISIBLE_COLOURS);
          const hasMore = attr.options.length > INITIAL_VISIBLE_COLOURS;

          return (
            <div key={attr.name}>
              <div className="flex items-baseline justify-between mb-2.5">
                <span className="font-sans text-xs font-medium text-brown uppercase tracking-wider">
                  {attr.name}
                </span>
                {selected && (
                  <span className="font-sans text-xs text-brown-muted">
                    {selected}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {visible.map((option) => {
                  const cssColor = COLOUR_MAP[option] ?? "#DDD";
                  const isWhiteish =
                    cssColor === "#FFFFFF" ||
                    cssColor === "#FFFFF0" ||
                    cssColor === "#FAF0E6" ||
                    cssColor === "#F5F0E8";
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(attr.name, option)}
                      title={option}
                      aria-label={option}
                      aria-pressed={selected === option}
                      className={cn(
                        "w-7 h-7 rounded-full border-2 transition-all duration-150 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                        selected === option
                          ? "border-brown ring-2 ring-brown/30 ring-offset-1 scale-110"
                          : isWhiteish
                          ? "border-border hover:border-brown-muted"
                          : "border-transparent hover:border-brown/20"
                      )}
                      style={{ backgroundColor: cssColor }}
                    />
                  );
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
                  className="mt-2.5 inline-flex items-center gap-1 font-sans text-xs text-brown-muted hover:text-brown transition-colors"
                >
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      isExpanded && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                  {isExpanded
                    ? "Minder kleuren"
                    : `+${attr.options.length - INITIAL_VISIBLE_COLOURS} kleuren meer`}
                </button>
              )}
            </div>
          );
        }

        if (attr.type === "size") {
          return (
            <div key={attr.name}>
              <div className="flex items-baseline justify-between mb-2.5">
                <span className="font-sans text-xs font-medium text-brown uppercase tracking-wider">
                  {attr.name}
                </span>
                {selected && (
                  <span className="font-sans text-xs text-brown-muted">
                    {selected} cm
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {attr.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(attr.name, option)}
                    aria-pressed={selected === option}
                    className={cn(
                      "px-3 py-1.5 font-sans text-xs border rounded-sm transition-all duration-150",
                      selected === option
                        ? "border-sage bg-sage-muted text-brown font-medium"
                        : "border-border text-brown-muted hover:border-sage/60 hover:text-brown"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          );
        }

        // select / dropdown
        return (
          <div key={attr.name}>
            <label
              htmlFor={`attr-${attr.name}`}
              className="block font-sans text-xs font-medium text-brown uppercase tracking-wider mb-2.5"
            >
              {attr.name}
            </label>
            <div className="relative">
              <select
                id={`attr-${attr.name}`}
                value={selected ?? ""}
                onChange={(e) => handleSelect(attr.name, e.target.value)}
                className="w-full appearance-none font-sans text-sm text-brown bg-background border border-border rounded-sm px-3 py-2.5 pr-9 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors cursor-pointer"
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
        );
      })}
    </div>
  );
}
