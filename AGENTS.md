# AGENTS.md

Avior is a React starter with its own Sass utilities: short class names that read as the
CSS they stand for, values taken from the design, and a container / row / col grid.
No external grid, no UI library.

## Commands

- `yarn start` — dev server
- `yarn build` — production build
- `yarn preview` — serve the production build

## Rules

- Keep the import order in `src/styles/custom.sass`. `inc/_helpers.sass` comes last.
- Class names are short, readable abbreviations of the property and value
  (aic = align-items: center). Follow the existing pattern; do not add a new
  class name without asking.
- Do not add a CSS framework, a grid library or a component library.
- Lay out with `container`, `row` and `col` / `col-1` … `col-12` / `col-auto`, with the gap
  as `flex-N` (or `flex-X-Y` for column and row gaps) on the row: `row flex-24`.
  Do not invent other grid or gap classes.
- Keep the `inc/` + `components/` structure. Theme changes belong in
  `inc/_variables.sass`, everything else is the engine.
- Build pages with the `Page` template. Menus are data in `src/data/menu.js`.
- Give every page a `title` and a `description` prop. `Page` turns them into the document
  title, the meta description and the Open Graph tags through `hooks/useMeta.js`. Without
  a description the page inherits the site-wide one and looks identical in search results.
- One `h1` per page. `Page` renders the `title` prop as the `h1`, so do not add another.
- Style a heading with one class from the `.title` family and nothing else: no `fw-*`, no
  `tc`, no `p-b-*`, no colour. The class owns size, weight, line-height and bottom gap,
  including the responsive steps. Alignment and width go on the element around the
  heading. The list is in [docs/utilities.md](docs/utilities.md); add a variant there
  rather than patching a heading in markup.
- Responsive behaviour belongs in the Sass, written with the `=v-*` mixins inside the
  rule it affects. Do not generate breakpoint-prefixed classes such as `sm-fz-20`:
  they were tried and removed on purpose.
- `title-intro` and `title-intro-sub` are the hero only. Below the hero the biggest
  heading is `title-section`. Do not reach for an `intro` class to make something stand
  out — the hero is what it marks.
- `example.com` in `public/sitemap.xml` and `public/robots.txt` is a deliberate
  placeholder, as are the relative Open Graph URLs and the missing canonical link. Run
  `yarn check` to list them. Do not invent a domain — ask the user for theirs.
- When a colour is added to `$palette`, check whether a solid button in that colour needs
  dark text. Light colours go into `$light-colors` in `inc/_variables.sass`, otherwise the
  label stays white and becomes unreadable. If the colour is borderline, ask the user
  rather than deciding for them. Outline buttons are not part of this: their label keeps
  the button colour on purpose, because a light outline button is meant for a dark
  background. Do not "fix" it.
- The dark theme is a `dark` class on `html`, set by `components/Theme.jsx` and applied
  early by the inline script in `public/index.html`. Its colours are the `$night*`
  variables and everything it overrides lives in `components/_theme.sass`. When a section
  gets a background, check it in both themes.
- The header menu becomes a panel below `sm`. It closes on a link, on an outside click and
  on Escape — keep those three if you touch `components/Header.jsx`.
- Write code, comments, copy and commit messages in English.
- Do not write comments in code: not in Sass, JSX, JS or HTML. Class and variable names
  should make the code readable on its own; if they do not, rename them. The only
  exception is commented-out code that the README tells the user to switch on.
- Keep the Sass files free of comments. Usage goes to `README.md`, the class reference to
  `docs/utilities.md`, reasoning to `docs/decisions.md`.
- Before deleting a declaration that looks redundant, check `docs/decisions.md`.
  Most of them are there because something else in the cascade fights them.
- Run `yarn build` before proposing a change.

The reasoning behind these rules, and how to extend the system, is in
[CONTRIBUTING.md](CONTRIBUTING.md).

## Docs

- Rsbuild: https://rsbuild.rs/llms.txt
- Rspack: https://rspack.rs/llms.txt
