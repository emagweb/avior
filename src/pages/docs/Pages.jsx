import { PiWarning } from 'react-icons/pi'
import { DocsLayout } from '../../components/DocsLayout'
import { Code } from '../../components/Code'

const Pages = () => (
  <DocsLayout
    slug='pages'
    source='Pages'
    title='Pages and meta'
    lead='Add a page in three steps. Its title and description become the tags search engines and social networks read.'
    description='How to add a page to an Avior site: the Page template, the title and description props, the route, the prerender list and the sitemap.'
    toc={[{ id: 'template', title: 'The Page template' }, { id: 'route', title: 'Add the route' }, { id: 'meta', title: 'Title and description' }, { id: 'menus', title: 'Menus' }]}>

    <h2 id='template'>The Page template</h2>
    <p>
      <code>Page</code> draws the header, a heading block, your content and the footer. It
      renders <code>title</code> as the only <code>h1</code> of the page.
    </p>
    <Code label='src/pages/Pricing.jsx' icon='file' code={`import { Page } from '../components/Page'

const Pricing = () => (
  <Page title='Pricing' meta='Simple plans for every team.'
    description='Plans and prices for teams of every size.'>
    <section className='m-b-48'>
      <h2 className='title'>Plans</h2>
      <p>…</p>
    </section>
  </Page>
)

export { Pricing }`} />

    <h2 id='route'>Add the route</h2>
    <p>Three places know about a page:</p>
    <ol>
      <li><code>src/App.jsx</code>: the route itself.</li>
      <li><code>src/entry-server.jsx</code>: the <code>routes</code> list the build prerenders.</li>
      <li><code>public/sitemap.xml</code>: the address for search engines.</li>
    </ol>
    <Code label='src/App.jsx' icon='file' code={`<Route path='pricing' element={<Pricing />} />`} />
    <div className='alert yellow'>
      <PiWarning aria-hidden='true' />
      <p>
        Pages are rendered once at build time. Code that runs during render must not touch
        <code> window</code>, <code>document</code> or <code>localStorage</code>. Read them in
        <code> useEffect</code>.
      </p>
    </div>

    <h2 id='meta'>Title and description</h2>
    <p>
      <code>title</code> becomes <em>Pricing — Avior</em> in the browser tab and in Open
      Graph. <code>description</code> becomes the meta description. Without it a page inherits
      the site description and looks the same as every other page in search results.
    </p>

    <h2 id='menus'>Menus</h2>
    <p>
      Menus are data in <code>src/data/menu.js</code>. An anchor such as <code>#showcase</code>
      scrolls to the section on the home page and works from every other page too.
    </p>
  </DocsLayout>
)

export { Pages }
