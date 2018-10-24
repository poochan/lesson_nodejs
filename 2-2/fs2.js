// การเขียนโปรแกรม แบบ Event-dirven
var fs = require('fs');
// var data = fs.readFileSync('hello.txt');

fs.readFile('hello.txt', function (err, data) {
    console.log(data.toString());
})

console.log('Do other things');