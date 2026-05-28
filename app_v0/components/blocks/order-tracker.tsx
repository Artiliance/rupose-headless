'use client'

import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface OrderTrackerStep {
  label: string
  date?: string
  description?: string
}

interface OrderTrackerProps {
  currentStep: number // 0-based index of active step (or -1 for retour/cancelled)
  steps: OrderTrackerStep[]
}

export function OrderTracker({ currentStep, steps }: OrderTrackerProps) {
  return (
    <div className="bg-secondary/30 border border-border rounded-sm p-6 md:p-8">
      <p className="font-sans text-xs text-muted-foreground uppercase tracking-[0.15em] mb-8">
        Bestelstatus
      </p>

      {/* Desktop: horizontal timeline */}
      <div className="hidden sm:block relative">
        {/* Track line */}
        <div
          className="absolute top-4 left-0 right-0 mx-[calc(100%/(var(--n)*2))] h-0.5 bg-border"
          style={{ '--n': steps.length } as React.CSSProperties}
          aria-hidden="true"
        />
        {/* Fill line */}
        <div
          className="absolute top-4 left-0 h-0.5 bg-primary transition-all duration-500"
          style={{
            width: currentStep <= 0
              ? '0%'
              : `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
          aria-hidden="true"
        />

        <div className="relative flex justify-between" role="list">
          {steps.map((step, i) => {
            const done = i <= currentStep
            const active = i === currentStep
            return (
              <div
                key={step.label}
                role="listitem"
                aria-current={active ? 'step' : undefined}
                className="flex flex-col items-center gap-2 flex-1"
              >
                <div
                  className={cn(
                    'w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 bg-background z-10',
                    done
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border text-muted-foreground'
                  )}
                  aria-hidden="true"
                >
                  {done
                    ? <CheckCircle2 className="w-4 h-4" />
                    : <span className="font-sans text-xs font-medium">{i + 1}</span>
                  }
                </div>
                <span
                  className={cn(
                    'font-sans text-xs text-center leading-tight',
                    done ? 'text-foreground font-medium' : 'text-muted-foreground'
                  )}
                >
                  {step.label}
                </span>
                {step.date && (
                  <span className="font-sans text-[11px] text-muted-foreground text-center">
                    {step.date}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="sm:hidden flex flex-col gap-0" role="list">
        {steps.map((step, i) => {
          const done = i <= currentStep
          const active = i === currentStep
          const isLast = i === steps.length - 1
          return (
            <div
              key={step.label}
              role="listitem"
              aria-current={active ? 'step' : undefined}
              className="flex items-start gap-4"
            >
              {/* Icon + connector */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 bg-background flex-shrink-0',
                    done
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border text-muted-foreground'
                  )}
                  aria-hidden="true"
                >
                  {done
                    ? <CheckCircle2 className="w-4 h-4" />
                    : <span className="font-sans text-xs font-medium">{i + 1}</span>
                  }
                </div>
                {!isLast && (
                  <div
                    className={cn(
                      'w-0.5 flex-1 min-h-[2rem] transition-colors duration-300',
                      done ? 'bg-primary' : 'bg-border'
                    )}
                    aria-hidden="true"
                  />
                )}
              </div>
              {/* Label */}
              <div className="pt-1.5 pb-6">
                <p
                  className={cn(
                    'font-sans text-sm leading-tight',
                    done ? 'text-foreground font-medium' : 'text-muted-foreground'
                  )}
                >
                  {step.label}
                </p>
                {step.date && (
                  <p className="font-sans text-xs text-muted-foreground mt-0.5">{step.date}</p>
                )}
                {step.description && active && (
                  <p className="font-sans text-xs text-muted-foreground mt-1">{step.description}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
