'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import { BrandVideoModal } from '@/components/pdp/brand-video-modal'

interface BrandVideoSectionProps {
  videoUrl: string
  brandName: string
}

// Derive a YouTube thumbnail from the URL if possible, otherwise use null
function getYoutubeThumbnail(url: string): string | null {
  try {
    const u = new URL(url)
    let id: string | null = null
    if (u.hostname === 'www.youtube.com' || u.hostname === 'youtube.com') {
      id = u.searchParams.get('v')
    } else if (u.hostname === 'youtu.be') {
      id = u.pathname.slice(1)
    }
    if (id) return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
  } catch {
    // ignore
  }
  return null
}

export function BrandVideoSection({ videoUrl, brandName }: BrandVideoSectionProps) {
  const [open, setOpen] = useState(false)
  const thumbnail = getYoutubeThumbnail(videoUrl)
  const modalTitle = `${brandName} in beeld`

  return (
    <section
      aria-label={`Video over ${brandName}`}
      className="py-16 md:py-20 bg-secondary border-t border-border"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Eyebrow + heading */}
        <div className="mb-8 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-primary mb-3 font-medium">
            Video
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brown text-balance">
            {modalTitle}
          </h2>
        </div>

        {/* Poster / play trigger */}
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setOpen(true)}
            aria-label={`Speel video af: ${modalTitle}`}
            className="group relative w-full aspect-video rounded-sm overflow-hidden bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {/* Thumbnail or fallback */}
            {thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnail}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
              />
            ) : (
              <div className="absolute inset-0 bg-brown/10" aria-hidden="true" />
            )}

            {/* Dark overlay */}
            <div
              className="absolute inset-0 bg-foreground/30 transition-opacity duration-200 group-hover:bg-foreground/40"
              aria-hidden="true"
            />

            {/* Play button */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background/90 flex items-center justify-center shadow-lg transition-transform duration-200 motion-safe:group-hover:scale-110">
                <Play className="w-7 h-7 md:w-9 md:h-9 text-brown fill-brown translate-x-0.5" />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Modal — iframe only mounts when open */}
      <BrandVideoModal
        open={open}
        onClose={() => setOpen(false)}
        videoUrl={videoUrl}
        title={modalTitle}
      />
    </section>
  )
}
