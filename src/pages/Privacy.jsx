import { Page } from '../components/Page'

const Privacy = () => {
  return (
    <Page title='Privacy Policy' meta='Last updated: 12 November 2026'
      description='What the Avior site and the Avior plugin collect, why, where it is kept, for how long, and how to have it deleted.'>
      <section className='m-b-48'>
        <h2 className='title'>1. Who we are</h2>
        <p>
          This policy covers the site avior-82x.pages.dev, the Avior repository on GitHub and
          the Avior plugin for ChatGPT and Codex. They are run by Antonina Osypenko, the
          maintainer of Avior, who decides how the data described here is used. To ask about
          your data, write through the <a href='/contact' className='c-accent'>contact form</a>.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>2. What we collect</h2>
        <p>Only what you send us through the contact form:</p>
        <ul>
          <li>your name and email address;</li>
          <li>the link to a site, if you add one;</li>
          <li>your message;</li>
          <li>
            the date it was sent, and a salted hash of your IP address. The hash is used only
            to limit how many messages one visitor can send, and the address cannot be read
            back from it.
          </li>
        </ul>
        <p>
          Reading the site needs nothing from you. There are no accounts, no analytics, no
          advertising and no tracking. The site sets no cookies.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>3. Why we use it</h2>
        <ul>
          <li>To read your message and reply to you by email.</li>
          <li>To consider a site you send for the Showcase on the home page.</li>
          <li>To protect the form from spam and abuse.</li>
        </ul>
        <p>
          We use it because you asked us to by sending the form, and because keeping the
          form free of abuse is a legitimate interest. We never sell your data, use it for
          advertising or add you to a mailing list.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>4. Where it is kept and for how long</h2>
        <p>
          Messages are stored in a Cloudflare D1 database in Western Europe. Only the people
          who run Avior can read them, after signing in. A message is kept for as long as it
          takes to answer it and no longer than 90 days; you can ask for it to be deleted
          sooner at any time.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>5. Services we rely on</h2>
        <ul>
          <li>
            Cloudflare hosts the site and the database. Like any host it processes technical
            data, such as your IP address and browser, to deliver the pages and protect them
            from attacks, as described in its own privacy policy.
          </li>
          <li>
            GitHub hosts the repository. Issues you open there are public and are covered
            by GitHub's privacy policy.
          </li>
          <li>
            The Avior plugin is a set of written instructions for an AI agent. It collects
            nothing and sends nothing to us. Your conversations are handled by the service
            that runs the agent, such as ChatGPT or Codex, under that service's policy.
          </li>
        </ul>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>6. What stays in your browser</h2>
        <p>
          The site remembers whether you chose light or dark mode. The choice is saved in
          your browser's local storage under <code>avior-mode</code> and is never sent to us.
          Clearing the site data in your browser removes it.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>7. Your rights</h2>
        <p>
          You can ask what we hold about you, have it corrected or deleted, and object to its
          use. Write through the <a href='/contact' className='c-accent'>contact form</a> from the email address you
          used, and we will answer within 30 days. If you are in the EU or the UK, you can also
          complain to your data protection authority.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>8. Children</h2>
        <p>
          The site is meant for developers and designers. Please do not use the form if you
          are under 16.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>9. Changes</h2>
        <p>
          When this policy changes, the new version appears on this page with a new date at
          the top.
        </p>
      </section>
    </Page>
  )
}

export { Privacy }
