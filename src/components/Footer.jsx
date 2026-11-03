import logo from '../assets/svg/logo.svg'
import { Nav } from './Nav'
import { legal } from '../data/menu'

const Footer = ({ menu = legal, brand = 'Avior', copy = '© 2026 Antonina Osypenko. Free and open source under the MIT licence.' }) => {
  return (
    <footer>
      <div className='container row flex-24 aic jcsb'>
        <div className='col-auto'>
          <figure className='logo m-b-8'>
            <a href='/'>
              <img src={logo} alt='' />
              <span>{brand}</span>
            </a>
          </figure>
          <p>{copy}</p>
        </div>
        <div className='col-auto'>
          <Nav items={menu} />
        </div>
      </div>
    </footer>
  )
}

export { Footer }
