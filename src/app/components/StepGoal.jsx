import Steps from './Steps';
import { GOALS } from '../data';
import { pluralPositions } from '../utils';
export default function StepGoal({ goals, onToggleGoal, products, onEditSet, onNext }) {
  const canGoNext = goals.length > 0;

  return (
    <>
      <Steps current={1} />

      <h2 id="request-title" className="title">
        Что вы хотите <em>обсудить?</em>
      </h2>
      <p className="hint">Можно выбрать несколько</p>

      <div className="goals">
        {GOALS.map((goal) => {
          const isChecked = goals.includes(goal.id);
          return (
            <label key={goal.id} className={isChecked ? 'goal goal--checked' : 'goal'}>
              <input
                type="checkbox"
                className="checkbox"
                checked={isChecked}
                onChange={() => onToggleGoal(goal.id)}
              />
              <span>
                <span className="goal__title">{goal.title}</span>
                <span className="goal__text">{goal.text}</span>
              </span>
            </label>
          );
        })}
      </div>
      {products.length > 0 ? (
        <div className="set">
          <div className="set__head">
            <span>Ваш набор · {pluralPositions(products.length)}</span>
            <button className="link" onClick={onEditSet}>
              Изменить
            </button>
          </div>
          <div className="set__items">
            {products.map((product) => (
              <div className="set__item" key={product.id}>
                <img src={product.image} alt="" />
                <span>{product.name}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="set">
          <p>Позиции не выбраны — подберём их вместе на дегустации</p>
          <button className="link" onClick={onEditSet}>
            Выбрать в каталоге →
          </button>
        </div>
      )}

      <button className="button button--dark button--wide" onClick={onNext} disabled={!canGoNext}>
        Далее →
      </button>
      {!canGoNext && <p className="note">Выберите хотя бы один пункт</p>}
    </>
  );
}
