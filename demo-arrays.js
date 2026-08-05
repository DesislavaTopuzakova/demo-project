//създаване на празен масив
let emptyArray = [];

//създаване на масив с елементи
let fruits = ["apple", "banana", "orange"];
let numbers = [34, 12, 84, 31, 50];

//дължина на масив == брой елементи в масива
console.log(fruits.length); // 3
console.log(emptyArray.length); // 0

//достъп до елемент от масив - чрез индекс / позиция
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange
console.log(fruits[3]); // undefined

//push - добавя елемент в края на масива
fruits.push("kiwi");
console.log(fruits); // ["apple", "banana", "orange", "kiwi"]

//pop - премахва последния елемент от масива
fruits.pop();
console.log(fruits); // ["apple", "banana", "orange"]

//shift - премахва първия елемент от масива
fruits.shift();
console.log(fruits); // ["banana", "orange"]

//unshift - добавя елемент в началото на масива
fruits.unshift("grape");
console.log(fruits); // ["grape", "banana", "orange"]

//sort - сортира елементите в масива по азбучен ред / нарастващ ред
//numbers = [34, 12, 84, 31, 50]
numbers.sort();
fruits.sort();
console.log(fruits); // ["banana", "grape", "orange"]
console.log(numbers); // [12, 31, 34, 50, 84]

//reverse - обръща реда на елементите в масива
//fruits = ["banana", "grape", "orange"]
fruits.reverse();
console.log(fruits); // ["orange", "grape", "banana"]

//forEach - извършва дадена функция за всеки елемент от масива
//fruits = ["orange", "grape", "banana"]
fruits.forEach(function (fruit) {
  console.log(fruit);
});