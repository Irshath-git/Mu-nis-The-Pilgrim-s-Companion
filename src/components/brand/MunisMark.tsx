interface MunisMarkProps {
  size?: number
  /** 'color' for light surfaces, 'white' for deep emerald surfaces. */
  variant?: 'color' | 'white'
  className?: string
}

/**
 * The Mu'nis symbol: two flowing emerald forms whose negative space traces a
 * path toward a small gold destination point. Inline SVG so it scales
 * crisply; decorative by default (the adjacent wordmark carries the name).
 */
export function MunisMark({ size = 36, variant = 'color', className }: MunisMarkProps) {
  const big = variant === 'white' ? '#FFFFFF' : '#005A47'
  const small = variant === 'white' ? '#FFFFFF' : '#00A67E'
  const smallOpacity = variant === 'white' ? 0.75 : 1

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M 30.17 12.08 A 21 21 0 1 0 51.03 41.88"
        fill="none"
        stroke={big}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M 31.75 30.01 A 7.5 7.5 0 1 0 41.25 41.32"
        fill="none"
        stroke={small}
        strokeOpacity={smallOpacity}
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      <circle cx="44.04" cy="15.8" r="4.2" fill="#C8A951" />
    </svg>
  )
}
