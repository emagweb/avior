import { useEffect, useState } from 'react'
import { PiSun, PiMoon } from 'react-icons/pi'

const KEY = 'avior-theme'

const read = () => {
  const saved = window.localStorage.getItem(KEY)
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const Theme = () => {
  const [theme, setTheme] = useState(read)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem(KEY, theme)
  }, [theme])

  const dark = theme === 'dark'

  return (
    <button
      type='button'
      className='toggle'
      aria-pressed={dark}
      aria-label={dark ? 'Switch to the light theme' : 'Switch to the dark theme'}
      onClick={() => setTheme(dark ? 'light' : 'dark')}>
      {dark ? <PiSun aria-hidden='true' /> : <PiMoon aria-hidden='true' />}
    </button>
  )
}

export { Theme }
