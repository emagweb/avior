import { PiGitPullRequest, PiHeart, PiHeartBold } from 'react-icons/pi'

const OpenSource = () => {
  return (
    <section id='open-source' className='p-y-104'>
      <div className='container'>
        <div className='row jcc tc'>
          <div className='col-8'>
            <h2 className='title-section'>Open source, <span className='c-accent'>and growing</span></h2>
            <p className='title-lead c-medium'>
              Avior is free and will stay free. Help shape what comes next.
            </p>
          </div>
        </div>

        <div className='row flex-32 m-t-56'>
          <div className='col-6 bg-light r-20 p-y-40 p-x-40'>
            <PiGitPullRequest className='fz-40 c-accent m-b-24' aria-hidden='true' />
            <h3 className='title-sub'>Suggest an improvement</h3>
            <p className='c-medium'>
              Missing a class, found a bug, have an idea? Open an issue or send a pull request.
              Next on the list: forms, a card, position and transitions.
            </p>
            <a href='https://github.com/emagweb/avior/issues' className='button dark m-t-24' target='_blank' rel='noreferrer'>Open an issue</a>
          </div>

          <div className='col-6 bg-light r-20 p-y-40 p-x-40'>
            <PiHeart className='fz-40 c-accent m-b-24' aria-hidden='true' />
            <h3 className='title-sub'>Support the project</h3>
            <p className='c-medium'>
              If Avior saves you days on client work, sponsoring it pays for new components,
              documentation and fixes. A star on GitHub helps people find it.
            </p>
            <a href='https://github.com/sponsors/emagweb' className='button m-t-24' target='_blank' rel='noreferrer'><PiHeartBold aria-hidden='true' />Become a sponsor</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { OpenSource }
