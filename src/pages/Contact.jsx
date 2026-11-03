import { Page } from '../components/Page'

const Contact = () => {
  return (
    <Page title='Contact' meta='Template. Replace with your own details.'
      description='How to get in touch about Avior and where to report bugs or propose changes.'>
      <section className='m-b-48'>
        <h3 className='title'>Email</h3>
        <p>
          <a href='mailto:hello@example.com'>hello@example.com</a>
        </p>
      </section>
      <section className='m-b-48'>
        <h3 className='title'>Questions about the code</h3>
        <p>
          Bugs and proposals go to the repository issues. Before writing, have a look at
          the Limitations section in the README: some of it is known and already on the
          roadmap.
        </p>
      </section>
      <section className='m-b-48'>
        <h3 className='title'>Company details</h3>
        <ul>
          <li>Organisation: your name here</li>
          <li>Address: your address here</li>
          <li>Phone: your phone here</li>
        </ul>
      </section>
    </Page>
  )
}

export { Contact }
