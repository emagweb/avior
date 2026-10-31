import { PiDownloadSimple, PiSliders, PiCode } from 'react-icons/pi'

const steps = [
  {
    numeral: 'Step 01',
    Icon: PiDownloadSimple,
    title: 'Clone and install',
    desc: 'git clone, then yarn. There is nothing else to wire up.'
  },
  {
    numeral: 'Step 02',
    Icon: PiSliders,
    title: 'Set the variables',
    desc: 'Colours, fonts, container width, radius. One file: inc/_variables.sass.'
  },
  {
    numeral: 'Step 03',
    Icon: PiCode,
    title: 'Write the markup',
    desc: 'Compose with the Page template, lay out with utilities. Read the reference once and stop reading documentation.'
  },
]

const GetStarted = () => {
  return (
    <section id='get-started' className='p-y-80 bg-light'>
      <div className='container'>
        <div className='w-60 wide'>
          <span className='eyebrow'>Get started</span>
          <h2 className='title-section'>Three steps and you are writing</h2>
          <p className='title-lead'>
            The only file you have to touch is the variables one.
          </p>
        </div>
        <div className='cols-3 g-24 m-t-64 p-b-40'>
          {steps.map(({ numeral, Icon, title, desc }) => (
            <div key={title} className='card'>
              <Icon className='icon' aria-hidden='true' />
              <span className='numeral'>{numeral}</span>
              <h3 className='title-card'>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div>
          <a href='/docs' className='button m-r-16'>Read the Docs</a>
          <a href='/ui' className='button outline'>See the Buttons</a>
        </div>
      </div>
    </section>
  )
}

export { GetStarted }
