import { Page } from '../components/Page'
import pic from '../assets/svg/expertise.svg'

const Error = () => {
  return (
    <Page title='404 — Page Not Found' meta="Sorry, the page you're looking for doesn't exist.">
      <section className='tc'>
        <img src={pic} alt='' width={240} height={196} className='ma m-y-40' />
        <p className='p-b-40'>It might have been moved, deleted, or the URL might be incorrect.</p>
        <a href='/' className='fw-500'>Return to Home</a>
      </section>
    </Page>
  )
}

export { Error }
