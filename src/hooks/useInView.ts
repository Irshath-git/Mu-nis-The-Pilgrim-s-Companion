import { useEffect, useRef, useState, type RefObject } from 'react'

/**
 * Observes an element and reports once it has entered the viewport.
 * Used for scroll reveals and for starting purposeful animations lazily.
 */
export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.18 },
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setInView(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, inView]
}
