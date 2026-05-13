import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/style.css'
import './styles/mediaqueries.css'
import './styles/about.css'
import './styles/project.css'
import './styles/contact.css'
import './styles/Construction.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
