import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from './parts/Hero'
import { Features } from './parts/Features'
import { GetStarted } from './parts/GetStarted'

const Home = () => {
  return (
    <div className="content">
      <Header />
      <main className='p-y-120'>
        <Hero />
        <Features />
        <GetStarted />
      </main>
      <Footer />
    </div>
  )
}

export { Home }
