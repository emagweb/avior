import { Routes, Route } from 'react-router-dom'
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Docs } from './pages/Docs'
import { Ui } from './pages/Ui'
import { Privacy } from './pages/Privacy'
import { Cookie } from './pages/Cookie'
import { Terms } from './pages/Terms'
import { Error } from './pages/Error'

const App = () => {
  useGoogleAnalytics()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='docs' element={<Docs />} />
      <Route path='ui' element={<Ui />} />
      <Route path='privacy-policy' element={<Privacy />} />
      <Route path='cookie-policy' element={<Cookie />} />
      <Route path='terms-of-use' element={<Terms />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export { App }
