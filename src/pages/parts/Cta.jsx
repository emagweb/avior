import { PiGithubLogo, PiBookOpen, PiSquaresFour } from 'react-icons/pi'

const repo = 'https://github.com/emagweb/avior'

const Cta = () => {
  return (
    <section id='cta' className='c-white p-y-160'>
      <div className='container tc'>
        <h2 className='title-section c-white'>Clone it. Set your colours. Build.</h2>
        <p className='title-lead w-60 wide ma c-white'>
          MIT, no runtime, no dependency tree to audit. Small enough to read in an
          afternoon and yours to change after that.
        </p>
        <div className='p-t-16'>
          <a href={repo} className='button white g-8 m-x-16 m-b-24' target='_blank' rel='noreferrer'><PiGithubLogo className='icon' aria-hidden='true' />GitHub</a>
          <a href='/docs' className='button outline white g-8 m-x-16 m-b-24 c-white'><PiBookOpen className='icon' aria-hidden='true' />Docs</a>
          <a href='/ui' className='button outline white g-8 m-x-16 m-b-24 c-white'><PiSquaresFour className='icon' aria-hidden='true' />Buttons</a>
        </div>
      </div>
    </section>
  )
}

export { Cta }
