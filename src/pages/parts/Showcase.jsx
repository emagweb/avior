import { PiPlusCircle } from 'react-icons/pi'
import { showcase } from '../../data/links'
import craftflow640 from '../../assets/showcase/craftflow-640.webp'
import craftflow800 from '../../assets/showcase/craftflow-800.webp'
import craftflow1248 from '../../assets/showcase/craftflow-1248.webp'
import ideaflow640 from '../../assets/showcase/ideaflow-640.webp'
import ideaflow800 from '../../assets/showcase/ideaflow-800.webp'
import ideaflow1248 from '../../assets/showcase/ideaflow-1248.webp'
import rogovsky640 from '../../assets/showcase/rogovsky-640.webp'
import rogovsky800 from '../../assets/showcase/rogovsky-800.webp'
import rogovsky1248 from '../../assets/showcase/rogovsky-1248.webp'
import smartcourses640 from '../../assets/showcase/smartcourses-640.webp'
import smartcourses800 from '../../assets/showcase/smartcourses-800.webp'
import smartcourses1248 from '../../assets/showcase/smartcourses-1248.webp'
import jobformom640 from '../../assets/showcase/jobformom-640.webp'
import jobformom800 from '../../assets/showcase/jobformom-800.webp'
import jobformom1248 from '../../assets/showcase/jobformom-1248.webp'
import proof640 from '../../assets/showcase/proof-640.webp'
import proof800 from '../../assets/showcase/proof-800.webp'
import proof1248 from '../../assets/showcase/proof-1248.webp'

const sites = [
  { name: 'CraftFlow', type: 'Digital product agency', href: 'https://craftflow.art/', small: craftflow640, medium: craftflow800, large: craftflow1248 },
  { name: 'IdeaFlow', type: 'Open innovation platform', href: 'https://stpahobka.com/', small: ideaflow640, medium: ideaflow800, large: ideaflow1248 },
  { name: 'SmartCourses', type: 'Online courses for teachers', href: 'https://eij.com.ua/', small: smartcourses640, medium: smartcourses800, large: smartcourses1248 },
  { name: 'Rogovsky Studio', type: 'Fintech compliance and security', href: 'https://rogovsky.net/', small: rogovsky640, medium: rogovsky800, large: rogovsky1248 },
  { name: 'Job4Mom', type: 'Free courses for mothers', href: 'https://job-for-mom.pages.dev/', small: jobformom640, medium: jobformom800, large: jobformom1248 },
  { name: 'Proof', type: 'Resumes verified by colleagues', small: proof640, medium: proof800, large: proof1248 },
]

const Site = ({ href, children }) => (
  href
    ? <a href={href} className='col-6 card' target='_blank' rel='noreferrer'>{children}</a>
    : <div className='col-6 card'>{children}</div>
)

const Showcase = () => {
  return (
    <section id='showcase'>
      <div className='container'>
        <div className='row jcc tc'>
          <div className='col-8'>
            <h2 className='title-section'>Grown from real sites</h2>
            <p className='title-lead c-muted'>
              Avior was assembled from working sites into one system. Six projects with nothing
              in common, and each of them left something in it. The next ones are yours.
            </p>
          </div>
        </div>

        <div className='row flex-48 m-t-40'>
          {sites.map(({ name, type, href, small, medium, large }) => (
            <Site key={name} href={href}>
              <img
                src={large}
                srcSet={`${small} 640w, ${medium} 800w, ${large} 1248w`}
                sizes='(max-width: 768px) 90vw, 576px'
                width='1248'
                height='780'
                loading='lazy'
                alt={`${name} home page`}
              />
              <div className='card-head'>
                <h3 className='title-card m-b-0'>{name}</h3>
                <span className='badge'>{type}</span>
              </div>
            </Site>
          ))}
        </div>

        <div className='card m-t-48'>
          <div className='row flex-24 aic'>
            <div className='col-8'>
              <div className='card-head'>
                <PiPlusCircle className='c-accent' aria-hidden='true' />
                <h3 className='title-card m-b-0'>Built a site with Avior?</h3>
              </div>
              <p className='card-body'>
                Send the link and a few words about the project. We look at every site and pick
                some for this page.
              </p>
            </div>
            <div className='col-4 flex jcfe'>
              <a href={showcase} className='button dark outline' target='_blank' rel='noreferrer'>Send your site</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Showcase }
