//fs е модул, който предоставя функционалност за работа с файловата система в Node.js. Той позволява четене, писане, създаване и изтриване на файлове и директории.
const fs = require('fs');

//четене на файл - извличаме съдържанието на файла и го записваме в променлива
const text = fs.readFileSync('text.txt', 'utf8');
console.log(text);
console.log(`Брой символи: ${text.length}`);

//писане на файл - създаваме нов файл и записваме съдържание в него
const newText = "This is a new file created by Node.js";
fs.writeFileSync('newFile.txt', newText);
console.log("Файлът newFile.txt е създаден успешно!");

//добавяне на съдържание към съществуващ файл
const additionalText = "\nThis text is added to the existing file.";
fs.appendFileSync('newFile.txt', additionalText);
console.log("Съдържанието е добавено към файла newFile.txt успешно!");

//премахване на файл
fs.unlinkSync('newFile.txt');
console.log("Файлът newFile.txt е премахнат успешно!");