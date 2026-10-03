import { Page } from '../components/Page'

const Docs = () => {
  return (
    <Page title='Docs' meta='Short cheat sheet. The full version is in the README.'>
      <section>
        <h3 className='title'>Naming rule</h3>
        <p>First letters of the property, then first letters of the value:</p>
        <ul>
          <li>align-items: center → aic</li>
          <li>justify-content: space-between → jcsb</li>
          <li>object-fit: cover → obfc</li>
          <li>margin-left: auto → mla</li>
        </ul>
        <p>
          When the property is obvious from the value, it is dropped: upp is uppercase,
          ma is margin: auto.
        </p>
      </section>
      <section>
        <h3 className='title'>Numeric families</h3>
        <ul>
          <li>p-t-104, m-b-24, p-y-40 — spacing in pixels</li>
          <li>w-60 — percent, w-p-480 — pixels</li>
          <li>h-72 — vh, h-p-72 — pixels</li>
          <li>fz-18, fw-800 — font size and weight</li>
          <li>lh-150 — line-height 1.5, since a class name cannot contain a dot</li>
          <li>r-40, bw-2 — border radius and width</li>
          <li>s-40 — vertical spacer, halves itself on small screens</li>
        </ul>
      </section>
      <section>
        <h3 className='title'>Colours</h3>
        <p>
          The palette lives in inc/_variables.sass and expands into three families:
          c-* for text, bg-* for background, bc-* for borders. Change the variable and
          all three follow.
        </p>
      </section>
      <section>
        <h3 className='title'>Container</h3>
        <p>
          A block is held in width by the container class, and wide releases that limit
          for full-bleed sections. Padding stays a utility in the markup, so the container
          does one job only.
        </p>
      </section>
      <section>
        <h3 className='title'>Project setup</h3>
        <p>
          The only file you edit is inc/_variables.sass: colours and fonts. The import
          order in custom.sass must stay as it is, and inc/_helpers.sass has to come last —
          it overrides everything above, including Bootstrap utilities.
        </p>
      </section>
    </Page>
  )
}

export { Docs }
