//Написать программу, которая определяет количество положительных, отрицательных чисел и нулей. Пользователь вводит числа с помощью prompt() до тех пор пока не нажмет отмена. Пример вывода: Положительных: 2 шт. Отрицательных: 5 шт. Нулей: 3 шт.


/* let positive = 0;
let negative = 0;
let zero = 0;
let num;
do {
   num = prompt('enter a number');
   if (+num > 0) {
    positive++;
  }
  if (+num < 0) {
    negative++;
  }
  if (num === '0') {
    zero++;
  } 
} while (num !== null) ;
console.log(`Положительных: ${positive} шт. Отрицательных: ${negative} шт. Нулей: ${zero} шт.`);  */

//Написать программу, которая выводит среднее арифметическое n чисел введенных пользователем. Ввод чисел прекращается, когда нажали отмена, после чего выводится среднее арифметическое.

/* let sum = 0;
let quantity = 0;
let number;

do {
  number = prompt('enter a number');
  sum += +number;
  quantity += 1;
} while (number !== null);
alert(`среднее арифметическое = ${sum / (quantity - 1)}`);  */

//Написать программу, в которой пользователя просят ввести числа 5 раз. Причем каждое последующее число должно быть больше предыдущего, иначе вывести текст ошибка! в консоль и прекратить ввод.

/* let prevNum = +prompt('enter a first number');
for (let i = 0; i < 4; i++) {
  let currentNum = +prompt('enter the next number');
  if (currentNum <= prevNum) {
    console.log('Ошибка!');
    break;
  }
  prevNum = currentNum;
}; */

//Написать программу-генератор популярных песен. Пользователь вводит число. Вывести количество pam равное этом числу. Строка должна начинаться с param. Например: Вводим 3 Программа выводит: "param-pam-pam-pam" Вводим 5 Программа выводит: "param-pam-pam-pam-pam-pam" ==В этом задании запрещено использовать .repeat() (все делаем циклом)==

/* let num = +prompt('enter a number');
let output = 'param';
for (let i = 0; i < num; i++) {
  output += '-pam';
}
console.log(output); */