import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in ms. */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'article'
}

/** Fades content in on first viewport entry; inert under reduced motion (CSS). */
export function Reveal({ children, delay = 0, className, as: Tag = 'div' }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>()
  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={`reveal${inView ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Tag>
  )
}
