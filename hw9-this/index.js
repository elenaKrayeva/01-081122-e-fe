const persons = [
  {
      name: 'One',
      age: 1,
      sayHello
  },
  {
      name: 'Two',
      age: 2,
      sayHello
  },
  {
      name: 'Three',
      age: 3,
      sayHello
  },
  {
      name: 'Four',
      age: 4,
      sayHello
  }
];


//Каждому объекту из этого массива необходимо добавить метод .sayHello() который выводит сообщение вида "Hello! My name is {NAME}", где NAME - это поле name каждого объекта

function sayHello() {
  console.log(`Hello! My name is ${this.name}`)
}

/* for (let person of persons) {
  person.sayHello()
}  */

//используя setTimeout и .forEach(), вызовите метод .sayHello() у каждого объекта с задержкой в 1 секунду

/*persons.forEach((person, index) => {
  setTimeout(person.sayHello.bind(person), (index + 1) * 1000)
})*/

//используя объект
//заставьте creature воспользоваться методом .sayHello() любого объекта из массива, при этом не добавляя этот метод в creature

/* const creature = { name: 'Ctulhu', eyes: 8 };

sayHello.call(creature);  */

/* напишите функцию которая принимает коллбэк (метод .sayHello() любого объекта из массива) эта функция должна выводить сообщение вида "Ladies and Gentlemen, here is our person: " после чего должна запускать коллбэк (метод .sayHello() любого объекта из массива) пример:
presentation(persons[0].sayHello)  возможно тут при передаче коллбэка что-то надо поменять
 =====>>>>>
"Ladies and Gentlemen, here is our person: "
"Hello! My name is One"  это результат запуска коллбэка persons[0].sayHello

presentation(persons[1].sayHello)  возможно тут при передаче коллбэка что-то надо поменять
 =====>>>>>
"Ladies and Gentlemen, here is our person: "
"Hello! My name is Two"  это результат запуска коллбэка persons[1].sayHello */


/* function presentation(callback) {
  console.log("Ladies and Gentlemen, here is our person: ");
  callback()
}
presentation(persons[0].sayHello.bind(persons[0]))
presentation(persons[1].sayHello.bind(persons[1]))
 */