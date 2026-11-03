import { PiArrowDownBold, PiGithubLogoFill } from 'react-icons/pi'

const Hero = () => {
  return (
    <section id='hero' className='p-y-104'>
      <div className='container'>
        <div className='row flex-64 aic'>
          <div className='col-6'>
            <h1 className='title-intro'>
              Build a website in <span className='c-accent'>days</span>, not weeks.
            </h1>
            <p className='title-lead c-medium'>
              Avior is a free React starter with a <strong className='c-dark'>mini CSS
              framework</strong> inside: short class names, values straight from the design
              and a <strong className='c-dark'>grid of 12 columns</strong>.
            </p>
            <p className='fw-600'>Minimum code. Minimum setup. Maximum speed.</p>
            <div className='flex-16 rowrap aic m-t-40'>
              <a href='#start' className='button'>Get started<PiArrowDownBold aria-hidden='true' /></a>
              <a href='https://github.com/emagweb/avior' className='button dark outline' target='_blank' rel='noreferrer'><PiGithubLogoFill aria-hidden='true' />GitHub</a>
            </div>
          </div>

          <div className='col-6 m-hide'>
            <div className='row flex-16'>
              <div className='col-7'>
                <div className='flex aife bg-violet c-white r-20 p-y-24 p-x-24 h-p-336'>
                  <p className='fz-14'>Screenshot: agency site</p>
                </div>
              </div>
              <div className='col-5'>
                <div className='flex aife bg-accent c-white r-20 p-y-24 p-x-24 h-p-160 m-b-16'>
                  <p className='fz-14'>Screenshot: platform</p>
                </div>
                <div className='flex aife bg-blue c-white r-20 p-y-24 p-x-24 h-p-160'>
                  <p className='fz-14'>Screenshot: courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
