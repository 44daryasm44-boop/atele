export default function Steps({ current }) {
  return (
    <div className="steps">
      <p className="eyebrow">Шаг {current} из 2</p>
      <div className="steps__bars">
        <span className="steps__bar steps__bar--active" />
        <span className={current === 2 ? 'steps__bar steps__bar--active' : 'steps__bar'} />
      </div>
    </div>
  );
}
