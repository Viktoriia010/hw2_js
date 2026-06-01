//task 3

function washDishes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Посуд вимито");
    }, 2000);
  });
}
function cleanRoom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Кімнату прибрано");
    }, 4000);
  });
}
function makeDinner() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Вечеря приготована");
    }, 7000);
  });
}

washDishes()
  .then((result) => console.log(result))
  .then(() => cleanRoom())
  .then((result) => console.log(result))
  .then(() => makeDinner())
  .then((result) => console.log(result));

//task 4

function sortArray(array) {
  new Promise((resolve, reject) => {
    if (array.length === 0) {
      reject("Масив порожній");
    } else {
      setTimeout(() => {
        array.sort((a, b) => a - b);
        localStorage.setItem("array", JSON.stringify(array));
        resolve(array);
      }, 2000);
    }
  })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

const arr1 = [];
const arr2 = [3, 2, 5, 7, 1, 2];
sortArray(arr1);
sortArray(arr2);

// task 5

async function multiplyAsync(a, b) {
  return new Promise((resolve, reject) => {
    const num1 = Number(a);
    const num2 = Number(b);

    if (!isNaN(num1) && !isNaN(num2)) {
      setTimeout(() => {
        resolve(a * b);
      }, 2000);
    } else {
      reject("Некоректні значення");
    }
  });
}

async function main() {
  multiplyAsync(6, 9)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
main();
