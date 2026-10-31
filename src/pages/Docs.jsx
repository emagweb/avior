import { useMemo, useState } from 'react'
import { Page } from '../components/Page'
import { groups } from '../data/classes'

// One example: the rendered result, then the markup that produced it.
const Case = ({ code, label, children }) => (
  <div className='case m-b-24'>
    {label && <span className='case-label'>{label}</span>}
    {children}
    <pre className='m-t-24'><code>{code}</code></pre>
  </div>
)

const Rows = ({ items }) => (
  <table className='rows'>
    <thead>
      <tr><th>class</th><th>what it does</th></tr>
    </thead>
    <tbody>
      {items.map(({ cls, css }) => (
        <tr key={cls}>
          <td><code>{cls}</code></td>
          <td>{css}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

const palette = [
  ['dark', '#2A272E'], ['medium', '#737373'], ['grey', '#F5F5F5'], ['light', '#F9F9F9'],
  ['accent', '#FF2790'], ['blue', '#3792FA'], ['violet', '#4E18AD'], ['green', '#99B142'],
]

const titles = [
  ['title-intro', 'Hero heading'],
  ['title-intro-sub', 'The line under it'],
  ['title-page', 'Page heading'],
  ['title-section', 'Section heading'],
  ['title', 'Heading inside text'],
  ['title-lead', 'Lead paragraph'],
  ['title-card', 'Card heading'],
  ['title-mini', 'Label'],
]

const demos = {
  spacing: (
    <>
      <Case label='The same block, two paddings. What you see between the edges is the class.'
        code={`<div class="pad p-y-24 p-x-24"><div class="block">p-y-24 p-x-24</div></div>
<div class="pad p-y-64 p-x-24"><div class="block">p-y-64 p-x-24</div></div>`}>
        <div className='pad p-y-24 p-x-24 m-b-16'><div className='block'>p-y-24 p-x-24</div></div>
        <div className='pad p-y-64 p-x-24'><div className='block'>p-y-64 p-x-24</div></div>
      </Case>
      <Case label='Margins push from the outside. Here the middle block carries m-y-40.'
        code={'<div class="block m-y-40">m-y-40</div>'}>
        <div className='pad'>
          <div className='block'>no margin</div>
          <div className='block m-y-40'>m-y-40</div>
          <div className='block'>no margin</div>
        </div>
      </Case>
    </>
  ),
  flex: (
    <>
      <Case label='Same three boxes, same markup. Only the justify class changes.'
        code={`<div class="flex jcfs g-16">…</div>
<div class="flex jcc g-16">…</div>
<div class="flex jcsb g-16">…</div>`}>
        {['jcfs', 'jcc', 'jcsb'].map((cls) => (
          <div key={cls} className={`flex ${cls} g-16 m-b-16`}>
            <div className='block'>one</div>
            <div className='block'>two</div>
            <div className='block'>{cls}</div>
          </div>
        ))}
      </Case>
      <Case label='Vertical alignment, on boxes of different height.'
        code={`<div class="flex aifs g-16">  <div class="flex aic g-16">  <div class="flex aife g-16">`}>
        {['aifs', 'aic', 'aife'].map((cls) => (
          <div key={cls} className={`flex ${cls} g-16 m-b-16`}>
            <div className='block p-y-24'>tall</div>
            <div className='block'>{cls}</div>
            <div className='block p-y-40'>taller</div>
          </div>
        ))}
      </Case>
    </>
  ),
  grid: (
    <>
      <Case label='Equal columns. The number in the class is the number of columns.'
        code={`<div class="cols-2 g-16">…</div>
<div class="cols-3 g-16">…</div>
<div class="cols-4 g-16">…</div>`}>
        {[2, 3, 4].map((n) => (
          <div key={n} className={`cols-${n} g-16 m-b-16`}>
            {Array.from({ length: n }, (_, i) => <div key={i} className='block'>{`cols-${n}`}</div>)}
          </div>
        ))}
      </Case>
      <Case label='Twelve columns to share. col-8 plus col-4 fills a row; four col-4 wrap.'
        code={`<div class="grid g-16">
  <div class="col-8">col-8</div>
  <div class="col-4">col-4</div>
</div>`}>
        <div className='grid g-16 m-b-16'>
          <div className='col-8'><div className='block'>col-8</div></div>
          <div className='col-4'><div className='block'>col-4</div></div>
        </div>
        <div className='grid g-16'>
          {['col-4', 'col-4', 'col-4', 'col-4'].map((c, i) => (
            <div key={i} className='col-4'><div className='block'>{c}</div></div>
          ))}
        </div>
      </Case>
    </>
  ),
  size: (
    <Case label='Percentages of the parent. Pixels when you need an exact width.'
      code={`<div class="w-25">  <div class="w-50">  <div class="w-75">  <div class="w-p-480">`}>
      {['w-25', 'w-50', 'w-75', 'w-100'].map((cls) => (
        <div key={cls} className={`${cls} m-b-8`}><div className='bar'>{cls}</div></div>
      ))}
      <div className='w-p-480'><div className='bar'>w-p-480</div></div>
    </Case>
  ),
  type: (
    <Case label='The scale at its real size. A heading takes one of these and nothing else.'
      code={`<h2 class="title-section">Section heading</h2>
<p class="title-lead">Lead paragraph</p>
<p>Body text</p>`}>
      {titles.map(([cls, text]) => (
        <div key={cls} className='flex aic jcsb g-24 m-b-16'>
          <span className={cls}>{text}</span>
          <code>{cls}</code>
        </div>
      ))}
      <p>Body text, 18px, line 1.6. It comes from $text and $line.</p>
    </Case>
  ),
  colour: (
    <>
      <Case label='Every colour in the palette becomes three classes: c-, bg- and bc-.'
        code={`<div class="bg-accent">  <p class="c-accent">  <div class="bc-accent bw-2">`}>
        <div className='cols-4 g-16'>
          {palette.map(([name, hex]) => (
            <div key={name}>
              <div className={`swatch bg-${name}`} />
              <span className='swatch-name'>{`bg-${name}`}</span>
              <span className='swatch-hex'>{hex}</span>
            </div>
          ))}
        </div>
      </Case>
      <Case label='Borders: colour, width, style and radius are four separate classes.'
        code={'<div class="bc-accent bw-2 r-8 p-y-24 p-x-24">bc-accent bw-2 r-8</div>'}>
        <div className='cols-3 g-16'>
          <div className='bc-accent bw-2 r-8 p-y-24 p-x-24 tc'><code>bw-2 r-8</code></div>
          <div className='bc-dark bw-4 r-0 p-y-24 p-x-24 tc'><code>bw-4 r-0</code></div>
          <div className='bc-accent bw-2 dashed r-40 p-y-24 p-x-24 tc'><code>dashed r-40</code></div>
        </div>
      </Case>
    </>
  ),
  layout: (
    <Case label='A real section: container for width, a column split inside, a card in each.'
      code={`<section class="p-y-104 bg-light">
  <div class="container">
    <h2 class="title-section">Heading</h2>
    <div class="cols-3 g-40">
      <div class="bc-grey bw-1 r-8 p-y-24 p-x-24">
        <h3 class="title-card">Card</h3>
        <p>Text</p>
      </div>
    </div>
  </div>
</section>`}>
      <div className='cols-3 g-24'>
        {['One', 'Two', 'Three'].map((n) => (
          <div key={n} className='bc-dark bw-1 r-8 p-y-24 p-x-24'>
            <h3 className='title-card'>{n}</h3>
            <p className='fz-16'>A card is a border, a radius and padding. No component needed.</p>
          </div>
        ))}
      </div>
    </Case>
  ),
}

const Docs = () => {
  const [query, setQuery] = useState('')

  const found = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return groups
    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter(({ cls, css }) =>
          cls.toLowerCase().includes(q) || css.toLowerCase().includes(q))
      }))
      .filter((group) => group.items.length > 0)
  }, [query])

  const total = found.reduce((sum, group) => sum + group.items.length, 0)
  const searching = Boolean(query.trim())

  return (
    <Page title='Docs' meta='Every family with a working example and the markup that made it.'
      description='Visual reference for Avior class names: spacing, flexbox, columns, size, typography, colour and layout, each with a working example and its markup.'>
      <div className='grid g-64'>
        <div className='col-3'>
          <nav className='toc'>
            {groups.map(({ id, title }) => (
              <a key={id} href={`#${id}`}>{title}</a>
            ))}
            <a href='#paste'>Paste a page</a>
            <a href='/ui'>Buttons</a>
          </nav>
        </div>

        <div className='col-9'>
          <section>
            <input
              type='search'
              className='search'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Type a class or a declaration: aic, padding, 104'
              aria-label='Filter the class reference'
            />
            {searching && <p className='m-t-16 fz-16'>{total} match{total === 1 ? '' : 'es'}</p>}
          </section>

          {found.map(({ id, title, note, items }) => (
            <section key={id} id={id}>
              <h3 className='title'>{title}</h3>
              <p>{note}</p>
              {!searching && demos[id]}
              <Rows items={items} />
            </section>
          ))}

          {!searching && (
            <section id='paste'>
              <h3 className='title'>Paste a page</h3>
              <p>
                A whole page is a header, sections and a footer. This is the shape every
                page on this site uses.
              </p>
              <pre className='frame'><code>{`<Page title='About' description='What this is'>
  <section>
    <h3 class="title">Heading</h3>
    <p>Text</p>
  </section>
</Page>`}</code></pre>
              <p className='m-t-24'>And a section on the landing, written with utilities only:</p>
              <pre className='frame'><code>{`<section class="p-y-160 bg-light">
  <div class="container tc">
    <h2 class="title-section">Heading</h2>
    <p class="title-lead w-60 wide ma">Lead</p>
    <div class="cols-3 g-40 m-t-64 tl">
      <div>…</div>
    </div>
  </div>
</section>`}</code></pre>
            </section>
          )}

          <section>
            <h3 className='title'>The rule</h3>
            <p>
              First letters of the property, then first letters of the value, the way
              Emmet abbreviates them. align-items: center is aic, justify-content:
              space-between is jcsb, object-fit: cover is obfc.
            </p>
            <p>
              Numbers are literal: the design says 104px, you write p-t-104. Responsive
              rules live in the Sass, written with the mixins, so a class never carries a
              breakpoint.
            </p>
            <pre className='frame'><code>{`.title-page
  font-size: 3rem
  +v-sm
    font-size: 2.25rem`}</code></pre>
          </section>
        </div>
      </div>
    </Page>
  )
}

export { Docs }
