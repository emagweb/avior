const steps = [
  {
    title: 'Clone and install',
    text: 'You need Node and Yarn. The site runs on your machine with live reload.',
    code: 'yarn && yarn start',
  },
  {
    title: 'Set your style',
    text: 'Colours, fonts, width and radius in one file. Every class and button follows.',
    code: '$accent: #0066FF',
  },
  {
    title: 'Build and publish',
    text: 'Lay out pages on the 12-column grid, then yarn build gives you a static site for any host.',
    code: 'row flex-24 col-4',
  },
]

const Steps = () => {
  return (
    <section id='start' className='p-y-104 bg-light'>
      <div className='container'>
        <div className='row jcc tc'>
          <div className='col-8'>
            <h2 className='title-section'>Up and running in <span className='c-accent'>three steps</span></h2>
            <p className='title-lead c-medium'>
              No setup wizard, no config to wire together. The first page is on screen in
              about five minutes.
            </p>
          </div>
        </div>

        <div className='row flex-32 m-t-56'>
          {steps.map(({ title, text, code }, index) => (
            <div key={title} className='col-4 tc bg-white r-20 p-y-40 p-x-32'>
              <p className='fz-64 fw-300 lh-100 c-accent m-b-24'>{index + 1}</p>
              <h3 className='title-card'>{title}</h3>
              <p className='c-medium'>{text}</p>
              <p className='m-t-24'><code className='bg-white'>{code}</code></p>
            </div>
          ))}
        </div>

        <p className='tc m-t-40'>
          <code className='bg-white'>git clone https://github.com/emagweb/avior.git</code>
        </p>
      </div>
    </section>
  )
}

export { Steps }
