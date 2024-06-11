const prompt = require('prompt-sync')()

let num = Number(prompt('Pick a number: '));
if (!Number.isNaN(num)) {
    console.log('Your number is the square root of ' + num * num + '.');
} else {
    console.log('Hey. Why did not you give me a number?');
}