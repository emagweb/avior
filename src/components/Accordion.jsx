const Accordion = ({ items }) => (
  <div className='accordion'>
    {items.map(({ title, body, open }) => (
      <details key={title} className='accordion-item' open={open}>
        <summary className='accordion-head'>{title}</summary>
        <div className='accordion-body'>{body}</div>
      </details>
    ))}
  </div>
)

export { Accordion }
