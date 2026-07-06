import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

export interface AccordionItem {
  id: string
  header: ReactNode
  panel: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  idPrefix: string
  /** Index opened initially; null for all closed. */
  defaultOpen?: number | null
}

/** Disclosure accordion: native buttons, aria-expanded, animated height. */
export function Accordion({ items, idPrefix, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const open = index === openIndex
        const headerId = `${idPrefix}-header-${item.id}`
        const panelId = `${idPrefix}-panel-${item.id}`
        return (
          <div key={item.id} className="accordion__item">
            <h3 className="accordion__heading">
              <button
                id={headerId}
                className="accordion__trigger"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.header}</span>
                <ChevronDown size={20} className="accordion__chevron" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="accordion__panel"
              data-open={open}
            >
              <div className="accordion__panel-inner" {...(!open ? { inert: true } : {})}>
                <div className="accordion__panel-content">{item.panel}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
