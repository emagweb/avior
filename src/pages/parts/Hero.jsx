import { PiArrowRightBold, PiGithubLogoBold } from 'react-icons/pi'
import { Code } from '../../components/Code'
import { repo, clone } from '../../data/links'

const Hero = () => {
  return (
    <section id='hero'>
      <div className='container'>
        <div className='row jcc tc'>
          <div className='col-8'>
            <p className='m-b-24'><span className='badge'>Open source · MIT · React and Rsbuild</span></p>
            <h1 className='title-intro'>Avior</h1>
            <p className='title-intro-sub'>
              A design system for React that builds a different site every time. Variables,
              helpers and components take their shape from your content, not from the framework.
            </p>
            <div className='flex-12 rowrap jcc'>
              <a href='/docs/installation' className='button dark'>Get started<PiArrowRightBold aria-hidden='true' /></a>
              <a href={repo} className='button dark outline' target='_blank' rel='noreferrer'><PiGithubLogoBold aria-hidden='true' />GitHub</a>
            </div>
          </div>
        </div>
        <div className='row jcc m-t-48'>
          <div className='col-6 tl'>
            <Code code={clone} />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
