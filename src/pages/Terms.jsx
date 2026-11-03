import { Page } from '../components/Page'

const Terms = () => {
  return (
    <Page title='Terms of Use' meta='Template. Last updated: add a date'
      description='Terms of use template for a project built on Avior.'>
      <section className='m-b-48'>
        <h3 className='title'>1. Acceptance</h3>
        <p>
          Using the site means agreeing to these terms. If they do not suit you, please
          do not use the site.
        </p>
      </section>
      <section className='m-b-48'>
        <h3 className='title'>2. What is and is not allowed</h3>
        <ul>
          <li>Do not interfere with the site or bypass access restrictions</li>
          <li>Do not pass someone else's material off as your own</li>
          <li>Do not use the site for unlawful activity</li>
        </ul>
      </section>
      <section className='m-b-48'>
        <h3 className='title'>3. Rights to the material</h3>
        <p>
          State who owns the texts, images and code, and on what terms they may be used.
          The code of this starter is distributed under the MIT licence.
        </p>
      </section>
      <section className='m-b-48'>
        <h3 className='title'>4. Liability</h3>
        <p>
          Material is provided as is. State the limits of liability for any damage arising
          from use of the site.
        </p>
      </section>
      <section className='m-b-48'>
        <h3 className='title'>5. Changes</h3>
        <p>
          The terms may be updated, and the current version always lives on this page.
        </p>
      </section>
    </Page>
  )
}

export { Terms }
