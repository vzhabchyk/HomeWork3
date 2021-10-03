document.write('Произведение чисел от 15 до 35.</br>');
let multiplication = 1;

for (let i = 15; i <= 35; i++) {
  multiplication *= i;
}
document.write(multiplication);