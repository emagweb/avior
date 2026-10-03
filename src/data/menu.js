// Site menus. Declare as many as you need, then pass the one you want into
// <Header menu={...} /> or <Footer menu={...} />.
//
// Item shape: { label: 'Text', href: '#anchor' | '/route' }
//
// An anchor (#features) points at a section of the home page. On any other page Nav
// prefixes it with a slash (/#features), so the same item works everywhere.

const main = [
  { label: 'Features', href: '#features' },
  { label: 'Get Started', href: '#get-started' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Docs', href: '/docs' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
]

export { main, legal }
