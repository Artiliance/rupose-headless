/**
 * Shared Motion (motion.dev) animation primitives for Rupose.
 *
 * Import EASE or the factory helpers into each block component.
 * Each component calls `useReducedMotion()` locally and passes
 * `shouldReduce` into `makeVariants()` to respect WCAG 2.1 §2.3.3.
 */
import type { Variants, Transition } from 'motion/react'

/** Standard smooth-out cubic — feels premium, never bouncy */
export const EASE = [0.16, 1, 0.3, 1] as const

/** Duration constants */
export const DUR = {
  xs: 0.2,
  sm: 0.4,
  md: 0.6,
  lg: 0.8,
} as const

/** Stagger gaps */
export const STAGGER = {
  xs: 0.05,
  sm: 0.08,
  md: 0.1,
} as const

// ---------------------------------------------------------------------------
// Variant factories — pass `shouldReduce` from `useReducedMotion()` hook
// ---------------------------------------------------------------------------

export function variantFadeUp(shouldReduce: boolean, dy = 20): Variants {
  return {
    hidden: { opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : dy },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduce ? 0 : DUR.md,
        ease: EASE,
      } as Transition,
    },
  }
}

export function variantFadeIn(shouldReduce: boolean): Variants {
  return {
    hidden: { opacity: shouldReduce ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: { duration: shouldReduce ? 0 : DUR.sm, ease: 'easeOut' } as Transition,
    },
  }
}

export function variantScaleIn(
  shouldReduce: boolean,
  from = 0.97
): Variants {
  return {
    hidden: { opacity: shouldReduce ? 1 : 0, scale: shouldReduce ? 1 : from },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: shouldReduce ? 0 : DUR.md, ease: EASE } as Transition,
    },
  }
}

export function variantStagger(
  shouldReduce: boolean,
  stagger = STAGGER.sm,
  delay = 0.05
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduce ? 0 : stagger,
        delayChildren: shouldReduce ? 0 : delay,
      } as Transition,
    },
  }
}
