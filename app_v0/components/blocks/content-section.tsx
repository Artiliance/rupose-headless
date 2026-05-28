'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { variantFadeUp, variantScaleIn } from '@/lib/motion'

interface ContentSectionProps {
  eyebrow?: string
  title?: string
  body: string
  image?: string
  imageAlt?: string
  imageSide?: 'left' | 'right'
  bg?: 'default' | 'muted'
}

export function ContentSection({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  imageSide = 'right',
  bg = 'default',
}: ContentSectionProps) {
  const shouldReduce = false
  const textVariants = variantFadeUp(shouldReduce, 16)
  const imageVariants = variantScaleIn(shouldReduce, 0.97)

  // Detect if body is HTML (contains tags) or plain text
  const isHtml = /<[a-z][\s\S]*>/i.test(body)

  const textContent = isHtml ? (
    <div
      className="prose prose-base prose-neutral max-w-none font-sans [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_p:last-child]:mb-0 [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline-offset-4 [&_a:hover]:underline [&_ul]:text-muted-foreground [&_ol]:text-muted-foreground [&_li]:leading-relaxed"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  ) : (
    <div>
      {body
        .split('\n\n')
        .filter(Boolean)
        .map((para, i) => {
          const parts = para.split(/(\*\*[^*]+\*\*)/)
          return (
            <p key={i} className="font-sans text-base text-muted-foreground leading-relaxed mb-4 last:mb-0">
              {parts.map((part, j) =>
                part.startsWith('**') && part.endsWith('**') ? (
                  <strong key={j} className="font-semibold text-foreground">
                    {part.slice(2, -2)}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          )
        })}
    </div>
  )

  const headerBlock = (eyebrow || title) ? (
    <div className="mb-6">
      {eyebrow && (
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-3 font-medium">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground text-balance mb-6">
          {title}
        </h2>
      )}
    </div>
  ) : null

  const bgClass = bg === 'muted' ? 'bg-secondary' : 'bg-background'

  if (image) {
    return (
      <section aria-label={title ?? 'Inhoud'} className={`py-16 md:py-20 ${bgClass}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
              imageSide === 'left' ? 'lg:[&>*:first-child]:order-last' : ''
            }`}
          >
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {headerBlock}
              {textContent}
            </motion.div>
            <motion.div
              className="relative aspect-[4/3] rounded-sm overflow-hidden"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <Image
                src={image}
                alt={imageAlt ?? ''}
                fill
                className="object-cover object-center"
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section aria-label={title ?? 'Inhoud'} className={`py-16 md:py-20 ${bgClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-2xl mx-auto"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {headerBlock}
          {textContent}
        </motion.div>
      </div>
    </section>
  )
}
