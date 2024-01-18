"use strict";
// tsc --init to initialize and create a tsconfig file.
// Within the tsconfig we uncommented the rootDir and outDir. 
// Whenever I run the tsc command it will look for TS files in the rootDir and will create an output(index.js) to the ourDir.
// Dist usually stands for distribution
// In order to avoid writing tsc each time we want to compile our files we can write tsc --watch
// This will automatically compile our files whenever we hit save
// We can do the same with node, it will then watch for changes in the index.js file. Write node --watch dist/index.js (in this case)
/*ARRAYS*/
let names = ['Mario', 'Luigi', 'Peach']; //A list of strings
let ages = [25, 28, 24]; //A list of numbers
names.push('Bowser');
ages.push(5);
/*TYPE INTERFERENCE WITH ARRAYS*/
//JS will understand that this is a string array
let fruits = ['apples', 'pears', 'bananas', 'mango'];
fruits.push('peaches');
let things = [1, true, 'hello'];
//Now this can be either one of theese types (number, boolean, string) a "union type"
const t = things[0]; //TS still says it can be any of theese types although we know it is a number
/*OBJECT LITERALS*/
let user = {
    firstName: 'Mario',
    age: 30,
    id: 1
};
//The user is of type object with contants a couple of properties of different types
// The object must also include exaclty the properties assigned in the beginning. We have to stick to the structure.
// We can only change the values but not add a new property.
/*TYPE INTERFERENCE WITH OBJECT LITERALS*/
let person = {
    name: 'luigi',
    score: 35
};
//person.name = true //TS still knows which type it should be based on what was assigned initially
const score = person.score; //Infered and will know that score is of type number.
/*FUNCTIONS*/
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
/*RETURN TYPE INFERENCE*/
function formatGreeting(name, greetings) {
    return `${greetings}, ${name}`;
}
const result = formatGreeting('Mario', 'Hello'); //TS infered what valuetype is beeing return
