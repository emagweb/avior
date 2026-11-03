import { DocsLayout } from '../../components/DocsLayout'
import { Example, Variables, Table } from '../../components/Example'
import { Tabs } from '../../components/Tabs'

const TabsPage = () => (
  <DocsLayout
    slug='tabs'
    source='TabsPage'
    title='Tabs'
    lead='A row of tabs and one visible panel. Keyboard and screen readers work out of the box.'
    description='Avior tabs: the Tabs React component, tabs-list and tabs-panel, keyboard support and the variables that tune height, radius and colours.'
    toc={[{ id: 'example', title: 'Example' }, { id: 'keyboard', title: 'Keyboard' }, { id: 'parts', title: 'Parts' }, { id: 'variables', title: 'Variables' }]}>

    <h2 id='example'>Example</h2>
    <Example code={`import { Tabs } from './components/Tabs'

<Tabs
  label='Plans'
  items={[
    { label: 'Monthly', content: <p>Billed every month.</p> },
    { label: 'Yearly', content: <p>Two months free.</p> },
  ]}
/>`}>
      <Tabs
        label='Plans'
        items={[
          { label: 'Monthly', content: <p className='m-b-0'>Billed every month. Cancel at any time.</p> },
          { label: 'Yearly', content: <p className='m-b-0'>Billed once a year, two months free.</p> },
          { label: 'Team', content: <p className='m-b-0'>One invoice for every seat.</p> },
        ]}
      />
    </Example>

    <h2 id='keyboard'>Keyboard</h2>
    <p>
      Tab moves into the list and on to the panel. Left and right arrows move between tabs,
      Home and End jump to the first and the last. Only the active tab is in the tab order.
    </p>

    <h2 id='parts'>Parts</h2>
    <Table
      head={['Class', 'What it is']}
      rows={[
        ['tabs', 'the wrapper'],
        ['tabs-list', 'the row of buttons, role tablist'],
        ['tabs-panel', 'one panel, role tabpanel, hidden unless active'],
      ]}
    />
    <p>The active button is styled by <code>aria-selected</code>, not by a class.</p>

    <h2 id='variables'>Variables</h2>
    <Variables rows={[
      ['$tabs-gap', '4px', 'space between tabs'],
      ['$tabs-padding', '4px', 'padding of the list'],
      ['$tabs-height', '32px', 'height of a tab'],
      ['$tabs-radius', '$radius', 'radius of the list'],
      ['$tabs-background', 'var(--surface)', 'background of the list'],
      ['$tabs-active', 'var(--page)', 'background of the active tab'],
      ['$tabs-shadow', '0 1px 2px rgba($dark, .08)', 'shadow of the active tab'],
    ]} />
  </DocsLayout>
)

export { TabsPage }
