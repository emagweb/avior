import { PiRocketLaunchBold, PiSlidersBold, PiPuzzlePieceBold, PiPackageBold, PiUsersThreeBold } from 'react-icons/pi'

const docs = [
  {
    title: 'Get started',
    Icon: PiRocketLaunchBold,
    pages: [
      { slug: '', title: 'Introduction' },
      { slug: 'installation', title: 'Installation' },
      { slug: 'structure', title: 'Project structure' },
    ],
  },
  {
    title: 'Foundations',
    Icon: PiSlidersBold,
    pages: [
      { slug: 'variables', title: 'Variables' },
      { slug: 'grid', title: 'Grid' },
      { slug: 'helpers', title: 'Helpers' },
      { slug: 'typography', title: 'Typography' },
      { slug: 'mode', title: 'Light and dark' },
    ],
  },
  {
    title: 'Components',
    Icon: PiPuzzlePieceBold,
    pages: [
      { slug: 'button', title: 'Button' },
      { slug: 'card', title: 'Card' },
      { slug: 'tabs', title: 'Tabs' },
      { slug: 'accordion', title: 'Accordion' },
      { slug: 'alert', title: 'Alert' },
      { slug: 'badge', title: 'Badge' },
      { slug: 'code', title: 'Code' },
    ],
  },
  {
    title: 'Build',
    Icon: PiPackageBold,
    pages: [
      { slug: 'pages', title: 'Pages and meta' },
      { slug: 'build', title: 'Build and publish' },
    ],
  },
  {
    title: 'Community',
    Icon: PiUsersThreeBold,
    pages: [
      { slug: 'contributing', title: 'Contributing' },
      { slug: 'showcase', title: 'Showcase' },
    ],
  },
]

const flat = docs.flatMap(({ pages }) => pages)

const href = (slug) => (slug ? `/docs/${slug}` : '/docs')

export { docs, flat, href }
