const c = prompt('Как твое имя ?', '');
const answer = {
  name: c,
  movies: [],
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
  if (a !== '' && a !== null && a.length < 5 && b !== '' && b !== null) {
    answer.movies[a] = b;
    console.log('ok');
  } else {
    console.log('error');
    i--;
  }
}

console.log(answer);
