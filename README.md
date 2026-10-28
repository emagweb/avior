# Avior

![status: early](https://img.shields.io/badge/status-early-orange)
![licence: MIT](https://img.shields.io/badge/licence-MIT-blue)
![React 19](https://img.shields.io/badge/React-19-61dafb)
![Rsbuild](https://img.shields.io/badge/Rsbuild-1.x-ff6b35)

A starter stack for websites: React, Rsbuild and Sass utilities whose class names you don't
have to memorise — they follow the Emmet dictionary, and numeric values come straight from
the design. No external grid, no UI library.

```jsx
<div className="df aic jcsb g-24 p-y-104">
```

| class     | Emmet   | CSS                              |
| --------- | ------- | -------------------------------- |
| `df`      | `d:f`   | `display: flex`                  |
| `aic`     | `ai:c`  | `align-items: center`            |
| `jcsb`    | `jc:sb` | `justify-content: space-between` |
| `g-24`    | `g`     | `gap: 24px`                      |
| `p-y-104` |         | `padding: 104px 0`               |

Avior is Epsilon Carinae, the second brightest star in Carina.

## Quick start

```bash
yarn
yarn start      # dev server
yarn build      # production build into build/
yarn preview    # serve the production build
```

To start your own project: install, put your colours and fonts into
`src/styles/inc/_variables.sass`, then build pages out of utilities. No other file needs editing.

## How class names work

One rule: first letters of the property, then first letters of the value.

```
align-items: center             ->  aic
justify-content: space-between  ->  jcsb
object-fit: cover               ->  obfc
margin-left: auto               ->  mla
```

When the property is obvious from the value, it is dropped: `upp` is `uppercase`,
`ma` is `margin: auto`.

Numeric families encode the unit in the family, not in the value:

| class     | meaning               | why                                      |
| --------- | --------------------- | ---------------------------------------- |
| `p-t-104` | `padding-top: 104px`  | spacing is always in pixels              |
| `w-60`    | `width: 60%`          | base family is percentages               |
| `w-p-480` | `width: 480px`        | `-p-` means pixels                       |
| `h-72`    | `height: 72vh`        | base height family is vh                 |
| `fz-18`   | `font-size: 18px`     | `fz` is the Emmet abbreviation, not `fs` |
| `fw-800`  | `font-weight: 800`    | numeric weight                           |
| `lh-150`  | `line-height: 1.5`    | class names cannot contain a dot         |
| `r-40`    | `border-radius: 40px` |                                          |
| `bw-2`    | `border-width: 2px`   |                                          |
| `s-40`    | 40px vertical spacer  | halves itself on small screens           |

The dictionary is the one Emmet itself ships: `g` is `gap`, `maw` is `max-width`,
`gtc` is `grid-template-columns`. If you know the CSS declaration, you know the class.

Some names predate the strict rule and stay as aliases: `flex`, `oh`, `tc`, `tl`, `tr`,
`upp`, `rowrap`, `obfc`.

The full list of classes, with ranges and behaviour, is in
[docs/utilities.md](docs/utilities.md).

## Colours

The palette lives in `src/styles/inc/_variables.sass` and expands into three families:

```
c-pink    color
bg-pink   background-color
bc-pink   border-color
```

Adding a colour is one line in `$palette`, and all three classes appear at once.
Change a variable and all three change with it.

Border colour also sets a solid style, since a border without a style is invisible.
Override it with `dashed` or `double`:

```jsx
<div className="bc-pink bw-2 dashed">
```

Two names stand apart: `theme` and `accent`. They are aliases for other colours in the
palette, meant to be repointed per project — `$theme: $white`, `$accent: $pink` by default.
Use them in components so a project can be recoloured without touching markup.

## Container

```jsx
<div className="container p-x-24">…</div>
<div className="container wide">…</div>
```

`container` holds the width and centres the block, nothing else — padding is a utility in
the markup. `wide` releases the width limit for full-bleed sections. The maximum width is
the `$content` variable.

## Structure and load order

`custom.sass` is the only entry point. The order inside it matters:
`inc/_helpers.sass` must stay last, because it overrides everything above it.

```
src/styles/
  custom.sass              the only entry point
  _core.sass               forwards variables and breakpoint mixins
  inc/
    _variables.sass        the file you edit: theme and generation limits
    _responsive.sass       mixins =v-xl =v-lg =v-md =v-sm =v-xs
    _grid.sass             grid, cols-*, col-*, gaps
    _helpers.sass          generated utilities, loaded last
  components/
    _colors.sass           .c-* .bg-* .bc-*
    _base.sass             body, resets, links
    _buttons.sass
    _titles.sass           .title .title-intro .title-mini
    _header.sass
    _footer.sass
    _page.sass
```

## Configuration

Every variable carries `!default`, so a project can set the theme without editing the
library. Configure the first line of `custom.sass`:

```sass
@use "core" with ($accent: #0066FF, $radius: 4px, $content: 1440px, $step: 8)
```

Colours, fonts, `$content`, `$radius`, and the generation limits are all configurable.
The limits decide how large the stylesheet is:

| variable                         | default | what it controls                         |
| -------------------------------- | ------- | ---------------------------------------- |
| `$step`                          | 4       | step for spacing, pixel sizes and radius |
| `$max-space`                     | 160     | largest padding, margin, spacer and gap  |
| `$max-size`                      | 800     | largest `w-p-*` and `h-p-*`              |
| `$step-percent` / `$max-percent` | 5 / 100 | percentage widths and `vh` heights       |
| `$max-font`                      | 72      | largest `fz-*`                           |
| `$columns`                       | 12      | columns in the grid                      |

With the defaults the compiled stylesheet is about 97 KB. A step of 1 and the widest
limits push it past 570 KB, which is what every value being available costs.

## Page metadata

`Page` takes a `title` and a `description` and feeds them to `hooks/useMeta.js`, which
sets the document title, the meta description and the matching Open Graph tags on every
route. The `title` is also rendered as the page `h1`.

```jsx
<Page title='About' description='What this is and why'>
```

Without it a single page app reports one title for every route, and search results look
identical for all of them. The home page keeps the site title and sets only a description.

See the publishing checklist below for the parts that need your domain.

## Components

```jsx
<Header />                      // default menu
<Header menu={legal} />         // any other menu
<Header menu={[]} brand='Acme' />

<Footer />
<Footer menu={main} copy='©2026 - Acme.' />

<Page title='Privacy Policy' meta='Last updated: ...'>
  <section>…</section>
</Page>
```

Menus are plain data in `src/data/menu.js`:

```js
const main = [
  { label: "Features", href: "#features" },
  { label: "About", href: "/about" },
];
```

Anchors and routes mix freely. `Nav` normalises an anchor into `/#features` when the
visitor is not on the home page, so one menu works everywhere.

## Fonts

Loaded with a `<link>` in `public/index.html` and referenced by `$basic` in
`_variables.sass`. The default is Google Sans Flex, a variable font covering weights
300 to 800 in a single file.

## Google Analytics

`src/hooks/useGoogleAnalytics.js` loads GA4 and reports page views on route change.
It is off until you fill in the ID:

```js
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
```

While the string is empty nothing is loaded and no requests are made. The hook is called
once in `src/App.jsx` and must stay inside `BrowserRouter`, since it uses `useLocation`.

Custom events, once the ID is set:

```jsx
<button onClick={() => window.gtag?.('event', 'cta_click', { location: 'hero' })}>
```

**GDPR.** By default analytics starts immediately. If you serve the EU, uncomment the two
blocks marked `--- GDPR ---` in the hook: the first denies storage until consent, the
second exports `grantAnalyticsConsent` and `denyAnalyticsConsent` to call from your
consent banner.

## Before you publish

The starter ships with a placeholder domain, because it cannot know yours. Run the check
at any time:

```bash
yarn check
```

It lists every spot that still needs attention, and never fails a build. There are four:

| what                                           | where                |
| ---------------------------------------------- | -------------------- |
| the domain, in the sitemap entries             | `public/sitemap.xml` |
| the domain, in the `Sitemap:` line             | `public/robots.txt`  |
| `og:image`, which has to be an absolute URL    | `public/index.html`  |
| a `canonical` link, which is missing by design | `public/index.html`  |

Why absolute URLs matter: crawlers and social networks do not resolve a relative path in
a meta tag. `og:image` pointing at `/logo512.png` yields no preview image at all, so it
has to read `https://yourdomain.com/logo512.png`.

Why there is no `canonical` by default: a canonical link naming the wrong host is worse
than none, since it tells search engines to index an address that is not yours. Add it
once you have a domain:

```html
<link rel="canonical" href="https://yourdomain.com/" />
```

Also worth a look before going live: `theme_color` and `background_color` in
`public/manifest.json`, the copyright line in `Footer`, and the contact details on the
Contact page.

## Limitations

- No form or card components yet. A project that needs them writes its own for now.
- No utilities for `position`, `z-index`, shadows or transitions — write those in a
  component file under `components/`.
- The flexbox set is partial: alignment and wrapping are there, but `ac-*`, `as-*`,
  `fxd-*`, `fxw-*` and `ord-*` are still missing.
- Breakpoint prefixes such as `md-cols-2` are not generated yet. Responsive behaviour is
  either baked into a class (`m-hide`, `tr`, `s-N`) or written in a component file.
- Headings are a fixed `rem` scale. Below the `xs` breakpoint only `h1` and `h2` shrink.

## Contributing

How the system is built, why the rules are what they are, and how to extend it:
[CONTRIBUTING.md](CONTRIBUTING.md). The roadmap lives there too.

## Author and licence

Antonina Osypenko — [github.com/emagweb](https://github.com/emagweb)

MIT, see [LICENSE](LICENSE).
