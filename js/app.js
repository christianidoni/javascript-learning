// ----> Задание 1 <---- //

let country = "Ukraine";
let city = "Mykolaiv";
let address = "Karpenko str";
let fullAddress = `$(country), $(city), $(address)`;
console.log(fullAddress);

// ----> Задание 2 <---- //

let length = 15;
let width = 10;
let area = length * width;
console.log("Площадь прямоугольника", area);

// ----> Задание 3 <---- //

let result = 17 ** 6;
console.log(result);

// ----> Задание 4 <---- //

let randomNumber = Math.floor(Math.random() * 71);
console.log(randomNumber);

// ----> Задание 5 <---- //

// let number = 13;

// if (number % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("not even");
// }

let number = 13;
console.log(number % 2 === 0 ? "even" : "not even");

// ----> Задание 6 <---- //

// let text = "This is string";
// if (text.includes("$")) {
//   text = text.replace('$', '€');
// }
// console.log(text);

let text = "This is string";
text = text.includes("$") ? text.replace("$", "€") : text;
console.log(text);

// ----> Задание 7 <---- //

let monthNumber = 7;

if (monthNumber === 1) {
  console.log("January");
} else if (monthNumber === 2) {
  console.log("February");
} else if (monthNumber === 3) {
  console.log("March");
} else if (monthNumber === 4) {
  console.log("April");
} else if (monthNumber === 5) {
  console.log("May");
} else if (monthNumber === 6) {
  console.log("June");
} else if (monthNumber === 7) {
  console.log("July");
} else if (monthNumber === 8) {
  console.log("August");
} else if (monthNumber === 9) {
  console.log("September");
} else if (monthNumber === 10) {
  console.log("October");
} else if (monthNumber === 11) {
  console.log("November");
} else if (monthNumber === 12) {
  console.log("December");
} else {
  console.log("wrong month number");
}

// ----> Задание 8 <---- //

let password = "my*7password";
password = password.trim();

if (password.length > 10 && password.includes("&") && password.includes("#")) {
  console.log("you have strong password");
} else {
  console.log("please change your password");
}

// ----> Задание 9 <---- //

let a = 7;
let b = 14;

if (typeof a === "number" && typeof b === "number") {
  console.log(a + b);
} else {
  console.log("Sum of those items can't be counted");
}
