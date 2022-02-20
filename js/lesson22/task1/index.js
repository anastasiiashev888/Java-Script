/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  const reclama = document.querySelectorAll('.promo__adv img');
  const komedia = document.querySelector('.promo__genre');
  const poster = document.querySelector('.promo__bg');
  const move = document.querySelector('.promo__interactive-list');
  const input = document.querySelector('.adding__input');
  const form = document.querySelector('form.add');
  const checkbox = document.querySelector('[type="checkbox"]');

  komedia.textContent = 'Драма';
  poster.style.backgroundImage = 'url("img/bg.jpg")';

  reclama.forEach((el) => {
    el.remove();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let textFilm = input.value;
    const checkedBox = checkbox.checked;
    if (textFilm) {
      if (textFilm.length > 21) {
        textFilm = `${textFilm.substring(0, 22)}...`;
      }
      if (checkedBox) {
        console.log('Добавляем любимый фильм');
      }
      movieDB.movies.push(textFilm);
      filmsPush(movieDB.movies, move);
    }
    event.target.reset();
  });

  function filmsPush(films, parrent) {
    parrent.innerHTML = '';
    films.sort(function (a, b) {
      return a.localeCompare(b);
    });

    films.forEach((el, i) => {
      parrent.innerHTML += `
  <li class="promo__interactive-item">${i + 1} ${el}
      <div class="delete"></div>
  </li>
`;
    });

    document.querySelectorAll('.delete').forEach((el, i) => {
      el.addEventListener('click', () => {
        el.parentElement.remove();
        movieDB.movies.splice(i, 1);
        filmsPush(films, parrent);
      });
    });
  }
  filmsPush(movieDB.movies, move);
});
/* 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту  */
