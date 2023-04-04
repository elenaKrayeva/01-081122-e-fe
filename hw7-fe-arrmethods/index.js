//Дан случайный массив чисел (создайте самостоятельно). С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.

/* const arr = [1, 45, 22, 98, 76, 45, 102];

function isEvenTwoDigit(number) {
  return (number % 2 === 0) && (number < 100) && (number > 9)
}; 

const arr1 = arr.filter(isEvenTwoDigit);

console.log(arr1); */

//Пользователь вводит 10 случайных значений. Каждое значение необходимо записать в массив. С помощью метода .every() проверить были ли все введенные пользователем данные – числами.

/* let arr = [];

for (let i=0; i < 10; i++) {
  arr.push(prompt('enter a number'))
}; 

let check = arr.every(elem => typeof (+elem) === 'number' && !isNaN(+elem));
console.log(check);  */

//Дан массив объектов
//Используя ТОЛЬКО методы массивов (циклы запрещены):
//Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b

/* const arr = [
  { a: 2, b: 1 },
  { a: 5, b: 12 },
  { a: 95, b: 7 },
];

let res = arr.every(({ a, b }) => a > b) ? "its valid" : "its invalid";
console.log(res); */

//На основе массива arr, создать массив объектов у которых поле b возведено в квадрат пример:

/* const arr2 = [
    {a: 2, b: 1},
    {a: 5, b: 144},
    {a: 95, b: 49}
]; */

/* const arr1 = arr.map(({a, b: b1}) => {
    return  {a, b: b1 * b1};
});
console.log(arr1);  */
