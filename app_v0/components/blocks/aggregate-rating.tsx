import Link from 'next/link'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AggregateRatingProps {
  score?: number        // default 4.8
  count?: number        // default 847
  href?: string         // default /over-ons/#reviews
  className?: string
  /** "sm" (default) = compact inline; "md" = slightly bigger for section header use */
  size?: 'sm' | 'md'
}

export function AggregateRating({
  score = 4.8,
  count = 847,
  href = '/over-ons/#reviews',
  className,
  size = 'sm',
}: AggregateRatingProps) {
  const full = Math.floor(score)
  const half = score - full >= 0.25 && score - full < 0.75
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) return 'full'
    if (i === full && half) return 'half'
    return 'empty'
  })

  const starSize = size === 'md' ? 'w-5 h-5' : 'w-4 h-4'
  const textSize = size === 'md' ? 'text-base' : 'text-sm'

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm',
        className
      )}
      aria-label={`Beoordeling: ${score} van 5 sterren, gebaseerd op ${count} reviews`}
    >
      {/* Stars */}
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {stars.map((type, i) => (
          <span key={i} className="relative">
            {/* Background star (empty) */}
            <Star
              className={cn(starSize, 'text-border fill-border')}
            />
            {/* Foreground fill */}
            {type === 'full' && (
              <Star
                className={cn(starSize, 'absolute inset-0 text-copper fill-copper')}
              />
            )}
            {type === 'half' && (
              <span className="absolute inset-0 overflow-hidden w-1/2">
                <Star
                  className={cn(starSize, 'text-copper fill-copper')}
                />
              </span>
            )}
          </span>
        ))}
      </span>

      {/* Score */}
      <span
        className={cn(
          'font-sans font-semibold text-brown tabular-nums',
          textSize
        )}
      >
        {score.toFixed(1)}
      </span>

      {/* Count */}
      <span
        className={cn(
          'font-sans text-brown-muted group-hover:text-brown transition-colors underline underline-offset-2 decoration-border group-hover:decoration-brown-muted',
          textSize
        )}
      >
        {count.toLocaleString('nl-NL')} reviews
      </span>
    </Link>
  )
}
