import { PiScales, PiPackage, PiFileCss, PiEyeSlash, PiFiles, PiChecks } from 'react-icons/pi'

const facts = [
  { Icon: PiScales, title: 'MIT licence', text: 'Use it for client work and commercial projects.' },
  { Icon: PiPackage, title: 'Four dependencies', text: 'React, React DOM, React Router and React Icons.' },
  { Icon: PiFileCss, title: 'No CSS framework inside', text: 'Plain Sass files you can read in an afternoon.' },
  { Icon: PiEyeSlash, title: 'No tracking by default', text: 'Analytics stays off until you add your own ID.' },
  { Icon: PiFiles, title: 'Static files out', text: 'No server code and no database to maintain.' },
  { Icon: PiChecks, title: 'A check before you publish', text: 'yarn check lists every placeholder still left.' },
]

const Safe = () => {
  return (
    <section id='safe' className='p-y-104 bg-dark c-white'>
      <div className='container'>
        <div className='row jcc tc'>
          <div className='col-8'>
            <h2 className='title-section'>Safe to build <span className='c-pink'>real projects</span> on</h2>
            <p className='title-lead'>
              Everything in the box is yours to read, and there is very little of it.
            </p>
          </div>
        </div>

        <div className='row flex-40 m-t-56'>
          {facts.map(({ Icon, title, text }) => (
            <div key={title} className='col-4'>
              <div className='flex-16 aifs'>
                <Icon className='fz-32 c-pink' aria-hidden='true' />
                <div>
                  <h3 className='title-mini'>{title}</h3>
                  <p className='fz-16'>{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Safe }
