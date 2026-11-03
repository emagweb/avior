import { PiArrowUpRightBold } from 'react-icons/pi'

const projects = [
  { name: 'CraftFlow', type: 'Digital product agency', href: 'https://craftflow.art/', bg: 'bg-violet' },
  { name: 'IdeaFlow', type: 'Platform for ideas and builders', href: 'https://stpahobka.com/', bg: 'bg-accent' },
  { name: 'Rogovsky Studio', type: 'Fintech compliance and security', href: 'https://rogovsky.net/', bg: 'bg-dark' },
  { name: 'SmartCourses', type: 'Online courses for teachers', href: 'https://eij.com.ua/', bg: 'bg-blue' },
]

const Projects = () => {
  return (
    <section id='projects' className='p-y-104 bg-light'>
      <div className='container'>
        <div className='row jcc tc'>
          <div className='col-8'>
            <h2 className='title-section'>Grown from <span className='c-accent'>real projects</span></h2>
            <p className='title-lead c-medium'>
              Every site I built made the toolkit a little faster, cleaner and more universal.
              Avior is all of it in one place, so no project starts from zero again.
            </p>
          </div>
        </div>

        <div className='row flex-32 m-t-56'>
          {projects.map(({ name, type, href, bg }) => (
            <div key={name} className='col-6'>
              <a href={href} target='_blank' rel='noreferrer' className='row bg-white r-20 p-y-16 p-x-16'>
                <div className={`col-12 flex aife ${bg} c-white r-12 p-y-24 p-x-24 h-p-280`}>
                  <p className='fz-14'>Screenshot</p>
                </div>
                <div className='flex-16 col-12 aic jcsb p-y-16 p-x-8'>
                  <div>
                    <h3 className='title-card'>{name}</h3>
                    <p className='fz-14 fw-600 c-accent'>{type}</p>
                  </div>
                  <PiArrowUpRightBold className='fz-24 c-accent' aria-hidden='true' />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Projects }
