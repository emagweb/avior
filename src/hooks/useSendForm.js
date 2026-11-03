import { useState } from 'react'

const FORMS_ENDPOINT = ''

const useSendForm = (formId) => {
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const send = async (fields, token = '') => {
    setErrors({})

    if (!FORMS_ENDPOINT) {
      setStatus('unavailable')
      return false
    }

    setStatus('sending')
    try {
      const response = await fetch(`${FORMS_ENDPOINT}/v1/forms/${encodeURIComponent(formId)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields, website: '', token }),
      })
      const result = await response.json().catch(() => ({}))

      if (response.ok && result.ok) {
        setStatus('sent')
        return true
      }

      setErrors(result.errors || {})
      setStatus(response.status === 400 ? 'invalid' : 'failed')
      return false
    } catch {
      setStatus('failed')
      return false
    }
  }

  return { send, status, errors }
}

export { useSendForm }
