const snippet = `$dark: #2A272E
$accent: $pink
$basic: 'Google Sans Flex', sans-serif

$content: 1200px
$gutter: 5%
$radius: 25px

$text: 1.125rem
$line: 1.6
$step: 4`

const Variables = () => {
  return (
    <section id='variables' className='p-y-80'>
      <div className='container'>
        <div className='cols-2 g-64'>
          <div>
            <span className='eyebrow'>Configuration</span>
            <h2 className='title-section'>One file. That is the config.</h2>
            <p className='title-lead'>
              Every colour, font, width and step reads from inc/_variables.sass. It is the
              only file you are expected to open.
            </p>
            <p>
              Every variable carries a default, so a project sets its theme from outside
              and the library stays untouched. Add a colour to the palette and its text,
              background and border classes appear with it, button variant included.
            </p>
            <p className='m-t-24'>
              <a href='/docs' className='button'>See the classes</a>
            </p>
          </div>
          <div>
            <pre className='frame'><code>{snippet}</code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Variables }
