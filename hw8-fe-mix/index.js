//Создать функцию «переключатель» toggleMe(), которая при вызове чередует возвращаемые булевы значения (true, false).

/* function toggle() {
  let value = false;
  return () => {
    value = !value
    console.log(value)
  }
}
const toggleMe = toggle();
toggleMe();
toggleMe();
toggleMe();  
 */

//Создать функцию counter(), которая способна считать количество своих вызовов (возвращает число). Если передать в эту функцию число как аргумент, то она должна возвращать счетчик начиная с этого числа.

/* function count() {
  let counter = 0;
  return function (n) {
    if (arguments.length)  {
      counter = n;
      return ++counter;
    } else {
      return ++counter;
    }
  }
}
const counter =count();
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(10))
console.log(counter())
console.log(counter())
console.log(counter(20))
console.log(counter())
console.log(counter())    */

//Создать функцию classNameEditor(), задача которой "управлять" css-классами. Функция должна принимать строку с названием css-класса и булево значние. Если булево значение true, то функция должна добавлять переданный css-класс, если false, то найти и удалить значение из css-класса. Функция всегда должна возвращать текущее значение css-класса.

/* function edit() {
  const h1 = document.querySelector('#h1')
  return (nameCssClass, boolValue) => {
    if (!nameCssClass) return '';
    if (boolValue) {
      h1.classList.add(nameCssClass);
    } else {
      h1.classList.remove(nameCssClass);
    }
  };
}

let classNameEditor = edit();
classNameEditor('green', true);
classNameEditor('red', true);
classNameEditor('transf', true);
classNameEditor('red', true);
classNameEditor();   */

//Создать функцию checkLogin, которая принимает 4 параметра. 1 параметр - это логин, введенный пользователем, 2 – правильный логин, 3 – callback, который вызовется если логин верный, 4 – callback, который вызовется если логин ложный.
//Пример вызова:
//checkLogin('user-admin', 'admin', itsOk, itsNotOk);

/* const input = document.querySelector('#input');
const button = document.querySelector('button');
const correctLogin = 'admin';

function itsOk() {
  console.log('Ok')
};

function itsNotOk() {
  console.log('Not Ok')
}

button.addEventListener('click', () => {
  const inputValue = input.value;
  const checkLogin = (login, correctLogin, callbackOk, callbackNotOk) => {
    if (login === correctLogin) {
      callbackOk();
    } else callbackNotOk();
  }
  checkLogin(inputValue, correctLogin, itsOk, itsNotOk);
  input.value = '';
}); */

//Написать функцию которая принимает массив строк (имена) и два колбэка. функция добавляет к каждому элементу массива фамилию "Smith" после чего передает получившийся массив в первый колбэк. Когда первый колбэк отработает, возвращеное им значение нужно передать во второй колбэк.
//1ый колбэк: это функция которая принимает массив строк, добавляет к каждой строке "Mr. " и возвращает получившийся массив. 2ой колбэк: функция которая принимает массив строк и выводит через alert() каждый элемент массива.

/* const array = ['John', 'Peter', 'Mike', 'David'];

let arrMr = [];

function addMr(arr) {
  return arrMr = arr.map((arr) => `Mr.${arr}`);
};

function showAlert(arr) {
  arr.forEach((arr) => alert(arr));
};

function addSmith(arr, callback1, callback2) {
  const arrSmith = arr.map((arr) => `${arr} Smith`);
  callback1(arrSmith);
  callback2(arrMr);
};

addSmith(array, addMr, showAlert);   */

//Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.

/* function showRepeatedNumbers(arr) {
  return arr.reduce((acc, currentValue, index, array) => {
    if(array.indexOf(currentValue) !== index && !acc.includes(currentValue)) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
}
console.log(showRepeatedNumbers([1,1,1,4,4,5,1,6,6,74,74,74,3]));  */

//Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив reduce() и вернуть тот массив сумма элементов которого наибольшая.

//странное решение у меня, но как все сделать только внутри reduce я пока не знаю)

/* const arr = [
  [1, 3, 5],
  [2, 4, 6, 1],
  [1, 3],
  [2, 4],
  [3, 7, 9, 4, 1],
  [5, 6, 1, 0],
  [1, 0],
  [0],
];

let arr1 = [];

const sum = (arr) =>
  arr.reduce((res, el) => {
    let sum1 = 0;
    for (let i = 0; i < el.length; i++) {
      sum1 += el[i];
    }
    arr1.push(sum1);
    return arr1;
  }, []);
sum(arr);
const maxIndex = arr1.indexOf(Math.max(...arr1));
const maxArr = arr[maxIndex];
console.log(maxArr); */
