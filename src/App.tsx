import { LanguageProvider } from './hooks/useLanguage'
import { useLanguage } from './hooks/useLanguage'
import { ui } from './data/translations'
import { Header } from './components/navigation/Header'
import { Hero } from './components/hero/Hero'
import { Challenge } from './components/challenge/Challenge'
import { SolutionFlow } from './components/solution/SolutionFlow'
import { Journey } from './components/journey/Journey'
import { Personalisation } from './components/personalisation/Personalisation'
import { CapabilityMaturity } from './components/solution/CapabilityMaturity'
import { AccessibilitySection } from './components/accessibility/AccessibilitySection'
import { Technology } from './components/architecture/Technology'
import { Differentiation } from './components/differentiation/Differentiation'
import { Impact } from './components/impact/Impact'
import { Roadmap } from './components/roadmap/Roadmap'
import { BusinessModel } from './components/roadmap/BusinessModel'
import { Privacy } from './components/privacy/Privacy'
import { Team } from './components/team/Team'
import { ContactForm } from './components/contact/ContactForm'
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
        <Challenge />
        <SolutionFlow />
        <Journey />
        <Personalisation />
        <CapabilityMaturity />
        <AccessibilitySection />
        <Technology />
        <Differentiation />
        <Impact />
        <Roadmap />
        <BusinessModel />
        <Privacy />
        <Team />
        <ContactForm />
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
