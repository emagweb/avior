import { PiArrowRight } from 'react-icons/pi'

const tokens = [
  { cls: 'flex', css: 'display: flex' },
  { cls: 'aic', css: 'align-items: center' },
  { cls: 'jcsb', css: 'justify-content: space-between' },
  { cls: 'g-24', css: 'gap: 24px' },
  { cls: 'p-y-104', css: 'padding: 104px 0' },
]

const Hero = () => {
  return (
    <section id="hero" className="h-100 flex aic">
      <div className='container tc'>
        <span className='eyebrow c-white'>React · Rsbuild · Sass · no UI library</span>
        <h1 className='title-intro c-white'>Type less. Control everything.</h1>
        <p className='title-lead w-60 wide ma c-white'>
          A starter stack: React and Rsbuild already wired up, plus a Sass utility system
          of its own, with class names taken from the Emmet dictionary. Set the variables
          once, then build the whole thing by hand.
        </p>

        <div className='m-hide m-t-64'>
          <div className='tokens'>
            {tokens.map(({ cls, css }) => (
              <div key={cls} className='token'>
                <code>{cls}</code>
                <span>{css}</span>
              </div>
            ))}
          </div>
        </div>

        <p className='m-show m-t-40'>
          <code>{tokens.map(({ cls }) => cls).join(' ')}</code>
        </p>

        <p className='fz-16 c-white m-t-24'>
          Twenty-five characters, five declarations, nothing to look up.
        </p>

        <div className="p-t-40">
          <a href="#get-started" className="button g-8 m-x-16 m-b-24">Start building<PiArrowRight className='icon' aria-hidden='true' /></a>
          <a href="/docs" className="button outline white m-x-16 c-white">Every class</a>
        </div>
      </div>
    </section>
  )
}

export { Hero }
