# Decisions

Why certain declarations exist. Each entry says what was done, why, and what breaks if
it is removed.

Read this before deleting a declaration that looks redundant. Most of them are here
because something else in the cascade fights them.

---

## `.container` sets its padding to zero

**Where:** `src/styles/inc/_helpers.sass`

```sass
.container
  padding-left: 0
  padding-right: 0
```

**Why:** Bootstrap ships its own `.container` with horizontal gutters of 12px. Ours is
declared later, so it wins on the properties it sets — but it can only win on properties
it actually sets. Without the explicit zero, the Bootstrap gutters stay.

**If removed:** nothing changes visually today, because the Bootstrap gutters quietly
provide the padding. The day Bootstrap is dropped, every container loses 12px on both
sides and the layout shifts. The zero makes the container behave the same with and
without Bootstrap.

**Remove when:** Bootstrap is gone and the shift has been verified.

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

**Where:** `src/styles/inc/_helpers.sass`, `src/styles/components/_colors.sass`

**Why:** Bootstrap generates its own utilities with `!important` — over a thousand
occurrences in `bootstrap.min.css`. A utility that has to beat `w-100` or the padding of
`col-lg-4` has to be equally strong. Component styles never compete with Bootstrap
utilities, so they stay clean.

**If removed:** utilities written in markup stop working wherever a Bootstrap utility
touches the same property, silently and only in some places.

**Remove when:** Bootstrap is gone. Then the import order alone is enough.

---

## `inc/_helpers.sass` is imported last

**Where:** `src/styles/custom.sass`

**Why:** utilities have to override component styles, and with equal specificity the
later rule wins. The same applies to Bootstrap: `custom.sass` is imported after
`bootstrap.min.css` in `src/index.jsx`.

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

**Why:** Bootstrap's reboot gives both a bottom margin of `1rem`. Spacing in this project
is set in the markup with utilities like `p-b-16`, so an invisible extra 16px underneath
every paragraph and figure fights that.

**If removed:** every paragraph and figure gains 16px of bottom margin while Bootstrap is
present.

**Remove when:** Bootstrap is gone, if the browser default is acceptable.
