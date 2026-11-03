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

A name is good when someone who knows the CSS can guess it, and someone who reads it can
tell what it does without the docs. Before adding one, check that it follows the same
pattern as its neighbours and does not collide with an existing class. Layout keeps the
names every grid system uses: `container`, `row`, `col-N`.

Numeric values are never mapped to a scale. The design says 104px, the markup says
`p-t-104`. That is the whole point: no step to invent, no token to look up, nothing to
block you when a value is not in the scale.

Some names are shorter than the rule because they are used everywhere: `flex`, `oh`, `tc`, `tl`, `tr`,
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
only because a component rule, the load order or a name collision fights them, and
nothing in the code says so.

## Why `_helpers.sass` loads last

A utility is a single class, which is the weakest thing in the cascade. A component rule
is a descendant selector and outranks it: `.page section p` scores two classes and an
element against one class for `.fz-32`. Loading utilities last is therefore not enough on
its own, which is why they also carry `!important` while component styles stay clean.

The ordering rule stands regardless: components first, utilities last.

## Theme versus engine

`inc/_variables.sass` is the only file a project is expected to edit. Colours, fonts and
the container width live there. Everything else — `_responsive.sass`, `_helpers.sass`,
`_colors.sass` — is the engine and should be identical across projects.

Keep that line sharp. If a change makes the engine depend on a project-specific value,
the value belongs in variables instead.

## Adding a utility family

1. Name it with the rule: first letters of the property, then of the value. Check that the
   name is not taken and reads the same way as its neighbours.
2. Add the loop to `inc/_helpers.sass` next to the related families.
3. Decide the unit and encode it in the family, not in the value: the bare family is
   percent or vh, `-p-` is pixels. `w-60` is 60%, `w-p-480` is 480px.
4. If the value cannot contain a dot, scale it: `lh-150` is `line-height: 1.5`.
5. Give it a step and a limit from `inc/_variables.sass` rather than a hardcoded range,
   and check the step does not delete values the markup already uses.
6. Compile and look at the output size. Generated ranges grow fast.

## Breakpoints

`inc/_responsive.sass` holds five mixins, `=v-xl` down to `=v-xs`, all max-width based,
so the system is desktop-first.

Responsive behaviour is written in the Sass with the `=v-*` mixins, inside the rule it
affects. Breakpoint-prefixed classes were built and then removed: a class name is not the
place for a breakpoint, and generating the numeric families across five breakpoints runs
into tens of thousands of rules.

## What is deliberately missing

No external grid and no CSS framework. The grid is flexbox in `inc/_grid.sass`:
`row`, `col`, `col-1..12`, `col-auto`. No negative margins, and native `gap` instead. Bootstrap was used as a
crutch early on and has been removed; `inc/_reset.sass` replaces the parts of its reboot
the layout relied on.

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
- If the change adds a class name, show the declaration it stands for.

## Roadmap

1. Full flexbox dictionary: `ac-*`, `as-*`, `fxd-*`, `fxw-*`, `fxf-*`, `ord-*`
2. `maw` / `miw` / `mah` / `mih`
3. Forms and card
4. Utilities for `position`, `z-index`, shadows and transitions
5. Build-time check for class names used in markup but missing from the CSS

Done: `!default` and configurable generation limits, the flexbox grid, button
variants with outline and sizes, the move from `@import` to `@use`/`@forward`, and
dropping Bootstrap.
