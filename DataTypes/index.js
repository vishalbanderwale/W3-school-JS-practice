//Data types:primitve and non primitive

let a = 10; //number data type
let b = "vishal"; //string data type: every individual letter,number,symbol is a character: string is collection of charaters in sequence
let str = " "; //empty string
let str1 = "$"; //symbol string
// we can use '' single quote|| "" double quote for strings
let c = true || false; //boolean data type
let d = null;
console.log(d);
let e; //undefined

//Non-primitive data type
let f = { a: 10, b: 11, name: "vishal", color: "blue" }; //object:organizing data in a structured way.

/*:Object properties are written as name:value pairs, separated by commas.
Together, brand: "Toyota" and color: "red" are called properties.

In short: a property consists of a key (the name) and a value (the data).
a,b,name,color is property
organizing data in a structured way.

You can access object properties using dot notation or bracket notation:
console.log(person.name);      // Outputs: "John"
console.log(person["age"]);    // Outputs: 30
*/

const objVar = "name";
console.log(f.a); //static
console.log(f["color"]); 
console.log(f[objVar]); //dynamic

/*In JavaScript, an array is a special type of object that can hold multiple values in a single variable. 
It is like a list where you can store and organize different elements (such as numbers, strings, or even other arrays) */

let g = [11, "vishal", null]; //array:collection of different elements


//