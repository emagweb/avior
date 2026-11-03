const numbers = [
  { value: '6 KB', label: 'of CSS reaches the browser', note: 'gzipped. Unused helpers are removed at build time.' },
  { value: '100', label: 'Lighthouse on desktop', note: 'performance, accessibility, best practices and SEO.' },
  { value: '4', label: 'runtime dependencies', note: 'React, React DOM, React Router and React Icons.' },
  { value: '0', label: 'pages that wait for JavaScript', note: 'every route is prerendered to HTML.' },
]

const Numbers = () => {
  return (
    <section id='numbers'>
      <div className='container'>
        <div className='row flex-24'>
          {numbers.map(({ value, label, note }) => (
            <div key={label} className='col-3'>
              <p className='title-section m-b-4'>{value}</p>
              <p className='title-card'>{label}</p>
              <p className='fz-14 c-muted'>{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Numbers }
