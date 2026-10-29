const steps = [
  {
    title: '1. Install',
    desc: 'Clone the repository and run yarn. Nothing else to wire up.'
  },
  {
    title: '2. Set the theme',
    desc: 'Put your colours, fonts, container width and radius into inc/_variables.sass.'
  },
  {
    title: '3. Build pages',
    desc: 'Compose with the Page template and lay out with utilities. Read the class reference once, then stop reading documentation.'
  },
]

const GetStarted = () => {
  return (
    <section id='get-started' className='p-y-104'>
      <div className='container tc p-x-24'>
        <h2 className='title-section'>Get Started</h2>
        <p className='title fw-400 w-60 wide ma'>
          Three steps, and the only file you are expected to edit is the variables one.
        </p>
        <div className='cols-3 g-40 m-t-64 p-b-64 tl'>
          {steps.map(({ title, desc }) => (
            <div key={title}>
              <h3 className='title-card'>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div className='tc'>
          <a href='/docs' className='button m-r-16'>Read the Docs</a>
          <a href='/ui' className='button outline'>See the Buttons</a>
        </div>
      </div>
    </section>
  )
}

export { GetStarted }
