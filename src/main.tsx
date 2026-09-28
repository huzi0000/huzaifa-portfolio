import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const root = document.getElementById('root')
if (!root) throw new Error('Root element #root not found')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* Respect the OS "reduce motion" preference for the smooth-scroll CSS too. */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.style.scrollBehavior = 'auto'
}

/* Anchor links land below the floating navbar. */
const NAV_OFFSET = 78
document.addEventListener('click', (e) => {
  const target = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]') as
    | HTMLAnchorElement
    | null
  if (!target) return
  const id = target.getAttribute('href')
  if (!id || id === '#') return
  const el = document.querySelector(id)
  if (!el) return
  e.preventDefault()
  const top = el.getBoundingClientRect().top + window.scrollY - (id === '#home' ? 0 : NAV_OFFSET)
  window.scrollTo({ top, behavior: 'smooth' })
  history.replaceState(null, '', id)
})
