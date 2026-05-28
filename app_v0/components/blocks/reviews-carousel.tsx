'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Review } from '@/lib/reviews'

interface Props {
  title?: string
  eyebrow?: string
  reviews: Review[]
  bg?: 'default' | 'muted'
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} van 5 sterren`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={cn(
            'w-4 h-4 flex-none',
            s <= rating ? 'fill-amber-400 text-amber-400' : 'fill-transparent text-border'
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function ReviewsCarousel({
  title = 'Wat onze klanten zeggen',
  eyebrow = 'Ervaringen',
  reviews,
  bg = 'muted',
}: Props) {
  const railRef = useRef<HTMLDivElement>(null)

  function scroll(dir: 'left' | 'right') {
    const el = railRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' })
  }

  return (
    <section
      aria-labelledby="reviews-heading"
      className={cn(
        'py-16 md:py-20',
        bg === 'muted' ? 'bg-secondary' : 'bg-background'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
              {eyebrow}
            </p>
            <h2
              id="reviews-heading"
              className="font-serif text-3xl md:text-4xl font-light text-foreground"
            >
              {title}
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-sm border-border"
              onClick={() => scroll('left')}
              aria-label="Vorige review"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-sm border-border"
              onClick={() => scroll('right')}
              aria-label="Volgende review"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Rail */}
        <div
          ref={railRef}
          className="flex gap-5 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {reviews.map((r) => (
            <article
              key={r.id}
              className="flex-none w-72 md:w-80 snap-start bg-background rounded-sm border border-border p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <StarRow rating={r.rating} />

              {/* Quote */}
              <blockquote className="font-sans text-sm leading-relaxed text-foreground flex-1">
                <p>{r.quote}</p>
              </blockquote>

              {/* Meta */}
              <footer className="border-t border-border pt-4 flex flex-col gap-0.5">
                {r.product && (
                  <p className="font-sans text-xs text-primary font-medium">
                    {r.product}
                  </p>
                )}
                <p className="font-sans text-sm font-semibold text-foreground">{r.name}</p>
                <p className="font-sans text-xs text-muted-foreground">
                  {r.city} &middot; {r.date}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
