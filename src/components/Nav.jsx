import { useLocation } from 'react-router-dom'

// onNavigate lets the header close its mobile panel when a link is used.
const Nav = ({ items = [], onNavigate }) => {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  const resolve = (href) => (href.startsWith('#') && !onHome ? `/${href}` : href)

  if (items.length === 0) return null

  return (
    <nav className='fw-400'>
      {items.map(({ label, href }) => (
        <a key={href} href={resolve(href)} onClick={onNavigate}>{label}</a>
      ))}
    </nav>
  )
}

export { Nav }
