const families = [
  { label: 'Padding, margin', cls: 'p-t-104', css: 'padding-top: 104px', range: '0–160px, step 4' },
  { label: 'Gap', cls: 'flex-24-32', css: 'gap: 32px 24px', range: '0–160px, pairs to 64' },
  { label: 'Width in %', cls: 'w-60', css: 'width: 60%', range: '0–100%, step 5' },
  { label: 'Width in px', cls: 'w-p-480', css: 'width: 480px', range: '0–800px, step 4' },
  { label: 'Height in vh', cls: 'h-50', css: 'height: 50vh', range: '0–100vh, step 5' },
  { label: 'Height in px', cls: 'h-p-320', css: 'height: 320px', range: '0–800px, step 4' },
  { label: 'Font size', cls: 'fz-18', css: 'font-size: 18px', range: '0–72px' },
  { label: 'Font weight', cls: 'fw-600', css: 'font-weight: 600', range: '100–900' },
  { label: 'Line height', cls: 'lh-150', css: 'line-height: 1.5', range: '1–5, step .05' },
  { label: 'Radius, border', cls: 'r-12 bw-2', css: 'border-radius: 12px', range: '0–60px, 0–24px' },
  { label: 'Columns', cls: 'col-1 … col-12', css: 'N of 12 columns', range: '12 columns' },
  { label: 'Colours', cls: 'c- bg- bc-', css: 'text, background, border', range: 'your palette' },
]

const files = [
  { path: 'inc/_variables.sass', text: 'colours, fonts, steps and every range' },
  { path: 'inc/_helpers.sass', text: 'spacing, sizes, type and alignment' },
  { path: 'inc/_grid.sass', text: 'container, row, col and gaps' },
  { path: 'components/_colors.sass', text: 'c-, bg- and bc- for every colour' },
]

const Reference = () => {
  return (
    <section id='classes' className='p-y-104 bg-light'>
      <div className='container'>
        <div className='row jcc tc'>
          <div className='col-8'>
            <h2 className='title-section'>Every class <span className='c-accent'>at a glance</span></h2>
            <p className='title-lead c-medium'>
              Sizes come in pixels, percent or vh, and every family has a sensible range. The
              ranges are variables, so you can widen or narrow them.
            </p>
          </div>
        </div>

        <div className='row flex-48 m-t-56'>
          <div className='col-8'>
            {families.map(({ label, cls, css, range }, index) => (
              <div key={label} className={index % 2 ? 'row flex-16 aic p-y-12 p-x-16' : 'row flex-16 aic p-y-12 p-x-16 bg-white r-8'}>
                <div className='col-3 fz-14 fw-600 c-accent'>{label}</div>
                <div className='col-3'><code className='bg-white'>{cls}</code></div>
                <div className='col-3 fz-16'>{css}</div>
                <div className='col-3 fz-14 c-medium'>{range}</div>
              </div>
            ))}
          </div>

          <div className='col-4'>
            <h3 className='title-card'>Where the classes live</h3>
            <p className='fz-14 c-medium'>All paths start at <code className='bg-white'>src/styles/</code></p>
            {files.map(({ path, text }) => (
              <div key={path} className='m-b-16'>
                <p className='m-b-0'><code className='bg-white'>{path}</code></p>
                <p className='fz-14 c-medium'>{text}</p>
              </div>
            ))}
            <p className='fz-16 m-t-24'>
              The <a href='/docs' className='c-accent fw-600'>Docs page</a> lists every class
              with a working example and a search box: type aic, padding or 104.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Reference }
