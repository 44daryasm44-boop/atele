import Steps from './Steps';
import Field from './Field';
import { GOALS } from '../data';
import { formatPhone, pluralPositions } from '../utils';
export default function StepContacts({
  goals, productsCount, contacts, errors, isSending, onChange, onBack, onSubmit,
}) {
  const goalTitles = GOALS.filter((goal) => goals.includes(goal.id)).map((goal) => goal.title);
  const summary = [...goalTitles];
  if (productsCount > 0) summary.push(pluralPositions(productsCount));


  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Steps current={2} />

      <button type="button" className="link link--back" onClick={onBack}>
        ← Назад
      </button>
      <h2 id="request-title" className="title">
        Как с вами <em>связаться?</em>
      </h2>
      <p className="hint">{summary.join(' · ')}</p>

      <div className="fields">
        <Field
          label="Имя"
          autoComplete="name"
          placeholder="Как к вам обращаться"
          value={contacts.name}
          error={errors.name}
          onChange={(e) => onChange('name', e.target.value)}
        />
        <Field
          label="Заведение"
          autoComplete="organization"
          placeholder="Название кофейни, ресторана или сети"
          value={contacts.venue}
          error={errors.venue}
          onChange={(e) => onChange('venue', e.target.value)}
        />
        <div className="fields__row">
          <Field
            label="Город"
            autoComplete="address-level2"
            error={errors.city}
            value={contacts.city}
            onChange={(e) => onChange('city', e.target.value)}
          />
          <Field
            label="Количество точек"
            type="number"
            min="1"
            value={contacts.points}
            error={errors.points}
            onChange={(e) => onChange('points', e.target.value)}
          />
        </div>
        <Field
          label="Телефон или мессенджер"
          type="tel"
          autoComplete="tel"
          placeholder="+7 (___) ___-__-__"
          value={contacts.phone}
          error={errors.phone}
          onChange={(e) => onChange('phone', formatPhone(e.target.value))}
        />
        <Field
          label="Комментарий"
          multiline
          placeholder="Формат витрины, объёмы, удобные даты"
          value={contacts.comment}
          onChange={(e) => onChange('comment', e.target.value)}
        />
      </div>

      <label className="consent">
        <input
          type="checkbox"
          className="checkbox"
          checked={contacts.consent}
          aria-invalid={errors.consent ? true : undefined}
          aria-describedby="consent-note"
          onChange={(e) => onChange('consent', e.target.checked)}
        />
        <span>
          Согласен на обработку персональных данных
          <br />
          <span className="consent__note" id="consent-note">Учебная демонстрация: данные не передаются и не сохраняются.</span>
        </span>
      </label>
      {errors.consent && <p className="field__error">{errors.consent}</p>}

      <button
        type="submit"
        className="button button--dark button--wide"
        disabled={isSending} aria-busy={isSending}
      >
        {isSending ? (
          <>
            <span className="spinner" /> Отправляем…
          </>
        ) : (
          'Отправить заявку'
        )}
      </button>
      <p className="note">Прайс пришлём после дегустации. Минимальный заказ — от 1 500 ₽</p>
    </form>
  );
}
