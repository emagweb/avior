import { DocsLayout } from '../../components/DocsLayout'
import { Code } from '../../components/Code'

const Structure = () => (
  <DocsLayout
    slug='structure'
    source='Structure'
    title='Project structure'
    lead='Where things live, and which files you are expected to change.'
    description='The folders and files of an Avior project: pages, components, data, the Sass engine and the build scripts.'
    toc={[{ id: 'tree', title: 'Folders' }, { id: 'styles', title: 'Styles' }, { id: 'order', title: 'Load order' }]}>

    <h2 id='tree'>Folders</h2>
    <Code label='my-site' icon='file' code={`src/
  App.jsx               routes
  pages/                one file per page, sections in pages/parts/
  components/           Header, Footer, Page, Mode, Code, Tabs, Accordion
  data/menu.js          header and footer menus
  hooks/                useMeta, useGoogleAnalytics
  assets/               fonts, images, logo
  styles/               the Sass engine and components
  entry-server.jsx      renders a route to HTML for the prerender
scripts/
  prerender.mjs         writes the HTML for every route after the build
  check-publish.mjs     yarn check
public/                 index.html, icons, robots.txt, sitemap.xml`} />

    <h2 id='styles'>Styles</h2>
    <Code label='src/styles' icon='file' code={`custom.sass             the only entry point
inc/
  _variables.sass       palette, type, sizes, breakpoints, ranges
  _responsive.sass      =v-xl =v-lg =v-md =v-sm =v-xs
  _grid.sass            container, row, col, flex-N
  _helpers.sass         generated helpers, loaded last
components/
  _mode.sass            light and dark custom properties
  _buttons.sass  _card.sass  _tabs.sass  _accordion.sass
  _alert.sass    _badge.sass _code.sass  _titles.sass
  _header.sass   _menu.sass  _footer.sass`} />
    <p>
      <code>inc/</code> is the engine. <code>components/</code> are the parts built on it. A
      project changes <code>_variables.sass</code> and the variables at the top of each
      component, and leaves the rest alone.
    </p>

    <h2 id='order'>Load order</h2>
    <p>
      <code>custom.sass</code> loads the reset, then the components, then the grid, then the
      helpers. Helpers come last on purpose: with equal specificity the later rule wins, so a
      helper on an element always beats the component underneath it.
    </p>
  </DocsLayout>
)

export { Structure }
