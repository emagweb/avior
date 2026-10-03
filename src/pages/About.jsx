import { Page } from '../components/Page'

const About = () => {
  return (
    <Page title='About' meta='What this is and why'>
      <section>
        <h3 className='title'>What this is</h3>
        <p>
          Avior is a set of Sass utilities whose names follow the Emmet dictionary, with
          numeric values taken straight from the design. Built for React and Rsbuild.
        </p>
      </section>
      <section>
        <h3 className='title'>Why</h3>
        <p>
          Utility systems usually ask you to learn their own dictionary: you have to know
          that <code>pt-6</code> means 24px. Here there is no scale — you write
          <code> p-t-24</code>. And alignment is named after the CSS declaration itself:
          <code> align-items: center</code> becomes <code>aic</code>.
        </p>
        <ul>
          <li>Class names are derived, not memorised</li>
          <li>Any value from the design is available immediately, with no config change</li>
          <li>A project theme is a single variables file</li>
        </ul>
      </section>
      <section>
        <h3 className='title'>Status</h3>
        <p>
          Early. This site doubles as the test bench for the stack. Details, limitations
          and the roadmap live in the repository README.
        </p>
      </section>
    </Page>
  )
}

export { About }
