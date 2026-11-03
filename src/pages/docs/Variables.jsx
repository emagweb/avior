import { PiLightbulb } from 'react-icons/pi'
import { DocsLayout } from '../../components/DocsLayout'
import { Code } from '../../components/Code'
import { Variables as Rows } from '../../components/Example'

const palette = [
  ['$dark', '#16141F', 'text in light mode, dark buttons'],
  ['$medium', '#5E5A70', 'muted text in light mode'],
  ['$grey', '#F0EFF5', 'light grey surfaces'],
  ['$light', '#F7F7FA', 'tinted sections in light mode'],
  ['$white', '#FFFFFF', 'page background in light mode'],
  ['$violet', '#5B3DF5', 'the default accent'],
  ['$blue', '#1677FF', 'palette colour'],
  ['$pink', '#C81D6B', 'palette colour'],
  ['$red', '#C42B3D', 'palette colour'],
  ['$orange', '#D9480F', 'palette colour'],
  ['$yellow', '#FAAD14', 'palette colour, light'],
  ['$green', '#0E7A4F', 'palette colour'],
  ['$accent', '$violet', 'links, focus rings, highlights'],
  ['$theme', '$white', 'an alias to repoint per project'],
]

const night = [
  ['$night', '#0E0D14', 'page background in dark mode'],
  ['$night-surface', '#17151F', 'tinted sections in dark mode'],
  ['$night-line', '#2A2736', 'borders in dark mode'],
  ['$night-muted', '#9B97AD', 'muted text in dark mode'],
  ['$night-text', '#F1EFF8', 'text in dark mode'],
  ['$night-accent', '#A99BFF', 'accent text in dark mode'],
  ['$border', '#E4E2EC', 'borders in light mode'],
  ['$border-soft', '#EEEDF3', 'hairlines in light mode'],
]

const layout = [
  ['$basic', "'Google Sans Flex'", 'body font'],
  ['$intro', "'Google Sans Flex'", 'font of the hero and page headings'],
  ['$mono', 'ui-monospace, …', 'code font'],
  ['$text', '1rem', 'body font size, 16px'],
  ['$line', '1.5', 'body line height, 24px'],
  ['$content', '1248px', 'container width, 1200px of content'],
  ['$gutter', '24px', 'container side padding'],
  ['$radius', '8px', 'default radius of buttons, tabs, alerts'],
  ['$columns', '12', 'columns in the grid'],
  ['$media', 'xl 1441, lg 1440, md 1024, sm 768, xs 576', 'breakpoints for the =v-* mixins'],
]

const ranges = [
  ['$step', '4', 'step of spacing, sizes, gaps and radius'],
  ['$max-space', '160', 'largest padding, margin and gap'],
  ['$max-gap', '64', 'largest gap in flex-X-Y pairs'],
  ['$max-size', '800', 'largest w-p-N and h-p-N'],
  ['$max-font', '72', 'largest fz-N'],
  ['$max-radius', '60', 'largest r-N'],
  ['$max-border', '24', 'largest bw-N'],
]

const VariablesPage = () => (
  <DocsLayout
    slug='variables'
    source='Variables'
    title='Variables'
    lead='One file decides how the site looks. Every value carries !default, so you override only what you need.'
    description='Every Avior variable with its default: palette, dark mode colours, type, widths, breakpoints and the ranges of generated helpers.'
    toc={[{ id: 'override', title: 'Override a value' }, { id: 'palette', title: 'Palette' }, { id: 'night', title: 'Lines and dark mode' }, { id: 'layout', title: 'Type and layout' }, { id: 'ranges', title: 'Ranges' }, { id: 'components', title: 'Component variables' }]}>

    <h2 id='override'>Override a value</h2>
    <p>
      Open <code>src/styles/inc/_variables.sass</code> and change the values. Buttons, helpers,
      components and both modes follow, without touching the markup.
    </p>
    <Code label='inc/_variables.sass' icon='file' code={`$violet: #0F766E !default
$accent: $violet !default
$basic: 'Inter', sans-serif !default
$radius: 4px !default`} />
    <div className='alert'>
      <PiLightbulb aria-hidden='true' />
      <p>
        A new colour in <code>$palette</code> gets <code>c-</code>, <code>bg-</code> and
        <code> bc-</code> helpers and a button variant. If it is light, add its name to
        <code> $light-colors</code>, so a solid button in it gets dark text.
      </p>
    </div>

    <h2 id='palette'>Palette</h2>
    <Rows rows={palette} />

    <h2 id='night'>Lines and dark mode</h2>
    <Rows rows={night} />

    <h2 id='layout'>Type and layout</h2>
    <Rows rows={layout} />

    <h2 id='ranges'>Ranges</h2>
    <p>
      Helpers are generated from these limits. Wider ranges cost nothing in production,
      because unused classes are removed at build time.
    </p>
    <Rows rows={ranges} />

    <h2 id='components'>Component variables</h2>
    <p>
      Each component keeps its own variables at the top of its file, prefixed with its name:
      <code> $card-radius</code>, <code>$tabs-height</code>, <code>$accordion-gap</code>. The
      page of each component lists them.
    </p>
  </DocsLayout>
)

export { VariablesPage as Variables }
