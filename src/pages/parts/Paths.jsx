import { PiRocketLaunch, PiSliders, PiGitPullRequest, PiArrowRight } from 'react-icons/pi'

const paths = [
  {
    Icon: PiRocketLaunch,
    title: 'Use it',
    text: 'Clone the repository, run two commands and build your site on a working base: routing, pages, light and dark mode, meta tags.',
    link: 'Installation',
    href: '/docs/installation',
  },
  {
    Icon: PiSliders,
    title: 'Make it yours',
    text: 'Colours, type, spacing and every component are variables. Change them in one file and the same markup becomes your site.',
    link: 'Variables',
    href: '/docs/variables',
  },
  {
    Icon: PiGitPullRequest,
    title: 'Contribute',
    text: 'Missing a component? Write it so others can tune it with variables, and send a pull request. The engine is small enough to read in an evening.',
    link: 'How to contribute',
    href: '/docs/contributing',
  },
]

const Paths = () => {
  return (
    <section id='paths'>
      <div className='container'>
        <div className='row flex-24'>
          {paths.map(({ Icon, title, text, link, href }) => (
            <a key={title} href={href} className='col-4 card'>
              <div className='card-head'>
                <Icon className='c-accent' aria-hidden='true' />
                <h2 className='title-card m-b-0'>{title}</h2>
              </div>
              <p className='card-body'>{text}</p>
              <span className='card-foot'>{link}<PiArrowRight aria-hidden='true' /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Paths }
