import { useLocation } from 'react-router-dom'

const scrollToSection = (id) => {
  const target = document.getElementById(id)
  if (!target) return false
  target.scrollIntoView()
  target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })
  return true
}

const Nav = ({ items = [], onNavigate }) => {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  const resolve = (href) => (href.startsWith('#') && !onHome ? `/${href}` : href)

  const onClick = (event, href) => {
    if (onHome && href.startsWith('#') && scrollToSection(href.slice(1))) event.preventDefault()
    onNavigate?.()
  }

  if (items.length === 0) return null

  return (
    <nav>
      {items.map(({ label, href }) => (
        <a key={href + label} href={resolve(href)} onClick={(event) => onClick(event, href)}>{label}</a>
      ))}
    </nav>
  )
}

export { Nav, scrollToSection }
