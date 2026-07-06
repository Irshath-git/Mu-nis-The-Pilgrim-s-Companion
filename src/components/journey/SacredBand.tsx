import { useEffect, useRef } from 'react'
import { sacredBand } from '../../data/journey'
import { useLanguage } from '../../hooks/useLanguage'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import './sacredband.css'

/** Full-width sacred-context transition: an aerial tawaf timelapse loop.
 *  Falls back to the poster frame under reduced-motion or Save-Data. */
export function SacredBand() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  const saveData =
    typeof navigator !== 'undefined' &&
    (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true
  const showVideo = !reducedMotion && !saveData

  // Play only while on screen; the file never loads until first intersection.
  useEffect(() => {
    const video = videoRef.current
    if (!video || !showVideo) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* Autoplay refusal is fine — the poster remains visible. */
          })
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [showVideo])

  return (
    <section className="sacred-band" aria-label={t(sacredBand.ariaLabel)}>
      {showVideo ? (
        <video
          ref={videoRef}
          className="sacred-band__media"
          muted
          loop
          playsInline
          preload="none"
          poster="/media/journey/tawaf-poster.jpg"
          aria-hidden="true"
        >
          <source src="/media/journey/tawaf-loop.webm" type="video/webm" />
          <source src="/media/journey/tawaf-loop.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          className="sacred-band__media"
          src="/media/journey/tawaf-poster.jpg"
          alt=""
          width={1280}
          height={574}
          loading="lazy"
        />
      )}
      <div className="sacred-band__grade" aria-hidden="true" />
      <div className="container sacred-band__content">
        <p className="sacred-band__line">{t(sacredBand.line)}</p>
        <p className="sacred-band__sub">{t(sacredBand.sub)}</p>
      </div>
      <p className="sacred-band__credit">{t(sacredBand.credit)}</p>
    </section>
  )
}
