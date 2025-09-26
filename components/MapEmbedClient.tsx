"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type MapEmbedClientProps = {
  mapSrc: string
  previewImage: {
    src: string
    alt: string
  }
}

const PLACEHOLDER_DESCRIPTION =
  "Pratinjau peta TK Kartikasari. Klik tombol di bawah untuk membuka peta interaktif dari Google Maps."

export default function MapEmbedClient({ mapSrc, previewImage }: MapEmbedClientProps) {
  const [hasUserActivated, setHasUserActivated] = useState(false)
  const [hasViewportTrigger, setHasViewportTrigger] = useState(false)
  const [shouldRenderIframe, setShouldRenderIframe] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const intersectionObserver = useRef<IntersectionObserver | null>(null)
  const activationTimeout = useRef<number | null>(null)

  useEffect(() => {
    if (shouldRenderIframe) {
      return
    }

    if (typeof window === "undefined" || !containerRef.current) {
      return
    }

    intersectionObserver.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (activationTimeout.current === null) {
              activationTimeout.current = window.setTimeout(() => {
                setHasViewportTrigger(true)
              }, 400)
            }
          } else if (activationTimeout.current !== null) {
            window.clearTimeout(activationTimeout.current)
            activationTimeout.current = null
          }
        })
      },
      {
        rootMargin: "160px 0px",
        threshold: 0.25,
      }
    )

    intersectionObserver.current.observe(containerRef.current)

    return () => {
      intersectionObserver.current?.disconnect()
      if (activationTimeout.current !== null) {
        window.clearTimeout(activationTimeout.current)
      }
    }
  }, [shouldRenderIframe])

  useEffect(() => {
    if (hasUserActivated || hasViewportTrigger) {
      setShouldRenderIframe(true)
    }
  }, [hasUserActivated, hasViewportTrigger])

  const handleActivate = () => {
    setHasUserActivated(true)
  }

  return (
    <div ref={containerRef} className="relative w-full">
      {shouldRenderIframe ? (
        <iframe
          src={mapSrc}
          className="w-full h-[320px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi TK Kartikasari"
          aria-label="Lokasi TK Kartikasari"
        />
      ) : (
        <div className="relative h-[320px] w-full">
          <Image
            src={previewImage.src}
            alt={previewImage.alt}
            fill
            priority={false}
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center text-white">
            <p className="text-sm md:text-base" aria-live="polite">
              {PLACEHOLDER_DESCRIPTION}
            </p>
            <button
              type="button"
              onClick={handleActivate}
              className="btn btn-primary"
              aria-label="Aktifkan peta interaktif"
            >
              Lihat peta interaktif
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
