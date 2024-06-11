const prompt = require('prompt-sync')()

let yourName;
do {
    yourName = prompt('Who are you? ');
} while (!yourName);

console.log(yourName)