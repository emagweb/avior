# Decisions

Why certain declarations exist. Each entry says what was done, why, and what breaks if
it is removed.

Read this before deleting a declaration that looks redundant. Most of them are here
because something else in the cascade fights them.

---

## The full-bleed container is `fluid`, not `wide`

**Where:** `src/styles/inc/_helpers.sass`

```sass
.container
  &.fluid
    max-width: 100%
    padding-left: 0
    padding-right: 0
```

**Why:** the modifier used to be `wide`, which collided with the `.wide` mobile helper in
the same file — a helper that sets `min-width: 90% !important`. Helpers load last, so the
collision had to be patched with `!important` on the container too, and the entry here
carried a note to rename one of the two. Renaming it `fluid` removed the collision and
the `!important` with it. `fluid` also zeroes the side padding, so a block can reach both
edges of the screen.

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

## Columns go full width below `sm`

**Where:** `src/styles/inc/_grid.sass`

**Why:** the grid keeps `row` and `col-*` from Bootstrap, which stacked on narrow
screens. Without the rule, three columns stay three columns on a phone and the layout
breaks. The breakpoint is `sm`, and the mechanism is a `flex-basis` of 100% rather than a
changed column count.

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

---

## One body size for the whole site, and a cap on line length

**Where:** `src/styles/components/_base.sass`,
`src/styles/inc/_variables.sass`
**Why:** The site used to run two body sizes: 16px with a 1.65 line on the landing and
20px with a doubled line inside `.page`. Same site, two rules, and the inner pages read
like a different product. Body text is now `$text`, one value in one place, 18px against
the default root.
**Line length is left to the container.** Text fills `container`, which is about 115
characters per line on a 1440px screen. Readability research argues for less — 45 to 75
characters, with [Baymard](https://baymard.com/blog/line-length-readability) narrowing it
to 50–60 — and a capped column was tried: paragraphs limited to a `$measure` width, then
the whole page moved into a 640px reading column. Both were rejected on the look. The
width of a text block is a design decision, so it belongs to whoever owns the design, and
a project that wants a reading column adds `maw`-style limits in its own markup.
**A subtitle may not be smaller than the text it introduces.** The page subtitle rendered
at 16px above 20px body copy, which read as a stray caption rather than a lead. It is
`fz-24` now, one step above body.
**The scale.** 16, 18, 20, 24, 28, 40, 48, 64 — a 1.25 ratio rounded onto the 4px grid.
`title-section` came down from 48px so that a section heading no longer ties with the page
`h1`, and the three smaller title classes each moved up one step to stay clear of 18px
body text.

---

## Responsive rules live in the Sass, not in class names
**Where:** `src/styles/inc/_responsive.sass`, `src/styles/inc/_variables.sass`
**Why:** breakpoint-prefixed utilities were built — `sm-fz-20` and friends, generated for
a whitelist of families — and then removed. A breakpoint is not part of what an element
is, so it has no business in the element's class list, and a page that tunes three
properties on two breakpoints ends up carrying six extra class names in the markup.
Responsive behaviour is written where the rule is, with the `=v-*` mixins:
```sass
.title-page
  font-size: 3rem
  +v-sm
    font-size: 2.25rem
```
**What it cost to find out.** The generator worked and the numbers were real: the four
families across three breakpoints ran from 118 KB for font size alone to 211 KB with
spacing included. The reason for dropping it is not size, it is that the markup should
not describe breakpoints.
**One thing stayed.** `$media` now holds the five breakpoint widths in a single map, and
the `=v-*` mixins read it. Those numbers used to be written twice.

---
## The grid is `container`, `row` and `col`

**Where:** `src/styles/inc/_grid.sass`

**Why:** the earlier version had `grid`, `cols-N` and `cols-auto-N`. They worked, but they
were names nobody knew before opening this project. `container`, `row` and `col-N` are what
anyone who has used Bootstrap or another twelve-column grid already expects, so they win
on the one thing this project optimises for: reading the markup without a reference.

**What was dropped with them:** the tablet step of `cols-*` (three columns to two below
`md`). A `col-N` share is written by hand, and halving it on a tablet would fight that
choice. A section that needs a different split on a tablet sets it in its Sass.

---

## The grid is flexbox, and the gap travels in a custom property
**Where:** `src/styles/inc/_grid.sass`
**Why:** CSS Grid is out of this project by decision, so every row of columns is
flexbox. `row` is `display: flex` with `flex-wrap: wrap`, and `col` is `flex: 1 1 0`,
which is the automatic width: three children split the row in three with no class on
it. `col-N` takes N of `$columns`.
**The column width has to know the gap.** `gap` is a property of the container, but with
flexbox the width of a child is its own `flex-basis`, so three children of 33.3% plus two
gaps overflow the row and the third one wraps. The basis has to subtract its share of the
gap, and the gap is chosen in the markup by a separate class. So `flex-N` and `flex-X-Y`
hand the value to their children as `--gap`, and the basis reads it:
```sass
flex: 0 0 calc(#{math.percentage(math.div($i, $columns))} - var(--gap, 0px) * #{math.div($columns - $i, $columns)})
```
The fallback of `0px` means a grid with no gap class still adds up to exactly 100%.
**The alternative was negative margins,** the way Bootstrap did it before `gap` existed:
a negative margin on the row and padding on every column. That needs no custom property,
but it makes the gap class meaningless on a row and leaks padding into the column background. Rejected.
**Measured at 1440px,** container inner width 1058px, `flex-24`:
```
col, three children         337 + 337 + 337      one row, no overflow
col-8 + col-4               697 + 336            one row, no overflow
col-6 + col-3 + col-3       517 + 246 + 246      one row, no overflow
col-4 four times            336 + 336 + 336      wraps to a second row
```

---
## The dark theme is a class on `html`, not a second palette
**Where:** `src/styles/components/_theme.sass`, `src/components/Theme.jsx`
**Why:** the utilities compile to static hex values — `.bg-light` is a colour, not a
token — so a runtime theme cannot come from the palette alone. The theme is a `dark`
class on `html`, and one file lists what changes under it: the page background and text,
the two tinted section backgrounds, borders, `code`, `.frame` and the dark button
variant. Four variables hold its colours: `$night`, `$night-surface`, `$night-line`,
`$night-text`.
**Why not CSS custom properties for every colour.** It would make the whole palette
swappable at runtime, and it would also mean every generated class reads a variable,
which is a different library than the one this is. The utilities stay literal; the theme
is a short, readable override.
**The switch remembers, and asks the system first.** `Theme.jsx` keeps the choice in
`localStorage` under `avior-theme` and falls back to `prefers-color-scheme`. An inline
script in `public/index.html` applies the class before the first paint, otherwise a dark
reader gets a white flash on every load.
**What to check when adding a section.** A background put on a section with `bg-*` needs
a line in `_theme.sass` unless it is already covered by the `.bg-light` and `.bg-grey`
rules.

---
## The mobile menu is a panel under the header
**Where:** `src/components/Header.jsx`, `src/styles/components/_menu.sass`
**Why:** below `sm` the links used to simply stack under the logo, which pushed the hero
down and left no way to close them. The header is now `position: relative` with an
absolutely positioned panel: `opacity`, `transform` and `visibility` transition together,
so the panel animates and stops receiving clicks when closed.
**It closes three ways:** a link (`Nav` takes an `onNavigate` callback), a pointer down
outside the header bar, and Escape. The listeners are added only while the panel is open
and removed when it closes.
**`visibility` is in the transition on purpose.** Without it the panel would still catch
clicks at zero opacity.

---

## The gap is written on `flex`, and handed to the children

**Where:** `src/styles/inc/_grid.sass`

**Why:** `g-N`, `gcg-N` and `grg-N` were three extra families for one idea. A gap only
means something on a flex container, so it now lives on the word itself: `flex-24`, and
`flex-24-32` for 24px between columns and 32px between rows.

**Why `--gap` goes to `> *` and not to the element.** With `--gap` on the container, a
column that was itself a flex container with a gap (`col-4 flex-16`) read its own value
instead of the row's, and the row broke into fewer columns. Set on the children, the value
a column reads always comes from the row it sits in. `.row > *` resets it to zero, so a
nested row without a gap does not inherit the outer one.

**Two-value pairs stop at `$max-gap`** (64 by default). Every pair is a class, and the
full 0–160 range would be 1681 of them; 0–64 is 289.
