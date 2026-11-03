import { useEffect, useState } from 'react'
import { PiSunBold, PiMoonBold } from 'react-icons/pi'

const KEY = 'avior-mode'

const read = () => {
  const saved = window.localStorage.getItem(KEY)
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const Mode = () => {
  const [mode, setMode] = useState(null)

  useEffect(() => {
    setMode(read())
  }, [])

  useEffect(() => {
    if (!mode) return
    document.body.classList.toggle('dark', mode === 'dark')
    window.localStorage.setItem(KEY, mode)
  }, [mode])

  const dark = mode === 'dark'

  return (
    <button
      type='button'
      className='toggle'
      aria-pressed={dark}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setMode(dark ? 'light' : 'dark')}>
      {dark ? <PiSunBold aria-hidden='true' /> : <PiMoonBold aria-hidden='true' />}
    </button>
  )
}

export { Mode }
