import { Page } from '../components/Page'
import { repo } from '../data/links'

const Terms = () => {
  return (
    <Page title='Terms of Use' meta='Last updated: 12 November 2026'
      description='The terms for using the Avior site, its code, the contact form, the Showcase and the Avior plugin for ChatGPT and Codex.'>
      <section className='m-b-48'>
        <h2 className='title'>1. What these terms cover</h2>
        <p>
          They cover the site avior-82x.pages.dev, the Avior code in
          the <a href={repo} className='c-accent' target='_blank' rel='noreferrer'>repository</a> and the Avior
          plugin for ChatGPT and Codex. Avior is run by Antonina Osypenko. Using any of them
          means you accept these terms.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>2. The code is yours to use</h2>
        <p>
          Avior is free and open source under the MIT licence, which is in the repository.
          You may use, copy, change and sell sites built with it, commercial ones included.
          The Google Sans Flex font ships under the SIL Open Font License. These terms do not
          narrow either licence.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>3. Using the site and the form</h2>
        <ul>
          <li>Do not send spam, advertising or harmful content through the contact form.</li>
          <li>Do not try to break, overload or get around the protection of the site.</li>
          <li>Do not use the site for anything unlawful.</li>
        </ul>
        <p>We may block messages or visitors that break these rules.</p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>4. Sending a site to the Showcase</h2>
        <p>
          When you send a site, you confirm that you may share it. You allow us to show a
          screenshot of it, its name and a link to it on the Avior site and in the repository.
          We choose which sites to show and may stop showing one at any time. Ask through
          the <a href='/contact' className='c-accent'>contact form</a> and we will take yours down.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>5. The plugin</h2>
        <p>
          The Avior plugin gives an AI agent instructions for building sites on Avior. The
          code and text are written by the agent and the service that runs it, not by us,
          so review them before you publish. The service you run the agent in has its own
          terms.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>6. No warranty</h2>
        <p>
          The site, the code and the plugin are provided as they are, without any warranty.
          As far as the law allows, we are not liable for any loss that comes from using
          them. This does not limit rights that the law of your country gives you and that
          cannot be waived.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>7. Other sites</h2>
        <p>
          The site links to GitHub, to sites in the Showcase and to other services. We do not
          control them, and their own terms apply there.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>8. Changes and contact</h2>
        <p>
          When these terms change, the new version appears on this page with a new date at the
          top. Questions go to the <a href='/contact' className='c-accent'>contact form</a>.
        </p>
      </section>
    </Page>
  )
}

export { Terms }
