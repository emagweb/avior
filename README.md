# Avior

An open source design system for React and Rsbuild. One engine, and every site built on it
looks like its own content.

Avior has no look of its own. It gives you three layers:

- **Variables** decide how the site looks: palette, type, spacing, radius, widths.
- **Helpers** take values straight from the design: `p-y-48` is 48px top and bottom.
- **Components** cover what helpers cannot: card, tabs, accordion, alert, badge, code.
  Each one is tuned by its own variables.

It was assembled from working sites into one system, and it keeps growing the same way.

## Quick start

```bash
git clone https://github.com/emagweb/avior.git my-site
cd my-site
yarn
yarn start
```

You need Node.js 20 or later. Yarn 4 ships with the repository in `.yarn/releases`; if
`yarn` is not on your machine, run `corepack enable` once.

| command                | what it does                                                  |
| ---------------------- | ------------------------------------------------------------- |
| `yarn start`           | dev server, every helper available                            |
| `yarn build`           | production build: every route prerendered, unused CSS removed |
| `yarn preview`         | serves the production build                                   |
| `yarn check`           | lists placeholders left before publishing                     |
| `PURGE=off yarn build` | production build without removing unused classes              |

## Documentation

The documentation is part of the site: run `yarn start` and open `/docs`. It covers
installation, variables, the grid, helpers, typography, light and dark mode, every
component with its variables, pages and meta, building and publishing, and contributing.

In the repository:

- [docs/utilities.md](docs/utilities.md) — every helper and component class
- [docs/decisions.md](docs/decisions.md) — why the engine is built the way it is
- [CONTRIBUTING.md](CONTRIBUTING.md) — how to extend the system
- [AGENTS.md](AGENTS.md) — rules for AI coding agents working on the code

## Structure

```
src/
  App.jsx               routes
  entry-server.jsx      renders a route to HTML, lists the routes to prerender
  pages/                pages; landing sections in pages/parts/, docs in pages/docs/
  components/           Header, Footer, Page, Mode, Code, Tabs, Accordion, DocsLayout
  data/                 menus, docs navigation, links, the helper reference
  assets/               font, logo, screenshots
  styles/
    custom.sass         the only entry point
    inc/                the engine: variables, grid, helpers
    components/         mode, buttons, titles, card, tabs, accordion, alert, badge, code,
                        and the layouts of the home page and the docs
scripts/
  prerender.mjs         writes the HTML for every route after the build
  check-publish.mjs     yarn check
```

## Adding a page

1. Add the route to `src/App.jsx`.
2. Add the path to `routes` in `src/entry-server.jsx`. A docs page goes into
   `src/data/docs.js` instead, which the routes list reads.
3. Add the address to `public/sitemap.xml`.

Code that runs during render must not touch `window`, `document` or `localStorage`; read
them in `useEffect`.

## Showcase

Built a site with Avior? Open a
[showcase issue](https://github.com/emagweb/avior/issues/new?template=showcase.yml) with
the link and a few words about the project.

## Analytics

`src/hooks/useGoogleAnalytics.js` loads GA4 and reports page views on route change. It
does nothing until `GA_MEASUREMENT_ID` holds an ID such as `G-XXXXXXXXXX`. If the site
serves the EU, deny storage until the visitor agrees: call
`window.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied' })`
before the `js` call in `loadGA`, and
`window.gtag('consent', 'update', { analytics_storage: 'granted' })` from your consent
banner.

## Before you publish

Run `yarn check`. `example.com` in `public/sitemap.xml` and `public/robots.txt`, the
relative Open Graph image and the missing canonical link are placeholders until you know
your domain.

## Licence

MIT, see [LICENSE](LICENSE). The Google Sans Flex font is under the SIL Open Font
License, see `public/fonts/OFL.txt`.

Antonina Osypenko — [github.com/emagweb](https://github.com/emagweb)
