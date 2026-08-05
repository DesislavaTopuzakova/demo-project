let name = "John"; 

printGreeting(name);
login(name);
printGreeting(name);
login(name);
printGreeting(name);

let number = sum(8, 12);
console.log("The sum of 8 and 12 is: " + number);


function login(name) {
    if (name === "John") {
        console.log("Welcome back, John!");
    } else {
        console.log("Hello, stranger!");
    }
}

//create a function that takes name and printing a greeting message
function printGreeting(name) {
  console.log("Hello, " + name);
}

//create function that takes two numbers and returns their sum
function sum(a, b) {
  return a + b;
}

module.exports = { sum };
