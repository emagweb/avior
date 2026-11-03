import { PiInfo, PiCheckCircle, PiWarning, PiXCircle } from 'react-icons/pi'
import { DocsLayout } from '../../components/DocsLayout'
import { Example, Variables } from '../../components/Example'

const Alert = () => (
  <DocsLayout
    slug='alert'
    source='Alert'
    title='Alert'
    lead='A note that stands out from the text. Any palette colour tints it, in both modes.'
    description='The Avior alert: a neutral note and colour variants from the palette, tinted with color-mix so they work in light and dark mode.'
    toc={[{ id: 'example', title: 'Example' }, { id: 'colours', title: 'Colours' }, { id: 'variables', title: 'Variables' }]}>

    <h2 id='example'>Example</h2>
    <Example code={`<div className='alert blue'>
  <PiInfo />
  <p><strong>New to React?</strong> Start with the installation guide.</p>
</div>`}>
      <div className='alert blue'>
        <PiInfo aria-hidden='true' />
        <p><strong>New to React?</strong> Start with the installation guide, it covers everything from scratch.</p>
      </div>
      <div className='alert m-b-0'>
        <PiInfo aria-hidden='true' />
        <p>Without a colour the alert is neutral and follows the mode.</p>
      </div>
    </Example>

    <h2 id='colours'>Colours</h2>
    <p>
      Add any palette name. The background and the border are mixed from that colour and the
      page, so the same class reads well in light and dark mode.
    </p>
    <Example code={`<div className='alert green'>…</div>
<div className='alert yellow'>…</div>
<div className='alert red'>…</div>`}>
      <div className='alert green'>
        <PiCheckCircle aria-hidden='true' />
        <p>The site is built and ready to publish.</p>
      </div>
      <div className='alert yellow'>
        <PiWarning aria-hidden='true' />
        <p>The domain is still a placeholder. Run <code>yarn check</code>.</p>
      </div>
      <div className='alert red m-b-0'>
        <PiXCircle aria-hidden='true' />
        <p>The build failed. Read the first error in the terminal.</p>
      </div>
    </Example>

    <h2 id='variables'>Variables</h2>
    <Variables rows={[
      ['$alert-padding', '12px 16px', 'inner padding'],
      ['$alert-gap', '12px', 'space between the icon and the text'],
      ['$alert-radius', '$radius', 'corner radius'],
      ['$alert-tint', '8%', 'share of the colour in the background'],
      ['$alert-edge', '32%', 'share of the colour in the border'],
    ]} />
  </DocsLayout>
)

export { Alert }
