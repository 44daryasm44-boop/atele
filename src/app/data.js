import image0 from './images/861d3.png';
import image1 from './images/dd744.png';
import image2 from './images/89f10.png';
import image3 from './images/3db5d.png';
import image4 from './images/ba404.png';
import image5 from './images/dca00.png';
import image6 from './images/250cc.png';
import image7 from './images/af95d.png';
import image8 from './images/d6238.png';
import image9 from './images/2a74a.png';
import image10 from './images/fea6d.png';
import image11 from './images/bf58c.png';

export const PRODUCTS = [
  { id: "medovik", name: "Торт Медовик классический", category: "Торты", assortment: "Сладкое", weight: "120 г", storage: 5, description: "Медовые коржи, сливочный крем, медовая крошка", partner: "Яндекс Лавка", wide: false, image: image0 },
  { id: "anthill", name: "Пирожное «Муравейник» с арахисом", category: "Пирожные", assortment: "Сладкое", weight: "130 г", storage: 7, description: "Песочное тесто на сливочном масле, варёная сгущёнка, арахис", partner: "Додо", wide: false, image: image1 },
  { id: "brownie", name: "Брауни шоколадно-ореховый", category: "Пирожные", assortment: "Сладкое", weight: "100 г", storage: 5, description: "Шоколадный бисквит, какао, сливочное масло, орехи", partner: "Coffee Like", wide: false, image: image2 },
  { id: "cream-croissant", name: "Круассан сливочный", category: "Круассаны", assortment: "Сладкое", weight: "120 г", storage: 3, description: "Слоёное тесто на сливочном масле, сливочно-творожный крем, белая глазурь", partner: "Яндекс Лавка", wide: true, image: image3 },
  { id: "chocolate", name: "Шоколадная колбаса", category: "Пирожные", assortment: "Сладкое", weight: "150 г", storage: 5, description: "Тесто с какао, варёная сгущёнка, песочное печенье", partner: "Яндекс Лавка", wide: true, image: image4 },
  { id: "tube", name: "Трубочка с белковым кремом", category: "Трубочки", assortment: "Сладкое", weight: "80 г", storage: 3, description: "Слоёное тесто, белковый крем, сахарная пудра", partner: "", wide: false, image: image5 },
  { id: "pepperoni", name: "Круассан с пепперони", category: "Круассаны", assortment: "Сытное", weight: "140 г", storage: 3, description: "Слоёное тесто, пепперони, моцарелла, сливочный сыр, томаты, базилик и орегано", partner: "", wide: false, image: image6 },
  { id: "carrot", name: "Морковный торт", category: "Торты", assortment: "Сладкое", weight: "120 г", storage: 5, description: "Морковный бисквит с грецким орехом и изюмом, крем на сливочном сыре, кокосовая стружка", partner: "", wide: false, image: image7 },
  { id: "roll", name: "Меренговый рулет с ягодами", category: "Пирожные", assortment: "Сладкое", weight: "160 г", storage: 3, description: "Меренга, крем на сливочном сыре и сливках, малиновый конфитюр", partner: "", wide: true, image: image8 },
  { id: "napoleon", name: "Круассан «Наполеон»", category: "Круассаны", assortment: "Сладкое", weight: "120 г", storage: 3, description: "Слоёное тесто на сливочном масле, крем для наполеона, слоёная крошка", partner: "", wide: false, image: image9 },
  { id: "trifle", name: "Трайфл «Три шоколада»", category: "Трайфлы", assortment: "Сладкое", weight: "150 г", storage: 5, description: "Брауни, муссы из белого, молочного и горького шоколада", partner: "", wide: false, image: image10 },
  { id: "cookies", name: "Печенье шоколадно-мраморное", category: "Печенье", assortment: "Сладкое", weight: "140 г", storage: 7, description: "Шоколадное песочное тесто на сливочном масле, какао, сахарная пудра", partner: "", wide: false, image: image11 },
];

export const GOALS = [
  {
    id: 'tasting',
    title: 'Бесплатная дегустация',
    text: 'Привезём образцы позиций из вашего набора',
  },
  {
    id: 'custom',
    title: 'Позиция под запрос',
    text: 'Разработаем продукт для вашего заведения',
  },
  {
    id: 'chain',
    title: 'Сотрудничество для сети',
    text: 'Обсудим объём, документы и доставку на несколько точек',
  },
];

// Экран «Заявка отправлена»: что будет дальше
export const NEXT_STEPS = [
  'Заявка',
  'Дегустация',
  'Подбор ассортимента',
  'Договор и прайс',
  'Первый заказ',
  'Регулярные поставки',
];
