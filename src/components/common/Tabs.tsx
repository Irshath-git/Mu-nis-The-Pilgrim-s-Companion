import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { useLanguage } from '../../hooks/useLanguage'

export interface TabItem {
  id: string
  label: ReactNode
  panel: ReactNode
}

interface TabsProps {
  items: TabItem[]
  /** Accessible name for the tablist. */
  label: string
  idPrefix: string
}

/**
 * WAI-ARIA tabs with roving tabindex and automatic activation.
 * Arrow keys follow reading direction (flipped in RTL).
 */
export function Tabs({ items, label, idPrefix }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const { dir } = useLanguage()

  function focusTab(index: number) {
    const next = (index + items.length) % items.length
    setActiveIndex(next)
    tabRefs.current[next]?.focus()
  }

  function onKeyDown(event: KeyboardEvent, index: number) {
    const forward = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
    const backward = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft'
    switch (event.key) {
      case forward:
        event.preventDefault()
        focusTab(index + 1)
        break
      case backward:
        event.preventDefault()
        focusTab(index - 1)
        break
      case 'Home':
        event.preventDefault()
        focusTab(0)
        break
      case 'End':
        event.preventDefault()
        focusTab(items.length - 1)
        break
    }
  }

  return (
    <div className="tabs">
      <div role="tablist" aria-label={label} className="tabs__list">
        {items.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => {
              tabRefs.current[index] = el
            }}
            role="tab"
            id={`${idPrefix}-tab-${item.id}`}
            aria-selected={index === activeIndex}
            aria-controls={`${idPrefix}-panel-${item.id}`}
            tabIndex={index === activeIndex ? 0 : -1}
            className="tabs__tab"
            onClick={() => setActiveIndex(index)}
            onKeyDown={(e) => onKeyDown(e, index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item, index) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${idPrefix}-panel-${item.id}`}
          aria-labelledby={`${idPrefix}-tab-${item.id}`}
          hidden={index !== activeIndex}
          tabIndex={0}
          className="tabs__panel"
        >
          {item.panel}
        </div>
      ))}
    </div>
  )
}
