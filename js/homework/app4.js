document.write('Является ли число простым?</br>');

const number = prompt('Enter your number.');
for (let i = 2; i < number; i++) {
  const isDivided = number % i;
  if (!isDivided) {
    document.write('Your number is not simple.');
    break;
  } else if (i === number - 1) {
    document.write('Your number is simple.');
  }
} 
