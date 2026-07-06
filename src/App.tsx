import { LanguageProvider } from './hooks/useLanguage'
import { useLanguage } from './hooks/useLanguage'
import { ui } from './data/translations'
import { Header } from './components/navigation/Header'
import { Hero } from './components/hero/Hero'
import { FinalCta } from './components/footer/FinalCta'
import { Footer } from './components/footer/Footer'

function SkipLink() {
  const { t } = useLanguage()
  return (
    <a href="#main" className="skip-link">
      {t(ui.skipToContent)}
    </a>
  )
}

function Page() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
      </main>
      <FinalCta />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}
