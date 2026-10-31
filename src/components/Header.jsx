import { useEffect, useRef, useState } from 'react'
import logo from '../assets/svg/logo.svg'
import { Nav } from './Nav'
import { Theme } from './Theme'
import { main } from '../data/menu'

//   <Header />                 the main menu
//   <Header menu={legal} />    any other menu
//   <Header menu={[]} />       logo only
//   <Header brand='Avior' />   text next to the logo
const Header = ({ menu = main, brand = 'Avior' }) => {
  const [open, setOpen] = useState(false)
  const bar = useRef(null)

  // Below sm the menu is a panel, so it closes on an outside click and on Escape.
  useEffect(() => {
    if (!open) return

    const onPointerDown = (event) => {
      if (bar.current && !bar.current.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className='p-y-24' id='top'>
      <div className='container' ref={bar}>
        <figure className='logo'>
          <a href='/'>
            <img src={logo} alt='Avior' />
            <span>{brand}</span>
          </a>
        </figure>

        <button
          type='button'
          className={open ? 'burger open' : 'burger'}
          aria-expanded={open}
          aria-controls='menu'
          aria-label={open ? 'Close the menu' : 'Open the menu'}
          onClick={() => setOpen(!open)}>
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </button>

        <div className={open ? 'menu open' : 'menu'} id='menu'>
          <Nav items={menu} onNavigate={() => setOpen(false)} />
          <Theme />
        </div>
      </div>
    </header>
  )
}

export { Header }
