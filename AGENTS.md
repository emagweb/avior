# AGENTS.md

## What Avior is

Avior is a design system for React and Rsbuild, published as open source. It is not a
theme and not a set of ready-made pages. Two sites built on it should not look related:
each one is shaped by its own content, and the system only supplies the means.

The means are three layers, and nothing else:

1. **Variables** in `src/styles/inc/_variables.sass`: palette, type, spacing, radii,
   widths, breakpoints, generation limits. A project changes how it looks here.
2. **Helpers**: generated utility classes for spacing, size, type, colour, grid and
   alignment. They let markup take values straight from a design.
3. **Components**: when a site needs something the helpers cannot express, such as an
   accordion, tabs or a card, the system gets a component. Its look is driven by its
   own variables with `!default`, so every project can retune it without editing the
   component.

The goal of publishing it is a foundation others can build on: a product as convenient as
Ant Design, Bootstrap or Tailwind, without making every site look the same.

## How to work on it

- Treat every change as a change to the system, not to one page. Ask: can another project
  with completely different content use this, and can it change the look through
  variables only?
- A new component lives in `src/styles/components/_<name>.sass` with its variables at
  the top, all `!default`, prefixed with the component name (`$accordion-gap`,
  `$accordion-radius`). It reads the theme custom properties, so it works in both themes
  without a second set of rules. The React part, if any, lives in `src/components/`.
- Every component and every helper family gets documentation in the same change: what it
  is for, a live example on the docs site, the markup, and the table of its variables.
- **Names are agreed with the maintainer, every time.** Whenever a change needs a new
  class name, ask before using it: propose the word, say what it stands for, and wait
  for a yes. This applies to every new class, however small. Do not invent class,
  variable or component names on your own.
- Every name is one word or one abbreviation: `flex`, `aic`, `card`, `tabs`. Pick the
  shortest form that still reads logically to someone who has never seen the system.
  A numeric value or a side after a dash is not a second word: `p-t-24`, `fz-20`.
- A part of a component is never a standalone two-word name. It is the component plus
  one word, written by nesting under the component with `&-`, the way `.title` holds
  `&-section` in `_titles.sass`:

  ```sass
  .card
    padding: $card-padding
    &-header
      margin-bottom: $card-gap
    &-footer
      border-top: 1px solid var(--line-soft)
  ```

  The compiled class is `card-header`, but in the source it exists only inside `.card`.
  The same goes for families such as `c-blue`, which sit under their prefix. Each new
  part word (`header`, `footer`, `body`) is a new name and is agreed like any other.

- A name is one of two things:
  - a short alternative to one whole property and its value, for a helper: `aic` is
    `align-items: center`, `p-t-24` is `padding-top: 24px`;
  - the name of a set of overrides of default properties, for a component: `container`
    is a block whose content width is limited, differently on each device.
- A component takes the name almost everyone who builds pages already knows for that
  thing, the way `container` is known. Check the name against what Bootstrap, Ant Design,
  Tailwind and plain HTML call it; if most of them agree, use that word. Do not coin a
  new word for a known thing, and do not reuse a known word for something else.
- When proposing a name, say what it is a set of, and which well-known name it matches.
  Names that already exist, including compound ones such as `title-section`, stay until
  the maintainer decides otherwise.
- Approved parts: `card` → `&-head`, `&-body`, `&-foot`; `accordion` → `&-item`,
  `&-head`, `&-body`; `tabs` → `&-list`, `&-panel`; `code` → `&-copy`;
  `field` → `&-label`, `&-hint`, `&-error`.
- Approved names: `accordion`, `tabs`, `card`, `badge`, `alert`, `field`, `input`,
  `select`, `check`, `switch` for components; `theme`
  for a set of variables that gives one site its look, kept in `src/styles/themes/`;
  `mode` for light and dark, in `components/Mode.jsx` and `components/_mode.sass`.
  The word `theme` is reserved for sets of variables; do not use it for light and dark.
- The demo site is the shop window of the system. It may be redesigned freely. Make it
  show range: several sites with nothing in common, built from the same variables and
  helpers, rather than one polished look.
- Do not add a CSS framework, a grid library or a component library. Avior is the
  component library.

## Commands

- `yarn start` — dev server, every generated class available
- `yarn build` — production build, prerendered, unused classes removed
- `yarn preview` — serve the production build
- `yarn check` — list placeholders left before publishing
- `PURGE=off yarn build` — production build without removing unused classes

## Rules of the engine

- Keep the import order in `src/styles/custom.sass`. `inc/_helpers.sass` comes last.
- Keep the `inc/` + `components/` structure: `inc/` is the engine, `components/` the
  parts built on it.
- Lay out with `container`, `row` and `col` / `col-1` … `col-12` / `col-auto`, with the
  gap as `flex-N` (or `flex-X-Y`) on the row: `row flex-24`.
- Responsive behaviour belongs in the Sass, written with the `=v-*` mixins inside the rule
  it affects. Do not generate breakpoint-prefixed classes such as `sm-fz-20`: they were
  tried and removed on purpose.
- Headings take one class from the `.title` family. The class owns size, weight,
  line-height and the gap below. If a design needs another heading, it becomes a variant
  of the family, driven by variables and agreed with the maintainer, rather than helpers
  stacked on the heading in markup.
- `title-intro` and `title-intro-sub` are the hero only. Below the hero the biggest
  heading is `title-section`.
- One `h1` per page. `Page` renders its `title` prop as the `h1`.
- Build pages with the `Page` template. Menus are data in `src/data/menu.js`. Every page
  gets a `title` and a `description`; `hooks/useMeta.js` turns them into the document
  title, the meta description and the Open Graph tags.
- The mode is a class on `body`, set by `components/Mode.jsx` and applied before the
  markup by the inline script in `public/index.html`. `components/_mode.sass` declares
  `--page`, `--surface`, `--text`, `--muted`, `--line`, `--line-soft` on `body` and on
  `body.dark`. Components read these, so there is no second set of rules per theme.
- Use the semantic colour classes for anything that follows the theme: `bg-page`,
  `bg-surface`, `c-text`, `c-muted`, `bc-line`, `bc-line-soft`. Palette classes stay
  literal in both themes.
- When a colour is added to `$palette`, check whether a solid button in it needs dark
  text. Light colours go into `$light-colors`. If a colour is borderline, ask. Outline
  buttons keep the button colour as their label on purpose; do not "fix" it.
- The header menu becomes a panel below `sm`. It closes on a link, on an outside click
  and on Escape — keep all three.
- Write class names whole in the source. The production build removes every class it
  cannot find as text in `src/**/*.{js,jsx}` or `public/index.html`, so
  `` `bg-${name}` `` disappears. If a name has to be built, add a pattern to `safelist`
  in `rsbuild.config.js`.
- One-off layout that belongs to a single section and will never be reused goes into a
  component file scoped by the section `id`: `_home.sass` for the home page, `_docs.sass`
  for the docs layout. Anything that repeats is a component. Section ids are global, so a
  heading id in the docs must not reuse one of the home page ids (`hero`, `paths`,
  `showcase`, `layers`, `numbers`) or `menu`.
- Every component has a page in the docs (`src/pages/docs/`): an example, the markup and
  the table of its variables. A new component is not done until its page is.
- Every route is prerendered. A new page goes into `src/App.jsx`, into the `routes` list
  in `src/entry-server.jsx` and into `public/sitemap.xml`. A docs page goes into
  `src/data/docs.js` instead of the `routes` list, which reads it. Nothing that runs during render may touch
  `window`, `document` or `localStorage`; read them in `useEffect`.
- Content images get `srcSet`, `sizes`, `width` and `height`. The largest image on the
  first screen gets `fetchPriority='high'`, the rest `loading='lazy'`.
- `example.com`, the relative Open Graph URLs and the missing canonical link are
  deliberate placeholders. Do not invent a domain; ask.
- Before deleting a declaration that looks redundant, check `docs/decisions.md`.
- Run `yarn build` before proposing a change.

## Writing

- Code, copy, documentation and commit messages in English.
- No comments in code: not in Sass, JSX, JS, HTML or config files, and no commented-out
  code. Names carry the meaning; usage goes to `README.md` and the docs site, the class
  reference to `docs/utilities.md`, reasoning to `docs/decisions.md`.

The reasoning behind the engine, and how to extend it, is in
[CONTRIBUTING.md](CONTRIBUTING.md).

## Docs

- Rsbuild: https://rsbuild.rs/llms.txt
- Rspack: https://rspack.rs/llms.txt
