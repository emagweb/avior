import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useMeta } from '../hooks/useMeta'
import { Hero } from './parts/Hero'
import { Speed } from './parts/Speed'
import { Features } from './parts/Features'
import { Compare } from './parts/Compare'
import { Variables } from './parts/Variables'
import { GetStarted } from './parts/GetStarted'
import { Contribute } from './parts/Contribute'
import { Cta } from './parts/Cta'

const Home = () => {
  useMeta(null, 'Avior is a starter stack for websites: React, Rsbuild and Sass utilities named after the Emmet dictionary. Values from the design go straight into the class name.')

  return (
    <div className="content">
      <Header />
      <main>
        <Hero />
        <Speed />
        <Features />
        <Compare />
        <Variables />
        <GetStarted />
        <Contribute />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}

export { Home }
