import { PiSliders, PiLightning, PiCursorText } from 'react-icons/pi'

const facts = [
  {
    Icon: PiSliders,
    value: 'One file',
    desc: 'Colours, fonts, container, radius, steps. Set it once. Nothing else in the stack asks you for configuration.'
  },
  {
    Icon: PiLightning,
    value: 'Two days',
    desc: 'A full site, built by hand. That is the pace this was written for, measured on real work and not on a slide.'
  },
  {
    Icon: PiCursorText,
    value: 'Zero lookups',
    desc: 'The class is the declaration. Your editor completes the abbreviation, so the layout gets typed as fast as it gets read.'
  },
]

const Speed = () => {
  return (
    <section id='speed' className='p-y-80 bg-light'>
      <div className='container'>
        <div className='w-60 wide'>
          <span className='eyebrow'>How it feels</span>
          <h2 className='title-section'>Set the variables. Then just build.</h2>
          <p className='title-lead'>
            No plugin step, no token names to invent, no scale to argue with. You write
            markup and it does what it says.
          </p>
        </div>

        <div className='cols-3 g-24 m-t-64'>
          {facts.map(({ Icon, value, desc }) => (
            <div key={value} className='card'>
              <Icon className='icon' aria-hidden='true' />
              <h3 className='title-sub'>{value}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Speed }
