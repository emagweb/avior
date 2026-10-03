import { Page } from '../components/Page'

// A template, not a legal document. Replace the text with your own
// and have it reviewed for your jurisdiction.
const Privacy = () => {
  return (
    <Page title='Privacy Policy' meta='Template. Last updated: add a date'>
      <section>
        <h3 className='title'>1. General</h3>
        <p>
          State who processes visitors' personal data, on what legal basis, and how to
          get in touch with that controller.
        </p>
      </section>
      <section>
        <h3 className='title'>2. What is collected</h3>
        <ul>
          <li>Data the visitor submits: name, email address, message</li>
          <li>Technical data: IP address, browser, pages viewed</li>
          <li>Web analytics data, if analytics is enabled</li>
        </ul>
      </section>
      <section>
        <h3 className='title'>3. Why it is needed</h3>
        <ul>
          <li>To answer an enquiry</li>
          <li>To understand how the site is used and improve it</li>
          <li>To meet legal obligations</li>
        </ul>
      </section>
      <section>
        <h3 className='title'>4. Third parties</h3>
        <p>
          List the processors that get access to the data: hosting, analytics, mailing.
          State that the data is not sold.
        </p>
      </section>
      <section>
        <h3 className='title'>5. Visitor rights</h3>
        <p>
          Access, correction, deletion, restriction of processing and objection to it.
          Explain how to exercise these rights.
        </p>
      </section>
      <section>
        <h3 className='title'>6. Changes</h3>
        <p>
          The policy may be updated, and the current version always lives on this page.
        </p>
      </section>
    </Page>
  )
}

export { Privacy }
