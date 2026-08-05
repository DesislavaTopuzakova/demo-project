//variables - containers for storing data values
//create 5 variables from different data types
//string - текстов
//number - числов
//boolean - булев тип данни (true/false)
let name = "John"; // string
let age = 30; // number
let isStudent = false; // boolean
let hobbies = ["reading", "gaming", "hiking"]; // array
let address = { street: "123 Main St", city: "Anytown", country: "USA" }; // object

//conditional statements - used to perform different actions based on different conditions
if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

if (name === "John") {
  console.log("Hello, John!");
} else if (name === "Jane") {
  console.log("Hello, Jane!");
} else if (name === "Bob") {
  console.log("Hello, Bob!");
} else {
  console.log("Hello, stranger!");
}

//loops - used to execute a block of code repeatedly
//write a for loop that prints the numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//write a while loop that prints the numbers from 1 to 10
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

//comments - used to explain code and make it more readable