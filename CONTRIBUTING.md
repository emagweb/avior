# Contributing

This document explains how the stack is put together and why, so that a change fits the
system instead of fighting it. If you only want to use Avior, the [README](README.md) is
enough.

## The one principle

A class name is never invented. It is derived from the CSS declaration you already know:
first letters of the property, then first letters of the value.

```
align-items: center             ->  aic
justify-content: space-between  ->  jcsb
```

The abbreviations are not ours. They are Emmet's, so anyone who types `ai:c` in an editor
already knows the class name without reading documentation. The dictionary ships with
Emmet itself; in VS Code it lives at
`Contents/Resources/app/extensions/emmet/dist/node/emmetNodeMain.js`. Check it before
adding a name — `g` is `gap`, `maw` is `max-width`, `gtc` is `grid-template-columns`,
and `fz`, not `fs`, is `font-size`.

Numeric values are never mapped to a scale. The design says 104px, the markup says
`p-t-104`. That is the whole point: no step to invent, no token to look up, nothing to
block you when a value is not in the scale.

Some older names break the rule and stay as aliases: `flex`, `oh`, `tc`, `tl`, `tr`,
`upp`, `rowrap`, `obfc`. They are not renamed because they are already written in real
projects. New names follow the rule strictly.

## Where explanations live

Sass files carry no comments. There are three places instead:

- [README.md](README.md) — how to use the stack
- [docs/utilities.md](docs/utilities.md) — every generated class, its range and behaviour
- [docs/decisions.md](docs/decisions.md) — why a particular declaration exists, what
  breaks if it is removed

Adding a utility family means adding a row to `docs/utilities.md` in the same commit.

Check that file before deleting a declaration that looks redundant. Several of them exist
only because Bootstrap, the import order or a name collision fights them, and nothing in
the code says so.

## Why `_helpers.sass` is imported last

Bootstrap generates its utilities with `!important` — over a thousand occurrences. A
utility that has to win against `w-100` or the padding of `col-lg-4` must therefore be
`!important` too, and must come later in the cascade. That is the only reason for the
import order, and it is also why utilities in this project carry `!important` while
component styles do not.

Once Bootstrap is gone, the `!important` in utilities can be revisited, but the ordering
rule stays: specific components first, utilities last.

## Theme versus engine

`inc/_variables.sass` is the only file a project is expected to edit. Colours, fonts and
the container width live there. Everything else — `_responsive.sass`, `_helpers.sass`,
`_colors.sass` — is the engine and should be identical across projects.

Keep that line sharp. If a change makes the engine depend on a project-specific value,
the value belongs in variables instead.

## Adding a utility family

1. Find the Emmet abbreviation for the property. Do not shorten it yourself.
2. Add the loop to `inc/_helpers.sass` next to the related families.
3. Decide the unit and encode it in the family, not in the value: the bare family is
   percent or vh, `-p-` is pixels. `w-60` is 60%, `w-p-480` is 480px.
4. If the value cannot contain a dot, scale it: `lh-150` is `line-height: 1.5`.
5. Check the generated name does not collide with Bootstrap while Bootstrap is still
   wired up. `h-100` already does — it means `100vh` here and `100%` there.
6. Compile and look at the output size. Generated ranges grow fast.

## Breakpoints

`inc/_responsive.sass` holds five mixins, `=v-xl` down to `=v-xs`, all max-width based,
so the system is desktop-first.

Responsive variants are written as a prefix: `md-cols-2`, `sm-hide`. They are generated
only for a whitelist — grid, flex, gap, display, `maw`, show/hide. Do not extend prefixes
to the numeric utilities: five breakpoints across the full generated set would produce
tens of thousands of rules.

## What is deliberately missing

No external grid. `row` and `col-*` still come from Bootstrap and will be replaced by a
CSS Grid implementation: `grid`, `col-1..12`, `cols-N`, `cols-auto-N`. Grid is the right
model for rows and columns — no wrapper row, no negative margins, native gap.

No UI component library. Utilities are meant to lay out the page around components, not
to replace them. If a project needs a data grid or a date picker, it adds one itself.

No CSS-in-JS, no utility-class generator at runtime, no preprocessor layers beyond Sass.

## Things utilities do not cover

Position, `z-index`, shadows, transitions, transforms, pseudo-elements and animation.
Write those in a component file under `components/`. Anything interactive will need one.

## Sending a change

- Branch from `main`, one idea per branch.
- Keep commits small and their messages in English, imperative mood.
- Run `yarn build` and make sure it passes.
- If the change touches generated utilities, mention the effect on the compiled CSS size
  in the pull request.
- If the change adds a class name, state which Emmet abbreviation it comes from.

## Roadmap

1. `!default` on every variable, plus configurable step and limits for generated ranges
2. Full flexbox dictionary: `ac-*`, `as-*`, `fxd-*`, `fxw-*`, `fxf-*`, `ord-*`
3. `maw` / `miw` / `mah` / `mih`
4. Own grid: `grid`, `col-*`, `cols-N`, `cols-auto-N`
5. Breakpoint prefixes for the whitelist
6. Button colour variants and outline style
7. Forms and card
8. Drop Bootstrap
9. Move from `@import` to `@use` / `@forward`
10. Build-time check for class names used in markup but missing from the CSS
