'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll() // set initial state
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleClick() {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'instant' : 'smooth',
    })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Terug naar boven"
      className={cn(
        'w-14 h-14 rounded-full bg-background border border-border text-foreground shadow-md',
        'flex items-center justify-center',
        'hover:bg-secondary hover:border-primary/30 active:scale-95',
        'transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none',
      )}
    >
      <ChevronUp className="w-5 h-5" aria-hidden="true" />
    </button>
  )
}
