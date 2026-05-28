'use client'

import { useEffect, useRef, useCallback } from 'react'
import { X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface BrandVideoModalProps {
  open: boolean
  onClose: () => void
  videoUrl: string
  title: string
}

function parseVideoUrl(url: string): { provider: 'youtube' | 'vimeo'; embedUrl: string } | null {
  try {
    const u = new URL(url)

    // YouTube: youtube.com/watch?v=ID or youtu.be/ID
    if (u.hostname === 'www.youtube.com' || u.hostname === 'youtube.com') {
      const id = u.searchParams.get('v')
      if (id) {
        return {
          provider: 'youtube',
          embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`,
        }
      }
    }
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.slice(1)
      if (id) {
        return {
          provider: 'youtube',
          embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`,
        }
      }
    }

    // Vimeo: vimeo.com/ID (ignore any query string)
    if (u.hostname === 'vimeo.com' || u.hostname === 'www.vimeo.com') {
      const id = u.pathname.split('/').filter(Boolean)[0]
      if (id) {
        return {
          provider: 'vimeo',
          embedUrl: `https://player.vimeo.com/video/${id}?autoplay=1`,
        }
      }
    }
  } catch {
    // invalid URL
  }
  return null
}

export function BrandVideoModal({
  open,
  onClose,
  videoUrl,
  title,
}: BrandVideoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus close button when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => closeButtonRef.current?.focus(), 50)
    }
  }, [open])

  const handleOpenChange = useCallback(
    (v: boolean) => {
      if (!v) onClose()
    },
    [onClose]
  )

  const parsed = videoUrl ? parseVideoUrl(videoUrl) : null

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-3xl w-[95vw] p-0 gap-0 rounded-sm overflow-hidden bg-background">
        {/* Header */}
        <DialogHeader className="px-5 pt-5 pb-3 border-b border-border flex-shrink-0">
          <div className="flex items-center justify-between gap-4">
            <DialogTitle className="font-serif text-lg font-light text-brown">
              {title}
            </DialogTitle>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Video sluiten"
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm text-brown-muted hover:text-brown hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </DialogHeader>

        {/* Video — only mounted when open */}
        <div className="w-full aspect-video bg-foreground/5">
          {open && parsed ? (
            <iframe
              src={parsed.embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0"
            />
          ) : open && !parsed ? (
            <div className="w-full h-full flex items-center justify-center">
              <p className="font-sans text-sm text-muted-foreground">
                Video kan niet worden geladen.
              </p>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
