// Вграденият модул "fs" (File System) дава достъп до четене/писане на файлове в Node.js
const fs = require("fs");

// Четем съдържанието на data.csv синхронно (кодът спира и чака, докато файлът се прочете)
// Резултатът е обикновен текстов низ (string), затова "utf-8" за коректно декодиране на символите
const rawData = fs.readFileSync("./data.csv", "utf-8");

// Разделяме текста на редове и премахваме празните редове в края на файла
const lines = rawData.trim().split("\n");

// Първият ред съдържа заглавията на колоните: id,name,email,age,active
const headers = lines[0].split(",");

// Останалите редове са данните - за всеки ред правим обект { id, name, email, age, active }
const users = lines.slice(1).map((line) => {
  const values = line.split(",");
  const user = {};
  headers.forEach((header, index) => {
    user[header] = values[index];
  });
  return user;
});

// От всеки потребител вземаме само първото име (първата дума от полето "name")
// и възрастта, превърната в число с Number()
const people = users.map((user) => ({
  firstName: user.name.split(" ")[0],
  age: Number(user.age),
}));

// Отпечатваме първото име и възрастта на всеки човек
people.forEach((person) => {
  console.log(`${person.firstName} - ${person.age} години`);
});

// Смятаме сумата от всички възрасти с reduce()
const totalAge = people.reduce((sum, person) => sum + person.age, 0);

// Средноаритметичната възраст е сумата, разделена на броя на хората
const averageAge = totalAge / people.length;

console.log(`\nСредна възраст: ${averageAge.toFixed(2)} години`);
