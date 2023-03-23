//Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

/* const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
const arr2 = arr.splice(2,3);
console.log(arr2); */


//Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Переставить "Janett", "Franz" в начало массива

/* const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
const arr1 = arr.splice(5,2).concat(arr)
console.log(arr1)  */

//Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Заменить "Eddie", "Janett" на "Oleg","Valerchik"

/* const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
arr.splice(4,2,'Oleg','Valerchik');
console.log(arr);  */

//Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

/* const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
arr.reverse().splice(0,4,'Mitrofan','Mitrofan','Mitrofan','Mitrofan' )
console.log(arr);  */

//Даны два массива ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"] ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"] Взять из второго массива все имена начина с "Aristarkh" (включительно) и добавить их в 1ый массив (не должно получится двумерного массива)

/* const arr1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
const arr2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];

const arr3 = arr2.splice(2,3);
const arr4 = arr3.concat(arr1);
console.log(arr4);  */

//Дана строка 'Мама мыла раму' С помощью prompt() получите строку. Поменяйте в строке 'Мама мыла раму' слово раму на полученное слово 

/* const str = 'Мама мыла раму';
const word = prompt('enter a word');
const arr = str.split(' ');
const arr1 = arr.slice(0,2);
const output = arr1.join(' ');

console.log(output + ' ' + word);  */