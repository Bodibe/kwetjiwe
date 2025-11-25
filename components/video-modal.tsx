"use client"

import { useState, useCallback, useEffect } from "react"
import { Play, X } from "lucide-react"

interface VideoModalProps {
  videoId: string
}

export function VideoModal({ videoId }: VideoModalProps) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    if (open) {
      window.addEventListener("keydown", onKeyDown)
    }
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, close])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 hover:bg-black/25 transition"
        aria-label="Play company profile video"
      >
        <span className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/90 text-foreground font-semibold shadow-lg hover:shadow-xl transition">
          <Play size={18} />
          Watch Video
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-4xl">
            <button
              type="button"
              onClick={close}
              className="absolute -right-3 -top-3 p-2 rounded-full bg-white text-foreground shadow-lg hover:shadow-xl"
              aria-label="Close video"
            >
              <X size={18} />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Kwetjiwe company video"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
