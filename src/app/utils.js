// Превращает любой ввод в маску +7 (___) ___-__-__
export function formatPhone(value) {
  // оставляем только цифры
  let digits = value.replace(/\D/g, '');

  // первую 7 или 8 считаем кодом страны и убираем
  if (digits.startsWith('7') || digits.startsWith('8')) {
    digits = digits.slice(1);
  }
  digits = digits.slice(0, 10);

  if (digits.length === 0) return '';

  // разделители добавляем только когда после них уже есть цифра,
  // иначе нельзя было бы стереть номер клавишей Backspace
  let result = '+7 (' + digits.slice(0, 3);
  if (digits.length > 3) result += ') ' + digits.slice(3, 6);
  if (digits.length > 6) result += '-' + digits.slice(6, 8);
  if (digits.length > 8) result += '-' + digits.slice(8, 10);
  return result;
}

// Проверяет поля второго шага и возвращает объект с ошибками.
// Если объект пустой — форма заполнена правильно.
export function validate(form) {
  const errors = {};

  if (form.name.trim() === '') {
    errors.name = 'Заполните имя';
  }
  if (form.venue.trim() === '') {
    errors.venue = 'Укажите заведение';
  }
  if (!form.city.trim()) errors.city = 'Укажите город';
  const phoneDigits = form.phone.replace(/\D/g, '');
  if (phoneDigits.length < 11) {
    errors.phone = 'Введите номер полностью';
  }
  if (!Number.isInteger(Number(form.points)) || Number(form.points) < 1) {
    errors.points = 'Минимум 1 точка';
  }
  if (!form.consent) {
    errors.consent = 'Нужно согласие на обработку данных';
  }

  return errors;
}

// Склонение слова «позиция»: 1 позиция, 2 позиции, 5 позиций
export function pluralPositions(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return count + ' позиция';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return count + ' позиции';
  return count + ' позиций';
}
