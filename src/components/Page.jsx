import { Header } from './Header'
import { Footer } from './Footer'
import { useMeta } from '../hooks/useMeta'

const Page = ({ title, meta, description, menu, footerMenu, children }) => {
  useMeta(title, description || meta)

  return (
    <div>
      <Header {...(menu && { menu })} />
      <div className='bg-surface p-t-96 p-b-64'>
        <div className='container'>
          {title && <h1 className='title-page'>{title}</h1>}
          {meta && <p className='title-lead c-muted m-b-0'>{meta}</p>}
        </div>
      </div>
      <main className='p-y-80'>
        <div className='container'>
          {children}
        </div>
      </main>
      <Footer {...(footerMenu && { menu: footerMenu })} />
    </div>
  )
}

export { Page }
