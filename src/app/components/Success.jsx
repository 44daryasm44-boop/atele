import successIcon from '../images/success.svg';
import { NEXT_STEPS } from '../data';
export default function Success({ onClose }) {
  return (
    <div className="success">
      <img className="success__icon" src={successIcon} alt="" />
      <h2 id="request-title" className="title title--center">
        Заявка <em>отправлена</em>
      </h2>
      <p className="hint hint--center">
        Ответим в течение часа, чтобы согласовать дату бесплатной дегустации.
        <span className="demo-note">Это демонстрация: данные никуда не отправляются.</span>
      </p>

      <p className="success__subtitle">Что будет дальше</p>
      <ol className="timeline">
        {NEXT_STEPS.map((name, index) => {
          let status = '';
          if (index === 0) status = '✓ готово';
          if (index === 1) status = 'следующий шаг';

          return (
            <li key={name} className={index > 1 ? 'timeline__item timeline__item--later' : 'timeline__item'}>
              <span className="timeline__number">{String(index + 1).padStart(2, '0')}</span>
              <span className="timeline__name">{name}</span>
              <span className="timeline__status">{status}</span>
            </li>
          );
        })}
      </ol>

      <button className="button button--outline button--wide" onClick={onClose}>
        Вернуться на сайт
      </button>
    </div>
  );
}
