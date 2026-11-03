import { PiArrowRightBold } from 'react-icons/pi'
import { Tabs } from '../../components/Tabs'
import { Code } from '../../components/Code'

const layers = [
  {
    label: 'Variables',
    title: 'One file decides how the site looks',
    text: 'Palette, type, spacing, radius, content width and every component setting live in inc/_variables.sass. Each value carries !default, so a project overrides only what it needs.',
    href: '/docs/variables',
    file: 'inc/_variables.sass',
    code: `$accent: $violet
$basic: 'Google Sans Flex', sans-serif
$content: 1248px
$radius: 8px

$card-radius: 12px
$card-padding: 24px`,
  },
  {
    label: 'Helpers',
    title: 'Values straight from the design',
    text: 'The mockup says 48px, the markup says p-y-48. Spacing, size, type, colour, alignment and a twelve-column grid, on a 4px step.',
    href: '/docs/helpers',
    file: 'Section.jsx',
    code: `<div className='row flex-24 aic'>
  <div className='col-7 p-y-48'>…</div>
  <div className='col-5'>…</div>
</div>`,
  },
  {
    label: 'Components',
    title: 'What helpers cannot say',
    text: 'Card, tabs, accordion, alert, badge, code. Each one is a short Sass file driven by its own variables, so it fits any site without being rewritten.',
    href: '/docs/card',
    file: 'Card.jsx',
    code: `<a className='card' href='/docs'>
  <div className='card-head'>…</div>
  <p className='card-body'>…</p>
  <span className='card-foot'>Read more</span>
</a>`,
  },
]

const Layers = () => {
  return (
    <section id='layers' className='bg-surface'>
      <div className='container'>
        <div className='row jcc tc'>
          <div className='col-8'>
            <h2 className='title-section'>Three layers, nothing else</h2>
            <p className='title-lead c-muted'>
              Every site on Avior is made of the same three things. What makes it different is
              how you set them.
            </p>
          </div>
        </div>

        <div className='m-t-40'>
          <Tabs
            label='Layers of Avior'
            items={layers.map(({ label, title, text, href, file, code }) => ({
              label,
              content: (
                <div className='row flex-48 aic'>
                  <div className='col-5'>
                    <h3 className='title-sub'>{title}</h3>
                    <p className='c-muted'>{text}</p>
                    <a href={href} className='button dark outline mini m-t-8'>Read the docs<PiArrowRightBold aria-hidden='true' /></a>
                  </div>
                  <div className='col-7'>
                    <Code code={code} label={file} icon='file' />
                  </div>
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  )
}

export { Layers }
