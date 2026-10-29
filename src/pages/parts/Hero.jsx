const Hero = () => {
  return (
    <section id="hero" className="p-y-104">
      <div className='container tc p-x-24'>
        <h1 className='title-intro'>Avior</h1>
        <h2 className='title-intro-sub'>A starter stack, not a framework to learn</h2>
        <p className='title fw-400 w-60 wide ma m-t-16'>
          React, Rsbuild and Sass utilities whose class names come from the Emmet
          dictionary. Write the value you see in the design and move on.
        </p>
        <div className="p-t-32">
          <a href="#get-started" className="button m-x-16 m-b-24">Get Started</a>
          <a href="#features" className="button outline m-x-16">Learn More</a>
        </div>
      </div>
    </section>
  )
}

export { Hero }
