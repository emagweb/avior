import { PiKeyboard, PiRuler, PiTranslate } from 'react-icons/pi'

const rows = [
  {
    Icon: PiKeyboard,
    point: 'Characters',
    avior: 'flex aic jcsb g-24',
    aviorCount: 18,
    other: 'flex items-center justify-between gap-6',
    otherCount: 39,
    note: 'Same row, half the markup. Short enough to read the layout straight from the attribute.'
  },
  {
    Icon: PiRuler,
    point: 'Values',
    avior: 'p-t-104',
    aviorCount: 7,
    other: 'pt-26, once you extend the scale',
    otherCount: 32,
    note: 'The design says 104px. You write 104. No scale in between to translate or extend.'
  },
  {
    Icon: PiTranslate,
    point: 'Vocabulary',
    avior: 'maw obfc jcsb',
    aviorCount: 13,
    other: 'max-w-* object-cover justify-between',
    otherCount: 36,
    note: 'Emmet abbreviations, the ones your editor expands already. Not a second language over CSS.'
  },
]

const Compare = () => {
  return (
    <section id='compare' className='p-y-80 bg-grey'>
      <div className='container'>
        <div className='w-60 wide'>
          <span className='eyebrow'>The short version</span>
          <h2 className='title-section'>Why not Tailwind</h2>
          <p className='title-lead'>
            Three differences. They are the reason this exists.
          </p>
        </div>

        <div className='cols-3 g-24 m-t-64'>
          {rows.map(({ Icon, point, avior, aviorCount, other, otherCount, note }) => (
            <div key={point} className='card bg-theme'>
              <Icon className='icon' aria-hidden='true' />
              <h3 className='title-card'>{point}</h3>

              <div className='versus m-t-24'>
                <p className='count'>{aviorCount}</p>
                <p className='label'>Avior</p>
                <p><code>{avior}</code></p>
              </div>

              <div className='versus muted m-t-24'>
                <p className='count'>{otherCount}</p>
                <p className='label'>Utility framework</p>
                <p><code>{other}</code></p>
              </div>

              <p className='fz-16 m-t-24'>{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Compare }
