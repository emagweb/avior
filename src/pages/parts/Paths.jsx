import { PiCodeBlock, PiChatCircleText } from 'react-icons/pi'

const Paths = () => {
  return (
    <section id='paths' className='p-y-104'>
      <div className='container'>
        <div className='row jcc tc'>
          <div className='col-8'>
            <h2 className='title-section'>Write it yourself, <span className='c-accent'>or don't</span></h2>
            <p className='title-lead c-medium'>
              Build the pages by hand, or give the repository to an AI agent. The result is the
              same clean, readable code.
            </p>
          </div>
        </div>

        <div className='row flex-32 m-t-56'>
          <div className='col-6 bg-light r-20 p-y-40 p-x-40'>
            <PiCodeBlock className='fz-40 c-accent m-b-24' aria-hidden='true' />
            <h3 className='title-sub'>You write the code</h3>
            <p className='c-medium'>
              For front-end developers who want a React site <strong className='c-dark'>done
              in a couple of days</strong>. Routing, pages, header with a mobile menu, footer,
              dark theme, meta tags and analytics are already wired up. You go straight to the
              sections.
            </p>
          </div>

          <div className='col-6 bg-light r-20 p-y-40 p-x-40'>
            <PiChatCircleText className='fz-40 c-accent m-b-24' aria-hidden='true' />
            <h3 className='title-sub'>An agent writes it for you</h3>
            <p className='c-medium'>
              Describe the page to Claude, Cursor, Kiro or any coding agent. The rules in the
              repository keep it on <strong className='c-dark'>the same small set of
              classes</strong>, so it builds your project fast and you can still fix every line
              by hand.
            </p>
            <p className='bg-white r-12 p-y-16 p-x-24 m-t-24 fz-16'>
              “Add a pricing section with three plans, the middle one highlighted. Use the
              existing classes, no new CSS.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Paths }
