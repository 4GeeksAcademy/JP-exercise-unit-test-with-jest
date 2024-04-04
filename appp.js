// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

const fromEuroToDollar = (euro) => {
    return euro * 1.07;
}

const fromDollarToYen = (dollar) => {
    return dollar*(156.5/1.07);
}

const fromYenToPound = (yen) => {
    return yen*(.87/156.5);
}
module.exports = {fromEuroToDollar, fromYenToPound, fromDollarToYen, sum};