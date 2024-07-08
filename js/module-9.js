// 1. Вивести одним рядком мінімальне значення масиву за допомогою деструктуризації та Math
const array = [1, 2, 3, 4, 6, 710, 34013, 13];

const min = Math.min(...array);
console.log(`${min}`);

// 2. Функція multiply не приймає явно ніяких параметрів
function multiply() {
  return Array.from(arguments).reduce((acc, curr) => acc * curr, 1);
}

console.log(multiply(100, 200, 83902, 1230));
// В результаті має повернутися число, котре є результатом множення усіх аргументів переданих у функцію

// 3. У нас є функція totalPrice - за допомогою деструктуризації об'єкту зробити так, що б функція працювала
const product = {
  productName: "Water",
  price: 20,
  count: 3,
};

function totalPrice({ price, count }) {
  return price * count;
}

console.log(totalPrice(product));

// 4. Написати об'єкт у котрому буде властивість items ( спочатку пустий масив)
// метод об'єкту setItems котрий приймає масив значень і встановлює цей масив як значення властивості items
// метод об'єкту sum котрий повертає суму усіх елементів масиву items
// метод maxValue еотрий поверає максимальне значення з масиву items з використанням деструктуризації масиву

const object = {
  items: [],

  setItems(newItems) {
    this.items = newItems;
  },

  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0);
  },

  maxValue() {
    return Math.max(...this.items);
  },
};

// 5. Написати функционал так, що б при виклику showPrediction виводилась випадковий вираз з масиву predictArr
// кожні 3 секунди
// Додати метод для зупинки роботи виводу виразів

const predictsArr = [
  "Удача прийде звідки не чекаєте.",
  "Давні борги будуть повернуті вам.",
  "Вас чекає несподіване грошове надходження.",
  "Всі незакінчені справи будуть завершені.",
  "Яскрава пригода вже чекає на вас.",
  "Планування часу допоможе вам не запізнитися на зустріч.",
  "Інтуїція цього разу не підведе вас. Використовуйте це.",
  "Прислухайтеся до себе і відповідь на запитання буде знайдено.",
  "З'явиться можливість вирушити в дорогу.",
  "Ваш цінний досвід зможе комусь допомогти, якщо перестанете його ховати в собі.",
  "Вам не вдасться сподобатися всім, не витрачайте на це енергію.",
  "Одяг, який вас старить, не дістанеться вам.",
];

const obj = {
  predictions: [],
  intervalid: null,

  setPredictions: function (arr) {
    this.predictions = arr;
  },

  showPrediction: function () {
    const self = this;
    this.intervalid = setInterval(function () {
      const randomIndex = self.takeNumber();
      console.log(self.predictions[randomIndex]);
    }, 3000);
  },

  stopPrediction: function () {
    clearInterval(this.intervalid);
    this.intervalid = null;
  },

  takeNumber: function () {
    return Math.floor(Math.random() * this.predictions.length);
  },
};

const predictions = obj;
predictions.setPredictions(predictsArr);
