import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@app/index.css'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <App />
 // </StrictMode>,
)

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/pwabuilder-sw.js')
      .then(() => {
        console.info('Service worker registered')
      })
      .catch((error) => {
        console.error('Service worker registration failed', error)
      })
  })
}
