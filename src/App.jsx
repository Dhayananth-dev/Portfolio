import { useEffect, useState } from 'react'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'
import Header from './components/Header'
import Hero from './components/Hero'
import Journey from './components/Journey'
import ParticleBackground from './components/ParticleBackground'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './styles/portfolio.css'

const sectionIds = ['home', 'skills', 'projects', 'journey', 'contact']

function getActiveSection() {
  if (typeof window === 'undefined') {
    return 'home'
  }

  const hashSection = window.location.hash.replace('#', '').toLowerCase()

  return sectionIds.includes(hashSection) ? hashSection : 'home'
}

function App() {
  const [activeSection, setActiveSection] = useState(getActiveSection)

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(getActiveSection())
    }

    window.addEventListener('hashchange', handleHashChange)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: 0 },
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)

      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="portfolio-app">
      <CursorGlow />
      <ParticleBackground />
      <Header activePage={activeSection} />
      <main className="page-shell">
        <Hero />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </div>
  )
}

export default App
