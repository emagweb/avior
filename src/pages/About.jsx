import { Page } from '../components/Page'

const About = () => {
  return (
    <Page title='About Avior' meta='A starter kit that grew out of building many websites by hand.'
      description='Who makes Avior, why its class names look the way they do, and how to help the project grow.'>
      <section className='m-b-48'>
        <h2 className='title'>What it is</h2>
        <p>
          Avior is a free, open source starter for websites built with React. It comes with
          the parts every site needs, already wired up, and with its own small set of CSS
          classes for layout, spacing, type and colour.
        </p>
        <p>
          The goal is simple: a whole site in a couple of days, with code that stays clean
          and easy to read long after it is written.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>Why it exists</h2>
        <p>
          I have built a lot of websites. Over the years the same set of classes kept coming
          with me from project to project, and every one of them was renamed, shortened or
          dropped until what was left was quick to type and obvious to read. Avior is that
          set, cleaned up and opened to everyone.
        </p>
        <p>
          The names are short forms of the CSS they stand for, the numbers come straight
          from the design, and the grid is the familiar container, row and col. That is
          also why the code needs no comments: the class names already say what is going
          on.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>Where it is now</h2>
        <p>
          Early, and used on real work. Forms, cards and a few utility families are still
          on the list. The plan and the reasoning behind every decision are public in
          the <a href='https://github.com/emagweb/avior' target='_blank' rel='noreferrer'>repository</a>.
        </p>
      </section>
      <section className='m-b-48'>
        <h2 className='title'>How to help</h2>
        <p>
          Tell me what is missing or what broke in
          the <a href='https://github.com/emagweb/avior/issues' target='_blank' rel='noreferrer'>issues</a>, send a pull
          request, or <a href='https://github.com/sponsors/emagweb' target='_blank' rel='noreferrer'>sponsor the project</a> if
          it saves you time on paid work.
        </p>
        <p className='c-medium'>Antonina Osypenko</p>
      </section>
    </Page>
  )
}

export { About }
