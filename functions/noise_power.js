// function sem parametros
const makeNoise = function() {
    console.log('Pling!');
};

makeNoise();

// function com paramentros
const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));