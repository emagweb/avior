import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useMeta } from '../hooks/useMeta'
import { Hero } from './parts/Hero'
import { Projects } from './parts/Projects'
import { Features } from './parts/Features'
import { Reference } from './parts/Reference'
import { Paths } from './parts/Paths'
import { Steps } from './parts/Steps'
import { Safe } from './parts/Safe'
import { OpenSource } from './parts/OpenSource'
import { Finale } from './parts/Finale'

const Home = () => {
  useMeta(null, 'Avior is a free React starter with a mini CSS framework inside: short class names, values straight from the design and a 12-column grid. Build a website in days, yourself or with an AI agent.')

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Features />
        <Reference />
        <Paths />
        <Steps />
        <Safe />
        <OpenSource />
        <Finale />
      </main>
      <Footer />
    </div>
  )
}

export { Home }
