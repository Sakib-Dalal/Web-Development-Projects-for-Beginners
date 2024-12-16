var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
var x;
function double(x) {
    return x * 2
}
var newNumbers = numbers.map(double);
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
newNumbers = numbers.filter(function (num) {
    return num > 10
});
console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
newNumbers = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber
});
console.log(newNumbers);

//Find - find the first item that matches from an array.
newNumbers = numbers.find(function (x) {
    return x > 10;
});
console.log(newNumbers);

//FindIndex - find the index of the first item that matches.
newNumbers = numbers.findIndex(function (x) {
    return x > 10;
});
console.log(newNumbers);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
