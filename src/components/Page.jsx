import { Header } from './Header'
import { Footer } from './Footer'
import { useMeta } from '../hooks/useMeta'

// Template for an inner page: header, title, content, footer.
// Wrap content in <section> elements — they are styled under .page in _base.sass.
//
//   <Page title='Privacy Policy' meta='Last updated: January 9, 2026'>
//     <section>…</section>
//   </Page>
//
// title and description also set the document title and meta description.
// menu and footerMenu are passed through when a page needs its own navigation.
const Page = ({ title, meta, description, menu, footerMenu, children }) => {
  useMeta(title, description || meta)

  return (
    <div className="content page">
      <Header {...(menu && { menu })} />
      <div className='bg-grey p-t-96 p-b-72'>
        <div className='container'>
          {title && <h1 className='title-page'>{title}</h1>}
          {meta && <p className='title-lead'>{meta}</p>}
        </div>
      </div>
      <main className='p-y-96'>
        <div className='container tl'>
          {children}
        </div>
      </main>
      <Footer {...(footerMenu && { menu: footerMenu })} />
    </div>
  )
}

export { Page }
