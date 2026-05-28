'use client'

import { motion } from 'motion/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { variantFadeUp, variantStagger } from '@/lib/motion'

export interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  eyebrow?: string
  title?: string
  items: FaqItem[]
  bg?: 'default' | 'muted'
}

export function FaqAccordion({
  eyebrow,
  title = 'Veelgestelde vragen',
  items,
  bg = 'default',
}: FaqAccordionProps) {
  const shouldReduce = false
  const containerVariants = variantStagger(shouldReduce, 0.05, 0.1)
  const itemVariants = variantFadeUp(shouldReduce, 12)

  return (
    <section
      aria-label="Veelgestelde vragen"
      className={`py-16 md:py-20 ${bg === 'muted' ? 'bg-secondary' : 'bg-background'}`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        {(eyebrow || title) && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {eyebrow && (
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground text-balance">
              {title}
            </h2>
          </motion.div>
        )}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {items.map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <AccordionItem
                  value={`item-${i}`}
                  className="border border-border rounded-sm px-5"
                >
                  <AccordionTrigger className="font-sans text-base font-medium text-foreground text-left py-5 hover:no-underline hover:text-primary transition-colors min-h-[44px] [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-base text-muted-foreground leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
