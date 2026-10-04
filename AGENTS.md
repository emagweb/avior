# AGENTS.md

Avior is a starter stack: React, Rsbuild and Sass utilities named after the Emmet
dictionary. No external grid, no UI library.

## Commands

- `yarn start` — dev server
- `yarn build` — production build
- `yarn preview` — serve the production build

## Rules

- Keep the import order in `src/styles/custom.sass`. `inc/_helpers.sass` comes last.
- Derive class names from the Emmet dictionary. Do not invent new abbreviations.
- Do not add a CSS framework, a grid library or a component library.
- Keep the `inc/` + `components/` structure. Theme changes belong in
  `inc/_variables.sass`, everything else is the engine.
- Build pages with the `Page` template. Menus are data in `src/data/menu.js`.
- When a colour is added to `$palette`, check whether a solid button in that colour needs
  dark text. Light colours go into `$light-colors` in `inc/_variables.sass`, otherwise the
  label stays white and becomes unreadable. If the colour is borderline, ask the user
  rather than deciding for them. Outline buttons are not part of this: their label keeps
  the button colour on purpose, because a light outline button is meant for a dark
  background. Do not "fix" it.
- Write code, comments, copy and commit messages in English.
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
