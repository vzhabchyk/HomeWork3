document.write("Среднее арифметическое всех целых чисел от 1 до 500.</br>");
let sum = 0;
for (let i = 1; i <= 500; i++) {
  sum += i;
}
const average = sum / 500;
document.write("Arithmetic mean of all numbers: " + average + ".");
