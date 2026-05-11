// task 1

let start = Number(prompt("Введіть початок діапазону: "));
let end = Number(prompt("Введіть кінець діапазону: "));

let sum = 0;
for (let i = start < end ? start : end; i <= (start > end ? start : end); i++) {
  sum += i;
}
alert("Сума всіх чисел в діапазоні  " + sum);

//task 2

let a = Number(prompt("Введіть перше число: "));
let b = Number(prompt("Введіть друге число: "));

let res;

for (let i = 1; i <= (a < b ? a : b); i++) {
  if (a % i === 0 && b % i === 0) {
    res = i;
  }
}
alert("Найбільший спільний дільник: " + res);

//task 3

let num = Number(prompt("Введіть число: "));

let res2 = "";

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    res2 += " " + i;
  }
}
alert("Всі дільники числа: " + res2);

//task 4

let number = Number(prompt("Введіть число: "));

let count = 0;
do {
  count++;
  number = Math.floor(number / 10);
} while (number > 0);

alert("Кількість цифр у числі: " + count);

//task 5

let positive = 0;
let negative = 0;
let zeros = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < 10; i++) {
  let number = Number(prompt("Введіть число: "));
  if (number === 0) {
    zeros++;
  } else if (number % 2 === 0) {
    even++;
  } else {
    odd++;
  }
  if (number > 0) {
    positive++;
  } else if (number < 0) {
    negative++;
  }
}

alert(
  "Кількість додатних: " +
    positive +
    "\nКількість від'ємних: " +
    negative +
    "\nКількість нулів:" +
    zeros +
    "\nКількість парних: " +
    even +
    "\nКількість непарних: " +
    odd,
);

//task 6

while (true) {
  let number1 = Number(prompt("Введіть число: "));
  let number2 = Number(prompt("Введіть число: "));
  let sym = prompt("Введіть знак(+, -, *, /): ");
  let res;
  switch (sym) {
    case "-":
      res = number1 - number2;
      break;
    case "+":
      res = number1 + number2;
      break;
    case "/":
      if (number2 === 0) {
        alert("Ділити на нуль не можна");
        continue;
      }
      res = number1 / number2;
      break;
    case "*":
      res = number1 * number2;
      break;
    default:
      alert("Такого оператора не існує");
      continue;
  }
  alert("Результат: " + res);
  if (!confirm("Хочете розв'язати ще один приклад?")) {
    break;
  }
}

//task 7

let days = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
  "Неділя",
];

let i = 0;
while (confirm(days[i] + ". Бажаєте побачити назву наступного дня тижня?")) {
  i++;
  if (i === 7) i = 0;
}

//task 8

let result = "";
for (let i = 2; i < 10; i++) {
  result += "\n";
  for (let j = 1; j <= 10; j++) {
    result += i + "*" + j + "=" + i * j + "\n";
  }
}
console.log(result);
