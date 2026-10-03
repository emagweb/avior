const features = [
  {
    title: 'Names from Emmet',
    desc: 'aic, jcsb, g-24 — first letters of the property and the value. No dictionary to learn.'
  },
  {
    title: 'Values from the design',
    desc: 'You see 104px, you write p-t-104. No intermediate scale, no tokens.'
  },
  {
    title: 'One place to configure',
    desc: 'Colours and fonts live in inc/_variables.sass. No other file needs editing.'
  },
]

const Features = () => {
  return (
    <section id='features' className='p-y-104'>
      <div className='container tc p-x-24'>
        <h2 className='title-intro p-b-40'>What We Offer</h2>
        <div className='row'>
          {features.map(({ title, desc }) => (
            <div className='col-lg-4 p-y-24' key={title}>
              <h3 className='title-mini p-b-16 c-pink'>{title}</h3>
              <p className='title fw-400'>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Features }
