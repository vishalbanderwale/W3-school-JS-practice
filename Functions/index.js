//another way of taking input

// let userName = prompt("enter your name");

// console.log("name:", userName);

/* With functions you can reuse code
You can write code that can be used many times.
You can use the same code with different arguments, to produce different results. */

//function declartion

/*function add(parameters){ //fun defination
    //code to be excecuted //function body
} */

let x = function (a) {
  return a;
};
console.log(x(4)); //calling fun by using variable

/*Functions can also be assigned to variables. 
This is called a function expression.
 The function can be anonymous or named. */

/* The function above is actually an anonymous function (a function without a name).
    Functions stored in variables do not need function names. 
    They are always invoked (called) using the variable name. */

/*Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
Hoisting applies to variable declarations and to function declarations.
Because of this, JavaScript functions can be called before they are declared:
Functions defined using an expression are not hoisted. */

console.log(add(3, 4));
function add(a, b) {
  let res = a + b;
  return res; //if we dont return it will be undefined after returning one value it will stop excution
}

console.log(add(3, 4));
console.log(add(2)); //anything+undefined=NAN(not a number)

(function () {
  console.log("hello world");
})(); // anonymous self-invoking (calling) function
