for (let num = 1; num <= 100; num++) {
    text = '';
    if (num % 3 == 0) text += 'Fizz';
    if (num % 5 == 0) text += 'Buzz';
    console.log(text || num)
}