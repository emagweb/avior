import { Page } from '../components/Page'

const palette = [
  'accent', 'pink', 'blue', 'violet', 'red', 'orange',
  'yellow', 'green', 'dark', 'medium', 'grey', 'light', 'white', 'theme'
]

const Row = ({ title, modifier = '' }) => (
  <section>
    <h3 className='title'>{title}</h3>
    <div className='flex rowrap aic'>
      {palette.map((name) => (
        <a href='#top' key={name} className={`button ${name} ${modifier} m-r-16 m-b-16`}>
          {name}
        </a>
      ))}
    </div>
  </section>
)

const Ui = () => {
  return (
    <Page title='Buttons' meta='Hover a button: solid turns into outline, outline fills in.'>
      <section>
        <h3 className='title'>Default</h3>
        <div className='flex rowrap aic'>
          <a href='#top' className='button m-r-16 m-b-16'>button</a>
          <a href='#top' className='button outline m-r-16 m-b-16'>button outline</a>
        </div>
      </section>

      <section>
        <h3 className='title'>Radius</h3>
        <p>
          The default comes from the <code>$radius</code> variable. Override it on a single
          button with any <code>r-N</code> utility.
        </p>
        <div className='flex rowrap aic'>
          <a href='#top' className='button m-r-16 m-b-16'>$radius</a>
          <a href='#top' className='button r-4 m-r-16 m-b-16'>r-4</a>
          <a href='#top' className='button r-0 m-r-16 m-b-16'>r-0</a>
          <a href='#top' className='button outline r-4 m-r-16 m-b-16'>outline r-4</a>
          <a href='#top' className='button outline r-0 m-r-16 m-b-16'>outline r-0</a>
        </div>
      </section>

      <section>
        <h3 className='title'>Mini</h3>
        <p>
          <code>mini</code> is 32px tall with 20px side padding and no minimum width.
        </p>
        <div className='flex rowrap aic'>
          <a href='#top' className='button mini m-r-16 m-b-16'>mini</a>
          <a href='#top' className='button mini outline m-r-16 m-b-16'>mini outline</a>
          <a href='#top' className='button mini blue r-4 m-r-16 m-b-16'>mini blue r-4</a>
          <a href='#top' className='button mini dark outline r-0 m-r-16 m-b-16'>mini dark outline r-0</a>
        </div>
      </section>

      <section>
        <h3 className='title'>Light outline on a dark background</h3>
        <p>
          This is what the light colours are for. On a dark section a white or grey outline
          button keeps its own colour as the label, and fills in on hover.
        </p>
        <div className='bg-dark r-8 p-y-40 p-x-24'>
          <div className='flex rowrap aic'>
            {['white', 'light', 'grey', 'theme'].map((name) => (
              <a href='#top' key={name} className={`button ${name} outline m-r-16 m-b-16`}>
                {name} outline
              </a>
            ))}
          </div>
        </div>
      </section>

      <Row title='Solid' />
      <Row title='Outline' modifier='outline' />
      <Row title='Solid, r-4' modifier='r-4' />
      <Row title='Mini, outline' modifier='mini outline' />
    </Page>
  )
}

export { Ui }
