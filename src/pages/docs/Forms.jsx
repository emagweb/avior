import { PiInfo } from 'react-icons/pi'
import { DocsLayout } from '../../components/DocsLayout'
import { Example, Variables, Table } from '../../components/Example'
import { Field } from '../../components/Field'
import { Code } from '../../components/Code'

const Forms = () => (
  <DocsLayout
    slug='forms'
    source='Forms'
    title='Forms'
    lead='Fields with a label, a hint and an error, text inputs, lists, checkboxes, radios and switches.'
    description='Avior forms: field, input, select, check and switch, the Field React component that links labels and errors, states through aria-invalid and disabled, and sending a form.'
    toc={[{ id: 'field', title: 'Field' }, { id: 'states', title: 'Errors and states' }, { id: 'select', title: 'Select and textarea' }, { id: 'check', title: 'Check and switch' }, { id: 'sending', title: 'Sending a form' }, { id: 'parts', title: 'Classes' }, { id: 'variables', title: 'Variables' }]}>

    <h2 id='field'>Field</h2>
    <p>
      <code>Field</code> draws the label, the hint and the error, and links them to the input
      with <code>id</code> and <code>aria-describedby</code>, so a screen reader reads all
      three.
    </p>
    <Example code={`import { Field } from './components/Field'

<Field label='Email' hint='We never share it.'>
  {(props) => <input className='input' type='email' {...props} />}
</Field>`}>
      <Field label='Email' hint='We never share it.'>
        {(props) => <input className='input' type='email' placeholder='jane@example.com' {...props} />}
      </Field>
      <Field label='Name'>
        {(props) => <input className='input mini' placeholder='mini, 32px' {...props} />}
      </Field>
    </Example>

    <h2 id='states'>Errors and states</h2>
    <p>
      States are attributes, not classes. Pass <code>error</code> to <code>Field</code> and the
      input gets <code>aria-invalid</code>; a disabled input is <code>disabled</code>.
    </p>
    <Example code={`<Field label='Email' error='Enter a valid email address'>
  {(props) => <input className='input' {...props} />}
</Field>
<input className='input' disabled />`}>
      <Field label='Email' error='Enter a valid email address'>
        {(props) => <input className='input' defaultValue='jane@' {...props} />}
      </Field>
      <Field label='Company'>
        {(props) => <input className='input' disabled defaultValue='Locked' {...props} />}
      </Field>
    </Example>

    <h2 id='select'>Select and textarea</h2>
    <Example code={`<select className='select'>…</select>
<textarea className='input' rows='4' />`}>
      <Field label='Plan'>
        {(props) => (
          <select className='select' defaultValue='team' {...props}>
            <option value='solo'>Solo</option>
            <option value='team'>Team</option>
            <option value='company'>Company</option>
          </select>
        )}
      </Field>
      <Field label='Message'>
        {(props) => <textarea className='input' rows='4' placeholder='Write a few words' {...props} />}
      </Field>
    </Example>

    <h2 id='check'>Check and switch</h2>
    <p>
      <code>check</code> works for both checkboxes and radios: the shape follows the
      <code> type</code>. <code>switch</code> is a checkbox drawn as a toggle, with
      <code> role='switch'</code>.
    </p>
    <Example code={`<label className='check'>
  <input type='checkbox' /> Remember me
</label>
<label className='check'>
  <input type='radio' name='plan' /> Monthly
</label>
<label className='switch'>
  <input type='checkbox' role='switch' /> Notifications
</label>`}>
      <div className='flex-24 rowrap'>
        <label className='check'><input type='checkbox' defaultChecked /> Remember me</label>
        <label className='check'><input type='checkbox' /> Send me news</label>
        <label className='check'><input type='checkbox' disabled /> Disabled</label>
      </div>
      <div className='flex-24 rowrap m-t-16'>
        <label className='check'><input type='radio' name='billing' defaultChecked /> Monthly</label>
        <label className='check'><input type='radio' name='billing' /> Yearly</label>
      </div>
      <div className='flex-24 rowrap m-t-16'>
        <label className='switch'><input type='checkbox' role='switch' defaultChecked /> Notifications</label>
        <label className='switch'><input type='checkbox' role='switch' /> Weekly digest</label>
      </div>
    </Example>

    <h2 id='sending'>Sending a form</h2>
    <p>
      A static site has no server. <code>hooks/useSendForm.js</code> sends the fields as JSON to
      a forms service and returns the errors by field name, so each one lands under its input.
    </p>
    <Code label='Contact.jsx' icon='file' code={`const { send, status, errors } = useSendForm('contact')

const onSubmit = (event) => {
  event.preventDefault()
  send(Object.fromEntries(new FormData(event.target)))
}

<form onSubmit={onSubmit} noValidate>
  <Field label='Email' error={errors.email}>
    {(props) => <input className='input' name='email' type='email' {...props} />}
  </Field>
  <button className='button dark' disabled={status === 'sending'}>Send</button>
</form>`} />
    <div className='alert blue'>
      <PiInfo aria-hidden='true' />
      <p>
        Until <code>FORMS_ENDPOINT</code> holds the address of the service, the hook sends
        nothing and returns the status <code>unavailable</code>.
      </p>
    </div>
    <Table
      head={['Status', 'When']}
      rows={[
        ['idle', 'nothing sent yet'],
        ['sending', 'the request is on its way'],
        ['sent', 'the service accepted the form'],
        ['invalid', 'the service returned errors by field'],
        ['failed', 'network or server error'],
        ['unavailable', 'no forms service configured'],
      ]}
    />

    <h2 id='parts'>Classes</h2>
    <Table
      head={['Class', 'What it is']}
      rows={[
        ['field', 'a column of label, control, hint and error'],
        ['field-label', 'the label'],
        ['field-hint', 'a muted note under the control'],
        ['field-error', 'the error, red in both modes'],
        ['input', 'a text input or a textarea, 40px tall'],
        ['select', 'a native select with its own arrow'],
        ['check', 'a checkbox or a radio with its label'],
        ['switch', 'a checkbox drawn as a toggle'],
        ['mini', 'a 32px input or select'],
      ]}
    />

    <h2 id='variables'>Variables</h2>
    <Variables rows={[
      ['$field-gap', '8px', 'space between label, control and hint'],
      ['$field-space', '20px', 'space below a field'],
      ['$input-height', '40px', 'height of input and select'],
      ['$input-padding', '0 12px', 'inner padding'],
      ['$input-radius', '$radius', 'corner radius'],
      ['$input-line', 'var(--line)', 'border colour'],
      ['$input-focus', 'var(--accent)', 'border and ring on focus'],
      ['$check-size', '16px', 'size of a checkbox or radio'],
      ['$check-active', 'var(--accent)', 'colour when checked'],
      ['$switch-width', '32px', 'width of a switch'],
      ['$switch-height', '20px', 'height of a switch'],
      ['$switch-on', 'var(--accent)', 'colour of a switch when on'],
    ]} />
  </DocsLayout>
)

export { Forms }
