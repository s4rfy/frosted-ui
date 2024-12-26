import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { DarkModeProvider } from './contexts/dark_mode_context'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>,
)
