document.write('Доллар стоит 27 гривен. Данные с расчетом стоимости 10, 20, 30... 100 долларов.</br>')

const $ = 27;
for (let i = 10; i <= 100; i += 10) {
  const money = $ * i;
  document.write(money + '</br>')
}