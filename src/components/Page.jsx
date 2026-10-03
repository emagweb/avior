import { Header } from './Header'
import { Footer } from './Footer'

// Template for an inner page: header, title, content, footer.
// Wrap content in <section> elements — they are styled under .page in _base.sass.
//
//   <Page title='Privacy Policy' meta='Last updated: January 9, 2026'>
//     <section>…</section>
//   </Page>
//
// menu and footerMenu are passed through when a page needs its own navigation.
const Page = ({ title, meta, menu, footerMenu, children }) => {
  return (
    <div className="content page">
      <Header {...(menu && { menu })} />
      <main className='p-y-120'>
        <div className='container p-x-24'>
          {title && <h2 className='title-intro'>{title}</h2>}
          {meta && <p className='c-blue p-b-64 p-t-24'>{meta}</p>}
          <div className="tl p-t-40">
            {children}
          </div>
        </div>
      </main>
      <Footer {...(footerMenu && { menu: footerMenu })} />
    </div>
  )
}

export { Page }
