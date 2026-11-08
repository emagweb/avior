import { PiCheckCircle, PiWarning } from 'react-icons/pi'
import { Page } from '../components/Page'
import { Field } from '../components/Field'
import { useSendForm } from '../hooks/useSendForm'
import { issues } from '../data/links'

const Contact = () => {
  const { send, status, errors } = useSendForm('contact')

  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (await send(Object.fromEntries(new FormData(form)))) form.reset()
  }

  return (
    <Page title='Contact' meta='Questions, ideas or a site you built with Avior. Write a few words and I will reply by email.'
      description='Write to the maker of Avior: questions, ideas and sites built with the design system.'>
      <div className='row flex-48'>
        <section className='col-7'>
          <form onSubmit={onSubmit} noValidate>
            <Field label='Name' error={errors.name}>
              {(props) => <input className='input' name='name' autoComplete='name' maxLength='120' required {...props} />}
            </Field>
            <Field label='Email' hint='Only to reply to you.' error={errors.email}>
              {(props) => <input className='input' name='email' type='email' autoComplete='email' maxLength='254' required {...props} />}
            </Field>
            <Field label='Message' error={errors.message}>
              {(props) => <textarea className='input' name='message' rows='6' maxLength='4000' required {...props} />}
            </Field>
            <input name='website' type='text' tabIndex='-1' autoComplete='off' hidden />
            <div aria-live='polite'>
              {status === 'sent' && (
                <div className='alert green'>
                  <PiCheckCircle aria-hidden='true' />
                  <p>Thank you, the message is saved. I will reply by email.</p>
                </div>
              )}
              {(status === 'failed' || status === 'unavailable') && (
                <div className='alert red'>
                  <PiWarning aria-hidden='true' />
                  <p>The message was not sent. Try again in a few minutes.</p>
                </div>
              )}
            </div>
            <button className='button dark' type='submit' disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending' : 'Send'}
            </button>
          </form>
        </section>
        <section className='col-5'>
          <h2 className='title'>Questions about the code</h2>
          <p>
            Bugs and proposals go to the repository <a href={issues} target='_blank' rel='noreferrer'>issues</a>,
            where everyone can see the answer. Before writing, have a look at the Limitations
            section in the README: some of it is known and already on the roadmap.
          </p>
        </section>
      </div>
    </Page>
  )
}

export { Contact }
