import { PiInfo } from 'react-icons/pi'
import { DocsLayout } from '../../components/DocsLayout'
import { Code } from '../../components/Code'
import { Table } from '../../components/Example'
import { clone } from '../../data/links'

const Installation = () => (
  <DocsLayout
    slug='installation'
    source='Installation'
    title='Installation'
    lead='Clone the repository, install, start. About five minutes from nothing to a running site.'
    description='Install Avior: requirements, the clone and install commands, and the scripts that run, build and check the site.'
    toc={[{ id: 'requirements', title: 'Requirements' }, { id: 'create', title: 'Create a project' }, { id: 'scripts', title: 'Scripts' }]}>

    <h2 id='requirements'>Requirements</h2>
    <ul>
      <li>Node.js 20 or later. The repository pins <code>20.18.1</code> in <code>.nvmrc</code>.</li>
      <li>Yarn, any version. Avior ships Yarn 4 in <code>.yarn/releases</code> and uses it automatically.</li>
      <li>macOS, Windows or Linux.</li>
    </ul>
    <div className='alert blue'>
      <PiInfo aria-hidden='true' />
      <p>No Yarn yet? Run <code>corepack enable</code> once. Corepack comes with Node.</p>
    </div>

    <h2 id='create'>Create a project</h2>
    <p>Clone the repository into a folder named after your site:</p>
    <Code code={clone} />
    <p>Install the dependencies and start the dev server:</p>
    <Code code={'cd my-site\nyarn\nyarn start'} />
    <p>
      The site opens on <code>localhost:3000</code> and reloads on every save. Every helper is
      available while you work, so any class you type shows up at once.
    </p>

    <h2 id='scripts'>Scripts</h2>
    <Table
      head={['Command', 'What it does']}
      rows={[
        ['yarn start', 'Dev server with live reload, every generated class available.'],
        ['yarn build', 'Production build into build/: every route prerendered to HTML, unused classes removed.'],
        ['yarn preview', 'Serves the production build, to check it before publishing.'],
        ['yarn check', 'Lists placeholders left before publishing: domain, Open Graph image, canonical link.'],
      ]}
    />
    <p>Next, set the look of the site in <a href='/docs/variables'>variables</a>.</p>
  </DocsLayout>
)

export { Installation }
