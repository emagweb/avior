import { DocsLayout } from '../../components/DocsLayout'
import { Example, Variables, Table } from '../../components/Example'
import { Accordion } from '../../components/Accordion'

const AccordionPage = () => (
  <DocsLayout
    slug='accordion'
    source='AccordionPage'
    title='Accordion'
    lead='Blocks that open and close. Built on details and summary, so it works without JavaScript.'
    description='The Avior accordion: accordion, accordion-item, accordion-head and accordion-body on native details, and the variables that tune it.'
    toc={[{ id: 'example', title: 'Example' }, { id: 'markup', title: 'Markup' }, { id: 'parts', title: 'Parts' }, { id: 'variables', title: 'Variables' }]}>

    <h2 id='example'>Example</h2>
    <Example code={`import { Accordion } from './components/Accordion'

<Accordion items={[
  { title: 'Is it free?', body: <p>Yes, under the MIT licence.</p>, open: true },
  { title: 'Does it need a backend?', body: <p>No.</p> },
]} />`}>
      <Accordion items={[
        { title: 'Is Avior free?', body: <p>Yes. It is open source under the MIT licence, for personal and client work.</p>, open: true },
        { title: 'Does it need a backend?', body: <p>No. The build is a folder of static files for any host.</p> },
        { title: 'Can I use it with an AI agent?', body: <p>Yes. AGENTS.md tells the agent how the system is meant to be used.</p> },
      ]} />
    </Example>

    <h2 id='markup'>Markup</h2>
    <p>The component writes plain HTML. Without React it is the same markup:</p>
    <Example file='index.html' code={`<div class="accordion">
  <details class="accordion-item" open>
    <summary class="accordion-head">Is Avior free?</summary>
    <div class="accordion-body">Yes.</div>
  </details>
</div>`}>
      <div className='accordion'>
        <details className='accordion-item'>
          <summary className='accordion-head'>Is Avior free?</summary>
          <div className='accordion-body'><p>Yes.</p></div>
        </details>
      </div>
    </Example>

    <h2 id='parts'>Parts</h2>
    <Table
      head={['Class', 'What it is']}
      rows={[
        ['accordion', 'a column of items with a gap'],
        ['accordion-item', 'one details element, bordered'],
        ['accordion-head', 'the summary: the question and the arrow'],
        ['accordion-body', 'the answer, muted'],
      ]}
    />

    <h2 id='variables'>Variables</h2>
    <Variables rows={[
      ['$accordion-gap', '8px', 'space between items'],
      ['$accordion-padding', '16px 20px', 'padding of the head'],
      ['$accordion-radius', '12px', 'corner radius'],
      ['$accordion-line', 'var(--line)', 'border colour'],
      ['$accordion-background', 'var(--page)', 'background'],
    ]} />
  </DocsLayout>
)

export { AccordionPage }
