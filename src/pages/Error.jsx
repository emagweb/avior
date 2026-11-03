import { Page } from '../components/Page'

const Error = () => {
  return (
    <Page title='404 — Page Not Found' meta="Sorry, the page you're looking for doesn't exist."
      description='This page does not exist.'>
      <section className='tc m-b-48'>
        <p className='p-b-40'>It might have been moved, deleted, or the URL might be incorrect.</p>
        <a href='/' className='fw-500'>Return to Home</a>
      </section>
    </Page>
  )
}

export { Error }
