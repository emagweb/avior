import { PiInfo } from 'react-icons/pi'
import { DocsLayout } from '../../components/DocsLayout'
import { Code } from '../../components/Code'
import { Table } from '../../components/Example'

const Build = () => (
  <DocsLayout
    slug='build'
    source='Build'
    title='Build and publish'
    lead='One command gives you a folder of static HTML, every page prerendered, only the CSS you use.'
    description='How an Avior site is built: prerendered HTML for every route, unused classes removed, the self-hosted font, and how to publish to Netlify or Cloudflare Pages.'
    toc={[{ id: 'build', title: 'Build' }, { id: 'css', title: 'Only the CSS you use' }, { id: 'publish', title: 'Publish' }, { id: 'check', title: 'Before you publish' }]}>

    <h2 id='build'>Build</h2>
    <Code code='yarn build' />
    <p>
      Rsbuild bundles the site, then <code>scripts/prerender.mjs</code> renders every route to
      its own HTML file with its title and description. The browser shows the page before
      JavaScript arrives, and crawlers see the whole content.
    </p>
    <Code label='build/' icon='file' code={`index.html
docs/index.html
docs/installation/index.html
…
404.html          noindex`} />

    <h2 id='css'>Only the CSS you use</h2>
    <p>
      In <code>yarn start</code> every helper exists, so any class works the moment you type
      it. The build keeps only the classes it finds as text in <code>src</code> and
      <code> public/index.html</code>. The ranges can be as wide as you like.
    </p>
    <div className='alert blue'>
      <PiInfo aria-hidden='true' />
      <p>
        Write class names whole. <code>{"'bg-' + name"}</code> is invisible to the build and
        the class disappears. If a name has to be built, add a pattern to <code>safelist</code>
        in <code>rsbuild.config.js</code>. <code>PURGE=off yarn build</code> builds without
        removing anything, to compare.
      </p>
    </div>

    <h2 id='publish'>Publish</h2>
    <p>
      The <code>build</code> folder works on any static host. Netlify and Cloudflare Pages
      read two files from it:
    </p>
    <Table
      head={['File', 'What it does']}
      rows={[
        ['404.html', 'served with a 404 status for unknown addresses'],
        ['_headers', 'caches the hashed files in /static/ for a year'],
      ]}
    />

    <h2 id='check'>Before you publish</h2>
    <Code code='yarn check' />
    <p>
      Lists every placeholder left: <code>example.com</code> in the sitemap and robots.txt,
      relative Open Graph URLs and the missing canonical link.
    </p>
  </DocsLayout>
)

export { Build }
