
let sum = (...values) => {
    return values.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
     );
}

let divition = (x, y) => {
    return x / y;
}

module.exports = { sum: sum, devide: divition, };

