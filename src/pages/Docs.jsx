import { useMemo, useState } from 'react'
import { Page } from '../components/Page'
import { groups } from '../data/classes'

const box = 'bg-accent c-white r-4 p-y-12 p-x-16 tc fz-16'
const frame = 'bc-accent bw-1 dashed r-4'
const bar = 'bg-grey r-4 p-y-8 p-x-16 fz-14'

const Case = ({ code, label, children }) => (
  <div className='bg-light r-12 p-y-24 p-x-24 m-b-24'>
    {label && <p className='fz-14 fw-600 c-accent m-b-16'>{label}</p>}
    {children}
    <pre className='m-t-24'><code className='bg-white'>{code}</code></pre>
  </div>
)

const Rows = ({ items }) => (
  <div className='m-t-24'>
    {items.map(({ cls, css }, index) => (
      <div key={cls} className={index % 2 ? 'row flex-16 aic p-y-12 p-x-16' : 'row flex-16 aic p-y-12 p-x-16 bg-light r-8'}>
        <div className='col-5'><code>{cls}</code></div>
        <div className='col-7 fz-16'>{css}</div>
      </div>
    ))}
  </div>
)

const palette = [
  ['dark', '#1C1830'], ['medium', '#6B6585'], ['grey', '#F1F0F6'], ['light', '#F8F7FB'],
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
      <Case label='The same box, two paddings. What you see between the edges is the class.'
        code={`<div class="p-y-24 p-x-24">…</div>
<div class="p-y-64 p-x-24">…</div>`}>
        <div className={`${frame} p-y-24 p-x-24 m-b-16`}><div className={box}>p-y-24 p-x-24</div></div>
        <div className={`${frame} p-y-64 p-x-24`}><div className={box}>p-y-64 p-x-24</div></div>
      </Case>
      <Case label='Margins push from the outside. Here the middle box carries m-y-40.'
        code={'<div class="m-y-40">…</div>'}>
        <div className={frame}>
          <div className={box}>no margin</div>
          <div className={`${box} m-y-40`}>m-y-40</div>
          <div className={box}>no margin</div>
        </div>
      </Case>
    </>
  ),
  flex: (
    <>
      <Case label='Same three boxes, same markup. Only the justify class changes.'
        code={`<div class="flex-16 jcfs">…</div>
<div class="flex-16 jcc">…</div>
<div class="flex-16 jcsb">…</div>`}>
        {['jcfs', 'jcc', 'jcsb'].map((cls) => (
          <div key={cls} className={`flex-16 ${cls} m-b-16`}>
            <div className={box}>one</div>
            <div className={box}>two</div>
            <div className={box}>{cls}</div>
          </div>
        ))}
      </Case>
      <Case label='Vertical alignment, on boxes of different height.'
        code={`<div class="flex-16 aifs">  <div class="flex-16 aic">  <div class="flex-16 aife">`}>
        {['aifs', 'aic', 'aife'].map((cls) => (
          <div key={cls} className={`flex-16 ${cls} m-b-16`}>
            <div className={`${box} p-y-24`}>tall</div>
            <div className={box}>{cls}</div>
            <div className={`${box} p-y-40`}>taller</div>
          </div>
        ))}
      </Case>
    </>
  ),
  grid: (
    <>
      <Case label='container, row and col: the same three levels as any twelve-column grid.'
        code={`<div class="container">
  <div class="row flex-16">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
</div>`}>
        <div className='row flex-16 m-b-16'>
          <div className='col-8'><div className={box}>col-8</div></div>
          <div className='col-4'><div className={box}>col-4</div></div>
        </div>
        <div className='row flex-16 m-b-16'>
          {[1, 2, 3].map((i) => <div key={i} className='col-4'><div className={box}>col-4</div></div>)}
        </div>
        <div className='row flex-16'>
          {[1, 2, 3, 4].map((i) => <div key={i} className='col-3'><div className={box}>col-3</div></div>)}
        </div>
      </Case>
      <Case label='col with no number shares the row equally. col-auto takes only what it needs.'
        code={`<div class="row flex-16">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col-auto">col-auto</div>
</div>`}>
        <div className='row flex-16'>
          <div className='col'><div className={box}>col</div></div>
          <div className='col'><div className={box}>col</div></div>
          <div className='col-auto'><div className={box}>col-auto</div></div>
        </div>
      </Case>
    </>
  ),
  size: (
    <Case label='Percentages of the parent. Pixels when you need an exact width.'
      code={`<div class="w-25">  <div class="w-50">  <div class="w-75">  <div class="w-p-480">`}>
      {['w-25', 'w-50', 'w-75', 'w-100'].map((cls) => (
        <div key={cls} className={`${cls} m-b-8`}><div className={bar}>{cls}</div></div>
      ))}
      <div className='oh'><div className='w-p-480'><div className={bar}>w-p-480</div></div></div>
    </Case>
  ),
  type: (
    <Case label='The scale at its real size. A heading takes one of these and nothing else.'
      code={`<h2 class="title-section">Section heading</h2>
<p class="title-lead">Lead paragraph</p>
<p>Body text</p>`}>
      {titles.map(([cls, text]) => (
        <div key={cls} className='flex-24 aic jcsb m-b-16'>
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
        <div className='row flex-16'>
          {palette.map(([name, hex]) => (
            <div key={name} className='col-3'>
              <div className={`h-p-64 r-8 bg-${name}`} />
              <p className='fz-14 m-t-8'>{`bg-${name}`}</p>
              <p className='fz-14 c-medium'>{hex}</p>
            </div>
          ))}
        </div>
      </Case>
      <Case label='Borders: colour, width, style and radius are four separate classes.'
        code={'<div class="bc-accent bw-2 r-8 p-y-24 p-x-24">bc-accent bw-2 r-8</div>'}>
        <div className='row flex-16'>
          <div className='col-4 bc-accent bw-2 r-8 p-y-24 p-x-24 tc'><code>bw-2 r-8</code></div>
          <div className='col-4 bc-dark bw-4 r-0 p-y-24 p-x-24 tc'><code>bw-4 r-0</code></div>
          <div className='col-4 bc-accent bw-2 dashed r-40 p-y-24 p-x-24 tc'><code>dashed r-40</code></div>
        </div>
      </Case>
    </>
  ),
  layout: (
    <Case label='A real section: container for width, a column split inside, a card in each.'
      code={`<section class="p-y-104 bg-light">
  <div class="container">
    <h2 class="title-section">Heading</h2>
    <div class="row flex-24">
      <div class="col-4 bc-grey bw-1 r-8 p-y-24 p-x-24">
        <h3 class="title-card">Card</h3>
        <p>Text</p>
      </div>
    </div>
  </div>
</section>`}>
      <div className='row flex-24'>
        {['One', 'Two', 'Three'].map((n) => (
          <div key={n} className='col-4 bc-dark bw-1 r-8 p-y-24 p-x-24'>
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
    <Page title='Docs' meta='Every class with a working example and the markup that made it.'
      description='Visual reference for Avior class names: spacing, flexbox, columns, size, typography, colour and layout, each with a working example and its markup.'>
      <div className='row flex-64'>
        <div className='col-3'>
          {groups.map(({ id, title }) => (
            <p key={id} className='m-b-8'><a href={`#${id}`}>{title}</a></p>
          ))}
          <p className='m-b-8'><a href='#paste'>Paste a page</a></p>
          <p><a href='/ui'>Buttons</a></p>
        </div>

        <div className='col-9'>
          <section className='m-b-48'>
            <input
              type='search'
              className='w-100 h-p-48 p-x-20 fz-16 c-dark bg-tr bc-medium bw-1 r-12'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Type a class or a declaration: aic, padding, 104'
              aria-label='Filter the class reference'
            />
            {searching && <p className='m-t-16 fz-16'>{total} match{total === 1 ? '' : 'es'}</p>}
          </section>

          {found.map(({ id, title, note, items }) => (
            <section key={id} id={id} className='m-b-48'>
              <h3 className='title'>{title}</h3>
              <p>{note}</p>
              {!searching && demos[id]}
              <Rows items={items} />
            </section>
          ))}

          {!searching && (
            <section id='paste' className='m-b-48'>
              <h3 className='title'>Paste a page</h3>
              <p>
                A whole page is a header, sections and a footer. This is the shape every
                page on this site uses.
              </p>
              <pre className='frame'><code>{`<Page title='About' description='What this is'>
  <section className='m-b-48'>
    <h3 class="title">Heading</h3>
    <p>Text</p>
  </section>
</Page>`}</code></pre>
              <p className='m-t-24'>And a section on the landing, written with utilities only:</p>
              <pre className='frame'><code>{`<section class="p-y-160 bg-light">
  <div class="container tc">
    <h2 class="title-section">Heading</h2>
    <p class="title-lead w-60 wide ma">Lead</p>
    <div class="row flex-40 m-t-64 tl">
      <div class="col-4">…</div>
    </div>
  </div>
</section>`}</code></pre>
            </section>
          )}

          <section className='m-b-48'>
            <h3 className='title'>The rule</h3>
            <p>
              First letters of the property, then first letters of the value.
              align-items: center is aic, justify-content: space-between is jcsb,
              object-fit: cover is obfc. The grid keeps the names everyone already knows:
              container, row, col.
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
