import { useEffect, useId, useState } from 'react'
import { PiTerminalWindow, PiFileCode, PiCopyBold, PiCheckBold } from 'react-icons/pi'
import { TabList } from './Tabs'

const icons = { terminal: PiTerminalWindow, file: PiFileCode }

const Code = ({ code, variants, label = 'Terminal', icon = 'terminal' }) => {
  const options = variants || [{ label, code }]
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)
  const base = useId()
  const Icon = icons[icon] || PiFileCode
  const text = options[active].code

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <figure className='code'>
      <figcaption>
        <span><Icon aria-hidden='true' />{label}</span>
        {variants && (
          <TabList labels={variants.map((item) => item.label)} active={active} setActive={setActive} label='Package manager' base={base} />
        )}
        <button type='button' className='code-copy' onClick={copy}>
          {copied ? <PiCheckBold aria-hidden='true' /> : <PiCopyBold aria-hidden='true' />}
          <span aria-live='polite'>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </figcaption>
      <pre
        id={variants ? `${base}-panel-${active}` : undefined}
        role={variants ? 'tabpanel' : undefined}
        aria-labelledby={variants ? `${base}-tab-${active}` : undefined}
        tabIndex={0}>
        <code>{text}</code>
      </pre>
    </figure>
  )
}

export { Code }
