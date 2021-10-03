document.write('Все числа в диапазоне от 100 до 200 кратные 3.</br>' + 'Multiples of 3: </br>');
for (let i = 100; i <= 200; i++) {
  const isDivided = i % 3;
  if (!isDivided) {
    document.write(i + '.</br>');
  }
}