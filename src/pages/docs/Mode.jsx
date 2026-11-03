import { DocsLayout } from '../../components/DocsLayout'
import { Code } from '../../components/Code'
import { Table } from '../../components/Example'

const ModePage = () => (
  <DocsLayout
    slug='mode'
    source='Mode'
    title='Light and dark'
    lead='Both modes come from seven custom properties. Write a component once and it works in both.'
    description='How light and dark mode work in Avior: the dark class on body, the custom properties, the semantic helpers and the switch.'
    toc={[{ id: 'how', title: 'How it works' }, { id: 'properties', title: 'Properties' }, { id: 'helpers', title: 'Helpers that follow the mode' }, { id: 'switch', title: 'The switch' }]}>

    <h2 id='how'>How it works</h2>
    <p>
      <code>components/_mode.sass</code> sets custom properties on <code>body</code> and
      overrides them on <code>body.dark</code>. Components read the properties, so there is
      no second set of rules for the dark mode.
    </p>
    <Code label='components/_card.sass' icon='file' code={`.card
  color: var(--text)
  border: 1px solid var(--line)
  background-color: var(--page)`} />

    <h2 id='properties'>Properties</h2>
    <Table
      head={['Property', 'Light', 'Dark']}
      rows={[
        ['--page', '$white', '$night'],
        ['--surface', '$light', '$night-surface'],
        ['--text', '$dark', '$night-text'],
        ['--muted', '$medium', '$night-muted'],
        ['--line', '$border', '$night-line'],
        ['--line-soft', '$border-soft', '$night-line'],
        ['--accent', '$accent', '$night-accent'],
      ]}
    />

    <h2 id='helpers'>Helpers that follow the mode</h2>
    <p>
      <code>bg-page</code>, <code>bg-surface</code>, <code>c-text</code>, <code>c-muted</code>,
      <code> bc-line</code> and <code>bc-line-soft</code> read the properties. Palette helpers
      such as <code>bg-white</code> or <code>c-dark</code> keep their exact colour in both
      modes. <code>c-accent</code> is the one exception: in dark mode it switches to
      <code> $night-accent</code>, because the light accent is too dark to read there.
    </p>

    <h2 id='switch'>The switch</h2>
    <p>
      <code>components/Mode.jsx</code> is the button in the header. It keeps the choice in
      <code> localStorage</code> under <code>avior-mode</code> and falls back to the system
      setting. An inline script in <code>public/index.html</code> applies the class before the
      page is painted, so a dark reader never sees a white flash.
    </p>
  </DocsLayout>
)

export { ModePage as Mode }
