import { PiLightning, PiSliders, PiPuzzlePiece, PiGitPullRequest, PiArrowRight } from 'react-icons/pi'
import { DocsLayout } from '../../components/DocsLayout'
import { Code } from '../../components/Code'
import { clone } from '../../data/links'

const cards = [
  { Icon: PiSliders, title: 'Make it yours', text: 'Colours, type, spacing and component settings, all in one file.', link: 'Variables', href: '/docs/variables' },
  { Icon: PiPuzzlePiece, title: 'Components', text: 'Button, card, tabs, accordion, alert, badge and code, each tuned by variables.', link: 'Browse components', href: '/docs/button' },
  { Icon: PiGitPullRequest, title: 'Contribute', text: 'Add a component the way the system expects, and send a pull request.', link: 'How to contribute', href: '/docs/contributing' },
]

const Introduction = () => (
  <DocsLayout
    slug=''
    source='Introduction'
    title='Introduction'
    lead='Avior is a design system for React and Rsbuild. One engine, and every site built on it looks like its own content.'
    description='Avior documentation: install the design system, set your variables, use the helpers and components, build and publish.'
    toc={[{ id: 'what', title: 'What Avior is' }, { id: 'three-layers', title: 'Three layers' }, { id: 'next', title: 'Where to go next' }]}>

    <div className='card m-b-24'>
      <div className='card-head'>
        <PiLightning className='c-accent' aria-hidden='true' />
        <h2 className='title-card m-b-0'>Quick start</h2>
      </div>
      <Code code={`${clone}\ncd my-site\nyarn\nyarn start`} />
      <p className='card-body'>
        The site opens on <code>localhost:3000</code>. Then continue with{' '}
        <a href='/docs/installation'>installation</a>.
      </p>
    </div>

    <h2 id='what'>What Avior is</h2>
    <p>
      Most frameworks make sites that look related. Avior is built the other way round: it
      gives you the means and no look of its own. A bakery, a law firm and a developer tool
      built on it should have nothing in common except clean code.
    </p>
    <p>
      It grew out of real projects. Each site added what it needed, and what proved useful
      everywhere became part of the system.
    </p>

    <h2 id='three-layers'>Three layers</h2>
    <ul>
      <li><strong>Variables</strong> decide how the site looks: palette, type, spacing, radius, widths.</li>
      <li><strong>Helpers</strong> take values straight from the design: <code>p-y-48</code> is 48px top and bottom.</li>
      <li><strong>Components</strong> cover what helpers cannot, and each one is tuned by its own variables.</li>
    </ul>

    <h2 id='next'>Where to go next</h2>
    <div className='row flex-16'>
      {cards.map(({ Icon, title, text, link, href }) => (
        <a key={title} href={href} className='col-4 card'>
          <div className='card-head'>
            <Icon className='c-accent' aria-hidden='true' />
            <h3 className='title-card m-b-0'>{title}</h3>
          </div>
          <p className='card-body'>{text}</p>
          <span className='card-foot'>{link}<PiArrowRight aria-hidden='true' /></span>
        </a>
      ))}
    </div>
  </DocsLayout>
)

export { Introduction }
