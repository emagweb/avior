import { useLocation } from 'react-router-dom'

// A list of links. Away from the home page an anchor points back to it: #features -> /#features
const Nav = ({ items = [] }) => {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  const resolve = (href) => (href.startsWith('#') && !onHome ? `/${href}` : href)

  if (items.length === 0) return null

  return (
    <nav>
      {items.map(({ label, href }) => (
        <a key={href} href={resolve(href)}>{label}</a>
      ))}
    </nav>
  )
}

export { Nav }
