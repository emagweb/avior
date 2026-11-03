import { useId, useRef, useState } from 'react'

const useTabKeys = (count, active, setActive, refs) => (event) => {
  const keys = { ArrowRight: 1, ArrowLeft: -1 }
  let next = null
  if (event.key in keys) next = (active + keys[event.key] + count) % count
  if (event.key === 'Home') next = 0
  if (event.key === 'End') next = count - 1
  if (next === null) return
  event.preventDefault()
  setActive(next)
  refs.current[next]?.focus()
}

const TabList = ({ labels, active, setActive, label, base }) => {
  const refs = useRef([])
  const onKeyDown = useTabKeys(labels.length, active, setActive, refs)

  return (
    <div className='tabs-list' role='tablist' aria-label={label} onKeyDown={onKeyDown}>
      {labels.map((text, index) => (
        <button
          key={text}
          ref={(node) => { refs.current[index] = node }}
          type='button'
          role='tab'
          id={`${base}-tab-${index}`}
          aria-selected={index === active}
          aria-controls={`${base}-panel-${index}`}
          tabIndex={index === active ? 0 : -1}
          onClick={() => setActive(index)}>
          {text}
        </button>
      ))}
    </div>
  )
}

const Tabs = ({ items, label }) => {
  const [active, setActive] = useState(0)
  const base = useId()

  return (
    <div className='tabs'>
      <TabList labels={items.map((item) => item.label)} active={active} setActive={setActive} label={label} base={base} />
      {items.map(({ label: text, content }, index) => (
        <div
          key={text}
          className='tabs-panel'
          role='tabpanel'
          id={`${base}-panel-${index}`}
          aria-labelledby={`${base}-tab-${index}`}
          tabIndex={0}
          hidden={index !== active}>
          {content}
        </div>
      ))}
    </div>
  )
}

export { Tabs, TabList }
