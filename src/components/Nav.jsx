import { useLocation } from 'react-router-dom'

const Nav = ({ items = [] }) => {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  const resolve = (href) => (href.startsWith('#') && !onHome ? `/${href}` : href)

  if (items.length === 0) return null

  return (
    <nav className='fw-400'>
      {items.map(({ label, href }) => (
        <a key={href} href={resolve(href)}>{label}</a>
      ))}
    </nav>
  )
}

export { Nav }
