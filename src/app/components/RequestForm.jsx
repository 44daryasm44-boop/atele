import { useEffect, useRef, useState } from 'react';
import StepGoal from './StepGoal';
import StepContacts from './StepContacts';
import Success from './Success';
import { validate } from '../utils';

const EMPTY_CONTACTS = { name: '', venue: '', city: 'Нижний Новгород', points: '1', phone: '', comment: '', consent: false };

export default function RequestForm({ initialGoal, products, onClose, onSent }) {
  const [step, setStep] = useState('goal');
  const [goals, setGoals] = useState([initialGoal]);
  const [contacts, setContacts] = useState(EMPTY_CONTACTS);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const modalRef = useRef(null);
  const timerRef = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modalRef.current.focus();
    function handleKey(event) {
      if (event.key === 'Escape') closeRef.current();
      if (event.key !== 'Tab') return;
      const controls = [...modalRef.current.querySelectorAll('button:not(:disabled), input, textarea, a[href]')].filter(element => element.getClientRects().length);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === modalRef.current)) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && (document.activeElement === last || document.activeElement === modalRef.current)) { event.preventDefault(); first?.focus(); }
    }
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
      clearTimeout(timerRef.current);
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, []);

  useEffect(() => { modalRef.current.scrollTop = 0; modalRef.current.focus(); }, [step]);

  function changeField(field, value) {
    setContacts(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: undefined }));
  }
  function submit() {
    if (isSending) return;
    const newErrors = validate(contacts);
    setErrors(newErrors);
    if (Object.keys(newErrors).length) {
      requestAnimationFrame(() => modalRef.current.querySelector('[aria-invalid="true"]')?.focus());
      return;
    }
    setIsSending(true);
    // Demo submission stays in memory; contact details are never sent or stored.
    timerRef.current = setTimeout(() => { setIsSending(false); setStep('sent'); onSent(); }, 900);
  }
  return (
    <div className="overlay" onClick={onClose}>
      <div className={`modal modal--${step}`} ref={modalRef} tabIndex={-1} onClick={event => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="request-title">
        <button className="modal__close" onClick={onClose} aria-label="Закрыть форму">×</button>
        {step === 'goal' && <StepGoal goals={goals} onToggleGoal={id => setGoals(current => current.includes(id) ? current.filter(goal => goal !== id) : [...current, id])} products={products} onEditSet={onClose} onNext={() => setStep('contacts')} />}
        {step === 'contacts' && <StepContacts goals={goals} productsCount={products.length} contacts={contacts} errors={errors} isSending={isSending} onChange={changeField} onBack={() => setStep('goal')} onSubmit={submit} />}
        {step === 'sent' && <Success onClose={onClose} />}
      </div>
    </div>
  );
}
