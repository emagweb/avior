import { useMemo, useState } from 'react'
import { PiMagnifyingGlass } from 'react-icons/pi'
import { DocsLayout } from '../../components/DocsLayout'
import { Table } from '../../components/Example'
import { groups } from '../../data/classes'

const Helpers = () => {
  const [query, setQuery] = useState('')

  const found = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return groups
    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter(({ cls, css }) => cls.toLowerCase().includes(q) || css.toLowerCase().includes(q)),
      }))
      .filter((group) => group.items.length > 0)
  }, [query])

  const total = found.reduce((sum, group) => sum + group.items.length, 0)

  return (
    <DocsLayout
      slug='helpers'
      source='Helpers'
      title='Helpers'
      lead='Short classes that stand for one property and its value. The number in the class is the number in the design.'
      description='Every Avior helper: spacing, flexbox, grid, size, typography, colour and layout, with a search box.'
      toc={groups.map(({ id, title }) => ({ id, title }))}>

      <h2 id='naming'>How the names work</h2>
      <p>
        A helper is a short alternative to one property and its value.
        <code> align-items: center</code> is <code>aic</code>, <code>padding-top: 24px</code> is
        <code> p-t-24</code>. Numbers are literal and move on a 4px step.
      </p>

      <label className='flex-12 aic bc-line bw-1 r-8 p-x-16 m-y-24'>
        <PiMagnifyingGlass className='c-muted' aria-hidden='true' />
        <input
          type='search'
          className='w-100 h-p-40 fz-14 c-text bg-tr b-none'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder='Search a class or a declaration: aic, padding, 24'
          aria-label='Search helpers'
        />
      </label>
      {query.trim() && <p className='fz-14 c-muted'>{total} {total === 1 ? 'match' : 'matches'}</p>}

      {found.map(({ id, title, note, items }) => (
        <section key={id}>
          <h2 id={id}>{title}</h2>
          <p>{note}</p>
          <Table head={['Class', 'CSS']} rows={items.map(({ cls, css }) => [cls, css])} />
        </section>
      ))}
    </DocsLayout>
  )
}

export { Helpers }
