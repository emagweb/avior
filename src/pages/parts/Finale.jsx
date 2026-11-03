import { PiGithubLogoFill, PiBookOpenBold } from 'react-icons/pi'

const Finale = () => {
  return (
    <section id='cta' className='p-y-120 bg-dark c-white'>
      <div className='container tc'>
        <div className='row jcc'>
          <div className='col-8'>
            <h2 className='title-section'>Your next site <span className='c-pink'>starts here</span></h2>
            <p className='title-lead'>Clone it, set your colours, and build. It is free, and it is yours.</p>
          </div>
        </div>
        <div className='flex-16 rowrap jcc m-t-32'>
          <a href='https://github.com/emagweb/avior' className='button' target='_blank' rel='noreferrer'><PiGithubLogoFill aria-hidden='true' />Get it on GitHub</a>
          <a href='/docs' className='button white outline'><PiBookOpenBold aria-hidden='true' />Read the docs</a>
        </div>
      </div>
    </section>
  )
}

export { Finale }
