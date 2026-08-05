// Вграденият модул "fs" (File System) дава достъп до четене/писане на файлове в Node.js
const fs = require("fs");

// Четем съдържанието на data.json синхронно (кодът спира и чака, докато файлът се прочете)
// Резултатът е обикновен текстов низ (string), не обект - затова "utf-8" за коректно декодиране на символите
const rawData = fs.readFileSync("./data.json", "utf-8");

// JSON.parse превръща текстовия низ в истински JavaScript обект/масив,
// с който може да се работи (data.users, data.users[0].name и т.н.)
const data = JSON.parse(rawData);

// data.users е масив от обекти (всеки потребител има id, name, email, age, active)
// .map() създава НОВ масив, като изпълнява функцията за всеки елемент
// тук от всеки обект "user" вземаме само полето "name"
const names = data.users.map((user) => user.name);

// Отпечатваме получения масив от имена в конзолата
console.log(names);


// Четем съдържанието на data.csv синхронно (кодът спира и чака, докато файлът се прочете)
const rawCsv = fs.readFileSync("./data.csv", "utf-8");

// Разделяме текста на редове и премахваме празните редове в края на файла
const lines = rawCsv.trim().split("\n");

// Първият ред съдържа заглавията на колоните: id,name,email,age,active
const headers = lines[0].split(",");

// Останалите редове са данните - за всеки ред правим обект { id, name, email, age, active }
const csvUsers = lines.slice(1).map((line) => {
  const values = line.split(",");
  const user = {};
  headers.forEach((header, index) => {
    user[header] = values[index];
  });
  return user;
});

// От всеки потребител вземаме само първото име (първата дума от полето "name")
// и възрастта, превърната в число с Number()
const people = csvUsers.map((user) => ({
  firstName: user.name.split(" ")[0],
  age: Number(user.age),
}));

// Отпечатваме първото име и възрастта на всеки човек
people.forEach((person) => {
  console.log(`${person.firstName} - ${person.age} години`);
});

// Смятаме сумата от всички възрасти с reduce()
const totalAge = people.reduce((sum, person) => sum + person.age, 0);

// Средноаритметичната възраст, закръглена до цяло число с Math.round()
const averageAge = Math.round(totalAge / people.length);

console.log(`\nСредна възраст: ${averageAge} години`);

