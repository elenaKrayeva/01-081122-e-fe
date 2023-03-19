/* Найти индекс заданного числа в массиве: {3, 6, 4, 7, 2, 1, 9}
Алгоритм на вход должен получать любой массив и одну цифру, индекс которой требуется найти.
Задание считается выполненным если: использован ”Линейный подход” и алгоритм соответствует характеристикам алгоритма и выдает верный результат. */

function findIndex(arr, num) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}
const array =[3, 6, 4, 7, 2, 1, 9];
const number = 7;
const index = findIndex(array, number);
console.log(index); 

/* Реализовать алгоритм, который будет находить сумму квадратов всех элементов массива!  {3, 6, 4, 7, 2, 1, 9}
Задание считается выполненным если: использован ”Линейный подход” и алгоритм соответствует характеристикам алгоритма и выдает верный результат. */

function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i< arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return sum;
}
const array1 = [3, 6, 4, 7, 2, 1, 9];
const sum = sumOfSquares(array1);
console.log(sum); 