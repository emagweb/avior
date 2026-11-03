import { PiLightbulb } from 'react-icons/pi'
import { DocsLayout } from '../../components/DocsLayout'
import { Code } from '../../components/Code'
import { issues } from '../../data/links'

const Contributing = () => (
  <DocsLayout
    slug='contributing'
    source='Contributing'
    title='Contributing'
    lead='Avior grows the way it started: someone needs a part, writes it so others can tune it, and shares it.'
    description='How to contribute to Avior: the principles, how names are chosen, how to write a component driven by variables, and how to send a pull request.'
    toc={[{ id: 'principles', title: 'Principles' }, { id: 'names', title: 'Names' }, { id: 'component', title: 'Write a component' }, { id: 'pull-request', title: 'Send a pull request' }]}>

    <h2 id='principles'>Principles</h2>
    <ul>
      <li>Every change is a change to the system. Could a site with completely different content use it?</li>
      <li>A component changes its look through variables only. Nobody should need to edit it.</li>
      <li>No CSS framework, grid library or component library inside. Avior is the library.</li>
      <li>Read <code>docs/decisions.md</code> before deleting a rule that looks redundant.</li>
    </ul>

    <h2 id='names'>Names</h2>
    <p>
      A helper is a short alternative to one property: <code>aic</code>, <code>p-t-24</code>. A
      component takes the word almost everyone already uses for it: <code>card</code>,
      <code> tabs</code>, <code>accordion</code>. A part is the component plus one word, written
      by nesting: <code>card-head</code>.
    </p>
    <div className='alert'>
      <PiLightbulb aria-hidden='true' />
      <p>
        New names are agreed before they are used. Propose them in an{' '}
        <a href={issues} target='_blank' rel='noreferrer'>issue</a>, with a line on why each
        reads well to someone who has never seen Avior.
      </p>
    </div>

    <h2 id='component'>Write a component</h2>
    <p>
      A component is one file in <code>src/styles/components/</code>. Variables come first,
      each with <code>!default</code> and prefixed with the name. Colours come from the mode
      properties, so it works in light and dark without a second set of rules.
    </p>
    <Code label='components/_card.sass' icon='file' code={`$card-padding: 24px !default
$card-radius: 12px !default

.card
  padding: $card-padding
  border: 1px solid var(--line)
  border-radius: $card-radius
  &-head
    margin-bottom: 16px
  &-foot
    border-top: 1px solid var(--line-soft)`} />
    <p>
      Add it to <code>custom.sass</code> before the grid and the helpers, and give it a page in
      the docs: an example, the markup and the table of its variables.
    </p>

    <h2 id='pull-request'>Send a pull request</h2>
    <ol>
      <li>Branch from <code>main</code>, one idea per branch.</li>
      <li>Run <code>yarn build</code> and make sure it passes.</li>
      <li>Check the page in light and dark mode, on a phone and on a desktop.</li>
      <li>Write the commit message in English, in the imperative mood.</li>
    </ol>
  </DocsLayout>
)

export { Contributing }
