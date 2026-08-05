let name = "Desislava";
let age = 28;

console.log("My name is " + name + " and I am " + age + " years old.");

//import the sum function from demo.js
const { sum } = require("./demo");

let number = sum(8, 12);
console.log("The sum of 8 and 12 is: " + number);