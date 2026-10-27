import { useState } from 'react';
import { PRODUCTS } from './data';
import RequestForm from './components/RequestForm';

export default function App() {
  const [selectedIds, setSelectedIds] = useState([]);
  const [requestGoal, setRequestGoal] = useState(null);
  const [assortment, setAssortment] = useState('Все');
  const [category, setCategory] = useState('');
  const [chainsOnly, setChainsOnly] = useState(false);
  const selectedProducts = PRODUCTS.filter(product => selectedIds.includes(product.id));
  const filtered = PRODUCTS.filter(product =>
    (assortment === 'Все' || product.assortment === assortment) &&
    (!category || product.category === category) && (!chainsOnly || product.partner)
  );
  function toggleProduct(id) {
    setSelectedIds(ids => ids.includes(id) ? ids.filter(item => item !== id) : [...ids, id]);
  }
  function resetFilters() { setAssortment('Все'); setCategory(''); setChainsOnly(false); }
  return (
    <div className="page" id="top">
      <header className="header">
        <a className="brand" href="#top">Кондитерское <em>ателье</em></a>
        <nav aria-label="Основная навигация"><a href="#catalog" aria-current="page">Каталог</a><a href="#cooperation">Сотрудничество</a></nav>
        <button className="button button--dark" onClick={() => setRequestGoal('tasting')}>Дегустация{selectedIds.length > 0 && ` (${selectedIds.length})`}</button>
      </header>
      <main className="container" id="catalog">
        <p className="breadcrumbs"><a href="#top">Главная</a> → Каталог</p>
        <h1>Наш <em>ассортимент</em></h1>
        <p className="intro">Сладкое и сытное для вашей витрины. Отметьте, что хотите попробовать, — привезём на бесплатную дегустацию</p>
        <div className="terms"><span>Цены — после дегустации <details><summary>Почему?</summary><p>Подберём ассортимент и объёмы на дегустации, затем подготовим персональный прайс.</p></details></span><span>Минимальный заказ от 1500 ₽</span><span>Доставка 3 раза в неделю</span></div>
        <section className="filters" aria-label="Фильтры каталога">
          <div className="filter-row">{['Все', 'Сладкое', 'Сытное'].map(item => <button key={item} className={`chip ${assortment === item ? 'chip--active' : ''}`} aria-pressed={assortment === item} onClick={() => {setAssortment(item); setCategory('');}}>{item}{item === 'Все' && ` · ${PRODUCTS.length}`}</button>)}</div>
          <div className="filter-line"><div className="filter-row">{['Торты', 'Пирожные', 'Трайфлы', 'Трубочки', 'Печенье', 'Круассаны', 'Чиабатты'].map(item => <button key={item} className={`chip chip--small ${category === item ? 'chip--active' : ''}`} aria-pressed={category === item} onClick={() => setCategory(category === item ? '' : item)}>{item}</button>)}</div><label className="chain-filter"><input type="checkbox" className="checkbox" checked={chainsOnly} onChange={event => setChainsOnly(event.target.checked)}/>Выбирают сети</label></div>
          <div className="results"><p aria-live="polite">Показано {filtered.length} из {PRODUCTS.length}</p><button className="link link--muted" onClick={resetFilters}>Сбросить фильтры</button></div>
        </section>
        <div className="catalog">
          {filtered.map(product => <article className={`product ${!category && assortment === 'Все' && !chainsOnly && product.wide ? 'product--wide' : ''}`} key={product.id}>
            <div className="product__photo"><img src={product.image} alt={product.name} loading="lazy" /></div>
            <div className="product__info">{product.partner && <p className="product__partner">ВЫБИРАЮТ: <span>{product.partner}</span></p>}
            <div className="product__heading"><h2>{product.name}</h2><button className={`button button--small ${selectedIds.includes(product.id) ? 'button--dark' : 'button--outline'}`} aria-pressed={selectedIds.includes(product.id)} aria-label={`${selectedIds.includes(product.id) ? 'Убрать из набора' : 'Добавить в набор'}: ${product.name}`} onClick={() => toggleProduct(product.id)}>{selectedIds.includes(product.id) ? '✓ В наборе' : '+ В набор'}</button></div>
            <p className="product__description">{product.description}</p><p className="product__weight">Вес: {product.weight} · Хранение: {product.storage} сут</p></div>
          </article>)}
          {!category && assortment === 'Все' && !chainsOnly && <aside className="custom-card"><p className="eyebrow">Под ваш запрос</p><h2>Нет нужной <em>позиции?</em></h2><p>Разработаем продукт для вашего заведения или сети</p><button className="button button--outline" onClick={() => setRequestGoal('custom')}>Обсудить позицию →</button></aside>}
        </div>
        {filtered.length === 0 && <div className="empty"><h2>Пока ничего не нашлось</h2><p>Попробуйте изменить фильтры или обсудите с нами свою позицию.</p><button className="button button--outline" onClick={resetFilters}>Сбросить фильтры</button></div>}
        <section className="cooperation" id="cooperation"><h2>Не знаете, что <em>выбрать?</em></h2><div><p>Расскажите о своём заведении. Подскажем, какие позиции подойдут вашей витрине и гостям</p><button className="button button--dark" onClick={() => setRequestGoal('tasting')}>Давайте подберём на дегустации →</button></div></section>
      </main>
      <footer className="footer"><div className="container"><div className="footer__top"><a className="brand" href="#top">Кондитерское <em>ателье</em></a><a href="#catalog">Каталог</a><button className="link" onClick={() => setRequestGoal('chain')}>Сотрудничество для сети →</button></div><p className="footer__bottom">© Кондитерское ателье · Учебный проект<span>Демонстрационная форма — данные не отправляются</span></p></div></footer>
      {selectedIds.length > 0 && <div className="set-bar"><span aria-live="polite">Набор для дегустации · {selectedIds.length}</span><button className="button button--dark" onClick={() => setRequestGoal('tasting')}>Оформить →</button></div>}
      {requestGoal && <RequestForm initialGoal={requestGoal} products={selectedProducts} onClose={() => setRequestGoal(null)} onSent={() => setSelectedIds([])} />}
    </div>
  );
}
