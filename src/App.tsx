import { LanguageProvider } from './hooks/useLanguage'
import { useLanguage } from './hooks/useLanguage'
import { ui } from './data/translations'
import { Header } from './components/navigation/Header'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Challenge } from './components/challenge/Challenge'
import { SolutionFlow } from './components/solution/SolutionFlow'
import { CapabilityMaturity } from './components/solution/CapabilityMaturity'
import { ARMaps } from './components/ar/ARMaps'
import { Journey } from './components/journey/Journey'
import { AccessibilitySection } from './components/accessibility/AccessibilitySection'
import { PrototypeDemo } from './components/prototype/PrototypeDemo'
import { ComingSoon } from './components/comingsoon/ComingSoon'
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
        <About />
        <Challenge />
        <SolutionFlow />
        <CapabilityMaturity />
        <ARMaps />
        <Journey />
        <AccessibilitySection />
        <PrototypeDemo />
        <ComingSoon />
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
