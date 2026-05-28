'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'
import type { BrandVideo } from '@/lib/brands'

interface BrandVideoProps {
  video: BrandVideo
  brandName: string
  eyebrow?: string
  bg?: 'default' | 'muted'
}

function getEmbedUrl(video: BrandVideo): string {
  if (video.type === 'youtube') {
    return `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=0&rel=0&modestbranding=1`
  }
  return `https://player.vimeo.com/video/${video.id}?dnt=1`
}

function getYoutubeThumbnail(id: string): string {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
}

export function BrandVideo({
  video,
  brandName,
  eyebrow = 'Ontdek het merk',
  bg = 'default',
}: BrandVideoProps) {
  const [playing, setPlaying] = useState(false)

  const embedUrl = getEmbedUrl(video)
  const thumbnail =
    video.type === 'youtube' ? getYoutubeThumbnail(video.id) : null

  const bgClass = bg === 'muted' ? 'bg-secondary' : 'bg-background'

  return (
    <section
      className={`${bgClass} py-16 md:py-20 border-t border-border`}
      aria-labelledby="brand-video-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          {eyebrow && (
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
              {eyebrow}
            </p>
          )}
          <h2
            id="brand-video-heading"
            className="font-serif text-3xl md:text-4xl font-light text-brown text-balance"
          >
            Maak kennis met {brandName}
          </h2>
        </div>

        {/* Video container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-sm overflow-hidden bg-brown/10 shadow-md">
            {playing ? (
              <iframe
                src={`${embedUrl}&autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <>
                {/* Thumbnail / poster */}
                {thumbnail ? (
                  <Image
                    src={thumbnail}
                    alt={`Video thumbnail voor ${video.title}`}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-brown/20" />
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

                {/* Play button */}
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`Speel video af: ${video.title}`}
                >
                  <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white/90 text-brown shadow-lg transition-transform duration-200 group-hover:scale-110 motion-reduce:group-hover:scale-100">
                    <Play className="w-8 h-8 translate-x-0.5" aria-hidden="true" />
                  </span>
                  <span className="font-sans text-sm text-white font-medium tracking-wide drop-shadow">
                    {video.title}
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
