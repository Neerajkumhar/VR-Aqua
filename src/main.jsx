import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/navigation.css'
import './styles/hero.css'
import './styles/collection.css'
import './styles/sections.css'
import './styles/contact.css'
import './styles/footer.css'
import './styles/animations.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
