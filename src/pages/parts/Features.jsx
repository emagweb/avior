import { PiTextAa, PiRuler, PiSquaresFour, PiCircleHalf } from 'react-icons/pi'

const features = [
  {
    Icon: PiTextAa,
    title: 'Names you can read',
    text: 'First letters of the property, then of the value. align-items: center is aic, justify-content: space-between is jcsb. The markup explains itself, so it needs no comments.',
    sample: 'flex aic jcsb',
  },
  {
    Icon: PiRuler,
    title: 'Values from the design',
    text: 'The mockup says 104px, you write p-t-104. No scale to translate, nothing to look up, nothing to configure.',
    sample: 'p-t-104 fz-18 r-12',
  },
  {
    Icon: PiSquaresFour,
    title: 'A grid of 12 columns',
    text: 'container, row and col, the grid you already know from Bootstrap. col-4 is a third, col-6 a half, and every column stacks on phones.',
    sample: 'row flex-24 col-6',
  },
  {
    Icon: PiCircleHalf,
    title: 'One file, two themes',
    text: 'Colours, fonts, widths and radius live in one variables file. Light and dark themes are built in, with a switch that remembers the choice.',
    sample: '$accent $basic $radius',
  },
]

const Features = () => {
  return (
    <section id='why' className='p-y-104'>
      <div className='container'>
        <div className='row jcc tc'>
          <div className='col-8'>
            <h2 className='title-section'>Why it is <span className='c-accent'>fast</span></h2>
            <p className='title-lead c-medium'>
              Four decisions that save hours on every page.
            </p>
          </div>
        </div>

        <div className='row flex-32 m-t-56'>
          {features.map(({ Icon, title, text, sample }) => (
            <div key={title} className='col-6 bg-light r-20 p-y-40 p-x-40'>
              <Icon className='fz-40 c-accent m-b-24' aria-hidden='true' />
              <h3 className='title-card'>{title}</h3>
              <p className='c-medium'>{text}</p>
              <p className='m-t-24'><code className='bg-white'>{sample}</code></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Features }
