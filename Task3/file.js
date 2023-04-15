
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
if (err) throw err;
console.log('File created!');
});

const fss = require('fs');

fss.readFile('hello.txt', 'utf8', (err, data) => {
if (err) throw err;
console.log(data);
});