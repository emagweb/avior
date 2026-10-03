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

## Colours

The palette lives in `src/styles/inc/_variables.sass` and expands into three families:

```
c-pink    color
bg-pink   background-color
bc-pink   border-color
```

Change a variable and all three change with it.

## Container

```jsx
<div className="container p-x-24">…</div>
<div className="container wide">…</div>
```

`container` holds the width and centres the block, nothing else — padding is a utility in
the markup. `wide` releases the width limit for full-bleed sections. The maximum width is
the `$content` variable.

## Structure and import order

`custom.sass` is the only entry point. The order inside it matters:
`inc/_helpers.sass` must stay last, because it overrides everything above it.

```
src/styles/
  custom.sass              the only entry point
  inc/
    _variables.sass        colours and fonts — the file you edit
    _responsive.sass       mixins =v-xl =v-lg =v-md =v-sm =v-xs
    _helpers.sass          generated utilities, imported last
  components/
    _colors.sass           .c-* .bg-* .bc-*
    _base.sass             body, typography, .container
    _buttons.sass
    _titles.sass           .title .title-intro .title-mini
    _header.sass
```

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

## Limitations

- Utilities are generated across full ranges, so the stylesheet is large. Trim the loops in
  `_helpers.sass` if size matters more than having every value available.
- Styles use `@import`. Dart Sass deprecated it and will remove it in 3.0, so a move to
  `@use`/`@forward` is pending.
- There is no own grid yet: `row` and `col-*` still come from Bootstrap, which is wired up
  in `src/index.jsx` and will be removed once the grid, card and form classes land.
- No utilities for `position`, `z-index`, shadows or transitions yet — write those in a
  component file.

## Contributing

How the system is built, why the rules are what they are, and how to extend it:
[CONTRIBUTING.md](CONTRIBUTING.md). The roadmap lives there too.

## Author and licence

Antonina Osypenko — [github.com/emagweb](https://github.com/emagweb)

MIT, see [LICENSE](LICENSE).
