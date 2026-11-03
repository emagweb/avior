import { useId } from 'react'

const Field = ({ label, hint, error, children }) => {
  const id = useId()
  const hintId = hint ? `${id}-hint` : null
  const errorId = error ? `${id}-error` : null
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className='field'>
      {label && <label className='field-label' htmlFor={id}>{label}</label>}
      {children({ id, 'aria-describedby': describedBy, 'aria-invalid': error ? true : undefined })}
      {hint && <p className='field-hint' id={hintId}>{hint}</p>}
      {error && <p className='field-error' id={errorId} role='alert'>{error}</p>}
    </div>
  )
}

export { Field }
