import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'light' | 'outline-light'

interface CommonProps {
  variant?: Variant
  small?: boolean
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type Props = ButtonAsButton | ButtonAsLink

function classes(variant: Variant, small: boolean, extra?: string) {
  return ['btn', `btn--${variant}`, small ? 'btn--sm' : '', extra ?? '']
    .filter(Boolean)
    .join(' ')
}

/** Button or anchor with shared Mu'nis styling. Renders a real <a> when href is given. */
export function Button(props: Props) {
  const { variant = 'primary', small = false, children, className, ...rest } = props
  const cls = classes(variant, small, className)

  if ('href' in props && props.href !== undefined) {
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a {...anchorRest} href={props.href} className={cls}>
        {children}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" {...buttonRest} className={cls}>
      {children}
    </button>
  )
}
