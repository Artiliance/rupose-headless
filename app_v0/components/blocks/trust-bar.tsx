'use client'

import { motion } from 'motion/react'
import { Award, MessageCircle, Truck, ShieldCheck, type LucideIcon } from 'lucide-react'
import { variantFadeUp, variantStagger } from '@/lib/motion'

interface Usp {
  icon: LucideIcon
  title: string
  desc: string
}

const defaultUsps: Usp[] = [
  {
    icon: Award,
    title: 'Europese premiumkwaliteit',
    desc: 'OEKO-TEX gecertificeerd, Made in Germany en Oostenrijk',
  },
  {
    icon: MessageCircle,
    title: 'Eerlijk slaapadvies',
    desc: 'Persoonlijk advies van slaapspecialisten',
  },
  {
    icon: Truck,
    title: 'Gratis verzending',
    desc: 'Vanaf €75. Bezorging in 2 tot 3 werkdagen.',
  },
  {
    icon: ShieldCheck,
    title: 'Veilig betalen',
    desc: 'iDEAL, creditcard en achteraf betalen',
  },
]

interface TrustBarProps {
  usps?: Usp[]
  className?: string
}

export function TrustBar({ usps = defaultUsps, className }: TrustBarProps) {
  // Use false as default - CSS handles reduced motion via media query
  const shouldReduce = false
  const containerVariants = variantStagger(shouldReduce, 0.08, 0.05)
  const itemVariants = variantFadeUp(shouldReduce, 16)

  return (
    <section
      className={`bg-secondary border-y border-border ${className ?? ''}`}
      aria-label="Onze beloften"
    >
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {usps.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left"
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center"
                aria-hidden="true"
              >
                <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-serif text-base font-medium text-foreground leading-tight mb-1">
                  {title}
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
