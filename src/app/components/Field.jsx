import { useId } from 'react';

export default function Field({ label, error, multiline, ...inputProps }) {
  const id = useId();
  const props = { ...inputProps, id, className: error ? 'input input--error' : 'input', 'aria-invalid': error ? true : undefined, 'aria-describedby': error ? `${id}-error` : undefined };
  return <label className="field" htmlFor={id}><span className="field__label">{label}{multiline && <span className="optional">необязательно</span>}</span>{multiline ? <textarea rows={3} {...props} /> : <input {...props} />}{error && <span className="field__error" id={`${id}-error`}>{error}</span>}</label>;
}
