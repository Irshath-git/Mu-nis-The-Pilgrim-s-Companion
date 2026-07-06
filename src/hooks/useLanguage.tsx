import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Bilingual, Lang } from '../types/content'

const STORAGE_KEY = 'munis-lang'

interface LanguageContextValue {
  lang: Lang
  dir: 'ltr' | 'rtl'
  setLang: (lang: Lang) => void
  /** Resolve a bilingual string for the active language. */
  t: (text: Bilingual) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'ar' ? 'ar' : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('lang', lang)
    document.documentElement.setAttribute('dir', dir)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Storage unavailable (private mode) — language still works for the session.
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const t = useCallback((text: Bilingual) => text[lang], [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dir: lang === 'ar' ? 'rtl' : 'ltr', setLang, t }),
    [lang, setLang, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
