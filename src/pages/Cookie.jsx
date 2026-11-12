import { Page } from '../components/Page'

const Cookie = () => {
  return (
    <Page title='Cookie Policy' meta='Last updated: 12 November 2026'
      description='The Avior site sets no cookies and runs no analytics. It only remembers light or dark mode in your browser.'>
      <section className='m-b-48'>
        <h2 className='title'>1. No cookies</h2>
        <p>
          The Avior site sets no cookies. It has no analytics, no advertising and no
          third-party trackers, so there is nothing to agree to and no consent banner.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>2. What the site remembers</h2>
        <p>
          The light or dark mode you choose is saved in your browser's local storage
          under <code>avior-mode</code>, so the site opens the same way next time. It stays in
          your browser and is never sent to us. Clearing the site data in your browser
          removes it.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>3. More</h2>
        <p>
          What the contact form collects is described in
          the <a href='/privacy-policy' className='c-accent'>Privacy Policy</a>.
        </p>
      </section>
    </Page>
  )
}

export { Cookie }
