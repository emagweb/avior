import { PiArrowRightBold } from 'react-icons/pi'
import { DocsLayout } from '../../components/DocsLayout'
import { Example, Table } from '../../components/Example'

const Button = () => (
  <DocsLayout
    slug='button'
    source='Button'
    title='Button'
    lead='One class, a colour from the palette, and outline or mini when you need them.'
    description='The Avior button: solid and outline variants in every palette colour, the mini size, icons and radius overrides.'
    toc={[{ id: 'variants', title: 'Variants' }, { id: 'colours', title: 'Colours' }, { id: 'sizes', title: 'Sizes' }, { id: 'classes', title: 'Classes' }]}>

    <h2 id='variants'>Variants</h2>
    <p>
      <code>button</code> takes the accent. <code>dark</code> follows the mode: dark on a light
      page, light on a dark one. <code>outline</code> keeps the border and drops the fill.
    </p>
    <Example code={`<a className='button'>Accent</a>
<a className='button dark'>Get started</a>
<a className='button dark outline'>GitHub</a>
<a className='button outline'>Outline</a>`}>
      <div className='flex-12 rowrap'>
        <a href='#variants' className='button'>Accent</a>
        <a href='#variants' className='button dark'>Get started<PiArrowRightBold aria-hidden='true' /></a>
        <a href='#variants' className='button dark outline'>GitHub</a>
        <a href='#variants' className='button outline'>Outline</a>
      </div>
    </Example>

    <h2 id='colours'>Colours</h2>
    <p>
      Every palette name is a variant. A light colour, listed in <code>$light-colors</code>,
      gets a dark label.
    </p>
    <Example code={`<a className='button blue'>blue</a>
<a className='button green outline'>green outline</a>`}>
      <div className='flex-12 rowrap'>
        <a href='#colours' className='button blue'>blue</a>
        <a href='#colours' className='button pink'>pink</a>
        <a href='#colours' className='button green'>green</a>
        <a href='#colours' className='button yellow'>yellow</a>
        <a href='#colours' className='button blue outline'>blue outline</a>
        <a href='#colours' className='button green outline'>green outline</a>
      </div>
    </Example>

    <h2 id='sizes'>Sizes</h2>
    <Example code={`<a className='button dark'>40px</a>
<a className='button dark mini'>32px</a>
<a className='button dark r-0'>r-0</a>`}>
      <div className='flex-12 rowrap aic'>
        <a href='#sizes' className='button dark'>40px</a>
        <a href='#sizes' className='button dark mini'>32px</a>
        <a href='#sizes' className='button dark r-0'>r-0</a>
        <a href='#sizes' className='button dark outline r-20'>r-20</a>
      </div>
    </Example>

    <h2 id='classes'>Classes</h2>
    <Table
      head={['Class', 'What it does']}
      rows={[
        ['button', '40px tall, 20px side padding, $radius, filled with $accent'],
        ['dark', 'filled with the text colour of the mode'],
        ['outline', 'border only, fills in on hover'],
        ['mini', '32px tall, 12px side padding, 14px text'],
        ['blue, green, …', 'any name from $palette'],
        ['r-N', 'any radius helper overrides $radius'],
      ]}
    />
  </DocsLayout>
)

export { Button }
