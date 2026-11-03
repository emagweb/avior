import { useEffect, useState } from 'react'
import { PiListBold, PiXBold, PiArrowLeft, PiArrowRight, PiPencilSimpleBold } from 'react-icons/pi'
import { Header } from './Header'
import { Footer } from './Footer'
import { useMeta } from '../hooks/useMeta'
import { docs, flat, href } from '../data/docs'
import { repo } from '../data/links'

const DocsLayout = ({ slug, title, lead, description, toc = [], source, children }) => {
  useMeta(title === 'Introduction' ? 'Docs' : title, description || lead)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const index = flat.findIndex((page) => page.slug === slug)
  const previous = flat[index - 1]
  const next = flat[index + 1]
  const edit = `${repo}/edit/main/src/pages/docs/${source}.jsx`

  return (
    <div id='docs'>
      <Header />
      <div>
        <aside data-open={open}>
          <button type='button' aria-expanded={open} aria-controls='docs-menu' onClick={() => setOpen(!open)}>
            {open ? <PiXBold aria-hidden='true' /> : <PiListBold aria-hidden='true' />}
            Documentation
          </button>
          <nav id='docs-menu' aria-label='Documentation'>
            {docs.map(({ title: group, Icon, pages }) => (
              <div key={group}>
                <p><Icon aria-hidden='true' />{group}</p>
                {pages.map((page) => (
                  <a
                    key={page.slug}
                    href={href(page.slug)}
                    aria-current={page.slug === slug ? 'page' : undefined}
                    onClick={() => setOpen(false)}>
                    {page.title}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        <main>
          <article>
            <div className='flex-16 aifs jcsb'>
              <div>
                <h1 className='title-page'>{title}</h1>
                {lead && <p className='title-lead c-muted'>{lead}</p>}
              </div>
              {source && (
                <a href={edit} className='button dark outline mini flex aic jcc' target='_blank' rel='noreferrer'>
                  <div className='flex-8 aic'>
                    <PiPencilSimpleBold aria-hidden='true' />
                    Edit page
                  </div>
                </a>
              )}
            </div>

            {children}

            <nav aria-label='Previous and next page'>
              {previous ? (
                <a href={href(previous.slug)} className='card'>
                  <span className='fz-14 c-muted'><PiArrowLeft aria-hidden='true' /> Previous</span>
                  <span className='title-card m-b-0'>{previous.title}</span>
                </a>
              ) : <span />}
              {next ? (
                <a href={href(next.slug)} className='card tr'>
                  <span className='fz-14 c-muted'>Next <PiArrowRight aria-hidden='true' /></span>
                  <span className='title-card m-b-0'>{next.title}</span>
                </a>
              ) : <span />}
            </nav>
          </article>

          {toc.length > 0 && (
            <nav aria-label='On this page'>
              <p>On this page</p>
              {toc.map(({ id, title: text }) => (
                <a key={id} href={`#${id}`}>{text}</a>
              ))}
            </nav>
          )}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export { DocsLayout }
