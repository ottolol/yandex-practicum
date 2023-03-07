const data = guestsInfo;
/*
В переменной data хранится такой массив:
[
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
]
*/

function calcAvgAge(array) {
  // Напишите код здесь
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    0,
  );
  return sum / array.length;
}