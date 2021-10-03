document.write('Дано целое число. Вывести все целые числа от 1 до 100,</br> квадрат которых не превышает числа N</br>');

const number = prompt('Enter your number.');
for ( let i = 1; i <= 100; i++) {
  if (i * i <= number) {
    document.write (i + '</br>');
  }
}