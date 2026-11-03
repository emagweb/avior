import { DocsLayout } from '../../components/DocsLayout'
import { Example, Variables } from '../../components/Example'

const Badge = () => (
  <DocsLayout
    slug='badge'
    source='Badge'
    title='Badge'
    lead='A small label for a status, a category or a version.'
    description='The Avior badge: a neutral label and colour variants from the palette, and the variables that tune height, padding and tint.'
    toc={[{ id: 'example', title: 'Example' }, { id: 'variables', title: 'Variables' }]}>

    <h2 id='example'>Example</h2>
    <Example code={`<span className='badge'>v0.1</span>
<span className='badge green'>Hired</span>
<span className='badge blue'>Offer</span>`}>
      <div className='flex-8 rowrap'>
        <span className='badge'>v0.1</span>
        <span className='badge green'>Hired</span>
        <span className='badge blue'>Offer</span>
        <span className='badge pink'>Interview</span>
        <span className='badge yellow'>Screening</span>
        <span className='badge violet'>New</span>
      </div>
    </Example>
    <p>Like the alert, a colour variant is mixed with the page, so it works in both modes.</p>

    <h2 id='variables'>Variables</h2>
    <Variables rows={[
      ['$badge-height', '24px', 'height'],
      ['$badge-padding', '0 8px', 'inner padding'],
      ['$badge-radius', '6px', 'corner radius'],
      ['$badge-tint', '12%', 'share of the colour in the background'],
      ['$badge-edge', '32%', 'share of the colour in the border'],
    ]} />
  </DocsLayout>
)

export { Badge }
