import type { ReactNode } from 'react'
import { Signal, Wifi, BatteryFull, WifiOff } from 'lucide-react'
import './phone.css'

interface PhoneFrameProps {
  children: ReactNode
  /** Shows the offline glyph in the status bar. */
  offline?: boolean
  className?: string
  /** Accessible description of what the phone demo shows. */
  label?: string
}

/** Realistic smartphone shell shared by the hero visual and the prototype. */
export function PhoneFrame({ children, offline = false, className, label }: PhoneFrameProps) {
  return (
    <div
      className={`phone${className ? ` ${className}` : ''}`}
      role={label ? 'group' : undefined}
      aria-label={label}
    >
      <div className="phone__screen">
        <div className="phone__statusbar" aria-hidden="true">
          <span className="phone__time">09:41</span>
          <span className="phone__notch" />
          <span className="phone__status-icons">
            {offline ? <WifiOff size={11} /> : <Wifi size={11} />}
            <Signal size={11} />
            <BatteryFull size={13} />
          </span>
        </div>
        <div className="phone__content">{children}</div>
      </div>
    </div>
  )
}
