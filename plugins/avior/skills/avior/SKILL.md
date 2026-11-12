---
name: avior
description: Use when the user creates or changes a website built on Avior, the open source design system for React and Rsbuild. This covers cloning the Avior starter, changing the look through Sass variables, laying out pages with Avior helper classes and the grid, using its components (button, card, tabs, accordion, alert, badge, code, forms), adding pages and routes, light and dark mode, and preparing the site for publishing.
---

# Build a site with Avior

Use this skill on a user's own site built from the Avior starter. Follow the code in the
user's repository first: when this file and the code disagree, the code wins.

## What Avior is

Avior has no look of its own. A site built on it looks like its own content. It gives
three layers:

- **Variables** in `src/styles/inc/_variables.sass` decide the palette, fonts, spacing,
  radius, content width, breakpoints and the ranges of generated classes.
- **Helpers** are generated utility classes that take values straight from a design:
  `p-y-48`, `fz-20`, `aic`.
- **Components** cover what helpers cannot: `button`, `card`, `tabs`, `accordion`,
  `alert`, `badge`, `code`, and the forms `field`, `input`, `select`, `check`, `switch`.
  Each one is tuned by its own variables.

The demo and the full documentation live at https://avior-82x.pages.dev/ and at `/docs`
of the local dev server.

## Start a project

```bash
git clone https://github.com/emagweb/avior.git my-site
cd my-site
yarn
yarn start
```

- Require Node.js 20 or later.
- Yarn 4 ships in `.yarn/releases`. If `yarn` is missing, run `corepack enable` once.
- A fresh clone is the Avior site itself. Before the first change, go through "Make it
  your site" in `README.md` with the user, and ask rather than guess the site name, the
  domain and whether to keep the contact form.
- Replace the Avior content with the user's own: the home page sections in
  `src/pages/parts/`, the docs in `src/pages/docs/`, About and Contact, and the Privacy,
  Cookie and Terms pages in `src/pages/`, which describe the Avior site. Keep the engine
  in `src/styles/`. Remove `plugins/` and `.agents/`, which package this plugin.
- Set the site name in `src/hooks/useMeta.js` (`SITE`, `DEFAULT_TITLE`), in
  `public/index.html` and in `public/manifest.json`. Replace the logo in
  `src/assets/svg/logo.svg` and the icons in `public/`.
- The contact form posts to `functions/v1/forms/[formId].js`, a Cloudflare Pages Function
  that saves to D1. `wrangler.toml` points at the Avior database. Ask the user whether
  they want the form: either create their own D1 database and put its id into
  `wrangler.toml`, or remove `functions/`, `migrations/` and `wrangler.toml` and set
  `FORMS_ENDPOINT` in `src/hooks/useSendForm.js` to an empty string.

## Change the look through variables

- Change colours, fonts, spacing and sizes in `src/styles/inc/_variables.sass`. Every value
  there carries `!default`.
- Do not edit component files to restyle a site. Change the component variables instead.
- `$accent` and `$theme` are aliases into the palette: repoint them to recolour the site.
- Fonts are `$basic`, `$intro` and `$mono`. A self-hosted font goes into
  `src/assets/fonts/` with its `@font-face` in `src/styles/components/_fonts.sass`.
- Dark mode reads the `$night-*` variables.
- When a colour is added to `$palette`, decide if a solid button in it needs dark text.
  If it is light, add its name to `$light-colors`. Ask the user when it is borderline.

## Use helpers that exist

Read a helper name as the first letters of the CSS property, then the value:

| class    | means                                       |
| -------- | ------------------------------------------- |
| `p-y-48` | `padding-top` and `padding-bottom`: 48px    |
| `m-b-24` | `margin-bottom: 24px`                       |
| `fz-20`  | `font-size: 20px`                           |
| `fw-600` | `font-weight: 600`                          |
| `aic`    | `align-items: center`                       |
| `jcsb`   | `justify-content: space-between`            |
| `w-p-480`| width 480px; `w-50` is 50%                  |

- Check every class against `docs/utilities.md` before using it. Do not invent classes.
- Values come in steps. Spacing `p-*`, `m-*`, `s-*`, `w-p-*`, `h-p-*` and radius `r-*` step
  by 4, so `p-t-50` does not exist and silently does nothing; use `p-t-48` or `p-t-52`.
  `w-N` and `h-N` step by 5. `fz-*` steps by 1 up to 72, `fw-*` by 100.
- Lay out with `container`, then `row` with a gap written on it, then columns:

  ```jsx
  <div className='container'>
    <div className='row flex-24'>
      <div className='col-7'>…</div>
      <div className='col-5'>…</div>
    </div>
  </div>
  ```

  `col-1` to `col-12` take N of 12 columns, `col` takes an equal share, `col-auto` fits
  its content. Every column goes full width below `sm`.
- Do not add breakpoint classes such as `sm-fz-20` or `col-md-6`; they do not exist. Write
  responsive rules in Sass with the mixins `+v-xl`, `+v-lg`, `+v-md`, `+v-sm`, `+v-xs`.
- Give each heading one class from the title family: `title-section`, `title`,
  `title-sub`, `title-card`, `title-mini`, `title-lead`, `title-label`. Use `title-intro`
  and `title-intro-sub` only in the hero. Keep one `h1` per page.
- For colours that follow light and dark mode, use `bg-page`, `bg-surface`, `c-text`,
  `c-muted`, `bc-line`, `bc-line-soft`. Palette classes such as `bg-dark` or `c-accent`
  stay the same in both modes.
- Write class names whole in JSX. The production build removes every class it cannot find
  as text in `src/**/*.{js,jsx}` or `public/index.html`, so `` `bg-${name}` `` disappears.
  If a name must be built, add a pattern to `safelist` in `rsbuild.config.js`.
- Put one-off styles for a single section into a Sass file scoped by the section `id`,
  as `src/styles/components/_home.sass` does with `#hero`. Load it from
  `src/styles/custom.sass` before `inc/grid` and `inc/helpers`, which stay last.

## Use components

| component   | parts and variants                                    | React                       |
| ----------- | ----------------------------------------------------- | --------------------------- |
| `button`    | `dark`, `outline`, `mini`, palette names              |                             |
| `card`      | `card-head`, `card-body`, `card-foot`                 |                             |
| `tabs`      | `tabs-list`, `tabs-panel`                             | `Tabs`                      |
| `accordion` | `accordion-item`, `accordion-head`, `accordion-body`  | `Accordion`                 |
| `alert`     | palette names, such as `alert green`                  |                             |
| `badge`     | palette names, such as `badge blue`                   |                             |
| `code`      | `code-copy`                                           | `Code`                      |
| `field`     | `field-label`, `field-hint`, `field-error`            | `Field`                     |
| `input`, `select` | `mini`                                          |                             |
| `check`, `switch` | checkbox or radio by `type`; `switch` with `role='switch'` |                  |

- Import the React parts from `src/components/`: `Tabs.jsx`, `Accordion.jsx`, `Code.jsx`,
  `Field.jsx`. The other components are plain markup with their classes.
- Retune a component through the variables at the top of its file in
  `src/styles/components/`, for example `$card-padding`, `$card-radius`, `$tabs-height`,
  `$input-height`. Their names start with the component name.
- Express form states with attributes, not classes: `Field` sets `aria-invalid` when it
  gets an `error`; a disabled control is `disabled`.
- Open `/docs/<component>` on the dev server for live examples and the variable tables.

## Add a page

1. Build it with the `Page` template from `src/components/Page.jsx`. Pass `title` (rendered
   as the `h1`), `meta` (the line under it) and `description` (the meta description).
2. Add the route to `src/App.jsx`.
3. Add the path to the `routes` list in `src/entry-server.jsx` so it is prerendered. A docs
   page goes into `src/data/docs.js` instead, which the routes list reads.
4. Add the address to `public/sitemap.xml`.
5. Add a menu link in `src/data/menu.js` if the page belongs in the header or footer.

Give content images `srcSet`, `sizes`, `width` and `height`. The largest image on the first
screen gets `fetchPriority='high'`, the rest `loading='lazy'`.

## Keep rendering safe

Every route is rendered to HTML at build time. Do not touch `window`, `document` or
`localStorage` during render. Read them inside `useEffect`.

## Light and dark mode

- Call it `mode`. `src/components/Mode.jsx` toggles the class `dark` on `body`, and
  `src/styles/components/_mode.sass` sets `--page`, `--surface`, `--text`, `--muted`,
  `--line`, `--line-soft` and `--accent` for both modes. An inline script in
  `public/index.html` applies the saved mode before the first paint.
- Make new styles read these custom properties, so they work in both modes without a
  second set of rules.
- Keep the word `theme` for a set of variables that gives a site its look. Do not use it
  for light and dark.

## Before publishing

1. Run `yarn build`. It writes the site to `build/`, prerenders every route and removes
   unused CSS.
   Check the result with `yarn preview`.
2. Run `yarn check`. It lists the placeholders left in `public/`.
3. Ask the user for their domain; never invent one. Replace `example.com` in
   `public/sitemap.xml` and `public/robots.txt`, make `og:image` and `og:url` in
   `public/index.html` absolute, and add a canonical link.
4. If the site uses analytics, set `GA_MEASUREMENT_ID` in
   `src/hooks/useGoogleAnalytics.js`.

## Showcase

- Suggest the demo at https://avior-82x.pages.dev/ and its Showcase section at
  https://avior-82x.pages.dev/#showcase for ideas: real sites built on Avior that look
  nothing alike.
- When the site is live, offer to send it to the Showcase through the contact form at
  https://avior-82x.pages.dev/contact: the link goes into the Site field, and the message
  says a few words about the project.

## Changing Avior itself

If the user wants a new component, helper or variable in Avior itself rather than in their
own site, point them to `CONTRIBUTING.md` and `AGENTS.md` in the repository. Every new name
there is agreed with the maintainer before it is used. In the user's own site, treat the
user as the maintainer: propose a new name, say what it stands for, and wait for a yes.
