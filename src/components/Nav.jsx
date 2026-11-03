import { useLocation } from 'react-router-dom'

const Nav = ({ items = [], onNavigate }) => {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  const resolve = (href) => (href.startsWith('#') && !onHome ? `/${href}` : href)

  if (items.length === 0) return null

  return (
    <nav>
      {items.map(({ label, href }) => (
        <a key={href + label} href={resolve(href)} onClick={onNavigate}>{label}</a>
      ))}
    </nav>
  )
}

export { Nav }
