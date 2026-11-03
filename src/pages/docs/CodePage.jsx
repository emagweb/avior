import { DocsLayout } from '../../components/DocsLayout'
import { Example, Variables } from '../../components/Example'
import { Code } from '../../components/Code'

const CodePage = () => (
  <DocsLayout
    slug='code'
    source='CodePage'
    title='Code'
    lead='Inline code in text, and a block with a title, a copy button and optional tabs.'
    description='The Avior code block: inline code, the Code component with a copy button, tabs for package managers, and its variables.'
    toc={[{ id: 'inline', title: 'Inline' }, { id: 'block', title: 'Block' }, { id: 'tabs', title: 'With tabs' }, { id: 'variables', title: 'Variables' }]}>

    <h2 id='inline'>Inline</h2>
    <p>A <code>code</code> element in text gets a soft frame and the mono font.</p>

    <h2 id='block'>Block</h2>
    <Example code={`import { Code } from './components/Code'

<Code code='yarn build' />
<Code code={source} label='Card.jsx' icon='file' />`}>
      <Code code='yarn build' />
      <Code code={`<a className='card' href='/docs'>…</a>`} label='Card.jsx' icon='file' />
    </Example>
    <p>
      The block follows the mode: light on a light page, dark on a dark one. Copy puts the
      text on the clipboard and says so for two seconds.
    </p>

    <h2 id='tabs'>With tabs</h2>
    <Example code={`<Code variants={[
  { label: 'yarn', code: 'yarn add react-icons' },
  { label: 'npm', code: 'npm install react-icons' },
  { label: 'pnpm', code: 'pnpm add react-icons' },
]} />`}>
      <Code variants={[
        { label: 'yarn', code: 'yarn add react-icons' },
        { label: 'npm', code: 'npm install react-icons' },
        { label: 'pnpm', code: 'pnpm add react-icons' },
      ]} />
    </Example>

    <h2 id='variables'>Variables</h2>
    <Variables rows={[
      ['$code-background', 'var(--surface)', 'background of the block'],
      ['$code-bar', 'var(--page)', 'background of the title bar'],
      ['$code-text', 'var(--text)', 'text colour'],
      ['$code-muted', 'var(--muted)', 'title and buttons'],
      ['$code-line', 'var(--line)', 'border and active tab'],
      ['$code-radius', '12px', 'corner radius'],
    ]} />
  </DocsLayout>
)

export { CodePage }
