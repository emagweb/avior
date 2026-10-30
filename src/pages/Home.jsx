import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useMeta } from '../hooks/useMeta'
import { Hero } from './parts/Hero'
import { Features } from './parts/Features'
import { GetStarted } from './parts/GetStarted'
import { Cta } from './parts/Cta'

const Home = () => {
  useMeta(null, 'Avior is a starter stack for websites: React, Rsbuild and Sass utilities named after the Emmet dictionary. Values from the design go straight into the class name.')

  return (
    <div className="content">
      <Header />
      <main>
        <Hero />
        <Features />
        <GetStarted />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}

export { Home }
