// 1. Напишіть функцію, котра приймає строку як параметр і знаходить найдовше слово у строчці

function findBiggestWord(str) {
   const words = str.split(' ');
 
   return words.reduce((longest, current) => {
     return current.length > longest.length ? current : longest;
   }, '');
 }
 
 // 2. Напишіть функцію, котра приймає число як параметр і повертає перевернуте число
 
 function reverseNumber(number) {
   return parseInt (number.toString().split('').reverse().join('')) * Math.sign(number);
 }
 
 // 3. Написати функцію котра буде приймати стрінь значення і повертати нове стрінь значення із символами без повторення
 
 function unique(str) {
    let uniqueStr = '';
    
    for (let c of str) {
        if (!uniqueStr.includes(c)) {
            uniqueStr += c;
        }
    }
    
    return uniqueStr;
 }
 
 // 4. Написати функцію котра приймає 3 параметри - перемоги, нічиї, поразки і повертає кількість очок команди
 
 function calcPoints(win, draw, loss)
   let points = (win * 3) + (draw * 1) +(loss * 0);
   return points;
 
 // 5. Написати функцію яка приймає масив як параметр і повертає об'єкт із такими властивостями: 
 //   Максимальне значення
 //   Мінімальне значення
 //   Кількість елементів
 //   Середнє арифметичне
 
 function statistics(arr); {
   if (arr.length === 0) {
     return {
       max: null
       min: null
       count: 0
       average: null
     };
   }
 }
 
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const count = arr.length;
  const average = sum / count;
  const sum = arr.reduce((total, num) => total + sum, 0);
 
  return {
   max: max,
   min: min,
   count: count,
   average: average
  };
 
 // 6. Написати функцію котра приймає масив робітників команії
 
 const workers = [
   { name: "Jimm", salary: 40000, department: "IT" },
   { name: "Bob", salary: 60300, department: "HR" },
   { name: "Stacy", salary: 15000, department: "IT" },
   { name: "Tom", salary: 55200, department: "DEVOPS" },
   { name: "Kate", salary: 25000, department: "IT" },
   { name: "John", salary: 40000, department: "HR" },
   { name: "Billy", salary: 60000, department: "DEVOPS" },
 ];
// Функция должна вернуть объект Department це підрозділ в якому найбільша середня зарплатня

function highestDepartment(workers)