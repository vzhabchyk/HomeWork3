document.write("Сумма чётных чисел в диапазоне от 30 до 80. </br>");
let sum = 0;
for (let i = 30; i <= 80; i += 2) {
  sum += i;
}
document.write("Sum of even numbers from 30 to 80: " + sum + ".");
