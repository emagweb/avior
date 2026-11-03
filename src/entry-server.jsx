import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { App } from './App'
import { renderedMeta } from './hooks/useMeta'
import { flat, href } from './data/docs'

const routes = [
  '/',
  ...flat.map(({ slug }) => href(slug)),
  '/about',
  '/contact',
  '/privacy-policy',
  '/cookie-policy',
  '/terms-of-use',
]

const render = (url) => {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )

  return { html, title: renderedMeta.title, description: renderedMeta.description }
}

export { render, routes }
