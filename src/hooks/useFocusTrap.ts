import { useEffect, type RefObject } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Traps keyboard focus inside a container while `active` (mobile drawer),
 * restores focus to the previously focused element on close.
 */
export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active || !ref.current) return
    const container = ref.current
    const previouslyFocused = document.activeElement as HTMLElement | null

    const focusables = () =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      )

    // Defer the initial focus one frame: at effect time the drawer may still
    // be transitioning from visibility:hidden, and focus() would silently fail.
    const raf = requestAnimationFrame(() => {
      const initial = focusables()
      if (initial.length > 0) initial[0].focus({ preventScroll: true })
    })

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    container.addEventListener('keydown', onKeyDown)
    return () => {
      cancelAnimationFrame(raf)
      container.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [ref, active])
}
