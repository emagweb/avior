import { Page } from '../components/Page'

const Cookie = () => {
  return (
    <Page title='Cookie Policy' meta='Template. Last updated: add a date'
      description='Cookie policy template for a project built on Avior.'>
      <section className='m-b-48'>
        <h3 className='title'>1. What cookies are</h3>
        <p>
          Small files a site stores in the browser to remember state between visits.
        </p>
      </section>
      <section className='m-b-48'>
        <h3 className='title'>2. Which ones are used</h3>
        <ul>
          <li>Essential: required for the site to work, cannot be switched off</li>
          <li>Analytics: visit statistics, enabled with consent</li>
          <li>Marketing: list them separately if you use any</li>
        </ul>
      </section>
      <section className='m-b-48'>
        <h3 className='title'>3. Consent</h3>
        <p>
          This starter ships without a consent banner, and web analytics is disabled by
          default. If the project serves the EU, analytics must start only after the
          visitor agrees — the README explains how in the Google Analytics section.
        </p>
      </section>
      <section className='m-b-48'>
        <h3 className='title'>4. How to disable them</h3>
        <p>
          Cookies are managed in browser settings. Disabling the essential ones may break
          parts of the site.
        </p>
      </section>
    </Page>
  )
}

export { Cookie }
