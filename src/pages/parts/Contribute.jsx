import { PiGithubLogo, PiHeart } from 'react-icons/pi'

// Both links are placeholders until the repository goes public. Change them here.
const repo = 'https://github.com/emagweb/avior'
const donate = 'https://github.com/sponsors/emagweb'

const next = [
  'The rest of the flexbox dictionary: ac-*, as-*, fxd-*, fxw-*, ord-*',
  'maw / miw / mah / mih, so a width stops setting three properties at once',
  'Forms and a card',
  'position, z-index, shadows, transitions',
  'A build-time check for classes used in markup but missing from the CSS',
]

const Contribute = () => {
  return (
    <section id='contribute' className='p-y-80'>
      <div className='container'>
        <div className='cols-2 g-64'>
          <div>
            <span className='eyebrow'>Open source</span>
            <h2 className='title-section'>Still early. Come break it.</h2>
            <p className='title-lead'>
              One person's toolkit, used on real work and opened up because it holds up.
              If something is missing, adding it is faster than waiting.
            </p>
            <p>
              Every rule that is not obvious is written down, the naming rule is one
              sentence, and the roadmap is public. Add a class and the only requirement is
              to name the Emmet abbreviation it came from.
            </p>
            <p className='m-t-24'>
              <a href={repo} className='button g-8 m-r-16 m-b-16' target='_blank' rel='noreferrer'><PiGithubLogo className='icon' aria-hidden='true' />Repository</a>
              <a href={donate} className='button outline g-8 m-b-16' target='_blank' rel='noreferrer'><PiHeart className='icon' aria-hidden='true' />Donate</a>
            </p>
          </div>
          <div>
            <h3 className='title-card'>On the list</h3>
            <ul>
              {next.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className='fz-16 m-t-24'>
              Pick one, or bring something that is not on it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Contribute }
