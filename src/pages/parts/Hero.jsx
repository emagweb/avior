const Hero = () => {
  return (
    <section id="hero" className="p-y-104">
      <div className='container tc p-x-24'>
        <h1 className='fw-400'>Avior</h1>
        <h2 className="c-accent title-intro fw-800">A starter stack, not a framework to learn</h2>
        <h3 className='title w-60 ma m-t-16'>
          React, Rsbuild and Sass utilities whose class names come from the Emmet
          dictionary. Write the value you see in the design and move on.
        </h3>
        <div className="p-t-32">
          <a href="#get-started" className="button m-x-16 m-b-24">Get Started</a>
          <a href="#features" className="button outline m-x-16">Learn More</a>
        </div>
      </div>
    </section>
  )
}

export { Hero }
