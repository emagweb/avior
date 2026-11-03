import { Routes, Route } from 'react-router-dom'
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Privacy } from './pages/Privacy'
import { Cookie } from './pages/Cookie'
import { Terms } from './pages/Terms'
import { Error } from './pages/Error'
import { Introduction } from './pages/docs/Introduction'
import { Installation } from './pages/docs/Installation'
import { Structure } from './pages/docs/Structure'
import { Variables } from './pages/docs/Variables'
import { Grid } from './pages/docs/Grid'
import { Helpers } from './pages/docs/Helpers'
import { Typography } from './pages/docs/Typography'
import { Mode } from './pages/docs/Mode'
import { Button } from './pages/docs/Button'
import { Card } from './pages/docs/Card'
import { Forms } from './pages/docs/Forms'
import { TabsPage } from './pages/docs/TabsPage'
import { AccordionPage } from './pages/docs/AccordionPage'
import { Alert } from './pages/docs/Alert'
import { Badge } from './pages/docs/Badge'
import { CodePage } from './pages/docs/CodePage'
import { Pages } from './pages/docs/Pages'
import { Build } from './pages/docs/Build'
import { Contributing } from './pages/docs/Contributing'
import { ShowcasePage } from './pages/docs/ShowcasePage'

const docs = {
  installation: Installation,
  structure: Structure,
  variables: Variables,
  grid: Grid,
  helpers: Helpers,
  typography: Typography,
  mode: Mode,
  button: Button,
  forms: Forms,
  card: Card,
  tabs: TabsPage,
  accordion: AccordionPage,
  alert: Alert,
  badge: Badge,
  code: CodePage,
  pages: Pages,
  build: Build,
  contributing: Contributing,
  showcase: ShowcasePage,
}

const App = () => {
  useGoogleAnalytics()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='docs' element={<Introduction />} />
      {Object.entries(docs).map(([slug, DocPage]) => (
        <Route key={slug} path={`docs/${slug}`} element={<DocPage />} />
      ))}
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='privacy-policy' element={<Privacy />} />
      <Route path='cookie-policy' element={<Cookie />} />
      <Route path='terms-of-use' element={<Terms />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export { App }
