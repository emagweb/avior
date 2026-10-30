const Hero = () => {
  return (
    <section id="hero" className="h-100 flex aic">
      <div className='container tc'>
        <h1 className='title-intro c-white'>Avior</h1>
        <h2 className='title-intro-sub c-white'>A starter stack, not a framework to learn</h2>
        <p className='title-lead w-60 wide ma m-t-16 c-white'>
          React, Rsbuild and Sass utilities whose class names come from the Emmet
          dictionary. Write the value you see in the design and move on.
        </p>
        <div className="p-t-32">
          <a href="#get-started" className="button m-x-16 m-b-24">Get Started</a>
          <a href="#features" className="button outline m-x-16 c-white">Learn More</a>
        </div>
      </div>
    </section>
  )
}

export { Hero }
