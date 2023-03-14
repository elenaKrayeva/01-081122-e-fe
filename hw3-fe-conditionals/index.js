//1. Пользователь вводит ТРИ числа вывести в консоль наибольшее из них. В этой задаче необходимо сделать проверку на число (нужно убедиться, что пользователь ввел именно число) 

/* let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');
let thirdNumber = prompt('Введите третье число'); 


if (((firstNumber !== null && firstNumber !== '') && (secondNumber !== null && secondNumber !== '')) && (thirdNumber !== null && thirdNumber !== '')) {
  firstNumber = +firstNumber;
  secondNumber = +secondNumber;
  thirdNumber = +thirdNumber;
  if ((typeof firstNumber === 'number' && !isNaN(firstNumber)) && (typeof secondNumber === 'number' && !isNaN(secondNumber)) && (typeof thirdNumber === 'number' && !isNaN(thirdNumber))) {
    console.log(Math.max(firstNumber, secondNumber, thirdNumber))
  } else alert('Введите числа');
}else alert('Введите числа');  */

//2.Используя конструкцию switch, напишите программу, которая переводит числа в слова. Например: пользователь вводит число 2, программа выводит «Два». Программу необходимо сделать для цифр от 0 до 5 (включительно)

/* const number = +prompt('Введите число от 0 до 5');
switch(number) {
  case 0:
    alert('ноль');
    break;
  case 1:
    alert('один');
    break;
  case 2:
    alert('два');
    break;
  case 3:
    alert('три');
    break;
  case 4:
    alert('четыре');
    break;
  case 5:
    alert('пять');
    break;
  default:
    alert('no')
}; */

//3.Дан следующий код:

//let age = 10;

//if (age < 10) {
//    console.log('hi!');
//} else if (age < 20) {
//    console.log('hello!');
//} else {
//    console.log('good day!');
//}
//Необходимо переписать этот код используя тернарный оператор

/* let age = 10;

const greeting = (age < 10) ? 'hi!' : (age < 20) ? 'hello!' : 'good day!'; 
console.log(greeting); */


//4. Написать программу для проверки таблицы умножения:
//Пользователь вводит число a
//Пользователь вводит число b
//Пользователь вводит ответ на a * b
//Нам необходимо проверить ответ пользователя на корректность, если пользователь ответил неправильно то выводим ответ вида: Ошибка! Правильный ответ: correctAnswer

//Где correctAnswer - это переменная, в которой находится правильный ответ

//Если пользователь ввел правильный ответ, то выводим сообщение вида: Правильно!

/* const a = +prompt('Введите чило a');
const b = +prompt('Введите чило b');
const res = +prompt('Введите a*b');
const correctAnswer = a*b;

res === correctAnswer ? alert('Правильно!') : alert(`Ошибка! Правильный ответ: ${correctAnswer}`); */