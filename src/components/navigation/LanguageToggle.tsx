import { Languages } from 'lucide-react'
import { ui } from '../../data/translations'
import { useLanguage } from '../../hooks/useLanguage'

/** EN / العربية selector. Persisted locally; updates document lang + dir. */
export function LanguageToggle({ idSuffix = '' }: { idSuffix?: string }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang-toggle" role="group" aria-label={t(ui.languageSelector)}>
      <Languages size={15} aria-hidden="true" className="lang-toggle__icon" />
      <button
        id={`lang-en${idSuffix}`}
        className="lang-toggle__option"
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
        lang="en"
      >
        EN
      </button>
      <span className="lang-toggle__sep" aria-hidden="true">
        /
      </span>
      <button
        id={`lang-ar${idSuffix}`}
        className="lang-toggle__option"
        aria-pressed={lang === 'ar'}
        onClick={() => setLang('ar')}
        lang="ar"
      >
        العربية
      </button>
    </div>
  )
}
