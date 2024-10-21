//single line commment

/* Multiple-line comment :The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page: */

let x = "5" + 2 + 3;
//It will treat the other numbers 2 & 3 as strings
//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
console.log(x);

let y = 2 + 3 + "5";
console.log(y);

/*
Reinitalization:usually means declaring and initializing the variable again, effectively resetting it.
var a; : variable decalartion
var a=10; variable initailization
var a=15; variable reinitalization only can be done with var
let and const cannot be redecalred in same scope
*/

/*
Reassign
let a=10;
a=15; : Reassignment means changing the value of an already declared variable without declaring it again.
*/

//var can be redecalred and reassign

var carName = "volvo";
var carName = "bwm"; //redecalred
carName = "audi"; //reassign
console.log(carName);

//let can be reassign but cannot be redecalred in same scope

let bikeName = "bullet";
//let bikeName="splender" : cannot be redecalred in same scope
bikeName = "activa";

console.log(bikeName);

//const cannot be redecalred and reassign

const cycleName = "hero";
//const cycleName="honda" :cannot be redecalred
//cycleName="ranger"  :cannot be reassign
