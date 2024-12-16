var numbers = [3, 56, 2, 48, 5];

// map arrow function
var newNumber = numbers.map((num) => {
    return num * 2
});

// or 
// newNumber = numbers.map(num => num * 2);

console.log(newNumber);

// filter arrow function
newNumber = numbers.filter((num) => {
    return num > 10;
});
console.log(newNumber);

// reduce arrow function
newNumber = numbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
});
console.log(newNumber);

// find arrow function 
newNumber = numbers.find((num) => {
    return num > 10;
});
console.log(newNumber);

// findIndex arrow function 
newNumber = numbers.findIndex((num) => {
    return num > 10;
});
console.log(newNumber);