import { Page } from '../components/Page'
import { repo, issues } from '../data/links'

const About = () => {
  return (
    <Page title='About Avior' meta='A design system that grew out of building many websites by hand.'
      description='Who makes Avior, where it came from, and how to help the design system grow.'>
      <section className='m-b-48'>
        <h2 className='title'>What it is</h2>
        <p>
          Avior is an open source design system for React and Rsbuild. It has no look of its
          own: variables, helpers and components take their shape from the content of each
          site, so two sites built on it have nothing in common but clean code.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>Where it came from</h2>
        <p>
          I have built websites for more than twenty-five years. The same set of classes and
          parts kept coming with me from project to project, and each one was renamed,
          shortened or dropped until what was left was quick to write and obvious to read.
          Avior is that set, assembled from working sites into one system and opened to
          everyone.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>Where it is now</h2>
        <p>
          Early, and used on real work. The plan and the reasoning behind every decision are
          public in the <a href={repo} target='_blank' rel='noreferrer'>repository</a>.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>How to help</h2>
        <p>
          Tell me what is missing or what broke in
          the <a href={issues} target='_blank' rel='noreferrer'>issues</a>, send a pull
          request, or <a href='/docs/showcase'>send the site</a> you built with it.
        </p>
        <p className='c-muted'>Antonina Osypenko</p>
      </section>
    </Page>
  )
}

export { About }
