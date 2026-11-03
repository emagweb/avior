import { PiRocketLaunch, PiArrowRight } from 'react-icons/pi'
import { DocsLayout } from '../../components/DocsLayout'
import { Example, Variables, Table } from '../../components/Example'

const CardPage = () => (
  <DocsLayout
    slug='card'
    source='Card'
    title='Card'
    lead='A bordered block with an optional head, body and foot. As a link it lifts on hover.'
    description='The Avior card: card, card-head, card-body and card-foot, the link variant and the variables that tune padding, radius and lines.'
    toc={[{ id: 'example', title: 'Example' }, { id: 'parts', title: 'Parts' }, { id: 'variables', title: 'Variables' }]}>

    <h2 id='example'>Example</h2>
    <Example code={`<a className='card' href='/docs/installation'>
  <div className='card-head'>
    <PiRocketLaunch className='c-accent' />
    <h3 className='title-card m-b-0'>Use it</h3>
  </div>
  <p className='card-body'>Clone, install, start.</p>
  <span className='card-foot'>Installation <PiArrowRight /></span>
</a>`}>
      <div className='row flex-16'>
        <a href='/docs/installation' className='col-6 card'>
          <div className='card-head'>
            <PiRocketLaunch className='c-accent' aria-hidden='true' />
            <h3 className='title-card m-b-0'>Use it</h3>
          </div>
          <p className='card-body'>Clone the repository, run two commands and build on a working base.</p>
          <span className='card-foot'>Installation<PiArrowRight aria-hidden='true' /></span>
        </a>
        <div className='col-6 card'>
          <h3 className='title-card'>Plain card</h3>
          <p className='card-body'>No head and no foot: a border, a radius and padding.</p>
        </div>
      </div>
    </Example>

    <h2 id='parts'>Parts</h2>
    <Table
      head={['Class', 'What it is']}
      rows={[
        ['card', 'the block: border, radius, padding, a column of its parts'],
        ['card-head', 'a row of an icon and a heading, with a gap below'],
        ['card-body', 'the text, muted, takes the free height'],
        ['card-foot', 'a row at the bottom, under a hairline'],
      ]}
    />
    <p>
      On an <code>a</code> the card gets a hover border and shadow. Cards in one row line up
      their feet, because the body takes the free height.
    </p>

    <h2 id='variables'>Variables</h2>
    <Variables rows={[
      ['$card-padding', '24px', 'inner padding'],
      ['$card-gap', '16px', 'space between head, body and foot'],
      ['$card-radius', '12px', 'corner radius'],
      ['$card-line', 'var(--line)', 'border colour'],
      ['$card-background', 'var(--page)', 'background'],
      ['$card-hover-line', 'var(--muted)', 'border colour of a link card on hover'],
      ['$card-shadow', '0 8px 24px rgba($dark, .06)', 'shadow of a link card on hover'],
    ]} />
  </DocsLayout>
)

export { CardPage as Card }
