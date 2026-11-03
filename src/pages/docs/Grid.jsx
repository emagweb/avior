import { DocsLayout } from '../../components/DocsLayout'
import { Example, Table } from '../../components/Example'

const box = 'bg-surface bc-line bw-1 r-8 p-y-12 tc fz-14'

const Grid = () => (
  <DocsLayout
    slug='grid'
    source='Grid'
    title='Grid'
    lead='container, row and col: the three levels everyone already knows, on flexbox with a native gap.'
    description='The Avior grid: container, row, col-1 to col-12, col and col-auto, with flex-N gaps that each column subtracts correctly.'
    toc={[{ id: 'columns', title: 'Columns' }, { id: 'gap', title: 'Gap' }, { id: 'auto', title: 'Equal and auto' }, { id: 'classes', title: 'Classes' }]}>

    <h2 id='columns'>Columns</h2>
    <p>
      Twelve columns by default. <code>col-6</code> is half, <code>col-4</code> a third. Every
      column goes full width below <code>sm</code>.
    </p>
    <Example code={`<div className='container'>
  <div className='row flex-16'>
    <div className='col-8'>col-8</div>
    <div className='col-4'>col-4</div>
  </div>
</div>`}>
      <div className='row flex-16 m-b-16'>
        <div className='col-8'><div className={box}>col-8</div></div>
        <div className='col-4'><div className={box}>col-4</div></div>
      </div>
      <div className='row flex-16'>
        <div className='col-4'><div className={box}>col-4</div></div>
        <div className='col-4'><div className={box}>col-4</div></div>
        <div className='col-4'><div className={box}>col-4</div></div>
      </div>
    </Example>

    <h2 id='gap'>Gap</h2>
    <p>
      The gap is written on the row: <code>row flex-24</code>. <code>flex-24-40</code> sets
      24px between columns and 40px between rows. Each column subtracts its share of the gap,
      so the row never wraps by accident.
    </p>

    <h2 id='auto'>Equal and auto</h2>
    <Example code={`<div className='row flex-16'>
  <div className='col'>col</div>
  <div className='col'>col</div>
  <div className='col-auto'>col-auto</div>
</div>`}>
      <div className='row flex-16'>
        <div className='col'><div className={box}>col</div></div>
        <div className='col'><div className={box}>col</div></div>
        <div className='col-auto'><div className={`${box} p-x-16`}>col-auto</div></div>
      </div>
    </Example>

    <h2 id='classes'>Classes</h2>
    <Table
      head={['Class', 'What it does']}
      rows={[
        ['container', 'centred, max-width $content, $gutter on the sides'],
        ['container fluid', 'full width, no side padding'],
        ['row', 'display: flex, wraps'],
        ['col-1 … col-12', 'N of $columns, minus its share of the gap'],
        ['col', 'equal share of the row'],
        ['col-auto', 'as wide as its content'],
        ['flex-N', 'display: flex with an N px gap, 0–160, step 4'],
        ['flex-X-Y', 'column gap X, row gap Y, up to 64'],
      ]}
    />
    <p>
      A layout that changes on tablets says so in its component Sass with the
      <code> =v-*</code> mixins. There are no breakpoint classes like <code>col-md-6</code>.
    </p>
  </DocsLayout>
)

export { Grid }
