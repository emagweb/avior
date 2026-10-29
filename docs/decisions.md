# Decisions

Why certain declarations exist. Each entry says what was done, why, and what breaks if
it is removed.

Read this before deleting a declaration that looks redundant. Most of them are here
because something else in the cascade fights them.

---

## `.container.wide` needs `!important` on `min-width`

**Where:** `src/styles/inc/_helpers.sass`

```sass
.container
  &.wide
    max-width: 100%
    min-width: 100% !important
```

**Why:** there is already a `.wide` class in `inc/_helpers.sass`, a mobile helper that
sets `min-width: 90% !important`. Helpers are imported last, so without `!important`
here the helper wins below the `sm` breakpoint and a full-bleed container shrinks to 90%.
With `!important` on both sides the more specific selector decides, and `.container.wide`
is more specific than `.wide`.

**If removed:** full-bleed sections lose 10% of their width on phones.

**Remove when:** one of the two `.wide` classes is renamed. This is a patch around a
name collision, not a design choice.

---

## Utilities carry `!important`, components do not

**Where:** `src/styles/inc/_helpers.sass`, `src/styles/inc/_grid.sass`,
`src/styles/components/_colors.sass`

**Why:** a utility is a single class, so its specificity is the lowest there is. Component
rules are descendant selectors and outrank it no matter what order they load in. Measured
on a page paragraph, where `.page section p` sets `font-size: 1.25em`:

```
paragraph in .page                      20px
with fz-32 (has !important)             32px
with the same utility, no !important    20px — the component rule wins
```

Load order does not help here: `.page section p` scores two classes and an element,
`.fz-32` scores one class. Only `!important` lifts the utility above it.

Component styles never compete with utilities, so they stay clean.

**If removed:** utilities stop working wherever a component rule touches the same
property — silently, and only in those places.

## `inc/_helpers.sass` is imported last

**Where:** `src/styles/custom.sass`

**Why:** utilities have to override component styles, and with equal specificity the
later rule wins. `custom.sass` lists the modules in that order, and the CSS is emitted
in the order the modules are first used.

**If removed:** reordering the imports makes utilities in markup stop overriding
component rules, which breaks spacing and colour classes in unpredictable places.

---

## `p, figure` reset their margins

**Where:** `src/styles/components/_base.sass`

```sass
p,
figure
  margin: 0
  padding: 0
```

**Why:** the browser default gives a paragraph a top and bottom margin of `1em`, and a
figure `1em 40px`. Spacing in this project is set in the markup with utilities like
`p-b-16`, so invisible extra margins fight that.

**If removed:** every paragraph gains 16px above and below, and every figure gains 40px
on each side.

---

## Button text colour comes from a list of names, not from a calculation

**Where:** `src/styles/inc/_variables.sass`, `src/styles/components/_buttons.sass`

```sass
$light-colors: ("grey", "light", "white")
```

**Why:** a white label is unreadable on a light button, so solid buttons in those colours
get dark text.

Outline buttons are deliberately left alone at rest, and their label keeps the button
colour. That is the whole point of a light outline button: it belongs on a dark section,
where a white border with a white label is exactly right. Judged against a white page it
looks broken, which it is not — see the dark block on the `/ui` page.

On hover the background fills with the button colour, so the label does switch there:
white, or dark when the fill is light.
The lightness could be measured instead — `color.channel($color, "lightness", $space: oklch)`
with a threshold — but the threshold then decides the design silently, and borderline
colours like yellow and green land on whichever side of the cutoff they happen to fall.
A list says out loud which colours are considered light.

`is-light()` also compares the colour value, not just the name, so `theme` and `accent`
are covered whenever they point at one of the listed colours.

**If a new light colour is added to `$palette` and not to this list:** its button keeps a
white label on a light background and the text disappears. Nothing warns about it.

---

## Generated families use a step, not every integer

**Where:** `src/styles/inc/_variables.sass`, `src/styles/inc/_helpers.sass`

```sass
$step: 4
$max-space: 160
```

**Why:** generating every integer meant 8616 rules and 574 KB of CSS, while the markup
used 22 of them. With a step of 4 and tighter limits the same stylesheet is 1580 rules
and 97 KB, and every value a design actually uses — 8, 16, 24, 40, 64, 104, 120 — is
still there.

Border width and font size keep a step of 1 on purpose: `bw-2` and `fz-13` are ordinary
values that a step of 4 would delete. Font weight steps by 100, since nothing between
is meaningful.

**If the step is raised:** values that are not multiples of it disappear silently. A
class that does not exist does not fail, it simply does nothing. Check the markup before
changing it, or lower the step for the family in question.

---

## The grid collapses to one column below `sm`

**Where:** `src/styles/inc/_grid.sass`

**Why:** the grid replaced `row` and `col-lg-*` from Bootstrap, which stacked on narrow
screens. Without the collapse, three columns stay three columns on a phone and the
layout breaks. The breakpoint is `sm`, so tablets keep their columns.

`cols-auto-*` has no breakpoint rule and does not need one: `repeat(auto-fit, minmax())`
reflows as soon as a column would fall below its minimum.

**If removed:** every multi-column section breaks on phones.

---

## Styles load with `@use`, not `@import`

**Where:** `src/styles/custom.sass`, `src/styles/_core.sass`

**Why:** `@import` is deprecated and Dart Sass will remove it in version 3. Each file now
loads `../core`, which forwards the variables and the breakpoint mixins, so dependencies
are declared where they are used instead of relying on one global namespace.

The migration also makes the theme configurable from outside the library:
`@use "core" with ($accent: …)` works only because every variable carries `!default`.

**Load order still matters.** The CSS is emitted in the order of the `@use` lines in
`custom.sass`, so `inc/helpers` stays last.

---

## The reset reproduces what Bootstrap used to provide

**Where:** `src/styles/inc/_reset.sass`

**Why:** Bootstrap was wired up at the start and quietly supplied five things the layout
depended on. Dropping it without replacing them would have changed the page. The values
below were measured in the browser with Bootstrap still loaded, then written down:

```
*, ::before, ::after   box-sizing: border-box
h1–h6                  weight 500, line-height 1.2, margin 0 0 8px
                       2.5 / 2 / 1.75 / 1.5 / 1.25 / 1 rem
ul, ol                 padding-left: 32px, margin-bottom: 16px
button, input, …       font: inherit, margin: 0
html                   -webkit-text-size-adjust: 100%
```

After the swap every one of those measurements came out identical, so the page did not
move.

**One thing changed on purpose.** Bootstrap coloured links `#0d6efd`, which was never a
decision — it was a default nobody had chosen. The reset uses `color: inherit`, so a link
takes the surrounding text colour and is coloured explicitly with `c-accent` or any other
colour class when it should stand out.

**Headings are static now.** Bootstrap shrank them on narrow screens through its own
responsive sizing. The reset uses fixed `rem` sizes, and the `.content` block in
`_helpers.sass` reduces `h1` and `h2` below the `xs` breakpoint instead.

---

## The logo is styled by element, not by utility classes

**Where:** `src/styles/components/_logo.sass`
**Why:** Every project replaces the logo with its own file, and the mark, the wordmark and
their spacing change together with it. Carrying that look in the markup as
`flex`, `fz-20`, `fw-500`, `p-l-8` meant editing two components to retune one element, and
the same values were repeated in the header and in the footer. One file now owns the
whole block: the link, the image and the wordmark next to it.
**The image is sized by height alone.** `height: 24px` with `width: auto` keeps the
aspect ratio of whatever file is dropped in. The previous `width={40} height={24}`
attributes squeezed the shipped logo: it is 68×40, a ratio of 1.7, and 40×24 is 1.667.
**Footer overrides stay in `_footer.sass`.** `opacity: .5` and `filter: grayscale(1)`
describe the mood of the footer rather than the logo itself, and `footer .logo` outranks
`.logo` on specificity, so the import order does not matter.

---

## Headings carry one class, and the class carries everything

**Where:** `src/styles/components/_titles.sass`
**Why:** The old set was three classes — `title`, `title-intro`, `title-mini` — so every
heading needed help from utilities to look right: `fw-800` here, `tc p-b-64` there, a
colour on top. Two headings in the hero ended up the same 40px, one from the `h1` reset
and one from `title-intro`, and the hierarchy disappeared. The scale now has eight steps
and each class sets size, weight, line-height and bottom gap, so a heading needs no
second class and retuning one place changes every page.
**The scale.** 64, 48, 40, 32, 24, 20, 18, 16, a 1.25 ratio rounded onto the 4px grid the
rest of the system uses. Large headings are tighter (1.05–1.2) and small ones looser
(1.35–1.5), the usual relation between size and leading.
**Sizes are `rem`, not `em`.** With `em` a heading depended on the font size of whatever
contained it, so the same class rendered differently in two places.
**Each class steps down twice,** at `sm` and at `xs`. The responsive rules used to live in
a `.content` block in `_helpers.sass` and were pinned to exact markup
(`h3.title.w-60`), which stopped matching as soon as a heading moved. That block is gone.
**`intro` is reserved for the hero.** Two classes carry it, `title-intro` and
`title-intro-sub`, and they appear once each on the landing. A section heading further
down the page is `title-section`, so the name says where a heading belongs instead of how
loud it is.
**Alignment and width stayed out.** They describe the block around the text, not the text,
and leaving them out is what keeps the heading free of extra classes. A centred section
puts `tc` on its container and `tl` back on the grid inside it.
**The hero lead became a `<p>`.** It was an `h3` holding a sentence of body copy, which
told search engines it was a heading and forced layout classes onto a heading.
