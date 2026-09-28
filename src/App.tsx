import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Work from './sections/Work'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg">
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
    </div>
  )
}
