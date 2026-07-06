import { useEffect, useState } from 'react'

/**
 * Tracks which page section is currently in view so the header can mark
 * the active navigation link (aria-current).
 */
export function useScrollSpy(sectionIds: string[]): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio)
          } else {
            visible.delete(entry.target.id)
          }
        }
        if (visible.size > 0) {
          // Prefer the section highest on the page among visible ones
          const first = sectionIds.find((id) => visible.has(id))
          if (first) setActive(first)
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.05] },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
