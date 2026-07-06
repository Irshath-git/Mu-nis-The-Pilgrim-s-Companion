import { brand } from '../../data/translations'
import { MunisMark } from './MunisMark'
import './brand.css'

interface MunisLockupProps {
  variant?: 'color' | 'white'
  markSize?: number
}

/**
 * Primary lockup: [mark] مُؤْنِس | MUNIS.
 * Both wordmarks are real HTML text (never SVG paths) for linguistic accuracy.
 */
export function MunisLockup({ variant = 'color', markSize = 34 }: MunisLockupProps) {
  return (
    <span className={`lockup lockup--${variant}`}>
      <MunisMark size={markSize} variant={variant} />
      <span className="lockup__words">
        <span className="lockup__ar" lang="ar" dir="rtl">
          {brand.nameAr}
        </span>
        <span className="lockup__divider" aria-hidden="true" />
        <span className="lockup__en" lang="en">
          {brand.nameEn}
        </span>
      </span>
    </span>
  )
}
