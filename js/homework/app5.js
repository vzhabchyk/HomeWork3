document.write('Можно ли получить число пользователя </br> путем возведения числа 3 в некоторую степень.</br>')

let number = prompt('Enter your number.');
while (!(number % 3)) {
  number = number / 3;
}
if (number === 1) {
  document.write('Yes!');
} else {
  document.write('No!');
}