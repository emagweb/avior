import { PiArrowUpRightBold } from 'react-icons/pi'
import { DocsLayout } from '../../components/DocsLayout'
import { showcase } from '../../data/links'

const ShowcasePage = () => (
  <DocsLayout
    slug='showcase'
    source='ShowcasePage'
    title='Showcase'
    lead='Built a site with Avior? Send it in. We look at every one and pick some for the home page.'
    description='How to send a site built with Avior to the showcase on the home page: what to include and how sites are chosen.'
    toc={[{ id: 'send', title: 'Send your site' }, { id: 'chosen', title: 'How sites are chosen' }]}>

    <h2 id='send'>Send your site</h2>
    <p>Open a showcase issue on GitHub. The form asks for three things:</p>
    <ul>
      <li>the link to the live site;</li>
      <li>a few words about the project and who it is for;</li>
      <li>optionally, which parts of Avior you changed or added.</li>
    </ul>
    <a href={showcase} className='button dark m-t-8' target='_blank' rel='noreferrer'>
      Send your site<PiArrowUpRightBold aria-hidden='true' />
    </a>

    <h2 id='chosen'>How sites are chosen</h2>
    <p>
      The home page shows range: sites that have nothing in common with each other. A site
      that looks like none of the others has the best chance. We take the screenshot
      ourselves and link to the live site.
    </p>
  </DocsLayout>
)

export { ShowcasePage }
