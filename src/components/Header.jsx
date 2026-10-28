import logo from '../assets/svg/logo.svg'
import { Nav } from './Nav'
import { main } from '../data/menu'

//   <Header />                 the main menu
//   <Header menu={legal} />    any other menu
//   <Header menu={[]} />       logo only
//   <Header brand='Avior' />   text next to the logo
const Header = ({ menu = main, brand = 'Avior' }) => {
  return (
    <header className="p-y-24" id='top'>
      <div className='container p-x-24'>
        <figure className='logo'>
          <a href='/'><img src={logo} alt='Avior' width={68} height={40} /></a>
          <a href='/'><span className='fw-500'>{brand}</span></a>
        </figure>
        <Nav items={menu} />
      </div>
    </header>
  )
}

export { Header }
