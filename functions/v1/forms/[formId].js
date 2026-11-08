const forms = {
  contact: {
    name: { type: 'text', required: true, max: 120 },
    email: { type: 'email', required: true, max: 254 },
    message: { type: 'text', required: true, max: 4000 },
  },
}

const LIMIT = 5
const WINDOW = 600
const KEEP = 90 * 24 * 60 * 60
const MAX_BYTES = 16384
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const reply = (status, body) => Response.json(body, { status })

const hash = async (text) => {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

const validate = (schema, input) => {
  const fields = {}
  const errors = {}

  for (const [name, rule] of Object.entries(schema)) {
    const value = typeof input[name] === 'string' ? input[name].trim() : ''

    if (!value) {
      if (rule.required) errors[name] = 'This field is required'
      continue
    }
    if (value.length > rule.max) {
      errors[name] = `Keep it under ${rule.max} characters`
      continue
    }
    if (rule.type === 'email' && !EMAIL.test(value)) {
      errors[name] = 'Enter a valid email address'
      continue
    }
    fields[name] = value
  }

  return { fields, errors }
}

export const onRequestPost = async ({ request, env, params }) => {
  const formId = params.formId
  const schema = Object.hasOwn(forms, formId) ? forms[formId] : null
  if (!schema) return reply(404, { ok: false, error: 'unknown_form' })

  if (request.headers.get('Origin') !== new URL(request.url).origin) {
    return reply(403, { ok: false, error: 'forbidden' })
  }

  const text = await request.text()
  if (new TextEncoder().encode(text).length > MAX_BYTES) {
    return reply(413, { ok: false, error: 'too_large' })
  }

  let body
  try {
    body = JSON.parse(text)
  } catch {
    return reply(400, { ok: false, errors: {} })
  }
  if (!body || typeof body !== 'object' || !body.fields || typeof body.fields !== 'object') {
    return reply(400, { ok: false, errors: {} })
  }

  if (body.website) return reply(200, { ok: true })

  const { fields, errors } = validate(schema, body.fields)
  if (Object.keys(errors).length) return reply(400, { ok: false, errors })

  try {
    const now = Math.floor(Date.now() / 1000)
    const ip = request.headers.get('CF-Connecting-IP') || ''
    const ipHash = await hash(`${env.HASH_SALT || ''}:${formId}:${ip}`)

    const recent = await env.DB
      .prepare('SELECT COUNT(*) AS count FROM messages WHERE form_id = ? AND ip_hash = ? AND created_at > ?')
      .bind(formId, ipHash, now - WINDOW)
      .first()
    if (recent.count >= LIMIT) return reply(429, { ok: false, error: 'rate_limited' })

    await env.DB.batch([
      env.DB
        .prepare('INSERT INTO messages (form_id, created_at, fields, ip_hash) VALUES (?, ?, ?, ?)')
        .bind(formId, now, JSON.stringify(fields), ipHash),
      env.DB.prepare('DELETE FROM messages WHERE created_at < ?').bind(now - KEEP),
    ])

    return reply(200, { ok: true })
  } catch {
    return reply(500, { ok: false, error: 'server' })
  }
}
