let sum = (...values) => {
    // console.log(module);
    return values.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
     );

}
let divition = (x, y) => {
    return x / y;
}

module.exports = { sum: sum, devide: divition, };

