import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { scrollToSection } from '../components/Nav'
import { useMeta } from '../hooks/useMeta'
import { Hero } from './parts/Hero'
import { Paths } from './parts/Paths'
import { Showcase } from './parts/Showcase'
import { Layers } from './parts/Layers'
import { Numbers } from './parts/Numbers'

const Home = () => {
  useMeta(null, 'Avior is an open source design system for React and Rsbuild. Variables, helpers and components that build a different site every time, shaped by its content.')

  useEffect(() => {
    const { hash, pathname, search } = window.location
    if (!hash) return
    scrollToSection(decodeURIComponent(hash.slice(1)))
    window.history.replaceState(window.history.state, '', pathname + search)
  }, [])

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Paths />
        <Showcase />
        <Layers />
        <Numbers />
      </main>
      <Footer />
    </div>
  )
}

export { Home }
