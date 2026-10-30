const Cta = () => {
  return (
    <section id='cta' className='c-white p-y-160'>
      <div className='container tc'>
        <h2 className='title-section c-white'>Start from an empty page</h2>
        <p className='title-lead w-60 wide ma c-white'>
          No vocabulary to learn first. Set your colours in one file, write the values you
          see in the design, and the stack stays out of the way.
        </p>
        <div className='p-t-16'>
          <a href='/docs' className='button white m-x-16 m-b-24'>Read the Docs</a>
          <a href='/about' className='button outline white m-x-16 c-white'>Why it exists</a>
        </div>
      </div>
    </section>
  )
}

export { Cta }
