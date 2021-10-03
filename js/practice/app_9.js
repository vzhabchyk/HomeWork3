const userNumber = prompt('Enter your number.');
let count = 0;
let sumEvenDivisors = 0;

document.write('Number dividers: </br>');
for (let i = 1; i <= userNumber; i++) {
  const divided = userNumber % i;
  if (!divided) {
    document.write(i + '</br>');
  } else {
    continue;
  }

  const evenDivisors = i % 2;
  if (!evenDivisors) {
    count++;
    sumEvenDivisors += i;
  }
}

document.write('Number of even divisors: ' + count + '.</br>');
document.write('Sum of even divisors: ' + sumEvenDivisors + '.');


