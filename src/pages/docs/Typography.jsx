import { DocsLayout } from '../../components/DocsLayout'
import { Table } from '../../components/Example'
import { Code } from '../../components/Code'

const scale = [
  ['title-intro', '56 / 64', '600', 'the hero h1, one per site'],
  ['title-intro-sub', '20 / 32', '400', 'the line under the hero h1'],
  ['title-page', '38 / 48', '600', 'h1 of an inner page, set by Page'],
  ['title-section', '30 / 40', '600', 'a section heading'],
  ['title', '24 / 32', '600', 'a heading inside text'],
  ['title-lead', '20 / 32', '400', 'a lead paragraph'],
  ['title-sub', '20 / 28', '600', 'a subheading'],
  ['title-card', '16 / 24', '600', 'a card or list heading'],
  ['title-mini', '14 / 20', '600', 'a label at small size'],
  ['title-label', '12 / 20', '600', 'an uppercase label above a heading'],
]

const Typography = () => (
  <DocsLayout
    slug='typography'
    source='Typography'
    title='Typography'
    lead='A type scale on a 4px grid. A heading takes one class from the title family and nothing else.'
    description='The Avior type scale: the title family with sizes, line heights and roles, and how headings step down on small screens.'
    toc={[{ id: 'scale', title: 'Scale' }, { id: 'samples', title: 'Samples' }, { id: 'steps', title: 'On small screens' }, { id: 'rules', title: 'Rules' }]}>

    <h2 id='scale'>Scale</h2>
    <p>Sizes and line heights in pixels. Every line height is a multiple of four.</p>
    <Table head={['Class', 'Size / line', 'Weight', 'Role']} rows={scale} />

    <h2 id='samples'>Samples</h2>
    <div className='bc-line bw-1 r-12 p-y-32 p-x-24 m-b-24'>
      <p className='title-label'>title-label</p>
      <p className='title-section'>title-section</p>
      <p className='title'>title</p>
      <p className='title-sub'>title-sub</p>
      <p className='title-lead c-muted'>title-lead, a lead paragraph that introduces a section.</p>
      <p className='title-card'>title-card</p>
      <p className='title-mini'>title-mini</p>
      <p className='m-b-0'>Body text, 16 / 24, from $text and $line.</p>
    </div>

    <h2 id='steps'>On small screens</h2>
    <Code label='Sizes in px' icon='file' code={`              desktop   md    sm    xs
title-intro        56   48    40    32
title-page         38         30
title-section      30         24
title-lead         20         18`} />

    <h2 id='rules'>Rules</h2>
    <ul>
      <li>One class from the family per heading. The class owns size, weight, line height and the gap below.</li>
      <li>Alignment and width go on the element around the heading, not on the heading.</li>
      <li><code>title-intro</code> belongs to the hero. Below it the largest heading is <code>title-section</code>.</li>
      <li>No title sets a font: the face comes from <code>$basic</code>, and <code>ff-intro</code> switches to <code>$intro</code>.</li>
    </ul>
  </DocsLayout>
)

export { Typography }
