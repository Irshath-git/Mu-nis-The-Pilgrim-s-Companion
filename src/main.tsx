import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Fonts (self-hosted)
import '@fontsource-variable/manrope/index.css'
import '@fontsource-variable/inter/index.css'
import '@fontsource/noto-kufi-arabic/400.css'
import '@fontsource/noto-kufi-arabic/500.css'
import '@fontsource/noto-kufi-arabic/700.css'

// Design system
import './styles/tokens.css'
import './styles/base.css'
import './styles/utilities.css'
import './styles/components.css'

import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Register the service worker in production builds only
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Offline enhancement only — the site works fully without it.
    })
  })
}
