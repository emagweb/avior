import logo from '../assets/svg/logo.svg'
import { Nav } from './Nav'
import { main } from '../data/menu'

const Header = ({ menu = main, brand = 'Avior' }) => {
  return (
    <header className="p-y-24" id='top'>
      <div className='container'>
        <figure className='logo'>
          <a href='/'>
            <img src={logo} alt='Avior' />
            <span>{brand}</span>
          </a>
        </figure>
        <Nav items={menu} />
      </div>
    </header>
  )
}

export { Header }
