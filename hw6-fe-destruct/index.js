//С помощью деструктуризации запишите в отдельные переменные: 
//1.1 Название города в котором находится авто 
//1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona') 
//1.3 Поле high, объекта price 
//1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида: { city: 12, mix: 10, country: 8 }


const car = {
    model: 'tesla',
    adress: {
        country: {
            city: {
                name: 'Boston',
                street: {
                    name: 'pushkina',
                    number: 2
                }
            }
        },
        region: ['Iowa','Texas','California']
    },
    specs: {
        price: {
            low: 2000,
            mid: 3000,
            high: 5000
        },
        engine: {
            power: 400,
            lowPower: 100
        }
    }
  };
  
  
  //1.1 Название города в котором находится авто 
  const {adress: {country: {city: {name}}}} = car;
  console.log(name)
  
  //1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona') 
  const {adress: {region: [,,,region4 = 'Arizona']}} = car;
  console.log(region4) 
  
  //1.3 Поле high, объекта price 
  const {specs: {price: {high}}} = car;
  console.log(high) 
  
  //1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида: { city: 12, mix: 10, country: 8 }
  const {fuelConsumption = {city: 12, mix: 10, country: 8}} = car;
  console.log(fuelConsumption) 
  
  
  
  //2.1 Напишите программу, которая умножит все ЧИСЛОВЫЕ (и только числовые) значения на 2 и перезапишет каждое свойство объекта (числового типа).
  
  //2.2 Напишите программу, которая посчитает среднее арифметическое всех оценок студента. Если средняя оценка (после умножения) будет больше 5, то поле isOboltus должно стать false.
  
  const student = { math: 5, biology: 3, language: 2, isOboltus: true };
  
  function multiplyByTwo (obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'number' && !isNaN(obj[key])) {
        obj[key] *= 2;
      }
    }
  }
  multiplyByTwo(student); 
  
  function averageGrade (obj) {
    let average;
    let sum = 0;
    let counter = 0;
    for (let key in obj) {
      if (typeof obj[key]=== 'number' && !isNaN(obj[key])) {
        sum +=obj[key];
        counter++;
      }
    }
    average = (sum / counter).toFixed(1);
      if (average > 5) {
        for (let key in obj) {
          if (typeof obj[key] === 'boolean') {
            obj[key] = !obj[key];
          }
      }
    }
    return average;
  }
  
  const average = averageGrade(student);
  console.log(average)
  console.log(student.isOboltus)