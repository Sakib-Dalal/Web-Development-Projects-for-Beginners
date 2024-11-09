// first initialize npm using this command: npm init
// enter package name 
// give version number
// give description 
// give entry point #enter or index.js
// test command #enter
// git repository #enter
// keywords #enter
// author name
// license #enter
// yes

// install npm packages
// https://www.npmjs.com/
// npm install <package_name>
// example: npm install sillyname #or npm i sillyname

// option - 1
// var generateName = require("sillyname");
// option - 2
// enable echmo script in js
// add this line in package.json after "main": "type": "module",
import generateName from "sillyname";

var sillyName = generateName();
console.log(`random name is: ${sillyName}`);

var i = 1
for (i; i<10; i++) {
    console.log(generateName());
}


// superhero name generator 
// npm install superheroes

import {randomSuperhero} from "superheroes";

var superheroName = randomSuperhero();
console.log("I'm " + superheroName + "!");
