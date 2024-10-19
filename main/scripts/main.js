function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function devide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    console.log(operator(num1, num2));
}

calculator(4, 5, add);

// Object
var houseKeeper = {
    yearOfExperience: 12,
    name: "Joe",
    report: ["Bathroom", "Bedroom", "Kitchen"]
}

// Constructor function
function bellBoy(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var bellBoy1 = new bellBoy("Joe", 23, "M");
bellBoy1;

// Methods

function bellBoy(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    //Method
    this.clean = function() {
        alert("Cleaning in progress...");
    }
}

var bellBoy1 = new bellBoy("joy", 23, "M");
bellBoy1.clean();