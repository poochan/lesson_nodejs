// closure กับการเขียนโปรแกรม แบบ Event-dirven
// Ex1
// function prefix(pre) {
//     return function fileHendler(err, data) {
//         console.log(pre + " " + data);
//     }    
// }
// var fileHendler  = prefix("Sey:");

// var fs = require('fs');
// fs.readFile('hello.txt', fileHendler);

// Ex2
function prefix(pre) {
    return function fileHendler(err, data) {
        console.log(pre + " " + data);
    }

}
var say = prefix("Sey:");
var shout = prefix("Shout");

var fs = require('fs');
fs.readFile('hello.txt', say);
fs.readFile('hello.txt', shout);