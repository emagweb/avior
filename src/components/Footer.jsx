import logo from '../assets/svg/logo.svg'
import { Nav } from './Nav'
import { legal } from '../data/menu'

const Footer = ({ menu = legal, brand = 'Avior', copy = '\u00A92026 - Avior.' }) => {
  return (
    <footer className='h-20 flex aic'>
      <div className='container flex aic jcsb'>
        <figure className='logo'>
          <a href='/'>
            <img src={logo} alt='Avior' />
            <span>{brand}</span>
          </a>
        </figure>
        <p>{copy} <span>All Rights Reserved.</span></p>
        <Nav items={menu} />
      </div>
    </footer>
  )
}

export { Footer }
