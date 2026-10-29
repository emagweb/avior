import logo from '../assets/svg/logo.svg'
import { Nav } from './Nav'
import { legal } from '../data/menu'

//   <Footer />                 the legal menu
//   <Footer menu={main} />     any other menu
//   <Footer menu={[]} />       the copyright line only
//   <Footer brand='Avior' />   text next to the logo
const Footer = ({ menu = legal, brand = 'Avior', copy = '\u00A92026 - Avior.' }) => {
  return (
    <footer className='p-b-96'>
      <div className='container p-x-24 flex aic jcsb fw-300'>
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
